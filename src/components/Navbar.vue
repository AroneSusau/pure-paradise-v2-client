<script>
export default {
  name: "Narbar",
  data: () => window.store,
  methods: {
    home() { window.store.setMenuHome() },
    help() { window.store.setMenuHelp() },
    about() { window.store.setMenuAbout() },
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg h-auto navbar-dark bg-dark">
    <div class="container-fluid p-0">
      <a class="navbar-brand">Pure Paradise v2.0</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a @click="home" class="nav-link">Home</a>
          <a @click="about" class="nav-link">About</a>
          <a class="nav-link" href="https://github.com/AroneSusau/pure-paradise-server" target="_blank" >Project</a>
          <a @click="help" class="nav-link">Help</a>
        </div>
      </div>
    </div>
  </nav>
</template>
