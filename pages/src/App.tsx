import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

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
          content: `Website description`
        }
      ]
    })
    return () => (
      <>
        <div>
          <a href="https://github.com/importantimport/shiraha" target="_blank">
            <img src="/snowflake.svg" class="logo" alt="Shiraha logo" />
          </a>
        </div>
      </>
    )
  }
})
