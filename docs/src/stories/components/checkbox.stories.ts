import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const Checkbox: StoryObj = {
  render: () => html`<fieldset>
    <legend>Checkboxes</legend>
    <ul>
      <li>
        <label for="checkbox1"
          ><input
            id="checkbox1"
            name="checkbox"
            type="checkbox"
            checked="checked"
          />
          Checked</label
        >
      </li>
      <li>
        <label for="checkbox2"
          ><input id="checkbox2" name="checkbox" type="checkbox" />
          Unchecked</label
        >
      </li>
      <li>
        <label for="checkbox3"
          ><input
            id="checkbox3"
            name="checkbox"
            type="checkbox"
            disabled
          />Disable Checked</label
        >
      </li>

      <li>
        <label for="checkbox3"
          ><input
            id="checkbox3"
            name="checkbox"
            type="checkbox"
            checked="checked"
            disabled
          />Disable Unchecked</label
        >
      </li>
    </ul>
  </fieldset>`,
}

export default {
  title: 'components/Checkbox',
} as Meta
