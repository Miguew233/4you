<template>
  <div class="modal-overlay">
    <div class="modal-card">
      <h3>📦 Montar Novo Pacote</h3>

      <form @submit.prevent="submitForm">

        <div class="form-group">
          <label>Título do Pacote</label>
          <input v-model="form.title" type="text" placeholder="Ex: Feriadão em Salvador" required />
        </div>

        <div class="row">
          <div class="form-group">
            <label>Preço Total (R$)</label>
            <input v-model.number="form.price" type="number" step="0.01" required />
          </div>
          <div class="form-group">
            <label>Imagem de Capa</label>
            <input v-model="form.image" type="url" placeholder="https://..." required />
          </div>
        </div>

        <div class="row">
          <div class="form-group">
            <label>Dias</label>
            <input v-model.number="form.days" type="number" required />
          </div>
          <div class="form-group">
            <label>Pessoas</label>
            <input v-model.number="form.persons" type="number" required />
          </div>
        </div>

        <hr class="divider" />

        <div class="form-group">
          <label>✈️ Escolha o Voo</label>
          <select v-model="form.flightId" required>
            <option value="" disabled>Selecione um voo...</option>
            <option v-for="voo in store.passagens" :key="voo.id" :value="voo.id">
              {{ voo.name }} - {{ voo.location }} (R$ {{ voo.price }})
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>🏨 Escolha o Hotel</label>
          <select v-model="form.hotelId" required>
            <option value="" disabled>Selecione um hotel...</option>
            <option v-for="hotel in store.hoteis" :key="hotel.id" :value="hotel.id">
              {{ hotel.name }} - {{ hotel.location }} (R$ {{ hotel.price }})
            </option>
          </select>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn-cancel" @click="$emit('close')">Cancelar</button>
          <button type="submit" class="btn-save">Criar Pacote</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTravelStore } from '@/stores/travelStore';

const emit = defineEmits(['close']);
const store = useTravelStore();

const form = ref({
  title: '',
  price: '',
  image: '',
  days: 5,
  persons: 2,
  flightId: '', // Vai guardar o ID do voo selecionado
  hotelId: ''   // Vai guardar o ID do hotel selecionado
});

const submitForm = () => {
  store.addPacote({ ...form.value });
  emit('close');
  alert('Pacote criado com sucesso!');
};
</script>

<style scoped>
/* Reutilizando estilos base */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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
  text-align: center;
  color: #333;
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

input,
select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  background: white;
}

.divider {
  border: 0;
  border-top: 1px solid #eee;
  margin: 15px 0;
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
