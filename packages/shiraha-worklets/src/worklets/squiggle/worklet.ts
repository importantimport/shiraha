import { paint } from '../../utils/paint/register-paint'
import { properties } from './properties'

@paint('shiraha-squiggle')
class Squiggle {
  static get inputProperties() {
    return properties.map(({ name }) => name)
  }

  paint(
    ctx: CanvasRenderingContext2D,
    size: {
      height: number
      width: number
    },
    props
  ) {}
}
