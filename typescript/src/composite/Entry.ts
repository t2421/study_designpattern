export default abstract class Entry {
  public parent: Entry
  abstract getName(): string
  abstract getSize(): number
  abstract printList(prefix: string): void

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
  }
  add(entry: Entry): Entry {
    throw new Error('addできない')
  }
}
