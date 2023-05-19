import { defineComponent as m, openBlock as n, createElementBlock as d, toDisplayString as o, unref as a } from "vue";
import { isNumber as i } from "./spreadsheets-vue.js";
const b = ["contenteditable"], y = ["contenteditable"], V = ["value", "disabled"], f = ["value", "disabled"], k = ["checked", "disabled"], r = { key: 5 }, v = /* @__PURE__ */ m({
  __name: "SpreadsheetCell",
  props: {
    editable: { type: Boolean },
    mode: null,
    modelValue: { type: [String, Number, Boolean] },
    type: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (u, t) => (e.type || typeof e.modelValue) === "string" && e.mode === "normal" ? (n(), d("span", {
      key: 0,
      onInput: t[0] || (t[0] = (l) => u.$emit("update:modelValue", l.target.innerText)),
      contenteditable: e.editable
    }, o(e.modelValue), 41, b)) : (e.type || typeof e.modelValue) === "number" && e.mode === "normal" ? (n(), d("span", {
      key: 1,
      onInput: t[1] || (t[1] = (l) => u.$emit("update:modelValue", Number(l.target.innerText))),
      onBeforeinput: t[2] || (t[2] = (l) => a(i)(l)),
      contenteditable: e.editable
    }, o(e.modelValue), 41, y)) : (e.type || typeof e.modelValue) === "string" && e.mode === "input" ? (n(), d("input", {
      key: 2,
      value: e.modelValue,
      onInput: t[3] || (t[3] = (l) => u.$emit("update:modelValue", l.target.value)),
      disabled: !e.editable,
      type: "text"
    }, null, 40, V)) : (e.type || typeof e.modelValue) === "number" && e.mode === "input" ? (n(), d("input", {
      key: 3,
      value: e.modelValue,
      onInput: t[4] || (t[4] = (l) => u.$emit("update:modelValue", Number(l.target.value))),
      onBeforeinput: t[5] || (t[5] = (l) => a(i)(l)),
      disabled: !e.editable,
      inputmode: "decimal",
      type: "text"
    }, null, 40, f)) : (e.type || typeof e.modelValue) === "boolean" ? (n(), d("input", {
      key: 4,
      checked: e.modelValue,
      onInput: t[6] || (t[6] = (l) => u.$emit("update:modelValue", l.target.checked)),
      type: "checkbox",
      disabled: !e.editable
    }, null, 40, k)) : (n(), d("span", r, "Unsupported type"));
  }
});
export {
  v as _
};
