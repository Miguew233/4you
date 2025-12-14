<template>
  <div class="manage-packages">

    <div class="page-header">
      <h2>📦 Gerenciar Pacotes</h2>
      <button class="btn-add" @click="showModal = true">
        + Novo Pacote
      </button>
    </div>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Pacote</th>
            <th>Itens Inclusos</th>
            <th>Preço Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pct in store.pacotesCompletos" :key="pct.id">
            <td class="fw-bold">
              <img :src="pct.image" class="mini-thumb" />
              {{ pct.title }}
            </td>
            <td>
              <div class="includes-info">
                <span class="item-tag">✈️ {{ pct.flight?.name || 'Voo Excluído' }}</span>
                <span class="item-tag">🏨 {{ pct.hotel?.name || 'Hotel Excluído' }}</span>
              </div>
            </td>
            <td class="price">R$ {{ pct.price.toLocaleString('pt-BR') }}</td>
            <td>
              <button class="btn-delete" @click="deletePacote(pct.id)">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="store.pacotes.length === 0" class="empty-state">
        Nenhum pacote ativo.
      </div>
    </div>

    <PackageFormModal v-if="showModal" @close="showModal = false" />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTravelStore } from '@/stores/travelStore';
import PackageFormModal from './PackageFormModal.vue';

const store = useTravelStore();
const showModal = ref(false);

const deletePacote = (id) => {
  if (confirm('Excluir este pacote?')) {
    const index = store.pacotes.findIndex(p => p.id === id);
    if (index !== -1) store.pacotes.splice(index, 1);
  }
};
</script>

<style scoped>
/* Estilos Padrão Admin */
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
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
}

.price {
  color: #009688;
  font-weight: bold;
}

.includes-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 0.85rem;
}

.item-tag {
  color: #555;
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
