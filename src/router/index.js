import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Details from '../pages/Details/Details.vue'
// Importe as novas páginas
import Hoteis from '../pages/Hoteis/Hoteis.vue'
import Passagens from '../pages/passagens/Passagens.vue'
import Login from '@/pages/Login/Login.vue'
import Register from '@/pages/Register/Register.vue'
import Sobre from '@/pages/Sobre/Sobre.vue';
// ... imports anteriores
import Pacotes from '../pages/Pacotes/Pacotes.vue';
import DetalhesPacote from '../pages/Details/DetailsPacote.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },

  // Rotas de Listagem (Novas)
  {path: '/sobre', name: 'Sobre', component: Sobre},
  {path: '/login', name: 'Login', component: Login},
  {path: '/register', name: 'Register', component: Register},
  { path: '/hoteis', name: 'ListagemHoteis', component: Hoteis },
  { path: '/passagens', name: 'ListagemPassagens', component: Passagens },

  // Rotas de Detalhes
  { path: '/hoteis/:id', name: 'DetalhesHotel', component: Details },
  { path: '/voos/:id', name: 'DetalhesPassagem', component: Details },
  { path: '/pacotes', name: 'Pacotes', component: Pacotes },
  { path: '/pacotes/:id', name: 'DetalhesPacote', component: DetalhesPacote }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
