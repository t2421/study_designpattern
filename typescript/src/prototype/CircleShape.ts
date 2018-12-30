import Shape from './Shape'

export default class CircleShape implements Shape {
  public radius: number
  public color: string

  constructor(radius = 0, color = '#000000') {
    this.radius = radius
    this.color = color
  }
  draw(): void {
    console.log('draw Circle')
  }

  clone(): Shape {
    let cloneShape: CircleShape = new CircleShape(this.radius, this.color)
    this.cloneAndSetProperty(cloneShape)
    return cloneShape
  }

  cloneAndSetProperty(shape: CircleShape): void {
    console.log(shape, '全てのプロパティを複製する')
  }
}
