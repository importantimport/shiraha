import { defineComponent } from 'vue'

export default defineComponent({
  setup: () => () =>
    (
      <header>
        <h1>
          <strong>❄ Shiraha</strong>
          <sub>Classless CSS Framework</sub>
        </h1>
        <nav>
          <a href="/">Home</a>
          <a href="https://github.com/importantimport/shiraha">GitHub</a>
        </nav>
      </header>
    )
})
