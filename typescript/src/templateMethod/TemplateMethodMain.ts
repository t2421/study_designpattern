import MailNotification from './MailNotification'
import SlackNotification from './SlackNotification'
import Notification from './Notification'

export default class TemplateMethodMain {
  private _notification: Notification

  constructor() {
    this.init()
  }
  public init(): void {
    let data = {
      name: 'テンプレート太郎'
    }
    this._notification = new MailNotification()
    this._notification.notify(data)

    this._notification = new SlackNotification()
    this._notification.notify(data)
  }
}
