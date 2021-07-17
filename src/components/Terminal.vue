<script>
import parser from "./../socket/socket.js"

export default {
  name: "Terminal",
  data() {
    return {
      output: "",
      command: "",
      store: window.store
    }
  },
  methods: {
    update() {
      this.output = this.command
      this.command = ""

      parser.send(this.output)
    }
  }
}
</script>

<template>
  <div>
    <div class="row">
      <div class="input-group">
        <input
          v-model="command"
          @keypress.enter="update"
          type="text"
          class="form-control text-dark bg-light border-dark"
          aria-label="Username"
          aria-describedby="basic-addon1"
          placeholder="Please enter a command.."
        />
        <button @click="update" class="btn btn-secondary" type="button">
          Enter
        </button>
      </div>
    </div>
  </div>
</template>
