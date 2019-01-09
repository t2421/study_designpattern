import Colleague from './Colleague'
import Mediator from './Mediator'

export default class ColleagueButton implements Colleague {
  private _mediator: Mediator
  constructor() {}

  setMediator(mediator: Mediator): void {
    this._mediator = mediator
  }

  setCollegueEnable(enabled: boolean): void {
    if (enabled) {
      console.log('buttonはアクティブ')
    } else {
      console.log('buttonは非アクティブ')
    }
  }
}
