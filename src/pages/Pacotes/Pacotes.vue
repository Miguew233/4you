<template>
  <div class="packages-page">
    <header class="page-header">
      <div class="header-content">
        <h1 v-if="searchQuery">🔍 Buscando por: "{{ searchQuery }}"</h1>
        <h1 v-else>📦 Pacotes de Viagem</h1>

        <p v-if="!searchQuery">A combinação perfeita de Aéreo + Hotel</p>
        <button v-else @click="clearSearch" style="margin-top:10px; cursor:pointer;">Limpar busca</button>
      </div>
    </header>

    <div class="container">
      <div class="cards-grid">
        <PackageCard v-for="pacote in filteredPacotes" :key="pacote.id" :info="pacote" />
      </div>

      <div v-if="filteredPacotes.length === 0" class="empty-state">
        Nenhum pacote encontrado para "{{ searchQuery }}". 😢
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTravelStore } from '@/stores/travelStore';
import PackageCard from '@/components/Cards/PackageCard.vue';

const store = useTravelStore();
const route = useRoute();
const router = useRouter();

// Pega o termo da busca da URL (Ex: ?q=Paris)
const searchQuery = computed(() => route.query.q || '');

// Filtra a lista da store
const filteredPacotes = computed(() => {
  // Se não tem busca, retorna tudo
  if (!searchQuery.value) return store.pacotesCompletos;

  // Se tem busca, filtra pelo título
  const termo = searchQuery.value.toLowerCase();
  return store.pacotesCompletos.filter(p =>
    p.title.toLowerCase().includes(termo) ||
    p.hotel.location.toLowerCase().includes(termo)
  );
});

const clearSearch = () => {
  router.push('/pacotes'); // Remove a query da URL
};
</script>

<style scoped>
/* (Mantenha seus estilos) */
.packages-page {
  font-family: 'Montserrat', sans-serif;
  background: #f4f4f4;
  min-height: 100vh;
  padding-bottom: 50px;
}

.page-header {
  background: white;
  padding: 40px 20px;
  border-bottom: 1px solid #eee;
  margin-bottom: 30px;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
}

.header-content h1 {
  font-size: 2rem;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}
</style>
