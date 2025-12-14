<template>
  <section class="hero">
    <div class="overlay"></div>
    <div class="hero-content">
      <h1><span><img src="../../icons/Maleta.png" alt=""></span>Pacotes de Viagem</h1>
      <p>Confira os pacotes de viagens nacionais e internacionais</p>
    </div>
    <div class="container-card">
      <Swiper :slides-per-view="3" :space-between="20" :navigation="true" :loop="true" :breakpoints="{
        0: { slidesPerView: 1.1 },
        600: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3 }
      }" class="travel-swiper">
        <SwiperSlide v-for="(card, index) in travelCards" :key="index">
          <div class="travel-card">
            <img :src="card.image" class="card-image" />

            <div class="card-info">
              <h3>{{ card.city }}</h3>
              <p class="date">{{ card.date }}</p>
              <p class="price">A partir de R$: <span>{{ card.price }}</span></p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
    <div class="confira-promocoes">
      <h3>Confira as promoções de hotéis!</h3>
      <span class="arrow">
        <img src="../../icons/DoubleUp.png" alt="">
      </span>
    </div>

  </section>

  <section class="find-section">
    <h2 class="title">Encontre seu destino</h2>

    <div class="inputs-container">
      <!-- ORIGEM / DESTINO -->
      <div class="input-group">
        <label>Selecione :</label>
        <div class="input-box">
          <div class="input-item">
            <span class="icon"><img src="/src/icons/local.png" alt=""></span>
            <input type="text" placeholder="Origem" v-model="origin">
          </div>
          <div class="divider"></div>
          <div class="input-item">
            <span class="icon"><img src="/src/icons/local.png" alt=""></span>
            <input type="text" placeholder="Destino" v-model="destination">
          </div>
        </div>
      </div>

      <!-- DATAS -->
      <div class="input-group">
        <label>Selecione :</label>
        <div class="input-box">
          <div class="input-item">
            <span class="icon"><img src="/src/icons/Calendario.png" alt=""></span>
            <input type="date" v-model="dateStart">
          </div>
          <div class="divider"></div>
          <div class="input-item">
            <span class="icon"><img src="/src/icons/Calendario.png" alt=""></span>
            <input type="date" v-model="dateEnd">
          </div>
        </div>
      </div>

      <!-- QUARTOS / VIAJANTES -->
      <div class="input-group">
        <label>Selecione :</label>
        <div class="input-box">
          <div class="input-item">
            <span class="icon"><img src="/src/icons/Quarto.png" alt=""></span>
            <input type="number" min="1" placeholder="Quartos" v-model="rooms">
          </div>
          <div class="divider"></div>
          <div class="input-item">
            <span class="icon"><img src="/src/icons/Viajantes.png" alt=""></span>
            <input type="number" min="1" placeholder="Viajantes" v-model="travellers">
          </div>
        </div>
      </div>
    </div>

    <button class="search-btn">
      Buscar destino ➜
    </button>
  </section>

  <div class="home-container">

    <section class="promo-section">
      <div class="header-section">
        <h2>🛌 Hotéis em PROMO!</h2>
        <p>Confira as promoções de hotéis nacionais e internacionais</p>
      </div>

      <Swiper :modules="modules" :slides-per-view="3" :space-between="20" :navigation="true" :loop="true" :breakpoints="{
        0: { slidesPerView: 1.1, spaceBetween: 10 },
        600: { slidesPerView: 2.2, spaceBetween: 15 },
        1024: { slidesPerView: 4, spaceBetween: 20 }
      }" class="travel-swiper">
        <SwiperSlide v-for="hotel in hoteisList" :key="hotel.id">
          <TravelCard :info="hotel" />
        </SwiperSlide>
      </Swiper>
    </section>


    <section class="promo-section">
      <div class="header-section">
        <h2>✈️ Passagens Aéreas PROMO!</h2>
        <p>Confira as promoções de passagens de viagens nacionais e internacionais</p>
      </div>

      <Swiper :modules="modules" :slides-per-view="3" :space-between="20" :navigation="true" :loop="true" :breakpoints="{
        0: { slidesPerView: 1.1, spaceBetween: 10 },
        600: { slidesPerView: 2.2, spaceBetween: 15 },
        1024: { slidesPerView: 4, spaceBetween: 20 }
      }" class="travel-swiper">
        <SwiperSlide v-for="passagem in passagensList" :key="passagem.id">
          <TravelCard :info="passagem" />
        </SwiperSlide>
      </Swiper>
    </section>

  </div>

  <section class="info-section">
    <div class="section-header">
      <h2>👥 Parceiros</h2>
    </div>
    <p class="section-desc">
      Uma parceria inesquecível: CVC, 123Milhas e Localiza - Viaje com:
      <strong>conforto, economia e tranquilidade!</strong>
    </p>

    <div class="partners-logos">
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Cvc-logo.svg" alt="CVC">
      <img src="https://logodownload.org/wp-content/uploads/2014/02/123-milhas-logo-0.png" alt="123 Milhas">
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Localiza_logo.svg" alt="Localiza">
    </div>
  </section>

  <hr class="section-divider" />

  <section class="info-section">
    <div class="section-header">
      <h2>💳 Formas de pagamento</h2>
    </div>
    <p class="section-desc">
      Viaje com liberdade e comodidade: <u>Visa, Mastercard, Boleto, American Express, Hipercard e Diners.</u>
    </p>
    <h3 class="cta-text">Escolha seu método de pagamento e embarque rumo às melhores experiências!</h3>

    <div class="payment-warning">
      <span class="info-icon">ℹ️</span>
      Aceitamos cartão de crédito apenas nas lojas físicas
    </div>

    <div class="payment-logos">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
        alt="Mastercard">
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex">
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Hipercard_logo.svg" alt="Hipercard">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Diners_Club_Logo3.svg" alt="Diners">
      <div class="boleto-icon">📄 Boleto</div>
    </div>
  </section>

  <section class="contact-section">
    <div class="contact-text">
      <h3>Estamos aqui para ajudar!</h3>
      <p>Nosso suporte está disponível em <u>horário comercial</u>, pronto para responder suas perguntas.</p>
      <p class="small-text">Sua satisfação é nossa prioridade!</p>
    </div>

    <div class="contact-form">
      <h4>Envie sua mensagem</h4>
      <form @submit.prevent="sendMessage">
        <div class="form-group">
          <input type="text" placeholder="Seu Nome" v-model="contactName" required />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Seu E-mail" v-model="contactEmail" required />
        </div>
        <div class="form-group">
          <textarea placeholder="Como podemos ajudar?" v-model="contactMessage" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn-send">Enviar Mensagem</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// 1. Imports do Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// 2. Import do Componente de Card
import TravelCard from "@/components/Cards/TravelCard.vue";

// 3. IMPORTAR A STORE DO PINIA
import { useTravelStore } from '@/stores/travelStore';

// Configuração dos Módulos do Swiper
const modules = [Navigation];

// Inicializar a Store
const store = useTravelStore();

// --- DADOS ---

// Card Estático da Hero (Maceió, Fortaleza...)
// (Esse mantemos local pois é específico só do banner da Home)
const travelCards = ref([
  { city: "Maceió", date: "28 de ago - 31 de ago", price: "1.629", image: "https://i.imgur.com/r4ZQ0K4.jpeg" },
  { city: "Fortaleza", date: "17 de jun - 21 de jun", price: "1.927", image: "https://i.imgur.com/Ynk1xhK.jpeg" },
  { city: "Rio de Janeiro", date: "06 de ago - 09 de ago", price: "535", image: "https://i.imgur.com/Y2s2ypU.jpeg" },
  { city: "Oslo", date: "03 de jun - 09 de jun", price: "4.243", image: "https://i.imgur.com/aA3xzqg.jpeg" }
]);

// --- DADOS DINÂMICOS VINDOS DA STORE ---
// Aqui está a mudança: Não digitamos mais a lista gigante.
// A Home apenas "observa" a store.
const hoteisList = computed(() => store.hoteis);
const passagensList = computed(() => store.passagens);

// Inputs refs (para os v-model funcionarem)
const origin = ref('');
const destination = ref('');
const dateStart = ref('');
const dateEnd = ref('');
const rooms = ref('');
const travellers = ref('');

// Variáveis do formulário de contato
const contactName = ref('');
const contactEmail = ref('');
const contactMessage = ref('');

const sendMessage = () => {
  alert(`Obrigado, ${contactName.value}! Sua mensagem foi enviada com sucesso.`);
  contactName.value = '';
  contactEmail.value = '';
  contactMessage.value = '';
};
</script>


<style scoped>
/* --- HERO SECTION --- */
.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* Alterado de height fixo para min-height para evitar cortes */
  background-image: url('https://www.postposmo.com/wp-content/uploads/2020/12/5-2.jpg');
  background-size: cover;
  background-position: center;

  /* A MÁGICA DO ALINHAMENTO GERAL */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* Centraliza verticalmente o bloco todo */

  /* Ajuste do Padding:
     120px em cima (para limpar o Header transparente)
     60px nas laterais
     40px embaixo */
  padding: 120px 60px 40px 60px;

  color: white;
  overflow-x: hidden;
  font-family: "Montserrat", sans-serif;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  /* Escureci levemente para 0.4 para ler melhor */
  z-index: 1;
  /* Garante que fique atrás do conteúdo */
}

/* --- CONTEÚDO DE TEXTO --- */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  /* Aumentei um pouco para respirar */
  margin-bottom: 30px;
  /* Empurra o carrossel para baixo */
}

/* O Segredo da Maleta Alinhada */
.hero-content h1 {
  font-size: 48px;
  /* Levemente maior */
  font-weight: 800;
  margin-bottom: 15px;

  /* Flexbox para alinhar ícone e texto */
  display: flex;
  align-items: center;
  gap: 15px;
  /* Espaço entre a maleta e o texto */
}

/* O span que envolve a imagem não precisa atrapalhar */
.hero-content h1 span {
  display: flex;
  align-items: center;
}

.hero-content img {
  width: 45px;
  height: auto;
  margin-right: 0;
  /* Removemos a margem antiga pois usamos 'gap' no h1 */
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  /* Sombra para destacar do fundo */
}

.hero-content p {
  font-size: 20px;
  opacity: 0.95;
  font-weight: 400;
  max-width: 600px;
  /* Limita a largura do parágrafo para não esticar demais */
  line-height: 1.5;
}

/* --- CARROSSEL --- */
.container-card {
  position: relative;
  z-index: 2;
  width: 100%;
}

.travel-swiper {
  padding-bottom: 10px;
  /* Remove excesso de espaço */
}

/* --- CHAMADA FINAL (Seta) --- */
.confira-promocoes {
  position: relative;
  z-index: 2;
  margin: 30px auto 0 auto;
  /* Ajuste do espaçamento superior */
  max-width: 450px;
  text-align: center;
}

.confira-promocoes h3 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 28px;
  /* maior */
  color: white;
  /* texto branco */
  margin-bottom: 10px;
}

.confira-promocoes .arrow img {
  width: 45px;
  /* tamanho agradável */
  height: auto;
  display: block;
  margin: 0 auto;
  filter: brightness(100%);
  /* garante ícone branco */
  opacity: 0.9;
  cursor: pointer;
  transition: 0.3s;
}

.confira-promocoes .arrow img:hover {
  opacity: 1;
  transform: translateY(5px);
}

/* card */
.container-card {
  overflow-x: hidden;
}

.travel-swiper {
  margin-top: 40px;
  width: 100%;
  padding-bottom: 40px;
}

.travel-card {
  height: 320px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  color: white;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}

.card-info h3 {
  font-size: 20px;
  margin: 0;
}

.card-info .date {
  font-size: 14px;
  opacity: 0.9;
}

.card-info .price span {
  font-weight: bold;
  color: #00d1ff;
}

/* --- RESPONSIVIDADE (MOBILE & TABLET) --- */

@media (max-width: 768px) {
  .hero {
    /* Muda de altura fixa para altura mínima */
    height: auto;
    min-height: 100vh;

    /* Reduz o padding lateral drásticamente */
    padding: 100px 20px 40px 20px;

    /* Centraliza o conteúdo verticalmente */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-content {
    /* Garante que o texto ocupe a largura disponível */
    max-width: 100%;
    text-align: center;
    /* Centraliza texto no mobile */
  }

  .hero-content h1 {
    font-size: 28px;
    /* Reduz de 42px para 28px */
    display: flex;
    flex-direction: column;
    /* Coloca ícone em cima do texto se precisar */
    align-items: center;
    justify-content: center;
  }

  .hero-content img {
    width: 40px;
    /* Reduz ícone levemente */
    margin-right: 0;
    margin-bottom: 10px;
    /* Espaço abaixo do ícone */
  }

  .hero-content p {
    font-size: 16px;
    /* Reduz de 20px para 16px */
    margin-top: 10px;
  }

  /* Ajustes no Swiper/Card */
  .travel-swiper {
    margin-top: 30px;
    padding-bottom: 30px;
    /* Menos espaço sobrando embaixo */
  }

  .travel-card {
    height: 280px;
    /* Card um pouco menor no mobile */
  }

  .card-info h3 {
    font-size: 18px;
  }

  /* Ajustes na chamada final (seta) */
  .confira-promocoes {
    margin-top: 20px;
  }

  .confira-promocoes h3 {
    font-size: 20px;
    /* Reduz de 28px */
  }

  .confira-promocoes .arrow img {
    width: 35px;
  }
}

/* Ajuste extra para telas MUITO pequenas (iPhone SE, etc) */
@media (max-width: 380px) {
  .hero-content h1 {
    font-size: 24px;
  }

  .travel-card {
    height: 250px;
  }
}

/* hero acaba aqui */


/* Setas */
.swiper-button-next,
.swiper-button-prev {
  color: white !important;
  font-weight: bold;
  text-shadow: 0px 0px 10px black;
}


.find-section {
  text-align: center;
  padding: 50px 0;
}

.title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
}

.inputs-container {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-box {
  display: flex;
  background: #f1f1f1;
  border-radius: 40px;
  overflow: hidden;
}

.input-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  gap: 10px;

  flex: 1;
}

.input-item input {
  border: none;
  outline: none;
  background: transparent;
  font-size: 15px;
  width: 100%;
  /* O input deve esticar */
  min-width: 0;
  /* Previne overflow em flexbox */
}

.divider {
  width: 1px;
  background: #ccc;
}

.search-btn {
  margin-top: 40px;
  padding: 14px 40px;
  background: #009688;
  color: white;
  border: none;
  border-radius: 40px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.search-btn:hover {
  background: #00796b;
}

.icon {
  font-size: 18px;
}

@media (max-width: 1024px) {

  /* Em tablets e celulares, mudamos para coluna */
  .inputs-container {
    flex-direction: column;
    align-items: center;
    /* Centraliza os blocos */
    gap: 25px;
  }

  .input-group {
    width: 100%;
    max-width: 500px;
    /* Largura máxima para não ficar gigante no tablet */
  }

  /* Ajuste no label para alinhar a esquerda do input */
  .input-group label {
    text-align: left;
    margin-left: 15px;
    margin-bottom: 5px;
  }

  .input-box {
    width: 100%;
    /* O box cinza ocupa toda a largura permitida */
  }
}

/* Ajuste para celulares muito pequenos (iPhone SE, Galaxy Fold) */
@media (max-width: 480px) {
  .find-section {
    padding: 30px 15px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .input-item {
    padding: 12px 10px;
    /* Reduz padding interno para caber texto */
  }

  .input-item input {
    font-size: 13px;
    /* Fonte um pouco menor */
  }

  .search-btn {
    width: 100%;
    /* Botão largura total no mobile fica melhor */
    max-width: 500px;
  }
}

/* aqui acaba o filtro */
.promo-section {
  padding: 40px 20px;
  max-width: 1300px;
  margin: 0 auto;
}

.header-section {
  margin-bottom: 20px;
}

.header-section h2 {
  font-size: 1.8rem;
  margin-bottom: 5px;
}

/* Ajustes finos no Swiper se precisar */
.travel-swiper {
  padding-bottom: 40px;
  /* Espaço para não cortar sombra do card */
  padding-left: 10px;
  /* Espaço lateral leve */
  padding-right: 10px;
}

/* Personalizar a cor das setinhas do Swiper (opcional) */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #333;
  /* Cor das setas */
  background: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
  font-size: 18px;
  font-weight: bold;
}

/* resto */

/* --- Estilos Gerais das Seções de Info --- */
.info-section {
  text-align: center;
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
  color: #333;
}

.section-header h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.section-desc {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
}

.section-divider {
  border: 0;
  border-top: 1px solid #ddd;
  max-width: 800px;
  margin: 0 auto;
}

/* --- Parceiros --- */
.partners-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.partners-logos img {
  height: 50px;
  /* Ajuste conforme seus logos */
  object-fit: contain;
  filter: grayscale(0%);
  /* Pode usar grayscale(100%) se quiser cinza */
  transition: 0.3s;
}

.partners-logos img:hover {
  transform: scale(1.1);
}

/* --- Pagamento --- */
.cta-text {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 20px 0;
}

.payment-warning {
  color: #d32f2f;
  /* Vermelho da imagem */
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.info-icon {
  background: #eee;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}

.payment-logos {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
}

.payment-logos img {
  height: 35px;
}

.boleto-icon {
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
}

/* --- Contato / Rodapé --- */
.contact-section {
  background-color: #f9f9f9;
  padding: 50px 20px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  align-items: flex-start;
}

.contact-text {
  max-width: 400px;
  text-align: left;
}

.contact-text h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.contact-text p {
  color: #666;
  line-height: 1.5;
  margin-bottom: 10px;
}

.small-text {
  font-size: 0.9rem;
  font-weight: bold;
  color: #333 !important;
}

.contact-form {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
}

.contact-form h4 {
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.95rem;
  transition: 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #009688;
  outline: none;
}

.btn-send {
  width: 100%;
  padding: 12px;
  background-color: #009688;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.btn-send:hover {
  background-color: #00796b;
}

/* Responsivo para mobile */
@media (max-width: 768px) {
  .contact-section {
    flex-direction: column;
    text-align: center;
  }

  .contact-text {
    text-align: center;
    margin: 0 auto;
  }
}
</style>
