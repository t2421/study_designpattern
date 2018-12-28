import NotificationFactory from './NotificationFactory'
import MailNotificationFactory from './MailNotificationFactory'
import SlackNotificationFactory from './SlackNotificationFactory'

export default class FactoryMethodMain {
  private _factory: NotificationFactory

  constructor() {
    this.init()
  }
  public init(): void {
    let data = {
      name: 'テンプレート太郎'
    }
    this._factory = new MailNotificationFactory()
    this._factory.create().notify(data)

    this._factory = new SlackNotificationFactory()
    this._factory.create().notify(data)
  }
}
