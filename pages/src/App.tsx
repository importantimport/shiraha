import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

import Intro from './components/intro.md'

export default defineComponent({
  setup: () => {
    useHead({
      title: 'Shiraha',
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: './snowflake.svg'
        }
      ],
      meta: [
        {
          name: `description`,
          content: `A beautiful class-light CSS theme/framework with Sugar.`
        }
      ]
    })
    return () => (
      <>
        <div>
          <a href="https://github.com/importantimport/shiraha" target="_blank">
            <img src="/snowflake.svg" width="192" alt="Shiraha logo" />
          </a>
        </div>
        <Intro />
      </>
    )
  }
})
