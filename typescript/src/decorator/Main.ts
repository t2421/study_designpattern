import IntelCPU from './IntelCPU'
import Macbook from './Macbook'
import Memory from './Memory'

export default class Main {
  constructor() {
    let mac = new Macbook()
    let all = new IntelCPU(new Memory(mac))
    console.log(mac.cost())
    console.log(all.cost())
  }
}
