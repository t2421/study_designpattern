import Tire from './Tire'
import Engine from './Engine'
import CarBody from './CarBody'

export default abstract class Car {
  private tire: Tire
  private engine: Engine
  private body: CarBody

  start(): void {
    this.engine.start()
    this.tire.rotate()
  }
  stop(): void {
    this.engine.stop()
    this.tire.rotateStop()
  }

  setTire(tire: Tire): void {
    this.tire = tire
  }
  setEngine(engine: Engine): void {
    this.engine = engine
  }
  setBody(body: CarBody): void {
    this.body = body
  }
}
