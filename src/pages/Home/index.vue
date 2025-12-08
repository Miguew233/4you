<template>
  <section class="hero">
    <div class="overlay"></div>
    <div class="hero-content">
      <h1>Pacotes de Viagem</h1>
      <p>Confira os pacotes de viagens nacionais e internacionais</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    handleClick() {
      this.$router.push('/pacotes');
    }
  }
}


</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 60vh;
  background-image: url('https://www.postposmo.com/wp-content/uploads/2020/12/5-2.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 60px;
  color: white;
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

.hero-content h1 {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 10px;
}

.hero-content p {
  font-size: 20px;
  opacity: 0.9;
}
</style>
