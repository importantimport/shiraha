<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  // import { logEvent } from 'histoire/client'
  import style from 'shiraha-ve/dist/components/button/global.css?inline'

  export let Hst: Hst

  let icon = 'ac_unit'
  let text = 'Shiraha'
</script>

<Hst.Story title="Button (global)">
  <Hst.Variant title="default">
    <svelte:element this={'style'}>{style}</svelte:element>

    <h4>Buttons</h4>
    <button>button</button>
    <a
      role="button"
      href="https://github.com/importantimport/shiraha"
      target="_blank"
    >
      a role=button
    </a>

    <h4>Button State</h4>
    <button disabled>button disabled</button>

    <h4>Input Buttons</h4>
    <input type="button" value="input type=button" />
    <input type="submit" value="input type=submit" />
    <input type="reset" value="input type=reset" />
    <!-- <input type="file" /> -->
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Text bind:value={text} title="Text" />
    <Hst.Text bind:value={icon} title="Icon" />
  </svelte:fragment>
</Hst.Story>
