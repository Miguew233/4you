<template>
  <div class="card">
    <div class="card-image">
      <img :src="info.image" :alt="info.name" />

      <span v-if="info.discount" class="discount-badge">
        {{ info.discount }}
      </span>
    </div>

    <div class="card-content">
      <h3 class="card-title">{{ info.name }}</h3>

      <p class="location">{{ info.location }}</p>

      <div class="top-details">
        <div v-if="info.type !== 'flight'" class="amenities">
          <span v-if="info.hasBreakfast" class="amenity-item">☕ Café da manhã</span>
          <span v-if="info.hasWifi" class="amenity-item">📶 Internet</span>
        </div>

        <div v-else class="flight-old-price">
          <p v-if="info.oldPrice">
            A partir de <span class="old-value">{{ formatPrice(info.oldPrice) }}</span>
          </p>
        </div>
      </div>

      <div class="price-section">
        <span class="currency">R$:</span>
        <span class="value">{{ formatPrice(info.price) }}</span>
      </div>

      <hr class="divider" />

      <div class="meta-info">

        <div v-if="info.type !== 'flight'" class="hotel-info">
          <span>{{ info.days }} diárias, {{ info.guests }} hóspedes</span>
          <div class="stars">⭐⭐⭐⭐⭐</div>
        </div>

        <div v-else class="flight-info">
          <div class="flight-icon-row">
            <span class="plane-icon">✈️</span>
            <div class="flight-text">
              <strong>Voo ida e volta</strong>
              <small>Valor por pessoa</small>
            </div>
          </div>
        </div>

      </div>

      <ul class="payment-methods">
        <li>💳 Cartão de crédito</li>
        <li>💠 Pix</li>
        <li>📄 Boleto</li>
      </ul>

      <button class="btn-action" @click="handleAction">
        {{ info.type === 'flight' ? 'COMPRAR' : 'RESERVAR' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TravelCard',
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatPrice(value) {
      if (!value) return '';
      return value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    },
    handleAction() {
      // AQUI ESTAVA O PROBLEMA: Faltava o this.$router.push

      if (this.info.type === 'flight') {
        // Se for voo, vai para a rota /voos/:id
        this.$router.push({
          name: 'DetalhesPassagem',
          params: { id: this.info.id }
        });
      } else {
        // Se for hotel, vai para a rota /hoteis/:id
        this.$router.push({
          name: 'DetalhesHotel',
          params: { id: this.info.id }
        });
      }
    }
  }
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  /* Importante para o badge não sair */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  font-family: sans-serif;
  position: relative;
  /* Referência para o absolute do badge */
}

/* Badge de Desconto */
.discount-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #004d40;
  /* Verde escuro do design */
  color: white;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 4px;
  z-index: 10;
  text-transform: uppercase;
}

.card-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 16px;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 800;
  /* Mais bold como na imagem de voo */
  margin: 0 0 4px 0;
  color: #333;
}

.location {
  font-size: 0.8rem;
  color: #666;
  min-height: 1.2em;
  /* Mantém o espaço mesmo se vazio */
  margin-bottom: 8px;
}

/* --- Áreas Condicionais --- */
.amenities {
  display: flex;
  gap: 10px;
  font-size: 0.75rem;
  color: #d32f2f;
  margin-bottom: 5px;
  flex-wrap: wrap;
}

.flight-old-price {
  font-size: 0.8rem;
  color: #777;
  margin-bottom: 2px;
}

.old-value {
  text-decoration: line-through;
}

.price-section {
  font-size: 1.5rem;
  font-weight: bold;
  color: #004d40;
  margin-bottom: 10px;
}

.divider {
  border: 0;
  border-top: 1px solid #eee;
  margin: 8px 0 12px 0;
}

.meta-info {
  margin-bottom: 12px;
  font-size: 0.85rem;
  color: #444;
}

.hotel-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flight-info .flight-icon-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.plane-icon {
  font-size: 1.2rem;
}

.flight-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.payment-methods {
  list-style: none;
  padding: 0;
  font-size: 0.8rem;
  color: #555;
  margin-bottom: 15px;
  margin-top: auto;
  /* Empurra para baixo se sobrar espaço */
}

.payment-methods li {
  margin-bottom: 4px;
}

.btn-action {
  width: 100%;
  padding: 12px;
  background-color: white;
  border: 1px solid #333;
  /* Borda mais escura como na imagem de voo */
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s;
  letter-spacing: 0.5px;
}

.btn-action:hover {
  background-color: #f0f0f0;
  color: black;
}
</style>
