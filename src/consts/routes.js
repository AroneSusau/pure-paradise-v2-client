const client = Object.freeze({
  connection: {
    player:  "client:connection:player",
    join:  "client:connection:join",
    leave: "client:connection:leave"
  }
})

export default Object.freeze({
  client,
  error: "error"
})
