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
            <div class="amenity" v-if="item.hasBreakfast">
              <span class="icon">☕</span> Café da manhã incluso
            </div>
            <div class="amenity" v-if="item.hasWifi">
              <span class="icon">📶</span> Wi-Fi de alta velocidade
            </div>
            <div class="amenity">
              <span class="icon">❄️</span> Ar-condicionado
            </div>
            <div class="amenity">
              <span class="icon">📺</span> TV Smart
            </div>
            <div class="amenity">
              <span class="icon">🚿</span> Chuveiro Quente
            </div>
            <div class="amenity">
              <span class="icon">🅿️</span> Estacionamento Grátis
            </div>
          </div>
        </div>

        <div v-else class="flight-details-section">
          <h3>Itinerário</h3>
          <div class="flight-timeline">
            <div class="timeline-item">
              <div class="time">08:00</div>
              <div class="dot"></div>
              <div class="info">Saída de {{ item.location.split('de ')[1] || 'Origem' }}</div>
            </div>
            <div class="duration-line">
              <span>✈️ Duração estimada: 3h 20m</span>
            </div>
            <div class="timeline-item">
              <div class="time">11:20</div>
              <div class="dot down"></div>
              <div class="info">Chegada em {{ item.name }}</div>
            </div>
          </div>
          <div class="baggage-info">
            <span>🧳 Inclui bagagem de mão (10kg)</span>
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

          <button class="btn-checkout" @click="handleCheckout">
            {{ isFlight ? 'Comprar Passagem' : 'Reservar Agora' }}
          </button>

          <p class="secure-text">🔒 Pagamento 100% Seguro</p>
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

const route = useRoute();
const router = useRouter();

// Pegamos o ID da URL
const routeId = Number(route.params.id);

// Verifica se estamos na rota de voos
const isFlight = computed(() => route.path.includes('voos'));

// === DADOS MOCKADOS (Mesmos da Home para funcionar o "Find") ===
// Em um app real, isso viria de uma API ou Pinia Store
const hoteisList = [
  { id: 1, type: 'hotel', name: "Hotel Golden Vilage", location: "São Paulo, SP", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80", price: 616.00, days: 4, guests: 2, hasBreakfast: true, hasWifi: true },
  { id: 2, type: 'hotel', name: "Majestic Palace Hotel", location: "Florianópolis, SC", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80", price: 2185.00, days: 7, guests: 2, hasBreakfast: true, hasWifi: true },
  { id: 3, type: 'hotel', name: "Crowne Plaza LA", location: "Los Angeles, EUA", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80", price: 4152.00, days: 7, guests: 2, hasBreakfast: false, hasWifi: true },
  { id: 4, type: 'hotel', name: "EVEN Hotel Miami", location: "Miami, EUA", image: "https://images.unsplash.com/photo-1571896349842-6e53ce41e8f2?auto=format&fit=crop&w=800&q=80", price: 2873.00, days: 5, guests: 3, hasBreakfast: true, hasWifi: true },
  { id: 5, type: 'hotel', name: "Grand Hyatt Rio", location: "Rio de Janeiro, RJ", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80", price: 1540.00, days: 3, guests: 2, hasBreakfast: true, hasWifi: true },
  { id: 6, type: 'hotel', name: "Nord Luxxor", location: "João Pessoa, PB", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80", price: 980.00, days: 5, guests: 2, hasBreakfast: true, hasWifi: true },
  { id: 7, type: 'hotel', name: "Hotel Riu Plaza", location: "Nova York, EUA", image: "https://images.unsplash.com/photo-1496417263034-38ec4f0d665a?auto=format&fit=crop&w=800&q=80", price: 5200.00, days: 6, guests: 2, hasBreakfast: false, hasWifi: true }
];

const passagensList = [
  { id: 101, type: 'flight', name: "São Paulo", location: "Saindo de Brasília", image: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=800&q=80", price: 169.00, oldPrice: 229.00 },
  { id: 102, type: 'flight', name: "Florianópolis", location: "Saindo de São Paulo", image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80", price: 250.00, oldPrice: 380.00 },
  { id: 103, type: 'flight', name: "Los Angeles", location: "Saindo de SP", image: "https://images.unsplash.com/photo-1534190239940-9ba8944ea261?auto=format&fit=crop&w=800&q=80", price: 1118.00, oldPrice: 1559.00 },
  { id: 104, type: 'flight', name: "Miami", location: "Saindo do Rio", image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=800&q=80", price: 950.00, oldPrice: 1159.00 },
  { id: 105, type: 'flight', name: "Paris", location: "Saindo de SP", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80", price: 2890.00, oldPrice: 3500.00 },
  { id: 106, type: 'flight', name: "Lisboa", location: "Saindo de Recife", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd81?auto=format&fit=crop&w=800&q=80", price: 3100.00, oldPrice: 4200.00 },
  { id: 107, type: 'flight', name: "Buenos Aires", location: "Saindo de Porto Alegre", image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=800&q=80", price: 890.00, oldPrice: 1200.00 }
];

// Lógica para encontrar o item certo
const item = computed(() => {
  if (isFlight.value) {
    return passagensList.find(p => p.id === routeId);
  } else {
    return hoteisList.find(h => h.id === routeId);
  }
});

// Funções de Ação
const goBack = () => router.push('/');
const handleCheckout = () => alert('Ir para tela de pagamento! (Próxima etapa)');

</script>

<style scoped>
.details-page {
  background-color: #f8f9fa;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  padding-bottom: 50px;
}

/* --- Hero Image --- */
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

.location-hero {
  font-size: 1.2rem;
  opacity: 0.9;
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
  transition: 0.3s;
}

.btn-back:hover {
  background: white;
  color: black;
}

/* --- Layout Principal --- */
.content-container {
  max-width: 1200px;
  margin: -40px auto 0;
  /* Sobe um pouco sobre a imagem */
  padding: 0 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* Esquerda Larga, Direita Estreita */
  gap: 30px;
  position: relative;
  z-index: 10;
}

/* --- Coluna Esquerda --- */
.main-info {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.info-header h2 {
  margin-top: 0;
  color: #333;
}

.description {
  color: #555;
  line-height: 1.6;
  font-size: 1.05rem;
}

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

.duration-line {
  color: #888;
  font-size: 0.9rem;
  margin: 10px 0;
  font-style: italic;
}

.baggage-info {
  margin-top: 20px;
  background: #e0f2f1;
  padding: 10px;
  border-radius: 6px;
  color: #00695c;
  display: inline-block;
}

/* --- Coluna Direita (Sticky Card) --- */
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
  /* Faz o card fixar ao rolar */
  border: 1px solid #eee;
}

.price-label {
  font-size: 0.9rem;
  color: #666;
  display: block;
}

.price-value {
  color: #004d40;
  font-weight: bold;
  margin: 5px 0 10px 0;
}

.currency {
  font-size: 1.2rem;
  vertical-align: top;
}

.amount {
  font-size: 2rem;
}

.discount-tag {
  background: #ffebee;
  color: #c62828;
  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  font-weight: bold;
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
}

.btn-checkout:hover {
  background-color: #00796b;
  transform: translateY(-2px);
}

.secure-text {
  text-align: center;
  font-size: 0.8rem;
  color: #888;
  margin-top: 15px;
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

  .hero-content h1 {
    font-size: 2rem;
  }

  .booking-card {
    position: static;
  }
}
</style>
