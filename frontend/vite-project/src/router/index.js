import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Seances from '../components/Seances.vue'
import Reservation from '../components/Reservation.vue'
import Paiement from '../components/Paiement.vue'
import Ticket from '../components/Ticket.vue'
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/seances/:id', name: 'Seances', component: Seances },
  { path: '/reservation/:id/:heure', name: 'Reservation', component: Reservation },
  { path: '/paiement/:id/:heure/:places', name: 'Paiement', component: Paiement },
  { path: '/ticket', name: 'Ticket', component: Ticket }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
