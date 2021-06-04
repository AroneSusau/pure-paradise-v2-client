<script>
import Navbar from "./components/Navbar.vue";
import Chatbar from "./components/Chatbar.vue";
import Welcome from "./components/Welcome.vue";
import Map from "./components/Map.vue";
import Stats from "./components/Stats.vue";
import Terminal from "./components/Terminal.vue";
import Footer from "./components/Footer.vue";

import Menu from "./consts/constants.js";
import store from "./store/index.js";

export default {
  name: "App",
  components: {
    Navbar,
    Chatbar,
    Map,
    Stats,
    Terminal,
    Footer,
    Welcome
  },
  computed: {
    home: () => store.state.menu === Menu.HOME,
    about: () => store.state.menu === Menu.ABOUT,
    help: () => store.state.menu === Menu.HELP,
    started: () => store.state.started
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.text-blue {
  color: #6996c4;
}

.border-light-blue {
  border-color: #2c3e50 !important;
}

.fs-tiny {
  font-size: 0.75em !important;
}

.text-monospace {
  font-family: monospace !important;
  white-space: pre !important;
  font-size: 16px;
}

@keyframes slide-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: 1s slide-right;
}

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #78879659 #212529;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #212529;
}

*::-webkit-scrollbar-thumb {
  background-color: #78879659;
  border-radius: 20px;
}
</style>

<template>
  <div
    class="container-fluid d-none d-lg-flex mx-auto p-5 vh-100 flex-column justify-content-between"
    id="app"
  >
    <Navbar />
    <div v-if="started && home" class="d-flex my-3 flex-grow-1 flex-column">
      <div
        class="d-flex flex-grow-1 border-top border-bottom border-light-blue"
      >
        <Chatbar />
        <div class="d-flex justify-content-between flex-grow-1">
          <Stats />
          <Map />
        </div>
      </div>
      <div class="py-5">
        <Terminal />
      </div>
    </div>
    
    <div v-if="about" class="d-flex my-3 flex-grow-1 flex-column">
      <div>
        <h1>Help</h1>
      </div>
    </div>

    <div v-if="help" class="d-flex my-3 flex-grow-1 flex-column">
      <div>
        <h1>Help</h1>
      </div>
    </div>

    <div v-else>
      <Welcome v-if="!started && home" />
    </div>
    <Footer />
  </div>
</template>
