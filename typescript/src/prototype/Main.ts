import CircleShape from './CircleShape'
import ComplexShape from './ComplexShape'
import Shape from './Shape'

export default class Main {
  private _circle: Shape = new CircleShape(100, '#f00000')
  private _complex: Shape = new ComplexShape([{ m: [0, 0], l: [0, 100] }])
  constructor() {
    this.draw()
  }

  draw() {
    this._circle.draw()
    this._complex.draw()
    let copy: Shape = this._complex.clone()
    copy.draw()
  }
}
