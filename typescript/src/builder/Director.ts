import Builder from './Builder'

export default class Director {
  private builder: Builder

  constructor(builder: Builder) {
    this.builder = builder
  }

  construct(): void {
    this.builder.makeTitle('Greeting')
    this.builder.makeString('朝から昼にかけて')
    this.builder.makeItems(['おはよう！', 'こんにちは！'])
    this.builder.makeString('夜に')
    this.builder.makeItems(['こんばんは', 'おやすみ', 'さようなら'])

    this.builder.close()
  }
}
