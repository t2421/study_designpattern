export default class Book {
  private name: String
  constructor(name: String) {
    this.name = name
  }
  getName(): String {
    return this.name
  }
}
