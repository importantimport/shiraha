import { paint } from '../../utils/paint/register-paint'
import { properties } from './properties'

@paint('shiraha-squiggle')
export default class Squiggle {
  static get inputProperties() {
    return properties.map(({ name }) => name)
  }

  paint(ctx, geom, props) {}
}
