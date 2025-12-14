<template>
  <div class="package-card" @click="goToDetails">
    <div class="card-image">
      <img :src="info.image" :alt="info.title" />
      <span class="category-badge">📦 Pacote Completo</span>
    </div>

    <div class="card-content">
      <h3 class="title">{{ info.title }}</h3>
      <p class="subtitle">{{ info.hotel.location }}</p>

      <div class="includes">
        <span class="tag">✈️ Aéreo</span>
        <span class="plus">+</span>
        <span class="tag">🏨 Hospedagem</span>
      </div>

      <hr class="divider" />

      <div class="details-row">
        <span>📅 {{ info.days }} dias</span>
        <span>👥 {{ info.persons }} pessoas</span>
      </div>

      <div class="price-section">
        <span class="label">Total por pessoa:</span>
        <span class="price">R$ {{ info.price.toLocaleString('pt-BR') }}</span>
      </div>

      <button class="btn-ver">Ver Detalhes</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  info: Object
});

const router = useRouter();

const goToDetails = () => {
  router.push(`/pacotes/${props.info.id}`);
};
</script>

<style scoped>
.package-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
}

.package-card:hover {
  transform: translateY(-5px);
}

.card-image {
  position: relative;
  height: 180px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #ff9800;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
}

.card-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.title {
  font-size: 1.1rem;
  margin: 0 0 5px 0;
  color: #333;
}

.subtitle {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 10px;
}

.includes {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #009688;
}

.tag {
  background: #e0f2f1;
  padding: 4px 8px;
  border-radius: 4px;
}

.plus {
  color: #999;
}

.divider {
  border: 0;
  border-top: 1px solid #eee;
  margin: 8px 0;
}

.details-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #555;
  margin-bottom: 12px;
}

.price-section {
  margin-top: auto;
}

.label {
  display: block;
  font-size: 0.75rem;
  color: #888;
}

.price {
  font-size: 1.4rem;
  font-weight: 800;
  color: #004d40;
}

.btn-ver {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #009688;
  background: white;
  color: #009688;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.btn-ver:hover {
  background: #009688;
  color: white;
}
</style>
