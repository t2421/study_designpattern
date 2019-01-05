import Component from './Component'
export default class Macbook implements Component {
  constructor() {}
  cost(): number {
    return 900
  }

  screensize(): number {
    return 11
  }
}
