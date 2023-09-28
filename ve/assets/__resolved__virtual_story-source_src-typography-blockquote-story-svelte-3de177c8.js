const __resolved__virtual_storySource_srcTypographyBlockquoteStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import 'shiraha-ve/dist/typography/blockquote/global.css'

  export let Hst: Hst

  let text = \`Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
  In hac habitasse platea dictumst quisque.
  Nam libero justo laoreet sit amet cursus sit amet.\`
<\/script>

<Hst.Story title="Blockquote">
  <Hst.Variant title="default">
    <blockquote>
      {text}
    </blockquote>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Textarea bind:value={text} title="Paragraph Text" />
  </svelte:fragment>
</Hst.Story>
`;
export {
  __resolved__virtual_storySource_srcTypographyBlockquoteStorySvelte as default
};
