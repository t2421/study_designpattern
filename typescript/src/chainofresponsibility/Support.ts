import Trouble from './Trouble'

export default abstract class Support {
  private _name: string
  private _next: Support

  constructor(name: string) {
    this._name = name
  }
  setNext(next: Support): void {
    this._next = next
  }

  support(trouble: Trouble): void {
    if (this.resolve(trouble)) {
      this.done(trouble)
    } else if (this._next != null) {
      this._next.support(trouble)
    } else {
      this.fail(trouble)
    }
  }
  abstract resolve(trouble: Trouble): boolean

  done(trouble: Trouble): void {
    console.log(`${trouble} is resolved by ${this._name}`)
  }
  fail(trouble: Trouble): void {
    console.log(`${trouble} cannot resolve`)
  }
}
