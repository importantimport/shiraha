import { defineComponent } from 'vue'
import { version } from '../../package.json'

export default defineComponent({
  setup: () => () =>
    (
      <header>
        <h1>
          <span>❄ Shiraha</span>
          <code>{version}</code>
        </h1>
        <nav>
          <a href="/">Home</a>
          <a href="https://github.com/importantimport/shiraha">GitHub</a>
        </nav>
      </header>
    )
})
