<template>
  <div class="my-bookings">
    <h2>Minhas Viagens</h2>

    <div class="bookings-list">
      <div v-for="reserva in minhasReservasDetalhadas" :key="reserva.id" class="booking-card">

        <img :src="reserva.item.image" class="booking-img" />

        <div class="booking-info">
          <div class="header">
            <h3>{{ reserva.item.title || reserva.item.name }}</h3>
            <span :class="['status', reserva.status]">{{ reserva.status }}</span>
          </div>
          <p class="date">Comprado em: {{ reserva.date }}</p>
          <p class="price">Total: R$ {{ reserva.price.toLocaleString('pt-BR') }}</p>

          <div class="actions">
            <button v-if="reserva.status === 'concluido' && !reserva.review" class="btn-rate"
              @click="openReviewModal(reserva)">
              ⭐ Avaliar Experiência
            </button>

            <div v-else-if="reserva.review" class="review-done">
              <span>Sua nota: {{ reserva.review.rating }}/5</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div v-if="showModal" class="modal-overlay">
      <div class="modal-card">
        <h3>Como foi sua viagem?</h3>
        <p class="item-name">{{ selectedReserva?.item.title || selectedReserva?.item.name }}</p>

        <div class="rating-stars">
          <span v-for="star in 5" :key="star" @click="reviewForm.rating = star"
            :class="{ active: star <= reviewForm.rating }">★</span>
        </div>

        <textarea v-model="reviewForm.comment" placeholder="Conte o que achou..." rows="4"></textarea>

        <div class="modal-actions">
          <button @click="showModal = false" class="btn-cancel">Cancelar</button>
          <button @click="submitReview" class="btn-submit">Enviar Avaliação</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useTravelStore } from '@/stores/travelStore';

const store = useTravelStore();
const showModal = ref(false);
const selectedReserva = ref(null);
const reviewForm = ref({ rating: 0, comment: '' });

// Computada "Mágica" para juntar a reserva com os dados do item (foto, nome)
const minhasReservasDetalhadas = computed(() => {
  return store.reservas.map(r => {
    let itemData = {};
    if (r.type === 'pacote') itemData = store.pacotes.find(p => p.id === r.itemId);
    if (r.type === 'hotel') itemData = store.hoteis.find(h => h.id === r.itemId);
    if (r.type === 'voo') itemData = store.passagens.find(v => v.id === r.itemId);

    return { ...r, item: itemData || { name: 'Item removido', image: '' } };
  });
});

const openReviewModal = (reserva) => {
  selectedReserva.value = reserva;
  reviewForm.value = { rating: 5, comment: '' };
  showModal.value = true;
};

const submitReview = () => {
  store.addReview(selectedReserva.value.id, {
    rating: reviewForm.value.rating,
    comment: reviewForm.value.comment,
    date: new Date().toISOString().split('T')[0]
  });
  showModal.value = false;
  alert('Obrigado pela sua avaliação!');
};
</script>

<style scoped>
.booking-card {
  display: flex;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

.booking-img {
  width: 150px;
  object-fit: cover;
}

.booking-info {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.header h3 {
  margin: 0 0 5px 0;
  font-size: 1.1rem;
}

.status {
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
}

.status.confirmado {
  background: #e3f2fd;
  color: #1565c0;
}

.status.concluido {
  background: #e8f5e9;
  color: #2e7d32;
}

.date,
.price {
  margin: 5px 0;
  font-size: 0.9rem;
  color: #666;
}

.actions {
  margin-top: 15px;
}

.btn-rate {
  background: #ff9800;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
}

.btn-rate:hover {
  background: #f57c00;
}

.review-done {
  color: #f57c00;
  font-weight: bold;
  font-size: 0.9rem;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 400px;
  text-align: center;
}

.rating-stars {
  font-size: 2rem;
  color: #ddd;
  cursor: pointer;
  margin: 15px 0;
}

.rating-stars span.active {
  color: #ffc107;
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 20px;
  resize: vertical;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
}

.btn-submit {
  background: #009688;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
