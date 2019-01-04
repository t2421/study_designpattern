import Strategy from './Strategy'
import Player from './Player'

export default class StrongStrategy implements Strategy {
  constructor() {}
  isBuy(): boolean {
    //有無を言わせず買いに走る強気ロジック
    return true
  }
}
