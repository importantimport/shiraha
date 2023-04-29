import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const Header: StoryObj = {
  render: () => html`
    <header>
      <nav>
        <a href="#" class="material-symbols-outlined">arrow_back</a>
        <h2>Title Large</h2>
        <a href="#" class="material-symbols-outlined">attach_file</a>
        <a href="#" class="material-symbols-outlined">today</a>
        <a href="#" class="material-symbols-outlined">more_vert</a>
      </nav>
    </header>
  `,
}

export default {
  title: 'components/Header',
} as Meta
