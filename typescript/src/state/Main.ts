import Context from './Context'
import SafeFrame from './SafeFrame'

export default class Main {
  private context: SafeFrame
  private hour: number = 10
  constructor() {
    this.context = new SafeFrame()

    setInterval(() => {
      this.addHour()
      console.log('\n---------------')
      console.log(`${this.hour}時`)
      this.context.setClock(this.hour)

      this.context.emulateAlert()
      this.context.emulteCall()
      this.context.emulteUse()
    }, 1000)
  }

  addHour() {
    this.hour++
    if (this.hour >= 24) {
      this.hour = 0
    }
  }
}
