<script setup>
// O Header pode ficar aqui se você quiser que ele apareça em TODAS as páginas
import Header from '@/components/Header/Header.vue';

// REMOVIDO: import HomePage from '@/pages/Home/Home.vue';
// (Não importamos páginas fixas no App.vue quando usamos rotas)
</script>

<template>
  <Header />

  <RouterView />

</template>

<style scoped>
/* Seus estilos globais */
</style>
