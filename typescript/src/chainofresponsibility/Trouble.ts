export default class Trouble {
  private _number: number
  constructor(number: number) {
    this._number = number
  }

  getNumber(): number {
    return this._number
  }

  toString(): string {
    return `[Trouble ${this._number}]`
  }
}
