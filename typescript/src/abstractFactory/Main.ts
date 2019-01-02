import Car from './factory/Car'
import FactoryCreator from './factory/FactoryCreator'

export default class Main {
  constructor() {
    this.init()
  }

  init() {
    let fitFacotry = FactoryCreator.getFactory('FitFactory')
    let fit: Car = fitFacotry.getCar()
    fit.setBody(fitFacotry.getCarBody())
    fit.setTire(fitFacotry.getTire())
    fit.setEngine(fitFacotry.getEngine())
    fit.start()
    fit.stop()
  }
}
