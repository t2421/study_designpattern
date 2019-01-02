import Display from './Display'
import HtmlDisplay from './HtmlDisplay'
import MultiDisplay from './MultiDisplay'

export default class Main {
  constructor() {
    let display: Display = new Display(new HtmlDisplay('this is HTML'))
    display.display()
    let multiDisplay: MultiDisplay = new MultiDisplay(new HtmlDisplay('this is HTML in Multi'))
    multiDisplay.multiDisplay(10)
  }
}
