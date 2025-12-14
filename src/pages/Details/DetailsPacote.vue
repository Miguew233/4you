<template>
  <div class="package-details" v-if="pacote">

    <div class="hero-header" :style="{ backgroundImage: `url(${pacote.image})` }">
      <div class="overlay"></div>
      <div class="hero-content">
        <button class="btn-back" @click="$router.push('/pacotes')">⬅ Voltar</button>
        <span class="badge">📦 Pacote Promocional</span>
        <h1>{{ pacote.title }}</h1>
      </div>
    </div>

    <div class="container">
      <div class="content-grid">

        <div class="info-column">

          <div class="info-card">
            <div class="card-header">
              <h3>✈️ Informações do Voo</h3>
            </div>
            <div class="flight-route">
              <div class="point">
                <strong>{{ pacote.flight.origin }}</strong>
                <span class="time">08:00</span>
              </div>
              <div class="line">
                <span class="duration">Duração: 3h</span>
                <span class="arrow">➝</span>
              </div>
              <div class="point">
                <strong>{{ pacote.flight.destination }}</strong>
                <span class="time">11:00</span>
              </div>
            </div>
            <p class="obs">Inclui bagagem de mão (10kg)</p>
          </div>

          <div class="info-card">
            <div class="card-header">
              <h3>🏨 Hospedagem Inclusa</h3>
            </div>
            <div class="hotel-details">
              <h4>{{ pacote.hotel.name }}</h4>
              <p>📍 {{ pacote.hotel.location }}</p>
              <div class="stars">⭐⭐⭐⭐⭐ ({{ pacote.hotel.stars }} Estrelas)</div>
              <ul class="amenities-list">
                <li>☕ Café da manhã</li>
                <li>📶 Wi-Fi Grátis</li>
                <li>❄️ Ar condicionado</li>
              </ul>
            </div>
          </div>

        </div>

        <div class="sidebar">
          <div class="checkout-card">
            <span class="label">Preço final do pacote</span>
            <div class="price">
              <small>R$</small> {{ pacote.price.toLocaleString('pt-BR') }}
            </div>
            <div class="details-list">
              <div class="row"><span>Pessoas</span> <strong>{{ pacote.persons }}</strong></div>
              <div class="row"><span>Dias</span> <strong>{{ pacote.days }}</strong></div>
            </div>
            <button class="btn-buy">Comprar Pacote</button>
            <p class="secure">🔒 Compra Segura</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = Number(route.params.id);

// Simulação de busca no banco de dados
const pacotesList = [
  {
    id: 900,
    title: "Feriadão em Salvador",
    price: 2450.00,
    image: "https://images.unsplash.com/photo-1512753360377-5435e1657c7c?auto=format&fit=crop&w=800&q=80",
    days: 5,
    persons: 2,
    hotel: { name: "Resort Bahia", stars: 5, location: "Salvador, BA" },
    flight: { origin: "São Paulo (GRU)", destination: "Salvador (SSA)" }
  },
  {
    id: 901,
    title: "Eurotrip Paris Romântica",
    price: 6890.00,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    days: 7,
    persons: 2,
    hotel: { name: "Paris Luxury", stars: 4, location: "Paris, França" },
    flight: { origin: "Rio de Janeiro (GIG)", destination: "Paris (CDG)" }
  },
  {
    id: 902,
    title: "Miami Beach Experience",
    price: 4200.00,
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=800&q=80",
    days: 6,
    persons: 2,
    hotel: { name: "EVEN Hotel Miami", stars: 4, location: "Miami, EUA" },
    flight: { origin: "São Paulo (GRU)", destination: "Miami (MIA)" }
  }
];

const pacote = computed(() => pacotesList.find(p => p.id === id));
</script>

<style scoped>
.package-details {
  font-family: 'Montserrat', sans-serif;
  background: #f4f4f4;
  min-height: 100vh;
}

.hero-header {
  height: 350px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  color: white;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  width: 100%;
}

.badge {
  background: #ff9800;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin: 10px 0 0 0;
}

.btn-back {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 10px;
}

.container {
  max-width: 1200px;
  margin: -50px auto 0;
  padding: 0 20px;
  position: relative;
  z-index: 10;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.info-card {
  background: white;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.card-header h3 {
  margin: 0;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

/* Voo Styles */
.flight-route {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.point {
  display: flex;
  flex-direction: column;
}

.time {
  font-size: 1.2rem;
  font-weight: bold;
  color: #009688;
}

.line {
  flex: 1;
  text-align: center;
  border-bottom: 1px dashed #ccc;
  margin: 0 20px;
  position: relative;
  top: -10px;
}

.duration {
  display: block;
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 5px;
}

.obs {
  margin-top: 10px;
  font-size: 0.85rem;
  color: #666;
}

/* Hotel Styles */
.hotel-details h4 {
  font-size: 1.2rem;
  margin: 0 0 5px 0;
}

.amenities-list {
  list-style: none;
  padding: 0;
  margin-top: 15px;
  display: flex;
  gap: 15px;
}

.amenities-list li {
  background: #e0f2f1;
  color: #00695c;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.85rem;
}

/* Sidebar */
.checkout-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 20px;
}

.price {
  font-size: 2.5rem;
  font-weight: 800;
  color: #004d40;
  margin: 10px 0;
}

.price small {
  font-size: 1.2rem;
}

.details-list {
  margin: 20px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 15px 0;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #555;
}

.btn-buy {
  width: 100%;
  background: #009688;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.btn-buy:hover {
  background: #00796b;
}

.secure {
  text-align: center;
  font-size: 0.8rem;
  color: #888;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .hero-header {
    height: 250px;
  }
}
</style>
