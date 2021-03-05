import Vue from "vue";
import App from "./App.vue";
import types from "./enums/types";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

store.dispatch(types.messages.post, {
  timestamp: Date.now(),
  content: "Please enter your adventurers name..",
  origin: types.origin.system
});

setInterval(() => {
  store.dispatch("count");
}, 1000);

const worker = new Worker("./worker.js");

worker.postMessage("hello world");
