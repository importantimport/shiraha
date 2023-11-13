import { globalStyle } from '@vanilla-extract/css'

globalStyle('ol, ul', {
  marginBottom: '1.5rem',
  marginLeft: '1.5rem',
  marginTop: '1.5rem',
})

globalStyle(':where(ol)', { listStyleType: 'decimal' })

globalStyle(':where(ol[type="A"])', { listStyleType: 'upper-alpha' })

globalStyle(':where(ol[type="a"])', { listStyleType: 'lower-alpha' })

globalStyle(':where(ol[type="I"])', { listStyleType: 'upper-roman' })

globalStyle(':where(ol[type="i"])', { listStyleType: 'lower-roman' })

globalStyle(':where(ol[type="1"])', { listStyleType: 'decimal' })

globalStyle(':where(ul)', { listStyleType: 'disc' })

globalStyle('ul > li', {
  marginTop: '0.5rem',
})
