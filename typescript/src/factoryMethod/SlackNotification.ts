import Notification from './Notification'

export default class SlackNotification extends Notification {
  notify(data: any): void {
    console.log('slackでメッセージを通知')
    console.log(this.createMessage(data))
  }
}
