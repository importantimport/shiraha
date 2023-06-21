import type { ResumeSchema } from '@kurone-kito/jsonresume-types'

import { html } from './utils/html'
import { renderBody, renderHead } from './utils/render'

export const pdfRenderOptions = { mediaType: 'print' }
export const render = (resume: ResumeSchema) =>
  html`
    <!DOCTYPE html>
    <html>
      <head>
        ${renderHead(resume)}
      </head>
      <body>
        ${renderBody(resume)}
      </body>
    </html>
  `
