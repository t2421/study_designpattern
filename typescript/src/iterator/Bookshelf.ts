import Aggregate from './Aggregate'
import Book from './Book'
import Iterator from './Iterator'
import BookshelfIterator from './BookshelfIterator'

export default class Bookshelf implements Aggregate {
  private books: Array<Book>
  private last: number = 0
  constructor() {
    this.books = []
  }

  getBookAt(index: number): Book {
    return this.books[index]
  }

  appendBook(book: Book): void {
    this.books.push(book)
    this.last++
  }

  getLength(): number {
    return this.last
  }

  iterator(): Iterator {
    return new BookshelfIterator(this)
  }
}
