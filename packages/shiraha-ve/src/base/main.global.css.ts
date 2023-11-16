import { globalStyle } from '@vanilla-extract/css'
import OP from 'open-props'

globalStyle('main', {
  boxSizing: 'content-box',
  width: '100vh',
  maxWidth: OP.sizeMd, // 768px
  // TODO: maybe `createContainer`
  container: 'main / inline-size',
})
