import Colleague from './Colleague'
import Mediator from './Mediator'

export default class ColleagueTextField implements Colleague {
  private _mediator: Mediator
  constructor() {}

  setMediator(mediator: Mediator): void {
    this._mediator = mediator
  }

  setCollegueEnable(enabled: boolean): void {
    if (enabled) {
      console.log('textfieldはアクティブ')
    } else {
      console.log('textfieldは非アクティブ')
    }
  }
}
