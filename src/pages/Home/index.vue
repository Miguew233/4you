<template>
  <section class="hero">
    <div class="overlay"></div>
    <div class="hero-content">
      <h1><span><img src="../../icons/Maleta.png" alt=""></span>Pacotes de Viagem</h1>
      <p>Confira os pacotes de viagens nacionais e internacionais</p>
    </div>
    <div class="container-card">
      <Swiper
        :slides-per-view="3"
        :space-between="20"
        :navigation="true"
        :loop="true"
        :breakpoints="{
          0: { slidesPerView: 1.1 },
          600: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 }
        }"
        class="travel-swiper"
      >
        <SwiperSlide
          v-for="(card, index) in travelCards"
          :key="index"
        >
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
            <span class="icon">📍</span>
            <input type="text" placeholder="Origem" v-model="origin">
          </div>
          <div class="divider"></div>
          <div class="input-item">
            <span class="icon">📍</span>
            <input type="text" placeholder="Destino" v-model="destination">
          </div>
        </div>
      </div>

      <!-- DATAS -->
      <div class="input-group">
        <label>Selecione :</label>
        <div class="input-box">
          <div class="input-item">
            <span class="icon">📅</span>
            <input type="date" v-model="dateStart">
          </div>
          <div class="divider"></div>
          <div class="input-item">
            <span class="icon">📅</span>
            <input type="date" v-model="dateEnd">
          </div>
        </div>
      </div>

      <!-- QUARTOS / VIAJANTES -->
      <div class="input-group">
        <label>Selecione :</label>
        <div class="input-box">
          <div class="input-item">
            <span class="icon">🚗</span>
            <input type="number" min="1" placeholder="Quartos" v-model="rooms">
          </div>
          <div class="divider"></div>
          <div class="input-item">
            <span class="icon">👥</span>
            <input type="number" min="1" placeholder="Viajantes" v-model="travellers">
          </div>
        </div>
      </div>
    </div>

    <button class="search-btn">
      Buscar destino ➜
    </button>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // estilos essenciais
  import "swiper/css";
  import "swiper/css/navigation";


  const origin = ref("")
  const destination = ref("")
  const dateStart = ref("")
  const dateEnd = ref("")
  const rooms = ref(1)
  const travellers = ref(1)

  export default {
    name: "HeroSection",
    components: { Swiper, SwiperSlide },
  
    data() {
      return {
        travelCards: [
          {
            city: "Maceió",
            date: "28 de ago - 31 de ago",
            price: "1.629",
            image: "https://i.imgur.com/r4ZQ0K4.jpeg"
          },
          {
            city: "Fortaleza",
            date: "17 de jun - 21 de jun",
            price: "1.927",
            image: "https://i.imgur.com/Ynk1xhK.jpeg"
          },
          {
            city: "Rio de Janeiro",
            date: "06 de ago - 09 de ago",
            price: "535",
            image: "https://i.imgur.com/Y2s2ypU.jpeg"
          },
          {
            city: "Oslo",
            date: "03 de jun - 09 de jun",
            price: "4.243",
            image: "https://i.imgur.com/aA3xzqg.jpeg"
          }
        ]
      };
    }
  };
  </script>
  

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('https://www.postposmo.com/wp-content/uploads/2020/12/5-2.jpg');
  background-size: cover;
  background-position: center;

  padding: 60px;
  color: white;
  overflow-x: hidden;
  

  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}

.hero-content img{
  width: 50px;
  margin-right: 20px;
}

.hero-content h1 {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 10px;
}

.hero-content p {
  font-size: 20px;
  opacity: 0.9;
}

.confira-promocoes {
  margin: 40px auto 0 auto;
  max-width: 450px;
  text-align: center;     /* centraliza tudo */
}

.confira-promocoes h3 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 28px;        /* maior */
  color: white;           /* texto branco */
  margin-bottom: 10px;
}

.confira-promocoes .arrow img {
  width: 45px;            /* tamanho agradável */
  height: auto;
  display: block;
  margin: 0 auto;
  filter: brightness(100%); /* garante ícone branco */
  opacity: 0.9;
  cursor: pointer;
  transition: 0.3s;
}

.confira-promocoes .arrow img:hover {
  opacity: 1;
  transform: translateY(5px);
}

/* card */
.container-card{
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
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
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
}

.input-item input {
  border: none;
  outline: none;
  background: transparent;
  font-size: 15px;
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
</style>
