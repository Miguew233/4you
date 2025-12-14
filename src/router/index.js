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

// Imports do Admin
import AdminLayout from '../pages/Admin/AdminLayout.vue'
import Dashboard from '@/pages/Admin/Dashboard.vue'
import ManageHotels from '@/pages/Admin/ManageHotels.vue'
import ManageFlights from '@/pages/Admin/ManageFlights.vue'
import ManagePackages from '@/pages/Admin/ManagePackages.vue'


// Impoets do User
import UserLayout from '@/pages/User/UserLayout.vue';
import MyBookings from '@/pages/User/MyBookings.vue';
import UserProfile from '@/pages/User/UserProfile.vue';
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
  { path: '/pacotes/:id', name: 'DetalhesPacote', component: DetalhesPacote },

  // --- ROTAS DO ADMIN (Novo!) ---
  {
    path: '/admin',
    component: AdminLayout, // O pai carrega o Layout (Sidebar)
    children: [
      {
        path: '', // Quando for apenas /admin
        name: 'AdminDashboard',
        component: Dashboard
      },
      {
        path: 'hoteis',
        name: 'AdminHoteis',
        // Vamos criar esse arquivo no próximo passo,
        // mas já deixo o placeholder para não quebrar o link
        component: ManageHotels
      },
      {
        path: 'voos',
        name: 'AdminVoos',
        component: ManageFlights
      },
      {
        path: 'pacotes',
        name: 'AdminPacotes',
        component: ManagePackages
      }
    ]
  },
  // ROTA DO USUÁRIO
  {
    path: '/usuario',
    component: UserLayout,
    children: [
      { path: '', component: UserProfile }, // /usuario (Perfil)
      { path: 'viagens', component: MyBookings } // /usuario/viagens
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
