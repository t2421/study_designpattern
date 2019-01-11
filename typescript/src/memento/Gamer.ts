import Memento from './Memento'
import ComplexShape from '../prototype/ComplexShape'

export default class Gamer {
  private _money: number
  private _fruits: Array<string> = []

  private static _fruitsname = ['りんご', 'ぶどう', 'なし']

  constructor(money: number) {
    this._money = money
  }

  public getMoney(): number {
    return this._money
  }

  public bet(): void {
    let dice = Math.ceil(Math.random() * 6)
    console.log(dice)
    if (dice == 1) {
      this._money += 1000
      console.log('増えたよ')
    } else if (dice == 2) {
      this._money = Math.ceil(this._money / 2)
      console.log('半分になたよ')
    } else if (dice == 6) {
      let f = this.getFruit()
      this._fruits.push(f)
      console.log('フルーツをモラタよ')
    } else {
      console.log('何もなし')
    }
  }

  private getFruit(): string {
    let index = Math.floor(Math.random() * this._fruits.length)
    return Gamer._fruitsname[index]
  }

  public createMemento(): Memento {
    let m: Memento = new Memento(this._money)
    this._fruits.map(fruit => {
      m.addFruits(fruit)
    })
    return m
  }

  restoreMemento(m: Memento): void {
    this._money = m.getMoney()
    this._fruits = m.getFruits()
  }
}
