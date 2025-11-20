import { watch as J, onScopeDispose as Ee, effectScope as sn, shallowRef as G, reactive as Ge, watchEffect as _e, toRef as T, capitalize as en, Fragment as ce, isVNode as Ys, Comment as Ks, camelize as tl, unref as lt, warn as oa, getCurrentInstance as Xs, ref as Y, computed as x, provide as Pe, inject as he, defineComponent as qs, h as Lt, toRaw as De, toRefs as ra, toValue as We, createVNode as S, mergeProps as j, createElementVNode as C, normalizeClass as X, getCurrentScope as Zs, onBeforeUnmount as Ke, readonly as sa, onMounted as ct, useId as dt, onDeactivated as Xi, onActivated as Qs, nextTick as Ce, isRef as Ra, normalizeStyle as re, onUpdated as Js, Text as eu, Transition as Vt, resolveDynamicComponent as tu, withDirectives as Le, toDisplayString as Ft, TransitionGroup as nl, onBeforeMount as ua, vShow as Mt, Teleport as nu, markRaw as au, cloneVNode as lu, createTextVNode as Nn, vModelText as iu, onBeforeUpdate as ou, withModifiers as Bn } from "vue";
function Ue(e, t) {
  let n;
  function a() {
    n = sn(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), a();
    }) : t());
  }
  J(e, (l) => {
    l && !n ? a() : l || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), Ee(() => {
    n == null || n.stop();
  });
}
const ye = typeof window < "u", al = ye && "IntersectionObserver" in window, ru = ye && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), qi = ye && "matchMedia" in window && typeof window.matchMedia == "function", Kt = () => qi && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Rl(e, t, n) {
  su(e, t), t.set(e, n);
}
function su(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Nl(e, t, n) {
  return e.set(Zi(e, t), n), n;
}
function wt(e, t) {
  return e.get(Zi(e, t));
}
function Zi(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Qi(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null)
      return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function ze(e, t) {
  if (e === t) return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length ? !1 : n.every((a) => ze(e[a], t[a]));
}
function Ot(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Qi(e, t.split("."), n));
}
function Re(e, t, n) {
  if (t === !0) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const l = t(e, n);
    return typeof l > "u" ? n : l;
  }
  if (typeof t == "string") return Ot(e, t, n);
  if (Array.isArray(t)) return Qi(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function Gt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, a) => t + a);
}
function Q(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "")
    return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function un(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Hl(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function ll(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const zl = Object.freeze({
  enter: "Enter",
  tab: "Tab",
  delete: "Delete",
  esc: "Escape",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  end: "End",
  home: "Home",
  del: "Delete",
  backspace: "Backspace",
  insert: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  shift: "Shift"
});
function Ji(e) {
  return Object.keys(e);
}
function Pa(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function Pt(e, t) {
  const n = {};
  for (const a of t)
    Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
  return n;
}
function Wl(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    t.some((o) => o instanceof RegExp ? o.test(i) : o === i) ? a[i] = e[i] : l[i] = e[i];
  return [a, l];
}
function Xe(e, t) {
  const n = {
    ...e
  };
  return t.forEach((a) => delete n[a]), n;
}
const eo = /^on[^a-z]/, il = (e) => eo.test(e), uu = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function ca(e) {
  const [t, n] = Wl(e, [eo]), a = Xe(t, uu), [l, i] = Wl(n, ["class", "style", "id", /^data-/]);
  return Object.assign(l, t), Object.assign(i, a), [l, i];
}
function Oe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function cu(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++)
      i[o] = arguments[o];
    clearTimeout(n), n = setTimeout(() => e(...i), lt(t));
  };
  return a.clear = () => {
    clearTimeout(n);
  }, a.immediate = e, a;
}
function Fe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function jl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function Gl(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function du(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; )
    n.push(e.substr(a, t)), a += t;
  return n;
}
function Ne() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in t) {
    const i = e[l], o = t[l];
    if (Hl(i) && Hl(o)) {
      a[l] = Ne(i, o, n);
      continue;
    }
    if (n && Array.isArray(i) && Array.isArray(o)) {
      a[l] = n(i, o);
      continue;
    }
    a[l] = o;
  }
  return a;
}
function to(e) {
  return e.map((t) => t.type === ce ? to(t.children) : t).flat();
}
function Bt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Bt.cache.has(e)) return Bt.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Bt.cache.set(e, t), t;
}
Bt.cache = /* @__PURE__ */ new Map();
function Ut(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t))
    return t.map((n) => Ut(e, n)).flat(1);
  if (t.suspense)
    return Ut(e, t.ssContent);
  if (Array.isArray(t.children))
    return t.children.map((n) => Ut(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return Ut(e, t.component.subTree).flat(1);
  }
  return [];
}
var Ht = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap();
class no {
  constructor(t) {
    Rl(this, Ht, []), Rl(this, _t, 0), this.size = t;
  }
  get isFull() {
    return wt(Ht, this).length === this.size;
  }
  push(t) {
    wt(Ht, this)[wt(_t, this)] = t, Nl(_t, this, (wt(_t, this) + 1) % this.size);
  }
  values() {
    return wt(Ht, this).slice(wt(_t, this)).concat(wt(Ht, this).slice(0, wt(_t, this)));
  }
  clear() {
    wt(Ht, this).length = 0, Nl(_t, this, 0);
  }
}
function ol(e) {
  const t = Ge({});
  _e(() => {
    const a = e();
    for (const l in a)
      t[l] = a[l];
  }, {
    flush: "sync"
  });
  const n = {};
  for (const a in t)
    n[a] = T(() => t[a]);
  return n;
}
function Hn(e, t) {
  return e.includes(t);
}
function ao(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const $e = () => [Function, Array];
function Ul(e, t) {
  return t = "on" + en(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function rl(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...n);
  else typeof e == "function" && e(...n);
}
function zn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function lo(e, t, n) {
  let a, l = e.indexOf(document.activeElement);
  const i = t === "next" ? 1 : -1;
  do
    l += i, a = e[l];
  while ((!a || a.offsetParent == null || !((n == null ? void 0 : n(a)) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function rn(e, t) {
  var a, l, i, o;
  const n = zn(e);
  if (t == null)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((a = n[0]) == null || a.focus());
  else if (t === "first")
    (l = n[0]) == null || l.focus();
  else if (t === "last")
    (i = n.at(-1)) == null || i.focus();
  else if (typeof t == "number")
    (o = n[t]) == null || o.focus();
  else {
    const r = lo(n, t);
    r ? r.focus() : rn(e, t === "next" ? "first" : "last");
  }
}
function Dn(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function fu() {
}
function Xt(e, t) {
  if (!(ye && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function sl(e) {
  return e.some((t) => Ys(t) ? t.type === Ks ? !1 : t.type !== ce || sl(t.children) : !0) ? e : null;
}
function vu(e, t) {
  if (!ye || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function mu(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), i = l.left, o = l.top, r = l.right, s = l.bottom;
  return n >= i && n <= r && a >= o && a <= s;
}
function Na() {
  const e = G(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => ll(e.value)
  }), t;
}
function Wn(e) {
  const t = e.key.length === 1, n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return t && n;
}
function Ha(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function gu(e) {
  const t = {};
  for (const n in e)
    t[tl(n)] = e[n];
  return t;
}
function hu(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [a, l] = n;
    return t.includes(a) ? !!l : l !== void 0;
  }));
}
const io = ["top", "bottom"], yu = ["start", "end", "left", "right"];
function za(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = Hn(io, n) ? "start" : Hn(yu, n) ? "top" : "center"), {
    side: Wa(n, t),
    align: Wa(a, t)
  };
}
function Wa(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Ia(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function Aa(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function Yl(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function Kl(e) {
  return Hn(io, e.side) ? "y" : "x";
}
class ht {
  constructor(t) {
    let {
      x: n,
      y: a,
      width: l,
      height: i
    } = t;
    this.x = n, this.y = a, this.width = l, this.height = i;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function Xl(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right)
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom)
    }
  };
}
function oo(e) {
  return Array.isArray(e) ? new ht({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function bu(e) {
  if (e === document.documentElement)
    return visualViewport ? new ht({
      x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft,
      y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop,
      width: visualViewport.width * visualViewport.scale,
      height: visualViewport.height * visualViewport.scale
    }) : new ht({
      x: 0,
      y: 0,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  {
    const t = e.getBoundingClientRect();
    return new ht({
      x: t.x,
      y: t.y,
      width: e.clientWidth,
      height: e.clientHeight
    });
  }
}
function ul(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let l, i, o, r, s;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), i = Number(l[0]), o = Number(l[5]), r = Number(l[12]), s = Number(l[13]);
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), i = Number(l[0]), o = Number(l[3]), r = Number(l[4]), s = Number(l[5]);
    else
      return new ht(t);
    const c = n.transformOrigin, u = t.x - r - (1 - i) * parseFloat(c), d = t.y - s - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), f = i ? t.width / i : e.offsetWidth + 1, v = o ? t.height / o : e.offsetHeight + 1;
    return new ht({
      x: u,
      y: d,
      width: f,
      height: v
    });
  } else
    return new ht(t);
}
function xt(e, t, n) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let a;
  try {
    a = e.animate(t, n);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof a.finished > "u" && (a.finished = new Promise((l) => {
    a.onfinish = () => {
      l(a);
    };
  })), a;
}
const Mn = /* @__PURE__ */ new WeakMap();
function Su(e, t) {
  Object.keys(t).forEach((n) => {
    if (il(n)) {
      const a = ao(n), l = Mn.get(e);
      if (t[n] == null)
        l == null || l.forEach((i) => {
          const [o, r] = i;
          o === a && (e.removeEventListener(a, r), l.delete(i));
        });
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([a, t[n]]), Mn.has(e) || Mn.set(e, i);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function wu(e, t) {
  Object.keys(t).forEach((n) => {
    if (il(n)) {
      const a = ao(n), l = Mn.get(e);
      l == null || l.forEach((i) => {
        const [o, r] = i;
        o === a && (e.removeEventListener(a, r), l.delete(i));
      });
    } else
      e.removeAttribute(n);
  });
}
const zt = 2.4, ql = 0.2126729, Zl = 0.7151522, Ql = 0.072175, xu = 0.55, ku = 0.58, Cu = 0.57, pu = 0.62, Fn = 0.03, Jl = 1.45, Vu = 5e-4, Pu = 1.25, Iu = 1.25, ei = 0.078, ti = 12.82051282051282, On = 0.06, ni = 1e-3;
function ai(e, t) {
  const n = (e.r / 255) ** zt, a = (e.g / 255) ** zt, l = (e.b / 255) ** zt, i = (t.r / 255) ** zt, o = (t.g / 255) ** zt, r = (t.b / 255) ** zt;
  let s = n * ql + a * Zl + l * Ql, c = i * ql + o * Zl + r * Ql;
  if (s <= Fn && (s += (Fn - s) ** Jl), c <= Fn && (c += (Fn - c) ** Jl), Math.abs(c - s) < Vu) return 0;
  let u;
  if (c > s) {
    const d = (c ** xu - s ** ku) * Pu;
    u = d < ni ? 0 : d < ei ? d - d * ti * On : d - On;
  } else {
    const d = (c ** pu - s ** Cu) * Iu;
    u = d > -ni ? 0 : d > -ei ? d - d * ti * On : d + On;
  }
  return u * 100;
}
function tt(e) {
  oa(`Vuetify: ${e}`);
}
function cn(e) {
  oa(`Vuetify error: ${e}`);
}
function ro(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`, oa(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`);
}
const jn = 0.20689655172413793, Au = (e) => e > jn ** 3 ? Math.cbrt(e) : e / (3 * jn ** 2) + 4 / 29, Tu = (e) => e > jn ? e ** 3 : 3 * jn ** 2 * (e - 4 / 29);
function so(e) {
  const t = Au, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function uo(e) {
  const t = Tu, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const _u = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Eu = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Bu = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Du = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function co(e) {
  const t = Array(3), n = Eu, a = _u;
  for (let l = 0; l < 3; ++l)
    t[l] = Math.round(Fe(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return {
    r: t[0],
    g: t[1],
    b: t[2]
  };
}
function cl(e) {
  let {
    r: t,
    g: n,
    b: a
  } = e;
  const l = [0, 0, 0], i = Du, o = Bu;
  t = i(t / 255), n = i(n / 255), a = i(a / 255);
  for (let r = 0; r < 3; ++r)
    l[r] = o[r][0] * t + o[r][1] * n + o[r][2] * a;
  return l;
}
function ja(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Fu(e) {
  return ja(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const li = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Ou = {
  rgb: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  rgba: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  hsl: (e, t, n, a) => ii({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsla: (e, t, n, a) => ii({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsv: (e, t, n, a) => dn({
    h: e,
    s: t,
    v: n,
    a
  }),
  hsva: (e, t, n, a) => dn({
    h: e,
    s: t,
    v: n,
    a
  })
};
function gt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && tt(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && li.test(e)) {
    const {
      groups: t
    } = e.match(li), {
      fn: n,
      values: a
    } = t, l = a.split(/,\s*|\s*\/\s*|\s+/).map((i, o) => i.endsWith("%") || // unitless slv are %
    o > 0 && o < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return Ou[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((a) => a + a).join("") : [6, 8].includes(t.length) || tt(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && tt(`'${e}' is not a valid hex(a) color`), Lu(t);
  } else if (typeof e == "object") {
    if (Pa(e, ["r", "g", "b"]))
      return e;
    if (Pa(e, ["h", "s", "l"]))
      return dn(fo(e));
    if (Pa(e, ["h", "s", "v"]))
      return dn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function dn(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: l
  } = e, i = (r) => {
    const s = (r + t / 60) % 6;
    return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, o = [i(5), i(3), i(1)].map((r) => Math.round(r * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a: l
  };
}
function ii(e) {
  return dn(fo(e));
}
function fo(e) {
  const {
    h: t,
    s: n,
    l: a,
    a: l
  } = e, i = a + n * Math.min(a, 1 - a), o = i === 0 ? 0 : 2 - 2 * a / i;
  return {
    h: t,
    s: o,
    v: i,
    a: l
  };
}
function $n(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function $u(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: l
  } = e;
  return `#${[$n(t), $n(n), $n(a), l !== void 0 ? $n(Math.round(l * 255)) : ""].join("")}`;
}
function Lu(e) {
  e = Mu(e);
  let [t, n, a, l] = du(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, {
    r: t,
    g: n,
    b: a,
    a: l
  };
}
function Mu(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = jl(jl(e, 6), 8, "F")), e;
}
function Ru(e, t) {
  const n = so(cl(e));
  return n[0] = n[0] + t * 10, co(uo(n));
}
function Nu(e, t) {
  const n = so(cl(e));
  return n[0] = n[0] - t * 10, co(uo(n));
}
function Hu(e) {
  const t = gt(e);
  return cl(t)[1];
}
function vo(e) {
  const t = Math.abs(ai(gt(0), gt(e)));
  return Math.abs(ai(gt(16777215), gt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function O(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const o = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return n && l in n ? a[l] = {
      ...o,
      default: n[l]
    } : a[l] = o, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const oe = O({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function Ie(e, t) {
  const n = Xs();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function yt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Ie(e).type;
  return Bt((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function zu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const qt = Symbol.for("vuetify:defaults");
function Wu(e) {
  return Y(e);
}
function dl() {
  const e = he(qt);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function nt(e, t) {
  const n = dl(), a = Y(e), l = x(() => {
    if (lt(t == null ? void 0 : t.disabled)) return n.value;
    const o = lt(t == null ? void 0 : t.scoped), r = lt(t == null ? void 0 : t.reset), s = lt(t == null ? void 0 : t.root);
    if (a.value == null && !(o || r || s)) return n.value;
    let c = Ne(a.value, {
      prev: n.value
    });
    if (o) return c;
    if (r || s) {
      const u = Number(r || 1 / 0);
      for (let d = 0; d <= u && !(!c || !("prev" in c)); d++)
        c = c.prev;
      return c && typeof s == "string" && s in c && (c = Ne(Ne(c, {
        prev: c
      }), c[s])), c;
    }
    return c.prev ? Ne(c.prev, c) : c;
  });
  return Pe(qt, l), l;
}
function ju(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Bt(t)] < "u");
}
function Gu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : dl();
  const a = Ie("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const l = x(() => {
    var s;
    return (s = n.value) == null ? void 0 : s[e._as ?? t];
  }), i = new Proxy(e, {
    get(s, c) {
      var v, m, b, y;
      const u = Reflect.get(s, c);
      if (c === "class" || c === "style")
        return [(v = l.value) == null ? void 0 : v[c], u].filter((h) => h != null);
      if (ju(a.vnode, c)) return u;
      const d = (m = l.value) == null ? void 0 : m[c];
      if (d !== void 0) return d;
      const f = (y = (b = n.value) == null ? void 0 : b.global) == null ? void 0 : y[c];
      return f !== void 0 ? f : u;
    }
  }), o = G();
  _e(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((c) => {
        let [u] = c;
        return u.startsWith(u[0].toUpperCase());
      });
      o.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      o.value = void 0;
  });
  function r() {
    const s = zu(qt, a);
    Pe(qt, x(() => o.value ? Ne((s == null ? void 0 : s.value) ?? {}, o.value) : s == null ? void 0 : s.value));
  }
  return {
    props: i,
    provideSubDefaults: r
  };
}
function tn(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return tt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = O(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return Pt(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const i = dl();
      if (!i.value) return e._setup(a, l);
      const {
        props: o,
        provideSubDefaults: r
      } = Gu(a, a._as ?? e.name, i), s = e._setup(o, l);
      return r(), s;
    };
  }
  return e;
}
function U() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? tn : qs)(t);
}
function Uu(e, t) {
  return t.props = e, t;
}
function da(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return U()({
    name: n ?? en(tl(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      },
      ...oe()
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      return () => {
        var o;
        return Lt(a.tag, {
          class: [e, a.class],
          style: a.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function mo(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const fn = "cubic-bezier(0.4, 0, 0.2, 1)", oi = "cubic-bezier(0.0, 0, 0.2, 1)", ri = "cubic-bezier(0.4, 0, 1, 1)", Yu = {
  linear: (e) => e,
  easeInQuad: (e) => e ** 2,
  easeOutQuad: (e) => e * (2 - e),
  easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
  easeInCubic: (e) => e ** 3,
  easeOutCubic: (e) => --e ** 3 + 1,
  easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
  easeInQuart: (e) => e ** 4,
  easeOutQuart: (e) => 1 - --e ** 4,
  easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
  easeInQuint: (e) => e ** 5,
  easeOutQuint: (e) => 1 + --e ** 5,
  easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5,
  instant: (e) => 1
};
function si(e, t, n) {
  return Object.keys(e).filter((a) => il(a) && a.endsWith(t)).reduce((a, l) => (a[l.slice(0, -t.length)] = (i) => e[l](i, n(i)), a), {});
}
function go(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? Ku(e) : fl(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Gn(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (fl(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function fl(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, a = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || a;
}
function Ku(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function Xu(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function ee(e) {
  const t = Ie("useRender");
  t.render = e;
}
function fe(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const i = Ie("useProxiedModel"), o = Y(e[t] !== void 0 ? e[t] : n), r = Bt(t), c = r !== t ? x(() => {
    var d, f, v, m;
    return e[t], !!(((d = i.vnode.props) != null && d.hasOwnProperty(t) || (f = i.vnode.props) != null && f.hasOwnProperty(r)) && ((v = i.vnode.props) != null && v.hasOwnProperty(`onUpdate:${t}`) || (m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${r}`)));
  }) : x(() => {
    var d, f;
    return e[t], !!((d = i.vnode.props) != null && d.hasOwnProperty(t) && ((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`)));
  });
  Ue(() => !c.value, () => {
    J(() => e[t], (d) => {
      o.value = d;
    });
  });
  const u = x({
    get() {
      const d = e[t];
      return a(c.value ? d : o.value);
    },
    set(d) {
      const f = l(d), v = De(c.value ? e[t] : o.value);
      v === f || a(v) === d || (o.value = f, i == null || i.emit(`update:${t}`, f));
    }
  });
  return Object.defineProperty(u, "externalValue", {
    get: () => c.value ? e[t] : o.value
  }), u;
}
const qu = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  dismiss: "Dismiss",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    },
    ariaLabel: {
      previousMonth: "Previous month",
      nextMonth: "Next month",
      selectYear: "Select year",
      selectDate: "{0}",
      // Full date format
      currentDate: "Today, {0}"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  fileUpload: {
    title: "Drag and drop files here",
    divider: "or",
    browse: "Browse Files"
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    title: "Select Time"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  },
  rules: {
    required: "This field is required",
    email: "Please enter a valid email",
    number: "This field can only contain numbers",
    integer: "This field can only contain integer values",
    capital: "This field can only contain uppercase letters",
    maxLength: "You must enter a maximum of {0} characters",
    minLength: "You must enter a minimum of {0} characters",
    strictLength: "The length of the entered field is invalid",
    exclude: "The {0} character is not allowed",
    notEmpty: "Please choose at least one value",
    pattern: "Invalid format"
  },
  hotkey: {
    then: "then",
    ctrl: "Ctrl",
    command: "Command",
    space: "Space",
    shift: "Shift",
    alt: "Alt",
    enter: "Enter",
    escape: "Escape",
    upArrow: "Up Arrow",
    downArrow: "Down Arrow",
    leftArrow: "Left Arrow",
    rightArrow: "Right Arrow",
    backspace: "Backspace",
    option: "Option",
    plus: "plus",
    shortcut: "Keyboard shortcut: {0}"
  },
  video: {
    play: "Play",
    pause: "Pause",
    seek: "Seek",
    volume: "Volume",
    showVolume: "Show volume control",
    mute: "Mute",
    unmute: "Unmute",
    enterFullscreen: "Full screen",
    exitFullscreen: "Exit full screen"
  },
  colorPicker: {
    ariaLabel: {
      eyedropper: "Select color with eyedropper",
      hueSlider: "Hue",
      alphaSlider: "Alpha",
      redInput: "Red value",
      greenInput: "Green value",
      blueInput: "Blue value",
      alphaInput: "Alpha value",
      hueInput: "Hue value",
      saturationInput: "Saturation value",
      lightnessInput: "Lightness value",
      hexInput: "HEX value",
      hexaInput: "HEX with alpha value",
      changeFormat: "Change color format"
    }
  }
}, ui = "$vuetify.", ci = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[Number(a)])), ho = (e, t, n) => function(a) {
  for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), o = 1; o < l; o++)
    i[o - 1] = arguments[o];
  if (!a.startsWith(ui))
    return ci(a, i);
  const r = a.replace(ui, ""), s = e.value && n.value[e.value], c = t.value && n.value[t.value];
  let u = Ot(s, r, null);
  return u || (tt(`Translation key "${a}" not found in "${e.value}", trying fallback locale`), u = Ot(c, r, null)), u || (cn(`Translation key "${a}" not found in fallback`), u = a), typeof u != "string" && (cn(`Translation key "${a}" has a non-string value`), u = a), ci(u, i);
};
function vl(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function yo(e, t) {
  return vl(e, t)(0.1).includes(",") ? "," : ".";
}
function Ta(e, t, n) {
  const a = fe(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, J(n, (l) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function bo(e) {
  return (t) => {
    const n = Ta(t, "locale", e.current), a = Ta(t, "fallback", e.fallback), l = Ta(t, "messages", e.messages);
    return {
      name: "vuetify",
      current: n,
      fallback: a,
      messages: l,
      decimalSeparator: T(() => yo(n, a)),
      t: ho(n, a, l),
      n: vl(n, a),
      provide: bo({
        current: n,
        fallback: a,
        messages: l
      })
    };
  };
}
function Zu(e) {
  const t = G((e == null ? void 0 : e.locale) ?? "en"), n = G((e == null ? void 0 : e.fallback) ?? "en"), a = Y({
    en: qu,
    ...e == null ? void 0 : e.messages
  });
  return {
    name: "vuetify",
    current: t,
    fallback: n,
    messages: a,
    decimalSeparator: T(() => (e == null ? void 0 : e.decimalSeparator) ?? yo(t, n)),
    t: ho(t, n, a),
    n: vl(t, n),
    provide: bo({
      current: t,
      fallback: n,
      messages: a
    })
  };
}
const Un = Symbol.for("vuetify:locale");
function Qu(e) {
  return e.name != null;
}
function Ju(e) {
  const t = e != null && e.adapter && Qu(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Zu(e), n = tc(t, e);
  return {
    ...t,
    ...n
  };
}
function ot() {
  const e = he(Un);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function ec() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  };
}
function tc(e, t) {
  const n = Y((t == null ? void 0 : t.rtl) ?? ec()), a = x(() => n.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: n,
    rtlClasses: T(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function qe() {
  const e = he(Un);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
function kn(e) {
  const t = e.slice(-2).toUpperCase();
  switch (!0) {
    case e === "GB-alt-variant":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    case e === "001":
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE
    KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PY SA SG SV TH TT TW UM US
    VE VI WS YE ZA ZW`.includes(t):
      return {
        firstDay: 0,
        firstWeekSize: 1
      };
    case `AI AL AM AR AU AZ BA BM BN BY CL CM CN CR CY EC GE HR KG KZ LB LK LV
    MD ME MK MN MY NZ RO RS SI TJ TM TR UA UY UZ VN XK`.includes(t):
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AD AN AT AX BE BG CH CZ DE DK EE ES FI FJ FO FR GB GF GP GR HU IE IS
    IT LI LT LU MC MQ NL NO PL RE RU SE SK SM VA`.includes(t):
      return {
        firstDay: 1,
        firstWeekSize: 4
      };
    case "AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY".includes(t):
      return {
        firstDay: 6,
        firstWeekSize: 1
      };
    case t === "MV":
      return {
        firstDay: 5,
        firstWeekSize: 1
      };
    case t === "PT":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    default:
      return null;
  }
}
function nc(e, t, n) {
  var u;
  const a = [];
  let l = [];
  const i = So(e), o = wo(e), r = n ?? ((u = kn(t)) == null ? void 0 : u.firstDay) ?? 0, s = (i.getDay() - r + 7) % 7, c = (o.getDay() - r + 7) % 7;
  for (let d = 0; d < s; d++) {
    const f = new Date(i);
    f.setDate(f.getDate() - (s - d)), l.push(f);
  }
  for (let d = 1; d <= o.getDate(); d++) {
    const f = new Date(e.getFullYear(), e.getMonth(), d);
    l.push(f), l.length === 7 && (a.push(l), l = []);
  }
  for (let d = 1; d < 7 - c; d++) {
    const f = new Date(o);
    f.setDate(f.getDate() + d), l.push(f);
  }
  return l.length > 0 && a.push(l), a;
}
function Yn(e, t, n) {
  var i;
  let a = (n ?? ((i = kn(t)) == null ? void 0 : i.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(a) || (tt("Invalid firstDayOfWeek, expected discrete number in range [0-6]"), a = 0);
  const l = new Date(e);
  for (; l.getDay() !== a; )
    l.setDate(l.getDate() - 1);
  return l;
}
function ac(e, t) {
  var l;
  const n = new Date(e), a = ((((l = kn(t)) == null ? void 0 : l.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== a; )
    n.setDate(n.getDate() + 1);
  return n;
}
function So(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function wo(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function lc(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const ic = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function xo(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (ic.test(e))
      return lc(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const di = new Date(2e3, 0, 2);
function oc(e, t, n) {
  var l;
  const a = t ?? ((l = kn(e)) == null ? void 0 : l.firstDay) ?? 0;
  return Gt(7).map((i) => {
    const o = new Date(di);
    return o.setDate(di.getDate() + a + i), new Intl.DateTimeFormat(e, {
      weekday: n ?? "narrow"
    }).format(o);
  });
}
function rc(e, t, n, a) {
  const l = xo(e) ?? /* @__PURE__ */ new Date(), i = a == null ? void 0 : a[t];
  if (typeof i == "function")
    return i(l, t, n);
  let o = {};
  switch (t) {
    case "fullDate":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      o = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "normalDate":
      const r = l.getDate(), s = new Intl.DateTimeFormat(n, {
        month: "long"
      }).format(l);
      return `${r} ${s}`;
    case "normalDateWithWeekday":
      o = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      o = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      o = {
        year: "numeric"
      };
      break;
    case "month":
      o = {
        month: "long"
      };
      break;
    case "monthShort":
      o = {
        month: "short"
      };
      break;
    case "monthAndYear":
      o = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      o = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      o = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      o = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(n).format(l.getDate());
    case "hours12h":
      o = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "hours24h":
      o = {
        hour: "numeric",
        hour12: !1
      };
      break;
    case "minutes":
      o = {
        minute: "numeric"
      };
      break;
    case "seconds":
      o = {
        second: "numeric"
      };
      break;
    case "fullTime":
      o = {
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullTime12h":
      o = {
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullTime24h":
      o = {
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "fullDateTime":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullDateTime12h":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime24h":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDate":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric"
      }, new Intl.DateTimeFormat(n, o).format(l).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      }, new Intl.DateTimeFormat(n, o).format(l).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      }, new Intl.DateTimeFormat(n, o).format(l).replace(/, /g, " ");
    default:
      o = i ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(n, o).format(l);
}
function sc(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = Gl(String(n.getMonth() + 1), 2, "0"), i = Gl(String(n.getDate()), 2, "0");
  return `${a}-${l}-${i}`;
}
function uc(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function cc(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function dc(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function Dt(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function fc(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function vc(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function vn(e) {
  return e.getFullYear();
}
function mc(e) {
  return e.getMonth();
}
function gc(e, t, n, a) {
  const l = kn(t), i = n ?? (l == null ? void 0 : l.firstDay) ?? 0, o = (l == null ? void 0 : l.firstWeekSize) ?? 1;
  return a !== void 0 ? hc(e, t, i, a) : yc(e, t, i, o);
}
function hc(e, t, n, a) {
  const l = (7 + a - n) % 7, i = Yn(e, t, n), o = Dt(i, 6);
  function r(f) {
    return (7 + new Date(f, 0, 1).getDay() - n) % 7;
  }
  let s = vn(e);
  s < vn(o) && r(s + 1) <= l && s++;
  const c = new Date(s, 0, 1), u = r(s), d = u <= l ? Dt(c, -u) : Dt(c, 7 - u);
  return 1 + Xn(ml(e), mn(d), "weeks");
}
function yc(e, t, n, a) {
  const l = Dt(Yn(e, t, n), 6);
  function i(u) {
    const d = new Date(u, 0, 1);
    return 7 - Xn(d, Yn(d, t, n), "days");
  }
  let o = vn(e);
  o < vn(l) && i(o + 1) >= a && o++;
  const r = new Date(o, 0, 1), s = i(o), c = s >= a ? Dt(r, s - 7) : Dt(r, s);
  return 1 + Xn(ml(e), mn(c), "weeks");
}
function bc(e) {
  return e.getDate();
}
function Sc(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function wc(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function xc(e) {
  return e.getHours();
}
function kc(e) {
  return e.getMinutes();
}
function Cc(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function pc(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function Vc(e, t) {
  return Kn(e, t[0]) && Ac(e, t[1]);
}
function Pc(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Kn(e, t) {
  return e.getTime() > t.getTime();
}
function Ic(e, t) {
  return Kn(mn(e), mn(t));
}
function Ac(e, t) {
  return e.getTime() < t.getTime();
}
function fi(e, t) {
  return e.getTime() === t.getTime();
}
function Tc(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function _c(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Ec(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function Xn(e, t, n) {
  const a = new Date(e), l = new Date(t);
  switch (n) {
    case "years":
      return a.getFullYear() - l.getFullYear();
    case "quarters":
      return Math.floor((a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12) / 4);
    case "months":
      return a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12;
    case "weeks":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((a.getTime() - l.getTime()) / 1e3);
    default:
      return a.getTime() - l.getTime();
  }
}
function Bc(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function Dc(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function Fc(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function Oc(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function $c(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function mn(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function ml(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class Lc {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return xo(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return sc(this, t);
  }
  parseISO(t) {
    return uc(t);
  }
  addMinutes(t, n) {
    return cc(t, n);
  }
  addHours(t, n) {
    return dc(t, n);
  }
  addDays(t, n) {
    return Dt(t, n);
  }
  addWeeks(t, n) {
    return fc(t, n);
  }
  addMonths(t, n) {
    return vc(t, n);
  }
  getWeekArray(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return nc(t, this.locale, a);
  }
  startOfWeek(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return Yn(t, this.locale, a);
  }
  endOfWeek(t) {
    return ac(t, this.locale);
  }
  startOfMonth(t) {
    return So(t);
  }
  endOfMonth(t) {
    return wo(t);
  }
  format(t, n) {
    return rc(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return fi(t, n);
  }
  isValid(t) {
    return Pc(t);
  }
  isWithinRange(t, n) {
    return Vc(t, n);
  }
  isAfter(t, n) {
    return Kn(t, n);
  }
  isAfterDay(t, n) {
    return Ic(t, n);
  }
  isBefore(t, n) {
    return !Kn(t, n) && !fi(t, n);
  }
  isSameDay(t, n) {
    return Tc(t, n);
  }
  isSameMonth(t, n) {
    return _c(t, n);
  }
  isSameYear(t, n) {
    return Ec(t, n);
  }
  setMinutes(t, n) {
    return Dc(t, n);
  }
  setHours(t, n) {
    return Bc(t, n);
  }
  setMonth(t, n) {
    return Fc(t, n);
  }
  setDate(t, n) {
    return Oc(t, n);
  }
  setYear(t, n) {
    return $c(t, n);
  }
  getDiff(t, n, a) {
    return Xn(t, n, a);
  }
  getWeekdays(t, n) {
    const a = t !== void 0 ? Number(t) : void 0;
    return oc(this.locale, a, n);
  }
  getYear(t) {
    return vn(t);
  }
  getMonth(t) {
    return mc(t);
  }
  getWeek(t, n, a) {
    const l = n !== void 0 ? Number(n) : void 0, i = a !== void 0 ? Number(a) : void 0;
    return gc(t, this.locale, l, i);
  }
  getDate(t) {
    return bc(t);
  }
  getNextMonth(t) {
    return Sc(t);
  }
  getPreviousMonth(t) {
    return wc(t);
  }
  getHours(t) {
    return xc(t);
  }
  getMinutes(t) {
    return kc(t);
  }
  startOfDay(t) {
    return mn(t);
  }
  endOfDay(t) {
    return ml(t);
  }
  startOfYear(t) {
    return Cc(t);
  }
  endOfYear(t) {
    return pc(t);
  }
}
const Mc = Symbol.for("vuetify:date-options"), vi = Symbol.for("vuetify:date-adapter");
function Rc(e, t) {
  const n = Ne({
    adapter: Lc,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, e);
  return {
    options: n,
    instance: Nc(n, t)
  };
}
function Nc(e, t) {
  const n = Ge(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return J(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
const fa = ["sm", "md", "lg", "xl", "xxl"], Ga = Symbol.for("vuetify:display"), mi = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, Hc = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mi;
  return Ne(mi, e);
};
function gi(e) {
  return ye && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function hi(e) {
  return ye && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function yi(e) {
  const t = ye && !e ? window.navigator.userAgent : "ssr";
  function n(m) {
    return !!t.match(m);
  }
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), i = n(/cordova/i), o = n(/electron/i), r = n(/chrome/i), s = n(/edge/i), c = n(/firefox/i), u = n(/opera/i), d = n(/win/i), f = n(/mac/i), v = n(/linux/i);
  return {
    android: a,
    ios: l,
    cordova: i,
    electron: o,
    chrome: r,
    edge: s,
    firefox: c,
    opera: u,
    win: d,
    mac: f,
    linux: v,
    touch: ru,
    ssr: t === "ssr"
  };
}
function zc(e, t) {
  const {
    thresholds: n,
    mobileBreakpoint: a
  } = Hc(e), l = G(hi(t)), i = G(yi(t)), o = Ge({}), r = G(gi(t));
  function s() {
    l.value = hi(), r.value = gi();
  }
  function c() {
    s(), i.value = yi();
  }
  return _e(() => {
    const u = r.value < n.sm, d = r.value < n.md && !u, f = r.value < n.lg && !(d || u), v = r.value < n.xl && !(f || d || u), m = r.value < n.xxl && !(v || f || d || u), b = r.value >= n.xxl, y = u ? "xs" : d ? "sm" : f ? "md" : v ? "lg" : m ? "xl" : "xxl", h = typeof a == "number" ? a : n[a], g = r.value < h;
    o.xs = u, o.sm = d, o.md = f, o.lg = v, o.xl = m, o.xxl = b, o.smAndUp = !u, o.mdAndUp = !(u || d), o.lgAndUp = !(u || d || f), o.xlAndUp = !(u || d || f || v), o.smAndDown = !(f || v || m || b), o.mdAndDown = !(v || m || b), o.lgAndDown = !(m || b), o.xlAndDown = !b, o.name = y, o.height = l.value, o.width = r.value, o.mobile = g, o.mobileBreakpoint = a, o.platform = i.value, o.thresholds = n;
  }), ye && (window.addEventListener("resize", s, {
    passive: !0
  }), Ee(() => {
    window.removeEventListener("resize", s);
  }, !0)), {
    ...ra(o),
    update: c,
    ssr: !!t
  };
}
const Cn = O({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function Tt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  const n = he(Ga);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = x(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : !1), l = T(() => t ? {
    [`${t}--mobile`]: a.value
  } : {});
  return {
    ...n,
    displayClasses: l,
    mobile: a
  };
}
const ko = Symbol.for("vuetify:goto");
function Co() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: Yu
  };
}
function Wc(e) {
  return gl(e) ?? (document.scrollingElement || document.body);
}
function gl(e) {
  return typeof e == "string" ? document.querySelector(e) : ll(e);
}
function _a(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let a = gl(e), l = 0;
  for (; a; )
    l += t ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function jc(e, t) {
  return {
    rtl: t.isRtl,
    options: Ne(Co(), e)
  };
}
async function bi(e, t, n, a) {
  const l = n ? "scrollLeft" : "scrollTop", i = Ne((a == null ? void 0 : a.options) ?? Co(), t), o = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : gl(e)) ?? 0, s = i.container === "parent" && r instanceof HTMLElement ? r.parentElement : Wc(i.container), c = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? i.patterns.instant : typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!c) throw new TypeError(`Easing function "${i.easing}" not found.`);
  let u;
  if (typeof r == "number")
    u = _a(r, n, o);
  else if (u = _a(r, n, o) - _a(s, n, o), i.layout) {
    const m = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    m && (u -= parseInt(m, 10));
  }
  u += i.offset, u = Uc(s, u, !!o, !!n);
  const d = s[l] ?? 0;
  if (u === d) return Promise.resolve(u);
  const f = performance.now();
  return new Promise((v) => requestAnimationFrame(function m(b) {
    const h = (b - f) / i.duration, g = Math.floor(d + (u - d) * c(Fe(h, 0, 1)));
    if (s[l] = g, h >= 1 && Math.abs(g - s[l]) < 10)
      return v(u);
    if (h > 2)
      return tt("Scroll target is not reachable"), v(s[l]);
    requestAnimationFrame(m);
  }));
}
function Gc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = he(ko), {
    isRtl: n
  } = qe();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = {
    ...t,
    // can be set via VLocaleProvider
    rtl: T(() => t.rtl.value || n.value)
  };
  async function l(i, o) {
    return bi(i, Ne(e, o), !1, a);
  }
  return l.horizontal = async (i, o) => bi(i, Ne(e, o), !0, a), l;
}
function Uc(e, t, n, a) {
  const {
    scrollWidth: l,
    scrollHeight: i
  } = e, [o, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, c;
  return a ? n ? (s = -(l - o), c = 0) : (s = 0, c = l - o) : (s = 0, c = i + -r), Fe(t, s, c);
}
const Yc = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  tableGroupCollapse: "mdi-chevron-down",
  tableGroupExpand: "mdi-chevron-right",
  eyeDropper: "mdi-eyedropper",
  upload: "mdi-cloud-upload",
  color: "mdi-palette",
  command: "mdi-apple-keyboard-command",
  ctrl: "mdi-apple-keyboard-control",
  space: "mdi-keyboard-space",
  shift: "mdi-apple-keyboard-shift",
  alt: "mdi-apple-keyboard-option",
  enter: "mdi-keyboard-return",
  arrowup: "mdi-arrow-up",
  arrowdown: "mdi-arrow-down",
  arrowleft: "mdi-arrow-left",
  arrowright: "mdi-arrow-right",
  backspace: "mdi-backspace",
  play: "mdi-play",
  pause: "mdi-pause",
  fullscreen: "mdi-fullscreen",
  fullscreenExit: "mdi-fullscreen-exit",
  volumeHigh: "mdi-volume-high",
  volumeMedium: "mdi-volume-medium",
  volumeLow: "mdi-volume-low",
  volumeOff: "mdi-volume-variant-off"
}, po = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => Lt(Po, {
    ...e,
    class: "mdi"
  })
}, se = [String, Function, Object, Array], Ua = Symbol.for("vuetify:icons"), va = O({
  icon: {
    type: se
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: [String, Object, Function],
    required: !0
  }
}, "icon"), Si = U()({
  name: "VComponentIcon",
  props: va(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const a = e.icon;
      return S(e.tag, null, {
        default: () => {
          var l;
          return [e.icon ? S(a, null, null) : (l = n.default) == null ? void 0 : l.call(n)];
        }
      });
    };
  }
}), Vo = tn({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: va(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => S(e.tag, j(n, {
      style: null
    }), {
      default: () => [C("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? C("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : C("path", {
        d: a
      }, null)) : C("path", {
        d: e.icon
      }, null)])]
    });
  }
});
tn({
  name: "VLigatureIcon",
  props: va(),
  setup(e) {
    return () => S(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const Po = tn({
  name: "VClassIcon",
  props: va(),
  setup(e) {
    return () => S(e.tag, {
      class: X(e.icon)
    }, null);
  }
});
function Kc() {
  return {
    svg: {
      component: Vo
    },
    class: {
      component: Po
    }
  };
}
function Xc(e) {
  const t = Kc(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = po), Ne({
    defaultSet: n,
    sets: t,
    aliases: {
      ...Yc,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    }
  }, e);
}
const qc = (e) => {
  const t = he(Ua);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: x(() => {
      var s;
      const a = We(e);
      if (!a) return {
        component: Si
      };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (s = t.aliases) == null ? void 0 : s[l.slice(1)])), l || tt(`Could not find aliased icon "${a}"`), Array.isArray(l))
        return {
          component: Vo,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: Si,
          icon: l
        };
      const i = Object.keys(t.sets).find((c) => typeof l == "string" && l.startsWith(`${c}:`)), o = i ? l.slice(i.length + 1) : l;
      return {
        component: t.sets[i ?? t.defaultSet].component,
        icon: o
      };
    })
  };
}, gn = Symbol.for("vuetify:theme"), we = O({
  theme: String
}, "theme");
function wi() {
  return {
    defaultTheme: "light",
    prefix: "v-",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#EEEEEE",
          "theme-on-kbd": "#000000",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#c8c8c8",
          "on-surface-variant": "#000000",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#424242",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    },
    stylesheetId: "vuetify-theme-stylesheet",
    scoped: !1,
    unimportant: !1,
    utilities: !0
  };
}
function Zc() {
  var a, l;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wi();
  const t = wi();
  if (!e) return {
    ...t,
    isDisabled: !0
  };
  const n = {};
  for (const [i, o] of Object.entries(e.themes ?? {})) {
    const r = o.dark || i === "dark" ? (a = t.themes) == null ? void 0 : a.dark : (l = t.themes) == null ? void 0 : l.light;
    n[i] = Ne(r, o);
  }
  return Ne(t, {
    ...e,
    themes: n
  });
}
function Et(e, t, n, a) {
  e.push(`${td(t, a)} {
`, ...n.map((l) => `  ${l};
`), `}
`);
}
function xi(e, t) {
  const n = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [i, o] of Object.entries(e.colors)) {
    const r = gt(o);
    l.push(`--${t}theme-${i}: ${r.r},${r.g},${r.b}`), i.startsWith("on-") || l.push(`--${t}theme-${i}-overlay-multiplier: ${Hu(o) > 0.18 ? n : a}`);
  }
  for (const [i, o] of Object.entries(e.variables)) {
    const r = typeof o == "string" && o.startsWith("#") ? gt(o) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    l.push(`--${t}${i}: ${s ?? o}`);
  }
  return l;
}
function Qc(e, t, n) {
  const a = {};
  if (n)
    for (const l of ["lighten", "darken"]) {
      const i = l === "lighten" ? Ru : Nu;
      for (const o of Gt(n[l], 1))
        a[`${e}-${l}-${o}`] = $u(i(gt(t), o));
    }
  return a;
}
function Jc(e, t) {
  if (!t) return {};
  let n = {};
  for (const a of t.colors) {
    const l = e[a];
    l && (n = {
      ...n,
      ...Qc(a, l, t)
    });
  }
  return n;
}
function ed(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const a = `on-${n}`, l = gt(e[n]);
    t[a] = vo(l);
  }
  return t;
}
function td(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function nd(e, t, n) {
  const a = ad(e, t);
  a && (a.innerHTML = n);
}
function ad(e, t) {
  if (!ye) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function ld(e) {
  const t = Zc(e), n = G(t.defaultTheme), a = Y(t.themes), l = G("light"), i = x({
    get() {
      return n.value === "system" ? l.value : n.value;
    },
    set(h) {
      n.value = h;
    }
  }), o = x(() => {
    const h = {};
    for (const [g, k] of Object.entries(a.value)) {
      const p = {
        ...k.colors,
        ...Jc(k.colors, t.variations)
      };
      h[g] = {
        ...k,
        colors: {
          ...p,
          ...ed(p)
        }
      };
    }
    return h;
  }), r = T(() => o.value[i.value]), s = T(() => n.value === "system"), c = x(() => {
    var p;
    const h = [], g = t.unimportant ? "" : " !important", k = t.scoped ? t.prefix : "";
    (p = r.value) != null && p.dark && Et(h, ":root", ["color-scheme: dark"], t.scope), Et(h, ":root", xi(r.value, t.prefix), t.scope);
    for (const [V, A] of Object.entries(o.value))
      Et(h, `.${t.prefix}theme--${V}`, [`color-scheme: ${A.dark ? "dark" : "normal"}`, ...xi(A, t.prefix)], t.scope);
    if (t.utilities) {
      const V = [], A = [], P = new Set(Object.values(o.value).flatMap((w) => Object.keys(w.colors)));
      for (const w of P)
        w.startsWith("on-") ? Et(A, `.${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${g}`], t.scope) : (Et(V, `.${k}bg-${w}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${w}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${w}))${g}`, `color: rgb(var(--${t.prefix}theme-on-${w}))${g}`], t.scope), Et(A, `.${k}text-${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${g}`], t.scope), Et(A, `.${k}border-${w}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${w})`], t.scope));
      h.push(...V, ...A);
    }
    return h.map((V, A) => A === 0 ? V : `    ${V}`).join("");
  }), u = T(() => t.isDisabled ? void 0 : `${t.prefix}theme--${i.value}`), d = T(() => Object.keys(o.value));
  if (qi) {
    let g = function() {
      l.value = h.matches ? "dark" : "light";
    };
    const h = window.matchMedia("(prefers-color-scheme: dark)");
    g(), h.addEventListener("change", g, {
      passive: !0
    }), Zs() && Ee(() => {
      h.removeEventListener("change", g);
    });
  }
  function f(h) {
    if (t.isDisabled) return;
    const g = h._context.provides.usehead;
    if (g) {
      let k = function() {
        return {
          style: [{
            textContent: c.value,
            id: t.stylesheetId,
            nonce: t.cspNonce || !1
          }]
        };
      };
      if (g.push) {
        const p = g.push(k);
        ye && J(c, () => {
          p.patch(k);
        });
      } else
        ye ? (g.addHeadObjs(T(k)), _e(() => g.updateDOM())) : g.addHeadObjs(k());
    } else {
      let k = function() {
        nd(t.stylesheetId, t.cspNonce, c.value);
      };
      ye ? J(c, k, {
        immediate: !0
      }) : k();
    }
  }
  function v(h) {
    if (h !== "system" && !d.value.includes(h)) {
      tt(`Theme "${h}" not found on the Vuetify theme instance`);
      return;
    }
    i.value = h;
  }
  function m() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.value;
    const g = h.indexOf(i.value), k = g === -1 ? 0 : (g + 1) % h.length;
    v(h[k]);
  }
  function b() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    m(h);
  }
  const y = new Proxy(i, {
    get(h, g) {
      return Reflect.get(h, g);
    },
    set(h, g, k) {
      return g === "value" && ro(`theme.global.name.value = ${k}`, `theme.change('${k}')`), Reflect.set(h, g, k);
    }
  });
  return {
    install: f,
    change: v,
    cycle: m,
    toggle: b,
    isDisabled: t.isDisabled,
    isSystem: s,
    name: i,
    themes: a,
    current: r,
    computedThemes: o,
    prefix: t.prefix,
    themeClasses: u,
    styles: c,
    global: {
      name: y,
      current: r
    }
  };
}
function Ae(e) {
  Ie("provideTheme");
  const t = he(gn, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = T(() => e.theme ?? t.name.value), a = T(() => t.themes.value[n.value]), l = T(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`), i = {
    ...t,
    name: n,
    current: a,
    themeClasses: l
  };
  return Pe(gn, i), i;
}
function id() {
  Ie("useTheme");
  const e = he(gn, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function It(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Na(), a = Y();
  if (ye) {
    const l = new ResizeObserver((i) => {
      e == null || e(i, l), i.length && (t === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    Ke(() => {
      l.disconnect();
    }), J(() => n.el, (i, o) => {
      o && (l.unobserve(o), a.value = void 0), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: sa(a)
  };
}
const hn = Symbol.for("vuetify:layout"), Io = Symbol.for("vuetify:layout-item"), ki = 1e3, od = O({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout"), Ao = O({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function To() {
  const e = he(hn);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function _o(e) {
  const t = he(hn);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${dt()}`, a = Ie("useLayoutItem");
  Pe(Io, {
    id: n
  });
  const l = G(!1);
  Xi(() => l.value = !0), Qs(() => l.value = !1);
  const {
    layoutItemStyles: i,
    layoutItemScrimStyles: o
  } = t.register(a, {
    ...e,
    active: x(() => l.value ? !1 : e.active.value),
    id: n
  });
  return Ke(() => t.unregister(n)), {
    layoutItemStyles: i,
    layoutRect: t.layoutRect,
    layoutItemScrimStyles: o
  };
}
const rd = (e, t, n, a) => {
  let l = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const i = [{
    id: "",
    layer: {
      ...l
    }
  }];
  for (const o of e) {
    const r = t.get(o), s = n.get(o), c = a.get(o);
    if (!r || !s || !c) continue;
    const u = {
      ...l,
      [r.value]: parseInt(l[r.value], 10) + (c.value ? parseInt(s.value, 10) : 0)
    };
    i.push({
      id: o,
      layer: u
    }), l = u;
  }
  return i;
};
function sd(e) {
  const t = he(hn, null), n = x(() => t ? t.rootZIndex.value - 100 : ki), a = Y([]), l = Ge(/* @__PURE__ */ new Map()), i = Ge(/* @__PURE__ */ new Map()), o = Ge(/* @__PURE__ */ new Map()), r = Ge(/* @__PURE__ */ new Map()), s = Ge(/* @__PURE__ */ new Map()), {
    resizeRef: c,
    contentRect: u
  } = It(), d = x(() => {
    const A = /* @__PURE__ */ new Map(), P = e.overlaps ?? [];
    for (const w of P.filter((E) => E.includes(":"))) {
      const [E, I] = w.split(":");
      if (!a.value.includes(E) || !a.value.includes(I)) continue;
      const _ = l.get(E), D = l.get(I), F = i.get(E), $ = i.get(I);
      !_ || !D || !F || !$ || (A.set(I, {
        position: _.value,
        amount: parseInt(F.value, 10)
      }), A.set(E, {
        position: D.value,
        amount: -parseInt($.value, 10)
      }));
    }
    return A;
  }), f = x(() => {
    const A = [...new Set([...o.values()].map((w) => w.value))].sort((w, E) => w - E), P = [];
    for (const w of A) {
      const E = a.value.filter((I) => {
        var _;
        return ((_ = o.get(I)) == null ? void 0 : _.value) === w;
      });
      P.push(...E);
    }
    return rd(P, l, i, r);
  }), v = x(() => !Array.from(s.values()).some((A) => A.value)), m = x(() => f.value[f.value.length - 1].layer), b = T(() => ({
    "--v-layout-left": Q(m.value.left),
    "--v-layout-right": Q(m.value.right),
    "--v-layout-top": Q(m.value.top),
    "--v-layout-bottom": Q(m.value.bottom),
    ...v.value ? void 0 : {
      transition: "none"
    }
  })), y = x(() => f.value.slice(1).map((A, P) => {
    let {
      id: w
    } = A;
    const {
      layer: E
    } = f.value[P], I = i.get(w), _ = l.get(w);
    return {
      id: w,
      ...E,
      size: Number(I.value),
      position: _.value
    };
  })), h = (A) => y.value.find((P) => P.id === A), g = Ie("createLayout"), k = G(!1);
  ct(() => {
    k.value = !0;
  }), Pe(hn, {
    register: (A, P) => {
      let {
        id: w,
        order: E,
        position: I,
        layoutSize: _,
        elementSize: D,
        active: F,
        disableTransitions: $,
        absolute: R
      } = P;
      o.set(w, E), l.set(w, I), i.set(w, _), r.set(w, F), $ && s.set(w, $);
      const K = Ut(Io, g == null ? void 0 : g.vnode).indexOf(A);
      K > -1 ? a.value.splice(K, 0, w) : a.value.push(w);
      const te = x(() => y.value.findIndex((M) => M.id === w)), le = x(() => n.value + f.value.length * 2 - te.value * 2), L = x(() => {
        const M = I.value === "left" || I.value === "right", B = I.value === "right", H = I.value === "bottom", ie = D.value ?? _.value, ue = ie === 0 ? "%" : "px", N = {
          [I.value]: 0,
          zIndex: le.value,
          transform: `translate${M ? "X" : "Y"}(${(F.value ? 0 : -(ie === 0 ? 100 : ie)) * (B || H ? -1 : 1)}${ue})`,
          position: R.value || n.value !== ki ? "absolute" : "fixed",
          ...v.value ? void 0 : {
            transition: "none"
          }
        };
        if (!k.value) return N;
        const q = y.value[te.value];
        q || tt(`[Vuetify] Could not find layout item "${w}"`);
        const ve = d.value.get(w);
        return ve && (q[ve.position] += ve.amount), {
          ...N,
          height: M ? `calc(100% - ${q.top}px - ${q.bottom}px)` : D.value ? `${D.value}px` : void 0,
          left: B ? void 0 : `${q.left}px`,
          right: B ? `${q.right}px` : void 0,
          top: I.value !== "bottom" ? `${q.top}px` : void 0,
          bottom: I.value !== "top" ? `${q.bottom}px` : void 0,
          width: M ? D.value ? `${D.value}px` : void 0 : `calc(100% - ${q.left}px - ${q.right}px)`
        };
      }), Z = x(() => ({
        zIndex: le.value - 1
      }));
      return {
        layoutItemStyles: L,
        layoutItemScrimStyles: Z,
        zIndex: le
      };
    },
    unregister: (A) => {
      o.delete(A), l.delete(A), i.delete(A), r.delete(A), s.delete(A), a.value = a.value.filter((P) => P !== A);
    },
    mainRect: m,
    mainStyles: b,
    getLayoutItem: h,
    items: y,
    layoutRect: u,
    rootZIndex: n
  });
  const p = T(() => ["v-layout", {
    "v-layout--full-height": e.fullHeight
  }]), V = T(() => ({
    zIndex: t ? n.value : void 0,
    position: t ? "relative" : void 0,
    overflow: t ? "hidden" : void 0
  }));
  return {
    layoutClasses: p,
    layoutStyles: V,
    getLayoutItem: h,
    items: y,
    layoutRect: u,
    layoutRef: c
  };
}
function ud() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: t,
    ...n
  } = e, a = Ne(t, n), {
    aliases: l = {},
    components: i = {},
    directives: o = {}
  } = a, r = sn();
  return r.run(() => {
    const s = Wu(a.defaults), c = zc(a.display, a.ssr), u = ld(a.theme), d = Xc(a.icons), f = Ju(a.locale), v = Rc(a.date, f), m = jc(a.goTo, f);
    function b(h) {
      for (const k in o)
        h.directive(k, o[k]);
      for (const k in i)
        h.component(k, i[k]);
      for (const k in l)
        h.component(k, tn({
          ...l[k],
          name: k,
          aliasName: l[k].name
        }));
      const g = sn();
      if (g.run(() => {
        u.install(h);
      }), h.onUnmount(() => g.stop()), h.provide(qt, s), h.provide(Ga, c), h.provide(gn, u), h.provide(Ua, d), h.provide(Un, f), h.provide(Mc, v.options), h.provide(vi, v.instance), h.provide(ko, m), ye && a.ssr)
        if (h.$nuxt)
          h.$nuxt.hook("app:suspense:resolve", () => {
            c.update();
          });
        else {
          const {
            mount: k
          } = h;
          h.mount = function() {
            const p = k(...arguments);
            return Ce(() => c.update()), h.mount = k, p;
          };
        }
      h.mixin({
        computed: {
          $vuetify() {
            return Ge({
              defaults: Wt.call(this, qt),
              display: Wt.call(this, Ga),
              theme: Wt.call(this, gn),
              icons: Wt.call(this, Ua),
              locale: Wt.call(this, Un),
              date: Wt.call(this, vi)
            });
          }
        }
      });
    }
    function y() {
      r.stop();
    }
    return {
      install: b,
      unmount: y,
      defaults: s,
      display: c,
      theme: u,
      icons: d,
      locale: f,
      date: v,
      goTo: m
    };
  });
}
const cd = "3.10.2";
ud.version = cd;
function Wt(e) {
  var a, l;
  const t = this.$, n = ((a = t.parent) == null ? void 0 : a.provides) ?? ((l = t.vnode.appContext) == null ? void 0 : l.provides);
  if (n && e in n)
    return n[e];
}
const Um = {
  defaults: {
    VAppBar: {
      flat: !0
    },
    VAutocomplete: {
      variant: "outlined"
    },
    VBanner: {
      color: "primary"
    },
    VBottomSheet: {
      contentClass: "rounded-t-xl overflow-hidden"
    },
    VBtn: {
      color: "primary",
      rounded: "xl"
    },
    VBtnGroup: {
      rounded: "xl",
      VBtn: {
        rounded: null
      }
    },
    VCard: {
      rounded: "lg"
    },
    VCheckbox: {
      color: "secondary",
      inset: !0
    },
    VChip: {
      rounded: "sm"
    },
    VCombobox: {
      variant: "outlined"
    },
    VDateInput: {
      variant: "outlined"
    },
    VDatePicker: {
      controlHeight: 48,
      color: "primary",
      divided: !0,
      headerColor: "",
      elevation: 3,
      rounded: "xl",
      VBtn: {
        color: "high-emphasis",
        rounded: "circle"
      }
    },
    VFileInput: {
      variant: "outlined"
    },
    VNavigationDrawer: {
      // VList: {
      //   nav: true,
      //   VListItem: {
      //     rounded: 'xl',
      //   },
      // },
    },
    VNumberInput: {
      variant: "outlined",
      VBtn: {
        color: void 0,
        rounded: void 0
      }
    },
    VSelect: {
      variant: "outlined"
    },
    VSlider: {
      color: "primary"
    },
    VTabs: {
      color: "primary"
    },
    VTextarea: {
      variant: "outlined"
    },
    VTextField: {
      variant: "outlined"
    },
    VToolbar: {
      VBtn: {
        color: null
      }
    }
  },
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi: po
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#6750a4",
          secondary: "#b4b0bb",
          tertiary: "#7d5260",
          error: "#b3261e",
          surface: "#fffbfe"
        }
      }
    }
  }
}, dd = {
  lighten4: "#c8e6c9",
  darken1: "#43a047"
}, Ym = {
  green: dd
}, ft = O({
  border: [Boolean, Number, String]
}, "border");
function bt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  return {
    borderClasses: x(() => {
      const a = e.border;
      return a === !0 || a === "" ? `${t}--border` : typeof a == "string" || a === 0 ? String(a).split(" ").map((l) => `border-${l}`) : [];
    })
  };
}
const fd = [null, "default", "comfortable", "compact"], Ze = O({
  density: {
    type: String,
    default: "default",
    validator: (e) => fd.includes(e)
  }
}, "density");
function rt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  return {
    densityClasses: T(() => `${t}--density-${e.density}`)
  };
}
const vt = O({
  elevation: {
    type: [Number, String],
    validator(e) {
      const t = parseInt(e);
      return !isNaN(t) && t >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      t <= 24;
    }
  }
}, "elevation");
function St(e) {
  return {
    elevationClasses: T(() => {
      const n = Ra(e) ? e.value : e.elevation;
      return n == null ? [] : [`elevation-${n}`];
    })
  };
}
const He = O({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function je(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  return {
    roundedClasses: x(() => {
      const a = Ra(e) ? e.value : e.rounded, l = Ra(e) ? !1 : e.tile, i = [];
      if (l || a === !1)
        i.push("rounded-0");
      else if (a === !0 || a === "")
        i.push(`${t}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const o of String(a).split(" "))
          i.push(`rounded-${o}`);
      return i;
    })
  };
}
const ge = O({
  tag: {
    type: [String, Object, Function],
    default: "div"
  }
}, "tag");
function hl(e) {
  return ol(() => {
    const {
      class: t,
      style: n
    } = vd(e);
    return {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function it(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = hl(() => ({
    text: We(e)
  }));
  return {
    textColorClasses: t,
    textColorStyles: n
  };
}
function Ye(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = hl(() => ({
    background: We(e)
  }));
  return {
    backgroundColorClasses: t,
    backgroundColorStyles: n
  };
}
function vd(e) {
  const t = We(e), n = [], a = {};
  if (t.background)
    if (ja(t.background)) {
      if (a.backgroundColor = t.background, !t.text && Fu(t.background)) {
        const l = gt(t.background);
        if (l.a == null || l.a === 1) {
          const i = vo(l);
          a.color = i, a.caretColor = i;
        }
      }
    } else
      n.push(`bg-${t.background}`);
  return t.text && (ja(t.text) ? (a.color = t.text, a.caretColor = t.text) : n.push(`text-${t.text}`)), {
    class: n,
    style: a
  };
}
const md = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Rt(e, t) {
  return C(ce, null, [e && C("span", {
    key: "overlay",
    class: X(`${t}__overlay`)
  }, null), C("span", {
    key: "underlay",
    class: X(`${t}__underlay`)
  }, null)]);
}
const mt = O({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => md.includes(e)
  }
}, "variant");
function Nt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  const n = T(() => {
    const {
      variant: i
    } = We(e);
    return `${t}--variant-${i}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = hl(() => {
    const {
      variant: i,
      color: o
    } = We(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: o
    };
  });
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: n
  };
}
const Eo = O({
  baseColor: String,
  divided: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...ft(),
  ...oe(),
  ...Ze(),
  ...vt(),
  ...He(),
  ...ge(),
  ...we(),
  ...mt()
}, "VBtnGroup"), Ci = U()({
  name: "VBtnGroup",
  props: Eo(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Ae(e), {
      densityClasses: l
    } = rt(e), {
      borderClasses: i
    } = bt(e), {
      elevationClasses: o
    } = St(e), {
      roundedClasses: r
    } = je(e);
    nt({
      VBtn: {
        height: T(() => e.direction === "horizontal" ? "auto" : null),
        baseColor: T(() => e.baseColor),
        color: T(() => e.color),
        density: T(() => e.density),
        flat: !0,
        variant: T(() => e.variant)
      }
    }), ee(() => S(e.tag, {
      class: X(["v-btn-group", `v-btn-group--${e.direction}`, {
        "v-btn-group--divided": e.divided
      }, a.value, i.value, l.value, o.value, r.value, e.class]),
      style: re(e.style)
    }, n));
  }
}), yl = O({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), ma = O({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function ga(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = Ie("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = dt();
  Pe(Symbol.for(`${t.description}:id`), l);
  const i = he(t, null);
  if (!i) {
    if (!n) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const o = T(() => e.value), r = x(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: l,
    value: o,
    disabled: r
  }, a), Ke(() => {
    i.unregister(l);
  });
  const s = x(() => i.isSelected(l)), c = x(() => i.items.value[0].id === l), u = x(() => i.items.value[i.items.value.length - 1].id === l), d = x(() => s.value && [i.selectedClass.value, e.selectedClass]);
  return J(s, (f) => {
    a.emit("group:selected", {
      value: f
    });
  }, {
    flush: "sync"
  }), {
    id: l,
    isSelected: s,
    isFirst: c,
    isLast: u,
    toggle: () => i.select(l, !s.value),
    select: (f) => i.select(l, f),
    selectedClass: d,
    value: o,
    disabled: r,
    group: i
  };
}
function ha(e, t) {
  let n = !1;
  const a = Ge([]), l = fe(e, "modelValue", [], (f) => f === void 0 ? [] : Bo(a, f === null ? [null] : Oe(f)), (f) => {
    const v = hd(a, f);
    return e.multiple ? v : v[0];
  }), i = Ie("useGroup");
  function o(f, v) {
    const m = f, b = Symbol.for(`${t.description}:id`), h = Ut(b, i == null ? void 0 : i.vnode).indexOf(v);
    lt(m.value) === void 0 && (m.value = h, m.useIndexAsValue = !0), h > -1 ? a.splice(h, 0, m) : a.push(m);
  }
  function r(f) {
    if (n) return;
    s();
    const v = a.findIndex((m) => m.id === f);
    a.splice(v, 1);
  }
  function s() {
    const f = a.find((v) => !v.disabled);
    f && e.mandatory === "force" && !l.value.length && (l.value = [f.id]);
  }
  ct(() => {
    s();
  }), Ke(() => {
    n = !0;
  }), Js(() => {
    for (let f = 0; f < a.length; f++)
      a[f].useIndexAsValue && (a[f].value = f);
  });
  function c(f, v) {
    const m = a.find((b) => b.id === f);
    if (!(v && (m != null && m.disabled)))
      if (e.multiple) {
        const b = l.value.slice(), y = b.findIndex((g) => g === f), h = ~y;
        if (v = v ?? !h, h && e.mandatory && b.length <= 1 || !h && e.max != null && b.length + 1 > e.max) return;
        y < 0 && v ? b.push(f) : y >= 0 && !v && b.splice(y, 1), l.value = b;
      } else {
        const b = l.value.includes(f);
        if (e.mandatory && b || !b && !v) return;
        l.value = v ?? !b ? [f] : [];
      }
  }
  function u(f) {
    if (e.multiple && tt('This method is not supported when using "multiple" prop'), l.value.length) {
      const v = l.value[0], m = a.findIndex((h) => h.id === v);
      let b = (m + f) % a.length, y = a[b];
      for (; y.disabled && b !== m; )
        b = (b + f) % a.length, y = a[b];
      if (y.disabled) return;
      l.value = [a[b].id];
    } else {
      const v = a.find((m) => !m.disabled);
      v && (l.value = [v.id]);
    }
  }
  const d = {
    register: o,
    unregister: r,
    selected: l,
    select: c,
    disabled: T(() => e.disabled),
    prev: () => u(a.length - 1),
    next: () => u(1),
    isSelected: (f) => l.value.includes(f),
    selectedClass: T(() => e.selectedClass),
    items: T(() => a),
    getItemIndex: (f) => gd(a, f)
  };
  return Pe(t, d), d;
}
function gd(e, t) {
  const n = Bo(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function Bo(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((o) => ze(a, o.value)), i = e[a];
    (l == null ? void 0 : l.value) !== void 0 ? n.push(l.id) : i != null && i.useIndexAsValue && n.push(i.id);
  }), n;
}
function hd(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      n.push(i.value !== void 0 ? i.value : l);
    }
  }), n;
}
const Do = Symbol.for("vuetify:v-btn-toggle"), yd = O({
  ...Eo(),
  ...yl()
}, "VBtnToggle"), Km = U()({
  name: "VBtnToggle",
  props: yd(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: a,
      next: l,
      prev: i,
      select: o,
      selected: r
    } = ha(e, Do);
    return ee(() => {
      const s = Ci.filterProps(e);
      return S(Ci, j({
        class: ["v-btn-toggle", e.class]
      }, s, {
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = n.default) == null ? void 0 : c.call(n, {
            isSelected: a,
            next: l,
            prev: i,
            select: o,
            selected: r
          })];
        }
      });
    }), {
      next: l,
      prev: i,
      select: o
    };
  }
}), bd = O({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), Se = U(!1)({
  name: "VDefaultsProvider",
  props: bd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: a,
      disabled: l,
      reset: i,
      root: o,
      scoped: r
    } = ra(e);
    return nt(a, {
      reset: i,
      root: o,
      scoped: r,
      disabled: l
    }), () => {
      var s;
      return (s = n.default) == null ? void 0 : s.call(n);
    };
  }
}), Sd = ["x-small", "small", "default", "large", "x-large"], nn = O({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function pn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  return ol(() => {
    const n = e.size;
    let a, l;
    return Hn(Sd, n) ? a = `${t}--size-${n}` : n && (l = {
      width: Q(n),
      height: Q(n)
    }), {
      sizeClasses: a,
      sizeStyles: l
    };
  });
}
const wd = O({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: se,
  opacity: [String, Number],
  ...oe(),
  ...nn(),
  ...ge({
    tag: "i"
  }),
  ...we()
}, "VIcon"), Ve = U()({
  name: "VIcon",
  props: wd(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = G(), {
      themeClasses: i
    } = id(), {
      iconData: o
    } = qc(() => l.value || e.icon), {
      sizeClasses: r
    } = pn(e), {
      textColorClasses: s,
      textColorStyles: c
    } = it(() => e.color);
    return ee(() => {
      var f, v;
      const u = (f = a.default) == null ? void 0 : f.call(a);
      u && (l.value = (v = to(u).filter((m) => m.type === eu && m.children && typeof m.children == "string")[0]) == null ? void 0 : v.children);
      const d = !!(n.onClick || n.onClickOnce);
      return S(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: X(["v-icon", "notranslate", i.value, r.value, s.value, {
          "v-icon--clickable": d,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class]),
        style: re([{
          "--v-icon-opacity": e.opacity
        }, r.value ? void 0 : {
          fontSize: Q(e.size),
          height: Q(e.size),
          width: Q(e.size)
        }, c.value, e.style]),
        role: d ? "button" : void 0,
        "aria-hidden": !d,
        tabindex: d ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [u]
      });
    }), {};
  }
});
function Fo(e, t) {
  const n = Y(), a = G(!1);
  if (al) {
    const l = new IntersectionObserver((i) => {
      a.value = !!i.find((o) => o.isIntersecting);
    }, t);
    Ee(() => {
      l.disconnect();
    }), J(n, (i, o) => {
      o && (l.unobserve(o), a.value = !1), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: a
  };
}
const xd = O({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...oe(),
  ...nn(),
  ...ge({
    tag: "div"
  }),
  ...we()
}, "VProgressCircular"), kd = U()({
  name: "VProgressCircular",
  props: xd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = 20, l = 2 * Math.PI * a, i = Y(), {
      themeClasses: o
    } = Ae(e), {
      sizeClasses: r,
      sizeStyles: s
    } = pn(e), {
      textColorClasses: c,
      textColorStyles: u
    } = it(() => e.color), {
      textColorClasses: d,
      textColorStyles: f
    } = it(() => e.bgColor), {
      intersectionRef: v,
      isIntersecting: m
    } = Fo(), {
      resizeRef: b,
      contentRect: y
    } = It(), h = T(() => Fe(parseFloat(e.modelValue), 0, 100)), g = T(() => Number(e.width)), k = T(() => s.value ? Number(e.size) : y.value ? y.value.width : Math.max(g.value, 32)), p = T(() => a / (1 - g.value / k.value) * 2), V = T(() => g.value / k.value * p.value), A = T(() => Q((100 - h.value) / 100 * l));
    return _e(() => {
      v.value = i.value, b.value = i.value;
    }), ee(() => S(e.tag, {
      ref: i,
      class: X(["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": m.value,
        "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || Kt())
      }, o.value, r.value, c.value, e.class]),
      style: re([s.value, u.value, e.style]),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : h.value
    }, {
      default: () => [C("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${p.value} ${p.value}`
      }, [C("circle", {
        class: X(["v-progress-circular__underlay", d.value]),
        style: re(f.value),
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": V.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), C("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": V.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": A.value
      }, null)]), n.default && C("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: h.value
      })])]
    })), {};
  }
}), st = O({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function ut(e) {
  return {
    dimensionStyles: x(() => {
      const n = {}, a = Q(e.height), l = Q(e.maxHeight), i = Q(e.maxWidth), o = Q(e.minHeight), r = Q(e.minWidth), s = Q(e.width);
      return a != null && (n.height = a), l != null && (n.maxHeight = l), i != null && (n.maxWidth = i), o != null && (n.minHeight = o), r != null && (n.minWidth = r), s != null && (n.width = s), n;
    })
  };
}
const pi = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, an = O({
  location: String
}, "location");
function Vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = qe();
  return {
    locationStyles: x(() => {
      if (!e.location) return {};
      const {
        side: i,
        align: o
      } = za(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function r(c) {
        return n ? n(c) : 0;
      }
      const s = {};
      return i !== "center" && (t ? s[pi[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0), o !== "center" ? t ? s[pi[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0 : (i === "center" ? s.top = s.left = "50%" : s[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", s.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), s;
    })
  };
}
const Cd = O({
  chunkCount: {
    type: [Number, String],
    default: null
  },
  chunkWidth: {
    type: [Number, String],
    default: null
  },
  chunkGap: {
    type: [Number, String],
    default: 4
  }
}, "chunks");
function pd(e, t) {
  const n = T(() => !!e.chunkCount || !!e.chunkWidth), a = x(() => {
    const r = We(t);
    if (!r)
      return 0;
    if (!e.chunkCount)
      return Number(e.chunkWidth);
    const s = Number(e.chunkCount);
    return (r - Number(e.chunkGap) * (s - 1)) / s;
  }), l = T(() => Number(e.chunkGap)), i = x(() => {
    if (!n.value)
      return {};
    const r = Q(l.value), s = Q(a.value);
    return {
      maskRepeat: "repeat-x",
      maskImage: `linear-gradient(90deg, #000, #000 ${s}, transparent ${s}, transparent)`,
      maskSize: `calc(${s} + ${r}) 100%`
    };
  });
  function o(r) {
    const s = We(t);
    if (!s)
      return r;
    const c = 100 * l.value / s, u = 100 * (a.value + l.value) / s, d = Math.floor((r + c) / u);
    return Fe(0, d * u - c / 2, 100);
  }
  return {
    hasChunks: n,
    chunksMaskStyles: i,
    snapValueToChunk: o
  };
}
const Vd = O({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...Cd(),
  ...oe(),
  ...an({
    location: "top"
  }),
  ...He(),
  ...ge(),
  ...we()
}, "VProgressLinear"), Oo = U()({
  name: "VProgressLinear",
  props: Vd(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Y(), l = fe(e, "modelValue"), {
      isRtl: i,
      rtlClasses: o
    } = qe(), {
      themeClasses: r
    } = Ae(e), {
      locationStyles: s
    } = Vn(e), {
      textColorClasses: c,
      textColorStyles: u
    } = it(() => e.color), {
      backgroundColorClasses: d,
      backgroundColorStyles: f
    } = Ye(() => e.bgColor || e.color), {
      backgroundColorClasses: v,
      backgroundColorStyles: m
    } = Ye(() => e.bufferColor || e.bgColor || e.color), {
      backgroundColorClasses: b,
      backgroundColorStyles: y
    } = Ye(() => e.color), {
      roundedClasses: h
    } = je(e), {
      intersectionRef: g,
      isIntersecting: k
    } = Fo(), p = x(() => parseFloat(e.max)), V = x(() => parseFloat(e.height)), A = x(() => Fe(parseFloat(e.bufferValue) / p.value * 100, 0, 100)), P = x(() => Fe(parseFloat(l.value) / p.value * 100, 0, 100)), w = x(() => i.value !== e.reverse), E = x(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), I = G(0), {
      hasChunks: _,
      chunksMaskStyles: D,
      snapValueToChunk: F
    } = pd(e, I);
    Ue(_, () => {
      const {
        resizeRef: K
      } = It((te) => I.value = te[0].contentRect.width);
      _e(() => K.value = a.value);
    });
    const $ = x(() => _.value ? F(A.value) : A.value), R = x(() => _.value ? F(P.value) : P.value);
    function W(K) {
      if (!g.value) return;
      const {
        left: te,
        right: le,
        width: L
      } = g.value.getBoundingClientRect(), Z = w.value ? L - K.clientX + (le - L) : K.clientX - te;
      l.value = Math.round(Z / L * p.value);
    }
    return _e(() => {
      g.value = a.value;
    }), ee(() => S(e.tag, {
      ref: a,
      class: X(["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && k.value,
        "v-progress-linear--reverse": w.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped,
        "v-progress-linear--clickable": e.clickable
      }, h.value, r.value, o.value, e.class]),
      style: re([{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? Q(V.value) : 0,
        "--v-progress-linear-height": Q(V.value),
        ...e.absolute ? s.value : {}
      }, D.value, e.style]),
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), p.value),
      onClick: e.clickable && W
    }, {
      default: () => [e.stream && C("div", {
        key: "stream",
        class: X(["v-progress-linear__stream", c.value]),
        style: {
          ...u.value,
          [w.value ? "left" : "right"]: Q(-V.value),
          borderTop: `${Q(V.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${Q(V.value / 4)})`,
          width: Q(100 - A.value, "%"),
          "--v-progress-linear-stream-to": Q(V.value * (w.value ? 1 : -1))
        }
      }, null), C("div", {
        class: X(["v-progress-linear__background", d.value]),
        style: re([f.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }])
      }, null), C("div", {
        class: X(["v-progress-linear__buffer", v.value]),
        style: re([m.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: Q($.value, "%")
        }])
      }, null), S(Vt, {
        name: E.value
      }, {
        default: () => [e.indeterminate ? C("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((K) => C("div", {
          key: K,
          class: X(["v-progress-linear__indeterminate", K, b.value]),
          style: re(y.value)
        }, null))]) : C("div", {
          class: X(["v-progress-linear__determinate", b.value]),
          style: re([y.value, {
            width: Q(R.value, "%")
          }])
        }, null)]
      }), n.default && C("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: P.value,
        buffer: A.value
      })])]
    })), {};
  }
}), ya = O({
  loading: [Boolean, String]
}, "loader");
function ba(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  return {
    loaderClasses: T(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function bl(e, t) {
  var a;
  let {
    slots: n
  } = t;
  return C("div", {
    class: X(`${e.name}__loader`)
  }, [((a = n.default) == null ? void 0 : a.call(n, {
    color: e.color,
    isActive: e.active
  })) || S(Oo, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const Pd = ["static", "relative", "fixed", "absolute", "sticky"], Pn = O({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => Pd.includes(e)
    )
  }
}, "position");
function In(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  return {
    positionClasses: T(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function Id() {
  const e = Ie("useRoute");
  return x(() => {
    var t;
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route;
  });
}
function $o() {
  var e, t;
  return (t = (e = Ie("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : t.$router;
}
function Sa(e, t) {
  var u, d;
  const n = tu("RouterLink"), a = T(() => !!(e.href || e.to)), l = x(() => (a == null ? void 0 : a.value) || Ul(t, "click") || Ul(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const f = T(() => e.href);
    return {
      isLink: a,
      isClickable: l,
      href: f,
      linkProps: Ge({
        href: f
      })
    };
  }
  const i = n.useLink({
    to: T(() => e.to || ""),
    replace: T(() => e.replace)
  }), o = x(() => e.to ? i : void 0), r = Id(), s = x(() => {
    var f, v, m;
    return o.value ? e.exact ? r.value ? ((m = o.value.isExactActive) == null ? void 0 : m.value) && ze(o.value.route.value.query, r.value.query) : ((v = o.value.isExactActive) == null ? void 0 : v.value) ?? !1 : ((f = o.value.isActive) == null ? void 0 : f.value) ?? !1 : !1;
  }), c = x(() => {
    var f;
    return e.to ? (f = o.value) == null ? void 0 : f.route.value.href : e.href;
  });
  return {
    isLink: a,
    isClickable: l,
    isActive: s,
    route: (u = o.value) == null ? void 0 : u.route,
    navigate: (d = o.value) == null ? void 0 : d.navigate,
    href: c,
    linkProps: Ge({
      href: c,
      "aria-current": T(() => s.value ? "page" : void 0)
    })
  };
}
const wa = O({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let Ea = !1;
function Ad(e, t) {
  let n = !1, a, l;
  ye && (e != null && e.beforeEach) && (Ce(() => {
    window.addEventListener("popstate", i), a = e.beforeEach((o, r, s) => {
      Ea ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), Ea = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      Ea = !1;
    });
  }), Ee(() => {
    window.removeEventListener("popstate", i), a == null || a(), l == null || l();
  }));
  function i(o) {
    var r;
    (r = o.state) != null && r.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function Td(e, t) {
  J(() => {
    var n;
    return (n = e.isActive) == null ? void 0 : n.value;
  }, (n) => {
    e.isLink.value && n != null && t && Ce(() => {
      t(n);
    });
  }, {
    immediate: !0
  });
}
const Ya = Symbol("rippleStop"), _d = 80;
function Vi(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Ka(e) {
  return e.constructor.name === "TouchEvent";
}
function Lo(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Ed = function(e, t) {
  var d;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!Lo(e)) {
    const f = t.getBoundingClientRect(), v = Ka(e) ? e.touches[e.touches.length - 1] : e;
    a = v.clientX - f.left, l = v.clientY - f.top;
  }
  let i = 0, o = 0.3;
  (d = t._ripple) != null && d.circle ? (o = 0.15, i = t.clientWidth / 2, i = n.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - i * 2) / 2}px`, s = `${(t.clientHeight - i * 2) / 2}px`, c = n.center ? r : `${a - i}px`, u = n.center ? s : `${l - i}px`;
  return {
    radius: i,
    scale: o,
    x: c,
    y: u,
    centerX: r,
    centerY: s
  };
}, qn = {
  /* eslint-disable max-statements */
  show(e, t) {
    var v;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((v = t == null ? void 0 : t._ripple) != null && v.enabled))
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
    const {
      radius: i,
      scale: o,
      x: r,
      y: s,
      centerX: c,
      centerY: u
    } = Ed(e, t, n), d = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, t.appendChild(a);
    const f = window.getComputedStyle(t);
    f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Vi(l, `translate(${r}, ${s}) scale3d(${o},${o},${o})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Vi(l, `translate(${c}, ${u}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    var i;
    if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled)) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const n = Array.from(t).findLast((o) => !o.dataset.isHiding);
    if (n) n.dataset.isHiding = "true";
    else return;
    const a = performance.now() - Number(n.dataset.activated), l = Math.max(250 - a, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var r;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = n.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, l);
  }
};
function Mo(e) {
  return typeof e > "u" || !!e;
}
function yn(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[Ya])) {
    if (e[Ya] = !0, Ka(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Lo(e), n._ripple.class && (t.class = n._ripple.class), Ka(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        qn.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = n == null ? void 0 : n._ripple) != null && a.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, _d);
    } else
      qn.show(e, n, t);
  }
}
function Pi(e) {
  e[Ya] = !0;
}
function Je(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        Je(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), qn.hide(t);
  }
}
function Ro(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let bn = !1;
function Ii(e, t) {
  !bn && t.includes(e.key) && (bn = !0, yn(e));
}
function No(e) {
  bn = !1, Je(e);
}
function Ho(e) {
  bn && (bn = !1, Je(e));
}
function zo(e, t, n) {
  const {
    value: a,
    modifiers: l
  } = t, i = Mo(a);
  i || qn.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const o = un(a) ? a : {};
  o.class && (e._ripple.class = o.class);
  const r = o.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => Ii(s, r), i && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", Pi, {
        passive: !0
      }), e.addEventListener("mousedown", Pi);
      return;
    }
    e.addEventListener("touchstart", yn, {
      passive: !0
    }), e.addEventListener("touchend", Je, {
      passive: !0
    }), e.addEventListener("touchmove", Ro, {
      passive: !0
    }), e.addEventListener("touchcancel", Je), e.addEventListener("mousedown", yn), e.addEventListener("mouseup", Je), e.addEventListener("mouseleave", Je), e.addEventListener("keydown", (s) => Ii(s, r)), e.addEventListener("keyup", No), e.addEventListener("blur", Ho), e.addEventListener("dragstart", Je, {
      passive: !0
    });
  } else !i && n && Wo(e);
}
function Wo(e) {
  var t;
  e.removeEventListener("mousedown", yn), e.removeEventListener("touchstart", yn), e.removeEventListener("touchend", Je), e.removeEventListener("touchmove", Ro), e.removeEventListener("touchcancel", Je), e.removeEventListener("mouseup", Je), e.removeEventListener("mouseleave", Je), (t = e._ripple) != null && t.keyDownHandler && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", No), e.removeEventListener("dragstart", Je), e.removeEventListener("blur", Ho);
}
function Bd(e, t) {
  zo(e, t, !1);
}
function Dd(e) {
  Wo(e), delete e._ripple;
}
function Fd(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = Mo(t.oldValue);
  zo(e, t, n);
}
const Ct = {
  mounted: Bd,
  unmounted: Dd,
  updated: Fd
}, Sl = O({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: Do
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: se,
  appendIcon: se,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  spaced: String,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...ft(),
  ...oe(),
  ...Ze(),
  ...st(),
  ...vt(),
  ...ma(),
  ...ya(),
  ...an(),
  ...Pn(),
  ...He(),
  ...wa(),
  ...nn(),
  ...ge({
    tag: "button"
  }),
  ...we(),
  ...mt({
    variant: "elevated"
  })
}, "VBtn"), et = U()({
  name: "VBtn",
  props: Sl(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = Ae(e), {
      borderClasses: i
    } = bt(e), {
      densityClasses: o
    } = rt(e), {
      dimensionStyles: r
    } = ut(e), {
      elevationClasses: s
    } = St(e), {
      loaderClasses: c
    } = ba(e), {
      locationStyles: u
    } = Vn(e), {
      positionClasses: d
    } = In(e), {
      roundedClasses: f
    } = je(e), {
      sizeClasses: v,
      sizeStyles: m
    } = pn(e), b = ga(e, e.symbol, !1), y = Sa(e, n), h = x(() => {
      var _;
      return e.active !== void 0 ? e.active : y.isLink.value ? (_ = y.isActive) == null ? void 0 : _.value : b == null ? void 0 : b.isSelected.value;
    }), g = T(() => h.value ? e.activeColor ?? e.color : e.color), k = x(() => {
      var D, F;
      return {
        color: (b == null ? void 0 : b.isSelected.value) && (!y.isLink.value || ((D = y.isActive) == null ? void 0 : D.value)) || !b || ((F = y.isActive) == null ? void 0 : F.value) ? g.value ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: p,
      colorStyles: V,
      variantClasses: A
    } = Nt(k), P = x(() => (b == null ? void 0 : b.disabled.value) || e.disabled), w = T(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), E = x(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function I(_) {
      var D;
      P.value || y.isLink.value && (_.metaKey || _.ctrlKey || _.shiftKey || _.button !== 0 || n.target === "_blank") || (y.isLink.value ? (D = y.navigate) == null || D.call(y, _) : b == null || b.toggle());
    }
    return Td(y, b == null ? void 0 : b.select), ee(() => {
      const _ = y.isLink.value ? "a" : e.tag, D = !!(e.prependIcon || a.prepend), F = !!(e.appendIcon || a.append), $ = !!(e.icon && e.icon !== !0);
      return Le(S(_, j({
        type: _ === "a" ? void 0 : "button",
        class: ["v-btn", b == null ? void 0 : b.selectedClass.value, {
          "v-btn--active": h.value,
          "v-btn--block": e.block,
          "v-btn--disabled": P.value,
          "v-btn--elevated": w.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], l.value, i.value, p.value, o.value, s.value, c.value, d.value, f.value, v.value, A.value, e.class],
        style: [V.value, r.value, u.value, m.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: P.value || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: I,
        value: E.value
      }, y.linkProps), {
        default: () => {
          var R;
          return [Rt(!0, "v-btn"), !e.icon && D && C("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [a.prepend ? S(Se, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, a.prepend) : S(Ve, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), C("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && $ ? S(Ve, {
            key: "content-icon",
            icon: e.icon
          }, null) : S(Se, {
            key: "content-defaults",
            disabled: !$,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var W;
              return [((W = a.default) == null ? void 0 : W.call(a)) ?? Ft(e.text)];
            }
          })]), !e.icon && F && C("span", {
            key: "append",
            class: "v-btn__append"
          }, [a.append ? S(Se, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, a.append) : S(Ve, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && C("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((R = a.loader) == null ? void 0 : R.call(a)) ?? S(kd, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[Ct, !P.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: b
    };
  }
}), Od = O({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function at(e, t, n) {
  return U()({
    name: e,
    props: Od({
      mode: n,
      origin: t
    }),
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = {
        onBeforeEnter(r) {
          a.origin && (r.style.transformOrigin = a.origin);
        },
        onLeave(r) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: s,
              offsetLeft: c,
              offsetWidth: u,
              offsetHeight: d
            } = r;
            r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height
            }, r.style.position = "absolute", r.style.top = `${s}px`, r.style.left = `${c}px`, r.style.width = `${u}px`, r.style.height = `${d}px`;
          }
          a.hideOnLeave && r.style.setProperty("display", "none", "important");
        },
        onAfterLeave(r) {
          if (a.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
            const {
              position: s,
              top: c,
              left: u,
              width: d,
              height: f
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = s || "", r.style.top = c || "", r.style.left = u || "", r.style.width = d || "", r.style.height = f || "";
          }
        }
      };
      return () => {
        const r = a.group ? nl : Vt;
        return Lt(r, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : o
        }, i.default);
      };
    }
  });
}
function jo(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return U()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      },
      disabled: {
        type: Boolean,
        default: Kt()
      },
      group: Boolean
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = a.group ? nl : Vt;
      return () => Lt(o, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : t
      }, i.default);
    }
  });
}
function Go() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = tl(`offset-${n}`);
  return {
    onBeforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [n]: o.style[n]
      };
    },
    onEnter(o) {
      const r = o._initialStyle;
      if (!r) return;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const s = `${o[a]}px`;
      o.style[n] = "0", o.offsetHeight, o.style.transition = r.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[n] = s;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(o) {
      o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [n]: o.style[n]
      }, o.style.overflow = "hidden", o.style[n] = `${o[a]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[n] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(o) {
    e && o._parent && o._parent.classList.remove(e), i(o);
  }
  function i(o) {
    if (!o._initialStyle) return;
    const r = o._initialStyle[n];
    o.style.overflow = o._initialStyle.overflow, r != null && (o.style[n] = r), delete o._initialStyle;
  }
}
const $d = O({
  target: [Object, Array]
}, "v-dialog-transition"), Ba = /* @__PURE__ */ new WeakMap(), Uo = U()({
  name: "VDialogTransition",
  props: $d(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, i) {
        var f;
        await new Promise((v) => requestAnimationFrame(v)), await new Promise((v) => requestAnimationFrame(v)), l.style.visibility = "";
        const o = Ti(e.target, l), {
          x: r,
          y: s,
          sx: c,
          sy: u,
          speed: d
        } = o;
        if (Ba.set(l, o), Kt())
          xt(l, [{
            opacity: 0
          }, {}], {
            duration: 125 * d,
            easing: oi
          }).finished.then(() => i());
        else {
          const v = xt(l, [{
            transform: `translate(${r}px, ${s}px) scale(${c}, ${u})`,
            opacity: 0
          }, {}], {
            duration: 225 * d,
            easing: oi
          });
          (f = Ai(l)) == null || f.forEach((m) => {
            xt(m, [{
              opacity: 0
            }, {
              opacity: 0,
              offset: 0.33
            }, {}], {
              duration: 225 * 2 * d,
              easing: fn
            });
          }), v.finished.then(() => i());
        }
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, i) {
        var f;
        await new Promise((v) => requestAnimationFrame(v));
        let o;
        !Ba.has(l) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? o = Ti(e.target, l) : o = Ba.get(l);
        const {
          x: r,
          y: s,
          sx: c,
          sy: u,
          speed: d
        } = o;
        Kt() ? xt(l, [{}, {
          opacity: 0
        }], {
          duration: 85 * d,
          easing: ri
        }).finished.then(() => i()) : (xt(l, [{}, {
          transform: `translate(${r}px, ${s}px) scale(${c}, ${u})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: ri
        }).finished.then(() => i()), (f = Ai(l)) == null || f.forEach((m) => {
          xt(m, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: fn
          });
        }));
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? S(Vt, j({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), n) : S(Vt, {
      name: "dialog-transition"
    }, n);
  }
});
function Ai(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function Ti(e, t) {
  const n = oo(e), a = ul(t), [l, i] = getComputedStyle(t).transformOrigin.split(" ").map((h) => parseFloat(h)), [o, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  o === "left" || r === "left" ? s -= n.width / 2 : (o === "right" || r === "right") && (s += n.width / 2);
  let c = n.top + n.height / 2;
  o === "top" || r === "top" ? c -= n.height / 2 : (o === "bottom" || r === "bottom") && (c += n.height / 2);
  const u = n.width / a.width, d = n.height / a.height, f = Math.max(1, u, d), v = u / f || 0, m = d / f || 0, b = a.width * a.height / (window.innerWidth * window.innerHeight), y = b > 0.12 ? Math.min(1.5, (b - 0.12) * 10 + 1) : 1;
  return {
    x: s - (l + a.left),
    y: c - (i + a.top),
    sx: v,
    sy: m,
    speed: y
  };
}
at("fab-transition", "center center", "out-in");
at("dialog-bottom-transition");
at("dialog-top-transition");
const _i = at("fade-transition");
at("scale-transition");
at("scroll-x-transition");
at("scroll-x-reverse-transition");
at("scroll-y-transition");
at("scroll-y-reverse-transition");
at("slide-x-transition");
at("slide-x-reverse-transition");
const Yo = at("slide-y-transition");
at("slide-y-reverse-transition");
const Ko = jo("expand-transition", Go()), Xo = jo("expand-x-transition", Go("", !0)), Xa = Symbol.for("vuetify:list");
function qo() {
  let {
    filterable: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    filterable: !1
  };
  const t = he(Xa, {
    filterable: !1,
    hasPrepend: G(!1),
    updateHasPrepend: () => null
  }), n = {
    filterable: t.filterable || e,
    hasPrepend: G(!1),
    updateHasPrepend: (a) => {
      a && (n.hasPrepend.value = a);
    }
  };
  return Pe(Xa, n), t;
}
function Zo() {
  return he(Xa, null);
}
const wl = (e) => {
  const t = {
    activate: (n) => {
      let {
        id: a,
        value: l,
        activated: i
      } = n;
      return a = De(a), e && !l && i.size === 1 && i.has(a) || (l ? i.add(a) : i.delete(a)), i;
    },
    in: (n, a, l) => {
      let i = /* @__PURE__ */ new Set();
      if (n != null)
        for (const o of Oe(n))
          i = t.activate({
            id: o,
            value: !0,
            activated: new Set(i),
            children: a,
            parents: l
          });
      return i;
    },
    out: (n) => Array.from(n)
  };
  return t;
}, Qo = (e) => {
  const t = wl(e);
  return {
    activate: (a) => {
      let {
        activated: l,
        id: i,
        ...o
      } = a;
      i = De(i);
      const r = l.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
      return t.activate({
        ...o,
        id: i,
        activated: r
      });
    },
    in: (a, l, i) => {
      let o = /* @__PURE__ */ new Set();
      if (a != null) {
        const r = Oe(a);
        r.length && (o = t.in(r.slice(0, 1), l, i));
      }
      return o;
    },
    out: (a, l, i) => t.out(a, l, i)
  };
}, Ld = (e) => {
  const t = wl(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...r
      } = a;
      return l = De(l), o.has(l) ? i : t.activate({
        id: l,
        activated: i,
        children: o,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, Md = (e) => {
  const t = Qo(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...r
      } = a;
      return l = De(l), o.has(l) ? i : t.activate({
        id: l,
        activated: i,
        children: o,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, Rd = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: l
    } = e;
    if (n) {
      const i = /* @__PURE__ */ new Set();
      i.add(t);
      let o = l.get(t);
      for (; o != null; )
        i.add(o), o = l.get(o);
      return i;
    } else
      return a.delete(t), a;
  },
  select: () => null
}, Jo = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: l
    } = e;
    if (n) {
      let i = l.get(t);
      for (a.add(t); i != null && i !== t; )
        a.add(i), i = l.get(i);
      return a;
    } else
      a.delete(t);
    return a;
  },
  select: () => null
}, Nd = {
  open: Jo.open,
  select: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: l
    } = e;
    if (!n) return a;
    const i = [];
    let o = l.get(t);
    for (; o != null; )
      i.push(o), o = l.get(o);
    return new Set(i);
  }
}, xl = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: l,
        selected: i
      } = n;
      if (a = De(a), e && !l) {
        const o = Array.from(i.entries()).reduce((r, s) => {
          let [c, u] = s;
          return u === "on" && r.push(c), r;
        }, []);
        if (o.length === 1 && o[0] === a) return i;
      }
      return i.set(a, l ? "on" : "off"), i;
    },
    in: (n, a, l, i) => {
      const o = /* @__PURE__ */ new Map();
      for (const r of n || [])
        t.select({
          id: r,
          value: !0,
          selected: o,
          children: a,
          parents: l,
          disabled: i
        });
      return o;
    },
    out: (n) => {
      const a = [];
      for (const [l, i] of n.entries())
        i === "on" && a.push(l);
      return a;
    }
  };
  return t;
}, er = (e) => {
  const t = xl(e);
  return {
    select: (a) => {
      let {
        selected: l,
        id: i,
        ...o
      } = a;
      i = De(i);
      const r = l.has(i) ? /* @__PURE__ */ new Map([[i, l.get(i)]]) : /* @__PURE__ */ new Map();
      return t.select({
        ...o,
        id: i,
        selected: r
      });
    },
    in: (a, l, i, o) => a != null && a.length ? t.in(a.slice(0, 1), l, i, o) : /* @__PURE__ */ new Map(),
    out: (a, l, i) => t.out(a, l, i)
  };
}, Hd = (e) => {
  const t = xl(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = a;
      return l = De(l), o.has(l) ? i : t.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, zd = (e) => {
  const t = er(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = a;
      return l = De(l), o.has(l) ? i : t.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, tr = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: l,
        selected: i,
        children: o,
        parents: r,
        disabled: s
      } = n;
      a = De(a);
      const c = new Map(i), u = [a];
      for (; u.length; ) {
        const f = u.shift();
        s.has(f) || i.set(De(f), l ? "on" : "off"), o.has(f) && u.push(...o.get(f));
      }
      let d = De(r.get(a));
      for (; d; ) {
        let f = !0, v = !0;
        for (const m of o.get(d)) {
          const b = De(m);
          if (!s.has(b) && (i.get(b) !== "on" && (f = !1), i.has(b) && i.get(b) !== "off" && (v = !1), !f && !v))
            break;
        }
        i.set(d, f ? "on" : v ? "off" : "indeterminate"), d = De(r.get(d));
      }
      return e && !l && Array.from(i.entries()).reduce((v, m) => {
        let [b, y] = m;
        return y === "on" && v.push(b), v;
      }, []).length === 0 ? c : i;
    },
    in: (n, a, l, i) => {
      let o = /* @__PURE__ */ new Map();
      for (const r of n || [])
        o = t.select({
          id: r,
          value: !0,
          selected: o,
          children: a,
          parents: l,
          disabled: i
        });
      return o;
    },
    out: (n, a) => {
      const l = [];
      for (const [i, o] of n.entries())
        o === "on" && !a.has(i) && l.push(i);
      return l;
    }
  };
  return t;
}, Wd = (e) => {
  const t = tr(e);
  return {
    select: t.select,
    in: t.in,
    out: (a, l, i) => {
      const o = [];
      for (const [r, s] of a.entries())
        if (s === "on") {
          if (i.has(r)) {
            const c = i.get(r);
            if (a.get(c) === "on") continue;
          }
          o.push(r);
        }
      return o;
    }
  };
}, Sn = Symbol.for("vuetify:nested"), nr = {
  id: G(),
  root: {
    register: () => null,
    unregister: () => null,
    children: Y(/* @__PURE__ */ new Map()),
    parents: Y(/* @__PURE__ */ new Map()),
    disabled: Y(/* @__PURE__ */ new Set()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: Y(!1),
    selectable: Y(!1),
    opened: Y(/* @__PURE__ */ new Set()),
    activated: Y(/* @__PURE__ */ new Set()),
    selected: Y(/* @__PURE__ */ new Map()),
    selectedValues: Y([]),
    getPath: () => []
  }
}, jd = O({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), Gd = (e) => {
  let t = !1;
  const n = G(/* @__PURE__ */ new Map()), a = G(/* @__PURE__ */ new Map()), l = G(/* @__PURE__ */ new Set()), i = fe(e, "opened", e.opened, (b) => new Set(Array.isArray(b) ? b.map((y) => De(y)) : b), (b) => [...b.values()]), o = x(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return Ld(e.mandatory);
      case "single-leaf":
        return Md(e.mandatory);
      case "independent":
        return wl(e.mandatory);
      case "single-independent":
      default:
        return Qo(e.mandatory);
    }
  }), r = x(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return zd(e.mandatory);
      case "leaf":
        return Hd(e.mandatory);
      case "independent":
        return xl(e.mandatory);
      case "single-independent":
        return er(e.mandatory);
      case "trunk":
        return Wd(e.mandatory);
      case "classic":
      default:
        return tr(e.mandatory);
    }
  }), s = x(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Nd;
      case "single":
        return Rd;
      case "multiple":
      default:
        return Jo;
    }
  }), c = fe(e, "activated", e.activated, (b) => o.value.in(b, n.value, a.value), (b) => o.value.out(b, n.value, a.value)), u = fe(e, "selected", e.selected, (b) => r.value.in(b, n.value, a.value, l.value), (b) => r.value.out(b, n.value, a.value));
  Ke(() => {
    t = !0;
  });
  function d(b) {
    const y = [];
    let h = De(b);
    for (; h !== void 0; )
      y.unshift(h), h = a.value.get(h);
    return y;
  }
  const f = Ie("nested"), v = /* @__PURE__ */ new Set(), m = {
    id: G(),
    root: {
      opened: i,
      activatable: T(() => e.activatable),
      selectable: T(() => e.selectable),
      activated: c,
      selected: u,
      selectedValues: x(() => {
        const b = [];
        for (const [y, h] of u.value.entries())
          h === "on" && b.push(y);
        return b;
      }),
      register: (b, y, h, g) => {
        if (v.has(b)) {
          const k = d(b).map(String).join(" -> "), p = d(y).concat(b).map(String).join(" -> ");
          cn(`Multiple nodes with the same ID
	${k}
	${p}`);
          return;
        } else
          v.add(b);
        y && b !== y && a.value.set(b, y), h && l.value.add(b), g && n.value.set(b, []), y != null && n.value.set(y, [...n.value.get(y) || [], b]);
      },
      unregister: (b) => {
        if (t) return;
        v.delete(b), n.value.delete(b), l.value.delete(b);
        const y = a.value.get(b);
        if (y) {
          const h = n.value.get(y) ?? [];
          n.value.set(y, h.filter((g) => g !== b));
        }
        a.value.delete(b);
      },
      open: (b, y, h) => {
        f.emit("click:open", {
          id: b,
          value: y,
          path: d(b),
          event: h
        });
        const g = s.value.open({
          id: b,
          value: y,
          opened: new Set(i.value),
          children: n.value,
          parents: a.value,
          event: h
        });
        g && (i.value = g);
      },
      openOnSelect: (b, y, h) => {
        const g = s.value.select({
          id: b,
          value: y,
          selected: new Map(u.value),
          opened: new Set(i.value),
          children: n.value,
          parents: a.value,
          event: h
        });
        g && (i.value = g);
      },
      select: (b, y, h) => {
        f.emit("click:select", {
          id: b,
          value: y,
          path: d(b),
          event: h
        });
        const g = r.value.select({
          id: b,
          value: y,
          selected: new Map(u.value),
          children: n.value,
          parents: a.value,
          disabled: l.value,
          event: h
        });
        g && (u.value = g), m.root.openOnSelect(b, y, h);
      },
      activate: (b, y, h) => {
        if (!e.activatable)
          return m.root.select(b, !0, h);
        f.emit("click:activate", {
          id: b,
          value: y,
          path: d(b),
          event: h
        });
        const g = o.value.activate({
          id: b,
          value: y,
          activated: new Set(c.value),
          children: n.value,
          parents: a.value,
          event: h
        });
        if (g.size !== c.value.size)
          c.value = g;
        else {
          for (const k of g)
            if (!c.value.has(k)) {
              c.value = g;
              return;
            }
          for (const k of c.value)
            if (!g.has(k)) {
              c.value = g;
              return;
            }
        }
      },
      children: n,
      parents: a,
      disabled: l,
      getPath: d
    }
  };
  return Pe(Sn, m), m.root;
}, ar = (e, t, n) => {
  const a = he(Sn, nr), l = Symbol("nested item"), i = x(() => {
    const r = De(We(e));
    return r !== void 0 ? r : l;
  }), o = {
    ...a,
    id: i,
    open: (r, s) => a.root.open(i.value, r, s),
    openOnSelect: (r, s) => a.root.openOnSelect(i.value, r, s),
    isOpen: x(() => a.root.opened.value.has(i.value)),
    parent: x(() => a.root.parents.value.get(i.value)),
    activate: (r, s) => a.root.activate(i.value, r, s),
    isActivated: x(() => a.root.activated.value.has(i.value)),
    select: (r, s) => a.root.select(i.value, r, s),
    isSelected: x(() => a.root.selected.value.get(i.value) === "on"),
    isIndeterminate: x(() => a.root.selected.value.get(i.value) === "indeterminate"),
    isLeaf: x(() => !a.root.children.value.get(i.value)),
    isGroupActivator: a.isGroupActivator
  };
  return ua(() => {
    a.isGroupActivator || a.root.register(i.value, a.id.value, We(t), n);
  }), Ke(() => {
    a.isGroupActivator || a.root.unregister(i.value);
  }), n && Pe(Sn, o), o;
}, Ud = () => {
  const e = he(Sn, nr);
  Pe(Sn, {
    ...e,
    isGroupActivator: !0
  });
};
function An() {
  const e = G(!1);
  return ct(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: T(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: sa(e)
  };
}
const ln = O({
  transition: {
    type: null,
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), kt = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: a,
    disabled: l,
    group: i,
    ...o
  } = e, {
    component: r = i ? nl : Vt,
    ...s
  } = un(a) ? a : {};
  let c;
  return un(a) ? c = j(s, hu({
    disabled: l,
    group: i
  }), o) : c = j({
    name: l || !a ? "" : a
  }, o), Lt(r, c, n);
}, Yd = tn({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Ud(), () => {
      var a;
      return (a = n.default) == null ? void 0 : a.call(n);
    };
  }
}), Kd = O({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: se,
    default: "$collapse"
  },
  disabled: Boolean,
  expandIcon: {
    type: se,
    default: "$expand"
  },
  rawId: [String, Number],
  prependIcon: se,
  appendIcon: se,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...oe(),
  ...ge()
}, "VListGroup"), Ei = U()({
  name: "VListGroup",
  props: Kd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isOpen: a,
      open: l,
      id: i
    } = ar(() => e.value, () => e.disabled, !0), o = x(() => `v-list-group--id-${String(e.rawId ?? i.value)}`), r = Zo(), {
      isBooted: s
    } = An();
    function c(v) {
      var m;
      ["INPUT", "TEXTAREA"].includes((m = v.target) == null ? void 0 : m.tagName) || l(!a.value, v);
    }
    const u = x(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: o.value
    })), d = x(() => a.value ? e.collapseIcon : e.expandIcon), f = x(() => ({
      VListItem: {
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && d.value,
        appendIcon: e.appendIcon || !e.subgroup && d.value,
        title: e.title,
        value: e.value
      }
    }));
    return ee(() => S(e.tag, {
      class: X(["v-list-group", {
        "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }, e.class]),
      style: re(e.style)
    }, {
      default: () => [n.activator && S(Se, {
        defaults: f.value
      }, {
        default: () => [S(Yd, null, {
          default: () => [n.activator({
            props: u.value,
            isOpen: a.value
          })]
        })]
      }), S(kt, {
        transition: {
          component: Ko
        },
        disabled: !s.value
      }, {
        default: () => {
          var v;
          return [Le(C("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(v = n.default) == null ? void 0 : v.call(n)]), [[Mt, a.value]])];
        }
      })]
    })), {
      isOpen: a
    };
  }
}), Xd = O({
  opacity: [Number, String],
  ...oe(),
  ...ge()
}, "VListItemSubtitle"), qd = U()({
  name: "VListItemSubtitle",
  props: Xd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => S(e.tag, {
      class: X(["v-list-item-subtitle", e.class]),
      style: re([{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), Zd = da("v-list-item-title");
function Qd(e) {
  return {
    aspectStyles: x(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const lr = O({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...oe(),
  ...st()
}, "VResponsive"), Bi = U()({
  name: "VResponsive",
  props: lr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: a
    } = Qd(e), {
      dimensionStyles: l
    } = ut(e);
    return ee(() => {
      var i;
      return C("div", {
        class: X(["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class]),
        style: re([l.value, e.style])
      }, [C("div", {
        class: "v-responsive__sizer",
        style: re(a.value)
      }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && C("div", {
        class: X(["v-responsive__content", e.contentClass])
      }, [n.default()])]);
    }), {};
  }
});
function Jd(e, t) {
  if (!al) return;
  const n = t.modifiers || {}, a = t.value, {
    handler: l,
    options: i
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, o = new IntersectionObserver(function() {
    var d;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const c = (d = e._observe) == null ? void 0 : d[t.instance.$.uid];
    if (!c) return;
    const u = r.some((f) => f.isIntersecting);
    l && (!n.quiet || c.init) && (!n.once || u || c.init) && l(u, r, s), u && n.once ? ir(e, t) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function ir(e, t) {
  var a;
  const n = (a = e._observe) == null ? void 0 : a[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Zt = {
  mounted: Jd,
  unmounted: ir
}, ef = O({
  absolute: Boolean,
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...lr(),
  ...oe(),
  ...He(),
  ...ln()
}, "VImg"), xa = U()({
  name: "VImg",
  directives: {
    vIntersect: Zt
  },
  props: ef(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ye(() => e.color), {
      roundedClasses: o
    } = je(e), r = Ie("VImg"), s = G(""), c = Y(), u = G(e.eager ? "loading" : "idle"), d = G(), f = G(), v = x(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), m = x(() => v.value.aspect || d.value / f.value || 0);
    J(() => e.src, () => {
      b(u.value !== "idle");
    }), J(m, (D, F) => {
      !D && F && c.value && p(c.value);
    }), ua(() => b());
    function b(D) {
      if (!(e.eager && D) && !(al && !D && !e.eager)) {
        if (u.value = "loading", v.value.lazySrc) {
          const F = new Image();
          F.src = v.value.lazySrc, p(F, null);
        }
        v.value.src && Ce(() => {
          var F;
          n("loadstart", ((F = c.value) == null ? void 0 : F.currentSrc) || v.value.src), setTimeout(() => {
            var $;
            if (!r.isUnmounted)
              if (($ = c.value) != null && $.complete) {
                if (c.value.naturalWidth || h(), u.value === "error") return;
                m.value || p(c.value, null), u.value === "loading" && y();
              } else
                m.value || p(c.value), g();
          });
        });
      }
    }
    function y() {
      var D;
      r.isUnmounted || (g(), p(c.value), u.value = "loaded", n("load", ((D = c.value) == null ? void 0 : D.currentSrc) || v.value.src));
    }
    function h() {
      var D;
      r.isUnmounted || (u.value = "error", n("error", ((D = c.value) == null ? void 0 : D.currentSrc) || v.value.src));
    }
    function g() {
      const D = c.value;
      D && (s.value = D.currentSrc || D.src);
    }
    let k = -1;
    Ke(() => {
      clearTimeout(k);
    });
    function p(D) {
      let F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const $ = () => {
        if (clearTimeout(k), r.isUnmounted) return;
        const {
          naturalHeight: R,
          naturalWidth: W
        } = D;
        R || W ? (d.value = W, f.value = R) : !D.complete && u.value === "loading" && F != null ? k = window.setTimeout($, F) : (D.currentSrc.endsWith(".svg") || D.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, f.value = 1);
      };
      $();
    }
    const V = T(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), A = () => {
      var $;
      if (!v.value.src || u.value === "idle") return null;
      const D = C("img", {
        class: X(["v-img__img", V.value]),
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: v.value.src,
        srcset: v.value.srcset,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: c,
        onLoad: y,
        onError: h
      }, null), F = ($ = a.sources) == null ? void 0 : $.call(a);
      return S(kt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [Le(F ? C("picture", {
          class: "v-img__picture"
        }, [F, D]) : D, [[Mt, u.value === "loaded"]])]
      });
    }, P = () => S(kt, {
      transition: e.transition
    }, {
      default: () => [v.value.lazySrc && u.value !== "loaded" && C("img", {
        class: X(["v-img__img", "v-img__img--preload", V.value]),
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: v.value.lazySrc,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), w = () => a.placeholder ? S(kt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(u.value === "loading" || u.value === "error" && !a.error) && C("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, E = () => a.error ? S(kt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [u.value === "error" && C("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, I = () => e.gradient ? C("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, _ = G(!1);
    {
      const D = J(m, (F) => {
        F && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            _.value = !0;
          });
        }), D());
      });
    }
    return ee(() => {
      const D = Bi.filterProps(e);
      return Le(S(Bi, j({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !_.value
        }, l.value, o.value, e.class],
        style: [{
          width: Q(e.width === "auto" ? d.value : e.width)
        }, i.value, e.style]
      }, D, {
        aspectRatio: m.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => C(ce, null, [S(A, null, null), S(P, null, null), S(I, null, null), S(w, null, null), S(E, null, null)]),
        default: a.default
      }), [[Zt, {
        handler: b,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: s,
      image: c,
      state: u,
      naturalWidth: d,
      naturalHeight: f
    };
  }
}), tf = O({
  start: Boolean,
  end: Boolean,
  icon: se,
  image: String,
  text: String,
  ...ft(),
  ...oe(),
  ...Ze(),
  ...He(),
  ...nn(),
  ...ge(),
  ...we(),
  ...mt({
    variant: "flat"
  })
}, "VAvatar"), At = U()({
  name: "VAvatar",
  props: tf(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Ae(e), {
      borderClasses: l
    } = bt(e), {
      colorClasses: i,
      colorStyles: o,
      variantClasses: r
    } = Nt(e), {
      densityClasses: s
    } = rt(e), {
      roundedClasses: c
    } = je(e), {
      sizeClasses: u,
      sizeStyles: d
    } = pn(e);
    return ee(() => S(e.tag, {
      class: X(["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, i.value, s.value, c.value, u.value, r.value, e.class]),
      style: re([o.value, d.value, e.style])
    }, {
      default: () => [n.default ? S(Se, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            src: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [n.default()]
      }) : e.image ? S(xa, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? S(Ve, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Rt(!1, "v-avatar")]
    })), {};
  }
}), nf = O({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: se,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: se,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  value: null,
  onClick: $e(),
  onClickOnce: $e(),
  ...ft(),
  ...oe(),
  ...Ze(),
  ...st(),
  ...vt(),
  ...He(),
  ...wa(),
  ...ge(),
  ...we(),
  ...mt({
    variant: "text"
  })
}, "VListItem"), Qt = U()({
  name: "VListItem",
  directives: {
    vRipple: Ct
  },
  props: nf(),
  emits: {
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: l
    } = t;
    const i = Sa(e, n), o = x(() => e.value === void 0 ? i.href.value : e.value), {
      activate: r,
      isActivated: s,
      select: c,
      isOpen: u,
      isSelected: d,
      isIndeterminate: f,
      isGroupActivator: v,
      root: m,
      parent: b,
      openOnSelect: y,
      id: h
    } = ar(o, () => e.disabled, !1), g = Zo(), k = x(() => {
      var N;
      return e.active !== !1 && (e.active || ((N = i.isActive) == null ? void 0 : N.value) || (m.activatable.value ? s.value : d.value));
    }), p = T(() => e.link !== !1 && i.isLink.value), V = x(() => !!g && (m.selectable.value || m.activatable.value || e.value != null)), A = x(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || V.value)), P = x(() => g ? V.value ? "option" : "listitem" : void 0), w = x(() => {
      if (V.value)
        return m.activatable.value ? s.value : m.selectable.value ? d.value : k.value;
    }), E = T(() => e.rounded || e.nav), I = T(() => e.color ?? e.activeColor), _ = T(() => ({
      color: k.value ? I.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    J(() => {
      var N;
      return (N = i.isActive) == null ? void 0 : N.value;
    }, (N) => {
      N && D();
    }), ua(() => {
      var N;
      (N = i.isActive) != null && N.value && D();
    });
    function D() {
      b.value != null && m.open(b.value, !0), y(!0);
    }
    const {
      themeClasses: F
    } = Ae(e), {
      borderClasses: $
    } = bt(e), {
      colorClasses: R,
      colorStyles: W,
      variantClasses: K
    } = Nt(_), {
      densityClasses: te
    } = rt(e), {
      dimensionStyles: le
    } = ut(e), {
      elevationClasses: L
    } = St(e), {
      roundedClasses: Z
    } = je(E), M = T(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), B = T(() => e.ripple !== void 0 && e.ripple && (g != null && g.filterable) ? {
      keys: ["Enter"]
    } : e.ripple), H = x(() => ({
      isActive: k.value,
      select: c,
      isOpen: u.value,
      isSelected: d.value,
      isIndeterminate: f.value
    }));
    function ie(N) {
      var q, ve;
      l("click", N), !["INPUT", "TEXTAREA"].includes((q = N.target) == null ? void 0 : q.tagName) && A.value && ((ve = i.navigate) == null || ve.call(i, N), !v && (m.activatable.value ? r(!s.value, N) : (m.selectable.value || e.value != null && !p.value) && c(!d.value, N)));
    }
    function ue(N) {
      const q = N.target;
      ["INPUT", "TEXTAREA"].includes(q.tagName) || (N.key === "Enter" || N.key === " " && !(g != null && g.filterable)) && (N.preventDefault(), N.stopPropagation(), N.target.dispatchEvent(new MouseEvent("click", N)));
    }
    return ee(() => {
      const N = p.value ? "a" : e.tag, q = a.title || e.title != null, ve = a.subtitle || e.subtitle != null, xe = !!(e.appendAvatar || e.appendIcon), ke = !!(xe || a.append), me = !!(e.prependAvatar || e.prependIcon), z = !!(me || a.prepend);
      return g == null || g.updateHasPrepend(z), e.activeColor && ro("active-color", ["color", "base-color"]), Le(S(N, j({
        class: ["v-list-item", {
          "v-list-item--active": k.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": A.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !z && (g == null ? void 0 : g.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && k.value
        }, F.value, $.value, R.value, te.value, L.value, M.value, Z.value, K.value, e.class],
        style: [W.value, le.value, e.style],
        tabindex: A.value ? g ? -2 : 0 : void 0,
        "aria-selected": w.value,
        role: P.value,
        onClick: ie,
        onKeydown: A.value && !p.value && ue
      }, i.linkProps), {
        default: () => {
          var ne;
          return [Rt(A.value || k.value, "v-list-item"), z && C("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [a.prepend ? S(Se, {
            key: "prepend-defaults",
            disabled: !me,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              },
              VListItemAction: {
                start: !0
              }
            }
          }, {
            default: () => {
              var ae;
              return [(ae = a.prepend) == null ? void 0 : ae.call(a, H.value)];
            }
          }) : C(ce, null, [e.prependAvatar && S(At, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && S(Ve, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), C("div", {
            class: "v-list-item__spacer"
          }, null)]), C("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [q && S(Zd, {
            key: "title"
          }, {
            default: () => {
              var ae;
              return [((ae = a.title) == null ? void 0 : ae.call(a, {
                title: e.title
              })) ?? Ft(e.title)];
            }
          }), ve && S(qd, {
            key: "subtitle"
          }, {
            default: () => {
              var ae;
              return [((ae = a.subtitle) == null ? void 0 : ae.call(a, {
                subtitle: e.subtitle
              })) ?? Ft(e.subtitle)];
            }
          }), (ne = a.default) == null ? void 0 : ne.call(a, H.value)]), ke && C("div", {
            key: "append",
            class: "v-list-item__append"
          }, [a.append ? S(Se, {
            key: "append-defaults",
            disabled: !xe,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              },
              VListItemAction: {
                end: !0
              }
            }
          }, {
            default: () => {
              var ae;
              return [(ae = a.append) == null ? void 0 : ae.call(a, H.value)];
            }
          }) : C(ce, null, [e.appendIcon && S(Ve, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && S(At, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), C("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[Ct, A.value && B.value]]);
    }), {
      activate: r,
      isActivated: s,
      isGroupActivator: v,
      isSelected: d,
      list: g,
      select: c,
      root: m,
      id: h,
      link: i
    };
  }
}), af = O({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...oe(),
  ...ge()
}, "VListSubheader"), kl = U()({
  name: "VListSubheader",
  props: af(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = it(() => e.color);
    return ee(() => {
      const i = !!(n.default || e.title);
      return S(e.tag, {
        class: X(["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class]),
        style: re([{
          textColorStyles: l
        }, e.style])
      }, {
        default: () => {
          var o;
          return [i && C("div", {
            class: "v-list-subheader__text"
          }, [((o = n.default) == null ? void 0 : o.call(n)) ?? e.title])];
        }
      });
    }), {};
  }
}), lf = O({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...oe(),
  ...we()
}, "VDivider"), Tn = U()({
  name: "VDivider",
  props: lf(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = Ae(e), {
      textColorClasses: i,
      textColorStyles: o
    } = it(() => e.color), r = x(() => {
      const s = {};
      return e.length && (s[e.vertical ? "height" : "width"] = Q(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = Q(e.thickness)), s;
    });
    return ee(() => {
      const s = C("hr", {
        class: X([{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, l.value, i.value, e.class]),
        style: re([r.value, o.value, {
          "--v-border-opacity": e.opacity
        }, e.style]),
        "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${n.role || "separator"}`
      }, null);
      return a.default ? C("div", {
        class: X(["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }])
      }, [s, C("div", {
        class: "v-divider__content"
      }, [a.default()]), s]) : s;
    }), {};
  }
}), of = O({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), or = U()({
  name: "VListChildren",
  props: of(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return qo(), () => {
      var a, l;
      return ((a = n.default) == null ? void 0 : a.call(n)) ?? ((l = e.items) == null ? void 0 : l.map((i) => {
        var f, v;
        let {
          children: o,
          props: r,
          type: s,
          raw: c
        } = i;
        if (s === "divider")
          return ((f = n.divider) == null ? void 0 : f.call(n, {
            props: r
          })) ?? S(Tn, r, null);
        if (s === "subheader")
          return ((v = n.subheader) == null ? void 0 : v.call(n, {
            props: r
          })) ?? S(kl, r, null);
        const u = {
          subtitle: n.subtitle ? (m) => {
            var b;
            return (b = n.subtitle) == null ? void 0 : b.call(n, {
              ...m,
              item: c
            });
          } : void 0,
          prepend: n.prepend ? (m) => {
            var b;
            return (b = n.prepend) == null ? void 0 : b.call(n, {
              ...m,
              item: c
            });
          } : void 0,
          append: n.append ? (m) => {
            var b;
            return (b = n.append) == null ? void 0 : b.call(n, {
              ...m,
              item: c
            });
          } : void 0,
          title: n.title ? (m) => {
            var b;
            return (b = n.title) == null ? void 0 : b.call(n, {
              ...m,
              item: c
            });
          } : void 0
        }, d = Ei.filterProps(r);
        return o ? S(Ei, j(d, {
          value: e.returnObject ? c : r == null ? void 0 : r.value,
          rawId: r == null ? void 0 : r.value
        }), {
          activator: (m) => {
            let {
              props: b
            } = m;
            const y = j(r, b, {
              value: e.returnObject ? c : r.value
            });
            return n.header ? n.header({
              props: y
            }) : S(Qt, y, u);
          },
          default: () => S(or, {
            items: o,
            returnObject: e.returnObject
          }, n)
        }) : n.item ? n.item({
          props: r
        }) : S(Qt, j(r, {
          value: e.returnObject ? c : r.value
        }), u);
      }));
    };
  }
}), rr = O({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  itemType: {
    type: [Boolean, String, Array, Function],
    default: "type"
  },
  returnObject: Boolean,
  valueComparator: Function
}, "list-items"), rf = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Yt(e, t) {
  const n = Re(t, e.itemTitle, t), a = Re(t, e.itemValue, n), l = Re(t, e.itemChildren), i = e.itemProps === !0 ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Xe(t, ["children"]) : t : void 0 : Re(t, e.itemProps);
  let o = Re(t, e.itemType, "item");
  rf.has(o) || (o = "item");
  const r = {
    title: n,
    value: a,
    ...i
  };
  return {
    type: o,
    title: String(r.title ?? ""),
    value: r.value,
    props: r,
    children: o === "item" && Array.isArray(l) ? sr(e, l) : void 0,
    raw: t
  };
}
Yt.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function sr(e, t) {
  const n = Pt(e, Yt.neededProps), a = [];
  for (const l of t)
    a.push(Yt(n, l));
  return a;
}
function ur(e) {
  const t = x(() => sr(e, e.items)), n = x(() => t.value.some((r) => r.value === null)), a = G(/* @__PURE__ */ new Map()), l = G([]);
  _e(() => {
    const r = t.value, s = /* @__PURE__ */ new Map(), c = [];
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      if (Ha(d.value) || d.value === null) {
        let f = s.get(d.value);
        f || (f = [], s.set(d.value, f)), f.push(d);
      } else
        c.push(d);
    }
    a.value = s, l.value = c;
  });
  function i(r) {
    const s = a.value, c = t.value, u = l.value, d = n.value, f = e.returnObject, v = !!e.valueComparator, m = e.valueComparator || ze, b = Pt(e, Yt.neededProps), y = [];
    e: for (const h of r) {
      if (!d && h === null) continue;
      if (f && typeof h == "string") {
        y.push(Yt(b, h));
        continue;
      }
      const g = s.get(h);
      if (v || !g) {
        for (const k of v ? c : u)
          if (m(h, k.value)) {
            y.push(k);
            continue e;
          }
        y.push(Yt(b, h));
        continue;
      }
      y.push(...g);
    }
    return y;
  }
  function o(r) {
    return e.returnObject ? r.map((s) => {
      let {
        raw: c
      } = s;
      return c;
    }) : r.map((s) => {
      let {
        value: c
      } = s;
      return c;
    });
  }
  return {
    items: t,
    transformIn: i,
    transformOut: o
  };
}
const sf = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function uf(e, t) {
  const n = Ha(t) ? t : Re(t, e.itemTitle), a = Ha(t) ? t : Re(t, e.itemValue, void 0), l = Re(t, e.itemChildren), i = e.itemProps === !0 ? Xe(t, ["children"]) : Re(t, e.itemProps);
  let o = Re(t, e.itemType, "item");
  sf.has(o) || (o = "item");
  const r = {
    title: n,
    value: a,
    ...i
  };
  return {
    type: o,
    title: r.title,
    value: r.value,
    props: r,
    children: o === "item" && l ? cr(e, l) : void 0,
    raw: t
  };
}
function cr(e, t) {
  const n = [];
  for (const a of t)
    n.push(uf(e, a));
  return n;
}
function cf(e) {
  return {
    items: x(() => cr(e, e.items))
  };
}
const df = O({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  filterable: Boolean,
  expandIcon: se,
  collapseIcon: se,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": $e(),
  "onClick:select": $e(),
  "onUpdate:opened": $e(),
  ...jd({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...ft(),
  ...oe(),
  ...Ze(),
  ...st(),
  ...vt(),
  ...rr(),
  ...He(),
  ...ge(),
  ...we(),
  ...mt({
    variant: "text"
  })
}, "VList"), dr = U()({
  name: "VList",
  props: df(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      items: a
    } = cf(e), {
      themeClasses: l
    } = Ae(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Ye(() => e.bgColor), {
      borderClasses: r
    } = bt(e), {
      densityClasses: s
    } = rt(e), {
      dimensionStyles: c
    } = ut(e), {
      elevationClasses: u
    } = St(e), {
      roundedClasses: d
    } = je(e), {
      children: f,
      open: v,
      parents: m,
      select: b,
      getPath: y
    } = Gd(e), h = T(() => e.lines ? `v-list--${e.lines}-line` : void 0), g = T(() => e.activeColor), k = T(() => e.baseColor), p = T(() => e.color), V = T(() => e.selectable || e.activatable);
    qo({
      filterable: e.filterable
    }), nt({
      VListGroup: {
        activeColor: g,
        baseColor: k,
        color: p,
        expandIcon: T(() => e.expandIcon),
        collapseIcon: T(() => e.collapseIcon)
      },
      VListItem: {
        activeClass: T(() => e.activeClass),
        activeColor: g,
        baseColor: k,
        color: p,
        density: T(() => e.density),
        disabled: T(() => e.disabled),
        lines: T(() => e.lines),
        nav: T(() => e.nav),
        slim: T(() => e.slim),
        variant: T(() => e.variant)
      }
    });
    const A = G(!1), P = Y();
    function w($) {
      A.value = !0;
    }
    function E($) {
      A.value = !1;
    }
    function I($) {
      var R;
      !A.value && !($.relatedTarget && ((R = P.value) != null && R.contains($.relatedTarget))) && F();
    }
    function _($) {
      const R = $.target;
      if (!(!P.value || R.tagName === "INPUT" && ["Home", "End"].includes($.key) || R.tagName === "TEXTAREA")) {
        if ($.key === "ArrowDown")
          F("next");
        else if ($.key === "ArrowUp")
          F("prev");
        else if ($.key === "Home")
          F("first");
        else if ($.key === "End")
          F("last");
        else
          return;
        $.preventDefault();
      }
    }
    function D($) {
      A.value = !0;
    }
    function F($) {
      if (P.value)
        return rn(P.value, $);
    }
    return ee(() => S(e.tag, {
      ref: P,
      class: X(["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, l.value, i.value, r.value, s.value, u.value, h.value, d.value, e.class]),
      style: re([o.value, c.value, e.style]),
      tabindex: e.disabled ? -1 : 0,
      role: V.value ? "listbox" : "list",
      "aria-activedescendant": void 0,
      onFocusin: w,
      onFocusout: E,
      onFocus: I,
      onKeydown: _,
      onMousedown: D
    }, {
      default: () => [S(or, {
        items: a.value,
        returnObject: e.returnObject
      }, n)]
    })), {
      open: v,
      select: b,
      focus: F,
      children: f,
      parents: m,
      getPath: y
    };
  }
});
function ff(e) {
  let {
    rootEl: t,
    isSticky: n,
    layoutItemStyles: a
  } = e;
  const l = G(!1), i = G(0), o = x(() => {
    const c = typeof l.value == "boolean" ? "top" : l.value;
    return [n.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, l.value ? {
      [c]: Q(i.value)
    } : {
      top: a.value.top
    }];
  });
  ct(() => {
    J(n, (c) => {
      c ? window.addEventListener("scroll", s, {
        passive: !0
      }) : window.removeEventListener("scroll", s);
    }, {
      immediate: !0
    });
  }), Ke(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const c = r > window.scrollY ? "up" : "down", u = t.value.getBoundingClientRect(), d = parseFloat(a.value.top ?? 0), f = window.scrollY - Math.max(0, i.value - d), v = u.height + Math.max(i.value, d) - window.scrollY - window.innerHeight, m = parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y")) || 0;
    u.height < window.innerHeight - d ? (l.value = "top", i.value = d) : c === "up" && l.value === "bottom" || c === "down" && l.value === "top" ? (i.value = window.scrollY + u.top - m, l.value = !0) : c === "down" && v <= 0 ? (i.value = 0, l.value = "bottom") : c === "up" && f <= 0 && (m ? l.value !== "top" && (i.value = -f + m + d, l.value = "top") : (i.value = u.top + f, l.value = "top")), r = window.scrollY;
  }
  return {
    isStuck: l,
    stickyStyles: o
  };
}
const vf = 100, mf = 20;
function Di(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function Fi(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t)
      continue;
    const a = Di(t), l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (l - a) * Math.abs(l), n === e.length - 1 && (t *= 0.5);
  }
  return Di(t) * 1e3;
}
function gf() {
  const e = {};
  function t(l) {
    Array.from(l.changedTouches).forEach((i) => {
      (e[i.identifier] ?? (e[i.identifier] = new no(mf))).push([l.timeStamp, i]);
    });
  }
  function n(l) {
    Array.from(l.changedTouches).forEach((i) => {
      delete e[i.identifier];
    });
  }
  function a(l) {
    var c;
    const i = (c = e[l]) == null ? void 0 : c.values().reverse();
    if (!i)
      throw new Error(`No samples for touch id ${l}`);
    const o = i[0], r = [], s = [];
    for (const u of i) {
      if (o[0] - u[0] > vf) break;
      r.push({
        t: u[0],
        d: u[1].clientX
      }), s.push({
        t: u[0],
        d: u[1].clientY
      });
    }
    return {
      x: Fi(r),
      y: Fi(s),
      get direction() {
        const {
          x: u,
          y: d
        } = this, [f, v] = [Math.abs(u), Math.abs(d)];
        return f > v && u >= 0 ? "right" : f > v && u <= 0 ? "left" : v > f && d >= 0 ? "down" : v > f && d <= 0 ? "up" : hf();
      }
    };
  }
  return {
    addMovement: t,
    endTouch: n,
    getVelocity: a
  };
}
function hf() {
  throw new Error();
}
function yf(e) {
  let {
    el: t,
    isActive: n,
    isTemporary: a,
    width: l,
    touchless: i,
    position: o
  } = e;
  ct(() => {
    window.addEventListener("touchstart", g, {
      passive: !0
    }), window.addEventListener("touchmove", k, {
      passive: !1
    }), window.addEventListener("touchend", p, {
      passive: !0
    });
  }), Ke(() => {
    window.removeEventListener("touchstart", g), window.removeEventListener("touchmove", k), window.removeEventListener("touchend", p);
  });
  const r = x(() => ["left", "right"].includes(o.value)), {
    addMovement: s,
    endTouch: c,
    getVelocity: u
  } = gf();
  let d = !1;
  const f = G(!1), v = G(0), m = G(0);
  let b;
  function y(A, P) {
    return (o.value === "left" ? A : o.value === "right" ? document.documentElement.clientWidth - A : o.value === "top" ? A : o.value === "bottom" ? document.documentElement.clientHeight - A : jt()) - (P ? l.value : 0);
  }
  function h(A) {
    let P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const w = o.value === "left" ? (A - m.value) / l.value : o.value === "right" ? (document.documentElement.clientWidth - A - m.value) / l.value : o.value === "top" ? (A - m.value) / l.value : o.value === "bottom" ? (document.documentElement.clientHeight - A - m.value) / l.value : jt();
    return P ? Fe(w) : w;
  }
  function g(A) {
    if (i.value) return;
    const P = A.changedTouches[0].clientX, w = A.changedTouches[0].clientY, E = 25, I = o.value === "left" ? P < E : o.value === "right" ? P > document.documentElement.clientWidth - E : o.value === "top" ? w < E : o.value === "bottom" ? w > document.documentElement.clientHeight - E : jt(), _ = n.value && (o.value === "left" ? P < l.value : o.value === "right" ? P > document.documentElement.clientWidth - l.value : o.value === "top" ? w < l.value : o.value === "bottom" ? w > document.documentElement.clientHeight - l.value : jt());
    (I || _ || n.value && a.value) && (b = [P, w], m.value = y(r.value ? P : w, n.value), v.value = h(r.value ? P : w), d = m.value > -20 && m.value < 80, c(A), s(A));
  }
  function k(A) {
    const P = A.changedTouches[0].clientX, w = A.changedTouches[0].clientY;
    if (d) {
      if (!A.cancelable) {
        d = !1;
        return;
      }
      const I = Math.abs(P - b[0]), _ = Math.abs(w - b[1]);
      (r.value ? I > _ && I > 3 : _ > I && _ > 3) ? (f.value = !0, d = !1) : (r.value ? _ : I) > 3 && (d = !1);
    }
    if (!f.value) return;
    A.preventDefault(), s(A);
    const E = h(r.value ? P : w, !1);
    v.value = Math.max(0, Math.min(1, E)), E > 1 ? m.value = y(r.value ? P : w, !0) : E < 0 && (m.value = y(r.value ? P : w, !1));
  }
  function p(A) {
    if (d = !1, !f.value) return;
    s(A), f.value = !1;
    const P = u(A.changedTouches[0].identifier), w = Math.abs(P.x), E = Math.abs(P.y);
    (r.value ? w > E && w > 400 : E > w && E > 3) ? n.value = P.direction === ({
      left: "right",
      right: "left",
      top: "down",
      bottom: "up"
    }[o.value] || jt()) : n.value = v.value > 0.5;
  }
  const V = x(() => f.value ? {
    transform: o.value === "left" ? `translateX(calc(-100% + ${v.value * l.value}px))` : o.value === "right" ? `translateX(calc(100% - ${v.value * l.value}px))` : o.value === "top" ? `translateY(calc(-100% + ${v.value * l.value}px))` : o.value === "bottom" ? `translateY(calc(100% - ${v.value * l.value}px))` : jt(),
    transition: "none"
  } : void 0);
  return Ue(f, () => {
    var w, E;
    const A = ((w = t.value) == null ? void 0 : w.style.transform) ?? null, P = ((E = t.value) == null ? void 0 : E.style.transition) ?? null;
    _e(() => {
      var I, _, D, F;
      (_ = t.value) == null || _.style.setProperty("transform", ((I = V.value) == null ? void 0 : I.transform) || "none"), (F = t.value) == null || F.style.setProperty("transition", ((D = V.value) == null ? void 0 : D.transition) || null);
    }), Ee(() => {
      var I, _;
      (I = t.value) == null || I.style.setProperty("transform", A), (_ = t.value) == null || _.style.setProperty("transition", P);
    });
  }), {
    isDragging: f,
    dragProgress: v,
    dragStyles: V
  };
}
function jt() {
  throw new Error();
}
const fr = O({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function vr(e, t) {
  let n = () => {
  };
  function a(o) {
    n == null || n();
    const r = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((s) => {
      n = vu(r, () => {
        t == null || t(o), s(o);
      });
    });
  }
  function l() {
    return a(!0);
  }
  function i() {
    return a(!1);
  }
  return {
    clearDelay: n,
    runOpenDelay: l,
    runCloseDelay: i
  };
}
function _n() {
  const t = Ie("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const bf = ["start", "end", "left", "right", "top", "bottom"], Sf = O({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (e) => bf.includes(e)
  },
  sticky: Boolean,
  ...ft(),
  ...oe(),
  ...fr(),
  ...Cn({
    mobile: null
  }),
  ...vt(),
  ...Ao(),
  ...He(),
  ...ge({
    tag: "nav"
  }),
  ...we()
}, "VNavigationDrawer"), Xm = U()({
  name: "VNavigationDrawer",
  props: Sf(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:rail": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      isRtl: i
    } = qe(), {
      themeClasses: o
    } = Ae(e), {
      borderClasses: r
    } = bt(e), {
      backgroundColorClasses: s,
      backgroundColorStyles: c
    } = Ye(() => e.color), {
      elevationClasses: u
    } = St(e), {
      displayClasses: d,
      mobile: f
    } = Tt(e), {
      roundedClasses: v
    } = je(e), m = $o(), b = fe(e, "modelValue", null, (L) => !!L), {
      ssrBootStyles: y
    } = An(), {
      scopeId: h
    } = _n(), g = Y(), k = G(!1), {
      runOpenDelay: p,
      runCloseDelay: V
    } = vr(e, (L) => {
      k.value = L;
    }), A = x(() => e.rail && e.expandOnHover && k.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), P = x(() => Wa(e.location, i.value)), w = T(() => e.persistent), E = x(() => !e.permanent && (f.value || e.temporary)), I = x(() => e.sticky && !E.value && P.value !== "bottom");
    Ue(() => e.expandOnHover && e.rail != null, () => {
      J(k, (L) => a("update:rail", !L));
    }), Ue(() => !e.disableResizeWatcher, () => {
      J(E, (L) => !e.permanent && Ce(() => b.value = !L));
    }), Ue(() => !e.disableRouteWatcher && !!m, () => {
      J(m.currentRoute, () => E.value && (b.value = !1));
    }), J(() => e.permanent, (L) => {
      L && (b.value = !0);
    }), e.modelValue == null && !E.value && (b.value = e.permanent || !f.value);
    const {
      isDragging: _,
      dragProgress: D
    } = yf({
      el: g,
      isActive: b,
      isTemporary: E,
      width: A,
      touchless: T(() => e.touchless),
      position: P
    }), F = x(() => {
      const L = E.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : A.value;
      return _.value ? L * D.value : L;
    }), {
      layoutItemStyles: $,
      layoutItemScrimStyles: R
    } = _o({
      id: e.name,
      order: x(() => parseInt(e.order, 10)),
      position: P,
      layoutSize: F,
      elementSize: A,
      active: sa(b),
      disableTransitions: T(() => _.value),
      absolute: x(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        e.absolute || I.value && typeof W.value != "string"
      ))
    }), {
      isStuck: W,
      stickyStyles: K
    } = ff({
      rootEl: g,
      isSticky: I,
      layoutItemStyles: $
    }), te = Ye(() => typeof e.scrim == "string" ? e.scrim : null), le = x(() => ({
      ..._.value ? {
        opacity: D.value * 0.2,
        transition: "none"
      } : void 0,
      ...R.value
    }));
    return nt({
      VList: {
        bgColor: "transparent"
      }
    }), ee(() => {
      const L = l.image || e.image;
      return C(ce, null, [S(e.tag, j({
        ref: g,
        onMouseenter: p,
        onMouseleave: V,
        class: ["v-navigation-drawer", `v-navigation-drawer--${P.value}`, {
          "v-navigation-drawer--expand-on-hover": e.expandOnHover,
          "v-navigation-drawer--floating": e.floating,
          "v-navigation-drawer--is-hovering": k.value,
          "v-navigation-drawer--rail": e.rail,
          "v-navigation-drawer--temporary": E.value,
          "v-navigation-drawer--persistent": w.value,
          "v-navigation-drawer--active": b.value,
          "v-navigation-drawer--sticky": I.value
        }, o.value, s.value, r.value, d.value, u.value, v.value, e.class],
        style: [c.value, $.value, y.value, K.value, e.style]
      }, h, n), {
        default: () => {
          var Z, M, B;
          return [L && C("div", {
            key: "image",
            class: "v-navigation-drawer__img"
          }, [l.image ? S(Se, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                alt: "",
                cover: !0,
                height: "inherit",
                src: e.image
              }
            }
          }, l.image) : S(xa, {
            key: "image-img",
            alt: "",
            cover: !0,
            height: "inherit",
            src: e.image
          }, null)]), l.prepend && C("div", {
            class: "v-navigation-drawer__prepend"
          }, [(Z = l.prepend) == null ? void 0 : Z.call(l)]), C("div", {
            class: "v-navigation-drawer__content"
          }, [(M = l.default) == null ? void 0 : M.call(l)]), l.append && C("div", {
            class: "v-navigation-drawer__append"
          }, [(B = l.append) == null ? void 0 : B.call(l)])];
        }
      }), S(Vt, {
        name: "fade-transition"
      }, {
        default: () => [E.value && (_.value || b.value) && !!e.scrim && C("div", j({
          class: ["v-navigation-drawer__scrim", te.backgroundColorClasses.value],
          style: [le.value, te.backgroundColorStyles.value],
          onClick: () => {
            w.value || (b.value = !1);
          }
        }, h), null)]
      })]);
    }), {
      isStuck: W
    };
  }
}), wf = O({
  ...oe(),
  ...Xe(od(), ["fullHeight"]),
  ...we()
}, "VApp"), qm = U()({
  name: "VApp",
  props: wf(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Ae(e), {
      layoutClasses: l,
      getLayoutItem: i,
      items: o,
      layoutRef: r
    } = sd({
      ...e,
      fullHeight: !0
    }), {
      rtlClasses: s
    } = qe();
    return ee(() => {
      var c;
      return C("div", {
        ref: r,
        class: X(["v-application", a.themeClasses.value, l.value, s.value, e.class]),
        style: re([e.style])
      }, [C("div", {
        class: "v-application__wrap"
      }, [(c = n.default) == null ? void 0 : c.call(n)])]);
    }), {
      getLayoutItem: i,
      items: o,
      theme: a
    };
  }
}), mr = O({
  text: String,
  ...oe(),
  ...ge()
}, "VToolbarTitle"), gr = U()({
  name: "VToolbarTitle",
  props: mr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => {
      const a = !!(n.default || n.text || e.text);
      return S(e.tag, {
        class: X(["v-toolbar-title", e.class]),
        style: re(e.style)
      }, {
        default: () => {
          var l;
          return [a && C("div", {
            class: "v-toolbar-title__placeholder"
          }, [n.text ? n.text() : e.text, (l = n.default) == null ? void 0 : l.call(n)])];
        }
      });
    }), {};
  }
}), xf = [null, "prominent", "default", "comfortable", "compact"], hr = O({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => xf.includes(e)
  },
  extended: {
    type: Boolean,
    default: null
  },
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...ft(),
  ...oe(),
  ...vt(),
  ...He(),
  ...ge({
    tag: "header"
  }),
  ...we()
}, "VToolbar"), Oi = U()({
  name: "VToolbar",
  props: hr(),
  setup(e, t) {
    var v;
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ye(() => e.color), {
      borderClasses: i
    } = bt(e), {
      elevationClasses: o
    } = St(e), {
      roundedClasses: r
    } = je(e), {
      themeClasses: s
    } = Ae(e), {
      rtlClasses: c
    } = qe(), u = G(e.extended === null ? !!((v = n.extension) != null && v.call(n)) : e.extended), d = x(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), f = x(() => u.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return nt({
      VBtn: {
        variant: "text"
      }
    }), ee(() => {
      var h;
      const m = !!(e.title || n.title), b = !!(n.image || e.image), y = (h = n.extension) == null ? void 0 : h.call(n);
      return u.value = e.extended === null ? !!y : e.extended, S(e.tag, {
        class: X(["v-toolbar", {
          "v-toolbar--absolute": e.absolute,
          "v-toolbar--collapse": e.collapse,
          "v-toolbar--flat": e.flat,
          "v-toolbar--floating": e.floating,
          [`v-toolbar--density-${e.density}`]: !0
        }, a.value, i.value, o.value, r.value, s.value, c.value, e.class]),
        style: re([l.value, e.style])
      }, {
        default: () => [b && C("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [n.image ? S(Se, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, n.image) : S(xa, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), S(Se, {
          defaults: {
            VTabs: {
              height: Q(d.value)
            }
          }
        }, {
          default: () => {
            var g, k, p;
            return [C("div", {
              class: "v-toolbar__content",
              style: {
                height: Q(d.value)
              }
            }, [n.prepend && C("div", {
              class: "v-toolbar__prepend"
            }, [(g = n.prepend) == null ? void 0 : g.call(n)]), m && S(gr, {
              key: "title",
              text: e.title
            }, {
              text: n.title
            }), (k = n.default) == null ? void 0 : k.call(n), n.append && C("div", {
              class: "v-toolbar__append"
            }, [(p = n.append) == null ? void 0 : p.call(n)])])];
          }
        }), S(Se, {
          defaults: {
            VTabs: {
              height: Q(f.value)
            }
          }
        }, {
          default: () => [S(Ko, null, {
            default: () => [u.value && C("div", {
              class: "v-toolbar__extension",
              style: {
                height: Q(f.value)
              }
            }, [y])]
          })]
        })]
      });
    }), {
      contentHeight: d,
      extensionHeight: f
    };
  }
}), kf = O({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function Cf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: n
  } = t;
  let a = 0, l = 0;
  const i = Y(null), o = G(0), r = G(0), s = G(0), c = G(!1), u = G(!1), d = x(() => Number(e.scrollThreshold)), f = x(() => Fe((d.value - o.value) / d.value || 0)), v = () => {
    const m = i.value;
    if (!m || n && !n.value) return;
    a = o.value, o.value = "window" in m ? m.pageYOffset : m.scrollTop;
    const b = m instanceof Window ? document.documentElement.scrollHeight : m.scrollHeight;
    if (l !== b) {
      l = b;
      return;
    }
    u.value = o.value < a, s.value = Math.abs(o.value - d.value);
  };
  return J(u, () => {
    r.value = r.value || o.value;
  }), J(c, () => {
    r.value = 0;
  }), ct(() => {
    J(() => e.scrollTarget, (m) => {
      var y;
      const b = m ? document.querySelector(m) : window;
      if (!b) {
        tt(`Unable to locate element with identifier ${m}`);
        return;
      }
      b !== i.value && ((y = i.value) == null || y.removeEventListener("scroll", v), i.value = b, i.value.addEventListener("scroll", v, {
        passive: !0
      }));
    }, {
      immediate: !0
    });
  }), Ke(() => {
    var m;
    (m = i.value) == null || m.removeEventListener("scroll", v);
  }), n && J(n, v, {
    immediate: !0
  }), {
    scrollThreshold: d,
    currentScroll: o,
    currentThreshold: s,
    isScrollActive: c,
    scrollRatio: f,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp: u,
    savedScroll: r
  };
}
const pf = O({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  location: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ...hr(),
  ...Ao(),
  ...kf(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), Zm = U()({
  name: "VAppBar",
  props: pf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Y(), l = fe(e, "modelValue"), i = x(() => {
      var k;
      const g = new Set(((k = e.scrollBehavior) == null ? void 0 : k.split(" ")) ?? []);
      return {
        hide: g.has("hide"),
        fullyHide: g.has("fully-hide"),
        inverted: g.has("inverted"),
        collapse: g.has("collapse"),
        elevate: g.has("elevate"),
        fadeImage: g.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    }), o = x(() => {
      const g = i.value;
      return g.hide || g.fullyHide || g.inverted || g.collapse || g.elevate || g.fadeImage || // behavior.shrink ||
      !l.value;
    }), {
      currentScroll: r,
      scrollThreshold: s,
      isScrollingUp: c,
      scrollRatio: u
    } = Cf(e, {
      canScroll: o
    }), d = T(() => i.value.hide || i.value.fullyHide), f = x(() => e.collapse || i.value.collapse && (i.value.inverted ? u.value > 0 : u.value === 0)), v = x(() => e.flat || i.value.fullyHide && !l.value || i.value.elevate && (i.value.inverted ? r.value > 0 : r.value === 0)), m = x(() => i.value.fadeImage ? i.value.inverted ? 1 - u.value : u.value : void 0), b = x(() => {
      var p, V;
      if (i.value.hide && i.value.inverted) return 0;
      const g = ((p = a.value) == null ? void 0 : p.contentHeight) ?? 0, k = ((V = a.value) == null ? void 0 : V.extensionHeight) ?? 0;
      return d.value ? r.value < s.value || i.value.fullyHide ? g + k : g : g + k;
    });
    Ue(() => !!e.scrollBehavior, () => {
      _e(() => {
        d.value ? i.value.inverted ? l.value = r.value > s.value : l.value = c.value || r.value < s.value : l.value = !0;
      });
    });
    const {
      ssrBootStyles: y
    } = An(), {
      layoutItemStyles: h
    } = _o({
      id: e.name,
      order: x(() => parseInt(e.order, 10)),
      position: T(() => e.location),
      layoutSize: b,
      elementSize: G(void 0),
      active: l,
      absolute: T(() => e.absolute)
    });
    return ee(() => {
      const g = Oi.filterProps(e);
      return S(Oi, j({
        ref: a,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }, e.class],
        style: [{
          ...h.value,
          "--v-toolbar-image-opacity": m.value,
          height: void 0,
          ...y.value
        }, e.style]
      }, g, {
        collapse: f.value,
        flat: v.value
      }), n);
    }), {};
  }
}), Vf = O({
  ...Xe(Sl({
    icon: "$menu",
    variant: "text"
  }), ["spaced"])
}, "VAppBarNavIcon"), Qm = U()({
  name: "VAppBarNavIcon",
  props: Vf(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => S(et, j(e, {
      class: ["v-app-bar-nav-icon"]
    }), n)), {};
  }
}), Jm = U()({
  name: "VAppBarTitle",
  props: mr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => S(gr, j(e, {
      class: "v-app-bar-title"
    }), n)), {};
  }
}), Pf = O({
  scrollable: Boolean,
  ...oe(),
  ...st(),
  ...ge({
    tag: "main"
  })
}, "VMain"), eg = U()({
  name: "VMain",
  props: Pf(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      dimensionStyles: a
    } = ut(e), {
      mainStyles: l
    } = To(), {
      ssrBootStyles: i
    } = An();
    return ee(() => S(e.tag, {
      class: X(["v-main", {
        "v-main--scrollable": e.scrollable
      }, e.class]),
      style: re([l.value, i.value, a.value, e.style])
    }, {
      default: () => {
        var o, r;
        return [e.scrollable ? C("div", {
          class: "v-main__scroller"
        }, [(o = n.default) == null ? void 0 : o.call(n)]) : (r = n.default) == null ? void 0 : r.call(n)];
      }
    })), {};
  }
});
function Da(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function If(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function $i(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: a
    } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, i = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return Da({
      x: l,
      y: i
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: a
    } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, i = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return Da({
      x: l,
      y: i
    }, t);
  }
  return Da({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const yr = {
  static: _f,
  // specific viewport position, usually centered
  connected: Bf
  // connected to a certain element
}, Af = O({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in yr
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array],
  stickToTarget: Boolean
}, "VOverlay-location-strategies");
function Tf(e, t) {
  const n = Y({}), a = Y();
  ye && Ue(() => !!(t.isActive.value && e.locationStrategy), (r) => {
    var s, c;
    J(() => e.locationStrategy, r), Ee(() => {
      window.removeEventListener("resize", l), visualViewport == null || visualViewport.removeEventListener("resize", i), visualViewport == null || visualViewport.removeEventListener("scroll", o), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), visualViewport == null || visualViewport.addEventListener("resize", i, {
      passive: !0
    }), visualViewport == null || visualViewport.addEventListener("scroll", o, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = (s = e.locationStrategy(t, e, n)) == null ? void 0 : s.updateLocation : a.value = (c = yr[e.locationStrategy](t, e, n)) == null ? void 0 : c.updateLocation;
  });
  function l(r) {
    var s;
    (s = a.value) == null || s.call(a, r);
  }
  function i(r) {
    var s;
    (s = a.value) == null || s.call(a, r);
  }
  function o(r) {
    var s;
    (s = a.value) == null || s.call(a, r);
  }
  return {
    contentStyles: n,
    updateLocation: a
  };
}
function _f() {
}
function Ef(e, t) {
  const n = ul(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function Bf(e, t, n) {
  (Array.isArray(e.target.value) || Xu(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = ol(() => {
    const h = za(t.location, e.isRtl.value), g = t.origin === "overlap" ? h : t.origin === "auto" ? Ia(h) : za(t.origin, e.isRtl.value);
    return h.side === g.side && h.align === Aa(g).align ? {
      preferredAnchor: Yl(h),
      preferredOrigin: Yl(g)
    } : {
      preferredAnchor: h,
      preferredOrigin: g
    };
  }), [o, r, s, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((h) => x(() => {
    const g = parseFloat(t[h]);
    return isNaN(g) ? 1 / 0 : g;
  })), u = x(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const h = t.offset.split(" ").map(parseFloat);
      return h.length < 2 && h.push(0), h;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let d = !1, f = -1;
  const v = new no(4), m = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((g) => {
      g !== f && v.clear(), requestAnimationFrame((k) => {
        f = k;
      });
    }), v.isFull) {
      const g = v.values();
      if (ze(g.at(-1), g.at(-3)) && !ze(g.at(-1), g.at(-2)))
        return;
    }
    const h = y();
    h && v.push(h.flipped);
  });
  let b = new ht({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  J(e.target, (h, g) => {
    g && !Array.isArray(g) && m.unobserve(g), Array.isArray(h) ? ze(h, g) || y() : h && m.observe(h);
  }, {
    immediate: !0
  }), J(e.contentEl, (h, g) => {
    g && m.unobserve(g), h && m.observe(h);
  }, {
    immediate: !0
  }), Ee(() => {
    m.disconnect();
  });
  function y() {
    if (d = !1, requestAnimationFrame(() => d = !0), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (b = oo(e.target.value));
    const h = Ef(e.contentEl.value, e.isRtl.value), g = Gn(e.contentEl.value), k = 12;
    g.length || (g.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const p = g.reduce((F, $) => {
      const R = bu($);
      return F ? new ht({
        x: Math.max(F.left, R.left),
        y: Math.max(F.top, R.top),
        width: Math.min(F.right, R.right) - Math.max(F.left, R.left),
        height: Math.min(F.bottom, R.bottom) - Math.max(F.top, R.top)
      }) : R;
    }, void 0);
    p.x += k, p.y += k, p.width -= k * 2, p.height -= k * 2;
    let V = {
      anchor: l.value,
      origin: i.value
    };
    function A(F) {
      const $ = new ht(h), R = $i(F.anchor, b), W = $i(F.origin, $);
      let {
        x: K,
        y: te
      } = If(R, W);
      switch (F.anchor.side) {
        case "top":
          te -= u.value[0];
          break;
        case "bottom":
          te += u.value[0];
          break;
        case "left":
          K -= u.value[0];
          break;
        case "right":
          K += u.value[0];
          break;
      }
      switch (F.anchor.align) {
        case "top":
          te -= u.value[1];
          break;
        case "bottom":
          te += u.value[1];
          break;
        case "left":
          K -= u.value[1];
          break;
        case "right":
          K += u.value[1];
          break;
      }
      return $.x += K, $.y += te, $.width = Math.min($.width, s.value), $.height = Math.min($.height, c.value), {
        overflows: Xl($, p),
        x: K,
        y: te
      };
    }
    let P = 0, w = 0;
    const E = {
      x: 0,
      y: 0
    }, I = {
      x: !1,
      y: !1
    };
    let _ = -1;
    for (; ; ) {
      if (_++ > 10) {
        cn("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: F,
        y: $,
        overflows: R
      } = A(V);
      P += F, w += $, h.x += F, h.y += $;
      {
        const W = Kl(V.anchor), K = R.x.before || R.x.after, te = R.y.before || R.y.after;
        let le = !1;
        if (["x", "y"].forEach((L) => {
          if (L === "x" && K && !I.x || L === "y" && te && !I.y) {
            const Z = {
              anchor: {
                ...V.anchor
              },
              origin: {
                ...V.origin
              }
            }, M = L === "x" ? W === "y" ? Aa : Ia : W === "y" ? Ia : Aa;
            Z.anchor = M(Z.anchor), Z.origin = M(Z.origin);
            const {
              overflows: B
            } = A(Z);
            (B[L].before <= R[L].before && B[L].after <= R[L].after || B[L].before + B[L].after < (R[L].before + R[L].after) / 2) && (V = Z, le = I[L] = !0);
          }
        }), le) continue;
      }
      R.x.before && (t.stickToTarget || (P += R.x.before), h.x += R.x.before), R.x.after && (t.stickToTarget || (P -= R.x.after), h.x -= R.x.after), R.y.before && (t.stickToTarget || (w += R.y.before), h.y += R.y.before), R.y.after && (t.stickToTarget || (w -= R.y.after), h.y -= R.y.after);
      {
        const W = Xl(h, p);
        E.x = p.width - W.x.before - W.x.after, E.y = p.height - W.y.before - W.y.after, t.stickToTarget || (P += W.x.before), h.x += W.x.before, t.stickToTarget || (w += W.y.before), h.y += W.y.before;
      }
      break;
    }
    const D = Kl(V.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${V.anchor.side} ${V.anchor.align}`,
      transformOrigin: `${V.origin.side} ${V.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: Q(Fa(w)),
      left: e.isRtl.value ? void 0 : Q(Fa(P)),
      right: e.isRtl.value ? Q(Fa(-P)) : void 0,
      minWidth: Q(D === "y" ? Math.min(o.value, b.width) : o.value),
      maxWidth: Q(Li(Fe(E.x, o.value === 1 / 0 ? 0 : o.value, s.value))),
      maxHeight: Q(Li(Fe(E.y, r.value === 1 / 0 ? 0 : r.value, c.value)))
    }), {
      available: E,
      contentBox: h,
      flipped: I
    };
  }
  return J(() => [l.value, i.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => y()), Ce(() => {
    const h = y();
    if (!h) return;
    const {
      available: g,
      contentBox: k
    } = h;
    k.height > g.y && requestAnimationFrame(() => {
      y(), requestAnimationFrame(() => {
        y();
      });
    });
  }), {
    updateLocation: y
  };
}
function Fa(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Li(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let qa = !0;
const Zn = [];
function Df(e) {
  !qa || Zn.length ? (Zn.push(e), Za()) : (qa = !1, e(), Za());
}
let Mi = -1;
function Za() {
  cancelAnimationFrame(Mi), Mi = requestAnimationFrame(() => {
    const e = Zn.shift();
    e && e(), Zn.length ? Za() : qa = !0;
  });
}
const Rn = {
  none: null,
  close: $f,
  block: Lf,
  reposition: Mf
}, Ff = O({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Rn
  }
}, "VOverlay-scroll-strategies");
function Of(e, t) {
  if (!ye) return;
  let n;
  _e(async () => {
    n == null || n.stop(), t.isActive.value && e.scrollStrategy && (n = sn(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (a = Rn[e.scrollStrategy]) == null || a.call(Rn, t, e, n);
    }));
  }), Ee(() => {
    n == null || n.stop();
  });
}
function $f(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  br(Cl(e.target.value, e.contentEl.value), t);
}
function Lf(e, t) {
  var r;
  const n = (r = e.root.value) == null ? void 0 : r.offsetParent, a = Cl(e.target.value, e.contentEl.value), l = [.../* @__PURE__ */ new Set([...Gn(a, t.contained ? n : void 0), ...Gn(e.contentEl.value, t.contained ? n : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), i = window.innerWidth - document.documentElement.offsetWidth, o = ((s) => fl(s) && s)(n || document.documentElement);
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((s, c) => {
    s.style.setProperty("--v-body-scroll-x", Q(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", Q(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", Q(i)), s.classList.add("v-overlay-scroll-blocked");
  }), Ee(() => {
    l.forEach((s, c) => {
      const u = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(s.style.getPropertyValue("--v-body-scroll-y")), f = s.style.scrollBehavior;
      s.style.scrollBehavior = "auto", s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -u, s.scrollTop = -d, s.style.scrollBehavior = f;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Mf(e, t, n) {
  let a = !1, l = -1, i = -1;
  function o(r) {
    Df(() => {
      var u, d;
      const s = performance.now();
      (d = (u = e.updateLocation).value) == null || d.call(u, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      br(Cl(e.target.value, e.contentEl.value), (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            o(r);
          });
        })) : o(r);
      });
    });
  }), Ee(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function Cl(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t != null && t.contains(n))) : e ?? t;
}
function br(e, t) {
  const n = [document, ...Gn(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, {
      passive: !0
    });
  }), Ee(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const Qa = Symbol.for("vuetify:v-menu"), Rf = O({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...fr()
}, "VOverlay-activator");
function Nf(e, t) {
  let {
    isActive: n,
    isTop: a,
    contentEl: l
  } = t;
  const i = Ie("useActivator"), o = Y();
  let r = !1, s = !1, c = !0;
  const u = x(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = x(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !u.value), {
    runOpenDelay: f,
    runCloseDelay: v
  } = vr(e, (w) => {
    w === (e.openOnHover && r || u.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== w && (c = !0), n.value = w);
  }), m = Y(), b = {
    onClick: (w) => {
      w.stopPropagation(), o.value = w.currentTarget || w.target, n.value || (m.value = [w.clientX, w.clientY]), n.value = !n.value;
    },
    onMouseenter: (w) => {
      var E;
      (E = w.sourceCapabilities) != null && E.firesTouchEvents || (r = !0, o.value = w.currentTarget || w.target, f());
    },
    onMouseleave: (w) => {
      r = !1, v();
    },
    onFocus: (w) => {
      Xt(w.target, ":focus-visible") !== !1 && (s = !0, w.stopPropagation(), o.value = w.currentTarget || w.target, f());
    },
    onBlur: (w) => {
      s = !1, w.stopPropagation(), v();
    }
  }, y = x(() => {
    const w = {};
    return d.value && (w.onClick = b.onClick), e.openOnHover && (w.onMouseenter = b.onMouseenter, w.onMouseleave = b.onMouseleave), u.value && (w.onFocus = b.onFocus, w.onBlur = b.onBlur), w;
  }), h = x(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      r = !0, f();
    }, w.onMouseleave = () => {
      r = !1, v();
    }), u.value && (w.onFocusin = () => {
      s = !0, f();
    }, w.onFocusout = () => {
      s = !1, v();
    }), e.closeOnContentClick) {
      const E = he(Qa, null);
      w.onClick = () => {
        n.value = !1, E == null || E.closeParents();
      };
    }
    return w;
  }), g = x(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      c && (r = !0, c = !1, f());
    }, w.onMouseleave = () => {
      r = !1, v();
    }), w;
  });
  J(a, (w) => {
    var E;
    w && (e.openOnHover && !r && (!u.value || !s) || u.value && !s && (!e.openOnHover || !r)) && !((E = l.value) != null && E.contains(document.activeElement)) && (n.value = !1);
  }), J(n, (w) => {
    w || setTimeout(() => {
      m.value = void 0;
    });
  }, {
    flush: "post"
  });
  const k = Na();
  _e(() => {
    k.value && Ce(() => {
      o.value = k.el;
    });
  });
  const p = Na(), V = x(() => e.target === "cursor" && m.value ? m.value : p.value ? p.el : Sr(e.target, i) || o.value), A = x(() => Array.isArray(V.value) ? void 0 : V.value);
  let P;
  return J(() => !!e.activator, (w) => {
    w && ye ? (P = sn(), P.run(() => {
      Hf(e, i, {
        activatorEl: o,
        activatorEvents: y
      });
    })) : P && P.stop();
  }, {
    flush: "post",
    immediate: !0
  }), Ee(() => {
    P == null || P.stop();
  }), {
    activatorEl: o,
    activatorRef: k,
    target: V,
    targetEl: A,
    targetRef: p,
    activatorEvents: y,
    contentEvents: h,
    scrimEvents: g
  };
}
function Hf(e, t, n) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = n;
  J(() => e.activator, (s, c) => {
    if (c && s !== c) {
      const u = r(c);
      u && o(u);
    }
    s && Ce(() => i());
  }, {
    immediate: !0
  }), J(() => e.activatorProps, () => {
    i();
  }), Ee(() => {
    o();
  });
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Su(s, j(l.value, c));
  }
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && wu(s, j(l.value, c));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = Sr(s, t);
    return a.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, a.value;
  }
}
function Sr(e, t) {
  var a, l;
  if (!e) return;
  let n;
  if (e === "parent") {
    let i = (l = (a = t == null ? void 0 : t.proxy) == null ? void 0 : a.$el) == null ? void 0 : l.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    n = i;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
function zf() {
  if (!ye) return G(!1);
  const {
    ssr: e
  } = Tt();
  if (e) {
    const t = G(!1);
    return ct(() => {
      t.value = !0;
    }), t;
  } else
    return G(!0);
}
const wr = O({
  eager: Boolean
}, "lazy");
function xr(e, t) {
  const n = G(!1), a = T(() => n.value || e.eager || t.value);
  J(t, () => n.value = !0);
  function l() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: a,
    onAfterLeave: l
  };
}
const Ri = Symbol.for("vuetify:stack"), on = Ge([]);
function Wf(e, t, n) {
  const a = Ie("useStack"), l = !n, i = he(Ri, void 0), o = Ge({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Pe(Ri, o);
  const r = G(Number(We(t)));
  Ue(e, () => {
    var d;
    const u = (d = on.at(-1)) == null ? void 0 : d[1];
    r.value = u ? u + 10 : Number(We(t)), l && on.push([a.uid, r.value]), i == null || i.activeChildren.add(a.uid), Ee(() => {
      if (l) {
        const f = De(on).findIndex((v) => v[0] === a.uid);
        on.splice(f, 1);
      }
      i == null || i.activeChildren.delete(a.uid);
    });
  });
  const s = G(!0);
  l && _e(() => {
    var d;
    const u = ((d = on.at(-1)) == null ? void 0 : d[0]) === a.uid;
    setTimeout(() => s.value = u);
  });
  const c = T(() => !o.activeChildren.size);
  return {
    globalTop: sa(s),
    localTop: c,
    stackStyles: T(() => ({
      zIndex: r.value
    }))
  };
}
function jf(e) {
  return {
    teleportTarget: x(() => {
      const n = e();
      if (n === !0 || !ye) return;
      const a = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (a == null) {
        oa(`Unable to locate target ${n}`);
        return;
      }
      let l = [...a.children].find((i) => i.matches(".v-overlay-container"));
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function Gf() {
  return !0;
}
function kr(e, t, n) {
  if (!e || Cr(e, n) === !1) return !1;
  const a = mo(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((i) => i == null ? void 0 : i.contains(e.target));
}
function Cr(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || Gf)(e);
}
function Uf(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && kr(e, t, n) && setTimeout(() => {
    Cr(e, n) && a && a(e);
  }, 0);
}
function Ni(e, t) {
  const n = mo(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Hi = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (l) => Uf(l, e, t), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = kr(l, e, t);
    };
    Ni(e, (l) => {
      l.addEventListener("click", n, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: a
    };
  },
  beforeUnmount(e, t) {
    e._clickOutside && (Ni(e, (n) => {
      var i;
      if (!n || !((i = e._clickOutside) != null && i[t.instance.$.uid])) return;
      const {
        onClick: a,
        onMousedown: l
      } = e._clickOutside[t.instance.$.uid];
      n.removeEventListener("click", a, !0), n.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function Yf(e) {
  const {
    modelValue: t,
    color: n,
    ...a
  } = e;
  return S(Vt, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && C("div", j({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const pl = O({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...Rf(),
  ...oe(),
  ...st(),
  ...wr(),
  ...Af(),
  ...Ff(),
  ...we(),
  ...ln()
}, "VOverlay"), Qn = U()({
  name: "VOverlay",
  directives: {
    vClickOutside: Hi
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...pl()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    keydown: (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a,
      emit: l
    } = t;
    const i = Ie("VOverlay"), o = Y(), r = Y(), s = Y(), c = fe(e, "modelValue"), u = x({
      get: () => c.value,
      set: (N) => {
        N && e.disabled || (c.value = N);
      }
    }), {
      themeClasses: d
    } = Ae(e), {
      rtlClasses: f,
      isRtl: v
    } = qe(), {
      hasContent: m,
      onAfterLeave: b
    } = xr(e, u), y = Ye(() => typeof e.scrim == "string" ? e.scrim : null), {
      globalTop: h,
      localTop: g,
      stackStyles: k
    } = Wf(u, () => e.zIndex, e._disableGlobalStack), {
      activatorEl: p,
      activatorRef: V,
      target: A,
      targetEl: P,
      targetRef: w,
      activatorEvents: E,
      contentEvents: I,
      scrimEvents: _
    } = Nf(e, {
      isActive: u,
      isTop: g,
      contentEl: s
    }), {
      teleportTarget: D
    } = jf(() => {
      var ve, xe, ke;
      const N = e.attach || e.contained;
      if (N) return N;
      const q = ((ve = p == null ? void 0 : p.value) == null ? void 0 : ve.getRootNode()) || ((ke = (xe = i.proxy) == null ? void 0 : xe.$el) == null ? void 0 : ke.getRootNode());
      return q instanceof ShadowRoot ? q : !1;
    }), {
      dimensionStyles: F
    } = ut(e), $ = zf(), {
      scopeId: R
    } = _n();
    J(() => e.disabled, (N) => {
      N && (u.value = !1);
    });
    const {
      contentStyles: W,
      updateLocation: K
    } = Tf(e, {
      isRtl: v,
      contentEl: s,
      target: A,
      isActive: u
    });
    Of(e, {
      root: o,
      contentEl: s,
      targetEl: P,
      target: A,
      isActive: u,
      updateLocation: K
    });
    function te(N) {
      l("click:outside", N), e.persistent ? H() : u.value = !1;
    }
    function le(N) {
      return u.value && h.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || N.target === r.value || N instanceof MouseEvent && N.shadowTarget === r.value);
    }
    ye && J(u, (N) => {
      N ? window.addEventListener("keydown", L) : window.removeEventListener("keydown", L);
    }, {
      immediate: !0
    }), Ke(() => {
      ye && window.removeEventListener("keydown", L);
    });
    function L(N) {
      var q, ve, xe;
      N.key === "Escape" && h.value && ((q = s.value) != null && q.contains(document.activeElement) || l("keydown", N), e.persistent ? H() : (u.value = !1, (ve = s.value) != null && ve.contains(document.activeElement) && ((xe = p.value) == null || xe.focus())));
    }
    function Z(N) {
      N.key === "Escape" && !h.value || l("keydown", N);
    }
    const M = $o();
    Ue(() => e.closeOnBack, () => {
      Ad(M, (N) => {
        h.value && u.value ? (N(!1), e.persistent ? H() : u.value = !1) : N();
      });
    });
    const B = Y();
    J(() => u.value && (e.absolute || e.contained) && D.value == null, (N) => {
      if (N) {
        const q = go(o.value);
        q && q !== document.scrollingElement && (B.value = q.scrollTop);
      }
    });
    function H() {
      e.noClickAnimation || s.value && xt(s.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: fn
      });
    }
    function ie() {
      l("afterEnter");
    }
    function ue() {
      b(), l("afterLeave");
    }
    return ee(() => {
      var N;
      return C(ce, null, [(N = n.activator) == null ? void 0 : N.call(n, {
        isActive: u.value,
        targetRef: w,
        props: j({
          ref: V
        }, E.value, e.activatorProps)
      }), $.value && m.value && S(nu, {
        disabled: !D.value,
        to: D.value
      }, {
        default: () => [C("div", j({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": u.value,
            "v-overlay--contained": e.contained
          }, d.value, f.value, e.class],
          style: [k.value, {
            "--v-overlay-opacity": e.opacity,
            top: Q(B.value)
          }, e.style],
          ref: o,
          onKeydown: Z
        }, R, a), [S(Yf, j({
          color: y,
          modelValue: u.value && !!e.scrim,
          ref: r
        }, _.value), null), S(kt, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: A.value,
          onAfterEnter: ie,
          onAfterLeave: ue
        }, {
          default: () => {
            var q;
            return [Le(C("div", j({
              ref: s,
              class: ["v-overlay__content", e.contentClass],
              style: [F.value, W.value]
            }, I.value, e.contentProps), [(q = n.default) == null ? void 0 : q.call(n, {
              isActive: u
            })]), [[Mt, u.value], [Hi, {
              handler: te,
              closeConditional: le,
              include: () => [p.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: p,
      scrimEl: r,
      target: A,
      animateClick: H,
      contentEl: s,
      globalTop: h,
      localTop: g,
      updateLocation: K
    };
  }
}), Oa = Symbol("Forwarded refs");
function $a(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function pt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return e[Oa] = n, new Proxy(e, {
    get(l, i) {
      if (Reflect.has(l, i))
        return Reflect.get(l, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const o of n)
          if (o.value && Reflect.has(o.value, i)) {
            const r = Reflect.get(o.value, i);
            return typeof r == "function" ? r.bind(o.value) : r;
          }
      }
    },
    has(l, i) {
      if (Reflect.has(l, i))
        return !0;
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const o of n)
        if (o.value && Reflect.has(o.value, i))
          return !0;
      return !1;
    },
    set(l, i, o) {
      if (Reflect.has(l, i))
        return Reflect.set(l, i, o);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const r of n)
        if (r.value && Reflect.has(r.value, i))
          return Reflect.set(r.value, i, o);
      return !1;
    },
    getOwnPropertyDescriptor(l, i) {
      var r;
      const o = Reflect.getOwnPropertyDescriptor(l, i);
      if (o) return o;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const s of n) {
          if (!s.value) continue;
          const c = $a(s.value, i) ?? ("_" in s.value ? $a((r = s.value._) == null ? void 0 : r.setupState, i) : void 0);
          if (c) return c;
        }
        for (const s of n) {
          const c = s.value && s.value[Oa];
          if (!c) continue;
          const u = c.slice();
          for (; u.length; ) {
            const d = u.shift(), f = $a(d.value, i);
            if (f) return f;
            const v = d.value && d.value[Oa];
            v && u.push(...v);
          }
        }
      }
    }
  });
}
function Kf(e) {
  const t = G(e());
  let n = -1;
  function a() {
    clearInterval(n);
  }
  function l() {
    a(), Ce(() => t.value = e());
  }
  function i(o) {
    const r = o ? getComputedStyle(o) : {
      transitionDuration: 0.2
    }, s = parseFloat(r.transitionDuration) * 1e3 || 200;
    if (a(), t.value <= 0) return;
    const c = performance.now();
    n = window.setInterval(() => {
      const u = performance.now() - c + s;
      t.value = Math.max(e() - u, 0), t.value <= 0 && a();
    }, s);
  }
  return Ee(a), {
    clear: a,
    time: t,
    start: i,
    reset: l
  };
}
const Xf = O({
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ...an({
    location: "bottom"
  }),
  ...Pn(),
  ...He(),
  ...mt(),
  ...we(),
  ...Xe(pl({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy", "stickToTarget"])
}, "VSnackbar"), tg = U()({
  name: "VSnackbar",
  props: Xf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = fe(e, "modelValue"), {
      positionClasses: l
    } = In(e), {
      scopeId: i
    } = _n(), {
      themeClasses: o
    } = Ae(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: c
    } = Nt(e), {
      roundedClasses: u
    } = je(e), d = Kf(() => Number(e.timeout)), f = Y(), v = Y(), m = G(!1), b = G(0), y = Y(), h = he(hn, void 0);
    Ue(() => !!h, () => {
      const _ = To();
      _e(() => {
        y.value = _.mainStyles.value;
      });
    }), J(a, k), J(() => e.timeout, k), ct(() => {
      a.value && k();
    });
    let g = -1;
    function k() {
      d.reset(), window.clearTimeout(g);
      const _ = Number(e.timeout);
      if (!a.value || _ === -1) return;
      const D = ll(v.value);
      d.start(D), g = window.setTimeout(() => {
        a.value = !1;
      }, _);
    }
    function p() {
      d.reset(), window.clearTimeout(g);
    }
    function V() {
      m.value = !0, p();
    }
    function A() {
      m.value = !1, k();
    }
    function P(_) {
      b.value = _.touches[0].clientY;
    }
    function w(_) {
      Math.abs(b.value - _.changedTouches[0].clientY) > 50 && (a.value = !1);
    }
    function E() {
      m.value && A();
    }
    const I = x(() => e.location.split(" ").reduce((_, D) => (_[`v-snackbar--${D}`] = !0, _), {}));
    return ee(() => {
      const _ = Qn.filterProps(e), D = !!(n.default || n.text || e.text);
      return S(Qn, j({
        ref: f,
        class: ["v-snackbar", {
          "v-snackbar--active": a.value,
          "v-snackbar--multi-line": e.multiLine && !e.vertical,
          "v-snackbar--timer": !!e.timer,
          "v-snackbar--vertical": e.vertical
        }, I.value, l.value, e.class],
        style: [y.value, e.style]
      }, _, {
        modelValue: a.value,
        "onUpdate:modelValue": (F) => a.value = F,
        contentProps: j({
          class: ["v-snackbar__wrapper", o.value, r.value, u.value, c.value],
          style: [s.value],
          onPointerenter: V,
          onPointerleave: A
        }, _.contentProps),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: "none",
        _disableGlobalStack: !0,
        onTouchstartPassive: P,
        onTouchend: w,
        onAfterLeave: E
      }, i), {
        default: () => {
          var F, $;
          return [Rt(!1, "v-snackbar"), e.timer && !m.value && C("div", {
            key: "timer",
            class: "v-snackbar__timer"
          }, [S(Oo, {
            ref: v,
            color: typeof e.timer == "string" ? e.timer : "info",
            max: e.timeout,
            modelValue: d.time.value
          }, null)]), D && C("div", {
            key: "content",
            class: "v-snackbar__content",
            role: "status",
            "aria-live": "polite"
          }, [((F = n.text) == null ? void 0 : F.call(n)) ?? e.text, ($ = n.default) == null ? void 0 : $.call(n)]), n.actions && S(Se, {
            defaults: {
              VBtn: {
                variant: "text",
                ripple: !1,
                slim: !0
              }
            }
          }, {
            default: () => [C("div", {
              class: "v-snackbar__actions"
            }, [n.actions({
              isActive: a
            })])]
          })];
        },
        activator: n.activator
      });
    }), pt({}, f);
  }
}), Vl = Symbol.for("vuetify:v-tabs"), pr = O({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...Xe(Sl({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab"), qf = U()({
  name: "VTab",
  props: pr(),
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    const {
      textColorClasses: l,
      textColorStyles: i
    } = it(() => e.sliderColor), o = Y(), r = Y(), s = x(() => e.direction === "horizontal"), c = x(() => {
      var d, f;
      return ((f = (d = o.value) == null ? void 0 : d.group) == null ? void 0 : f.isSelected.value) ?? !1;
    });
    function u(d) {
      var v, m;
      let {
        value: f
      } = d;
      if (f) {
        const b = (m = (v = o.value) == null ? void 0 : v.$el.parentElement) == null ? void 0 : m.querySelector(".v-tab--selected .v-tab__slider"), y = r.value;
        if (!b || !y) return;
        const h = getComputedStyle(b).color, g = b.getBoundingClientRect(), k = y.getBoundingClientRect(), p = s.value ? "x" : "y", V = s.value ? "X" : "Y", A = s.value ? "right" : "bottom", P = s.value ? "width" : "height", w = g[p], E = k[p], I = w > E ? g[A] - k[A] : g[p] - k[p], _ = Math.sign(I) > 0 ? s.value ? "right" : "bottom" : Math.sign(I) < 0 ? s.value ? "left" : "top" : "center", F = (Math.abs(I) + (Math.sign(I) < 0 ? g[P] : k[P])) / Math.max(g[P], k[P]) || 0, $ = g[P] / k[P] || 0, R = 1.5;
        xt(y, {
          backgroundColor: [h, "currentcolor"],
          transform: [`translate${V}(${I}px) scale${V}(${$})`, `translate${V}(${I / R}px) scale${V}(${(F - 1) / R + 1})`, "none"],
          transformOrigin: Array(3).fill(_)
        }, {
          duration: 225,
          easing: fn
        });
      }
    }
    return ee(() => {
      const d = et.filterProps(e);
      return S(et, j({
        symbol: Vl,
        ref: o,
        class: ["v-tab", e.class],
        style: e.style,
        tabindex: c.value ? 0 : -1,
        role: "tab",
        "aria-selected": String(c.value),
        active: !1
      }, d, a, {
        block: e.fixed,
        maxWidth: e.fixed ? 300 : void 0,
        "onGroup:selected": u
      }), {
        ...n,
        default: () => {
          var f;
          return C(ce, null, [((f = n.default) == null ? void 0 : f.call(n)) ?? e.text, !e.hideSlider && C("div", {
            ref: r,
            class: X(["v-tab__slider", l.value]),
            style: re(i.value)
          }, null)]);
        }
      });
    }), pt({}, o);
  }
}), Zf = (e) => {
  const {
    touchstartX: t,
    touchendX: n,
    touchstartY: a,
    touchendY: l
  } = e, i = 0.5, o = 16;
  e.offsetX = n - t, e.offsetY = l - a, Math.abs(e.offsetY) < i * Math.abs(e.offsetX) && (e.left && n < t - o && e.left(e), e.right && n > t + o && e.right(e)), Math.abs(e.offsetX) < i * Math.abs(e.offsetY) && (e.up && l < a - o && e.up(e), e.down && l > a + o && e.down(e));
};
function Qf(e, t) {
  var a;
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, (a = t.start) == null || a.call(t, {
    originalEvent: e,
    ...t
  });
}
function Jf(e, t) {
  var a;
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, (a = t.end) == null || a.call(t, {
    originalEvent: e,
    ...t
  }), Zf(t);
}
function ev(e, t) {
  var a;
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, (a = t.move) == null || a.call(t, {
    originalEvent: e,
    ...t
  });
}
function tv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end
  };
  return {
    touchstart: (n) => Qf(n, t),
    touchend: (n) => Jf(n, t),
    touchmove: (n) => ev(n, t)
  };
}
function nv(e, t) {
  var r;
  const n = t.value, a = n != null && n.parent ? e.parentElement : e, l = (n == null ? void 0 : n.options) ?? {
    passive: !0
  }, i = (r = t.instance) == null ? void 0 : r.$.uid;
  if (!a || i === void 0) return;
  const o = tv(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[i] = o, Ji(o).forEach((s) => {
    a.addEventListener(s, o[s], l);
  });
}
function av(e, t) {
  var i, o;
  const n = (i = t.value) != null && i.parent ? e.parentElement : e, a = (o = t.instance) == null ? void 0 : o.$.uid;
  if (!(n != null && n._touchHandlers) || a === void 0) return;
  const l = n._touchHandlers[a];
  Ji(l).forEach((r) => {
    n.removeEventListener(r, l[r]);
  }), delete n._touchHandlers[a];
}
const Ja = {
  mounted: nv,
  unmounted: av
}, Vr = Symbol.for("vuetify:v-window"), Pr = Symbol.for("vuetify:v-window-group"), Ir = O({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || e === "hover"
  },
  verticalArrows: [Boolean, String],
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  crossfade: Boolean,
  transitionDuration: Number,
  ...oe(),
  ...ge(),
  ...we()
}, "VWindow"), zi = U()({
  name: "VWindow",
  directives: {
    vTouch: Ja
  },
  props: Ir(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Ae(e), {
      isRtl: l
    } = qe(), {
      t: i
    } = ot(), o = ha(e, Pr), r = Y(), s = x(() => l.value ? !e.reverse : e.reverse), c = G(!1), u = x(() => {
      if (e.crossfade)
        return "v-window-crossfade-transition";
      const p = e.direction === "vertical" ? "y" : "x", A = (s.value ? !c.value : c.value) ? "-reverse" : "";
      return `v-window-${p}${A}-transition`;
    }), d = G(0), f = Y(void 0), v = x(() => o.items.value.findIndex((p) => o.selected.value.includes(p.id)));
    J(v, (p, V) => {
      const A = o.items.value.length, P = A - 1;
      A <= 2 ? c.value = p < V : p === P && V === 0 ? c.value = !0 : p === 0 && V === P ? c.value = !1 : c.value = p < V;
    }), Pe(Vr, {
      transition: u,
      isReversed: c,
      transitionCount: d,
      transitionHeight: f,
      rootRef: r
    });
    const m = T(() => e.continuous || v.value !== 0), b = T(() => e.continuous || v.value !== o.items.value.length - 1);
    function y() {
      m.value && o.prev();
    }
    function h() {
      b.value && o.next();
    }
    const g = x(() => {
      const p = [], V = {
        icon: l.value ? e.nextIcon : e.prevIcon,
        class: `v-window__${s.value ? "right" : "left"}`,
        onClick: o.prev,
        "aria-label": i("$vuetify.carousel.prev")
      };
      p.push(m.value ? n.prev ? n.prev({
        props: V
      }) : S(et, V, null) : C("div", null, null));
      const A = {
        icon: l.value ? e.prevIcon : e.nextIcon,
        class: `v-window__${s.value ? "left" : "right"}`,
        onClick: o.next,
        "aria-label": i("$vuetify.carousel.next")
      };
      return p.push(b.value ? n.next ? n.next({
        props: A
      }) : S(et, A, null) : C("div", null, null)), p;
    }), k = x(() => e.touch === !1 ? e.touch : {
      ...{
        left: () => {
          s.value ? y() : h();
        },
        right: () => {
          s.value ? h() : y();
        },
        start: (V) => {
          let {
            originalEvent: A
          } = V;
          A.stopPropagation();
        }
      },
      ...e.touch === !0 ? {} : e.touch
    });
    return ee(() => Le(S(e.tag, {
      ref: r,
      class: X(["v-window", {
        "v-window--show-arrows-on-hover": e.showArrows === "hover",
        "v-window--vertical-arrows": !!e.verticalArrows,
        "v-window--crossfade": !!e.crossfade
      }, a.value, e.class]),
      style: re([e.style, e.transitionDuration && !Kt ? {
        "--v-window-transition-duration": Q(e.transitionDuration, "ms")
      } : void 0])
    }, {
      default: () => {
        var p, V;
        return [C("div", {
          class: "v-window__container",
          style: {
            height: f.value
          }
        }, [(p = n.default) == null ? void 0 : p.call(n, {
          group: o
        }), e.showArrows !== !1 && C("div", {
          class: X(["v-window__controls", {
            "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === !0
          }, {
            "v-window__controls--right": e.verticalArrows === "right"
          }])
        }, [g.value])]), (V = n.additional) == null ? void 0 : V.call(n, {
          group: o
        })];
      }
    }), [[Ja, k.value]])), {
      group: o
    };
  }
}), lv = O({
  ...Xe(Ir(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow"), iv = U()({
  name: "VTabsWindow",
  props: lv(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = he(Vl, null), l = fe(e, "modelValue"), i = x({
      get() {
        var o;
        return l.value != null || !a ? l.value : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return ee(() => {
      const o = zi.filterProps(e);
      return S(zi, j({
        _as: "VTabsWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-tabs-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), n);
    }), {};
  }
}), Ar = O({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...oe(),
  ...ma(),
  ...wr()
}, "VWindowItem"), Wi = U()({
  name: "VWindowItem",
  directives: {
    vTouch: Ja
  },
  props: Ar(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = he(Vr), l = ga(e, Pr), {
      isBooted: i
    } = An();
    if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const o = G(!1), r = x(() => i.value && (a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1));
    function s() {
      !o.value || !a || (o.value = !1, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
    }
    function c() {
      var m;
      o.value || !a || (o.value = !0, a.transitionCount.value === 0 && (a.transitionHeight.value = Q((m = a.rootRef.value) == null ? void 0 : m.clientHeight)), a.transitionCount.value += 1);
    }
    function u() {
      s();
    }
    function d(m) {
      o.value && Ce(() => {
        !r.value || !o.value || !a || (a.transitionHeight.value = Q(m.clientHeight));
      });
    }
    const f = x(() => {
      const m = a.isReversed.value ? e.reverseTransition : e.transition;
      return r.value ? {
        name: typeof m != "string" ? a.transition.value : m,
        onBeforeEnter: c,
        onAfterEnter: s,
        onEnterCancelled: u,
        onBeforeLeave: c,
        onAfterLeave: s,
        onLeaveCancelled: u,
        onEnter: d
      } : !1;
    }), {
      hasContent: v
    } = xr(e, l.isSelected);
    return ee(() => S(kt, {
      transition: f.value,
      disabled: !i.value
    }, {
      default: () => {
        var m;
        return [Le(C("div", {
          class: X(["v-window-item", l.selectedClass.value, e.class]),
          style: re(e.style)
        }, [v.value && ((m = n.default) == null ? void 0 : m.call(n))]), [[Mt, l.isSelected.value]])];
      }
    })), {
      groupItem: l
    };
  }
}), ov = O({
  ...Ar()
}, "VTabsWindowItem"), rv = U()({
  name: "VTabsWindowItem",
  props: ov(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => {
      const a = Wi.filterProps(e);
      return S(Wi, j({
        _as: "VTabsWindowItem"
      }, a, {
        class: ["v-tabs-window-item", e.class],
        style: e.style
      }), n);
    }), {};
  }
});
function sv(e) {
  let {
    selectedElement: t,
    containerElement: n,
    isRtl: a,
    isHorizontal: l
  } = e;
  const i = wn(l, n), o = Tr(l, a, n), r = wn(l, t), s = _r(l, t), c = r * 0.4;
  return o > s ? s - c : o + i < s + r ? s - i + r + c : o;
}
function uv(e) {
  let {
    selectedElement: t,
    containerElement: n,
    isHorizontal: a
  } = e;
  const l = wn(a, n), i = _r(a, t), o = wn(a, t);
  return i - l / 2 + o / 2;
}
function ji(e, t) {
  const n = e ? "scrollWidth" : "scrollHeight";
  return (t == null ? void 0 : t[n]) || 0;
}
function cv(e, t) {
  const n = e ? "clientWidth" : "clientHeight";
  return (t == null ? void 0 : t[n]) || 0;
}
function Tr(e, t, n) {
  if (!n)
    return 0;
  const {
    scrollLeft: a,
    offsetWidth: l,
    scrollWidth: i
  } = n;
  return e ? t ? i - l + a : a : n.scrollTop;
}
function wn(e, t) {
  const n = e ? "offsetWidth" : "offsetHeight";
  return (t == null ? void 0 : t[n]) || 0;
}
function _r(e, t) {
  const n = e ? "offsetLeft" : "offsetTop";
  return (t == null ? void 0 : t[n]) || 0;
}
const Er = Symbol.for("vuetify:v-slide-group"), Pl = O({
  centerActive: Boolean,
  contentClass: null,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: Er
  },
  nextIcon: {
    type: se,
    default: "$next"
  },
  prevIcon: {
    type: se,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  },
  ...oe(),
  ...Cn({
    mobile: null
  }),
  ...ge(),
  ...yl({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), Jn = U()({
  name: "VSlideGroup",
  props: Pl(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isRtl: a
    } = qe(), {
      displayClasses: l,
      mobile: i
    } = Tt(e), o = ha(e, e.symbol), r = G(!1), s = G(0), c = G(0), u = G(0), d = x(() => e.direction === "horizontal"), {
      resizeRef: f,
      contentRect: v
    } = It(), {
      resizeRef: m,
      contentRect: b
    } = It(), y = Gc(), h = x(() => ({
      container: f.el,
      duration: 200,
      easing: "easeOutQuart"
    })), g = x(() => o.selected.value.length ? o.items.value.findIndex((M) => M.id === o.selected.value[0]) : -1), k = x(() => o.selected.value.length ? o.items.value.findIndex((M) => M.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (ye) {
      let M = -1;
      J(() => [o.selected.value, v.value, b.value, d.value], () => {
        cancelAnimationFrame(M), M = requestAnimationFrame(() => {
          if (v.value && b.value) {
            const B = d.value ? "width" : "height";
            c.value = v.value[B], u.value = b.value[B], r.value = c.value + 1 < u.value;
          }
          if (g.value >= 0 && m.el) {
            const B = m.el.children[k.value];
            V(B, e.centerActive);
          }
        });
      });
    }
    const p = G(!1);
    function V(M, B) {
      let H = 0;
      B ? H = uv({
        containerElement: f.el,
        isHorizontal: d.value,
        selectedElement: M
      }) : H = sv({
        containerElement: f.el,
        isHorizontal: d.value,
        isRtl: a.value,
        selectedElement: M
      }), A(H);
    }
    function A(M) {
      if (!ye || !f.el) return;
      const B = wn(d.value, f.el), H = Tr(d.value, a.value, f.el);
      if (!(ji(d.value, f.el) <= B || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(M - H) < 16)) {
        if (d.value && a.value && f.el) {
          const {
            scrollWidth: ue,
            offsetWidth: N
          } = f.el;
          M = ue - N - M;
        }
        d.value ? y.horizontal(M, h.value) : y(M, h.value);
      }
    }
    function P(M) {
      const {
        scrollTop: B,
        scrollLeft: H
      } = M.target;
      s.value = d.value ? H : B;
    }
    function w(M) {
      if (p.value = !0, !(!r.value || !m.el)) {
        for (const B of M.composedPath())
          for (const H of m.el.children)
            if (H === B) {
              V(H);
              return;
            }
      }
    }
    function E(M) {
      p.value = !1;
    }
    let I = !1;
    function _(M) {
      var B;
      !I && !p.value && !(M.relatedTarget && ((B = m.el) != null && B.contains(M.relatedTarget))) && R(), I = !1;
    }
    function D() {
      I = !0;
    }
    function F(M) {
      if (!m.el) return;
      function B(H) {
        M.preventDefault(), R(H);
      }
      d.value ? M.key === "ArrowRight" ? B(a.value ? "prev" : "next") : M.key === "ArrowLeft" && B(a.value ? "next" : "prev") : M.key === "ArrowDown" ? B("next") : M.key === "ArrowUp" && B("prev"), M.key === "Home" ? B("first") : M.key === "End" && B("last");
    }
    function $(M, B) {
      if (!M) return;
      let H = M;
      do
        H = H == null ? void 0 : H[B === "next" ? "nextElementSibling" : "previousElementSibling"];
      while (H != null && H.hasAttribute("disabled"));
      return H;
    }
    function R(M) {
      if (!m.el) return;
      let B;
      if (!M)
        B = zn(m.el)[0];
      else if (M === "next") {
        if (B = $(m.el.querySelector(":focus"), M), !B) return R("first");
      } else if (M === "prev") {
        if (B = $(m.el.querySelector(":focus"), M), !B) return R("last");
      } else M === "first" ? (B = m.el.firstElementChild, B != null && B.hasAttribute("disabled") && (B = $(B, "next"))) : M === "last" && (B = m.el.lastElementChild, B != null && B.hasAttribute("disabled") && (B = $(B, "prev")));
      B && B.focus({
        preventScroll: !0
      });
    }
    function W(M) {
      const B = d.value && a.value ? -1 : 1, H = (M === "prev" ? -B : B) * c.value;
      let ie = s.value + H;
      if (d.value && a.value && f.el) {
        const {
          scrollWidth: ue,
          offsetWidth: N
        } = f.el;
        ie += ue - N;
      }
      A(ie);
    }
    const K = x(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), te = x(() => r.value || Math.abs(s.value) > 0), le = x(() => {
      switch (e.showArrows) {
        case "always":
          return !0;
        case "desktop":
          return !i.value;
        case !0:
          return te.value;
        case "mobile":
          return i.value || te.value;
        default:
          return !i.value && te.value;
      }
    }), L = x(() => Math.abs(s.value) > 1), Z = x(() => {
      if (!f.value || !te.value) return !1;
      const M = ji(d.value, f.el), B = cv(d.value, f.el);
      return M - B - Math.abs(s.value) > 1;
    });
    return ee(() => S(e.tag, {
      class: X(["v-slide-group", {
        "v-slide-group--vertical": !d.value,
        "v-slide-group--has-affixes": le.value,
        "v-slide-group--is-overflowing": r.value
      }, l.value, e.class]),
      style: re(e.style),
      tabindex: p.value || o.selected.value.length ? -1 : 0,
      onFocus: _
    }, {
      default: () => {
        var M, B, H;
        return [le.value && C("div", {
          key: "prev",
          class: X(["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !L.value
          }]),
          onMousedown: D,
          onClick: () => L.value && W("prev")
        }, [((M = n.prev) == null ? void 0 : M.call(n, K.value)) ?? S(_i, null, {
          default: () => [S(Ve, {
            icon: a.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), C("div", {
          key: "container",
          ref: f,
          class: X(["v-slide-group__container", e.contentClass]),
          onScroll: P
        }, [C("div", {
          ref: m,
          class: "v-slide-group__content",
          onFocusin: w,
          onFocusout: E,
          onKeydown: F
        }, [(B = n.default) == null ? void 0 : B.call(n, K.value)])]), le.value && C("div", {
          key: "next",
          class: X(["v-slide-group__next", {
            "v-slide-group__next--disabled": !Z.value
          }]),
          onMousedown: D,
          onClick: () => Z.value && W("next")
        }, [((H = n.next) == null ? void 0 : H.call(n, K.value)) ?? S(_i, null, {
          default: () => [S(Ve, {
            icon: a.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: o.selected,
      scrollTo: W,
      scrollOffset: s,
      focus: R,
      hasPrev: L,
      hasNext: Z
    };
  }
});
function dv(e) {
  return e ? e.map((t) => un(t) ? t : {
    text: t,
    value: t
  }) : [];
}
const fv = O({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...Pt(pr(), ["spaced"]),
  ...Pl({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...Ze(),
  ...ge()
}, "VTabs"), ng = U()({
  name: "VTabs",
  props: fv(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = fe(e, "modelValue"), i = x(() => dv(e.items)), {
      densityClasses: o
    } = rt(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: s
    } = Ye(() => e.bgColor), {
      scopeId: c
    } = _n();
    return nt({
      VTab: {
        color: T(() => e.color),
        direction: T(() => e.direction),
        stacked: T(() => e.stacked),
        fixed: T(() => e.fixedTabs),
        sliderColor: T(() => e.sliderColor),
        hideSlider: T(() => e.hideSlider)
      }
    }), ee(() => {
      const u = Jn.filterProps(e), d = !!(a.window || e.items.length > 0);
      return C(ce, null, [S(Jn, j(u, {
        modelValue: l.value,
        "onUpdate:modelValue": (f) => l.value = f,
        class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, {
          "v-tabs--fixed-tabs": e.fixedTabs,
          "v-tabs--grow": e.grow,
          "v-tabs--stacked": e.stacked
        }, o.value, r.value, e.class],
        style: [{
          "--v-tabs-height": Q(e.height)
        }, s.value, e.style],
        role: "tablist",
        symbol: Vl
      }, c, n), {
        default: () => {
          var f;
          return [((f = a.default) == null ? void 0 : f.call(a)) ?? i.value.map((v) => {
            var m;
            return ((m = a.tab) == null ? void 0 : m.call(a, {
              item: v
            })) ?? S(qf, j(v, {
              key: v.text,
              value: v.value,
              spaced: e.spaced
            }), {
              default: a[`tab.${v.value}`] ? () => {
                var b;
                return (b = a[`tab.${v.value}`]) == null ? void 0 : b.call(a, {
                  item: v
                });
              } : void 0
            });
          })];
        }
      }), d && S(iv, j({
        modelValue: l.value,
        "onUpdate:modelValue": (f) => l.value = f,
        key: "tabs-window"
      }, c), {
        default: () => {
          var f;
          return [i.value.map((v) => {
            var m;
            return ((m = a.item) == null ? void 0 : m.call(a, {
              item: v
            })) ?? S(rv, {
              value: v.value
            }, {
              default: () => {
                var b;
                return (b = a[`item.${v.value}`]) == null ? void 0 : b.call(a, {
                  item: v
                });
              }
            });
          }), (f = a.window) == null ? void 0 : f.call(a)];
        }
      })]);
    }), {};
  }
}), vv = O({
  text: String,
  onClick: $e(),
  ...oe(),
  ...we()
}, "VLabel"), Br = U()({
  name: "VLabel",
  props: vv(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => {
      var a;
      return C("label", {
        class: X(["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class]),
        style: re(e.style),
        onClick: e.onClick
      }, [e.text, (a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
}), Dr = Symbol.for("vuetify:selection-control-group"), Fr = O({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: se,
  trueIcon: se,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: ze
  },
  ...oe(),
  ...Ze(),
  ...we()
}, "SelectionControlGroup"), mv = O({
  ...Fr({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
U()({
  name: "VSelectionControlGroup",
  props: mv(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = fe(e, "modelValue"), l = dt(), i = T(() => e.id || `v-selection-control-group-${l}`), o = T(() => e.name || i.value), r = /* @__PURE__ */ new Set();
    return Pe(Dr, {
      modelValue: a,
      forceUpdate: () => {
        r.forEach((s) => s());
      },
      onForceUpdate: (s) => {
        r.add(s), Ee(() => {
          r.delete(s);
        });
      }
    }), nt({
      [e.defaultsTarget]: {
        color: T(() => e.color),
        disabled: T(() => e.disabled),
        density: T(() => e.density),
        error: T(() => e.error),
        inline: T(() => e.inline),
        modelValue: a,
        multiple: T(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: o,
        falseIcon: T(() => e.falseIcon),
        trueIcon: T(() => e.trueIcon),
        readonly: T(() => e.readonly),
        ripple: T(() => e.ripple),
        type: T(() => e.type),
        valueComparator: T(() => e.valueComparator)
      }
    }), ee(() => {
      var s;
      return C("div", {
        class: X(["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class]),
        style: re(e.style),
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(s = n.default) == null ? void 0 : s.call(n)]);
    }), {};
  }
});
const Or = O({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...oe(),
  ...Fr()
}, "VSelectionControl");
function gv(e) {
  const t = he(Dr, void 0), {
    densityClasses: n
  } = rt(e), a = fe(e, "modelValue"), l = x(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = x(() => e.falseValue !== void 0 ? e.falseValue : !1), o = x(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = x({
    get() {
      const v = t ? t.modelValue.value : a.value;
      return o.value ? Oe(v).some((m) => e.valueComparator(m, l.value)) : e.valueComparator(v, l.value);
    },
    set(v) {
      if (e.readonly) return;
      const m = v ? l.value : i.value;
      let b = m;
      o.value && (b = v ? [...Oe(a.value), m] : Oe(a.value).filter((y) => !e.valueComparator(y, l.value))), t ? t.modelValue.value = b : a.value = b;
    }
  }), {
    textColorClasses: s,
    textColorStyles: c
  } = it(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  }), {
    backgroundColorClasses: u,
    backgroundColorStyles: d
  } = Ye(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor), f = x(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: t,
    densityClasses: n,
    trueValue: l,
    falseValue: i,
    model: r,
    textColorClasses: s,
    textColorStyles: c,
    backgroundColorClasses: u,
    backgroundColorStyles: d,
    icon: f
  };
}
const Gi = U()({
  name: "VSelectionControl",
  directives: {
    vRipple: Ct
  },
  inheritAttrs: !1,
  props: Or(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      group: l,
      densityClasses: i,
      icon: o,
      model: r,
      textColorClasses: s,
      textColorStyles: c,
      backgroundColorClasses: u,
      backgroundColorStyles: d,
      trueValue: f
    } = gv(e), v = dt(), m = G(!1), b = G(!1), y = Y(), h = T(() => e.id || `input-${v}`), g = T(() => !e.disabled && !e.readonly);
    l == null || l.onForceUpdate(() => {
      y.value && (y.value.checked = r.value);
    });
    function k(P) {
      g.value && (m.value = !0, Xt(P.target, ":focus-visible") !== !1 && (b.value = !0));
    }
    function p() {
      m.value = !1, b.value = !1;
    }
    function V(P) {
      P.stopPropagation();
    }
    function A(P) {
      if (!g.value) {
        y.value && (y.value.checked = r.value);
        return;
      }
      e.readonly && l && Ce(() => l.forceUpdate()), r.value = P.target.checked;
    }
    return ee(() => {
      var _, D;
      const P = a.label ? a.label({
        label: e.label,
        props: {
          for: h.value
        }
      }) : e.label, [w, E] = ca(n), I = C("input", j({
        ref: y,
        checked: r.value,
        disabled: !!e.disabled,
        id: h.value,
        onBlur: p,
        onFocus: k,
        onInput: A,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: f.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, E), null);
      return C("div", j({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": m.value,
          "v-selection-control--focus-visible": b.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, w, {
        style: e.style
      }), [C("div", {
        class: X(["v-selection-control__wrapper", s.value]),
        style: re(c.value)
      }, [(_ = a.default) == null ? void 0 : _.call(a, {
        backgroundColorClasses: u,
        backgroundColorStyles: d
      }), Le(C("div", {
        class: X(["v-selection-control__input"])
      }, [((D = a.input) == null ? void 0 : D.call(a, {
        model: r,
        textColorClasses: s,
        textColorStyles: c,
        backgroundColorClasses: u,
        backgroundColorStyles: d,
        inputNode: I,
        icon: o.value,
        props: {
          onFocus: k,
          onBlur: p,
          id: h.value
        }
      })) ?? C(ce, null, [o.value && S(Ve, {
        key: "icon",
        icon: o.value
      }, null), I])]), [[Ct, !e.disabled && !e.readonly && e.ripple, null, {
        center: !0,
        circle: !0
      }]])]), P && S(Br, {
        for: h.value,
        onClick: V
      }, {
        default: () => [P]
      })]);
    }), {
      isFocused: m,
      input: y
    };
  }
}), $r = O({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: se,
    default: "$checkboxIndeterminate"
  },
  ...Or({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), $t = U()({
  name: "VCheckboxBtn",
  props: $r(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = fe(e, "indeterminate"), l = fe(e, "modelValue");
    function i(s) {
      a.value && (a.value = !1);
    }
    const o = T(() => a.value ? e.indeterminateIcon : e.falseIcon), r = T(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return ee(() => {
      const s = Xe(Gi.filterProps(e), ["modelValue"]);
      return S(Gi, j(s, {
        modelValue: l.value,
        "onUpdate:modelValue": [(c) => l.value = c, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: o.value,
        trueIcon: r.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), n);
    }), {};
  }
});
function Lr(e) {
  const {
    t
  } = ot();
  function n(a) {
    let {
      name: l,
      color: i,
      ...o
    } = a;
    const r = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], s = e[`onClick:${l}`];
    function c(d) {
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), rl(s, new PointerEvent("click", d)));
    }
    const u = s && r ? t(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return S(Ve, j({
      icon: e[`${l}Icon`],
      "aria-label": u,
      onClick: s,
      onKeydown: c,
      color: i
    }, o), null);
  }
  return {
    InputIcon: n
  };
}
const hv = O({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...oe(),
  ...ln({
    transition: {
      component: Yo,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), yv = U()({
  name: "VMessages",
  props: hv(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = x(() => Oe(e.messages)), {
      textColorClasses: l,
      textColorStyles: i
    } = it(() => e.color);
    return ee(() => S(kt, {
      transition: e.transition,
      tag: "div",
      class: X(["v-messages", l.value, e.class]),
      style: re([i.value, e.style])
    }, {
      default: () => [e.active && a.value.map((o, r) => C("div", {
        class: "v-messages__message",
        key: `${r}-${a.value}`
      }, [n.message ? n.message({
        message: o
      }) : o]))]
    })), {};
  }
}), Mr = O({
  focused: Boolean,
  "onUpdate:focused": $e()
}, "focus");
function ka(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  const n = fe(e, "focused"), a = T(() => ({
    [`${t}--focused`]: n.value
  }));
  function l() {
    n.value = !0;
  }
  function i() {
    n.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: n,
    focus: l,
    blur: i
  };
}
const Rr = Symbol.for("vuetify:form"), bv = O({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function Sv(e) {
  const t = fe(e, "modelValue"), n = T(() => e.disabled), a = T(() => e.readonly), l = G(!1), i = Y([]), o = Y([]);
  async function r() {
    const u = [];
    let d = !0;
    o.value = [], l.value = !0;
    for (const f of i.value) {
      const v = await f.validate();
      if (v.length > 0 && (d = !1, u.push({
        id: f.id,
        errorMessages: v
      })), !d && e.fastFail) break;
    }
    return o.value = u, l.value = !1, {
      valid: d,
      errors: o.value
    };
  }
  function s() {
    i.value.forEach((u) => u.reset());
  }
  function c() {
    i.value.forEach((u) => u.resetValidation());
  }
  return J(i, () => {
    let u = 0, d = 0;
    const f = [];
    for (const v of i.value)
      v.isValid === !1 ? (d++, f.push({
        id: v.id,
        errorMessages: v.errorMessages
      })) : v.isValid === !0 && u++;
    o.value = f, t.value = d > 0 ? !1 : u === i.value.length ? !0 : null;
  }, {
    deep: !0,
    flush: "post"
  }), Pe(Rr, {
    register: (u) => {
      let {
        id: d,
        vm: f,
        validate: v,
        reset: m,
        resetValidation: b
      } = u;
      i.value.some((y) => y.id === d) && tt(`Duplicate input name "${d}"`), i.value.push({
        id: d,
        validate: v,
        reset: m,
        resetValidation: b,
        vm: au(f),
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (u) => {
      i.value = i.value.filter((d) => d.id !== u);
    },
    update: (u, d, f) => {
      const v = i.value.find((m) => m.id === u);
      v && (v.isValid = d, v.errorMessages = f);
    },
    isDisabled: n,
    isReadonly: a,
    isValidating: l,
    isValid: t,
    items: i,
    validateOn: T(() => e.validateOn)
  }), {
    errors: o,
    isDisabled: n,
    isReadonly: a,
    isValidating: l,
    isValid: t,
    items: i,
    validate: r,
    reset: s,
    resetValidation: c
  };
}
function Il(e) {
  const t = he(Rr, null);
  return {
    ...t,
    isReadonly: x(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))),
    isDisabled: x(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value)))
  };
}
const wv = Symbol.for("vuetify:rules");
function xv(e) {
  const t = he(wv, null);
  if (!e) {
    if (!t)
      throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return (t == null ? void 0 : t.resolve(e)) ?? T(e);
}
const kv = O({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...Mr()
}, "validation");
function Cv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : dt();
  const a = fe(e, "modelValue"), l = x(() => e.validationValue === void 0 ? a.value : e.validationValue), i = Il(e), o = xv(() => e.rules), r = Y([]), s = G(!0), c = x(() => !!(Oe(a.value === "" ? null : a.value).length || Oe(l.value === "" ? null : l.value).length)), u = x(() => {
    var p;
    return (p = e.errorMessages) != null && p.length ? Oe(e.errorMessages).concat(r.value).slice(0, Math.max(0, Number(e.maxErrors))) : r.value;
  }), d = x(() => {
    var A;
    let p = (e.validateOn ?? ((A = i.validateOn) == null ? void 0 : A.value)) || "input";
    p === "lazy" && (p = "input lazy"), p === "eager" && (p = "input eager");
    const V = new Set((p == null ? void 0 : p.split(" ")) ?? []);
    return {
      input: V.has("input"),
      blur: V.has("blur") || V.has("input") || V.has("invalid-input"),
      invalidInput: V.has("invalid-input"),
      lazy: V.has("lazy"),
      eager: V.has("eager")
    };
  }), f = x(() => {
    var p;
    return e.error || (p = e.errorMessages) != null && p.length ? !1 : e.rules.length ? s.value ? r.value.length || d.value.lazy ? null : !0 : !r.value.length : !0;
  }), v = G(!1), m = x(() => ({
    [`${t}--error`]: f.value === !1,
    [`${t}--dirty`]: c.value,
    [`${t}--disabled`]: i.isDisabled.value,
    [`${t}--readonly`]: i.isReadonly.value
  })), b = Ie("validation"), y = x(() => e.name ?? lt(n));
  ua(() => {
    var p;
    (p = i.register) == null || p.call(i, {
      id: y.value,
      vm: b,
      validate: k,
      reset: h,
      resetValidation: g
    });
  }), Ke(() => {
    var p;
    (p = i.unregister) == null || p.call(i, y.value);
  }), ct(async () => {
    var p;
    d.value.lazy || await k(!d.value.eager), (p = i.update) == null || p.call(i, y.value, f.value, u.value);
  }), Ue(() => d.value.input || d.value.invalidInput && f.value === !1, () => {
    J(l, () => {
      if (l.value != null)
        k();
      else if (e.focused) {
        const p = J(() => e.focused, (V) => {
          V || k(), p();
        });
      }
    });
  }), Ue(() => d.value.blur, () => {
    J(() => e.focused, (p) => {
      p || k();
    });
  }), J([f, u], () => {
    var p;
    (p = i.update) == null || p.call(i, y.value, f.value, u.value);
  });
  async function h() {
    a.value = null, await Ce(), await g();
  }
  async function g() {
    s.value = !0, d.value.lazy ? r.value = [] : await k(!d.value.eager);
  }
  async function k() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const V = [];
    v.value = !0;
    for (const A of o.value) {
      if (V.length >= Number(e.maxErrors ?? 1))
        break;
      const w = await (typeof A == "function" ? A : () => A)(l.value);
      if (w !== !0) {
        if (w !== !1 && typeof w != "string") {
          console.warn(`${w} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        V.push(w || "");
      }
    }
    return r.value = V, v.value = !1, s.value = p, r.value;
  }
  return {
    errorMessages: u,
    isDirty: c,
    isDisabled: i.isDisabled,
    isReadonly: i.isReadonly,
    isPristine: s,
    isValid: f,
    isValidating: v,
    reset: h,
    resetValidation: g,
    validate: k,
    validationClasses: m
  };
}
const Ca = O({
  id: String,
  appendIcon: se,
  baseColor: String,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  color: String,
  glow: Boolean,
  iconColor: [Boolean, String],
  prependIcon: se,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": $e(),
  "onClick:append": $e(),
  ...oe(),
  ...Ze(),
  ...Pt(st(), ["maxWidth", "minWidth", "width"]),
  ...we(),
  ...kv()
}, "VInput"), Jt = U()({
  name: "VInput",
  props: {
    ...Ca()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: l
    } = t;
    const {
      densityClasses: i
    } = rt(e), {
      dimensionStyles: o
    } = ut(e), {
      themeClasses: r
    } = Ae(e), {
      rtlClasses: s
    } = qe(), {
      InputIcon: c
    } = Lr(e), u = dt(), d = x(() => e.id || `input-${u}`), {
      errorMessages: f,
      isDirty: v,
      isDisabled: m,
      isReadonly: b,
      isPristine: y,
      isValid: h,
      isValidating: g,
      reset: k,
      resetValidation: p,
      validate: V,
      validationClasses: A
    } = Cv(e, "v-input", d), P = x(() => {
      var $;
      return ($ = e.errorMessages) != null && $.length || !y.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    }), w = T(() => P.value.length > 0), E = T(() => !e.hideDetails || e.hideDetails === "auto" && (w.value || !!a.details)), I = x(() => E.value ? `${d.value}-messages` : void 0), _ = x(() => ({
      id: d,
      messagesId: I,
      isDirty: v,
      isDisabled: m,
      isReadonly: b,
      isPristine: y,
      isValid: h,
      isValidating: g,
      hasDetails: E,
      reset: k,
      resetValidation: p,
      validate: V
    })), D = T(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), F = T(() => {
      if (e.iconColor)
        return e.iconColor === !0 ? D.value : e.iconColor;
    });
    return ee(() => {
      var W, K, te, le;
      const $ = !!(a.prepend || e.prependIcon), R = !!(a.append || e.appendIcon);
      return C("div", {
        class: X(["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--focused": e.focused,
          "v-input--glow": e.glow,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, r.value, s.value, A.value, e.class]),
        style: re([o.value, e.style])
      }, [$ && C("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(W = a.prepend) == null ? void 0 : W.call(a, _.value), e.prependIcon && S(c, {
        key: "prepend-icon",
        name: "prepend",
        color: F.value
      }, null)]), a.default && C("div", {
        class: "v-input__control"
      }, [(K = a.default) == null ? void 0 : K.call(a, _.value)]), R && C("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && S(c, {
        key: "append-icon",
        name: "append",
        color: F.value
      }, null), (te = a.append) == null ? void 0 : te.call(a, _.value)]), E.value && C("div", {
        id: I.value,
        class: "v-input__details",
        role: "alert",
        "aria-live": "polite"
      }, [S(yv, {
        active: w.value,
        messages: P.value
      }, {
        message: a.message
      }), (le = a.details) == null ? void 0 : le.call(a, _.value)])]);
    }), {
      reset: k,
      resetValidation: p,
      validate: V,
      isValid: h,
      errorMessages: f
    };
  }
}), pv = O({
  ...Ca(),
  ...Xe($r(), ["inline"])
}, "VCheckbox"), ag = U()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: pv(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = fe(e, "modelValue"), {
      isFocused: i,
      focus: o,
      blur: r
    } = ka(e), s = Y(), c = dt();
    return ee(() => {
      const [u, d] = ca(n), f = Jt.filterProps(e), v = $t.filterProps(e);
      return S(Jt, j({
        ref: s,
        class: ["v-checkbox", e.class]
      }, u, f, {
        modelValue: l.value,
        "onUpdate:modelValue": (m) => l.value = m,
        id: e.id || `checkbox-${c}`,
        focused: i.value,
        style: e.style
      }), {
        ...a,
        default: (m) => {
          let {
            id: b,
            messagesId: y,
            isDisabled: h,
            isReadonly: g,
            isValid: k
          } = m;
          return S($t, j(v, {
            id: b.value,
            "aria-describedby": y.value,
            disabled: h.value,
            readonly: g.value
          }, d, {
            error: k.value === !1,
            modelValue: l.value,
            "onUpdate:modelValue": (p) => l.value = p,
            onFocus: o,
            onBlur: r
          }), a);
        }
      });
    }), pt({}, s);
  }
}), Nr = Symbol.for("vuetify:v-chip-group"), Vv = O({
  baseColor: String,
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: ze
  },
  ...Pl(),
  ...oe(),
  ...yl({
    selectedClass: "v-chip--selected"
  }),
  ...ge(),
  ...we(),
  ...mt({
    variant: "tonal"
  })
}, "VChipGroup");
U()({
  name: "VChipGroup",
  props: Vv(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Ae(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: s
    } = ha(e, Nr);
    return nt({
      VChip: {
        baseColor: T(() => e.baseColor),
        color: T(() => e.color),
        disabled: T(() => e.disabled),
        filter: T(() => e.filter),
        variant: T(() => e.variant)
      }
    }), ee(() => {
      const c = Jn.filterProps(e);
      return S(Jn, j(c, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, a.value, e.class],
        style: e.style
      }), {
        default: () => {
          var u;
          return [(u = n.default) == null ? void 0 : u.call(n, {
            isSelected: l,
            select: i,
            next: o,
            prev: r,
            selected: s.value
          })];
        }
      });
    }), {};
  }
});
const Pv = O({
  activeClass: String,
  appendAvatar: String,
  appendIcon: se,
  baseColor: String,
  closable: Boolean,
  closeIcon: {
    type: se,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: se,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: se,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: $e(),
  onClickOnce: $e(),
  ...ft(),
  ...oe(),
  ...Ze(),
  ...vt(),
  ...ma(),
  ...He(),
  ...wa(),
  ...nn(),
  ...ge({
    tag: "span"
  }),
  ...we(),
  ...mt({
    variant: "tonal"
  })
}, "VChip"), Al = U()({
  name: "VChip",
  directives: {
    vRipple: Ct
  },
  props: Pv(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      t: i
    } = ot(), {
      borderClasses: o
    } = bt(e), {
      densityClasses: r
    } = rt(e), {
      elevationClasses: s
    } = St(e), {
      roundedClasses: c
    } = je(e), {
      sizeClasses: u
    } = pn(e), {
      themeClasses: d
    } = Ae(e), f = fe(e, "modelValue"), v = ga(e, Nr, !1), m = Sa(e, n), b = T(() => e.link !== !1 && m.isLink.value), y = x(() => !e.disabled && e.link !== !1 && (!!v || e.link || m.isClickable.value)), h = T(() => ({
      "aria-label": i(e.closeLabel),
      disabled: e.disabled,
      onClick(P) {
        P.preventDefault(), P.stopPropagation(), f.value = !1, a("click:close", P);
      }
    })), {
      colorClasses: g,
      colorStyles: k,
      variantClasses: p
    } = Nt(() => ({
      color: !v || v.isSelected.value ? e.color ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    function V(P) {
      var w;
      a("click", P), y.value && ((w = m.navigate) == null || w.call(m, P), v == null || v.toggle());
    }
    function A(P) {
      (P.key === "Enter" || P.key === " ") && (P.preventDefault(), V(P));
    }
    return () => {
      var $;
      const P = m.isLink.value ? "a" : e.tag, w = !!(e.appendIcon || e.appendAvatar), E = !!(w || l.append), I = !!(l.close || e.closable), _ = !!(l.filter || e.filter) && v, D = !!(e.prependIcon || e.prependAvatar), F = !!(D || l.prepend);
      return f.value && Le(S(P, j({
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": y.value,
          "v-chip--filter": _,
          "v-chip--pill": e.pill,
          [`${e.activeClass}`]: e.activeClass && (($ = m.isActive) == null ? void 0 : $.value)
        }, d.value, o.value, g.value, r.value, s.value, c.value, u.value, p.value, v == null ? void 0 : v.selectedClass.value, e.class],
        style: [k.value, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        tabindex: y.value ? 0 : void 0,
        onClick: V,
        onKeydown: y.value && !b.value && A
      }, m.linkProps), {
        default: () => {
          var R;
          return [Rt(y.value, "v-chip"), _ && S(Xo, {
            key: "filter"
          }, {
            default: () => [Le(C("div", {
              class: "v-chip__filter"
            }, [l.filter ? S(Se, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, l.filter) : S(Ve, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[Mt, v.isSelected.value]])]
          }), F && C("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [l.prepend ? S(Se, {
            key: "prepend-defaults",
            disabled: !D,
            defaults: {
              VAvatar: {
                image: e.prependAvatar,
                start: !0
              },
              VIcon: {
                icon: e.prependIcon,
                start: !0
              }
            }
          }, l.prepend) : C(ce, null, [e.prependIcon && S(Ve, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && S(At, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), C("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [((R = l.default) == null ? void 0 : R.call(l, {
            isSelected: v == null ? void 0 : v.isSelected.value,
            selectedClass: v == null ? void 0 : v.selectedClass.value,
            select: v == null ? void 0 : v.select,
            toggle: v == null ? void 0 : v.toggle,
            value: v == null ? void 0 : v.value.value,
            disabled: e.disabled
          })) ?? Ft(e.text)]), E && C("div", {
            key: "append",
            class: "v-chip__append"
          }, [l.append ? S(Se, {
            key: "append-defaults",
            disabled: !w,
            defaults: {
              VAvatar: {
                end: !0,
                image: e.appendAvatar
              },
              VIcon: {
                end: !0,
                icon: e.appendIcon
              }
            }
          }, l.append) : C(ce, null, [e.appendIcon && S(Ve, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && S(At, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), I && C("button", j({
            key: "close",
            class: "v-chip__close",
            type: "button",
            "data-testid": "close-chip"
          }, h.value), [l.close ? S(Se, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, l.close) : S(Ve, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[Ct, y.value && e.ripple, null]]);
    };
  }
}), Iv = O({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  disableInitialFocus: Boolean,
  ...Xe(pl({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: Uo
    }
  }), ["absolute"])
}, "VMenu"), Hr = U()({
  name: "VMenu",
  props: Iv(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = fe(e, "modelValue"), {
      scopeId: l
    } = _n(), {
      isRtl: i
    } = qe(), o = dt(), r = T(() => e.id || `v-menu-${o}`), s = Y(), c = he(Qa, null), u = G(/* @__PURE__ */ new Set());
    Pe(Qa, {
      register() {
        u.value.add(o);
      },
      unregister() {
        u.value.delete(o);
      },
      closeParents(y) {
        setTimeout(() => {
          var h;
          !u.value.size && !e.persistent && (y == null || (h = s.value) != null && h.contentEl && !mu(y, s.value.contentEl)) && (a.value = !1, c == null || c.closeParents());
        }, 40);
      }
    }), Ke(() => {
      c == null || c.unregister(), document.removeEventListener("focusin", d);
    }), Xi(() => a.value = !1);
    async function d(y) {
      var k, p, V;
      const h = y.relatedTarget, g = y.target;
      await Ce(), a.value && h !== g && ((k = s.value) != null && k.contentEl) && // We're the topmost menu
      ((p = s.value) != null && p.globalTop) && // It isn't the document or the menu body
      ![document, s.value.contentEl].includes(g) && // It isn't inside the menu body
      !s.value.contentEl.contains(g) && ((V = zn(s.value.contentEl)[0]) == null || V.focus());
    }
    J(a, (y) => {
      y ? (c == null || c.register(), ye && !e.disableInitialFocus && document.addEventListener("focusin", d, {
        once: !0
      })) : (c == null || c.unregister(), ye && document.removeEventListener("focusin", d));
    }, {
      immediate: !0
    });
    function f(y) {
      c == null || c.closeParents(y);
    }
    function v(y) {
      var h, g, k, p, V;
      if (!e.disabled)
        if (y.key === "Tab" || y.key === "Enter" && !e.closeOnContentClick) {
          if (y.key === "Enter" && (y.target instanceof HTMLTextAreaElement || y.target instanceof HTMLInputElement && y.target.closest("form"))) return;
          y.key === "Enter" && y.preventDefault(), lo(zn((h = s.value) == null ? void 0 : h.contentEl, !1), y.shiftKey ? "prev" : "next", (P) => P.tabIndex >= 0) || (a.value = !1, (k = (g = s.value) == null ? void 0 : g.activatorEl) == null || k.focus());
        } else e.submenu && y.key === (i.value ? "ArrowRight" : "ArrowLeft") && (a.value = !1, (V = (p = s.value) == null ? void 0 : p.activatorEl) == null || V.focus());
    }
    function m(y) {
      var g;
      if (e.disabled) return;
      const h = (g = s.value) == null ? void 0 : g.contentEl;
      h && a.value ? y.key === "ArrowDown" ? (y.preventDefault(), y.stopImmediatePropagation(), rn(h, "next")) : y.key === "ArrowUp" ? (y.preventDefault(), y.stopImmediatePropagation(), rn(h, "prev")) : e.submenu && (y.key === (i.value ? "ArrowRight" : "ArrowLeft") ? a.value = !1 : y.key === (i.value ? "ArrowLeft" : "ArrowRight") && (y.preventDefault(), rn(h, "first"))) : (e.submenu ? y.key === (i.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(y.key)) && (a.value = !0, y.preventDefault(), setTimeout(() => setTimeout(() => m(y))));
    }
    const b = x(() => j({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-controls": r.value,
      onKeydown: m
    }, e.activatorProps));
    return ee(() => {
      const y = Qn.filterProps(e);
      return S(Qn, j({
        ref: s,
        id: r.value,
        class: ["v-menu", e.class],
        style: e.style
      }, y, {
        modelValue: a.value,
        "onUpdate:modelValue": (h) => a.value = h,
        absolute: !0,
        activatorProps: b.value,
        location: e.location ?? (e.submenu ? "end" : "bottom"),
        "onClick:outside": f,
        onKeydown: v
      }, l), {
        activator: n.activator,
        default: function() {
          for (var h = arguments.length, g = new Array(h), k = 0; k < h; k++)
            g[k] = arguments[k];
          return S(Se, {
            root: "VMenu"
          }, {
            default: () => {
              var p;
              return [(p = n.default) == null ? void 0 : p.call(n, ...g)];
            }
          });
        }
      });
    }), pt({
      id: r,
      ΨopenChildren: u
    }, s);
  }
}), Av = O({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...oe(),
  ...ln({
    transition: {
      component: Yo
    }
  })
}, "VCounter"), zr = U()({
  name: "VCounter",
  functional: !0,
  props: Av(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = T(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return ee(() => S(kt, {
      transition: e.transition
    }, {
      default: () => [Le(C("div", {
        class: X(["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class]),
        style: re(e.style)
      }, [n.default ? n.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[Mt, e.active]])]
    })), {};
  }
}), Tv = O({
  floating: Boolean,
  ...oe()
}, "VFieldLabel"), Ln = U()({
  name: "VFieldLabel",
  props: Tv(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => S(Br, {
      class: X(["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class]),
      style: re(e.style)
    }, n)), {};
  }
}), _v = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Tl = O({
  appendInnerIcon: se,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: se,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  details: Boolean,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  glow: Boolean,
  error: Boolean,
  flat: Boolean,
  iconColor: [Boolean, String],
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: se,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => _v.includes(e)
  },
  "onClick:clear": $e(),
  "onClick:appendInner": $e(),
  "onClick:prependInner": $e(),
  ...oe(),
  ...ya(),
  ...He(),
  ...we()
}, "VField"), ea = U()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Mr(),
    ...Tl()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      themeClasses: i
    } = Ae(e), {
      loaderClasses: o
    } = ba(e), {
      focusClasses: r,
      isFocused: s,
      focus: c,
      blur: u
    } = ka(e), {
      InputIcon: d
    } = Lr(e), {
      roundedClasses: f
    } = je(e), {
      rtlClasses: v
    } = qe(), m = T(() => e.dirty || e.active), b = T(() => !!(e.label || l.label)), y = T(() => !e.singleLine && b.value), h = dt(), g = x(() => e.id || `input-${h}`), k = T(() => e.details ? `${g.value}-messages` : void 0), p = Y(), V = Y(), A = Y(), P = x(() => ["plain", "underlined"].includes(e.variant)), w = x(() => e.error || e.disabled ? void 0 : m.value && s.value ? e.color : e.baseColor), E = x(() => {
      if (!(!e.iconColor || e.glow && !s.value))
        return e.iconColor === !0 ? w.value : e.iconColor;
    }), {
      backgroundColorClasses: I,
      backgroundColorStyles: _
    } = Ye(() => e.bgColor), {
      textColorClasses: D,
      textColorStyles: F
    } = it(w);
    J(m, (W) => {
      if (y.value && !Kt()) {
        const K = p.value.$el, te = V.value.$el;
        requestAnimationFrame(() => {
          const le = ul(K), L = te.getBoundingClientRect(), Z = L.x - le.x, M = L.y - le.y - (le.height / 2 - L.height / 2), B = L.width / 0.75, H = Math.abs(B - le.width) > 1 ? {
            maxWidth: Q(B)
          } : void 0, ie = getComputedStyle(K), ue = getComputedStyle(te), N = parseFloat(ie.transitionDuration) * 1e3 || 150, q = parseFloat(ue.getPropertyValue("--v-field-label-scale")), ve = ue.getPropertyValue("color");
          K.style.visibility = "visible", te.style.visibility = "hidden", xt(K, {
            transform: `translate(${Z}px, ${M}px) scale(${q})`,
            color: ve,
            ...H
          }, {
            duration: N,
            easing: fn,
            direction: W ? "normal" : "reverse"
          }).finished.then(() => {
            K.style.removeProperty("visibility"), te.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const $ = x(() => ({
      isActive: m,
      isFocused: s,
      controlRef: A,
      blur: u,
      focus: c
    }));
    function R(W) {
      W.target !== document.activeElement && W.preventDefault();
    }
    return ee(() => {
      var Z, M, B;
      const W = e.variant === "outlined", K = !!(l["prepend-inner"] || e.prependInnerIcon), te = !!(e.clearable || l.clear) && !e.disabled, le = !!(l["append-inner"] || e.appendInnerIcon || te), L = () => l.label ? l.label({
        ...$.value,
        label: e.label,
        props: {
          for: g.value
        }
      }) : e.label;
      return C("div", j({
        class: ["v-field", {
          "v-field--active": m.value,
          "v-field--appended": le,
          "v-field--center-affix": e.centerAffix ?? !P.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--glow": e.glow,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": K,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !L(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, I.value, r.value, o.value, f.value, v.value, e.class],
        style: [_.value, e.style],
        onClick: R
      }, n), [C("div", {
        class: "v-field__overlay"
      }, null), S(bl, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), K && C("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && S(d, {
        key: "prepend-icon",
        name: "prependInner",
        color: E.value
      }, null), (Z = l["prepend-inner"]) == null ? void 0 : Z.call(l, $.value)]), C("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && y.value && S(Ln, {
        key: "floating-label",
        ref: V,
        class: X([D.value]),
        floating: !0,
        for: g.value,
        "aria-hidden": !m.value,
        style: re(F.value)
      }, {
        default: () => [L()]
      }), b.value && S(Ln, {
        key: "label",
        ref: p,
        for: g.value
      }, {
        default: () => [L()]
      }), ((M = l.default) == null ? void 0 : M.call(l, {
        ...$.value,
        props: {
          id: g.value,
          class: "v-field__input",
          "aria-describedby": k.value
        },
        focus: c,
        blur: u
      })) ?? C("div", {
        id: g.value,
        class: "v-field__input",
        "aria-describedby": k.value
      }, null)]), te && S(Xo, {
        key: "clear"
      }, {
        default: () => [Le(C("div", {
          class: "v-field__clearable",
          onMousedown: (H) => {
            H.preventDefault(), H.stopPropagation();
          }
        }, [S(Se, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [l.clear ? l.clear({
            ...$.value,
            props: {
              onFocus: c,
              onBlur: u,
              onClick: e["onClick:clear"],
              tabindex: -1
            }
          }) : S(d, {
            name: "clear",
            onFocus: c,
            onBlur: u,
            tabindex: -1
          }, null)]
        })]), [[Mt, e.dirty]])]
      }), le && C("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(B = l["append-inner"]) == null ? void 0 : B.call(l, $.value), e.appendInnerIcon && S(d, {
        key: "append-icon",
        name: "appendInner",
        color: E.value
      }, null)]), C("div", {
        class: X(["v-field__outline", D.value]),
        style: re(F.value)
      }, [W && C(ce, null, [C("div", {
        class: "v-field__outline__start"
      }, null), y.value && C("div", {
        class: "v-field__outline__notch"
      }, [S(Ln, {
        ref: V,
        floating: !0,
        for: g.value,
        "aria-hidden": !m.value
      }, {
        default: () => [L()]
      })]), C("div", {
        class: "v-field__outline__end"
      }, null)]), P.value && y.value && S(Ln, {
        ref: V,
        floating: !0,
        for: g.value,
        "aria-hidden": !m.value
      }, {
        default: () => [L()]
      })])]);
    }), {
      controlRef: A,
      fieldIconColor: E
    };
  }
}), Wr = O({
  autocomplete: String
}, "autocomplete");
function jr(e) {
  const t = dt(), n = G(0), a = T(() => e.autocomplete === "suppress"), l = T(() => a.value ? `${e.name}-${t}-${n.value}` : e.name), i = T(() => a.value ? "off" : e.autocomplete);
  return {
    isSuppressing: a,
    fieldAutocomplete: i,
    fieldName: l,
    update: () => n.value = (/* @__PURE__ */ new Date()).getTime()
  };
}
function Gr(e) {
  function t(n, a) {
    var l, i;
    !e.autofocus || !n || (i = (l = a[0].target) == null ? void 0 : l.focus) == null || i.call(l);
  }
  return {
    onIntersect: t
  };
}
const Ev = ["color", "file", "time", "date", "datetime-local", "week", "month"], _l = O({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...Wr(),
  ...Ca(),
  ...Tl()
}, "VTextField"), ta = U()({
  name: "VTextField",
  directives: {
    vIntersect: Zt
  },
  inheritAttrs: !1,
  props: _l(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const i = fe(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = ka(e), {
      onIntersect: c
    } = Gr(e), u = x(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), d = x(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), f = x(() => ["plain", "underlined"].includes(e.variant)), v = Y(), m = Y(), b = Y(), y = jr(e), h = x(() => Ev.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function g() {
      y.isSuppressing.value && y.update(), o.value || r(), Ce(() => {
        var P;
        b.value !== document.activeElement && ((P = b.value) == null || P.focus());
      });
    }
    function k(P) {
      a("mousedown:control", P), P.target !== b.value && (g(), P.preventDefault());
    }
    function p(P) {
      a("click:control", P);
    }
    function V(P, w) {
      P.stopPropagation(), g(), Ce(() => {
        i.value = null, w(), rl(e["onClick:clear"], P);
      });
    }
    function A(P) {
      var E;
      const w = P.target;
      if (i.value = w.value, (E = e.modelModifiers) != null && E.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const I = [w.selectionStart, w.selectionEnd];
        Ce(() => {
          w.selectionStart = I[0], w.selectionEnd = I[1];
        });
      }
    }
    return ee(() => {
      const P = !!(l.counter || e.counter !== !1 && e.counter != null), w = !!(P || l.details), [E, I] = ca(n), {
        modelValue: _,
        ...D
      } = Jt.filterProps(e), F = ea.filterProps(e);
      return S(Jt, j({
        ref: v,
        modelValue: i.value,
        "onUpdate:modelValue": ($) => i.value = $,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": f.value
        }, e.class],
        style: e.style
      }, E, D, {
        centerAffix: !f.value,
        focused: o.value
      }), {
        ...l,
        default: ($) => {
          let {
            id: R,
            isDisabled: W,
            isDirty: K,
            isReadonly: te,
            isValid: le,
            hasDetails: L,
            reset: Z
          } = $;
          return S(ea, j({
            ref: m,
            onMousedown: k,
            onClick: p,
            "onClick:clear": (M) => V(M, Z),
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, Xe(F, ["onClick:clear"]), {
            id: R.value,
            active: h.value || K.value,
            dirty: K.value || e.dirty,
            disabled: W.value,
            focused: o.value,
            details: L.value,
            error: le.value === !1
          }), {
            ...l,
            default: (M) => {
              let {
                props: {
                  class: B,
                  ...H
                }
              } = M;
              const ie = Le(C("input", j({
                ref: b,
                value: i.value,
                onInput: A,
                autofocus: e.autofocus,
                readonly: te.value,
                disabled: W.value,
                name: y.fieldName.value,
                autocomplete: y.fieldAutocomplete.value,
                placeholder: e.placeholder,
                size: 1,
                role: e.role,
                type: e.type,
                onFocus: r,
                onBlur: s
              }, H, I), null), [[Zt, {
                handler: c
              }, null, {
                once: !0
              }]]);
              return C(ce, null, [e.prefix && C("span", {
                class: "v-text-field__prefix"
              }, [C("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? C("div", {
                class: X(B),
                "data-no-activator": ""
              }, [l.default(), ie]) : lu(ie, {
                class: B
              }), e.suffix && C("span", {
                class: "v-text-field__suffix"
              }, [C("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: w ? ($) => {
          var R;
          return C(ce, null, [(R = l.details) == null ? void 0 : R.call(l, $), P && C(ce, null, [C("span", null, null), S(zr, {
            active: e.persistentCounter || o.value,
            value: u.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), pt({}, v, m, b);
  }
}), Bv = O({
  renderless: Boolean,
  ...oe()
}, "VVirtualScrollItem"), Dv = U()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: Bv(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      resizeRef: i,
      contentRect: o
    } = It(void 0, "border");
    J(() => {
      var r;
      return (r = o.value) == null ? void 0 : r.height;
    }, (r) => {
      r != null && a("update:height", r);
    }), ee(() => {
      var r, s;
      return e.renderless ? C(ce, null, [(r = l.default) == null ? void 0 : r.call(l, {
        itemRef: i
      })]) : C("div", j({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, n), [(s = l.default) == null ? void 0 : s.call(l)]);
    });
  }
}), Fv = -1, Ov = 1, La = 100, $v = O({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  itemKey: {
    type: [String, Array, Function],
    default: null
  },
  height: [Number, String]
}, "virtual");
function Lv(e, t) {
  const n = Tt(), a = G(0);
  _e(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = G(0), i = G(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || n.height.value) / (a.value || 16)
  ) || 1), o = G(0), r = G(0), s = Y(), c = Y();
  let u = 0;
  const {
    resizeRef: d,
    contentRect: f
  } = It();
  _e(() => {
    d.value = s.value;
  });
  const v = x(() => {
    var L;
    return s.value === document.documentElement ? n.height.value : ((L = f.value) == null ? void 0 : L.height) || parseInt(e.height) || 0;
  }), m = x(() => !!(s.value && c.value && v.value && a.value));
  let b = Array.from({
    length: t.value.length
  }), y = Array.from({
    length: t.value.length
  });
  const h = G(0);
  let g = -1;
  function k(L) {
    return b[L] || a.value;
  }
  const p = cu(() => {
    const L = performance.now();
    y[0] = 0;
    const Z = t.value.length;
    for (let M = 1; M <= Z - 1; M++)
      y[M] = (y[M - 1] || 0) + k(M - 1);
    h.value = Math.max(h.value, performance.now() - L);
  }, h), V = J(m, (L) => {
    L && (V(), u = c.value.offsetTop, p.immediate(), W(), ~g && Ce(() => {
      ye && window.requestAnimationFrame(() => {
        te(g), g = -1;
      });
    }));
  });
  Ee(() => {
    p.clear();
  });
  function A(L, Z) {
    const M = b[L], B = a.value;
    a.value = B ? Math.min(a.value, Z) : Z, (M !== Z || B !== a.value) && (b[L] = Z, p());
  }
  function P(L) {
    L = Fe(L, 0, t.value.length - 1);
    const Z = Math.floor(L), M = L % 1, B = Z + 1, H = y[Z] || 0, ie = y[B] || H;
    return H + (ie - H) * M;
  }
  function w(L) {
    return Mv(y, L);
  }
  let E = 0, I = 0, _ = 0;
  J(v, (L, Z) => {
    Z && (W(), L < Z && requestAnimationFrame(() => {
      I = 0, W();
    }));
  });
  let D = -1;
  function F() {
    if (!s.value || !c.value) return;
    const L = s.value.scrollTop, Z = performance.now();
    Z - _ > 500 ? (I = Math.sign(L - E), u = c.value.offsetTop) : I = L - E, E = L, _ = Z, window.clearTimeout(D), D = window.setTimeout($, 500), W();
  }
  function $() {
    !s.value || !c.value || (I = 0, _ = 0, window.clearTimeout(D), W());
  }
  let R = -1;
  function W() {
    cancelAnimationFrame(R), R = requestAnimationFrame(K);
  }
  function K() {
    if (!s.value || !v.value || !a.value) return;
    const L = E - u, Z = Math.sign(I), M = Math.max(0, L - La), B = Fe(w(M), 0, t.value.length), H = L + v.value + La, ie = Fe(w(H) + 1, B + 1, t.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (Z !== Fv || B < l.value) && (Z !== Ov || ie > i.value)
    ) {
      const ue = P(l.value) - P(B), N = P(ie) - P(i.value);
      Math.max(ue, N) > La ? (l.value = B, i.value = ie) : (B <= 0 && (l.value = B), ie >= t.value.length && (i.value = ie));
    }
    o.value = P(l.value), r.value = P(t.value.length) - P(i.value);
  }
  function te(L) {
    const Z = P(L);
    !s.value || L && !Z ? g = L : s.value.scrollTop = Z;
  }
  const le = x(() => t.value.slice(l.value, i.value).map((L, Z) => {
    const M = Z + l.value;
    return {
      raw: L,
      index: M,
      key: Re(L, e.itemKey, M)
    };
  }));
  return J(t, () => {
    b = Array.from({
      length: t.value.length
    }), y = Array.from({
      length: t.value.length
    }), p.immediate(), W();
  }, {
    deep: 1
  }), {
    calculateVisibleItems: W,
    containerRef: s,
    markerRef: c,
    computedItems: le,
    paddingTop: o,
    paddingBottom: r,
    scrollToIndex: te,
    handleScroll: F,
    handleScrollend: $,
    handleItemResize: A
  };
}
function Mv(e, t) {
  let n = e.length - 1, a = 0, l = 0, i = null, o = -1;
  if (e[n] < t)
    return n;
  for (; a <= n; )
    if (l = a + n >> 1, i = e[l], i > t)
      n = l - 1;
    else if (i < t)
      o = l, a = l + 1;
    else return i === t ? l : a;
  return o;
}
const Rv = O({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...$v(),
  ...oe(),
  ...st()
}, "VVirtualScroll"), Ur = U()({
  name: "VVirtualScroll",
  props: Rv(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Ie("VVirtualScroll"), {
      dimensionStyles: l
    } = ut(e), {
      calculateVisibleItems: i,
      containerRef: o,
      markerRef: r,
      handleScroll: s,
      handleScrollend: c,
      handleItemResize: u,
      scrollToIndex: d,
      paddingTop: f,
      paddingBottom: v,
      computedItems: m
    } = Lv(e, T(() => e.items));
    return Ue(() => e.renderless, () => {
      function b() {
        var g, k;
        const h = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        o.value === document.documentElement ? (document[h]("scroll", s, {
          passive: !0
        }), document[h]("scrollend", c)) : ((g = o.value) == null || g[h]("scroll", s, {
          passive: !0
        }), (k = o.value) == null || k[h]("scrollend", c));
      }
      ct(() => {
        o.value = go(a.vnode.el, !0), b(!0);
      }), Ee(b);
    }), ee(() => {
      const b = m.value.map((y) => S(Dv, {
        key: y.key,
        renderless: e.renderless,
        "onUpdate:height": (h) => u(y.index, h)
      }, {
        default: (h) => {
          var g;
          return (g = n.default) == null ? void 0 : g.call(n, {
            item: y.raw,
            index: y.index,
            ...h
          });
        }
      }));
      return e.renderless ? C(ce, null, [C("div", {
        ref: r,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: Q(f.value)
        }
      }, null), b, C("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: Q(v.value)
        }
      }, null)]) : C("div", {
        ref: o,
        class: X(["v-virtual-scroll", e.class]),
        onScrollPassive: s,
        onScrollend: c,
        style: re([l.value, e.style])
      }, [C("div", {
        ref: r,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: Q(f.value),
          paddingBottom: Q(v.value)
        }
      }, [b])]);
    }), {
      calculateVisibleItems: i,
      scrollToIndex: d
    };
  }
});
function Yr(e, t) {
  const n = G(!1);
  let a;
  function l(r) {
    cancelAnimationFrame(a), n.value = !0, a = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => {
        n.value = !1;
      });
    });
  }
  async function i() {
    await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => {
      if (n.value) {
        const s = J(n, () => {
          s(), r();
        });
      } else r();
    });
  }
  async function o(r) {
    var u, d;
    if (r.key === "Tab" && ((u = t.value) == null || u.focus()), !["PageDown", "PageUp", "Home", "End"].includes(r.key)) return;
    const s = (d = e.value) == null ? void 0 : d.$el;
    if (!s) return;
    (r.key === "Home" || r.key === "End") && s.scrollTo({
      top: r.key === "Home" ? 0 : s.scrollHeight,
      behavior: "smooth"
    }), await i();
    const c = s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (r.key === "PageDown" || r.key === "Home") {
      const f = s.getBoundingClientRect().top;
      for (const v of c)
        if (v.getBoundingClientRect().top >= f) {
          v.focus();
          break;
        }
    } else {
      const f = s.getBoundingClientRect().bottom;
      for (const v of [...c].reverse())
        if (v.getBoundingClientRect().bottom <= f) {
          v.focus();
          break;
        }
    }
  }
  return {
    onScrollPassive: l,
    onKeydown: o
  };
}
const Nv = O({
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  }
}, "autocomplete");
function Kr(e, t) {
  const {
    t: n
  } = ot(), a = dt(), l = x(() => `menu-${a}`), i = T(() => We(t)), o = T(() => l.value), r = T(() => n(We(t) ? e.closeText : e.openText));
  return {
    menuId: l,
    ariaExpanded: i,
    ariaControls: o,
    ariaLabel: r
  };
}
const Xr = O({
  chips: Boolean,
  closableChips: Boolean,
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: se,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  noAutoScroll: Boolean,
  ...Nv(),
  ...rr({
    itemChildren: !1
  })
}, "Select"), Hv = O({
  ...Xr(),
  ...Xe(_l({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...ln({
    transition: {
      component: Uo
    }
  })
}, "VSelect"), qr = U()({
  name: "VSelect",
  props: Hv(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = ot(), l = Y(), i = Y(), o = Y(), {
      items: r,
      transformIn: s,
      transformOut: c
    } = ur(e), u = fe(e, "modelValue", [], (B) => s(B === null ? [null] : Oe(B)), (B) => {
      const H = c(B);
      return e.multiple ? H : H[0] ?? null;
    }), d = x(() => typeof e.counterValue == "function" ? e.counterValue(u.value) : typeof e.counterValue == "number" ? e.counterValue : u.value.length), f = Il(e), v = x(() => u.value.map((B) => B.value)), m = G(!1);
    let b = "", y = -1, h;
    const g = x(() => e.hideSelected ? r.value.filter((B) => !u.value.some((H) => (e.valueComparator || ze)(H, B))) : r.value), k = x(() => e.hideNoData && !g.value.length || f.isReadonly.value || f.isDisabled.value), p = fe(e, "menu"), V = x({
      get: () => p.value,
      set: (B) => {
        var H;
        p.value && !B && ((H = i.value) != null && H.ΨopenChildren.size) || B && k.value || (p.value = B);
      }
    }), {
      menuId: A,
      ariaExpanded: P,
      ariaControls: w,
      ariaLabel: E
    } = Kr(e, V), I = x(() => {
      var B;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((B = e.menuProps) == null ? void 0 : B.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), _ = Y(), D = Yr(_, l);
    function F(B) {
      e.openOnClear && (V.value = !0);
    }
    function $() {
      k.value || (V.value = !V.value);
    }
    function R(B) {
      Wn(B) && W(B);
    }
    function W(B) {
      var me, z, ne;
      if (!B.key || f.isReadonly.value) return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(B.key) && B.preventDefault(), ["Enter", "ArrowDown", " "].includes(B.key) && (V.value = !0), ["Escape", "Tab"].includes(B.key) && (V.value = !1), B.key === "Home" ? (me = _.value) == null || me.focus("first") : B.key === "End" && ((z = _.value) == null || z.focus("last"));
      const H = 1e3;
      if (!Wn(B)) return;
      const ie = performance.now();
      ie - h > H && (b = "", y = -1), b += B.key.toLowerCase(), h = ie;
      const ue = g.value;
      function N() {
        let ae = q();
        return ae || b.at(-1) === b.at(-2) && (b = b.slice(0, -1), ae = q(), ae) || (y = -1, ae = q(), ae) ? ae : (b = B.key.toLowerCase(), q());
      }
      function q() {
        for (let ae = y + 1; ae < ue.length; ae++) {
          const de = ue[ae];
          if (de.title.toLowerCase().startsWith(b))
            return [de, ae];
        }
      }
      const ve = N();
      if (!ve) return;
      const [xe, ke] = ve;
      y = ke, (ne = _.value) == null || ne.focus(ke), e.multiple || (u.value = [xe]);
    }
    function K(B) {
      let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!B.props.disabled)
        if (e.multiple) {
          const ie = u.value.findIndex((N) => (e.valueComparator || ze)(N.value, B.value)), ue = H ?? !~ie;
          if (~ie) {
            const N = ue ? [...u.value, B] : [...u.value];
            N.splice(ie, 1), u.value = N;
          } else ue && (u.value = [...u.value, B]);
        } else {
          const ie = H !== !1;
          u.value = ie ? [B] : [], Ce(() => {
            V.value = !1;
          });
        }
    }
    function te(B) {
      var H;
      (H = _.value) != null && H.$el.contains(B.relatedTarget) || (V.value = !1);
    }
    function le() {
      var B;
      e.eager && ((B = o.value) == null || B.calculateVisibleItems());
    }
    function L() {
      var B;
      m.value && ((B = l.value) == null || B.focus());
    }
    function Z(B) {
      m.value = !0;
    }
    function M(B) {
      if (B == null) u.value = [];
      else if (Xt(l.value, ":autofill") || Xt(l.value, ":-webkit-autofill")) {
        const H = r.value.find((ie) => ie.title === B);
        H && K(H);
      } else l.value && (l.value.value = "");
    }
    return J(V, () => {
      if (!e.hideSelected && V.value && u.value.length) {
        const B = g.value.findIndex((H) => u.value.some((ie) => (e.valueComparator || ze)(ie.value, H.value)));
        ye && !e.noAutoScroll && window.requestAnimationFrame(() => {
          var H;
          B >= 0 && ((H = o.value) == null || H.scrollToIndex(B));
        });
      }
    }), J(r, (B, H) => {
      V.value || m.value && e.hideNoData && !H.length && B.length && (V.value = !0);
    }), ee(() => {
      const B = !!(e.chips || n.chip), H = !!(!e.hideNoData || g.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), ie = u.value.length > 0, ue = ta.filterProps(e), N = ie || !m.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return S(ta, j({
        ref: l
      }, ue, {
        modelValue: u.value.map((q) => q.props.value).join(", "),
        "onUpdate:modelValue": M,
        focused: m.value,
        "onUpdate:focused": (q) => m.value = q,
        validationValue: u.externalValue,
        counterValue: d.value,
        dirty: ie,
        class: ["v-select", {
          "v-select--active-menu": V.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": u.value.length,
          "v-select--selection-slot": !!n.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: N,
        "onClick:clear": F,
        "onMousedown:control": $,
        onBlur: te,
        onKeydown: W,
        "aria-expanded": P.value,
        "aria-controls": w.value,
        "aria-label": E.value,
        title: E.value
      }), {
        ...n,
        default: () => C(ce, null, [S(Hr, j({
          id: A.value,
          ref: i,
          modelValue: V.value,
          "onUpdate:modelValue": (q) => V.value = q,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: k.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: le,
          onAfterLeave: L
        }, I.value), {
          default: () => [H && S(dr, j({
            ref: _,
            selected: v.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (q) => q.preventDefault(),
            onKeydown: R,
            onFocusin: Z,
            tabindex: "-1",
            selectable: !0,
            "aria-live": "polite",
            "aria-label": `${e.label}-list`,
            color: e.itemColor ?? e.color
          }, D, e.listProps), {
            default: () => {
              var q, ve, xe;
              return [(q = n["prepend-item"]) == null ? void 0 : q.call(n), !g.value.length && !e.hideNoData && (((ve = n["no-data"]) == null ? void 0 : ve.call(n)) ?? S(Qt, {
                key: "no-data",
                title: a(e.noDataText)
              }, null)), S(Ur, {
                ref: o,
                renderless: !0,
                items: g.value,
                itemKey: "value"
              }, {
                default: (ke) => {
                  var Te, Me, Qe;
                  let {
                    item: me,
                    index: z,
                    itemRef: ne
                  } = ke;
                  const ae = gu(me.props), de = j(me.props, {
                    ref: ne,
                    key: me.value,
                    onClick: () => K(me, null)
                  });
                  return me.type === "divider" ? ((Te = n.divider) == null ? void 0 : Te.call(n, {
                    props: me.raw,
                    index: z
                  })) ?? S(Tn, j(me.props, {
                    key: `divider-${z}`
                  }), null) : me.type === "subheader" ? ((Me = n.subheader) == null ? void 0 : Me.call(n, {
                    props: me.raw,
                    index: z
                  })) ?? S(kl, j(me.props, {
                    key: `subheader-${z}`
                  }), null) : ((Qe = n.item) == null ? void 0 : Qe.call(n, {
                    item: me,
                    index: z,
                    props: de
                  })) ?? S(Qt, j(de, {
                    role: "option"
                  }), {
                    prepend: (be) => {
                      let {
                        isSelected: pe
                      } = be;
                      return C(ce, null, [e.multiple && !e.hideSelected ? S($t, {
                        key: me.value,
                        modelValue: pe,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, ae.prependAvatar && S(At, {
                        image: ae.prependAvatar
                      }, null), ae.prependIcon && S(Ve, {
                        icon: ae.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (xe = n["append-item"]) == null ? void 0 : xe.call(n)];
            }
          })]
        }), u.value.map((q, ve) => {
          function xe(ne) {
            ne.stopPropagation(), ne.preventDefault(), K(q, !1);
          }
          const ke = {
            "onClick:close": xe,
            onKeydown(ne) {
              ne.key !== "Enter" && ne.key !== " " || (ne.preventDefault(), ne.stopPropagation(), xe(ne));
            },
            onMousedown(ne) {
              ne.preventDefault(), ne.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, me = B ? !!n.chip : !!n.selection, z = me ? sl(B ? n.chip({
            item: q,
            index: ve,
            props: ke
          }) : n.selection({
            item: q,
            index: ve
          })) : void 0;
          if (!(me && !z))
            return C("div", {
              key: q.value,
              class: "v-select__selection"
            }, [B ? n.chip ? S(Se, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: q.title
                }
              }
            }, {
              default: () => [z]
            }) : S(Al, j({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: q.title,
              disabled: q.props.disabled
            }, ke), null) : z ?? C("span", {
              class: "v-select__selection-text"
            }, [q.title, e.multiple && ve < u.value.length - 1 && C("span", {
              class: "v-select__selection-comma"
            }, [Nn(",")])])]);
        })]),
        "append-inner": function() {
          var ke, me;
          for (var q = arguments.length, ve = new Array(q), xe = 0; xe < q; xe++)
            ve[xe] = arguments[xe];
          return C(ce, null, [(ke = n["append-inner"]) == null ? void 0 : ke.call(n, ...ve), e.menuIcon ? S(Ve, {
            class: "v-select__menu-icon",
            color: (me = l.value) == null ? void 0 : me.fieldIconColor,
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), pt({
      isFocused: m,
      menu: V,
      select: K
    }, l);
  }
}), zv = (e, t, n) => {
  if (e == null || t == null) return -1;
  if (!t.length) return 0;
  e = e.toString().toLocaleLowerCase(), t = t.toString().toLocaleLowerCase();
  const a = [];
  let l = e.indexOf(t);
  for (; ~l; )
    a.push([l, l + t.length]), l = e.indexOf(t, l + t.length);
  return a.length ? a : -1;
};
function Ma(e, t) {
  if (!(e == null || typeof e == "boolean" || e === -1))
    return typeof e == "number" ? [[e, e + t.length]] : Array.isArray(e[0]) ? e : [e];
}
const Zr = O({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function Wv(e, t, n) {
  var s;
  const a = [], l = (n == null ? void 0 : n.default) ?? zv, i = n != null && n.filterKeys ? Oe(n.filterKeys) : !1, o = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
  if (!(e != null && e.length)) return a;
  let r = null;
  e: for (let c = 0; c < e.length; c++) {
    const [u, d = u] = Oe(e[c]), f = {}, v = {};
    let m = -1;
    if ((t || o > 0) && !(n != null && n.noFilter)) {
      let b = !1;
      if (typeof u == "object") {
        if (u.type === "divider" || u.type === "subheader") {
          (r == null ? void 0 : r.type) === "divider" && u.type === "subheader" && a.push(r), r = {
            index: c,
            matches: {},
            type: u.type
          };
          continue;
        }
        const g = i || Object.keys(d);
        b = g.length === o;
        for (const k of g) {
          const p = Re(d, k), V = (s = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : s[k];
          if (m = V ? V(p, t, u) : l(p, t, u), m !== -1 && m !== !1)
            V ? f[k] = Ma(m, t) : v[k] = Ma(m, t);
          else if ((n == null ? void 0 : n.filterMode) === "every")
            continue e;
        }
      } else
        m = l(u, t, u), m !== -1 && m !== !1 && (v.title = Ma(m, t));
      const y = Object.keys(v).length, h = Object.keys(f).length;
      if (!y && !h || (n == null ? void 0 : n.filterMode) === "union" && h !== o && !y || (n == null ? void 0 : n.filterMode) === "intersection" && (h !== o || !y && o > 0 && !b)) continue;
    }
    r && (a.push(r), r = null), a.push({
      index: c,
      matches: {
        ...v,
        ...f
      }
    });
  }
  return a;
}
function Qr(e, t, n, a) {
  const l = G([]), i = G(/* @__PURE__ */ new Map()), o = x(() => a != null && a.transform ? lt(t).map((s) => [s, a.transform(s)]) : lt(t));
  _e(() => {
    const s = typeof n == "function" ? n() : lt(n), c = typeof s != "string" && typeof s != "number" ? "" : String(s), u = Wv(o.value, c, {
      customKeyFilter: {
        ...e.customKeyFilter,
        ...lt(a == null ? void 0 : a.customKeyFilter)
      },
      default: e.customFilter,
      filterKeys: e.filterKeys,
      filterMode: e.filterMode,
      noFilter: e.noFilter
    }), d = lt(t), f = [], v = /* @__PURE__ */ new Map();
    u.forEach((m) => {
      let {
        index: b,
        matches: y
      } = m;
      const h = d[b];
      f.push(h), v.set(h.value, y);
    }), l.value = f, i.value = v;
  });
  function r(s) {
    return i.value.get(s.value);
  }
  return {
    filteredItems: l,
    filteredMatches: i,
    getMatches: r
  };
}
function jv(e, t, n) {
  return n == null || !n.length ? t : n.map((a, l) => {
    const i = l === 0 ? 0 : n[l - 1][1], o = [C("span", {
      class: X(`${e}__unmask`)
    }, [t.slice(i, a[0])]), C("span", {
      class: X(`${e}__mask`)
    }, [t.slice(a[0], a[1])])];
    return l === n.length - 1 && o.push(C("span", {
      class: X(`${e}__unmask`)
    }, [t.slice(a[1])])), C(ce, null, [o]);
  });
}
const Gv = O({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: Boolean,
  search: String,
  ...Zr({
    filterKeys: ["title"]
  }),
  ...Xr(),
  ...Xe(_l({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...ln({
    transition: !1
  })
}, "VAutocomplete"), lg = U()({
  name: "VAutocomplete",
  props: Gv(),
  emits: {
    "update:focused": (e) => !0,
    "update:search": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = ot(), l = Y(), i = G(!1), o = G(!0), r = G(!1), s = Y(), c = Y(), u = G(-1), {
      items: d,
      transformIn: f,
      transformOut: v
    } = ur(e), {
      textColorClasses: m,
      textColorStyles: b
    } = it(() => {
      var z;
      return (z = l.value) == null ? void 0 : z.color;
    }), y = fe(e, "search", ""), h = fe(e, "modelValue", [], (z) => f(z === null ? [null] : Oe(z)), (z) => {
      const ne = v(z);
      return e.multiple ? ne : ne[0] ?? null;
    }), g = x(() => typeof e.counterValue == "function" ? e.counterValue(h.value) : typeof e.counterValue == "number" ? e.counterValue : h.value.length), k = Il(e), {
      filteredItems: p,
      getMatches: V
    } = Qr(e, d, () => o.value ? "" : y.value), A = x(() => e.hideSelected ? p.value.filter((z) => !h.value.some((ne) => ne.value === z.value)) : p.value), P = x(() => !!(e.chips || n.chip)), w = x(() => P.value || !!n.selection), E = x(() => h.value.map((z) => z.props.value)), I = x(() => {
      var ne;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && y.value === ((ne = A.value[0]) == null ? void 0 : ne.title)) && A.value.length > 0 && !o.value && !r.value;
    }), _ = x(() => e.hideNoData && !A.value.length || k.isReadonly.value || k.isDisabled.value), D = fe(e, "menu"), F = x({
      get: () => D.value,
      set: (z) => {
        var ne;
        D.value && !z && ((ne = s.value) != null && ne.ΨopenChildren.size) || z && _.value || (D.value = z);
      }
    }), {
      menuId: $,
      ariaExpanded: R,
      ariaControls: W,
      ariaLabel: K
    } = Kr(e, F), te = Y(), le = Yr(te, l);
    function L(z) {
      e.openOnClear && (F.value = !0), y.value = "";
    }
    function Z() {
      _.value || (F.value = !0);
    }
    function M(z) {
      _.value || (i.value && (z.preventDefault(), z.stopPropagation()), F.value = !F.value);
    }
    function B(z) {
      var ne;
      (Wn(z) || z.key === "Backspace") && ((ne = l.value) == null || ne.focus());
    }
    function H(z) {
      var de, Te, Me, Qe, be;
      if (k.isReadonly.value) return;
      const ne = (de = l.value) == null ? void 0 : de.selectionStart, ae = h.value.length;
      if (["Enter", "ArrowDown", "ArrowUp"].includes(z.key) && z.preventDefault(), ["Enter", "ArrowDown"].includes(z.key) && (F.value = !0), ["Escape"].includes(z.key) && (F.value = !1), I.value && ["Enter", "Tab"].includes(z.key) && !h.value.some((pe) => {
        let {
          value: Be
        } = pe;
        return Be === A.value[0].value;
      }) && me(A.value[0]), z.key === "ArrowDown" && I.value && ((Te = te.value) == null || Te.focus("next")), ["Backspace", "Delete"].includes(z.key)) {
        if (!e.multiple && w.value && h.value.length > 0 && !y.value) return me(h.value[0], !1);
        if (~u.value) {
          z.preventDefault();
          const pe = u.value;
          me(h.value[u.value], !1), u.value = pe >= ae - 1 ? ae - 2 : pe;
        } else z.key === "Backspace" && !y.value && (u.value = ae - 1);
        return;
      }
      if (e.multiple)
        if (z.key === "ArrowLeft") {
          if (u.value < 0 && ne && ne > 0) return;
          const pe = u.value > -1 ? u.value - 1 : ae - 1;
          if (h.value[pe])
            u.value = pe;
          else {
            const Be = ((Me = y.value) == null ? void 0 : Me.length) ?? null;
            u.value = -1, (Qe = l.value) == null || Qe.setSelectionRange(Be, Be);
          }
        } else if (z.key === "ArrowRight") {
          if (u.value < 0) return;
          const pe = u.value + 1;
          h.value[pe] ? u.value = pe : (u.value = -1, (be = l.value) == null || be.setSelectionRange(0, 0));
        } else ~u.value && Wn(z) && (u.value = -1);
    }
    function ie(z) {
      if (Xt(l.value, ":autofill") || Xt(l.value, ":-webkit-autofill")) {
        const ne = d.value.find((ae) => ae.title === z.target.value);
        ne && me(ne);
      }
    }
    function ue() {
      var z;
      e.eager && ((z = c.value) == null || z.calculateVisibleItems());
    }
    function N() {
      var z;
      i.value && (o.value = !0, (z = l.value) == null || z.focus());
    }
    function q(z) {
      i.value = !0, setTimeout(() => {
        r.value = !0;
      });
    }
    function ve(z) {
      r.value = !1;
    }
    function xe(z) {
      (z == null || z === "" && !e.multiple && !w.value) && (h.value = []);
    }
    const ke = G(!1);
    function me(z) {
      let ne = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!z || z.props.disabled))
        if (e.multiple) {
          const ae = h.value.findIndex((Te) => (e.valueComparator || ze)(Te.value, z.value)), de = ne ?? !~ae;
          if (~ae) {
            const Te = de ? [...h.value, z] : [...h.value];
            Te.splice(ae, 1), h.value = Te;
          } else de && (h.value = [...h.value, z]);
          e.clearOnSelect && (y.value = "");
        } else {
          const ae = ne !== !1;
          h.value = ae ? [z] : [], y.value = ae && !w.value ? z.title : "", Ce(() => {
            F.value = !1, o.value = !0;
          });
        }
    }
    return J(i, (z, ne) => {
      var ae;
      z !== ne && (z ? (ke.value = !0, y.value = e.multiple || w.value ? "" : String(((ae = h.value.at(-1)) == null ? void 0 : ae.props.title) ?? ""), o.value = !0, Ce(() => ke.value = !1)) : (!e.multiple && y.value == null && (h.value = []), F.value = !1, (e.multiple || w.value) && (y.value = ""), u.value = -1));
    }), J(y, (z) => {
      !i.value || ke.value || (z && (F.value = !0), o.value = !z);
    }), J(F, () => {
      if (!e.hideSelected && F.value && h.value.length) {
        const z = A.value.findIndex((ne) => h.value.some((ae) => ne.value === ae.value));
        ye && window.requestAnimationFrame(() => {
          var ne;
          z >= 0 && ((ne = c.value) == null || ne.scrollToIndex(z));
        });
      }
    }), J(d, (z, ne) => {
      F.value || i.value && !ne.length && z.length && (F.value = !0);
    }), ee(() => {
      const z = !!(!e.hideNoData || A.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), ne = h.value.length > 0, ae = ta.filterProps(e);
      return S(ta, j({
        ref: l
      }, ae, {
        modelValue: y.value,
        "onUpdate:modelValue": [(de) => y.value = de, xe],
        focused: i.value,
        "onUpdate:focused": (de) => i.value = de,
        validationValue: h.externalValue,
        counterValue: g.value,
        dirty: ne,
        onChange: ie,
        class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, {
          "v-autocomplete--active-menu": F.value,
          "v-autocomplete--chips": !!e.chips,
          "v-autocomplete--selection-slot": !!w.value,
          "v-autocomplete--selecting-index": u.value > -1
        }, e.class],
        style: e.style,
        readonly: k.isReadonly.value,
        placeholder: ne ? void 0 : e.placeholder,
        "onClick:clear": L,
        "onMousedown:control": Z,
        onKeydown: H,
        "aria-expanded": R.value,
        "aria-controls": W.value
      }), {
        ...n,
        default: () => C(ce, null, [S(Hr, j({
          id: $.value,
          ref: s,
          modelValue: F.value,
          "onUpdate:modelValue": (de) => F.value = de,
          activator: "parent",
          contentClass: "v-autocomplete__content",
          disabled: _.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: ue,
          onAfterLeave: N
        }, e.menuProps), {
          default: () => [z && S(dr, j({
            ref: te,
            filterable: !0,
            selected: E.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (de) => de.preventDefault(),
            onKeydown: B,
            onFocusin: q,
            onFocusout: ve,
            tabindex: "-1",
            selectable: !0,
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, le, e.listProps), {
            default: () => {
              var de, Te, Me;
              return [(de = n["prepend-item"]) == null ? void 0 : de.call(n), !A.value.length && !e.hideNoData && (((Te = n["no-data"]) == null ? void 0 : Te.call(n)) ?? S(Qt, {
                key: "no-data",
                title: a(e.noDataText)
              }, null)), S(Ur, {
                ref: c,
                renderless: !0,
                items: A.value,
                itemKey: "value"
              }, {
                default: (Qe) => {
                  var $l, Ll, Ml;
                  let {
                    item: be,
                    index: pe,
                    itemRef: Be
                  } = Qe;
                  const Ol = j(be.props, {
                    ref: Be,
                    key: be.value,
                    active: I.value && pe === 0 ? !0 : void 0,
                    onClick: () => me(be, null)
                  });
                  return be.type === "divider" ? (($l = n.divider) == null ? void 0 : $l.call(n, {
                    props: be.raw,
                    index: pe
                  })) ?? S(Tn, j(be.props, {
                    key: `divider-${pe}`
                  }), null) : be.type === "subheader" ? ((Ll = n.subheader) == null ? void 0 : Ll.call(n, {
                    props: be.raw,
                    index: pe
                  })) ?? S(kl, j(be.props, {
                    key: `subheader-${pe}`
                  }), null) : ((Ml = n.item) == null ? void 0 : Ml.call(n, {
                    item: be,
                    index: pe,
                    props: Ol
                  })) ?? S(Qt, j(Ol, {
                    role: "option"
                  }), {
                    prepend: (En) => {
                      let {
                        isSelected: Us
                      } = En;
                      return C(ce, null, [e.multiple && !e.hideSelected ? S($t, {
                        key: be.value,
                        modelValue: Us,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, be.props.prependAvatar && S(At, {
                        image: be.props.prependAvatar
                      }, null), be.props.prependIcon && S(Ve, {
                        icon: be.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var En;
                      return o.value ? be.title : jv("v-autocomplete", be.title, (En = V(be)) == null ? void 0 : En.title);
                    }
                  });
                }
              }), (Me = n["append-item"]) == null ? void 0 : Me.call(n)];
            }
          })]
        }), h.value.map((de, Te) => {
          function Me(Be) {
            Be.stopPropagation(), Be.preventDefault(), me(de, !1);
          }
          const Qe = {
            "onClick:close": Me,
            onKeydown(Be) {
              Be.key !== "Enter" && Be.key !== " " || (Be.preventDefault(), Be.stopPropagation(), Me(Be));
            },
            onMousedown(Be) {
              Be.preventDefault(), Be.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, be = P.value ? !!n.chip : !!n.selection, pe = be ? sl(P.value ? n.chip({
            item: de,
            index: Te,
            props: Qe
          }) : n.selection({
            item: de,
            index: Te
          })) : void 0;
          if (!(be && !pe))
            return C("div", {
              key: de.value,
              class: X(["v-autocomplete__selection", Te === u.value && ["v-autocomplete__selection--selected", m.value]]),
              style: re(Te === u.value ? b.value : {})
            }, [P.value ? n.chip ? S(Se, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: de.title
                }
              }
            }, {
              default: () => [pe]
            }) : S(Al, j({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: de.title,
              disabled: de.props.disabled
            }, Qe), null) : pe ?? C("span", {
              class: "v-autocomplete__selection-text"
            }, [de.title, e.multiple && Te < h.value.length - 1 && C("span", {
              class: "v-autocomplete__selection-comma"
            }, [Nn(",")])])]);
        })]),
        "append-inner": function() {
          var Qe, be;
          for (var de = arguments.length, Te = new Array(de), Me = 0; Me < de; Me++)
            Te[Me] = arguments[Me];
          return C(ce, null, [(Qe = n["append-inner"]) == null ? void 0 : Qe.call(n, ...Te), e.menuIcon ? S(Ve, {
            class: "v-autocomplete__menu-icon",
            color: (be = l.value) == null ? void 0 : be.fieldIconColor,
            icon: e.menuIcon,
            onMousedown: M,
            onClick: fu,
            "aria-label": K.value,
            title: K.value,
            tabindex: "-1"
          }, null) : void 0]);
        }
      });
    }), pt({
      isFocused: i,
      isPristine: o,
      menu: F,
      search: y,
      filteredItems: p,
      select: me
    }, l);
  }
}), Uv = O({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (e) => !isNaN(parseFloat(e))
  },
  maxRows: {
    type: [Number, String],
    validator: (e) => !isNaN(parseFloat(e))
  },
  suffix: String,
  modelModifiers: Object,
  ...Wr(),
  ...Ca(),
  ...Tl()
}, "VTextarea"), ig = U()({
  name: "VTextarea",
  directives: {
    vIntersect: Zt
  },
  inheritAttrs: !1,
  props: Uv(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:rows": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const i = fe(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = ka(e), {
      onIntersect: c
    } = Gr(e), u = x(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), d = x(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), f = Y(), v = Y(), m = G(""), b = Y(), y = jr(e), h = x(() => e.persistentPlaceholder || o.value || e.active);
    function g() {
      var D;
      y.isSuppressing.value && y.update(), b.value !== document.activeElement && ((D = b.value) == null || D.focus()), o.value || r();
    }
    function k(D) {
      g(), a("click:control", D);
    }
    function p(D) {
      a("mousedown:control", D);
    }
    function V(D) {
      D.stopPropagation(), g(), Ce(() => {
        i.value = "", rl(e["onClick:clear"], D);
      });
    }
    function A(D) {
      var $;
      const F = D.target;
      if (i.value = F.value, ($ = e.modelModifiers) != null && $.trim) {
        const R = [F.selectionStart, F.selectionEnd];
        Ce(() => {
          F.selectionStart = R[0], F.selectionEnd = R[1];
        });
      }
    }
    const P = Y(), w = Y(Number(e.rows)), E = x(() => ["plain", "underlined"].includes(e.variant));
    _e(() => {
      e.autoGrow || (w.value = Number(e.rows));
    });
    function I() {
      e.autoGrow && Ce(() => {
        if (!P.value || !v.value) return;
        const D = getComputedStyle(P.value), F = getComputedStyle(v.value.$el), $ = parseFloat(D.getPropertyValue("--v-field-padding-top")) + parseFloat(D.getPropertyValue("--v-input-padding-top")) + parseFloat(D.getPropertyValue("--v-field-padding-bottom")), R = P.value.scrollHeight, W = parseFloat(D.lineHeight), K = Math.max(parseFloat(e.rows) * W + $, parseFloat(F.getPropertyValue("--v-input-control-height"))), te = parseFloat(e.maxRows) * W + $ || 1 / 0, le = Fe(R ?? 0, K, te);
        w.value = Math.floor((le - $) / W), m.value = Q(le);
      });
    }
    ct(I), J(i, I), J(() => e.rows, I), J(() => e.maxRows, I), J(() => e.density, I), J(w, (D) => {
      a("update:rows", D);
    });
    let _;
    return J(P, (D) => {
      D ? (_ = new ResizeObserver(I), _.observe(P.value)) : _ == null || _.disconnect();
    }), Ke(() => {
      _ == null || _.disconnect();
    }), ee(() => {
      const D = !!(l.counter || e.counter || e.counterValue), F = !!(D || l.details), [$, R] = ca(n), {
        modelValue: W,
        ...K
      } = Jt.filterProps(e), te = {
        ...ea.filterProps(e),
        "onClick:clear": V
      };
      return S(Jt, j({
        ref: f,
        modelValue: i.value,
        "onUpdate:modelValue": (le) => i.value = le,
        class: ["v-textarea v-text-field", {
          "v-textarea--prefixed": e.prefix,
          "v-textarea--suffixed": e.suffix,
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-textarea--auto-grow": e.autoGrow,
          "v-textarea--no-resize": e.noResize || e.autoGrow,
          "v-input--plain-underlined": E.value
        }, e.class],
        style: e.style
      }, $, K, {
        centerAffix: w.value === 1 && !E.value,
        focused: o.value
      }), {
        ...l,
        default: (le) => {
          let {
            id: L,
            isDisabled: Z,
            isDirty: M,
            isReadonly: B,
            isValid: H,
            hasDetails: ie
          } = le;
          return S(ea, j({
            ref: v,
            style: {
              "--v-textarea-control-height": m.value
            },
            onClick: k,
            onMousedown: p,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, te, {
            id: L.value,
            active: h.value || M.value,
            centerAffix: w.value === 1 && !E.value,
            dirty: M.value || e.dirty,
            disabled: Z.value,
            focused: o.value,
            details: ie.value,
            error: H.value === !1
          }), {
            ...l,
            default: (ue) => {
              let {
                props: {
                  class: N,
                  ...q
                }
              } = ue;
              return C(ce, null, [e.prefix && C("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), Le(C("textarea", j({
                ref: b,
                class: N,
                value: i.value,
                onInput: A,
                autofocus: e.autofocus,
                readonly: B.value,
                disabled: Z.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: y.fieldName.value,
                autocomplete: y.fieldAutocomplete.value,
                onFocus: g,
                onBlur: s
              }, q, R), null), [[Zt, {
                handler: c
              }, null, {
                once: !0
              }]]), e.autoGrow && Le(C("textarea", {
                class: X([N, "v-textarea__sizer"]),
                id: `${q.id}-sizer`,
                "onUpdate:modelValue": (ve) => i.value = ve,
                ref: P,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[iu, i.value]]), e.suffix && C("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: F ? (le) => {
          var L;
          return C(ce, null, [(L = l.details) == null ? void 0 : L.call(l, le), D && C(ce, null, [C("span", null, null), S(zr, {
            active: e.persistentCounter || o.value,
            value: u.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), pt({}, f, v, b);
  }
}), Yv = O({
  ...oe(),
  ...bv()
}, "VForm"), og = U()({
  name: "VForm",
  props: Yv(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = Sv(e), i = Y();
    function o(s) {
      s.preventDefault(), l.reset();
    }
    function r(s) {
      const c = s, u = l.validate();
      c.then = u.then.bind(u), c.catch = u.catch.bind(u), c.finally = u.finally.bind(u), a("submit", c), c.defaultPrevented || u.then((d) => {
        var v;
        let {
          valid: f
        } = d;
        f && ((v = i.value) == null || v.submit());
      }), c.preventDefault();
    }
    return ee(() => {
      var s;
      return C("form", {
        ref: i,
        class: X(["v-form", e.class]),
        style: re(e.style),
        novalidate: !0,
        onReset: o,
        onSubmit: r
      }, [(s = n.default) == null ? void 0 : s.call(n, l)]);
    }), pt(l, i);
  }
}), Kv = O({
  ...oe(),
  ...ge()
}, "VCardActions"), Xv = U()({
  name: "VCardActions",
  props: Kv(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return nt({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), ee(() => S(e.tag, {
      class: X(["v-card-actions", e.class]),
      style: re(e.style)
    }, n)), {};
  }
}), qv = O({
  opacity: [Number, String],
  ...oe(),
  ...ge()
}, "VCardSubtitle"), Zv = U()({
  name: "VCardSubtitle",
  props: qv(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => S(e.tag, {
      class: X(["v-card-subtitle", e.class]),
      style: re([{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), Qv = da("v-card-title"), Jv = O({
  appendAvatar: String,
  appendIcon: se,
  prependAvatar: String,
  prependIcon: se,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...oe(),
  ...Ze(),
  ...ge()
}, "VCardItem"), em = U()({
  name: "VCardItem",
  props: Jv(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => {
      const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), i = !!(e.appendAvatar || e.appendIcon), o = !!(i || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
      return S(e.tag, {
        class: X(["v-card-item", e.class]),
        style: re(e.style)
      }, {
        default: () => {
          var c;
          return [l && C("div", {
            key: "prepend",
            class: "v-card-item__prepend"
          }, [n.prepend ? S(Se, {
            key: "prepend-defaults",
            disabled: !a,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              }
            }
          }, n.prepend) : C(ce, null, [e.prependAvatar && S(At, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && S(Ve, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)])]), C("div", {
            class: "v-card-item__content"
          }, [r && S(Qv, {
            key: "title"
          }, {
            default: () => {
              var u;
              return [((u = n.title) == null ? void 0 : u.call(n)) ?? Ft(e.title)];
            }
          }), s && S(Zv, {
            key: "subtitle"
          }, {
            default: () => {
              var u;
              return [((u = n.subtitle) == null ? void 0 : u.call(n)) ?? Ft(e.subtitle)];
            }
          }), (c = n.default) == null ? void 0 : c.call(n)]), o && C("div", {
            key: "append",
            class: "v-card-item__append"
          }, [n.append ? S(Se, {
            key: "append-defaults",
            disabled: !i,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              }
            }
          }, n.append) : C(ce, null, [e.appendIcon && S(Ve, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && S(At, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)])])];
        }
      });
    }), {};
  }
}), tm = O({
  opacity: [Number, String],
  ...oe(),
  ...ge()
}, "VCardText"), nm = U()({
  name: "VCardText",
  props: tm(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ee(() => S(e.tag, {
      class: X(["v-card-text", e.class]),
      style: re([{
        "--v-card-text-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), am = O({
  appendAvatar: String,
  appendIcon: se,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: se,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...ft(),
  ...oe(),
  ...Ze(),
  ...st(),
  ...vt(),
  ...ya(),
  ...an(),
  ...Pn(),
  ...He(),
  ...wa(),
  ...ge(),
  ...we(),
  ...mt({
    variant: "elevated"
  })
}, "VCard"), rg = U()({
  name: "VCard",
  directives: {
    vRipple: Ct
  },
  props: am(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = Ae(e), {
      borderClasses: i
    } = bt(e), {
      colorClasses: o,
      colorStyles: r,
      variantClasses: s
    } = Nt(e), {
      densityClasses: c
    } = rt(e), {
      dimensionStyles: u
    } = ut(e), {
      elevationClasses: d
    } = St(e), {
      loaderClasses: f
    } = ba(e), {
      locationStyles: v
    } = Vn(e), {
      positionClasses: m
    } = In(e), {
      roundedClasses: b
    } = je(e), y = Sa(e, n);
    return ee(() => {
      const h = e.link !== !1 && y.isLink.value, g = !e.disabled && e.link !== !1 && (e.link || y.isClickable.value), k = h ? "a" : e.tag, p = !!(a.title || e.title != null), V = !!(a.subtitle || e.subtitle != null), A = p || V, P = !!(a.append || e.appendAvatar || e.appendIcon), w = !!(a.prepend || e.prependAvatar || e.prependIcon), E = !!(a.image || e.image), I = A || w || P, _ = !!(a.text || e.text != null);
      return Le(S(k, j({
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": g
        }, l.value, i.value, o.value, c.value, d.value, f.value, m.value, b.value, s.value, e.class],
        style: [r.value, u.value, v.value, e.style],
        onClick: g && y.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, y.linkProps), {
        default: () => {
          var D;
          return [E && C("div", {
            key: "image",
            class: "v-card__image"
          }, [a.image ? S(Se, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, a.image) : S(xa, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), S(bl, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: a.loader
          }), I && S(em, {
            key: "item",
            prependAvatar: e.prependAvatar,
            prependIcon: e.prependIcon,
            title: e.title,
            subtitle: e.subtitle,
            appendAvatar: e.appendAvatar,
            appendIcon: e.appendIcon
          }, {
            default: a.item,
            prepend: a.prepend,
            title: a.title,
            subtitle: a.subtitle,
            append: a.append
          }), _ && S(nm, {
            key: "text"
          }, {
            default: () => {
              var F;
              return [((F = a.text) == null ? void 0 : F.call(a)) ?? e.text];
            }
          }), (D = a.default) == null ? void 0 : D.call(a), a.actions && S(Xv, null, {
            default: a.actions
          }), Rt(g, "v-card")];
        }
      }), [[Ct, g && e.ripple]]);
    }), {};
  }
}), lm = O({
  color: String,
  ...ft(),
  ...oe(),
  ...st(),
  ...vt(),
  ...an(),
  ...Pn(),
  ...He(),
  ...ge(),
  ...we()
}, "VSheet"), sg = U()({
  name: "VSheet",
  props: lm(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Ae(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ye(() => e.color), {
      borderClasses: o
    } = bt(e), {
      dimensionStyles: r
    } = ut(e), {
      elevationClasses: s
    } = St(e), {
      locationStyles: c
    } = Vn(e), {
      positionClasses: u
    } = In(e), {
      roundedClasses: d
    } = je(e);
    return ee(() => S(e.tag, {
      class: X(["v-sheet", a.value, l.value, o.value, s.value, u.value, d.value, e.class]),
      style: re([i.value, r.value, c.value, e.style])
    }, n)), {};
  }
}), ug = U()({
  name: "VSlideGroupItem",
  props: ma(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ga(e, Er);
    return () => {
      var l;
      return (l = n.default) == null ? void 0 : l.call(n, {
        isSelected: a.isSelected.value,
        select: a.select,
        toggle: a.toggle,
        selectedClass: a.selectedClass.value
      });
    };
  }
});
function im() {
  const e = Y([]);
  ou(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return {
    refs: e,
    updateRef: t
  };
}
const om = O({
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: Number,
    default: (e) => e.start
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: (e) => e % 1 === 0
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: se,
    default: "$first"
  },
  prevIcon: {
    type: se,
    default: "$prev"
  },
  nextIcon: {
    type: se,
    default: "$next"
  },
  lastIcon: {
    type: se,
    default: "$last"
  },
  ariaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.root"
  },
  pageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.page"
  },
  currentPageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.currentPage"
  },
  firstAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.first"
  },
  previousAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.previous"
  },
  nextAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.next"
  },
  lastAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.last"
  },
  ellipsis: {
    type: String,
    default: "..."
  },
  showFirstLastPage: Boolean,
  ...ft(),
  ...oe(),
  ...Ze(),
  ...vt(),
  ...He(),
  ...nn(),
  ...ge({
    tag: "nav"
  }),
  ...we(),
  ...mt({
    variant: "text"
  })
}, "VPagination"), Ui = U()({
  name: "VPagination",
  props: om(),
  emits: {
    "update:modelValue": (e) => !0,
    first: (e) => !0,
    prev: (e) => !0,
    next: (e) => !0,
    last: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = fe(e, "modelValue"), {
      t: i,
      n: o
    } = ot(), {
      isRtl: r
    } = qe(), {
      themeClasses: s
    } = Ae(e), {
      width: c
    } = Tt(), u = G(-1);
    nt(void 0, {
      scoped: !0
    });
    const {
      resizeRef: d
    } = It((w) => {
      if (!w.length) return;
      const {
        target: E,
        contentRect: I
      } = w[0], _ = E.querySelector(".v-pagination__list > *");
      if (!_) return;
      const D = I.width, F = _.offsetWidth + parseFloat(getComputedStyle(_).marginRight) * 2;
      u.value = b(D, F);
    }), f = x(() => parseInt(e.length, 10)), v = x(() => parseInt(e.start, 10)), m = x(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : u.value >= 0 ? u.value : b(c.value, 58));
    function b(w, E) {
      const I = e.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        Number(((w - E * I) / E).toFixed(2))
      ));
    }
    const y = x(() => {
      if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
      if (m.value <= 0) return [];
      if (m.value === 1) return [l.value];
      if (f.value <= m.value)
        return Gt(f.value, v.value);
      const w = m.value % 2 === 0, E = w ? m.value / 2 : Math.floor(m.value / 2), I = w ? E : E + 1, _ = f.value - E;
      if (I - l.value >= 0)
        return [...Gt(Math.max(1, m.value - 1), v.value), e.ellipsis, f.value];
      if (l.value - _ >= (w ? 1 : 0)) {
        const D = m.value - 1, F = f.value - D + v.value;
        return [v.value, e.ellipsis, ...Gt(D, F)];
      } else {
        const D = Math.max(1, m.value - 2), F = D === 1 ? l.value : l.value - Math.ceil(D / 2) + v.value;
        return [v.value, e.ellipsis, ...Gt(D, F), e.ellipsis, f.value];
      }
    });
    function h(w, E, I) {
      w.preventDefault(), l.value = E, I && a(I, E);
    }
    const {
      refs: g,
      updateRef: k
    } = im();
    nt({
      VPaginationBtn: {
        color: T(() => e.color),
        border: T(() => e.border),
        density: T(() => e.density),
        size: T(() => e.size),
        variant: T(() => e.variant),
        rounded: T(() => e.rounded),
        elevation: T(() => e.elevation)
      }
    });
    const p = x(() => y.value.map((w, E) => {
      const I = (_) => k(_, E);
      if (typeof w == "string")
        return {
          isActive: !1,
          key: `ellipsis-${E}`,
          page: w,
          props: {
            ref: I,
            ellipsis: !0,
            icon: !0,
            disabled: !0
          }
        };
      {
        const _ = w === l.value;
        return {
          isActive: _,
          key: w,
          page: o(w),
          props: {
            ref: I,
            ellipsis: !1,
            icon: !0,
            disabled: !!e.disabled || Number(e.length) < 2,
            color: _ ? e.activeColor : e.color,
            "aria-current": _,
            "aria-label": i(_ ? e.currentPageAriaLabel : e.pageAriaLabel, w),
            onClick: (D) => h(D, w)
          }
        };
      }
    })), V = x(() => {
      const w = !!e.disabled || l.value <= v.value, E = !!e.disabled || l.value >= v.value + f.value - 1;
      return {
        first: e.showFirstLastPage ? {
          icon: r.value ? e.lastIcon : e.firstIcon,
          onClick: (I) => h(I, v.value, "first"),
          disabled: w,
          "aria-label": i(e.firstAriaLabel),
          "aria-disabled": w
        } : void 0,
        prev: {
          icon: r.value ? e.nextIcon : e.prevIcon,
          onClick: (I) => h(I, l.value - 1, "prev"),
          disabled: w,
          "aria-label": i(e.previousAriaLabel),
          "aria-disabled": w
        },
        next: {
          icon: r.value ? e.prevIcon : e.nextIcon,
          onClick: (I) => h(I, l.value + 1, "next"),
          disabled: E,
          "aria-label": i(e.nextAriaLabel),
          "aria-disabled": E
        },
        last: e.showFirstLastPage ? {
          icon: r.value ? e.firstIcon : e.lastIcon,
          onClick: (I) => h(I, v.value + f.value - 1, "last"),
          disabled: E,
          "aria-label": i(e.lastAriaLabel),
          "aria-disabled": E
        } : void 0
      };
    });
    function A() {
      var E;
      const w = l.value - v.value;
      (E = g.value[w]) == null || E.$el.focus();
    }
    function P(w) {
      w.key === zl.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, Ce(A)) : w.key === zl.right && !e.disabled && l.value < v.value + f.value - 1 && (l.value = l.value + 1, Ce(A));
    }
    return ee(() => S(e.tag, {
      ref: d,
      class: X(["v-pagination", s.value, e.class]),
      style: re(e.style),
      role: "navigation",
      "aria-label": i(e.ariaLabel),
      onKeydown: P,
      "data-test": "v-pagination-root"
    }, {
      default: () => [C("ul", {
        class: "v-pagination__list"
      }, [e.showFirstLastPage && C("li", {
        key: "first",
        class: "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [n.first ? n.first(V.value.first) : S(et, j({
        _as: "VPaginationBtn"
      }, V.value.first), null)]), C("li", {
        key: "prev",
        class: "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [n.prev ? n.prev(V.value.prev) : S(et, j({
        _as: "VPaginationBtn"
      }, V.value.prev), null)]), p.value.map((w, E) => C("li", {
        key: w.key,
        class: X(["v-pagination__item", {
          "v-pagination__item--is-active": w.isActive
        }]),
        "data-test": "v-pagination-item"
      }, [n.item ? n.item(w) : S(et, j({
        _as: "VPaginationBtn"
      }, w.props), {
        default: () => [w.page]
      })])), C("li", {
        key: "next",
        class: "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [n.next ? n.next(V.value.next) : S(et, j({
        _as: "VPaginationBtn"
      }, V.value.next), null)]), e.showFirstLastPage && C("li", {
        key: "last",
        class: "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [n.last ? n.last(V.value.last) : S(et, j({
        _as: "VPaginationBtn"
      }, V.value.last), null)])])]
    })), {};
  }
}), Jr = O({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate"), es = Symbol.for("vuetify:data-table-pagination");
function ts(e) {
  const t = fe(e, "page", void 0, (a) => Number(a ?? 1)), n = fe(e, "itemsPerPage", void 0, (a) => Number(a ?? 10));
  return {
    page: t,
    itemsPerPage: n
  };
}
function ns(e) {
  const {
    page: t,
    itemsPerPage: n,
    itemsLength: a
  } = e, l = x(() => n.value === -1 ? 0 : n.value * (t.value - 1)), i = x(() => n.value === -1 ? a.value : Math.min(a.value, l.value + n.value)), o = x(() => n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value));
  J([t, o], () => {
    t.value > o.value && (t.value = o.value);
  });
  function r(f) {
    n.value = f, t.value = 1;
  }
  function s() {
    t.value = Fe(t.value + 1, 1, o.value);
  }
  function c() {
    t.value = Fe(t.value - 1, 1, o.value);
  }
  function u(f) {
    t.value = Fe(f, 1, o.value);
  }
  const d = {
    page: t,
    itemsPerPage: n,
    startIndex: l,
    stopIndex: i,
    pageCount: o,
    itemsLength: a,
    nextPage: s,
    prevPage: c,
    setPage: u,
    setItemsPerPage: r
  };
  return Pe(es, d), d;
}
function rm() {
  const e = he(es);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function sm(e) {
  const t = Ie("usePaginatedItems"), {
    items: n,
    startIndex: a,
    stopIndex: l,
    itemsPerPage: i
  } = e, o = x(() => i.value <= 0 ? n.value : n.value.slice(a.value, l.value));
  return J(o, (r) => {
    t.emit("update:currentItems", r);
  }, {
    immediate: !0
  }), {
    paginatedItems: o
  };
}
const El = O({
  prevIcon: {
    type: se,
    default: "$prev"
  },
  nextIcon: {
    type: se,
    default: "$next"
  },
  firstIcon: {
    type: se,
    default: "$first"
  },
  lastIcon: {
    type: se,
    default: "$last"
  },
  itemsPerPageText: {
    type: String,
    default: "$vuetify.dataFooter.itemsPerPageText"
  },
  pageText: {
    type: String,
    default: "$vuetify.dataFooter.pageText"
  },
  firstPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.firstPage"
  },
  prevPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.prevPage"
  },
  nextPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.nextPage"
  },
  lastPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.lastPage"
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: "10"
    }, {
      value: 25,
      title: "25"
    }, {
      value: 50,
      title: "50"
    }, {
      value: 100,
      title: "100"
    }, {
      value: -1,
      title: "$vuetify.dataFooter.itemsPerPageAll"
    }]
  },
  showCurrentPage: Boolean
}, "VDataTableFooter"), na = U()({
  name: "VDataTableFooter",
  props: El(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = ot(), {
      page: l,
      pageCount: i,
      startIndex: o,
      stopIndex: r,
      itemsLength: s,
      itemsPerPage: c,
      setItemsPerPage: u
    } = rm(), d = x(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? {
      value: f,
      title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f)
    } : {
      ...f,
      title: isNaN(Number(f.title)) ? a(f.title) : f.title
    }));
    return ee(() => {
      var v;
      const f = Ui.filterProps(e);
      return C("div", {
        class: "v-data-table-footer"
      }, [(v = n.prepend) == null ? void 0 : v.call(n), C("div", {
        class: "v-data-table-footer__items-per-page"
      }, [C("span", {
        "aria-label": a(e.itemsPerPageText)
      }, [a(e.itemsPerPageText)]), S(qr, {
        items: d.value,
        modelValue: c.value,
        "onUpdate:modelValue": (m) => u(Number(m)),
        density: "compact",
        variant: "outlined",
        hideDetails: !0
      }, null)]), C("div", {
        class: "v-data-table-footer__info"
      }, [C("div", null, [a(e.pageText, s.value ? o.value + 1 : 0, r.value, s.value)])]), C("div", {
        class: "v-data-table-footer__pagination"
      }, [S(Ui, j({
        modelValue: l.value,
        "onUpdate:modelValue": (m) => l.value = m,
        density: "comfortable",
        firstAriaLabel: e.firstPageLabel,
        lastAriaLabel: e.lastPageLabel,
        length: i.value,
        nextAriaLabel: e.nextPageLabel,
        previousAriaLabel: e.prevPageLabel,
        rounded: !0,
        showFirstLastPage: !0,
        totalVisible: e.showCurrentPage ? 1 : 0,
        variant: "plain"
      }, f), null)])]);
    }), {};
  }
}), xn = Uu({
  align: {
    type: String,
    default: "start"
  },
  fixed: {
    type: [Boolean, String],
    default: !1
  },
  fixedOffset: [Number, String],
  fixedEndOffset: [Number, String],
  height: [Number, String],
  lastFixed: Boolean,
  firstFixedEnd: Boolean,
  noPadding: Boolean,
  indent: [Number, String],
  empty: Boolean,
  tag: String,
  width: [Number, String],
  maxWidth: [Number, String],
  nowrap: Boolean
}, (e, t) => {
  let {
    slots: n
  } = t;
  const a = e.tag ?? "td", l = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
  return S(a, {
    class: X(["v-data-table__td", {
      "v-data-table-column--fixed": l === "start",
      "v-data-table-column--fixed-end": l === "end",
      "v-data-table-column--last-fixed": e.lastFixed,
      "v-data-table-column--first-fixed-end": e.firstFixedEnd,
      "v-data-table-column--no-padding": e.noPadding,
      "v-data-table-column--nowrap": e.nowrap,
      "v-data-table-column--empty": e.empty
    }, `v-data-table-column--align-${e.align}`]),
    style: {
      height: Q(e.height),
      width: Q(e.width),
      maxWidth: Q(e.maxWidth),
      left: l === "start" ? Q(e.fixedOffset || null) : void 0,
      right: l === "end" ? Q(e.fixedEndOffset || null) : void 0,
      paddingInlineStart: e.indent ? Q(e.indent) : void 0
    }
  }, {
    default: () => {
      var i;
      return [(i = n.default) == null ? void 0 : i.call(n)];
    }
  });
}), um = O({
  headers: Array
}, "DataTable-header"), as = Symbol.for("vuetify:data-table-headers"), ls = {
  title: "",
  sortable: !1
}, cm = {
  ...ls,
  width: 48
};
function dm() {
  const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((n) => ({
    element: n,
    priority: 0
  }));
  return {
    enqueue: (n, a) => {
      let l = !1;
      for (let i = 0; i < t.length; i++)
        if (t[i].priority > a) {
          t.splice(i, 0, {
            element: n,
            priority: a
          }), l = !0;
          break;
        }
      l || t.push({
        element: n,
        priority: a
      });
    },
    size: () => t.length,
    count: () => {
      let n = 0;
      if (!t.length) return 0;
      const a = Math.floor(t[0].priority);
      for (let l = 0; l < t.length; l++)
        Math.floor(t[l].priority) === a && (n += 1);
      return n;
    },
    dequeue: () => t.shift()
  };
}
function el(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children)
    t.push(e);
  else
    for (const n of e.children)
      el(n, t);
  return t;
}
function is(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e)
    n.key && t.add(n.key), n.children && is(n.children, t);
  return t;
}
function fm(e) {
  if (e.key) {
    if (e.key === "data-table-group") return ls;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return cm;
  }
}
function Bl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => Bl(n, t + 1))) : t;
}
function vm(e) {
  let t = !1;
  function n(i, o) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "none";
    if (i)
      if (r !== "none" && (i.fixed = r), i.fixed === !0 && (i.fixed = "start"), i.fixed === o)
        if (i.children)
          if (o === "start")
            for (let s = i.children.length - 1; s >= 0; s--)
              n(i.children[s], o, o);
          else
            for (let s = 0; s < i.children.length; s++)
              n(i.children[s], o, o);
        else
          !t && o === "start" ? i.lastFixed = !0 : !t && o === "end" ? i.firstFixedEnd = !0 : isNaN(Number(i.width)) ? cn(`Multiple fixed columns should have a static width (key: ${i.key})`) : i.minWidth = Math.max(Number(i.width) || 0, Number(i.minWidth) || 0), t = !0;
      else if (i.children)
        if (o === "start")
          for (let s = i.children.length - 1; s >= 0; s--)
            n(i.children[s], o);
        else
          for (let s = 0; s < i.children.length; s++)
            n(i.children[s], o);
      else
        t = !1;
  }
  for (let i = e.length - 1; i >= 0; i--)
    n(e[i], "start");
  for (let i = 0; i < e.length; i++)
    n(e[i], "end");
  let a = 0;
  for (let i = 0; i < e.length; i++)
    a = os(e[i], a);
  let l = 0;
  for (let i = e.length - 1; i >= 0; i--)
    l = rs(e[i], l);
}
function os(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedOffset = t;
    for (const n of e.children)
      t = os(n, t);
  } else e.fixed && e.fixed !== "end" && (e.fixedOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function rs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedEndOffset = t;
    for (const n of e.children)
      t = rs(n, t);
  } else e.fixed === "end" && (e.fixedEndOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function mm(e, t) {
  const n = [];
  let a = 0;
  const l = dm(e);
  for (; l.size() > 0; ) {
    let o = l.count();
    const r = [];
    let s = 1;
    for (; o > 0; ) {
      const {
        element: c,
        priority: u
      } = l.dequeue(), d = t - a - Bl(c);
      if (r.push({
        ...c,
        rowspan: d ?? 1,
        colspan: c.children ? el(c).length : 1
      }), c.children)
        for (const f of c.children) {
          const v = u % 1 + s / Math.pow(10, a + 2);
          l.enqueue(f, a + d + v);
        }
      s += 1, o -= 1;
    }
    a += 1, n.push(r);
  }
  return {
    columns: e.map((o) => el(o)).flat(),
    headers: n
  };
}
function ss(e) {
  const t = [];
  for (const n of e) {
    const a = {
      ...fm(n),
      ...n
    }, l = a.key ?? (typeof a.value == "string" ? a.value : null), i = a.value ?? l ?? null, o = {
      ...a,
      key: l,
      value: i,
      sortable: a.sortable ?? (a.key != null || !!a.sort),
      children: a.children ? ss(a.children) : void 0
    };
    t.push(o);
  }
  return t;
}
function us(e, t) {
  const n = Y([]), a = Y([]), l = Y({}), i = Y({}), o = Y({});
  _e(() => {
    var b, y, h;
    const c = (e.headers || Object.keys(e.items[0] ?? {}).map((g) => ({
      key: g,
      title: en(g)
    }))).slice(), u = is(c);
    (b = t == null ? void 0 : t.groupBy) != null && b.value.length && !u.has("data-table-group") && c.unshift({
      key: "data-table-group",
      title: "Group"
    }), (y = t == null ? void 0 : t.showSelect) != null && y.value && !u.has("data-table-select") && c.unshift({
      key: "data-table-select"
    }), (h = t == null ? void 0 : t.showExpand) != null && h.value && !u.has("data-table-expand") && c.push({
      key: "data-table-expand"
    });
    const d = ss(c);
    vm(d);
    const f = Math.max(...d.map((g) => Bl(g))) + 1, v = mm(d, f);
    n.value = v.headers, a.value = v.columns;
    const m = v.headers.flat(1);
    for (const g of m)
      g.key && (g.sortable && (g.sort && (l.value[g.key] = g.sort), g.sortRaw && (i.value[g.key] = g.sortRaw)), g.filter && (o.value[g.key] = g.filter));
  });
  const r = {
    headers: n,
    columns: a,
    sortFunctions: l,
    sortRawFunctions: i,
    filterFunctions: o
  };
  return Pe(as, r), r;
}
function pa() {
  const e = he(as);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const gm = {
  showSelectAll: !1,
  allSelected: () => [],
  select: (e) => {
    var a;
    let {
      items: t,
      value: n
    } = e;
    return new Set(n ? [(a = t[0]) == null ? void 0 : a.value] : []);
  },
  selectAll: (e) => {
    let {
      selected: t
    } = e;
    return t;
  }
}, cs = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      currentPage: t
    } = e;
    return t;
  },
  select: (e) => {
    let {
      items: t,
      value: n,
      selected: a
    } = e;
    for (const l of t)
      n ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: t,
      currentPage: n,
      selected: a
    } = e;
    return cs.select({
      items: n,
      value: t,
      selected: a
    });
  }
}, ds = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      allItems: t
    } = e;
    return t;
  },
  select: (e) => {
    let {
      items: t,
      value: n,
      selected: a
    } = e;
    for (const l of t)
      n ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: t,
      allItems: n,
      selected: a
    } = e;
    return ds.select({
      items: n,
      value: t,
      selected: a
    });
  }
}, hm = O({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  valueComparator: {
    type: Function,
    default: ze
  }
}, "DataTable-select"), fs = Symbol.for("vuetify:data-table-selection");
function vs(e, t) {
  let {
    allItems: n,
    currentPage: a
  } = t;
  const l = fe(e, "modelValue", e.modelValue, (g) => new Set(Oe(g).map((k) => {
    var p;
    return ((p = n.value.find((V) => e.valueComparator(k, V.value))) == null ? void 0 : p.value) ?? k;
  })), (g) => [...g.values()]), i = x(() => n.value.filter((g) => g.selectable)), o = x(() => a.value.filter((g) => g.selectable)), r = x(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return gm;
      case "all":
        return ds;
      case "page":
      default:
        return cs;
    }
  }), s = G(null);
  function c(g) {
    return Oe(g).every((k) => l.value.has(k.value));
  }
  function u(g) {
    return Oe(g).some((k) => l.value.has(k.value));
  }
  function d(g, k) {
    const p = r.value.select({
      items: g,
      value: k,
      selected: new Set(l.value)
    });
    l.value = p;
  }
  function f(g, k, p) {
    const V = [];
    if (k = k ?? a.value.findIndex((A) => A.value === g.value), e.selectStrategy !== "single" && (p != null && p.shiftKey) && s.value !== null) {
      const [A, P] = [s.value, k].sort((w, E) => w - E);
      V.push(...a.value.slice(A, P + 1).filter((w) => w.selectable));
    } else
      V.push(g), s.value = k;
    d(V, !c([g]));
  }
  function v(g) {
    const k = r.value.selectAll({
      value: g,
      allItems: i.value,
      currentPage: o.value,
      selected: new Set(l.value)
    });
    l.value = k;
  }
  const m = x(() => l.value.size > 0), b = x(() => {
    const g = r.value.allSelected({
      allItems: i.value,
      currentPage: o.value
    });
    return !!g.length && c(g);
  }), y = T(() => r.value.showSelectAll), h = {
    toggleSelect: f,
    select: d,
    selectAll: v,
    isSelected: c,
    isSomeSelected: u,
    someSelected: m,
    allSelected: b,
    showSelectAll: y,
    lastSelectedIndex: s,
    selectStrategy: r
  };
  return Pe(fs, h), h;
}
function Va() {
  const e = he(fs);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const ym = O({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort"), ms = Symbol.for("vuetify:data-table-sort");
function gs(e) {
  const t = fe(e, "sortBy"), n = T(() => e.mustSort), a = T(() => e.multiSort);
  return {
    sortBy: t,
    mustSort: n,
    multiSort: a
  };
}
function hs(e) {
  const {
    sortBy: t,
    mustSort: n,
    multiSort: a,
    page: l
  } = e, i = (s) => {
    if (s.key == null) return;
    let c = t.value.map((d) => ({
      ...d
    })) ?? [];
    const u = c.find((d) => d.key === s.key);
    u ? u.order === "desc" ? n.value && c.length === 1 ? u.order = "asc" : c = c.filter((d) => d.key !== s.key) : u.order = "desc" : a.value ? c.push({
      key: s.key,
      order: "asc"
    }) : c = [{
      key: s.key,
      order: "asc"
    }], t.value = c, l && (l.value = 1);
  };
  function o(s) {
    return !!t.value.find((c) => c.key === s.key);
  }
  const r = {
    sortBy: t,
    toggleSort: i,
    isSorted: o
  };
  return Pe(ms, r), r;
}
function ys() {
  const e = he(ms);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function bm(e, t, n, a) {
  const l = ot();
  return {
    sortedItems: x(() => {
      var o, r;
      return n.value.length ? Sm(t.value, n.value, l.current.value, {
        transform: a == null ? void 0 : a.transform,
        sortFunctions: {
          ...e.customKeySort,
          ...(o = a == null ? void 0 : a.sortFunctions) == null ? void 0 : o.value
        },
        sortRawFunctions: (r = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : r.value
      }) : t.value;
    })
  };
}
function Sm(e, t, n, a) {
  const l = new Intl.Collator(n, {
    sensitivity: "accent",
    usage: "sort"
  });
  return e.map((o) => [o, a != null && a.transform ? a.transform(o) : o]).sort((o, r) => {
    var s, c;
    for (let u = 0; u < t.length; u++) {
      let d = !1;
      const f = t[u].key, v = t[u].order ?? "asc";
      if (v === !1) continue;
      let m = Ot(o[1], f), b = Ot(r[1], f), y = o[0].raw, h = r[0].raw;
      if (v === "desc" && ([m, b] = [b, m], [y, h] = [h, y]), (s = a == null ? void 0 : a.sortRawFunctions) != null && s[f]) {
        const g = a.sortRawFunctions[f](y, h);
        if (g == null) continue;
        if (d = !0, g) return g;
      }
      if ((c = a == null ? void 0 : a.sortFunctions) != null && c[f]) {
        const g = a.sortFunctions[f](m, b);
        if (g == null) continue;
        if (d = !0, g) return g;
      }
      if (!d && (m instanceof Date && b instanceof Date && (m = m.getTime(), b = b.getTime()), [m, b] = [m, b].map((g) => g != null ? g.toString().toLocaleLowerCase() : g), m !== b))
        return Dn(m) && Dn(b) ? 0 : Dn(m) ? -1 : Dn(b) ? 1 : !isNaN(m) && !isNaN(b) ? Number(m) - Number(b) : l.compare(m, b);
    }
    return 0;
  }).map((o) => {
    let [r] = o;
    return r;
  });
}
const bs = O({
  color: String,
  disableSort: Boolean,
  fixedHeader: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: se,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: se,
    default: "$sortDesc"
  },
  headerProps: {
    type: Object
  },
  /** @deprecated */
  sticky: Boolean,
  ...Cn(),
  ...ya()
}, "VDataTableHeaders"), aa = U()({
  name: "VDataTableHeaders",
  props: bs(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = ot(), {
      toggleSort: l,
      sortBy: i,
      isSorted: o
    } = ys(), {
      someSelected: r,
      allSelected: s,
      selectAll: c,
      showSelectAll: u
    } = Va(), {
      columns: d,
      headers: f
    } = pa(), {
      loaderClasses: v
    } = ba(e);
    function m(E, I) {
      if (!(e.sticky || e.fixedHeader) && !E.fixed) return;
      const _ = typeof E.fixed == "string" ? E.fixed : E.fixed ? "start" : "none";
      return {
        position: "sticky",
        left: _ === "start" ? Q(E.fixedOffset) : void 0,
        right: _ === "end" ? Q(E.fixedEndOffset) : void 0,
        top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${I})` : void 0
      };
    }
    function b(E, I) {
      E.key === "Enter" && !e.disableSort && l(I);
    }
    function y(E) {
      const I = i.value.find((_) => _.key === E.key);
      return I ? I.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
    }
    const {
      backgroundColorClasses: h,
      backgroundColorStyles: g
    } = Ye(() => e.color), {
      displayClasses: k,
      mobile: p
    } = Tt(e), V = x(() => ({
      headers: f.value,
      columns: d.value,
      toggleSort: l,
      isSorted: o,
      sortBy: i.value,
      someSelected: r.value,
      allSelected: s.value,
      selectAll: c,
      getSortIcon: y
    })), A = x(() => ["v-data-table__th", {
      "v-data-table__th--sticky": e.sticky || e.fixedHeader
    }, k.value, v.value]), P = (E) => {
      let {
        column: I,
        x: _,
        y: D
      } = E;
      const F = I.key === "data-table-select" || I.key === "data-table-expand", $ = I.key === "data-table-group" && I.width === 0 && !I.title, R = j(e.headerProps ?? {}, I.headerProps ?? {});
      return S(xn, j({
        tag: "th",
        align: I.align,
        class: [{
          "v-data-table__th--sortable": I.sortable && !e.disableSort,
          "v-data-table__th--sorted": o(I),
          "v-data-table__th--fixed": I.fixed
        }, ...A.value],
        style: {
          width: Q(I.width),
          minWidth: Q(I.minWidth),
          maxWidth: Q(I.maxWidth),
          ...m(I, D)
        },
        colspan: I.colspan,
        rowspan: I.rowspan,
        fixed: I.fixed,
        nowrap: I.nowrap,
        lastFixed: I.lastFixed,
        firstFixedEnd: I.firstFixedEnd,
        noPadding: F,
        empty: $,
        tabindex: I.sortable ? 0 : void 0,
        onClick: I.sortable ? () => l(I) : void 0,
        onKeydown: I.sortable ? (W) => b(W, I) : void 0
      }, R), {
        default: () => {
          var te;
          const W = `header.${I.key}`, K = {
            column: I,
            selectAll: c,
            isSorted: o,
            toggleSort: l,
            sortBy: i.value,
            someSelected: r.value,
            allSelected: s.value,
            getSortIcon: y
          };
          return n[W] ? n[W](K) : $ ? "" : I.key === "data-table-select" ? ((te = n["header.data-table-select"]) == null ? void 0 : te.call(n, K)) ?? (u.value && S($t, {
            modelValue: s.value,
            indeterminate: r.value && !s.value,
            "onUpdate:modelValue": c
          }, null)) : C("div", {
            class: "v-data-table-header__content"
          }, [C("span", null, [I.title]), I.sortable && !e.disableSort && S(Ve, {
            key: "icon",
            class: "v-data-table-header__sort-icon",
            icon: y(I)
          }, null), e.multiSort && o(I) && C("div", {
            key: "badge",
            class: X(["v-data-table-header__sort-badge", ...h.value]),
            style: re(g.value)
          }, [i.value.findIndex((le) => le.key === I.key) + 1])]);
        }
      });
    }, w = () => {
      const E = x(() => d.value.filter((_) => (_ == null ? void 0 : _.sortable) && !e.disableSort)), I = x(() => {
        if (d.value.find((D) => D.key === "data-table-select") != null)
          return s.value ? "$checkboxOn" : r.value ? "$checkboxIndeterminate" : "$checkboxOff";
      });
      return S(xn, j({
        tag: "th",
        class: [...A.value],
        colspan: f.value.length + 1
      }, e.headerProps), {
        default: () => [C("div", {
          class: "v-data-table-header__content"
        }, [S(qr, {
          chips: !0,
          class: "v-data-table__td-sort-select",
          clearable: !0,
          density: "default",
          items: E.value,
          label: a("$vuetify.dataTable.sortBy"),
          multiple: e.multiSort,
          variant: "underlined",
          "onClick:clear": () => i.value = [],
          appendIcon: I.value,
          "onClick:append": () => c(!s.value)
        }, {
          chip: (_) => {
            var D;
            return S(Al, {
              onClick: (D = _.item.raw) != null && D.sortable ? () => l(_.item.raw) : void 0,
              onMousedown: (F) => {
                F.preventDefault(), F.stopPropagation();
              }
            }, {
              default: () => [_.item.title, S(Ve, {
                class: X(["v-data-table__td-sort-icon", o(_.item.raw) && "v-data-table__td-sort-icon-active"]),
                icon: y(_.item.raw),
                size: "small"
              }, null)]
            });
          }
        })])]
      });
    };
    ee(() => p.value ? C("tr", null, [S(w, null, null)]) : C(ce, null, [n.headers ? n.headers(V.value) : f.value.map((E, I) => C("tr", null, [E.map((_, D) => S(P, {
      column: _,
      x: D,
      y: I
    }, null))])), e.loading && C("tr", {
      class: "v-data-table-progress"
    }, [C("th", {
      colspan: d.value.length
    }, [S(bl, {
      name: "v-data-table-progress",
      absolute: !0,
      active: !0,
      color: typeof e.loading == "boolean" ? void 0 : e.loading,
      indeterminate: !0
    }, {
      default: n.loader
    })])])]));
  }
}), wm = O({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group"), Ss = Symbol.for("vuetify:data-table-group");
function ws(e) {
  return {
    groupBy: fe(e, "groupBy")
  };
}
function xs(e) {
  const {
    disableSort: t,
    groupBy: n,
    sortBy: a
  } = e, l = Y(/* @__PURE__ */ new Set()), i = x(() => n.value.map((u) => ({
    ...u,
    order: u.order ?? !1
  })).concat(t != null && t.value ? [] : a.value));
  function o(u) {
    return l.value.has(u.id);
  }
  function r(u) {
    const d = new Set(l.value);
    o(u) ? d.delete(u.id) : d.add(u.id), l.value = d;
  }
  function s(u) {
    function d(f) {
      const v = [];
      for (const m of f.items)
        "type" in m && m.type === "group" ? v.push(...d(m)) : v.push(m);
      return [...new Set(v)];
    }
    return d({
      items: u
    });
  }
  const c = {
    sortByWithGroups: i,
    toggleGroup: r,
    opened: l,
    groupBy: n,
    extractRows: s,
    isGroupOpen: o
  };
  return Pe(Ss, c), c;
}
function ks() {
  const e = he(Ss);
  if (!e) throw new Error("Missing group!");
  return e;
}
function xm(e, t) {
  if (!e.length) return [];
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = Ot(a.raw, t);
    n.has(l) || n.set(l, []), n.get(l).push(a);
  }
  return n;
}
function Cs(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const l = xm(e, t[0]), i = [], o = t.slice(1);
  return l.forEach((r, s) => {
    const c = t[0], u = `${a}_${c}_${s}`;
    i.push({
      depth: n,
      id: u,
      key: c,
      value: s,
      items: o.length ? Cs(r, o, n + 1, u) : r,
      type: "group"
    });
  }), i;
}
function ps(e, t, n) {
  const a = [];
  for (const l of e)
    "type" in l && l.type === "group" ? (l.value != null && a.push(l), (t.has(l.id) || l.value == null) && (a.push(...ps(l.items, t, n)), n && a.push({
      ...l,
      type: "group-summary"
    }))) : a.push(l);
  return a;
}
function Vs(e, t, n, a) {
  return {
    flatItems: x(() => {
      if (!t.value.length) return e.value;
      const i = Cs(e.value, t.value.map((o) => o.key));
      return ps(i, n.value, We(a));
    })
  };
}
const Ps = O({
  item: {
    type: Object,
    required: !0
  },
  groupCollapseIcon: {
    type: se,
    default: "$tableGroupCollapse"
  },
  groupExpandIcon: {
    type: se,
    default: "$tableGroupExpand"
  }
}, "VDataTableGroupHeaderRow"), km = U()({
  name: "VDataTableGroupHeaderRow",
  props: Ps(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isGroupOpen: a,
      toggleGroup: l,
      extractRows: i
    } = ks(), {
      isSelected: o,
      isSomeSelected: r,
      select: s
    } = Va(), {
      columns: c
    } = pa(), u = x(() => i([e.item])), d = T(() => c.value.length - (c.value.some((f) => f.key === "data-table-select") ? 1 : 0));
    return () => C("tr", {
      class: "v-data-table-group-header-row",
      style: {
        "--v-data-table-group-header-row-depth": e.item.depth
      }
    }, [c.value.map((f) => {
      var v, m;
      if (f.key === "data-table-group") {
        const b = a(e.item) ? e.groupCollapseIcon : e.groupExpandIcon, y = () => l(e.item);
        return ((v = n["data-table-group"]) == null ? void 0 : v.call(n, {
          item: e.item,
          count: u.value.length,
          props: {
            icon: b,
            onClick: y
          }
        })) ?? S(xn, {
          class: "v-data-table-group-header-row__column",
          colspan: d.value
        }, {
          default: () => [S(et, {
            size: "small",
            variant: "text",
            icon: b,
            onClick: y
          }, null), C("span", null, [e.item.value]), C("span", null, [Nn("("), u.value.length, Nn(")")])]
        });
      } else if (f.key === "data-table-select") {
        const b = o(u.value), y = r(u.value) && !b, h = (g) => s(u.value, g);
        return ((m = n["data-table-select"]) == null ? void 0 : m.call(n, {
          props: {
            modelValue: b,
            indeterminate: y,
            "onUpdate:modelValue": h
          }
        })) ?? S(xn, {
          class: "v-data-table__td--select-row",
          noPadding: !0
        }, {
          default: () => [S($t, {
            modelValue: b,
            indeterminate: y,
            "onUpdate:modelValue": h
          }, null)]
        });
      }
      return "";
    })]);
  }
}), Cm = O({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand"), Is = Symbol.for("vuetify:datatable:expanded");
function As(e) {
  const t = T(() => e.expandOnClick), n = fe(e, "expanded", e.expanded, (s) => new Set(s), (s) => [...s.values()]);
  function a(s) {
    return un(s.value) ? s.key : s.value;
  }
  function l(s, c) {
    const u = new Set(n.value);
    c ? u.add(a(s)) : u.delete(a(s)), n.value = u;
  }
  function i(s) {
    return n.value.has(a(s));
  }
  function o(s) {
    l(s, !i(s));
  }
  const r = {
    expand: l,
    expanded: n,
    expandOnClick: t,
    isExpanded: i,
    toggleExpand: o
  };
  return Pe(Is, r), r;
}
function Ts() {
  const e = he(Is);
  if (!e) throw new Error("foo");
  return e;
}
const _s = O({
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  collapseIcon: {
    type: se,
    default: "$collapse"
  },
  expandIcon: {
    type: se,
    default: "$expand"
  },
  onClick: $e(),
  onContextmenu: $e(),
  onDblclick: $e(),
  ...Cn()
}, "VDataTableRow"), pm = U()({
  name: "VDataTableRow",
  props: _s(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      displayClasses: a,
      mobile: l
    } = Tt(e, "v-data-table__tr"), {
      isSelected: i,
      toggleSelect: o,
      someSelected: r,
      allSelected: s,
      selectAll: c
    } = Va(), {
      isExpanded: u,
      toggleExpand: d
    } = Ts(), {
      toggleSort: f,
      sortBy: v,
      isSorted: m
    } = ys(), {
      columns: b
    } = pa();
    ee(() => C("tr", {
      class: X(["v-data-table__tr", {
        "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick)
      }, a.value]),
      onClick: e.onClick,
      onContextmenu: e.onContextmenu,
      onDblclick: e.onDblclick
    }, [e.item && b.value.map((y, h) => {
      const g = e.item, k = `item.${y.key}`, p = `header.${y.key}`, V = {
        index: e.index,
        item: g.raw,
        internalItem: g,
        value: Ot(g.columns, y.key),
        column: y,
        isSelected: i,
        toggleSelect: o,
        isExpanded: u,
        toggleExpand: d
      }, A = {
        column: y,
        selectAll: c,
        isSorted: m,
        toggleSort: f,
        sortBy: v.value,
        someSelected: r.value,
        allSelected: s.value,
        getSortIcon: () => ""
      }, P = typeof e.cellProps == "function" ? e.cellProps({
        index: V.index,
        item: V.item,
        internalItem: V.internalItem,
        value: V.value,
        column: y
      }) : e.cellProps, w = typeof y.cellProps == "function" ? y.cellProps({
        index: V.index,
        item: V.item,
        internalItem: V.internalItem,
        value: V.value
      }) : y.cellProps, E = y.key === "data-table-select" || y.key === "data-table-expand", I = y.key === "data-table-group" && y.width === 0 && !y.title;
      return S(xn, j({
        align: y.align,
        indent: y.intent,
        class: {
          "v-data-table__td--expanded-row": y.key === "data-table-expand",
          "v-data-table__td--select-row": y.key === "data-table-select"
        },
        fixed: y.fixed,
        fixedOffset: y.fixedOffset,
        fixedEndOffset: y.fixedEndOffset,
        lastFixed: y.lastFixed,
        firstFixedEnd: y.firstFixedEnd,
        maxWidth: l.value ? void 0 : y.maxWidth,
        noPadding: E,
        empty: I,
        nowrap: y.nowrap,
        width: l.value ? void 0 : y.width
      }, P, w), {
        default: () => {
          var D, F, $, R;
          if (y.key === "data-table-select")
            return ((D = n["item.data-table-select"]) == null ? void 0 : D.call(n, {
              ...V,
              props: {
                disabled: !g.selectable,
                modelValue: i([g]),
                onClick: Bn(() => o(g), ["stop"])
              }
            })) ?? S($t, {
              disabled: !g.selectable,
              modelValue: i([g]),
              onClick: Bn((W) => o(g, e.index, W), ["stop"])
            }, null);
          if (y.key === "data-table-expand")
            return ((F = n["item.data-table-expand"]) == null ? void 0 : F.call(n, {
              ...V,
              props: {
                icon: u(g) ? e.collapseIcon : e.expandIcon,
                size: "small",
                variant: "text",
                onClick: Bn(() => d(g), ["stop"])
              }
            })) ?? S(et, {
              icon: u(g) ? e.collapseIcon : e.expandIcon,
              size: "small",
              variant: "text",
              onClick: Bn(() => d(g), ["stop"])
            }, null);
          if (n[k] && !l.value) return n[k](V);
          const _ = Ft(V.value);
          return l.value ? C(ce, null, [C("div", {
            class: "v-data-table__td-title"
          }, [(($ = n[p]) == null ? void 0 : $.call(n, A)) ?? y.title]), C("div", {
            class: "v-data-table__td-value"
          }, [((R = n[k]) == null ? void 0 : R.call(n, V)) ?? _])]) : _;
        }
      });
    })]));
  }
}), Es = O({
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: "$vuetify.dataIterator.loadingText"
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  ...Pt(_s(), ["collapseIcon", "expandIcon"]),
  ...Pt(Ps(), ["groupCollapseIcon", "groupExpandIcon"]),
  ...Cn()
}, "VDataTableRows"), la = U()({
  name: "VDataTableRows",
  inheritAttrs: !1,
  props: Es(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      columns: l
    } = pa(), {
      expandOnClick: i,
      toggleExpand: o,
      isExpanded: r
    } = Ts(), {
      isSelected: s,
      toggleSelect: c
    } = Va(), {
      toggleGroup: u,
      isGroupOpen: d
    } = ks(), {
      t: f
    } = ot(), {
      mobile: v
    } = Tt(e);
    return ee(() => {
      var b, y;
      const m = Pt(e, ["groupCollapseIcon", "groupExpandIcon"]);
      return e.loading && (!e.items.length || a.loading) ? C("tr", {
        class: "v-data-table-rows-loading",
        key: "loading"
      }, [C("td", {
        colspan: l.value.length
      }, [((b = a.loading) == null ? void 0 : b.call(a)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? C("tr", {
        class: "v-data-table-rows-no-data",
        key: "no-data"
      }, [C("td", {
        colspan: l.value.length
      }, [((y = a["no-data"]) == null ? void 0 : y.call(a)) ?? f(e.noDataText)])]) : C(ce, null, [e.items.map((h, g) => {
        var V, A;
        if (h.type === "group") {
          const P = {
            index: g,
            item: h,
            columns: l.value,
            isExpanded: r,
            toggleExpand: o,
            isSelected: s,
            toggleSelect: c,
            toggleGroup: u,
            isGroupOpen: d
          };
          return a["group-header"] ? a["group-header"](P) : S(km, j({
            key: `group-header_${h.id}`,
            item: h
          }, si(n, ":groupHeader", () => P), m), a);
        }
        if (h.type === "group-summary") {
          const P = {
            index: g,
            item: h,
            columns: l.value,
            toggleGroup: u
          };
          return ((V = a["group-summary"]) == null ? void 0 : V.call(a, P)) ?? "";
        }
        const k = {
          index: g,
          item: h.raw,
          internalItem: h,
          columns: l.value,
          isExpanded: r,
          toggleExpand: o,
          isSelected: s,
          toggleSelect: c
        }, p = {
          ...k,
          props: j({
            key: `item_${h.key ?? h.index}`,
            onClick: i.value ? () => {
              o(h);
            } : void 0,
            index: g,
            item: h,
            cellProps: e.cellProps,
            collapseIcon: e.collapseIcon,
            expandIcon: e.expandIcon,
            mobile: v.value
          }, si(n, ":row", () => k), typeof e.rowProps == "function" ? e.rowProps({
            item: k.item,
            index: k.index,
            internalItem: k.internalItem
          }) : e.rowProps)
        };
        return C(ce, {
          key: p.props.key
        }, [a.item ? a.item(p) : S(pm, p.props, a), r(h) && ((A = a["expanded-row"]) == null ? void 0 : A.call(a, k))]);
      })]);
    }), {};
  }
}), Bs = O({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  striped: {
    type: String,
    default: null,
    validator: (e) => ["even", "odd"].includes(e)
  },
  ...oe(),
  ...Ze(),
  ...ge(),
  ...we()
}, "VTable"), ia = U()({
  name: "VTable",
  props: Bs(),
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const {
      themeClasses: l
    } = Ae(e), {
      densityClasses: i
    } = rt(e);
    return ee(() => {
      const o = {
        VCheckboxBtn: {
          density: e.density
        }
      };
      return S(e.tag, {
        class: X(["v-table", {
          "v-table--fixed-height": !!e.height,
          "v-table--fixed-header": e.fixedHeader,
          "v-table--fixed-footer": e.fixedFooter,
          "v-table--has-top": !!n.top,
          "v-table--has-bottom": !!n.bottom,
          "v-table--hover": e.hover,
          "v-table--striped-even": e.striped === "even",
          "v-table--striped-odd": e.striped === "odd"
        }, l.value, i.value, e.class]),
        style: re(e.style)
      }, {
        default: () => {
          var r, s;
          return [(r = n.top) == null ? void 0 : r.call(n), S(Se, {
            defaults: o
          }, {
            default: () => {
              var c;
              return [n.default ? C("div", {
                class: "v-table__wrapper",
                style: {
                  height: Q(e.height)
                }
              }, [C("table", null, [n.default()])]) : (c = n.wrapper) == null ? void 0 : c.call(n)];
            }
          }), (s = n.bottom) == null ? void 0 : s.call(n)];
        }
      });
    }), {};
  }
}), Vm = O({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  returnObject: Boolean
}, "DataTable-items");
function Pm(e, t, n, a) {
  const l = e.returnObject ? t : Re(t, e.itemValue), i = Re(t, e.itemSelectable, !0), o = a.reduce((r, s) => (s.key != null && (r[s.key] = Re(t, s.value)), r), {});
  return {
    type: "item",
    key: e.returnObject ? Re(t, e.itemValue) : l,
    index: n,
    value: l,
    selectable: i,
    columns: o,
    raw: t
  };
}
function Im(e, t, n) {
  return t.map((a, l) => Pm(e, a, l, n));
}
function Ds(e, t) {
  return {
    items: x(() => Im(e, e.items, t.value))
  };
}
function Fs(e) {
  let {
    page: t,
    itemsPerPage: n,
    sortBy: a,
    groupBy: l,
    search: i
  } = e;
  const o = Ie("VDataTable"), r = () => ({
    page: t.value,
    itemsPerPage: n.value,
    sortBy: a.value,
    groupBy: l.value,
    search: i.value
  });
  let s = null;
  J(r, (c) => {
    ze(s, c) || (s && s.search !== c.search && (t.value = 1), o.emit("update:options", c), s = c);
  }, {
    deep: !0,
    immediate: !0
  });
}
const Os = O({
  ...Es(),
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,
  ...Cm(),
  ...wm(),
  ...um(),
  ...Vm(),
  ...hm(),
  ...ym(),
  ...bs(),
  ...Bs()
}, "DataTable"), Am = O({
  ...Jr(),
  ...Os(),
  ...Zr(),
  ...El()
}, "VDataTable");
U()({
  name: "VDataTable",
  props: Am(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      groupBy: l
    } = ws(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = gs(e), {
      page: s,
      itemsPerPage: c
    } = ts(e), {
      disableSort: u
    } = ra(e), {
      columns: d,
      headers: f,
      sortFunctions: v,
      sortRawFunctions: m,
      filterFunctions: b
    } = us(e, {
      groupBy: l,
      showSelect: T(() => e.showSelect),
      showExpand: T(() => e.showExpand)
    }), {
      items: y
    } = Ds(e, d), h = T(() => e.search), {
      filteredItems: g
    } = Qr(e, y, h, {
      transform: (N) => N.columns,
      customKeyFilter: b
    }), {
      toggleSort: k
    } = hs({
      sortBy: i,
      multiSort: o,
      mustSort: r,
      page: s
    }), {
      sortByWithGroups: p,
      opened: V,
      extractRows: A,
      isGroupOpen: P,
      toggleGroup: w
    } = xs({
      groupBy: l,
      sortBy: i,
      disableSort: u
    }), {
      sortedItems: E
    } = bm(e, g, p, {
      transform: (N) => ({
        ...N.raw,
        ...N.columns
      }),
      sortFunctions: v,
      sortRawFunctions: m
    }), {
      flatItems: I
    } = Vs(E, l, V, () => !!a["group-summary"]), _ = x(() => I.value.length), {
      startIndex: D,
      stopIndex: F,
      pageCount: $,
      setItemsPerPage: R
    } = ns({
      page: s,
      itemsPerPage: c,
      itemsLength: _
    }), {
      paginatedItems: W
    } = sm({
      items: I,
      startIndex: D,
      stopIndex: F,
      itemsPerPage: c
    }), K = x(() => A(W.value)), {
      isSelected: te,
      select: le,
      selectAll: L,
      toggleSelect: Z,
      someSelected: M,
      allSelected: B
    } = vs(e, {
      allItems: y,
      currentPage: K
    }), {
      isExpanded: H,
      toggleExpand: ie
    } = As(e);
    Fs({
      page: s,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: h
    }), nt({
      VDataTableRows: {
        hideNoData: T(() => e.hideNoData),
        noDataText: T(() => e.noDataText),
        loading: T(() => e.loading),
        loadingText: T(() => e.loadingText)
      }
    });
    const ue = x(() => ({
      page: s.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: $.value,
      toggleSort: k,
      setItemsPerPage: R,
      someSelected: M.value,
      allSelected: B.value,
      isSelected: te,
      select: le,
      selectAll: L,
      toggleSelect: Z,
      isExpanded: H,
      toggleExpand: ie,
      isGroupOpen: P,
      toggleGroup: w,
      items: K.value.map((N) => N.raw),
      internalItems: K.value,
      groupedItems: W.value,
      columns: d.value,
      headers: f.value
    }));
    return ee(() => {
      const N = na.filterProps(e), q = aa.filterProps(e), ve = la.filterProps(e), xe = ia.filterProps(e);
      return S(ia, j({
        class: ["v-data-table", {
          "v-data-table--show-select": e.showSelect,
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, xe, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => {
          var ke;
          return (ke = a.top) == null ? void 0 : ke.call(a, ue.value);
        },
        default: () => {
          var ke, me, z, ne, ae, de;
          return a.default ? a.default(ue.value) : C(ce, null, [(ke = a.colgroup) == null ? void 0 : ke.call(a, ue.value), !e.hideDefaultHeader && C("thead", {
            key: "thead"
          }, [S(aa, q, a)]), (me = a.thead) == null ? void 0 : me.call(a, ue.value), !e.hideDefaultBody && C("tbody", null, [(z = a["body.prepend"]) == null ? void 0 : z.call(a, ue.value), a.body ? a.body(ue.value) : S(la, j(n, ve, {
            items: W.value
          }), a), (ne = a["body.append"]) == null ? void 0 : ne.call(a, ue.value)]), (ae = a.tbody) == null ? void 0 : ae.call(a, ue.value), (de = a.tfoot) == null ? void 0 : de.call(a, ue.value)]);
        },
        bottom: () => a.bottom ? a.bottom(ue.value) : !e.hideDefaultFooter && C(ce, null, [S(Tn, null, null), S(na, N, {
          prepend: a["footer.prepend"]
        })])
      });
    }), {};
  }
});
const Tm = O({
  itemsLength: {
    type: [Number, String],
    required: !0
  },
  ...Jr(),
  ...Os(),
  ...El()
}, "VDataTableServer"), cg = U()({
  name: "VDataTableServer",
  props: Tm(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:groupBy": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      groupBy: l
    } = ws(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = gs(e), {
      page: s,
      itemsPerPage: c
    } = ts(e), {
      disableSort: u
    } = ra(e), d = x(() => parseInt(e.itemsLength, 10)), {
      columns: f,
      headers: v
    } = us(e, {
      groupBy: l,
      showSelect: T(() => e.showSelect),
      showExpand: T(() => e.showExpand)
    }), {
      items: m
    } = Ds(e, f), {
      toggleSort: b
    } = hs({
      sortBy: i,
      multiSort: o,
      mustSort: r,
      page: s
    }), {
      opened: y,
      isGroupOpen: h,
      toggleGroup: g,
      extractRows: k
    } = xs({
      groupBy: l,
      sortBy: i,
      disableSort: u
    }), {
      pageCount: p,
      setItemsPerPage: V
    } = ns({
      page: s,
      itemsPerPage: c,
      itemsLength: d
    }), {
      flatItems: A
    } = Vs(m, l, y, () => !!a["group-summary"]), {
      isSelected: P,
      select: w,
      selectAll: E,
      toggleSelect: I,
      someSelected: _,
      allSelected: D
    } = vs(e, {
      allItems: m,
      currentPage: m
    }), {
      isExpanded: F,
      toggleExpand: $
    } = As(e), R = x(() => k(m.value));
    Fs({
      page: s,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: T(() => e.search)
    }), Pe("v-data-table", {
      toggleSort: b,
      sortBy: i
    }), nt({
      VDataTableRows: {
        hideNoData: T(() => e.hideNoData),
        noDataText: T(() => e.noDataText),
        loading: T(() => e.loading),
        loadingText: T(() => e.loadingText)
      }
    });
    const W = x(() => ({
      page: s.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: p.value,
      toggleSort: b,
      setItemsPerPage: V,
      someSelected: _.value,
      allSelected: D.value,
      isSelected: P,
      select: w,
      selectAll: E,
      toggleSelect: I,
      isExpanded: F,
      toggleExpand: $,
      isGroupOpen: h,
      toggleGroup: g,
      items: R.value.map((K) => K.raw),
      internalItems: R.value,
      groupedItems: A.value,
      columns: f.value,
      headers: v.value
    }));
    ee(() => {
      const K = na.filterProps(e), te = aa.filterProps(e), le = la.filterProps(e), L = ia.filterProps(e);
      return S(ia, j({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, L, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => {
          var Z;
          return (Z = a.top) == null ? void 0 : Z.call(a, W.value);
        },
        default: () => {
          var Z, M, B, H, ie, ue;
          return a.default ? a.default(W.value) : C(ce, null, [(Z = a.colgroup) == null ? void 0 : Z.call(a, W.value), !e.hideDefaultHeader && C("thead", {
            key: "thead",
            class: "v-data-table__thead",
            role: "rowgroup"
          }, [S(aa, te, a)]), (M = a.thead) == null ? void 0 : M.call(a, W.value), !e.hideDefaultBody && C("tbody", {
            class: "v-data-table__tbody",
            role: "rowgroup"
          }, [(B = a["body.prepend"]) == null ? void 0 : B.call(a, W.value), a.body ? a.body(W.value) : S(la, j(n, le, {
            items: A.value
          }), a), (H = a["body.append"]) == null ? void 0 : H.call(a, W.value)]), (ie = a.tbody) == null ? void 0 : ie.call(a, W.value), (ue = a.tfoot) == null ? void 0 : ue.call(a, W.value)]);
        },
        bottom: () => a.bottom ? a.bottom(W.value) : !e.hideDefaultFooter && C(ce, null, [S(Tn, null, null), S(na, K, {
          prepend: a["footer.prepend"]
        })])
      });
    });
  }
}), _m = O({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...oe(),
  ...st(),
  ...ge()
}, "VContainer"), dg = U()({
  name: "VContainer",
  props: _m(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      rtlClasses: a
    } = qe(), {
      dimensionStyles: l
    } = ut(e);
    return ee(() => S(e.tag, {
      class: X(["v-container", {
        "v-container--fluid": e.fluid
      }, a.value, e.class]),
      style: re([l.value, e.style])
    }, n)), {};
  }
}), $s = fa.reduce((e, t) => (e[t] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), Ls = fa.reduce((e, t) => {
  const n = "offset" + en(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Ms = fa.reduce((e, t) => {
  const n = "order" + en(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Yi = {
  col: Object.keys($s),
  offset: Object.keys(Ls),
  order: Object.keys(Ms)
};
function Em(e, t, n) {
  let a = e;
  if (!(n == null || n === !1)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === !0) || (a += `-${n}`), a.toLowerCase();
  }
}
const Bm = ["auto", "start", "end", "center", "baseline", "stretch"], Dm = O({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...$s,
  offset: {
    type: [String, Number],
    default: null
  },
  ...Ls,
  order: {
    type: [String, Number],
    default: null
  },
  ...Ms,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => Bm.includes(e)
  },
  ...oe(),
  ...ge()
}, "VCol"), fg = U()({
  name: "VCol",
  props: Dm(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = x(() => {
      const l = [];
      let i;
      for (i in Yi)
        Yi[i].forEach((r) => {
          const s = e[r], c = Em(i, r, s);
          c && l.push(c);
        });
      const o = l.some((r) => r.startsWith("v-col-"));
      return l.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !o || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), l;
    });
    return () => {
      var l;
      return Lt(e.tag, {
        class: [a.value, e.class],
        style: e.style
      }, (l = n.default) == null ? void 0 : l.call(n));
    };
  }
}), Dl = ["start", "end", "center"], Rs = ["space-between", "space-around", "space-evenly"];
function Fl(e, t) {
  return fa.reduce((n, a) => {
    const l = e + en(a);
    return n[l] = t(), n;
  }, {});
}
const Fm = [...Dl, "baseline", "stretch"], Ns = (e) => Fm.includes(e), Hs = Fl("align", () => ({
  type: String,
  default: null,
  validator: Ns
})), Om = [...Dl, ...Rs], zs = (e) => Om.includes(e), Ws = Fl("justify", () => ({
  type: String,
  default: null,
  validator: zs
})), $m = [...Dl, ...Rs, "stretch"], js = (e) => $m.includes(e), Gs = Fl("alignContent", () => ({
  type: String,
  default: null,
  validator: js
})), Ki = {
  align: Object.keys(Hs),
  justify: Object.keys(Ws),
  alignContent: Object.keys(Gs)
}, Lm = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function Mm(e, t, n) {
  let a = Lm[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const Rm = O({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: Ns
  },
  ...Hs,
  justify: {
    type: String,
    default: null,
    validator: zs
  },
  ...Ws,
  alignContent: {
    type: String,
    default: null,
    validator: js
  },
  ...Gs,
  ...oe(),
  ...ge()
}, "VRow"), vg = U()({
  name: "VRow",
  props: Rm(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = x(() => {
      const l = [];
      let i;
      for (i in Ki)
        Ki[i].forEach((o) => {
          const r = e[o], s = Mm(i, o, r);
          s && l.push(s);
        });
      return l.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), l;
    });
    return () => {
      var l;
      return Lt(e.tag, {
        class: ["v-row", a.value, e.class],
        style: e.style
      }, (l = n.default) == null ? void 0 : l.call(n));
    };
  }
}), mg = da("v-spacer", "div", "VSpacer"), Nm = da("v-alert-title"), Hm = O({
  iconSize: [Number, String],
  iconSizes: {
    type: Array,
    default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]]
  }
}, "iconSize");
function zm(e, t) {
  return {
    iconSize: x(() => {
      const a = new Map(e.iconSizes), l = e.iconSize ?? t() ?? "default";
      return a.has(l) ? a.get(l) : l;
    })
  };
}
const Wm = ["success", "info", "warning", "error"], jm = O({
  border: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: se,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (e) => Wm.includes(e)
  },
  ...oe(),
  ...Ze(),
  ...st(),
  ...vt(),
  ...Hm(),
  ...an(),
  ...Pn(),
  ...He(),
  ...ge(),
  ...we(),
  ...mt({
    variant: "flat"
  })
}, "VAlert"), gg = U()({
  name: "VAlert",
  props: jm(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = fe(e, "modelValue"), i = T(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), {
      iconSize: o
    } = zm(e, () => e.prominent ? 44 : void 0), {
      themeClasses: r
    } = Ae(e), {
      colorClasses: s,
      colorStyles: c,
      variantClasses: u
    } = Nt(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      densityClasses: d
    } = rt(e), {
      dimensionStyles: f
    } = ut(e), {
      elevationClasses: v
    } = St(e), {
      locationStyles: m
    } = Vn(e), {
      positionClasses: b
    } = In(e), {
      roundedClasses: y
    } = je(e), {
      textColorClasses: h,
      textColorStyles: g
    } = it(() => e.borderColor), {
      t: k
    } = ot(), p = T(() => ({
      "aria-label": k(e.closeLabel),
      onClick(V) {
        l.value = !1, n("click:close", V);
      }
    }));
    return () => {
      const V = !!(a.prepend || i.value), A = !!(a.title || e.title), P = !!(a.close || e.closable), w = {
        density: e.density,
        icon: i.value,
        size: e.iconSize || e.prominent ? o.value : void 0
      };
      return l.value && S(e.tag, {
        class: X(["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, r.value, s.value, d.value, v.value, b.value, y.value, u.value, e.class]),
        style: re([c.value, f.value, m.value, e.style]),
        role: "alert"
      }, {
        default: () => {
          var E, I;
          return [Rt(!1, "v-alert"), e.border && C("div", {
            key: "border",
            class: X(["v-alert__border", h.value]),
            style: re(g.value)
          }, null), V && C("div", {
            key: "prepend",
            class: "v-alert__prepend"
          }, [a.prepend ? S(Se, {
            key: "prepend-defaults",
            disabled: !i.value,
            defaults: {
              VIcon: {
                ...w
              }
            }
          }, a.prepend) : S(Ve, j({
            key: "prepend-icon"
          }, w), null)]), C("div", {
            class: "v-alert__content"
          }, [A && S(Nm, {
            key: "title"
          }, {
            default: () => {
              var _;
              return [((_ = a.title) == null ? void 0 : _.call(a)) ?? e.title];
            }
          }), ((E = a.text) == null ? void 0 : E.call(a)) ?? e.text, (I = a.default) == null ? void 0 : I.call(a)]), a.append && C("div", {
            key: "append",
            class: "v-alert__append"
          }, [a.append()]), P && C("div", {
            key: "close",
            class: "v-alert__close"
          }, [a.close ? S(Se, {
            key: "close-defaults",
            defaults: {
              VBtn: {
                icon: e.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var _;
              return [(_ = a.close) == null ? void 0 : _.call(a, {
                props: p.value
              })];
            }
          }) : S(et, j({
            key: "close-btn",
            icon: e.closeIcon,
            size: "x-small",
            variant: "text"
          }, p.value), null)])];
        }
      });
    };
  }
});
export {
  sg as A,
  Jn as B,
  ug as C,
  rg as D,
  Qv as E,
  cg as F,
  dg as G,
  At as H,
  em as I,
  Br as J,
  Xv as K,
  gg as L,
  Ve as M,
  zi as N,
  Wi as O,
  ng as P,
  qf as Q,
  Ci as R,
  Hr as S,
  Km as T,
  fg as U,
  et as V,
  vg as W,
  mg as X,
  Ym as a,
  Qt as b,
  ud as c,
  Ei as d,
  kl as e,
  Xm as f,
  dr as g,
  qm as h,
  tg as i,
  Zm as j,
  Jm as k,
  Qm as l,
  Um as m,
  xa as n,
  eg as o,
  iv as p,
  rv as q,
  lg as r,
  qr as s,
  ig as t,
  ag as u,
  ta as v,
  Oi as w,
  Zd as x,
  og as y,
  Tn as z
};
//# sourceMappingURL=vuetify.js.map
