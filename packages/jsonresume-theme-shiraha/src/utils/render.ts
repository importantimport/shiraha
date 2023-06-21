import { ResumeSchema } from '@kurone-kito/jsonresume-types'

export const renderHead = (resume: ResumeSchema) => JSON.stringify(resume)

export const renderBody = (resume: ResumeSchema) => JSON.stringify(resume)
