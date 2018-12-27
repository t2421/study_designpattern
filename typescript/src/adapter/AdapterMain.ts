import Notification from './Notification'
import MailNotification from './MailNotification'

export default class AdapterMain {
  private _mailNotification: Notification = new MailNotification()

  constructor() {
    this.init()
  }
  public init(): void {
    this._mailNotification.notify()
  }
}
