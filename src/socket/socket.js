import io from "socket.io-client";

import types from "./../enums/types.js";
import store from "./../store/index.js";

const prod = "https://pure-paradise-v2.herokuapp.com";
const dev = "http://localhost:3000";

const socket = io(process.env.NODE_ENV === "production" ? prod : dev);

socket.on("client:command", response => {
  if (response.general) {
    store.dispatch(types.messages.post, {
      timestamp: Date.now(),
      content: response.general.text,
      origin: types.origin.system
    });
  }

  if (response.map) {
    store.dispatch(types.map.update, {
      raw: response.map.raw
    });
  }

  if (response.player) {
    store.dispatch(types.player.position, response.player.coords.local);
  }

  console.dir(response);
});

export default socket;
