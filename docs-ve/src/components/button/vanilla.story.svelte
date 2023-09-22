<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { button } from 'shiraha-ve/dist/components/button/module.js'
  import 'shiraha-ve/dist/components/button/module.css'

  export let Hst: Hst
  export let disabled = false
  export let text = 'Filled'
  export let type: keyof typeof button.classNames.variants.type = 'filled'
</script>

<Hst.Story title="Button (vanilla-extract)">
  <Hst.Variant title="default">
    <button class={button({ type })} {disabled}>
      {text}
    </button>

    <svelte:fragment slot="controls">
      <Hst.Checkbox bind:value={disabled} title="Disabled" />
      <Hst.Select
        bind:value={type}
        options={Object.keys(button.classNames.variants.type)}
        title="Type"
      />
      <Hst.Text bind:value={text} title="Text" />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>
