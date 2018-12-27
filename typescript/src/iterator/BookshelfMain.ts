import Bookshelf from './Bookshelf'
import Book from './Book'
import Iterator from './Iterator'

export default class BookshelfMain {
  private _bookshelf: Bookshelf

  constructor() {
    this.init()
  }
  public init(): void {
    this._bookshelf = new Bookshelf()
    this._bookshelf.appendBook(new Book('books1'))
    this._bookshelf.appendBook(new Book('books2'))
    this._bookshelf.appendBook(new Book('books3'))

    let iterator: Iterator = this._bookshelf.iterator()

    while (iterator.hasNext()) {
      let book: Book = iterator.next() as Book
      console.log(book.getName())
    }
    console.log(this._bookshelf.getLength())
    console.log(this._bookshelf.getBookAt(2))
  }
}
