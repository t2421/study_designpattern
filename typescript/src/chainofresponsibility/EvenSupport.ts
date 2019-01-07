import Trouble from './Trouble'
import Support from './Support'

export default class EvenSupport extends Support {
  constructor(name: string) {
    super(name)
  }

  resolve(trouble: Trouble): boolean {
    if (trouble.getNumber() % 2 == 0) {
      return true
    }
    return false
  }
}
