<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import {
    button,
    buttonIcon,
  } from 'shiraha-ve/dist/components/button/module.js'
  import 'shiraha-ve/dist/components/button/module.css'

  export let Hst: Hst

  let disabled = false
  let text = 'Filled'
  let type: keyof typeof button.classNames.variants.type = 'filled'
</script>

<Hst.Story title="Button (vanilla-extract)">
  <Hst.Variant title="default">
    <button class={button({ type })} {disabled}>
      <span class={buttonIcon}>t</span>
      <span>{text}</span>
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

  <Hst.Variant title="Filled">
    <button class={button({ type: 'filled' })} {disabled}>{text}</button>

    <svelte:fragment slot="controls">
      <Hst.Checkbox bind:value={disabled} title="Disabled" />
      <Hst.Text bind:value={text} title="Text" />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="Outlined">
    <button class={button({ type: 'outlined' })} {disabled}>{text}</button>

    <svelte:fragment slot="controls">
      <Hst.Checkbox bind:value={disabled} title="Disabled" />
      <Hst.Text bind:value={text} title="Text" />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="Elevated">
    <button class={button({ type: 'elevated' })} {disabled}>{text}</button>

    <svelte:fragment slot="controls">
      <Hst.Checkbox bind:value={disabled} title="Disabled" />
      <Hst.Text bind:value={text} title="Text" />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="Tonal">
    <button class={button({ type: 'tonal' })} {disabled}>{text}</button>

    <svelte:fragment slot="controls">
      <Hst.Checkbox bind:value={disabled} title="Disabled" />
      <Hst.Text bind:value={text} title="Text" />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="Text">
    <button class={button({ type: 'text' })} {disabled}>{text}</button>

    <svelte:fragment slot="controls">
      <Hst.Checkbox bind:value={disabled} title="Disabled" />
      <Hst.Text bind:value={text} title="Text" />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>
