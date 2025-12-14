<template>
  <div class="manage-hotels">

    <div class="page-header">
      <h2>🏨 Gerenciar Hotéis</h2>
      <button class="btn-add" @click="showModal = true">
        + Novo Hotel
      </button>
    </div>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome do Hotel</th>
            <th>Localização</th>
            <th>Preço (R$)</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hotel in store.hoteis" :key="hotel.id">
            <td><img :src="hotel.image" class="thumb-img" /></td>
            <td class="fw-bold">{{ hotel.name }}</td>
            <td>{{ hotel.location }}</td>
            <td class="price">R$ {{ hotel.price.toLocaleString('pt-BR') }}</td>
            <td>
              <div class="actions">
                <button class="btn-edit">✏️</button>
                <button class="btn-delete" @click="deleteHotel(hotel.id)">🗑️</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="store.hoteis.length === 0" class="empty-state">
        Nenhum hotel cadastrado.
      </div>
    </div>

    <HotelFormModal v-if="showModal" @close="showModal = false" />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTravelStore } from '@/stores/travelStore';
// Importe o componente do Modal
import HotelFormModal from './HotelFormModal.vue';

const store = useTravelStore();

// Controle de exibição do modal
const showModal = ref(false);

const deleteHotel = (id) => {
  if (confirm('Tem certeza que deseja excluir este hotel?')) {
    const index = store.hoteis.findIndex(h => h.id === id);
    if (index !== -1) store.hoteis.splice(index, 1);
  }
};
</script>

<style scoped>
/* (Mantenha os mesmos estilos que você já tinha...) */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.btn-add {
  background-color: #00c3ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.btn-add:hover {
  background-color: #0099cc;
}

.table-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-color: #f8f9fa;
  text-align: left;
  padding: 15px;
  color: #666;
  font-weight: 600;
  border-bottom: 2px solid #eee;
}

td {
  padding: 15px;
  border-bottom: 1px solid #eee;
  vertical-align: middle;
}

.thumb-img {
  width: 60px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
}

.fw-bold {
  font-weight: bold;
  color: #333;
}

.price {
  color: #009688;
  font-weight: bold;
}

.actions {
  display: flex;
  gap: 10px;
}

.btn-edit,
.btn-delete {
  background: #f0f2f5;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-delete:hover {
  background: #fed7d7;
  color: #e53e3e;
}

.empty-state {
  padding: 40px;
  text-align: center;
  color: #888;
}
</style>
