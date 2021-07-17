import Vue from "vue"
import App from "./App.vue"
import store from "./consts/gamedata"

Vue.config.productionTip = false

window.store = store

new Vue({
  render: h => h(App)
}).$mount("#app")
