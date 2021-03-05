const types = Object.freeze({
  menu: {
    home: "menu_home",
    inventory: "menu_inventory"
  },
  messages: {
    post: "messages_post"
  },
  origin: {
    user: "origin_user",
    system: "origin_system",
    tags: {
      origin_user: "User",
      origin_system: "System"
    }
  },
  map: {
    update: "map_update"
  },
  player: {
    position: "player_position"
  }
});

export default types;
