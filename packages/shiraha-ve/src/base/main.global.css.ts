import { globalStyle } from '@vanilla-extract/css'
import OP from 'open-props'

globalStyle('main', {
  boxSizing: 'content-box',
  // TODO: maybe `createContainer`
  container: 'main / inline-size',
  maxWidth: OP.sizeMd, // 768px
  width: '100vh',
})
