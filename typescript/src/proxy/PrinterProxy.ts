import Printable from './Printable'
import Printer from './Printer'

export default class PrinterProxy implements Printable {
  private name: string
  private real: Printer
  constructor() {}

  setPrintName(name: string): void {
    if (this.real) {
      this.real.setPrintName(name)
    }
    this.name = name
  }
  getPrintName(): string {
    return this.name
  }
  print(): void {
    this.realize()
    this.real.print()
  }

  realize(): void {
    if (!this.real) this.real = new Printer()
  }
}
