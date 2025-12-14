<template>
  <div class="details-page" v-if="item">

    <div class="hero-image" :style="{ backgroundImage: `url(${item.image})` }">
      <div class="overlay"></div>
      <div class="hero-content">
        <button class="btn-back" @click="goBack">⬅ Voltar</button>
        <h1>{{ item.name }}</h1>
        <p class="location-hero"><span v-if="item.location">📍 {{ item.location }}</span></p>
      </div>
    </div>

    <div class="content-container">

      <div class="main-column">

        <div class="main-info">
          <div class="info-header">
            <h2>{{ isFlight ? 'Detalhes do Voo' : 'Sobre a Hospedagem' }}</h2>
            <p class="description">
              {{ isFlight
                ? 'Aproveite o melhor preço para voar com conforto e segurança. Passagem aérea de ida e volta inclusa.'
                : 'Desfrute de uma estadia inesquecível com todo o conforto e serviços exclusivos que você merece.'
              }}
            </p>
          </div>

          <hr />

          <div v-if="!isFlight" class="amenities-section">
            <h3>O que esse lugar oferece</h3>
            <div class="amenities-grid">
              <div class="amenity" v-if="item.hasBreakfast"><span class="icon">☕</span> Café da manhã incluso</div>
              <div class="amenity" v-if="item.hasWifi"><span class="icon">📶</span> Wi-Fi de alta velocidade</div>
              <div class="amenity"><span class="icon">❄️</span> Ar-condicionado</div>
              <div class="amenity"><span class="icon">📺</span> TV Smart</div>
              <div class="amenity"><span class="icon">🚿</span> Chuveiro Quente</div>
              <div class="amenity"><span class="icon">🅿️</span> Estacionamento Grátis</div>
            </div>
          </div>

          <div v-else class="flight-details-section">
            <h3>Itinerário</h3>
            <div class="flight-timeline">
              <div class="timeline-item">
                <div class="time">08:00</div>
                <div class="dot"></div>
                <div class="info">Saída de {{ item.location.replace('Saindo de ', '') }}</div>
              </div>
              <div class="duration-line"><span>✈️ Duração estimada: 3h 20m</span></div>
              <div class="timeline-item">
                <div class="time">11:20</div>
                <div class="dot down"></div>
                <div class="info">Chegada em {{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="reviews-section">
          <h3>⭐ Avaliações de Clientes ({{ itemReviews.length }})</h3>

          <div v-if="itemReviews.length > 0" class="reviews-list">
            <div v-for="review in itemReviews" :key="review.id" class="review-card">
              <div class="review-header">
                <strong>{{ review.userName }}</strong>
                <span class="rating">★ {{ review.rating }}/5</span>
              </div>
              <p class="review-comment">"{{ review.comment }}"</p>
              <small class="review-date">{{ review.date }}</small>
            </div>
          </div>

          <div v-else class="no-reviews">
            <p>Ainda não há avaliações para este destino. Seja o primeiro a ir!</p>
          </div>
        </div>

      </div>

      <div class="sidebar">
        <div class="booking-card">
          <div class="card-header">
            <span class="price-label">Preço total</span>
            <div class="price-value">
              <span class="currency">R$</span>
              <span class="amount">{{ item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }}</span>
            </div>
            <div v-if="item.oldPrice" class="discount-tag">
              Economia de R$ {{ (item.oldPrice - item.price).toLocaleString('pt-BR') }}
            </div>
          </div>

          <div class="booking-details">
            <div class="detail-row">
              <span>Tipo</span>
              <strong>{{ isFlight ? 'Passagem Aérea' : 'Hotel / Resort' }}</strong>
            </div>
            <div class="detail-row" v-if="!isFlight">
              <span>Hóspedes</span>
              <strong>{{ item.guests }} pessoas</strong>
            </div>
            <div class="detail-row" v-if="!isFlight">
              <span>Diárias</span>
              <strong>{{ item.days }} dias</strong>
            </div>
          </div>

          <button class="btn-checkout" @click="handleBuy">
            {{ isFlight ? 'Comprar Passagem' : 'Reservar Agora' }}
          </button>

          <p class="secure-text">🔒 Pagamento na próxima etapa (Simulado)</p>
        </div>
      </div>

    </div>
  </div>

  <div v-else class="loading-container">
    <p>Carregando detalhes ou item não encontrado...</p>
    <button @click="goBack">Voltar</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTravelStore } from '@/stores/travelStore';

const route = useRoute();
const router = useRouter();
const store = useTravelStore();

// Pegamos o ID da URL
const routeId = Number(route.params.id);

// Verifica se estamos na rota de voos
const isFlight = computed(() => route.path.includes('voos'));

// Encontra o item na Store
const item = computed(() => {
  if (isFlight.value) {
    return store.passagens.find(p => p.id === routeId);
  } else {
    return store.hoteis.find(h => h.id === routeId);
  }
});

// Filtra as avaliações deste item específico
const itemReviews = computed(() => {
  return store.reviews.filter(r => r.itemId === routeId);
});

// Ações
const goBack = () => router.push('/');

// FUNÇÃO DE COMPRA DIRETA
const handleBuy = () => {
  if (!confirm('Confirmar sua reserva gratuitamente para teste?')) return;

  const type = isFlight.value ? 'voo' : 'hotel';

  // 1. Salva na store
  store.confirmBooking(item.value, type);

  // 2. Redireciona para a área do usuário
  router.push('/usuario/viagens');
};
</script>

<style scoped>
.details-page {
  background-color: #f8f9fa;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  padding-bottom: 50px;
}

/* Hero */
.hero-image {
  width: 100%;
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
  padding: 40px 20px;
  color: white;
}

.hero-content h1 {
  font-size: 3rem;
  margin: 10px 0;
  font-weight: 700;
}

.btn-back {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  backdrop-filter: blur(5px);
  margin-bottom: 10px;
}

/* Layout */
.content-container {
  max-width: 1200px;
  margin: -40px auto 0;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  position: relative;
  z-index: 10;
}

/* Coluna Esquerda */
.main-column {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.main-info,
.reviews-section {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

/* Reviews Styles */
.reviews-section h3 {
  margin-top: 0;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.review-card {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.review-card:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.rating {
  color: #ff9800;
  font-weight: bold;
}

.review-comment {
  font-style: italic;
  color: #555;
  margin: 5px 0;
}

.review-date {
  font-size: 0.8rem;
  color: #999;
}

.no-reviews {
  color: #777;
  font-style: italic;
}

/* Amenities & Timeline (Mesmos de antes) */
.amenities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 20px;
}

.amenity {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #444;
}

.flight-timeline {
  margin-top: 20px;
  border-left: 2px solid #ddd;
  padding-left: 20px;
  margin-left: 10px;
}

.timeline-item {
  position: relative;
  margin-bottom: 20px;
}

.timeline-item .time {
  font-weight: bold;
  color: #333;
}

.timeline-item .dot {
  width: 12px;
  height: 12px;
  background: #009688;
  border-radius: 50%;
  position: absolute;
  left: -27px;
  top: 5px;
}

.timeline-item .dot.down {
  background: #d32f2f;
}

/* Coluna Direita (Sidebar) */
.sidebar {
  position: relative;
}

.booking-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 20px;
  border: 1px solid #eee;
}

.price-value {
  color: #004d40;
  font-weight: bold;
  margin: 5px 0 10px 0;
}

.amount {
  font-size: 2rem;
}

.btn-checkout {
  width: 100%;
  background-color: #009688;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 10px;
}

.btn-checkout:hover {
  background-color: #00796b;
}

.secure-text {
  text-align: center;
  font-size: 0.8rem;
  color: #888;
  margin-top: 15px;
}

.booking-details {
  margin: 20px 0;
  padding: 20px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: #555;
}

/* Responsivo */
@media (max-width: 768px) {
  .content-container {
    grid-template-columns: 1fr;
    margin-top: 0;
  }

  .hero-image {
    height: 250px;
  }

  .booking-card {
    position: static;
  }
}
</style>
