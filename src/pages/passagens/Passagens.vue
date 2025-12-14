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
import { computed } from 'vue';
import TravelCard from '@/components/Cards/TravelCard.vue';
import { useTravelStore } from '@/stores/travelStore';

// 1. Acessar a Store
const store = useTravelStore();

// 2. Criar Listas Inteligentes (Computed)

// OFERTAS: Pega apenas os itens que têm a propriedade 'discount'
const ofertasList = computed(() => {
  return store.passagens.filter(p => p.discount);
});

// NACIONAIS: Como ainda não temos "countryCode", vou filtrar pelos nomes das cidades BR que temos na lista
const nacionaisList = computed(() => {
  const cidadesBR = ['São Paulo', 'Florianópolis', 'Rio de Janeiro', 'Salvador', 'Maceió', 'Fortaleza'];
  return store.passagens.filter(p => cidadesBR.some(cidade => p.name.includes(cidade)));
});

// INTERNACIONAIS: Tudo que NÃO for das cidades BR acima
const internacionaisList = computed(() => {
  const cidadesBR = ['São Paulo', 'Florianópolis', 'Rio de Janeiro', 'Salvador', 'Maceió', 'Fortaleza'];
  return store.passagens.filter(p => !cidadesBR.some(cidade => p.name.includes(cidade)));
});

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

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  justify-items: center;
}

/* Responsividade do Grid */
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
    justify-content: center;
  }
}
</style>
