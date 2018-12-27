import Notification from './Notification'
import OldDartyEmailNotification from './OldDartyEmailNotification'

export default class MailNotification implements Notification {
  private _oldEmail: OldDartyEmailNotification = new OldDartyEmailNotification()
  constructor() {}

  notify() {
    this._oldEmail.dartyMethod1()
    this._oldEmail.dartyMethod2()
    this._oldEmail.dartyMethod3()
  }
}
