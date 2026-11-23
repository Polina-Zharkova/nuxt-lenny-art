import { N as useField, o as openBlock, c as createElementBlock, a as createBaseVNode, i as unref, n as normalizeClass, t as toDisplayString, p as createCommentVNode } from "./DZ1Fuh70.js";
const _hoisted_1 = { class: "field" };
const _hoisted_2 = ["value", "checked", "disabled"];
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = {
  key: 0,
  class: "field__error field-error"
};
const _sfc_main = {
  __name: "FieldCheck",
  props: {
    initialValue: {
      default: void 0
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    checkedValue: {
      type: [String, Number],
      default: 1
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    submitCount: {
      type: Number,
      default: 0
    },
    red: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const { checked, errorMessage, handleChange } = useField(
      props.name,
      props.rules,
      {
        checkedValue: props.checkedValue,
        type: "checkbox"
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("label", {
          class: normalizeClass(["check field__check", { "check--red": __props.red, "check--disabled": __props.disabled }])
        }, [
          createBaseVNode("input", {
            type: "checkbox",
            class: "check__input",
            value: __props.checkedValue,
            checked: unref(checked),
            onChange: _cache[0] || (_cache[0] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
            disabled: __props.disabled
          }, null, 40, _hoisted_2),
          _cache[1] || (_cache[1] = createBaseVNode("span", { class: "check__mark" }, null, -1)),
          createBaseVNode("span", {
            class: "check__caption",
            innerHTML: __props.label
          }, null, 8, _hoisted_3)
        ], 2),
        unref(errorMessage) && __props.submitCount ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true)
      ]);
    };
  }
};
export {
  _sfc_main as _
};
//# sourceMappingURL=CcYJM9oc.js.map
