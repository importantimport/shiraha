import { Y as SvelteComponentDev, Z as init, $ as dispatch_dev, a0 as safe_not_equal, a1 as validate_slots, a2 as logEvent, a3 as globals, a4 as binding_callbacks, a5 as bind, a6 as create_component, a7 as mount_component, a8 as transition_in, a9 as transition_out, aa as destroy_component, ab as space, ac as insert_dev, ad as add_flush_callback, ae as detach_dev, af as element, ag as text, ah as add_location, ai as attr_dev, aj as append_dev, ak as listen_dev, al as set_data_dev, am as prop_dev, _ as __vitePreload, an as createRouter, v as histoireConfig, ao as createWebHistory, ap as createWebHashHistory, aq as markRaw, K as reactive, d as defineComponent, r as ref, ar as watchEffect, o as openBlock, q as createBlock, as as mergeProps, at as resolveDynamicComponent, h as createCommentVNode } from "./vendor-403e08e5.js";
function O(r, e) {
  if (typeof r != "object" || r === null)
    return r;
  var a = r[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(r, e || "default");
    if (typeof t != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function c$1(r) {
  var e = O(r, "string");
  return typeof e == "symbol" ? e : String(e);
}
function d$1(r, e, a) {
  return e = c$1(e), e in r ? Object.defineProperty(r, e, { value: a, enumerable: true, configurable: true, writable: true }) : r[e] = a, r;
}
function o(r, e) {
  var a = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function v(r) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e] != null ? arguments[e] : {};
    e % 2 ? o(Object(a), true).forEach(function(t) {
      d$1(r, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return r;
}
function p(r, e) {
  var a = {};
  for (var t in r)
    a[t] = e(r[t], t);
  return a;
}
var y = (r, e, a) => {
  for (var t of Object.keys(r)) {
    var n;
    if (r[t] !== ((n = e[t]) !== null && n !== void 0 ? n : a[t]))
      return false;
  }
  return true;
}, P = (r) => {
  var e = (a) => {
    var t = r.defaultClassName, n = v(v({}, r.defaultVariants), a);
    for (var f in n) {
      var s, i = (s = n[f]) !== null && s !== void 0 ? s : r.defaultVariants[f];
      if (i != null) {
        var u = i;
        typeof u == "boolean" && (u = u === true ? "true" : "false");
        var l = r.variantClassNames[f][u];
        l && (t += " " + l);
      }
    }
    for (var [m, b] of r.compoundVariants)
      y(m, n, r.defaultVariants) && (t += " " + b);
    return t;
  };
  return e.variants = () => Object.keys(r.variantClassNames), e.classNames = { get base() {
    return r.defaultClassName.split(" ")[0];
  }, get variants() {
    return p(r.variantClassNames, (a) => p(a, (t) => t.split(" ")[0]));
  } }, e;
};
var c = P({ defaultClassName: "vgkibh1", variantClassNames: { type: { elevated: "vgkibh2", filled: "vgkibh3", outlined: "vgkibh4", text: "vgkibh5", tonal: "vgkibh6" } }, defaultVariants: { type: "filled" }, compoundVariants: [] }), d = "vgkibh0";
const vanilla = "";
const { Object: Object_1 } = globals;
const file = "src/components/button/vanilla.story.svelte";
function create_if_block(ctx) {
  let span;
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(
        /*icon*/
        ctx[2]
      );
      attr_dev(span, "class", [d, "material-symbols-outlined"].join(" "));
      add_location(span, file, 25, 8, 540);
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
    id: create_if_block.name,
    type: "if",
    source: "(21:6) {#if icon}",
    ctx
  });
  return block;
}
function create_default_slot_1(ctx) {
  let button_1;
  let t0;
  let span;
  let t1;
  let button_1_class_value;
  let mounted;
  let dispose;
  let if_block = (
    /*icon*/
    ctx[2] && create_if_block(ctx)
  );
  const block = {
    c: function create() {
      button_1 = element("button");
      if (if_block)
        if_block.c();
      t0 = space();
      span = element("span");
      t1 = text(
        /*text*/
        ctx[3]
      );
      add_location(span, file, 29, 6, 658);
      attr_dev(button_1, "class", button_1_class_value = c({ type: (
        /*type*/
        ctx[4]
      ) }));
      button_1.disabled = /*disabled*/
      ctx[1];
      add_location(button_1, file, 19, 4, 400);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button_1, anchor);
      if (if_block)
        if_block.m(button_1, null);
      append_dev(button_1, t0);
      append_dev(button_1, span);
      append_dev(span, t1);
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
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(button_1, t0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & /*text*/
      8)
        set_data_dev(
          t1,
          /*text*/
          ctx2[3]
        );
      if (dirty & /*type*/
      16 && button_1_class_value !== (button_1_class_value = c({ type: (
        /*type*/
        ctx2[4]
      ) }))) {
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
        detach_dev(button_1);
      }
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: '(15:2) <Hst.Variant title=\\"default\\">',
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
      if (dirty & /*$$scope, type, disabled, text, icon*/
      1054) {
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
    source: '(14:0) <Hst.Story title=\\"Button (vanilla-extract)\\">',
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
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
    options: Object.keys(c.classNames.variants.type),
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
    id: create_controls_slot.name,
    type: "slot",
    source: '(30:2) <svelte:fragment slot=\\"controls\\">',
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
      title: "Button (vanilla-extract)",
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
      if (dirty & /*$$scope, icon, text, type, disabled*/
      1054) {
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
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    logEvent,
    button: c,
    buttonIcon: d,
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
    click_handler
  ];
}
class Vanilla_story extends SvelteComponentDev {
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
let files = [{ "id": "src-components-button-vanilla-story-svelte", "path": ["Components", "Button", "Button (vanilla-extract)"], "filePath": "src/components/button/vanilla.story.svelte", "story": { "id": "src-components-button-vanilla-story-svelte", "title": "Button (vanilla-extract)", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-components-button-vanilla-story-svelte-0", "title": "default", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte4", "index": 0, component: Vanilla_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-button-vanilla-story-svelte-2310b603.js"), true ? [] : void 0) }];
let tree = [{ "title": "Components", "children": [{ "title": "Button", "children": [{ "title": "Button (vanilla-extract)", "index": 0 }] }] }];
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
      component: () => __vitePreload(() => import("./HomeView.vue-8e58e812.js"), true ? ["assets/HomeView.vue-8e58e812.js","assets/vendor-403e08e5.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-bb8a0b9b.js"), true ? ["assets/StoryView.vue-bb8a0b9b.js","assets/vendor-403e08e5.js","assets/story-f16e30fc.js","assets/MobileOverlay.vue2-762dba37.js","assets/BaseEmpty.vue-b136c604.js","assets/state-93b61a31.js","assets/events-1abb9d5c.js"] : void 0)
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
  "vanilla": () => __vitePreload(() => import("./vendor-403e08e5.js").then((n) => n.aZ), true ? [] : void 0),
  "svelte4": () => __vitePreload(() => import("./vendor-403e08e5.js").then((n) => n.a_), true ? [] : void 0)
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
