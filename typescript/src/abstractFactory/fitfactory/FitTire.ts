import Tire from '../factory/Tire'

export default class FitTire extends Tire {
  rotate(): void {
    console.log('小型だけどなかなか良いタイヤ')
  }
  rotateStop(): void {
    console.log('小型だけどなかなか良いタイヤの開店とまる')
  }
}
