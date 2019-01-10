import Observer from './Observer'
import NumberGenerator from './NumberGenerator'

export default class GraphObserver implements Observer {
  constructor() {}

  update(numberGenerator: NumberGenerator): void {
    let str: string = ''
    for (let i = 0; i < numberGenerator.getNumber(); i++) {
      str += '*'
    }
    console.log(`GraphObserver---${str}`)
  }
}
