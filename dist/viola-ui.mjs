import { defineComponent, createVNode, openBlock, createElementBlock, createTextVNode } from "vue";
const __uno = "";
const buttonColor = (type) => {
  switch (type) {
    case "default":
      return "white";
    case "primary":
      return "blue";
    case "success":
      return "green";
    case "warning":
      return "yellow";
    case "info":
      return "gray";
    case "danger":
      return "red";
  }
};
const buttonBgColor = (type, plain) => {
  if (type == "default") {
    if (plain)
      return buttonColor(type);
    else
      return "blue-100";
  } else {
    if (plain)
      return buttonColor(type) + "-500";
    else
      return buttonColor(type) + "-400";
  }
};
const buttonBorder = (type) => {
  if (type == "default")
    return "#DCDFE6";
  else
    return buttonColor(type) + "-300";
};
const buttonHoverBorder = (type, plain) => {
  if (type == "default") {
    if (plain)
      return "blue-500";
    else
      return "blue-300";
  }
  return buttonColor(type) + "-300";
};
const props = {
  type: {
    type: String,
    default: "default"
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
const Button = defineComponent({
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
            py-${props2.circle ? "2" : size[props2.size].y}
            px-${props2.circle ? "2" : size[props2.size].x}
            font-500
            rounded-${props2.round ? "4" : "1"}
            rounded-${props2.circle ? "50%" : "0"}
            text-${props2.type == "default" ? "#606266" : props2.plain ? buttonColor(props2.type) + "-500" : "white"}
            hover:text-${props2.type == "default" ? "blue-400" : "white"}
            bg-${buttonColor(props2.type)}${props2.type == "default" ? "" : props2.plain ? "-100" : "-500"}
            hover:bg-${buttonBgColor(props2.type, props2.plain)}
            border-1
            border-${buttonBorder(props2.type)}
            hover:border-${buttonHoverBorder(props2.type, props2.plain)}
            cursor-pointer
            text-${size[props2.size].text}
            m-1
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
    app.component(Button.name, Button);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  JSXButton,
  SFCButton,
  Button as ViButton,
  entry as default
};
//# sourceMappingURL=viola-ui.mjs.map
