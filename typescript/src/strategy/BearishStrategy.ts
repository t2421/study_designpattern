import Strategy from './Strategy'
import Player from './Player'

export default class BearishStrategy implements Strategy {
  private _ratio: number = 0.5
  constructor() {}
  isBuy(): boolean {
    //50%の確率で買いを行う。
    if (Math.random() < this._ratio) {
      return false
    }
    return true
  }
}
