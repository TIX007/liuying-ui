import { defineComponent, toRefs, createVNode } from "vue";
const buttonProps = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "medium"
  },
  block: {
    type: Boolean,
    default: false
  }
};
var Button = defineComponent({
  name: "QiButton",
  props: buttonProps,
  setup(props, {
    slots
  }) {
    const {
      type,
      size,
      block
    } = toRefs(props);
    return () => {
      const defaultSlot = slots.default ? slots.default() : "\u6309\u94AE";
      const blockClass = block.value ? "qi-btn--block" : "";
      return createVNode("button", {
        "class": `qi-btn qi-btn--${type.value} qi-btn--${size.value} ${blockClass}`
      }, [defaultSlot]);
    };
  }
});
var ButtonPlugin = {
  install(app) {
    app.component(Button.name, Button);
  }
};
const installs = [ButtonPlugin];
var entry = {
  version: "0.0.1",
  install(app) {
    installs.forEach((p) => app.use(p));
  }
};
export { Button, entry as default };
