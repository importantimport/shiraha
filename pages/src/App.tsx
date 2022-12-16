import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

import Header from './components/header'
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
          content: `A beautiful classless CSS framework with Sugar.`
        }
      ]
    })
    return () => (
      <>
        <Header />
        {/* <div>
          <a href="https://github.com/importantimport/shiraha" target="_blank">
            <img src="/snowflake.svg" width="192" alt="Shiraha logo" />
          </a>
        </div> */}
        <Intro />
      </>
    )
  }
})
