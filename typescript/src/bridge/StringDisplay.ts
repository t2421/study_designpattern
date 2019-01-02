import DisplayImplement from './DisplayImplement'

export default class StringDisplay extends DisplayImplement {
  private _msg: string
  constructor(msg: string) {
    super()
    this._msg = msg
  }

  open(): void {
    console.log(`\n`)
  }
  print(): void {
    console.log(`
            ${this._msg}
        `)
  }

  close(): void {
    console.log(`\n`)
  }
}
