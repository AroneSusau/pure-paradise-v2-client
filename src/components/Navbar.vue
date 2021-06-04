<script>
import types from "./../consts/types.js";
import { mapActions } from "vuex";

export default {
  name: "Narbar",
  methods: {
    ...mapActions([types.menu.home, types.menu.about, types.menu.help])
  }
};
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
          <a @click="menu_home" class="nav-link">Home</a>
          <a @click="menu_about" class="nav-link">About</a>
          <a
            class="nav-link"
            href="https://github.com/AroneSusau/pure-paradise-server"
            target="_blank"
            >Project</a
          >
          <a @click="menu_help" class="nav-link">Help</a>
        </div>
      </div>
    </div>
  </nav>
</template>
