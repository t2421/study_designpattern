import Observer from './Observer'

export default abstract class NumberGenerator {
  private _observers: Array<Observer> = []

  public addObserver(observer: Observer): void {
    this._observers.push(observer)
  }
  public deleteObserver(observer: Observer): void {
    let index = -1
    this._observers.map(item => {
      if (observer == item) {
        index = this._observers.indexOf(item)
      }
    })
    this._observers.splice(index, 1)
  }

  public notifyObservers(): void {
    this._observers.map(item => {
      item.update(this)
    })
  }
  abstract getNumber(): number
  abstract execute(): void
}
