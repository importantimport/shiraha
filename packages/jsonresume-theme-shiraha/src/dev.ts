import { ResumeSchema } from '@kurone-kito/jsonresume-types'

import { renderBody, renderHead } from './utils/render'

import resume from '../test/fixtures/resume.json' assert { type: 'json' }

// eslint-disable-next-line @masknet/browser-no-set-html
document.head.innerHTML = renderHead(resume)

// eslint-disable-next-line @masknet/browser-no-set-html
document.body.innerHTML = renderBody(resume)
