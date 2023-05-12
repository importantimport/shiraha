import { paint } from '../../utils/paint/register-paint'
import { properties } from './properties'

@paint('shiraha-squiggle')
// eslint-disable-next-line unused-imports/no-unused-vars
class Squiggle {
  static get inputProperties() {
    return properties.map(({ name }) => name)
  }

  paint(
    context: CanvasRenderingContext2D,
    {
      height,
      width,
    }: {
      height: number
      width: number
    },
    properties_: {
      get: <T>(s: string) => T
    },
  ) {
    const path = [
      'M114',
      '4c-5.067',
      '4.667-10.133',
      '4.667-15.2',
      '0S88.667-.667',
      '83.6',
      '4',
      '73.467',
      '8.667',
      '68.4',
      '4',
      '58.267-.667',
      '53.2',
      '4',
      '43.067',
      '8.667',
      '38',
      '4',
      '27.867-.667',
      '22.8',
      '4',
      '12.667',
      '8.667',
      '7.6',
      '4-2.533-.667-7.6',
      '4s-10.133',
      '4.667-15.2',
      '0S-32.933-.667-38',
      '4s-10.133',
      '4.667-15.2',
      '0-10.133-4.667-15.2',
      '0-10.133',
      '4.667-15.2',
      '0-10.133-4.667-15.2',
      '0-10.133',
      '4.667-15.2',
      '0-10.133-4.667-15.2',
      '0-10.133',
      '4.667-15.2',
      '0-10.133-4.667-15.2',
      '0-10.133',
      '4.667-15.2',
      '0-10.133-4.667-15.2',
      '0-10.133',
      '4.667-15.2',
      '0-10.133-4.667-15.2',
      '0-10.133',
      '4.667-15.2',
      '0-10.133-4.667-15.2',
      '0-10.133',
      '4.667-15.2',
      '0-10.133-4.667-15.2',
      '0-10.133',
      '4.667-15.2',
      '0-10.133-4.667-15.2',
      '0-10.133',
      '4.667-15.2',
      '0-10.133-4.667-15.2',
      '0-10.133',
      '4.667-15.2',
      '0-10.133-4.667-15.2',
      '0-10.133',
      '4.667-15.2',
      '0-10.133-4.667-15.2',
      '0-10.133',
      '4.667-15.2',
      '0',
    ]
    const viewbox = [0, 0, 91, 8]

    context.scale(height / viewbox[3], height / viewbox[3])

    const path2D = new Path2D(path.join(' '))

    context.strokeStyle
      = properties_.get<string>('--shiraha-squiggle-stroke-style')
      ?? properties_.get<string>('--md-sys-color-outline')
    context.lineWidth = properties_.get<number>('--shiraha-squiggle-line-width') ?? 1
    context.lineCap
      = properties_.get<'butt' | 'round' | 'square'>('--shiraha-squiggle-line-cap')
      ?? 'square'

    context.stroke(path2D)
    for (let index = 0; index < width + 91 * (height / viewbox[3]); index++) {
      if (index % (91 * (height / viewbox[3])) === 0) {
        const path2Di = new Path2D()
        path2Di.addPath(path2D, {
          e: index,
          f: 0,
        })
        context.stroke(path2Di)
      }
    }
  }
}
