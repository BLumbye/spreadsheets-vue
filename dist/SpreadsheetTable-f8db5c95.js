import { defineComponent as B, openBlock as l, createElementBlock as o, createCommentVNode as m, Fragment as v, renderList as f, createVNode as V, createElementVNode as i, createStaticVNode as I, ref as k, watch as j, toDisplayString as z, createBlock as p, unref as E, withCtx as T } from "vue";
import { _ as $ } from "./SpreadsheetCell.vue_vue_type_script_setup_true_lang-7a5bd785.js";
import N from "vuedraggable";
import "./spreadsheets-vue.js";
const O = { class: "table-row" }, R = {
  key: 0,
  class: "sorting-handle"
}, S = /* @__PURE__ */ I('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-DragVerticalFill"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path></svg>', 1), U = [
  S
], L = /* @__PURE__ */ i("svg", {
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
  /* @__PURE__ */ i("path", { d: "M20 20L4 4m16 0L4 20" })
], -1), A = [
  L
], x = /* @__PURE__ */ B({
  __name: "TableRow",
  props: {
    row: null,
    headers: null,
    editable: { type: Boolean },
    sortable: { type: Boolean },
    removable: { type: Boolean },
    mode: null
  },
  emits: ["remove", "edit"],
  setup(e, { emit: h }) {
    return (a, b) => (l(), o("tr", O, [
      e.sortable ? (l(), o("td", R, U)) : m("", !0),
      (l(!0), o(v, null, f(Object.keys(e.headers), (c) => (l(), o("td", null, [
        V($, {
          editable: e.editable,
          mode: e.mode,
          "model-value": e.row.value[c],
          "onUpdate:modelValue": (w) => a.$emit("edit", e.row, c, w),
          class: "spreadsheet-cell"
        }, null, 8, ["editable", "mode", "model-value", "onUpdate:modelValue"])
      ]))), 256)),
      i("td", null, [
        e.removable ? (l(), o("button", {
          key: 0,
          class: "remove-button",
          onClick: b[0] || (b[0] = (c) => a.$emit("remove", e.row))
        }, A)) : m("", !0)
      ])
    ]));
  }
}), D = { class: "spreadsheet-table" }, F = { key: 0 }, H = { key: 1 }, P = {
  key: 0,
  class: "table-body"
}, q = {
  key: 2,
  class: "table-add"
}, G = { key: 0 }, J = /* @__PURE__ */ i("svg", {
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
  /* @__PURE__ */ i("path", { d: "M12 20v-8m0 0V4m0 8h8m-8 0H4" })
], -1), K = [
  J
], Z = /* @__PURE__ */ B({
  __name: "SpreadsheetTable",
  props: {
    editable: { type: Boolean, default: !1 },
    sortable: { type: Boolean, default: !1 },
    removable: { type: Boolean, default: !1 },
    addable: { type: Boolean, default: !1 },
    table: null,
    headers: null,
    types: null
  },
  emits: ["add", "remove", "edit", "sort"],
  setup(e, { emit: h }) {
    const a = e, b = (t, d, n) => {
      const s = r.value.findIndex((M) => M.id === t.id);
      r.value[s].value[d] = n, a.table[s][d] = n, h("edit", r.value[s].value, s, d, n);
    }, c = (t) => {
      const d = r.value.findIndex((n) => n.id === t.id);
      r.value.splice(d, 1), a.table.splice(d, 1), h("remove", t.value);
    }, w = (t) => {
      t.moved && (a.table.splice(t.moved.oldIndex, 1), a.table.splice(t.moved.newIndex, 0, t.moved.element.value), h("sort", a.table));
    }, C = () => {
      r.value.push({ id: r.value.reduce((t, d) => Math.max(d.id, t), 0) + 1, value: u.value }), a.table.push(u.value), h("add", u.value), u.value = g();
    }, y = () => a.table.map((t, d) => ({
      id: d,
      value: t
    })), g = () => Object.keys(a.types).reduce((t, d) => (t[d] = a.types[d] === "number" ? 0 : a.types[d] === "boolean" ? !1 : "", t), {}), r = k(y()), u = k(g());
    return j(() => a.table, () => {
      if (r.value.length === a.table.length) {
        for (let t = 0; t < r.value.length; t++)
          if (r.value[t].value !== a.table[t]) {
            r.value = y();
            break;
          }
      } else
        r.value = y();
    }), (t, d) => (l(), o("table", D, [
      i("thead", null, [
        i("tr", null, [
          e.sortable ? (l(), o("th", F)) : m("", !0),
          (l(!0), o(v, null, f(Object.values(e.headers), (n, s) => (l(), o("th", {
            key: s,
            class: "spreadsheet-table-header"
          }, z(n), 1))), 128)),
          e.removable || e.addable ? (l(), o("th", H)) : m("", !0)
        ])
      ]),
      e.sortable ? (l(), p(E(N), {
        key: 1,
        list: r.value,
        "item-key": "id",
        handle: ".sorting-handle",
        class: "list-items",
        tag: "tbody",
        onChange: w
      }, {
        item: T(({ element: n, index: s }) => [
          (l(), p(x, {
            key: s,
            row: n,
            headers: e.headers,
            editable: e.editable,
            sortable: e.sortable,
            removable: e.removable,
            mode: "normal",
            onEdit: b,
            onRemove: c
          }, null, 8, ["row", "headers", "editable", "sortable", "removable"]))
        ]),
        _: 1
      }, 8, ["list"])) : (l(), o("tbody", P, [
        (l(!0), o(v, null, f(r.value, (n, s) => (l(), p(x, {
          key: s,
          row: n,
          headers: e.headers,
          editable: e.editable,
          sortable: e.sortable,
          removable: e.removable,
          mode: "normal",
          onEdit: b,
          onRemove: c
        }, null, 8, ["row", "headers", "editable", "sortable", "removable"]))), 128))
      ])),
      e.addable ? (l(), o("tfoot", q, [
        e.sortable ? (l(), o("td", G)) : m("", !0),
        (l(!0), o(v, null, f(Object.keys(u.value), (n) => (l(), o("td", null, [
          V($, {
            modelValue: u.value[n],
            "onUpdate:modelValue": (s) => u.value[n] = s,
            editable: !0,
            mode: "input",
            type: e.types[n],
            class: "add-input"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "type"])
        ]))), 256)),
        i("td", null, [
          i("button", {
            class: "add-button",
            onClick: C
          }, K)
        ])
      ])) : m("", !0)
    ]));
  }
});
export {
  Z as default
};
