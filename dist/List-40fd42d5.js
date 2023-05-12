import { defineComponent as h, openBlock as i, createElementBlock as u, toDisplayString as y, unref as b, createCommentVNode as p, createVNode as f, createStaticVNode as S, pushScopeId as I, popScopeId as $, createElementVNode as v, ref as g, watch as N, Fragment as z, renderList as E, createBlock as k, withCtx as R } from "vue";
import { isNumber as V } from "./spreadsheets-vue.js";
import j from "vuedraggable";
const D = ["contenteditable"], F = ["contenteditable"], T = ["value", "disabled"], U = ["value", "disabled"], A = ["checked"], x = /* @__PURE__ */ h({
  __name: "SpreadsheetCell",
  props: {
    editable: { type: Boolean },
    mode: null,
    modelValue: { type: [String, Number, Boolean] },
    type: null
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (d, t) => (e.type || typeof e.modelValue) === "string" && e.mode === "normal" ? (i(), u("span", {
      key: 0,
      onInput: t[0] || (t[0] = (l) => d.$emit("update:modelValue", l.target.innerText)),
      contenteditable: e.editable
    }, y(e.modelValue), 41, D)) : (e.type || typeof e.modelValue) === "number" && e.mode === "normal" ? (i(), u("span", {
      key: 1,
      onInput: t[1] || (t[1] = (l) => d.$emit("update:modelValue", Number(l.target.innerText))),
      onBeforeinput: t[2] || (t[2] = (l) => b(V)(l)),
      contenteditable: e.editable
    }, y(e.modelValue), 41, F)) : (e.type || typeof e.modelValue) === "string" && e.mode === "input" ? (i(), u("input", {
      key: 2,
      value: e.modelValue,
      onInput: t[3] || (t[3] = (l) => d.$emit("update:modelValue", l.target.value)),
      disabled: !e.editable,
      type: "text"
    }, null, 40, T)) : (e.type || typeof e.modelValue) === "number" && e.mode === "input" ? (i(), u("input", {
      key: 3,
      value: e.modelValue,
      onInput: t[4] || (t[4] = (l) => d.$emit("update:modelValue", Number(l.target.value))),
      onBeforeinput: t[5] || (t[5] = (l) => b(V)(l)),
      disabled: !e.editable,
      inputmode: "decimal",
      type: "text"
    }, null, 40, U)) : (e.type || typeof e.modelValue) === "boolean" ? (i(), u("input", {
      key: 4,
      checked: e.modelValue,
      onInput: t[6] || (t[6] = (l) => d.$emit("update:modelValue", l.target.checked)),
      type: "checkbox"
    }, null, 40, A)) : p("", !0);
  }
}), H = (e) => (I("data-v-5df4679e"), e = e(), $(), e), O = { class: "list-item" }, P = /* @__PURE__ */ S('<div class="sorting-handle" data-v-5df4679e><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-DragVerticalFill" data-v-5df4679e><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" data-v-5df4679e></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" data-v-5df4679e></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" data-v-5df4679e></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" data-v-5df4679e></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" data-v-5df4679e></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" data-v-5df4679e></path></svg></div>', 1), q = /* @__PURE__ */ H(() => /* @__PURE__ */ v("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "ai ai-Cross"
}, [
  /* @__PURE__ */ v("path", { d: "M20 20L4 4m16 0L4 20" })
], -1)), G = [
  q
], J = /* @__PURE__ */ h({
  __name: "ListItem",
  props: {
    item: null,
    editable: { type: Boolean },
    sortable: { type: Boolean },
    removable: { type: Boolean },
    mode: null
  },
  emits: ["remove", "edit"],
  setup(e, { emit: d }) {
    return (t, l) => (i(), u("div", O, [
      P,
      f(x, {
        editable: e.editable,
        mode: e.mode,
        "model-value": e.item.value,
        "onUpdate:modelValue": l[0] || (l[0] = (m) => t.$emit("edit", { id: e.item.id, value: m })),
        class: "spreadsheet-cell"
      }, null, 8, ["editable", "mode", "model-value"]),
      e.removable ? (i(), u("button", {
        key: 0,
        class: "remove-button",
        onClick: l[1] || (l[1] = (m) => t.$emit("remove", e.item))
      }, G)) : p("", !0)
    ]));
  }
});
const B = (e, d) => {
  const t = e.__vccOpts || e;
  for (const [l, m] of d)
    t[l] = m;
  return t;
}, w = /* @__PURE__ */ B(J, [["__scopeId", "data-v-5df4679e"]]), K = (e) => (I("data-v-07030a0f"), e = e(), $(), e), Q = { class: "list" }, W = {
  key: 0,
  class: "list-items"
}, X = {
  key: 2,
  class: "list-add"
}, Y = /* @__PURE__ */ K(() => /* @__PURE__ */ v("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "ai ai-Plus"
}, [
  /* @__PURE__ */ v("path", { d: "M12 20v-8m0 0V4m0 8h8m-8 0H4" })
], -1)), Z = [
  Y
], _ = /* @__PURE__ */ h({
  __name: "List",
  props: {
    editable: { type: Boolean, default: !1 },
    sortable: { type: Boolean, default: !1 },
    removable: { type: Boolean, default: !1 },
    addable: { type: Boolean, default: !1 },
    list: null,
    type: null
  },
  emits: ["add", "remove", "edit", "sort"],
  setup(e, { emit: d }) {
    const t = e, l = (a) => {
      const n = o.value.findIndex((s) => s.id === a.id);
      o.value[n].value = a.value, t.list[n] = a.value, d("edit", a.value, n);
    }, m = (a) => {
      const n = o.value.findIndex((s) => s.id === a.id);
      o.value.splice(n, 1), t.list.splice(n, 1), d("remove", a.value);
    }, C = (a) => {
      a.moved && (t.list.splice(a.moved.oldIndex, 1), t.list.splice(a.moved.newIndex, 0, a.moved.element.value), d("sort", t.list));
    }, L = () => {
      o.value.push({ id: o.value.reduce((a, n) => Math.max(n.id, a), 0) + 1, value: r.value }), t.list.push(r.value), d("add", r.value), r.value = "";
    }, c = () => t.list.map((a, n) => ({
      id: n,
      value: a
    })), o = g(c()), r = g("");
    return N(() => t.list, () => {
      if (o.value.length === t.list.length) {
        for (let a = 0; a < o.value.length; a++)
          if (o.value[a].value !== t.list[a]) {
            o.value = c();
            break;
          }
      } else
        o.value = c();
    }), (a, n) => (i(), u("div", Q, [
      e.sortable ? (i(), k(b(j), {
        key: 1,
        list: o.value,
        "item-key": "id",
        handle: ".sorting-handle",
        class: "list-items",
        onChange: C
      }, {
        item: R(({ element: s }) => [
          f(w, {
            item: s,
            editable: e.editable,
            sortable: e.sortable,
            removable: e.removable,
            mode: "normal",
            onEdit: l,
            onRemove: m
          }, null, 8, ["item", "editable", "sortable", "removable"])
        ]),
        _: 1
      }, 8, ["list"])) : (i(), u("div", W, [
        (i(!0), u(z, null, E(o.value, (s, M) => (i(), k(w, {
          key: M,
          item: s,
          editable: e.editable,
          sortable: e.sortable,
          removable: e.removable,
          mode: "normal",
          onEdit: l,
          onRemove: m
        }, null, 8, ["item", "editable", "sortable", "removable"]))), 128))
      ])),
      e.addable ? (i(), u("div", X, [
        f(x, {
          modelValue: r.value,
          "onUpdate:modelValue": n[0] || (n[0] = (s) => r.value = s),
          editable: !0,
          mode: "input",
          type: e.type,
          class: "add-input"
        }, null, 8, ["modelValue", "type"]),
        v("button", {
          class: "add-button",
          onClick: L
        }, Z)
      ])) : p("", !0)
    ]));
  }
});
const ae = /* @__PURE__ */ B(_, [["__scopeId", "data-v-07030a0f"]]);
export {
  ae as default
};
