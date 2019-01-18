export default interface Printable {
  setPrintName(name: string)
  getPrintName(): string
  print(): void
}
