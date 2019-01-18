import BigChar from './BigChar'
import BigCharFactory from './BigCharFactory'

export default class BigString {
  private bs: Array<BigChar> = []
  constructor(str: string) {
    let bigCharFactory: BigCharFactory = BigCharFactory.getInstance()
    for (let i = 0; i < str.length; i++) {
      this.bs.push(bigCharFactory.getBigChar(str.charAt(i)))
    }
  }

  print(): void {
    for (let i = 0; i < this.bs.length; i++) {
      this.bs[i].print()
    }
  }
}
