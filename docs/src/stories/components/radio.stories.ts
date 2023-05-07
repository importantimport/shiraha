import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const Radio: StoryObj = {
  render: () => html` <fieldset>
    <legend>Radio buttons</legend>
    <ul>
      <li>
        <label for="radio1"
          ><input
            id="radio1"
            name="radio"
            type="radio"
            class="radio"
            checked="checked"
          />
          checked</label
        >
      </li>
      <li>
        <label for="radio2"
          ><input
            id="radio2"
            name="radio"
            type="radio"
            class="radio"
          />uncheck</label
        >
      </li>
      <li>
        <label for="radio3"
          ><input
            id="radio3"
            name="radio"
            type="radio"
            class="radio"
            checked="checked"
            disabled
          />disabled</label
        >
      </li>
    </ul>
  </fieldset>`,
}

export default {
  title: 'components/Radio',
} as Meta
