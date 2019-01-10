import NumberGenerator from './NumberGenerator'
import RandomNumberGenerator from './RandomNumberGenerator'
import Observer from './Observer'
import DigitObserver from './DigitObserver'
import GraphObserver from './GraphObserver'

export default class Main {
  private gen: NumberGenerator = new RandomNumberGenerator()
  private digitObserver: Observer = new DigitObserver()
  private graphObserver: Observer = new GraphObserver()

  constructor() {
    this.gen.addObserver(this.digitObserver)
    this.gen.addObserver(this.graphObserver)
    this.gen.execute()
    this.gen.execute()
    this.gen.execute()
    this.gen.execute()
    this.gen.execute()
  }
}
