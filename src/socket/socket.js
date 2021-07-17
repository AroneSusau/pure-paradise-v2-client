import io from "socket.io-client"
import routes from "../consts/routes"
import { Parser } from "./Parser"

const prod = "https://pure-paradise-v2.herokuapp.com"
const dev = "http://localhost:3000"

const socket = io(process.env.NODE_ENV === "production" ? prod : dev)

// Debug Routes
socket.onAny((...args) => {
  if (window.store.debug) {
    console.dir(args)
  }
})

// World Routes
socket.on(routes.error, args => {
  window.store.postSystemMessage(args)
})

socket.on(routes.connection.join, args => {
  window.store.postSystemMessage(args.message)

  window.store.setMap(args.raw)
  
  window.store.setLocalPosition(args.local)
  window.store.setGlobalPosition(args.global)
  
  window.store.setHealth(args.health)
  window.store.setHunger(args.hunger)
  window.store.setThirst(args.thirst)

  window.store.setPlayerCount(args.playersCount)
})

socket.on(routes.connection.player, args => {
  window.store.postSystemMessage(args.message)
  window.store.setPlayerCount(args.playersCount)
})

socket.on(routes.connection.leave, args => {
  console.log(args)
})

// Movement Routes
socket.on(routes.movement.w, args => {
  window.store.setLocalPosition(args.local)
})

socket.on(routes.movement.a, args => {
  window.store.setLocalPosition(args.local)
})

socket.on(routes.movement.s, args => {
  window.store.setLocalPosition(args.local)
})

socket.on(routes.movement.d, args => {
  window.store.setLocalPosition(args.local)
})

export default new Parser(socket)
