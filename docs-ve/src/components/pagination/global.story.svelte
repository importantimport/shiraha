<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import style from 'shiraha-ve/dist/components/pagination/global.css?inline'
  import styleB from 'shiraha-ve/dist/components/button/global.css?inline'

  export let Hst: Hst

  // let icon = false
</script>

<Hst.Story title="Pagination (global)">
  <Hst.Variant title="default">
    <svelte:element this={'style'}>{style}</svelte:element>
    <svelte:element this={'style'}>{styleB}</svelte:element>
    <nav aria-label="pagination">
      <ul>
        <li>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a role="button" href="#" rel="prev">Prev</a>
        </li>
        <!-- <li><span>1</span></li> -->
        <li>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a role="button" href="#" aria-current="page" aria-disabled="true">
            1
          </a>
        </li>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <li><a role="button" href="#">2</a></li>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <li><a role="button" href="#">3</a></li>
        <li>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a role="button" href="#" rel="next">Next</a>
        </li>
      </ul>
    </nav>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <!-- <Hst.Checkbox bind:value={icon} title="With Icon" /> -->
  </svelte:fragment>
</Hst.Story>
