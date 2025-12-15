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

        <li class="nav-item" v-if="!store.currentUser">
          <router-link to="/login" class="nav-link">
            <img src="../../icons/Login.png" class="icon" /> Login
          </router-link>
        </li>
        <li class="nav-item" v-if="!store.currentUser">
          <router-link to="/register" class="btn-registrar">Registrar</router-link>
        </li>

        <li class="nav-item user-logged" v-else @click="goToProfile">
          <div class="avatar-circle">
            <img :src="store.userAvatar || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'" alt="Perfil" />
          </div>
          <span class="user-name">Olá, {{ primeiroNome }}</span>

          <button class="btn-logout" @click.stop="handleLogout" title="Sair">
            Logout
          </button>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTravelStore } from '@/stores/travelStore'; // Importe a Store

const route = useRoute();
const router = useRouter();
const store = useTravelStore();

const isHome = computed(() => route.path === '/');

// Pega só o primeiro nome para não ocupar muito espaço
const primeiroNome = computed(() => {
  return store.currentUser?.nome?.split(' ')[0] || 'Viajante';
});

const goToProfile = () => {
  router.push('/usuario/viagens'); // Ajuste para sua rota de perfil
};

const handleLogout = () => {
  if (confirm("Deseja realmente sair?")) {
    store.logout();
    router.push('/');
  }
};
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

/* --- NOVOS ESTILOS DE USUÁRIO --- */
.user-logged {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.15);
  padding: 5px 15px 5px 5px;
  border-radius: 30px;
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-logged:hover {
  background: rgba(255, 255, 255, 0.25);
}

.avatar-circle {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid white;
  background: #eee;
}

.avatar-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-name {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

.btn-logout {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  margin-left: 5px;
  opacity: 0.7;
  transition: 0.3s;
  color: red;
}

.btn-logout:hover {
  opacity: 1;
  transform: scale(1.1);
}

/* Mobile */
@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    gap: 15px;
  }

  .nav-menu {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 10px;
    justify-content: flex-start;
  }

  .avatar-circle {
    width: 46px;
    height: 35px;
  }
}
</style>
