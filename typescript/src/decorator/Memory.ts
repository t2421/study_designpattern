import Decorator from './Decorator'
import Component from './Component'

export default class Memory extends Decorator {
  constructor(component: Component) {
    super(component)
  }

  cost(): number {
    return this._component.cost() + 75
  }
}
