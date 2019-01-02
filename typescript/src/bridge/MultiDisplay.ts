import Display from './Display'

export default class MultiDisplay extends Display {
  multiDisplay(count: number): void {
    for (let i = 0; i < count; i++) {
      this.display()
    }
  }
}
