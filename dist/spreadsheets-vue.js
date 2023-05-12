import { defineAsyncComponent as c } from "vue";
function o(t, e) {
  return t + e;
}
function d(t, e, r, n, u) {
  return (t - e) / Math.sqrt(Math.pow(r, 2) * (1 / n + 1 / u));
}
function l(t) {
  return t[0].map((e, r) => t.map((n) => n[r]));
}
function g(t, e) {
  return (e != null && e.header ? [e.header, ...t] : t).join((e == null ? void 0 : e.direction) === "horizontal" ? "," : `
`);
}
function i(t, e) {
  if (e != null && e.nested)
    return e.nested;
  for (let r of t)
    if ("items" in r && Array.isArray(r.items) && r.items.length > 0 && typeof r.items[0] == "object")
      return !0;
  return !1;
}
function h(t, e, r) {
  let n = [];
  if (n.push(Object.values(e)), i(t, r))
    for (let u of t)
      for (let s of u.items)
        n.push(
          Object.keys(e).map(
            (f) => f === (r == null ? void 0 : r.groupKey) ? u[r.groupKey] : s[f]
          )
        );
  else
    for (let u of t)
      n.push(Object.keys(e).map((s) => u[s]));
  return (r == null ? void 0 : r.direction) === "horizontal" && (n = l(n)), n.map((u) => u.join(",")).join(`
`);
}
function b(t, e) {
}
const a = (t) => {
  if (t.target.value) {
    const e = t.target;
    return e.value.substring(0, e.selectionStart) + (t.data ?? "") + e.value.substring(e.selectionEnd);
  } else {
    const e = t.target, r = document.getSelection(), n = Math.min(r.anchorOffset, r.focusOffset), u = Math.max(r.anchorOffset, r.focusOffset);
    return e.innerText.substring(0, n) + (t.data ?? "") + e.innerText.substring(u);
  }
}, v = (t) => {
  const e = a(t);
  /^\d*$/.test(e) || t.preventDefault();
}, j = (t) => {
  const e = a(t);
  /^-?\d*$/.test(e) || t.preventDefault();
}, y = (t) => {
  const e = a(t);
  /^-?\d*\.?\d*$/.test(e) || t.preventDefault();
}, O = (t) => {
  t.component(
    "List",
    c(() => import("./List-40fd42d5.js"))
  );
};
export {
  y as isNumber,
  j as isWholeNumber,
  v as isWholePositiveNumber,
  g as listToCsv,
  b as saveCsv,
  O as spreadsheetsPlugin,
  o as sum,
  d as t_test,
  h as tableToCsv
};
