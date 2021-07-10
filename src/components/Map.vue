<script>
import store from "./../store/index.js"

export default {
  name: "Map",
  computed: {
    map: () => store.state.map,
    playerIndex: () => store.state.player.position
  }
}
</script>

<style>
.player {
  display: inline;
  color: #6996c4;
  text-shadow: 0 0 5px #6996c4;
  animation: player-glow 2.2s infinite;
}

@keyframes player-glow {
  0% {
    color: #6996c4;
    text-shadow: 0 0 5px #6996c4;
  }

  50% {
    color: #21252925;
    text-shadow: 0 0 5px #21252933;
  }

  100% {
    color: #6996c4;
    text-shadow: 0 0 5px #6996c4;
  }
}

.objective {
  display: inline;
  color: goldenrod;
  text-shadow: 0 0 5px goldenrod;
}

.road {
  color: #815a38 !important;
}

.grass {
  color: green !important;
}

.wood {
  color: #8f4a06 !important;
}
</style>

<template>
  <div class="d-flex justifify-content-center align-items-center">
    <div>
      <span class="slide-in" v-for="(char, index) in map" v-bind:key="index">
        <br v-if="index % 20 == 0 && index != 0" />
        <span v-if="index != playerIndex" v-html="char"></span>
        <span v-else class="text-blue player text-monospace">PP</span>
      </span>
    </div>
  </div>
</template>
