import Tire from '../fitfactory/FitTire'
import Car from '../fitfactory/FitCar'
import Engine from '../fitfactory/FitEngine'
import CarBody from './CarBody'
import FitFactory from '../fitfactory/FitFactory'

export default abstract class Factory {
  static getFactory(className: string): Factory {
    switch (className) {
      case 'FitFactory':
        return new FitFactory()
    }
  }
  abstract getTire(): Tire
  abstract getCar(): Car
  abstract getEngine(): Engine
  abstract getCarBody(): CarBody
}
