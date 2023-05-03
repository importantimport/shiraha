import { paint } from '../../utils/paint/register-paint'
import { properties } from './properties'

@paint('shiraha-squiggle')
class Squiggle {
  static get inputProperties() {
    return properties.map(({ name }) => name)
  }

  paint(
    ctx: CanvasRenderingContext2D,
    {
      height,
      width,
    }: {
      height: number
      width: number
    },
    props: {
      get: <T>(s: string) => T
    }
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

    ctx.scale(height / viewbox[3], height / viewbox[3])

    let path2D = new Path2D(path.join(' '))

    ctx.strokeStyle =
      props.get<string>('--shiraha-squiggle-stroke-style') ??
      props.get<string>('--md-sys-color-outline')
    ctx.lineWidth = props.get<number>('--shiraha-squiggle-line-width') ?? 1
    ctx.lineCap =
      props.get<'butt' | 'round' | 'square'>('--shiraha-squiggle-line-cap') ??
      'square'

    ctx.stroke(path2D)
    for (let i = 0; i < width + 91 * (height / viewbox[3]); i++) {
      if (i % (91 * (height / viewbox[3])) === 0) {
        let path2Di = new Path2D()
        path2Di.addPath(path2D, {
          e: i,
          f: 0,
        })
        ctx.stroke(path2Di)
      }
    }
  }
}
