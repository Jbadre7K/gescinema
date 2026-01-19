<template>
  <div class="ticket-page">
    <div class="ticket">
      <div class="left">
        <h1> GESCINEMA</h1>
        <p class="subtitle">Billet électronique</p>

        <div class="info">
          <p><strong>Film :</strong> Avatar</p>
          <p><strong>Séance :</strong> 18:30</p>
          <p><strong>Salle :</strong> 3</p>
          <p><strong>Places :</strong> 2</p>
        </div>

        <div class="number">
          Ticket Nº <strong>#{{ ticketNumber }}</strong>
        </div>
      </div>

      <div class="right">
        <div class="qr">
          <!-- QR simulé -->
          <div class="qr-box"></div>
        </div>
        <p class="scan">Scannez à l’entrée</p>
      </div>
    </div>

    <button class="btn-home" @click="goHome">
      Retour à l’accueil
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const ticketNumber = ref(
  Math.floor(100000 + Math.random() * 900000)
)

function goHome() {
  router.push('/home')
}
</script>

<style scoped>
.ticket-page {
  min-height: 100vh;
  background: radial-gradient(circle at top, #1b1b1b, #000);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ticket {
  width: 520px;
  background: linear-gradient(135deg, #111, #1c1c1c);
  color: white;
  border-radius: 22px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,.7);
}

.left {
  padding: 30px;
  flex: 2;
}

.left h1 {
  margin: 0;
  color: #f5a623;
}

.subtitle {
  color: #aaa;
  margin-bottom: 20px;
}

.info p {
  margin: 8px 0;
}

.number {
  margin-top: 20px;
  font-size: 18px;
}

.right {
  background: #f5a623;
  color: black;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.qr-box {
  width: 110px;
  height: 110px;
  background:
    repeating-linear-gradient(
      45deg,
      #000,
      #000 6px,
      #fff 6px,
      #fff 12px
    );
  border-radius: 12px;
}

.scan {
  margin-top: 12px;
  font-weight: bold;
}

.btn-home {
  margin-top: 30px;
  padding: 14px 28px;
  border-radius: 15px;
  border: none;
  background: linear-gradient(135deg, #f5a623, #ffb703);
  font-size: 16px;
  cursor: pointer;
}
</style>
