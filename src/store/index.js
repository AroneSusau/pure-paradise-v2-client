import Vue from "vue"
import Vuex from "vuex"

import Menu from "./../consts/constants.js"
import types from "./../consts/types.js"

import mapper from "../utils/mapper.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: Menu.HOME,
    messages: [],
    started: false,
    map: [],
    player: {
      position: 0
    },
    count: 0
  },
  mutations: {
    [types.menu.home](state) {
      state.menu = Menu.HOME
    },
    [types.started](state) {
      state.started = state
    },
    [types.menu.about](state) {
      state.menu = Menu.ABOUT
    },
    [types.menu.help](state) {
      state.menu = Menu.HELP
    },
    [types.messages.post](state, payload) {
      if (payload.timestamp && payload.content) {
        payload.timestamp = new Intl.DateTimeFormat("en-AU", {
          dateStyle: "short",
          timeStyle: "short"
        }).format(payload.timestamp)

        state.messages.push(payload)
      } else throw `Message payload is in an invalid format: ${payload}`
    },
    [types.map.update](state, payload) {
      state.map = mapper.parse(payload.raw)
    },
    [types.player.position](state, payload) {
      state.player.position = payload
    }
  },
  actions: {
    [types.menu.home](context) {
      context.commit(types.menu.home)
    },
    [types.started](context) {
      context.commit(types.started)
    },
    [types.menu.help](context) {
      context.commit(types.menu.help)
    },
    [types.menu.about](context) {
      context.commit(types.menu.about)
    },
    [types.messages.post](context, payload) {
      context.commit(types.messages.post, payload)
    },
    [types.map.update](context, payload) {
      context.commit(types.map.update, payload)
    },
    [types.player.position](context, payload) {
      context.commit(types.player.position, payload)
    }
  },
  modules: {}
})
