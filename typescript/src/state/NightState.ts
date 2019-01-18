import State from './State'
import Context from './Context'
import DayState from './DayState'

export default class NightState implements State {
  private static singleton: State = new NightState()
  private constructor() {}
  public static getInstance(): State {
    return NightState.singleton
  }

  public doClock(context: Context, hour: number): void {
    if (hour > 9 && hour <= 17) {
      context.changeState(DayState.getInstance())
    }
  }

  public doAlarm(context: Context): void {
    context.callSecurityCenter('やばい！非常ベルなった')
  }

  public doPhone(context: Context): void {
    context.recordLog('夜間の通話記録')
  }
  public doUse(context: Context): void {
    context.recordLog('やばい！夜間に金庫しよう')
  }
}
