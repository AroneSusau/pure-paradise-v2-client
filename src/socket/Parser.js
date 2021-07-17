import routes from "../consts/routes"

const context = {
  FREE_ROAM: 0,
  EVENT: 1,
  BATTLE: 2,
  SHOP: 3,
  INVENTORY: 4,
  names: [
    "Free Roam",
    "Event",
    "Battle",
    "Shop",
    "Inventory",
  ]
}

export class Parser {

  constructor(socket) {
    this.socket = socket
  }

  start(name) {
    this.socket.emit(routes.connection.join, name)
  }

  send(command) {

    command = command.toLowerCase()

    if (window.store.context == context.FREE_ROAM) {
      this.freeroam(command)
    } else if (window.store.context == context.EVENT) {
      this.event()
    } else if (window.store.context == context.BATTLE) {
      this.battle()
    } else if (window.store.context == context.SHOP) {
      this.shop()
    } else if (window.store.context == context.INVENTORY) {
      this.inventory()
    }
  }

  freeroam(command) {
    if (command == "w") {
      this.socket.emit(routes.movement.w, "")
    } else if (command == "a") {
      this.socket.emit(routes.movement.a, "")
    } else if (command == "s") {
      this.socket.emit(routes.movement.s, "")
    } else if (command == "d") {
      this.socket.emit(routes.movement.d, "")
    } else {
      this.error(command)
    }
  }

  event() {}

  battle() {}

  shop() {}

  inventory() {}

  error(command) {
    window.store.postErrorMessage(`Invalid command "${command}" in ${context.names[window.store.context]}`)
  }

}