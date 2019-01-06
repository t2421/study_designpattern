import File from './File'
import Directory from './Directory'
import ListVisitor from './ListVisitor'

export default class Main {
  constructor() {
    this.init()
  }

  init() {
    let visitor: ListVisitor = new ListVisitor()
    let file1: File = new File('file1', 200)

    let file2: File = new File('file2', 400)
    let dir1: Directory = new Directory('dir1')
    let dir2: Directory = new Directory('dir2')
    dir1.add(file2)
    dir2.add(dir1)
    dir2.accept(visitor)
  }
}
