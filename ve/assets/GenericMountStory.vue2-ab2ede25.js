import { Y as SvelteComponentDev, Z as init, $ as dispatch_dev, a0 as safe_not_equal, a1 as validate_slots, a2 as binding_callbacks, a3 as bind, a4 as create_component, a5 as mount_component, a6 as transition_in, a7 as transition_out, a8 as destroy_component, a9 as validate_dynamic_element, aa as validate_void_dynamic_element, ab as add_flush_callback, ac as space, ad as element, ae as text, af as add_location, ag as insert_dev, ah as append_dev, ai as set_data_dev, aj as detach_dev, ak as noop, al as ensure_array_like_dev, am as empty, an as destroy_each, ao as HtmlTag, ap as attr_dev, aq as logEvent, ar as globals, as as listen_dev, at as prop_dev, _ as __vitePreload, au as createRouter, v as histoireConfig, av as createWebHistory, aw as createWebHashHistory, ax as markRaw, K as reactive, d as defineComponent, r as ref, ay as watchEffect, o as openBlock, q as createBlock, az as mergeProps, aA as resolveDynamicComponent, h as createCommentVNode } from "./vendor-9550a5b3.js";
const style$2 = "blockquote{border-left-color:var(--md-sys-color-surface-variant);border-left-width:4px;margin-top:24px;padding-left:24px;font-style:italic}\n";
const file$5 = "src/typography/blockquote.story.svelte";
function create_dynamic_element$3(ctx) {
  let svelte_element;
  const block = {
    c: function create() {
      svelte_element = element("style");
      svelte_element.textContent = `${style$2}`;
      add_location(svelte_element, file$5, 15, 4, 434);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svelte_element, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svelte_element);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_dynamic_element$3.name,
    type: "child_dynamic_element",
    source: "(12:4) <svelte:element this={'style'}>",
    ctx
  });
  return block;
}
function create_default_slot_1$5(ctx) {
  let t0;
  let blockquote;
  let t1;
  validate_dynamic_element("style");
  validate_void_dynamic_element("style");
  let svelte_element = create_dynamic_element$3(ctx);
  const block = {
    c: function create() {
      if (svelte_element)
        svelte_element.c();
      t0 = space();
      blockquote = element("blockquote");
      t1 = text(
        /*text*/
        ctx[1]
      );
      add_location(blockquote, file$5, 16, 4, 494);
    },
    m: function mount(target, anchor) {
      if (svelte_element)
        svelte_element.m(target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, blockquote, anchor);
      append_dev(blockquote, t1);
    },
    p: function update(ctx2, dirty) {
      {
        svelte_element.p(ctx2, dirty);
      }
      if (dirty & /*text*/
      2)
        set_data_dev(
          t1,
          /*text*/
          ctx2[1]
        );
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(blockquote);
      }
      if (svelte_element)
        svelte_element.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$5.name,
    type: "slot",
    source: '(11:2) <Hst.Variant title=\\"default\\">',
    ctx
  });
  return block;
}
function create_default_slot$5(ctx) {
  let hst_variant;
  let current;
  hst_variant = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "default",
      $$slots: { default: [create_default_slot_1$5] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & /*$$scope, text*/
      10) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$5.name,
    type: "slot",
    source: '(10:0) <Hst.Story title=\\"Blockquote\\">',
    ctx
  });
  return block;
}
function create_controls_slot$4(ctx) {
  let hst_textarea;
  let updating_value;
  let current;
  function hst_textarea_value_binding(value) {
    ctx[2](value);
  }
  let hst_textarea_props = { title: "Paragraph Text" };
  if (
    /*text*/
    ctx[1] !== void 0
  ) {
    hst_textarea_props.value = /*text*/
    ctx[1];
  }
  hst_textarea = new /*Hst*/
  ctx[0].Textarea({
    props: hst_textarea_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_textarea, "value", hst_textarea_value_binding));
  const block = {
    c: function create() {
      create_component(hst_textarea.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_textarea, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_textarea_changes = {};
      if (!updating_value && dirty & /*text*/
      2) {
        updating_value = true;
        hst_textarea_changes.value = /*text*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_textarea.$set(hst_textarea_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_textarea.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_textarea.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_textarea, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$4.name,
    type: "slot",
    source: '(18:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$5(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Blockquote",
      $$slots: {
        controls: [create_controls_slot$4],
        default: [create_default_slot$5]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, text*/
      10) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Blockquote_story", slots, []);
  let { Hst } = $$props;
  let text2 = `Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
  In hac habitasse platea dictumst quisque.
  Nam libero justo laoreet sit amet cursus sit amet.`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Blockquote_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Blockquote_story> was created with unknown prop '${key}'`);
  });
  function hst_textarea_value_binding(value) {
    text2 = value;
    $$invalidate(1, text2);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ style: style$2, Hst, text: text2 });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("text" in $$props2)
      $$invalidate(1, text2 = $$props2.text);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, text2, hst_textarea_value_binding];
}
class Blockquote_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Blockquote_story",
      options,
      id: create_fragment$5.name
    });
  }
  get Hst() {
    throw new Error("<Blockquote_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Blockquote_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const styleH = ":where(h1,h2,h3,h4){letter-spacing:-.025em;padding-bottom:8px;scroll-margin:80px;font-weight:600}:where(h1,h2,h3):not(:first-child){margin-top:48px}:where(h4,h5,h6):not(:first-child){margin-top:24px}:where(h1),.h1{margin-top:0;font-size:clamp(2.49rem,2.14rem + 1.73vw,3.05rem)}:where(h2),.h2{font-size:clamp(2.07rem,1.85rem + 1.13vw,2.44rem)}:where(h3),.h3{font-size:clamp(1.73rem,1.59rem + .69vw,1.95rem)}:where(h4),.h4{font-size:clamp(1.44rem,1.36rem + .38vw,1.56rem)}:where(h5),.h5{font-size:clamp(1.2rem,1.17rem + .15vw,1.25rem)}:where(h6),.h6{font-size:clamp(.8rem,.78rem + .1vw,.83rem)}@supports (text-wrap:pretty){:where(h1,h2,h3,h4){text-wrap:pretty}}@supports not (text-wrap:pretty){:where(h1,h2,h3,h4){text-wrap:balance}}\n";
const styleP = "p{font-size:1rem}p:not(:first-child){margin-top:24px}\n";
const file$4 = "src/typography/heading.story.svelte";
function get_each_context$2(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i2];
  return child_ctx;
}
function create_dynamic_element_2(ctx) {
  let svelte_element;
  const block = {
    c: function create() {
      svelte_element = element("style");
      svelte_element.textContent = `${styleH}`;
      add_location(svelte_element, file$4, 18, 4, 582);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svelte_element, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svelte_element);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_dynamic_element_2.name,
    type: "child_dynamic_element",
    source: "(15:4) <svelte:element this={'style'}>",
    ctx
  });
  return block;
}
function create_dynamic_element_1$1(ctx) {
  let svelte_element;
  const block = {
    c: function create() {
      svelte_element = element("style");
      svelte_element.textContent = `${styleP}`;
      add_location(svelte_element, file$4, 19, 4, 642);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svelte_element, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svelte_element);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_dynamic_element_1$1.name,
    type: "child_dynamic_element",
    source: "(16:4) <svelte:element this={'style'}>",
    ctx
  });
  return block;
}
function create_dynamic_element$2(ctx) {
  let svelte_element;
  let html_tag;
  let t0;
  let t1_value = (
    /*heading*/
    ctx[6].at(1) + ""
  );
  let t1;
  const block = {
    c: function create() {
      svelte_element = element(
        /*heading*/
        ctx[6]
      );
      html_tag = new HtmlTag(false);
      t0 = space();
      t1 = text(t1_value);
      html_tag.a = t0;
      add_location(svelte_element, file$4, 21, 6, 737);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svelte_element, anchor);
      html_tag.m(
        /*hText*/
        ctx[1],
        svelte_element
      );
      append_dev(svelte_element, t0);
      append_dev(svelte_element, t1);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*hText*/
      2)
        html_tag.p(
          /*hText*/
          ctx2[1]
        );
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svelte_element);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_dynamic_element$2.name,
    type: "child_dynamic_element",
    source: "(18:6) <svelte:element this={heading}>",
    ctx
  });
  return block;
}
function create_if_block$1(ctx) {
  let p2;
  const block = {
    c: function create() {
      p2 = element("p");
      add_location(p2, file$4, 26, 8, 865);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p2, anchor);
      p2.innerHTML = /*pText*/
      ctx[2];
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*pText*/
      4)
        p2.innerHTML = /*pText*/
        ctx2[2];
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(p2);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(22:6) {#if pText}",
    ctx
  });
  return block;
}
function create_each_block$2(ctx) {
  let t;
  let if_block_anchor;
  validate_dynamic_element(
    /*heading*/
    ctx[6]
  );
  validate_void_dynamic_element(
    /*heading*/
    ctx[6]
  );
  let svelte_element = (
    /*heading*/
    ctx[6] && create_dynamic_element$2(ctx)
  );
  let if_block = (
    /*pText*/
    ctx[2] && create_if_block$1(ctx)
  );
  const block = {
    c: function create() {
      if (svelte_element)
        svelte_element.c();
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (svelte_element)
        svelte_element.m(target, anchor);
      insert_dev(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (
        /*heading*/
        ctx2[6]
      ) {
        svelte_element.p(ctx2, dirty);
      }
      if (
        /*pText*/
        ctx2[2]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
        detach_dev(if_block_anchor);
      }
      if (svelte_element)
        svelte_element.d(detaching);
      if (if_block)
        if_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$2.name,
    type: "each",
    source: "(17:4) {#each headings as heading}",
    ctx
  });
  return block;
}
function create_default_slot_1$4(ctx) {
  let t0;
  let t1;
  let each_1_anchor;
  validate_dynamic_element("style");
  validate_void_dynamic_element("style");
  let svelte_element0 = create_dynamic_element_2(ctx);
  validate_dynamic_element("style");
  validate_void_dynamic_element("style");
  let svelte_element1 = create_dynamic_element_1$1(ctx);
  let each_value = ensure_array_like_dev(
    /*headings*/
    ctx[3]
  );
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block$2(get_each_context$2(ctx, each_value, i2));
  }
  const block = {
    c: function create() {
      if (svelte_element0)
        svelte_element0.c();
      t0 = space();
      if (svelte_element1)
        svelte_element1.c();
      t1 = space();
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (svelte_element0)
        svelte_element0.m(target, anchor);
      insert_dev(target, t0, anchor);
      if (svelte_element1)
        svelte_element1.m(target, anchor);
      insert_dev(target, t1, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        if (each_blocks[i2]) {
          each_blocks[i2].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      {
        svelte_element0.p(ctx2, dirty);
      }
      {
        svelte_element1.p(ctx2, dirty);
      }
      if (dirty & /*pText, headings, hText*/
      14) {
        each_value = ensure_array_like_dev(
          /*headings*/
          ctx2[3]
        );
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context$2(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
          } else {
            each_blocks[i2] = create_each_block$2(child_ctx);
            each_blocks[i2].c();
            each_blocks[i2].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i2 < each_blocks.length; i2 += 1) {
          each_blocks[i2].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(each_1_anchor);
      }
      if (svelte_element0)
        svelte_element0.d(detaching);
      if (svelte_element1)
        svelte_element1.d(detaching);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$4.name,
    type: "slot",
    source: '(14:2) <Hst.Variant title=\\"default\\">',
    ctx
  });
  return block;
}
function create_default_slot$4(ctx) {
  let hst_variant;
  let current;
  hst_variant = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "default",
      $$slots: { default: [create_default_slot_1$4] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & /*$$scope, pText, hText*/
      518) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$4.name,
    type: "slot",
    source: '(13:0) <Hst.Story title=\\"Heading\\">',
    ctx
  });
  return block;
}
function create_controls_slot$3(ctx) {
  let hst_text;
  let updating_value;
  let t;
  let hst_textarea;
  let updating_value_1;
  let current;
  function hst_text_value_binding(value) {
    ctx[4](value);
  }
  let hst_text_props = { title: "Heading Text" };
  if (
    /*hText*/
    ctx[1] !== void 0
  ) {
    hst_text_props.value = /*hText*/
    ctx[1];
  }
  hst_text = new /*Hst*/
  ctx[0].Text({ props: hst_text_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text, "value", hst_text_value_binding));
  function hst_textarea_value_binding(value) {
    ctx[5](value);
  }
  let hst_textarea_props = { title: "Paragraph Text" };
  if (
    /*pText*/
    ctx[2] !== void 0
  ) {
    hst_textarea_props.value = /*pText*/
    ctx[2];
  }
  hst_textarea = new /*Hst*/
  ctx[0].Textarea({
    props: hst_textarea_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_textarea, "value", hst_textarea_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text.$$.fragment);
      t = space();
      create_component(hst_textarea.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_textarea, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text_changes = {};
      if (!updating_value && dirty & /*hText*/
      2) {
        updating_value = true;
        hst_text_changes.value = /*hText*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_text.$set(hst_text_changes);
      const hst_textarea_changes = {};
      if (!updating_value_1 && dirty & /*pText*/
      4) {
        updating_value_1 = true;
        hst_textarea_changes.value = /*pText*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_textarea.$set(hst_textarea_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text.$$.fragment, local);
      transition_in(hst_textarea.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text.$$.fragment, local);
      transition_out(hst_textarea.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_text, detaching);
      destroy_component(hst_textarea, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$3.name,
    type: "slot",
    source: '(28:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$4(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Heading",
      $$slots: {
        controls: [create_controls_slot$3],
        default: [create_default_slot$4]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, pText, hText*/
      518) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Heading_story", slots, []);
  let { Hst } = $$props;
  let headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  let hText = "Heading";
  let pText = `Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
  In hac habitasse platea dictumst quisque.
  Nam libero justo laoreet sit amet cursus sit amet.`;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Heading_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Heading_story> was created with unknown prop '${key}'`);
  });
  function hst_text_value_binding(value) {
    hText = value;
    $$invalidate(1, hText);
  }
  function hst_textarea_value_binding(value) {
    pText = value;
    $$invalidate(2, pText);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    style: styleH,
    styleP,
    Hst,
    headings,
    hText,
    pText
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("headings" in $$props2)
      $$invalidate(3, headings = $$props2.headings);
    if ("hText" in $$props2)
      $$invalidate(1, hText = $$props2.hText);
    if ("pText" in $$props2)
      $$invalidate(2, pText = $$props2.pText);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    hText,
    pText,
    headings,
    hst_text_value_binding,
    hst_textarea_value_binding
  ];
}
class Heading_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Heading_story",
      options,
      id: create_fragment$4.name
    });
  }
  get Hst() {
    throw new Error("<Heading_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Heading_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const style$1 = "a:not([role]){background:linear-gradient(0deg,var(--md-sys-on-primary-container),var(--md-sys-on-primary-container))no-repeat right bottom/0 .125em;color:var(--md-sys-color-primary);text-decoration:none;transition:background-size .4s cubic-bezier(.05,.7,.1,1)}a:not([role]):hover{color:var(--md-sys-on-primary-container);background-position-x:left;background-size:100% .125em}\n";
const file$3 = "src/typography/link.story.svelte";
function get_each_context$1(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i2];
  return child_ctx;
}
function create_dynamic_element$1(ctx) {
  let svelte_element;
  const block = {
    c: function create() {
      svelte_element = element("style");
      svelte_element.textContent = `${style$1}`;
      add_location(svelte_element, file$3, 11, 4, 199);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svelte_element, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svelte_element);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_dynamic_element$1.name,
    type: "child_dynamic_element",
    source: "(8:4) <svelte:element this={'style'}>",
    ctx
  });
  return block;
}
function create_each_block$1(ctx) {
  let li;
  let a2;
  const block = {
    c: function create() {
      li = element("li");
      a2 = element("a");
      attr_dev(a2, "href", "#");
      add_location(a2, file$3, 15, 12, 363);
      add_location(li, file$3, 15, 8, 359);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, a2);
      a2.innerHTML = /*text*/
      ctx[1];
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*text*/
      2)
        a2.innerHTML = /*text*/
        ctx2[1];
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(li);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$1.name,
    type: "each",
    source: "(10:6) {#each { length: 5 } as _}",
    ctx
  });
  return block;
}
function create_default_slot_1$3(ctx) {
  let t;
  let ul;
  validate_dynamic_element("style");
  validate_void_dynamic_element("style");
  let svelte_element = create_dynamic_element$1(ctx);
  let each_value = ensure_array_like_dev({ length: 5 });
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block$1(get_each_context$1(ctx, each_value, i2));
  }
  const block = {
    c: function create() {
      if (svelte_element)
        svelte_element.c();
      t = space();
      ul = element("ul");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      add_location(ul, file$3, 12, 4, 259);
    },
    m: function mount(target, anchor) {
      if (svelte_element)
        svelte_element.m(target, anchor);
      insert_dev(target, t, anchor);
      insert_dev(target, ul, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        if (each_blocks[i2]) {
          each_blocks[i2].m(ul, null);
        }
      }
    },
    p: function update(ctx2, dirty) {
      {
        svelte_element.p(ctx2, dirty);
      }
      if (dirty & /*text*/
      2) {
        each_value = ensure_array_like_dev({ length: 5 });
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
          } else {
            each_blocks[i2] = create_each_block$1(child_ctx);
            each_blocks[i2].c();
            each_blocks[i2].m(ul, null);
          }
        }
        for (; i2 < each_blocks.length; i2 += 1) {
          each_blocks[i2].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
        detach_dev(ul);
      }
      if (svelte_element)
        svelte_element.d(detaching);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$3.name,
    type: "slot",
    source: '(7:2) <Hst.Variant title=\\"default\\">',
    ctx
  });
  return block;
}
function create_default_slot$3(ctx) {
  let hst_variant;
  let current;
  hst_variant = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "default",
      $$slots: { default: [create_default_slot_1$3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & /*$$scope, text*/
      66) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$3.name,
    type: "slot",
    source: '(6:0) <Hst.Story title=\\"Link\\">',
    ctx
  });
  return block;
}
function create_controls_slot$2(ctx) {
  let hst_text;
  let updating_value;
  let current;
  function hst_text_value_binding(value) {
    ctx[2](value);
  }
  let hst_text_props = { title: "Link Text" };
  if (
    /*text*/
    ctx[1] !== void 0
  ) {
    hst_text_props.value = /*text*/
    ctx[1];
  }
  hst_text = new /*Hst*/
  ctx[0].Text({ props: hst_text_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text, "value", hst_text_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text_changes = {};
      if (!updating_value && dirty & /*text*/
      2) {
        updating_value = true;
        hst_text_changes.value = /*text*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_text.$set(hst_text_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$2.name,
    type: "slot",
    source: '(17:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Link",
      $$slots: {
        controls: [create_controls_slot$2],
        default: [create_default_slot$3]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, text*/
      66) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Link_story", slots, []);
  let { Hst } = $$props;
  let text2 = "Shiraha";
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Link_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Link_story> was created with unknown prop '${key}'`);
  });
  function hst_text_value_binding(value) {
    text2 = value;
    $$invalidate(1, text2);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ style: style$1, Hst, text: text2 });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("text" in $$props2)
      $$invalidate(1, text2 = $$props2.text);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, text2, hst_text_value_binding];
}
class Link_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Link_story",
      options,
      id: create_fragment$3.name
    });
  }
  get Hst() {
    throw new Error("<Link_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Link_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const style = ":where(button:not([role]),[role=button],input[type=button],input[type=submit],input[type=reset]){color:var(--md-sys-color-primary);cursor:pointer;border-radius:20px;gap:8px;min-width:40px;height:40px;padding:.5rem 1.5rem;text-decoration:none;transition:all .1s ease-in-out;display:inline-flex}:where(button:not([role]),[role=button],input[type=button],input[type=submit],input[type=reset]):disabled{background-color:rgb(from var(--md-sys-color-on-surface)r g b/12%);color:rgb(from var(--md-sys-color-on-surface)r g b/38%);cursor:not-allowed}:where(button:not([role]),[role=button],input[type=button],input[type=submit],input[type=reset]):focus-visible{outline:var(--md-sys-color-primary)solid 2px;outline-offset:4px}:where(button:not([role]),[role=button],input[type=button],input[type=submit],input[type=reset]):active:not(:disabled){scale:.95}:where(button:not([role]),[role=button],input[type=button],input[type=submit],input[type=reset]):has([class^=material-symbols]:first-child:not(:last-child)){padding-left:16px}:where(button:not([role]),[role=button],input[type=button]){background-color:var(--md-sys-color-surface-container-low);box-shadow:0 1px 2px -1px hsl(var(--shadow-color)/calc(var(--shadow-strength) + 9%))}:where(button:not([role]),[role=button],input[type=button]):active:not(:disabled),:where(button:not([role]),[role=button],input[type=button]):focus:not(:disabled){background-color:color-mix(in srgb,var(--md-sys-color-primary)12%,var(--md-sys-color-surface-container-low)100%)}:where(button:not([role]),[role=button],input[type=button]):hover:not(:active,:disabled){background-color:color-mix(in srgb,var(--md-sys-color-primary)8%,var(--md-sys-color-surface-container-low)100%);box-shadow:0 3px 5px -2px hsl(var(--shadow-color)/calc(var(--shadow-strength) + 3%)),0 7px 14px -5px hsl(var(--shadow-color)/calc(var(--shadow-strength) + 5%))}:where(input[type=submit]){background-color:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary)}:where(input[type=submit]):active:not(:disabled),:where(input[type=submit]):focus:not(:disabled){background-color:color-mix(in srgb,var(--md-sys-color-on-primary)12%,var(--md-sys-color-primary)100%)}:where(input[type=submit]):hover:not(:active,:disabled){background-color:color-mix(in srgb,var(--md-sys-color-on-primary)8%,var(--md-sys-color-primary)100%);box-shadow:0 1px 2px -1px hsl(var(--shadow-color)/calc(var(--shadow-strength) + 9%))}:where(input[type=reset]){background-color:var(--md-sys-color-error);color:var(--md-sys-color-on-error)}:where(input[type=reset]):is(:active,:focus):not(:disabled){background-color:color-mix(in srgb,var(--md-sys-color-on-error)12%,var(--md-sys-color-error)100%)}:where(input[type=reset]):hover:not(:disabled){background-color:color-mix(in srgb,var(--md-sys-color-on-error)8%,var(--md-sys-color-error)100%);box-shadow:0 1px 2px -1px hsl(var(--shadow-color)/calc(var(--shadow-strength) + 9%))}\n";
const file$2 = "src/components/button/global.story.svelte";
function create_dynamic_element_1(ctx) {
  let svelte_element;
  const block = {
    c: function create() {
      svelte_element = element("style");
      svelte_element.textContent = `${style}`;
      add_location(svelte_element, file$2, 14, 4, 265);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svelte_element, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svelte_element);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_dynamic_element_1.name,
    type: "child_dynamic_element",
    source: "(8:4) <svelte:element this={'style'}>",
    ctx
  });
  return block;
}
function create_dynamic_element(ctx) {
  let svelte_element;
  const block = {
    c: function create() {
      svelte_element = element("style");
      svelte_element.textContent = `${styleH}`;
      add_location(svelte_element, file$2, 15, 4, 325);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svelte_element, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svelte_element);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_dynamic_element.name,
    type: "child_dynamic_element",
    source: "(9:4) <svelte:element this={'style'}>",
    ctx
  });
  return block;
}
function create_default_slot_1$2(ctx) {
  let t0;
  let t1;
  let h40;
  let t3;
  let button0;
  let t5;
  let a2;
  let t7;
  let h41;
  let t9;
  let button1;
  let t11;
  let h42;
  let t13;
  let input0;
  let t14;
  let input1;
  let t15;
  let input2;
  validate_dynamic_element("style");
  validate_void_dynamic_element("style");
  let svelte_element0 = create_dynamic_element_1(ctx);
  validate_dynamic_element("style");
  validate_void_dynamic_element("style");
  let svelte_element1 = create_dynamic_element(ctx);
  const block = {
    c: function create() {
      if (svelte_element0)
        svelte_element0.c();
      t0 = space();
      if (svelte_element1)
        svelte_element1.c();
      t1 = space();
      h40 = element("h4");
      h40.textContent = "Buttons";
      t3 = space();
      button0 = element("button");
      button0.textContent = "button";
      t5 = space();
      a2 = element("a");
      a2.textContent = "a role=button";
      t7 = space();
      h41 = element("h4");
      h41.textContent = "Button State";
      t9 = space();
      button1 = element("button");
      button1.textContent = "button disabled";
      t11 = space();
      h42 = element("h4");
      h42.textContent = "Input Buttons";
      t13 = space();
      input0 = element("input");
      t14 = space();
      input1 = element("input");
      t15 = space();
      input2 = element("input");
      add_location(h40, file$2, 17, 4, 387);
      add_location(button0, file$2, 18, 4, 408);
      attr_dev(a2, "role", "button");
      attr_dev(a2, "href", "https://github.com/importantimport/shiraha");
      attr_dev(a2, "target", "_blank");
      add_location(a2, file$2, 19, 4, 436);
      add_location(h41, file$2, 27, 4, 577);
      button1.disabled = true;
      add_location(button1, file$2, 28, 4, 603);
      add_location(h42, file$2, 30, 4, 650);
      attr_dev(input0, "type", "button");
      input0.value = "input type=button";
      add_location(input0, file$2, 31, 4, 677);
      attr_dev(input1, "type", "submit");
      input1.value = "input type=submit";
      add_location(input1, file$2, 32, 4, 731);
      attr_dev(input2, "type", "reset");
      input2.value = "input type=reset";
      add_location(input2, file$2, 33, 4, 785);
    },
    m: function mount(target, anchor) {
      if (svelte_element0)
        svelte_element0.m(target, anchor);
      insert_dev(target, t0, anchor);
      if (svelte_element1)
        svelte_element1.m(target, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, h40, anchor);
      insert_dev(target, t3, anchor);
      insert_dev(target, button0, anchor);
      insert_dev(target, t5, anchor);
      insert_dev(target, a2, anchor);
      insert_dev(target, t7, anchor);
      insert_dev(target, h41, anchor);
      insert_dev(target, t9, anchor);
      insert_dev(target, button1, anchor);
      insert_dev(target, t11, anchor);
      insert_dev(target, h42, anchor);
      insert_dev(target, t13, anchor);
      insert_dev(target, input0, anchor);
      insert_dev(target, t14, anchor);
      insert_dev(target, input1, anchor);
      insert_dev(target, t15, anchor);
      insert_dev(target, input2, anchor);
    },
    p: function update(ctx2, dirty) {
      {
        svelte_element0.p(ctx2, dirty);
      }
      {
        svelte_element1.p(ctx2, dirty);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(h40);
        detach_dev(t3);
        detach_dev(button0);
        detach_dev(t5);
        detach_dev(a2);
        detach_dev(t7);
        detach_dev(h41);
        detach_dev(t9);
        detach_dev(button1);
        detach_dev(t11);
        detach_dev(h42);
        detach_dev(t13);
        detach_dev(input0);
        detach_dev(t14);
        detach_dev(input1);
        detach_dev(t15);
        detach_dev(input2);
      }
      if (svelte_element0)
        svelte_element0.d(detaching);
      if (svelte_element1)
        svelte_element1.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$2.name,
    type: "slot",
    source: '(7:2) <Hst.Variant title=\\"default\\">',
    ctx
  });
  return block;
}
function create_default_slot$2(ctx) {
  let hst_variant;
  let current;
  hst_variant = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "default",
      $$slots: { default: [create_default_slot_1$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & /*$$scope*/
      2) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$2.name,
    type: "slot",
    source: '(6:0) <Hst.Story title=\\"Button (global)\\">',
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Button (global)",
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope*/
      2) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Global_story", slots, []);
  let { Hst } = $$props;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Global_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Global_story> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ style, styleH, Hst });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst];
}
class Global_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Global_story",
      options,
      id: create_fragment$2.name
    });
  }
  get Hst() {
    throw new Error("<Global_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Global_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function O(r, e2) {
  if (typeof r != "object" || r === null)
    return r;
  var a2 = r[Symbol.toPrimitive];
  if (a2 !== void 0) {
    var t = a2.call(r, e2 || "default");
    if (typeof t != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e2 === "string" ? String : Number)(r);
}
function c$1(r) {
  var e2 = O(r, "string");
  return typeof e2 == "symbol" ? e2 : String(e2);
}
function d$1(r, e2, a2) {
  return e2 = c$1(e2), e2 in r ? Object.defineProperty(r, e2, { value: a2, enumerable: true, configurable: true, writable: true }) : r[e2] = a2, r;
}
function o(r, e2) {
  var a2 = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    e2 && (t = t.filter(function(n2) {
      return Object.getOwnPropertyDescriptor(r, n2).enumerable;
    })), a2.push.apply(a2, t);
  }
  return a2;
}
function v(r) {
  for (var e2 = 1; e2 < arguments.length; e2++) {
    var a2 = arguments[e2] != null ? arguments[e2] : {};
    e2 % 2 ? o(Object(a2), true).forEach(function(t) {
      d$1(r, t, a2[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a2)) : o(Object(a2)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a2, t));
    });
  }
  return r;
}
function p(r, e2) {
  var a2 = {};
  for (var t in r)
    a2[t] = e2(r[t], t);
  return a2;
}
var y = (r, e2, a2) => {
  for (var t of Object.keys(r)) {
    var n2;
    if (r[t] !== ((n2 = e2[t]) !== null && n2 !== void 0 ? n2 : a2[t]))
      return false;
  }
  return true;
}, P = (r) => {
  var e2 = (a2) => {
    var t = r.defaultClassName, n2 = v(v({}, r.defaultVariants), a2);
    for (var f in n2) {
      var s, i2 = (s = n2[f]) !== null && s !== void 0 ? s : r.defaultVariants[f];
      if (i2 != null) {
        var u = i2;
        typeof u == "boolean" && (u = u === true ? "true" : "false");
        var l = r.variantClassNames[f][u];
        l && (t += " " + l);
      }
    }
    for (var [m2, b] of r.compoundVariants)
      y(m2, n2, r.defaultVariants) && (t += " " + b);
    return t;
  };
  return e2.variants = () => Object.keys(r.variantClassNames), e2.classNames = { get base() {
    return r.defaultClassName.split(" ")[0];
  }, get variants() {
    return p(r.variantClassNames, (a2) => p(a2, (t) => t.split(" ")[0]));
  } }, e2;
};
var d = P({ defaultClassName: "vgkibh1", variantClassNames: { icon: { true: "vgkibh2" }, type: { elevated: "vgkibh3", filled: "vgkibh4", outlined: "vgkibh5", text: "vgkibh6", tonal: "vgkibh7" } }, defaultVariants: { icon: false, type: "filled" }, compoundVariants: [[{ icon: true, type: "outlined" }, "vgkibh8"], [{ icon: true, type: "text" }, "vgkibh9"]] }), c = "vgkibh0";
const vanilla$1 = "";
const { Object: Object_1 } = globals;
const file$1 = "src/components/button/vanilla.story.svelte";
function create_if_block_1(ctx) {
  let span;
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(
        /*icon*/
        ctx[2]
      );
      attr_dev(span, "class", [c, "material-symbols-outlined"].join(" "));
      add_location(span, file$1, 25, 8, 553);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*icon*/
      4)
        set_data_dev(
          t,
          /*icon*/
          ctx2[2]
        );
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(span);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(21:6) {#if icon}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let br0;
  let t0;
  let br1;
  let t1;
  let button_1;
  let t2;
  let button_1_class_value;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      br0 = element("br");
      t0 = space();
      br1 = element("br");
      t1 = space();
      button_1 = element("button");
      t2 = text(
        /*icon*/
        ctx[2]
      );
      add_location(br0, file$1, 32, 6, 726);
      add_location(br1, file$1, 33, 6, 739);
      attr_dev(button_1, "class", button_1_class_value = [
        "material-symbols-outlined",
        c,
        d({ type: (
          /*type*/
          ctx[4]
        ), icon: true })
      ].join(" "));
      button_1.disabled = /*disabled*/
      ctx[1];
      add_location(button_1, file$1, 34, 6, 752);
    },
    m: function mount(target, anchor) {
      insert_dev(target, br0, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, br1, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, button_1, anchor);
      append_dev(button_1, t2);
      if (!mounted) {
        dispose = listen_dev(
          button_1,
          "click",
          /*click_handler_1*/
          ctx[10],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*icon*/
      4)
        set_data_dev(
          t2,
          /*icon*/
          ctx2[2]
        );
      if (dirty & /*type*/
      16 && button_1_class_value !== (button_1_class_value = [
        "material-symbols-outlined",
        c,
        d({ type: (
          /*type*/
          ctx2[4]
        ), icon: true })
      ].join(" "))) {
        attr_dev(button_1, "class", button_1_class_value);
      }
      if (dirty & /*disabled*/
      2) {
        prop_dev(
          button_1,
          "disabled",
          /*disabled*/
          ctx2[1]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(br0);
        detach_dev(t0);
        detach_dev(br1);
        detach_dev(t1);
        detach_dev(button_1);
      }
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(28:4) {#if icon}",
    ctx
  });
  return block;
}
function create_default_slot_1$1(ctx) {
  let button_1;
  let t0;
  let span;
  let t1;
  let button_1_class_value;
  let t2;
  let if_block1_anchor;
  let mounted;
  let dispose;
  let if_block0 = (
    /*icon*/
    ctx[2] && create_if_block_1(ctx)
  );
  let if_block1 = (
    /*icon*/
    ctx[2] && create_if_block(ctx)
  );
  const block = {
    c: function create() {
      button_1 = element("button");
      if (if_block0)
        if_block0.c();
      t0 = space();
      span = element("span");
      t1 = text(
        /*text*/
        ctx[3]
      );
      t2 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      add_location(span, file$1, 29, 6, 671);
      attr_dev(button_1, "class", button_1_class_value = d({ type: (
        /*type*/
        ctx[4]
      ), icon: false }));
      button_1.disabled = /*disabled*/
      ctx[1];
      add_location(button_1, file$1, 19, 4, 400);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button_1, anchor);
      if (if_block0)
        if_block0.m(button_1, null);
      append_dev(button_1, t0);
      append_dev(button_1, span);
      append_dev(span, t1);
      insert_dev(target, t2, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_dev(target, if_block1_anchor, anchor);
      if (!mounted) {
        dispose = listen_dev(
          button_1,
          "click",
          /*click_handler*/
          ctx[9],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (
        /*icon*/
        ctx2[2]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          if_block0.m(button_1, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (dirty & /*text*/
      8)
        set_data_dev(
          t1,
          /*text*/
          ctx2[3]
        );
      if (dirty & /*type*/
      16 && button_1_class_value !== (button_1_class_value = d({ type: (
        /*type*/
        ctx2[4]
      ), icon: false }))) {
        attr_dev(button_1, "class", button_1_class_value);
      }
      if (dirty & /*disabled*/
      2) {
        prop_dev(
          button_1,
          "disabled",
          /*disabled*/
          ctx2[1]
        );
      }
      if (
        /*icon*/
        ctx2[2]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(button_1);
        detach_dev(t2);
        detach_dev(if_block1_anchor);
      }
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d(detaching);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$1.name,
    type: "slot",
    source: '(15:2) <Hst.Variant title=\\"default\\">',
    ctx
  });
  return block;
}
function create_default_slot$1(ctx) {
  let hst_variant;
  let current;
  hst_variant = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "default",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & /*$$scope, type, disabled, icon, text*/
      2078) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$1.name,
    type: "slot",
    source: '(14:0) <Hst.Story title=\\"Button (vanilla-extract)\\">',
    ctx
  });
  return block;
}
function create_controls_slot$1(ctx) {
  let hst_checkbox;
  let updating_value;
  let t0;
  let hst_select;
  let updating_value_1;
  let t1;
  let hst_text0;
  let updating_value_2;
  let t2;
  let hst_text1;
  let updating_value_3;
  let current;
  function hst_checkbox_value_binding(value) {
    ctx[5](value);
  }
  let hst_checkbox_props = { title: "Disabled" };
  if (
    /*disabled*/
    ctx[1] !== void 0
  ) {
    hst_checkbox_props.value = /*disabled*/
    ctx[1];
  }
  hst_checkbox = new /*Hst*/
  ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  function hst_select_value_binding(value) {
    ctx[6](value);
  }
  let hst_select_props = {
    options: Object.keys(d.classNames.variants.type),
    title: "Type"
  };
  if (
    /*type*/
    ctx[4] !== void 0
  ) {
    hst_select_props.value = /*type*/
    ctx[4];
  }
  hst_select = new /*Hst*/
  ctx[0].Select({ props: hst_select_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_select, "value", hst_select_value_binding));
  function hst_text0_value_binding(value) {
    ctx[7](value);
  }
  let hst_text0_props = { title: "Text" };
  if (
    /*text*/
    ctx[3] !== void 0
  ) {
    hst_text0_props.value = /*text*/
    ctx[3];
  }
  hst_text0 = new /*Hst*/
  ctx[0].Text({ props: hst_text0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text0, "value", hst_text0_value_binding));
  function hst_text1_value_binding(value) {
    ctx[8](value);
  }
  let hst_text1_props = { title: "Icon" };
  if (
    /*icon*/
    ctx[2] !== void 0
  ) {
    hst_text1_props.value = /*icon*/
    ctx[2];
  }
  hst_text1 = new /*Hst*/
  ctx[0].Text({ props: hst_text1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text1, "value", hst_text1_value_binding));
  const block = {
    c: function create() {
      create_component(hst_checkbox.$$.fragment);
      t0 = space();
      create_component(hst_select.$$.fragment);
      t1 = space();
      create_component(hst_text0.$$.fragment);
      t2 = space();
      create_component(hst_text1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_checkbox, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(hst_select, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(hst_text0, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(hst_text1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_checkbox_changes = {};
      if (!updating_value && dirty & /*disabled*/
      2) {
        updating_value = true;
        hst_checkbox_changes.value = /*disabled*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
      const hst_select_changes = {};
      if (!updating_value_1 && dirty & /*type*/
      16) {
        updating_value_1 = true;
        hst_select_changes.value = /*type*/
        ctx2[4];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_select.$set(hst_select_changes);
      const hst_text0_changes = {};
      if (!updating_value_2 && dirty & /*text*/
      8) {
        updating_value_2 = true;
        hst_text0_changes.value = /*text*/
        ctx2[3];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_text0.$set(hst_text0_changes);
      const hst_text1_changes = {};
      if (!updating_value_3 && dirty & /*icon*/
      4) {
        updating_value_3 = true;
        hst_text1_changes.value = /*icon*/
        ctx2[2];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_text1.$set(hst_text1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_checkbox.$$.fragment, local);
      transition_in(hst_select.$$.fragment, local);
      transition_in(hst_text0.$$.fragment, local);
      transition_in(hst_text1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_checkbox.$$.fragment, local);
      transition_out(hst_select.$$.fragment, local);
      transition_out(hst_text0.$$.fragment, local);
      transition_out(hst_text1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
      }
      destroy_component(hst_checkbox, detaching);
      destroy_component(hst_select, detaching);
      destroy_component(hst_text0, detaching);
      destroy_component(hst_text1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$1.name,
    type: "slot",
    source: '(45:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Button (vanilla-extract)",
      $$slots: {
        controls: [create_controls_slot$1],
        default: [create_default_slot$1]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, icon, text, type, disabled*/
      2078) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Vanilla_story", slots, []);
  let { Hst } = $$props;
  let disabled = false;
  let icon = "ac_unit";
  let text2 = "Shiraha";
  let type = "filled";
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Vanilla_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object_1.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Vanilla_story> was created with unknown prop '${key}'`);
  });
  function hst_checkbox_value_binding(value) {
    disabled = value;
    $$invalidate(1, disabled);
  }
  function hst_select_value_binding(value) {
    type = value;
    $$invalidate(4, type);
  }
  function hst_text0_value_binding(value) {
    text2 = value;
    $$invalidate(3, text2);
  }
  function hst_text1_value_binding(value) {
    icon = value;
    $$invalidate(2, icon);
  }
  const click_handler = (event) => logEvent("click", event);
  const click_handler_1 = (event) => logEvent("click", event);
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    logEvent,
    button: d,
    buttonIcon: c,
    Hst,
    disabled,
    icon,
    text: text2,
    type
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("disabled" in $$props2)
      $$invalidate(1, disabled = $$props2.disabled);
    if ("icon" in $$props2)
      $$invalidate(2, icon = $$props2.icon);
    if ("text" in $$props2)
      $$invalidate(3, text2 = $$props2.text);
    if ("type" in $$props2)
      $$invalidate(4, type = $$props2.type);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    disabled,
    icon,
    text2,
    type,
    hst_checkbox_value_binding,
    hst_select_value_binding,
    hst_text0_value_binding,
    hst_text1_value_binding,
    click_handler,
    click_handler_1
  ];
}
let Vanilla_story$1 = class Vanilla_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Vanilla_story",
      options,
      id: create_fragment$1.name
    });
  }
  get Hst() {
    throw new Error("<Vanilla_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Vanilla_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var i = "_1ni2kxm1", a = "_1ni2kxm2", e = "_1ni2kxm0", n = "_1ni2kxm3", m = "_1ni2kxm4";
const vanilla = "";
const file = "src/components/tab/vanilla.story.svelte";
function get_each_context(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i2];
  return child_ctx;
}
function get_each_context_1(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i2];
  return child_ctx;
}
function create_each_block_1(ctx) {
  let button;
  let span;
  let t0_value = (
    /*item*/
    ctx[5].title + ""
  );
  let t0;
  let t1;
  let button_id_value;
  let button_aria_selected_value;
  let button_aria_controls_value;
  let button_class_value;
  let mounted;
  let dispose;
  function click_handler(...args) {
    return (
      /*click_handler*/
      ctx[4](
        /*item*/
        ctx[5],
        ...args
      )
    );
  }
  const block = {
    c: function create() {
      button = element("button");
      span = element("span");
      t0 = text(t0_value);
      t1 = space();
      add_location(span, file, 45, 10, 1083);
      attr_dev(button, "id", button_id_value = /*item*/
      ctx[5].id);
      attr_dev(button, "type", "button");
      attr_dev(button, "role", "tab");
      attr_dev(button, "aria-selected", button_aria_selected_value = /*activeItemId*/
      ctx[2] === /*item*/
      ctx[5].id);
      attr_dev(button, "aria-controls", button_aria_controls_value = `${/*item*/
      ctx[5].id}-panel`);
      attr_dev(button, "class", button_class_value = /*activeItemId*/
      ctx[2] === /*item*/
      ctx[5].id ? [i, a].join(" ") : i);
      add_location(button, file, 41, 8, 780);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, span);
      append_dev(span, t0);
      append_dev(button, t1);
      if (!mounted) {
        dispose = listen_dev(button, "click", click_handler, false, false, false, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*items*/
      2 && t0_value !== (t0_value = /*item*/
      ctx[5].title + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*items*/
      2 && button_id_value !== (button_id_value = /*item*/
      ctx[5].id)) {
        attr_dev(button, "id", button_id_value);
      }
      if (dirty & /*activeItemId, items*/
      6 && button_aria_selected_value !== (button_aria_selected_value = /*activeItemId*/
      ctx[2] === /*item*/
      ctx[5].id)) {
        attr_dev(button, "aria-selected", button_aria_selected_value);
      }
      if (dirty & /*items*/
      2 && button_aria_controls_value !== (button_aria_controls_value = `${/*item*/
      ctx[5].id}-panel`)) {
        attr_dev(button, "aria-controls", button_aria_controls_value);
      }
      if (dirty & /*activeItemId, items*/
      6 && button_class_value !== (button_class_value = /*activeItemId*/
      ctx[2] === /*item*/
      ctx[5].id ? [i, a].join(" ") : i)) {
        attr_dev(button, "class", button_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(button);
      }
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(33:6) {#each items as item}",
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  let div;
  let p2;
  let t0_value = (
    /*item*/
    ctx[5].content + ""
  );
  let t0;
  let t1;
  let div_id_value;
  let div_aria_labelledby_value;
  let div_class_value;
  const block = {
    c: function create() {
      div = element("div");
      p2 = element("p");
      t0 = text(t0_value);
      t1 = space();
      add_location(p2, file, 51, 8, 1325);
      attr_dev(div, "id", div_id_value = `${/*item*/
      ctx[5].id}-panel`);
      attr_dev(div, "role", "tabpanel");
      attr_dev(div, "aria-labelledby", div_aria_labelledby_value = /*item*/
      ctx[5].id);
      attr_dev(div, "class", div_class_value = /*activeItemId*/
      ctx[2] === /*item*/
      ctx[5].id ? n : m);
      add_location(div, file, 50, 6, 1184);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, p2);
      append_dev(p2, t0);
      append_dev(div, t1);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*items*/
      2 && t0_value !== (t0_value = /*item*/
      ctx2[5].content + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*items*/
      2 && div_id_value !== (div_id_value = `${/*item*/
      ctx2[5].id}-panel`)) {
        attr_dev(div, "id", div_id_value);
      }
      if (dirty & /*items*/
      2 && div_aria_labelledby_value !== (div_aria_labelledby_value = /*item*/
      ctx2[5].id)) {
        attr_dev(div, "aria-labelledby", div_aria_labelledby_value);
      }
      if (dirty & /*activeItemId, items*/
      6 && div_class_value !== (div_class_value = /*activeItemId*/
      ctx2[2] === /*item*/
      ctx2[5].id ? n : m)) {
        attr_dev(div, "class", div_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(42:4) {#each items as item}",
    ctx
  });
  return block;
}
function create_default_slot_1(ctx) {
  let div;
  let t;
  let each1_anchor;
  let each_value_1 = ensure_array_like_dev(
    /*items*/
    ctx[1]
  );
  let each_blocks_1 = [];
  for (let i2 = 0; i2 < each_value_1.length; i2 += 1) {
    each_blocks_1[i2] = create_each_block_1(get_each_context_1(ctx, each_value_1, i2));
  }
  let each_value = ensure_array_like_dev(
    /*items*/
    ctx[1]
  );
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block(get_each_context(ctx, each_value, i2));
  }
  const block = {
    c: function create() {
      div = element("div");
      for (let i2 = 0; i2 < each_blocks_1.length; i2 += 1) {
        each_blocks_1[i2].c();
      }
      t = space();
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      each1_anchor = empty();
      attr_dev(div, "role", "tablist");
      attr_dev(div, "aria-labelledby", "tablist-1");
      attr_dev(div, "class", e);
      add_location(div, file, 39, 4, 679);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      for (let i2 = 0; i2 < each_blocks_1.length; i2 += 1) {
        if (each_blocks_1[i2]) {
          each_blocks_1[i2].m(div, null);
        }
      }
      insert_dev(target, t, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        if (each_blocks[i2]) {
          each_blocks[i2].m(target, anchor);
        }
      }
      insert_dev(target, each1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*items, activeItemId*/
      6) {
        each_value_1 = ensure_array_like_dev(
          /*items*/
          ctx2[1]
        );
        let i2;
        for (i2 = 0; i2 < each_value_1.length; i2 += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i2);
          if (each_blocks_1[i2]) {
            each_blocks_1[i2].p(child_ctx, dirty);
          } else {
            each_blocks_1[i2] = create_each_block_1(child_ctx);
            each_blocks_1[i2].c();
            each_blocks_1[i2].m(div, null);
          }
        }
        for (; i2 < each_blocks_1.length; i2 += 1) {
          each_blocks_1[i2].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & /*items, activeItemId*/
      6) {
        each_value = ensure_array_like_dev(
          /*items*/
          ctx2[1]
        );
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
          } else {
            each_blocks[i2] = create_each_block(child_ctx);
            each_blocks[i2].c();
            each_blocks[i2].m(each1_anchor.parentNode, each1_anchor);
          }
        }
        for (; i2 < each_blocks.length; i2 += 1) {
          each_blocks[i2].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
        detach_dev(t);
        detach_dev(each1_anchor);
      }
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: '(31:2) <Hst.Variant title=\\"default\\">',
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let hst_variant;
  let current;
  hst_variant = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "default",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant_changes = {};
      if (dirty & /*$$scope, items, activeItemId*/
      1030) {
        hst_variant_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant.$set(hst_variant_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(30:0) <Hst.Story title=\\"Tab (vanilla-extract)\\">',
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
  let hst_json;
  let updating_value;
  let current;
  function hst_json_value_binding(value) {
    ctx[3](value);
  }
  let hst_json_props = { title: "Items" };
  if (
    /*items*/
    ctx[1] !== void 0
  ) {
    hst_json_props.value = /*items*/
    ctx[1];
  }
  hst_json = new /*Hst*/
  ctx[0].Json({ props: hst_json_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_json, "value", hst_json_value_binding));
  const block = {
    c: function create() {
      create_component(hst_json.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_json, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_json_changes = {};
      if (!updating_value && dirty & /*items*/
      2) {
        updating_value = true;
        hst_json_changes.value = /*items*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_json.$set(hst_json_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_json.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_json.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_json, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot.name,
    type: "slot",
    source: '(49:2) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Tab (vanilla-extract)",
      $$slots: {
        controls: [create_controls_slot],
        default: [create_default_slot]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, items, activeItemId*/
      1030) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Vanilla_story", slots, []);
  let { Hst } = $$props;
  let items = [
    {
      id: "tab-1",
      title: "Tab 1",
      content: "Tab 1 Content"
    },
    {
      id: "tab-2",
      title: "Tab 2",
      content: "Tab 2 Content"
    },
    {
      id: "tab-3",
      title: "Tab 3",
      content: "Tab 3 Content"
    },
    {
      id: "tab-4",
      title: "Tab 4",
      content: "Tab 4 Content"
    }
  ];
  let activeItemId = items[0].id;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Vanilla_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Vanilla_story> was created with unknown prop '${key}'`);
  });
  function hst_json_value_binding(value) {
    items = value;
    $$invalidate(1, items);
  }
  const click_handler = (item, event) => {
    logEvent("click", event);
    $$invalidate(2, activeItemId = item.id);
  };
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    logEvent,
    tablist: e,
    tab: i,
    tabActive: a,
    tabpanel: n,
    tabpanelHidden: m,
    Hst,
    items,
    activeItemId
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("items" in $$props2)
      $$invalidate(1, items = $$props2.items);
    if ("activeItemId" in $$props2)
      $$invalidate(2, activeItemId = $$props2.activeItemId);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, items, activeItemId, hst_json_value_binding, click_handler];
}
class Vanilla_story2 extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Vanilla_story",
      options,
      id: create_fragment.name
    });
  }
  get Hst() {
    throw new Error("<Vanilla_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Vanilla_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
let files = [
  { "id": "src-typography-blockquote-story-svelte", "path": ["Typography", "Blockquote"], "filePath": "src/typography/blockquote.story.svelte", "story": { "id": "src-typography-blockquote-story-svelte", "title": "Blockquote", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-typography-blockquote-story-svelte-0", "title": "default", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte4", "index": 0, component: Blockquote_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-typography-blockquote-story-svelte-fcc8c8b1.js"), true ? [] : void 0) },
  { "id": "src-typography-heading-story-svelte", "path": ["Typography", "Heading"], "filePath": "src/typography/heading.story.svelte", "story": { "id": "src-typography-heading-story-svelte", "title": "Heading", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-typography-heading-story-svelte-0", "title": "default", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte4", "index": 1, component: Heading_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-typography-heading-story-svelte-5f008172.js"), true ? [] : void 0) },
  { "id": "src-typography-link-story-svelte", "path": ["Typography", "Link"], "filePath": "src/typography/link.story.svelte", "story": { "id": "src-typography-link-story-svelte", "title": "Link", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-typography-link-story-svelte-0", "title": "default", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte4", "index": 2, component: Link_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-typography-link-story-svelte-2d598db2.js"), true ? [] : void 0) },
  { "id": "src-components-button-global-story-svelte", "path": ["Components", "Button", "Button (global)"], "filePath": "src/components/button/global.story.svelte", "story": { "id": "src-components-button-global-story-svelte", "title": "Button (global)", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-components-button-global-story-svelte-0", "title": "default", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte4", "index": 3, component: Global_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-button-global-story-svelte-dff68e09.js"), true ? [] : void 0) },
  { "id": "src-components-button-vanilla-story-svelte", "path": ["Components", "Button", "Button (vanilla-extract)"], "filePath": "src/components/button/vanilla.story.svelte", "story": { "id": "src-components-button-vanilla-story-svelte", "title": "Button (vanilla-extract)", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-components-button-vanilla-story-svelte-0", "title": "default", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte4", "index": 4, component: Vanilla_story$1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-button-vanilla-story-svelte-2d40db21.js"), true ? [] : void 0) },
  { "id": "src-components-tab-vanilla-story-svelte", "path": ["Components", "Tab", "Tab (vanilla-extract)"], "filePath": "src/components/tab/vanilla.story.svelte", "story": { "id": "src-components-tab-vanilla-story-svelte", "title": "Tab (vanilla-extract)", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-components-tab-vanilla-story-svelte-0", "title": "default", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte4", "index": 5, component: Vanilla_story2, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-tab-vanilla-story-svelte-4bbe8c5c.js"), true ? [] : void 0) }
];
let tree = [{ "title": "Components", "children": [{ "title": "Button", "children": [{ "title": "Button (global)", "index": 3 }, { "title": "Button (vanilla-extract)", "index": 4 }] }, { "title": "Tab", "children": [{ "title": "Tab (vanilla-extract)", "index": 5 }] }] }, { "title": "Typography", "children": [{ "title": "Blockquote", "index": 0 }, { "title": "Heading", "index": 1 }, { "title": "Link", "index": 2 }] }];
const base = "/ve/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-7c473c07.js"), true ? ["assets/HomeView.vue-7c473c07.js","assets/vendor-9550a5b3.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-fbcc4fd6.js"), true ? ["assets/StoryView.vue-fbcc4fd6.js","assets/vendor-9550a5b3.js","assets/story-cad76347.js","assets/MobileOverlay.vue2-15eead46.js","assets/BaseEmpty.vue-dbcb9b4d.js","assets/state-2c566a34.js","assets/events-79a3ec13.js"] : void 0)
    }
  ]
});
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file2, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file2) {
      if (key === "story") {
        result.story = {
          ...result.story,
          ...file2.story,
          file: markRaw(result),
          variants: file2.story.variants.map((v2) => mapVariant(v2, existingFile.story.variants.find((item) => item.id === v2.id)))
        };
      } else if (key !== "component") {
        result[key] = file2[key];
      }
    }
  } else {
    result = {
      ...file2,
      component: markRaw(file2.component),
      story: {
        ...file2.story,
        title: file2.story.title,
        file: markRaw(file2),
        variants: file2.story.variants.map((v2) => mapVariant(v2)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-9550a5b3.js").then((n2) => n2.b4), true ? [] : void 0),
  "svelte4": () => __vitePreload(() => import("./vendor-9550a5b3.js").then((n2) => n2.b5), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: {}
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as _,
  base as b,
  clientSupportPlugins as c,
  files as f,
  mapFile as m,
  router as r,
  tree as t
};
