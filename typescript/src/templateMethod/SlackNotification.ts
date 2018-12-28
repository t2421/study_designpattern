import AbstractNotification from './AbstractNotification'

export default class SlackNotification extends AbstractNotification {
  notify(data: any): void {
    console.log('slackでメッセージを通知')
    console.log(this.createMessage(data))
  }
}
