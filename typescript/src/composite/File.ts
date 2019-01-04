import Entry from './Entry'

export default class File extends Entry {
  private _name: string
  private _size: number
  constructor(name: string, size: number) {
    super()
    this._name = name
    this._size = size
  }
  getName(): string {
    return this._name
  }
  getSize(): number {
    return this._size
  }
  printList(prefix: string = ''): void {
    console.log(prefix + '/' + this._name)
  }
}
