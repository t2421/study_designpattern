import Colleague from './Colleague'
import Mediator from './Mediator'

export default class ColleagueCheckbox implements Colleague {
  private _mediator: Mediator
  private _state: boolean = false

  constructor() {}

  setMediator(mediator: Mediator): void {
    this._mediator = mediator
  }

  setCollegueEnable(enabled: boolean): void {
    if (enabled) {
      console.log('Checkboxはアクティブ')
    } else {
      console.log('Checkboxは非アクティブ')
    }
  }
  private _itemStateChanged(): void {
    this._mediator.colleaguresChanged()
  }

  public clickEmulate(state: boolean): void {
    this._state = state
    this._itemStateChanged()
  }

  getState(): boolean {
    return this._state
  }
}
