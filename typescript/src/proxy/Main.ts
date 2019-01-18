import PrinterProxy from './PrinterProxy'

export default class Main {
  constructor() {
    let printer: PrinterProxy = new PrinterProxy()
    printer.setPrintName('Nancy')
    console.log(printer.getPrintName())
    printer.print()
  }
}
