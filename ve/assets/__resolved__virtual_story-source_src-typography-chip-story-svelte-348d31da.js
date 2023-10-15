const __resolved__virtual_storySource_srcTypographyChipStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import style from 'shiraha-ve/dist/typography/chip/global.css?inline'

  export let Hst: Hst

  let text = 'Chip'
<\/script>

<Hst.Story title="Chip">
  <Hst.Variant title="default">
    <svelte:element this={'style'}>{style}</svelte:element>
      {#each { length: 5 } as _}
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" rel="chip">{@html text}</a>
      {/each}
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Text bind:value={text} title="Chip Text" />
  </svelte:fragment>
</Hst.Story>
`;
export {
  __resolved__virtual_storySource_srcTypographyChipStorySvelte as default
};
