<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import style from 'shiraha-ve/dist/components/breadcrumb/global.css?inline'
  import styleL from 'shiraha-ve/dist/typography/link/global.css?inline'
  import styleP from 'shiraha-ve/dist/typography/paragraph/global.css?inline'

  export let Hst: Hst

  let icon = false
</script>

<Hst.Story title="Breadcrumb (global)">
  <Hst.Variant title="default">
    <svelte:element this={'style'}>{style}</svelte:element>
    <svelte:element this={'style'}>{styleL}</svelte:element>
    <svelte:element this={'style'}>{styleP}</svelte:element>
    <p>Breadcrumb (Paragraph)</p>
    <nav aria-labelledby="breadcrumb">
      <p>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#">Shiraha</a>
        {#if icon}
          <span class="material-symbols-outlined">chevron_right</span>
        {:else}
          <span>/</span>
        {/if}
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#">Components</a>
        {#if icon}
          <span class="material-symbols-outlined">chevron_right</span>
        {:else}
          <span>/</span>
        {/if}
        <span>Breadcrumb</span>
      </p>
    </nav>
    <p>Breadcrumb (Unordered List)</p>
    <nav aria-labelledby="breadcrumb">
      <ul>
        <li>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="#">Shiraha</a>
        </li>
        <li>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="#">Components</a>
        </li>
        <li>
          <span>Breadcrumb</span>
        </li>
      </ul>
    </nav>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Checkbox bind:value={icon} title="With Icon" />
  </svelte:fragment>
</Hst.Story>
