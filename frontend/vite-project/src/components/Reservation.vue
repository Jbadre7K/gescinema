<template>
  <div class="reservation-page">
    <h1>Réservation</h1>

    <div class="film-card">
      <img :src="film.image" />
      <div>
        <h2>{{ film.title }}</h2>
        <p>{{ film.genre }}</p>
        <p><strong>Séance :</strong> {{ heure }}</p>
      </div>
    </div>

    <div class="places">
      <h3>Nombre de places</h3>
      <div class="counter">
        <button @click="decrement">−</button>
        <span>{{ places }}</span>
        <button @click="increment">+</button>
      </div>
    </div>

    <div class="total">
      Total : <strong>{{ total }} DH</strong>
    </div>

    <button class="btn-confirm" @click="confirmer">
      Confirmer la réservation
    </button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const heure = route.params.heure

const films = [
  {
    id: 1,
    title: 'Avatar',
    genre: 'Action • Science-fiction',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg',
    prix: 60
  },
  {
    id: 2,
    title: 'Inception',
    genre: 'Thriller • Science-fiction',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg',
    prix: 60
  },
  {
    id: 3,
    title: 'Interstellar',
    genre: 'Aventure • Science-fiction',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    prix: 60
  }
]

const film = films.find(f => f.id == route.params.id)

const places = ref(1)
const total = ref(film.prix)

function increment() {
  places.value++
  total.value = places.value * film.prix
}

function decrement() {
  if (places.value > 1) {
    places.value--
    total.value = places.value * film.prix
  }
}

import { useRouter } from 'vue-router'
const router = useRouter()

function confirmer() {
  router.push(`/paiement/${film.id}/${heure}/${places.value}`)
}

</script>

<style scoped>
.reservation-page {
  min-height: 100vh;
  background: #000;
  color: white;
  padding: 40px;
  
}

.film-card {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.film-card img {
  width: 150px;
  border-radius: 12px;
}

.places {
  margin-top: 20px;
}

.counter {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 10px;
}

.counter button {
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  background: #f5a623;
  cursor: pointer;
}

.total {
  margin-top: 30px;
  font-size: 20px;
}

.btn-confirm {
  margin-top: 30px;
  padding: 15px 30px;
  background: #f5a623;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  cursor: pointer;
}
</style>
