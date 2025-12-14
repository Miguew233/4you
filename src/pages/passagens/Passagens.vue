<template>
  <div class="listing-page">

    <header class="page-header">
      <div class="header-content">
        <h1><span>✈️</span> Passagens Aéreas</h1>
        <p>Voos nacionais e internacionais com os melhores preços do mercado</p>
      </div>
    </header>

    <div class="container">

      <section class="listing-section">
        <h2 class="section-title">⚡ Ofertas Relâmpago</h2>
        <div class="cards-grid">
          <TravelCard v-for="voo in ofertasList" :key="voo.id" :info="voo" />
        </div>
      </section>

      <section class="listing-section">
        <h2 class="section-title">🇧🇷 Voos Nacionais</h2>
        <div class="cards-grid">
          <TravelCard v-for="voo in nacionaisList" :key="voo.id" :info="voo" />
        </div>
      </section>

      <section class="listing-section">
        <h2 class="section-title">🌍 Voos Internacionais</h2>
        <div class="cards-grid">
          <TravelCard v-for="voo in internacionaisList" :key="voo.id" :info="voo" />
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TravelCard from '@/components/Cards/TravelCard.vue';

const ofertasList = ref([
  { id: 101, type: 'flight', name: "São Paulo", location: "Saindo de Brasília", image: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=300&q=80", price: 169.00, oldPrice: 229.00, discount: "23% OFF" },
  { id: 102, type: 'flight', name: "Florianópolis", location: "Saindo de SP", image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=300&q=80", price: 250.00, oldPrice: 380.00, discount: "34% OFF" },
  { id: 103, type: 'flight', name: "Los Angeles", location: "Saindo de SP", image: "https://images.unsplash.com/photo-1534190239940-9ba8944ea261?auto=format&fit=crop&w=300&q=80", price: 1118.00, oldPrice: 1559.00, discount: "28% OFF" },
]);

const nacionaisList = ref([
  { id: 104, type: 'flight', name: "Rio de Janeiro", location: "Saindo de BH", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=300&q=80", price: 220.00, oldPrice: 300.00 },
  { id: 105, type: 'flight', name: "Salvador", location: "Saindo de SP", image: "https://images.unsplash.com/photo-1512753360377-5435e1657c7c?auto=format&fit=crop&w=300&q=80", price: 450.00, oldPrice: 600.00 },
  { id: 101, type: 'flight', name: "São Paulo", location: "Saindo de Brasília", image: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=300&q=80", price: 169.00, oldPrice: 229.00 },
  { id: 102, type: 'flight', name: "Florianópolis", location: "Saindo de SP", image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=300&q=80", price: 250.00, oldPrice: 380.00 },
]);

const internacionaisList = ref([
  { id: 106, type: 'flight', name: "Lisboa", location: "Saindo de Recife", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd81?auto=format&fit=crop&w=300&q=80", price: 3100.00, oldPrice: 4200.00 },
  { id: 107, type: 'flight', name: "Buenos Aires", location: "Saindo de POA", image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=300&q=80", price: 890.00, oldPrice: 1200.00 },
  { id: 105, type: 'flight', name: "Paris", location: "Saindo de SP", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80", price: 2890.00, oldPrice: 3500.00 },
  { id: 103, type: 'flight', name: "Los Angeles", location: "Saindo de SP", image: "https://images.unsplash.com/photo-1534190239940-9ba8944ea261?auto=format&fit=crop&w=300&q=80", price: 1118.00, oldPrice: 1559.00 },
]);
</script>

<style scoped>
/* Pode reutilizar o mesmo CSS da página de Hotéis */
.listing-page {
  font-family: 'Montserrat', sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
  padding-bottom: 60px;
}

.page-header {
  background-color: white;
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
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-content p {
  color: #666;
  font-size: 1.1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.listing-section {
  margin-bottom: 50px;
}

.section-title {
  font-size: 1.4rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #333;
  margin-bottom: 25px;
  border-left: 5px solid #009688;
  padding-left: 15px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  justify-items: center;
}

/* Isso aqui é mágico. Ele cria colunas automáticas.
   Se a tela for pequena, cria 1 coluna. Se for grande, cria várias.
   O 'minmax(280px, 1fr)' diz: "O card deve ter no mínimo 280px" */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  justify-content: center;
}

/* Ajuste de margem no celular */
@media (max-width: 600px) {
  .page-header {
    padding: 20px;
    text-align: center;
  }

  .header-content h1 {
    font-size: 1.5rem;
    /* Fonte menor no celular */
    justify-content: center;
  }
}
</style>
