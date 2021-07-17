import io from "socket.io-client"
import routes from "../consts/routes"

const prod = "https://pure-paradise-v2.herokuapp.com"
const dev = "http://localhost:3000"

const socket = io(process.env.NODE_ENV === "production" ? prod : dev)

// TODO: Remove later
// socket.onAny((...args) => {
//   console.log("******IGNORE******")
//   console.dir(args)
//   console.log("******IGNORE******")
// })

socket.on(routes.error, args => {
  window.store.postSystemMessage(args)
})

socket.on(routes.client.connection.join, args => {
  console.log(args)

  window.store.postSystemMessage(args.message)

  window.store.setMap(args.raw)
  
  window.store.setLocalPosition(args.local)
  window.store.setGlobalPosition(args.global)
  
  window.store.setHealth(args.health)
  window.store.setHunger(args.hunger)
  window.store.setThirst(args.thirst)

  window.store.setPlayerCount(args.playersCount)
})

socket.on(routes.client.connection.player, args => {
  console.log(args)

  window.store.postSystemMessage(args.message)
  window.store.setPlayerCount(args.playersCount)
})

socket.on(routes.client.connection.leave, args => {
  console.log(args)
})

export default socket
