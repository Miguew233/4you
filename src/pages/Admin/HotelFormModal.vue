<template>
  <div class="modal-overlay">
    <div class="modal-card">
      <h3>🏨 Cadastrar Novo Hotel</h3>

      <form @submit.prevent="submitForm">

        <div class="form-group">
          <label>Nome do Hotel</label>
          <input v-model="form.name" type="text" placeholder="Ex: Hotel Atlântico" required />
        </div>

        <div class="row">
          <div class="form-group">
            <label>Localização (Cidade, UF)</label>
            <input v-model="form.location" type="text" placeholder="Ex: Rio de Janeiro, RJ" required />
          </div>
          <div class="form-group">
            <label>Preço da Diária (R$)</label>
            <input v-model.number="form.price" type="number" placeholder="0.00" step="0.01" required />
          </div>
        </div>

        <div class="row">
          <div class="form-group">
            <label>Dias (Pacote Padrão)</label>
            <input v-model.number="form.days" type="number" placeholder="Ex: 5" required />
          </div>
          <div class="form-group">
            <label>Hóspedes</label>
            <input v-model.number="form.guests" type="number" placeholder="Ex: 2" required />
          </div>
        </div>

        <div class="form-group">
          <label>URL da Foto</label>
          <input v-model="form.image" type="url" placeholder="https://..." required />
          <small>Cole um link de imagem (ex: Unsplash ou Imgur)</small>
        </div>

        <div class="checkbox-group">
          <label>
            <input type="checkbox" v-model="form.hasBreakfast"> ☕ Café da manhã
          </label>
          <label>
            <input type="checkbox" v-model="form.hasWifi"> 📶 Wi-Fi Grátis
          </label>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn-cancel" @click="$emit('close')">Cancelar</button>
          <button type="submit" class="btn-save">Salvar Hotel</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTravelStore } from '@/stores/travelStore';

// Definir eventos que esse componente emite
const emit = defineEmits(['close']);

const store = useTravelStore();

// Estado do formulário
const form = ref({
  name: '',
  location: '',
  price: '',
  days: 5,
  guests: 2,
  image: '',
  hasBreakfast: true,
  hasWifi: true
});

const submitForm = () => {
  // 1. Chama a action da Store para adicionar
  store.addHotel({ ...form.value });

  // 2. Limpa o form (opcional)
  form.value = { name: '', location: '', price: '', image: '', hasBreakfast: false, hasWifi: false };

  // 3. Avisa o componente pai para fechar o modal
  emit('close');

  alert('Hotel cadastrado com sucesso!');
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* Fundo escuro transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  gap: 15px;
}

.row .form-group {
  flex: 1;
}

label {
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

input[type="text"],
input[type="number"],
input[type="url"] {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.checkbox-group {
  display: flex;
  gap: 20px;
  margin: 15px 0;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 6px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.btn-cancel {
  background: #ccc;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.btn-save {
  background: #009688;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.btn-save:hover {
  background: #00796b;
}
</style>
