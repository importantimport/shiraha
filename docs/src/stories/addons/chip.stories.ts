import 'shiraha/src/addons/chip.sss'

import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const HCard: StoryObj = {
  render: () => html`
    <a class="h-card chip">
      <img src="https://kwaa.dev/assets/any@192.webp" alt="" class="h-photo" />
      \u85CD+85CD
    </a>
  `,
}

export const Tags: StoryObj = {
  render: () => html`
    <main>
      <a href="#" class="p-category chip">Foo</a>
      <a href="#" class="p-category chip chip-tonal">
        <span class="material-symbols-outlined">tag</span>
        Bar
      </a>
      <a class="p-category chip chip-outlined">Baz</a>
      <span class="chip chip-tonal">
        <span class="material-symbols-outlined">tag</span>
        <a href="#" class="p-category">Tag</a>
      </span>
    </main>
  `,
}

export const OutlinedChip: StoryObj = {
  render: () => html`
    <main>
      <a href="#" class="chip chip-outlined">
        Input chip
      </a>
      <a href="#" class="chip chip-outlined">
        Input chip
        <span class="material-symbols-outlined">close</span>
      </a>
      <a href="#" class="chip chip-outlined">
        <img src="https://kwaa.dev/assets/any@192.webp" alt="" class="h-photo" />
        \u85CD+85CD
        <span class="material-symbols-outlined">close</span>
      </a>
      <a href="#" class="chip chip-outlined">
        <span class="material-symbols-outlined">image</span>
        Input chip
      </a>
    </main>
  `,
}

export const TonalChip: StoryObj = {
  render: () => html`
    <main>
      <a href="#" class="chip chip-tonal">
        Filter chip
      </a>
      <a href="#" class="chip chip-tonal">
        <span class="material-symbols-outlined">done</span>
        Filter chip
      </a>
      <a href="#" class="chip chip-tonal">
        <span class="material-symbols-outlined">done</span>
        Filter chip
        <span class="material-symbols-outlined">arrow_drop_down</span>
      </a>
    </main>
  `,
}

export const ChipContainers: StoryObj = {
  render: () => html`
    <main>
      <h6>Auto Container</h6>
      <p class="chip-container-auto">
        <a href="#" class="chip chip-tonal">
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </a>
        <a href="#" class="chip chip-tonal">
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </a>
        <a href="#" class="chip chip-tonal">
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </a>
        <a href="#" class="chip chip-tonal">
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </a>
      </p>
      <h6>Scroll Container</h6>
      <p class="chip-container-scroll">
        <a href="#" class="chip chip-tonal">
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </a>
        <a href="#" class="chip chip-tonal">
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </a>
        <a href="#" class="chip chip-tonal">
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </a>
        <a href="#" class="chip chip-tonal">
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </a>
      </p>
      <h6>Wrap Container</h6>
      <p class="chip-container-wrap">
        <a href="#" class="chip chip-tonal">
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </a>
        <a href="#" class="chip chip-tonal">
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </a>
        <a href="#" class="chip chip-tonal">
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </a>
        <a href="#" class="chip chip-tonal">
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
        </a>
        <a href="#" class="chip chip-tonal">
          <span class="material-symbols-outlined">done</span>
          Filter chip
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </a>
      </p>
    </main>
  `,
}

export default {
  title: 'addons/Chip',
} as Meta
