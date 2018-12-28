import NotificationFactory from './NotificationFactory'
import Notification from './Notification'
import SlackNotification from './SlackNotification'

export default class SlackNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    console.log('Slacknotificationを生成する処理')
    return new SlackNotification()
  }
}
