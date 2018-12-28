import Notification from './Notification'

export default class MailNotification extends Notification {
  notify(data: any): void {
    console.log('mailでメッセージを通知')
    console.log(this.createMessage(data))
  }
}
