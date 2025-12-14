<template>
  <div class="modal-overlay">
    <div class="modal-card">
      <h3>✈️ Cadastrar Nova Passagem</h3>

      <form @submit.prevent="submitForm">

        <div class="form-group">
          <label>Cidade (Nome Principal)</label>
          <input v-model="form.name" type="text" placeholder="Ex: Paris" required />
        </div>

        <div class="row">
          <div class="form-group">
            <label>Origem (De onde sai?)</label>
            <input v-model="form.location" type="text" placeholder="Ex: Saindo de SP" required />
          </div>
          <div class="form-group">
            <label>Texto do Desconto</label>
            <input v-model="form.discount" type="text" placeholder="Ex: 20% OFF" />
          </div>
        </div>

        <div class="row">
          <div class="form-group">
            <label>Preço Atual (R$)</label>
            <input v-model.number="form.price" type="number" step="0.01" required />
          </div>
          <div class="form-group">
            <label>Preço Antigo (R$) (Opcional)</label>
            <input v-model.number="form.oldPrice" type="number" step="0.01" placeholder="Para riscar" />
          </div>
        </div>

        <div class="form-group">
          <label>Imagem do Destino</label>
          <input v-model="form.image" type="url" placeholder="https://..." required />
        </div>

        <div class="modal-actions">
          <button type="button" class="btn-cancel" @click="$emit('close')">Cancelar</button>
          <button type="submit" class="btn-save">Salvar Voo</button>
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
  name: '',
  location: '', // Usamos 'location' para guardar o texto "Saindo de..."
  price: '',
  oldPrice: '',
  discount: '',
  image: ''
});

const submitForm = () => {
  store.addPassagem({ ...form.value });

  // Limpa e fecha
  form.value = { name: '', location: '', price: '', oldPrice: '', discount: '', image: '' };
  emit('close');
  alert('Passagem cadastrada!');
};
</script>

<style scoped>
/* Reutilizando estilos do modal de hotel */
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

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
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
