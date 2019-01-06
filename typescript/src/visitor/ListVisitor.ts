import File from './File'
import Directory from './Directory'
import Visitor from './Visitor'
import Entry from './Entry'

export default class ListVisitor extends Visitor {
  visit(entry: Entry) {
    if (entry instanceof Directory) {
      let dir: Directory = <Directory>entry

      dir.getList().map((entry: Entry) => {
        if (entry instanceof File) {
          entry.accept(this)
        } else {
          entry.printFullPath()
          entry.accept(this)
        }
      })
    } else {
      let file: File = <File>entry

      entry.printFullPath()
    }
  }
}
