const __resolved__virtual_storySource_srcTypographyLinkStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import style from 'shiraha-ve/dist/typography/link/global.css?inline'

  export let Hst: Hst

  let linkText = 'Shiraha'
  let tagText = 'tag'
<\/script>

<Hst.Story title="Link">
  <Hst.Variant title="default">
    <svelte:element this={'style'}>{style}</svelte:element>
    <ul>
      {#each { length: 5 } as _}
        <!-- svelte-ignore a11y-invalid-attribute -->
        <li><a href="#">{@html linkText}</a></li>
      {/each}
    </ul>
      {#each { length: 5 } as _}
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" rel="tag">{@html tagText}</a>
      {/each}
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Text bind:value={linkText} title="Link Text" />
    <Hst.Text bind:value={tagText} title="Tag Text" />
  </svelte:fragment>
</Hst.Story>
`;
export {
  __resolved__virtual_storySource_srcTypographyLinkStorySvelte as default
};
