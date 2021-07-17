import Menu from "./../consts/constants.js"
import mapper from "../utils/mapper.js"
import format from "../utils/format"
import types from "./types.js"

export default {
  
  // Player Stats
  health: 0,
  hunger: 0,
  thirst: 0,
  
  position: {
    local: { x: 0, y: 0 },
    global: { x: 0, y: 0 },
  },

  // World Stats
  playerCount: 0,
  messages: [],
  map: [],
  
  // Client Stats
  started: false,
  menu: Menu.HOME,

  // Getters
  getLocalIndex() {
    return this.position.local.y * 20 + this.position.local.x
  },

  getGlobalIndex() {
    return this.position.global.y * 2 + this.position.global.x
  },

  isMenu(payload) {
    return this.menu == payload
  },

  // Setters Player
  setHealth(payload) {
    this.health = payload
  },

  setHunger(payload) {
    this.hunger = payload
  },

  setThirst(payload) {
    this.thirst = payload
  },

  setLocalPosition(payload) {
    this.position.local = payload
  },

  setGlobalPosition(payload) {
    this.position.global = payload
  },

  // Setters World
  setPlayerCount(payload) {
    this.playerCount = payload
  },

  setMap(payload) {
    this.map = mapper.parse(payload)
  },

  // Setters Client
  setStarted() {
    this.started = true
  },

  setMenuHome() {
    this.menu = Menu.HOME
  },

  setMenuHelp() {
    this.menu = Menu.HELP
  },

  setMenuAbout() {
    this.menu = Menu.ABOUT
  },

  // Actions
  postSystemMessage(payload) {
    this.messages.push({
      timestamp: format.prettyDateTime(Date.now()),
      content: payload,
      origin: types.origin.system
    })
  },

  postCommandMessage(payload) {
    this.messages.push({
      timestamp: format.prettyDateTime(Date.now()),
      content: payload,
      origin: types.origin.user
    })
  },
}
