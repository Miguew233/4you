<template>
    <nav class="navbar">
      <div class="navbar-container">
  
        <a href="/pacotes" class="navbar-logo">4You Viagens</a>
  
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="/pacotes" class="nav-link">
              <img src="../../icons/MaletaPequena.png" class="icon" /> Pacotes
            </a>
          </li>
  
          <li class="nav-item">
            <a href="/passagens" class="nav-link">
              <img src="../../icons/Aviao.png" class="icon" /> Passagens
            </a>
          </li>
  
          <li class="nav-item">
            <a href="/hoteis" class="nav-link">
              <img src="../../icons/Cama.png" class="icon" /> Hotéis
            </a>
          </li>
  
          <li class="nav-item">
            <a href="/login" class="nav-link">
              <img src="../../icons/Login.png" class="icon" /> Login
            </a>
          </li>
  
          <li class="nav-item">
            <a href="/registrar" class="btn-registrar">Registrar</a>
          </li>
        </ul>
  
      </div>
    </nav>
  </template>
  

<script>
export default {
    name: 'Header',
    methods: {
        handleClick() {
            this.$router.push('/pacotes');
        }
    }
}
</script>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  background: transparent;
  padding: 20px 40px;

  font-family: "Montserrat", sans-serif;
}
.navbar-container {
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-logo {
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
}
.nav-menu {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
}
.nav-item {
  display: flex;
  align-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;

  color: white;
  font-weight: 500;
  text-decoration: none;

  transition: 0.3s ease;
}

/* ÍCONES UNIFORMES E ALINHADOS */
.icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: brightness(100%); /* mantém brancos */
}

.nav-link:hover {
  color: #00c3ff;
}

.btn-registrar {
  background-color: #1e90ff;
  padding: 8px 16px;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}
.btn-registrar:hover {
  background-color: #0b70d3;
}

</style>