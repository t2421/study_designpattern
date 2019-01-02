import DisplayImplement from './DisplayImplement'

export default class Display {
  private _impl: DisplayImplement
  constructor(impl: DisplayImplement) {
    this._impl = impl
  }

  open(): void {
    this._impl.open()
  }
  print(): void {
    this._impl.print()
  }
  close(): void {
    this._impl.close()
  }
  display(): void {
    this.open()
    this.print()
    this.close()
  }
}
