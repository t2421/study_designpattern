import DisplayImplement from './DisplayImplement'

export default class HtmlDisplay extends DisplayImplement {
  private _msg: string
  constructor(msg: string) {
    super()
    this._msg = msg
  }

  open(): void {
    console.log(`<html><body>`)
  }
  print(): void {
    console.log(`
            <p>${this._msg}</p>
        `)
  }

  close(): void {
    console.log(`</body></html>`)
  }
}
