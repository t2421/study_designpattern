import AbstractNotification from './AbstractNotification'

export default class MailNotification extends AbstractNotification {
  notify(data: any): void {
    console.log('mailでメッセージを通知')
    console.log(this.createMessage(data))
  }
}
