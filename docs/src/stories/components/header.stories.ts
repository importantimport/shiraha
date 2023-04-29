import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const CenterAlignedHeader = {
  render: () => html`
    <header>
      <nav>
        <a href="#" class="material-symbols-outlined">menu</a>
        <h2 style="text-align: center">Title Large</h2>
        <a href="#" class="material-symbols-outlined">account_circle</a>
      </nav>
    </header>
  `,
}

export const SmallHeader: StoryObj = {
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
