<template>
  <div class="details-page">

    <div v-if="pacote" class="content-wrapper">

      <div class="hero-image" :style="{ backgroundImage: `url(${pacote.image})` }">
        <div class="overlay"></div>
        <div class="hero-content">
          <button class="btn-back" @click="$router.push('/pacotes')">⬅ Voltar</button>
          <h1>{{ pacote.title }}</h1>
          <p class="subtitle">{{ pacote.days }} dias | {{ pacote.persons }} pessoas</p>
        </div>
      </div>

      <div class="container">

        <div class="combo-details">

          <div class="detail-card">
            <div class="icon-header">✈️ Voo Incluso</div>
            <h3>{{ pacote.flight?.name || 'Voo' }}</h3>
            <p>{{ pacote.flight?.location }}</p>
            <p class="obs">Passagem de Ida e Volta inclusa</p>
          </div>

          <div class="plus-sign">+</div>

          <div class="detail-card">
            <div class="icon-header">🏨 Hotel Incluso</div>
            <h3>{{ pacote.hotel?.name || 'Hotel' }}</h3>
            <p>{{ pacote.hotel?.location }}</p>
            <div class="tags">
              <span v-if="pacote.hotel?.hasBreakfast">☕ Café da Manhã</span>
              <span v-if="pacote.hotel?.hasWifi">📶 Wi-Fi</span>
            </div>
          </div>

        </div>

        <div class="booking-section">
          <div class="price-box">
            <span class="label">Preço Total do Pacote</span>
            <span class="price">R$ {{ pacote.price.toLocaleString('pt-BR') }}</span>
            <span class="installments">em até 12x sem juros</span>
          </div>

          <button class="btn-buy" @click="handleBuy">
            Comprar Pacote Agora
          </button>
        </div>

      </div>

    </div>

    <div v-else class="not-found">
      <h2>Pacote não encontrado 😢</h2>
      <button @click="$router.push('/pacotes')">Voltar para a lista</button>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTravelStore } from '@/stores/travelStore';

const route = useRoute();
const router = useRouter();
const store = useTravelStore();

// 1. Pega o ID da URL e converte para Número (Importante!)
const pacoteId = Number(route.params.id);

// 2. Busca na lista de "Pacotes Completos" (que já tem o hotel e voo dentro)
const pacote = computed(() => {
  return store.pacotesCompletos.find(p => p.id === pacoteId);
});

// 3. Função de Compra
const handleBuy = () => {
  if (confirm(`Confirmar compra do pacote "${pacote.value.title}"?`)) {
    store.confirmBooking(pacote.value, 'pacote');
    router.push('/usuario/viagens');
  }
};
</script>

<style scoped>
.details-page {
  background: #f8f9fa;
  min-height: 100vh;
  padding-bottom: 50px;
  font-family: 'Montserrat', sans-serif;
}

.hero-image {
  height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 90px 60px;
  color: white;
}

.hero-content h1 {
  font-size: 3rem;
  margin: 10px 0;
}

.btn-back {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  cursor: pointer;
  backdrop-filter: blur(5px);
}

.container {
  max-width: 1000px;
  margin: -50px auto 0;
  padding: 0 20px;
  position: relative;
  z-index: 10;
}

.combo-details {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.detail-card {
  flex: 1;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon-header {
  background: #e0f2f1;
  color: #00695c;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.detail-card h3 {
  margin: 10px 0;
  font-size: 1.4rem;
  color: #333;
}

.obs {
  font-size: 0.8rem;
  color: #888;
  margin-top: 10px;
}

.plus-sign {
  font-size: 3rem;
  color: white;
  font-weight: bold;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.tags {
  margin-top: 15px;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.tags span {
  background: #fff3e0;
  color: #e65100;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.booking-section {
  background: white;
  padding: 30px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.price-box {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 0.9rem;
  color: #666;
}

.price {
  font-size: 2.5rem;
  font-weight: 800;
  color: #009688;
}

.installments {
  font-size: 0.8rem;
  color: #888;
}

.btn-buy {
  background: #00c3ff;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 15px rgba(0, 195, 255, 0.4);
}

.btn-buy:hover {
  transform: translateY(-3px);
  background: #00b0e6;
}

.not-found {
  text-align: center;
  padding: 100px;
}

@media (max-width: 768px) {
  .combo-details {
    flex-direction: column;
  }

  .plus-sign {
    color: #333;
    transform: rotate(90deg);
    margin: 10px 0;
    text-shadow: none;
  }

  .booking-section {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}
</style>
