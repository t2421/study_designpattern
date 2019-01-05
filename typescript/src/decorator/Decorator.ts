import Component from './Component'

export default abstract class Decorator extends Component {
  protected _component: Component
  constructor(component: Component) {
    super()
    this._component = component
  }
}
