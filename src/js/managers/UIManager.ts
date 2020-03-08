import {MapParser} from '../types/utils/MapParser.js'
import {GameDataManager} from './GameDataManager'

const mapParser = new MapParser()

export class UIManager {

    private raw: Array<number>
    private parsed: Array<string>
    private length: number
    private fps: number
    
    setMap(raw: Array<number>): void {
        this.raw = raw
        this.parsed = mapParser.parse(raw)
        this.length = raw.length
        this.fps = 1000 / 30
    }

    createMap(): void {
        const map = document.getElementById('map')
        const frag = document.createDocumentFragment()

        for (let i = 0; i < this.length; i++) {
            const span = document.createElement('span')
            const text = document.createTextNode(this.parsed[i])

            if (i % 20 === 0)
                frag.appendChild(document.createElement('br'))

            span.id = `node${i}`

            span.appendChild(text)
            frag.appendChild(span)
        }

        map.appendChild(frag)
    }

    startFrame(gameDataManager: GameDataManager): void {
        setInterval(() => this.updateFrame(gameDataManager), this.fps)
    }

    updateFrame(gameDataManager: GameDataManager) {
        this.refreshMap()
        this.drawPlayersPositions(gameDataManager)
        this.drawClientsPosition(gameDataManager)

    }

    drawClientsPosition(gameDataManager: GameDataManager): void {
        const localExists = gameDataManager.localPlayer.location.local !== undefined && gameDataManager.localPlayer.location.local >= 0

        if (localExists) {
            const span = document.getElementById(`node${gameDataManager.localPlayer.location.local}`)
            span.removeChild(span.childNodes[0])
            span.appendChild(document.createTextNode('PP'))
            span.className = 'player'
        }
    }

    drawPlayersPositions(gameDataManager: GameDataManager): void {
        gameDataManager.players.forEach(player => {
            const span = document.getElementById(`node${player.location.local}`)

            if (span.textContent === this.parsed[player.location.local] &&
                gameDataManager.localPlayer.location.global === player.location.global) {

                span.removeChild(span.childNodes[0])
                span.appendChild(document.createTextNode('PP'))

                span.className = 'otherPlayer'
            }
        })
    }

    refreshMap(): void {
        for (let i = 0; i < this.length; i++) {
            const span = document.getElementById(`node${i}`)
            if (span.textContent !== this.parsed[i]) {
                span.removeChild(span.childNodes[0])
                span.appendChild(document.createTextNode(this.parsed[i]))
                span.className = ''
            }

            if (span.textContent === '??') {
                span.className = 'objective'
            }
        }
    }

}
