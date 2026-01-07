<template>
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
              <button class="btn btn-primary w-100" type="submit">Se connecter</button>
            </form>
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
      alert(`Email: ${this.email}\nMot de passe: ${this.password}`);
    }
  }
};
</script>

<style scoped>
</style>
