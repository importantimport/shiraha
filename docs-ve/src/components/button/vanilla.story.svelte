<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { logEvent } from 'histoire/client'
  import {
    button,
    buttonIcon,
  } from 'shiraha-ve/dist/components/button/vanilla.js'
  import 'shiraha-ve/dist/components/button/vanilla.css'

  export let Hst: Hst

  let disabled = false
  let icon = 'ac_unit'
  let text = 'Shiraha'
  let type: keyof typeof button.classNames.variants.type = 'filled'
</script>

<Hst.Story title="Button (vanilla-extract)">
  <Hst.Variant title="default">
    <button
      on:click={(event) => logEvent('click', event)}
      class={button({ type })}
      {disabled}
    >
      {#if icon}
        <span class={[buttonIcon, 'material-symbols-outlined'].join(' ')}>
          {icon}
        </span>
      {/if}
      <span>{text}</span>
    </button>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Checkbox bind:value={disabled} title="Disabled" />
    <Hst.Select
      bind:value={type}
      options={Object.keys(button.classNames.variants.type)}
      title="Type"
    />
    <Hst.Text bind:value={text} title="Text" />
    <Hst.Text bind:value={icon} title="Icon" />
  </svelte:fragment>
</Hst.Story>
