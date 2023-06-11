import { defineComponent, createVNode, openBlock, createElementBlock, createTextVNode } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  size: {
    type: String,
    default: "medium"
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ""
  }
};
const ViButton = defineComponent({
  name: "ViButton",
  props,
  setup(props2, {
    slots
  }) {
    const size = {
      small: {
        x: "3",
        y: "0.5",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1",
        text: "base"
      },
      large: {
        x: "4",
        y: "1.5",
        text: "lg"
      }
    };
    return () => createVNode("button", {
      "class": `
            py-${size[props2.size].y}
            px-${size[props2.size].x}
            font-500
            rounded-${props2.round ? "4" : "1"}
            rounded-${props2.circle ? "50%" : "0"}
            text-${props2.plain ? props2.color + "-500" : "white"}
            hover:text-white
            bg-${props2.color}-${props2.plain ? "100" : "500"}
            hover:bg-${props2.color}-${props2.plain ? "500" : "400"}
            ${props2.plain ? `border-${props2.color}-400` : "border-none"}
            ${props2.plain ? `border-1` : ""}
            cursor-pointer
            text-${size[props2.size].text}
            
            box-border
        `
    }, [props2.icon != "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(ViButton.name, ViButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  JSXButton,
  SFCButton,
  ViButton,
  entry as default
};
