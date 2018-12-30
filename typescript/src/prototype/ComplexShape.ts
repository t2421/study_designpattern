import Shape from './Shape'

export default class ComplexShape implements Shape {
  private _path
  constructor(path) {
    this._path = path
  }

  draw(): void {
    console.log(this._path, '複雑なオブジェクトを描画')
  }

  clone(): Shape {
    let cloneShape: ComplexShape = new ComplexShape(this._path)
    this.cloneAndSetProperty(cloneShape)
    return cloneShape
  }
  cloneAndSetProperty(shape: ComplexShape): void {
    console.log(shape, '全てのプロパティを複製する')
  }
}
