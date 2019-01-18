export default class BigChar {
  private charname: string
  private fontdata: string

  constructor(charname: string) {
    this.charname = charname
    this.fontdata = `すごいおっきい、${charname}`
  }

  print(): void {
    console.log(this.fontdata)
  }
}
