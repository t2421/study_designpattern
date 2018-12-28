export default abstract class AbstractNotification {
  abstract notify(data: any): void

  protected createMessage(data: any) {
    const message = `
        ${data['name']}さま
        本年もありがとうございました。
        `
    return message
  }
}
