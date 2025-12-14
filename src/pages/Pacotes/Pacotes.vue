<template>
  <div class="packages-page">
    <header class="page-header">
      <div class="header-content">
        <h1>📦 Pacotes de Viagem</h1>
        <p>A combinação perfeita de Aéreo + Hotel com preços imperdíveis</p>
      </div>
    </header>

    <div class="container">
      <div class="cards-grid">
        <PackageCard v-for="pacote in pacotesList" :key="pacote.id" :info="pacote" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PackageCard from '@/components/Cards/PackageCard.vue';

// DADOS MOCKADOS (Simulando o que viria do Admin)
const pacotesList = ref([
  {
    id: 900,
    title: "Feriadão em Salvador",
    price: 2450.00,
    image: "https://images.unsplash.com/photo-1512753360377-5435e1657c7c?auto=format&fit=crop&w=400&q=80",
    days: 5,
    persons: 2,
    hotel: { name: "Resort Bahia", stars: 5, location: "Salvador, BA" },
    flight: { origin: "São Paulo (GRU)", destination: "Salvador (SSA)" }
  },
  {
    id: 901,
    title: "Eurotrip Paris Romântica",
    price: 6890.00,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
    days: 7,
    persons: 2,
    hotel: { name: "Paris Luxury", stars: 4, location: "Paris, França" },
    flight: { origin: "Rio de Janeiro (GIG)", destination: "Paris (CDG)" }
  },
  {
    id: 902,
    title: "Miami Beach Experience",
    price: 4200.00,
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=400&q=80",
    days: 6,
    persons: 2,
    hotel: { name: "EVEN Hotel Miami", stars: 4, location: "Miami, EUA" },
    flight: { origin: "São Paulo (GRU)", destination: "Miami (MIA)" }
  }
]);
</script>

<style scoped>
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
