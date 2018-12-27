import Iterator from './Iterator'
import Bookshelf from './Bookshelf'

export default class BookshelfIterator implements Iterator {
  private bookshelf: Bookshelf
  private index: number = 0

  constructor(bookshelf: Bookshelf) {
    this.bookshelf = bookshelf
  }
  hasNext(): Boolean {
    if (this.bookshelf.getLength() > this.index) {
      return true
    }
    return false
  }

  next(): Object {
    const book = this.bookshelf.getBookAt(this.index)
    this.index++
    return book
  }
}
