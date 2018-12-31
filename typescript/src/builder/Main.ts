import Builder from './Builder'
import TextBuilder from './TextBuilder'
import Director from './Director'
import HtmlBuilder from './HtmlBuilder'

export default class Main {
  constructor() {
    this.init()
  }

  init() {
    let builder: TextBuilder = new TextBuilder()
    let director: Director = new Director(builder)
    director.construct()
    console.log(builder.getResult())

    let builder2: HtmlBuilder = new HtmlBuilder()
    director = new Director(builder2)
    director.construct()
    console.log(builder2.getResult())
  }
}
