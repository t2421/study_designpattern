import Tire from '../fitfactory/FitTire'
import Car from '../fitfactory/FitCar'
import Engine from '../fitfactory/FitEngine'
import CarBody from './CarBody'

export default abstract class Factory {
  abstract getTire(): Tire
  abstract getCar(): Car
  abstract getEngine(): Engine
  abstract getCarBody(): CarBody
}
