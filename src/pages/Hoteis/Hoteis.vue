<template>
  <div class="listing-page">

    <header class="page-header">
      <div class="header-content">
        <h1><span>🛌</span> Hotéis e Resorts</h1>
        <p>Confira as melhores opções de hospedagem nacionais e internacionais</p>
      </div>
    </header>

    <div class="container">

      <section class="listing-section">
        <h2 class="section-title">🔥 Destaques com até 50% OFF</h2>
        <div class="cards-grid">
          <TravelCard v-for="hotel in destaquesList" :key="hotel.id" :info="hotel" />
        </div>
      </section>

      <section class="listing-section">
        <h2 class="section-title">🇧🇷 Destinos Nacionais</h2>
        <div class="cards-grid">
          <TravelCard v-for="hotel in nacionaisList" :key="hotel.id" :info="hotel" />
        </div>
      </section>

      <section class="listing-section">
        <h2 class="section-title">🌍 Destinos Internacionais</h2>
        <div class="cards-grid">
          <TravelCard v-for="hotel in internacionaisList" :key="hotel.id" :info="hotel" />
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TravelCard from '@/components/Cards/TravelCard.vue';

// Mock de dados para Hoteis (pode repetir alguns para encher a tela)
const destaquesList = ref([
  { id: 1, type: 'hotel', name: "Hotel Golden Vilage", location: "São Paulo, SP", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80", price: 616.00, days: 4, guests: 2, hasBreakfast: true, hasWifi: true },
  { id: 2, type: 'hotel', name: "Majestic Palace", location: "Florianópolis, SC", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80", price: 2185.00, days: 7, guests: 2, hasBreakfast: true, hasWifi: true },
  { id: 3, type: 'hotel', name: "Resort Bahia", location: "Salvador, BA", image: "https://images.unsplash.com/photo-1571896349842-6e53ce41e8f2?auto=format&fit=crop&w=300&q=80", price: 1850.00, days: 5, guests: 3, hasBreakfast: true, hasWifi: true },
]);

const nacionaisList = ref([
  { id: 5, type: 'hotel', name: "Grand Hyatt Rio", location: "Rio de Janeiro, RJ", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=300&q=80", price: 1540.00, days: 3, guests: 2, hasBreakfast: true, hasWifi: true },
  { id: 6, type: 'hotel', name: "Nord Luxxor", location: "João Pessoa, PB", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=300&q=80", price: 980.00, days: 5, guests: 2, hasBreakfast: true, hasWifi: true },
  { id: 1, type: 'hotel', name: "Hotel Golden Vilage", location: "São Paulo, SP", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80", price: 616.00, days: 4, guests: 2, hasBreakfast: true, hasWifi: true },
  { id: 2, type: 'hotel', name: "Majestic Palace", location: "Florianópolis, SC", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80", price: 2185.00, days: 7, guests: 2, hasBreakfast: true, hasWifi: true },
]);

const internacionaisList = ref([
  { id: 3, type: 'hotel', name: "Crowne Plaza LA", location: "Los Angeles, EUA", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=300&q=80", price: 4152.00, days: 7, guests: 2, hasBreakfast: false, hasWifi: true },
  { id: 4, type: 'hotel', name: "EVEN Hotel Miami", location: "Miami, EUA", image: "https://images.unsplash.com/photo-1571896349842-6e53ce41e8f2?auto=format&fit=crop&w=300&q=80", price: 2873.00, days: 5, guests: 3, hasBreakfast: true, hasWifi: true },
  { id: 7, type: 'hotel', name: "Hotel Riu Plaza", location: "Nova York, EUA", image: "https://images.unsplash.com/photo-1496417263034-38ec4f0d665a?auto=format&fit=crop&w=300&q=80", price: 5200.00, days: 6, guests: 2, hasBreakfast: false, hasWifi: true },
  { id: 8, type: 'hotel', name: "Paris Luxury", location: "Paris, França", image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=300&q=80", price: 6200.00, days: 5, guests: 2, hasBreakfast: true, hasWifi: true }
]);
</script>

<style scoped>
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

/* O Segredo do Grid Responsivo */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  justify-items: center;
  /* Centraliza os cards se a coluna for larga */
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
