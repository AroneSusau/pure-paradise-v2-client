<script>
import routes from "./../consts/routes.js"
import socket from "./../socket/socket.js"

export default {
  name: "Welcome",
  data() {
    return {
      output: "",
      command: "",
      store: window.store,
    }
  },
  methods: {
    start() {
      this.output = this.command
      this.command = ""

      window.store.setStarted()
      socket.emit(routes.client.connection.join, this.output)
    }
  }
}
</script>

<style scoped>
.welcome-box {
  margin: auto;
}
</style>

<template>
  <div class="w-50 p-5 welcome-box bg-light rounded shadow">
    <h1 class="mb-5">Welcome to Pure Paradise</h1>
    <div>
      <label for="formFile" class="form-label text-dark"
        >Please enter your adventurers name.</label
      >
      <div class="input-group">
        <input
          v-model="command"
          @keypress.enter="start"
          type="text"
          class="form-control text-dark bg-light border-secondary"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <button @click="start" class="btn btn-secondary" type="button">
          Enter
        </button>
      </div>
    </div>
  </div>
</template>
