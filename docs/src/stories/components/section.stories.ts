import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const Section: StoryObj = {
  render: () => html` <style>
      section {
        gap: 0.25rem;
      }
      section > section {
        color: var(--md-sys-color-on-surface-variant);
        background-color: var(--md-sys-color-surface-variant);
      }
      section:has(section) {
        background-color: transparent;
      }
    </style>
    <section>
      <section>1</section>
      <section>
        <section>2</section>
        <section>3</section>
      </section>
    </section>
    <br />
    <section>
      <section>1</section>
      <section>2</section>
      <section>3</section>
      <section>4</section>
    </section>
    <br />
    <section>
      <section>1</section>
      <section>2</section>
      <section>3</section>
      <section>4</section>
      <section>5</section>
      <section>6</section>
    </section>
    <br />
    <section>
      <section>1</section>
      <section>
        <section>2</section>
        <section>
          <section>3</section>
          <section>
            <section>4</section>
            <section>
              <section>5</section>
              <section>
                <section>6</section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>`,
}

export default {
  title: 'components/Section',
} as Meta
