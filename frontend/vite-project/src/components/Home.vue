<template>
  <div class="home-page">
    <!-- HEADER -->
    <header class="header">
      <img src="../assets/logo.png" class="logo" alt="Logo Cinéma" />
      <h1>Bienvenue au cinéma</h1>
    </header>

    <!-- FILMS -->
    <section class="films-section">
      <h2>🎥 Films à l’affiche</h2>

      <div class="films">
        <div class="film-card" v-for="film in films" :key="film.id">
          <img :src="film.image" class="film-image" />
          <h3>{{ film.title }}</h3>
          <p>{{ film.genre }}</p>

          <router-link
  :to="`/seances/${film.id}`"
  class="btn-seance"
>
  Voir séances
</router-link>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const films = [
  {
    id: 1,
    title: 'Avatar',
    genre: 'Action • Science-fiction',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg'
  },
  {
    id: 2,
    title: 'Inception',
    genre: 'Thriller • Science-fiction',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg'
  },
  {
    id: 3,
    title: 'Interstellar',
    genre: 'Aventure • Science-fiction',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'
  },
  {
    id: 4,
    title: 'Joker',
    genre: 'Drame • Thriller',
    image: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg'
  },
  {
    id: 5,
    title: 'Oppenheimer',
    genre: 'Drame • Historique',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg'
  },
  {
    id: 6,
    title: 'The Dark Knight',
    genre: 'Action • Crime',
    image: 'data:image/jpeg;base64,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'
  }
]


const voirSeances = (film) => {
  alert('Séances pour : ' + film.title)
  // plus tard → router.push(`/seances/${film.id}`)
}
</script>

<style scoped>
/* PAGE */
.home-page {
  min-height: 100vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba');
  background-size: cover;
  background-position: center;
  color: white;
}

/* HEADER */
.header {
  text-align: center;
  padding: 30px 20px;
}

.logo {
  width: 70px;
  margin-bottom: 10px;
}

.header h1 {
  font-size: 24px;
  font-weight: bold;
}

/* SECTION */
.films-section {
  padding: 20px;
}

.films-section h2 {
  margin-bottom: 20px;
}

/* FILMS GRID */
.films {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
}

/* FILM CARD */
.film-card {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 15px;
  text-align: center;
}

.film-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 10px;
}

.film-card h3 {
  font-size: 16px;
  margin-bottom: 5px;
}

.film-card p {
  font-size: 12px;
  color: #ddd;
  margin-bottom: 10px;
}

/* BOUTON */
.film-card button {
  width: 100%;
  padding: 10px;
  background: #f5a623;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>
