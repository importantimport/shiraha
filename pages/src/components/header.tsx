import { defineComponent } from 'vue'
import { version } from '../../package.json'

export default defineComponent({
  setup: () => () =>
    (
      <header>
        <h1>
          <span>❄Shiraha&nbsp;</span>
          <code>{version}</code>
        </h1>
        <h5>Material 3-inspired Classless CSS Framework.</h5>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://github.com/importantimport/shiraha">GitHub</a>
            </li>
          </ul>
        </nav>
      </header>
    )
})
