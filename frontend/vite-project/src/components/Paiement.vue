<template>
  <div class="paiement-page">
    <div class="card">
      <h1>PAIEMENT</h1>

      <div class="recap">
        <img :src="film.image" />
        <div>
          <h2>{{ film.title }}</h2>
          <p>Séance : {{ heure }}</p>
          <p>Places : {{ places }}</p>
          <p class="total">Total : {{ total }} DH</p>
        </div>
      </div>

      <h3>Méthode de paiement</h3>

      <div class="methods">
        <label :class="{ active: method === 'card' }">
          <input type="radio" value="card" v-model="method" />
          💳 Carte bancaire
        </label>

        <label :class="{ active: method === 'paypal' }">
          <input type="radio" value="paypal" v-model="method" />
          🅿️ PayPal
        </label>

        <label :class="{ active: method === 'mobile' }">
          <input type="radio" value="mobile" v-model="method" />
          📱 Paiement mobile
        </label>
      </div>

      <button class="btn-pay" @click="payer">
        Payer {{ total }} DH
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const films = [
  {
    id: 1,
    title: 'Avatar',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg',
    prix: 60
  },
  {
    id: 2,
    title: 'Inception',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg',
    prix: 60
  },
  {
    id: 3,
    title: 'Interstellar',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    prix: 60
  }
]

const film = films.find(f => f.id == route.params.id)

const heure = route.params.heure
const places = Number(route.params.places)
const total = places * film.prix

import { ref } from 'vue'
const method = ref('card')

function payer() {
  alert(`Paiement effectué avec succès via ${method.value}`)
  router.push('/ticket')
}
</script>

<style scoped>
.paiement-page {
  min-height: 100vh;
  background: radial-gradient(circle at top, #1c1c1c, #000);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  background: #111;
  color: white;
  width: 420px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,.6);
}

.recap {
  display: flex;
  gap: 15px;
  margin: 20px 0;
}

.recap img {
  width: 90px;
  border-radius: 10px;
}

.total {
  font-size: 20px;
  color: #f5a623;
  margin-top: 8px;
}

.methods {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0;
}

.methods label {
  padding: 12px;
  border-radius: 12px;
  background: #1f1f1f;
  cursor: pointer;
  transition: 0.3s;
}

.methods label.active {
  background: #f5a623;
  color: black;
}

.methods input {
  display: none;
}

.btn-pay {
  width: 100%;
  padding: 15px;
  border-radius: 15px;
  border: none;
  background: linear-gradient(135deg, #f5a623, #ffb703);
  font-size: 18px;
  cursor: pointer;
}
</style>
