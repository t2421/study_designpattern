import CircleShape from './CircleShape'
import ComplexShape from './ComplexShape'

export default class Main {
  private _circle: CircleShape = new CircleShape(100, '#f00000')
  private _complex: ComplexShape = new ComplexShape([{ m: [0, 0], l: [0, 100] }])
  constructor() {
    this.draw()
  }

  draw() {
    this._circle.draw()
    this._complex.draw()
    let copy: ComplexShape = <ComplexShape>this._complex.clone()
    copy.draw()
  }
}
