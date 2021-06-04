<script>
import types from "../consts/types.js";
import store from "../store/index.js";
import socket from "./../socket/socket.js";

export default {
  name: "Terminal",
  data() {
    return {
      output: "",
      command: ""
    };
  },
  methods: {
    update() {
      this.output = this.command;
      this.command = "";

      if (
        this.output.toLowerCase() != "w" &&
        this.output.toLowerCase() != "a" &&
        this.output.toLowerCase() != "s" &&
        this.output.toLowerCase() != "d"
      ) {
        store.dispatch(types.messages.post, {
          timestamp: Date.now(),
          content: this.output,
          origin: types.origin.user
        });
      }

      socket.emit("client:command", this.output);
    }
  }
};
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
