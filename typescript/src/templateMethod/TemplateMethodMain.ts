import MailNotification from './MailNotification'
import SlackNotification from './SlackNotification'

export default class TemplateMethodMain {
  private _mail: MailNotification = new MailNotification()
  private _slack: SlackNotification = new SlackNotification()

  constructor() {
    this.init()
  }
  public init(): void {
    let data = {
      name: 'テンプレート太郎'
    }
    this._mail.notify(data)
    this._slack.notify(data)
  }
}
