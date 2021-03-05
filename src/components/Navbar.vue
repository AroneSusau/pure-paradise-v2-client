<script>
import types from "./../enums/types.js";
import { mapActions } from "vuex";

export default {
  name: "Narbar",
  methods: {
    ...mapActions([types.menu.home, types.menu.inventory])
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg h-auto navbar-dark bg-dark">
    <div class="container-fluid">
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
          <a @click="menu_inventory" class="nav-link">About</a>
          <a @click="menu_inventory" class="nav-link">Project</a>
          <a @click="menu_inventory" class="nav-link">Help</a>
        </div>
      </div>
    </div>
  </nav>
</template>
