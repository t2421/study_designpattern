import Factory from './Factory'
import FitFactory from '../fitfactory/FitFactory'

export default class FactoryCreator {
  static getFactory(name: string): Factory {
    switch (name) {
      case 'FitFactory':
        return new FitFactory()
    }
  }
}
