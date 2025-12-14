<template>
  <div class="manage-flights">

    <div class="page-header">
      <h2>✈️ Gerenciar Voos</h2>
      <button class="btn-add" @click="showModal = true">
        + Nova Passagem
      </button>
    </div>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Destino</th>
            <th>Origem / Detalhe</th>
            <th>Preço (R$)</th>
            <th>Desconto</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="voo in store.passagens" :key="voo.id">
            <td class="fw-bold">
              <img :src="voo.image" class="mini-thumb" />
              {{ voo.name }}
            </td>
            <td>{{ voo.location }}</td>
            <td class="price">R$ {{ voo.price.toLocaleString('pt-BR') }}</td>
            <td>
              <span v-if="voo.discount" class="badge-discount">{{ voo.discount }}</span>
              <span v-else>-</span>
            </td>
            <td>
              <div class="actions">
                <button class="btn-delete" @click="deleteVoo(voo.id)">🗑️</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="store.passagens.length === 0" class="empty-state">
        Nenhuma passagem cadastrada.
      </div>
    </div>

    <FlightFormModal v-if="showModal" @close="showModal = false" />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTravelStore } from '@/stores/travelStore';
import FlightFormModal from './FlightFormModal.vue';

const store = useTravelStore();
const showModal = ref(false);

const deleteVoo = (id) => {
  if (confirm('Excluir esta passagem?')) {
    const index = store.passagens.findIndex(v => v.id === id);
    if (index !== -1) store.passagens.splice(index, 1);
  }
};
</script>

<style scoped>
/* Reutilizando estilos padrão do Admin */
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

.table-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
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

.fw-bold {
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
}

.mini-thumb {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.price {
  color: #009688;
  font-weight: bold;
}

.badge-discount {
  background: #d4edda;
  color: #155724;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.8rem;
}

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
