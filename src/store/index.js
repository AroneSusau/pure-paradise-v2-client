import Vue from "vue";
import Vuex from "vuex";

import Menu from "./../enums/constants.js";
import types from "./../enums/types.js";

import mapper from "../utils/mapper.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: Menu.HOME,
    messages: [],
    map: [],
    player: {
      position: 0
    },
    count: 0
  },
  mutations: {
    [types.menu.home](state) {
      state.menu = Menu.HOME;
    },
    [types.menu.inventory](state) {
      state.menu = Menu.INVENTORY;
    },
    [types.messages.post](state, payload) {
      if (payload.timestamp && payload.content) {
        payload.timestamp = new Intl.DateTimeFormat("en-AU", {
          dateStyle: "short",
          timeStyle: "short"
        }).format(payload.timestamp);

        state.messages.push(payload);
      } else throw "Message payload is in an invalid format";
    },
    [types.map.update](state, payload) {
      state.map = mapper.parse(payload.raw);
    },
    [types.player.position](state, payload) {
      state.player.position = payload;
    },
    ["count"](state) {
      state.count = state.count >= 99 ? 0 : state.count + 5;
    }
  },
  actions: {
    [types.menu.home](context) {
      context.commit(types.menu.home);
    },
    [types.menu.inventory](context) {
      context.commit(types.menu.inventory);
    },
    [types.messages.post](context, payload) {
      context.commit(types.messages.post, payload);
    },
    [types.map.update](context, payload) {
      context.commit(types.map.update, payload);
    },
    [types.player.position](context, payload) {
      context.commit(types.player.position, payload);
    },
    ["count"](context) {
      context.commit("count");
    }
  },
  modules: {}
});
