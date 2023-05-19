import { defineComponent as g, openBlock as i, createElementBlock as u, createCommentVNode as h, createVNode as b, createStaticVNode as $, pushScopeId as w, popScopeId as k, createElementVNode as c, ref as p, watch as C, Fragment as V, renderList as M, createBlock as f, unref as S, withCtx as z } from "vue";
import { _ as y } from "./SpreadsheetCell.vue_vue_type_script_setup_true_lang-06ced31d.js";
import E from "vuedraggable";
import "./spreadsheets-vue.js";
const N = (e) => (w("data-v-f2bd7273"), e = e(), k(), e), R = { class: "list-item" }, j = {
  key: 0,
  class: "sorting-handle"
}, F = /* @__PURE__ */ $('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-DragVerticalFill" data-v-f2bd7273><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" data-v-f2bd7273></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" data-v-f2bd7273></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" data-v-f2bd7273></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" data-v-f2bd7273></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" data-v-f2bd7273></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" data-v-f2bd7273></path></svg>', 1), U = [
  F
], A = /* @__PURE__ */ N(() => /* @__PURE__ */ c("svg", {
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
  /* @__PURE__ */ c("path", { d: "M20 20L4 4m16 0L4 20" })
], -1)), D = [
  A
], H = /* @__PURE__ */ g({
  __name: "ListItem",
  props: {
    item: null,
    editable: { type: Boolean },
    sortable: { type: Boolean },
    removable: { type: Boolean },
    mode: null
  },
  emits: ["remove", "edit"],
  setup(e, { emit: n }) {
    return (l, d) => (i(), u("div", R, [
      e.sortable ? (i(), u("div", j, U)) : h("", !0),
      b(y, {
        editable: e.editable,
        mode: e.mode,
        "model-value": e.item.value,
        "onUpdate:modelValue": d[0] || (d[0] = (r) => l.$emit("edit", { id: e.item.id, value: r })),
        class: "spreadsheet-cell"
      }, null, 8, ["editable", "mode", "model-value"]),
      e.removable ? (i(), u("button", {
        key: 1,
        class: "remove-button",
        onClick: d[1] || (d[1] = (r) => l.$emit("remove", e.item))
      }, D)) : h("", !0)
    ]));
  }
});
const x = (e, n) => {
  const l = e.__vccOpts || e;
  for (const [d, r] of n)
    l[d] = r;
  return l;
}, _ = /* @__PURE__ */ x(H, [["__scopeId", "data-v-f2bd7273"]]), O = (e) => (w("data-v-56bececb"), e = e(), k(), e), P = { class: "spreadsheet-list" }, q = {
  key: 0,
  class: "list-items"
}, G = {
  key: 2,
  class: "list-add"
}, J = /* @__PURE__ */ O(() => /* @__PURE__ */ c("svg", {
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
  /* @__PURE__ */ c("path", { d: "M12 20v-8m0 0V4m0 8h8m-8 0H4" })
], -1)), K = [
  J
], Q = /* @__PURE__ */ g({
  __name: "SpreadsheetList",
  props: {
    editable: { type: Boolean, default: !1 },
    sortable: { type: Boolean, default: !1 },
    removable: { type: Boolean, default: !1 },
    addable: { type: Boolean, default: !1 },
    list: null,
    type: null
  },
  emits: ["add", "remove", "edit", "sort"],
  setup(e, { emit: n }) {
    const l = e, d = (t) => {
      const o = a.value.findIndex((s) => s.id === t.id);
      a.value[o].value = t.value, l.list[o] = t.value, n("edit", t.value, o);
    }, r = (t) => {
      const o = a.value.findIndex((s) => s.id === t.id);
      a.value.splice(o, 1), l.list.splice(o, 1), n("remove", t.value);
    }, I = (t) => {
      t.moved && (l.list.splice(t.moved.oldIndex, 1), l.list.splice(t.moved.newIndex, 0, t.moved.element.value), n("sort", l.list));
    }, B = () => {
      a.value.push({ id: a.value.reduce((t, o) => Math.max(o.id, t), 0) + 1, value: v.value }), l.list.push(v.value), n("add", v.value), v.value = "";
    }, m = () => l.list.map((t, o) => ({
      id: o,
      value: t
    })), a = p(m()), v = p("");
    return C(() => l.list, () => {
      if (a.value.length === l.list.length) {
        for (let t = 0; t < a.value.length; t++)
          if (a.value[t].value !== l.list[t]) {
            a.value = m();
            break;
          }
      } else
        a.value = m();
    }), (t, o) => (i(), u("div", P, [
      e.sortable ? (i(), f(S(E), {
        key: 1,
        list: a.value,
        "item-key": "id",
        handle: ".sorting-handle",
        class: "list-items",
        onChange: I
      }, {
        item: z(({ element: s }) => [
          b(_, {
            item: s,
            editable: e.editable,
            sortable: e.sortable,
            removable: e.removable,
            mode: "normal",
            onEdit: d,
            onRemove: r
          }, null, 8, ["item", "editable", "sortable", "removable"])
        ]),
        _: 1
      }, 8, ["list"])) : (i(), u("div", q, [
        (i(!0), u(V, null, M(a.value, (s, L) => (i(), f(_, {
          key: L,
          item: s,
          editable: e.editable,
          sortable: e.sortable,
          removable: e.removable,
          mode: "normal",
          onEdit: d,
          onRemove: r
        }, null, 8, ["item", "editable", "sortable", "removable"]))), 128))
      ])),
      e.addable ? (i(), u("div", G, [
        b(y, {
          modelValue: v.value,
          "onUpdate:modelValue": o[0] || (o[0] = (s) => v.value = s),
          editable: !0,
          mode: "input",
          type: e.type,
          class: "add-input"
        }, null, 8, ["modelValue", "type"]),
        c("button", {
          class: "add-button",
          onClick: B
        }, K)
      ])) : h("", !0)
    ]));
  }
});
const Z = /* @__PURE__ */ x(Q, [["__scopeId", "data-v-56bececb"]]);
export {
  Z as default
};
