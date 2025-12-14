<template>
  <div class="dashboard">
    <h2>Visão Geral</h2>

    <div class="stats-grid">
      <div class="stat-card blue">
        <div class="number">{{ store.hoteis.length }}</div>
        <div class="label">Hotéis Cadastrados</div>
      </div>

      <div class="stat-card green">
        <div class="number">{{ store.passagens.length }}</div>
        <div class="label">Voos Disponíveis</div>
      </div>

      <div class="stat-card purple">
        <div class="number">{{ store.pacotes.length }}</div>
        <div class="label">Pacotes Ativos</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTravelStore } from '@/stores/travelStore';
const store = useTravelStore();
</script>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.stat-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.number {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 5px;
}

.label {
  color: #666;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.blue .number {
  color: #3182ce;
}

.green .number {
  color: #38a169;
}

.purple .number {
  color: #805ad5;
}
</style>
