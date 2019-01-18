import State from './State'
import Context from './Context'
import NightState from './NightState'

export default class DayState implements State {
  private static singleton: State = new DayState()
  private constructor() {}
  public static getInstance(): State {
    return DayState.singleton
  }

  public doClock(context: Context, hour: number): void {
    if (hour <= 9 || hour > 17) {
      context.changeState(NightState.getInstance())
    }
  }

  public doAlarm(context: Context): void {
    context.callSecurityCenter('非常ベル昼間')
  }

  public doPhone(context: Context): void {
    context.callSecurityCenter('通常の通話昼間')
  }
  public doUse(context: Context): void {
    context.recordLog('金庫使用昼間')
  }
}
