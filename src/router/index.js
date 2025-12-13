import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home/Home.vue'
// Importe a página nova
import Details from '../pages/Details/Details.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Rota para Hoteis (espera um ID)
  {
    path: '/hoteis/:id',
    name: 'DetalhesHotel',
    component: Details
  },
  // Rota para Voos (espera um ID)
  {
    path: '/voos/:id',
    name: 'DetalhesPassagem',
    component: Details
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
