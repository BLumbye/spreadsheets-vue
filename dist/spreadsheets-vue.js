import { defineAsyncComponent as Xr } from "vue";
Array.prototype.count || (Array.prototype.count = function(r) {
  return this.reduce((t, e) => t + (r(e) ? 1 : 0), 0);
});
function A0(n, r) {
  let t = [...n];
  const e = t.filter((c) => !Number.isNaN(Number(c))), i = t.filter((c) => Number.isNaN(Number(c)));
  return e.sort((c, g) => Number(c) - Number(g)), i.sort(), r != null && r.descending && (e.reverse(), i.reverse()), t = (r == null ? void 0 : r.numbersFirst) === void 0 || r.numbersFirst ? [...e, ...i] : [...i, ...e], t;
}
function R0(n, r, t, e) {
  if (r < 0 || t >= n.length || r >= t)
    throw new Error("Invalid range specified");
  const i = n.slice(r, t + 1);
  i.sort(), e && i.reverse();
  for (let c = r, g = 0; c <= t; c++, g++)
    n[c] = i[g];
  return n;
}
function D0(n) {
  return n.reduce((r, t) => r.concat(t), []);
}
function De(n) {
  return n[0].map((r, t) => n.map((e) => e[t]));
}
var Vn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $r(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Zr = { exports: {} };
(function(n, r) {
  (function(t, e) {
    e();
  })(Vn, function() {
    function t(s, o) {
      return typeof o > "u" ? o = { autoBom: !1 } : typeof o != "object" && (console.warn("Deprecated: Expected third argument to be a object"), o = { autoBom: !o }), o.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type) ? new Blob(["\uFEFF", s], { type: s.type }) : s;
    }
    function e(s, o, f) {
      var u = new XMLHttpRequest();
      u.open("GET", s), u.responseType = "blob", u.onload = function() {
        E(u.response, o, f);
      }, u.onerror = function() {
        console.error("could not download file");
      }, u.send();
    }
    function i(s) {
      var o = new XMLHttpRequest();
      o.open("HEAD", s, !1);
      try {
        o.send();
      } catch {
      }
      return 200 <= o.status && 299 >= o.status;
    }
    function c(s) {
      try {
        s.dispatchEvent(new MouseEvent("click"));
      } catch {
        var o = document.createEvent("MouseEvents");
        o.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), s.dispatchEvent(o);
      }
    }
    var g = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Vn == "object" && Vn.global === Vn ? Vn : void 0, p = g.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), E = g.saveAs || (typeof window != "object" || window !== g ? function() {
    } : "download" in HTMLAnchorElement.prototype && !p ? function(s, o, f) {
      var u = g.URL || g.webkitURL, l = document.createElement("a");
      o = o || s.name || "download", l.download = o, l.rel = "noopener", typeof s == "string" ? (l.href = s, l.origin === location.origin ? c(l) : i(l.href) ? e(s, o, f) : c(l, l.target = "_blank")) : (l.href = u.createObjectURL(s), setTimeout(function() {
        u.revokeObjectURL(l.href);
      }, 4e4), setTimeout(function() {
        c(l);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(s, o, f) {
      if (o = o || s.name || "download", typeof s != "string")
        navigator.msSaveOrOpenBlob(t(s, f), o);
      else if (i(s))
        e(s, o, f);
      else {
        var u = document.createElement("a");
        u.href = s, u.target = "_blank", setTimeout(function() {
          c(u);
        });
      }
    } : function(s, o, f, u) {
      if (u = u || open("", "_blank"), u && (u.document.title = u.document.body.innerText = "downloading..."), typeof s == "string")
        return e(s, o, f);
      var l = s.type === "application/octet-stream", a = /constructor/i.test(g.HTMLElement) || g.safari, h = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((h || l && a || p) && typeof FileReader < "u") {
        var v = new FileReader();
        v.onloadend = function() {
          var d = v.result;
          d = h ? d : d.replace(/^data:[^;]*;/, "data:attachment/file;"), u ? u.location.href = d : location = d, u = null;
        }, v.readAsDataURL(s);
      } else {
        var I = g.URL || g.webkitURL, T = I.createObjectURL(s);
        u ? u.location = T : location.href = T, u = null, setTimeout(function() {
          I.revokeObjectURL(T);
        }, 4e4);
      }
    });
    g.saveAs = E.saveAs = E, n.exports = E;
  });
})(Zr);
var Ce = Zr.exports;
function C0(n, r) {
  return (r != null && r.header ? [r.header, ...n] : n).join((r == null ? void 0 : r.direction) === "horizontal" ? "," : `
`);
}
function Oe(n, r) {
  if (r != null && r.nested)
    return r.nested;
  for (let t of n)
    if ("items" in t && Array.isArray(t.items) && t.items.length > 0 && typeof t.items[0] == "object")
      return !0;
  return !1;
}
function O0(n, r, t) {
  let e = [];
  if (e.push(Object.values(r)), Oe(n, t))
    for (let i of n)
      for (let c of i.items)
        e.push(
          Object.keys(r).map(
            (g) => g === (t == null ? void 0 : t.groupKey) ? i[t.groupKey] : c[g]
          )
        );
  else
    for (let i of n)
      e.push(Object.keys(r).map((c) => i[c]));
  return (t == null ? void 0 : t.direction) === "horizontal" && (e = De(e)), e.map((i) => i.join(",")).join(`
`);
}
function m0(n, r) {
  const t = new Blob([n], { type: "text/csv;charset=utf-8;" });
  Ce.saveAs(t, r);
}
function L0(n) {
  const r = n.split(`
`), t = [];
  for (let e of r) {
    const i = e.split(",");
    for (let c of i)
      c = c.trim(), t.push(me(c));
  }
  return t;
}
function me(n) {
  if (n === "")
    return "";
  const r = Number(n);
  if (!isNaN(r))
    return r;
  const t = new Date(n);
  return isNaN(t.getTime()) ? n.toLowerCase() === "true" ? !0 : n.toLowerCase() === "false" ? !1 : n : t;
}
const M0 = () => (n) => !isNaN(Number(n)) || n === "-" || n === "." || n === "-.", P0 = () => (n) => !isNaN(Number(n)) && !n.includes("."), q0 = () => (n) => (Number(n) || 0) >= 0, U0 = () => (n) => (Number(n) || 0) <= 0, V0 = () => (n) => (Number(n) || 0) > 0, F0 = () => (n) => (Number(n) || 0) < 0, y0 = (n) => (r) => (Number(r) || 0) < n, G0 = (n) => (r) => (Number(r) || 0) <= n, H0 = (n) => (r) => (Number(r) || 0) > n, Y0 = (n) => (r) => (Number(r) || 0) >= n, B0 = (n, r) => (t) => (Number(t) || 0) >= n && (Number(t) || 0) <= r, W0 = (n, r) => (t) => (Number(t) || 0) > n && (Number(t) || 0) < r, z0 = (n, r) => (t) => (Number(t) || 0) >= n && (Number(t) || 0) < r, K0 = (n, r) => (t) => (Number(t) || 0) > n && (Number(t) || 0) <= r, X0 = (n) => (r) => !n(r), Q0 = (...n) => (r) => n.every((t) => t(r)), $0 = (...n) => (r) => n.some((t) => t(r)), Z0 = () => (n) => n == null || n === "", J0 = (n) => (r) => r === n, k0 = (n) => (r) => typeof r == typeof n, S0 = (n) => (r) => r.length === n, x0 = (n) => (r) => r.length < n, b0 = (n) => (r) => r.length <= n, j0 = (n) => (r) => r.length > n, _0 = (n) => (r) => r.length >= n, nl = (n, r) => (t) => t.length >= n && t.length <= r, rl = (n, r) => (t) => t.length > n && t.length < r, el = (n, r) => (t) => t.length >= n && t.length < r, tl = (n, r) => (t) => t.length > n && t.length <= r, ol = (n) => (r) => n(Number(r)), Le = (n) => {
  if (n.target.value) {
    const r = n.target;
    return r.value.substring(0, r.selectionStart) + (n.data ?? "") + r.value.substring(r.selectionEnd);
  } else {
    const r = n.target, t = document.getSelection(), e = Math.min(t.anchorOffset, t.focusOffset), i = Math.max(t.anchorOffset, t.focusOffset);
    return r.innerText.substring(0, e) + (n.data ?? "") + r.innerText.substring(i);
  }
}, il = (n) => (r) => {
  const t = Le(r);
  n(t) || r.preventDefault();
};
var Jr = { exports: {} };
(function(n, r) {
  (function(t, e) {
    n.exports = e();
  })(Vn, function() {
    var t = function(e, i) {
      var c = Array.prototype.concat, g = Array.prototype.slice, p = Object.prototype.toString;
      function E(T, d) {
        var w = T > d ? T : d;
        return e.pow(
          10,
          17 - ~~(e.log(w > 0 ? w : -w) * e.LOG10E)
        );
      }
      var s = Array.isArray || function(d) {
        return p.call(d) === "[object Array]";
      };
      function o(T) {
        return p.call(T) === "[object Function]";
      }
      function f(T) {
        return typeof T == "number" ? T - T === 0 : !1;
      }
      function u(T) {
        return c.apply([], T);
      }
      function l() {
        return new l._init(arguments);
      }
      l.fn = l.prototype, l._init = function(d) {
        if (s(d[0]))
          if (s(d[0][0])) {
            o(d[1]) && (d[0] = l.map(d[0], d[1]));
            for (var w = 0; w < d[0].length; w++)
              this[w] = d[0][w];
            this.length = d[0].length;
          } else
            this[0] = o(d[1]) ? l.map(d[0], d[1]) : d[0], this.length = 1;
        else if (f(d[0]))
          this[0] = l.seq.apply(null, d), this.length = 1;
        else {
          if (d[0] instanceof l)
            return l(d[0].toArray());
          this[0] = [], this.length = 1;
        }
        return this;
      }, l._init.prototype = l.prototype, l._init.constructor = l, l.utils = {
        calcRdx: E,
        isArray: s,
        isFunction: o,
        isNumber: f,
        toVector: u
      }, l._random_fn = e.random, l.setRandom = function(d) {
        if (typeof d != "function")
          throw new TypeError("fn is not a function");
        l._random_fn = d;
      }, l.extend = function(d) {
        var w, A;
        if (arguments.length === 1) {
          for (A in d)
            l[A] = d[A];
          return this;
        }
        for (w = 1; w < arguments.length; w++)
          for (A in arguments[w])
            d[A] = arguments[w][A];
        return d;
      }, l.rows = function(d) {
        return d.length || 1;
      }, l.cols = function(d) {
        return d[0].length || 1;
      }, l.dimensions = function(d) {
        return {
          rows: l.rows(d),
          cols: l.cols(d)
        };
      }, l.row = function(d, w) {
        return s(w) ? w.map(function(A) {
          return l.row(d, A);
        }) : d[w];
      }, l.rowa = function(d, w) {
        return l.row(d, w);
      }, l.col = function(d, w) {
        if (s(w)) {
          var A = l.arange(d.length).map(function() {
            return new Array(w.length);
          });
          return w.forEach(function(M, P) {
            l.arange(d.length).forEach(function(V) {
              A[V][P] = d[V][M];
            });
          }), A;
        }
        for (var D = new Array(d.length), O = 0; O < d.length; O++)
          D[O] = [d[O][w]];
        return D;
      }, l.cola = function(d, w) {
        return l.col(d, w).map(function(A) {
          return A[0];
        });
      }, l.diag = function(d) {
        for (var w = l.rows(d), A = new Array(w), D = 0; D < w; D++)
          A[D] = [d[D][D]];
        return A;
      }, l.antidiag = function(d) {
        for (var w = l.rows(d) - 1, A = new Array(w), D = 0; w >= 0; w--, D++)
          A[D] = [d[D][w]];
        return A;
      }, l.transpose = function(d) {
        var w = [], A, D, O, M, P;
        for (s(d[0]) || (d = [d]), D = d.length, O = d[0].length, P = 0; P < O; P++) {
          for (A = new Array(D), M = 0; M < D; M++)
            A[M] = d[M][P];
          w.push(A);
        }
        return w.length === 1 ? w[0] : w;
      }, l.map = function(d, w, A) {
        var D, O, M, P, V;
        for (s(d[0]) || (d = [d]), O = d.length, M = d[0].length, P = A ? d : new Array(O), D = 0; D < O; D++)
          for (P[D] || (P[D] = new Array(M)), V = 0; V < M; V++)
            P[D][V] = w(d[D][V], D, V);
        return P.length === 1 ? P[0] : P;
      }, l.cumreduce = function(d, w, A) {
        var D, O, M, P, V;
        for (s(d[0]) || (d = [d]), O = d.length, M = d[0].length, P = A ? d : new Array(O), D = 0; D < O; D++)
          for (P[D] || (P[D] = new Array(M)), M > 0 && (P[D][0] = d[D][0]), V = 1; V < M; V++)
            P[D][V] = w(P[D][V - 1], d[D][V]);
        return P.length === 1 ? P[0] : P;
      }, l.alter = function(d, w) {
        return l.map(d, w, !0);
      }, l.create = function(d, w, A) {
        var D = new Array(d), O, M;
        for (o(w) && (A = w, w = d), O = 0; O < d; O++)
          for (D[O] = new Array(w), M = 0; M < w; M++)
            D[O][M] = A(O, M);
        return D;
      };
      function a() {
        return 0;
      }
      l.zeros = function(d, w) {
        return f(w) || (w = d), l.create(d, w, a);
      };
      function h() {
        return 1;
      }
      l.ones = function(d, w) {
        return f(w) || (w = d), l.create(d, w, h);
      }, l.rand = function(d, w) {
        return f(w) || (w = d), l.create(d, w, l._random_fn);
      };
      function v(T, d) {
        return T === d ? 1 : 0;
      }
      l.identity = function(d, w) {
        return f(w) || (w = d), l.create(d, w, v);
      }, l.symmetric = function(d) {
        var w = d.length, A, D;
        if (d.length !== d[0].length)
          return !1;
        for (A = 0; A < w; A++)
          for (D = 0; D < w; D++)
            if (d[D][A] !== d[A][D])
              return !1;
        return !0;
      }, l.clear = function(d) {
        return l.alter(d, a);
      }, l.seq = function(d, w, A, D) {
        o(D) || (D = !1);
        var O = [], M = E(d, w), P = (w * M - d * M) / ((A - 1) * M), V = d, H;
        for (H = 0; V <= w && H < A; H++, V = (d * M + P * M * H) / M)
          O.push(D ? D(V, H) : V);
        return O;
      }, l.arange = function(d, w, A) {
        var D = [], O;
        if (A = A || 1, w === i && (w = d, d = 0), d === w || A === 0)
          return [];
        if (d < w && A < 0)
          return [];
        if (d > w && A > 0)
          return [];
        if (A > 0)
          for (O = d; O < w; O += A)
            D.push(O);
        else
          for (O = d; O > w; O += A)
            D.push(O);
        return D;
      }, l.slice = function() {
        function T(w, A, D, O) {
          var M, P = [], V = w.length;
          if (A === i && D === i && O === i)
            return l.copy(w);
          if (A = A || 0, D = D || w.length, A = A >= 0 ? A : V + A, D = D >= 0 ? D : V + D, O = O || 1, A === D || O === 0)
            return [];
          if (A < D && O < 0)
            return [];
          if (A > D && O > 0)
            return [];
          if (O > 0)
            for (M = A; M < D; M += O)
              P.push(w[M]);
          else
            for (M = A; M > D; M += O)
              P.push(w[M]);
          return P;
        }
        function d(w, A) {
          var D, O;
          if (A = A || {}, f(A.row)) {
            if (f(A.col))
              return w[A.row][A.col];
            var M = l.rowa(w, A.row);
            return D = A.col || {}, T(M, D.start, D.end, D.step);
          }
          if (f(A.col)) {
            var P = l.cola(w, A.col);
            return O = A.row || {}, T(P, O.start, O.end, O.step);
          }
          O = A.row || {}, D = A.col || {};
          var V = T(w, O.start, O.end, O.step);
          return V.map(function(H) {
            return T(H, D.start, D.end, D.step);
          });
        }
        return d;
      }(), l.sliceAssign = function(d, w, A) {
        var D, O;
        if (f(w.row)) {
          if (f(w.col))
            return d[w.row][w.col] = A;
          w.col = w.col || {}, w.col.start = w.col.start || 0, w.col.end = w.col.end || d[0].length, w.col.step = w.col.step || 1, D = l.arange(
            w.col.start,
            e.min(d.length, w.col.end),
            w.col.step
          );
          var M = w.row;
          return D.forEach(function(V, H) {
            d[M][V] = A[H];
          }), d;
        }
        if (f(w.col)) {
          w.row = w.row || {}, w.row.start = w.row.start || 0, w.row.end = w.row.end || d.length, w.row.step = w.row.step || 1, O = l.arange(
            w.row.start,
            e.min(d[0].length, w.row.end),
            w.row.step
          );
          var P = w.col;
          return O.forEach(function(V, H) {
            d[V][P] = A[H];
          }), d;
        }
        return A[0].length === i && (A = [A]), w.row.start = w.row.start || 0, w.row.end = w.row.end || d.length, w.row.step = w.row.step || 1, w.col.start = w.col.start || 0, w.col.end = w.col.end || d[0].length, w.col.step = w.col.step || 1, O = l.arange(
          w.row.start,
          e.min(d.length, w.row.end),
          w.row.step
        ), D = l.arange(
          w.col.start,
          e.min(d[0].length, w.col.end),
          w.col.step
        ), O.forEach(function(V, H) {
          D.forEach(function(Q, W) {
            d[V][Q] = A[H][W];
          });
        }), d;
      }, l.diagonal = function(d) {
        var w = l.zeros(d.length, d.length);
        return d.forEach(function(A, D) {
          w[D][D] = A;
        }), w;
      }, l.copy = function(d) {
        return d.map(function(w) {
          return f(w) ? w : w.map(function(A) {
            return A;
          });
        });
      };
      var I = l.prototype;
      return I.length = 0, I.push = Array.prototype.push, I.sort = Array.prototype.sort, I.splice = Array.prototype.splice, I.slice = Array.prototype.slice, I.toArray = function() {
        return this.length > 1 ? g.call(this) : g.call(this)[0];
      }, I.map = function(d, w) {
        return l(l.map(this, d, w));
      }, I.cumreduce = function(d, w) {
        return l(l.cumreduce(this, d, w));
      }, I.alter = function(d) {
        return l.alter(this, d), this;
      }, function(T) {
        for (var d = 0; d < T.length; d++)
          (function(w) {
            I[w] = function(A) {
              var D = this, O;
              return A ? (setTimeout(function() {
                A.call(D, I[w].call(D));
              }), this) : (O = l[w](this), s(O) ? l(O) : O);
            };
          })(T[d]);
      }("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")), function(T) {
        for (var d = 0; d < T.length; d++)
          (function(w) {
            I[w] = function(A, D) {
              var O = this;
              return D ? (setTimeout(function() {
                D.call(O, I[w].call(O, A));
              }), this) : l(l[w](this, A));
            };
          })(T[d]);
      }("row col".split(" ")), function(T) {
        for (var d = 0; d < T.length; d++)
          (function(w) {
            I[w] = function() {
              return l(l[w].apply(null, arguments));
            };
          })(T[d]);
      }("create zeros ones rand identity".split(" ")), l;
    }(Math);
    return function(e, i) {
      var c = e.utils.isFunction;
      function g(s, o) {
        return s - o;
      }
      function p(s, o, f) {
        return i.max(o, i.min(s, f));
      }
      e.sum = function(o) {
        for (var f = 0, u = o.length; --u >= 0; )
          f += o[u];
        return f;
      }, e.sumsqrd = function(o) {
        for (var f = 0, u = o.length; --u >= 0; )
          f += o[u] * o[u];
        return f;
      }, e.sumsqerr = function(o) {
        for (var f = e.mean(o), u = 0, l = o.length, a; --l >= 0; )
          a = o[l] - f, u += a * a;
        return u;
      }, e.sumrow = function(o) {
        for (var f = 0, u = o.length; --u >= 0; )
          f += o[u];
        return f;
      }, e.product = function(o) {
        for (var f = 1, u = o.length; --u >= 0; )
          f *= o[u];
        return f;
      }, e.min = function(o) {
        for (var f = o[0], u = 0; ++u < o.length; )
          o[u] < f && (f = o[u]);
        return f;
      }, e.max = function(o) {
        for (var f = o[0], u = 0; ++u < o.length; )
          o[u] > f && (f = o[u]);
        return f;
      }, e.unique = function(o) {
        for (var f = {}, u = [], l = 0; l < o.length; l++)
          f[o[l]] || (f[o[l]] = !0, u.push(o[l]));
        return u;
      }, e.mean = function(o) {
        return e.sum(o) / o.length;
      }, e.meansqerr = function(o) {
        return e.sumsqerr(o) / o.length;
      }, e.geomean = function(o) {
        var f = o.map(i.log), u = e.mean(f);
        return i.exp(u);
      }, e.median = function(o) {
        var f = o.length, u = o.slice().sort(g);
        return f & 1 ? u[f / 2 | 0] : (u[f / 2 - 1] + u[f / 2]) / 2;
      }, e.cumsum = function(o) {
        return e.cumreduce(o, function(f, u) {
          return f + u;
        });
      }, e.cumprod = function(o) {
        return e.cumreduce(o, function(f, u) {
          return f * u;
        });
      }, e.diff = function(o) {
        var f = [], u = o.length, l;
        for (l = 1; l < u; l++)
          f.push(o[l] - o[l - 1]);
        return f;
      }, e.rank = function(s) {
        var o, f = [], u = {};
        for (o = 0; o < s.length; o++) {
          var l = s[o];
          u[l] ? u[l]++ : (u[l] = 1, f.push(l));
        }
        var a = f.sort(g), h = {}, v = 1;
        for (o = 0; o < a.length; o++) {
          var l = a[o], I = u[l], T = v, d = v + I - 1, w = (T + d) / 2;
          h[l] = w, v += I;
        }
        return s.map(function(A) {
          return h[A];
        });
      }, e.mode = function(o) {
        var f = o.length, u = o.slice().sort(g), l = 1, a = 0, h = 0, v = [], I;
        for (I = 0; I < f; I++)
          u[I] === u[I + 1] ? l++ : (l > a ? (v = [u[I]], a = l, h = 0) : l === a && (v.push(u[I]), h++), l = 1);
        return h === 0 ? v[0] : v;
      }, e.range = function(o) {
        return e.max(o) - e.min(o);
      }, e.variance = function(o, f) {
        return e.sumsqerr(o) / (o.length - (f ? 1 : 0));
      }, e.pooledvariance = function(o) {
        var f = o.reduce(function(l, a) {
          return l + e.sumsqerr(a);
        }, 0), u = o.reduce(function(l, a) {
          return l + a.length;
        }, 0);
        return f / (u - o.length);
      }, e.deviation = function(s) {
        for (var o = e.mean(s), f = s.length, u = new Array(f), l = 0; l < f; l++)
          u[l] = s[l] - o;
        return u;
      }, e.stdev = function(o, f) {
        return i.sqrt(e.variance(o, f));
      }, e.pooledstdev = function(o) {
        return i.sqrt(e.pooledvariance(o));
      }, e.meandev = function(o) {
        for (var f = e.mean(o), u = [], l = o.length - 1; l >= 0; l--)
          u.push(i.abs(o[l] - f));
        return e.mean(u);
      }, e.meddev = function(o) {
        for (var f = e.median(o), u = [], l = o.length - 1; l >= 0; l--)
          u.push(i.abs(o[l] - f));
        return e.median(u);
      }, e.coeffvar = function(o) {
        return e.stdev(o) / e.mean(o);
      }, e.quartiles = function(o) {
        var f = o.length, u = o.slice().sort(g);
        return [
          u[i.round(f / 4) - 1],
          u[i.round(f / 2) - 1],
          u[i.round(f * 3 / 4) - 1]
        ];
      }, e.quantiles = function(o, f, u, l) {
        var a = o.slice().sort(g), h = [f.length], v = o.length, I, T, d, w, A, D;
        for (typeof u > "u" && (u = 3 / 8), typeof l > "u" && (l = 3 / 8), I = 0; I < f.length; I++)
          T = f[I], d = u + T * (1 - u - l), w = v * T + d, A = i.floor(p(w, 1, v - 1)), D = p(w - A, 0, 1), h[I] = (1 - D) * a[A - 1] + D * a[A];
        return h;
      }, e.percentile = function(o, f, u) {
        var l = o.slice().sort(g), a = f * (l.length + (u ? 1 : -1)) + (u ? 0 : 1), h = parseInt(a), v = a - h;
        return h + 1 < l.length ? l[h - 1] + v * (l[h] - l[h - 1]) : l[h - 1];
      }, e.percentileOfScore = function(o, f, u) {
        var l = 0, a = o.length, h = !1, v, I;
        for (u === "strict" && (h = !0), I = 0; I < a; I++)
          v = o[I], (h && v < f || !h && v <= f) && l++;
        return l / a;
      }, e.histogram = function(o, f) {
        f = f || 4;
        var u = e.min(o), l = (e.max(o) - u) / f, a = o.length, h = [], v;
        for (v = 0; v < f; v++)
          h[v] = 0;
        for (v = 0; v < a; v++)
          h[i.min(i.floor((o[v] - u) / l), f - 1)] += 1;
        return h;
      }, e.covariance = function(o, f) {
        var u = e.mean(o), l = e.mean(f), a = o.length, h = new Array(a), v;
        for (v = 0; v < a; v++)
          h[v] = (o[v] - u) * (f[v] - l);
        return e.sum(h) / (a - 1);
      }, e.corrcoeff = function(o, f) {
        return e.covariance(o, f) / e.stdev(o, 1) / e.stdev(f, 1);
      }, e.spearmancoeff = function(s, o) {
        return s = e.rank(s), o = e.rank(o), e.corrcoeff(s, o);
      }, e.stanMoment = function(o, f) {
        for (var u = e.mean(o), l = e.stdev(o), a = o.length, h = 0, v = 0; v < a; v++)
          h += i.pow((o[v] - u) / l, f);
        return h / o.length;
      }, e.skewness = function(o) {
        return e.stanMoment(o, 3);
      }, e.kurtosis = function(o) {
        return e.stanMoment(o, 4) - 3;
      };
      var E = e.prototype;
      (function(s) {
        for (var o = 0; o < s.length; o++)
          (function(f) {
            E[f] = function(u, l) {
              var a = [], h = 0, v = this;
              if (c(u) && (l = u, u = !1), l)
                return setTimeout(function() {
                  l.call(v, E[f].call(v, u));
                }), this;
              if (this.length > 1) {
                for (v = u === !0 ? this : this.transpose(); h < v.length; h++)
                  a[h] = e[f](v[h]);
                return a;
              }
              return e[f](this[0], u);
            };
          })(s[o]);
      })("cumsum cumprod".split(" ")), function(s) {
        for (var o = 0; o < s.length; o++)
          (function(f) {
            E[f] = function(u, l) {
              var a = [], h = 0, v = this;
              if (c(u) && (l = u, u = !1), l)
                return setTimeout(function() {
                  l.call(v, E[f].call(v, u));
                }), this;
              if (this.length > 1) {
                for (f !== "sumrow" && (v = u === !0 ? this : this.transpose()); h < v.length; h++)
                  a[h] = e[f](v[h]);
                return u === !0 ? e[f](e.utils.toVector(a)) : a;
              }
              return e[f](this[0], u);
            };
          })(s[o]);
      }("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")), function(s) {
        for (var o = 0; o < s.length; o++)
          (function(f) {
            E[f] = function() {
              var u = [], l = 0, a = this, h = Array.prototype.slice.call(arguments), v;
              if (c(h[h.length - 1])) {
                v = h[h.length - 1];
                var I = h.slice(0, h.length - 1);
                return setTimeout(function() {
                  v.call(
                    a,
                    E[f].apply(a, I)
                  );
                }), this;
              } else {
                v = void 0;
                var T = function(w) {
                  return e[f].apply(a, [w].concat(h));
                };
              }
              if (this.length > 1) {
                for (a = a.transpose(); l < a.length; l++)
                  u[l] = T(a[l]);
                return u;
              }
              return T(this[0]);
            };
          })(s[o]);
      }("quantiles percentileOfScore".split(" "));
    }(t, Math), function(e, i) {
      e.gammaln = function(g) {
        var p = 0, E = [
          76.18009172947146,
          -86.50532032941678,
          24.01409824083091,
          -1.231739572450155,
          0.001208650973866179,
          -5395239384953e-18
        ], s = 1.000000000190015, o, f, u;
        for (u = (f = o = g) + 5.5, u -= (o + 0.5) * i.log(u); p < 6; p++)
          s += E[p] / ++f;
        return i.log(2.5066282746310007 * s / o) - u;
      }, e.loggam = function(g) {
        var p, E, s, o, f, u, l, a = [
          0.08333333333333333,
          -0.002777777777777778,
          7936507936507937e-19,
          -5952380952380952e-19,
          8417508417508418e-19,
          -0.001917526917526918,
          0.00641025641025641,
          -0.02955065359477124,
          0.1796443723688307,
          -1.3924322169059
        ];
        if (p = g, l = 0, g == 1 || g == 2)
          return 0;
        for (g <= 7 && (l = i.floor(7 - g), p = g + l), E = 1 / (p * p), s = 2 * i.PI, f = a[9], u = 8; u >= 0; u--)
          f *= E, f += a[u];
        if (o = f / p + 0.5 * i.log(s) + (p - 0.5) * i.log(p) - p, g <= 7)
          for (u = 1; u <= l; u++)
            o -= i.log(p - 1), p -= 1;
        return o;
      }, e.gammafn = function(g) {
        var p = [
          -1.716185138865495,
          24.76565080557592,
          -379.80425647094563,
          629.3311553128184,
          866.9662027904133,
          -31451.272968848367,
          -36144.413418691176,
          66456.14382024054
        ], E = [
          -30.8402300119739,
          315.35062697960416,
          -1015.1563674902192,
          -3107.771671572311,
          22538.11842098015,
          4755.846277527881,
          -134659.9598649693,
          -115132.2596755535
        ], s = !1, o = 0, f = 0, u = 0, l = g, a, h, v, I;
        if (g > 171.6243769536076)
          return 1 / 0;
        if (l <= 0)
          if (I = l % 1 + 36e-17, I)
            s = (l & 1 ? -1 : 1) * i.PI / i.sin(i.PI * I), l = 1 - l;
          else
            return 1 / 0;
        for (v = l, l < 1 ? h = l++ : h = (l -= o = (l | 0) - 1) - 1, a = 0; a < 8; ++a)
          u = (u + p[a]) * h, f = f * h + E[a];
        if (I = u / f + 1, v < l)
          I /= v;
        else if (v > l)
          for (a = 0; a < o; ++a)
            I *= l, l++;
        return s && (I = s / I), I;
      }, e.gammap = function(g, p) {
        return e.lowRegGamma(g, p) * e.gammafn(g);
      }, e.lowRegGamma = function(g, p) {
        var E = e.gammaln(g), s = g, o = 1 / g, f = o, u = p + 1 - g, l = 1 / 1e-30, a = 1 / u, h = a, v = 1, I = -~(i.log(g >= 1 ? g : 1 / g) * 8.5 + g * 0.4 + 17), T;
        if (p < 0 || g <= 0)
          return NaN;
        if (p < g + 1) {
          for (; v <= I; v++)
            o += f *= p / ++s;
          return o * i.exp(-p + g * i.log(p) - E);
        }
        for (; v <= I; v++)
          T = -v * (v - g), u += 2, a = T * a + u, l = u + T / l, a = 1 / a, h *= a * l;
        return 1 - h * i.exp(-p + g * i.log(p) - E);
      }, e.factorialln = function(g) {
        return g < 0 ? NaN : e.gammaln(g + 1);
      }, e.factorial = function(g) {
        return g < 0 ? NaN : e.gammafn(g + 1);
      }, e.combination = function(g, p) {
        return g > 170 || p > 170 ? i.exp(e.combinationln(g, p)) : e.factorial(g) / e.factorial(p) / e.factorial(g - p);
      }, e.combinationln = function(g, p) {
        return e.factorialln(g) - e.factorialln(p) - e.factorialln(g - p);
      }, e.permutation = function(g, p) {
        return e.factorial(g) / e.factorial(g - p);
      }, e.betafn = function(g, p) {
        if (!(g <= 0 || p <= 0))
          return g + p > 170 ? i.exp(e.betaln(g, p)) : e.gammafn(g) * e.gammafn(p) / e.gammafn(g + p);
      }, e.betaln = function(g, p) {
        return e.gammaln(g) + e.gammaln(p) - e.gammaln(g + p);
      }, e.betacf = function(g, p, E) {
        var s = 1e-30, o = 1, f = p + E, u = p + 1, l = p - 1, a = 1, h = 1 - f * g / u, v, I, T, d;
        for (i.abs(h) < s && (h = s), h = 1 / h, d = h; o <= 100 && (v = 2 * o, I = o * (E - o) * g / ((l + v) * (p + v)), h = 1 + I * h, i.abs(h) < s && (h = s), a = 1 + I / a, i.abs(a) < s && (a = s), h = 1 / h, d *= h * a, I = -(p + o) * (f + o) * g / ((p + v) * (u + v)), h = 1 + I * h, i.abs(h) < s && (h = s), a = 1 + I / a, i.abs(a) < s && (a = s), h = 1 / h, T = h * a, d *= T, !(i.abs(T - 1) < 3e-7)); o++)
          ;
        return d;
      }, e.gammapinv = function(g, p) {
        var E = 0, s = p - 1, o = 1e-8, f = e.gammaln(p), u, l, a, h, v, I, T;
        if (g >= 1)
          return i.max(100, p + 100 * i.sqrt(p));
        if (g <= 0)
          return 0;
        for (p > 1 ? (I = i.log(s), T = i.exp(s * (I - 1) - f), v = g < 0.5 ? g : 1 - g, a = i.sqrt(-2 * i.log(v)), u = (2.30753 + a * 0.27061) / (1 + a * (0.99229 + a * 0.04481)) - a, g < 0.5 && (u = -u), u = i.max(
          1e-3,
          p * i.pow(1 - 1 / (9 * p) - u / (3 * i.sqrt(p)), 3)
        )) : (a = 1 - p * (0.253 + p * 0.12), g < a ? u = i.pow(g / a, 1 / p) : u = 1 - i.log(1 - (g - a) / (1 - a))); E < 12; E++) {
          if (u <= 0)
            return 0;
          if (l = e.lowRegGamma(p, u) - g, p > 1 ? a = T * i.exp(-(u - s) + s * (i.log(u) - I)) : a = i.exp(-u + s * i.log(u) - f), h = l / a, u -= a = h / (1 - 0.5 * i.min(1, h * ((p - 1) / u - 1))), u <= 0 && (u = 0.5 * (u + a)), i.abs(a) < o * u)
            break;
        }
        return u;
      }, e.erf = function(g) {
        var p = [
          -1.3026537197817094,
          0.6419697923564902,
          0.019476473204185836,
          -0.00956151478680863,
          -946595344482036e-18,
          366839497852761e-18,
          42523324806907e-18,
          -20278578112534e-18,
          -1624290004647e-18,
          130365583558e-17,
          15626441722e-18,
          -85238095915e-18,
          6529054439e-18,
          5059343495e-18,
          -991364156e-18,
          -227365122e-18,
          96467911e-18,
          2394038e-18,
          -6886027e-18,
          894487e-18,
          313092e-18,
          -112708e-18,
          381e-18,
          7106e-18,
          -1523e-18,
          -94e-18,
          121e-18,
          -28e-18
        ], E = p.length - 1, s = !1, o = 0, f = 0, u, l, a, h;
        for (g < 0 && (g = -g, s = !0), u = 2 / (2 + g), l = 4 * u - 2; E > 0; E--)
          a = o, o = l * o - f + p[E], f = a;
        return h = u * i.exp(-g * g + 0.5 * (p[0] + l * o) - f), s ? h - 1 : 1 - h;
      }, e.erfc = function(g) {
        return 1 - e.erf(g);
      }, e.erfcinv = function(g) {
        var p = 0, E, s, o, f;
        if (g >= 2)
          return -100;
        if (g <= 0)
          return 100;
        for (f = g < 1 ? g : 2 - g, o = i.sqrt(-2 * i.log(f / 2)), E = -0.70711 * ((2.30753 + o * 0.27061) / (1 + o * (0.99229 + o * 0.04481)) - o); p < 2; p++)
          s = e.erfc(E) - f, E += s / (1.1283791670955126 * i.exp(-E * E) - E * s);
        return g < 1 ? E : -E;
      }, e.ibetainv = function(g, p, E) {
        var s = 1e-8, o = p - 1, f = E - 1, u = 0, l, a, h, v, I, T, d, w, A, D, O;
        if (g <= 0)
          return 0;
        if (g >= 1)
          return 1;
        for (p >= 1 && E >= 1 ? (h = g < 0.5 ? g : 1 - g, v = i.sqrt(-2 * i.log(h)), d = (2.30753 + v * 0.27061) / (1 + v * (0.99229 + v * 0.04481)) - v, g < 0.5 && (d = -d), w = (d * d - 3) / 6, A = 2 / (1 / (2 * p - 1) + 1 / (2 * E - 1)), D = d * i.sqrt(w + A) / A - (1 / (2 * E - 1) - 1 / (2 * p - 1)) * (w + 5 / 6 - 2 / (3 * A)), d = p / (p + E * i.exp(2 * D))) : (l = i.log(p / (p + E)), a = i.log(E / (p + E)), v = i.exp(p * l) / p, I = i.exp(E * a) / E, D = v + I, g < v / D ? d = i.pow(p * D * g, 1 / p) : d = 1 - i.pow(E * D * (1 - g), 1 / E)), O = -e.gammaln(p) - e.gammaln(E) + e.gammaln(p + E); u < 10; u++) {
          if (d === 0 || d === 1)
            return d;
          if (T = e.ibeta(d, p, E) - g, v = i.exp(o * i.log(d) + f * i.log(1 - d) + O), I = T / v, d -= v = I / (1 - 0.5 * i.min(1, I * (o / d - f / (1 - d)))), d <= 0 && (d = 0.5 * (d + v)), d >= 1 && (d = 0.5 * (d + v + 1)), i.abs(v) < s * d && u > 0)
            break;
        }
        return d;
      }, e.ibeta = function(g, p, E) {
        var s = g === 0 || g === 1 ? 0 : i.exp(e.gammaln(p + E) - e.gammaln(p) - e.gammaln(E) + p * i.log(g) + E * i.log(1 - g));
        return g < 0 || g > 1 ? !1 : g < (p + 1) / (p + E + 2) ? s * e.betacf(g, p, E) / p : 1 - s * e.betacf(1 - g, E, p) / E;
      }, e.randn = function(g, p) {
        var E, s, o, f, u;
        if (p || (p = g), g)
          return e.create(g, p, function() {
            return e.randn();
          });
        do
          E = e._random_fn(), s = 1.7156 * (e._random_fn() - 0.5), o = E - 0.449871, f = i.abs(s) + 0.386595, u = o * o + f * (0.196 * f - 0.25472 * o);
        while (u > 0.27597 && (u > 0.27846 || s * s > -4 * i.log(E) * E * E));
        return s / E;
      }, e.randg = function(g, p, E) {
        var s = g, o, f, u, l, a, h;
        if (E || (E = p), g || (g = 1), p)
          return h = e.zeros(p, E), h.alter(function() {
            return e.randg(g);
          }), h;
        g < 1 && (g += 1), o = g - 1 / 3, f = 1 / i.sqrt(9 * o);
        do {
          do
            a = e.randn(), l = 1 + f * a;
          while (l <= 0);
          l = l * l * l, u = e._random_fn();
        } while (u > 1 - 0.331 * i.pow(a, 4) && i.log(u) > 0.5 * a * a + o * (1 - l + i.log(l)));
        if (g == s)
          return o * l;
        do
          u = e._random_fn();
        while (u === 0);
        return i.pow(u, 1 / s) * o * l;
      }, function(c) {
        for (var g = 0; g < c.length; g++)
          (function(p) {
            e.fn[p] = function() {
              return e(
                e.map(this, function(E) {
                  return e[p](E);
                })
              );
            };
          })(c[g]);
      }("gammaln gammafn factorial factorialln".split(" ")), function(c) {
        for (var g = 0; g < c.length; g++)
          (function(p) {
            e.fn[p] = function() {
              return e(e[p].apply(null, arguments));
            };
          })(c[g]);
      }("randn".split(" "));
    }(t, Math), function(e, i) {
      (function(s) {
        for (var o = 0; o < s.length; o++)
          (function(f) {
            e[f] = function u(l, a, h) {
              return this instanceof u ? (this._a = l, this._b = a, this._c = h, this) : new u(l, a, h);
            }, e.fn[f] = function(u, l, a) {
              var h = e[f](u, l, a);
              return h.data = this, h;
            }, e[f].prototype.sample = function(u) {
              var l = this._a, a = this._b, h = this._c;
              return u ? e.alter(u, function() {
                return e[f].sample(l, a, h);
              }) : e[f].sample(l, a, h);
            }, function(u) {
              for (var l = 0; l < u.length; l++)
                (function(a) {
                  e[f].prototype[a] = function(h) {
                    var v = this._a, I = this._b, T = this._c;
                    return !h && h !== 0 && (h = this.data), typeof h != "number" ? e.fn.map.call(h, function(d) {
                      return e[f][a](d, v, I, T);
                    }) : e[f][a](h, v, I, T);
                  };
                })(u[l]);
            }("pdf cdf inv".split(" ")), function(u) {
              for (var l = 0; l < u.length; l++)
                (function(a) {
                  e[f].prototype[a] = function() {
                    return e[f][a](this._a, this._b, this._c);
                  };
                })(u[l]);
            }("mean median mode variance".split(" "));
          })(s[o]);
      })("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")), e.extend(e.beta, {
        pdf: function(o, f, u) {
          return o > 1 || o < 0 ? 0 : f == 1 && u == 1 ? 1 : f < 512 && u < 512 ? i.pow(o, f - 1) * i.pow(1 - o, u - 1) / e.betafn(f, u) : i.exp((f - 1) * i.log(o) + (u - 1) * i.log(1 - o) - e.betaln(f, u));
        },
        cdf: function(o, f, u) {
          return o > 1 || o < 0 ? (o > 1) * 1 : e.ibeta(o, f, u);
        },
        inv: function(o, f, u) {
          return e.ibetainv(o, f, u);
        },
        mean: function(o, f) {
          return o / (o + f);
        },
        median: function(o, f) {
          return e.ibetainv(0.5, o, f);
        },
        mode: function(o, f) {
          return (o - 1) / (o + f - 2);
        },
        // return a random sample
        sample: function(o, f) {
          var u = e.randg(o);
          return u / (u + e.randg(f));
        },
        variance: function(o, f) {
          return o * f / (i.pow(o + f, 2) * (o + f + 1));
        }
      }), e.extend(e.centralF, {
        // This implementation of the pdf function avoids float overflow
        // See the way that R calculates this value:
        // https://svn.r-project.org/R/trunk/src/nmath/df.c
        pdf: function(o, f, u) {
          var l, a, h;
          return o < 0 ? 0 : f <= 2 ? o === 0 && f < 2 ? 1 / 0 : o === 0 && f === 2 ? 1 : 1 / e.betafn(f / 2, u / 2) * i.pow(f / u, f / 2) * i.pow(o, f / 2 - 1) * i.pow(1 + f / u * o, -(f + u) / 2) : (l = f * o / (u + o * f), a = u / (u + o * f), h = f * a / 2, h * e.binomial.pdf((f - 2) / 2, (f + u - 2) / 2, l));
        },
        cdf: function(o, f, u) {
          return o < 0 ? 0 : e.ibeta(f * o / (f * o + u), f / 2, u / 2);
        },
        inv: function(o, f, u) {
          return u / (f * (1 / e.ibetainv(o, f / 2, u / 2) - 1));
        },
        mean: function(o, f) {
          return f > 2 ? f / (f - 2) : void 0;
        },
        mode: function(o, f) {
          return o > 2 ? f * (o - 2) / (o * (f + 2)) : void 0;
        },
        // return a random sample
        sample: function(o, f) {
          var u = e.randg(o / 2) * 2, l = e.randg(f / 2) * 2;
          return u / o / (l / f);
        },
        variance: function(o, f) {
          if (!(f <= 4))
            return 2 * f * f * (o + f - 2) / (o * (f - 2) * (f - 2) * (f - 4));
        }
      }), e.extend(e.cauchy, {
        pdf: function(o, f, u) {
          return u < 0 ? 0 : u / (i.pow(o - f, 2) + i.pow(u, 2)) / i.PI;
        },
        cdf: function(o, f, u) {
          return i.atan((o - f) / u) / i.PI + 0.5;
        },
        inv: function(s, o, f) {
          return o + f * i.tan(i.PI * (s - 0.5));
        },
        median: function(o) {
          return o;
        },
        mode: function(o) {
          return o;
        },
        sample: function(o, f) {
          return e.randn() * i.sqrt(1 / (2 * e.randg(0.5))) * f + o;
        }
      }), e.extend(e.chisquare, {
        pdf: function(o, f) {
          return o < 0 ? 0 : o === 0 && f === 2 ? 0.5 : i.exp((f / 2 - 1) * i.log(o) - o / 2 - f / 2 * i.log(2) - e.gammaln(f / 2));
        },
        cdf: function(o, f) {
          return o < 0 ? 0 : e.lowRegGamma(f / 2, o / 2);
        },
        inv: function(s, o) {
          return 2 * e.gammapinv(s, 0.5 * o);
        },
        mean: function(s) {
          return s;
        },
        // TODO: this is an approximation (is there a better way?)
        median: function(o) {
          return o * i.pow(1 - 2 / (9 * o), 3);
        },
        mode: function(o) {
          return o - 2 > 0 ? o - 2 : 0;
        },
        sample: function(o) {
          return e.randg(o / 2) * 2;
        },
        variance: function(o) {
          return 2 * o;
        }
      }), e.extend(e.exponential, {
        pdf: function(o, f) {
          return o < 0 ? 0 : f * i.exp(-f * o);
        },
        cdf: function(o, f) {
          return o < 0 ? 0 : 1 - i.exp(-f * o);
        },
        inv: function(s, o) {
          return -i.log(1 - s) / o;
        },
        mean: function(s) {
          return 1 / s;
        },
        median: function(s) {
          return 1 / s * i.log(2);
        },
        mode: function() {
          return 0;
        },
        sample: function(o) {
          return -1 / o * i.log(e._random_fn());
        },
        variance: function(s) {
          return i.pow(s, -2);
        }
      }), e.extend(e.gamma, {
        pdf: function(o, f, u) {
          return o < 0 ? 0 : o === 0 && f === 1 ? 1 / u : i.exp((f - 1) * i.log(o) - o / u - e.gammaln(f) - f * i.log(u));
        },
        cdf: function(o, f, u) {
          return o < 0 ? 0 : e.lowRegGamma(f, o / u);
        },
        inv: function(s, o, f) {
          return e.gammapinv(s, o) * f;
        },
        mean: function(s, o) {
          return s * o;
        },
        mode: function(o, f) {
          if (o > 1)
            return (o - 1) * f;
        },
        sample: function(o, f) {
          return e.randg(o) * f;
        },
        variance: function(o, f) {
          return o * f * f;
        }
      }), e.extend(e.invgamma, {
        pdf: function(o, f, u) {
          return o <= 0 ? 0 : i.exp(-(f + 1) * i.log(o) - u / o - e.gammaln(f) + f * i.log(u));
        },
        cdf: function(o, f, u) {
          return o <= 0 ? 0 : 1 - e.lowRegGamma(f, u / o);
        },
        inv: function(s, o, f) {
          return f / e.gammapinv(1 - s, o);
        },
        mean: function(s, o) {
          return s > 1 ? o / (s - 1) : void 0;
        },
        mode: function(o, f) {
          return f / (o + 1);
        },
        sample: function(o, f) {
          return f / e.randg(o);
        },
        variance: function(o, f) {
          if (!(o <= 2))
            return f * f / ((o - 1) * (o - 1) * (o - 2));
        }
      }), e.extend(e.kumaraswamy, {
        pdf: function(o, f, u) {
          return o === 0 && f === 1 ? u : o === 1 && u === 1 ? f : i.exp(i.log(f) + i.log(u) + (f - 1) * i.log(o) + (u - 1) * i.log(1 - i.pow(o, f)));
        },
        cdf: function(o, f, u) {
          return o < 0 ? 0 : o > 1 ? 1 : 1 - i.pow(1 - i.pow(o, f), u);
        },
        inv: function(o, f, u) {
          return i.pow(1 - i.pow(1 - o, 1 / u), 1 / f);
        },
        mean: function(s, o) {
          return o * e.gammafn(1 + 1 / s) * e.gammafn(o) / e.gammafn(1 + 1 / s + o);
        },
        median: function(o, f) {
          return i.pow(1 - i.pow(2, -1 / f), 1 / o);
        },
        mode: function(o, f) {
          if (o >= 1 && f >= 1 && o !== 1 && f !== 1)
            return i.pow((o - 1) / (o * f - 1), 1 / o);
        },
        variance: function() {
          throw new Error("variance not yet implemented");
        }
      }), e.extend(e.lognormal, {
        pdf: function(o, f, u) {
          return o <= 0 ? 0 : i.exp(-i.log(o) - 0.5 * i.log(2 * i.PI) - i.log(u) - i.pow(i.log(o) - f, 2) / (2 * u * u));
        },
        cdf: function(o, f, u) {
          return o < 0 ? 0 : 0.5 + 0.5 * e.erf((i.log(o) - f) / i.sqrt(2 * u * u));
        },
        inv: function(s, o, f) {
          return i.exp(-1.4142135623730951 * f * e.erfcinv(2 * s) + o);
        },
        mean: function(o, f) {
          return i.exp(o + f * f / 2);
        },
        median: function(o) {
          return i.exp(o);
        },
        mode: function(o, f) {
          return i.exp(o - f * f);
        },
        sample: function(o, f) {
          return i.exp(e.randn() * f + o);
        },
        variance: function(o, f) {
          return (i.exp(f * f) - 1) * i.exp(2 * o + f * f);
        }
      }), e.extend(e.noncentralt, {
        pdf: function(o, f, u) {
          var l = 1e-14;
          return i.abs(u) < l ? e.studentt.pdf(o, f) : i.abs(o) < l ? i.exp(e.gammaln((f + 1) / 2) - u * u / 2 - 0.5 * i.log(i.PI * f) - e.gammaln(f / 2)) : f / o * (e.noncentralt.cdf(o * i.sqrt(1 + 2 / f), f + 2, u) - e.noncentralt.cdf(o, f, u));
        },
        cdf: function(o, f, u) {
          var l = 1e-14, a = 200;
          if (i.abs(u) < l)
            return e.studentt.cdf(o, f);
          var h = !1;
          o < 0 && (h = !0, u = -u);
          for (var v = e.normal.cdf(-u, 0, 1), I = l + 1, T = I, d = o * o / (o * o + f), w = 0, A = i.exp(-u * u / 2), D = i.exp(-u * u / 2 - 0.5 * i.log(2) - e.gammaln(3 / 2)) * u; w < a || T > l || I > l; )
            T = I, w > 0 && (A *= u * u / (2 * w), D *= u * u / (2 * (w + 1 / 2))), I = A * e.beta.cdf(d, w + 0.5, f / 2) + D * e.beta.cdf(d, w + 1, f / 2), v += 0.5 * I, w++;
          return h ? 1 - v : v;
        }
      }), e.extend(e.normal, {
        pdf: function(o, f, u) {
          return i.exp(-0.5 * i.log(2 * i.PI) - i.log(u) - i.pow(o - f, 2) / (2 * u * u));
        },
        cdf: function(o, f, u) {
          return 0.5 * (1 + e.erf((o - f) / i.sqrt(2 * u * u)));
        },
        inv: function(s, o, f) {
          return -1.4142135623730951 * f * e.erfcinv(2 * s) + o;
        },
        mean: function(s) {
          return s;
        },
        median: function(o) {
          return o;
        },
        mode: function(s) {
          return s;
        },
        sample: function(o, f) {
          return e.randn() * f + o;
        },
        variance: function(s, o) {
          return o * o;
        }
      }), e.extend(e.pareto, {
        pdf: function(o, f, u) {
          return o < f ? 0 : u * i.pow(f, u) / i.pow(o, u + 1);
        },
        cdf: function(o, f, u) {
          return o < f ? 0 : 1 - i.pow(f / o, u);
        },
        inv: function(o, f, u) {
          return f / i.pow(1 - o, 1 / u);
        },
        mean: function(o, f) {
          if (!(f <= 1))
            return f * i.pow(o, f) / (f - 1);
        },
        median: function(o, f) {
          return o * (f * i.SQRT2);
        },
        mode: function(o) {
          return o;
        },
        variance: function(s, o) {
          if (!(o <= 2))
            return s * s * o / (i.pow(o - 1, 2) * (o - 2));
        }
      }), e.extend(e.studentt, {
        pdf: function(o, f) {
          return f = f > 1e100 ? 1e100 : f, 1 / (i.sqrt(f) * e.betafn(0.5, f / 2)) * i.pow(1 + o * o / f, -((f + 1) / 2));
        },
        cdf: function(o, f) {
          var u = f / 2;
          return e.ibeta((o + i.sqrt(o * o + f)) / (2 * i.sqrt(o * o + f)), u, u);
        },
        inv: function(s, o) {
          var f = e.ibetainv(2 * i.min(s, 1 - s), 0.5 * o, 0.5);
          return f = i.sqrt(o * (1 - f) / f), s > 0.5 ? f : -f;
        },
        mean: function(o) {
          return o > 1 ? 0 : void 0;
        },
        median: function() {
          return 0;
        },
        mode: function() {
          return 0;
        },
        sample: function(o) {
          return e.randn() * i.sqrt(o / (2 * e.randg(o / 2)));
        },
        variance: function(o) {
          return o > 2 ? o / (o - 2) : o > 1 ? 1 / 0 : void 0;
        }
      }), e.extend(e.weibull, {
        pdf: function(o, f, u) {
          return o < 0 || f < 0 || u < 0 ? 0 : u / f * i.pow(o / f, u - 1) * i.exp(-i.pow(o / f, u));
        },
        cdf: function(o, f, u) {
          return o < 0 ? 0 : 1 - i.exp(-i.pow(o / f, u));
        },
        inv: function(s, o, f) {
          return o * i.pow(-i.log(1 - s), 1 / f);
        },
        mean: function(s, o) {
          return s * e.gammafn(1 + 1 / o);
        },
        median: function(o, f) {
          return o * i.pow(i.log(2), 1 / f);
        },
        mode: function(o, f) {
          return f <= 1 ? 0 : o * i.pow((f - 1) / f, 1 / f);
        },
        sample: function(o, f) {
          return o * i.pow(-i.log(e._random_fn()), 1 / f);
        },
        variance: function(o, f) {
          return o * o * e.gammafn(1 + 2 / f) - i.pow(e.weibull.mean(o, f), 2);
        }
      }), e.extend(e.uniform, {
        pdf: function(o, f, u) {
          return o < f || o > u ? 0 : 1 / (u - f);
        },
        cdf: function(o, f, u) {
          return o < f ? 0 : o < u ? (o - f) / (u - f) : 1;
        },
        inv: function(s, o, f) {
          return o + s * (f - o);
        },
        mean: function(o, f) {
          return 0.5 * (o + f);
        },
        median: function(o, f) {
          return e.mean(o, f);
        },
        mode: function() {
          throw new Error("mode is not yet implemented");
        },
        sample: function(o, f) {
          return o / 2 + f / 2 + (f / 2 - o / 2) * (2 * e._random_fn() - 1);
        },
        variance: function(o, f) {
          return i.pow(f - o, 2) / 12;
        }
      });
      function c(s, o, f, u) {
        for (var l = 0, a = 1, h = 1, v = 1, I = 0, T = 0, d; i.abs((h - T) / h) > u; )
          T = h, d = -(o + I) * (o + f + I) * s / (o + 2 * I) / (o + 2 * I + 1), l = h + d * l, a = v + d * a, I = I + 1, d = I * (f - I) * s / (o + 2 * I - 1) / (o + 2 * I), h = l + d * h, v = a + d * v, l = l / v, a = a / v, h = h / v, v = 1;
        return h / o;
      }
      e.extend(e.binomial, {
        pdf: function(o, f, u) {
          return u === 0 || u === 1 ? f * u === o ? 1 : 0 : e.combination(f, o) * i.pow(u, o) * i.pow(1 - u, f - o);
        },
        cdf: function(o, f, u) {
          var l, a = 1e-10;
          if (o < 0)
            return 0;
          if (o >= f)
            return 1;
          if (u < 0 || u > 1 || f <= 0)
            return NaN;
          o = i.floor(o);
          var h = u, v = o + 1, I = f - o, T = v + I, d = i.exp(e.gammaln(T) - e.gammaln(I) - e.gammaln(v) + v * i.log(h) + I * i.log(1 - h));
          return h < (v + 1) / (T + 2) ? l = d * c(h, v, I, a) : l = 1 - d * c(1 - h, I, v, a), i.round((1 - l) * (1 / a)) / (1 / a);
        }
      }), e.extend(e.negbin, {
        pdf: function(o, f, u) {
          return o !== o >>> 0 ? !1 : o < 0 ? 0 : e.combination(o + f - 1, f - 1) * i.pow(1 - u, o) * i.pow(u, f);
        },
        cdf: function(o, f, u) {
          var l = 0, a = 0;
          if (o < 0)
            return 0;
          for (; a <= o; a++)
            l += e.negbin.pdf(a, f, u);
          return l;
        }
      }), e.extend(e.hypgeom, {
        pdf: function(o, f, u, l) {
          if (o !== o | 0)
            return !1;
          if (o < 0 || o < u - (f - l))
            return 0;
          if (o > l || o > u)
            return 0;
          if (u * 2 > f)
            return l * 2 > f ? e.hypgeom.pdf(f - u - l + o, f, f - u, f - l) : e.hypgeom.pdf(l - o, f, f - u, l);
          if (l * 2 > f)
            return e.hypgeom.pdf(u - o, f, u, f - l);
          if (u < l)
            return e.hypgeom.pdf(o, f, l, u);
          for (var a = 1, h = 0, v = 0; v < o; v++) {
            for (; a > 1 && h < l; )
              a *= 1 - u / (f - h), h++;
            a *= (l - v) * (u - v) / ((v + 1) * (f - u - l + v + 1));
          }
          for (; h < l; h++)
            a *= 1 - u / (f - h);
          return i.min(1, i.max(0, a));
        },
        cdf: function(o, f, u, l) {
          if (o < 0 || o < u - (f - l))
            return 0;
          if (o >= l || o >= u)
            return 1;
          if (u * 2 > f)
            return l * 2 > f ? e.hypgeom.cdf(f - u - l + o, f, f - u, f - l) : 1 - e.hypgeom.cdf(l - o - 1, f, f - u, l);
          if (l * 2 > f)
            return 1 - e.hypgeom.cdf(u - o - 1, f, u, f - l);
          if (u < l)
            return e.hypgeom.cdf(o, f, l, u);
          for (var a = 1, h = 1, v = 0, I = 0; I < o; I++) {
            for (; a > 1 && v < l; ) {
              var T = 1 - u / (f - v);
              h *= T, a *= T, v++;
            }
            h *= (l - I) * (u - I) / ((I + 1) * (f - u - l + I + 1)), a += h;
          }
          for (; v < l; v++)
            a *= 1 - u / (f - v);
          return i.min(1, i.max(0, a));
        }
      }), e.extend(e.poisson, {
        pdf: function(o, f) {
          return f < 0 || o % 1 !== 0 || o < 0 ? 0 : i.pow(f, o) * i.exp(-f) / e.factorial(o);
        },
        cdf: function(o, f) {
          var u = [], l = 0;
          if (o < 0)
            return 0;
          for (; l <= o; l++)
            u.push(e.poisson.pdf(l, f));
          return e.sum(u);
        },
        mean: function(s) {
          return s;
        },
        variance: function(s) {
          return s;
        },
        sampleSmall: function(o) {
          var f = 1, u = 0, l = i.exp(-o);
          do
            u++, f *= e._random_fn();
          while (f > l);
          return u - 1;
        },
        sampleLarge: function(o) {
          var f = o, u, l, a, h, v, I, T, d, w, A;
          for (h = i.sqrt(f), v = i.log(f), T = 0.931 + 2.53 * h, I = -0.059 + 0.02483 * T, d = 1.1239 + 1.1328 / (T - 3.4), w = 0.9277 - 3.6224 / (T - 2); ; ) {
            if (l = i.random() - 0.5, a = i.random(), A = 0.5 - i.abs(l), u = i.floor((2 * I / A + T) * l + f + 0.43), A >= 0.07 && a <= w)
              return u;
            if (!(u < 0 || A < 0.013 && a > A) && i.log(a) + i.log(d) - i.log(I / (A * A) + T) <= -f + u * v - e.loggam(u + 1))
              return u;
          }
        },
        sample: function(o) {
          return o < 10 ? this.sampleSmall(o) : this.sampleLarge(o);
        }
      }), e.extend(e.triangular, {
        pdf: function(o, f, u, l) {
          return u <= f || l < f || l > u ? NaN : o < f || o > u ? 0 : o < l ? 2 * (o - f) / ((u - f) * (l - f)) : o === l ? 2 / (u - f) : 2 * (u - o) / ((u - f) * (u - l));
        },
        cdf: function(o, f, u, l) {
          return u <= f || l < f || l > u ? NaN : o <= f ? 0 : o >= u ? 1 : o <= l ? i.pow(o - f, 2) / ((u - f) * (l - f)) : 1 - i.pow(u - o, 2) / ((u - f) * (u - l));
        },
        inv: function(o, f, u, l) {
          return u <= f || l < f || l > u ? NaN : o <= (l - f) / (u - f) ? f + (u - f) * i.sqrt(o * ((l - f) / (u - f))) : f + (u - f) * (1 - i.sqrt((1 - o) * (1 - (l - f) / (u - f))));
        },
        mean: function(o, f, u) {
          return (o + f + u) / 3;
        },
        median: function(o, f, u) {
          if (u <= (o + f) / 2)
            return f - i.sqrt((f - o) * (f - u)) / i.sqrt(2);
          if (u > (o + f) / 2)
            return o + i.sqrt((f - o) * (u - o)) / i.sqrt(2);
        },
        mode: function(o, f, u) {
          return u;
        },
        sample: function(o, f, u) {
          var l = e._random_fn();
          return l < (u - o) / (f - o) ? o + i.sqrt(l * (f - o) * (u - o)) : f - i.sqrt((1 - l) * (f - o) * (f - u));
        },
        variance: function(o, f, u) {
          return (o * o + f * f + u * u - o * f - o * u - f * u) / 18;
        }
      }), e.extend(e.arcsine, {
        pdf: function(o, f, u) {
          return u <= f ? NaN : o <= f || o >= u ? 0 : 2 / i.PI * i.pow(i.pow(u - f, 2) - i.pow(2 * o - f - u, 2), -0.5);
        },
        cdf: function(o, f, u) {
          return o < f ? 0 : o < u ? 2 / i.PI * i.asin(i.sqrt((o - f) / (u - f))) : 1;
        },
        inv: function(s, o, f) {
          return o + (0.5 - 0.5 * i.cos(i.PI * s)) * (f - o);
        },
        mean: function(o, f) {
          return f <= o ? NaN : (o + f) / 2;
        },
        median: function(o, f) {
          return f <= o ? NaN : (o + f) / 2;
        },
        mode: function() {
          throw new Error("mode is not yet implemented");
        },
        sample: function(o, f) {
          return (o + f) / 2 + (f - o) / 2 * i.sin(2 * i.PI * e.uniform.sample(0, 1));
        },
        variance: function(o, f) {
          return f <= o ? NaN : i.pow(f - o, 2) / 8;
        }
      });
      function g(s) {
        return s / i.abs(s);
      }
      e.extend(e.laplace, {
        pdf: function(o, f, u) {
          return u <= 0 ? 0 : i.exp(-i.abs(o - f) / u) / (2 * u);
        },
        cdf: function(o, f, u) {
          return u <= 0 ? 0 : o < f ? 0.5 * i.exp((o - f) / u) : 1 - 0.5 * i.exp(-(o - f) / u);
        },
        mean: function(s) {
          return s;
        },
        median: function(s) {
          return s;
        },
        mode: function(s) {
          return s;
        },
        variance: function(s, o) {
          return 2 * o * o;
        },
        sample: function(o, f) {
          var u = e._random_fn() - 0.5;
          return o - f * g(u) * i.log(1 - 2 * i.abs(u));
        }
      });
      function p(s, o, f) {
        var u = 12, l = 6, a = -30, h = -50, v = 60, I = 8, T = 3, d = 2, w = 3, A = [
          0.9815606342467192,
          0.9041172563704749,
          0.7699026741943047,
          0.5873179542866175,
          0.3678314989981802,
          0.1252334085114689
        ], D = [
          0.04717533638651183,
          0.10693932599531843,
          0.16007832854334622,
          0.20316742672306592,
          0.2334925365383548,
          0.24914704581340277
        ], O = s * 0.5;
        if (O >= I)
          return 1;
        var M = 2 * e.normal.cdf(O, 0, 1, 1, 0) - 1;
        M >= i.exp(h / f) ? M = i.pow(M, f) : M = 0;
        var P;
        s > T ? P = d : P = w;
        for (var V = O, H = (I - O) / P, Q = V + H, W = 0, X = f - 1, sn = 1; sn <= P; sn++) {
          for (var tn = 0, k = 0.5 * (Q + V), Tn = 0.5 * (Q - V), ln = 1; ln <= u; ln++) {
            var cn, gn;
            l < ln ? (cn = u - ln + 1, gn = A[cn - 1]) : (cn = ln, gn = -A[cn - 1]);
            var dn = Tn * gn, x = k + dn, wn = x * x;
            if (wn > v)
              break;
            var zn = 2 * e.normal.cdf(x, 0, 1, 1, 0), vr = 2 * e.normal.cdf(x, s, 1, 1, 0), Un = zn * 0.5 - vr * 0.5;
            Un >= i.exp(a / X) && (Un = D[cn - 1] * i.exp(-(0.5 * wn)) * i.pow(Un, X), tn += Un);
          }
          tn *= 2 * Tn * f / i.sqrt(2 * i.PI), W += tn, V = Q, Q += H;
        }
        return M += W, M <= i.exp(a / o) ? 0 : (M = i.pow(M, o), M >= 1 ? 1 : M);
      }
      function E(s, o, f) {
        var u = 0.322232421088, l = 0.099348462606, a = -1, h = 0.588581570495, v = -0.342242088547, I = 0.531103462366, T = -0.204231210125, d = 0.10353775285, w = -453642210148e-16, A = 0.0038560700634, D = 0.8832, O = 0.2368, M = 1.214, P = 1.208, V = 1.4142, H = 120, Q = 0.5 - 0.5 * s, W = i.sqrt(i.log(1 / (Q * Q))), X = W + ((((W * w + T) * W + v) * W + a) * W + u) / ((((W * A + d) * W + I) * W + h) * W + l);
        f < H && (X += (X * X * X + X) / f / 4);
        var sn = D - O * X;
        return f < H && (sn += -M / f + P * X / f), X * (sn * i.log(o - 1) + V);
      }
      e.extend(e.tukey, {
        cdf: function(o, f, u) {
          var l = 1, a = f, h = 16, v = 8, I = -30, T = 1e-14, d = 100, w = 800, A = 5e3, D = 25e3, O = 1, M = 0.5, P = 0.25, V = 0.125, H = [
            0.9894009349916499,
            0.9445750230732326,
            0.8656312023878318,
            0.755404408355003,
            0.6178762444026438,
            0.45801677765722737,
            0.2816035507792589,
            0.09501250983763744
          ], Q = [
            0.027152459411754096,
            0.062253523938647894,
            0.09515851168249279,
            0.12462897125553388,
            0.14959598881657674,
            0.16915651939500254,
            0.18260341504492358,
            0.1894506104550685
          ];
          if (o <= 0)
            return 0;
          if (u < 2 || l < 1 || a < 2)
            return NaN;
          if (!Number.isFinite(o))
            return 1;
          if (u > D)
            return p(o, l, a);
          var W = u * 0.5, X = W * i.log(u) - u * i.log(2) - e.gammaln(W), sn = W - 1, tn = u * 0.25, k;
          u <= d ? k = O : u <= w ? k = M : u <= A ? k = P : k = V, X += i.log(k);
          for (var Tn = 0, ln = 1; ln <= 50; ln++) {
            for (var cn = 0, gn = (2 * ln - 1) * k, dn = 1; dn <= h; dn++) {
              var x, wn;
              v < dn ? (x = dn - v - 1, wn = X + sn * i.log(gn + H[x] * k) - (H[x] * k + gn) * tn) : (x = dn - 1, wn = X + sn * i.log(gn - H[x] * k) + (H[x] * k - gn) * tn);
              var zn;
              if (wn >= I) {
                v < dn ? zn = o * i.sqrt((H[x] * k + gn) * 0.5) : zn = o * i.sqrt((-(H[x] * k) + gn) * 0.5);
                var vr = p(zn, l, a), Un = vr * Q[x] * i.exp(wn);
                cn += Un;
              }
            }
            if (ln * k >= 1 && cn <= T)
              break;
            Tn += cn;
          }
          if (cn > T)
            throw new Error("tukey.cdf failed to converge");
          return Tn > 1 && (Tn = 1), Tn;
        },
        inv: function(s, o, f) {
          var u = 1, l = o, a = 1e-4, h = 50;
          if (f < 2 || u < 1 || l < 2)
            return NaN;
          if (s < 0 || s > 1)
            return NaN;
          if (s === 0)
            return 0;
          if (s === 1)
            return 1 / 0;
          var v = E(s, l, f), I = e.tukey.cdf(v, o, f) - s, T;
          I > 0 ? T = i.max(0, v - 1) : T = v + 1;
          for (var d = e.tukey.cdf(T, o, f) - s, w, A = 1; A < h; A++) {
            w = T - d * (T - v) / (d - I), I = d, v = T, w < 0 && (w = 0, d = -s), d = e.tukey.cdf(w, o, f) - s, T = w;
            var D = i.abs(T - v);
            if (D < a)
              return w;
          }
          throw new Error("tukey.inv failed to converge");
        }
      });
    }(t, Math), function(e, i) {
      var c = Array.prototype.push, g = e.utils.isArray;
      function p(E) {
        return g(E) || E instanceof e;
      }
      e.extend({
        // add a vector/matrix to a vector/matrix or scalar
        add: function(s, o) {
          return p(o) ? (p(o[0]) || (o = [o]), e.map(s, function(f, u, l) {
            return f + o[u][l];
          })) : e.map(s, function(f) {
            return f + o;
          });
        },
        // subtract a vector or scalar from the vector
        subtract: function(s, o) {
          return p(o) ? (p(o[0]) || (o = [o]), e.map(s, function(f, u, l) {
            return f - o[u][l] || 0;
          })) : e.map(s, function(f) {
            return f - o;
          });
        },
        // matrix division
        divide: function(s, o) {
          return p(o) ? (p(o[0]) || (o = [o]), e.multiply(s, e.inv(o))) : e.map(s, function(f) {
            return f / o;
          });
        },
        // matrix multiplication
        multiply: function(s, o) {
          var f, u, l, a, h, v, I, T;
          if (s.length === void 0 && o.length === void 0)
            return s * o;
          if (h = s.length, v = s[0].length, I = e.zeros(h, l = p(o) ? o[0].length : v), T = 0, p(o)) {
            for (; T < l; T++)
              for (f = 0; f < h; f++) {
                for (a = 0, u = 0; u < v; u++)
                  a += s[f][u] * o[u][T];
                I[f][T] = a;
              }
            return h === 1 && T === 1 ? I[0][0] : I;
          }
          return e.map(s, function(d) {
            return d * o;
          });
        },
        // outer([1,2,3],[4,5,6])
        // ===
        // [[1],[2],[3]] times [[4,5,6]]
        // ->
        // [[4,5,6],[8,10,12],[12,15,18]]
        outer: function(s, o) {
          return e.multiply(s.map(function(f) {
            return [f];
          }), [o]);
        },
        // Returns the dot product of two matricies
        dot: function(s, o) {
          p(s[0]) || (s = [s]), p(o[0]) || (o = [o]);
          for (var f = s[0].length === 1 && s.length !== 1 ? e.transpose(s) : s, u = o[0].length === 1 && o.length !== 1 ? e.transpose(o) : o, l = [], a = 0, h = f.length, v = f[0].length, I, T; a < h; a++) {
            for (l[a] = [], I = 0, T = 0; T < v; T++)
              I += f[a][T] * u[a][T];
            l[a] = I;
          }
          return l.length === 1 ? l[0] : l;
        },
        // raise every element by a scalar
        pow: function(s, o) {
          return e.map(s, function(f) {
            return i.pow(f, o);
          });
        },
        // exponentiate every element
        exp: function(s) {
          return e.map(s, function(o) {
            return i.exp(o);
          });
        },
        // generate the natural log of every element
        log: function(s) {
          return e.map(s, function(o) {
            return i.log(o);
          });
        },
        // generate the absolute values of the vector
        abs: function(s) {
          return e.map(s, function(o) {
            return i.abs(o);
          });
        },
        // computes the p-norm of the vector
        // In the case that a matrix is passed, uses the first row as the vector
        norm: function(s, o) {
          var f = 0, u = 0;
          for (isNaN(o) && (o = 2), p(s[0]) && (s = s[0]); u < s.length; u++)
            f += i.pow(i.abs(s[u]), o);
          return i.pow(f, 1 / o);
        },
        // computes the angle between two vectors in rads
        // In case a matrix is passed, this uses the first row as the vector
        angle: function(s, o) {
          return i.acos(e.dot(s, o) / (e.norm(s) * e.norm(o)));
        },
        // augment one matrix by another
        // Note: this function returns a matrix, not a jStat object
        aug: function(s, o) {
          var f = [], u;
          for (u = 0; u < s.length; u++)
            f.push(s[u].slice());
          for (u = 0; u < f.length; u++)
            c.apply(f[u], o[u]);
          return f;
        },
        // The inv() function calculates the inverse of a matrix
        // Create the inverse by augmenting the matrix by the identity matrix of the
        // appropriate size, and then use G-J elimination on the augmented matrix.
        inv: function(s) {
          for (var o = s.length, f = s[0].length, u = e.identity(o, f), l = e.gauss_jordan(s, u), a = [], h = 0, v; h < o; h++)
            for (a[h] = [], v = f; v < l[0].length; v++)
              a[h][v - f] = l[h][v];
          return a;
        },
        // calculate the determinant of a matrix
        det: function E(s) {
          if (s.length === 2)
            return s[0][0] * s[1][1] - s[0][1] * s[1][0];
          for (var o = 0, f = 0; f < s.length; f++) {
            for (var u = [], l = 1; l < s.length; l++) {
              u[l - 1] = [];
              for (var a = 0; a < s.length; a++)
                a < f ? u[l - 1][a] = s[l][a] : a > f && (u[l - 1][a - 1] = s[l][a]);
            }
            var h = f % 2 ? -1 : 1;
            o += E(u) * s[0][f] * h;
          }
          return o;
        },
        gauss_elimination: function(s, o) {
          var f = 0, u = 0, l = s.length, a = s[0].length, h = 1, v = 0, I = [], T, d, w, A;
          for (s = e.aug(s, o), T = s[0].length, f = 0; f < l; f++) {
            for (d = s[f][f], u = f, A = f + 1; A < a; A++)
              d < i.abs(s[A][f]) && (d = s[A][f], u = A);
            if (u != f)
              for (A = 0; A < T; A++)
                w = s[f][A], s[f][A] = s[u][A], s[u][A] = w;
            for (u = f + 1; u < l; u++)
              for (h = s[u][f] / s[f][f], A = f; A < T; A++)
                s[u][A] = s[u][A] - h * s[f][A];
          }
          for (f = l - 1; f >= 0; f--) {
            for (v = 0, u = f + 1; u <= l - 1; u++)
              v = v + I[u] * s[f][u];
            I[f] = (s[f][T - 1] - v) / s[f][f];
          }
          return I;
        },
        gauss_jordan: function(s, o) {
          var f = e.aug(s, o), u = f.length, l = f[0].length, a = 0, h, v, I;
          for (v = 0; v < u; v++) {
            var T = v;
            for (I = v + 1; I < u; I++)
              i.abs(f[I][v]) > i.abs(f[T][v]) && (T = I);
            var d = f[v];
            for (f[v] = f[T], f[T] = d, I = v + 1; I < u; I++)
              for (a = f[I][v] / f[v][v], h = v; h < l; h++)
                f[I][h] -= f[v][h] * a;
          }
          for (v = u - 1; v >= 0; v--) {
            for (a = f[v][v], I = 0; I < v; I++)
              for (h = l - 1; h > v - 1; h--)
                f[I][h] -= f[v][h] * f[I][v] / a;
            for (f[v][v] /= a, h = u; h < l; h++)
              f[v][h] /= a;
          }
          return f;
        },
        // solve equation
        // Ax=b
        // A is upper triangular matrix
        // A=[[1,2,3],[0,4,5],[0,6,7]]
        // b=[1,2,3]
        // triaUpSolve(A,b) // -> [2.666,0.1666,1.666]
        // if you use matrix style
        // A=[[1,2,3],[0,4,5],[0,6,7]]
        // b=[[1],[2],[3]]
        // will return [[2.666],[0.1666],[1.666]]
        triaUpSolve: function(s, o) {
          var f = s[0].length, u = e.zeros(1, f)[0], l, a = !1;
          return o[0].length != null && (o = o.map(function(h) {
            return h[0];
          }), a = !0), e.arange(f - 1, -1, -1).forEach(function(h) {
            l = e.arange(h + 1, f).map(function(v) {
              return u[v] * s[h][v];
            }), u[h] = (o[h] - e.sum(l)) / s[h][h];
          }), a ? u.map(function(h) {
            return [h];
          }) : u;
        },
        triaLowSolve: function(s, o) {
          var f = s[0].length, u = e.zeros(1, f)[0], l, a = !1;
          return o[0].length != null && (o = o.map(function(h) {
            return h[0];
          }), a = !0), e.arange(f).forEach(function(h) {
            l = e.arange(h).map(function(v) {
              return s[h][v] * u[v];
            }), u[h] = (o[h] - e.sum(l)) / s[h][h];
          }), a ? u.map(function(h) {
            return [h];
          }) : u;
        },
        // A -> [L,U]
        // A=LU
        // L is lower triangular matrix
        // U is upper triangular matrix
        lu: function(s) {
          var o = s.length, f = e.identity(o), u = e.zeros(s.length, s[0].length), l;
          return e.arange(o).forEach(function(a) {
            u[0][a] = s[0][a];
          }), e.arange(1, o).forEach(function(a) {
            e.arange(a).forEach(function(h) {
              l = e.arange(h).map(function(v) {
                return f[a][v] * u[v][h];
              }), f[a][h] = (s[a][h] - e.sum(l)) / u[h][h];
            }), e.arange(a, o).forEach(function(h) {
              l = e.arange(a).map(function(v) {
                return f[a][v] * u[v][h];
              }), u[a][h] = s[l.length][h] - e.sum(l);
            });
          }), [f, u];
        },
        // A -> T
        // A=TT'
        // T is lower triangular matrix
        cholesky: function(s) {
          var o = s.length, f = e.zeros(s.length, s[0].length), u;
          return e.arange(o).forEach(function(l) {
            u = e.arange(l).map(function(a) {
              return i.pow(f[l][a], 2);
            }), f[l][l] = i.sqrt(s[l][l] - e.sum(u)), e.arange(l + 1, o).forEach(function(a) {
              u = e.arange(l).map(function(h) {
                return f[l][h] * f[a][h];
              }), f[a][l] = (s[l][a] - e.sum(u)) / f[l][l];
            });
          }), f;
        },
        gauss_jacobi: function(s, o, f, u) {
          for (var l = 0, a = 0, h = s.length, v = [], I = [], T = [], d, w, A, D; l < h; l++)
            for (v[l] = [], I[l] = [], T[l] = [], a = 0; a < h; a++)
              l > a ? (v[l][a] = s[l][a], I[l][a] = T[l][a] = 0) : l < a ? (I[l][a] = s[l][a], v[l][a] = T[l][a] = 0) : (T[l][a] = s[l][a], v[l][a] = I[l][a] = 0);
          for (A = e.multiply(e.multiply(e.inv(T), e.add(v, I)), -1), w = e.multiply(e.inv(T), o), d = f, D = e.add(e.multiply(A, f), w), l = 2; i.abs(e.norm(e.subtract(D, d))) > u; )
            d = D, D = e.add(e.multiply(A, d), w), l++;
          return D;
        },
        gauss_seidel: function(s, o, f, u) {
          for (var l = 0, a = s.length, h = [], v = [], I = [], T, d, w, A, D; l < a; l++)
            for (h[l] = [], v[l] = [], I[l] = [], T = 0; T < a; T++)
              l > T ? (h[l][T] = s[l][T], v[l][T] = I[l][T] = 0) : l < T ? (v[l][T] = s[l][T], h[l][T] = I[l][T] = 0) : (I[l][T] = s[l][T], h[l][T] = v[l][T] = 0);
          for (A = e.multiply(e.multiply(e.inv(e.add(I, h)), v), -1), w = e.multiply(e.inv(e.add(I, h)), o), d = f, D = e.add(e.multiply(A, f), w), l = 2; i.abs(e.norm(e.subtract(D, d))) > u; )
            d = D, D = e.add(e.multiply(A, d), w), l = l + 1;
          return D;
        },
        SOR: function(s, o, f, u, l) {
          for (var a = 0, h = s.length, v = [], I = [], T = [], d, w, A, D, O; a < h; a++)
            for (v[a] = [], I[a] = [], T[a] = [], d = 0; d < h; d++)
              a > d ? (v[a][d] = s[a][d], I[a][d] = T[a][d] = 0) : a < d ? (I[a][d] = s[a][d], v[a][d] = T[a][d] = 0) : (T[a][d] = s[a][d], v[a][d] = I[a][d] = 0);
          for (D = e.multiply(
            e.inv(e.add(T, e.multiply(v, l))),
            e.subtract(
              e.multiply(T, 1 - l),
              e.multiply(I, l)
            )
          ), A = e.multiply(e.multiply(e.inv(e.add(
            T,
            e.multiply(v, l)
          )), o), l), w = f, O = e.add(e.multiply(D, f), A), a = 2; i.abs(e.norm(e.subtract(O, w))) > u; )
            w = O, O = e.add(e.multiply(D, w), A), a++;
          return O;
        },
        householder: function(s) {
          for (var o = s.length, f = s[0].length, u = 0, l = [], a = [], h, v, I, T, d; u < o - 1; u++) {
            for (h = 0, T = u + 1; T < f; T++)
              h += s[T][u] * s[T][u];
            for (d = s[u + 1][u] > 0 ? -1 : 1, h = d * i.sqrt(h), v = i.sqrt((h * h - s[u + 1][u] * h) / 2), l = e.zeros(o, 1), l[u + 1][0] = (s[u + 1][u] - h) / (2 * v), I = u + 2; I < o; I++)
              l[I][0] = s[I][u] / (2 * v);
            a = e.subtract(
              e.identity(o, f),
              e.multiply(e.multiply(l, e.transpose(l)), 2)
            ), s = e.multiply(a, e.multiply(s, a));
          }
          return s;
        },
        // A -> [Q,R]
        // Q is orthogonal matrix
        // R is upper triangular
        QR: function() {
          var E = e.sum, s = e.arange;
          function o(f) {
            var u = f.length, l = f[0].length, a = e.zeros(l, l);
            f = e.copy(f);
            var h, v, I;
            for (v = 0; v < l; v++) {
              for (a[v][v] = i.sqrt(E(s(u).map(function(T) {
                return f[T][v] * f[T][v];
              }))), h = 0; h < u; h++)
                f[h][v] = f[h][v] / a[v][v];
              for (I = v + 1; I < l; I++)
                for (a[v][I] = E(s(u).map(function(T) {
                  return f[T][v] * f[T][I];
                })), h = 0; h < u; h++)
                  f[h][I] = f[h][I] - f[h][v] * a[v][I];
            }
            return [f, a];
          }
          return o;
        }(),
        lstsq: function() {
          function E(o) {
            o = e.copy(o);
            var f = o.length, u = e.identity(f);
            return e.arange(f - 1, -1, -1).forEach(function(l) {
              e.sliceAssign(
                u,
                { row: l },
                e.divide(e.slice(u, { row: l }), o[l][l])
              ), e.sliceAssign(
                o,
                { row: l },
                e.divide(e.slice(o, { row: l }), o[l][l])
              ), e.arange(l).forEach(function(a) {
                var h = e.multiply(o[a][l], -1), v = e.slice(o, { row: a }), I = e.multiply(e.slice(o, { row: l }), h);
                e.sliceAssign(o, { row: a }, e.add(v, I));
                var T = e.slice(u, { row: a }), d = e.multiply(e.slice(u, { row: l }), h);
                e.sliceAssign(u, { row: a }, e.add(T, d));
              });
            }), u;
          }
          function s(o, f) {
            var u = !1;
            f[0].length === void 0 && (f = f.map(function(D) {
              return [D];
            }), u = !0);
            var l = e.QR(o), a = l[0], h = l[1], v = o[0].length, I = e.slice(a, { col: { end: v } }), T = e.slice(h, { row: { end: v } }), d = E(T), w = e.transpose(I);
            w[0].length === void 0 && (w = [w]);
            var A = e.multiply(e.multiply(d, w), f);
            return A.length === void 0 && (A = [[A]]), u ? A.map(function(D) {
              return D[0];
            }) : A;
          }
          return s;
        }(),
        jacobi: function(s) {
          for (var o = 1, f = s.length, u = e.identity(f, f), l = [], a, h, v, I, T, d, w, A; o === 1; ) {
            for (d = s[0][1], I = 0, T = 1, h = 0; h < f; h++)
              for (v = 0; v < f; v++)
                h != v && d < i.abs(s[h][v]) && (d = i.abs(s[h][v]), I = h, T = v);
            for (s[I][I] === s[T][T] ? w = s[I][T] > 0 ? i.PI / 4 : -i.PI / 4 : w = i.atan(2 * s[I][T] / (s[I][I] - s[T][T])) / 2, A = e.identity(f, f), A[I][I] = i.cos(w), A[I][T] = -i.sin(w), A[T][I] = i.sin(w), A[T][T] = i.cos(w), u = e.multiply(u, A), a = e.multiply(e.multiply(e.inv(A), s), A), s = a, o = 0, h = 1; h < f; h++)
              for (v = 1; v < f; v++)
                h != v && i.abs(s[h][v]) > 1e-3 && (o = 1);
          }
          for (h = 0; h < f; h++)
            l.push(s[h][h]);
          return [u, l];
        },
        rungekutta: function(s, o, f, u, l, a) {
          var h, v, I, T, d;
          if (a === 2)
            for (; u <= f; )
              h = o * s(u, l), v = o * s(u + o, l + h), I = l + (h + v) / 2, l = I, u = u + o;
          if (a === 4)
            for (; u <= f; )
              h = o * s(u, l), v = o * s(u + o / 2, l + h / 2), T = o * s(u + o / 2, l + v / 2), d = o * s(u + o, l + T), I = l + (h + 2 * v + 2 * T + d) / 6, l = I, u = u + o;
          return l;
        },
        romberg: function(s, o, f, u) {
          for (var l = 0, a = (f - o) / 2, h = [], v = [], I = [], T, d, w, A, D; l < u / 2; ) {
            for (D = s(o), w = o, A = 0; w <= f; w = w + a, A++)
              h[A] = w;
            for (T = h.length, w = 1; w < T - 1; w++)
              D += (w % 2 !== 0 ? 4 : 2) * s(h[w]);
            D = a / 3 * (D + s(f)), I[l] = D, a /= 2, l++;
          }
          for (d = I.length, T = 1; d !== 1; ) {
            for (w = 0; w < d - 1; w++)
              v[w] = (i.pow(4, T) * I[w + 1] - I[w]) / (i.pow(4, T) - 1);
            d = v.length, I = v, v = [], T++;
          }
          return I;
        },
        richardson: function(s, o, f, u) {
          function l(O, M) {
            for (var P = 0, V = O.length, H; P < V; P++)
              O[P] === M && (H = P);
            return H;
          }
          for (var a = i.abs(f - s[l(s, f) + 1]), h = 0, v = [], I = [], T, d, w, A, D; u >= a; )
            T = l(s, f + u), d = l(s, f), v[h] = (o[T] - 2 * o[d] + o[2 * d - T]) / (u * u), u /= 2, h++;
          for (A = v.length, w = 1; A != 1; ) {
            for (D = 0; D < A - 1; D++)
              I[D] = (i.pow(4, w) * v[D + 1] - v[D]) / (i.pow(4, w) - 1);
            A = I.length, v = I, I = [], w++;
          }
          return v;
        },
        simpson: function(s, o, f, u) {
          for (var l = (f - o) / u, a = s(o), h = [], v = o, I = 0, T = 1, d; v <= f; v = v + l, I++)
            h[I] = v;
          for (d = h.length; T < d - 1; T++)
            a += (T % 2 !== 0 ? 4 : 2) * s(h[T]);
          return l / 3 * (a + s(f));
        },
        hermite: function(s, o, f, u) {
          for (var l = s.length, a = 0, h = 0, v = [], I = [], T = [], d = [], w; h < l; h++) {
            for (v[h] = 1, w = 0; w < l; w++)
              h != w && (v[h] *= (u - s[w]) / (s[h] - s[w]));
            for (I[h] = 0, w = 0; w < l; w++)
              h != w && (I[h] += 1 / (s[h] - s[w]));
            T[h] = (1 - 2 * (u - s[h]) * I[h]) * (v[h] * v[h]), d[h] = (u - s[h]) * (v[h] * v[h]), a += T[h] * o[h] + d[h] * f[h];
          }
          return a;
        },
        lagrange: function(s, o, f) {
          for (var u = 0, l = 0, a, h, v = s.length; l < v; l++) {
            for (h = o[l], a = 0; a < v; a++)
              l != a && (h *= (f - s[a]) / (s[l] - s[a]));
            u += h;
          }
          return u;
        },
        cubic_spline: function(s, o, f) {
          for (var u = s.length, l = 0, a, h = [], v = [], I = [], T = [], d = [], w = [], A = []; l < u - 1; l++)
            d[l] = s[l + 1] - s[l];
          for (I[0] = 0, l = 1; l < u - 1; l++)
            I[l] = 3 / d[l] * (o[l + 1] - o[l]) - 3 / d[l - 1] * (o[l] - o[l - 1]);
          for (l = 1; l < u - 1; l++)
            h[l] = [], v[l] = [], h[l][l - 1] = d[l - 1], h[l][l] = 2 * (d[l - 1] + d[l]), h[l][l + 1] = d[l], v[l][0] = I[l];
          for (T = e.multiply(e.inv(h), v), a = 0; a < u - 1; a++)
            w[a] = (o[a + 1] - o[a]) / d[a] - d[a] * (T[a + 1][0] + 2 * T[a][0]) / 3, A[a] = (T[a + 1][0] - T[a][0]) / (3 * d[a]);
          for (a = 0; a < u && !(s[a] > f); a++)
            ;
          return a -= 1, o[a] + (f - s[a]) * w[a] + e.sq(f - s[a]) * T[a] + (f - s[a]) * e.sq(f - s[a]) * A[a];
        },
        gauss_quadrature: function() {
          throw new Error("gauss_quadrature not yet implemented");
        },
        PCA: function(s) {
          var o = s.length, f = s[0].length, u = 0, l, a, h = [], v = [], I = [], T = [], d = [], w = [], A = [], D = [], O = [], M = [];
          for (u = 0; u < o; u++)
            h[u] = e.sum(s[u]) / f;
          for (u = 0; u < f; u++)
            for (A[u] = [], l = 0; l < o; l++)
              A[u][l] = s[l][u] - h[l];
          for (A = e.transpose(A), u = 0; u < o; u++)
            for (D[u] = [], l = 0; l < o; l++)
              D[u][l] = e.dot([A[u]], [A[l]]) / (f - 1);
          for (I = e.jacobi(D), O = I[0], v = I[1], M = e.transpose(O), u = 0; u < v.length; u++)
            for (l = u; l < v.length; l++)
              v[u] < v[l] && (a = v[u], v[u] = v[l], v[l] = a, T = M[u], M[u] = M[l], M[l] = T);
          for (w = e.transpose(A), u = 0; u < o; u++)
            for (d[u] = [], l = 0; l < w.length; l++)
              d[u][l] = e.dot([M[u]], [w[l]]);
          return [s, v, M, d];
        }
      }), function(E) {
        for (var s = 0; s < E.length; s++)
          (function(o) {
            e.fn[o] = function(f, u) {
              var l = this;
              return u ? (setTimeout(function() {
                u.call(l, e.fn[o].call(l, f));
              }, 15), this) : typeof e[o](this, f) == "number" ? e[o](this, f) : e(e[o](this, f));
            };
          })(E[s]);
      }("add divide multiply subtract dot pow exp log abs norm angle".split(" "));
    }(t, Math), function(e, i) {
      var c = [].slice, g = e.utils.isNumber, p = e.utils.isArray;
      e.extend({
        // 2 different parameter lists:
        // (value, mean, sd)
        // (value, array, flag)
        zscore: function() {
          var o = c.call(arguments);
          return g(o[1]) ? (o[0] - o[1]) / o[2] : (o[0] - e.mean(o[1])) / e.stdev(o[1], o[2]);
        },
        // 3 different paramter lists:
        // (value, mean, sd, sides)
        // (zscore, sides)
        // (value, array, sides, flag)
        ztest: function() {
          var o = c.call(arguments), f;
          return p(o[1]) ? (f = e.zscore(o[0], o[1], o[3]), o[2] === 1 ? e.normal.cdf(-i.abs(f), 0, 1) : e.normal.cdf(-i.abs(f), 0, 1) * 2) : o.length > 2 ? (f = e.zscore(o[0], o[1], o[2]), o[3] === 1 ? e.normal.cdf(-i.abs(f), 0, 1) : e.normal.cdf(-i.abs(f), 0, 1) * 2) : (f = o[0], o[1] === 1 ? e.normal.cdf(-i.abs(f), 0, 1) : e.normal.cdf(-i.abs(f), 0, 1) * 2);
        }
      }), e.extend(e.fn, {
        zscore: function(o, f) {
          return (o - this.mean()) / this.stdev(f);
        },
        ztest: function(o, f, u) {
          var l = i.abs(this.zscore(o, u));
          return f === 1 ? e.normal.cdf(-l, 0, 1) : e.normal.cdf(-l, 0, 1) * 2;
        }
      }), e.extend({
        // 2 parameter lists
        // (value, mean, sd, n)
        // (value, array)
        tscore: function() {
          var o = c.call(arguments);
          return o.length === 4 ? (o[0] - o[1]) / (o[2] / i.sqrt(o[3])) : (o[0] - e.mean(o[1])) / (e.stdev(o[1], !0) / i.sqrt(o[1].length));
        },
        // 3 different paramter lists:
        // (value, mean, sd, n, sides)
        // (tscore, n, sides)
        // (value, array, sides)
        ttest: function() {
          var o = c.call(arguments), f;
          return o.length === 5 ? (f = i.abs(e.tscore(o[0], o[1], o[2], o[3])), o[4] === 1 ? e.studentt.cdf(-f, o[3] - 1) : e.studentt.cdf(-f, o[3] - 1) * 2) : g(o[1]) ? (f = i.abs(o[0]), o[2] == 1 ? e.studentt.cdf(-f, o[1] - 1) : e.studentt.cdf(-f, o[1] - 1) * 2) : (f = i.abs(e.tscore(o[0], o[1])), o[2] == 1 ? e.studentt.cdf(-f, o[1].length - 1) : e.studentt.cdf(-f, o[1].length - 1) * 2);
        }
      }), e.extend(e.fn, {
        tscore: function(o) {
          return (o - this.mean()) / (this.stdev(!0) / i.sqrt(this.cols()));
        },
        ttest: function(o, f) {
          return f === 1 ? 1 - e.studentt.cdf(i.abs(this.tscore(o)), this.cols() - 1) : e.studentt.cdf(-i.abs(this.tscore(o)), this.cols() - 1) * 2;
        }
      }), e.extend({
        // Paramter list is as follows:
        // (array1, array2, array3, ...)
        // or it is an array of arrays
        // array of arrays conversion
        anovafscore: function() {
          var o = c.call(arguments), f, u, l, a, h, v, I, T;
          if (o.length === 1) {
            for (h = new Array(o[0].length), I = 0; I < o[0].length; I++)
              h[I] = o[0][I];
            o = h;
          }
          for (u = new Array(), I = 0; I < o.length; I++)
            u = u.concat(o[I]);
          for (l = e.mean(u), f = 0, I = 0; I < o.length; I++)
            f = f + o[I].length * i.pow(e.mean(o[I]) - l, 2);
          for (f /= o.length - 1, v = 0, I = 0; I < o.length; I++)
            for (a = e.mean(o[I]), T = 0; T < o[I].length; T++)
              v += i.pow(o[I][T] - a, 2);
          return v /= u.length - o.length, f / v;
        },
        // 2 different paramter setups
        // (array1, array2, array3, ...)
        // (anovafscore, df1, df2)
        anovaftest: function() {
          var o = c.call(arguments), f, u, l, a;
          if (g(o[0]))
            return 1 - e.centralF.cdf(o[0], o[1], o[2]);
          var h = e.anovafscore(o);
          for (f = o.length - 1, l = 0, a = 0; a < o.length; a++)
            l = l + o[a].length;
          return u = l - f - 1, 1 - e.centralF.cdf(h, f, u);
        },
        ftest: function(o, f, u) {
          return 1 - e.centralF.cdf(o, f, u);
        }
      }), e.extend(e.fn, {
        anovafscore: function() {
          return e.anovafscore(this.toArray());
        },
        anovaftes: function() {
          var o = 0, f;
          for (f = 0; f < this.length; f++)
            o = o + this[f].length;
          return e.ftest(this.anovafscore(), this.length - 1, o - this.length);
        }
      }), e.extend({
        // 2 parameter lists
        // (mean1, mean2, n1, n2, sd)
        // (array1, array2, sd)
        qscore: function() {
          var o = c.call(arguments), f, u, l, a, h;
          return g(o[0]) ? (f = o[0], u = o[1], l = o[2], a = o[3], h = o[4]) : (f = e.mean(o[0]), u = e.mean(o[1]), l = o[0].length, a = o[1].length, h = o[2]), i.abs(f - u) / (h * i.sqrt((1 / l + 1 / a) / 2));
        },
        // 3 different parameter lists:
        // (qscore, n, k)
        // (mean1, mean2, n1, n2, sd, n, k)
        // (array1, array2, sd, n, k)
        qtest: function() {
          var o = c.call(arguments), f;
          o.length === 3 ? (f = o[0], o = o.slice(1)) : o.length === 7 ? (f = e.qscore(o[0], o[1], o[2], o[3], o[4]), o = o.slice(5)) : (f = e.qscore(o[0], o[1], o[2]), o = o.slice(3));
          var u = o[0], l = o[1];
          return 1 - e.tukey.cdf(f, l, u - l);
        },
        tukeyhsd: function(o) {
          for (var f = e.pooledstdev(o), u = o.map(function(T) {
            return e.mean(T);
          }), l = o.reduce(function(T, d) {
            return T + d.length;
          }, 0), a = [], h = 0; h < o.length; ++h)
            for (var v = h + 1; v < o.length; ++v) {
              var I = e.qtest(u[h], u[v], o[h].length, o[v].length, f, l, o.length);
              a.push([[h, v], I]);
            }
          return a;
        }
      }), e.extend({
        // 2 different parameter setups
        // (value, alpha, sd, n)
        // (value, alpha, array)
        normalci: function() {
          var o = c.call(arguments), f = new Array(2), u;
          return o.length === 4 ? u = i.abs(e.normal.inv(o[1] / 2, 0, 1) * o[2] / i.sqrt(o[3])) : u = i.abs(e.normal.inv(o[1] / 2, 0, 1) * e.stdev(o[2]) / i.sqrt(o[2].length)), f[0] = o[0] - u, f[1] = o[0] + u, f;
        },
        // 2 different parameter setups
        // (value, alpha, sd, n)
        // (value, alpha, array)
        tci: function() {
          var o = c.call(arguments), f = new Array(2), u;
          return o.length === 4 ? u = i.abs(e.studentt.inv(o[1] / 2, o[3] - 1) * o[2] / i.sqrt(o[3])) : u = i.abs(e.studentt.inv(o[1] / 2, o[2].length - 1) * e.stdev(o[2], !0) / i.sqrt(o[2].length)), f[0] = o[0] - u, f[1] = o[0] + u, f;
        },
        significant: function(o, f) {
          return o < f;
        }
      }), e.extend(e.fn, {
        normalci: function(o, f) {
          return e.normalci(o, f, this.toArray());
        },
        tci: function(o, f) {
          return e.tci(o, f, this.toArray());
        }
      });
      function E(s, o, f, u) {
        if (s > 1 || f > 1 || s <= 0 || f <= 0)
          throw new Error("Proportions should be greater than 0 and less than 1");
        var l = (s * o + f * u) / (o + u), a = i.sqrt(l * (1 - l) * (1 / o + 1 / u));
        return (s - f) / a;
      }
      e.extend(e.fn, {
        oneSidedDifferenceOfProportions: function(o, f, u, l) {
          var a = E(o, f, u, l);
          return e.ztest(a, 1);
        },
        twoSidedDifferenceOfProportions: function(o, f, u, l) {
          var a = E(o, f, u, l);
          return e.ztest(a, 2);
        }
      });
    }(t, Math), t.models = function() {
      function e(E) {
        var s = E[0].length, o = t.arange(s).map(function(f) {
          var u = t.arange(s).filter(function(l) {
            return l !== f;
          });
          return i(
            t.col(E, f).map(function(l) {
              return l[0];
            }),
            t.col(E, u)
          );
        });
        return o;
      }
      function i(E, s) {
        var o = E.length, f = s[0].length - 1, u = o - f - 1, l = t.lstsq(s, E), a = t.multiply(s, l.map(function(A) {
          return [A];
        })).map(function(A) {
          return A[0];
        }), h = t.subtract(E, a), v = t.mean(E), I = t.sum(a.map(function(A) {
          return Math.pow(A - v, 2);
        })), T = t.sum(E.map(function(A, D) {
          return Math.pow(A - a[D], 2);
        })), d = I + T, w = I / d;
        return {
          exog: s,
          endog: E,
          nobs: o,
          df_model: f,
          df_resid: u,
          coef: l,
          predict: a,
          resid: h,
          ybar: v,
          SST: d,
          SSE: I,
          SSR: T,
          R2: w
        };
      }
      function c(E) {
        var s = e(E.exog), o = Math.sqrt(E.SSR / E.df_resid), f = s.map(function(v) {
          var I = v.SST, T = v.R2;
          return o / Math.sqrt(I * (1 - T));
        }), u = E.coef.map(function(v, I) {
          return (v - 0) / f[I];
        }), l = u.map(function(v) {
          var I = t.studentt.cdf(v, E.df_resid);
          return (I > 0.5 ? 1 - I : I) * 2;
        }), a = t.studentt.inv(0.975, E.df_resid), h = E.coef.map(function(v, I) {
          var T = a * f[I];
          return [v - T, v + T];
        });
        return {
          se: f,
          t: u,
          p: l,
          sigmaHat: o,
          interval95: h
        };
      }
      function g(E) {
        var s = E.R2 / E.df_model / ((1 - E.R2) / E.df_resid), o = function(u, l, a) {
          return t.beta.cdf(u / (a / l + u), l / 2, a / 2);
        }, f = 1 - o(s, E.df_model, E.df_resid);
        return { F_statistic: s, pvalue: f };
      }
      function p(E, s) {
        var o = i(E, s), f = c(o), u = g(o), l = 1 - (1 - o.R2) * ((o.nobs - 1) / o.df_resid);
        return o.t = f, o.f = u, o.adjust_R2 = l, o;
      }
      return { ols: p };
    }(), t.extend({
      buildxmatrix: function() {
        for (var i = new Array(arguments.length), c = 0; c < arguments.length; c++) {
          var g = [1];
          i[c] = g.concat(arguments[c]);
        }
        return t(i);
      },
      builddxmatrix: function() {
        for (var i = new Array(arguments[0].length), c = 0; c < arguments[0].length; c++) {
          var g = [1];
          i[c] = g.concat(arguments[0][c]);
        }
        return t(i);
      },
      buildjxmatrix: function(i) {
        for (var c = new Array(i.length), g = 0; g < i.length; g++)
          c[g] = i[g];
        return t.builddxmatrix(c);
      },
      buildymatrix: function(i) {
        return t(i).transpose();
      },
      buildjymatrix: function(i) {
        return i.transpose();
      },
      matrixmult: function(i, c) {
        var g, p, E, s, o;
        if (i.cols() == c.rows()) {
          if (c.rows() > 1) {
            for (s = [], g = 0; g < i.rows(); g++)
              for (s[g] = [], p = 0; p < c.cols(); p++) {
                for (o = 0, E = 0; E < i.cols(); E++)
                  o += i.toArray()[g][E] * c.toArray()[E][p];
                s[g][p] = o;
              }
            return t(s);
          }
          for (s = [], g = 0; g < i.rows(); g++)
            for (s[g] = [], p = 0; p < c.cols(); p++) {
              for (o = 0, E = 0; E < i.cols(); E++)
                o += i.toArray()[g][E] * c.toArray()[p];
              s[g][p] = o;
            }
          return t(s);
        }
      },
      //regress and regresst to be fixed
      regress: function(i, c) {
        var g = t.xtranspxinv(i), p = i.transpose(), E = t.matrixmult(t(g), p);
        return t.matrixmult(E, c);
      },
      regresst: function(i, c, g) {
        var p = t.regress(i, c), E = {};
        E.anova = {};
        var s = t.jMatYBar(i, p);
        E.yBar = s;
        var o = c.mean();
        E.anova.residuals = t.residuals(c, s), E.anova.ssr = t.ssr(s, o), E.anova.msr = E.anova.ssr / (i[0].length - 1), E.anova.sse = t.sse(c, s), E.anova.mse = E.anova.sse / (c.length - (i[0].length - 1) - 1), E.anova.sst = t.sst(c, o), E.anova.mst = E.anova.sst / (c.length - 1), E.anova.r2 = 1 - E.anova.sse / E.anova.sst, E.anova.r2 < 0 && (E.anova.r2 = 0), E.anova.fratio = E.anova.msr / E.anova.mse, E.anova.pvalue = t.anovaftest(
          E.anova.fratio,
          i[0].length - 1,
          c.length - (i[0].length - 1) - 1
        ), E.anova.rmse = Math.sqrt(E.anova.mse), E.anova.r2adj = 1 - E.anova.mse / E.anova.mst, E.anova.r2adj < 0 && (E.anova.r2adj = 0), E.stats = new Array(i[0].length);
        for (var f = t.xtranspxinv(i), u, l, a, h = 0; h < p.length; h++)
          u = Math.sqrt(E.anova.mse * Math.abs(f[h][h])), l = Math.abs(p[h] / u), a = t.ttest(l, c.length - i[0].length - 1, g), E.stats[h] = [p[h], u, l, a];
        return E.regress = p, E;
      },
      xtranspx: function(i) {
        return t.matrixmult(i.transpose(), i);
      },
      xtranspxinv: function(i) {
        var c = t.matrixmult(i.transpose(), i), g = t.inv(c);
        return g;
      },
      jMatYBar: function(i, c) {
        var g = t.matrixmult(i, c);
        return new t(g);
      },
      residuals: function(i, c) {
        return t.matrixsubtract(i, c);
      },
      ssr: function(i, c) {
        for (var g = 0, p = 0; p < i.length; p++)
          g += Math.pow(i[p] - c, 2);
        return g;
      },
      sse: function(i, c) {
        for (var g = 0, p = 0; p < i.length; p++)
          g += Math.pow(i[p] - c[p], 2);
        return g;
      },
      sst: function(i, c) {
        for (var g = 0, p = 0; p < i.length; p++)
          g += Math.pow(i[p] - c, 2);
        return g;
      },
      matrixsubtract: function(i, c) {
        for (var g = new Array(i.length), p = 0; p < i.length; p++) {
          g[p] = new Array(i[p].length);
          for (var E = 0; E < i[p].length; E++)
            g[p][E] = i[p][E] - c[p][E];
        }
        return t(g);
      }
    }), t.jStat = t, t;
  });
})(Jr);
var Me = Jr.exports;
const q = /* @__PURE__ */ $r(Me);
var kr = {};
(function(n) {
  (function(r) {
    r(typeof DO_NOT_EXPORT_BESSEL > "u" ? n : {});
  })(function(r) {
    r.version = "1.0.2";
    var t = Math;
    function e(o, f) {
      for (var u = 0, l = 0; u < o.length; ++u)
        l = f * l + o[u];
      return l;
    }
    function i(o, f, u, l, a) {
      if (f === 0)
        return u;
      if (f === 1)
        return l;
      for (var h = 2 / o, v = l, I = 1; I < f; ++I)
        v = l * I * h + a * u, u = l, l = v;
      return v;
    }
    function c(o, f, u, l, a) {
      return function(v, I) {
        if (l) {
          if (v === 0)
            return l == 1 ? -1 / 0 : 1 / 0;
          if (v < 0)
            return NaN;
        }
        if (I === 0)
          return o(v);
        if (I === 1)
          return f(v);
        if (I < 0)
          return NaN;
        I |= 0;
        var T = o(v), d = f(v);
        return i(v, I, T, d, a);
      };
    }
    var g = function() {
      var o = 0.636619772, f = [57568490574, -13362590354, 6516196407e-1, -1121442418e-2, 77392.33017, -184.9052456].reverse(), u = [57568490411, 1029532985, 9494680718e-3, 59272.64853, 267.8532712, 1].reverse(), l = [1, -0.001098628627, 2734510407e-14, -2073370639e-15, 2093887211e-16].reverse(), a = [-0.01562499995, 1430488765e-13, -6911147651e-15, 7621095161e-16, -934935152e-16].reverse();
      function h(A) {
        var D = 0, O = 0, M = 0, P = A * A;
        if (A < 8)
          O = e(f, P), M = e(u, P), D = O / M;
        else {
          var V = A - 0.785398164;
          P = 64 / P, O = e(l, P), M = e(a, P), D = t.sqrt(o / A) * (t.cos(V) * O - t.sin(V) * M * 8 / A);
        }
        return D;
      }
      var v = [72362614232, -7895059235, 2423968531e-1, -2972611439e-3, 15704.4826, -30.16036606].reverse(), I = [144725228442, 2300535178, 1858330474e-2, 99447.43394, 376.9991397, 1].reverse(), T = [1, 183105e-8, -3516396496e-14, 2457520174e-15, -240337019e-15].reverse(), d = [0.04687499995, -2002690873e-13, 8449199096e-15, -88228987e-14, 105787412e-15].reverse();
      function w(A) {
        var D = 0, O = 0, M = 0, P = A * A, V = t.abs(A) - 2.356194491;
        return Math.abs(A) < 8 ? (O = A * e(v, P), M = e(I, P), D = O / M) : (P = 64 / P, O = e(T, P), M = e(d, P), D = t.sqrt(o / t.abs(A)) * (t.cos(V) * O - t.sin(V) * M * 8 / t.abs(A)), A < 0 && (D = -D)), D;
      }
      return function A(D, O) {
        if (O = Math.round(O), !isFinite(D))
          return isNaN(D) ? D : 0;
        if (O < 0)
          return (O % 2 ? -1 : 1) * A(D, -O);
        if (D < 0)
          return (O % 2 ? -1 : 1) * A(-D, O);
        if (O === 0)
          return h(D);
        if (O === 1)
          return w(D);
        if (D === 0)
          return 0;
        var M = 0;
        if (D > O)
          M = i(D, O, h(D), w(D), -1);
        else {
          for (var P = 2 * t.floor((O + t.floor(t.sqrt(40 * O))) / 2), V = !1, H = 0, Q = 0, W = 1, X = 0, sn = 2 / D, tn = P; tn > 0; tn--)
            X = tn * sn * W - H, H = W, W = X, t.abs(W) > 1e10 && (W *= 1e-10, H *= 1e-10, M *= 1e-10, Q *= 1e-10), V && (Q += W), V = !V, tn == O && (M = H);
          Q = 2 * Q - W, M /= Q;
        }
        return M;
      };
    }(), p = function() {
      var o = 0.636619772, f = [-2957821389, 7062834065, -5123598036e-1, 1087988129e-2, -86327.92757, 228.4622733].reverse(), u = [40076544269, 7452499648e-1, 7189466438e-3, 47447.2647, 226.1030244, 1].reverse(), l = [1, -0.001098628627, 2734510407e-14, -2073370639e-15, 2093887211e-16].reverse(), a = [-0.01562499995, 1430488765e-13, -6911147651e-15, 7621095161e-16, -934945152e-16].reverse();
      function h(A) {
        var D = 0, O = 0, M = 0, P = A * A, V = A - 0.785398164;
        return A < 8 ? (O = e(f, P), M = e(u, P), D = O / M + o * g(A, 0) * t.log(A)) : (P = 64 / P, O = e(l, P), M = e(a, P), D = t.sqrt(o / A) * (t.sin(V) * O + t.cos(V) * M * 8 / A)), D;
      }
      var v = [-4900604943e3, 127527439e4, -51534381390, 7349264551e-1, -4237922726e-3, 8511.937935].reverse(), I = [249958057e5, 424441966400, 3733650367, 2245904002e-2, 102042.605, 354.9632885, 1].reverse(), T = [1, 183105e-8, -3516396496e-14, 2457520174e-15, -240337019e-15].reverse(), d = [0.04687499995, -2002690873e-13, 8449199096e-15, -88228987e-14, 105787412e-15].reverse();
      function w(A) {
        var D = 0, O = 0, M = 0, P = A * A, V = A - 2.356194491;
        return A < 8 ? (O = A * e(v, P), M = e(I, P), D = O / M + o * (g(A, 1) * t.log(A) - 1 / A)) : (P = 64 / P, O = e(T, P), M = e(d, P), D = t.sqrt(o / A) * (t.sin(V) * O + t.cos(V) * M * 8 / A)), D;
      }
      return c(h, w, "BESSELY", 1, -1);
    }(), E = function() {
      var o = [1, 3.5156229, 3.0899424, 1.2067492, 0.2659732, 0.0360768, 45813e-7].reverse(), f = [0.39894228, 0.01328592, 225319e-8, -157565e-8, 916281e-8, -0.02057706, 0.02635537, -0.01647633, 392377e-8].reverse();
      function u(v) {
        return v <= 3.75 ? e(o, v * v / (3.75 * 3.75)) : t.exp(t.abs(v)) / t.sqrt(t.abs(v)) * e(f, 3.75 / t.abs(v));
      }
      var l = [0.5, 0.87890594, 0.51498869, 0.15084934, 0.02658733, 301532e-8, 32411e-8].reverse(), a = [0.39894228, -0.03988024, -362018e-8, 163801e-8, -0.01031555, 0.02282967, -0.02895312, 0.01787654, -420059e-8].reverse();
      function h(v) {
        return v < 3.75 ? v * e(l, v * v / (3.75 * 3.75)) : (v < 0 ? -1 : 1) * t.exp(t.abs(v)) / t.sqrt(t.abs(v)) * e(a, 3.75 / t.abs(v));
      }
      return function v(I, T) {
        if (T = Math.round(T), T === 0)
          return u(I);
        if (T === 1)
          return h(I);
        if (T < 0)
          return NaN;
        if (t.abs(I) === 0)
          return 0;
        if (I == 1 / 0)
          return 1 / 0;
        var d = 0, w, A = 2 / t.abs(I), D = 0, O = 1, M = 0, P = 2 * t.round((T + t.round(t.sqrt(40 * T))) / 2);
        for (w = P; w > 0; w--)
          M = w * A * O + D, D = O, O = M, t.abs(O) > 1e10 && (O *= 1e-10, D *= 1e-10, d *= 1e-10), w == T && (d = D);
        return d *= v(I, 0) / O, I < 0 && T % 2 ? -d : d;
      };
    }(), s = function() {
      var o = [-0.57721566, 0.4227842, 0.23069756, 0.0348859, 262698e-8, 1075e-7, 74e-7].reverse(), f = [1.25331414, -0.07832358, 0.02189568, -0.01062446, 587872e-8, -25154e-7, 53208e-8].reverse();
      function u(v) {
        return v <= 2 ? -t.log(v / 2) * E(v, 0) + e(o, v * v / 4) : t.exp(-v) / t.sqrt(v) * e(f, 2 / v);
      }
      var l = [1, 0.15443144, -0.67278579, -0.18156897, -0.01919402, -110404e-8, -4686e-8].reverse(), a = [1.25331414, 0.23498619, -0.0365562, 0.01504268, -780353e-8, 325614e-8, -68245e-8].reverse();
      function h(v) {
        return v <= 2 ? t.log(v / 2) * E(v, 1) + 1 / v * e(l, v * v / 4) : t.exp(-v) / t.sqrt(v) * e(a, 2 / v);
      }
      return c(u, h, "BESSELK", 2, 1);
    }();
    r.besselj = g, r.bessely = p, r.besseli = E, r.besselk = s;
  });
})(kr);
const ir = /* @__PURE__ */ $r(kr), Tr = new Error("#NULL!"), Z = new Error("#DIV/0!"), R = new Error("#VALUE!"), yn = new Error("#REF!"), fr = new Error("#NAME?"), C = new Error("#NUM!"), F = new Error("#N/A"), wr = new Error("#ERROR!"), Sr = new Error("#GETTING_DATA");
var Pe = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  data: Sr,
  div0: Z,
  error: wr,
  na: F,
  name: fr,
  nil: Tr,
  num: C,
  ref: yn,
  value: R
});
function Qn(n) {
  const r = [];
  return $(n, (t) => {
    r.push(t);
  }), r;
}
function $(n, r) {
  let t = -1;
  const e = n.length;
  for (; ++t < e && r(n[t], t, n) !== !1; )
    ;
  return n;
}
function Ar(n) {
  let r = n.length, t;
  for (; r--; )
    if (t = n[r], typeof t != "number") {
      if (t === !0) {
        n[r] = 1;
        continue;
      }
      if (t === !1) {
        n[r] = 0;
        continue;
      }
      if (typeof t == "string") {
        const e = N(t);
        n[r] = e instanceof Error ? 0 : e;
      }
    }
  return n;
}
function xr(n, r) {
  if (!n)
    return R;
  (!n.every((i) => Array.isArray(i)) || n.length === 0) && (n = [[...n]]), n.map((i, c) => {
    i.map((g, p) => {
      g || (n[c][p] = 0);
    });
  });
  const t = n.reduce((i, c, g) => c.length > n[i].length ? g : i, 0), e = n[t].length;
  return n.map((i) => [...i, ...Array(e - i.length).fill(r || 0)]);
}
function L() {
  let n;
  if (arguments.length === 1) {
    const r = arguments[0];
    n = Ue(r) ? Qn.apply(null, arguments) : [r];
  } else
    n = Array.from(arguments);
  for (; !Ve(n); )
    n = Nr(n);
  return n;
}
function Nr(n) {
  return !n || !n.reduce ? [n] : n.reduce((r, t) => {
    const e = Array.isArray(r), i = Array.isArray(t);
    return e && i ? r.concat(t) : e ? (r.push(t), r) : i ? [r].concat(t) : [r, t];
  });
}
function qe(n, r) {
  return r = r || 1, !n || typeof n.slice != "function" ? n : n.slice(0, n.length - r);
}
function Ue(n) {
  return n != null && typeof n.length == "number" && typeof n != "string";
}
function Ve(n) {
  if (!n)
    return !1;
  for (let r = 0; r < n.length; ++r)
    if (Array.isArray(n[r]))
      return !1;
  return !0;
}
function z(n, r) {
  return r = r || 1, !n || typeof n.slice != "function" ? n : n.slice(r);
}
function _n(n) {
  return n ? n[0].map((r, t) => n.map((e) => e[t])) : R;
}
function rn(n, r) {
  let t = null;
  return $(n, (e, i) => {
    if (e[0] === r)
      return t = i, !1;
  }), t ?? R;
}
function y() {
  for (let n = 0; n < arguments.length; n++)
    if (arguments[n] instanceof Error)
      return arguments[n];
}
function m() {
  let n = arguments.length;
  for (; n--; )
    if (arguments[n] instanceof Error)
      return !0;
  return !1;
}
function br(n) {
  return Math.round(n * 1e14) / 1e14;
}
function Gn() {
  return L.apply(null, arguments).filter((r) => typeof r == "number");
}
function Fe(n) {
  n < 60 && (n += 1);
  const t = Math.floor(n - 25569) * 86400, e = new Date(t * 1e3), i = n - Math.floor(n) + 1e-7;
  let c = Math.floor(86400 * i);
  const g = c % 60;
  c -= g;
  const p = Math.floor(c / (60 * 60)), E = Math.floor(c / 60) % 60;
  let s = e.getUTCDate(), o = e.getUTCMonth();
  return n >= 60 && n < 61 && (s = 29, o = 1), new Date(e.getUTCFullYear(), o, s, p, E, g);
}
function Rr(n) {
  if (typeof n == "boolean" || n instanceof Error)
    return n;
  if (typeof n == "number")
    return n !== 0;
  if (typeof n == "string") {
    const r = n.toUpperCase();
    if (r === "TRUE")
      return !0;
    if (r === "FALSE")
      return !1;
  }
  return n instanceof Date && !isNaN(n) ? !0 : R;
}
function G(n) {
  if (!isNaN(n)) {
    if (n instanceof Date)
      return new Date(n);
    const r = parseFloat(n);
    return r < 0 || r >= 2958466 ? C : Fe(r);
  }
  return typeof n == "string" && (n = /(\d{4})-(\d\d?)-(\d\d?)$/.test(n) ? /* @__PURE__ */ new Date(n + "T00:00:00.000") : new Date(n), !isNaN(n)) ? n : R;
}
function jr(n) {
  let r = n.length, t;
  for (; r--; ) {
    if (t = G(n[r]), t === R)
      return t;
    n[r] = t;
  }
  return n;
}
function N(n) {
  return n instanceof Error ? n : n == null ? 0 : (typeof n == "boolean" && (n = +n), !isNaN(n) && n !== "" ? parseFloat(n) : R);
}
function U(n) {
  let r;
  if (!n || (r = n.length) === 0)
    return R;
  let t;
  for (; r--; ) {
    if (n[r] instanceof Error)
      return n[r];
    if (t = N(n[r]), t instanceof Error)
      return t;
    n[r] = t;
  }
  return n;
}
function K(n) {
  return n instanceof Error ? n : n == null ? "" : n.toString();
}
function ur() {
  let n = arguments.length;
  for (; n--; )
    if (typeof arguments[n] == "string")
      return !0;
  return !1;
}
function Hn(n) {
  return n != null;
}
const ye = "=", Ge = [">", ">=", "<", "<=", "=", "<>"], _r = "operator", ne = "literal", He = [_r, ne], jn = _r, pn = ne;
function an(n, r) {
  if (He.indexOf(r) === -1)
    throw new Error("Unsupported token type: " + r);
  return {
    value: n,
    type: r
  };
}
function Ye(n) {
  return typeof n != "string" || /^\d+(\.\d+)?$/.test(n) && (n = n.indexOf(".") === -1 ? parseInt(n, 10) : parseFloat(n)), n;
}
function Be(n) {
  const r = n.length, t = [];
  let e = 0, i = "", c = "";
  for (; e < r; ) {
    const g = n.charAt(e);
    switch (g) {
      case ">":
      case "<":
      case "=":
        c = c + g, i.length > 0 && (t.push(i), i = "");
        break;
      default:
        c.length > 0 && (t.push(c), c = ""), i = i + g;
        break;
    }
    e++;
  }
  return i.length > 0 && t.push(i), c.length > 0 && t.push(c), t;
}
function We(n) {
  let r = "";
  const t = [];
  for (let e = 0; e < n.length; e++) {
    const i = n[e];
    e === 0 && Ge.indexOf(i) >= 0 ? t.push(an(i, jn)) : r += i;
  }
  return r.length > 0 && t.push(an(Ye(r), pn)), t.length > 0 && t[0].type !== jn && t.unshift(an(ye, jn)), t;
}
function ze(n) {
  const r = [];
  let t;
  for (let e = 0; e < n.length; e++) {
    const i = n[e];
    switch (i.type) {
      case jn:
        t = i.value;
        break;
      case pn:
        r.push(i.value);
        break;
    }
  }
  return Ke(r, t);
}
function Ke(n, r) {
  let t = !1;
  switch (r) {
    case ">":
      t = n[0] > n[1];
      break;
    case ">=":
      t = n[0] >= n[1];
      break;
    case "<":
      t = n[0] < n[1];
      break;
    case "<=":
      t = n[0] <= n[1];
      break;
    case "=":
      t = n[0] == n[1];
      break;
    case "<>":
      t = n[0] != n[1];
      break;
  }
  return t;
}
function Mn(n) {
  return We(Be(n));
}
const Pn = ze;
function Xe() {
  throw new Error("CELL is not implemented");
}
const re = {};
re.TYPE = (n) => {
  switch (n) {
    case Tr:
      return 1;
    case Z:
      return 2;
    case R:
      return 3;
    case yn:
      return 4;
    case fr:
      return 5;
    case C:
      return 6;
    case F:
      return 7;
    case Sr:
      return 8;
  }
  return F;
};
function Qe() {
  throw new Error("INFO is not implemented");
}
function $e(n) {
  return n === null;
}
function ee(n) {
  return [R, yn, Z, C, fr, Tr].indexOf(n) >= 0 || typeof n == "number" && (isNaN(n) || !isFinite(n));
}
function sr(n) {
  return ee(n) || n === F;
}
function Ze(n) {
  return !(Math.floor(Math.abs(n)) & 1);
}
function Je() {
  throw new Error("ISFORMULA is not implemented");
}
function te(n) {
  return n === !0 || n === !1;
}
function ke(n) {
  return n === F;
}
function Se(n) {
  return typeof n != "string";
}
function lr(n) {
  return typeof n == "number" && !isNaN(n) && isFinite(n);
}
function xe(n) {
  return !!(Math.floor(Math.abs(n)) & 1);
}
function be() {
  throw new Error("ISREF is not implemented");
}
function oe(n) {
  return typeof n == "string";
}
function je(n) {
  return lr(n) ? n : n instanceof Date ? n.getTime() : n === !0 ? 1 : n === !1 ? 0 : sr(n) ? n : 0;
}
function _e() {
  return F;
}
function nt() {
  throw new Error("SHEET is not implemented");
}
function rt() {
  throw new Error("SHEETS is not implemented");
}
function et(n) {
  if (lr(n))
    return 1;
  if (oe(n))
    return 2;
  if (te(n))
    return 4;
  if (sr(n))
    return 16;
  if (Array.isArray(n))
    return 64;
}
function tt() {
  if (arguments.length < 2)
    return F;
  const n = arguments[0];
  return n < 1 || n > 254 || arguments.length < n + 1 ? R : arguments[n];
}
function ot(n, r) {
  if (arguments.length !== 2)
    return F;
  if (r < 0)
    return C;
  if (!(n instanceof Array) || typeof r != "number")
    return R;
  if (n.length !== 0)
    return q.col(n, r);
}
function it(n) {
  return arguments.length !== 1 ? F : n instanceof Array ? n.length === 0 ? 0 : q.cols(n) : R;
}
function ft(n, r, t, e) {
  return ie(n, _n(r), t, e);
}
function ut(n, r, t) {
  const e = y(n, r, t);
  if (e)
    return e;
  if (!Array.isArray(n))
    return R;
  const i = n.length > 0 && !Array.isArray(n[0]);
  return i && !t ? (t = r, r = 1) : (t = t || 1, r = r || 1), t < 0 || r < 0 ? R : i && r === 1 && t <= n.length ? n[t - 1] : r <= n.length && t <= n[r - 1].length ? n[r - 1][t - 1] : yn;
}
function st(n, r, t) {
  r = L(r), t = t ? L(t) : r;
  const e = typeof n == "number";
  let i = F;
  for (let c = 0; c < r.length; c++) {
    if (r[c] === n)
      return t[c];
    if (e && r[c] <= n || typeof r[c] == "string" && r[c].localeCompare(n) < 0)
      i = t[c];
    else if (e && r[c] > n)
      return i;
  }
  return i;
}
function lt(n, r, t) {
  if (!n || !r || (arguments.length === 2 && (t = 1), r = L(r), !(r instanceof Array)) || t !== -1 && t !== 0 && t !== 1)
    return F;
  let e, i;
  for (let c = 0; c < r.length; c++)
    if (t === 1) {
      if (r[c] === n)
        return c + 1;
      r[c] < n && (i ? r[c] > i && (e = c + 1, i = r[c]) : (e = c + 1, i = r[c]));
    } else if (t === 0) {
      if (typeof n == "string" && typeof r[c] == "string") {
        const g = n.toLowerCase().replace(/\?/g, ".").replace(/\*/g, ".*").replace(/~/g, "\\");
        if (new RegExp("^" + g + "$").test(r[c].toLowerCase()))
          return c + 1;
      } else if (r[c] === n)
        return c + 1;
    } else if (t === -1) {
      if (r[c] === n)
        return c + 1;
      r[c] > n && (i ? r[c] < i && (e = c + 1, i = r[c]) : (e = c + 1, i = r[c]));
    }
  return e || F;
}
function ct(n) {
  return arguments.length !== 1 ? F : n instanceof Array ? n.length === 0 ? 0 : q.rows(n) : R;
}
function gt(n, r = 1, t = 1, e = !1) {
  if (!n || !Array.isArray(n))
    return F;
  if (n.length === 0)
    return 0;
  if (r = N(r), !r || r < 1 || (t = N(t), t !== 1 && t !== -1))
    return R;
  if (e = Rr(e), typeof e != "boolean")
    return fr;
  const i = (p) => p.sort((E, s) => (E = K(E[r - 1]), s = K(s[r - 1]), t === 1 ? E < s ? t * -1 : t : E > s ? t : t * -1)), c = xr(n), g = e ? _n(c) : c;
  return r >= 1 && r <= g[0].length ? e ? _n(i(g)) : i(g) : R;
}
function at(n) {
  if (!n)
    return F;
  const r = xr(n);
  return _n(r);
}
function Dr() {
  const n = [];
  for (let r = 0; r < arguments.length; ++r) {
    let t = !1;
    const e = arguments[r];
    for (let i = 0; i < n.length && (t = n[i] === e, !t); ++i)
      ;
    t || n.push(e);
  }
  return n;
}
function ie(n, r, t, e) {
  if (!r || !t)
    return F;
  e = !(e === 0 || e === !1);
  let i = F;
  const c = typeof n == "number";
  let g = !1;
  for (let p = 0; p < r.length; p++) {
    const E = r[p];
    if (E[0] === n) {
      i = t < E.length + 1 ? E[t - 1] : yn;
      break;
    } else
      !g && (c && e && E[0] <= n || e && typeof E[0] == "string" && E[0].localeCompare(n) < 0) && (i = t < E.length + 1 ? E[t - 1] : yn);
    c && E[0] > n && (g = !0);
  }
  return i;
}
const ht = 2.5066282746310002;
function vt() {
  const r = L(arguments).filter(Hn);
  if (r.length === 0)
    return C;
  const t = U(r);
  return t instanceof Error ? t : q.sum(q(t).subtract(q.mean(t)).abs()[0]) / t.length;
}
function Dn() {
  const r = L(arguments).filter(Hn);
  if (r.length === 0)
    return Z;
  const t = y.apply(void 0, r);
  if (t)
    return t;
  const e = Gn(r), i = e.length;
  let c = 0, g = 0, p;
  for (let E = 0; E < i; E++)
    c += e[E], g += 1;
  return p = c / g, isNaN(p) && (p = C), p;
}
function Cr() {
  const r = L(arguments).filter(Hn);
  if (r.length === 0)
    return Z;
  const t = y.apply(void 0, r);
  if (t)
    return t;
  const e = r, i = e.length;
  let c = 0, g = 0, p;
  for (let E = 0; E < i; E++) {
    const s = e[E];
    typeof s == "number" && (c += s), s === !0 && c++, s !== null && g++;
  }
  return p = c / g, isNaN(p) && (p = C), p;
}
function Et(n, r, t) {
  if (arguments.length <= 1)
    return F;
  t = t || n;
  const i = L(t).filter(Hn);
  if (t = U(i), n = L(n), t instanceof Error)
    return t;
  let c = 0, g = 0;
  const p = r === void 0 || r === "*", E = p ? null : Mn(r + "");
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (p)
      g += t[s], c++;
    else {
      const f = [an(o, pn)].concat(E);
      Pn(f) && (g += t[s], c++);
    }
  }
  return g / c;
}
function pt() {
  const n = Qn(arguments), r = (n.length - 1) / 2, t = L(n[0]);
  let e = 0, i = 0;
  for (let g = 0; g < t.length; g++) {
    let p = !1;
    for (let E = 0; E < r; E++) {
      const s = n[2 * E + 1][g], o = n[2 * E + 2], f = o === void 0 || o === "*";
      let u = !1;
      if (f)
        u = !0;
      else {
        const l = Mn(o + ""), a = [an(s, pn)].concat(l);
        u = Pn(a);
      }
      if (!u) {
        p = !1;
        break;
      }
      p = !0;
    }
    p && (i += t[g], e++);
  }
  const c = i / e;
  return isNaN(c) ? 0 : c;
}
const $n = {};
$n.DIST = function(n, r, t, e, i, c) {
  return arguments.length < 4 || (i = i === void 0 ? 0 : i, c = c === void 0 ? 1 : c, n = N(n), r = N(r), t = N(t), i = N(i), c = N(c), m(n, r, t, i, c)) ? R : (n = (n - i) / (c - i), e ? q.beta.cdf(n, r, t) : q.beta.pdf(n, r, t));
};
$n.INV = (n, r, t, e, i) => (e = e === void 0 ? 0 : e, i = i === void 0 ? 1 : i, n = N(n), r = N(r), t = N(t), e = N(e), i = N(i), m(n, r, t, e, i) ? R : q.beta.inv(n, r, t) * (i - e) + e);
const Yn = {};
Yn.DIST = (n, r, t, e) => (n = N(n), r = N(r), t = N(t), e = N(e), m(n, r, t, e) ? R : e ? q.binomial.cdf(n, r, t) : q.binomial.pdf(n, r, t));
Yn.DIST.RANGE = (n, r, t, e) => {
  if (e = e === void 0 ? t : e, n = N(n), r = N(r), t = N(t), e = N(e), m(n, r, t, e))
    return R;
  let i = 0;
  for (let c = t; c <= e; c++)
    i += Fn(n, c) * Math.pow(r, c) * Math.pow(1 - r, n - c);
  return i;
};
Yn.INV = (n, r, t) => {
  if (n = N(n), r = N(r), t = N(t), m(n, r, t))
    return R;
  let e = 0;
  for (; e <= n; ) {
    if (q.binomial.cdf(e, n, r) >= t)
      return e;
    e++;
  }
};
const on = {};
on.DIST = (n, r, t) => (n = N(n), r = N(r), m(n, r) ? R : t ? q.chisquare.cdf(n, r) : q.chisquare.pdf(n, r));
on.DIST.RT = (n, r) => !n | !r ? F : n < 1 || r > Math.pow(10, 10) ? C : typeof n != "number" || typeof r != "number" ? R : 1 - q.chisquare.cdf(n, r);
on.INV = (n, r) => (n = N(n), r = N(r), m(n, r) ? R : q.chisquare.inv(n, r));
on.INV.RT = (n, r) => !n | !r ? F : n < 0 || n > 1 || r < 1 || r > Math.pow(10, 10) ? C : typeof n != "number" || typeof r != "number" ? R : q.chisquare.inv(1 - n, r);
on.TEST = function(n, r) {
  if (arguments.length !== 2)
    return F;
  if (!(n instanceof Array) || !(r instanceof Array) || n.length !== r.length || n[0] && r[0] && n[0].length !== r[0].length)
    return R;
  const t = n.length;
  let e, i, c;
  for (i = 0; i < t; i++)
    n[i] instanceof Array || (e = n[i], n[i] = [], n[i].push(e)), r[i] instanceof Array || (e = r[i], r[i] = [], r[i].push(e));
  const g = n[0].length, p = g === 1 ? t - 1 : (t - 1) * (g - 1);
  let E = 0;
  const s = Math.PI;
  for (i = 0; i < t; i++)
    for (c = 0; c < g; c++)
      E += Math.pow(n[i][c] - r[i][c], 2) / r[i][c];
  function o(f, u) {
    let l = Math.exp(-0.5 * f);
    u % 2 === 1 && (l = l * Math.sqrt(2 * f / s));
    let a = u;
    for (; a >= 2; )
      l = l * f / a, a = a - 2;
    let h = l, v = u;
    for (; h > 1e-10 * l; )
      v = v + 2, h = h * f / v, l = l + h;
    return 1 - l;
  }
  return Math.round(o(E, p) * 1e6) / 1e6;
};
const Or = {};
Or.NORM = (n, r, t) => (n = N(n), r = N(r), t = N(t), m(n, r, t) ? R : q.normalci(1, n, r, t)[1] - 1);
Or.T = (n, r, t) => (n = N(n), r = N(r), t = N(t), m(n, r, t) ? R : q.tci(1, n, r, t)[1] - 1);
function dt(n, r) {
  return n = U(L(n)), r = U(L(r)), m(n, r) ? R : q.corrcoeff(n, r);
}
function Kn() {
  const n = L(arguments);
  return Gn(n).length;
}
function Xn() {
  const n = L(arguments);
  return n.length - fe(n);
}
function fe() {
  const n = L(arguments);
  let r = 0, t;
  for (let e = 0; e < n.length; e++)
    t = n[e], (t == null || t === "") && r++;
  return r;
}
function Nt(n, r) {
  if (n = L(n), r === void 0 || r === "*")
    return n.length;
  let e = 0;
  const i = Mn(r + "");
  for (let c = 0; c < n.length; c++) {
    const g = n[c], p = [an(g, pn)].concat(i);
    Pn(p) && e++;
  }
  return e;
}
function It() {
  const n = Qn(arguments), r = new Array(L(n[0]).length);
  for (let e = 0; e < r.length; e++)
    r[e] = !0;
  for (let e = 0; e < n.length; e += 2) {
    const i = L(n[e]), c = n[e + 1];
    if (!(c === void 0 || c === "*")) {
      const p = Mn(c + "");
      for (let E = 0; E < i.length; E++) {
        const s = i[E], o = [an(s, pn)].concat(p);
        r[E] = r[E] && Pn(o);
      }
    }
  }
  let t = 0;
  for (let e = 0; e < r.length; e++)
    r[e] && t++;
  return t;
}
const Bn = {};
Bn.P = (n, r) => {
  if (n = U(L(n)), r = U(L(r)), m(n, r))
    return R;
  const t = q.mean(n), e = q.mean(r);
  let i = 0;
  const c = n.length;
  for (let g = 0; g < c; g++)
    i += (n[g] - t) * (r[g] - e);
  return i / c;
};
Bn.S = (n, r) => (n = U(L(n)), r = U(L(r)), m(n, r) ? R : q.covariance(n, r));
function Tt() {
  const n = U(L(arguments));
  if (n instanceof Error)
    return n;
  const r = q.mean(n);
  let t = 0;
  for (let e = 0; e < n.length; e++)
    t += Math.pow(n[e] - r, 2);
  return t;
}
const mr = {};
mr.DIST = (n, r, t) => (n = N(n), r = N(r), m(n, r) ? R : t ? q.exponential.cdf(n, r) : q.exponential.pdf(n, r));
const fn = {};
fn.DIST = (n, r, t, e) => (n = N(n), r = N(r), t = N(t), m(n, r, t) ? R : e ? q.centralF.cdf(n, r, t) : q.centralF.pdf(n, r, t));
fn.DIST.RT = function(n, r, t) {
  return arguments.length !== 3 ? F : n < 0 || r < 1 || t < 1 ? C : typeof n != "number" || typeof r != "number" || typeof t != "number" ? R : 1 - q.centralF.cdf(n, r, t);
};
fn.INV = (n, r, t) => (n = N(n), r = N(r), t = N(t), m(n, r, t) ? R : n <= 0 || n > 1 ? C : q.centralF.inv(n, r, t));
fn.INV.RT = function(n, r, t) {
  return arguments.length !== 3 ? F : n < 0 || n > 1 || r < 1 || r > Math.pow(10, 10) || t < 1 || t > Math.pow(10, 10) ? C : typeof n != "number" || typeof r != "number" || typeof t != "number" ? R : q.centralF.inv(1 - n, r, t);
};
fn.TEST = (n, r) => {
  if (!n || !r || !(n instanceof Array) || !(r instanceof Array))
    return F;
  if (n.length < 2 || r.length < 2)
    return Z;
  const t = (p, E) => {
    let s = 0;
    for (let o = 0; o < p.length; o++)
      s += Math.pow(p[o] - E, 2);
    return s;
  }, e = Nn(n) / n.length, i = Nn(r) / r.length, c = t(n, e) / (n.length - 1), g = t(r, i) / (r.length - 1);
  return c / g;
};
function wt(n) {
  return n = N(n), n instanceof Error ? n : Math.log((1 + n) / (1 - n)) / 2;
}
function At(n) {
  if (n = N(n), n instanceof Error)
    return n;
  const r = Math.exp(2 * n);
  return (r - 1) / (r + 1);
}
function ue(n, r, t) {
  if (n = N(n), r = U(L(r)), t = U(L(t)), m(n, r, t))
    return R;
  const e = q.mean(t), i = q.mean(r), c = t.length;
  let g = 0, p = 0;
  for (let o = 0; o < c; o++)
    g += (t[o] - e) * (r[o] - i), p += Math.pow(t[o] - e, 2);
  const E = g / p;
  return i - E * e + E * n;
}
function Rt(n, r) {
  if (n = U(L(n)), r = U(L(r)), m(n, r))
    return R;
  const t = n.length, e = r.length, i = [];
  for (let c = 0; c <= e; c++) {
    i[c] = 0;
    for (let g = 0; g < t; g++)
      c === 0 ? n[g] <= r[0] && (i[0] += 1) : c < e ? n[g] > r[c - 1] && n[g] <= r[c] && (i[c] += 1) : c === e && n[g] > r[e - 1] && (i[e] += 1);
  }
  return i;
}
function Zn(n) {
  return n = N(n), n instanceof Error ? n : n === 0 || parseInt(n, 10) === n && n < 0 ? C : q.gammafn(n);
}
Zn.DIST = function(n, r, t, e) {
  return arguments.length !== 4 ? F : n < 0 || r <= 0 || t <= 0 || typeof n != "number" || typeof r != "number" || typeof t != "number" ? R : e ? q.gamma.cdf(n, r, t, !0) : q.gamma.pdf(n, r, t, !1);
};
Zn.INV = function(n, r, t) {
  return arguments.length !== 3 ? F : n < 0 || n > 1 || r <= 0 || t <= 0 ? C : typeof n != "number" || typeof r != "number" || typeof t != "number" ? R : q.gamma.inv(n, r, t);
};
function Lr(n) {
  return n = N(n), n instanceof Error ? n : q.gammaln(n);
}
Lr.PRECISE = function(n) {
  return arguments.length !== 1 ? F : n <= 0 ? C : typeof n != "number" ? R : q.gammaln(n);
};
function Dt(n) {
  return n = N(n), n instanceof Error ? n : q.normal.cdf(n, 0, 1) - 0.5;
}
function Ct() {
  const n = U(L(arguments));
  return n instanceof Error ? n : q.geomean(n);
}
function Ot(n, r, t, e) {
  if (n = U(n), n instanceof Error)
    return n;
  let i;
  if (r === void 0)
    for (r = [], i = 1; i <= n.length; i++)
      r.push(i);
  if (t === void 0)
    for (t = [], i = 1; i <= n.length; i++)
      t.push(i);
  if (r = U(r), t = U(t), m(r, t))
    return R;
  e === void 0 && (e = !0);
  const c = n.length;
  let g = 0, p = 0, E = 0, s = 0;
  for (i = 0; i < c; i++) {
    const l = r[i], a = Math.log(n[i]);
    g += l, p += a, E += l * a, s += l * l;
  }
  g /= c, p /= c, E /= c, s /= c;
  let o, f;
  e ? (o = (E - g * p) / (s - g * g), f = p - o * g) : (o = E / s, f = 0);
  const u = [];
  for (i = 0; i < t.length; i++)
    u.push(Math.exp(f + o * t[i]));
  return u;
}
function mt() {
  const n = U(L(arguments));
  if (n instanceof Error)
    return n;
  const r = n.length;
  let t = 0;
  for (let e = 0; e < r; e++)
    t += 1 / n[e];
  return r / t;
}
const Mr = {};
Mr.DIST = (n, r, t, e, i) => {
  if (n = N(n), r = N(r), t = N(t), e = N(e), m(n, r, t, e))
    return R;
  function c(p, E, s, o) {
    return Fn(s, p) * Fn(o - s, E - p) / Fn(o, E);
  }
  function g(p, E, s, o) {
    let f = 0;
    for (let u = 0; u <= p; u++)
      f += c(u, E, s, o);
    return f;
  }
  return i ? g(n, r, t, e) : c(n, r, t, e);
};
function Lt(n, r) {
  return n = U(n), r = U(r), m(n, r) ? R : n.length !== r.length ? F : ue(0, n, r);
}
function Mt() {
  const n = U(L(arguments));
  if (n instanceof Error)
    return n;
  const r = q.mean(n), t = n.length;
  let e = 0;
  for (let i = 0; i < t; i++)
    e += Math.pow(n[i] - r, 4);
  return e = e / Math.pow(q.stdev(n, !0), 4), t * (t + 1) / ((t - 1) * (t - 2) * (t - 3)) * e - 3 * (t - 1) * (t - 1) / ((t - 2) * (t - 3));
}
function se(n, r) {
  return n = U(L(n)), r = N(r), m(n, r) ? n : r < 0 || n.length < r ? R : n.sort((t, e) => e - t)[r - 1];
}
function Pr(n, r) {
  if (n = U(L(n)), r = U(L(r)), m(n, r))
    return R;
  const t = q.mean(n), e = q.mean(r), i = r.length;
  let c = 0, g = 0;
  for (let s = 0; s < i; s++)
    c += (r[s] - e) * (n[s] - t), g += Math.pow(r[s] - e, 2);
  const p = c / g, E = t - p * e;
  return [p, E];
}
function Pt(n, r) {
  if (n = U(L(n)), r = U(L(r)), m(n, r) || n.length !== r.length)
    return R;
  for (let e = 0; e < n.length; e++)
    n[e] = Math.log(n[e]);
  const t = Pr(n, r);
  return t[0] = Math.round(Math.exp(t[0]) * 1e6) / 1e6, t[1] = Math.round(Math.exp(t[1]) * 1e6) / 1e6, t;
}
const Wn = {};
Wn.DIST = (n, r, t, e) => (n = N(n), r = N(r), t = N(t), m(n, r, t) ? R : e ? q.lognormal.cdf(n, r, t) : q.lognormal.pdf(n, r, t));
Wn.INV = (n, r, t) => (n = N(n), r = N(r), t = N(t), m(n, r, t) ? R : q.lognormal.inv(n, r, t));
function nr() {
  const n = L(arguments), r = y.apply(void 0, n);
  if (r)
    return r;
  const t = Gn(n);
  return t.length === 0 ? 0 : Math.max.apply(Math, t);
}
function qt() {
  const n = L(arguments), r = y.apply(void 0, n);
  if (r)
    return r;
  let t = Ar(n);
  return t = t.map((e) => e ?? 0), t.length === 0 ? 0 : Math.max.apply(Math, t);
}
function le() {
  const n = L(arguments), r = y.apply(void 0, n);
  if (r)
    return r;
  const t = Ar(n);
  let e = q.median(t);
  return isNaN(e) && (e = C), e;
}
function rr() {
  const n = L(arguments), r = y.apply(void 0, n);
  if (r)
    return r;
  const t = Gn(n);
  return t.length === 0 ? 0 : Math.min.apply(Math, t);
}
function Ut() {
  const n = L(arguments), r = y.apply(void 0, n);
  if (r)
    return r;
  let t = Ar(n);
  return t = t.map((e) => e ?? 0), t.length === 0 ? 0 : Math.min.apply(Math, t);
}
const Cn = {};
Cn.MULT = function() {
  const n = U(L(arguments));
  if (n instanceof Error)
    return n;
  const r = n.length, t = {};
  let e = [], i = 0, c;
  for (let g = 0; g < r; g++)
    c = n[g], t[c] = t[c] ? t[c] + 1 : 1, t[c] > i && (i = t[c], e = []), t[c] === i && (e[e.length] = c);
  return e;
};
Cn.SNGL = function() {
  const n = U(L(arguments));
  return n instanceof Error ? n : Cn.MULT(n).sort((r, t) => r - t)[0];
};
const qr = {};
qr.DIST = (n, r, t, e) => (n = N(n), r = N(r), t = N(t), m(n, r, t) ? R : e ? q.negbin.cdf(n, r, t) : q.negbin.pdf(n, r, t));
const un = {};
un.DIST = (n, r, t, e) => (n = N(n), r = N(r), t = N(t), m(n, r, t) ? R : t <= 0 ? C : e ? q.normal.cdf(n, r, t) : q.normal.pdf(n, r, t));
un.INV = (n, r, t) => (n = N(n), r = N(r), t = N(t), m(n, r, t) ? R : q.normal.inv(n, r, t));
un.S = {};
un.S.DIST = (n, r) => (n = N(n), n instanceof Error ? R : r ? q.normal.cdf(n, 0, 1) : q.normal.pdf(n, 0, 1));
un.S.INV = (n) => (n = N(n), n instanceof Error ? R : q.normal.inv(n, 0, 1));
function ce(n, r) {
  if (r = U(L(r)), n = U(L(n)), m(r, n))
    return R;
  const t = q.mean(n), e = q.mean(r), i = n.length;
  let c = 0, g = 0, p = 0;
  for (let E = 0; E < i; E++)
    c += (n[E] - t) * (r[E] - e), g += Math.pow(n[E] - t, 2), p += Math.pow(r[E] - e, 2);
  return c / Math.sqrt(g * p);
}
const j = {};
j.EXC = (n, r) => {
  if (n = U(L(n)), r = N(r), m(n, r))
    return R;
  n = n.sort((c, g) => c - g);
  const t = n.length;
  if (r < 1 / (t + 1) || r > 1 - 1 / (t + 1))
    return C;
  const e = r * (t + 1) - 1, i = Math.floor(e);
  return br(e === i ? n[e] : n[i] + (e - i) * (n[i + 1] - n[i]));
};
j.INC = (n, r) => {
  if (n = U(L(n)), r = N(r), m(n, r))
    return R;
  n = n.sort((c, g) => c - g);
  const t = n.length, e = r * (t - 1), i = Math.floor(e);
  return br(e === i ? n[e] : n[i] + (e - i) * (n[i + 1] - n[i]));
};
const Jn = {};
Jn.EXC = (n, r, t) => {
  if (t = t === void 0 ? 3 : t, n = U(L(n)), r = N(r), t = N(t), m(n, r, t))
    return R;
  n = n.sort((o, f) => o - f);
  const e = Dr.apply(null, n), i = n.length, c = e.length, g = Math.pow(10, t);
  let p = 0, E = !1, s = 0;
  for (; !E && s < c; )
    r === e[s] ? (p = (n.indexOf(e[s]) + 1) / (i + 1), E = !0) : r >= e[s] && (r < e[s + 1] || s === c - 1) && (p = (n.indexOf(e[s]) + 1 + (r - e[s]) / (e[s + 1] - e[s])) / (i + 1), E = !0), s++;
  return Math.floor(p * g) / g;
};
Jn.INC = (n, r, t) => {
  if (t = t === void 0 ? 3 : t, n = U(L(n)), r = N(r), t = N(t), m(n, r, t))
    return R;
  n = n.sort((o, f) => o - f);
  const e = Dr.apply(null, n), i = n.length, c = e.length, g = Math.pow(10, t);
  let p = 0, E = !1, s = 0;
  for (; !E && s < c; )
    r === e[s] ? (p = n.indexOf(e[s]) / (i - 1), E = !0) : r >= e[s] && (r < e[s + 1] || s === c - 1) && (p = (n.indexOf(e[s]) + (r - e[s]) / (e[s + 1] - e[s])) / (i - 1), E = !0), s++;
  return Math.floor(p * g) / g;
};
function Vt(n, r) {
  return n = N(n), r = N(r), m(n, r) ? R : vn(n) / vn(n - r);
}
function Ft(n, r) {
  return n = N(n), r = N(r), m(n, r) ? R : Math.pow(n, r);
}
function yt(n) {
  return n = N(n), n instanceof Error ? R : Math.exp(-0.5 * n * n) / ht;
}
const Ur = {};
Ur.DIST = (n, r, t) => (n = N(n), r = N(r), m(n, r) ? R : t ? q.poisson.cdf(n, r) : q.poisson.pdf(n, r));
function Gt(n, r, t, e) {
  if (t === void 0)
    return 0;
  if (e = e === void 0 ? t : e, n = U(L(n)), r = U(L(r)), t = N(t), e = N(e), m(n, r, t, e))
    return R;
  if (t === e)
    return n.indexOf(t) >= 0 ? r[n.indexOf(t)] : 0;
  const i = n.sort((p, E) => p - E), c = i.length;
  let g = 0;
  for (let p = 0; p < c; p++)
    i[p] >= t && i[p] <= e && (g += r[n.indexOf(i[p])]);
  return g;
}
const On = {};
On.EXC = (n, r) => {
  if (n = U(L(n)), r = N(r), m(n, r))
    return R;
  switch (r) {
    case 1:
      return j.EXC(n, 0.25);
    case 2:
      return j.EXC(n, 0.5);
    case 3:
      return j.EXC(n, 0.75);
    default:
      return C;
  }
};
On.INC = (n, r) => {
  if (n = U(L(n)), r = N(r), m(n, r))
    return R;
  switch (r) {
    case 1:
      return j.INC(n, 0.25);
    case 2:
      return j.INC(n, 0.5);
    case 3:
      return j.INC(n, 0.75);
    default:
      return C;
  }
};
const kn = {};
kn.AVG = (n, r, t) => {
  if (n = N(n), r = U(L(r)), m(n, r))
    return R;
  r = L(r), t = t || !1;
  const e = t ? (g, p) => g - p : (g, p) => p - g;
  r = r.sort(e);
  const i = r.length;
  let c = 0;
  for (let g = 0; g < i; g++)
    r[g] === n && c++;
  return c > 1 ? (2 * r.indexOf(n) + c + 1) / 2 : r.indexOf(n) + 1;
};
kn.EQ = (n, r, t) => {
  if (n = N(n), r = U(L(r)), m(n, r))
    return R;
  t = t || !1;
  const e = t ? (i, c) => i - c : (i, c) => c - i;
  return r = r.sort(e), r.indexOf(n) + 1;
};
function Ht(n, r) {
  if (arguments.length !== 2)
    return F;
  if (r < 0)
    return C;
  if (!(n instanceof Array) || typeof r != "number")
    return R;
  if (n.length !== 0)
    return q.row(n, r);
}
function Yt(n, r) {
  return n = U(L(n)), r = U(L(r)), m(n, r) ? R : Math.pow(ce(n, r), 2);
}
function Vr() {
  const n = U(L(arguments));
  if (n instanceof Error)
    return n;
  const r = q.mean(n), t = n.length;
  let e = 0;
  for (let i = 0; i < t; i++)
    e += Math.pow(n[i] - r, 3);
  return t * e / ((t - 1) * (t - 2) * Math.pow(q.stdev(n, !0), 3));
}
Vr.P = function() {
  const n = U(L(arguments));
  if (n instanceof Error)
    return n;
  const r = q.mean(n), t = n.length;
  let e = 0, i = 0;
  for (let c = 0; c < t; c++)
    i += Math.pow(n[c] - r, 3), e += Math.pow(n[c] - r, 2);
  return i = i / t, e = e / t, i / Math.pow(e, 3 / 2);
};
function Bt(n, r) {
  if (n = U(L(n)), r = U(L(r)), m(n, r))
    return R;
  const t = q.mean(r), e = q.mean(n), i = r.length;
  let c = 0, g = 0;
  for (let p = 0; p < i; p++)
    c += (r[p] - t) * (n[p] - e), g += Math.pow(r[p] - t, 2);
  return c / g;
}
function ge(n, r) {
  return n = U(L(n)), r = N(r), m(n, r) ? n : n.sort((t, e) => t - e)[r - 1];
}
function Wt(n, r, t) {
  return n = N(n), r = N(r), t = N(t), m(n, r, t) ? R : (n - r) / t;
}
const b = {};
b.P = function() {
  const n = S.P.apply(this, arguments);
  let r = Math.sqrt(n);
  return isNaN(r) && (r = C), r;
};
b.S = function() {
  const n = S.S.apply(this, arguments);
  return Math.sqrt(n);
};
function zt() {
  const n = ae.apply(this, arguments);
  return Math.sqrt(n);
}
function Kt() {
  const n = he.apply(this, arguments);
  let r = Math.sqrt(n);
  return isNaN(r) && (r = C), r;
}
function Xt(n, r) {
  if (n = U(L(n)), r = U(L(r)), m(n, r))
    return R;
  const t = q.mean(r), e = q.mean(n), i = r.length;
  let c = 0, g = 0, p = 0;
  for (let E = 0; E < i; E++)
    c += Math.pow(n[E] - e, 2), g += (r[E] - t) * (n[E] - e), p += Math.pow(r[E] - t, 2);
  return Math.sqrt((c - g * g / p) / (i - 2));
}
const _ = {};
_.DIST = (n, r, t) => t !== 1 && t !== 2 ? C : t === 1 ? _.DIST.RT(n, r) : _.DIST["2T"](n, r);
_.DIST["2T"] = function(n, r) {
  return arguments.length !== 2 ? F : n < 0 || r < 1 ? C : typeof n != "number" || typeof r != "number" ? R : (1 - q.studentt.cdf(n, r)) * 2;
};
_.DIST.RT = function(n, r) {
  return arguments.length !== 2 ? F : n < 0 || r < 1 ? C : typeof n != "number" || typeof r != "number" ? R : 1 - q.studentt.cdf(n, r);
};
_.INV = (n, r) => (n = N(n), r = N(r), m(n, r) ? R : q.studentt.inv(n, r));
_.INV["2T"] = (n, r) => (n = N(n), r = N(r), n <= 0 || n > 1 || r < 1 ? C : m(n, r) ? R : Math.abs(q.studentt.inv(n / 2, r)));
_.TEST = (n, r) => {
  if (n = U(L(n)), r = U(L(r)), m(n, r))
    return R;
  const t = q.mean(n), e = q.mean(r);
  let i = 0, c = 0, g;
  for (g = 0; g < n.length; g++)
    i += Math.pow(n[g] - t, 2);
  for (g = 0; g < r.length; g++)
    c += Math.pow(r[g] - e, 2);
  i = i / (n.length - 1), c = c / (r.length - 1);
  const p = Math.abs(t - e) / Math.sqrt(i / n.length + c / r.length);
  return _.DIST["2T"](p, n.length + r.length - 2);
};
function Qt(n, r, t) {
  if (n = U(L(n)), r = U(L(r)), t = U(L(t)), m(n, r, t))
    return R;
  const e = Pr(n, r), i = e[0], c = e[1], g = [];
  return t.forEach((p) => {
    g.push(i * p + c);
  }), g;
}
function $t(n, r) {
  if (n = U(L(n)), r = N(r), m(n, r))
    return R;
  const t = mn(n.length * r, 2) / 2;
  return q.mean(
    qe(
      z(
        n.sort((e, i) => e - i),
        t
      ),
      t
    )
  );
}
const S = {};
S.P = function() {
  const n = Gn(L(arguments)), r = n.length;
  let t = 0;
  const e = Dn(n);
  let i;
  for (let c = 0; c < r; c++)
    t += Math.pow(n[c] - e, 2);
  return i = t / r, isNaN(i) && (i = C), i;
};
S.S = function() {
  const n = Gn(L(arguments)), r = n.length;
  let t = 0;
  const e = Dn(n);
  for (let i = 0; i < r; i++)
    t += Math.pow(n[i] - e, 2);
  return t / (r - 1);
};
function ae() {
  const n = L(arguments), r = n.length;
  let t = 0, e = 0;
  const i = Cr(n);
  for (let c = 0; c < r; c++) {
    const g = n[c];
    typeof g == "number" ? t += Math.pow(g - i, 2) : g === !0 ? t += Math.pow(1 - i, 2) : t += Math.pow(0 - i, 2), g !== null && e++;
  }
  return t / (e - 1);
}
function he() {
  const n = L(arguments), r = n.length;
  let t = 0, e = 0;
  const i = Cr(n);
  let c;
  for (let g = 0; g < r; g++) {
    const p = n[g];
    typeof p == "number" ? t += Math.pow(p - i, 2) : p === !0 ? t += Math.pow(1 - i, 2) : t += Math.pow(0 - i, 2), p !== null && e++;
  }
  return c = t / e, isNaN(c) && (c = C), c;
}
const Fr = {};
Fr.DIST = (n, r, t, e) => (n = N(n), r = N(r), t = N(t), m(n, r, t) ? R : e ? 1 - Math.exp(-Math.pow(n / t, r)) : Math.pow(n, r - 1) * Math.exp(-Math.pow(n / t, r)) * r / Math.pow(t, r));
const yr = {};
yr.TEST = (n, r, t) => {
  if (n = U(L(n)), r = N(r), m(n, r))
    return R;
  t = t || b.S(n);
  const e = n.length;
  return 1 - un.S.DIST((Dn(n) - r) / (t / Math.sqrt(e)), !0);
};
function Zt(n) {
  return n = N(n), n instanceof Error ? n : Math.abs(n);
}
function Jt(n) {
  if (n = N(n), n instanceof Error)
    return n;
  let r = Math.acos(n);
  return isNaN(r) && (r = C), r;
}
function kt(n) {
  if (n = N(n), n instanceof Error)
    return n;
  let r = Math.log(n + Math.sqrt(n * n - 1));
  return isNaN(r) && (r = C), r;
}
function St(n) {
  return n = N(n), n instanceof Error ? n : Math.atan(1 / n);
}
function xt(n) {
  if (n = N(n), n instanceof Error)
    return n;
  let r = 0.5 * Math.log((n + 1) / (n - 1));
  return isNaN(r) && (r = C), r;
}
function bt(n, r, t, e) {
  if (n = N(n), r = N(n), m(n, r))
    return R;
  switch (n) {
    case 1:
      return Dn(t);
    case 2:
      return Kn(t);
    case 3:
      return Xn(t);
    case 4:
      return nr(t);
    case 5:
      return rr(t);
    case 6:
      return er(t);
    case 7:
      return b.S(t);
    case 8:
      return b.P(t);
    case 9:
      return Nn(t);
    case 10:
      return S.S(t);
    case 11:
      return S.P(t);
    case 12:
      return le(t);
    case 13:
      return Cn.SNGL(t);
    case 14:
      return se(t, e);
    case 15:
      return ge(t, e);
    case 16:
      return j.INC(t, e);
    case 17:
      return On.INC(t, e);
    case 18:
      return j.EXC(t, e);
    case 19:
      return On.EXC(t, e);
  }
}
function jt(n) {
  if (n == null)
    return 0;
  if (n instanceof Error)
    return n;
  if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(n))
    return R;
  let r = 0;
  return n.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, (t) => {
    r += {
      M: 1e3,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }[t];
  }), r;
}
function _t(n) {
  if (n = N(n), n instanceof Error)
    return n;
  let r = Math.asin(n);
  return isNaN(r) && (r = C), r;
}
function no(n) {
  return n = N(n), n instanceof Error ? n : Math.log(n + Math.sqrt(n * n + 1));
}
function ro(n) {
  return n = N(n), n instanceof Error ? n : Math.atan(n);
}
function eo(n, r) {
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || Math.atan2(n, r);
}
function to(n) {
  if (n = N(n), n instanceof Error)
    return n;
  let r = Math.log((1 + n) / (1 - n)) / 2;
  return isNaN(r) && (r = C), r;
}
function oo(n, r, t) {
  n = N(n), r = N(r), t = N(t);
  const e = y(n, r, t);
  if (e)
    return e;
  if (r === 0)
    return C;
  const i = n.toString(r);
  return new Array(Math.max(t + 1 - i.length, 0)).join("0") + i;
}
function En(n, r, t) {
  n = N(n), r = N(r), t = N(t);
  const e = y(n, r, t);
  if (e)
    return e;
  if (r === 0)
    return 0;
  r = Math.abs(r);
  const i = -Math.floor(Math.log(r) / Math.log(10));
  return n >= 0 ? hn(Math.ceil(n / r) * r, i) : t === 0 ? -hn(Math.floor(Math.abs(n) / r) * r, i) : -hn(Math.ceil(Math.abs(n) / r) * r, i);
}
En.MATH = En;
En.PRECISE = En;
function Fn(n, r) {
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || (n < r ? C : vn(n) / (vn(r) * vn(n - r)));
}
function io(n, r) {
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || (n < r ? C : n === 0 && r === 0 ? 1 : Fn(n + r - 1, n - 1));
}
function fo(n) {
  return n = N(n), n instanceof Error ? n : Math.cos(n);
}
function uo(n) {
  return n = N(n), n instanceof Error ? n : (Math.exp(n) + Math.exp(-n)) / 2;
}
function so(n) {
  return n = N(n), n instanceof Error ? n : n === 0 ? Z : 1 / Math.tan(n);
}
function lo(n) {
  if (n = N(n), n instanceof Error)
    return n;
  if (n === 0)
    return Z;
  const r = Math.exp(2 * n);
  return (r + 1) / (r - 1);
}
function co(n) {
  return n = N(n), n instanceof Error ? n : n === 0 ? Z : 1 / Math.sin(n);
}
function go(n) {
  return n = N(n), n instanceof Error ? n : n === 0 ? Z : 2 / (Math.exp(n) - Math.exp(-n));
}
function ao(n, r) {
  if (arguments.length < 1)
    return R;
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || (r === 0 ? C : parseInt(n, r));
}
function ho(n) {
  return n = N(n), n instanceof Error ? n : n * 180 / Math.PI;
}
function vo(n) {
  return n = N(n), n instanceof Error ? n : En(n, -2, -1);
}
function Eo(n) {
  return arguments.length < 1 ? F : arguments.length > 1 ? wr : (n = N(n), n instanceof Error || (n = Math.exp(n)), n);
}
const xn = [];
function vn(n) {
  if (n = N(n), n instanceof Error)
    return n;
  const r = Math.floor(n);
  return r === 0 || r === 1 ? 1 : (xn[r] > 0 || (xn[r] = vn(r - 1) * r), xn[r]);
}
function ve(n) {
  if (n = N(n), n instanceof Error)
    return n;
  const r = Math.floor(n);
  return r <= 0 ? 1 : r * ve(r - 2);
}
function mn(n, r) {
  n = N(n), r = N(r);
  const t = y(n, r);
  if (t)
    return t;
  if (r === 0)
    return 0;
  if (!(n >= 0 && r > 0) && !(n <= 0 && r < 0))
    return C;
  r = Math.abs(r);
  const e = -Math.floor(Math.log(r) / Math.log(10));
  return n >= 0 ? hn(Math.floor(n / r) * r, e) : -hn(Math.ceil(Math.abs(n) / r), e);
}
mn.MATH = (n, r, t) => {
  if (r instanceof Error)
    return r;
  r = r === void 0 ? 0 : r, n = N(n), r = N(r), t = N(t);
  const e = y(n, r, t);
  if (e)
    return e;
  if (r === 0)
    return 0;
  r = r ? Math.abs(r) : 1;
  const i = -Math.floor(Math.log(r) / Math.log(10));
  return n >= 0 ? hn(Math.floor(n / r) * r, i) : t === 0 || t === void 0 ? -hn(Math.ceil(Math.abs(n) / r) * r, i) : -hn(Math.floor(Math.abs(n) / r) * r, i);
};
mn.PRECISE = mn.MATH;
function po() {
  const n = U(L(arguments));
  if (n instanceof Error)
    return n;
  const r = n.length, t = n[0];
  let e = t < 0 ? -t : t;
  for (let i = 1; i < r; i++) {
    const c = n[i];
    let g = c < 0 ? -c : c;
    for (; e && g; )
      e > g ? e %= g : g %= e;
    e += g;
  }
  return e;
}
function No(n) {
  return n = N(n), n instanceof Error ? n : Math.floor(n);
}
const Io = {
  CEILING: En
};
function To() {
  const n = U(L(arguments));
  if (n instanceof Error)
    return n;
  for (var r, t, e, i, c = 1; (e = n.pop()) !== void 0; ) {
    if (e === 0)
      return 0;
    for (; e > 1; ) {
      if (e % 2) {
        for (r = 3, t = Math.floor(Math.sqrt(e)); r <= t && e % r; r += 2)
          ;
        i = r <= t ? r : e;
      } else
        i = 2;
      for (e /= i, c *= i, r = n.length; r; n[--r] % i === 0 && (n[r] /= i) === 1 && n.splice(r, 1))
        ;
    }
  }
  return c;
}
function wo(n) {
  return n = N(n), n instanceof Error ? n : n === 0 ? C : Math.log(n);
}
function Ao(n, r) {
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || (n === 0 || r === 0 ? C : Math.log(n) / Math.log(r));
}
function Ro(n) {
  return n = N(n), n instanceof Error ? n : n === 0 ? C : Math.log(n) / Math.log(10);
}
function Do(n, r) {
  return (
    //Arguments are not arrays
    !Array.isArray(n) || !Array.isArray(r) || // There are empty arrays
    n.some((e) => !e.length) || r.some((e) => !e.length) || // Not all array elements are numbers
    Nr(n).some((e) => typeof e != "number") || Nr(r).some((e) => typeof e != "number") || // Number of columns in array1 is different from the number of rows in array2
    n[0].length !== r.length ? R : Array(n.length).fill(0).map(() => Array(r[0].length).fill(0)).map((e, i) => e.map((c, g) => n[i].reduce((p, E, s) => p + E * r[s][g], 0)))
  );
}
function Co(n, r) {
  n = N(n), r = N(r);
  const t = y(n, r);
  if (t)
    return t;
  if (r === 0)
    return Z;
  let e = Math.abs(n % r);
  return e = n < 0 ? r - e : e, r > 0 ? e : -e;
}
function Oo(n, r) {
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || (n * r === 0 ? 0 : n * r < 0 ? C : Math.round(n / r) * r);
}
function mo() {
  const n = U(L(arguments));
  if (n instanceof Error)
    return n;
  let r = 0, t = 1;
  for (let e = 0; e < n.length; e++)
    r += n[e], t *= vn(n[e]);
  return vn(r) / t;
}
function Lo(n) {
  return arguments.length > 1 ? F : (n = parseInt(n), !n || n <= 0 ? R : Array(n).fill(0).map(() => Array(n).fill(0)).map((r, t) => (r[t] = 1, r)));
}
function Mo(n) {
  if (n = N(n), n instanceof Error)
    return n;
  let r = Math.ceil(Math.abs(n));
  return r = r & 1 ? r : r + 1, n >= 0 ? r : -r;
}
function Po() {
  return Math.PI;
}
function Ee(n, r) {
  n = N(n), r = N(r);
  const t = y(n, r);
  if (t)
    return t;
  if (n === 0 && r === 0)
    return C;
  const e = Math.pow(n, r);
  return isNaN(e) ? C : e;
}
function er() {
  const r = L(arguments).filter((i) => i != null);
  if (r.length === 0)
    return 0;
  const t = U(r);
  if (t instanceof Error)
    return t;
  let e = 1;
  for (let i = 0; i < t.length; i++)
    e *= t[i];
  return e;
}
function qo(n, r) {
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || parseInt(n / r, 10);
}
function Uo(n) {
  return n = N(n), n instanceof Error ? n : n * Math.PI / 180;
}
function Vo() {
  return Math.random();
}
function Fo(n, r) {
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || n + Math.ceil((r - n + 1) * Math.random()) - 1;
}
function yo(n) {
  if (n = N(n), n instanceof Error)
    return n;
  const r = String(n).split(""), t = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX"
  ];
  let e = "", i = 3;
  for (; i--; )
    e = (t[+r.pop() + i * 10] || "") + e;
  return new Array(+r.join("") + 1).join("M") + e;
}
function hn(n, r) {
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || +(Math.round(+(n + "e" + r)) + "e" + r * -1);
}
function Go(n, r) {
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || (n > 0 ? 1 : -1) * Math.floor(Math.abs(n) * Math.pow(10, r)) / Math.pow(10, r);
}
function Ho(n, r) {
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || (n > 0 ? 1 : -1) * Math.ceil(Math.abs(n) * Math.pow(10, r)) / Math.pow(10, r);
}
function Yo(n) {
  return n = N(n), n instanceof Error ? n : 1 / Math.cos(n);
}
function Bo(n) {
  return n = N(n), n instanceof Error ? n : 2 / (Math.exp(n) + Math.exp(-n));
}
function Wo(n, r, t, e) {
  if (n = N(n), r = N(r), t = N(t), e = U(e), m(n, r, t, e))
    return R;
  let i = e[0] * Math.pow(n, r);
  for (let c = 1; c < e.length; c++)
    i += e[c] * Math.pow(n, r + c * t);
  return i;
}
function zo(n) {
  return n = N(n), n instanceof Error ? n : n < 0 ? -1 : n === 0 ? 0 : 1;
}
function Ko(n) {
  return n = N(n), n instanceof Error ? n : Math.sin(n);
}
function Xo(n) {
  return n = N(n), n instanceof Error ? n : (Math.exp(n) - Math.exp(-n)) / 2;
}
function Qo(n) {
  return n = N(n), n instanceof Error ? n : n < 0 ? C : Math.sqrt(n);
}
function $o(n) {
  return n = N(n), n instanceof Error ? n : Math.sqrt(n * Math.PI);
}
function Zo(n, r) {
  if (n = N(n), n instanceof Error)
    return n;
  switch (n) {
    case 1:
      return Dn(r);
    case 2:
      return Kn(r);
    case 3:
      return Xn(r);
    case 4:
      return nr(r);
    case 5:
      return rr(r);
    case 6:
      return er(r);
    case 7:
      return b.S(r);
    case 8:
      return b.P(r);
    case 9:
      return Nn(r);
    case 10:
      return S.S(r);
    case 11:
      return S.P(r);
    case 101:
      return Dn(r);
    case 102:
      return Kn(r);
    case 103:
      return Xn(r);
    case 104:
      return nr(r);
    case 105:
      return rr(r);
    case 106:
      return er(r);
    case 107:
      return b.S(r);
    case 108:
      return b.P(r);
    case 109:
      return Nn(r);
    case 110:
      return S.S(r);
    case 111:
      return S.P(r);
  }
}
function Nn() {
  let n = 0;
  return $(Qn(arguments), (r) => {
    if (n instanceof Error)
      return !1;
    if (r instanceof Error)
      n = r;
    else if (typeof r == "number")
      n += r;
    else if (typeof r == "string") {
      const t = parseFloat(r);
      !isNaN(t) && (n += t);
    } else if (Array.isArray(r)) {
      const t = Nn.apply(null, r);
      t instanceof Error ? n = t : n += t;
    }
  }), n;
}
function Jo(n, r, t) {
  if (n = L(n), t = t ? L(t) : n, n instanceof Error)
    return n;
  if (r == null || r instanceof Error)
    return 0;
  let e = 0;
  const i = r === "*", c = i ? null : Mn(r + "");
  for (let g = 0; g < n.length; g++) {
    const p = n[g], E = t[g];
    if (i)
      e += p;
    else {
      const s = [an(p, pn)].concat(c);
      e += Pn(s) ? E : 0;
    }
  }
  return e;
}
function ko() {
  const n = Qn(arguments), r = U(L(n.shift()));
  if (r instanceof Error)
    return r;
  const t = n, e = t.length / 2;
  for (let c = 0; c < e; c++)
    t[c * 2] = L(t[c * 2]);
  let i = 0;
  for (let c = 0; c < r.length; c++) {
    let g = !1;
    for (let p = 0; p < e; p++) {
      const E = t[p * 2][c], s = t[p * 2 + 1], o = s === void 0 || s === "*";
      let f = !1;
      if (o)
        f = !0;
      else {
        const u = Mn(s + ""), l = [an(E, pn)].concat(
          u
        );
        f = Pn(l);
      }
      if (!f) {
        g = !1;
        break;
      }
      g = !0;
    }
    g && (i += r[c]);
  }
  return i;
}
function So() {
  if (!arguments || arguments.length === 0)
    return R;
  const n = arguments.length + 1;
  let r = 0, t, e, i, c;
  for (let g = 0; g < arguments[0].length; g++)
    if (arguments[0][g] instanceof Array)
      for (let p = 0; p < arguments[0][g].length; p++) {
        for (t = 1, e = 1; e < n; e++) {
          const E = arguments[e - 1][g][p];
          if (E instanceof Error)
            return E;
          if (c = N(E), c instanceof Error)
            return c;
          t *= c;
        }
        r += t;
      }
    else {
      for (t = 1, e = 1; e < n; e++) {
        const p = arguments[e - 1][g];
        if (p instanceof Error)
          return p;
        if (i = N(p), i instanceof Error)
          return i;
        t *= i;
      }
      r += t;
    }
  return r;
}
function xo() {
  const n = U(L(arguments));
  if (n instanceof Error)
    return n;
  let r = 0;
  const t = n.length;
  for (let e = 0; e < t; e++)
    r += lr(n[e]) ? n[e] * n[e] : 0;
  return r;
}
function bo(n, r) {
  if (n = U(L(n)), r = U(L(r)), m(n, r))
    return R;
  let t = 0;
  for (let e = 0; e < n.length; e++)
    t += n[e] * n[e] - r[e] * r[e];
  return t;
}
function jo(n, r) {
  if (n = U(L(n)), r = U(L(r)), m(n, r))
    return R;
  let t = 0;
  n = U(L(n)), r = U(L(r));
  for (let e = 0; e < n.length; e++)
    t += n[e] * n[e] + r[e] * r[e];
  return t;
}
function _o(n, r) {
  if (n = U(L(n)), r = U(L(r)), m(n, r))
    return R;
  let t = 0;
  n = L(n), r = L(r);
  for (let e = 0; e < n.length; e++)
    t += Math.pow(n[e] - r[e], 2);
  return t;
}
function ni(n) {
  return n = N(n), n instanceof Error ? n : Math.tan(n);
}
function ri(n) {
  if (n = N(n), n instanceof Error)
    return n;
  const r = Math.exp(2 * n);
  return (r - 1) / (r + 1);
}
function ei(n, r) {
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || (n > 0 ? 1 : -1) * Math.floor(Math.abs(n) * Math.pow(10, r)) / Math.pow(10, r);
}
function ti(n, r) {
  if (arguments.length !== 2)
    return F;
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || n + r;
}
function oi(n, r) {
  if (arguments.length !== 2)
    return F;
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || (r === 0 ? Z : n / r);
}
function ii(n, r) {
  return arguments.length !== 2 ? F : n instanceof Error ? n : r instanceof Error ? r : (n === null && (n = void 0), r === null && (r = void 0), n === r);
}
function fi(n, r) {
  if (arguments.length !== 2)
    return F;
  if (n instanceof Error)
    return n;
  if (r instanceof Error)
    return r;
  ur(n, r) ? (n = K(n), r = K(r)) : (n = N(n), r = N(r));
  const t = y(n, r);
  return t || n > r;
}
function ui(n, r) {
  if (arguments.length !== 2)
    return F;
  ur(n, r) ? (n = K(n), r = K(r)) : (n = N(n), r = N(r));
  const t = y(n, r);
  return t || n >= r;
}
function si(n, r) {
  if (arguments.length !== 2)
    return F;
  ur(n, r) ? (n = K(n), r = K(r)) : (n = N(n), r = N(r));
  const t = y(n, r);
  return t || n < r;
}
function li(n, r) {
  if (arguments.length !== 2)
    return F;
  ur(n, r) ? (n = K(n), r = K(r)) : (n = N(n), r = N(r));
  const t = y(n, r);
  return t || n <= r;
}
function ci(n, r) {
  if (arguments.length !== 2)
    return F;
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || n - r;
}
function gi(n, r) {
  if (arguments.length !== 2)
    return F;
  n = N(n), r = N(r);
  const t = y(n, r);
  return t || n * r;
}
function ai(n, r) {
  return arguments.length !== 2 ? F : n instanceof Error ? n : r instanceof Error ? r : (n === null && (n = void 0), r === null && (r = void 0), n !== r);
}
function hi(n, r) {
  return arguments.length !== 2 ? F : Ee(n, r);
}
var vi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ADD: ti,
  DIVIDE: oi,
  EQ: ii,
  GT: fi,
  GTE: ui,
  LT: si,
  LTE: li,
  MINUS: ci,
  MULTIPLY: gi,
  NE: ai,
  POW: hi
});
const Ei = new Date(Date.UTC(1900, 0, 1)), pi = [
  void 0,
  0,
  1,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  1,
  2,
  3,
  4,
  5,
  6,
  0
], di = [
  [],
  [1, 2, 3, 4, 5, 6, 7],
  [7, 1, 2, 3, 4, 5, 6],
  [6, 0, 1, 2, 3, 4, 5],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [7, 1, 2, 3, 4, 5, 6],
  [6, 7, 1, 2, 3, 4, 5],
  [5, 6, 7, 1, 2, 3, 4],
  [4, 5, 6, 7, 1, 2, 3],
  [3, 4, 5, 6, 7, 1, 2],
  [2, 3, 4, 5, 6, 7, 1],
  [1, 2, 3, 4, 5, 6, 7]
], tr = [
  [],
  [6, 0],
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  void 0,
  void 0,
  void 0,
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 6]
];
function Ni(n, r, t) {
  let e;
  return n = N(n), r = N(r), t = N(t), m(n, r, t) ? e = R : (e = new Date(n, r - 1, t), e.getFullYear() < 0 && (e = C)), e;
}
function An(n, r, t) {
  t = t.toUpperCase(), n = G(n), r = G(r);
  const e = n.getFullYear(), i = n.getMonth(), c = n.getDate(), g = r.getFullYear(), p = r.getMonth(), E = r.getDate();
  let s;
  switch (t) {
    case "Y":
      s = Math.floor(Gr(n, r));
      break;
    case "D":
      s = Rn(r, n);
      break;
    case "M":
      s = p - i + 12 * (g - e), E < c && s--;
      break;
    case "MD":
      c <= E ? s = E - c : (p === 0 ? (n.setFullYear(g - 1), n.setMonth(12)) : (n.setFullYear(g), n.setMonth(p - 1)), s = Rn(r, n));
      break;
    case "YM":
      s = p - i + 12 * (g - e), E < c && s--, s = s % 12;
      break;
    case "YD":
      p > i || p === i && E < c ? n.setFullYear(g) : n.setFullYear(g - 1), s = Rn(r, n);
      break;
  }
  return s;
}
function Ii(n) {
  if (typeof n != "string")
    return R;
  const r = Date.parse(n);
  return isNaN(r) ? R : new Date(n);
}
function Ti(n) {
  const r = G(n);
  return r instanceof Error ? r : r.getDate();
}
function or(n) {
  const r = new Date(n);
  return r.setHours(0, 0, 0, 0), r;
}
function Rn(n, r) {
  return n = G(n), r = G(r), n instanceof Error ? n : r instanceof Error ? r : Qr(or(n)) - Qr(or(r));
}
function In(n, r, t) {
  if (t = Rr(t || "false"), n = G(n), r = G(r), n instanceof Error)
    return n;
  if (r instanceof Error)
    return r;
  if (t instanceof Error)
    return t;
  const e = n.getMonth();
  let i = r.getMonth(), c, g;
  if (t)
    c = n.getDate() === 31 ? 30 : n.getDate(), g = r.getDate() === 31 ? 30 : r.getDate();
  else {
    const p = new Date(n.getFullYear(), e + 1, 0).getDate(), E = new Date(r.getFullYear(), i + 1, 0).getDate();
    c = n.getDate() === p ? 30 : n.getDate(), r.getDate() === E ? c < 30 ? (i++, g = 1) : g = 30 : g = r.getDate();
  }
  return 360 * (r.getFullYear() - n.getFullYear()) + 30 * (i - e) + (g - c);
}
function wi(n, r) {
  return n = G(n), n instanceof Error ? n : isNaN(r) ? R : (r = parseInt(r, 10), n.setMonth(n.getMonth() + r), n);
}
function Ai(n, r) {
  return n = G(n), n instanceof Error ? n : isNaN(r) ? R : (r = parseInt(r, 10), new Date(n.getFullYear(), n.getMonth() + r + 1, 0));
}
function Ri(n) {
  return n = G(n), n instanceof Error ? n : n.getHours();
}
function pe(n) {
  if (n = G(n), n instanceof Error)
    return n;
  n = or(n), n.setDate(n.getDate() + 4 - (n.getDay() || 7));
  const r = new Date(n.getFullYear(), 0, 1);
  return Math.ceil(((n - r) / 864e5 + 1) / 7);
}
function Di(n) {
  return n = G(n), n instanceof Error ? n : n.getMinutes();
}
function Ci(n) {
  return n = G(n), n instanceof Error ? n : n.getMonth() + 1;
}
function cr(n, r, t) {
  return cr.INTL(n, r, 1, t);
}
cr.INTL = (n, r, t, e) => {
  if (n = G(n), n instanceof Error)
    return n;
  if (r = G(r), r instanceof Error)
    return r;
  let i = !1;
  const c = [], g = [1, 2, 3, 4, 5, 6, 0], p = new RegExp("^[0|1]{7}$");
  if (t === void 0)
    t = tr[1];
  else if (typeof t == "string" && p.test(t)) {
    i = !0, t = t.split("");
    for (let f = 0; f < t.length; f++)
      t[f] === "1" && c.push(g[f]);
  } else
    t = tr[t];
  if (!(t instanceof Array))
    return R;
  e === void 0 ? e = [] : e instanceof Array || (e = [e]);
  for (let f = 0; f < e.length; f++) {
    const u = G(e[f]);
    if (u instanceof Error)
      return u;
    e[f] = u;
  }
  const E = Math.round((r - n) / (1e3 * 60 * 60 * 24)) + 1;
  let s = E;
  const o = n;
  for (let f = 0; f < E; f++) {
    const u = (/* @__PURE__ */ new Date()).getTimezoneOffset() > 0 ? o.getUTCDay() : o.getDay();
    let l = i ? c.includes(u) : u === t[0] || u === t[1];
    for (let a = 0; a < e.length; a++) {
      const h = e[a];
      if (h.getDate() === o.getDate() && h.getMonth() === o.getMonth() && h.getFullYear() === o.getFullYear()) {
        l = !0;
        break;
      }
    }
    l && s--, o.setDate(o.getDate() + 1);
  }
  return s;
};
function Oi() {
  return /* @__PURE__ */ new Date();
}
function mi(n) {
  return n = G(n), n instanceof Error ? n : n.getSeconds();
}
function Li(n, r, t) {
  return n = N(n), r = N(r), t = N(t), m(n, r, t) ? R : n < 0 || r < 0 || t < 0 ? C : (3600 * n + 60 * r + t) / 86400;
}
function Mi(n) {
  return n = G(n), n instanceof Error ? n : (3600 * n.getHours() + 60 * n.getMinutes() + n.getSeconds()) / 86400;
}
function Pi() {
  return or(/* @__PURE__ */ new Date());
}
function qi(n, r) {
  if (n = G(n), n instanceof Error)
    return n;
  r === void 0 && (r = 1);
  const t = n.getDay();
  return di[r][t];
}
function Ui(n, r) {
  if (n = G(n), n instanceof Error)
    return n;
  if (r === void 0 && (r = 1), r === 21)
    return pe(n);
  const t = pi[r];
  let e = new Date(n.getFullYear(), 0, 1);
  const i = e.getDay() < t ? 1 : 0;
  return e -= Math.abs(e.getDay() - t) * 24 * 60 * 60 * 1e3, Math.floor((n - e) / (1e3 * 60 * 60 * 24) / 7 + 1) + i;
}
function gr(n, r, t) {
  return gr.INTL(n, r, 1, t);
}
gr.INTL = (n, r, t, e) => {
  if (n = G(n), n instanceof Error)
    return n;
  if (r = N(r), r instanceof Error)
    return r;
  if (r < 0)
    return C;
  if (t === void 0 ? t = tr[1] : t = tr[t], !(t instanceof Array))
    return R;
  e === void 0 ? e = [] : e instanceof Array || (e = [e]);
  for (let c = 0; c < e.length; c++) {
    const g = G(e[c]);
    if (g instanceof Error)
      return g;
    e[c] = g;
  }
  let i = 0;
  for (; i < r; ) {
    n.setDate(n.getDate() + 1);
    const c = n.getDay();
    if (!(c === t[0] || c === t[1])) {
      for (let g = 0; g < e.length; g++) {
        const p = e[g];
        if (p.getDate() === n.getDate() && p.getMonth() === n.getMonth() && p.getFullYear() === n.getFullYear()) {
          i--;
          break;
        }
      }
      i++;
    }
  }
  return n;
};
function Vi(n) {
  return n = G(n), n instanceof Error ? n : n.getFullYear();
}
function Er(n) {
  return new Date(n, 1, 29).getMonth() === 1;
}
function bn(n, r) {
  return Math.ceil((r - n) / 1e3 / 60 / 60 / 24);
}
function Gr(n, r, t) {
  if (n = G(n), n instanceof Error)
    return n;
  if (r = G(r), r instanceof Error)
    return r;
  t = t || 0;
  let e = n.getDate();
  const i = n.getMonth() + 1, c = n.getFullYear();
  let g = r.getDate();
  const p = r.getMonth() + 1, E = r.getFullYear();
  switch (t) {
    case 0:
      return e === 31 && g === 31 ? (e = 30, g = 30) : e === 31 ? e = 30 : e === 30 && g === 31 && (g = 30), (g + p * 30 + E * 360 - (e + i * 30 + c * 360)) / 360;
    case 1: {
      const s = (a, h) => {
        const v = a.getFullYear(), I = new Date(v, 2, 1);
        if (Er(v) && a < I && h >= I)
          return !0;
        const T = h.getFullYear(), d = new Date(T, 2, 1);
        return Er(T) && h >= d && a < d;
      };
      let o = 365;
      if (c === E || c + 1 === E && (i > p || i === p && e >= g))
        return (c === E && Er(c) || s(n, r) || p === 1 && g === 29) && (o = 366), bn(n, r) / o;
      const f = E - c + 1, l = (new Date(E + 1, 0, 1) - new Date(c, 0, 1)) / 1e3 / 60 / 60 / 24 / f;
      return bn(n, r) / l;
    }
    case 2:
      return bn(n, r) / 360;
    case 3:
      return bn(n, r) / 365;
    case 4:
      return (g + p * 30 + E * 360 - (e + i * 30 + c * 360)) / 360;
  }
}
function Qr(n) {
  const r = n > -22038912e5 ? 2 : 1;
  return Math.ceil((n - Ei) / 864e5) + r;
}
function Fi() {
  throw new Error("ASC is not implemented");
}
function yi() {
  throw new Error("BAHTTEXT is not implemented");
}
function de(n) {
  return n = N(n), n === 0 ? R : n instanceof Error ? n : String.fromCharCode(n);
}
function Gi(n) {
  if (m(n))
    return n;
  n = n || "";
  const r = /[\0-\x1F]/g;
  return n.replace(r, "");
}
function Ne(n) {
  if (m(n))
    return n;
  n = n || "";
  let r = n.charCodeAt(0);
  return isNaN(r) && (r = R), r;
}
function Ie() {
  const n = L(arguments), r = y.apply(void 0, n);
  if (r)
    return r;
  let t = 0;
  for (; (t = n.indexOf(!0)) > -1; )
    n[t] = "TRUE";
  let e = 0;
  for (; (e = n.indexOf(!1)) > -1; )
    n[e] = "FALSE";
  return n.join("");
}
const Hi = Ie;
function Yi() {
  throw new Error("DBCS is not implemented");
}
function Bi(n, r = 2) {
  if (n = N(n), isNaN(n))
    return R;
  n = hn(n, r);
  const t = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: r >= 0 ? r : 0,
    maximumFractionDigits: r >= 0 ? r : 0
  }, e = n.toLocaleString("en-US", t);
  return n < 0 ? "$(" + e.slice(2) + ")" : e;
}
function Wi(n, r) {
  if (arguments.length !== 2)
    return F;
  const t = y(n, r);
  return t || (n = K(n), r = K(r), n === r);
}
function zi(n, r, t) {
  if (arguments.length < 2)
    return F;
  n = K(n), r = K(r), t = t === void 0 ? 0 : t;
  const e = r.indexOf(n, t - 1);
  return e === -1 ? R : e + 1;
}
function Te(n, r = 2, t = !1) {
  if (n = N(n), isNaN(n) || (r = N(r), isNaN(r)))
    return R;
  if (r < 0) {
    const e = Math.pow(10, -r);
    n = Math.round(n / e) * e;
  } else
    n = n.toFixed(r);
  if (t)
    n = n.toString().replace(/,/g, "");
  else {
    const e = n.toString().split(".");
    e[0] = e[0].replace(/\B(?=(\d{3})+$)/g, ","), n = e.join(".");
  }
  return n;
}
function Ki(n, r) {
  const t = y(n, r);
  return t || (n = K(n), r = r === void 0 ? 1 : r, r = N(r), r instanceof Error || typeof n != "string" ? R : n.substring(0, r));
}
function Xi(n) {
  return arguments.length === 0 ? wr : n instanceof Error ? n : Array.isArray(n) ? R : K(n).length;
}
function Qi(n) {
  return arguments.length !== 1 ? R : (n = K(n), m(n) ? n : n.toLowerCase());
}
function $i(n, r, t) {
  if (r == null)
    return R;
  if (r = N(r), t = N(t), m(r, t) || typeof n != "string")
    return t;
  const e = r - 1, i = e + t;
  return n.substring(e, i);
}
function Zi(n, r, t) {
  return n = Hn(n) ? n : "", typeof n == "number" ? n : typeof n != "string" ? F : (r = typeof r > "u" ? "." : r, t = typeof t > "u" ? "," : t, Number(n.replace(r, ".").replace(t, "")));
}
function Ji() {
  throw new Error("PRONETIC is not implemented");
}
function ki(n) {
  return m(n) ? n : isNaN(n) && typeof n == "number" ? R : (n = K(n), n.replace(/\w\S*/g, (r) => r.charAt(0).toUpperCase() + r.substr(1).toLowerCase()));
}
function Si(n, r, t, e) {
  return r = N(r), t = N(t), m(r, t) || typeof n != "string" || typeof e != "string" ? R : n.substr(0, r - 1) + e + n.substr(r - 1 + t);
}
function nn(n, r) {
  const t = y(n, r);
  return t || (n = K(n), r = N(r), r instanceof Error ? r : new Array(r + 1).join(n));
}
function xi(n, r) {
  const t = y(n, r);
  return t || (n = K(n), r = r === void 0 ? 1 : r, r = N(r), r instanceof Error ? r : n.substring(n.length - r));
}
function bi(n, r, t) {
  let e;
  return typeof n != "string" || typeof r != "string" ? R : (t = t === void 0 ? 0 : t, e = r.toLowerCase().indexOf(n.toLowerCase(), t - 1) + 1, e === 0 ? R : e);
}
function ji(n, r, t, e) {
  if (arguments.length < 3)
    return F;
  if (!n || !r)
    return n;
  if (e === void 0)
    return n.split(r).join(t);
  {
    if (e = Math.floor(Number(e)), Number.isNaN(e) || e <= 0)
      return R;
    let i = 0, c = 0;
    for (; i > -1 && n.indexOf(r, i) > -1; )
      if (i = n.indexOf(r, i + 1), c++, i > -1 && c === e)
        return n.substring(0, i) + t + n.substring(i + r.length);
    return n;
  }
}
function _i(n) {
  return n instanceof Error || typeof n == "string" ? n : "";
}
function nf(n, r) {
  if (n === void 0 || n instanceof Error || r instanceof Error)
    return F;
  if (r == null)
    return "";
  if (typeof r == "number")
    return String(r);
  if (typeof r != "string")
    return R;
  const t = r.startsWith("$") ? "$" : "", e = r.endsWith("%");
  r = r.replace(/%/g, "").replace(/\$/g, "");
  const i = r.split(".")[1].match(/0/g).length, c = !r.includes(",");
  return e && (n = n * 100), n = Te(n, i, c), n.startsWith("-") ? (n = n.replace("-", ""), n = "-" + t + n) : n = t + n, e && (n = n + "%"), n;
}
function rf(n, r, ...t) {
  if (typeof r != "boolean" && (r = Rr(r)), arguments.length < 3)
    return F;
  n = n ?? "";
  let e = L(t), i = r ? e.filter((c) => c) : e;
  if (Array.isArray(n)) {
    n = L(n);
    let c = i.map((p) => [p]), g = 0;
    for (let p = 0; p < c.length - 1; p++)
      c[p].push(n[g]), g++, g === n.length && (g = 0);
    return i = L(c), i.join("");
  }
  return i.join(n);
}
function ef(n) {
  return n = K(n), n instanceof Error ? n : n.replace(/\s+/g, " ").trim();
}
const tf = de, of = Ne;
function ff(n) {
  return n = K(n), n instanceof Error ? n : n.toUpperCase();
}
function uf(n) {
  const r = y(n);
  if (r)
    return r;
  if (typeof n == "number")
    return n;
  if (Hn(n) || (n = ""), typeof n != "string")
    return R;
  const t = /(%)$/.test(n) || /^(%)/.test(n);
  if (n = n.replace(/^[^0-9-]{0,3}/, ""), n = n.replace(/[^0-9]{0,3}$/, ""), n = n.replace(/[ ,]/g, ""), n === "")
    return 0;
  let e = Number(n);
  return isNaN(e) ? R : (e = e || 0, t && (e = e * 0.01), e);
}
function Hr(n) {
  return /^[01]{1,10}$/.test(n);
}
function sf(n, r) {
  return n = N(n), r = N(r), m(n, r) ? R : ir.besseli(n, r);
}
function lf(n, r) {
  return n = N(n), r = N(r), m(n, r) ? R : ir.besselj(n, r);
}
function cf(n, r) {
  return n = N(n), r = N(r), m(n, r) ? R : ir.besselk(n, r);
}
function gf(n, r) {
  return n = N(n), r = N(r), m(n, r) ? R : ir.bessely(n, r);
}
function af(n) {
  if (!Hr(n))
    return C;
  const r = parseInt(n, 2), t = n.toString();
  return t.length === 10 && t.substring(0, 1) === "1" ? parseInt(t.substring(1), 2) - 512 : r;
}
function hf(n, r) {
  if (!Hr(n))
    return C;
  const t = n.toString();
  if (t.length === 10 && t.substring(0, 1) === "1")
    return (1099511627264 + parseInt(t.substring(1), 2)).toString(16);
  const e = parseInt(n, 2).toString(16);
  return r === void 0 ? e : isNaN(r) ? R : r < 0 ? C : (r = Math.floor(r), r >= e.length ? nn("0", r - e.length) + e : C);
}
function vf(n, r) {
  if (!Hr(n))
    return C;
  const t = n.toString();
  if (t.length === 10 && t.substring(0, 1) === "1")
    return (1073741312 + parseInt(t.substring(1), 2)).toString(8);
  const e = parseInt(n, 2).toString(8);
  return r === void 0 ? e : isNaN(r) ? R : r < 0 ? C : (r = Math.floor(r), r >= e.length ? nn("0", r - e.length) + e : C);
}
function Ef(n, r) {
  return n = N(n), r = N(r), m(n, r) ? R : n < 0 || r < 0 || Math.floor(n) !== n || Math.floor(r) !== r || n > 281474976710655 || r > 281474976710655 ? C : n & r;
}
function pf(n, r) {
  return n = N(n), r = N(r), m(n, r) ? R : n < 0 || Math.floor(n) !== n || n > 281474976710655 || Math.abs(r) > 53 ? C : r >= 0 ? n << r : n >> -r;
}
function df(n, r) {
  return n = N(n), r = N(r), m(n, r) ? R : n < 0 || r < 0 || Math.floor(n) !== n || Math.floor(r) !== r || n > 281474976710655 || r > 281474976710655 ? C : n | r;
}
function Nf(n, r) {
  return n = N(n), r = N(r), m(n, r) ? R : n < 0 || Math.floor(n) !== n || n > 281474976710655 || Math.abs(r) > 53 ? C : r >= 0 ? n >> r : n << -r;
}
function If(n, r) {
  return n = N(n), r = N(r), m(n, r) ? R : n < 0 || r < 0 || Math.floor(n) !== n || Math.floor(r) !== r || n > 281474976710655 || r > 281474976710655 ? C : n ^ r;
}
function J(n, r, t) {
  if (n = N(n), r = N(r), m(n, r))
    return n;
  if (t = t === void 0 ? "i" : t, t !== "i" && t !== "j")
    return R;
  if (n === 0 && r === 0)
    return 0;
  if (n === 0)
    return r === 1 ? t : r.toString() + t;
  if (r === 0)
    return n.toString();
  {
    const e = r > 0 ? "+" : "";
    return n.toString() + e + (r === 1 ? t : r.toString() + t);
  }
}
function Tf(n, r, t) {
  if (n = N(n), n instanceof Error)
    return n;
  const e = [
    ["a.u. of action", "?", null, "action", !1, !1, 105457168181818e-48],
    ["a.u. of charge", "e", null, "electric_charge", !1, !1, 160217653141414e-33],
    ["a.u. of energy", "Eh", null, "energy", !1, !1, 435974417757576e-32],
    ["a.u. of length", "a?", null, "length", !1, !1, 529177210818182e-25],
    ["a.u. of mass", "m?", null, "mass", !1, !1, 910938261616162e-45],
    ["a.u. of time", "?/Eh", null, "time", !1, !1, 241888432650516e-31],
    ["admiralty knot", "admkn", null, "speed", !1, !0, 0.514773333],
    ["ampere", "A", null, "electric_current", !0, !1, 1],
    ["ampere per meter", "A/m", null, "magnetic_field_intensity", !0, !1, 1],
    ["ångström", "Å", ["ang"], "length", !1, !0, 1e-10],
    ["are", "ar", null, "area", !1, !0, 100],
    ["astronomical unit", "ua", null, "length", !1, !1, 149597870691667e-25],
    ["bar", "bar", null, "pressure", !1, !1, 1e5],
    ["barn", "b", null, "area", !1, !1, 1e-28],
    ["becquerel", "Bq", null, "radioactivity", !0, !1, 1],
    ["bit", "bit", ["b"], "information", !1, !0, 1],
    ["btu", "BTU", ["btu"], "energy", !1, !0, 1055.05585262],
    ["byte", "byte", null, "information", !1, !0, 8],
    ["candela", "cd", null, "luminous_intensity", !0, !1, 1],
    ["candela per square metre", "cd/m?", null, "luminance", !0, !1, 1],
    ["coulomb", "C", null, "electric_charge", !0, !1, 1],
    ["cubic ångström", "ang3", ["ang^3"], "volume", !1, !0, 1e-30],
    ["cubic foot", "ft3", ["ft^3"], "volume", !1, !0, 0.028316846592],
    ["cubic inch", "in3", ["in^3"], "volume", !1, !0, 16387064e-12],
    ["cubic light-year", "ly3", ["ly^3"], "volume", !1, !0, 846786664623715e-61],
    ["cubic metre", "m?", null, "volume", !0, !0, 1],
    ["cubic mile", "mi3", ["mi^3"], "volume", !1, !0, 416818182544058e-5],
    ["cubic nautical mile", "Nmi3", ["Nmi^3"], "volume", !1, !0, 6352182208],
    ["cubic Pica", "Pica3", ["Picapt3", "Pica^3", "Picapt^3"], "volume", !1, !0, 758660370370369e-22],
    ["cubic yard", "yd3", ["yd^3"], "volume", !1, !0, 0.764554857984],
    ["cup", "cup", null, "volume", !1, !0, 2365882365e-13],
    ["dalton", "Da", ["u"], "mass", !1, !1, 166053886282828e-41],
    ["day", "d", ["day"], "time", !1, !0, 86400],
    ["degree", "°", null, "angle", !1, !1, 0.0174532925199433],
    ["degrees Rankine", "Rank", null, "temperature", !1, !0, 0.555555555555556],
    ["dyne", "dyn", ["dy"], "force", !1, !0, 1e-5],
    ["electronvolt", "eV", ["ev"], "energy", !1, !0, 1.60217656514141],
    ["ell", "ell", null, "length", !1, !0, 1.143],
    ["erg", "erg", ["e"], "energy", !1, !0, 1e-7],
    ["farad", "F", null, "electric_capacitance", !0, !1, 1],
    ["fluid ounce", "oz", null, "volume", !1, !0, 295735295625e-16],
    ["foot", "ft", null, "length", !1, !0, 0.3048],
    ["foot-pound", "flb", null, "energy", !1, !0, 1.3558179483314],
    ["gal", "Gal", null, "acceleration", !1, !1, 0.01],
    ["gallon", "gal", null, "volume", !1, !0, 0.003785411784],
    ["gauss", "G", ["ga"], "magnetic_flux_density", !1, !0, 1],
    ["grain", "grain", null, "mass", !1, !0, 647989e-10],
    ["gram", "g", null, "mass", !1, !0, 1e-3],
    ["gray", "Gy", null, "absorbed_dose", !0, !1, 1],
    ["gross registered ton", "GRT", ["regton"], "volume", !1, !0, 2.8316846592],
    ["hectare", "ha", null, "area", !1, !0, 1e4],
    ["henry", "H", null, "inductance", !0, !1, 1],
    ["hertz", "Hz", null, "frequency", !0, !1, 1],
    ["horsepower", "HP", ["h"], "power", !1, !0, 745.69987158227],
    ["horsepower-hour", "HPh", ["hh", "hph"], "energy", !1, !0, 2684519538e-3],
    ["hour", "h", ["hr"], "time", !1, !0, 3600],
    ["imperial gallon (U.K.)", "uk_gal", null, "volume", !1, !0, 454609e-8],
    ["imperial hundredweight", "lcwt", ["uk_cwt", "hweight"], "mass", !1, !0, 50.802345],
    ["imperial quart (U.K)", "uk_qt", null, "volume", !1, !0, 0.0011365225],
    ["imperial ton", "brton", ["uk_ton", "LTON"], "mass", !1, !0, 1016.046909],
    ["inch", "in", null, "length", !1, !0, 0.0254],
    ["international acre", "uk_acre", null, "area", !1, !0, 4046.8564224],
    ["IT calorie", "cal", null, "energy", !1, !0, 4.1868],
    ["joule", "J", null, "energy", !0, !0, 1],
    ["katal", "kat", null, "catalytic_activity", !0, !1, 1],
    ["kelvin", "K", ["kel"], "temperature", !0, !0, 1],
    ["kilogram", "kg", null, "mass", !0, !0, 1],
    ["knot", "kn", null, "speed", !1, !0, 0.514444444444444],
    ["light-year", "ly", null, "length", !1, !0, 9460730472580800],
    ["litre", "L", ["l", "lt"], "volume", !1, !0, 1e-3],
    ["lumen", "lm", null, "luminous_flux", !0, !1, 1],
    ["lux", "lx", null, "illuminance", !0, !1, 1],
    ["maxwell", "Mx", null, "magnetic_flux", !1, !1, 1e-18],
    ["measurement ton", "MTON", null, "volume", !1, !0, 1.13267386368],
    ["meter per hour", "m/h", ["m/hr"], "speed", !1, !0, 27777777777778e-17],
    ["meter per second", "m/s", ["m/sec"], "speed", !0, !0, 1],
    ["meter per second squared", "m?s??", null, "acceleration", !0, !1, 1],
    ["parsec", "pc", ["parsec"], "length", !1, !0, 30856775814671900],
    ["meter squared per second", "m?/s", null, "kinematic_viscosity", !0, !1, 1],
    ["metre", "m", null, "length", !0, !0, 1],
    ["miles per hour", "mph", null, "speed", !1, !0, 0.44704],
    ["millimetre of mercury", "mmHg", null, "pressure", !1, !1, 133.322],
    ["minute", "?", null, "angle", !1, !1, 290888208665722e-18],
    ["minute", "min", ["mn"], "time", !1, !0, 60],
    ["modern teaspoon", "tspm", null, "volume", !1, !0, 5e-6],
    ["mole", "mol", null, "amount_of_substance", !0, !1, 1],
    ["morgen", "Morgen", null, "area", !1, !0, 2500],
    ["n.u. of action", "?", null, "action", !1, !1, 105457168181818e-48],
    ["n.u. of mass", "m?", null, "mass", !1, !1, 910938261616162e-45],
    ["n.u. of speed", "c?", null, "speed", !1, !1, 299792458],
    ["n.u. of time", "?/(me?c??)", null, "time", !1, !1, 128808866778687e-35],
    ["nautical mile", "M", ["Nmi"], "length", !1, !0, 1852],
    ["newton", "N", null, "force", !0, !0, 1],
    ["œrsted", "Oe ", null, "magnetic_field_intensity", !1, !1, 79.5774715459477],
    ["ohm", "Ω", null, "electric_resistance", !0, !1, 1],
    ["ounce mass", "ozm", null, "mass", !1, !0, 0.028349523125],
    ["pascal", "Pa", null, "pressure", !0, !1, 1],
    ["pascal second", "Pa?s", null, "dynamic_viscosity", !0, !1, 1],
    ["pferdestärke", "PS", null, "power", !1, !0, 735.49875],
    ["phot", "ph", null, "illuminance", !1, !1, 1e-4],
    ["pica (1/6 inch)", "pica", null, "length", !1, !0, 35277777777778e-17],
    ["pica (1/72 inch)", "Pica", ["Picapt"], "length", !1, !0, 0.00423333333333333],
    ["poise", "P", null, "dynamic_viscosity", !1, !1, 0.1],
    ["pond", "pond", null, "force", !1, !0, 980665e-8],
    ["pound force", "lbf", null, "force", !1, !0, 4.4482216152605],
    ["pound mass", "lbm", null, "mass", !1, !0, 0.45359237],
    ["quart", "qt", null, "volume", !1, !0, 946352946e-12],
    ["radian", "rad", null, "angle", !0, !1, 1],
    ["second", "?", null, "angle", !1, !1, 484813681109536e-20],
    ["second", "s", ["sec"], "time", !0, !0, 1],
    ["short hundredweight", "cwt", ["shweight"], "mass", !1, !0, 45.359237],
    ["siemens", "S", null, "electrical_conductance", !0, !1, 1],
    ["sievert", "Sv", null, "equivalent_dose", !0, !1, 1],
    ["slug", "sg", null, "mass", !1, !0, 14.59390294],
    ["square ångström", "ang2", ["ang^2"], "area", !1, !0, 1e-20],
    ["square foot", "ft2", ["ft^2"], "area", !1, !0, 0.09290304],
    ["square inch", "in2", ["in^2"], "area", !1, !0, 64516e-8],
    ["square light-year", "ly2", ["ly^2"], "area", !1, !0, 895054210748189e17],
    ["square meter", "m?", null, "area", !0, !0, 1],
    ["square mile", "mi2", ["mi^2"], "area", !1, !0, 2589988110336e-6],
    ["square nautical mile", "Nmi2", ["Nmi^2"], "area", !1, !0, 3429904],
    ["square Pica", "Pica2", ["Picapt2", "Pica^2", "Picapt^2"], "area", !1, !0, 1792111111111e-17],
    ["square yard", "yd2", ["yd^2"], "area", !1, !0, 0.83612736],
    ["statute mile", "mi", null, "length", !1, !0, 1609.344],
    ["steradian", "sr", null, "solid_angle", !0, !1, 1],
    ["stilb", "sb", null, "luminance", !1, !1, 1e-4],
    ["stokes", "St", null, "kinematic_viscosity", !1, !1, 1e-4],
    ["stone", "stone", null, "mass", !1, !0, 6.35029318],
    ["tablespoon", "tbs", null, "volume", !1, !0, 147868e-10],
    ["teaspoon", "tsp", null, "volume", !1, !0, 492892e-11],
    ["tesla", "T", null, "magnetic_flux_density", !0, !0, 1],
    ["thermodynamic calorie", "c", null, "energy", !1, !0, 4.184],
    ["ton", "ton", null, "mass", !1, !0, 907.18474],
    ["tonne", "t", null, "mass", !1, !1, 1e3],
    ["U.K. pint", "uk_pt", null, "volume", !1, !0, 56826125e-11],
    ["U.S. bushel", "bushel", null, "volume", !1, !0, 0.03523907],
    ["U.S. oil barrel", "barrel", null, "volume", !1, !0, 0.158987295],
    ["U.S. pint", "pt", ["us_pt"], "volume", !1, !0, 473176473e-12],
    ["U.S. survey mile", "survey_mi", null, "length", !1, !0, 1609.347219],
    ["U.S. survey/statute acre", "us_acre", null, "area", !1, !0, 4046.87261],
    ["volt", "V", null, "voltage", !0, !1, 1],
    ["watt", "W", null, "power", !0, !0, 1],
    ["watt-hour", "Wh", ["wh"], "energy", !1, !0, 3600],
    ["weber", "Wb", null, "magnetic_flux", !0, !1, 1],
    ["yard", "yd", null, "length", !1, !0, 0.9144],
    ["year", "yr", null, "time", !1, !0, 31557600]
  ], i = {
    Yi: ["yobi", 80, 12089258196146292e8, "Yi", "yotta"],
    Zi: ["zebi", 70, 11805916207174113e5, "Zi", "zetta"],
    Ei: ["exbi", 60, 1152921504606847e3, "Ei", "exa"],
    Pi: ["pebi", 50, 1125899906842624, "Pi", "peta"],
    Ti: ["tebi", 40, 1099511627776, "Ti", "tera"],
    Gi: ["gibi", 30, 1073741824, "Gi", "giga"],
    Mi: ["mebi", 20, 1048576, "Mi", "mega"],
    ki: ["kibi", 10, 1024, "ki", "kilo"]
  }, c = {
    Y: ["yotta", 1e24, "Y"],
    Z: ["zetta", 1e21, "Z"],
    E: ["exa", 1e18, "E"],
    P: ["peta", 1e15, "P"],
    T: ["tera", 1e12, "T"],
    G: ["giga", 1e9, "G"],
    M: ["mega", 1e6, "M"],
    k: ["kilo", 1e3, "k"],
    h: ["hecto", 100, "h"],
    e: ["dekao", 10, "e"],
    d: ["deci", 0.1, "d"],
    c: ["centi", 0.01, "c"],
    m: ["milli", 1e-3, "m"],
    u: ["micro", 1e-6, "u"],
    n: ["nano", 1e-9, "n"],
    p: ["pico", 1e-12, "p"],
    f: ["femto", 1e-15, "f"],
    a: ["atto", 1e-18, "a"],
    z: ["zepto", 1e-21, "z"],
    y: ["yocto", 1e-24, "y"]
  };
  let g = null, p = null, E = r, s = t, o = 1, f = 1, u;
  for (let l = 0; l < e.length; l++)
    u = e[l][2] === null ? [] : e[l][2], (e[l][1] === E || u.indexOf(E) >= 0) && (g = e[l]), (e[l][1] === s || u.indexOf(s) >= 0) && (p = e[l]);
  if (g === null) {
    const l = i[r.substring(0, 2)];
    let a = c[r.substring(0, 1)];
    r.substring(0, 2) === "da" && (a = ["dekao", 10, "da"]), l ? (o = l[2], E = r.substring(2)) : a && (o = a[1], E = r.substring(a[2].length));
    for (let h = 0; h < e.length; h++)
      u = e[h][2] === null ? [] : e[h][2], (e[h][1] === E || u.indexOf(E) >= 0) && (g = e[h]);
  }
  if (p === null) {
    const l = i[t.substring(0, 2)];
    let a = c[t.substring(0, 1)];
    t.substring(0, 2) === "da" && (a = ["dekao", 10, "da"]), l ? (f = l[2], s = t.substring(2)) : a && (f = a[1], s = t.substring(a[2].length));
    for (let h = 0; h < e.length; h++)
      u = e[h][2] === null ? [] : e[h][2], (e[h][1] === s || u.indexOf(s) >= 0) && (p = e[h]);
  }
  return g === null || p === null || g[3] !== p[3] ? F : n * g[6] * o / (p[6] * f);
}
function wf(n, r) {
  if (n = N(n), n instanceof Error)
    return n;
  if (!/^-?[0-9]{1,3}$/.test(n) || n < -512 || n > 511)
    return C;
  if (n < 0)
    return "1" + nn("0", 9 - (512 + n).toString(2).length) + (512 + n).toString(2);
  const t = parseInt(n, 10).toString(2);
  return typeof r > "u" ? t : isNaN(r) ? R : r < 0 ? C : (r = Math.floor(r), r >= t.length ? nn("0", r - t.length) + t : C);
}
function Af(n, r) {
  if (n = N(n), n instanceof Error)
    return n;
  if (!/^-?[0-9]{1,12}$/.test(n) || n < -549755813888 || n > 549755813887)
    return C;
  if (n < 0)
    return (1099511627776 + n).toString(16);
  const t = parseInt(n, 10).toString(16);
  return typeof r > "u" ? t : isNaN(r) ? R : r < 0 ? C : (r = Math.floor(r), r >= t.length ? nn("0", r - t.length) + t : C);
}
function Rf(n, r) {
  if (n = N(n), n instanceof Error)
    return n;
  if (!/^-?[0-9]{1,9}$/.test(n) || n < -536870912 || n > 536870911)
    return C;
  if (n < 0)
    return (1073741824 + n).toString(8);
  const t = parseInt(n, 10).toString(8);
  return typeof r > "u" ? t : isNaN(r) ? R : r < 0 ? C : (r = Math.floor(r), r >= t.length ? nn("0", r - t.length) + t : C);
}
function Df(n, r) {
  return r = r === void 0 ? 0 : r, n = N(n), r = N(r), m(n, r) ? R : n === r ? 1 : 0;
}
function Yr(n, r) {
  return r = r === void 0 ? 0 : r, n = N(n), r = N(r), m(n, r) ? R : q.erf(n);
}
Yr.PRECISE = () => {
  throw new Error("ERF.PRECISE is not implemented");
};
function Br(n) {
  return isNaN(n) ? R : q.erfc(n);
}
Br.PRECISE = () => {
  throw new Error("ERFC.PRECISE is not implemented");
};
function Cf(n, r) {
  return r = r || 0, n = N(n), m(r, n) ? n : n >= r ? 1 : 0;
}
function Of(n, r) {
  if (!/^[0-9A-Fa-f]{1,10}$/.test(n))
    return C;
  const t = n.length === 10 && n.substring(0, 1).toLowerCase() === "f", e = t ? parseInt(n, 16) - 1099511627776 : parseInt(n, 16);
  if (e < -512 || e > 511)
    return C;
  if (t)
    return "1" + nn("0", 9 - (512 + e).toString(2).length) + (512 + e).toString(2);
  const i = e.toString(2);
  return r === void 0 ? i : isNaN(r) ? R : r < 0 ? C : (r = Math.floor(r), r >= i.length ? nn("0", r - i.length) + i : C);
}
function mf(n) {
  if (!/^[0-9A-Fa-f]{1,10}$/.test(n))
    return C;
  const r = parseInt(n, 16);
  return r >= 549755813888 ? r - 1099511627776 : r;
}
function Lf(n, r) {
  if (!/^[0-9A-Fa-f]{1,10}$/.test(n))
    return C;
  const t = parseInt(n, 16);
  if (t > 536870911 && t < 1098974756864)
    return C;
  if (t >= 1098974756864)
    return (t - 1098437885952).toString(8);
  const e = t.toString(8);
  return r === void 0 ? e : isNaN(r) ? R : r < 0 ? C : (r = Math.floor(r), r >= e.length ? nn("0", r - e.length) + e : C);
}
function Wr(n) {
  const r = B(n), t = Y(n);
  return m(r, t) ? R : Math.sqrt(Math.pow(r, 2) + Math.pow(t, 2));
}
function Y(n) {
  if (n === void 0 || n === !0 || n === !1)
    return R;
  if (n === 0 || n === "0")
    return 0;
  if (["i", "j"].indexOf(n) >= 0)
    return 1;
  n = n + "", n = n.replace("+i", "+1i").replace("-i", "-1i").replace("+j", "+1j").replace("-j", "-1j");
  let r = n.indexOf("+"), t = n.indexOf("-");
  r === 0 && (r = n.indexOf("+", 1)), t === 0 && (t = n.indexOf("-", 1));
  const e = n.substring(n.length - 1, n.length), i = e === "i" || e === "j";
  return r >= 0 || t >= 0 ? i ? r >= 0 ? isNaN(n.substring(0, r)) || isNaN(n.substring(r + 1, n.length - 1)) ? C : Number(n.substring(r + 1, n.length - 1)) : isNaN(n.substring(0, t)) || isNaN(n.substring(t + 1, n.length - 1)) ? C : -Number(n.substring(t + 1, n.length - 1)) : C : i ? isNaN(n.substring(0, n.length - 1)) ? C : n.substring(0, n.length - 1) : isNaN(n) ? C : 0;
}
function zr(n) {
  const r = B(n), t = Y(n);
  return m(r, t) ? R : r === 0 && t === 0 ? Z : r === 0 && t > 0 ? Math.PI / 2 : r === 0 && t < 0 ? -Math.PI / 2 : t === 0 && r > 0 ? 0 : t === 0 && r < 0 ? -Math.PI : r > 0 ? Math.atan(t / r) : r < 0 && t >= 0 ? Math.atan(t / r) + Math.PI : Math.atan(t / r) - Math.PI;
}
function Mf(n) {
  const r = B(n), t = Y(n);
  if (m(r, t))
    return R;
  let e = n.substring(n.length - 1);
  return e = e === "i" || e === "j" ? e : "i", t !== 0 ? J(r, -t, e) : n;
}
function ar(n) {
  const r = B(n), t = Y(n);
  if (m(r, t))
    return R;
  let e = n.substring(n.length - 1);
  return e = e === "i" || e === "j" ? e : "i", J(
    Math.cos(r) * (Math.exp(t) + Math.exp(-t)) / 2,
    -Math.sin(r) * (Math.exp(t) - Math.exp(-t)) / 2,
    e
  );
}
function we(n) {
  const r = B(n), t = Y(n);
  if (m(r, t))
    return R;
  let e = n.substring(n.length - 1);
  return e = e === "i" || e === "j" ? e : "i", J(
    Math.cos(t) * (Math.exp(r) + Math.exp(-r)) / 2,
    Math.sin(t) * (Math.exp(r) - Math.exp(-r)) / 2,
    e
  );
}
function Pf(n) {
  const r = B(n), t = Y(n);
  return m(r, t) ? R : qn(ar(n), hr(n));
}
function qn(n, r) {
  const t = B(n), e = Y(n), i = B(r), c = Y(r);
  if (m(t, e, i, c))
    return R;
  const g = n.substring(n.length - 1), p = r.substring(r.length - 1);
  let E = "i";
  if ((g === "j" || p === "j") && (E = "j"), i === 0 && c === 0)
    return C;
  const s = i * i + c * c;
  return J((t * i + e * c) / s, (e * i - t * c) / s, E);
}
function qf(n) {
  const r = B(n), t = Y(n);
  if (m(r, t))
    return R;
  let e = n.substring(n.length - 1);
  e = e === "i" || e === "j" ? e : "i";
  const i = Math.exp(r);
  return J(i * Math.cos(t), i * Math.sin(t), e);
}
function Uf(n) {
  const r = B(n), t = Y(n);
  if (m(r, t))
    return R;
  let e = n.substring(n.length - 1);
  return e = e === "i" || e === "j" ? e : "i", J(Math.log(Math.sqrt(r * r + t * t)), Math.atan(t / r), e);
}
function Vf(n) {
  const r = B(n), t = Y(n);
  if (m(r, t))
    return R;
  let e = n.substring(n.length - 1);
  return e = e === "i" || e === "j" ? e : "i", J(Math.log(Math.sqrt(r * r + t * t)) / Math.log(10), Math.atan(t / r) / Math.log(10), e);
}
function Ff(n) {
  const r = B(n), t = Y(n);
  if (m(r, t))
    return R;
  let e = n.substring(n.length - 1);
  return e = e === "i" || e === "j" ? e : "i", J(Math.log(Math.sqrt(r * r + t * t)) / Math.log(2), Math.atan(t / r) / Math.log(2), e);
}
function yf(n, r) {
  r = N(r);
  const t = B(n), e = Y(n);
  if (m(r, t, e))
    return R;
  let i = n.substring(n.length - 1);
  i = i === "i" || i === "j" ? i : "i";
  const c = Math.pow(Wr(n), r), g = zr(n);
  return J(c * Math.cos(r * g), c * Math.sin(r * g), i);
}
function Gf() {
  let n = arguments[0];
  if (!arguments.length)
    return R;
  for (let r = 1; r < arguments.length; r++) {
    const t = B(n), e = Y(n), i = B(arguments[r]), c = Y(arguments[r]);
    if (m(t, e, i, c))
      return R;
    n = J(t * i - e * c, t * c + e * i);
  }
  return n;
}
function B(n) {
  if (n === void 0 || n === !0 || n === !1)
    return R;
  if (n === 0 || n === "0" || ["i", "+i", "1i", "+1i", "-i", "-1i", "j", "+j", "1j", "+1j", "-j", "-1j"].indexOf(n) >= 0)
    return 0;
  n = n + "";
  let r = n.indexOf("+"), t = n.indexOf("-");
  r === 0 && (r = n.indexOf("+", 1)), t === 0 && (t = n.indexOf("-", 1));
  const e = n.substring(n.length - 1, n.length), i = e === "i" || e === "j";
  return r >= 0 || t >= 0 ? i ? r >= 0 ? isNaN(n.substring(0, r)) || isNaN(n.substring(r + 1, n.length - 1)) ? C : Number(n.substring(0, r)) : isNaN(n.substring(0, t)) || isNaN(n.substring(t + 1, n.length - 1)) ? C : Number(n.substring(0, t)) : C : i ? isNaN(n.substring(0, n.length - 1)) ? C : 0 : isNaN(n) ? C : n;
}
function Hf(n) {
  if (n === !0 || n === !1)
    return R;
  const r = B(n), t = Y(n);
  return m(r, t) ? R : qn("1", ar(n));
}
function Yf(n) {
  const r = B(n), t = Y(n);
  return m(r, t) ? R : qn("1", we(n));
}
function hr(n) {
  const r = B(n), t = Y(n);
  if (m(r, t))
    return R;
  let e = n.substring(n.length - 1);
  return e = e === "i" || e === "j" ? e : "i", J(
    Math.sin(r) * (Math.exp(t) + Math.exp(-t)) / 2,
    Math.cos(r) * (Math.exp(t) - Math.exp(-t)) / 2,
    e
  );
}
function Ae(n) {
  const r = B(n), t = Y(n);
  if (m(r, t))
    return R;
  let e = n.substring(n.length - 1);
  return e = e === "i" || e === "j" ? e : "i", J(
    Math.cos(t) * (Math.exp(r) - Math.exp(-r)) / 2,
    Math.sin(t) * (Math.exp(r) + Math.exp(-r)) / 2,
    e
  );
}
function Bf(n) {
  const r = B(n), t = Y(n);
  if (m(r, t))
    return R;
  let e = n.substring(n.length - 1);
  e = e === "i" || e === "j" ? e : "i";
  const i = Math.sqrt(Wr(n)), c = zr(n);
  return J(i * Math.cos(c / 2), i * Math.sin(c / 2), e);
}
function Wf(n) {
  if (n === !0 || n === !1)
    return R;
  const r = B(n), t = Y(n);
  return m(r, t) ? C : qn("1", hr(n));
}
function zf(n) {
  if (n === !0 || n === !1)
    return R;
  const r = B(n), t = Y(n);
  return m(r, t) ? C : qn("1", Ae(n));
}
function Kf(n, r) {
  const t = B(n), e = Y(n), i = B(r), c = Y(r);
  if (m(t, e, i, c))
    return R;
  const g = n.substring(n.length - 1), p = r.substring(r.length - 1);
  let E = "i";
  return (g === "j" || p === "j") && (E = "j"), J(t - i, e - c, E);
}
function Xf() {
  if (!arguments.length)
    return R;
  const n = L(arguments);
  let r = n[0];
  for (let t = 1; t < n.length; t++) {
    const e = B(r), i = Y(r), c = B(n[t]), g = Y(n[t]);
    if (m(e, i, c, g))
      return R;
    r = J(e + c, i + g);
  }
  return r;
}
function Qf(n) {
  if (n === !0 || n === !1)
    return R;
  const r = B(n), t = Y(n);
  return m(r, t) ? R : qn(hr(n), ar(n));
}
function $f(n, r) {
  if (!/^[0-7]{1,10}$/.test(n))
    return C;
  const t = n.length === 10 && n.substring(0, 1) === "7", e = t ? parseInt(n, 8) - 1073741824 : parseInt(n, 8);
  if (e < -512 || e > 511)
    return C;
  if (t)
    return "1" + nn("0", 9 - (512 + e).toString(2).length) + (512 + e).toString(2);
  const i = e.toString(2);
  return typeof r > "u" ? i : isNaN(r) ? R : r < 0 ? C : (r = Math.floor(r), r >= i.length ? nn("0", r - i.length) + i : C);
}
function Zf(n) {
  if (!/^[0-7]{1,10}$/.test(n))
    return C;
  const r = parseInt(n, 8);
  return r >= 536870912 ? r - 1073741824 : r;
}
function Jf(n, r) {
  if (!/^[0-7]{1,10}$/.test(n))
    return C;
  const t = parseInt(n, 8);
  if (t >= 536870912)
    return "ff" + (t + 3221225472).toString(16);
  const e = t.toString(16);
  return r === void 0 ? e : isNaN(r) ? R : r < 0 ? C : (r = Math.floor(r), r >= e.length ? nn("0", r - e.length) + e : C);
}
const kf = $n.DIST, Sf = $n.INV, xf = Yn.DIST, bf = En.MATH, jf = En.PRECISE, _f = on.DIST, nu = on.DIST.RT, ru = on.INV, eu = on.INV.RT, tu = on.TEST, ou = Bn.P, iu = Bn.P, fu = Bn.S, uu = Yn.INV, su = Br.PRECISE, lu = Yr.PRECISE, cu = mr.DIST, gu = fn.DIST, au = fn.DIST.RT, hu = fn.INV, vu = fn.INV.RT, Eu = mn.MATH, pu = mn.PRECISE, du = fn.TEST, Nu = Zn.DIST, Iu = Zn.INV, Tu = Lr.PRECISE, wu = Mr.DIST, Au = Wn.INV, Ru = Wn.DIST, Du = Wn.INV, Cu = Cn.MULT, Ou = Cn.SNGL, mu = qr.DIST, Lu = cr.INTL, Mu = un.DIST, Pu = un.INV, qu = un.S.DIST, Uu = un.S.INV, Vu = j.EXC, Fu = j.INC, yu = Jn.EXC, Gu = Jn.INC, Hu = Ur.DIST, Yu = On.EXC, Bu = On.INC, Wu = kn.AVG, zu = kn.EQ, Ku = Vr.P, Xu = b.P, Qu = b.S, $u = _.DIST, Zu = _.DIST.RT, Ju = _.INV, ku = _.TEST, Su = S.P, xu = S.S, bu = Fr.DIST, ju = gr.INTL, _u = yr.TEST;
function Kr(n) {
  const r = [];
  return $(n, (t) => {
    t && r.push(t);
  }), r;
}
function en(n, r) {
  const t = {};
  for (let c = 1; c < n[0].length; ++c)
    t[c] = !0;
  let e = r[0].length;
  for (let c = 1; c < r.length; ++c)
    r[c].length > e && (e = r[c].length);
  for (let c = 1; c < n.length; ++c)
    for (let g = 1; g < n[c].length; ++g) {
      let p = !1, E = !1;
      for (let s = 0; s < r.length; ++s) {
        const o = r[s];
        if (o.length < e)
          continue;
        const f = o[0];
        if (n[c][0] === f) {
          E = !0;
          for (let u = 1; u < o.length; ++u)
            if (!p)
              if (o[u] === void 0 || o[u] === "*")
                p = !0;
              else {
                const a = Mn(o[u] + ""), h = [an(n[c][g], pn)].concat(
                  a
                );
                p = Pn(h);
              }
        }
      }
      E && (t[g] = t[g] && p);
    }
  const i = [];
  for (let c = 0; c < n[0].length; ++c)
    t[c] && i.push(c - 1);
  return i;
}
function ns(n, r, t) {
  if (isNaN(r) && typeof r != "string")
    return R;
  const e = en(n, t);
  let i = [];
  if (typeof r == "string") {
    const g = rn(n, r);
    i = z(n[g]);
  } else
    i = z(n[r]);
  let c = 0;
  return $(e, (g) => {
    c += i[g];
  }), e.length === 0 ? Z : c / e.length;
}
function rs(n, r, t) {
  if (isNaN(r) && typeof r != "string")
    return R;
  const e = en(n, t);
  let i = [];
  if (typeof r == "string") {
    const g = rn(n, r);
    i = z(n[g]);
  } else
    i = z(n[r]);
  const c = [];
  return $(e, (g) => {
    c.push(i[g]);
  }), Kn(c);
}
function es(n, r, t) {
  if (isNaN(r) && typeof r != "string")
    return R;
  const e = en(n, t);
  let i = [];
  if (typeof r == "string") {
    const g = rn(n, r);
    i = z(n[g]);
  } else
    i = z(n[r]);
  const c = [];
  return $(e, (g) => {
    c.push(i[g]);
  }), Xn(c);
}
function ts(n, r, t) {
  if (isNaN(r) && typeof r != "string")
    return R;
  const e = en(n, t);
  let i = [];
  if (typeof r == "string") {
    const c = rn(n, r);
    i = z(n[c]);
  } else
    i = z(n[r]);
  return e.length === 0 ? R : e.length > 1 ? C : i[e[0]];
}
function os(n, r, t) {
  if (isNaN(r) && typeof r != "string")
    return R;
  const e = en(n, t);
  let i = [];
  if (typeof r == "string") {
    const g = rn(n, r);
    i = z(n[g]);
  } else
    i = z(n[r]);
  let c = i[e[0]];
  return $(e, (g) => {
    c < i[g] && (c = i[g]);
  }), c;
}
function is(n, r, t) {
  if (isNaN(r) && typeof r != "string")
    return R;
  const e = en(n, t);
  let i = [];
  if (typeof r == "string") {
    const g = rn(n, r);
    i = z(n[g]);
  } else
    i = z(n[r]);
  let c = i[e[0]];
  return $(e, (g) => {
    c > i[g] && (c = i[g]);
  }), c;
}
function fs(n, r, t) {
  if (isNaN(r) && typeof r != "string")
    return R;
  const e = en(n, t);
  let i = [];
  if (typeof r == "string") {
    const p = rn(n, r);
    i = z(n[p]);
  } else
    i = z(n[r]);
  let c = [];
  $(e, (p) => {
    c.push(i[p]);
  }), c = Kr(c);
  let g = 1;
  return $(c, (p) => {
    g *= p;
  }), g;
}
function us(n, r, t) {
  if (isNaN(r) && typeof r != "string")
    return R;
  const e = en(n, t);
  let i = [];
  if (typeof r == "string") {
    const g = rn(n, r);
    i = z(n[g]);
  } else
    i = z(n[r]);
  let c = [];
  return $(e, (g) => {
    c.push(i[g]);
  }), c = Kr(c), b.S(c);
}
function ss(n, r, t) {
  if (isNaN(r) && typeof r != "string")
    return R;
  const e = en(n, t);
  let i = [];
  if (typeof r == "string") {
    const g = rn(n, r);
    i = z(n[g]);
  } else
    i = z(n[r]);
  let c = [];
  return $(e, (g) => {
    c.push(i[g]);
  }), c = Kr(c), b.P(c);
}
function ls(n, r, t) {
  if (isNaN(r) && typeof r != "string")
    return R;
  const e = en(n, t);
  let i = [];
  if (typeof r == "string") {
    const g = rn(n, r);
    i = z(n[g]);
  } else
    i = z(n[r]);
  const c = [];
  return $(e, (g) => {
    c.push(i[g]);
  }), Nn(c);
}
function cs(n, r, t) {
  if (isNaN(r) && typeof r != "string")
    return R;
  const e = en(n, t);
  let i = [];
  if (typeof r == "string") {
    const g = rn(n, r);
    i = z(n[g]);
  } else
    i = z(n[r]);
  const c = [];
  return $(e, (g) => {
    c.push(i[g]);
  }), S.S(c);
}
function gs(n, r, t) {
  if (isNaN(r) && typeof r != "string")
    return R;
  const e = en(n, t);
  let i = [];
  if (typeof r == "string") {
    const g = rn(n, r);
    i = z(n[g]);
  } else
    i = z(n[r]);
  const c = [];
  return $(e, (g) => {
    c.push(i[g]);
  }), S.P(c);
}
function pr(n) {
  return n && n.getTime && !isNaN(n.getTime());
}
function dr(n) {
  return n instanceof Date ? n : new Date(n);
}
function as(n, r, t, e, i, c, g) {
  return n = dr(n), r = dr(r), t = dr(t), !pr(n) || !pr(r) || !pr(t) ? R : e <= 0 || i <= 0 || [1, 2, 4].indexOf(c) === -1 || [0, 1, 2, 3, 4].indexOf(g) === -1 || t <= n ? C : (i = i || 0, g = g || 0, i * e * Gr(n, t, g));
}
function hs() {
  throw new Error("ACCRINTM is not implemented");
}
function vs() {
  throw new Error("AMORDEGRC is not implemented");
}
function Es() {
  throw new Error("AMORLINC is not implemented");
}
function ps() {
  throw new Error("COUPDAYBS is not implemented");
}
function ds() {
  throw new Error("COUPDAYS is not implemented");
}
function Ns() {
  throw new Error("COUPDAYSNC is not implemented");
}
function Is() {
  throw new Error("COUPNCD is not implemented");
}
function Ts() {
  throw new Error("COUPNUM is not implemented");
}
function ws() {
  throw new Error("COUPPCD is not implemented");
}
function As(n, r, t, e, i, c) {
  if (n = N(n), r = N(r), t = N(t), m(n, r, t))
    return R;
  if (n <= 0 || r <= 0 || t <= 0 || e < 1 || i < 1 || e > i || c !== 0 && c !== 1)
    return C;
  const g = Sn(n, r, t, 0, c);
  let p = 0;
  e === 1 && (c === 0 && (p = -t), e++);
  for (let E = e; E <= i; E++)
    p += c === 1 ? Ln(n, E - 2, g, t, 1) - g : Ln(n, E - 1, g, t, 0);
  return p *= n, p;
}
function Rs(n, r, t, e, i, c) {
  if (n = N(n), r = N(r), t = N(t), m(n, r, t))
    return R;
  if (n <= 0 || r <= 0 || t <= 0 || e < 1 || i < 1 || e > i || c !== 0 && c !== 1)
    return C;
  const g = Sn(n, r, t, 0, c);
  let p = 0;
  e === 1 && (p = c === 0 ? g + t * n : g, e++);
  for (let E = e; E <= i; E++)
    p += c > 0 ? g - (Ln(n, E - 2, g, t, 1) - g) * n : g - Ln(n, E - 1, g, t, 0) * n;
  return p;
}
function Ds(n, r, t, e, i) {
  if (i = i === void 0 ? 12 : i, n = N(n), r = N(r), t = N(t), e = N(e), i = N(i), m(n, r, t, e, i))
    return R;
  if (n < 0 || r < 0 || t < 0 || e < 0 || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].indexOf(i) === -1 || e > t)
    return C;
  if (r >= n)
    return 0;
  const c = (1 - Math.pow(r / n, 1 / t)).toFixed(3), g = n * c * i / 12;
  let p = g, E = 0;
  const s = e === t ? t - 1 : e;
  for (let o = 2; o <= s; o++)
    E = (n - p) * c, p += E;
  return e === 1 ? g : e === t ? (n - p) * c : E;
}
function Cs(n, r, t, e, i) {
  if (i = i === void 0 ? 2 : i, n = N(n), r = N(r), t = N(t), e = N(e), i = N(i), m(n, r, t, e, i))
    return R;
  if (n < 0 || r < 0 || t < 0 || e < 0 || i <= 0 || e > t)
    return C;
  if (r >= n)
    return 0;
  let c = 0, g = 0;
  for (let p = 1; p <= e; p++)
    g = Math.min((n - c) * (i / t), n - r - c), c += g;
  return g;
}
function Os(n, r, t, e, i) {
  if (n = G(n), r = G(r), t = N(t), e = N(e), i = N(i), i = i || 0, m(n, r, t, e, i))
    return R;
  if (t <= 0 || e <= 0)
    return C;
  if (n >= r)
    return R;
  let c, g;
  switch (i) {
    case 0:
      c = 360, g = In(n, r, !1);
      break;
    case 1:
      c = 365, g = An(n, r, "D");
      break;
    case 2:
      c = 360, g = An(n, r, "D");
      break;
    case 3:
      c = 365, g = An(n, r, "D");
      break;
    case 4:
      c = 360, g = In(n, r, !0);
      break;
    default:
      return C;
  }
  return (e - t) / e * c / g;
}
function ms(n, r) {
  if (n = N(n), r = N(r), m(n, r))
    return R;
  if (r < 0)
    return C;
  if (r >= 0 && r < 1)
    return Z;
  r = parseInt(r, 10);
  let t = parseInt(n, 10);
  t += n % 1 * Math.pow(10, Math.ceil(Math.log(r) / Math.LN10)) / r;
  const e = Math.pow(10, Math.ceil(Math.log(r) / Math.LN2) + 1);
  return t = Math.round(t * e) / e, t;
}
function Ls(n, r) {
  if (n = N(n), r = N(r), m(n, r))
    return R;
  if (r < 0)
    return C;
  if (r >= 0 && r < 1)
    return Z;
  r = parseInt(r, 10);
  let t = parseInt(n, 10);
  return t += n % 1 * Math.pow(10, -Math.ceil(Math.log(r) / Math.LN10)) * r, t;
}
function Ms() {
  throw new Error("DURATION is not implemented");
}
function Ps(n, r) {
  return n = N(n), r = N(r), m(n, r) ? R : n <= 0 || r < 1 ? C : (r = parseInt(r, 10), Math.pow(1 + n / r, r) - 1);
}
function Ln(n, r, t, e, i) {
  if (e = e || 0, i = i || 0, n = N(n), r = N(r), t = N(t), e = N(e), i = N(i), m(n, r, t, e, i))
    return R;
  let c;
  if (n === 0)
    c = e + t * r;
  else {
    const g = Math.pow(1 + n, r);
    c = i === 1 ? e * g + t * (1 + n) * (g - 1) / n : e * g + t * (g - 1) / n;
  }
  return -c;
}
function qs(n, r) {
  if (n = N(n), r = U(L(r)), m(n, r))
    return R;
  const t = r.length;
  let e = n;
  for (let i = 0; i < t; i++)
    e *= 1 + r[i];
  return e;
}
function Us() {
  throw new Error("INTRATE is not implemented");
}
function Re(n, r, t, e, i, c) {
  if (i = i || 0, c = c || 0, n = N(n), r = N(r), t = N(t), e = N(e), i = N(i), c = N(c), m(n, r, t, e, i, c))
    return R;
  const g = Sn(n, t, e, i, c);
  return (r === 1 ? c === 1 ? 0 : -e : c === 1 ? Ln(n, r - 2, g, e, 1) - g : Ln(n, r - 1, g, e, 0)) * n;
}
function Vs(n, r) {
  if (r = r || 0, n = U(L(n)), r = N(r), m(n, r))
    return R;
  const t = (l, a, h) => {
    const v = h + 1;
    let I = l[0];
    for (let T = 1; T < l.length; T++)
      I += l[T] / Math.pow(v, (a[T] - a[0]) / 365);
    return I;
  }, e = (l, a, h) => {
    const v = h + 1;
    let I = 0;
    for (let T = 1; T < l.length; T++) {
      const d = (a[T] - a[0]) / 365;
      I -= d * l[T] / Math.pow(v, d + 1);
    }
    return I;
  }, i = [];
  let c = !1, g = !1;
  for (let l = 0; l < n.length; l++)
    i[l] = l === 0 ? 0 : i[l - 1] + 365, n[l] > 0 && (c = !0), n[l] < 0 && (g = !0);
  if (!c || !g)
    return C;
  r = r === void 0 ? 0.1 : r;
  let p = r;
  const E = 1e-10;
  let s, o, f, u = !0;
  do
    f = t(n, i, p), s = p - f / e(n, i, p), o = Math.abs(s - p), p = s, u = o > E && Math.abs(f) > E;
  while (u);
  return p;
}
function Fs(n, r, t, e) {
  return n = N(n), r = N(r), t = N(t), e = N(e), m(n, r, t, e) ? R : e * n * (r / t - 1);
}
function ys() {
  throw new Error("MDURATION is not implemented");
}
function Gs(n, r, t) {
  if (n = U(L(n)), r = N(r), t = N(t), m(n, r, t))
    return R;
  const e = n.length, i = [], c = [];
  for (let E = 0; E < e; E++)
    n[E] < 0 ? i.push(n[E]) : c.push(n[E]);
  const g = -Ir(t, c) * Math.pow(1 + t, e - 1), p = Ir(r, i) * (1 + r);
  return Math.pow(g / p, 1 / (e - 1)) - 1;
}
function Hs(n, r) {
  return n = N(n), r = N(r), m(n, r) ? R : n <= 0 || r < 1 ? C : (r = parseInt(r, 10), (Math.pow(n + 1, 1 / r) - 1) * r);
}
function Ys(n, r, t, e, i) {
  if (i = i === void 0 ? 0 : i, e = e === void 0 ? 0 : e, n = N(n), r = N(r), t = N(t), e = N(e), i = N(i), m(n, r, t, e, i))
    return R;
  if (n === 0)
    return -(t + e) / r;
  {
    const c = r * (1 + n * i) - e * n, g = t * n + r * (1 + n * i);
    return Math.log(c / g) / Math.log(1 + n);
  }
}
function Ir() {
  const n = U(L(arguments));
  if (n instanceof Error)
    return n;
  const r = n[0];
  let t = 0;
  for (let e = 1; e < n.length; e++)
    t += n[e] / Math.pow(1 + r, e);
  return t;
}
function Bs() {
  throw new Error("ODDFPRICE is not implemented");
}
function Ws() {
  throw new Error("ODDFYIELD is not implemented");
}
function zs() {
  throw new Error("ODDLPRICE is not implemented");
}
function Ks() {
  throw new Error("ODDLYIELD is not implemented");
}
function Xs(n, r, t) {
  return n = N(n), r = N(r), t = N(t), m(n, r, t) ? R : n <= 0 ? C : (Math.log(t) - Math.log(r)) / Math.log(1 + n);
}
function Sn(n, r, t, e, i) {
  if (e = e || 0, i = i || 0, n = N(n), r = N(r), t = N(t), e = N(e), i = N(i), m(n, r, t, e, i))
    return R;
  let c;
  if (n === 0)
    c = (t + e) / r;
  else {
    const g = Math.pow(1 + n, r);
    c = i === 1 ? (e * n / (g - 1) + t * n / (1 - 1 / g)) / (1 + n) : e * n / (g - 1) + t * n / (1 - 1 / g);
  }
  return -c;
}
function Qs(n, r, t, e, i, c) {
  return i = i || 0, c = c || 0, n = N(n), t = N(t), e = N(e), i = N(i), c = N(c), m(n, t, e, i, c) ? R : Sn(n, t, e, i, c) - Re(n, r, t, e, i, c);
}
function $s() {
  throw new Error("PRICE is not implemented");
}
function Zs(n, r, t, e, i) {
  if (n = G(n), r = G(r), t = N(t), e = N(e), i = N(i), i = i || 0, m(n, r, t, e, i))
    return R;
  if (t <= 0 || e <= 0)
    return C;
  if (n >= r)
    return R;
  let c, g;
  switch (i) {
    case 0:
      c = 360, g = In(n, r, !1);
      break;
    case 1:
      c = 365, g = An(n, r, "D");
      break;
    case 2:
      c = 360, g = An(n, r, "D");
      break;
    case 3:
      c = 365, g = An(n, r, "D");
      break;
    case 4:
      c = 360, g = In(n, r, !0);
      break;
    default:
      return C;
  }
  return e - t * e * g / c;
}
function Js() {
  throw new Error("PRICEMAT is not implemented");
}
function ks(n, r, t, e, i) {
  return e = e || 0, i = i || 0, n = N(n), r = N(r), t = N(t), e = N(e), i = N(i), m(n, r, t, e, i) ? R : n === 0 ? -t * r - e : ((1 - Math.pow(1 + n, r)) / n * t * (1 + n * i) - e) / Math.pow(1 + n, r);
}
function Ss(n, r, t, e, i, c) {
  if (c = c === void 0 ? 0.01 : c, e = e === void 0 ? 0 : e, i = i === void 0 ? 0 : i, n = N(n), r = N(r), t = N(t), e = N(e), i = N(i), c = N(c), m(n, r, t, e, i, c))
    return R;
  const g = 1e-10, p = 20;
  let E = c;
  i = i ? 1 : 0;
  for (let s = 0; s < p; s++) {
    if (E <= -1)
      return C;
    let o, f;
    if (Math.abs(E) < g ? o = t * (1 + n * E) + r * (1 + E * i) * n + e : (f = Math.pow(1 + E, n), o = t * f + r * (1 / E + i) * (f - 1) + e), Math.abs(o) < g)
      return E;
    let u;
    if (Math.abs(E) < g)
      u = t * n + r * i * n;
    else {
      f = Math.pow(1 + E, n);
      const l = n * Math.pow(1 + E, n - 1);
      u = t * l + r * (1 / E + i) * l + r * (-1 / (E * E)) * (f - 1);
    }
    E -= o / u;
  }
  return E;
}
function xs() {
  throw new Error("RECEIVED is not implemented");
}
function bs(n, r, t) {
  return n = N(n), r = N(r), t = N(t), m(n, r, t) ? R : n === 0 || r === 0 ? C : Math.pow(t / r, 1 / n) - 1;
}
function js(n, r, t) {
  return n = N(n), r = N(r), t = N(t), m(n, r, t) ? R : t === 0 ? C : (n - r) / t;
}
function _s(n, r, t, e) {
  return n = N(n), r = N(r), t = N(t), e = N(e), m(n, r, t, e) ? R : t === 0 || e < 1 || e > t ? C : (e = parseInt(e, 10), (n - r) * (t - e + 1) * 2 / (t * (t + 1)));
}
function n0(n, r, t) {
  return n = G(n), r = G(r), t = N(t), m(n, r, t) ? R : t <= 0 || n > r || r - n > 365 * 24 * 60 * 60 * 1e3 ? C : 365 * t / (360 - t * In(n, r, !1));
}
function r0(n, r, t) {
  return n = G(n), r = G(r), t = N(t), m(n, r, t) ? R : t <= 0 || n > r || r - n > 365 * 24 * 60 * 60 * 1e3 ? C : 100 * (1 - t * In(n, r, !1) / 360);
}
function e0(n, r, t) {
  return n = G(n), r = G(r), t = N(t), m(n, r, t) ? R : t <= 0 || n > r || r - n > 365 * 24 * 60 * 60 * 1e3 ? C : (100 - t) * 360 / (t * In(n, r, !1));
}
function t0() {
  throw new Error("VDB is not implemented");
}
function o0(n, r, t) {
  if (n = U(L(n)), r = jr(L(r)), t = N(t), m(n, r, t))
    return R;
  const e = (l, a, h) => {
    const v = h + 1;
    let I = l[0];
    for (let T = 1; T < l.length; T++)
      I += l[T] / Math.pow(v, Rn(a[T], a[0]) / 365);
    return I;
  }, i = (l, a, h) => {
    const v = h + 1;
    let I = 0;
    for (let T = 1; T < l.length; T++) {
      const d = Rn(a[T], a[0]) / 365;
      I -= d * l[T] / Math.pow(v, d + 1);
    }
    return I;
  };
  let c = !1, g = !1;
  for (let l = 0; l < n.length; l++)
    n[l] > 0 && (c = !0), n[l] < 0 && (g = !0);
  if (!c || !g)
    return C;
  t = t || 0.1;
  let p = t;
  const E = 1e-10;
  let s, o, f, u = !0;
  do
    f = e(n, r, p), s = p - f / i(n, r, p), o = Math.abs(s - p), p = s, u = o > E && Math.abs(f) > E;
  while (u);
  return p;
}
function i0(n, r, t) {
  if (n = N(n), r = U(L(r)), t = jr(L(t)), m(n, r, t))
    return R;
  let e = 0;
  for (let i = 0; i < r.length; i++)
    e += r[i] / Math.pow(1 + n, Rn(t[i], t[0]) / 365);
  return e;
}
function f0() {
  throw new Error("YIELD is not implemented");
}
function u0() {
  throw new Error("YIELDDISC is not implemented");
}
function s0() {
  throw new Error("YIELDMAT is not implemented");
}
function l0() {
  const n = L(arguments);
  let r = R;
  for (let t = 0; t < n.length; t++) {
    if (n[t] instanceof Error)
      return n[t];
    n[t] === void 0 || n[t] === null || typeof n[t] == "string" || (r === R && (r = !0), n[t] || (r = !1));
  }
  return r;
}
function c0() {
  return !1;
}
function g0(n, r, t) {
  return n instanceof Error ? n : (r = arguments.length >= 2 ? r : !0, r == null && (r = 0), t = arguments.length === 3 ? t : !1, t == null && (t = 0), n ? r : t);
}
function a0() {
  for (let n = 0; n < arguments.length / 2; n++)
    if (arguments[n * 2])
      return arguments[n * 2 + 1];
  return F;
}
function h0(n, r) {
  return sr(n) ? r : n;
}
function v0(n, r) {
  return n === F ? r : n;
}
function E0(n) {
  return typeof n == "string" ? R : n instanceof Error ? n : !n;
}
function p0() {
  const n = L(arguments);
  let r = R;
  for (let t = 0; t < n.length; t++) {
    if (n[t] instanceof Error)
      return n[t];
    n[t] === void 0 || n[t] === null || typeof n[t] == "string" || (r === R && (r = !1), n[t] && (r = !0));
  }
  return r;
}
function d0() {
  return !0;
}
function N0() {
  const n = L(arguments);
  let r = R;
  for (let t = 0; t < n.length; t++) {
    if (n[t] instanceof Error)
      return n[t];
    n[t] === void 0 || n[t] === null || typeof n[t] == "string" || (r === R && (r = 0), n[t] && r++);
  }
  return r === R ? r : !!(Math.floor(Math.abs(r)) & 1);
}
function I0() {
  let n;
  if (arguments.length > 0) {
    const r = arguments[0], t = arguments.length - 1, e = Math.floor(t / 2);
    let i = !1;
    const c = t % 2 !== 0, g = t % 2 === 0 ? null : arguments[arguments.length - 1];
    if (e) {
      for (let p = 0; p < e; p++)
        if (r === arguments[p * 2 + 1]) {
          n = arguments[p * 2 + 2], i = !0;
          break;
        }
    }
    i || (n = c ? g : F);
  } else
    n = R;
  return n;
}
const T0 = { errors: Pe, symbols: vi }, fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ABS: Zt,
  ACCRINT: as,
  ACCRINTM: hs,
  ACOS: Jt,
  ACOSH: kt,
  ACOT: St,
  ACOTH: xt,
  AGGREGATE: bt,
  AMORDEGRC: vs,
  AMORLINC: Es,
  AND: l0,
  ARABIC: jt,
  ASC: Fi,
  ASIN: _t,
  ASINH: no,
  ATAN: ro,
  ATAN2: eo,
  ATANH: to,
  AVEDEV: vt,
  AVERAGE: Dn,
  AVERAGEA: Cr,
  AVERAGEIF: Et,
  AVERAGEIFS: pt,
  BAHTTEXT: yi,
  BASE: oo,
  BESSELI: sf,
  BESSELJ: lf,
  BESSELK: cf,
  BESSELY: gf,
  BETA: $n,
  BETADIST: kf,
  BETAINV: Sf,
  BIN2DEC: af,
  BIN2HEX: hf,
  BIN2OCT: vf,
  BINOM: Yn,
  BINOMDIST: xf,
  BITAND: Ef,
  BITLSHIFT: pf,
  BITOR: df,
  BITRSHIFT: Nf,
  BITXOR: If,
  CEILING: En,
  CEILINGMATH: bf,
  CEILINGPRECISE: jf,
  CELL: Xe,
  CHAR: de,
  CHIDIST: _f,
  CHIDISTRT: nu,
  CHIINV: ru,
  CHIINVRT: eu,
  CHISQ: on,
  CHITEST: tu,
  CHOOSE: tt,
  CLEAN: Gi,
  CODE: Ne,
  COLUMN: ot,
  COLUMNS: it,
  COMBIN: Fn,
  COMBINA: io,
  COMPLEX: J,
  CONCAT: Hi,
  CONCATENATE: Ie,
  CONFIDENCE: Or,
  CONVERT: Tf,
  CORREL: dt,
  COS: fo,
  COSH: uo,
  COT: so,
  COTH: lo,
  COUNT: Kn,
  COUNTA: Xn,
  COUNTBLANK: fe,
  COUNTIF: Nt,
  COUNTIFS: It,
  COUPDAYBS: ps,
  COUPDAYS: ds,
  COUPDAYSNC: Ns,
  COUPNCD: Is,
  COUPNUM: Ts,
  COUPPCD: ws,
  COVAR: ou,
  COVARIANCE: Bn,
  COVARIANCEP: iu,
  COVARIANCES: fu,
  CRITBINOM: uu,
  CSC: co,
  CSCH: go,
  CUMIPMT: As,
  CUMPRINC: Rs,
  DATE: Ni,
  DATEDIF: An,
  DATEVALUE: Ii,
  DAVERAGE: ns,
  DAY: Ti,
  DAYS: Rn,
  DAYS360: In,
  DB: Ds,
  DBCS: Yi,
  DCOUNT: rs,
  DCOUNTA: es,
  DDB: Cs,
  DEC2BIN: wf,
  DEC2HEX: Af,
  DEC2OCT: Rf,
  DECIMAL: ao,
  DEGREES: ho,
  DELTA: Df,
  DEVSQ: Tt,
  DGET: ts,
  DISC: Os,
  DMAX: os,
  DMIN: is,
  DOLLAR: Bi,
  DOLLARDE: ms,
  DOLLARFR: Ls,
  DPRODUCT: fs,
  DSTDEV: us,
  DSTDEVP: ss,
  DSUM: ls,
  DURATION: Ms,
  DVAR: cs,
  DVARP: gs,
  EDATE: wi,
  EFFECT: Ps,
  EOMONTH: Ai,
  ERF: Yr,
  ERFC: Br,
  ERFCPRECISE: su,
  ERFPRECISE: lu,
  ERROR: re,
  EVEN: vo,
  EXACT: Wi,
  EXP: Eo,
  EXPON: mr,
  EXPONDIST: cu,
  F: fn,
  FACT: vn,
  FACTDOUBLE: ve,
  FALSE: c0,
  FDIST: gu,
  FDISTRT: au,
  FIND: zi,
  FINV: hu,
  FINVRT: vu,
  FISHER: wt,
  FISHERINV: At,
  FIXED: Te,
  FLOOR: mn,
  FLOORMATH: Eu,
  FLOORPRECISE: pu,
  FORECAST: ue,
  FREQUENCY: Rt,
  FTEST: du,
  FV: Ln,
  FVSCHEDULE: qs,
  GAMMA: Zn,
  GAMMADIST: Nu,
  GAMMAINV: Iu,
  GAMMALN: Lr,
  GAMMALNPRECISE: Tu,
  GAUSS: Dt,
  GCD: po,
  GEOMEAN: Ct,
  GESTEP: Cf,
  GROWTH: Ot,
  HARMEAN: mt,
  HEX2BIN: Of,
  HEX2DEC: mf,
  HEX2OCT: Lf,
  HLOOKUP: ft,
  HOUR: Ri,
  HYPGEOM: Mr,
  HYPGEOMDIST: wu,
  IF: g0,
  IFERROR: h0,
  IFNA: v0,
  IFS: a0,
  IMABS: Wr,
  IMAGINARY: Y,
  IMARGUMENT: zr,
  IMCONJUGATE: Mf,
  IMCOS: ar,
  IMCOSH: we,
  IMCOT: Pf,
  IMCSC: Wf,
  IMCSCH: zf,
  IMDIV: qn,
  IMEXP: qf,
  IMLN: Uf,
  IMLOG10: Vf,
  IMLOG2: Ff,
  IMPOWER: yf,
  IMPRODUCT: Gf,
  IMREAL: B,
  IMSEC: Hf,
  IMSECH: Yf,
  IMSIN: hr,
  IMSINH: Ae,
  IMSQRT: Bf,
  IMSUB: Kf,
  IMSUM: Xf,
  IMTAN: Qf,
  INDEX: ut,
  INFO: Qe,
  INT: No,
  INTERCEPT: Lt,
  INTRATE: Us,
  IPMT: Re,
  IRR: Vs,
  ISBLANK: $e,
  ISERR: ee,
  ISERROR: sr,
  ISEVEN: Ze,
  ISFORMULA: Je,
  ISLOGICAL: te,
  ISNA: ke,
  ISNONTEXT: Se,
  ISNUMBER: lr,
  ISO: Io,
  ISODD: xe,
  ISOWEEKNUM: pe,
  ISPMT: Fs,
  ISREF: be,
  ISTEXT: oe,
  KURT: Mt,
  LARGE: se,
  LCM: To,
  LEFT: Ki,
  LEN: Xi,
  LINEST: Pr,
  LN: wo,
  LOG: Ao,
  LOG10: Ro,
  LOGEST: Pt,
  LOGINV: Au,
  LOGNORM: Wn,
  LOGNORMDIST: Ru,
  LOGNORMINV: Du,
  LOOKUP: st,
  LOWER: Qi,
  MATCH: lt,
  MAX: nr,
  MAXA: qt,
  MDURATION: ys,
  MEDIAN: le,
  MID: $i,
  MIN: rr,
  MINA: Ut,
  MINUTE: Di,
  MIRR: Gs,
  MMULT: Do,
  MOD: Co,
  MODE: Cn,
  MODEMULT: Cu,
  MODESNGL: Ou,
  MONTH: Ci,
  MROUND: Oo,
  MULTINOMIAL: mo,
  MUNIT: Lo,
  N: je,
  NA: _e,
  NEGBINOM: qr,
  NEGBINOMDIST: mu,
  NETWORKDAYS: cr,
  NETWORKDAYSINTL: Lu,
  NOMINAL: Hs,
  NORM: un,
  NORMDIST: Mu,
  NORMINV: Pu,
  NORMSDIST: qu,
  NORMSINV: Uu,
  NOT: E0,
  NOW: Oi,
  NPER: Ys,
  NPV: Ir,
  NUMBERVALUE: Zi,
  OCT2BIN: $f,
  OCT2DEC: Zf,
  OCT2HEX: Jf,
  ODD: Mo,
  ODDFPRICE: Bs,
  ODDFYIELD: Ws,
  ODDLPRICE: zs,
  ODDLYIELD: Ks,
  OR: p0,
  PDURATION: Xs,
  PEARSON: ce,
  PERCENTILE: j,
  PERCENTILEEXC: Vu,
  PERCENTILEINC: Fu,
  PERCENTRANK: Jn,
  PERCENTRANKEXC: yu,
  PERCENTRANKINC: Gu,
  PERMUT: Vt,
  PERMUTATIONA: Ft,
  PHI: yt,
  PI: Po,
  PMT: Sn,
  POISSON: Ur,
  POISSONDIST: Hu,
  POWER: Ee,
  PPMT: Qs,
  PRICE: $s,
  PRICEDISC: Zs,
  PRICEMAT: Js,
  PROB: Gt,
  PRODUCT: er,
  PRONETIC: Ji,
  PROPER: ki,
  PV: ks,
  QUARTILE: On,
  QUARTILEEXC: Yu,
  QUARTILEINC: Bu,
  QUOTIENT: qo,
  RADIANS: Uo,
  RAND: Vo,
  RANDBETWEEN: Fo,
  RANK: kn,
  RANKAVG: Wu,
  RANKEQ: zu,
  RATE: Ss,
  RECEIVED: xs,
  REPLACE: Si,
  REPT: nn,
  RIGHT: xi,
  ROMAN: yo,
  ROUND: hn,
  ROUNDDOWN: Go,
  ROUNDUP: Ho,
  ROW: Ht,
  ROWS: ct,
  RRI: bs,
  RSQ: Yt,
  SEARCH: bi,
  SEC: Yo,
  SECH: Bo,
  SECOND: mi,
  SERIESSUM: Wo,
  SHEET: nt,
  SHEETS: rt,
  SIGN: zo,
  SIN: Ko,
  SINH: Xo,
  SKEW: Vr,
  SKEWP: Ku,
  SLN: js,
  SLOPE: Bt,
  SMALL: ge,
  SORT: gt,
  SQRT: Qo,
  SQRTPI: $o,
  STANDARDIZE: Wt,
  STDEV: b,
  STDEVA: zt,
  STDEVP: Xu,
  STDEVPA: Kt,
  STDEVS: Qu,
  STEYX: Xt,
  SUBSTITUTE: ji,
  SUBTOTAL: Zo,
  SUM: Nn,
  SUMIF: Jo,
  SUMIFS: ko,
  SUMPRODUCT: So,
  SUMSQ: xo,
  SUMX2MY2: bo,
  SUMX2PY2: jo,
  SUMXMY2: _o,
  SWITCH: I0,
  SYD: _s,
  T: _i,
  TAN: ni,
  TANH: ri,
  TBILLEQ: n0,
  TBILLPRICE: r0,
  TBILLYIELD: e0,
  TDIST: $u,
  TDISTRT: Zu,
  TEXT: nf,
  TEXTJOIN: rf,
  TIME: Li,
  TIMEVALUE: Mi,
  TINV: Ju,
  TODAY: Pi,
  TRANSPOSE: at,
  TREND: Qt,
  TRIM: ef,
  TRIMMEAN: $t,
  TRUE: d0,
  TRUNC: ei,
  TTEST: ku,
  TYPE: et,
  UNICHAR: tf,
  UNICODE: of,
  UNIQUE: Dr,
  UPPER: ff,
  VALUE: uf,
  VAR: S,
  VARA: ae,
  VARP: Su,
  VARPA: he,
  VARS: xu,
  VDB: t0,
  VLOOKUP: ie,
  WEEKDAY: qi,
  WEEKNUM: Ui,
  WEIBULL: Fr,
  WEIBULLDIST: bu,
  WORKDAY: gr,
  WORKDAYINTL: ju,
  XIRR: o0,
  XNPV: i0,
  XOR: N0,
  YEAR: Vi,
  YEARFRAC: Gr,
  YIELD: f0,
  YIELDDISC: u0,
  YIELDMAT: s0,
  Z: yr,
  ZTEST: _u,
  utils: T0
}, Symbol.toStringTag, { value: "Module" })), ul = (n) => {
  n.component(
    "SpreadsheetList",
    Xr(() => import("./SpreadsheetList-12ab2245.js"))
  ), n.component(
    "SpreadsheetTable",
    Xr(() => import("./SpreadsheetTable-0fe1ef57.js"))
  );
};
export {
  Q0 as and,
  ol as asNumber,
  D0 as flatten,
  fl as formula,
  B0 as isBetween,
  W0 as isBetweenExclusive,
  K0 as isBetweenExclusiveInclusive,
  z0 as isBetweenInclusiveExclusive,
  Z0 as isEmpty,
  J0 as isEqual,
  H0 as isGreaterThan,
  Y0 as isGreaterThanOrEqualTo,
  nl as isLengthBetween,
  rl as isLengthBetweenExclusive,
  tl as isLengthBetweenExclusiveInclusive,
  el as isLengthBetweenInclusiveExclusive,
  S0 as isLengthEqualTo,
  j0 as isLengthGreaterThan,
  _0 as isLengthGreaterThanOrEqualTo,
  x0 as isLengthLessThan,
  b0 as isLengthLessThanOrEqualTo,
  y0 as isLessThan,
  G0 as isLessThanOrEqualTo,
  U0 as isNegative,
  M0 as isNumber,
  q0 as isPositive,
  F0 as isStrictlyNegative,
  V0 as isStrictlyPositive,
  k0 as isTypeMatch,
  P0 as isWholeNumber,
  C0 as listToCsv,
  X0 as not,
  $0 as or,
  L0 as parseCSV,
  m0 as saveCsv,
  A0 as sortList,
  R0 as sortRange,
  ul as spreadsheetsPlugin,
  O0 as tableToCsv,
  De as transpose,
  il as validate
};
