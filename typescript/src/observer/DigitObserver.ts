import Observer from './Observer'
import NumberGenerator from './NumberGenerator'

export default class DigitObserver implements Observer {
  constructor() {}

  update(numberGenerator: NumberGenerator): void {
    console.log(`DigitObserver---${numberGenerator.getNumber()}`)
  }
}
