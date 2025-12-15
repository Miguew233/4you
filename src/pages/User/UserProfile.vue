<template>
  <div class="user-profile">

    <div class="profile-container" v-if="store.currentUser">
      <div class="profile-header">
        <div class="avatar-wrapper">
          <img :src="store.userAvatar || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'" class="avatar">
        </div>
        <div class="user-info">
          <h1>{{ store.currentUser.nome }}</h1>
          <p class="email">{{ store.currentUser.email }}</p>
          <p class="status-badge">Viajante Vip ✈️</p>
        </div>
      </div>

      <div class="profile-details">
        <div class="detail-item">
          <strong>CPF:</strong>
          <span>{{ store.currentUser.cpf || 'Não informado' }}</span>
        </div>
        <div class="detail-item">
          <strong>Telefone:</strong>
          <span>{{ store.currentUser.telefone || 'Não informado' }}</span>
        </div>
        <div class="detail-item">
          <strong>Endereço:</strong>
          <span>{{ store.currentUser.endereco || 'Não informado' }}</span>
        </div>
      </div>

      <button class="btn-edit" @click="showModal = true">✏️ Editar Perfil</button>
    </div>

    <div class="modal-overlay" v-if="showModal" @click.self="showModal = false">
      <div class="modal-content">
        <h3>Editar Perfil</h3>

        <div class="photo-upload-section">
          <img :src="previewImage || store.userAvatar || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'"
            class="avatar-preview">
          <label for="file-upload" class="btn-upload">📷 Alterar Foto</label>
          <input id="file-upload" type="file" @change="handleFileUpload" accept="image/*" style="display:none" />
        </div>

        <form @submit.prevent="saveProfile">
          <div class="form-group">
            <label>Nome Completo</label>
            <input v-model="editForm.nome" type="text" required>
          </div>

          <div class="form-group">
            <label>CPF</label>
            <input v-model="editForm.cpf" type="text" v-mask="'###.###.###-##'" placeholder="000.000.000-00">
          </div>

          <div class="form-group">
            <label>Telefone</label>
            <input v-model="editForm.telefone" type="text">
          </div>
          <div class="form-group">
            <label>Endereço</label>
            <input v-model="editForm.endereco" type="text">
          </div>

          <div class="modal-actions">
            <button type="button" class="btn-cancel" @click="showModal = false">Cancelar</button>
            <button type="submit" class="btn-save">Salvar Alterações</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useTravelStore } from '@/stores/travelStore';

const store = useTravelStore();
const showModal = ref(false);
const previewImage = ref(null);

const editForm = ref({
  nome: '',
  cpf: '', // Adicionado ao estado do form
  telefone: '',
  endereco: ''
});

onMounted(() => {
  if (store.currentUser) {
    editForm.value.nome = store.currentUser.nome;
    editForm.value.cpf = store.currentUser.cpf || ''; // Carrega o CPF atual
    editForm.value.telefone = store.currentUser.telefone;
    editForm.value.endereco = store.currentUser.endereco;
  }
});

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const saveProfile = () => {
  if (previewImage.value) {
    store.updateAvatar(previewImage.value);
  }

  // Atualiza o objeto do usuário com o CPF novo
  const updatedUser = {
    ...store.currentUser,
    nome: editForm.value.nome,
    cpf: editForm.value.cpf, // Salva o CPF
    telefone: editForm.value.telefone,
    endereco: editForm.value.endereco
  };

  store.login(updatedUser);

  alert('Perfil atualizado com sucesso! ✨');
  showModal.value = false;
};
</script>

<style scoped>
/* (Use o mesmo CSS do passo anterior, não precisa mudar nada no estilo) */
.user-profile {
  padding: 40px 20px;
  min-height: 80vh;
  background: #f4f7f6;
  display: flex;
  justify-content: center;
}

.profile-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 40px;
  width: 100%;
  max-width: 600px;
  height: fit-content;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #00b250;
}

.user-info h1 {
  margin: 0;
  font-size: 1.8rem;
  color: #333;
}

.email {
  color: #777;
  margin: 5px 0;
}

.status-badge {
  display: inline-block;
  background: #e0f2f1;
  color: #00695c;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 5px;
}

.profile-details {
  margin-bottom: 30px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 20px 0;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px dashed #f0f0f0;
}

.detail-item:last-child {
  border-bottom: none;
}

.detail-item strong {
  color: #555;
}

.detail-item span {
  color: #333;
  font-weight: 500;
}

.btn-edit {
  width: 100%;
  background: #00632d;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.btn-edit:hover {
  background: #004d23;
  transform: translateY(-2px);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 15px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.photo-upload-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.avatar-preview {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  border: 2px solid #ddd;
}

.btn-upload {
  font-size: 0.9rem;
  color: #0066cc;
  cursor: pointer;
  font-weight: 600;
}

.btn-upload:hover {
  text-decoration: underline;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #555;
  font-size: 0.9rem;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.modal-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn-save {
  flex: 2;
  background: #00b250;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.btn-cancel {
  flex: 1;
  background: #eee;
  color: #555;
  border: none;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
}

.btn-save:hover {
  background: #008e40;
}

.btn-cancel:hover {
  background: #ddd;
}
</style>
