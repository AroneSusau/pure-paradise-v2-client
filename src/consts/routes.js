const connection = {
  player: "client:connection:player",
  join: "client:connection:join",
  leave: "client:connection:leave",
}

const movement = {
  w: "client:movement:w",
  a: "client:movement:a",
  s: "client:movement:s",
  d: "client:movement:d",
}

export default Object.freeze({
  connection,
  movement,
  error: "error"
})
