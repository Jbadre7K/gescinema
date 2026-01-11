<template>
  <Login v-if="!isLoggedIn" @login-success="onLoginSuccess" />
  <Home v-else />
</template>

<script>
import { ref } from 'vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

export default {
  components: { Login, Home },
  setup() {
    const isLoggedIn = ref(false)

    const onLoginSuccess = () => {
      isLoggedIn.value = true
    }

    return { isLoggedIn, onLoginSuccess }
  }
}
</script>
