const io = require('socket.io-client')
import {GameDataManager} from './managers/GameDataManager'
import {SocketManager} from './managers/SocketManager'
import {UIManager} from './managers/UIManager'
import {Terminal} from './managers/Terminal.js'

const socketManager = new SocketManager(io)
const gameDataManager = new GameDataManager()
const uiManager = new UIManager()
const term = new Terminal()

let gameStarted = false

term.echo('Arone Susau 2020 - www.aronesusau.com', 'terminal-main')
term.echo('Please enter your characters name..', 'terminal-main')

window.onload = (e: KeyboardEvent) => {
    const terminalContainer: HTMLElement = document.getElementById('terminal-container')
    const input: HTMLInputElement = document.querySelector('input')

    input.focus()
    input.select()

    terminalContainer.onclick = () => {
        input.focus()
        input.select()
    }

    term.command((cmd: string) => {
        if (!gameStarted) {
            socketManager.setTerminal(term)
            socketManager.start(cmd)
            socketManager.registerEvents(gameDataManager, uiManager)

            uiManager.setMap(gameDataManager.defaultMap)
            uiManager.createMap()
            uiManager.startFrame(gameDataManager)
        }

        if (gameStarted) {
            const cmdSplit = cmd.split(' ')
            const action = cmdSplit[0]
            cmdSplit.shift()
            const content = cmdSplit.join(' ')

            switch (action) {
                case '/chat':
                    term.echo(`You: ${content}`, 'client-terminal-chat')
                    socketManager.socket.emit('room:chat', content)
                    break
                case '/debug':
                    debug(gameDataManager)
                    break
                default:
                    socketManager.socket.emit('client:command', cmd)
            }
        }

        gameStarted = true
    })
}

function debug(gameDataManager: GameDataManager) {
    console.dir(gameDataManager)
}

