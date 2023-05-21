import 'shiraha/dist/addons/chips.css'

import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const HCard: StoryObj = {
  render: () => html`
    <a class="h-card">
      <img src="https://kwaa.dev/assets/any@192.webp" alt="" class="h-photo" />
      \u85CD+85CD
    </a>
  `,
}

export const Tags: StoryObj = {
  render: () => html`
    <main>
      <a href="#" class="p-category">Foo</a>
      <a href="#" class="p-category">
        <span class="material-symbols-outlined">tag</span>
        Bar
      </a>
      <a class="p-category">Baz</a>
    </main>
  `,
}

export default {
  title: 'addons/Chips',
} as Meta
