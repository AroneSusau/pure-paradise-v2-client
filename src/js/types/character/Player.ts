import {Location} from "./Location"

export class Player {

    private readonly _id: string
    private readonly _name: string
    private readonly _room: string
    private readonly _location: Location
    private _context: string
    private _type: number

    constructor(id: string, name: string, room: string, local: number, global: number, context: string) {
        this._id = id
        this._name = name
        this._room = room
        this._location = new Location(local, global)
        this._context = context
    }

    get context(): string {
        return this._context
    }

    set context(value: string) {
        this._context = value
    }

    get type(): number {
        return this._type
    }

    get id(): string {
        return this._id
    }

    get name(): string {
        return this._name
    }

    get room(): string {
        return this._room
    }

    get location(): Location {
        return this._location
    }

}
