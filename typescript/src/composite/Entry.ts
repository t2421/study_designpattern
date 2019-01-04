export default abstract class Entry {
  abstract getName(): string
  abstract getSize(): number
  abstract printList(prefix: string): void
  add(entry: Entry): Entry {
    throw new Error('addできない')
  }
}
