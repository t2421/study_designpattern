import Mediator from './Mediator'
import LoginFrame from './LoginFrame'

export default class Main {
  private _mediator: Mediator = new LoginFrame()

  constructor() {
    console.log('\nCLick Emulate-------\n')
    ;(<LoginFrame>this._mediator).clickEmulate(true)
    console.log('\nCLick Emulate-------\n')
    ;(<LoginFrame>this._mediator).clickEmulate(false)
  }
}
