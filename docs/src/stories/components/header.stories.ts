import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const SimpleHeader = {
  render: () => html`
    <header>
      <nav>
        <h2>Title Large</h2>
      </nav>
    </header>
  `,
}

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

export const MediumHeader: StoryObj = {
  render: () => html`
    <header>
      <nav>
        <a href="#" class="material-symbols-outlined">arrow_back</a>
        <h2></h2>
        <a href="#" class="material-symbols-outlined">attach_file</a>
        <a href="#" class="material-symbols-outlined">today</a>
        <a href="#" class="material-symbols-outlined">more_vert</a>
      </nav>
      <p>Headline Small</p>
    </header>
  `,
}

export const LargeHeader: StoryObj = {
  render: () => html`
    <header>
      <nav>
        <a href="#" class="material-symbols-outlined">arrow_back</a>
        <h2></h2>
        <a href="#" class="material-symbols-outlined">attach_file</a>
        <a href="#" class="material-symbols-outlined">today</a>
        <a href="#" class="material-symbols-outlined">more_vert</a>
      </nav>
      <h1>Headline Medium</h1>
    </header>
  `,
}

export default {
  title: 'components/Header',
} as Meta
