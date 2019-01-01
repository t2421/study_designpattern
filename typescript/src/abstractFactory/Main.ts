import Factory from './factory/Factory'
import Car from './factory/Car'

export default class Main {
  constructor() {
    this.init()
  }

  init() {
    let fitFacotry = Factory.getFactory('FitFactory')
    let fit: Car = fitFacotry.getCar()
    fit.setBody(fitFacotry.getCarBody())
    fit.setTire(fitFacotry.getTire())
    fit.setEngine(fitFacotry.getEngine())
    fit.start()
    fit.stop()
  }
}
