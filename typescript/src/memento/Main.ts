import Gamer from './Gamer'
import Memento from './Memento'

export default class Main {
  private gamer: Gamer = new Gamer(1000)
  private memento: Memento
  constructor() {
    this.memento = this.gamer.createMemento()
    for (let i = 0; i < 100; i++) {
      this.gamer.bet()

      if (this.gamer.getMoney() > 2000) {
        this.memento = this.gamer.createMemento()
        console.log('save')
      } else if (this.gamer.getMoney() < 500) {
        console.log('restore')
        this.gamer.restoreMemento(this.memento)
      }
      console.log(this.gamer)
    }
  }
}
