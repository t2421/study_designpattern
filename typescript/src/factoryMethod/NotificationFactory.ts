import Notification from './Notification'

export default abstract class NotificationFactory {
  create(): Notification {
    return this.createNotification()
  }
  abstract createNotification(): Notification
}
