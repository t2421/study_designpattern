import Factory from '../factory/Factory'
import FitCar from './FitCar'
import Car from '../factory/Car'
import Engine from '../factory/Engine'
import FitEngine from './FitEngine'
import Tire from '../factory/Tire'
import FitTire from './FitTire'
import CarBody from '../factory/CarBody'
import FitCarBody from './FitCarBody'

export default class FitFactory extends Factory {
  getCar(): Car {
    return new FitCar()
  }
  getEngine(): Engine {
    return new FitEngine()
  }

  getTire(): Tire {
    return new FitTire()
  }

  getCarBody(): CarBody {
    return new FitCarBody()
  }
}
