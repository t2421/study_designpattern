import Mediator from './Mediator'
import ColleagueCheckbox from './ColleagueCheckbox'
import ColleagueTextField from './ColleagueTextField'
import ColleagueButton from './ColleagueButton'

export default class LoginFrame implements Mediator {
  private _check: ColleagueCheckbox
  private _user: ColleagueTextField
  private _button: ColleagueButton

  constructor() {
    this.createColleagues()
    this.colleaguresChanged()
  }
  clickEmulate(state: boolean) {
    this._check.clickEmulate(state)
  }

  createColleagues(): void {
    this._check = new ColleagueCheckbox()
    this._check.setMediator(this)
    this._user = new ColleagueTextField()
    this._user.setMediator(this)
    this._button = new ColleagueButton()
    this._button.setMediator(this)
  }

  colleaguresChanged(): void {
    if (this._check.getState()) {
      this._user.setCollegueEnable(false)
      this._button.setCollegueEnable(false)
    } else {
      this._user.setCollegueEnable(true)
      this._button.setCollegueEnable(true)
    }
  }
}
