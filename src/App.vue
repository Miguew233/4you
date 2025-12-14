<script setup>
// O Header pode ficar aqui se você quiser que ele apareça em TODAS as páginas
import Header from '@/components/Header/Header.vue';
import FooterComponent from '@/components/Footer/Footer.vue';

// REMOVIDO: import HomePage from '@/pages/Home/Home.vue';
// (Não importamos páginas fixas no App.vue quando usamos rotas)
</script>

<template>
  <Header />

  <RouterView />

  <FooterComponent />

</template>

<style scoped>
/* Seus estilos globais */
</style>
