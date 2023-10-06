<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import style from 'shiraha-ve/dist/typography/link/global.css?inline'

  export let Hst: Hst

  let text = 'Shiraha'
</script>

<Hst.Story title="Link">
  <Hst.Variant title="default">
    <svelte:element this={'style'}>{style}</svelte:element>
    <ul>
      {#each { length: 5 } as _}
        <!-- svelte-ignore a11y-invalid-attribute -->
        <li><a href="#">{@html text}</a></li>
      {/each}
    </ul>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Text bind:value={text} title="Link Text" />
  </svelte:fragment>
</Hst.Story>
