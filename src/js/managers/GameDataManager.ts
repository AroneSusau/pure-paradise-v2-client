import {Player} from '../types/character/Player'
import {PlayerInfo} from '../types/updates/GameUpdate'

export class GameDataManager {

    private readonly _players: Map<string, Player>
    private readonly _defaultMap: Array<number>
    private _localPlayer: Player
    private _originalMap: Array<number>

    constructor() {
        this._players = new Map()
        this._defaultMap = [
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3
        ]
    }

    get players() {
        return this._players
    }

    setClient(id: string, room: string, player: PlayerInfo): void {
        this._localPlayer = new Player(
            id,
            player.name,
            room,
            player.coords.local,
            player.coords.global,
            player.context.toString())
    }

    setPlayer(player: Player): void {
        this.validatePlayer(player)
        if (!this._players.has(player.id)) {
            this._players.set(player.id,
                new Player(
                    player.id,
                    player.name,
                    player.room,
                    player.location.local,
                    player.location.global,
                    player.context
                ))
        } else console.warn(`Attempting to set player ${player.id} that already exists.`)
    }

    updatePlayer(player: Player): void {
        this.validatePlayer(player)
        if (this._players.has(player.id) && player.context) {
            const otherPlayer = this._players.get(player.id)
            otherPlayer.location.local = player.location.local
            otherPlayer.location.global = player.location.global
            otherPlayer.context = player.context
        } else console.warn(`Attempting to update player ${player.id} that does not exist.`)
    }

    deletePlayer(id: string): void {
        this._players.delete(id)
    }

    validatePlayer(player: Player): void {
        if (player) {
            for (let key in player) {
                if (!player.hasOwnProperty(key)) {
                    console.warn(`Player key ${key} was undefined.`)
                }
            }
        } else console.warn(`Player object passed in was invalid.`)
    }

    getLength(): number {
        return this._players.size
    }

    getPlayer(key: string): Player {
        return this._players.get(key)
    }

    get defaultMap(): Array<number> {
        return this._defaultMap
    }

    get localPlayer(): Player {
        return this._localPlayer
    }

    get originalMap(): Array<number> {
        return this._originalMap
    }

    set originalMap(key: Array<number>) {
        this._originalMap = key
    }
}
