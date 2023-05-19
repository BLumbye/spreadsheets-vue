import { defineAsyncComponent as f } from "vue";
Array.prototype.count || (Array.prototype.count = function(t) {
  return this.reduce((r, n) => r + (t(n) ? 1 : 0), 0);
});
const q = (e) => (t) => !e(t), A = () => (e) => e == null || e === "", C = (e) => (t) => t === e, O = (e) => (t) => typeof t == typeof e;
function i(e, t) {
  let r = [...e];
  const n = r.filter((l) => !Number.isNaN(Number(l))), s = r.filter((l) => Number.isNaN(Number(l)));
  return n.sort((l, u) => Number(l) - Number(u)), s.sort(), t != null && t.descending && (n.reverse(), s.reverse()), r = (t == null ? void 0 : t.numbersFirst) === void 0 || t.numbersFirst ? [...n, ...s] : [...s, ...n], r;
}
function S(e, t, r, n) {
  if (t < 0 || r >= e.length || t >= r)
    throw new Error("Invalid range specified");
  const s = e.slice(t, r + 1);
  s.sort(), n && s.reverse();
  for (let l = t, u = 0; l <= r; l++, u++)
    e[l] = s[u];
  return e;
}
var d = ["2", "3", "4", "1", "5", "8", "11", "-3", "9.2"], b = [
  "john",
  "3",
  "4",
  "afro",
  "22",
  "-3",
  "student",
  "2no",
  "2 yes",
  "9.2",
  "9,3",
  "e",
  "01010",
  "Infinity",
  "-Infinity"
];
console.log(i(d));
console.log(i(b));
function L(e) {
  return e.reduce((t, r) => t.concat(r), []);
}
function a(e) {
  return e[0].map((t, r) => e.map((n) => n[r]));
}
let y = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
];
console.log(a(y));
function N(e) {
  return m(e) / e.length;
}
function m(e) {
  return e.reduce((t, r) => t + r, 0);
}
let g = [1, 12, 23, 45, 5];
console.log(N(g));
console.log(m(g));
function V(e, t, r, n, s) {
  return (e - t) / Math.sqrt(Math.pow(r, 2) * (1 / n + 1 / s));
}
function c(e) {
  if (e.length === 0)
    return null;
  const t = Math.floor(e.length / 2);
  return e.length % 2 === 0 ? (e[t - 1] + e[t]) / 2 : e[t];
}
function v(e) {
  if (e.length === 0)
    return { q1: null, q2: null, q3: null };
  const t = Math.floor(e.length / 2), r = c(e);
  let n, s;
  if (e.length % 2 === 0) {
    const l = e.slice(0, t), u = e.slice(t);
    n = c(l), s = c(u);
  } else {
    const l = e.slice(0, t), u = e.slice(t + 1);
    n = c(l), s = c(u);
  }
  return { q1: n, q2: r, q3: s };
}
let h = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(c(h));
console.log(v(h));
function D(e, t) {
  return (t != null && t.header ? [t.header, ...e] : e).join((t == null ? void 0 : t.direction) === "horizontal" ? "," : `
`);
}
function w(e, t) {
  if (t != null && t.nested)
    return t.nested;
  for (let r of e)
    if ("items" in r && Array.isArray(r.items) && r.items.length > 0 && typeof r.items[0] == "object")
      return !0;
  return !1;
}
function E(e, t, r) {
  let n = [];
  if (n.push(Object.values(t)), w(e, r))
    for (let s of e)
      for (let l of s.items)
        n.push(
          Object.keys(t).map(
            (u) => u === (r == null ? void 0 : r.groupKey) ? s[r.groupKey] : l[u]
          )
        );
  else
    for (let s of e)
      n.push(Object.keys(t).map((l) => s[l]));
  return (r == null ? void 0 : r.direction) === "horizontal" && (n = a(n)), n.map((s) => s.join(",")).join(`
`);
}
function H(e, t) {
}
function T(e) {
  const t = e.split(`
`), r = [];
  for (let n of t) {
    const s = n.split(",");
    for (let l of s)
      l = l.trim(), r.push(j(l));
  }
  return r;
}
function j(e) {
  const t = Number(e);
  if (!isNaN(t))
    return t;
  const r = new Date(e);
  return isNaN(r.getTime()) ? e.toLowerCase() === "true" ? !0 : e.toLowerCase() === "false" ? !1 : e : r;
}
let M = "2, TRUE, John";
console.log(T(M));
const o = (e) => {
  if (e.target.value) {
    const t = e.target;
    return t.value.substring(0, t.selectionStart) + (e.data ?? "") + t.value.substring(t.selectionEnd);
  } else {
    const t = e.target, r = document.getSelection(), n = Math.min(r.anchorOffset, r.focusOffset), s = Math.max(r.anchorOffset, r.focusOffset);
    return t.innerText.substring(0, n) + (e.data ?? "") + t.innerText.substring(s);
  }
}, $ = (e) => {
  const t = o(e);
  /^\d*$/.test(t) || e.preventDefault();
}, _ = (e) => {
  const t = o(e);
  /^-?\d*$/.test(t) || e.preventDefault();
}, x = (e) => {
  const t = o(e);
  /^-?\d*\.?\d*$/.test(t) || e.preventDefault();
}, z = (e) => {
  e.component(
    "SpreadsheetList",
    f(() => import("./SpreadsheetList-88591e08.js"))
  ), e.component(
    "SpreadsheetTable",
    f(() => import("./SpreadsheetTable-18268999.js"))
  );
};
export {
  N as arrayMean,
  m as arraySum,
  A as emptyElements,
  C as exactMatch,
  L as flatten,
  x as isNumber,
  _ as isWholeNumber,
  $ as isWholePositiveNumber,
  D as listToCsv,
  c as median,
  q as not,
  T as parseCSV,
  v as quartiles,
  H as saveCsv,
  V as simple_T_Test,
  i as sortList,
  S as sortRange,
  z as spreadsheetsPlugin,
  E as tableToCsv,
  a as transpose,
  O as typeMatch
};
