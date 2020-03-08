import {Player} from '../character/Player.js'

export type RoomUpdate = {
    room?: string
    count?: number
    message?: string
    players?: Array<Player>
}
