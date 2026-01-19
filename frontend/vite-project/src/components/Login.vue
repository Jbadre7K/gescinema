<template>
  <div class="login-page">
    <div class="login-content">
      <!-- LOGO CINÉMA ANIMÉ -->
      <img
        src="../assets/logo.png"
        class="logo animate-logo"
        alt="Logo Cinéma"
      />

      <h2 class="animate-text">Connexion</h2>

      <!-- FORMULAIRE -->
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        class="animate-input"
      />

      <input
        type="password"
        placeholder="Mot de passe"
        v-model="password"
        class="animate-input"
      />

      <button @click="login" class="animate-button">
        Se connecter
      </button>

      <p class="forgot animate-text">
        Mot de passe oublié ?
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = () => {
  if (email.value && password.value) {
    router.push('/home')
  } else {
    alert('Veuillez remplir tous les champs')
  }
}
</script>

<style scoped>
/* PAGE */
.login-page {
  min-height: 100vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* CONTENU */
.login-content {
  width: 320px;
  text-align: center;
  color: white;
}

/* LOGO */
.logo {
  width: 160px;
  margin-bottom: 25px;
  filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.6));
}

/* TITRE */
.login-content h2 {
  margin-bottom: 25px;
  font-weight: bold;
}

/* INPUTS */
.login-content input {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: none;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 14px;
  outline: none;
}

.login-content input::placeholder {
  color: #ddd;
}

/* BOUTON */
.login-content button {
  width: 100%;
  padding: 12px;
  background: #f5a623;
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

/* LIEN */
.forgot {
  margin-top: 15px;
  font-size: 13px;
  color: #ccc;
}

/* ANIMATIONS */
.animate-logo {
  animation: fadeZoom 1.3s ease-out forwards;
}

.animate-text {
  animation: fadeUp 1.1s ease-out forwards;
}

.animate-input {
  animation: fadeUp 1.2s ease-out forwards;
}

.animate-button {
  animation: fadeUp 1.3s ease-out forwards;
}

@keyframes fadeZoom {
  0% {
    opacity: 0;
    transform: scale(0.6);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
