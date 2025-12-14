<template>
  <div class="admin-layout">

    <aside class="sidebar">
      <div class="admin-logo">
        <span>⚙️</span> Admin Painel
      </div>

      <nav class="admin-nav">
        <router-link to="/admin" class="nav-item" exact-active-class="active">
          📊 Dashboard
        </router-link>
        <router-link to="/admin/hoteis" class="nav-item" active-class="active">
          🏨 Gerenciar Hotéis
        </router-link>
        <router-link to="/admin/voos" class="nav-item" active-class="active">
          ✈️ Gerenciar Voos
        </router-link>
        <router-link to="/admin/pacotes" class="nav-item" active-class="active">
          📦 Criar Pacotes
        </router-link>
      </nav>

      <div class="logout-section">
        <router-link to="/" class="btn-home">⬅ Voltar ao Site</router-link>
      </div>
    </aside>

    <main class="main-content">
      <header class="top-bar">
        <h3>Bem-vindo, Administrador</h3>
        <div class="user-profile">👤 Admin</div>
      </header>

      <div class="content-area">
        <router-view></router-view>
      </div>
    </main>

  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  background-color: #f0f2f5;
}

/* Sidebar */
.sidebar {
  width: 260px;
  background-color: #1a202c;
  color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  /* Fixa na esquerda */
  height: 100%;
}

.admin-logo {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 1px solid #2d3748;
  gap: 10px;
}

.admin-nav {
  padding: 20px 0;
  flex: 1;
}

.nav-item {
  display: block;
  padding: 15px 25px;
  color: #a0aec0;
  text-decoration: none;
  transition: 0.3s;
  border-left: 4px solid transparent;
}

.nav-item:hover {
  background-color: #2d3748;
  color: white;
}

.nav-item.active {
  background-color: #2d3748;
  color: #00c3ff;
  border-left-color: #00c3ff;
}

.logout-section {
  padding: 20px;
  border-top: 1px solid #2d3748;
}

.btn-home {
  display: block;
  text-align: center;
  background-color: #e53e3e;
  color: white;
  padding: 10px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
}

/* Conteúdo */
.main-content {
  margin-left: 260px;
  /* Compensa a largura da sidebar fixa */
  flex: 1;
  display: flex;
  flex-direction: column;
}

.top-bar {
  height: 70px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.content-area {
  padding: 30px;
}
</style>
