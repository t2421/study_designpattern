import Context from './Context'
import State from './State'
import DayState from './DayState'

export default class SafeFrame implements Context {
  private state: State = DayState.getInstance()
  constructor() {}

  setClock(hour: number): void {
    this.state.doClock(this, hour)
  }
  changeState(state: State): void {
    this.state = state
  }
  emulateAlert(): void {
    this.state.doAlarm(this)
  }
  emulteCall(): void {
    this.state.doPhone(this)
  }

  emulteUse(): void {
    this.state.doUse(this)
  }

  callSecurityCenter(msg: string): void {
    console.log(msg)
  }
  recordLog(msg: string): void {
    console.log(`record--${msg}`)
  }
}
