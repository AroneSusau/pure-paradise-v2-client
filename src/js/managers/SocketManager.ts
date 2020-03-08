import {Terminal} from './Terminal.js'
import {GameDataManager} from './GameDataManager'
import {UIManager} from './UIManager'
import {RoomUpdate} from '../types/updates/RoomUpdate.js'
import {GameUpdate} from '../types/updates/GameUpdate.js'
import {ErrorUpdate} from '../types/updates/ErrorUpdate.js'
import {Player} from '../types/character/Player.js'

export class SocketManager {

    [key: string]: any

    private _socket: SocketIOClient.Socket
    private _terminal: Terminal

    constructor(io: SocketIOClientStatic) {
        const prod = 'https://socket.ppv2.aronesusau.com'
        const dev = 'http://localhost:3000'

        // @ts-ignore
        this._socket = io(ENVIRONMENT === 'production' ? prod : dev)
    }

    setTerminal(terminal: Terminal) {
        this._terminal = terminal
    }

    start(cmd: string) {
        this._socket.emit('client:start', cmd)
    }

    registerEvents(gameDataManager: GameDataManager, uiManager: UIManager) {
        this._socket.on('client:start', (response: RoomUpdate) => this.onStart(response, gameDataManager))
        this._socket.on('client:command', (response: GameUpdate) => this.command(response, gameDataManager, uiManager))

        this._socket.on('room:joined', (response: RoomUpdate) => this.playerJoined(response, gameDataManager))
        this._socket.on('room:left', (response: RoomUpdate) => this.roomLeft(response, gameDataManager))
        this._socket.on('room:movement', (response: RoomUpdate) => this.movement(response, gameDataManager))
        this._socket.on('room:chat', (response: RoomUpdate) => this.chat(response, gameDataManager))

        this._socket.on('error:invalid', (response: ErrorUpdate) => this.error(response, gameDataManager))
        this._socket.on('error:full', (response: ErrorUpdate) => this.error(response, gameDataManager))
    }

    command(response: GameUpdate, gameDataManager: GameDataManager, uiManager: UIManager) {
        for (let key in response.flags) {
            if (response.flags[key]) {
                this[key](response, gameDataManager, uiManager)
            }
        }
    }

    onStart(response: RoomUpdate, gameDataManager: GameDataManager) {
        this.validatePlayersField(response, players => {
            players.forEach(player => {
                gameDataManager.setPlayer(player)
            })
        })
    }

    movement(response: RoomUpdate, gameDataManager: GameDataManager) {
        this.validatePlayersField(response, players => {
            players.forEach(player => {
                gameDataManager.updatePlayer(player)
            })
        })
    }

    roomLeft(response: RoomUpdate, gameDataManager: GameDataManager) {
        this.validatePlayersField(response, players => {
            players.forEach(player => {
                gameDataManager.deletePlayer(player.id)
            })
        })
        this._terminal.echo(response.message, '')
    }

    mapUpdate(response: GameUpdate, gameDataManager: GameDataManager, uiManager: UIManager) {
        gameDataManager.originalMap = response.map.raw
        uiManager.setMap(response.map.raw)
    }

    playerJoined(response: RoomUpdate, gameDataManager: GameDataManager) {
        this.validatePlayersField(response, players => {
            players.forEach(player =>
                gameDataManager.setPlayer(player))
        })
        this._terminal.echo(response.message, '')
    }

    playerUpdate(response: GameUpdate, gameDataManager: GameDataManager) {
        gameDataManager.setClient(response.id, response.room, response.player)
    }

    validatePlayersField(response: RoomUpdate, callback: (player: Array<Player>) => void) {
        const players = response.players || false

        if (players && players.length > 0) {
            callback(players)
        } else console.warn('Players field is empty or undefined.')
    }

    generalUpdate(response: GameUpdate, gameDataManager: GameDataManager) {
        this._terminal.echo(response.general.text, "")
    }

    chat(response: RoomUpdate, gameDataManager: GameDataManager) {
        this._terminal.echo(response.message, 'external-terminal-chat')
    }

    error(response: ErrorUpdate, gameDataManager: GameDataManager) {
        this._terminal.echo(response.message, 'terminal-error')
    }

    battleUpdate() {
        console.log('battleUpdate')
    }

    eventUpdate() {
        console.log('eventUpdate')
    }

    contextUpdate() {
        console.log('contextUpdate')
    }

    get socket(): SocketIOClient.Socket {
        return this._socket
    }

    get terminal(): Terminal {
        return this._terminal
    }

}
