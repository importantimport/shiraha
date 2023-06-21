import { ResumeSchema } from '@kurone-kito/jsonresume-types'

import { html } from '../utils/html'

export const Head = (basics: ResumeSchema['basics']) =>
  html`
    ${basics?.name ? html`<title>${basics.name}</title>` : ''}
    ${basics?.summary ? html`<meta name="description" content="${basics.summary}" /></meta>` : ''}
  `
