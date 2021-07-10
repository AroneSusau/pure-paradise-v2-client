import io from "socket.io-client"
import routes from "../consts/routes"
import types from "../consts/types"
import store from "../store"

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
  store.dispatch(types.messages.post, {
    timestamp: Date.now(),
    content: args,
    origin: types.origin.system
  })
})

socket.on(routes.client.connection.join, args => {
  console.log(args)

  store.dispatch(types.messages.post, {
    timestamp: Date.now(),
    content: args.message,
    origin: types.origin.system
  })

  store.dispatch(types.map.update, args)
  store.dispatch(types.player.position, args.local.y * 20 + args.local.x)
})

socket.on(routes.client.connection.leave, args => {
  console.log(args)
})

export default socket
