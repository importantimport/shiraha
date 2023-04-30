import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const SimplePagination: StoryObj = {
  render: () => html`
    <nav>
      <ul>
        <li>
          <a href="#" rel="prev">Prev</a>
        </li>
        <li><span>1</span></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li>
          <a href="#" rel="next"> Next </a>
        </li>
      </ul>
    </nav>
  `,
}

export const SimplePaginationWithIcon: StoryObj = {
  render: () => html`
    <nav>
      <ul class="pagination">
        <li>
          <a href="#" class="material-symbols-outlined" rel="prev"
            >navigate_before</a
          >
        </li>
        <li><span>1</span></li>
        <li><a href="#" class="material-symbols-none">2</a></li>
        <li><a href="#">3</a></li>
        <li>
          <a href="#" class="material-symbols-outlined" rel="next"
            >navigate_next</a
          >
        </li>
      </ul>
    </nav>
  `,
}

export const SimplePagination2: StoryObj = {
  render: () => html`
    <nav>
      <ul class="pagination">
        <li>
          <a href="#" class="material-symbols-outlined">first_page</a>
        </li>
        <li>
          <a href="#" class="material-symbols-outlined" rel="prev"
            >navigate_before</a
          >
        </li>
        <li><span>2</span></li>
        <li>
          <a href="#" class="material-symbols-outlined" rel="next"
            >navigate_next</a
          >
        </li>
        <li>
          <a href="#" class="material-symbols-outlined">last_page</a>
        </li>
      </ul>
    </nav>
  `,
}

export const PostPagination: StoryObj = {
  render: () => html`
    <nav>
      <ul class="pagination">
        <li>
          <a href="#" rel="prev">
            <span class="material-symbols-outlined">navigate_before</span>
            <span>Prev: Foo</span>
          </a>
        </li>
        <li>
          <a href="#" rel="next">
            <span>Next: Bar</span>
            <span class="material-symbols-outlined">navigate_next</span>
          </a>
        </li>
      </ul>
    </nav>
  `,
}

export default {
  title: 'components/Pagination',
} as Meta
