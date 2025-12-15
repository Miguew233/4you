<template>
  <div class="user-layout">

    <aside class="user-sidebar">
      <div class="profile-summary">
        <img :src="store.userAvatar || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'" class="avatar" />
        <h4>{{ store.currentUser?.nome }}</h4>
        <p v-if="store.currentUser?.joined">
          Membro desde {{ new Date(store.currentUser.joined).getFullYear() }}
        </p>
        <p v-else>Bem-vindo!</p>
      </div>

      <nav class="user-nav">
        <router-link to="/usuario" exact-active-class="active">
          👤 Meu Perfil
        </router-link>
        <router-link to="/usuario/viagens" active-class="active">
          🧳 Minhas Viagens
        </router-link>
        <router-link to="/" class="back-link">
          ⬅ Voltar para Home
        </router-link>
      </nav>
    </aside>

    <main class="user-content">
      <router-view></router-view>
    </main>

  </div>
</template>

<script setup>
import { useTravelStore } from '@/stores/travelStore';
const store = useTravelStore();
</script>

<style scoped>
/* (Mantenha o CSS que você já tinha, está ótimo) */
.user-layout {
  display: flex;
  min-height: 100vh;
  background: #f8f9fa;
  font-family: 'Montserrat', sans-serif;
}

.user-sidebar {
  width: 280px;
  background: white;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  padding: 30px;
}

.profile-summary {
  text-align: center;
  margin-bottom: 40px;
  margin: 0 auto 30px auto;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 0 10px 55px;
  border: 3px solid #00c3ff;
}

.profile-summary h4 {
  margin: 0;
  color: #333;
}

.profile-summary p {
  font-size: 0.8rem;
  color: #888;
}

.user-nav a {
  display: block;
  padding: 12px 15px;
  color: #555;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 5px;
  font-weight: 500;
  transition: 0.2s;
}

.user-nav a:hover {
  background: #f0f2f5;
}

.user-nav a.active {
  background: #e3f2fd;
  color: #1e88e5;
}

.back-link {
  margin-top: auto;
  color: #d32f2f !important;
}

.user-content {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .user-layout {
    flex-direction: column;
  }

  .user-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #eee;
    padding: 20px;
  }
}
</style>
