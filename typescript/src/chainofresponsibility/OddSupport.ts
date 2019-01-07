import Support from './Support'
import Trouble from './Trouble'

export default class OddSupport extends Support {
  constructor(name: string) {
    super(name)
  }

  resolve(trouble: Trouble): boolean {
    if (trouble.getNumber() % 2 == 1) {
      return true
    }
    return false
  }
}
