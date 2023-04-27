import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const Relay: StoryObj = {
  render: () => html`<footer>
    <img
      src="https://relay.material.io/static/assets/relay_logo.svg"
      alt="relay-logo"
      height="64"
      width="188"
    />
    <br />
    <p>
      Relay is changing the way designers and developers collaborate to build
      UI, simplifying UI handoff by connecting design tools losslessly to code.
    </p>
    <br />
    <p>
      <a href="https://github.com/importantimport/shiraha">Twitter</a>
      <span>&nbsp;&nbsp;</span>
      <a href="https://github.com/importantimport/shiraha">YouTube</a>
    </p>
    <hr />
    <span>© 2023 [DATA EXPUNGED] · Powered by Shiraha</span>
  </footer>`,
}

export const M3: StoryObj = {
  render: () => html`<footer>
    <hr />
    <section>
      <span>
        Material Design is an adaptable system of guidelines, components, and
        tools that support the best practices of user interface design. Backed
        by open-source code, Material Design streamlines collaboration between
        designers and developers, and helps teams quickly build beautiful
        products.
      </span>
    </section>
    <section>
      <ul>
        <li>
          <span>Shiraha</span>
        </li>
        <li>
          <a href="https://github.com/importantimport/shiraha">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="https://github.com/importantimport/shiraha">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="https://github.com/importantimport/shiraha">
            Join research studies
          </a>
        </li>
        <li>
          <a href="https://github.com/importantimport/shiraha">Feedback</a>
        </li>
      </ul>
    </section>
  </footer>`,
}

export default {
  title: 'Components/Footer',
} as Meta
