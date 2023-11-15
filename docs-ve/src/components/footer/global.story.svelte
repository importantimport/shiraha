<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import style from 'shiraha-ve/dist/components/footer/global.css?inline'
  import styleL from 'shiraha-ve/dist/typography/link/global.css?inline'
  import styleP from 'shiraha-ve/dist/typography/paragraph/global.css?inline'

  export let Hst: Hst

  let text = 'Copyright © 2023 - All right reserved by ACME Industries Ltd'
</script>

<Hst.Story title="Footer (global)">
  <Hst.Variant title="default">
    <svelte:element this={'style'}>{style}</svelte:element>
    <svelte:element this={'style'}>{styleL}</svelte:element>
    <svelte:element this={'style'}>{styleP}</svelte:element>
    <p>Footer with copyright text</p>
    <footer>
      <p>{text}</p>
    </footer>
    <!-- <p>Footer with copyright text and social icons</p> -->
    <p>Two footer</p>
    <footer>
      <p>{text}</p>
    </footer>
    <footer>
      <p>{text}</p>
    </footer>
    <p>with main</p>
    <main>
      <p>Footer with copyright text</p>
      <footer>
        <p>{text}</p>
      </footer>
      <!-- <p>Footer with copyright text and social icons</p> -->
      <p>Two footer</p>
      <footer>
        <p>{text}</p>
      </footer>
      <footer>
        <p>{text}</p>
      </footer>
    </main>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Text bind:value={text} title="Text" />
  </svelte:fragment>
</Hst.Story>
