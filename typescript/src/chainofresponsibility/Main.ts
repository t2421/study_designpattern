import Support from './Support'
import OddSupport from './OddSupport'
import EvenSupport from './EvenSupport'
import Trouble from './Trouble'
import NoSupport from './NoSupport'

export default class Main {
  constructor() {
    let firstSupport: Support = new OddSupport('odd Support')
    let secondSupport: Support = new EvenSupport('even Support')
    let noSupport: Support = new NoSupport('no Support')

    firstSupport.setNext(secondSupport)
    secondSupport.setNext(noSupport)

    let oddTrouble: Trouble = new Trouble(1)
    let evenTrouble: Trouble = new Trouble(2)
    let otherTrouble: Trouble = new Trouble(2.2)

    firstSupport.support(oddTrouble)
    firstSupport.support(evenTrouble)
    firstSupport.support(otherTrouble)
  }
}
