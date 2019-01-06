import Element from './Element'
import Visitor from './Visitor'

export default abstract class Entry implements Element {
  public parent: Entry
  abstract getName(): string
  abstract getSize(): number

  printFullPath(): void {
    let parents: Array<Entry> = []
    let target: Entry = this
    while (target.parent) {
      parents.unshift(target.parent)
      target = target.parent
    }

    let path: string = ''
    parents.map(entry => {
      path += '/' + entry.getName()
    })
    path += '/' + this.getName()
    console.log(path)
  }
  add(entry: Entry): Entry {
    throw new Error('addできない')
  }
  abstract accept(visitor: Visitor)
}
