import {Player} from '../character/Player'

export type RoomUpdate = {
    room?: string
    count?: number
    message?: string
    players?: Array<Player>
}
