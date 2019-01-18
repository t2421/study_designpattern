import BigChar from './BigChar'

export default class BigCharFactory {
  private static instance: BigCharFactory = new BigCharFactory()
  private pool: any = {}
  private constructor() {}

  public static getInstance(): BigCharFactory {
    return this.instance
  }

  public getBigChar(charname: string): BigChar {
    let bigchar: BigChar = this.pool[charname]
    if (bigchar == null) {
      bigchar = new BigChar(charname)
      this.pool[charname] = bigchar
    }
    return bigchar
  }
}
