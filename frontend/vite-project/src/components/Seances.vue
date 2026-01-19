<template>
  <div class="seances-page">
    <h1> Séances disponibles</h1>

    <div class="film-info">
      <img :src="film.image" />
      <div>
        <h2>{{ film.title }}</h2>
        <p>{{ film.genre }}</p>
      </div>
    </div>

    <div class="seances">
      <button
        v-for="heure in film.seances"
        :key="heure"
        class="seance-btn"
        @click="reserver(heure)"
      >
        {{ heure }}
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
    genre: 'Action • Science-fiction',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg',
    seances: ['10:00', '14:00', '18:00', '21:00']
  },
  {
    id: 2,
    title: 'Inception',
    genre: 'Thriller • Science-fiction',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg',
    seances: ['11:00', '15:00', '19:00']
  },
  {
    id: 3,
    title: 'Interstellar',
    genre: 'Aventure • Science-fiction',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    seances: ['12:00', '16:00', '20:00']
  }
]

const film = films.find(f => f.id == route.params.id)

function reserver(heure) {
  router.push(`/reservation/${film.id}/${heure}`)
}

</script>

<style scoped>
.seances-page {
  min-height: 100vh;
  background: #000;
  color: white;
  padding: 40px;
}

.film-info {
  display: flex;
  gap: 20px;
  align-items: center;
}

.film-info img {
  width: 150px;
  border-radius: 12px;
}

.seances {
  margin-top: 30px;
  display: flex;
  gap: 15px;
}

.seance-btn {
  background: #f5a623;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
}
.seance-btn:hover {
  background: #ffb703;
}
</style>
