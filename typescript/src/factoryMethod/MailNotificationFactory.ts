import NotificationFactory from './NotificationFactory'
import Notification from './Notification'
import MailNotification from './MailNotification'

export default class MailNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    console.log('mailnotificationを生成する処理')
    return new MailNotification()
  }
}
