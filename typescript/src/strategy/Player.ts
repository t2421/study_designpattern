import Strategy from './Strategy'

export default class Player {
  private _strategy: Strategy
  private _stock: number = 0

  constructor(strategy: Strategy) {
    this._strategy = strategy
  }

  nextDay(): void {
    if (this._strategy.isBuy()) {
      this._stock++
    }
  }
  getStock(): number {
    return this._stock
  }
}
