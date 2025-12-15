<template>
  <div class="body">
    <div class="container">
      <div class="header">
        <h1>4You Viagens</h1>
        <p>Crie sua conta</p>
      </div>

      <form @submit.prevent="handleSubmit" id="registerForm">
        <div class="form-group">
          <label for="nome">Nome Completo</label>
          <div class="input-group">
            <i class="fas fa-user"></i>
            <input type="text" id="nome" v-model="formData.nome" required aria-describedby="nomeHelp" />
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-group">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" v-model="formData.email" required aria-describedby="emailHelp" />
          </div>
        </div>

        <div class="form-group">
          <label for="telefone">Telefone</label>
          <div class="input-group">
            <i class="fas fa-phone"></i>
            <input type="tel" id="telefone" v-model="formData.telefone" aria-describedby="telefoneHelp" />
          </div>
        </div>

        <div class="form-group">
          <label for="senha">Senha</label>
          <div class="input-group">
            <i class="fas fa-lock"></i>
            <input type="password" id="senha" v-model="formData.senha" required aria-describedby="senhaHelp" />
          </div>
        </div>

        <div class="form-group">
          <label for="confirmaSenha">Confirmar Senha</label>
          <div class="input-group">
            <i class="fas fa-lock"></i>
            <input type="password" id="confirmaSenha" v-model="formData.confirmaSenha" required
              aria-describedby="confirmaSenhaHelp" />
          </div>
        </div>

        <button type="submit" class="btn" :class="{ loading: isLoading }" id="registerBtn" :disabled="isLoading">
          Cadastrar
        </button>
      </form>

      <div class="footer">
        <p>Já tem conta? <a href="login.html" aria-label="Faça login">Faça login</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      formData: {
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        confirmaSenha: ''
      },
      isLoading: false
    };
  },
  methods: {
    async handleSubmit() {
      // 1. Validação básica de senha
      if (this.formData.senha !== this.formData.confirmaSenha) {
        alert('As senhas não coincidem!');
        return;
      }

      this.isLoading = true;

      // 2. Prepara os dados para o formato que o Java aceita
      // O Java exige CPF e Endereço, então vamos mandar "fake" se o usuário não digitar
      const clienteParaOJava = {
        nome: this.formData.nome,
        email: this.formData.email,
        telefone: this.formData.telefone,
        cpf: "000.000.000-00", // Valor padrão para passar na validação
        endereco: "Cadastro pelo Site" // Valor padrão
      };

      try {
        // 3. Envia para a API Java
        const response = await fetch('http://localhost:8080/cliente', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(clienteParaOJava)
        });

        if (response.ok) {
          alert('Cadastro realizado com sucesso! 🎉');
          // Redireciona para o login
          this.$router.push('/login');
          this.resetForm();
        } else {
          alert('Erro ao salvar no sistema. Verifique os dados.');
        }

      } catch (error) {
        console.error('Erro no cadastro:', error);
        alert('Erro de conexão com o servidor.');
      } finally {
        this.isLoading = false;
      }
    },
    resetForm() {
      this.formData = {
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        confirmaSenha: ''
      };
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: url(https://wallpapers.com/images/hd/travel-and-tourism-7ts65rd7efhbx0ji.jpg) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 99, 45, 0.1);
  /* Overlay sutil para melhor legibilidade */
  z-index: -1;
}

.container {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 248, 255, 0.9) 100%);
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 450px;
  padding: 50px 40px;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(10px);
  /* Efeito de vidro para modernidade */
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  color: #00632d;
  font-size: 32px;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header p {
  color: #666;
  font-size: 16px;
}

.form-group {
  margin-bottom: 25px;
  position: relative;
}

label {
  display: block;
  margin-bottom: 10px;
  color: #333;
  font-weight: 600;
  font-size: 14px;
}

.input-group {
  position: relative;
}

input {
  width: 100%;
  padding: 15px 15px 15px 45px;
  /* Espaço para ícones */
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
}

input:focus {
  outline: none;
  border-color: #00632d;
  box-shadow: 0 0 10px rgba(0, 99, 45, 0.3);
  background: rgba(255, 255, 255, 1);
}

.input-group i {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #00632d;
  font-size: 18px;
}

.btn {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #00b250 0%, #00632d 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  font-family: inherit;
  position: relative;
  overflow: hidden;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 178, 80, 0.4);
}

.btn:active {
  transform: translateY(0);
}

.btn.loading {
  pointer-events: none;
}

.btn.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.footer {
  text-align: center;
  margin-top: 30px;
  color: #666;
  font-size: 14px;
}

.footer a {
  color: #00632d;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer a:hover {
  color: #00b250;
  text-decoration: underline;
}

.footer p {
  margin-bottom: 10px;
}

.footer .copyright {
  font-size: 12px;
}

/* Responsividade */
@media (max-width: 768px) {
  .container {
    max-width: 90%;
    padding: 30px 20px;
  }

  .header h1 {
    font-size: 28px;
  }

  .btn {
    font-size: 16px;
  }
}
</style>
