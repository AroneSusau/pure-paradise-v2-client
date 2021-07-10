<script>
import store from "./../store/index.js"
import types from "./../consts/types.js"

export default {
  name: "Chatbar",
  data() {
    return {
      types
    }
  },
  computed: {
    messages: () => store.state.messages
  },
  updated() {
    const scroll = document.querySelector("#chat-scroll")
    scroll.scrollTop = scroll.scrollHeight
  }
}
</script>

<style>
.overflow-y-scroll {
  overflow-y: auto;
  overflow-x: hidden;
}
</style>

<template>
  <div class="position-relative overflow-y-scroll w-25" id="chat-scroll">
    <div
      class="position-absolute d-flex flex-column pt-3 pe-3 fs-tiny text-light"
    >
      <div v-for="message in messages" :key="message.id">
        <div
          class="slide-in"
          v-bind:class="{
            'text-blue': message.origin === types.origin.user
          }"
        >
          <p class="mb-1" v-html="message.content"></p>
          <p class="figure-caption">
            {{ types.origin.tags[message.origin] }} : {{ message.timestamp }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
