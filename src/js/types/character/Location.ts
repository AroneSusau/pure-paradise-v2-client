export class Location {

    private _local: number
    private _global: number

    constructor(local: number, global: number) {
        this._local = local
        this._global = global
    }

    get local(): number {
        return this._local
    }

    set local(value: number) {
        this._local = value
    }

    get global(): number {
        return this._global
    }

    set global(value: number) {
        this._global = value
    }
}
