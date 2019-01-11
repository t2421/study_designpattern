export default class Memento {
  private _money: number = 0
  private _fruits: Array<string> = []
  constructor(money: number) {
    this._money = money
  }

  addFruits(fruit: string): void {
    this._fruits.push(fruit)
  }

  getFruits(): Array<string> {
    return this._fruits.slice()
  }

  getMoney(): number {
    return this._money
  }
}
