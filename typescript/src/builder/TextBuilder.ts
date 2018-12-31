import Builder from './Builder'

export default class TextBuilder extends Builder {
  private buffer: string = ''
  constructor() {
    super()
  }
  makeTitle(title: string): void {
    this.buffer += '===============\n'
    this.buffer += `[${title}]\n`
    this.buffer += `\n`
  }

  makeString(str: string): void {
    this.buffer += `□${str}\n`
    this.buffer += `\n`
  }
  makeItems(items: string[]): void {
    items.map(str => {
      this.buffer += ` ・${str}`
    })
    this.buffer += `\n`
  }
  close(): void {
    this.buffer += `"===============\n`
  }
  getResult(): string {
    return this.buffer
  }
}
