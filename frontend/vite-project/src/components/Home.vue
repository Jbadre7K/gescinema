<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-dark bg-dark px-4">
      <span class="navbar-brand">🎬 GES CINEMA</span>
      <span class="text-light">Bienvenue</span>
    </nav>

    <!-- Main -->
    <div class="container mt-5">

      <h2 class="text-center mb-4">Tableau de bord</h2>

      <div class="row g-4">

        <!-- Films -->
        <div class="col-md-4">
          <div class="card shadow text-center p-4">
            <h4>🎥 Films</h4>
            <p>Consulter et gérer les films</p>
            <button class="btn btn-primary">Voir Films</button>
          </div>
        </div>

        <!-- Séances -->
        <div class="col-md-4">
          <div class="card shadow text-center p-4">
            <h4>🕒 Séances</h4>
            <p>Planifier les séances</p>
            <button class="btn btn-success">Voir Séances</button>
          </div>
        </div>

        <!-- Administration -->
        <div class="col-md-4">
          <div class="card shadow text-center p-4">
            <h4>⚙️ Administration</h4>
            <p>Gérer les paramètres du cinéma</p>
            <button class="btn btn-warning">Administration</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}
</style>
