<template>
  <div class="user-profile">
    <div class="profile-container">
      <div class="profile-header">
        <img src="https://via.placeholder.com/150" alt="User Avatar" class="avatar">
        <div class="user-info">
          <h1>{{ user.name }}</h1>
          <p class="email">{{ user.email }}</p>
        </div>
      </div>

      <div class="profile-details">
        <div class="detail-item">
          <strong>Usuario:</strong>
          <span>{{ user.username }}</span>
        </div>
        <div class="detail-item">
          <strong>Teléfono:</strong>
          <span>{{ user.phone }}</span>
        </div>
        <div class="detail-item">
          <strong>Ciudad:</strong>
          <span>{{ user.city }}</span>
        </div>
        <div class="detail-item">
          <strong>País:</strong>
          <span>{{ user.country }}</span>
        </div>
      </div>

      <button class="btn-edit">Editar Perfil</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      user: {
        name: 'Juan Pérez',
        email: 'juan@example.com',
        username: 'juanperez',
        phone: '+34 123 456 789',
        city: 'Madrid',
        country: 'España'
      }
    }
  }
}
</script>

<style scoped>
.user-profile {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.profile-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.profile-header {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.user-info h1 {
  margin: 0;
  font-size: 24px;
}

.email {
  color: #666;
  margin: 5px 0 0 0;
}

.profile-details {
  margin-bottom: 20px;
}

.detail-item {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.btn-edit {
  background: #0066cc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-edit:hover {
  background: #0052a3;
}
</style>
