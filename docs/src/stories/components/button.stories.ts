import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const Button: StoryObj = {
  render: () => html`
    <main>
      <p>Text Button</p>
      <div>
        <button>Enabled</button>
        <a role="button">Enabled</a>
        <input type="button" value="Enabled" />
      </div>
      <p>Text Button (Disabled)</p>
      <div>
        <button disabled>Disabled</button>
        <a role="button" aria-disabled="true">Disabled</a>
        <input type="button" value="Disabled" disabled />
      </div>
      <p>Icon Button</p>
      <div>
        <button class="material-symbols-outlined">settings</button>
        <a class="material-symbols-outlined" role="button">settings</a>
        <input class="material-symbols-outlined" type="button" value="settings" />
      </div>
      <p>Icon Button (Disabled)</p>
      <div>
        <button class="material-symbols-outlined" disabled>settings</button>
        <a class="material-symbols-outlined" role="button" aria-disabled="true">settings</a>
        <input class="material-symbols-outlined" type="button" value="settings" disabled />
      </div>
      <p>Text Button (with Icon)</p>
      <div>
        <button>
          <span class="material-symbols-outlined">add</span>
          Text button
        </button>
        <a role="button">
          <span class="material-symbols-outlined">add</span>
          Text button
        </a>
      </div>
    </main>
  `,
}

export default {
  title: 'components/Button',
} as Meta
