const __resolved__virtual_storySource_srcTypographyDetailsStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import style from 'shiraha-ve/dist/typography/details/global.css?inline'

  export let Hst: Hst

  let summary = \`Details and summary element\`
  let text = \`Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
  In hac habitasse platea dictumst quisque.
  Nam libero justo laoreet sit amet cursus sit amet.\`
<\/script>

<Hst.Story title="Details">
  <Hst.Variant title="default">
    <svelte:element this={'style'}>{style}</svelte:element>
    <details>
      <summary>{summary}</summary>
      <p>{text}</p>
    </details>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Text bind:value={summary} title="Summary Text" />
    <Hst.Textarea bind:value={text} title="Paragraph Text" />
  </svelte:fragment>
</Hst.Story>
`;
export {
  __resolved__virtual_storySource_srcTypographyDetailsStorySvelte as default
};
