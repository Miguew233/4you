<template>
  <nav class="navbar" :class="{ 'dark-header': !isHome }">
    <div class="navbar-container">

      <router-link to="/" class="navbar-logo">4You Viagens</router-link>

      <ul class="nav-menu">
        <li class="nav-item">
          <router-link to="/pacotes" class="nav-link">
            <img src="../../icons/MaletaPequena.png" class="icon" /> Pacotes
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/passagens" class="nav-link">
            <img src="../../icons/Aviao.png" class="icon" /> Passagens
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/hoteis" class="nav-link">
            <img src="../../icons/Cama.png" class="icon" /> Hotéis
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/sobre" class="nav-link">
             Sobre Nós
          </router-link>
        </li>

        <li class="nav-item">
          <a href="/login" class="nav-link">
            <img src="../../icons/Login.png" class="icon" /> Login
          </a>
        </li>

        <li class="nav-item">
          <a href="/register" class="btn-registrar">Registrar</a>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Computada que retorna TRUE apenas se estivermos na página inicial
const isHome = computed(() => route.path === '/');
</script>

<style scoped>
/* --- Estilo Padrão (Transparente / Home) --- */
.navbar {
  position: absolute;
  /* Fica por cima da imagem Hero */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: transparent;
  padding: 20px 40px;
  font-family: "Montserrat", sans-serif;
  transition: background-color 0.3s ease;
  /* Suaviza a troca de cor */
}

/* --- Estilo Escuro (Outras Páginas) --- */
.navbar.dark-header {
  background-color: #222;
  /* Fundo escuro */
  position: relative;
  /* Deixa de flutuar e empurra o conteúdo para baixo */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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

/* Ícone */
.icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  /* Garante que fiquem brancos */
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

@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    /* Logo em cima, menu embaixo */
    gap: 15px;
  }

  .nav-menu {
    width: 100%;
    overflow-x: auto;

    /* Permite rolar para o lado se não couber */
    padding-bottom: 10px;
    /* Espaço para a barra de rolagem */
    justify-content: flex-start;
    /* Alinha no começo */
  }

  .nav-item {
    flex-shrink: 0;
    /* Impede que os itens esmaguem */
  }

  /* Esconde o texto e deixa só os ícones se quiser economizar espaço */
  /* .nav-link span { display: none; } */
}
</style>
