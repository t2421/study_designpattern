import Printable from './Printable'

export default class Printer implements Printable {
  private name: string
  constructor() {
    this.heavyJob()
  }
  setPrintName(name: string): void {
    this.name = name
  }
  getPrintName(): string {
    return this.name
  }
  print(): void {
    console.log('----print-----')
  }

  heavyJob() {
    let count = 0
    let time = setInterval(() => {
      count++
      console.log(count)
      if (count >= 5) {
        clearInterval(time)
      }
    }, 1000)
  }
}
