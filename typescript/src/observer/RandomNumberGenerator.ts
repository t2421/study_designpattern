import NumberGenerator from './NumberGenerator'

export default class RandomNumberGenerator extends NumberGenerator {
  private _number: number = 0
  constructor() {
    super()
  }
  getNumber(): number {
    return this._number
  }
  execute(): void {
    this._number = Math.random() * 100
    this.notifyObservers()
  }
}
