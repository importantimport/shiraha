const __resolved__virtual_storySource_srcTypographyHeadingStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import style from 'shiraha-ve/dist/typography/heading/global.css?inline'
  import styleP from 'shiraha-ve/dist/typography/paragraph/global.css?inline'

  export let Hst: Hst

  let headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  let hText = 'Heading'
  let pText = \`Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
  In hac habitasse platea dictumst quisque.
  Nam libero justo laoreet sit amet cursus sit amet.\`
<\/script>

<Hst.Story title="Heading">
  <Hst.Variant title="default">
    <svelte:element this={'style'}>{style}</svelte:element>
    <svelte:element this={'style'}>{styleP}</svelte:element>
    {#each headings as heading}
      <svelte:element this={heading}>
        {@html hText}
        {heading.at(1)}
      </svelte:element>
      {#if pText}
        <p>{@html pText}</p>
      {/if}
    {/each}
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Text bind:value={hText} title="Heading Text" />
    <Hst.Textarea bind:value={pText} title="Paragraph Text" />
  </svelte:fragment>
</Hst.Story>
`;
export {
  __resolved__virtual_storySource_srcTypographyHeadingStorySvelte as default
};
