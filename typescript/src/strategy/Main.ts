import Player from './Player'
import StrongStrategy from './StrongStrategy'
import Strategy from './Strategy'
import BearishStrategy from './BearishStrategy'

export default class Main {
  private _player: Player = new Player(new StrongStrategy())
  private _player2: Player = new Player(new BearishStrategy())
  private _stockValue: number = 1000
  constructor() {
    for (let i = 0; i < 365; i++) {
      this._player.nextDay()
      this._player2.nextDay()
    }
    console.log(this._player.getStock() * this._stockValue)
    console.log(this._player2.getStock() * this._stockValue)
  }
}
