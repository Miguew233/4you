<template>
  <div class="login-page">
    <div class="container">
      <div class="logo">4You Viagens</div>

      <form @submit.prevent="handleLogin" id="loginForm">
        <div class="form-group">
          <label for="email">Email ou Usuário</label>
          <div class="input-group">
            <i class="fas fa-user"></i>
            <input
              type="text"
              id="email"
              v-model="form.email"
              name="email"
              required
              aria-describedby="emailHelp"
            >
          </div>
        </div>

        <div class="form-group">
          <label for="senha">Senha</label>
          <div class="input-group">
            <i class="fas fa-lock"></i>
            <input
              type="password"
              id="senha"
              v-model="form.senha"
              name="senha"
              required
              aria-describedby="senhaHelp"
            >
          </div>
        </div>

        <button type="submit" :class="{ loading: isLoading }" id="loginBtn">
          {{ isLoading ? 'Entrando...' : 'Entrar' }}
        </button>
      </form>

      <div class="links">
        <a href="#" aria-label="Esqueceu a senha?">Esqueceu a senha?</a>
        <span>|</span>
        <router-link to="/register" aria-label="Cadastre-se">Cadastre-se</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        email: '',
        senha: ''
      },
      isLoading: false
    }
  },
  methods: {
    handleLogin() {
      this.isLoading = true;
      // Simulação de login (substitua por lógica real)
      setTimeout(() => {
        this.isLoading = false;
        alert('Login simulado! Redirecionar para dashboard.');
        // Exemplo: this.$router.push('/dashboard');
      }, 2000);
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.login-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFwZWwlMjBkZSUyMHBhcmVkZSUyMHZpYWdlbXxlbnwwfHwwfHx8MA%3D%3D) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.login-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 99, 45, 0.1); /* Overlay sutil para melhor legibilidade */
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
  backdrop-filter: blur(10px); /* Efeito de vidro para modernidade */
}

.logo {
  text-align: center;
  margin-bottom: 40px;
  color: #00632d;
  font-size: 32px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  padding: 15px 15px 15px 45px; /* Espaço para ícones */
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

button {
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

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 178, 80, 0.4);
}

button:active {
  transform: translateY(0);
}

button.loading {
  pointer-events: none;
}

button.loading::after {
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
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.links {
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
}

.links a {
  color: #00632d;
  text-decoration: none;
  margin: 0 10px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.links a:hover {
  color: #00b250;
  text-decoration: underline;
}

.footer {
  text-align: center;
  margin-top: 40px;
  font-size: 12px;
  color: #666;
}

/* Responsividade */
@media (max-width: 768px) {
  .container {
    max-width: 90%;
    padding: 30px 20px;
  }
  .logo {
    font-size: 28px;
  }
  button {
    font-size: 16px;
  }
}
</style>
