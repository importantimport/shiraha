const __resolved__virtual_storySource_srcComponentsTabVanillaStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { logEvent } from 'histoire/client'
  import { tablist, tab, tabActive, tabpanel, tabpanelHidden } from 'shiraha-ve/dist/components/tab/vanilla.js'
  import 'shiraha-ve/dist/components/tab/vanilla.css'

  export let Hst: Hst

  let items: {
    id: string,
    title: string,
    content: string,
  }[] = [
    {
      id: 'tab-1',
      title: 'Tab 1',
      content: 'Tab 1 Content',
    },
    {
      id: 'tab-2',
      title: 'Tab 2',
      content: 'Tab 2 Content',
    },
    {
      id: 'tab-3',
      title: 'Tab 3',
      content: 'Tab 3 Content',
    },
    {
      id: 'tab-4',
      title: 'Tab 4',
      content: 'Tab 4 Content',
    },
  ]
  let activeItemId = items[0].id
<\/script>

<Hst.Story title="Tab (vanilla-extract)">
  <Hst.Variant title="default">
    <div role="tablist" aria-labelledby="tablist-1" class={tablist}>
      {#each items as item}
        <button on:click={(event) => {
          logEvent('click', event)
          activeItemId = item.id
        }} id={item.id} type="button" role="tab" aria-selected={activeItemId === item.id} aria-controls={\`\${item.id}-panel\`} class={activeItemId === item.id ? [tab, tabActive].join(' ') : tab}>
          <span>{item.title}</span>
        </button>
      {/each}
    </div>
    {#each items as item}
      <div id={\`\${item.id}-panel\`} role="tabpanel" aria-labelledby={item.id} class={activeItemId === item.id ? tabpanel : tabpanelHidden}>
        <p>{item.content}</p>
      </div>
    {/each}
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Json bind:value={items} title="Items" />
    <!-- <Hst.Checkbox bind:value={disabled} title="Disabled" />
    <Hst.Select
      bind:value={type}
      options={Object.keys(button.classNames.variants.type)}
      title="Type"
    />
    <Hst.Text bind:value={text} title="Text" />
    <Hst.Text bind:value={icon} title="Icon" /> -->
  </svelte:fragment>
</Hst.Story>
`;
export {
  __resolved__virtual_storySource_srcComponentsTabVanillaStorySvelte as default
};
