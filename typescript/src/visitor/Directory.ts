import Entry from './Entry'
import Visitor from './Visitor'
import Element from './Element'

export default class Directory extends Entry {
  private _name: string
  private _directory: Array<Entry> = []
  constructor(name: string) {
    super()
    this._name = name
  }
  getName(): string {
    return this._name
  }
  getSize(): number {
    let size: number = 0
    this._directory.map(entry => {
      size += entry.getSize()
    })
    return size
  }
  add(entry: Entry): Entry {
    this._directory.push(entry)
    entry.parent = this
    console.log('parent', entry.parent)
    return this
  }

  getList(): Array<Element> {
    return this._directory
  }
  accept(visitor: Visitor): void {
    visitor.visit(this)
  }
}
