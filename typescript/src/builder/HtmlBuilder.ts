import Builder from './Builder'

export default class HtmlBuilder extends Builder {
  private buffer: string = ''
  constructor() {
    super()
  }
  makeTitle(title: string): void {
    this.buffer += `
            <html>
            <head>
            <title>${title}</title>
            <body>
            <h1>${title}</h1>
        `
  }

  makeString(str: string): void {
    this.buffer += `<p>${str}</p>`
  }
  makeItems(items: string[]): void {
    this.buffer += `<ul>`
    items.map(str => {
      this.buffer += `<li>${str}</li>`
    })
    this.buffer += `</ul>`
  }
  close(): void {
    this.buffer += `
            </body>
            </html>
        `
  }
  getResult(): string {
    return this.buffer
  }
}
