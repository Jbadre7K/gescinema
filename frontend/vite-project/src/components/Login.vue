<template>
  <div class="login-page">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card shadow">
            <div class="card-body">
              <h3 class="text-center mb-4">🎬 Connexion</h3>
              <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                  <label>Email</label>
                  <input type="email" v-model="email" class="form-control" placeholder="exemple@email.com" />
                </div>
                <div class="mb-3">
                  <label>Mot de passe</label>
                  <input type="password" v-model="password" class="form-control" placeholder="********" />
                </div>
                <button class="btn btn-danger w-100" type="submit">
  Se connecter
</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("login-success");
    }
  }
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background-image: url("../assets/64199cc899f9a88eff33e29b_card-cinema.jpeg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;   /* aligne en haut */
  padding-top: 0px;         /* espace depuis le haut */
}

</style>
