const types = Object.freeze({
  menu: {
    home: "menu_home",
    about: "menu_about",
    help: "menu_help"
  },
  started: "started",
  messages: {
    post: "messages_post"
  },
  origin: {
    user: "origin_user",
    system: "origin_system",
    error: 'origin_error',
    tags: {
      origin_user: "User",
      origin_system: "System",
      origin_error: "Error"
    }
  },
  map: {
    update: "map_update",
    other: "other_player"
  },
  player: {
    position: "player_position",
    stats: "player_stats",
    playerCount: "player_count",
  }
})

export default types
