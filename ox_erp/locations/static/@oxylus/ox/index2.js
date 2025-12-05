var Wy = Object.defineProperty;
var Ol = (i) => {
  throw TypeError(i);
};
var Uy = (i, r, n) => r in i ? Wy(i, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : i[r] = n;
var R = (i, r, n) => Uy(i, typeof r != "symbol" ? r + "" : r, n), Hy = (i, r, n) => r.has(i) || Ol("Cannot " + n);
var xt = (i, r, n) => (Hy(i, r, "read from private field"), n ? n.call(i) : r.get(i)), Al = (i, r, n) => r.has(i) ? Ol("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(i) : r.set(i, n);
import { toRaw as ya, inject as Ki, provide as By, hasInjectionContext as mc, effectScope as ka, ref as Wi, markRaw as yc, reactive as Gy, isRef as Pr, isReactive as vc, getCurrentScope as Vy, onScopeDispose as Yy, watch as xr, nextTick as qy, toRefs as Xy, computed as nr, shallowRef as zy, defineComponent as Ka, getCurrentInstance as Dr, h as wc, Fragment as Ec, onMounted as Jy, onUnmounted as Qy, createVNode as Zy, Text as jy, unref as ev } from "vue";
const xe = {
  NONE: Symbol("none"),
  PROCESSING: Symbol("processing"),
  SENDING: Symbol("sending"),
  SENT: Symbol("sent"),
  OK: Symbol("ok"),
  ERROR: Symbol("error")
}, Kn = {};
Kn[xe.NONE] = "";
Kn[xe.PROCESSING] = "info";
Kn[xe.SENDING] = "info";
Kn[xe.SENT] = "success";
Kn[xe.OK] = "success";
Kn[xe.ERROR] = "error";
class zw {
  constructor(r = xe.NONE, n = null) {
    /**
     * The actual state as one of {@link States}.
     */
    R(this, "state");
    /**
     * Data related to the state.
     *
     * Note: if you need to attach extra data to the current state and don't want it to be displayed, just prefix it with an underscore.
     */
    R(this, "data");
    this.state = r, this.data = n;
  }
  /** Create new state for `none` */
  static none(r = null) {
    return new this(xe.NONE, r);
  }
  /** Create new state for `ok` */
  static ok(r = null) {
    return new this(xe.OK, r);
  }
  /** Create new state for `processing` */
  static processing(r = null) {
    return new this(xe.PROCESSING, r);
  }
  /** Create new state for `sending` */
  static sending(r = null) {
    return new this(xe.SENDING, r);
  }
  /** Create new state for `error` */
  static error(r = null) {
    return new this(xe.ERROR, r);
  }
  /** Set state to `none` with optional provided data. */
  none(r = null) {
    return this.state = xe.NONE, this.data = r, this;
  }
  /** Set state to `ok` with optional provided data. */
  ok(r = null) {
    return this.state = xe.OK, this.data = r, this;
  }
  /** Set state to `processing` with optional provided data. */
  processing(r = null) {
    return this.state = xe.PROCESSING, this.data = r, this;
  }
  /** Set state to `sending` with optional provided data. */
  sending(r = null) {
    return this.state = xe.SENDING, this.data = r, this;
  }
  /** Set state to `error` with optional provided data. */
  error(r = null) {
    return this.state = xe.ERROR, this.data = r, this;
  }
  /** Color of the current state, based on {@link StateColors}. */
  get color() {
    return Kn[this.state];
  }
  /** True if state is `none` */
  get isNone() {
    return this.state == xe.NONE;
  }
  /** True if state is `ok` */
  get isOk() {
    return this.state == xe.OK;
  }
  /** True if state is `processing` */
  get isProcessing() {
    return this.state == xe.PROCESSING;
  }
  /** True if state is `sending` */
  get isSending() {
    return this.state == xe.SENDING;
  }
  /** True if state is `error` */
  get isError() {
    return this.state == xe.ERROR;
  }
  /** Return formatted error string if state is `error` */
  toString() {
    if (!this.data)
      return "";
    if (typeof this.data == "string")
      return this.data;
    let r = "";
    for (var [n, a] of Object.entries(this.data)) {
      if (n.startsWith("_"))
        continue;
      const o = typeof this.data[n] == "string" ? [a] : a;
      typeof n == "string" ? r += o.map((l) => `- ${n}: ${l}
`) : r += o.map((l) => `- ${l}
`);
    }
    return `${r}`;
  }
}
var Or = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Fi = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Fi.exports;
(function(i, r) {
  (function() {
    var n, a = "4.17.21", o = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", g = "Invalid `variable` option passed into `_.template`", _ = "__lodash_hash_undefined__", w = 500, T = "__lodash_placeholder__", O = 1, P = 2, U = 4, Y = 1, G = 2, H = 1, b = 2, M = 4, W = 8, $ = 16, K = 32, V = 64, F = 128, Q = 256, Z = 512, Ee = 30, Ke = "...", me = 800, pt = 16, an = 1, Tn = 2, Ot = 3, $e = 1 / 0, mt = 9007199254740991, At = 17976931348623157e292, Gt = NaN, Je = 4294967295, or = Je - 1, ur = Je >>> 1, lr = [
      ["ary", F],
      ["bind", H],
      ["bindKey", b],
      ["curry", W],
      ["curryRight", $],
      ["flip", Z],
      ["partial", K],
      ["partialRight", V],
      ["rearg", Q]
    ], Vt = "[object Arguments]", on = "[object Array]", cr = "[object AsyncFunction]", Mt = "[object Boolean]", Yt = "[object Date]", fr = "[object DOMException]", un = "[object Error]", ln = "[object Function]", cn = "[object GeneratorFunction]", Ge = "[object Map]", yt = "[object Number]", On = "[object Null]", ut = "[object Object]", y = "[object Promise]", v = "[object Proxy]", x = "[object RegExp]", z = "[object Set]", be = "[object String]", re = "[object Symbol]", S = "[object Undefined]", k = "[object WeakMap]", ye = "[object WeakSet]", Le = "[object ArrayBuffer]", nt = "[object DataView]", fn = "[object Float32Array]", Ft = "[object Float64Array]", hr = "[object Int8Array]", Hr = "[object Int16Array]", qi = "[object Int32Array]", Xi = "[object Uint8Array]", zi = "[object Uint8ClampedArray]", Ji = "[object Uint16Array]", Qi = "[object Uint32Array]", of = /\b__p \+= '';/g, uf = /\b(__p \+=) '' \+/g, lf = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Za = /&(?:amp|lt|gt|quot|#39);/g, ja = /[&<>"']/g, cf = RegExp(Za.source), ff = RegExp(ja.source), hf = /<%-([\s\S]+?)%>/g, df = /<%([\s\S]+?)%>/g, eo = /<%=([\s\S]+?)%>/g, gf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _f = /^\w*$/, pf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zi = /[\\^$.*+?()[\]{}|]/g, mf = RegExp(Zi.source), ji = /^\s+/, yf = /\s/, vf = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, wf = /\{\n\/\* \[wrapped with (.+)\] \*/, Ef = /,? & /, If = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, bf = /[()=,{}\[\]\/\s]/, Lf = /\\(\\)?/g, Rf = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, to = /\w*$/, Sf = /^[-+]0x[0-9a-f]+$/i, Tf = /^0b[01]+$/i, Of = /^\[object .+?Constructor\]$/, Af = /^0o[0-7]+$/i, $f = /^(?:0|[1-9]\d*)$/, Cf = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Br = /($^)/, Nf = /['\n\r\u2028\u2029\\]/g, Gr = "\\ud800-\\udfff", Pf = "\\u0300-\\u036f", xf = "\\ufe20-\\ufe2f", Df = "\\u20d0-\\u20ff", no = Pf + xf + Df, ro = "\\u2700-\\u27bf", io = "a-z\\xdf-\\xf6\\xf8-\\xff", Mf = "\\xac\\xb1\\xd7\\xf7", Ff = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", kf = "\\u2000-\\u206f", Kf = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", so = "A-Z\\xc0-\\xd6\\xd8-\\xde", ao = "\\ufe0e\\ufe0f", oo = Mf + Ff + kf + Kf, es = "['’]", Wf = "[" + Gr + "]", uo = "[" + oo + "]", Vr = "[" + no + "]", lo = "\\d+", Uf = "[" + ro + "]", co = "[" + io + "]", fo = "[^" + Gr + oo + lo + ro + io + so + "]", ts = "\\ud83c[\\udffb-\\udfff]", Hf = "(?:" + Vr + "|" + ts + ")", ho = "[^" + Gr + "]", ns = "(?:\\ud83c[\\udde6-\\uddff]){2}", rs = "[\\ud800-\\udbff][\\udc00-\\udfff]", Wn = "[" + so + "]", go = "\\u200d", _o = "(?:" + co + "|" + fo + ")", Bf = "(?:" + Wn + "|" + fo + ")", po = "(?:" + es + "(?:d|ll|m|re|s|t|ve))?", mo = "(?:" + es + "(?:D|LL|M|RE|S|T|VE))?", yo = Hf + "?", vo = "[" + ao + "]?", Gf = "(?:" + go + "(?:" + [ho, ns, rs].join("|") + ")" + vo + yo + ")*", Vf = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Yf = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", wo = vo + yo + Gf, qf = "(?:" + [Uf, ns, rs].join("|") + ")" + wo, Xf = "(?:" + [ho + Vr + "?", Vr, ns, rs, Wf].join("|") + ")", zf = RegExp(es, "g"), Jf = RegExp(Vr, "g"), is = RegExp(ts + "(?=" + ts + ")|" + Xf + wo, "g"), Qf = RegExp([
      Wn + "?" + co + "+" + po + "(?=" + [uo, Wn, "$"].join("|") + ")",
      Bf + "+" + mo + "(?=" + [uo, Wn + _o, "$"].join("|") + ")",
      Wn + "?" + _o + "+" + po,
      Wn + "+" + mo,
      Yf,
      Vf,
      lo,
      qf
    ].join("|"), "g"), Zf = RegExp("[" + go + Gr + no + ao + "]"), jf = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, eh = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], th = -1, Oe = {};
    Oe[fn] = Oe[Ft] = Oe[hr] = Oe[Hr] = Oe[qi] = Oe[Xi] = Oe[zi] = Oe[Ji] = Oe[Qi] = !0, Oe[Vt] = Oe[on] = Oe[Le] = Oe[Mt] = Oe[nt] = Oe[Yt] = Oe[un] = Oe[ln] = Oe[Ge] = Oe[yt] = Oe[ut] = Oe[x] = Oe[z] = Oe[be] = Oe[k] = !1;
    var Se = {};
    Se[Vt] = Se[on] = Se[Le] = Se[nt] = Se[Mt] = Se[Yt] = Se[fn] = Se[Ft] = Se[hr] = Se[Hr] = Se[qi] = Se[Ge] = Se[yt] = Se[ut] = Se[x] = Se[z] = Se[be] = Se[re] = Se[Xi] = Se[zi] = Se[Ji] = Se[Qi] = !0, Se[un] = Se[ln] = Se[k] = !1;
    var nh = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, rh = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, ih = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, sh = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, ah = parseFloat, oh = parseInt, Eo = typeof Or == "object" && Or && Or.Object === Object && Or, uh = typeof self == "object" && self && self.Object === Object && self, Ye = Eo || uh || Function("return this")(), ss = r && !r.nodeType && r, An = ss && !0 && i && !i.nodeType && i, Io = An && An.exports === ss, as = Io && Eo.process, vt = function() {
      try {
        var E = An && An.require && An.require("util").types;
        return E || as && as.binding && as.binding("util");
      } catch {
      }
    }(), bo = vt && vt.isArrayBuffer, Lo = vt && vt.isDate, Ro = vt && vt.isMap, So = vt && vt.isRegExp, To = vt && vt.isSet, Oo = vt && vt.isTypedArray;
    function lt(E, A, L) {
      switch (L.length) {
        case 0:
          return E.call(A);
        case 1:
          return E.call(A, L[0]);
        case 2:
          return E.call(A, L[0], L[1]);
        case 3:
          return E.call(A, L[0], L[1], L[2]);
      }
      return E.apply(A, L);
    }
    function lh(E, A, L, X) {
      for (var ne = -1, de = E == null ? 0 : E.length; ++ne < de; ) {
        var We = E[ne];
        A(X, We, L(We), E);
      }
      return X;
    }
    function wt(E, A) {
      for (var L = -1, X = E == null ? 0 : E.length; ++L < X && A(E[L], L, E) !== !1; )
        ;
      return E;
    }
    function ch(E, A) {
      for (var L = E == null ? 0 : E.length; L-- && A(E[L], L, E) !== !1; )
        ;
      return E;
    }
    function Ao(E, A) {
      for (var L = -1, X = E == null ? 0 : E.length; ++L < X; )
        if (!A(E[L], L, E))
          return !1;
      return !0;
    }
    function hn(E, A) {
      for (var L = -1, X = E == null ? 0 : E.length, ne = 0, de = []; ++L < X; ) {
        var We = E[L];
        A(We, L, E) && (de[ne++] = We);
      }
      return de;
    }
    function Yr(E, A) {
      var L = E == null ? 0 : E.length;
      return !!L && Un(E, A, 0) > -1;
    }
    function os(E, A, L) {
      for (var X = -1, ne = E == null ? 0 : E.length; ++X < ne; )
        if (L(A, E[X]))
          return !0;
      return !1;
    }
    function Ce(E, A) {
      for (var L = -1, X = E == null ? 0 : E.length, ne = Array(X); ++L < X; )
        ne[L] = A(E[L], L, E);
      return ne;
    }
    function dn(E, A) {
      for (var L = -1, X = A.length, ne = E.length; ++L < X; )
        E[ne + L] = A[L];
      return E;
    }
    function us(E, A, L, X) {
      var ne = -1, de = E == null ? 0 : E.length;
      for (X && de && (L = E[++ne]); ++ne < de; )
        L = A(L, E[ne], ne, E);
      return L;
    }
    function fh(E, A, L, X) {
      var ne = E == null ? 0 : E.length;
      for (X && ne && (L = E[--ne]); ne--; )
        L = A(L, E[ne], ne, E);
      return L;
    }
    function ls(E, A) {
      for (var L = -1, X = E == null ? 0 : E.length; ++L < X; )
        if (A(E[L], L, E))
          return !0;
      return !1;
    }
    var hh = cs("length");
    function dh(E) {
      return E.split("");
    }
    function gh(E) {
      return E.match(If) || [];
    }
    function $o(E, A, L) {
      var X;
      return L(E, function(ne, de, We) {
        if (A(ne, de, We))
          return X = de, !1;
      }), X;
    }
    function qr(E, A, L, X) {
      for (var ne = E.length, de = L + (X ? 1 : -1); X ? de-- : ++de < ne; )
        if (A(E[de], de, E))
          return de;
      return -1;
    }
    function Un(E, A, L) {
      return A === A ? Sh(E, A, L) : qr(E, Co, L);
    }
    function _h(E, A, L, X) {
      for (var ne = L - 1, de = E.length; ++ne < de; )
        if (X(E[ne], A))
          return ne;
      return -1;
    }
    function Co(E) {
      return E !== E;
    }
    function No(E, A) {
      var L = E == null ? 0 : E.length;
      return L ? hs(E, A) / L : Gt;
    }
    function cs(E) {
      return function(A) {
        return A == null ? n : A[E];
      };
    }
    function fs(E) {
      return function(A) {
        return E == null ? n : E[A];
      };
    }
    function Po(E, A, L, X, ne) {
      return ne(E, function(de, We, Re) {
        L = X ? (X = !1, de) : A(L, de, We, Re);
      }), L;
    }
    function ph(E, A) {
      var L = E.length;
      for (E.sort(A); L--; )
        E[L] = E[L].value;
      return E;
    }
    function hs(E, A) {
      for (var L, X = -1, ne = E.length; ++X < ne; ) {
        var de = A(E[X]);
        de !== n && (L = L === n ? de : L + de);
      }
      return L;
    }
    function ds(E, A) {
      for (var L = -1, X = Array(E); ++L < E; )
        X[L] = A(L);
      return X;
    }
    function mh(E, A) {
      return Ce(A, function(L) {
        return [L, E[L]];
      });
    }
    function xo(E) {
      return E && E.slice(0, ko(E) + 1).replace(ji, "");
    }
    function ct(E) {
      return function(A) {
        return E(A);
      };
    }
    function gs(E, A) {
      return Ce(A, function(L) {
        return E[L];
      });
    }
    function dr(E, A) {
      return E.has(A);
    }
    function Do(E, A) {
      for (var L = -1, X = E.length; ++L < X && Un(A, E[L], 0) > -1; )
        ;
      return L;
    }
    function Mo(E, A) {
      for (var L = E.length; L-- && Un(A, E[L], 0) > -1; )
        ;
      return L;
    }
    function yh(E, A) {
      for (var L = E.length, X = 0; L--; )
        E[L] === A && ++X;
      return X;
    }
    var vh = fs(nh), wh = fs(rh);
    function Eh(E) {
      return "\\" + sh[E];
    }
    function Ih(E, A) {
      return E == null ? n : E[A];
    }
    function Hn(E) {
      return Zf.test(E);
    }
    function bh(E) {
      return jf.test(E);
    }
    function Lh(E) {
      for (var A, L = []; !(A = E.next()).done; )
        L.push(A.value);
      return L;
    }
    function _s(E) {
      var A = -1, L = Array(E.size);
      return E.forEach(function(X, ne) {
        L[++A] = [ne, X];
      }), L;
    }
    function Fo(E, A) {
      return function(L) {
        return E(A(L));
      };
    }
    function gn(E, A) {
      for (var L = -1, X = E.length, ne = 0, de = []; ++L < X; ) {
        var We = E[L];
        (We === A || We === T) && (E[L] = T, de[ne++] = L);
      }
      return de;
    }
    function Xr(E) {
      var A = -1, L = Array(E.size);
      return E.forEach(function(X) {
        L[++A] = X;
      }), L;
    }
    function Rh(E) {
      var A = -1, L = Array(E.size);
      return E.forEach(function(X) {
        L[++A] = [X, X];
      }), L;
    }
    function Sh(E, A, L) {
      for (var X = L - 1, ne = E.length; ++X < ne; )
        if (E[X] === A)
          return X;
      return -1;
    }
    function Th(E, A, L) {
      for (var X = L + 1; X--; )
        if (E[X] === A)
          return X;
      return X;
    }
    function Bn(E) {
      return Hn(E) ? Ah(E) : hh(E);
    }
    function $t(E) {
      return Hn(E) ? $h(E) : dh(E);
    }
    function ko(E) {
      for (var A = E.length; A-- && yf.test(E.charAt(A)); )
        ;
      return A;
    }
    var Oh = fs(ih);
    function Ah(E) {
      for (var A = is.lastIndex = 0; is.test(E); )
        ++A;
      return A;
    }
    function $h(E) {
      return E.match(is) || [];
    }
    function Ch(E) {
      return E.match(Qf) || [];
    }
    var Nh = function E(A) {
      A = A == null ? Ye : Gn.defaults(Ye.Object(), A, Gn.pick(Ye, eh));
      var L = A.Array, X = A.Date, ne = A.Error, de = A.Function, We = A.Math, Re = A.Object, ps = A.RegExp, Ph = A.String, Et = A.TypeError, zr = L.prototype, xh = de.prototype, Vn = Re.prototype, Jr = A["__core-js_shared__"], Qr = xh.toString, ve = Vn.hasOwnProperty, Dh = 0, Ko = function() {
        var e = /[^.]+$/.exec(Jr && Jr.keys && Jr.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Zr = Vn.toString, Mh = Qr.call(Re), Fh = Ye._, kh = ps(
        "^" + Qr.call(ve).replace(Zi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), jr = Io ? A.Buffer : n, _n = A.Symbol, ei = A.Uint8Array, Wo = jr ? jr.allocUnsafe : n, ti = Fo(Re.getPrototypeOf, Re), Uo = Re.create, Ho = Vn.propertyIsEnumerable, ni = zr.splice, Bo = _n ? _n.isConcatSpreadable : n, gr = _n ? _n.iterator : n, $n = _n ? _n.toStringTag : n, ri = function() {
        try {
          var e = Dn(Re, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Kh = A.clearTimeout !== Ye.clearTimeout && A.clearTimeout, Wh = X && X.now !== Ye.Date.now && X.now, Uh = A.setTimeout !== Ye.setTimeout && A.setTimeout, ii = We.ceil, si = We.floor, ms = Re.getOwnPropertySymbols, Hh = jr ? jr.isBuffer : n, Go = A.isFinite, Bh = zr.join, Gh = Fo(Re.keys, Re), Ue = We.max, Xe = We.min, Vh = X.now, Yh = A.parseInt, Vo = We.random, qh = zr.reverse, ys = Dn(A, "DataView"), _r = Dn(A, "Map"), vs = Dn(A, "Promise"), Yn = Dn(A, "Set"), pr = Dn(A, "WeakMap"), mr = Dn(Re, "create"), ai = pr && new pr(), qn = {}, Xh = Mn(ys), zh = Mn(_r), Jh = Mn(vs), Qh = Mn(Yn), Zh = Mn(pr), oi = _n ? _n.prototype : n, yr = oi ? oi.valueOf : n, Yo = oi ? oi.toString : n;
      function h(e) {
        if (Pe(e) && !ie(e) && !(e instanceof ce)) {
          if (e instanceof It)
            return e;
          if (ve.call(e, "__wrapped__"))
            return qu(e);
        }
        return new It(e);
      }
      var Xn = /* @__PURE__ */ function() {
        function e() {
        }
        return function(t) {
          if (!Ne(t))
            return {};
          if (Uo)
            return Uo(t);
          e.prototype = t;
          var s = new e();
          return e.prototype = n, s;
        };
      }();
      function ui() {
      }
      function It(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = n;
      }
      h.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: hf,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: df,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: eo,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: h
        }
      }, h.prototype = ui.prototype, h.prototype.constructor = h, It.prototype = Xn(ui.prototype), It.prototype.constructor = It;
      function ce(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Je, this.__views__ = [];
      }
      function jh() {
        var e = new ce(this.__wrapped__);
        return e.__actions__ = rt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = rt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = rt(this.__views__), e;
      }
      function ed() {
        if (this.__filtered__) {
          var e = new ce(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function td() {
        var e = this.__wrapped__.value(), t = this.__dir__, s = ie(e), u = t < 0, c = s ? e.length : 0, d = dg(0, c, this.__views__), p = d.start, m = d.end, I = m - p, C = u ? m : p - 1, N = this.__iteratees__, D = N.length, B = 0, J = Xe(I, this.__takeCount__);
        if (!s || !u && c == I && J == I)
          return pu(e, this.__actions__);
        var ee = [];
        e:
          for (; I-- && B < J; ) {
            C += t;
            for (var ae = -1, te = e[C]; ++ae < D; ) {
              var le = N[ae], fe = le.iteratee, dt = le.type, je = fe(te);
              if (dt == Tn)
                te = je;
              else if (!je) {
                if (dt == an)
                  continue e;
                break e;
              }
            }
            ee[B++] = te;
          }
        return ee;
      }
      ce.prototype = Xn(ui.prototype), ce.prototype.constructor = ce;
      function Cn(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++t < s; ) {
          var u = e[t];
          this.set(u[0], u[1]);
        }
      }
      function nd() {
        this.__data__ = mr ? mr(null) : {}, this.size = 0;
      }
      function rd(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function id(e) {
        var t = this.__data__;
        if (mr) {
          var s = t[e];
          return s === _ ? n : s;
        }
        return ve.call(t, e) ? t[e] : n;
      }
      function sd(e) {
        var t = this.__data__;
        return mr ? t[e] !== n : ve.call(t, e);
      }
      function ad(e, t) {
        var s = this.__data__;
        return this.size += this.has(e) ? 0 : 1, s[e] = mr && t === n ? _ : t, this;
      }
      Cn.prototype.clear = nd, Cn.prototype.delete = rd, Cn.prototype.get = id, Cn.prototype.has = sd, Cn.prototype.set = ad;
      function qt(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++t < s; ) {
          var u = e[t];
          this.set(u[0], u[1]);
        }
      }
      function od() {
        this.__data__ = [], this.size = 0;
      }
      function ud(e) {
        var t = this.__data__, s = li(t, e);
        if (s < 0)
          return !1;
        var u = t.length - 1;
        return s == u ? t.pop() : ni.call(t, s, 1), --this.size, !0;
      }
      function ld(e) {
        var t = this.__data__, s = li(t, e);
        return s < 0 ? n : t[s][1];
      }
      function cd(e) {
        return li(this.__data__, e) > -1;
      }
      function fd(e, t) {
        var s = this.__data__, u = li(s, e);
        return u < 0 ? (++this.size, s.push([e, t])) : s[u][1] = t, this;
      }
      qt.prototype.clear = od, qt.prototype.delete = ud, qt.prototype.get = ld, qt.prototype.has = cd, qt.prototype.set = fd;
      function Xt(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++t < s; ) {
          var u = e[t];
          this.set(u[0], u[1]);
        }
      }
      function hd() {
        this.size = 0, this.__data__ = {
          hash: new Cn(),
          map: new (_r || qt)(),
          string: new Cn()
        };
      }
      function dd(e) {
        var t = Ei(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function gd(e) {
        return Ei(this, e).get(e);
      }
      function _d(e) {
        return Ei(this, e).has(e);
      }
      function pd(e, t) {
        var s = Ei(this, e), u = s.size;
        return s.set(e, t), this.size += s.size == u ? 0 : 1, this;
      }
      Xt.prototype.clear = hd, Xt.prototype.delete = dd, Xt.prototype.get = gd, Xt.prototype.has = _d, Xt.prototype.set = pd;
      function Nn(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.__data__ = new Xt(); ++t < s; )
          this.add(e[t]);
      }
      function md(e) {
        return this.__data__.set(e, _), this;
      }
      function yd(e) {
        return this.__data__.has(e);
      }
      Nn.prototype.add = Nn.prototype.push = md, Nn.prototype.has = yd;
      function Ct(e) {
        var t = this.__data__ = new qt(e);
        this.size = t.size;
      }
      function vd() {
        this.__data__ = new qt(), this.size = 0;
      }
      function wd(e) {
        var t = this.__data__, s = t.delete(e);
        return this.size = t.size, s;
      }
      function Ed(e) {
        return this.__data__.get(e);
      }
      function Id(e) {
        return this.__data__.has(e);
      }
      function bd(e, t) {
        var s = this.__data__;
        if (s instanceof qt) {
          var u = s.__data__;
          if (!_r || u.length < o - 1)
            return u.push([e, t]), this.size = ++s.size, this;
          s = this.__data__ = new Xt(u);
        }
        return s.set(e, t), this.size = s.size, this;
      }
      Ct.prototype.clear = vd, Ct.prototype.delete = wd, Ct.prototype.get = Ed, Ct.prototype.has = Id, Ct.prototype.set = bd;
      function qo(e, t) {
        var s = ie(e), u = !s && Fn(e), c = !s && !u && wn(e), d = !s && !u && !c && Zn(e), p = s || u || c || d, m = p ? ds(e.length, Ph) : [], I = m.length;
        for (var C in e)
          (t || ve.call(e, C)) && !(p && // Safari 9 has enumerable `arguments.length` in strict mode.
          (C == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          c && (C == "offset" || C == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          d && (C == "buffer" || C == "byteLength" || C == "byteOffset") || // Skip index properties.
          Zt(C, I))) && m.push(C);
        return m;
      }
      function Xo(e) {
        var t = e.length;
        return t ? e[$s(0, t - 1)] : n;
      }
      function Ld(e, t) {
        return Ii(rt(e), Pn(t, 0, e.length));
      }
      function Rd(e) {
        return Ii(rt(e));
      }
      function ws(e, t, s) {
        (s !== n && !Nt(e[t], s) || s === n && !(t in e)) && zt(e, t, s);
      }
      function vr(e, t, s) {
        var u = e[t];
        (!(ve.call(e, t) && Nt(u, s)) || s === n && !(t in e)) && zt(e, t, s);
      }
      function li(e, t) {
        for (var s = e.length; s--; )
          if (Nt(e[s][0], t))
            return s;
        return -1;
      }
      function Sd(e, t, s, u) {
        return pn(e, function(c, d, p) {
          t(u, c, s(c), p);
        }), u;
      }
      function zo(e, t) {
        return e && Kt(t, Ve(t), e);
      }
      function Td(e, t) {
        return e && Kt(t, st(t), e);
      }
      function zt(e, t, s) {
        t == "__proto__" && ri ? ri(e, t, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : e[t] = s;
      }
      function Es(e, t) {
        for (var s = -1, u = t.length, c = L(u), d = e == null; ++s < u; )
          c[s] = d ? n : ta(e, t[s]);
        return c;
      }
      function Pn(e, t, s) {
        return e === e && (s !== n && (e = e <= s ? e : s), t !== n && (e = e >= t ? e : t)), e;
      }
      function bt(e, t, s, u, c, d) {
        var p, m = t & O, I = t & P, C = t & U;
        if (s && (p = c ? s(e, u, c, d) : s(e)), p !== n)
          return p;
        if (!Ne(e))
          return e;
        var N = ie(e);
        if (N) {
          if (p = _g(e), !m)
            return rt(e, p);
        } else {
          var D = ze(e), B = D == ln || D == cn;
          if (wn(e))
            return vu(e, m);
          if (D == ut || D == Vt || B && !c) {
            if (p = I || B ? {} : ku(e), !m)
              return I ? ig(e, Td(p, e)) : rg(e, zo(p, e));
          } else {
            if (!Se[D])
              return c ? e : {};
            p = pg(e, D, m);
          }
        }
        d || (d = new Ct());
        var J = d.get(e);
        if (J)
          return J;
        d.set(e, p), dl(e) ? e.forEach(function(te) {
          p.add(bt(te, t, s, te, e, d));
        }) : fl(e) && e.forEach(function(te, le) {
          p.set(le, bt(te, t, s, le, e, d));
        });
        var ee = C ? I ? Us : Ws : I ? st : Ve, ae = N ? n : ee(e);
        return wt(ae || e, function(te, le) {
          ae && (le = te, te = e[le]), vr(p, le, bt(te, t, s, le, e, d));
        }), p;
      }
      function Od(e) {
        var t = Ve(e);
        return function(s) {
          return Jo(s, e, t);
        };
      }
      function Jo(e, t, s) {
        var u = s.length;
        if (e == null)
          return !u;
        for (e = Re(e); u--; ) {
          var c = s[u], d = t[c], p = e[c];
          if (p === n && !(c in e) || !d(p))
            return !1;
        }
        return !0;
      }
      function Qo(e, t, s) {
        if (typeof e != "function")
          throw new Et(f);
        return Sr(function() {
          e.apply(n, s);
        }, t);
      }
      function wr(e, t, s, u) {
        var c = -1, d = Yr, p = !0, m = e.length, I = [], C = t.length;
        if (!m)
          return I;
        s && (t = Ce(t, ct(s))), u ? (d = os, p = !1) : t.length >= o && (d = dr, p = !1, t = new Nn(t));
        e:
          for (; ++c < m; ) {
            var N = e[c], D = s == null ? N : s(N);
            if (N = u || N !== 0 ? N : 0, p && D === D) {
              for (var B = C; B--; )
                if (t[B] === D)
                  continue e;
              I.push(N);
            } else d(t, D, u) || I.push(N);
          }
        return I;
      }
      var pn = Lu(kt), Zo = Lu(bs, !0);
      function Ad(e, t) {
        var s = !0;
        return pn(e, function(u, c, d) {
          return s = !!t(u, c, d), s;
        }), s;
      }
      function ci(e, t, s) {
        for (var u = -1, c = e.length; ++u < c; ) {
          var d = e[u], p = t(d);
          if (p != null && (m === n ? p === p && !ht(p) : s(p, m)))
            var m = p, I = d;
        }
        return I;
      }
      function $d(e, t, s, u) {
        var c = e.length;
        for (s = se(s), s < 0 && (s = -s > c ? 0 : c + s), u = u === n || u > c ? c : se(u), u < 0 && (u += c), u = s > u ? 0 : _l(u); s < u; )
          e[s++] = t;
        return e;
      }
      function jo(e, t) {
        var s = [];
        return pn(e, function(u, c, d) {
          t(u, c, d) && s.push(u);
        }), s;
      }
      function qe(e, t, s, u, c) {
        var d = -1, p = e.length;
        for (s || (s = yg), c || (c = []); ++d < p; ) {
          var m = e[d];
          t > 0 && s(m) ? t > 1 ? qe(m, t - 1, s, u, c) : dn(c, m) : u || (c[c.length] = m);
        }
        return c;
      }
      var Is = Ru(), eu = Ru(!0);
      function kt(e, t) {
        return e && Is(e, t, Ve);
      }
      function bs(e, t) {
        return e && eu(e, t, Ve);
      }
      function fi(e, t) {
        return hn(t, function(s) {
          return jt(e[s]);
        });
      }
      function xn(e, t) {
        t = yn(t, e);
        for (var s = 0, u = t.length; e != null && s < u; )
          e = e[Wt(t[s++])];
        return s && s == u ? e : n;
      }
      function tu(e, t, s) {
        var u = t(e);
        return ie(e) ? u : dn(u, s(e));
      }
      function Qe(e) {
        return e == null ? e === n ? S : On : $n && $n in Re(e) ? hg(e) : Rg(e);
      }
      function Ls(e, t) {
        return e > t;
      }
      function Cd(e, t) {
        return e != null && ve.call(e, t);
      }
      function Nd(e, t) {
        return e != null && t in Re(e);
      }
      function Pd(e, t, s) {
        return e >= Xe(t, s) && e < Ue(t, s);
      }
      function Rs(e, t, s) {
        for (var u = s ? os : Yr, c = e[0].length, d = e.length, p = d, m = L(d), I = 1 / 0, C = []; p--; ) {
          var N = e[p];
          p && t && (N = Ce(N, ct(t))), I = Xe(N.length, I), m[p] = !s && (t || c >= 120 && N.length >= 120) ? new Nn(p && N) : n;
        }
        N = e[0];
        var D = -1, B = m[0];
        e:
          for (; ++D < c && C.length < I; ) {
            var J = N[D], ee = t ? t(J) : J;
            if (J = s || J !== 0 ? J : 0, !(B ? dr(B, ee) : u(C, ee, s))) {
              for (p = d; --p; ) {
                var ae = m[p];
                if (!(ae ? dr(ae, ee) : u(e[p], ee, s)))
                  continue e;
              }
              B && B.push(ee), C.push(J);
            }
          }
        return C;
      }
      function xd(e, t, s, u) {
        return kt(e, function(c, d, p) {
          t(u, s(c), d, p);
        }), u;
      }
      function Er(e, t, s) {
        t = yn(t, e), e = Hu(e, t);
        var u = e == null ? e : e[Wt(Rt(t))];
        return u == null ? n : lt(u, e, s);
      }
      function nu(e) {
        return Pe(e) && Qe(e) == Vt;
      }
      function Dd(e) {
        return Pe(e) && Qe(e) == Le;
      }
      function Md(e) {
        return Pe(e) && Qe(e) == Yt;
      }
      function Ir(e, t, s, u, c) {
        return e === t ? !0 : e == null || t == null || !Pe(e) && !Pe(t) ? e !== e && t !== t : Fd(e, t, s, u, Ir, c);
      }
      function Fd(e, t, s, u, c, d) {
        var p = ie(e), m = ie(t), I = p ? on : ze(e), C = m ? on : ze(t);
        I = I == Vt ? ut : I, C = C == Vt ? ut : C;
        var N = I == ut, D = C == ut, B = I == C;
        if (B && wn(e)) {
          if (!wn(t))
            return !1;
          p = !0, N = !1;
        }
        if (B && !N)
          return d || (d = new Ct()), p || Zn(e) ? Du(e, t, s, u, c, d) : cg(e, t, I, s, u, c, d);
        if (!(s & Y)) {
          var J = N && ve.call(e, "__wrapped__"), ee = D && ve.call(t, "__wrapped__");
          if (J || ee) {
            var ae = J ? e.value() : e, te = ee ? t.value() : t;
            return d || (d = new Ct()), c(ae, te, s, u, d);
          }
        }
        return B ? (d || (d = new Ct()), fg(e, t, s, u, c, d)) : !1;
      }
      function kd(e) {
        return Pe(e) && ze(e) == Ge;
      }
      function Ss(e, t, s, u) {
        var c = s.length, d = c, p = !u;
        if (e == null)
          return !d;
        for (e = Re(e); c--; ) {
          var m = s[c];
          if (p && m[2] ? m[1] !== e[m[0]] : !(m[0] in e))
            return !1;
        }
        for (; ++c < d; ) {
          m = s[c];
          var I = m[0], C = e[I], N = m[1];
          if (p && m[2]) {
            if (C === n && !(I in e))
              return !1;
          } else {
            var D = new Ct();
            if (u)
              var B = u(C, N, I, e, t, D);
            if (!(B === n ? Ir(N, C, Y | G, u, D) : B))
              return !1;
          }
        }
        return !0;
      }
      function ru(e) {
        if (!Ne(e) || wg(e))
          return !1;
        var t = jt(e) ? kh : Of;
        return t.test(Mn(e));
      }
      function Kd(e) {
        return Pe(e) && Qe(e) == x;
      }
      function Wd(e) {
        return Pe(e) && ze(e) == z;
      }
      function Ud(e) {
        return Pe(e) && Oi(e.length) && !!Oe[Qe(e)];
      }
      function iu(e) {
        return typeof e == "function" ? e : e == null ? at : typeof e == "object" ? ie(e) ? ou(e[0], e[1]) : au(e) : Sl(e);
      }
      function Ts(e) {
        if (!Rr(e))
          return Gh(e);
        var t = [];
        for (var s in Re(e))
          ve.call(e, s) && s != "constructor" && t.push(s);
        return t;
      }
      function Hd(e) {
        if (!Ne(e))
          return Lg(e);
        var t = Rr(e), s = [];
        for (var u in e)
          u == "constructor" && (t || !ve.call(e, u)) || s.push(u);
        return s;
      }
      function Os(e, t) {
        return e < t;
      }
      function su(e, t) {
        var s = -1, u = it(e) ? L(e.length) : [];
        return pn(e, function(c, d, p) {
          u[++s] = t(c, d, p);
        }), u;
      }
      function au(e) {
        var t = Bs(e);
        return t.length == 1 && t[0][2] ? Wu(t[0][0], t[0][1]) : function(s) {
          return s === e || Ss(s, e, t);
        };
      }
      function ou(e, t) {
        return Vs(e) && Ku(t) ? Wu(Wt(e), t) : function(s) {
          var u = ta(s, e);
          return u === n && u === t ? na(s, e) : Ir(t, u, Y | G);
        };
      }
      function hi(e, t, s, u, c) {
        e !== t && Is(t, function(d, p) {
          if (c || (c = new Ct()), Ne(d))
            Bd(e, t, p, s, hi, u, c);
          else {
            var m = u ? u(qs(e, p), d, p + "", e, t, c) : n;
            m === n && (m = d), ws(e, p, m);
          }
        }, st);
      }
      function Bd(e, t, s, u, c, d, p) {
        var m = qs(e, s), I = qs(t, s), C = p.get(I);
        if (C) {
          ws(e, s, C);
          return;
        }
        var N = d ? d(m, I, s + "", e, t, p) : n, D = N === n;
        if (D) {
          var B = ie(I), J = !B && wn(I), ee = !B && !J && Zn(I);
          N = I, B || J || ee ? ie(m) ? N = m : Me(m) ? N = rt(m) : J ? (D = !1, N = vu(I, !0)) : ee ? (D = !1, N = wu(I, !0)) : N = [] : Tr(I) || Fn(I) ? (N = m, Fn(m) ? N = pl(m) : (!Ne(m) || jt(m)) && (N = ku(I))) : D = !1;
        }
        D && (p.set(I, N), c(N, I, u, d, p), p.delete(I)), ws(e, s, N);
      }
      function uu(e, t) {
        var s = e.length;
        if (s)
          return t += t < 0 ? s : 0, Zt(t, s) ? e[t] : n;
      }
      function lu(e, t, s) {
        t.length ? t = Ce(t, function(d) {
          return ie(d) ? function(p) {
            return xn(p, d.length === 1 ? d[0] : d);
          } : d;
        }) : t = [at];
        var u = -1;
        t = Ce(t, ct(j()));
        var c = su(e, function(d, p, m) {
          var I = Ce(t, function(C) {
            return C(d);
          });
          return { criteria: I, index: ++u, value: d };
        });
        return ph(c, function(d, p) {
          return ng(d, p, s);
        });
      }
      function Gd(e, t) {
        return cu(e, t, function(s, u) {
          return na(e, u);
        });
      }
      function cu(e, t, s) {
        for (var u = -1, c = t.length, d = {}; ++u < c; ) {
          var p = t[u], m = xn(e, p);
          s(m, p) && br(d, yn(p, e), m);
        }
        return d;
      }
      function Vd(e) {
        return function(t) {
          return xn(t, e);
        };
      }
      function As(e, t, s, u) {
        var c = u ? _h : Un, d = -1, p = t.length, m = e;
        for (e === t && (t = rt(t)), s && (m = Ce(e, ct(s))); ++d < p; )
          for (var I = 0, C = t[d], N = s ? s(C) : C; (I = c(m, N, I, u)) > -1; )
            m !== e && ni.call(m, I, 1), ni.call(e, I, 1);
        return e;
      }
      function fu(e, t) {
        for (var s = e ? t.length : 0, u = s - 1; s--; ) {
          var c = t[s];
          if (s == u || c !== d) {
            var d = c;
            Zt(c) ? ni.call(e, c, 1) : Ps(e, c);
          }
        }
        return e;
      }
      function $s(e, t) {
        return e + si(Vo() * (t - e + 1));
      }
      function Yd(e, t, s, u) {
        for (var c = -1, d = Ue(ii((t - e) / (s || 1)), 0), p = L(d); d--; )
          p[u ? d : ++c] = e, e += s;
        return p;
      }
      function Cs(e, t) {
        var s = "";
        if (!e || t < 1 || t > mt)
          return s;
        do
          t % 2 && (s += e), t = si(t / 2), t && (e += e);
        while (t);
        return s;
      }
      function oe(e, t) {
        return Xs(Uu(e, t, at), e + "");
      }
      function qd(e) {
        return Xo(jn(e));
      }
      function Xd(e, t) {
        var s = jn(e);
        return Ii(s, Pn(t, 0, s.length));
      }
      function br(e, t, s, u) {
        if (!Ne(e))
          return e;
        t = yn(t, e);
        for (var c = -1, d = t.length, p = d - 1, m = e; m != null && ++c < d; ) {
          var I = Wt(t[c]), C = s;
          if (I === "__proto__" || I === "constructor" || I === "prototype")
            return e;
          if (c != p) {
            var N = m[I];
            C = u ? u(N, I, m) : n, C === n && (C = Ne(N) ? N : Zt(t[c + 1]) ? [] : {});
          }
          vr(m, I, C), m = m[I];
        }
        return e;
      }
      var hu = ai ? function(e, t) {
        return ai.set(e, t), e;
      } : at, zd = ri ? function(e, t) {
        return ri(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ia(t),
          writable: !0
        });
      } : at;
      function Jd(e) {
        return Ii(jn(e));
      }
      function Lt(e, t, s) {
        var u = -1, c = e.length;
        t < 0 && (t = -t > c ? 0 : c + t), s = s > c ? c : s, s < 0 && (s += c), c = t > s ? 0 : s - t >>> 0, t >>>= 0;
        for (var d = L(c); ++u < c; )
          d[u] = e[u + t];
        return d;
      }
      function Qd(e, t) {
        var s;
        return pn(e, function(u, c, d) {
          return s = t(u, c, d), !s;
        }), !!s;
      }
      function di(e, t, s) {
        var u = 0, c = e == null ? u : e.length;
        if (typeof t == "number" && t === t && c <= ur) {
          for (; u < c; ) {
            var d = u + c >>> 1, p = e[d];
            p !== null && !ht(p) && (s ? p <= t : p < t) ? u = d + 1 : c = d;
          }
          return c;
        }
        return Ns(e, t, at, s);
      }
      function Ns(e, t, s, u) {
        var c = 0, d = e == null ? 0 : e.length;
        if (d === 0)
          return 0;
        t = s(t);
        for (var p = t !== t, m = t === null, I = ht(t), C = t === n; c < d; ) {
          var N = si((c + d) / 2), D = s(e[N]), B = D !== n, J = D === null, ee = D === D, ae = ht(D);
          if (p)
            var te = u || ee;
          else C ? te = ee && (u || B) : m ? te = ee && B && (u || !J) : I ? te = ee && B && !J && (u || !ae) : J || ae ? te = !1 : te = u ? D <= t : D < t;
          te ? c = N + 1 : d = N;
        }
        return Xe(d, or);
      }
      function du(e, t) {
        for (var s = -1, u = e.length, c = 0, d = []; ++s < u; ) {
          var p = e[s], m = t ? t(p) : p;
          if (!s || !Nt(m, I)) {
            var I = m;
            d[c++] = p === 0 ? 0 : p;
          }
        }
        return d;
      }
      function gu(e) {
        return typeof e == "number" ? e : ht(e) ? Gt : +e;
      }
      function ft(e) {
        if (typeof e == "string")
          return e;
        if (ie(e))
          return Ce(e, ft) + "";
        if (ht(e))
          return Yo ? Yo.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -$e ? "-0" : t;
      }
      function mn(e, t, s) {
        var u = -1, c = Yr, d = e.length, p = !0, m = [], I = m;
        if (s)
          p = !1, c = os;
        else if (d >= o) {
          var C = t ? null : ug(e);
          if (C)
            return Xr(C);
          p = !1, c = dr, I = new Nn();
        } else
          I = t ? [] : m;
        e:
          for (; ++u < d; ) {
            var N = e[u], D = t ? t(N) : N;
            if (N = s || N !== 0 ? N : 0, p && D === D) {
              for (var B = I.length; B--; )
                if (I[B] === D)
                  continue e;
              t && I.push(D), m.push(N);
            } else c(I, D, s) || (I !== m && I.push(D), m.push(N));
          }
        return m;
      }
      function Ps(e, t) {
        return t = yn(t, e), e = Hu(e, t), e == null || delete e[Wt(Rt(t))];
      }
      function _u(e, t, s, u) {
        return br(e, t, s(xn(e, t)), u);
      }
      function gi(e, t, s, u) {
        for (var c = e.length, d = u ? c : -1; (u ? d-- : ++d < c) && t(e[d], d, e); )
          ;
        return s ? Lt(e, u ? 0 : d, u ? d + 1 : c) : Lt(e, u ? d + 1 : 0, u ? c : d);
      }
      function pu(e, t) {
        var s = e;
        return s instanceof ce && (s = s.value()), us(t, function(u, c) {
          return c.func.apply(c.thisArg, dn([u], c.args));
        }, s);
      }
      function xs(e, t, s) {
        var u = e.length;
        if (u < 2)
          return u ? mn(e[0]) : [];
        for (var c = -1, d = L(u); ++c < u; )
          for (var p = e[c], m = -1; ++m < u; )
            m != c && (d[c] = wr(d[c] || p, e[m], t, s));
        return mn(qe(d, 1), t, s);
      }
      function mu(e, t, s) {
        for (var u = -1, c = e.length, d = t.length, p = {}; ++u < c; ) {
          var m = u < d ? t[u] : n;
          s(p, e[u], m);
        }
        return p;
      }
      function Ds(e) {
        return Me(e) ? e : [];
      }
      function Ms(e) {
        return typeof e == "function" ? e : at;
      }
      function yn(e, t) {
        return ie(e) ? e : Vs(e, t) ? [e] : Yu(_e(e));
      }
      var Zd = oe;
      function vn(e, t, s) {
        var u = e.length;
        return s = s === n ? u : s, !t && s >= u ? e : Lt(e, t, s);
      }
      var yu = Kh || function(e) {
        return Ye.clearTimeout(e);
      };
      function vu(e, t) {
        if (t)
          return e.slice();
        var s = e.length, u = Wo ? Wo(s) : new e.constructor(s);
        return e.copy(u), u;
      }
      function Fs(e) {
        var t = new e.constructor(e.byteLength);
        return new ei(t).set(new ei(e)), t;
      }
      function jd(e, t) {
        var s = t ? Fs(e.buffer) : e.buffer;
        return new e.constructor(s, e.byteOffset, e.byteLength);
      }
      function eg(e) {
        var t = new e.constructor(e.source, to.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function tg(e) {
        return yr ? Re(yr.call(e)) : {};
      }
      function wu(e, t) {
        var s = t ? Fs(e.buffer) : e.buffer;
        return new e.constructor(s, e.byteOffset, e.length);
      }
      function Eu(e, t) {
        if (e !== t) {
          var s = e !== n, u = e === null, c = e === e, d = ht(e), p = t !== n, m = t === null, I = t === t, C = ht(t);
          if (!m && !C && !d && e > t || d && p && I && !m && !C || u && p && I || !s && I || !c)
            return 1;
          if (!u && !d && !C && e < t || C && s && c && !u && !d || m && s && c || !p && c || !I)
            return -1;
        }
        return 0;
      }
      function ng(e, t, s) {
        for (var u = -1, c = e.criteria, d = t.criteria, p = c.length, m = s.length; ++u < p; ) {
          var I = Eu(c[u], d[u]);
          if (I) {
            if (u >= m)
              return I;
            var C = s[u];
            return I * (C == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function Iu(e, t, s, u) {
        for (var c = -1, d = e.length, p = s.length, m = -1, I = t.length, C = Ue(d - p, 0), N = L(I + C), D = !u; ++m < I; )
          N[m] = t[m];
        for (; ++c < p; )
          (D || c < d) && (N[s[c]] = e[c]);
        for (; C--; )
          N[m++] = e[c++];
        return N;
      }
      function bu(e, t, s, u) {
        for (var c = -1, d = e.length, p = -1, m = s.length, I = -1, C = t.length, N = Ue(d - m, 0), D = L(N + C), B = !u; ++c < N; )
          D[c] = e[c];
        for (var J = c; ++I < C; )
          D[J + I] = t[I];
        for (; ++p < m; )
          (B || c < d) && (D[J + s[p]] = e[c++]);
        return D;
      }
      function rt(e, t) {
        var s = -1, u = e.length;
        for (t || (t = L(u)); ++s < u; )
          t[s] = e[s];
        return t;
      }
      function Kt(e, t, s, u) {
        var c = !s;
        s || (s = {});
        for (var d = -1, p = t.length; ++d < p; ) {
          var m = t[d], I = u ? u(s[m], e[m], m, s, e) : n;
          I === n && (I = e[m]), c ? zt(s, m, I) : vr(s, m, I);
        }
        return s;
      }
      function rg(e, t) {
        return Kt(e, Gs(e), t);
      }
      function ig(e, t) {
        return Kt(e, Mu(e), t);
      }
      function _i(e, t) {
        return function(s, u) {
          var c = ie(s) ? lh : Sd, d = t ? t() : {};
          return c(s, e, j(u, 2), d);
        };
      }
      function zn(e) {
        return oe(function(t, s) {
          var u = -1, c = s.length, d = c > 1 ? s[c - 1] : n, p = c > 2 ? s[2] : n;
          for (d = e.length > 3 && typeof d == "function" ? (c--, d) : n, p && Ze(s[0], s[1], p) && (d = c < 3 ? n : d, c = 1), t = Re(t); ++u < c; ) {
            var m = s[u];
            m && e(t, m, u, d);
          }
          return t;
        });
      }
      function Lu(e, t) {
        return function(s, u) {
          if (s == null)
            return s;
          if (!it(s))
            return e(s, u);
          for (var c = s.length, d = t ? c : -1, p = Re(s); (t ? d-- : ++d < c) && u(p[d], d, p) !== !1; )
            ;
          return s;
        };
      }
      function Ru(e) {
        return function(t, s, u) {
          for (var c = -1, d = Re(t), p = u(t), m = p.length; m--; ) {
            var I = p[e ? m : ++c];
            if (s(d[I], I, d) === !1)
              break;
          }
          return t;
        };
      }
      function sg(e, t, s) {
        var u = t & H, c = Lr(e);
        function d() {
          var p = this && this !== Ye && this instanceof d ? c : e;
          return p.apply(u ? s : this, arguments);
        }
        return d;
      }
      function Su(e) {
        return function(t) {
          t = _e(t);
          var s = Hn(t) ? $t(t) : n, u = s ? s[0] : t.charAt(0), c = s ? vn(s, 1).join("") : t.slice(1);
          return u[e]() + c;
        };
      }
      function Jn(e) {
        return function(t) {
          return us(Ll(bl(t).replace(zf, "")), e, "");
        };
      }
      function Lr(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var s = Xn(e.prototype), u = e.apply(s, t);
          return Ne(u) ? u : s;
        };
      }
      function ag(e, t, s) {
        var u = Lr(e);
        function c() {
          for (var d = arguments.length, p = L(d), m = d, I = Qn(c); m--; )
            p[m] = arguments[m];
          var C = d < 3 && p[0] !== I && p[d - 1] !== I ? [] : gn(p, I);
          if (d -= C.length, d < s)
            return Cu(
              e,
              t,
              pi,
              c.placeholder,
              n,
              p,
              C,
              n,
              n,
              s - d
            );
          var N = this && this !== Ye && this instanceof c ? u : e;
          return lt(N, this, p);
        }
        return c;
      }
      function Tu(e) {
        return function(t, s, u) {
          var c = Re(t);
          if (!it(t)) {
            var d = j(s, 3);
            t = Ve(t), s = function(m) {
              return d(c[m], m, c);
            };
          }
          var p = e(t, s, u);
          return p > -1 ? c[d ? t[p] : p] : n;
        };
      }
      function Ou(e) {
        return Qt(function(t) {
          var s = t.length, u = s, c = It.prototype.thru;
          for (e && t.reverse(); u--; ) {
            var d = t[u];
            if (typeof d != "function")
              throw new Et(f);
            if (c && !p && wi(d) == "wrapper")
              var p = new It([], !0);
          }
          for (u = p ? u : s; ++u < s; ) {
            d = t[u];
            var m = wi(d), I = m == "wrapper" ? Hs(d) : n;
            I && Ys(I[0]) && I[1] == (F | W | K | Q) && !I[4].length && I[9] == 1 ? p = p[wi(I[0])].apply(p, I[3]) : p = d.length == 1 && Ys(d) ? p[m]() : p.thru(d);
          }
          return function() {
            var C = arguments, N = C[0];
            if (p && C.length == 1 && ie(N))
              return p.plant(N).value();
            for (var D = 0, B = s ? t[D].apply(this, C) : N; ++D < s; )
              B = t[D].call(this, B);
            return B;
          };
        });
      }
      function pi(e, t, s, u, c, d, p, m, I, C) {
        var N = t & F, D = t & H, B = t & b, J = t & (W | $), ee = t & Z, ae = B ? n : Lr(e);
        function te() {
          for (var le = arguments.length, fe = L(le), dt = le; dt--; )
            fe[dt] = arguments[dt];
          if (J)
            var je = Qn(te), gt = yh(fe, je);
          if (u && (fe = Iu(fe, u, c, J)), d && (fe = bu(fe, d, p, J)), le -= gt, J && le < C) {
            var Fe = gn(fe, je);
            return Cu(
              e,
              t,
              pi,
              te.placeholder,
              s,
              fe,
              Fe,
              m,
              I,
              C - le
            );
          }
          var Pt = D ? s : this, tn = B ? Pt[e] : e;
          return le = fe.length, m ? fe = Sg(fe, m) : ee && le > 1 && fe.reverse(), N && I < le && (fe.length = I), this && this !== Ye && this instanceof te && (tn = ae || Lr(tn)), tn.apply(Pt, fe);
        }
        return te;
      }
      function Au(e, t) {
        return function(s, u) {
          return xd(s, e, t(u), {});
        };
      }
      function mi(e, t) {
        return function(s, u) {
          var c;
          if (s === n && u === n)
            return t;
          if (s !== n && (c = s), u !== n) {
            if (c === n)
              return u;
            typeof s == "string" || typeof u == "string" ? (s = ft(s), u = ft(u)) : (s = gu(s), u = gu(u)), c = e(s, u);
          }
          return c;
        };
      }
      function ks(e) {
        return Qt(function(t) {
          return t = Ce(t, ct(j())), oe(function(s) {
            var u = this;
            return e(t, function(c) {
              return lt(c, u, s);
            });
          });
        });
      }
      function yi(e, t) {
        t = t === n ? " " : ft(t);
        var s = t.length;
        if (s < 2)
          return s ? Cs(t, e) : t;
        var u = Cs(t, ii(e / Bn(t)));
        return Hn(t) ? vn($t(u), 0, e).join("") : u.slice(0, e);
      }
      function og(e, t, s, u) {
        var c = t & H, d = Lr(e);
        function p() {
          for (var m = -1, I = arguments.length, C = -1, N = u.length, D = L(N + I), B = this && this !== Ye && this instanceof p ? d : e; ++C < N; )
            D[C] = u[C];
          for (; I--; )
            D[C++] = arguments[++m];
          return lt(B, c ? s : this, D);
        }
        return p;
      }
      function $u(e) {
        return function(t, s, u) {
          return u && typeof u != "number" && Ze(t, s, u) && (s = u = n), t = en(t), s === n ? (s = t, t = 0) : s = en(s), u = u === n ? t < s ? 1 : -1 : en(u), Yd(t, s, u, e);
        };
      }
      function vi(e) {
        return function(t, s) {
          return typeof t == "string" && typeof s == "string" || (t = St(t), s = St(s)), e(t, s);
        };
      }
      function Cu(e, t, s, u, c, d, p, m, I, C) {
        var N = t & W, D = N ? p : n, B = N ? n : p, J = N ? d : n, ee = N ? n : d;
        t |= N ? K : V, t &= ~(N ? V : K), t & M || (t &= -4);
        var ae = [
          e,
          t,
          c,
          J,
          D,
          ee,
          B,
          m,
          I,
          C
        ], te = s.apply(n, ae);
        return Ys(e) && Bu(te, ae), te.placeholder = u, Gu(te, e, t);
      }
      function Ks(e) {
        var t = We[e];
        return function(s, u) {
          if (s = St(s), u = u == null ? 0 : Xe(se(u), 292), u && Go(s)) {
            var c = (_e(s) + "e").split("e"), d = t(c[0] + "e" + (+c[1] + u));
            return c = (_e(d) + "e").split("e"), +(c[0] + "e" + (+c[1] - u));
          }
          return t(s);
        };
      }
      var ug = Yn && 1 / Xr(new Yn([, -0]))[1] == $e ? function(e) {
        return new Yn(e);
      } : oa;
      function Nu(e) {
        return function(t) {
          var s = ze(t);
          return s == Ge ? _s(t) : s == z ? Rh(t) : mh(t, e(t));
        };
      }
      function Jt(e, t, s, u, c, d, p, m) {
        var I = t & b;
        if (!I && typeof e != "function")
          throw new Et(f);
        var C = u ? u.length : 0;
        if (C || (t &= -97, u = c = n), p = p === n ? p : Ue(se(p), 0), m = m === n ? m : se(m), C -= c ? c.length : 0, t & V) {
          var N = u, D = c;
          u = c = n;
        }
        var B = I ? n : Hs(e), J = [
          e,
          t,
          s,
          u,
          c,
          N,
          D,
          d,
          p,
          m
        ];
        if (B && bg(J, B), e = J[0], t = J[1], s = J[2], u = J[3], c = J[4], m = J[9] = J[9] === n ? I ? 0 : e.length : Ue(J[9] - C, 0), !m && t & (W | $) && (t &= -25), !t || t == H)
          var ee = sg(e, t, s);
        else t == W || t == $ ? ee = ag(e, t, m) : (t == K || t == (H | K)) && !c.length ? ee = og(e, t, s, u) : ee = pi.apply(n, J);
        var ae = B ? hu : Bu;
        return Gu(ae(ee, J), e, t);
      }
      function Pu(e, t, s, u) {
        return e === n || Nt(e, Vn[s]) && !ve.call(u, s) ? t : e;
      }
      function xu(e, t, s, u, c, d) {
        return Ne(e) && Ne(t) && (d.set(t, e), hi(e, t, n, xu, d), d.delete(t)), e;
      }
      function lg(e) {
        return Tr(e) ? n : e;
      }
      function Du(e, t, s, u, c, d) {
        var p = s & Y, m = e.length, I = t.length;
        if (m != I && !(p && I > m))
          return !1;
        var C = d.get(e), N = d.get(t);
        if (C && N)
          return C == t && N == e;
        var D = -1, B = !0, J = s & G ? new Nn() : n;
        for (d.set(e, t), d.set(t, e); ++D < m; ) {
          var ee = e[D], ae = t[D];
          if (u)
            var te = p ? u(ae, ee, D, t, e, d) : u(ee, ae, D, e, t, d);
          if (te !== n) {
            if (te)
              continue;
            B = !1;
            break;
          }
          if (J) {
            if (!ls(t, function(le, fe) {
              if (!dr(J, fe) && (ee === le || c(ee, le, s, u, d)))
                return J.push(fe);
            })) {
              B = !1;
              break;
            }
          } else if (!(ee === ae || c(ee, ae, s, u, d))) {
            B = !1;
            break;
          }
        }
        return d.delete(e), d.delete(t), B;
      }
      function cg(e, t, s, u, c, d, p) {
        switch (s) {
          case nt:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case Le:
            return !(e.byteLength != t.byteLength || !d(new ei(e), new ei(t)));
          case Mt:
          case Yt:
          case yt:
            return Nt(+e, +t);
          case un:
            return e.name == t.name && e.message == t.message;
          case x:
          case be:
            return e == t + "";
          case Ge:
            var m = _s;
          case z:
            var I = u & Y;
            if (m || (m = Xr), e.size != t.size && !I)
              return !1;
            var C = p.get(e);
            if (C)
              return C == t;
            u |= G, p.set(e, t);
            var N = Du(m(e), m(t), u, c, d, p);
            return p.delete(e), N;
          case re:
            if (yr)
              return yr.call(e) == yr.call(t);
        }
        return !1;
      }
      function fg(e, t, s, u, c, d) {
        var p = s & Y, m = Ws(e), I = m.length, C = Ws(t), N = C.length;
        if (I != N && !p)
          return !1;
        for (var D = I; D--; ) {
          var B = m[D];
          if (!(p ? B in t : ve.call(t, B)))
            return !1;
        }
        var J = d.get(e), ee = d.get(t);
        if (J && ee)
          return J == t && ee == e;
        var ae = !0;
        d.set(e, t), d.set(t, e);
        for (var te = p; ++D < I; ) {
          B = m[D];
          var le = e[B], fe = t[B];
          if (u)
            var dt = p ? u(fe, le, B, t, e, d) : u(le, fe, B, e, t, d);
          if (!(dt === n ? le === fe || c(le, fe, s, u, d) : dt)) {
            ae = !1;
            break;
          }
          te || (te = B == "constructor");
        }
        if (ae && !te) {
          var je = e.constructor, gt = t.constructor;
          je != gt && "constructor" in e && "constructor" in t && !(typeof je == "function" && je instanceof je && typeof gt == "function" && gt instanceof gt) && (ae = !1);
        }
        return d.delete(e), d.delete(t), ae;
      }
      function Qt(e) {
        return Xs(Uu(e, n, Ju), e + "");
      }
      function Ws(e) {
        return tu(e, Ve, Gs);
      }
      function Us(e) {
        return tu(e, st, Mu);
      }
      var Hs = ai ? function(e) {
        return ai.get(e);
      } : oa;
      function wi(e) {
        for (var t = e.name + "", s = qn[t], u = ve.call(qn, t) ? s.length : 0; u--; ) {
          var c = s[u], d = c.func;
          if (d == null || d == e)
            return c.name;
        }
        return t;
      }
      function Qn(e) {
        var t = ve.call(h, "placeholder") ? h : e;
        return t.placeholder;
      }
      function j() {
        var e = h.iteratee || sa;
        return e = e === sa ? iu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Ei(e, t) {
        var s = e.__data__;
        return vg(t) ? s[typeof t == "string" ? "string" : "hash"] : s.map;
      }
      function Bs(e) {
        for (var t = Ve(e), s = t.length; s--; ) {
          var u = t[s], c = e[u];
          t[s] = [u, c, Ku(c)];
        }
        return t;
      }
      function Dn(e, t) {
        var s = Ih(e, t);
        return ru(s) ? s : n;
      }
      function hg(e) {
        var t = ve.call(e, $n), s = e[$n];
        try {
          e[$n] = n;
          var u = !0;
        } catch {
        }
        var c = Zr.call(e);
        return u && (t ? e[$n] = s : delete e[$n]), c;
      }
      var Gs = ms ? function(e) {
        return e == null ? [] : (e = Re(e), hn(ms(e), function(t) {
          return Ho.call(e, t);
        }));
      } : ua, Mu = ms ? function(e) {
        for (var t = []; e; )
          dn(t, Gs(e)), e = ti(e);
        return t;
      } : ua, ze = Qe;
      (ys && ze(new ys(new ArrayBuffer(1))) != nt || _r && ze(new _r()) != Ge || vs && ze(vs.resolve()) != y || Yn && ze(new Yn()) != z || pr && ze(new pr()) != k) && (ze = function(e) {
        var t = Qe(e), s = t == ut ? e.constructor : n, u = s ? Mn(s) : "";
        if (u)
          switch (u) {
            case Xh:
              return nt;
            case zh:
              return Ge;
            case Jh:
              return y;
            case Qh:
              return z;
            case Zh:
              return k;
          }
        return t;
      });
      function dg(e, t, s) {
        for (var u = -1, c = s.length; ++u < c; ) {
          var d = s[u], p = d.size;
          switch (d.type) {
            case "drop":
              e += p;
              break;
            case "dropRight":
              t -= p;
              break;
            case "take":
              t = Xe(t, e + p);
              break;
            case "takeRight":
              e = Ue(e, t - p);
              break;
          }
        }
        return { start: e, end: t };
      }
      function gg(e) {
        var t = e.match(wf);
        return t ? t[1].split(Ef) : [];
      }
      function Fu(e, t, s) {
        t = yn(t, e);
        for (var u = -1, c = t.length, d = !1; ++u < c; ) {
          var p = Wt(t[u]);
          if (!(d = e != null && s(e, p)))
            break;
          e = e[p];
        }
        return d || ++u != c ? d : (c = e == null ? 0 : e.length, !!c && Oi(c) && Zt(p, c) && (ie(e) || Fn(e)));
      }
      function _g(e) {
        var t = e.length, s = new e.constructor(t);
        return t && typeof e[0] == "string" && ve.call(e, "index") && (s.index = e.index, s.input = e.input), s;
      }
      function ku(e) {
        return typeof e.constructor == "function" && !Rr(e) ? Xn(ti(e)) : {};
      }
      function pg(e, t, s) {
        var u = e.constructor;
        switch (t) {
          case Le:
            return Fs(e);
          case Mt:
          case Yt:
            return new u(+e);
          case nt:
            return jd(e, s);
          case fn:
          case Ft:
          case hr:
          case Hr:
          case qi:
          case Xi:
          case zi:
          case Ji:
          case Qi:
            return wu(e, s);
          case Ge:
            return new u();
          case yt:
          case be:
            return new u(e);
          case x:
            return eg(e);
          case z:
            return new u();
          case re:
            return tg(e);
        }
      }
      function mg(e, t) {
        var s = t.length;
        if (!s)
          return e;
        var u = s - 1;
        return t[u] = (s > 1 ? "& " : "") + t[u], t = t.join(s > 2 ? ", " : " "), e.replace(vf, `{
/* [wrapped with ` + t + `] */
`);
      }
      function yg(e) {
        return ie(e) || Fn(e) || !!(Bo && e && e[Bo]);
      }
      function Zt(e, t) {
        var s = typeof e;
        return t = t ?? mt, !!t && (s == "number" || s != "symbol" && $f.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Ze(e, t, s) {
        if (!Ne(s))
          return !1;
        var u = typeof t;
        return (u == "number" ? it(s) && Zt(t, s.length) : u == "string" && t in s) ? Nt(s[t], e) : !1;
      }
      function Vs(e, t) {
        if (ie(e))
          return !1;
        var s = typeof e;
        return s == "number" || s == "symbol" || s == "boolean" || e == null || ht(e) ? !0 : _f.test(e) || !gf.test(e) || t != null && e in Re(t);
      }
      function vg(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Ys(e) {
        var t = wi(e), s = h[t];
        if (typeof s != "function" || !(t in ce.prototype))
          return !1;
        if (e === s)
          return !0;
        var u = Hs(s);
        return !!u && e === u[0];
      }
      function wg(e) {
        return !!Ko && Ko in e;
      }
      var Eg = Jr ? jt : la;
      function Rr(e) {
        var t = e && e.constructor, s = typeof t == "function" && t.prototype || Vn;
        return e === s;
      }
      function Ku(e) {
        return e === e && !Ne(e);
      }
      function Wu(e, t) {
        return function(s) {
          return s == null ? !1 : s[e] === t && (t !== n || e in Re(s));
        };
      }
      function Ig(e) {
        var t = Si(e, function(u) {
          return s.size === w && s.clear(), u;
        }), s = t.cache;
        return t;
      }
      function bg(e, t) {
        var s = e[1], u = t[1], c = s | u, d = c < (H | b | F), p = u == F && s == W || u == F && s == Q && e[7].length <= t[8] || u == (F | Q) && t[7].length <= t[8] && s == W;
        if (!(d || p))
          return e;
        u & H && (e[2] = t[2], c |= s & H ? 0 : M);
        var m = t[3];
        if (m) {
          var I = e[3];
          e[3] = I ? Iu(I, m, t[4]) : m, e[4] = I ? gn(e[3], T) : t[4];
        }
        return m = t[5], m && (I = e[5], e[5] = I ? bu(I, m, t[6]) : m, e[6] = I ? gn(e[5], T) : t[6]), m = t[7], m && (e[7] = m), u & F && (e[8] = e[8] == null ? t[8] : Xe(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = c, e;
      }
      function Lg(e) {
        var t = [];
        if (e != null)
          for (var s in Re(e))
            t.push(s);
        return t;
      }
      function Rg(e) {
        return Zr.call(e);
      }
      function Uu(e, t, s) {
        return t = Ue(t === n ? e.length - 1 : t, 0), function() {
          for (var u = arguments, c = -1, d = Ue(u.length - t, 0), p = L(d); ++c < d; )
            p[c] = u[t + c];
          c = -1;
          for (var m = L(t + 1); ++c < t; )
            m[c] = u[c];
          return m[t] = s(p), lt(e, this, m);
        };
      }
      function Hu(e, t) {
        return t.length < 2 ? e : xn(e, Lt(t, 0, -1));
      }
      function Sg(e, t) {
        for (var s = e.length, u = Xe(t.length, s), c = rt(e); u--; ) {
          var d = t[u];
          e[u] = Zt(d, s) ? c[d] : n;
        }
        return e;
      }
      function qs(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var Bu = Vu(hu), Sr = Uh || function(e, t) {
        return Ye.setTimeout(e, t);
      }, Xs = Vu(zd);
      function Gu(e, t, s) {
        var u = t + "";
        return Xs(e, mg(u, Tg(gg(u), s)));
      }
      function Vu(e) {
        var t = 0, s = 0;
        return function() {
          var u = Vh(), c = pt - (u - s);
          if (s = u, c > 0) {
            if (++t >= me)
              return arguments[0];
          } else
            t = 0;
          return e.apply(n, arguments);
        };
      }
      function Ii(e, t) {
        var s = -1, u = e.length, c = u - 1;
        for (t = t === n ? u : t; ++s < t; ) {
          var d = $s(s, c), p = e[d];
          e[d] = e[s], e[s] = p;
        }
        return e.length = t, e;
      }
      var Yu = Ig(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(pf, function(s, u, c, d) {
          t.push(c ? d.replace(Lf, "$1") : u || s);
        }), t;
      });
      function Wt(e) {
        if (typeof e == "string" || ht(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -$e ? "-0" : t;
      }
      function Mn(e) {
        if (e != null) {
          try {
            return Qr.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Tg(e, t) {
        return wt(lr, function(s) {
          var u = "_." + s[0];
          t & s[1] && !Yr(e, u) && e.push(u);
        }), e.sort();
      }
      function qu(e) {
        if (e instanceof ce)
          return e.clone();
        var t = new It(e.__wrapped__, e.__chain__);
        return t.__actions__ = rt(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function Og(e, t, s) {
        (s ? Ze(e, t, s) : t === n) ? t = 1 : t = Ue(se(t), 0);
        var u = e == null ? 0 : e.length;
        if (!u || t < 1)
          return [];
        for (var c = 0, d = 0, p = L(ii(u / t)); c < u; )
          p[d++] = Lt(e, c, c += t);
        return p;
      }
      function Ag(e) {
        for (var t = -1, s = e == null ? 0 : e.length, u = 0, c = []; ++t < s; ) {
          var d = e[t];
          d && (c[u++] = d);
        }
        return c;
      }
      function $g() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = L(e - 1), s = arguments[0], u = e; u--; )
          t[u - 1] = arguments[u];
        return dn(ie(s) ? rt(s) : [s], qe(t, 1));
      }
      var Cg = oe(function(e, t) {
        return Me(e) ? wr(e, qe(t, 1, Me, !0)) : [];
      }), Ng = oe(function(e, t) {
        var s = Rt(t);
        return Me(s) && (s = n), Me(e) ? wr(e, qe(t, 1, Me, !0), j(s, 2)) : [];
      }), Pg = oe(function(e, t) {
        var s = Rt(t);
        return Me(s) && (s = n), Me(e) ? wr(e, qe(t, 1, Me, !0), n, s) : [];
      });
      function xg(e, t, s) {
        var u = e == null ? 0 : e.length;
        return u ? (t = s || t === n ? 1 : se(t), Lt(e, t < 0 ? 0 : t, u)) : [];
      }
      function Dg(e, t, s) {
        var u = e == null ? 0 : e.length;
        return u ? (t = s || t === n ? 1 : se(t), t = u - t, Lt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Mg(e, t) {
        return e && e.length ? gi(e, j(t, 3), !0, !0) : [];
      }
      function Fg(e, t) {
        return e && e.length ? gi(e, j(t, 3), !0) : [];
      }
      function kg(e, t, s, u) {
        var c = e == null ? 0 : e.length;
        return c ? (s && typeof s != "number" && Ze(e, t, s) && (s = 0, u = c), $d(e, t, s, u)) : [];
      }
      function Xu(e, t, s) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var c = s == null ? 0 : se(s);
        return c < 0 && (c = Ue(u + c, 0)), qr(e, j(t, 3), c);
      }
      function zu(e, t, s) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var c = u - 1;
        return s !== n && (c = se(s), c = s < 0 ? Ue(u + c, 0) : Xe(c, u - 1)), qr(e, j(t, 3), c, !0);
      }
      function Ju(e) {
        var t = e == null ? 0 : e.length;
        return t ? qe(e, 1) : [];
      }
      function Kg(e) {
        var t = e == null ? 0 : e.length;
        return t ? qe(e, $e) : [];
      }
      function Wg(e, t) {
        var s = e == null ? 0 : e.length;
        return s ? (t = t === n ? 1 : se(t), qe(e, t)) : [];
      }
      function Ug(e) {
        for (var t = -1, s = e == null ? 0 : e.length, u = {}; ++t < s; ) {
          var c = e[t];
          u[c[0]] = c[1];
        }
        return u;
      }
      function Qu(e) {
        return e && e.length ? e[0] : n;
      }
      function Hg(e, t, s) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var c = s == null ? 0 : se(s);
        return c < 0 && (c = Ue(u + c, 0)), Un(e, t, c);
      }
      function Bg(e) {
        var t = e == null ? 0 : e.length;
        return t ? Lt(e, 0, -1) : [];
      }
      var Gg = oe(function(e) {
        var t = Ce(e, Ds);
        return t.length && t[0] === e[0] ? Rs(t) : [];
      }), Vg = oe(function(e) {
        var t = Rt(e), s = Ce(e, Ds);
        return t === Rt(s) ? t = n : s.pop(), s.length && s[0] === e[0] ? Rs(s, j(t, 2)) : [];
      }), Yg = oe(function(e) {
        var t = Rt(e), s = Ce(e, Ds);
        return t = typeof t == "function" ? t : n, t && s.pop(), s.length && s[0] === e[0] ? Rs(s, n, t) : [];
      });
      function qg(e, t) {
        return e == null ? "" : Bh.call(e, t);
      }
      function Rt(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : n;
      }
      function Xg(e, t, s) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var c = u;
        return s !== n && (c = se(s), c = c < 0 ? Ue(u + c, 0) : Xe(c, u - 1)), t === t ? Th(e, t, c) : qr(e, Co, c, !0);
      }
      function zg(e, t) {
        return e && e.length ? uu(e, se(t)) : n;
      }
      var Jg = oe(Zu);
      function Zu(e, t) {
        return e && e.length && t && t.length ? As(e, t) : e;
      }
      function Qg(e, t, s) {
        return e && e.length && t && t.length ? As(e, t, j(s, 2)) : e;
      }
      function Zg(e, t, s) {
        return e && e.length && t && t.length ? As(e, t, n, s) : e;
      }
      var jg = Qt(function(e, t) {
        var s = e == null ? 0 : e.length, u = Es(e, t);
        return fu(e, Ce(t, function(c) {
          return Zt(c, s) ? +c : c;
        }).sort(Eu)), u;
      });
      function e_(e, t) {
        var s = [];
        if (!(e && e.length))
          return s;
        var u = -1, c = [], d = e.length;
        for (t = j(t, 3); ++u < d; ) {
          var p = e[u];
          t(p, u, e) && (s.push(p), c.push(u));
        }
        return fu(e, c), s;
      }
      function zs(e) {
        return e == null ? e : qh.call(e);
      }
      function t_(e, t, s) {
        var u = e == null ? 0 : e.length;
        return u ? (s && typeof s != "number" && Ze(e, t, s) ? (t = 0, s = u) : (t = t == null ? 0 : se(t), s = s === n ? u : se(s)), Lt(e, t, s)) : [];
      }
      function n_(e, t) {
        return di(e, t);
      }
      function r_(e, t, s) {
        return Ns(e, t, j(s, 2));
      }
      function i_(e, t) {
        var s = e == null ? 0 : e.length;
        if (s) {
          var u = di(e, t);
          if (u < s && Nt(e[u], t))
            return u;
        }
        return -1;
      }
      function s_(e, t) {
        return di(e, t, !0);
      }
      function a_(e, t, s) {
        return Ns(e, t, j(s, 2), !0);
      }
      function o_(e, t) {
        var s = e == null ? 0 : e.length;
        if (s) {
          var u = di(e, t, !0) - 1;
          if (Nt(e[u], t))
            return u;
        }
        return -1;
      }
      function u_(e) {
        return e && e.length ? du(e) : [];
      }
      function l_(e, t) {
        return e && e.length ? du(e, j(t, 2)) : [];
      }
      function c_(e) {
        var t = e == null ? 0 : e.length;
        return t ? Lt(e, 1, t) : [];
      }
      function f_(e, t, s) {
        return e && e.length ? (t = s || t === n ? 1 : se(t), Lt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function h_(e, t, s) {
        var u = e == null ? 0 : e.length;
        return u ? (t = s || t === n ? 1 : se(t), t = u - t, Lt(e, t < 0 ? 0 : t, u)) : [];
      }
      function d_(e, t) {
        return e && e.length ? gi(e, j(t, 3), !1, !0) : [];
      }
      function g_(e, t) {
        return e && e.length ? gi(e, j(t, 3)) : [];
      }
      var __ = oe(function(e) {
        return mn(qe(e, 1, Me, !0));
      }), p_ = oe(function(e) {
        var t = Rt(e);
        return Me(t) && (t = n), mn(qe(e, 1, Me, !0), j(t, 2));
      }), m_ = oe(function(e) {
        var t = Rt(e);
        return t = typeof t == "function" ? t : n, mn(qe(e, 1, Me, !0), n, t);
      });
      function y_(e) {
        return e && e.length ? mn(e) : [];
      }
      function v_(e, t) {
        return e && e.length ? mn(e, j(t, 2)) : [];
      }
      function w_(e, t) {
        return t = typeof t == "function" ? t : n, e && e.length ? mn(e, n, t) : [];
      }
      function Js(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = hn(e, function(s) {
          if (Me(s))
            return t = Ue(s.length, t), !0;
        }), ds(t, function(s) {
          return Ce(e, cs(s));
        });
      }
      function ju(e, t) {
        if (!(e && e.length))
          return [];
        var s = Js(e);
        return t == null ? s : Ce(s, function(u) {
          return lt(t, n, u);
        });
      }
      var E_ = oe(function(e, t) {
        return Me(e) ? wr(e, t) : [];
      }), I_ = oe(function(e) {
        return xs(hn(e, Me));
      }), b_ = oe(function(e) {
        var t = Rt(e);
        return Me(t) && (t = n), xs(hn(e, Me), j(t, 2));
      }), L_ = oe(function(e) {
        var t = Rt(e);
        return t = typeof t == "function" ? t : n, xs(hn(e, Me), n, t);
      }), R_ = oe(Js);
      function S_(e, t) {
        return mu(e || [], t || [], vr);
      }
      function T_(e, t) {
        return mu(e || [], t || [], br);
      }
      var O_ = oe(function(e) {
        var t = e.length, s = t > 1 ? e[t - 1] : n;
        return s = typeof s == "function" ? (e.pop(), s) : n, ju(e, s);
      });
      function el(e) {
        var t = h(e);
        return t.__chain__ = !0, t;
      }
      function A_(e, t) {
        return t(e), e;
      }
      function bi(e, t) {
        return t(e);
      }
      var $_ = Qt(function(e) {
        var t = e.length, s = t ? e[0] : 0, u = this.__wrapped__, c = function(d) {
          return Es(d, e);
        };
        return t > 1 || this.__actions__.length || !(u instanceof ce) || !Zt(s) ? this.thru(c) : (u = u.slice(s, +s + (t ? 1 : 0)), u.__actions__.push({
          func: bi,
          args: [c],
          thisArg: n
        }), new It(u, this.__chain__).thru(function(d) {
          return t && !d.length && d.push(n), d;
        }));
      });
      function C_() {
        return el(this);
      }
      function N_() {
        return new It(this.value(), this.__chain__);
      }
      function P_() {
        this.__values__ === n && (this.__values__ = gl(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? n : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function x_() {
        return this;
      }
      function D_(e) {
        for (var t, s = this; s instanceof ui; ) {
          var u = qu(s);
          u.__index__ = 0, u.__values__ = n, t ? c.__wrapped__ = u : t = u;
          var c = u;
          s = s.__wrapped__;
        }
        return c.__wrapped__ = e, t;
      }
      function M_() {
        var e = this.__wrapped__;
        if (e instanceof ce) {
          var t = e;
          return this.__actions__.length && (t = new ce(this)), t = t.reverse(), t.__actions__.push({
            func: bi,
            args: [zs],
            thisArg: n
          }), new It(t, this.__chain__);
        }
        return this.thru(zs);
      }
      function F_() {
        return pu(this.__wrapped__, this.__actions__);
      }
      var k_ = _i(function(e, t, s) {
        ve.call(e, s) ? ++e[s] : zt(e, s, 1);
      });
      function K_(e, t, s) {
        var u = ie(e) ? Ao : Ad;
        return s && Ze(e, t, s) && (t = n), u(e, j(t, 3));
      }
      function W_(e, t) {
        var s = ie(e) ? hn : jo;
        return s(e, j(t, 3));
      }
      var U_ = Tu(Xu), H_ = Tu(zu);
      function B_(e, t) {
        return qe(Li(e, t), 1);
      }
      function G_(e, t) {
        return qe(Li(e, t), $e);
      }
      function V_(e, t, s) {
        return s = s === n ? 1 : se(s), qe(Li(e, t), s);
      }
      function tl(e, t) {
        var s = ie(e) ? wt : pn;
        return s(e, j(t, 3));
      }
      function nl(e, t) {
        var s = ie(e) ? ch : Zo;
        return s(e, j(t, 3));
      }
      var Y_ = _i(function(e, t, s) {
        ve.call(e, s) ? e[s].push(t) : zt(e, s, [t]);
      });
      function q_(e, t, s, u) {
        e = it(e) ? e : jn(e), s = s && !u ? se(s) : 0;
        var c = e.length;
        return s < 0 && (s = Ue(c + s, 0)), Ai(e) ? s <= c && e.indexOf(t, s) > -1 : !!c && Un(e, t, s) > -1;
      }
      var X_ = oe(function(e, t, s) {
        var u = -1, c = typeof t == "function", d = it(e) ? L(e.length) : [];
        return pn(e, function(p) {
          d[++u] = c ? lt(t, p, s) : Er(p, t, s);
        }), d;
      }), z_ = _i(function(e, t, s) {
        zt(e, s, t);
      });
      function Li(e, t) {
        var s = ie(e) ? Ce : su;
        return s(e, j(t, 3));
      }
      function J_(e, t, s, u) {
        return e == null ? [] : (ie(t) || (t = t == null ? [] : [t]), s = u ? n : s, ie(s) || (s = s == null ? [] : [s]), lu(e, t, s));
      }
      var Q_ = _i(function(e, t, s) {
        e[s ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Z_(e, t, s) {
        var u = ie(e) ? us : Po, c = arguments.length < 3;
        return u(e, j(t, 4), s, c, pn);
      }
      function j_(e, t, s) {
        var u = ie(e) ? fh : Po, c = arguments.length < 3;
        return u(e, j(t, 4), s, c, Zo);
      }
      function ep(e, t) {
        var s = ie(e) ? hn : jo;
        return s(e, Ti(j(t, 3)));
      }
      function tp(e) {
        var t = ie(e) ? Xo : qd;
        return t(e);
      }
      function np(e, t, s) {
        (s ? Ze(e, t, s) : t === n) ? t = 1 : t = se(t);
        var u = ie(e) ? Ld : Xd;
        return u(e, t);
      }
      function rp(e) {
        var t = ie(e) ? Rd : Jd;
        return t(e);
      }
      function ip(e) {
        if (e == null)
          return 0;
        if (it(e))
          return Ai(e) ? Bn(e) : e.length;
        var t = ze(e);
        return t == Ge || t == z ? e.size : Ts(e).length;
      }
      function sp(e, t, s) {
        var u = ie(e) ? ls : Qd;
        return s && Ze(e, t, s) && (t = n), u(e, j(t, 3));
      }
      var ap = oe(function(e, t) {
        if (e == null)
          return [];
        var s = t.length;
        return s > 1 && Ze(e, t[0], t[1]) ? t = [] : s > 2 && Ze(t[0], t[1], t[2]) && (t = [t[0]]), lu(e, qe(t, 1), []);
      }), Ri = Wh || function() {
        return Ye.Date.now();
      };
      function op(e, t) {
        if (typeof t != "function")
          throw new Et(f);
        return e = se(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function rl(e, t, s) {
        return t = s ? n : t, t = e && t == null ? e.length : t, Jt(e, F, n, n, n, n, t);
      }
      function il(e, t) {
        var s;
        if (typeof t != "function")
          throw new Et(f);
        return e = se(e), function() {
          return --e > 0 && (s = t.apply(this, arguments)), e <= 1 && (t = n), s;
        };
      }
      var Qs = oe(function(e, t, s) {
        var u = H;
        if (s.length) {
          var c = gn(s, Qn(Qs));
          u |= K;
        }
        return Jt(e, u, t, s, c);
      }), sl = oe(function(e, t, s) {
        var u = H | b;
        if (s.length) {
          var c = gn(s, Qn(sl));
          u |= K;
        }
        return Jt(t, u, e, s, c);
      });
      function al(e, t, s) {
        t = s ? n : t;
        var u = Jt(e, W, n, n, n, n, n, t);
        return u.placeholder = al.placeholder, u;
      }
      function ol(e, t, s) {
        t = s ? n : t;
        var u = Jt(e, $, n, n, n, n, n, t);
        return u.placeholder = ol.placeholder, u;
      }
      function ul(e, t, s) {
        var u, c, d, p, m, I, C = 0, N = !1, D = !1, B = !0;
        if (typeof e != "function")
          throw new Et(f);
        t = St(t) || 0, Ne(s) && (N = !!s.leading, D = "maxWait" in s, d = D ? Ue(St(s.maxWait) || 0, t) : d, B = "trailing" in s ? !!s.trailing : B);
        function J(Fe) {
          var Pt = u, tn = c;
          return u = c = n, C = Fe, p = e.apply(tn, Pt), p;
        }
        function ee(Fe) {
          return C = Fe, m = Sr(le, t), N ? J(Fe) : p;
        }
        function ae(Fe) {
          var Pt = Fe - I, tn = Fe - C, Tl = t - Pt;
          return D ? Xe(Tl, d - tn) : Tl;
        }
        function te(Fe) {
          var Pt = Fe - I, tn = Fe - C;
          return I === n || Pt >= t || Pt < 0 || D && tn >= d;
        }
        function le() {
          var Fe = Ri();
          if (te(Fe))
            return fe(Fe);
          m = Sr(le, ae(Fe));
        }
        function fe(Fe) {
          return m = n, B && u ? J(Fe) : (u = c = n, p);
        }
        function dt() {
          m !== n && yu(m), C = 0, u = I = c = m = n;
        }
        function je() {
          return m === n ? p : fe(Ri());
        }
        function gt() {
          var Fe = Ri(), Pt = te(Fe);
          if (u = arguments, c = this, I = Fe, Pt) {
            if (m === n)
              return ee(I);
            if (D)
              return yu(m), m = Sr(le, t), J(I);
          }
          return m === n && (m = Sr(le, t)), p;
        }
        return gt.cancel = dt, gt.flush = je, gt;
      }
      var up = oe(function(e, t) {
        return Qo(e, 1, t);
      }), lp = oe(function(e, t, s) {
        return Qo(e, St(t) || 0, s);
      });
      function cp(e) {
        return Jt(e, Z);
      }
      function Si(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new Et(f);
        var s = function() {
          var u = arguments, c = t ? t.apply(this, u) : u[0], d = s.cache;
          if (d.has(c))
            return d.get(c);
          var p = e.apply(this, u);
          return s.cache = d.set(c, p) || d, p;
        };
        return s.cache = new (Si.Cache || Xt)(), s;
      }
      Si.Cache = Xt;
      function Ti(e) {
        if (typeof e != "function")
          throw new Et(f);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function fp(e) {
        return il(2, e);
      }
      var hp = Zd(function(e, t) {
        t = t.length == 1 && ie(t[0]) ? Ce(t[0], ct(j())) : Ce(qe(t, 1), ct(j()));
        var s = t.length;
        return oe(function(u) {
          for (var c = -1, d = Xe(u.length, s); ++c < d; )
            u[c] = t[c].call(this, u[c]);
          return lt(e, this, u);
        });
      }), Zs = oe(function(e, t) {
        var s = gn(t, Qn(Zs));
        return Jt(e, K, n, t, s);
      }), ll = oe(function(e, t) {
        var s = gn(t, Qn(ll));
        return Jt(e, V, n, t, s);
      }), dp = Qt(function(e, t) {
        return Jt(e, Q, n, n, n, t);
      });
      function gp(e, t) {
        if (typeof e != "function")
          throw new Et(f);
        return t = t === n ? t : se(t), oe(e, t);
      }
      function _p(e, t) {
        if (typeof e != "function")
          throw new Et(f);
        return t = t == null ? 0 : Ue(se(t), 0), oe(function(s) {
          var u = s[t], c = vn(s, 0, t);
          return u && dn(c, u), lt(e, this, c);
        });
      }
      function pp(e, t, s) {
        var u = !0, c = !0;
        if (typeof e != "function")
          throw new Et(f);
        return Ne(s) && (u = "leading" in s ? !!s.leading : u, c = "trailing" in s ? !!s.trailing : c), ul(e, t, {
          leading: u,
          maxWait: t,
          trailing: c
        });
      }
      function mp(e) {
        return rl(e, 1);
      }
      function yp(e, t) {
        return Zs(Ms(t), e);
      }
      function vp() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return ie(e) ? e : [e];
      }
      function wp(e) {
        return bt(e, U);
      }
      function Ep(e, t) {
        return t = typeof t == "function" ? t : n, bt(e, U, t);
      }
      function Ip(e) {
        return bt(e, O | U);
      }
      function bp(e, t) {
        return t = typeof t == "function" ? t : n, bt(e, O | U, t);
      }
      function Lp(e, t) {
        return t == null || Jo(e, t, Ve(t));
      }
      function Nt(e, t) {
        return e === t || e !== e && t !== t;
      }
      var Rp = vi(Ls), Sp = vi(function(e, t) {
        return e >= t;
      }), Fn = nu(/* @__PURE__ */ function() {
        return arguments;
      }()) ? nu : function(e) {
        return Pe(e) && ve.call(e, "callee") && !Ho.call(e, "callee");
      }, ie = L.isArray, Tp = bo ? ct(bo) : Dd;
      function it(e) {
        return e != null && Oi(e.length) && !jt(e);
      }
      function Me(e) {
        return Pe(e) && it(e);
      }
      function Op(e) {
        return e === !0 || e === !1 || Pe(e) && Qe(e) == Mt;
      }
      var wn = Hh || la, Ap = Lo ? ct(Lo) : Md;
      function $p(e) {
        return Pe(e) && e.nodeType === 1 && !Tr(e);
      }
      function Cp(e) {
        if (e == null)
          return !0;
        if (it(e) && (ie(e) || typeof e == "string" || typeof e.splice == "function" || wn(e) || Zn(e) || Fn(e)))
          return !e.length;
        var t = ze(e);
        if (t == Ge || t == z)
          return !e.size;
        if (Rr(e))
          return !Ts(e).length;
        for (var s in e)
          if (ve.call(e, s))
            return !1;
        return !0;
      }
      function Np(e, t) {
        return Ir(e, t);
      }
      function Pp(e, t, s) {
        s = typeof s == "function" ? s : n;
        var u = s ? s(e, t) : n;
        return u === n ? Ir(e, t, n, s) : !!u;
      }
      function js(e) {
        if (!Pe(e))
          return !1;
        var t = Qe(e);
        return t == un || t == fr || typeof e.message == "string" && typeof e.name == "string" && !Tr(e);
      }
      function xp(e) {
        return typeof e == "number" && Go(e);
      }
      function jt(e) {
        if (!Ne(e))
          return !1;
        var t = Qe(e);
        return t == ln || t == cn || t == cr || t == v;
      }
      function cl(e) {
        return typeof e == "number" && e == se(e);
      }
      function Oi(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mt;
      }
      function Ne(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function Pe(e) {
        return e != null && typeof e == "object";
      }
      var fl = Ro ? ct(Ro) : kd;
      function Dp(e, t) {
        return e === t || Ss(e, t, Bs(t));
      }
      function Mp(e, t, s) {
        return s = typeof s == "function" ? s : n, Ss(e, t, Bs(t), s);
      }
      function Fp(e) {
        return hl(e) && e != +e;
      }
      function kp(e) {
        if (Eg(e))
          throw new ne(l);
        return ru(e);
      }
      function Kp(e) {
        return e === null;
      }
      function Wp(e) {
        return e == null;
      }
      function hl(e) {
        return typeof e == "number" || Pe(e) && Qe(e) == yt;
      }
      function Tr(e) {
        if (!Pe(e) || Qe(e) != ut)
          return !1;
        var t = ti(e);
        if (t === null)
          return !0;
        var s = ve.call(t, "constructor") && t.constructor;
        return typeof s == "function" && s instanceof s && Qr.call(s) == Mh;
      }
      var ea = So ? ct(So) : Kd;
      function Up(e) {
        return cl(e) && e >= -mt && e <= mt;
      }
      var dl = To ? ct(To) : Wd;
      function Ai(e) {
        return typeof e == "string" || !ie(e) && Pe(e) && Qe(e) == be;
      }
      function ht(e) {
        return typeof e == "symbol" || Pe(e) && Qe(e) == re;
      }
      var Zn = Oo ? ct(Oo) : Ud;
      function Hp(e) {
        return e === n;
      }
      function Bp(e) {
        return Pe(e) && ze(e) == k;
      }
      function Gp(e) {
        return Pe(e) && Qe(e) == ye;
      }
      var Vp = vi(Os), Yp = vi(function(e, t) {
        return e <= t;
      });
      function gl(e) {
        if (!e)
          return [];
        if (it(e))
          return Ai(e) ? $t(e) : rt(e);
        if (gr && e[gr])
          return Lh(e[gr]());
        var t = ze(e), s = t == Ge ? _s : t == z ? Xr : jn;
        return s(e);
      }
      function en(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = St(e), e === $e || e === -$e) {
          var t = e < 0 ? -1 : 1;
          return t * At;
        }
        return e === e ? e : 0;
      }
      function se(e) {
        var t = en(e), s = t % 1;
        return t === t ? s ? t - s : t : 0;
      }
      function _l(e) {
        return e ? Pn(se(e), 0, Je) : 0;
      }
      function St(e) {
        if (typeof e == "number")
          return e;
        if (ht(e))
          return Gt;
        if (Ne(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Ne(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = xo(e);
        var s = Tf.test(e);
        return s || Af.test(e) ? oh(e.slice(2), s ? 2 : 8) : Sf.test(e) ? Gt : +e;
      }
      function pl(e) {
        return Kt(e, st(e));
      }
      function qp(e) {
        return e ? Pn(se(e), -mt, mt) : e === 0 ? e : 0;
      }
      function _e(e) {
        return e == null ? "" : ft(e);
      }
      var Xp = zn(function(e, t) {
        if (Rr(t) || it(t)) {
          Kt(t, Ve(t), e);
          return;
        }
        for (var s in t)
          ve.call(t, s) && vr(e, s, t[s]);
      }), ml = zn(function(e, t) {
        Kt(t, st(t), e);
      }), $i = zn(function(e, t, s, u) {
        Kt(t, st(t), e, u);
      }), zp = zn(function(e, t, s, u) {
        Kt(t, Ve(t), e, u);
      }), Jp = Qt(Es);
      function Qp(e, t) {
        var s = Xn(e);
        return t == null ? s : zo(s, t);
      }
      var Zp = oe(function(e, t) {
        e = Re(e);
        var s = -1, u = t.length, c = u > 2 ? t[2] : n;
        for (c && Ze(t[0], t[1], c) && (u = 1); ++s < u; )
          for (var d = t[s], p = st(d), m = -1, I = p.length; ++m < I; ) {
            var C = p[m], N = e[C];
            (N === n || Nt(N, Vn[C]) && !ve.call(e, C)) && (e[C] = d[C]);
          }
        return e;
      }), jp = oe(function(e) {
        return e.push(n, xu), lt(yl, n, e);
      });
      function em(e, t) {
        return $o(e, j(t, 3), kt);
      }
      function tm(e, t) {
        return $o(e, j(t, 3), bs);
      }
      function nm(e, t) {
        return e == null ? e : Is(e, j(t, 3), st);
      }
      function rm(e, t) {
        return e == null ? e : eu(e, j(t, 3), st);
      }
      function im(e, t) {
        return e && kt(e, j(t, 3));
      }
      function sm(e, t) {
        return e && bs(e, j(t, 3));
      }
      function am(e) {
        return e == null ? [] : fi(e, Ve(e));
      }
      function om(e) {
        return e == null ? [] : fi(e, st(e));
      }
      function ta(e, t, s) {
        var u = e == null ? n : xn(e, t);
        return u === n ? s : u;
      }
      function um(e, t) {
        return e != null && Fu(e, t, Cd);
      }
      function na(e, t) {
        return e != null && Fu(e, t, Nd);
      }
      var lm = Au(function(e, t, s) {
        t != null && typeof t.toString != "function" && (t = Zr.call(t)), e[t] = s;
      }, ia(at)), cm = Au(function(e, t, s) {
        t != null && typeof t.toString != "function" && (t = Zr.call(t)), ve.call(e, t) ? e[t].push(s) : e[t] = [s];
      }, j), fm = oe(Er);
      function Ve(e) {
        return it(e) ? qo(e) : Ts(e);
      }
      function st(e) {
        return it(e) ? qo(e, !0) : Hd(e);
      }
      function hm(e, t) {
        var s = {};
        return t = j(t, 3), kt(e, function(u, c, d) {
          zt(s, t(u, c, d), u);
        }), s;
      }
      function dm(e, t) {
        var s = {};
        return t = j(t, 3), kt(e, function(u, c, d) {
          zt(s, c, t(u, c, d));
        }), s;
      }
      var gm = zn(function(e, t, s) {
        hi(e, t, s);
      }), yl = zn(function(e, t, s, u) {
        hi(e, t, s, u);
      }), _m = Qt(function(e, t) {
        var s = {};
        if (e == null)
          return s;
        var u = !1;
        t = Ce(t, function(d) {
          return d = yn(d, e), u || (u = d.length > 1), d;
        }), Kt(e, Us(e), s), u && (s = bt(s, O | P | U, lg));
        for (var c = t.length; c--; )
          Ps(s, t[c]);
        return s;
      });
      function pm(e, t) {
        return vl(e, Ti(j(t)));
      }
      var mm = Qt(function(e, t) {
        return e == null ? {} : Gd(e, t);
      });
      function vl(e, t) {
        if (e == null)
          return {};
        var s = Ce(Us(e), function(u) {
          return [u];
        });
        return t = j(t), cu(e, s, function(u, c) {
          return t(u, c[0]);
        });
      }
      function ym(e, t, s) {
        t = yn(t, e);
        var u = -1, c = t.length;
        for (c || (c = 1, e = n); ++u < c; ) {
          var d = e == null ? n : e[Wt(t[u])];
          d === n && (u = c, d = s), e = jt(d) ? d.call(e) : d;
        }
        return e;
      }
      function vm(e, t, s) {
        return e == null ? e : br(e, t, s);
      }
      function wm(e, t, s, u) {
        return u = typeof u == "function" ? u : n, e == null ? e : br(e, t, s, u);
      }
      var wl = Nu(Ve), El = Nu(st);
      function Em(e, t, s) {
        var u = ie(e), c = u || wn(e) || Zn(e);
        if (t = j(t, 4), s == null) {
          var d = e && e.constructor;
          c ? s = u ? new d() : [] : Ne(e) ? s = jt(d) ? Xn(ti(e)) : {} : s = {};
        }
        return (c ? wt : kt)(e, function(p, m, I) {
          return t(s, p, m, I);
        }), s;
      }
      function Im(e, t) {
        return e == null ? !0 : Ps(e, t);
      }
      function bm(e, t, s) {
        return e == null ? e : _u(e, t, Ms(s));
      }
      function Lm(e, t, s, u) {
        return u = typeof u == "function" ? u : n, e == null ? e : _u(e, t, Ms(s), u);
      }
      function jn(e) {
        return e == null ? [] : gs(e, Ve(e));
      }
      function Rm(e) {
        return e == null ? [] : gs(e, st(e));
      }
      function Sm(e, t, s) {
        return s === n && (s = t, t = n), s !== n && (s = St(s), s = s === s ? s : 0), t !== n && (t = St(t), t = t === t ? t : 0), Pn(St(e), t, s);
      }
      function Tm(e, t, s) {
        return t = en(t), s === n ? (s = t, t = 0) : s = en(s), e = St(e), Pd(e, t, s);
      }
      function Om(e, t, s) {
        if (s && typeof s != "boolean" && Ze(e, t, s) && (t = s = n), s === n && (typeof t == "boolean" ? (s = t, t = n) : typeof e == "boolean" && (s = e, e = n)), e === n && t === n ? (e = 0, t = 1) : (e = en(e), t === n ? (t = e, e = 0) : t = en(t)), e > t) {
          var u = e;
          e = t, t = u;
        }
        if (s || e % 1 || t % 1) {
          var c = Vo();
          return Xe(e + c * (t - e + ah("1e-" + ((c + "").length - 1))), t);
        }
        return $s(e, t);
      }
      var Am = Jn(function(e, t, s) {
        return t = t.toLowerCase(), e + (s ? Il(t) : t);
      });
      function Il(e) {
        return ra(_e(e).toLowerCase());
      }
      function bl(e) {
        return e = _e(e), e && e.replace(Cf, vh).replace(Jf, "");
      }
      function $m(e, t, s) {
        e = _e(e), t = ft(t);
        var u = e.length;
        s = s === n ? u : Pn(se(s), 0, u);
        var c = s;
        return s -= t.length, s >= 0 && e.slice(s, c) == t;
      }
      function Cm(e) {
        return e = _e(e), e && ff.test(e) ? e.replace(ja, wh) : e;
      }
      function Nm(e) {
        return e = _e(e), e && mf.test(e) ? e.replace(Zi, "\\$&") : e;
      }
      var Pm = Jn(function(e, t, s) {
        return e + (s ? "-" : "") + t.toLowerCase();
      }), xm = Jn(function(e, t, s) {
        return e + (s ? " " : "") + t.toLowerCase();
      }), Dm = Su("toLowerCase");
      function Mm(e, t, s) {
        e = _e(e), t = se(t);
        var u = t ? Bn(e) : 0;
        if (!t || u >= t)
          return e;
        var c = (t - u) / 2;
        return yi(si(c), s) + e + yi(ii(c), s);
      }
      function Fm(e, t, s) {
        e = _e(e), t = se(t);
        var u = t ? Bn(e) : 0;
        return t && u < t ? e + yi(t - u, s) : e;
      }
      function km(e, t, s) {
        e = _e(e), t = se(t);
        var u = t ? Bn(e) : 0;
        return t && u < t ? yi(t - u, s) + e : e;
      }
      function Km(e, t, s) {
        return s || t == null ? t = 0 : t && (t = +t), Yh(_e(e).replace(ji, ""), t || 0);
      }
      function Wm(e, t, s) {
        return (s ? Ze(e, t, s) : t === n) ? t = 1 : t = se(t), Cs(_e(e), t);
      }
      function Um() {
        var e = arguments, t = _e(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var Hm = Jn(function(e, t, s) {
        return e + (s ? "_" : "") + t.toLowerCase();
      });
      function Bm(e, t, s) {
        return s && typeof s != "number" && Ze(e, t, s) && (t = s = n), s = s === n ? Je : s >>> 0, s ? (e = _e(e), e && (typeof t == "string" || t != null && !ea(t)) && (t = ft(t), !t && Hn(e)) ? vn($t(e), 0, s) : e.split(t, s)) : [];
      }
      var Gm = Jn(function(e, t, s) {
        return e + (s ? " " : "") + ra(t);
      });
      function Vm(e, t, s) {
        return e = _e(e), s = s == null ? 0 : Pn(se(s), 0, e.length), t = ft(t), e.slice(s, s + t.length) == t;
      }
      function Ym(e, t, s) {
        var u = h.templateSettings;
        s && Ze(e, t, s) && (t = n), e = _e(e), t = $i({}, t, u, Pu);
        var c = $i({}, t.imports, u.imports, Pu), d = Ve(c), p = gs(c, d), m, I, C = 0, N = t.interpolate || Br, D = "__p += '", B = ps(
          (t.escape || Br).source + "|" + N.source + "|" + (N === eo ? Rf : Br).source + "|" + (t.evaluate || Br).source + "|$",
          "g"
        ), J = "//# sourceURL=" + (ve.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++th + "]") + `
`;
        e.replace(B, function(te, le, fe, dt, je, gt) {
          return fe || (fe = dt), D += e.slice(C, gt).replace(Nf, Eh), le && (m = !0, D += `' +
__e(` + le + `) +
'`), je && (I = !0, D += `';
` + je + `;
__p += '`), fe && (D += `' +
((__t = (` + fe + `)) == null ? '' : __t) +
'`), C = gt + te.length, te;
        }), D += `';
`;
        var ee = ve.call(t, "variable") && t.variable;
        if (!ee)
          D = `with (obj) {
` + D + `
}
`;
        else if (bf.test(ee))
          throw new ne(g);
        D = (I ? D.replace(of, "") : D).replace(uf, "$1").replace(lf, "$1;"), D = "function(" + (ee || "obj") + `) {
` + (ee ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (m ? ", __e = _.escape" : "") + (I ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + D + `return __p
}`;
        var ae = Rl(function() {
          return de(d, J + "return " + D).apply(n, p);
        });
        if (ae.source = D, js(ae))
          throw ae;
        return ae;
      }
      function qm(e) {
        return _e(e).toLowerCase();
      }
      function Xm(e) {
        return _e(e).toUpperCase();
      }
      function zm(e, t, s) {
        if (e = _e(e), e && (s || t === n))
          return xo(e);
        if (!e || !(t = ft(t)))
          return e;
        var u = $t(e), c = $t(t), d = Do(u, c), p = Mo(u, c) + 1;
        return vn(u, d, p).join("");
      }
      function Jm(e, t, s) {
        if (e = _e(e), e && (s || t === n))
          return e.slice(0, ko(e) + 1);
        if (!e || !(t = ft(t)))
          return e;
        var u = $t(e), c = Mo(u, $t(t)) + 1;
        return vn(u, 0, c).join("");
      }
      function Qm(e, t, s) {
        if (e = _e(e), e && (s || t === n))
          return e.replace(ji, "");
        if (!e || !(t = ft(t)))
          return e;
        var u = $t(e), c = Do(u, $t(t));
        return vn(u, c).join("");
      }
      function Zm(e, t) {
        var s = Ee, u = Ke;
        if (Ne(t)) {
          var c = "separator" in t ? t.separator : c;
          s = "length" in t ? se(t.length) : s, u = "omission" in t ? ft(t.omission) : u;
        }
        e = _e(e);
        var d = e.length;
        if (Hn(e)) {
          var p = $t(e);
          d = p.length;
        }
        if (s >= d)
          return e;
        var m = s - Bn(u);
        if (m < 1)
          return u;
        var I = p ? vn(p, 0, m).join("") : e.slice(0, m);
        if (c === n)
          return I + u;
        if (p && (m += I.length - m), ea(c)) {
          if (e.slice(m).search(c)) {
            var C, N = I;
            for (c.global || (c = ps(c.source, _e(to.exec(c)) + "g")), c.lastIndex = 0; C = c.exec(N); )
              var D = C.index;
            I = I.slice(0, D === n ? m : D);
          }
        } else if (e.indexOf(ft(c), m) != m) {
          var B = I.lastIndexOf(c);
          B > -1 && (I = I.slice(0, B));
        }
        return I + u;
      }
      function jm(e) {
        return e = _e(e), e && cf.test(e) ? e.replace(Za, Oh) : e;
      }
      var ey = Jn(function(e, t, s) {
        return e + (s ? " " : "") + t.toUpperCase();
      }), ra = Su("toUpperCase");
      function Ll(e, t, s) {
        return e = _e(e), t = s ? n : t, t === n ? bh(e) ? Ch(e) : gh(e) : e.match(t) || [];
      }
      var Rl = oe(function(e, t) {
        try {
          return lt(e, n, t);
        } catch (s) {
          return js(s) ? s : new ne(s);
        }
      }), ty = Qt(function(e, t) {
        return wt(t, function(s) {
          s = Wt(s), zt(e, s, Qs(e[s], e));
        }), e;
      });
      function ny(e) {
        var t = e == null ? 0 : e.length, s = j();
        return e = t ? Ce(e, function(u) {
          if (typeof u[1] != "function")
            throw new Et(f);
          return [s(u[0]), u[1]];
        }) : [], oe(function(u) {
          for (var c = -1; ++c < t; ) {
            var d = e[c];
            if (lt(d[0], this, u))
              return lt(d[1], this, u);
          }
        });
      }
      function ry(e) {
        return Od(bt(e, O));
      }
      function ia(e) {
        return function() {
          return e;
        };
      }
      function iy(e, t) {
        return e == null || e !== e ? t : e;
      }
      var sy = Ou(), ay = Ou(!0);
      function at(e) {
        return e;
      }
      function sa(e) {
        return iu(typeof e == "function" ? e : bt(e, O));
      }
      function oy(e) {
        return au(bt(e, O));
      }
      function uy(e, t) {
        return ou(e, bt(t, O));
      }
      var ly = oe(function(e, t) {
        return function(s) {
          return Er(s, e, t);
        };
      }), cy = oe(function(e, t) {
        return function(s) {
          return Er(e, s, t);
        };
      });
      function aa(e, t, s) {
        var u = Ve(t), c = fi(t, u);
        s == null && !(Ne(t) && (c.length || !u.length)) && (s = t, t = e, e = this, c = fi(t, Ve(t)));
        var d = !(Ne(s) && "chain" in s) || !!s.chain, p = jt(e);
        return wt(c, function(m) {
          var I = t[m];
          e[m] = I, p && (e.prototype[m] = function() {
            var C = this.__chain__;
            if (d || C) {
              var N = e(this.__wrapped__), D = N.__actions__ = rt(this.__actions__);
              return D.push({ func: I, args: arguments, thisArg: e }), N.__chain__ = C, N;
            }
            return I.apply(e, dn([this.value()], arguments));
          });
        }), e;
      }
      function fy() {
        return Ye._ === this && (Ye._ = Fh), this;
      }
      function oa() {
      }
      function hy(e) {
        return e = se(e), oe(function(t) {
          return uu(t, e);
        });
      }
      var dy = ks(Ce), gy = ks(Ao), _y = ks(ls);
      function Sl(e) {
        return Vs(e) ? cs(Wt(e)) : Vd(e);
      }
      function py(e) {
        return function(t) {
          return e == null ? n : xn(e, t);
        };
      }
      var my = $u(), yy = $u(!0);
      function ua() {
        return [];
      }
      function la() {
        return !1;
      }
      function vy() {
        return {};
      }
      function wy() {
        return "";
      }
      function Ey() {
        return !0;
      }
      function Iy(e, t) {
        if (e = se(e), e < 1 || e > mt)
          return [];
        var s = Je, u = Xe(e, Je);
        t = j(t), e -= Je;
        for (var c = ds(u, t); ++s < e; )
          t(s);
        return c;
      }
      function by(e) {
        return ie(e) ? Ce(e, Wt) : ht(e) ? [e] : rt(Yu(_e(e)));
      }
      function Ly(e) {
        var t = ++Dh;
        return _e(e) + t;
      }
      var Ry = mi(function(e, t) {
        return e + t;
      }, 0), Sy = Ks("ceil"), Ty = mi(function(e, t) {
        return e / t;
      }, 1), Oy = Ks("floor");
      function Ay(e) {
        return e && e.length ? ci(e, at, Ls) : n;
      }
      function $y(e, t) {
        return e && e.length ? ci(e, j(t, 2), Ls) : n;
      }
      function Cy(e) {
        return No(e, at);
      }
      function Ny(e, t) {
        return No(e, j(t, 2));
      }
      function Py(e) {
        return e && e.length ? ci(e, at, Os) : n;
      }
      function xy(e, t) {
        return e && e.length ? ci(e, j(t, 2), Os) : n;
      }
      var Dy = mi(function(e, t) {
        return e * t;
      }, 1), My = Ks("round"), Fy = mi(function(e, t) {
        return e - t;
      }, 0);
      function ky(e) {
        return e && e.length ? hs(e, at) : 0;
      }
      function Ky(e, t) {
        return e && e.length ? hs(e, j(t, 2)) : 0;
      }
      return h.after = op, h.ary = rl, h.assign = Xp, h.assignIn = ml, h.assignInWith = $i, h.assignWith = zp, h.at = Jp, h.before = il, h.bind = Qs, h.bindAll = ty, h.bindKey = sl, h.castArray = vp, h.chain = el, h.chunk = Og, h.compact = Ag, h.concat = $g, h.cond = ny, h.conforms = ry, h.constant = ia, h.countBy = k_, h.create = Qp, h.curry = al, h.curryRight = ol, h.debounce = ul, h.defaults = Zp, h.defaultsDeep = jp, h.defer = up, h.delay = lp, h.difference = Cg, h.differenceBy = Ng, h.differenceWith = Pg, h.drop = xg, h.dropRight = Dg, h.dropRightWhile = Mg, h.dropWhile = Fg, h.fill = kg, h.filter = W_, h.flatMap = B_, h.flatMapDeep = G_, h.flatMapDepth = V_, h.flatten = Ju, h.flattenDeep = Kg, h.flattenDepth = Wg, h.flip = cp, h.flow = sy, h.flowRight = ay, h.fromPairs = Ug, h.functions = am, h.functionsIn = om, h.groupBy = Y_, h.initial = Bg, h.intersection = Gg, h.intersectionBy = Vg, h.intersectionWith = Yg, h.invert = lm, h.invertBy = cm, h.invokeMap = X_, h.iteratee = sa, h.keyBy = z_, h.keys = Ve, h.keysIn = st, h.map = Li, h.mapKeys = hm, h.mapValues = dm, h.matches = oy, h.matchesProperty = uy, h.memoize = Si, h.merge = gm, h.mergeWith = yl, h.method = ly, h.methodOf = cy, h.mixin = aa, h.negate = Ti, h.nthArg = hy, h.omit = _m, h.omitBy = pm, h.once = fp, h.orderBy = J_, h.over = dy, h.overArgs = hp, h.overEvery = gy, h.overSome = _y, h.partial = Zs, h.partialRight = ll, h.partition = Q_, h.pick = mm, h.pickBy = vl, h.property = Sl, h.propertyOf = py, h.pull = Jg, h.pullAll = Zu, h.pullAllBy = Qg, h.pullAllWith = Zg, h.pullAt = jg, h.range = my, h.rangeRight = yy, h.rearg = dp, h.reject = ep, h.remove = e_, h.rest = gp, h.reverse = zs, h.sampleSize = np, h.set = vm, h.setWith = wm, h.shuffle = rp, h.slice = t_, h.sortBy = ap, h.sortedUniq = u_, h.sortedUniqBy = l_, h.split = Bm, h.spread = _p, h.tail = c_, h.take = f_, h.takeRight = h_, h.takeRightWhile = d_, h.takeWhile = g_, h.tap = A_, h.throttle = pp, h.thru = bi, h.toArray = gl, h.toPairs = wl, h.toPairsIn = El, h.toPath = by, h.toPlainObject = pl, h.transform = Em, h.unary = mp, h.union = __, h.unionBy = p_, h.unionWith = m_, h.uniq = y_, h.uniqBy = v_, h.uniqWith = w_, h.unset = Im, h.unzip = Js, h.unzipWith = ju, h.update = bm, h.updateWith = Lm, h.values = jn, h.valuesIn = Rm, h.without = E_, h.words = Ll, h.wrap = yp, h.xor = I_, h.xorBy = b_, h.xorWith = L_, h.zip = R_, h.zipObject = S_, h.zipObjectDeep = T_, h.zipWith = O_, h.entries = wl, h.entriesIn = El, h.extend = ml, h.extendWith = $i, aa(h, h), h.add = Ry, h.attempt = Rl, h.camelCase = Am, h.capitalize = Il, h.ceil = Sy, h.clamp = Sm, h.clone = wp, h.cloneDeep = Ip, h.cloneDeepWith = bp, h.cloneWith = Ep, h.conformsTo = Lp, h.deburr = bl, h.defaultTo = iy, h.divide = Ty, h.endsWith = $m, h.eq = Nt, h.escape = Cm, h.escapeRegExp = Nm, h.every = K_, h.find = U_, h.findIndex = Xu, h.findKey = em, h.findLast = H_, h.findLastIndex = zu, h.findLastKey = tm, h.floor = Oy, h.forEach = tl, h.forEachRight = nl, h.forIn = nm, h.forInRight = rm, h.forOwn = im, h.forOwnRight = sm, h.get = ta, h.gt = Rp, h.gte = Sp, h.has = um, h.hasIn = na, h.head = Qu, h.identity = at, h.includes = q_, h.indexOf = Hg, h.inRange = Tm, h.invoke = fm, h.isArguments = Fn, h.isArray = ie, h.isArrayBuffer = Tp, h.isArrayLike = it, h.isArrayLikeObject = Me, h.isBoolean = Op, h.isBuffer = wn, h.isDate = Ap, h.isElement = $p, h.isEmpty = Cp, h.isEqual = Np, h.isEqualWith = Pp, h.isError = js, h.isFinite = xp, h.isFunction = jt, h.isInteger = cl, h.isLength = Oi, h.isMap = fl, h.isMatch = Dp, h.isMatchWith = Mp, h.isNaN = Fp, h.isNative = kp, h.isNil = Wp, h.isNull = Kp, h.isNumber = hl, h.isObject = Ne, h.isObjectLike = Pe, h.isPlainObject = Tr, h.isRegExp = ea, h.isSafeInteger = Up, h.isSet = dl, h.isString = Ai, h.isSymbol = ht, h.isTypedArray = Zn, h.isUndefined = Hp, h.isWeakMap = Bp, h.isWeakSet = Gp, h.join = qg, h.kebabCase = Pm, h.last = Rt, h.lastIndexOf = Xg, h.lowerCase = xm, h.lowerFirst = Dm, h.lt = Vp, h.lte = Yp, h.max = Ay, h.maxBy = $y, h.mean = Cy, h.meanBy = Ny, h.min = Py, h.minBy = xy, h.stubArray = ua, h.stubFalse = la, h.stubObject = vy, h.stubString = wy, h.stubTrue = Ey, h.multiply = Dy, h.nth = zg, h.noConflict = fy, h.noop = oa, h.now = Ri, h.pad = Mm, h.padEnd = Fm, h.padStart = km, h.parseInt = Km, h.random = Om, h.reduce = Z_, h.reduceRight = j_, h.repeat = Wm, h.replace = Um, h.result = ym, h.round = My, h.runInContext = E, h.sample = tp, h.size = ip, h.snakeCase = Hm, h.some = sp, h.sortedIndex = n_, h.sortedIndexBy = r_, h.sortedIndexOf = i_, h.sortedLastIndex = s_, h.sortedLastIndexBy = a_, h.sortedLastIndexOf = o_, h.startCase = Gm, h.startsWith = Vm, h.subtract = Fy, h.sum = ky, h.sumBy = Ky, h.template = Ym, h.times = Iy, h.toFinite = en, h.toInteger = se, h.toLength = _l, h.toLower = qm, h.toNumber = St, h.toSafeInteger = qp, h.toString = _e, h.toUpper = Xm, h.trim = zm, h.trimEnd = Jm, h.trimStart = Qm, h.truncate = Zm, h.unescape = jm, h.uniqueId = Ly, h.upperCase = ey, h.upperFirst = ra, h.each = tl, h.eachRight = nl, h.first = Qu, aa(h, function() {
        var e = {};
        return kt(h, function(t, s) {
          ve.call(h.prototype, s) || (e[s] = t);
        }), e;
      }(), { chain: !1 }), h.VERSION = a, wt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        h[e].placeholder = h;
      }), wt(["drop", "take"], function(e, t) {
        ce.prototype[e] = function(s) {
          s = s === n ? 1 : Ue(se(s), 0);
          var u = this.__filtered__ && !t ? new ce(this) : this.clone();
          return u.__filtered__ ? u.__takeCount__ = Xe(s, u.__takeCount__) : u.__views__.push({
            size: Xe(s, Je),
            type: e + (u.__dir__ < 0 ? "Right" : "")
          }), u;
        }, ce.prototype[e + "Right"] = function(s) {
          return this.reverse()[e](s).reverse();
        };
      }), wt(["filter", "map", "takeWhile"], function(e, t) {
        var s = t + 1, u = s == an || s == Ot;
        ce.prototype[e] = function(c) {
          var d = this.clone();
          return d.__iteratees__.push({
            iteratee: j(c, 3),
            type: s
          }), d.__filtered__ = d.__filtered__ || u, d;
        };
      }), wt(["head", "last"], function(e, t) {
        var s = "take" + (t ? "Right" : "");
        ce.prototype[e] = function() {
          return this[s](1).value()[0];
        };
      }), wt(["initial", "tail"], function(e, t) {
        var s = "drop" + (t ? "" : "Right");
        ce.prototype[e] = function() {
          return this.__filtered__ ? new ce(this) : this[s](1);
        };
      }), ce.prototype.compact = function() {
        return this.filter(at);
      }, ce.prototype.find = function(e) {
        return this.filter(e).head();
      }, ce.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, ce.prototype.invokeMap = oe(function(e, t) {
        return typeof e == "function" ? new ce(this) : this.map(function(s) {
          return Er(s, e, t);
        });
      }), ce.prototype.reject = function(e) {
        return this.filter(Ti(j(e)));
      }, ce.prototype.slice = function(e, t) {
        e = se(e);
        var s = this;
        return s.__filtered__ && (e > 0 || t < 0) ? new ce(s) : (e < 0 ? s = s.takeRight(-e) : e && (s = s.drop(e)), t !== n && (t = se(t), s = t < 0 ? s.dropRight(-t) : s.take(t - e)), s);
      }, ce.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ce.prototype.toArray = function() {
        return this.take(Je);
      }, kt(ce.prototype, function(e, t) {
        var s = /^(?:filter|find|map|reject)|While$/.test(t), u = /^(?:head|last)$/.test(t), c = h[u ? "take" + (t == "last" ? "Right" : "") : t], d = u || /^find/.test(t);
        c && (h.prototype[t] = function() {
          var p = this.__wrapped__, m = u ? [1] : arguments, I = p instanceof ce, C = m[0], N = I || ie(p), D = function(le) {
            var fe = c.apply(h, dn([le], m));
            return u && B ? fe[0] : fe;
          };
          N && s && typeof C == "function" && C.length != 1 && (I = N = !1);
          var B = this.__chain__, J = !!this.__actions__.length, ee = d && !B, ae = I && !J;
          if (!d && N) {
            p = ae ? p : new ce(this);
            var te = e.apply(p, m);
            return te.__actions__.push({ func: bi, args: [D], thisArg: n }), new It(te, B);
          }
          return ee && ae ? e.apply(this, m) : (te = this.thru(D), ee ? u ? te.value()[0] : te.value() : te);
        });
      }), wt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = zr[e], s = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", u = /^(?:pop|shift)$/.test(e);
        h.prototype[e] = function() {
          var c = arguments;
          if (u && !this.__chain__) {
            var d = this.value();
            return t.apply(ie(d) ? d : [], c);
          }
          return this[s](function(p) {
            return t.apply(ie(p) ? p : [], c);
          });
        };
      }), kt(ce.prototype, function(e, t) {
        var s = h[t];
        if (s) {
          var u = s.name + "";
          ve.call(qn, u) || (qn[u] = []), qn[u].push({ name: t, func: s });
        }
      }), qn[pi(n, b).name] = [{
        name: "wrapper",
        func: n
      }], ce.prototype.clone = jh, ce.prototype.reverse = ed, ce.prototype.value = td, h.prototype.at = $_, h.prototype.chain = C_, h.prototype.commit = N_, h.prototype.next = P_, h.prototype.plant = D_, h.prototype.reverse = M_, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = F_, h.prototype.first = h.prototype.head, gr && (h.prototype[gr] = x_), h;
    }, Gn = Nh();
    An ? ((An.exports = Gn)._ = Gn, ss._ = Gn) : Ye._ = Gn;
  }).call(Or);
})(Fi, Fi.exports);
var tv = Fi.exports;
function Jw(i, r) {
  let n = /* @__PURE__ */ new Set();
  for (const a of i) {
    const o = a[r];
    o !== void 0 && (Array.isArray(o) ? n = n.union(new Set(o)) : n.add(o));
  }
  return n;
}
function Qw(i, r) {
  return Array.isArray(i) || (i = Object.keys(i)), i.reduce((n, a) => (n[a] = r instanceof Function ? r(a) : r[a], n), {});
}
function Zw(i, r) {
  for (const n of Object.keys(r))
    try {
      r[n] && r[n] !== 0 && r[n] !== 0 && (i[n] = r[n]);
    } catch (a) {
      console.warn(a);
    }
  return i;
}
function jw(i, r = void 0) {
  for (const n of Object.keys(i)) {
    const a = r == null ? void 0 : r[n];
    !r || a === void 0 ? delete i[n] : i[n] = r[n];
  }
  if (r)
    for (const [n, a] of Object.entries(r))
      n in i || (i[n] = a);
  return i;
}
function nv(i, r, n) {
  if (i = ya(i), r = ya(r), !tv.isEqual(i, r))
    return n(i, r);
}
function eE(i) {
  return (r, n) => nv(r, n, i);
}
function tE(i, r, { exclude: n = null } = {}) {
  const a = {};
  let o = Object.keys(i);
  return r && (o = o.filter((l) => l.startsWith(r))), n && (o = Array.isArray(n) ? o.filter((l) => !n.includes(l)) : typeof n == "string" ? o.filter((l) => l != n) : o.filter(n)), r ? o.reduce((l, f) => (l[f] = f.replace(r, ""), l), a) : o;
}
function nE(i, r) {
  let n = Ki(i);
  return n === void 0 && (n = r(), By(i, n)), n;
}
function Ic(i) {
  if (document.cookie && document.cookie !== "") {
    const r = document.cookie.split(";").find((n) => n.trim().startsWith(i + "="));
    return r ? decodeURIComponent(r.split("=")[1]) : null;
  }
  return null;
}
function rv(i, r) {
  const n = Ic(i);
  return n !== null ? n.split(r) : [];
}
var ca = null;
function $l() {
  return ca === null && (ca = Ic("csrftoken")), ca;
}
const iv = {
  csrfToken: $l(),
  axiosConfig: {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-CSRFToken": $l()
    },
    paramsSerializer: {
      indexes: null
      // by default: false
    }
  },
  locales: {
    fr: "Français",
    en: "English"
  }
};
function sv(i, r, n) {
  switch (n) {
    case ">":
      return i > r;
    case ">=":
      return i >= r;
    case "<":
      return i < r;
    case "<=":
      return i <= r;
    case "=":
      return i === r;
    case "!=":
      return i !== r;
    default:
      return i === r;
  }
}
function va(i) {
  return i == null;
}
function wa(i) {
  return i instanceof Date && !Number.isNaN(i.getTime()) && typeof i.toISOString == "function";
}
function Te(i) {
  return Array.isArray(i);
}
function fa(i) {
  return typeof i == "function";
}
function er(i) {
  return av(i) === 0;
}
function av(i) {
  return Te(i) ? i.length : Object.keys(i).length;
}
function ov(i, r, n, a = "SORT_REGULAR") {
  let o = -1;
  const l = i.map((f) => ({ criteria: r.map((_) => {
    if (typeof _ == "function")
      return _(f);
    if (!_.includes(".") && !wa(f[_]))
      return f[_];
    const w = bc(f, _, !1);
    return wa(w) ? new Date(w).getTime() : w;
  }), index: ++o, value: f }));
  return uv(l, (f, g) => lv(f, g, n, a));
}
function uv(i, r) {
  let n = i.length;
  i.sort(r);
  const a = [];
  for (; n--; )
    a[n] = i[n].value;
  return a;
}
function lv(i, r, n, a) {
  let o = -1;
  const l = i.criteria, f = r.criteria, g = l.length;
  for (; ++o < g; ) {
    const _ = cv(l[o], f[o], a);
    if (_) {
      const w = n[o];
      return _ * (w === "desc" ? -1 : 1);
    }
  }
  return i.index - r.index;
}
function cv(i, r, n) {
  if (i !== r) {
    const a = i !== void 0, o = i === null, l = i === i, f = r !== void 0, g = r === null;
    return (typeof i != "number" || typeof r != "number") && (i = String(i), r = String(r), n === "SORT_FLAG_CASE" && (i = i.toUpperCase(), r = r.toUpperCase())), !g && i > r || o && f || !a || !l ? 1 : -1;
  }
  return 0;
}
function fv(i, r) {
  return i.reduce((n, a) => {
    const o = r(a);
    return n[o] === void 0 && (n[o] = []), n[o].push(a), n;
  }, {});
}
function Ui(i) {
  throw new Error(["[Pinia ORM]"].concat(i).join(" "));
}
function $r(i, r) {
  i || Ui(r);
}
function hv(i, r) {
  let n = "", a = i;
  for (; a--; )
    n += r[Math.random() * r.length | 0];
  return n;
}
function dv(i, r) {
  const a = JSON.stringify({ key: i, params: r });
  return typeof process > "u" ? btoa(a) : a;
}
function bc(i, r, n = !0) {
  r = typeof r == "string" ? r.split(".") : r;
  const a = r.shift();
  return i && Object.prototype.hasOwnProperty.call(i, a) && r.length === 0 ? i[a] : !i || !Object.prototype.hasOwnProperty.call(i, a) ? n ? i : void 0 : bc(i[a], r);
}
function Ea(i, r) {
  if (i === r)
    return !0;
  if (i instanceof Date && r instanceof Date)
    return i.getTime() === r.getTime();
  if (!i || !r || typeof i != "object" && typeof r != "object")
    return i === r;
  if (i.prototype !== r.prototype)
    return !1;
  const n = Object.keys(i);
  return n.length !== Object.keys(r).length ? !1 : n.every((a) => Ea(i[a], r[a]));
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Wa;
const Hi = (i) => Wa = i, rE = () => mc() && Ki(Ua) || Wa, Ua = (
  /* istanbul ignore next */
  Symbol()
);
function Ia(i) {
  return i && typeof i == "object" && Object.prototype.toString.call(i) === "[object Object]" && typeof i.toJSON != "function";
}
var Cr;
(function(i) {
  i.direct = "direct", i.patchObject = "patch object", i.patchFunction = "patch function";
})(Cr || (Cr = {}));
function iE() {
  const i = ka(!0), r = i.run(() => Wi({}));
  let n = [], a = [];
  const o = yc({
    install(l) {
      Hi(o), o._a = l, l.provide(Ua, o), l.config.globalProperties.$pinia = o, a.forEach((f) => n.push(f)), a = [];
    },
    use(l) {
      return this._a ? n.push(l) : a.push(l), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: i,
    _s: /* @__PURE__ */ new Map(),
    state: r
  });
  return o;
}
const Lc = () => {
};
function Cl(i, r, n, a = Lc) {
  i.push(r);
  const o = () => {
    const l = i.indexOf(r);
    l > -1 && (i.splice(l, 1), a());
  };
  return !n && Vy() && Yy(o), o;
}
function tr(i, ...r) {
  i.slice().forEach((n) => {
    n(...r);
  });
}
const gv = (i) => i(), Nl = Symbol(), ha = Symbol();
function ba(i, r) {
  i instanceof Map && r instanceof Map ? r.forEach((n, a) => i.set(a, n)) : i instanceof Set && r instanceof Set && r.forEach(i.add, i);
  for (const n in r) {
    if (!r.hasOwnProperty(n))
      continue;
    const a = r[n], o = i[n];
    Ia(o) && Ia(a) && i.hasOwnProperty(n) && !Pr(a) && !vc(a) ? i[n] = ba(o, a) : i[n] = a;
  }
  return i;
}
const _v = (
  /* istanbul ignore next */
  Symbol()
);
function pv(i) {
  return !Ia(i) || !i.hasOwnProperty(_v);
}
const { assign: In } = Object;
function mv(i) {
  return !!(Pr(i) && i.effect);
}
function yv(i, r, n, a) {
  const { state: o, actions: l, getters: f } = r, g = n.state.value[i];
  let _;
  function w() {
    g || (n.state.value[i] = o ? o() : {});
    const T = Xy(n.state.value[i]);
    return In(T, l, Object.keys(f || {}).reduce((O, P) => (O[P] = yc(nr(() => {
      Hi(n);
      const U = n._s.get(i);
      return f[P].call(U, U);
    })), O), {}));
  }
  return _ = Rc(i, w, r, n, a, !0), _;
}
function Rc(i, r, n = {}, a, o, l) {
  let f;
  const g = In({ actions: {} }, n), _ = { deep: !0 };
  let w, T, O = [], P = [], U;
  const Y = a.state.value[i];
  !l && !Y && (a.state.value[i] = {}), Wi({});
  let G;
  function H(Q) {
    let Z;
    w = T = !1, typeof Q == "function" ? (Q(a.state.value[i]), Z = {
      type: Cr.patchFunction,
      storeId: i,
      events: U
    }) : (ba(a.state.value[i], Q), Z = {
      type: Cr.patchObject,
      payload: Q,
      storeId: i,
      events: U
    });
    const Ee = G = Symbol();
    qy().then(() => {
      G === Ee && (w = !0);
    }), T = !0, tr(O, Z, a.state.value[i]);
  }
  const b = l ? function() {
    const { state: Z } = n, Ee = Z ? Z() : {};
    this.$patch((Ke) => {
      In(Ke, Ee);
    });
  } : (
    /* istanbul ignore next */
    Lc
  );
  function M() {
    f.stop(), O = [], P = [], a._s.delete(i);
  }
  const W = (Q, Z = "") => {
    if (Nl in Q)
      return Q[ha] = Z, Q;
    const Ee = function() {
      Hi(a);
      const Ke = Array.from(arguments), me = [], pt = [];
      function an($e) {
        me.push($e);
      }
      function Tn($e) {
        pt.push($e);
      }
      tr(P, {
        args: Ke,
        name: Ee[ha],
        store: K,
        after: an,
        onError: Tn
      });
      let Ot;
      try {
        Ot = Q.apply(this && this.$id === i ? this : K, Ke);
      } catch ($e) {
        throw tr(pt, $e), $e;
      }
      return Ot instanceof Promise ? Ot.then(($e) => (tr(me, $e), $e)).catch(($e) => (tr(pt, $e), Promise.reject($e))) : (tr(me, Ot), Ot);
    };
    return Ee[Nl] = !0, Ee[ha] = Z, Ee;
  }, $ = {
    _p: a,
    // _s: scope,
    $id: i,
    $onAction: Cl.bind(null, P),
    $patch: H,
    $reset: b,
    $subscribe(Q, Z = {}) {
      const Ee = Cl(O, Q, Z.detached, () => Ke()), Ke = f.run(() => xr(() => a.state.value[i], (me) => {
        (Z.flush === "sync" ? T : w) && Q({
          storeId: i,
          type: Cr.direct,
          events: U
        }, me);
      }, In({}, _, Z)));
      return Ee;
    },
    $dispose: M
  }, K = Gy($);
  a._s.set(i, K);
  const F = (a._a && a._a.runWithContext || gv)(() => a._e.run(() => (f = ka()).run(() => r({ action: W }))));
  for (const Q in F) {
    const Z = F[Q];
    if (Pr(Z) && !mv(Z) || vc(Z))
      l || (Y && pv(Z) && (Pr(Z) ? Z.value = Y[Q] : ba(Z, Y[Q])), a.state.value[i][Q] = Z);
    else if (typeof Z == "function") {
      const Ee = W(Z, Q);
      F[Q] = Ee, g.actions[Q] = Z;
    }
  }
  return In(K, F), In(ya(K), F), Object.defineProperty(K, "$state", {
    get: () => a.state.value[i],
    set: (Q) => {
      H((Z) => {
        In(Z, Q);
      });
    }
  }), a._p.forEach((Q) => {
    In(K, f.run(() => Q({
      store: K,
      app: a._a,
      pinia: a,
      options: g
    })));
  }), Y && l && n.hydrate && n.hydrate(K.$state, Y), w = !0, T = !0, K;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Pl(i, r, n) {
  let a, o;
  const l = typeof r == "function";
  typeof i == "string" ? (a = i, o = l ? n : r) : (o = i, a = i.id);
  function f(g, _) {
    const w = mc();
    return g = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    g || (w ? Ki(Ua, null) : null), g && Hi(g), g = Wa, g._s.has(a) || (l ? Rc(a, r, o, g) : yv(a, o, g)), g._s.get(a);
  }
  return f.$id = a, f;
}
class vv {
  constructor(r, n = {}, a = {}) {
    if (!r || typeof r != "string")
      throw new Error(`Expected a string key for Entity, but found ${r}.`);
    const {
      idAttribute: o = "id",
      mergeStrategy: l = (g, _) => ({ ...g, ..._ }),
      processStrategy: f = (g) => ({ ...g })
    } = a;
    this._key = r, this._getId = o, this._mergeStrategy = l, this._processStrategy = f, this.define(n);
  }
  get key() {
    return this._key;
  }
  define(r) {
    this.schema = Object.keys(r).reduce((n, a) => {
      const o = r[a];
      return { ...n, [a]: o };
    }, this.schema || {});
  }
  getId(r, n, a) {
    return this._getId(r, n, a);
  }
  merge(r, n) {
    return this._mergeStrategy(r, n);
  }
  normalize(r, n, a, o, l, f) {
    const g = this.getId(r, n, a), _ = this.key;
    if (_ in f || (f[_] = {}), g in f[_] || (f[_][g] = []), f[_][g].includes(r))
      return g;
    f[_][g].push(r);
    const w = this._processStrategy(r, n, a);
    return Object.keys(this.schema).forEach((T) => {
      if (w.hasOwnProperty(T) && typeof w[T] == "object") {
        const O = this.schema[T], P = typeof O == "function" ? O(r) : O;
        w[T] = o(
          w[T],
          w,
          T,
          P,
          l,
          f
        );
      }
    }), l(this, w, r, n, a), g;
  }
}
class Sc {
  constructor(r, n) {
    n && (this._schemaAttribute = typeof n == "string" ? (a) => a[n] : n), this.define(r);
  }
  get isSingleSchema() {
    return !this._schemaAttribute;
  }
  define(r) {
    this.schema = r;
  }
  getSchemaAttribute(r, n, a) {
    return !this.isSingleSchema && this._schemaAttribute(r, n, a);
  }
  inferSchema(r, n, a) {
    if (this.isSingleSchema)
      return this.schema;
    const o = this.getSchemaAttribute(r, n, a);
    return this.schema[o];
  }
  normalizeValue(r, n, a, o, l, f) {
    const g = this.inferSchema(r, n, a);
    if (!g)
      return r;
    const _ = o(r, n, a, g, l, f);
    return this.isSingleSchema || _ === void 0 || _ === null ? _ : { id: _, schema: this.getSchemaAttribute(r, n, a) };
  }
}
class wv extends Sc {
  constructor(r, n) {
    if (!n)
      throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');
    super(r, n);
  }
  normalize(r, n, a, o, l, f) {
    return this.normalizeValue(r, n, a, o, l, f);
  }
}
const Ev = (i) => {
  if (Array.isArray(i) && i.length > 1)
    throw new Error(`Expected schema definition to be a single schema, but found ${i.length}.`);
  return i[0];
}, Tc = (i) => Array.isArray(i) ? i : Object.keys(i).map((r) => i[r]), Iv = (i, r, n, a, o, l, f) => Tc(r).map((g) => o(g, n, a, Ev(i), l, f));
class bv extends Sc {
  normalize(r, n, a, o, l, f) {
    return Tc(r).map((g) => this.normalizeValue(g, n, a, o, l, f)).filter((g) => g != null);
  }
}
const Lv = (i, r, n, a, o, l, f) => {
  const g = { ...r };
  return Object.keys(i).forEach((_) => {
    const w = i[_], T = typeof w == "function" ? w(r) : w, O = o(r[_], r, _, T, l, f);
    O == null ? delete g[_] : g[_] = O;
  }), g;
}, La = (i, r, n, a, o, l) => typeof i != "object" || !i ? i : typeof a == "object" && (!a.normalize || typeof a.normalize != "function") ? (Array.isArray(a) ? Iv : Lv)(a, i, r, n, La, o, l) : a.normalize(i, r, n, La, o, l), Rv = (i) => (r, n, a, o, l) => {
  const f = r.key, g = r.getId(a, o, l);
  f in i || (i[f] = {}), i[f][g] = i[f][g] ? r.merge(i[f][g], n) : n;
}, da = {
  Array: bv,
  Entity: vv,
  Union: wv
}, Sv = (i, r) => {
  if (!i || typeof i != "object")
    throw new Error(
      `Unexpected input given to normalize. Expected type to be "object", found "${i === null ? "null" : typeof i}".`
    );
  const n = {}, a = Rv(n), l = La(i, i, null, r, a, {});
  return { entities: n, result: l };
};
class Oc {
  /**
   * Create a new Attribute instance.
   */
  constructor(r) {
    /**
     * The model instance.
     */
    R(this, "model");
    /**
     * The field name
     */
    R(this, "key");
    this.model = r, this.key = "";
  }
  /**
   * Set the key name of the field
   */
  setKey(r) {
    return this.key = r, this;
  }
}
class He extends Oc {
  /**
   * Create a new relation instance.
   */
  constructor(n, a) {
    super(n);
    /**
     * The parent model.
     */
    R(this, "parent");
    /**
     * The related model.
     */
    R(this, "related");
    /**
     * The delete mode
     */
    R(this, "onDeleteMode");
    this.parent = n, this.related = a;
  }
  /**
   * Get the related model of the relation.
   */
  getRelated() {
    return this.related;
  }
  /**
   * Get all of the primary keys for an array of models.
   */
  getKeys(n, a) {
    return n.map((o) => o[a]);
  }
  /**
   * Specify how this model should behave on delete
   */
  onDelete(n) {
    return this.onDeleteMode = n, this;
  }
  /**
   * Run a dictionary map over the items.
   */
  mapToDictionary(n, a) {
    return n.reduce((o, l) => {
      const [f, g] = a(l);
      return o[f] || (o[f] = []), o[f].push(g), o;
    }, {});
  }
  /**
   * Call a function for a current key match
   */
  compositeKeyMapper(n, a, o) {
    Te(n) && Te(a) ? n.forEach((l, f) => {
      o(l, a[f]);
    }) : !Te(a) && !Te(n) ? o(n, a) : Ui([
      "This relation cant be resolve. Either child or parent doesnt have different key types (composite)",
      JSON.stringify(n),
      JSON.stringify(a)
    ]);
  }
  /**
   * Get the index key defined by the primary key or keys (composite)
   */
  getResolvedKey(n, a) {
    return Te(a) ? `[${a.map((o) => n[o]).toString()}]` : n[a];
  }
}
class Ra extends He {
  /**
   * Create a new morph-to relation instance.
   */
  constructor(n, a, o, l, f) {
    super(n, n);
    /**
     * The related models.
     */
    R(this, "relatedModels");
    /**
     * The related model dictionary.
     */
    R(this, "relatedTypes");
    /**
     * The field name that contains id of the parent model.
     */
    R(this, "morphId");
    /**
     * The field name that contains type of the parent model.
     */
    R(this, "morphType");
    /**
     * The associated key of the child model.
     */
    R(this, "ownerKey");
    this.relatedModels = a, this.relatedTypes = this.createRelatedTypes(a), this.morphId = o, this.morphType = l, this.ownerKey = f;
  }
  /**
   * Create a dictionary of relations keyed by their entity.
   */
  createRelatedTypes(n) {
    return n.reduce((a, o) => (a[o.$entity()] = o, a), {});
  }
  /**
   * Get the type field name.
   */
  getType() {
    return this.morphType;
  }
  /**
   * Get all related models for the relationship.
   */
  getRelateds() {
    return this.relatedModels;
  }
  /**
   * Define the normalizr schema for the relation.
   */
  define(n) {
    return n.union(this.relatedModels, (a, o, l) => {
      const f = o[this.morphType], g = this.relatedTypes[f], _ = this.ownerKey || g.$getKeyName();
      return o[this.morphId] = a[_], f;
    });
  }
  /**
   * Attach the relational key to the given record. Since morph-to relationship
   * doesn't have any foreign key, it would do nothing.
   */
  attach(n, a) {
  }
  /**
   * Add eager constraints. Since we do not know the related model ahead of time,
   * we cannot add any eager constraints.
   */
  addEagerConstraints(n, a) {
  }
  /**
   * Find and attach related children to their respective parents.
   */
  match(n, a, o) {
    const l = this.buildDictionary(o, a);
    a.forEach((f) => {
      var T;
      const g = f[this.morphType], _ = f[this.morphId], w = ((T = l[g]) == null ? void 0 : T[_]) ?? null;
      f.$setRelation(n, w);
    });
  }
  /**
   * Make a related model.
   */
  make(n, a) {
    return !n || !a ? null : this.relatedTypes[a].$newInstance(n);
  }
  /**
   * Build model dictionary keyed by the owner key for each entity.
   */
  buildDictionary(n, a) {
    const o = this.getKeysByEntity(a), l = {};
    for (const f in o) {
      const g = this.relatedTypes[f];
      $r(!!g, [
        `Trying to load "morph to" relation of \`${f}\``,
        "but the model could not be found."
      ]);
      const _ = this.ownerKey || g.$getKeyName(), w = n.newQueryWithConstraints(f).whereIn(_, o[f]).get(!1);
      l[f] = w.reduce(
        (T, O) => (T[O[_]] = O, T),
        {}
      );
    }
    return l;
  }
  /**
   * Get the relation's primary keys grouped by its entity.
   */
  getKeysByEntity(n) {
    return n.reduce((a, o) => {
      const l = o[this.morphType], f = o[this.morphId];
      return f !== null && this.relatedTypes[l] !== void 0 && (a[l] || (a[l] = []), a[l].push(f)), a;
    }, {});
  }
}
class Wr extends Oc {
  /**
   * Create a new Type attribute instance.
   */
  constructor(n, a = null) {
    super(n);
    /**
     * The raw default value for the attribute (can be a function).
     */
    R(this, "rawDefaultValue");
    /**
     * Whether the attribute accepts `null` value or not.
     */
    R(this, "isNullable", !0);
    this.rawDefaultValue = a;
  }
  /**
   * The computed default value of the attribute.
   */
  get defaultValue() {
    return typeof this.rawDefaultValue == "function" ? this.rawDefaultValue() : this.rawDefaultValue;
  }
  /**
   * Set the nullable option to false.
   */
  notNullable() {
    return this.isNullable = !1, this;
  }
  makeReturn(n, a) {
    return a === void 0 ? this.defaultValue : a === null ? (this.isNullable || this.throwWarning(["is set as non nullable!"]), a) : (typeof a !== n && this.throwWarning([a, "is not a", n]), a);
  }
  /**
   * Throw warning for wrong type
   */
  throwWarning(n) {
    console.warn(["[Pinia ORM]"].concat([`Field ${this.model.$entity()}:${this.key} - `, ...n]).join(" "));
  }
}
class Ac extends Wr {
  constructor(n, a = {}) {
    super(n);
    R(this, "options");
    // This alphabet uses `A-Za-z0-9_-` symbols.
    // The order of characters is optimized for better gzip and brotli compression.
    // References to the same file (works both for gzip and brotli):
    // `'use`, `andom`, and `rict'`
    // References to the brotli default dictionary:
    // `-26T`, `1983`, `40px`, `75px`, `bush`, `jack`, `mind`, `very`, and `wolf`
    R(this, "alphabet", "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict");
    R(this, "size", 21);
    this.options = typeof a == "number" ? { size: a } : a, this.alphabet = this.options.alphabet ?? this.alphabet, this.size = this.options.size ?? this.size;
  }
  /**
   * Make the value for the attribute.
   */
  make(n) {
    const a = this.model.$casts()[this.model.$getKeyName()];
    return a ? n ?? a.withParameters(this.options).newRawInstance(this.model.$fields()).set(n) : n ?? hv(this.size, this.alphabet);
  }
}
class Tv {
  /**
   * Create a new Schema instance.
   */
  constructor(r) {
    /**
     * The list of generated schemas.
     */
    R(this, "schemas", {});
    /**
     * The model instance.
     */
    R(this, "model");
    this.model = r;
  }
  /**
   * Create a single schema.
   */
  one(r, n) {
    r = r || this.model, n = n || this.model;
    const a = `${r.$self().modelEntity()}${n.$self().modelEntity()}`;
    if (this.schemas[a])
      return this.schemas[a];
    const o = this.newEntity(r, n);
    this.schemas[a] = o;
    const l = this.definition(r);
    return o.define(l), o;
  }
  /**
   * Create an array schema for the given model.
   */
  many(r, n) {
    return new da.Array(this.one(r, n));
  }
  /**
   * Create an union schema for the given models.
   */
  union(r, n) {
    const a = r.reduce((o, l) => (o[l.$self().modelEntity()] = this.one(l), o), {});
    return new da.Union(a, n);
  }
  /**
   * Create a new normalizr entity.
   */
  newEntity(r, n) {
    const a = r.$self().modelEntity(), o = this.idAttribute(r, n);
    return new da.Entity(a, {}, { idAttribute: o });
  }
  /**
   * The `id` attribute option for the normalizr entity.
   *
   * Generates any missing primary keys declared by a Uid attribute. Missing
   * primary keys where the designated attributes do not exist will
   * throw an error.
   *
   * Note that this will only generate uids for primary key attributes since it
   * is required to generate the "index id" while the other attributes are not.
   *
   * It's especially important when attempting to "update" records since we'll
   * want to retain the missing attributes in-place to prevent them being
   * overridden by newly generated uid values.
   *
   * If uid primary keys are omitted, when invoking the "update" method, it will
   * fail because the uid values will never exist in the store.
   *
   * While it would be nice to throw an error in such a case, instead of
   * silently failing an update, we don't have a way to detect whether users
   * are trying to "update" records or "inserting" new records at this stage.
   * Something to consider for future revisions.
   */
  idAttribute(r, n) {
    const a = this.getUidPrimaryKeyPairs(r);
    return (o, l, f) => {
      var _, w, T;
      f !== null && ((_ = n.$fields()[f]) == null || _.attach(l, o));
      for (const O in a)
        va(o[O]) && (o[O] = a[O].setKey(O).make(o[O]));
      return ["BelongsTo", "HasOne", "MorphOne", "MorphTo"].includes(((w = n.$fields()[f]) == null ? void 0 : w.constructor.name) ?? "") && Te(l[f]) && Ui(['You are passing a list to "', `${n.$modelEntity()}.${f}`, `" which is a one to one Relation(${(T = n.$fields()[f]) == null ? void 0 : T.constructor.name}):`, JSON.stringify(l[f])]), r.$getIndexId(o);
    };
  }
  /**
   * Get all primary keys defined by the Uid attribute for the given model.
   */
  getUidPrimaryKeyPairs(r) {
    const n = r.$fields(), a = r.$getKeyName(), o = Te(a) ? a : [a], l = {};
    return o.forEach((f) => {
      const g = n[f];
      g instanceof Ac && (l[f] = g);
    }), l;
  }
  /**
   * Create a definition for the given model.
   */
  definition(r) {
    const n = r.$fields(), a = {};
    for (const o in n) {
      const l = n[o];
      l instanceof He && (a[o] = l.define(this));
    }
    return a;
  }
}
class Ov {
  /**
   * Create a new Interpreter instance.
   */
  constructor(r) {
    /**
     * The model object.
     */
    R(this, "model");
    this.model = r;
  }
  process(r) {
    const n = this.normalize(r);
    return [r, n];
  }
  /**
   * Normalize the given data.
   */
  normalize(r) {
    const n = Te(r) ? [this.getSchema()] : this.getSchema();
    return Sv(r, n).entities;
  }
  /**
   * Get the schema from the database.
   */
  getSchema() {
    return new Tv(this.model).one();
  }
}
function xl(i) {
  return {
    save(r, n = !0) {
      this.data = Object.assign({}, this.data, r), n && i && i.newQuery(this.$id).save(Object.values(r));
    },
    insert(r, n = !0) {
      this.data = Object.assign({}, this.data, r), n && i && i.newQuery(this.$id).insert(Object.values(r));
    },
    update(r, n = !0) {
      this.data = Object.assign({}, this.data, r), n && i && i.newQuery(this.$id).update(Object.values(r));
    },
    fresh(r, n = !0) {
      this.data = r, n && i && i.newQuery(this.$id).fresh(Object.values(r));
    },
    destroy(r, n = !0) {
      n && i ? i.newQuery(this.$id).newQuery(this.$id).destroy(r) : (r.forEach((a) => delete this.data[a]), this.data.__ob__ && this.data.__ob__.dep.notify());
    },
    /**
     * Commit `delete` change to the store.
     */
    delete(r, n = !0) {
      n && i ? i.whereId(r).delete() : (r.forEach((a) => delete this.data[a]), this.data.__ob__ && this.data.__ob__.dep.notify());
    },
    flush(r, n = !0) {
      this.data = {}, n && i && i.newQuery(this.$id).flush();
    }
  };
}
function $c(i, r, n, a) {
  return Ht.pinia.storeType === "optionStore" ? /* @__PURE__ */ Pl(i, {
    state: () => ({ data: {} }),
    actions: xl(a),
    ...r
  }) : /* @__PURE__ */ Pl(i, () => ({
    data: Wi({}),
    ...xl(a),
    ...r
  }), n);
}
class Cc extends He {
  /**
   * Create a new belongs to instance.
   */
  constructor(n, a, o, l, f, g, _) {
    super(n, a);
    /**
     * The pivot model.
     */
    R(this, "pivot");
    /**
     * The foreign key of the parent model.
     */
    R(this, "foreignPivotKey");
    /**
     * The associated key of the relation.
     */
    R(this, "relatedPivotKey");
    /**
     * The key name of the parent model.
     */
    R(this, "parentKey");
    /**
     * The key name of the related model.
     */
    R(this, "relatedKey");
    /**
     * The key name of the pivot data.
     */
    R(this, "pivotKey", "pivot");
    this.pivot = o, this.foreignPivotKey = l, this.relatedPivotKey = f, this.parentKey = g, this.relatedKey = _;
  }
  /**
   * Get all related models for the relationship.
   */
  getRelateds() {
    return [this.related, this.pivot];
  }
  /**
   * Define the normalizr schema for the relationship.
   */
  define(n) {
    return n.many(this.related, this.parent);
  }
  /**
   * Attach the parent type and id to the given relation.
   */
  attach(n, a) {
    const o = a[this.pivotKey] ?? {};
    o[this.foreignPivotKey] = n[this.parentKey], o[this.relatedPivotKey] = a[this.relatedKey], a[`pivot_${this.relatedPivotKey}_${this.pivot.$entity()}`] = o;
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(n) {
    return n ? n.map((a) => this.related.$newInstance(a)) : [];
  }
  /**
   * Match the eagerly loaded results to their parents.
   */
  match(n, a, o) {
    const l = o.get(!1), f = o.newQuery(this.pivot.$modelEntity()).whereIn(this.relatedPivotKey, this.getKeys(l, this.relatedKey)).whereIn(this.foreignPivotKey, this.getKeys(a, this.parentKey)).groupBy(this.foreignPivotKey, this.relatedPivotKey).get();
    a.forEach((g) => {
      const _ = [];
      l.forEach((w) => {
        var P;
        const T = ((P = f[`[${g[this.parentKey]},${w[this.relatedKey]}]`]) == null ? void 0 : P[0]) ?? null;
        if (!T)
          return;
        const O = w.$newInstance(w.$toJson(), { operation: void 0 });
        delete O[`pivot_${this.relatedPivotKey}_${this.pivot.$entity()}`], O.$setRelation(this.pivotKey, T, !0), _.push(O);
      }), g.$setRelation(n, _), g.$setRelation(this.pivotKey, void 0);
    });
  }
  /**
   * Set the constraints for the related relation.
   */
  addEagerConstraints(n, a) {
  }
  /**
   * Specify the custom pivot accessor to use for the relationship.
   */
  as(n) {
    return this.pivotKey = n, this;
  }
}
class Nr {
  /**
   * Create a new query instance.
   */
  constructor(r, n, a, o, l) {
    /**
     * The database instance.
     */
    R(this, "database");
    /**
     * The model object.
     */
    R(this, "model");
    /**
     * The where constraints for the query.
     */
    R(this, "wheres", []);
    /**
     * The orderings for the query.
     */
    R(this, "orders", []);
    /**
     * The orderings for the query.
     */
    R(this, "groups", []);
    /**
     * The maximum number of records to return.
     */
    R(this, "take", null);
    /**
     * The number of records to skip.
     */
    R(this, "skip", 0);
    /**
     * Fields that should be visible.
     */
    R(this, "visible", ["*"]);
    /**
     * Fields that should be hidden.
     */
    R(this, "hidden", []);
    /**
     * The cache object.
     */
    R(this, "cache");
    /**
     * The relationships that should be eager loaded.
     */
    R(this, "eagerLoad", {});
    /**
     * The pinia store.
     */
    R(this, "pinia");
    R(this, "fromCache", !1);
    R(this, "cacheConfig", {});
    R(this, "getNewHydrated", !1);
    /**
     * Hydrated models. They are stored to prevent rerendering of child components.
     */
    R(this, "hydratedDataCache");
    this.database = r, this.model = n, this.pinia = l, this.cache = a, this.hydratedDataCache = o, this.getNewHydrated = !1;
  }
  /**
   * Create a new query instance for the given model.
   */
  newQuery(r) {
    return this.getNewHydrated = !0, new Nr(this.database, this.database.getModel(r), this.cache, this.hydratedDataCache, this.pinia);
  }
  /**
   * Create a new query instance with constraints for the given model.
   */
  newQueryWithConstraints(r) {
    const n = new Nr(this.database, this.database.getModel(r), this.cache, this.hydratedDataCache, this.pinia);
    return n.eagerLoad = { ...this.eagerLoad }, n.wheres = [...this.wheres], n.orders = [...this.orders], n.take = this.take, n.skip = this.skip, n.fromCache = this.fromCache, n.cacheConfig = this.cacheConfig, n;
  }
  /**
   * Create a new query instance from the given relation.
   */
  newQueryForRelation(r) {
    return new Nr(this.database, r.getRelated(), this.cache, /* @__PURE__ */ new Map(), this.pinia);
  }
  /**
   * Create a new interpreter instance.
   */
  newInterpreter() {
    return new Ov(this.model);
  }
  /**
   * Commit a store action and get the data
   */
  commit(r, n) {
    const a = $c(this.model.$storeName(), this.model.$piniaOptions(), this.model.$piniaExtend(), this)(this.pinia);
    return r && r !== "all" && r !== "get" && typeof a[r] == "function" && a[r](n, !1), this.cache && ["get", "all", "insert", "flush", "delete", "update", "destroy"].includes(r) && this.cache.clear(), a.$state.data;
  }
  /**
   * Make meta field visible
   */
  withMeta() {
    return this.makeVisible(["_meta"]);
  }
  /**
   * Make hidden fields visible
   */
  makeVisible(r) {
    return this.visible = r, this.getNewHydrated = !0, this;
  }
  /**
   * Make visible fields hidden
   */
  makeHidden(r) {
    return this.hidden = r, this.getNewHydrated = !0, this;
  }
  // where(field: T, value?: WhereSecondaryClosure<M[T]> | M[T]): this;
  // where<T extends WherePrimaryClosure<M> | keyof M>(field: T, value?: WhereSecondaryClosure<M[T]> | M[T]): this;
  /**
   * Add a basic where clause to the query.
   */
  where(r, n) {
    return this.wheres.push({ field: r, value: n, boolean: "and" }), this;
  }
  /**
   * Add a "where in" clause to the query.
   */
  whereIn(r, n) {
    return n instanceof Set && (n = Array.from(n)), this.where(r, n);
  }
  /**
   * Add a "where not in" clause to the query.
   */
  whereNotIn(r, n) {
    return n instanceof Set && (n = Array.from(n)), this.where((a) => !n.includes(a[r]));
  }
  /**
   * Add a "where not in" clause to the query.
   */
  orWhereIn(r, n) {
    return n instanceof Set && (n = Array.from(n)), this.orWhere(r, n);
  }
  /**
   * Add a "where not in" clause to the query.
   */
  orWhereNotIn(r, n) {
    return n instanceof Set && (n = Array.from(n)), this.orWhere((a) => !n.includes(a[r]));
  }
  /**
   * Add a where clause on the primary key to the query.
   */
  whereId(r) {
    return this.where(this.model.$getKeyName(), r);
  }
  /**
   * Add an "or where" clause to the query.
   */
  orWhere(r, n) {
    return this.wheres.push({ field: r, value: n, boolean: "or" }), this;
  }
  /**
   * Add a "whereNULL" clause to the query.
   */
  whereNull(r) {
    return this.where(r, null);
  }
  /**
   * Add a "whereNotNULL" clause to the query.
   */
  whereNotNull(r) {
    return this.where((n) => n[r] != null);
  }
  /**
   * Add a "where has" clause to the query.
   */
  whereHas(r, n = () => {
  }, a, o) {
    return this.where(this.getFieldWhereForRelations(r, n, a, o));
  }
  /**
   * Add an "or where has" clause to the query.
   */
  orWhereHas(r, n = () => {
  }, a, o) {
    return this.orWhere(this.getFieldWhereForRelations(r, n, a, o));
  }
  /**
   * Add a "has" clause to the query.
   */
  has(r, n, a) {
    return this.where(this.getFieldWhereForRelations(r, () => {
    }, n, a));
  }
  /**
   * Add an "or has" clause to the query.
   */
  orHas(r, n, a) {
    return this.orWhere(this.getFieldWhereForRelations(r, () => {
    }, n, a));
  }
  /**
   * Add a "doesn't have" clause to the query.
   */
  doesntHave(r) {
    return this.where(this.getFieldWhereForRelations(r, () => {
    }, "=", 0));
  }
  /**
   * Add a "doesn't have" clause to the query.
   */
  orDoesntHave(r) {
    return this.orWhere(this.getFieldWhereForRelations(r, () => {
    }, "=", 0));
  }
  /**
   * Add a "where doesn't have" clause to the query.
   */
  whereDoesntHave(r, n = () => {
  }) {
    return this.where(this.getFieldWhereForRelations(r, n, "=", 0));
  }
  /**
   * Add an "or where doesn't have" clause to the query.
   */
  orWhereDoesntHave(r, n = () => {
  }) {
    return this.orWhere(this.getFieldWhereForRelations(r, n, "=", 0));
  }
  /**
   * Add a "group by" clause to the query.
   */
  groupBy(...r) {
    return r.forEach((n) => {
      this.groups.push({ field: n });
    }), this;
  }
  /**
   * Add an "order by" clause to the query.
   */
  orderBy(r, n = "asc") {
    return this.orders.push({ field: r, direction: n }), this;
  }
  /**
   * Set the "limit" value of the query.
   */
  limit(r) {
    return this.take = r, this;
  }
  /**
   * Set the "offset" value of the query.
   */
  offset(r) {
    return this.skip = r, this;
  }
  /**
   * Set the relationships that should be eager loaded.
   */
  with(r, n = () => {
  }) {
    return this.getNewHydrated = !0, this.eagerLoad[r] = n, this;
  }
  /**
   * Set to eager load all top-level relationships. Constraint is set for all relationships.
   */
  withAll(r = () => {
  }) {
    let n = this.model.$fields();
    Object.values(this.model.$types()).forEach((o) => {
      n = { ...n, ...o.fields() };
    });
    for (const o in n)
      n[o] instanceof He && this.with(o, r);
    return this;
  }
  /**
   * Set to eager load all relationships recursively.
   */
  withAllRecursive(r = 3) {
    return this.withAll((n) => {
      r > 0 && n.withAllRecursive(r - 1);
    });
  }
  /**
   * Define to use the cache for a query
   */
  useCache(r, n) {
    return this.fromCache = !0, this.cacheConfig = {
      key: r,
      params: n
    }, this;
  }
  /**
   * Get where closure for relations
   */
  getFieldWhereForRelations(r, n = () => {
  }, a, o) {
    const l = this.newQuery(this.model.$entity()).with(r, n).get(!1).filter((f) => {
      const g = f[r];
      return sv(
        Te(g) ? g.length : g === null ? 0 : 1,
        typeof a == "number" ? a : o ?? 1,
        typeof a == "number" || o === void 0 ? ">=" : a
      );
    }).map((f) => f.$getIndexId());
    return (f) => l.includes(f.$getIndexId());
  }
  /**
   * Get all models by id from the store. The difference with the `get` is that this
   * method will not process any query chain.
   */
  storeFind(r = []) {
    const n = this.commit("all"), a = [], o = new Set(r);
    return o.size > 0 ? o.forEach((l) => {
      n[l] && a.push(this.hydrate(n[l], { visible: this.visible, hidden: this.hidden, operation: "get" }));
    }) : Object.values(n).forEach((l) => a.push(this.hydrate(l, { visible: this.visible, hidden: this.hidden, operation: "get" }))), a;
  }
  /**
   * Get all models from the store. The difference with the `get` is that this
   * method will not process any query chain. It'll always retrieve all models.
   */
  all() {
    return this.storeFind();
  }
  get(r = !0) {
    if (!this.fromCache || !this.cache)
      return this.internalGet(r);
    const n = this.cacheConfig.key ? this.cacheConfig.key + JSON.stringify(this.cacheConfig.params) : dv(this.model.$entity(), {
      where: this.wheres,
      groups: this.groups,
      orders: this.orders,
      eagerLoads: this.eagerLoad,
      skip: this.skip,
      take: this.take,
      hidden: this.hidden,
      visible: this.visible
    }), a = this.cache.get(n);
    if (a)
      return a;
    const o = this.internalGet(r);
    return this.cache.set(n, o), o;
  }
  internalGet(r) {
    if (this.model.$entity() !== this.model.$baseEntity() || this.model.$namespace() !== this.model.$baseNamespace()) {
      const a = this.model.$fields()[this.model.$typeKey()].make() ?? this.model.$entity();
      this.where(this.model.$typeKey(), a);
    }
    let n = this.select();
    return this.orders.length === 0 && (n = this.filterLimit(n)), er(n) || this.eagerLoadRelations(n), this.orders.length > 0 && (n = this.filterOrder(n), n = this.filterLimit(n)), r && n.forEach((a) => a.$self().retrieved(a)), this.groups.length > 0 ? this.filterGroup(n) : n;
  }
  /**
   * Execute the query and get the first result.
   */
  first() {
    return this.limit(1).get()[0] ?? null;
  }
  find(r) {
    return this.whereId(r)[Te(r) ? "get" : "first"]();
  }
  /**
   * Retrieve models by processing all filters set to the query chain.
   */
  select() {
    let r = [];
    const n = this.wheres, a = this.wheres.findIndex((l) => l.field === this.model.$getKeyName());
    if (a > -1) {
      const l = this.wheres[a].value;
      r = ((fa(l) ? [] : Te(l) ? l : [l]) || []).map(String) || [], r.length > 0 && (this.wheres = [...this.wheres.slice(0, a), ...this.wheres.slice(a + 1)]);
    }
    let o = this.storeFind(r);
    return o = this.filterWhere(o), this.wheres = n, o;
  }
  /**
   * Filter the given collection by the registered where clause.
   */
  filterWhere(r) {
    if (er(this.wheres))
      return r;
    const n = this.getWhereComparator();
    return r.filter((a) => n(a));
  }
  /**
   * Get comparator for the where clause.
   */
  getWhereComparator() {
    const { and: r, or: n } = fv(this.wheres, (a) => a.boolean);
    return (a) => {
      const o = [];
      return r && o.push(r.every((l) => this.whereComparator(a, l))), n && o.push(n.some((l) => this.whereComparator(a, l))), o.includes(!0);
    };
  }
  /**
   * The function to compare where clause to the given model.
   */
  whereComparator(r, n) {
    return fa(n.field) ? n.field(r) : Te(n.value) ? n.value.includes(r[n.field]) : fa(n.value) ? n.value(r[n.field]) : r[n.field] === n.value;
  }
  /**
   * Filter the given collection by the registered order conditions.
   */
  filterOrder(r) {
    const n = this.orders.map((o) => o.field), a = this.orders.map((o) => o.direction);
    return ov(r, n, a);
  }
  /**
   * Filter the given collection by the registered group conditions.
   */
  filterGroup(r) {
    const n = {}, a = this.groups.map((o) => o.field);
    return r.forEach((o) => {
      const l = a.length === 1 ? o[a[0]] : `[${a.map((f) => o[f]).toString()}]`;
      n[l] = (n[l] || []).concat(o);
    }), n;
  }
  /**
   * Filter the given collection by the registered limit and offset values.
   */
  filterLimit(r) {
    return this.take !== null ? r.slice(this.skip, this.skip + this.take) : r.slice(this.skip);
  }
  /**
   * Eager load relations on the model.
   */
  load(r) {
    this.eagerLoadRelations(r);
  }
  /**
   * Eager load the relationships for the models.
   */
  eagerLoadRelations(r) {
    for (const n in this.eagerLoad)
      this.eagerLoadRelation(r, n, this.eagerLoad[n]);
  }
  /**
   * Eagerly load the relationship on a set of models.
   */
  eagerLoadRelation(r, n, a) {
    const o = this.getRelation(n), l = this.newQueryForRelation(o);
    o.addEagerConstraints(l, r), a(l), o.match(n, r, l);
  }
  /**
   * Get the relation instance for the given relation name.
   */
  getRelation(r) {
    return this.model.$getRelation(r);
  }
  revive(r) {
    return Te(r) ? this.reviveMany(r) : this.reviveOne(r);
  }
  /**
   * Revive single model from the given schema.
   */
  reviveOne(r) {
    this.getNewHydrated = !1;
    const n = this.model.$getIndexId(r), a = this.commit("get")[n] ?? null;
    if (!a)
      return null;
    const o = this.hydrate(a, { visible: this.visible, hidden: this.hidden, operation: "get" });
    return this.reviveRelations(o, r), o;
  }
  /**
   * Revive multiple models from the given schema.
   */
  reviveMany(r) {
    return r.reduce((n, a) => {
      const o = this.reviveOne(a);
      return o && n.push(o), n;
    }, []);
  }
  /**
   * Revive relations for the given schema and entity.
   */
  reviveRelations(r, n) {
    const a = this.model.$fields();
    for (const o in n) {
      const l = a[o];
      if (!(l instanceof He))
        continue;
      const f = n[o];
      if (!f)
        return;
      if (l instanceof Ra) {
        const g = r[l.getType()];
        r[o] = this.newQuery(g).reviveOne(f);
        continue;
      }
      r[o] = Te(f) ? this.newQueryForRelation(l).reviveMany(f) : this.newQueryForRelation(l).reviveOne(f);
    }
  }
  /**
   * Create and persist model with default values.
   */
  new(r = !0) {
    let n = this.hydrate({}, { operation: r ? "set" : "get" });
    const a = n.$self().creating(n), o = n.$self().saving(n);
    return a === !1 || o === !1 ? null : (n.$isDirty() && (n = this.hydrate(n.$getAttributes(), { operation: r ? "set" : "get" })), r && (this.hydratedDataCache.set(this.model.$entity() + n.$getKey(void 0, !0), this.hydrate(n.$getAttributes(), { operation: "get" })), n.$self().created(n), n.$self().saved(n), this.commit("insert", this.compile(n))), n);
  }
  save(r) {
    let n = this.newInterpreter().process(r);
    const a = this.model.$types(), o = this.model.$baseEntity() !== this.model.$entity() || this.model.$baseNamespace() !== this.model.$namespace();
    if (Object.values(a).length > 0 || o) {
      const g = Object.keys(a), _ = {};
      r = Te(r) ? r : [r], r.forEach((w) => {
        const T = g.includes(`${w[this.model.$typeKey()]}`) || o ? w[this.model.$typeKey()] ?? this.model.$fields()[this.model.$typeKey()].defaultValue : g[0];
        _[T] || (_[T] = []), _[T].push(w);
      });
      for (const w in _) {
        const T = a[w];
        T.modelEntity() === this.model.$modelEntity() ? n = this.newInterpreter().process(_[w]) : this.newQueryWithConstraints(T.modelEntity()).save(_[w]);
      }
    }
    const [l, f] = n;
    for (const g in f) {
      const _ = this.newQuery(g), w = f[g];
      _.saveElements(w);
    }
    return this.revive(l);
  }
  /**
   * Save the given elements to the store.
   */
  saveElements(r) {
    const n = {}, a = this.commit("all"), o = [];
    for (const l in r) {
      const f = r[l], g = a[l];
      let _ = g ? Object.assign(this.hydrate(g, { operation: "set", action: "update" }), f) : this.hydrate(f, { operation: "set", action: "save" });
      const w = _.$self().saving(_, f), T = g ? _.$self().updating(_, f) : _.$self().creating(_, f);
      w === !1 || T === !1 || (_.$isDirty() && (_ = this.hydrate(_.$getAttributes(), { operation: "set", action: "update" })), o.push(() => _.$self().saved(_, f)), o.push(() => g ? _.$self().updated(_, f) : _.$self().created(_, f)), n[l] = _.$getAttributes(), Object.values(_.$types()).length > 0 && !n[l][_.$typeKey()] && (n[l][_.$typeKey()] = f[_.$typeKey()]));
    }
    Object.keys(n).length > 0 && (this.commit("save", n), o.forEach((l) => l()));
  }
  insert(r) {
    const n = this.hydrate(r, { operation: "set", action: "insert" });
    return this.commit("insert", this.compile(n)), n;
  }
  fresh(r) {
    this.hydratedDataCache.clear();
    const n = this.hydrate(r, { action: "update" });
    return this.commit("fresh", this.compile(n)), n;
  }
  /**
   * Update the reocrd matching the query chain.
   */
  update(r) {
    const n = this.get(!1);
    if (er(n))
      return [];
    const a = n.map((o) => {
      const l = Object.assign(this.hydrate(o.$getAttributes(), { action: "update", operation: "set" }), r);
      if (o.$self().updating(l, r) === !1)
        return o;
      const f = l.$isDirty() ? this.hydrate({ ...o.$getAttributes(), ...r }, { action: "update", operation: "set" }) : l;
      return f.$self().updated(f, r), f;
    });
    return this.commit("update", this.compile(a)), a;
  }
  destroy(r) {
    return Te(r) ? this.destroyMany(r) : this.destroyOne(r);
  }
  destroyOne(r) {
    const n = this.find(r);
    if (!n)
      return null;
    const [a, o] = this.dispatchDeleteHooks(n);
    return o.includes(n.$getIndexId()) || (this.commit("destroy", [n.$getIndexId()]), a.forEach((l) => l())), n;
  }
  destroyMany(r) {
    const n = this.find(r);
    if (er(n))
      return [];
    const [a, o] = this.dispatchDeleteHooks(n), l = this.getIndexIdsFromCollection(n).filter((f) => !o.includes(f));
    return this.commit("destroy", l), a.forEach((f) => f()), n;
  }
  /**
   * Delete records resolved by the query chain.
   */
  delete() {
    const r = this.get(!1);
    if (er(r))
      return [];
    const [n, a] = this.dispatchDeleteHooks(r), o = this.getIndexIdsFromCollection(r).filter((l) => !a.includes(l));
    return this.commit("delete", o), n.forEach((l) => l()), r;
  }
  /**
   * Delete all records in the store.
   */
  flush() {
    return this.commit("flush"), this.hydratedDataCache.clear(), this.get(!1);
  }
  checkAndDeleteRelations(r) {
    const n = r.$fields();
    for (const a in n) {
      const o = n[a];
      if (n[a] instanceof He && o.onDeleteMode && r[a]) {
        const f = (Te(r[a]) ? r[a] : [r[a]]).map((_) => _.$getKey(void 0, !0)), g = {};
        if (o instanceof Cc) {
          this.newQuery(o.pivot.$entity()).where(o.foreignPivotKey, r[r.$getLocalKey()]).delete();
          continue;
        }
        switch (o.onDeleteMode) {
          case "cascade": {
            this.newQueryForRelation(o).destroy(f);
            break;
          }
          case "set null": {
            o.foreignKey && (g[o.foreignKey] = null), o.morphId && (g[o.morphId] = null, g[o.morphType] = null), this.newQueryForRelation(o).whereId(f).update(g);
            break;
          }
        }
      }
    }
  }
  dispatchDeleteHooks(r) {
    const n = [], a = [];
    return r = Te(r) ? r : [r], this.withAll().load(r), r.forEach((o) => {
      o.$self().deleting(o) === !1 ? a.push(o.$getIndexId()) : (this.hydratedDataCache.delete("set" + this.model.$entity() + o.$getIndexId()), this.hydratedDataCache.delete("get" + this.model.$entity() + o.$getIndexId()), n.push(() => o.$self().deleted(o)), this.checkAndDeleteRelations(o));
    }), [n, a];
  }
  /**
   * Get an array of index ids from the given collection.
   */
  getIndexIdsFromCollection(r) {
    return r.map((n) => n.$getIndexId());
  }
  hydrate(r, n) {
    return Te(r) ? r.map((a) => this.hydrate(a, n)) : this.getHydratedModel(r, { relations: !1, ...n || {} });
  }
  /**
   * Convert given models into an indexed object that is ready to be saved to
   * the store.
   */
  compile(r) {
    return (Te(r) ? r : [r]).reduce((a, o) => (a[o.$getIndexId()] = o.$getAttributes(), a), {});
  }
  /**
   * Save already existing models and return them if they exist to prevent
   * an update event trigger in vue if the object is used.
   */
  getHydratedModel(r, n) {
    const a = this.model.$entity() + this.model.$getKey(r, !0), o = (n == null ? void 0 : n.operation) + a;
    let l = this.hydratedDataCache.get(o);
    if ((n == null ? void 0 : n.action) === "update" && (this.hydratedDataCache.delete("get" + a), l = void 0), !this.getNewHydrated && l)
      return l;
    const f = this.model.$types()[r[this.model.$typeKey()]], _ = ((w) => (f ? f.newRawInstance() : this.model).$newInstance(r, { relations: !1, ...n || {}, ...w }))();
    return er(this.eagerLoad) && (n == null ? void 0 : n.operation) !== "set" && this.hydratedDataCache.set(o, _), _;
  }
}
var pc, _t;
class Nc {
  constructor() {
    // @ts-expect-error dont know
    R(this, pc);
    Al(this, _t, /* @__PURE__ */ new Map());
  }
  has(r) {
    var n;
    return !!(xt(this, _t).has(r) && ((n = xt(this, _t).get(r)) != null && n.deref()));
  }
  get(r) {
    const n = xt(this, _t).get(r);
    if (!n)
      return;
    const a = n.deref();
    if (a)
      return a;
    xt(this, _t).delete(r);
  }
  set(r, n) {
    return xt(this, _t).set(r, new WeakRef(n)), this;
  }
  get size() {
    return xt(this, _t).size;
  }
  clear() {
    xt(this, _t).clear();
  }
  delete(r) {
    return xt(this, _t).delete(r), !1;
  }
  forEach(r) {
    for (const [n, a] of this)
      r(a, n, this);
  }
  *[(pc = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [r, n] of xt(this, _t)) {
      const a = n.deref();
      if (!a) {
        xt(this, _t).delete(r);
        continue;
      }
      yield [r, a];
    }
  }
  *entries() {
    for (const [r, n] of this)
      yield [r, n];
  }
  *keys() {
    for (const [r] of this)
      yield r;
  }
  *values() {
    for (const [, r] of this)
      yield r;
  }
}
_t = new WeakMap();
const Av = new Nc(), $v = /* @__PURE__ */ new Map(), xi = {
  model: {
    namespace: "",
    withMeta: !1,
    hidden: ["_meta"],
    visible: ["*"]
  },
  cache: {
    shared: !0,
    provider: Nc
  },
  pinia: {
    storeType: "optionStore"
  }
}, Ht = { ...xi };
class Sa {
  /**
   * Create a new Repository instance.
   */
  constructor(r, n) {
    /**
     * The database instance.
     */
    R(this, "database");
    /**
     * The model instance.
     */
    R(this, "model");
    /**
     * The pinia instance
     */
    R(this, "pinia");
    /**
     * The cache instance
     */
    R(this, "queryCache");
    /**
     * Hydrated models. They are stored to prevent rerendering of child components.
     */
    R(this, "hydratedDataCache");
    /**
     * The model object to be used for the custom repository.
     */
    R(this, "use");
    /**
     * Global config
     */
    R(this, "config");
    return this.config = Ht, this.database = r, this.pinia = n, this.hydratedDataCache = $v, new Proxy(this, {
      get(a, o) {
        if (typeof o != "symbol") {
          if (o in a)
            return a[o];
          if (!(o === "use" || o === "model" || o === "queryCache"))
            return function(...l) {
              return a.query()[o](...l);
            };
        }
      }
    });
  }
  /**
   * Set the model
   */
  static setModel(r) {
    return this.useModel = r, this;
  }
  /**
   * Set the global config
   */
  setConfig(r) {
    this.config = r;
  }
  /**
   * Initialize the repository by setting the model instance.
   */
  initialize(r) {
    return this.config.cache && this.config.cache !== !0 && (this.queryCache = this.config.cache.shared ? Av : new this.config.cache.provider()), r ? (this.model = r.newRawInstance(), this) : this.use || this.$self().useModel ? (this.use = this.use ?? this.$self().useModel, this.model = this.use.newRawInstance(), this) : this;
  }
  /**
   * Get the constructor for this model.
   */
  $self() {
    return this.constructor;
  }
  /**
   * Get the model instance. If the model is not registered to the repository,
   * it will throw an error. It happens when users use a custom repository
   * without setting `use` property.
   */
  getModel() {
    return $r(!!this.model, [
      "The model is not registered. Please define the model to be used at",
      "`use` property of the repository class."
    ]), this.model;
  }
  /**
   * Returns the pinia store used with this model
   */
  piniaStore() {
    return $c(this.model.$storeName(), this.model.$piniaOptions(), this.model.$piniaExtend(), this.query())(this.pinia);
  }
  repo(r) {
    return Pv(r);
  }
  /**
   * Create a new Query instance.
   */
  query() {
    return new Nr(this.database, this.getModel(), this.queryCache, this.hydratedDataCache, this.pinia);
  }
  /**
   * Create a new Query instance.
   */
  cache() {
    return this.queryCache;
  }
  /**
   * Add a basic where clause to the query.
   */
  where(r, n) {
    return this.query().where(r, n);
  }
  /**
   * Add an "or where" clause to the query.
   */
  orWhere(r, n) {
    return this.query().orWhere(r, n);
  }
  /**
   * Add a "where has" clause to the query.
   */
  whereHas(r, n = () => {
  }, a, o) {
    return this.query().whereHas(r, n, a, o);
  }
  /**
   * Add an "or where has" clause to the query.
   */
  orWhereHas(r, n = () => {
  }, a, o) {
    return this.query().orWhereHas(r, n, a, o);
  }
  /**
   * Add a "has" clause to the query.
   */
  has(r, n, a) {
    return this.query().has(r, n, a);
  }
  /**
   * Add an "or has" clause to the query.
   */
  orHas(r, n, a) {
    return this.query().orHas(r, n, a);
  }
  /**
   * Add a "doesn't have" clause to the query.
   */
  doesntHave(r) {
    return this.query().doesntHave(r);
  }
  /**
   * Add a "doesn't have" clause to the query.
   */
  orDoesntHave(r) {
    return this.query().orDoesntHave(r);
  }
  /**
   * Add a "where doesn't have" clause to the query.
   */
  whereDoesntHave(r, n = () => {
  }) {
    return this.query().whereDoesntHave(r, n);
  }
  /**
   * Add an "or where doesn't have" clause to the query.
   */
  orWhereDoesntHave(r, n = () => {
  }) {
    return this.query().orWhereDoesntHave(r, n);
  }
  /**
   * Make meta field visible
   */
  withMeta() {
    return this.query().withMeta();
  }
  /**
   * Make hidden fields visible
   */
  makeVisible(r) {
    return this.query().makeVisible(r);
  }
  /**
   * Make visible fields hidden
   */
  makeHidden(r) {
    return this.query().makeHidden(r);
  }
  /**
   * Add a "group by" clause to the query.
   */
  groupBy(...r) {
    return this.query().groupBy(...r);
  }
  /**
   * Add an "order by" clause to the query.
   */
  orderBy(r, n) {
    return this.query().orderBy(r, n);
  }
  /**
   * Set the "limit" value of the query.
   */
  limit(r) {
    return this.query().limit(r);
  }
  /**
   * Set the "offset" value of the query.
   */
  offset(r) {
    return this.query().offset(r);
  }
  /**
   * Set the relationships that should be eager loaded.
   */
  with(r, n) {
    return this.query().with(r, n);
  }
  /**
   * Set to eager load all top-level relationships. Constraint is set for all relationships.
   */
  withAll(r) {
    return this.query().withAll(r);
  }
  /**
   * Set to eager load all top-level relationships. Constraint is set for all relationships.
   */
  withAllRecursive(r) {
    return this.query().withAllRecursive(r);
  }
  /**
   * Define to use the cache for a query
   */
  useCache(r, n) {
    return this.query().useCache(r, n);
  }
  /**
   * Get all models from the store.
   */
  all() {
    return this.query().get();
  }
  revive(r) {
    return this.query().revive(r);
  }
  make(r) {
    return Te(r) ? r.map((n) => this.getModel().$newInstance(n, {
      relations: !0
    })) : this.getModel().$newInstance(r, {
      relations: !0
    });
  }
  save(r) {
    return this.query().save(r);
  }
  /**
   * Create and persist model with default values.
   */
  new(r = !0) {
    return this.query().new(r);
  }
  insert(r) {
    return this.query().insert(r);
  }
  fresh(r) {
    return this.query().fresh(r);
  }
  destroy(r) {
    return this.query().destroy(r);
  }
  /**
   * Delete all records in the store.
   */
  flush() {
    return this.query().flush();
  }
}
/**
 * A special flag to indicate if this is the repository class or not. It's
 * used when retrieving repository instance from `store.$repo()` method to
 * determine whether the passed in class is either a repository or a model.
 */
R(Sa, "_isRepository", !0), /**
 * The model object to be used for the custom repository.
 */
R(Sa, "useModel");
class Cv {
  constructor() {
    /**
     * The list of registered models.
     */
    R(this, "models", {});
  }
  /**
   * Register the given model.
   */
  register(r) {
    const n = r.$self().modelEntity();
    this.models[n] || (this.models[n] = r, this.registerRelatedModels(r));
  }
  /**
   * Register all related models.
   */
  registerRelatedModels(r) {
    const n = r.$fields();
    for (const a in n) {
      const o = n[a];
      o instanceof He && o.getRelateds().forEach((l) => {
        this.register(l);
      });
    }
  }
  /**
   * Get a model by the specified entity name.
   */
  getModel(r) {
    return this.models[r];
  }
}
const sE = (i) => i, Pc = [];
function Nv(i) {
  let r = Ht;
  return Pc.forEach((n) => {
    const a = n({ config: r, repository: i, model: i.getModel() });
    r = { ...r, ...a.config };
  }), i.setConfig(r), i;
}
function Pv(i, r) {
  const n = new Cv(), a = i._isRepository ? new i(n, r).initialize() : new Sa(n, r).initialize(i);
  try {
    const o = Object.values(a.getModel().$types());
    o.length > 0 ? o.forEach((l) => a.database.register(l.newRawInstance())) : a.database.register(a.getModel());
  } catch (o) {
    console.error("[Pinia ORM] Failed to register models", o);
  }
  return Nv(a);
}
function aE(i) {
  return Ht.model = { ...xi.model, ...i == null ? void 0 : i.model }, Ht.cache = (i == null ? void 0 : i.cache) === !1 ? !1 : { ...xi.cache, ...(i == null ? void 0 : i.cache) !== !0 && (i == null ? void 0 : i.cache) }, Ht.pinia = { ...xi.pinia, ...i == null ? void 0 : i.pinia }, i != null && i.plugins && i.plugins.forEach((r) => Pc.push(r)), () => {
  };
}
class xv extends Wr {
  /**
   * Make the value for the attribute.
   */
  make(r) {
    return r === void 0 ? this.defaultValue : r;
  }
}
let Dv = class extends Wr {
  /**
   * Create a new String attribute instance.
   */
  constructor(r, n) {
    super(r, n);
  }
  /**
   * Make the value for the attribute.
   */
  make(r) {
    return this.makeReturn("string", r);
  }
}, Mv = class extends Wr {
  /**
   * Create a new Number attribute instance.
   */
  constructor(r, n) {
    super(r, n);
  }
  /**
   * Make the value for the attribute.
   */
  make(r) {
    return this.makeReturn("number", r);
  }
};
class Fv extends Wr {
  /**
   * Create a new Boolean attribute instance.
   */
  constructor(r, n) {
    super(r, n);
  }
  /**
   * Make the value for the attribute.
   */
  make(r) {
    return this.makeReturn("boolean", r);
  }
}
class Dl extends He {
  /**
   * Create a new has-one relation instance.
   */
  constructor(n, a, o, l) {
    super(n, a);
    /**
     * The foreign key of the parent model.
     */
    R(this, "foreignKey");
    /**
     * The local key of the parent model.
     */
    R(this, "localKey");
    this.foreignKey = o, this.localKey = l;
  }
  /**
   * Get all related models for the relationship.
   */
  getRelateds() {
    return [this.related];
  }
  /**
   * Define the normalizr schema for the relation.
   */
  define(n) {
    return n.one(this.related, this.parent);
  }
  /**
   * Attach the relational key to the given relation.
   */
  attach(n, a) {
    this.compositeKeyMapper(
      this.foreignKey,
      this.localKey,
      (o, l) => {
        a[o] = n[l];
      }
    );
  }
  /**
   * Set the constraints for an eager load of the relation.
   */
  addEagerConstraints(n, a) {
    this.compositeKeyMapper(
      this.foreignKey,
      this.localKey,
      (o, l) => n.whereIn(o, this.getKeys(a, l))
    );
  }
  /**
   * Match the eagerly loaded results to their parents.
   */
  match(n, a, o) {
    const l = this.buildDictionary(o.get(!1));
    a.forEach((f) => {
      const g = this.getResolvedKey(f, this.localKey);
      l[g] ? f.$setRelation(n, l[g][0]) : f.$setRelation(n, null);
    });
  }
  /**
   * Build model dictionary keyed by the relation's foreign key.
   */
  buildDictionary(n) {
    return this.mapToDictionary(n, (a) => [this.getResolvedKey(a, this.foreignKey), a]);
  }
  /**
   * Make a related model.
   */
  make(n) {
    return n ? this.related.$newInstance(n) : null;
  }
}
class kv extends He {
  /**
   * Create a new belongs-to relation instance.
   */
  constructor(n, a, o, l) {
    super(n, a);
    /**
     * The child model instance of the relation.
     */
    R(this, "child");
    /**
     * The foreign key of the parent model.
     */
    R(this, "foreignKey");
    /**
     * The associated key on the parent model.
     */
    R(this, "ownerKey");
    this.foreignKey = o, this.ownerKey = l, this.child = a;
  }
  /**
   * Get all related models for the relationship.
   */
  getRelateds() {
    return [this.child];
  }
  /**
   * Define the normalizr schema for the relation.
   */
  define(n) {
    return n.one(this.child, this.parent);
  }
  /**
   * Attach the relational key to the given relation.
   */
  attach(n, a) {
    this.compositeKeyMapper(
      this.foreignKey,
      this.ownerKey,
      (o, l) => {
        n[o] = a[l];
      }
    );
  }
  /**
   * Set the constraints for an eager load of the relation.
   */
  addEagerConstraints(n, a) {
    this.compositeKeyMapper(
      this.foreignKey,
      this.ownerKey,
      (o, l) => n.whereIn(l, this.getEagerModelKeys(a, o))
    );
  }
  /**
   * Gather the keys from a collection of related models.
   */
  getEagerModelKeys(n, a) {
    return n.reduce((o, l) => (l[a] !== null && o.push(l[a]), o), []);
  }
  /**
   * Match the eagerly loaded results to their respective parents.
   */
  match(n, a, o) {
    const l = this.buildDictionary(o.get(!1));
    a.forEach((f) => {
      const g = this.getResolvedKey(f, this.foreignKey);
      l[g] ? f.$setRelation(n, l[g]) : f.$setRelation(n, null);
    });
  }
  /**
   * Build model dictionary keyed by relation's parent key.
   */
  buildDictionary(n) {
    return n.reduce((a, o) => (a[this.getResolvedKey(o, this.ownerKey)] = o, a), {});
  }
  /**
   * Make a related model.
   */
  make(n) {
    return n ? this.child.$newInstance(n) : null;
  }
}
class Kv extends He {
  /**
   * Create a new has-many relation instance.
   */
  constructor(n, a, o, l) {
    super(n, a);
    /**
     * The foreign key of the parent model.
     */
    R(this, "foreignKey");
    /**
     * The local key of the parent model.
     */
    R(this, "localKey");
    this.foreignKey = o, this.localKey = l;
  }
  /**
   * Get all related models for the relationship.
   */
  getRelateds() {
    return [this.related];
  }
  /**
   * Define the normalizr schema for the relation.
   */
  define(n) {
    return n.many(this.related, this.parent);
  }
  /**
   * Attach the relational key to the given relation.
   */
  attach(n, a) {
    this.compositeKeyMapper(
      this.foreignKey,
      this.localKey,
      (o, l) => {
        a[o] = n[l];
      }
    );
  }
  /**
   * Set the constraints for an eager load of the relation.
   */
  addEagerConstraints(n, a) {
    this.compositeKeyMapper(
      this.foreignKey,
      this.localKey,
      (o, l) => n.whereIn(o, this.getKeys(a, l))
    );
  }
  /**
   * Match the eagerly loaded results to their parents.
   */
  match(n, a, o) {
    const l = this.buildDictionary(o.get(!1));
    a.forEach((f) => {
      const g = this.getResolvedKey(f, this.localKey);
      l[g] ? f.$setRelation(n, l[g]) : f.$setRelation(n, []);
    });
  }
  /**
   * Build model dictionary keyed by the relation's foreign key.
   */
  buildDictionary(n) {
    return this.mapToDictionary(n, (a) => [this.getResolvedKey(a, this.foreignKey), a]);
  }
  /**
   * Make related models.
   */
  make(n) {
    return n ? n.map((a) => this.related.$newInstance(a)) : [];
  }
}
class Wv extends He {
  /**
   * Create a new has-many-by relation instance.
   */
  constructor(n, a, o, l) {
    super(n, a);
    /**
     * The child model instance of the relation.
     */
    R(this, "child");
    /**
     * The foreign key of the parent model.
     */
    R(this, "foreignKey");
    /**
     * The owner key of the parent model.
     */
    R(this, "ownerKey");
    this.foreignKey = o, this.ownerKey = l, this.child = a;
  }
  /**
   * Get all related models for the relationship.
   */
  getRelateds() {
    return [this.child];
  }
  /**
   * Define the normalizr schema for the relation.
   */
  define(n) {
    return n.many(this.child, this.parent);
  }
  /**
   * Attach the relational key to the given relation.
   */
  attach(n, a) {
    a[this.ownerKey] !== void 0 && (n[this.foreignKey] || (n[this.foreignKey] = []), this.attachIfMissing(n[this.foreignKey], a[this.ownerKey]));
  }
  /**
   * Push owner key to foregin key array if owner key doesn't exist in foreign
   * key array.
   */
  attachIfMissing(n, a) {
    n.includes(a) || n.push(a);
  }
  /**
   * Set the constraints for an eager load of the relation.
   */
  addEagerConstraints(n, a) {
    n.whereIn(this.ownerKey, this.getEagerModelKeys(a));
  }
  /**
   * Gather the keys from a collection of related models.
   */
  getEagerModelKeys(n) {
    return n.reduce((a, o) => [...a, ...o[this.foreignKey]], []);
  }
  /**
   * Match the eagerly loaded results to their parents.
   */
  match(n, a, o) {
    const l = this.buildDictionary(o.get(!1));
    a.forEach((f) => {
      const g = this.getRelatedModels(
        l,
        f[this.foreignKey]
      );
      f.$setRelation(n, g);
    });
  }
  /**
   * Build model dictionary keyed by the relation's foreign key.
   */
  buildDictionary(n) {
    return n.reduce((a, o) => (a[o[this.ownerKey]] = o, a), {});
  }
  /**
   * Get all related models from the given dictionary.
   */
  getRelatedModels(n, a) {
    return a.reduce((o, l) => {
      const f = n[l];
      return f && o.push(f), o;
    }, []);
  }
  /**
   * Make related models.
   */
  make(n) {
    return n ? n.map((a) => this.child.$newInstance(a)) : [];
  }
}
class ga extends He {
  /**
   * Create a new morph-one relation instance.
   */
  constructor(n, a, o, l, f) {
    super(n, a);
    /**
     * The field name that contains id of the parent model.
     */
    R(this, "morphId");
    /**
     * The field name that contains type of the parent model.
     */
    R(this, "morphType");
    /**
     * The local key of the model.
     */
    R(this, "localKey");
    this.morphId = o, this.morphType = l, this.localKey = f;
  }
  /**
   * Get all related models for the relationship.
   */
  getRelateds() {
    return [this.related];
  }
  /**
   * Define the normalizr schema for the relation.
   */
  define(n) {
    return n.one(this.related, this.parent);
  }
  /**
   * Attach the parent type and id to the given relation.
   */
  attach(n, a) {
    a[this.morphId] = n[this.localKey], a[this.morphType] = this.parent.$entity();
  }
  /**
   * Set the constraints for an eager load of the relation.
   */
  addEagerConstraints(n, a) {
    n.where(this.morphType, this.parent.$entity()).whereIn(this.morphId, this.getKeys(a, this.localKey));
  }
  /**
   * Match the eagerly loaded results to their parents.
   */
  match(n, a, o) {
    const l = this.buildDictionary(o.get(!1));
    a.forEach((f) => {
      const g = f[this.localKey];
      l[g] ? f.$setRelation(n, l[g]) : f.$setRelation(n, null);
    });
  }
  /**
   * Build model dictionary keyed by the relation's foreign key.
   */
  buildDictionary(n) {
    return n.reduce((a, o) => (a[o[this.morphId]] = o, a), {});
  }
  /**
   * Make a related model.
   */
  make(n) {
    return n ? this.related.$newInstance(n) : null;
  }
}
class Uv extends He {
  /**
   * Create a new morph-many relation instance.
   */
  constructor(n, a, o, l, f) {
    super(n, a);
    /**
     * The field name that contains id of the parent model.
     */
    R(this, "morphId");
    /**
     * The field name that contains type of the parent model.
     */
    R(this, "morphType");
    /**
     * The local key of the model.
     */
    R(this, "localKey");
    this.morphId = o, this.morphType = l, this.localKey = f;
  }
  /**
   * Get all related models for the relationship.
   */
  getRelateds() {
    return [this.related];
  }
  /**
   * Define the normalizr schema for the relation.
   */
  define(n) {
    return n.many(this.related, this.parent);
  }
  /**
   * Attach the parent type and id to the given relation.
   */
  attach(n, a) {
    a[this.morphId] = n[this.localKey], a[this.morphType] = this.parent.$entity();
  }
  /**
   * Set the constraints for an eager load of the relation.
   */
  addEagerConstraints(n, a) {
    n.where(this.morphType, this.parent.$entity()), n.whereIn(this.morphId, this.getKeys(a, this.localKey));
  }
  /**
   * Match the eagerly loaded results to their parents.
   */
  match(n, a, o) {
    const l = this.buildDictionary(o.get(!1));
    a.forEach((f) => {
      const g = f[this.localKey];
      l[g] ? f.$setRelation(n, l[g]) : f.$setRelation(n, []);
    });
  }
  /**
   * Build model dictionary keyed by the relation's foreign key.
   */
  buildDictionary(n) {
    return this.mapToDictionary(n, (a) => [a[this.morphId], a]);
  }
  /**
   * Make related models.
   */
  make(n) {
    return n ? n.map((a) => this.related.$newInstance(a)) : [];
  }
}
class Hv extends He {
  /**
   * Create a new has-many-through relation instance.
   */
  constructor(n, a, o, l, f, g, _) {
    super(n, a);
    /**
     * The "through" parent model.
     */
    R(this, "through");
    /**
     * The near key on the relationship.
     */
    R(this, "firstKey");
    /**
     * The far key on the relationship.
     */
    R(this, "secondKey");
    /**
     * The local key on the relationship.
     */
    R(this, "localKey");
    /**
     * The local key on the intermediary model.
     */
    R(this, "secondLocalKey");
    this.through = o, this.firstKey = l, this.secondKey = f, this.localKey = g, this.secondLocalKey = _;
  }
  /**
   * Get all related models for the relationship.
   */
  getRelateds() {
    return [this.related, this.through];
  }
  /**
   * Define the normalizr schema for the relation.
   */
  define(n) {
    return n.many(this.related, this.parent);
  }
  /**
   * Attach the relational key to the given data. Since has many through
   * relationship doesn't have any foreign key, it would do nothing.
   */
  attach(n, a) {
  }
  /**
   * Only register missing through relation
   */
  addEagerConstraints(n, a) {
  }
  /**
   * Match the eagerly loaded results to their parents.
   */
  match(n, a, o) {
    const l = o.newQuery(this.through.$entity()).where(this.firstKey, this.getKeys(a, this.localKey)).get(!1), f = o.where(this.secondKey, this.getKeys(l, this.secondLocalKey)).groupBy(this.secondKey).get(!1), g = this.buildDictionary(l, f);
    a.forEach((_) => {
      const w = _[this.localKey];
      g[w] ? _.$setRelation(n, g[w][0]) : _.$setRelation(n, []);
    });
  }
  /**
   * Build model dictionary keyed by the relation's foreign key.
   */
  buildDictionary(n, a) {
    return this.mapToDictionary(n, (o) => [o[this.firstKey], a[o[this.secondLocalKey]]]);
  }
  /**
   * Make related models.
   */
  make(n) {
    return n ? n.map((a) => this.related.$newInstance(a)) : [];
  }
}
class Bv extends He {
  /**
   * Create a new morph to many to instance.
   */
  constructor(n, a, o, l, f, g, _, w) {
    super(n, a);
    /**
     * The pivot model.
     */
    R(this, "pivot");
    /**
     * The field name that contains id of the parent model.
     */
    R(this, "morphId");
    /**
     * The field name that contains type of the parent model.
     */
    R(this, "morphType");
    /**
     * The associated key of the relation.
     */
    R(this, "relatedId");
    /**
     * The key name of the parent model.
     */
    R(this, "parentKey");
    /**
     * The key name of the related model.
     */
    R(this, "relatedKey");
    /**
     * The key name of the pivot data.
     */
    R(this, "pivotKey", "pivot");
    this.pivot = o, this.morphId = f, this.morphType = g, this.relatedId = l, this.parentKey = _, this.relatedKey = w;
  }
  /**
   * Get all related models for the relationship.
   */
  getRelateds() {
    return [this.related, this.pivot];
  }
  /**
   * Define the normalizr schema for the relationship.
   */
  define(n) {
    return n.many(this.related, this.parent);
  }
  /**
   * Attach the parent type and id to the given relation.
   */
  attach(n, a) {
    const o = a[this.pivotKey] ?? {};
    o[this.morphId] = n[this.parentKey], o[this.morphType] = this.parent.$entity(), o[this.relatedId] = a[this.relatedKey], a[`pivot_${this.relatedId}_${this.pivot.$entity()}`] = o;
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(n) {
    return n ? n.map((a) => this.related.$newInstance(a)) : [];
  }
  /**
   * Match the eagerly loaded results to their parents.
   */
  match(n, a, o) {
    const l = o.get(!1), f = o.newQuery(this.pivot.$modelEntity()).whereIn(this.relatedId, this.getKeys(l, this.relatedKey)).whereIn(this.morphId, this.getKeys(a, this.parentKey)).groupBy(this.morphId, this.relatedId, this.morphType).get();
    a.forEach((g) => {
      const _ = [];
      l.forEach((w) => {
        var P;
        const T = ((P = f[`[${g[this.parentKey]},${w[this.relatedKey]},${this.parent.$entity()}]`]) == null ? void 0 : P[0]) ?? null;
        if (!T)
          return;
        const O = w.$newInstance(w.$toJson(), { operation: void 0 });
        delete O[`pivot_${this.relatedId}_${this.pivot.$entity()}`], O.$setRelation(this.pivotKey, T, !0), _.push(O);
      }), g.$setRelation(n, _);
    });
  }
  /**
   * Set the constraints for the related relation.
   */
  addEagerConstraints(n, a) {
  }
  /**
   * Specify the custom pivot accessor to use for the relationship.
   */
  as(n) {
    return this.pivotKey = n, this;
  }
}
class Gv extends He {
  /**
   * Create a new morph to many to instance.
   */
  constructor(n, a, o, l, f, g, _, w) {
    super(n, a);
    /**
     * The pivot model.
     */
    R(this, "pivot");
    /**
     * The field name that contains id of the parent model.
     */
    R(this, "morphId");
    /**
     * The field name that contains type of the parent model.
     */
    R(this, "morphType");
    /**
     * The associated key of the relation.
     */
    R(this, "relatedId");
    /**
     * The key name of the parent model.
     */
    R(this, "parentKey");
    /**
     * The key name of the related model.
     */
    R(this, "relatedKey");
    /**
     * The key name of the pivot data.
     */
    R(this, "pivotKey", "pivot");
    this.pivot = o, this.morphId = f, this.morphType = g, this.relatedId = l, this.parentKey = _, this.relatedKey = w;
  }
  /**
   * Get all related models for the relationship.
   */
  getRelateds() {
    return [this.related, this.pivot];
  }
  /**
   * Define the normalizr schema for the relationship.
   */
  define(n) {
    return n.many(this.related, this.parent);
  }
  /**
   * Attach the parent type and id to the given relation.
   */
  attach(n, a) {
    const o = n[this.pivotKey] ?? {};
    o[this.morphId] = a[this.relatedKey], o[this.morphType] = this.related.$entity(), o[this.relatedId] = n[this.parentKey], a[`pivot_${this.relatedId}_${this.pivot.$entity()}`] = o;
  }
  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make(n) {
    return n ? n.map((a) => this.related.$newInstance(a)) : [];
  }
  /**
   * Match the eagerly loaded results to their parents.
   */
  match(n, a, o) {
    const l = o.get(!1), f = o.newQuery(this.pivot.$modelEntity()).whereIn(this.relatedId, this.getKeys(a, this.parentKey)).whereIn(this.morphId, this.getKeys(l, this.relatedKey)).groupBy(this.relatedId, this.morphType).get();
    a.forEach((g) => {
      var O;
      const _ = this.getKeys(f[`[${g[this.parentKey]},${this.related.$entity()}]`] ?? [], this.morphId), w = l.filter((P) => _.includes(P[this.relatedKey])), T = ((O = f[`[${g[this.parentKey]},${this.related.$entity()}]`] ?? []) == null ? void 0 : O[0]) ?? null;
      T && g.$setRelation(this.pivotKey, T, !0), g.$setRelation(n, w);
    });
  }
  /**
   * Set the constraints for the related relation.
   */
  addEagerConstraints(n, a) {
  }
  /**
   * Specify the custom pivot accessor to use for the relationship.
   */
  as(n) {
    return this.pivotKey = n, this;
  }
}
var pe;
let Vv = (pe = class {
  /**
   * Create a new model instance.
   */
  constructor(r, n = { operation: "set" }) {
    this.$boot(), (n.fill ?? !0) && this.$fill(r, n);
  }
  /**
   * Create a new model fields definition.
   */
  static fields() {
    return {};
  }
  static usedNamespace() {
    return this.namespace ?? Ht.model.namespace;
  }
  static modelEntity() {
    return (this.usedNamespace() ? this.usedNamespace() + "/" : "") + this.entity;
  }
  /**
   * Build the schema by evaluating fields and registry.
   */
  static initializeSchema() {
    const r = this.modelEntity();
    this.schemas[r] = {}, this.fieldsOnDelete[r] = this.fieldsOnDelete[r] ?? {};
    const n = {
      ...this.fields(),
      ...this.registries[r]
    };
    for (const a in n) {
      const o = n[a];
      this.schemas[r][a] = typeof o == "function" ? o() : o, this.fieldsOnDelete[r][a] && (this.schemas[r][a] = this.schemas[r][a].onDelete(this.fieldsOnDelete[r][a]));
    }
  }
  /**
   * Set the attribute to the registry.
   */
  static setRegistry(r, n) {
    return this.registries[this.modelEntity()] || (this.registries[this.modelEntity()] = {}), this.registries[this.modelEntity()][r] = n, this;
  }
  /**
   * Set delete behaviour for relation field
   */
  static setFieldDeleteMode(r, n) {
    return this.fieldsOnDelete[this.modelEntity()] = this.fieldsOnDelete[this.modelEntity()] ?? {}, this.fieldsOnDelete[this.modelEntity()][r] = n, this;
  }
  /**
   * Set an mutator for a field
   */
  static setMutator(r, n) {
    return this.fieldMutators[r] = n, this;
  }
  /**
   * Set a cast for a field
   */
  static setCast(r, n) {
    return this.fieldCasts[r] = n, this;
  }
  /**
   * Set a field to hidden
   */
  static setHidden(r) {
    return this.hidden.push(r), this;
  }
  /**
   * Clear the list of booted models so they can be re-booted.
   */
  static clearBootedModels() {
    this.booted = {}, this.original = {}, this.schemas = {}, this.fieldMutators = {}, this.fieldCasts = {}, this.hidden = [], this.visible = [];
  }
  /**
   * Clear registries.
   */
  static clearRegistries() {
    this.registries = {};
  }
  /**
   * Create a new model instance without field values being populated.
   *
   * This method is mainly for the internal use when registering models to the
   * database. Since all pre-registered models are for referencing its model
   * setting during the various process, but the fields are not required.
   *
   * Use this method when you want create a new model instance for:
   * - Registering model to a component (eg. Repository, Query, etc.)
   * - Registering model to attributes (String, Has Many, etc.)
   */
  static newRawInstance() {
    return new this(void 0, { fill: !1 });
  }
  /**
   * Create a new Attr attribute instance.
   */
  static attr(r) {
    return new xv(this.newRawInstance(), r);
  }
  /**
   * Create a new String attribute instance.
   */
  static string(r) {
    return new Dv(this.newRawInstance(), r);
  }
  /**
   * Create a new Number attribute instance.
   */
  static number(r) {
    return new Mv(this.newRawInstance(), r);
  }
  /**
   * Create a new Boolean attribute instance.
   */
  static boolean(r) {
    return new Fv(this.newRawInstance(), r);
  }
  /**
   * Create a new Uid attribute instance.
   */
  static uid(r) {
    return new Ac(this.newRawInstance(), r);
  }
  /**
   * Create a new HasOne relation instance.
   */
  static hasOne(r, n, a) {
    const o = this.newRawInstance();
    return a = a ?? o.$getKeyName(), new Dl(o, r.newRawInstance(), n, a);
  }
  /**
   * Create a new BelongsTo relation instance.
   */
  static belongsTo(r, n, a) {
    const o = r.newRawInstance();
    return a = a ?? o.$getKeyName(), new kv(this.newRawInstance(), o, n, a);
  }
  /**
   * Create a new HasMany relation instance.
   */
  static belongsToMany(r, n, a, o, l, f) {
    const g = r.newRawInstance(), _ = this.newRawInstance(), w = n.newRawInstance();
    return l = l ?? _.$getLocalKey(), f = f ?? g.$getLocalKey(), this.schemas[r.modelEntity()][`pivot_${o}_${w.$entity()}`] = new Dl(g, w, o, f), new Cc(
      _,
      g,
      w,
      a,
      o,
      l,
      f
    );
  }
  /**
   * Create a new MorphToMany relation instance.
   */
  static morphToMany(r, n, a, o, l, f, g) {
    const _ = r.newRawInstance(), w = this.newRawInstance(), T = n.newRawInstance();
    return f = f ?? w.$getLocalKey(), g = g ?? _.$getLocalKey(), this.schemas[r.modelEntity()][`pivot_${a}_${T.$entity()}`] = new ga(_, T, a, w.$entity(), g), new Bv(
      w,
      _,
      T,
      a,
      o,
      l,
      f,
      g
    );
  }
  /**
   * Create a new MorphedByMany relation instance.
   */
  static morphedByMany(r, n, a, o, l, f, g) {
    const _ = r.newRawInstance(), w = this.newRawInstance(), T = n.newRawInstance();
    return f = f ?? w.$getLocalKey(), g = g ?? _.$getLocalKey(), this.schemas[r.modelEntity()][`pivot_${a}_${T.$entity()}`] = new ga(w, T, o, l, g), new Gv(
      w,
      _,
      T,
      a,
      o,
      l,
      f,
      g
    );
  }
  /**
   * Create a new HasMany relation instance.
   */
  static hasMany(r, n, a) {
    const o = this.newRawInstance();
    return a = a ?? o.$getKeyName(), new Kv(o, r.newRawInstance(), n, a);
  }
  /**
   * Create a new HasManyBy relation instance.
   */
  static hasManyBy(r, n, a) {
    const o = r.newRawInstance();
    return a = a ?? o.$getLocalKey(), new Wv(this.newRawInstance(), o, n, a);
  }
  /**
   * Create a new HasMany relation instance.
   */
  static hasManyThrough(r, n, a, o, l, f) {
    const g = this.newRawInstance(), _ = n.newRawInstance();
    return l = l ?? g.$getLocalKey(), f = f ?? _.$getLocalKey(), new Hv(g, r.newRawInstance(), _, a, o, l, f);
  }
  /**
   * Create a new MorphOne relation instance.
   */
  static morphOne(r, n, a, o) {
    const l = this.newRawInstance();
    return o = o ?? l.$getLocalKey(), new ga(l, r.newRawInstance(), n, a, o);
  }
  /**
   * Create a new MorphTo relation instance.
   */
  static morphTo(r, n, a, o = "") {
    const l = this.newRawInstance(), f = r.map((g) => g.newRawInstance());
    return new Ra(l, f, n, a, o);
  }
  /**
   * Create a new MorphMany relation instance.
   */
  static morphMany(r, n, a, o) {
    const l = this.newRawInstance();
    return o = o ?? l.$getLocalKey(), new Uv(l, r.newRawInstance(), n, a, o);
  }
  /**
   * Mutators to mutate matching fields when instantiating the model.
   */
  static mutators() {
    return {};
  }
  /**
   * Casts to cast matching fields when instantiating the model.
   */
  static casts() {
    return {};
  }
  /**
   * Types mapping used to dispatch entities based on their discriminator field
   */
  static types() {
    return {};
  }
  /**
   * Get the constructor for this model.
   */
  $self() {
    return this.constructor;
  }
  /**
   * Get the entity for this model.
   */
  $entity() {
    return this.$self().entity;
  }
  /**
   * Get the model config.
   */
  $config() {
    return this.$self().config;
  }
  /**
   * Get the namespace.
   */
  $namespace() {
    return this.$self().usedNamespace();
  }
  /**
   * Get the store name.
   */
  $storeName() {
    return (this.$namespace() ? this.$namespace() + "/" : "") + this.$baseEntity();
  }
  /**
   * Get the base entity for this model.
   */
  $baseEntity() {
    return this.$self().baseEntity ?? this.$entity();
  }
  /**
   * Get the base namespace for this model.
   */
  $baseNamespace() {
    return this.$self().baseNamespace ?? this.$namespace();
  }
  /**
   * Get the model entity for this model.
   */
  $modelEntity() {
    return this.$self().modelEntity();
  }
  /**
   * Get the type key for this model.
   */
  $typeKey() {
    return this.$self().typeKey;
  }
  /**
   * Get the types for this model.
   */
  $types() {
    return this.$self().types();
  }
  /**
   * Get the pinia options for this model.
   */
  $piniaOptions() {
    return this.$self().piniaOptions;
  }
  /**
   * Get the extended functionality.
   */
  $piniaExtend() {
    return this.$self().piniaExtend;
  }
  /**
   * Get the primary key for this model.
   */
  $primaryKey() {
    return this.$self().primaryKey;
  }
  /**
   * Get the model fields for this model.
   */
  $fields() {
    return this.$self().schemas[this.$modelEntity()];
  }
  /**
   * Get the model hidden fields
   */
  $hidden() {
    return this.$self().hidden;
  }
  /**
   * Get the model visible fields
   */
  $visible() {
    return this.$self().visible;
  }
  /**
   * Create a new instance of this model. This method provides a convenient way
   * to re-generate a fresh instance of this model. It's particularly useful
   * during hydration through Query operations.
   */
  $newInstance(r, n) {
    const a = this.$self();
    return new a(r, n);
  }
  /**
   * Bootstrap this model.
   */
  $boot() {
    this.$self().booted[this.$modelEntity()] || (this.$self().booted[this.$modelEntity()] = !0, this.$initializeSchema());
  }
  /**
   * Build the schema by evaluating fields and registry.
   */
  $initializeSchema() {
    this.$self().initializeSchema();
  }
  $casts() {
    return {
      ...this.$getCasts(),
      ...this.$self().fieldCasts
    };
  }
  /**
   * Fill this model by the given attributes. Missing fields will be populated
   * by the attributes default value.
   */
  $fill(r = {}, n = {}) {
    var _, w, T;
    const a = n.operation ?? "get", o = {
      ...Ht.model,
      ...this.$config()
    };
    o.withMeta && (this.$self().schemas[this.$entity()][this.$self().metaKey] = this.$self().attr({}));
    const l = this.$fields(), f = n.relations ?? !0, g = {
      ...this.$getMutators(),
      ...this.$self().fieldMutators
    };
    for (const O in l) {
      if (a === "get" && !this.isFieldVisible(O, this.$hidden(), this.$visible(), n))
        continue;
      const P = l[O];
      let U = r[O];
      if (P instanceof He && !f)
        continue;
      const Y = g == null ? void 0 : g[O], G = (_ = this.$casts()[O]) == null ? void 0 : _.newRawInstance(l);
      Y && a === "get" && (U = typeof Y == "function" ? Y(U) : typeof Y.get == "function" ? Y.get(U) : U), G && a === "get" && (U = G.get(U));
      let H = this.$fillField(O, P, U);
      Y && typeof Y != "function" && a === "set" && Y.set && (H = Y.set(H)), G && a === "set" && (H = n.action === "update" ? G.get(H) : G.set(H)), this[O] = this[O] ?? H;
    }
    return a === "set" && (((w = this.$self().original)[T = this.$modelEntity()] ?? (w[T] = {}))[this.$getKey(this, !0)] = this.$getAttributes()), o.withMeta && a === "set" && this.$fillMeta(n.action), this;
  }
  $fillMeta(r = "save") {
    const n = Math.floor(Date.now() / 1e3);
    r === "save" && (this[this.$self().metaKey] = {
      createdAt: n,
      updatedAt: n
    }), r === "update" && (this[this.$self().metaKey].updatedAt = n);
  }
  /**
   * Fill the given attribute with a given value specified by the given key.
   */
  $fillField(r, n, a) {
    if (a !== void 0)
      return n instanceof Ra ? n.setKey(r).make(a, this[n.getType()]) : n.setKey(r).make(a);
    if (this[r] === void 0)
      return n.setKey(r).make();
  }
  isFieldVisible(r, n, a, o) {
    const l = n.length > 0 ? n : Ht.model.hidden, f = [...a.length > 0 ? a : Ht.model.visible, String(this.$primaryKey())], g = o.visible ?? [], _ = o.hidden ?? [];
    return (l.includes("*") || l.includes(r)) && !g.includes(r) || _.includes(r) ? !1 : (f.includes("*") || f.includes(r)) && !_.includes(r) || g.includes(r);
  }
  /**
   * Get the primary key field name.
   */
  $getKeyName() {
    return this.$primaryKey();
  }
  /**
   * Get primary key value for the model. If the model has the composite key,
   * it will return an array of ids.
   */
  $getKey(r, n = !1) {
    if (r = r ?? this, this.$hasCompositeKey()) {
      const o = this.$getCompositeKey(r);
      return n ? "[" + (o == null ? void 0 : o.join(",")) + "]" : o;
    }
    const a = r[this.$getKeyName()];
    return va(a) ? null : a;
  }
  /**
   * Check whether the model has composite key.
   */
  $hasCompositeKey() {
    return Te(this.$getKeyName());
  }
  /**
   * Get the composite key values for the given model as an array of ids.
   */
  $getCompositeKey(r) {
    let n = [];
    return this.$getKeyName().every((a) => {
      const o = r[a];
      return va(o) ? (n = null, !1) : (n.push(o), !0);
    }), n === null ? null : n;
  }
  /**
   * Get the index id of this model or for a given record.
   */
  $getIndexId(r) {
    const n = r ?? this, a = this.$getKey(n);
    return $r(a !== null, [
      "The record is missing the primary key. If you want to persist record",
      "without the primary key, please define the primary key field with the",
      "`uid` attribute."
    ]), this.$stringifyId(a);
  }
  /**
   * Stringify the given id.
   */
  $stringifyId(r) {
    return Te(r) ? JSON.stringify(r) : String(r);
  }
  /**
   * Get the local key name for the model.
   */
  $getLocalKey() {
    return $r(!this.$hasCompositeKey(), [
      "Please provide the local key for the relationship. The model with the",
      "composite key can't infer its local key."
    ]), this.$getKeyName();
  }
  /**
   * Get the relation instance for the given relation name.
   */
  $getRelation(r) {
    let n = this.$fields()[r];
    return Object.values(this.$types()).forEach((o) => {
      n === void 0 && (n = o.fields()[r]);
    }), $r(n instanceof He, [
      `Relationship [${r}] on model [${this.$entity()}] not found.`
    ]), n;
  }
  /**
   * Set the given relationship on the model.
   */
  $setRelation(r, n, a = !1) {
    return (this.$fields()[r] || a) && (this[r] = n), this;
  }
  /**
   * Get the mutators of the model
   */
  $getMutators() {
    return this.$self().mutators();
  }
  /**
   * Get the casts of the model
   */
  $getCasts() {
    return this.$self().casts();
  }
  /**
   * Get the original values of the model instance
   */
  $getOriginal() {
    var r, n;
    return ((r = this.$self().original)[n = this.$modelEntity()] ?? (r[n] = {}))[this.$getKey(this, !0)];
  }
  /**
   * Return the model instance with its original state
   */
  $refresh() {
    return this.$isDirty() && Object.entries(this.$getOriginal()).forEach((r) => {
      this[r[0]] = r[1];
    }), this;
  }
  /**
   * Checks if attributes were changed
   */
  $isDirty(r) {
    const n = this.$getOriginal();
    return r ? (Object.keys(n).includes(r) || Ui(['The property"', r, '"does not exit in the model "', this.$entity(), '"']), !Ea(this[r], n[r])) : !Ea(n, this.$getAttributes());
  }
  /**
   * Get the serialized model attributes.
   */
  $getAttributes() {
    return this.$toJson(this, { relations: !1 });
  }
  /**
   * Serialize this model, or the given model, as POJO.
   */
  $toJson(r, n = {}) {
    r = r ?? this;
    const a = r.$fields(), o = n.relations ?? !0, l = {};
    for (const f in a) {
      const g = a[f], _ = r[f];
      if (!(g instanceof He)) {
        l[f] = this.serializeValue(_);
        continue;
      }
      o && (l[f] = this.serializeRelation(_));
    }
    return l;
  }
  /**
   * Serialize the given value.
   */
  serializeValue(r) {
    return r === null ? null : Te(r) ? this.serializeArray(r) : typeof r == "object" ? wa(r) ? r.toISOString() : this.serializeObject(r) : r;
  }
  /**
   * Serialize the given array to JSON.
   */
  serializeArray(r) {
    return r.map((n) => this.serializeValue(n));
  }
  /**
   * Serialize the given object to JSON.
   */
  serializeObject(r) {
    const n = {};
    if (r.serialize && typeof r.serialize == "function")
      return r.serialize(r);
    for (const a in r)
      n[a] = this.serializeValue(r[a]);
    return n;
  }
  serializeRelation(r) {
    if (r !== void 0)
      return r === null ? null : Te(r) ? r.map((n) => n.$toJson()) : r.$toJson();
  }
}, /**
 * The name of the model.
 */
R(pe, "entity"), /**
 * The reference to the base entity name if the class extends a base entity.
 */
R(pe, "baseEntity"), /**
 * The reference to the base namespace if the class extends a base with a different namespace.
 */
R(pe, "baseNamespace"), /**
 * Define a namespace if you have multiple equal entity names.
 * Resulting in "{namespace}/{entity}"
 */
R(pe, "namespace"), /**
 * The primary key for the model.
 */
R(pe, "primaryKey", "id"), /**
 * The meta key for the model.
 */
R(pe, "metaKey", "_meta"), /**
 * Hidden properties
 */
R(pe, "hidden", ["_meta"]), /**
 * Visible properties
 */
R(pe, "visible", []), /**
 * The global install options
 */
R(pe, "config"), /**
 * The type key for the model.
 */
R(pe, "typeKey", "type"), /**
 * Behaviour for relational fields on delete.
 */
R(pe, "fieldsOnDelete", {}), /**
 * Original model data.
 */
R(pe, "original", {}), /**
 * The schema for the model. It contains the result of the `fields`
 * method or the attributes defined by decorators.
 */
R(pe, "schemas", {}), /**
 * The registry for the model. It contains predefined model schema generated
 * by the property decorators and gets evaluated, and stored, on the `schema`
 * property when registering models to the database.
 */
R(pe, "registries", {}), /**
 * The pinia options for the model. It can contain options which will passed
 * to the 'defineStore' function of pinia.
 */
R(pe, "piniaOptions", {}), R(pe, "piniaExtend", {}), /**
 * The mutators for the model.
 */
R(pe, "fieldMutators", {}), /**
 * The casts for the model.
 */
R(pe, "fieldCasts", {}), /**
 * The array of booted models.
 */
R(pe, "booted", {}), /**
 * Lifecycle hook for before saving
 */
R(pe, "saving", () => {
}), /**
 * Lifecycle hook for before updating
 */
R(pe, "updating", () => {
}), /**
 * Lifecycle hook for before creating
 */
R(pe, "creating", () => {
}), /**
 * Lifecycle hook for before deleting
 */
R(pe, "deleting", () => {
}), /**
 * Lifecycle hook for after getting data
 */
R(pe, "retrieved", () => {
}), /**
 * Lifecycle hook for after saved
 */
R(pe, "saved", () => {
}), /**
 * Lifecycle hook for after updated
 */
R(pe, "updated", () => {
}), /**
 * Lifecycle hook for after created
 */
R(pe, "created", () => {
}), /**
 * Lifecycle hook for after deleted
 */
R(pe, "deleted", () => {
}), pe);
/*!
  * shared v10.0.8
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Yv(i, r) {
  typeof console < "u" && (console.warn("[intlify] " + i), r && console.warn(r.stack));
}
const ki = typeof window < "u", Ln = (i, r = !1) => r ? Symbol.for(i) : Symbol(i), qv = (i, r, n) => Xv({ l: i, k: r, s: n }), Xv = (i) => JSON.stringify(i).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ke = (i) => typeof i == "number" && isFinite(i), zv = (i) => Ha(i) === "[object Date]", ir = (i) => Ha(i) === "[object RegExp]", Bi = (i) => ue(i) && Object.keys(i).length === 0, Be = Object.assign, Jv = Object.create, Ie = (i = null) => Jv(i);
let Ml;
const kn = () => Ml || (Ml = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Ie());
function Fl(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function kl(i) {
  return i.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Qv(i) {
  return i = i.replace(/(\w+)\s*=\s*"([^"]*)"/g, (a, o, l) => `${o}="${kl(l)}"`), i = i.replace(/(\w+)\s*=\s*'([^']*)'/g, (a, o, l) => `${o}='${kl(l)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(i) && (i = i.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((a) => {
    i = i.replace(a, "$1javascript&#58;");
  }), i;
}
const Zv = Object.prototype.hasOwnProperty;
function Dt(i, r) {
  return Zv.call(i, r);
}
const De = Array.isArray, Ae = (i) => typeof i == "function", q = (i) => typeof i == "string", he = (i) => typeof i == "boolean", ge = (i) => i !== null && typeof i == "object", jv = (i) => ge(i) && Ae(i.then) && Ae(i.catch), xc = Object.prototype.toString, Ha = (i) => xc.call(i), ue = (i) => Ha(i) === "[object Object]", e0 = (i) => i == null ? "" : De(i) || ue(i) && i.toString === xc ? JSON.stringify(i, null, 2) : String(i);
function Ba(i, r = "") {
  return i.reduce((n, a, o) => o === 0 ? n + a : n + r + a, "");
}
const Ci = (i) => !ge(i) || De(i);
function Di(i, r) {
  if (Ci(i) || Ci(r))
    throw new Error("Invalid value");
  const n = [{ src: i, des: r }];
  for (; n.length; ) {
    const { src: a, des: o } = n.pop();
    Object.keys(a).forEach((l) => {
      l !== "__proto__" && (ge(a[l]) && !ge(o[l]) && (o[l] = Array.isArray(a[l]) ? [] : Ie()), Ci(o[l]) || Ci(a[l]) ? o[l] = a[l] : n.push({ src: a[l], des: o[l] }));
    });
  }
}
/*!
  * message-compiler v10.0.8
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function t0(i, r, n) {
  return { line: i, column: r, offset: n };
}
function Ta(i, r, n) {
  return { start: i, end: r };
}
const we = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14
}, n0 = 17;
function Gi(i, r, n = {}) {
  const { domain: a, messages: o, args: l } = n, f = i, g = new SyntaxError(String(f));
  return g.code = i, r && (g.location = r), g.domain = a, g;
}
function r0(i) {
  throw i;
}
const nn = " ", i0 = "\r", et = `
`, s0 = "\u2028", a0 = "\u2029";
function o0(i) {
  const r = i;
  let n = 0, a = 1, o = 1, l = 0;
  const f = (F) => r[F] === i0 && r[F + 1] === et, g = (F) => r[F] === et, _ = (F) => r[F] === a0, w = (F) => r[F] === s0, T = (F) => f(F) || g(F) || _(F) || w(F), O = () => n, P = () => a, U = () => o, Y = () => l, G = (F) => f(F) || _(F) || w(F) ? et : r[F], H = () => G(n), b = () => G(n + l);
  function M() {
    return l = 0, T(n) && (a++, o = 0), f(n) && n++, n++, o++, r[n];
  }
  function W() {
    return f(n + l) && l++, l++, r[n + l];
  }
  function $() {
    n = 0, a = 1, o = 1, l = 0;
  }
  function K(F = 0) {
    l = F;
  }
  function V() {
    const F = n + l;
    for (; F !== n; )
      M();
    l = 0;
  }
  return {
    index: O,
    line: P,
    column: U,
    peekOffset: Y,
    charAt: G,
    currentChar: H,
    currentPeek: b,
    next: M,
    peek: W,
    reset: $,
    resetPeek: K,
    skipToPeek: V
  };
}
const En = void 0, u0 = ".", Kl = "'", l0 = "tokenizer";
function c0(i, r = {}) {
  const n = r.location !== !1, a = o0(i), o = () => a.index(), l = () => t0(a.line(), a.column(), a.index()), f = l(), g = o(), _ = {
    currentType: 13,
    offset: g,
    startLoc: f,
    endLoc: f,
    lastType: 13,
    lastOffset: g,
    lastStartLoc: f,
    lastEndLoc: f,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, w = () => _, { onError: T } = r;
  function O(y, v, x, ...z) {
    const be = w();
    if (v.column += x, v.offset += x, T) {
      const re = n ? Ta(be.startLoc, v) : null, S = Gi(y, re, {
        domain: l0,
        args: z
      });
      T(S);
    }
  }
  function P(y, v, x) {
    y.endLoc = l(), y.currentType = v;
    const z = { type: v };
    return n && (z.loc = Ta(y.startLoc, y.endLoc)), x != null && (z.value = x), z;
  }
  const U = (y) => P(
    y,
    13
    /* TokenTypes.EOF */
  );
  function Y(y, v) {
    return y.currentChar() === v ? (y.next(), v) : (O(we.EXPECTED_TOKEN, l(), 0, v), "");
  }
  function G(y) {
    let v = "";
    for (; y.currentPeek() === nn || y.currentPeek() === et; )
      v += y.currentPeek(), y.peek();
    return v;
  }
  function H(y) {
    const v = G(y);
    return y.skipToPeek(), v;
  }
  function b(y) {
    if (y === En)
      return !1;
    const v = y.charCodeAt(0);
    return v >= 97 && v <= 122 || // a-z
    v >= 65 && v <= 90 || // A-Z
    v === 95;
  }
  function M(y) {
    if (y === En)
      return !1;
    const v = y.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function W(y, v) {
    const { currentType: x } = v;
    if (x !== 2)
      return !1;
    G(y);
    const z = b(y.currentPeek());
    return y.resetPeek(), z;
  }
  function $(y, v) {
    const { currentType: x } = v;
    if (x !== 2)
      return !1;
    G(y);
    const z = y.currentPeek() === "-" ? y.peek() : y.currentPeek(), be = M(z);
    return y.resetPeek(), be;
  }
  function K(y, v) {
    const { currentType: x } = v;
    if (x !== 2)
      return !1;
    G(y);
    const z = y.currentPeek() === Kl;
    return y.resetPeek(), z;
  }
  function V(y, v) {
    const { currentType: x } = v;
    if (x !== 7)
      return !1;
    G(y);
    const z = y.currentPeek() === ".";
    return y.resetPeek(), z;
  }
  function F(y, v) {
    const { currentType: x } = v;
    if (x !== 8)
      return !1;
    G(y);
    const z = b(y.currentPeek());
    return y.resetPeek(), z;
  }
  function Q(y, v) {
    const { currentType: x } = v;
    if (!(x === 7 || x === 11))
      return !1;
    G(y);
    const z = y.currentPeek() === ":";
    return y.resetPeek(), z;
  }
  function Z(y, v) {
    const { currentType: x } = v;
    if (x !== 9)
      return !1;
    const z = () => {
      const re = y.currentPeek();
      return re === "{" ? b(y.peek()) : re === "@" || re === "|" || re === ":" || re === "." || re === nn || !re ? !1 : re === et ? (y.peek(), z()) : Ke(y, !1);
    }, be = z();
    return y.resetPeek(), be;
  }
  function Ee(y) {
    G(y);
    const v = y.currentPeek() === "|";
    return y.resetPeek(), v;
  }
  function Ke(y, v = !0) {
    const x = (be = !1, re = "") => {
      const S = y.currentPeek();
      return S === "{" || S === "@" || !S ? be : S === "|" ? !(re === nn || re === et) : S === nn ? (y.peek(), x(!0, nn)) : S === et ? (y.peek(), x(!0, et)) : !0;
    }, z = x();
    return v && y.resetPeek(), z;
  }
  function me(y, v) {
    const x = y.currentChar();
    return x === En ? En : v(x) ? (y.next(), x) : null;
  }
  function pt(y) {
    const v = y.charCodeAt(0);
    return v >= 97 && v <= 122 || // a-z
    v >= 65 && v <= 90 || // A-Z
    v >= 48 && v <= 57 || // 0-9
    v === 95 || // _
    v === 36;
  }
  function an(y) {
    return me(y, pt);
  }
  function Tn(y) {
    const v = y.charCodeAt(0);
    return v >= 97 && v <= 122 || // a-z
    v >= 65 && v <= 90 || // A-Z
    v >= 48 && v <= 57 || // 0-9
    v === 95 || // _
    v === 36 || // $
    v === 45;
  }
  function Ot(y) {
    return me(y, Tn);
  }
  function $e(y) {
    const v = y.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function mt(y) {
    return me(y, $e);
  }
  function At(y) {
    const v = y.charCodeAt(0);
    return v >= 48 && v <= 57 || // 0-9
    v >= 65 && v <= 70 || // A-F
    v >= 97 && v <= 102;
  }
  function Gt(y) {
    return me(y, At);
  }
  function Je(y) {
    let v = "", x = "";
    for (; v = mt(y); )
      x += v;
    return x;
  }
  function or(y) {
    let v = "";
    for (; ; ) {
      const x = y.currentChar();
      if (x === "{" || x === "}" || x === "@" || x === "|" || !x)
        break;
      if (x === nn || x === et)
        if (Ke(y))
          v += x, y.next();
        else {
          if (Ee(y))
            break;
          v += x, y.next();
        }
      else
        v += x, y.next();
    }
    return v;
  }
  function ur(y) {
    H(y);
    let v = "", x = "";
    for (; v = Ot(y); )
      x += v;
    return y.currentChar() === En && O(we.UNTERMINATED_CLOSING_BRACE, l(), 0), x;
  }
  function lr(y) {
    H(y);
    let v = "";
    return y.currentChar() === "-" ? (y.next(), v += `-${Je(y)}`) : v += Je(y), y.currentChar() === En && O(we.UNTERMINATED_CLOSING_BRACE, l(), 0), v;
  }
  function Vt(y) {
    return y !== Kl && y !== et;
  }
  function on(y) {
    H(y), Y(y, "'");
    let v = "", x = "";
    for (; v = me(y, Vt); )
      v === "\\" ? x += cr(y) : x += v;
    const z = y.currentChar();
    return z === et || z === En ? (O(we.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, l(), 0), z === et && (y.next(), Y(y, "'")), x) : (Y(y, "'"), x);
  }
  function cr(y) {
    const v = y.currentChar();
    switch (v) {
      case "\\":
      case "'":
        return y.next(), `\\${v}`;
      case "u":
        return Mt(y, v, 4);
      case "U":
        return Mt(y, v, 6);
      default:
        return O(we.UNKNOWN_ESCAPE_SEQUENCE, l(), 0, v), "";
    }
  }
  function Mt(y, v, x) {
    Y(y, v);
    let z = "";
    for (let be = 0; be < x; be++) {
      const re = Gt(y);
      if (!re) {
        O(we.INVALID_UNICODE_ESCAPE_SEQUENCE, l(), 0, `\\${v}${z}${y.currentChar()}`);
        break;
      }
      z += re;
    }
    return `\\${v}${z}`;
  }
  function Yt(y) {
    return y !== "{" && y !== "}" && y !== nn && y !== et;
  }
  function fr(y) {
    H(y);
    let v = "", x = "";
    for (; v = me(y, Yt); )
      x += v;
    return x;
  }
  function un(y) {
    let v = "", x = "";
    for (; v = an(y); )
      x += v;
    return x;
  }
  function ln(y) {
    const v = (x) => {
      const z = y.currentChar();
      return z === "{" || z === "@" || z === "|" || z === "(" || z === ")" || !z || z === nn ? x : (x += z, y.next(), v(x));
    };
    return v("");
  }
  function cn(y) {
    H(y);
    const v = Y(
      y,
      "|"
      /* TokenChars.Pipe */
    );
    return H(y), v;
  }
  function Ge(y, v) {
    let x = null;
    switch (y.currentChar()) {
      case "{":
        return v.braceNest >= 1 && O(we.NOT_ALLOW_NEST_PLACEHOLDER, l(), 0), y.next(), x = P(
          v,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), H(y), v.braceNest++, x;
      case "}":
        return v.braceNest > 0 && v.currentType === 2 && O(we.EMPTY_PLACEHOLDER, l(), 0), y.next(), x = P(
          v,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), v.braceNest--, v.braceNest > 0 && H(y), v.inLinked && v.braceNest === 0 && (v.inLinked = !1), x;
      case "@":
        return v.braceNest > 0 && O(we.UNTERMINATED_CLOSING_BRACE, l(), 0), x = yt(y, v) || U(v), v.braceNest = 0, x;
      default: {
        let be = !0, re = !0, S = !0;
        if (Ee(y))
          return v.braceNest > 0 && O(we.UNTERMINATED_CLOSING_BRACE, l(), 0), x = P(v, 1, cn(y)), v.braceNest = 0, v.inLinked = !1, x;
        if (v.braceNest > 0 && (v.currentType === 4 || v.currentType === 5 || v.currentType === 6))
          return O(we.UNTERMINATED_CLOSING_BRACE, l(), 0), v.braceNest = 0, On(y, v);
        if (be = W(y, v))
          return x = P(v, 4, ur(y)), H(y), x;
        if (re = $(y, v))
          return x = P(v, 5, lr(y)), H(y), x;
        if (S = K(y, v))
          return x = P(v, 6, on(y)), H(y), x;
        if (!be && !re && !S)
          return x = P(v, 12, fr(y)), O(we.INVALID_TOKEN_IN_PLACEHOLDER, l(), 0, x.value), H(y), x;
        break;
      }
    }
    return x;
  }
  function yt(y, v) {
    const { currentType: x } = v;
    let z = null;
    const be = y.currentChar();
    switch ((x === 7 || x === 8 || x === 11 || x === 9) && (be === et || be === nn) && O(we.INVALID_LINKED_FORMAT, l(), 0), be) {
      case "@":
        return y.next(), z = P(
          v,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), v.inLinked = !0, z;
      case ".":
        return H(y), y.next(), P(
          v,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return H(y), y.next(), P(
          v,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return Ee(y) ? (z = P(v, 1, cn(y)), v.braceNest = 0, v.inLinked = !1, z) : V(y, v) || Q(y, v) ? (H(y), yt(y, v)) : F(y, v) ? (H(y), P(v, 11, un(y))) : Z(y, v) ? (H(y), be === "{" ? Ge(y, v) || z : P(v, 10, ln(y))) : (x === 7 && O(we.INVALID_LINKED_FORMAT, l(), 0), v.braceNest = 0, v.inLinked = !1, On(y, v));
    }
  }
  function On(y, v) {
    let x = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (v.braceNest > 0)
      return Ge(y, v) || U(v);
    if (v.inLinked)
      return yt(y, v) || U(v);
    switch (y.currentChar()) {
      case "{":
        return Ge(y, v) || U(v);
      case "}":
        return O(we.UNBALANCED_CLOSING_BRACE, l(), 0), y.next(), P(
          v,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return yt(y, v) || U(v);
      default: {
        if (Ee(y))
          return x = P(v, 1, cn(y)), v.braceNest = 0, v.inLinked = !1, x;
        if (Ke(y))
          return P(v, 0, or(y));
        break;
      }
    }
    return x;
  }
  function ut() {
    const { currentType: y, offset: v, startLoc: x, endLoc: z } = _;
    return _.lastType = y, _.lastOffset = v, _.lastStartLoc = x, _.lastEndLoc = z, _.offset = o(), _.startLoc = l(), a.currentChar() === En ? P(
      _,
      13
      /* TokenTypes.EOF */
    ) : On(a, _);
  }
  return {
    nextToken: ut,
    currentOffset: o,
    currentPosition: l,
    context: w
  };
}
const f0 = "parser", h0 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function d0(i, r, n) {
  switch (i) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const a = parseInt(r || n, 16);
      return a <= 55295 || a >= 57344 ? String.fromCodePoint(a) : "�";
    }
  }
}
function g0(i = {}) {
  const r = i.location !== !1, { onError: n } = i;
  function a(b, M, W, $, ...K) {
    const V = b.currentPosition();
    if (V.offset += $, V.column += $, n) {
      const F = r ? Ta(W, V) : null, Q = Gi(M, F, {
        domain: f0,
        args: K
      });
      n(Q);
    }
  }
  function o(b, M, W) {
    const $ = { type: b };
    return r && ($.start = M, $.end = M, $.loc = { start: W, end: W }), $;
  }
  function l(b, M, W, $) {
    r && (b.end = M, b.loc && (b.loc.end = W));
  }
  function f(b, M) {
    const W = b.context(), $ = o(3, W.offset, W.startLoc);
    return $.value = M, l($, b.currentOffset(), b.currentPosition()), $;
  }
  function g(b, M) {
    const W = b.context(), { lastOffset: $, lastStartLoc: K } = W, V = o(5, $, K);
    return V.index = parseInt(M, 10), b.nextToken(), l(V, b.currentOffset(), b.currentPosition()), V;
  }
  function _(b, M) {
    const W = b.context(), { lastOffset: $, lastStartLoc: K } = W, V = o(4, $, K);
    return V.key = M, b.nextToken(), l(V, b.currentOffset(), b.currentPosition()), V;
  }
  function w(b, M) {
    const W = b.context(), { lastOffset: $, lastStartLoc: K } = W, V = o(9, $, K);
    return V.value = M.replace(h0, d0), b.nextToken(), l(V, b.currentOffset(), b.currentPosition()), V;
  }
  function T(b) {
    const M = b.nextToken(), W = b.context(), { lastOffset: $, lastStartLoc: K } = W, V = o(8, $, K);
    return M.type !== 11 ? (a(b, we.UNEXPECTED_EMPTY_LINKED_MODIFIER, W.lastStartLoc, 0), V.value = "", l(V, $, K), {
      nextConsumeToken: M,
      node: V
    }) : (M.value == null && a(b, we.UNEXPECTED_LEXICAL_ANALYSIS, W.lastStartLoc, 0, Ut(M)), V.value = M.value || "", l(V, b.currentOffset(), b.currentPosition()), {
      node: V
    });
  }
  function O(b, M) {
    const W = b.context(), $ = o(7, W.offset, W.startLoc);
    return $.value = M, l($, b.currentOffset(), b.currentPosition()), $;
  }
  function P(b) {
    const M = b.context(), W = o(6, M.offset, M.startLoc);
    let $ = b.nextToken();
    if ($.type === 8) {
      const K = T(b);
      W.modifier = K.node, $ = K.nextConsumeToken || b.nextToken();
    }
    switch ($.type !== 9 && a(b, we.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, Ut($)), $ = b.nextToken(), $.type === 2 && ($ = b.nextToken()), $.type) {
      case 10:
        $.value == null && a(b, we.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, Ut($)), W.key = O(b, $.value || "");
        break;
      case 4:
        $.value == null && a(b, we.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, Ut($)), W.key = _(b, $.value || "");
        break;
      case 5:
        $.value == null && a(b, we.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, Ut($)), W.key = g(b, $.value || "");
        break;
      case 6:
        $.value == null && a(b, we.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, Ut($)), W.key = w(b, $.value || "");
        break;
      default: {
        a(b, we.UNEXPECTED_EMPTY_LINKED_KEY, M.lastStartLoc, 0);
        const K = b.context(), V = o(7, K.offset, K.startLoc);
        return V.value = "", l(V, K.offset, K.startLoc), W.key = V, l(W, K.offset, K.startLoc), {
          nextConsumeToken: $,
          node: W
        };
      }
    }
    return l(W, b.currentOffset(), b.currentPosition()), {
      node: W
    };
  }
  function U(b) {
    const M = b.context(), W = M.currentType === 1 ? b.currentOffset() : M.offset, $ = M.currentType === 1 ? M.endLoc : M.startLoc, K = o(2, W, $);
    K.items = [];
    let V = null;
    do {
      const Z = V || b.nextToken();
      switch (V = null, Z.type) {
        case 0:
          Z.value == null && a(b, we.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, Ut(Z)), K.items.push(f(b, Z.value || ""));
          break;
        case 5:
          Z.value == null && a(b, we.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, Ut(Z)), K.items.push(g(b, Z.value || ""));
          break;
        case 4:
          Z.value == null && a(b, we.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, Ut(Z)), K.items.push(_(b, Z.value || ""));
          break;
        case 6:
          Z.value == null && a(b, we.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, Ut(Z)), K.items.push(w(b, Z.value || ""));
          break;
        case 7: {
          const Ee = P(b);
          K.items.push(Ee.node), V = Ee.nextConsumeToken || null;
          break;
        }
      }
    } while (M.currentType !== 13 && M.currentType !== 1);
    const F = M.currentType === 1 ? M.lastOffset : b.currentOffset(), Q = M.currentType === 1 ? M.lastEndLoc : b.currentPosition();
    return l(K, F, Q), K;
  }
  function Y(b, M, W, $) {
    const K = b.context();
    let V = $.items.length === 0;
    const F = o(1, M, W);
    F.cases = [], F.cases.push($);
    do {
      const Q = U(b);
      V || (V = Q.items.length === 0), F.cases.push(Q);
    } while (K.currentType !== 13);
    return V && a(b, we.MUST_HAVE_MESSAGES_IN_PLURAL, W, 0), l(F, b.currentOffset(), b.currentPosition()), F;
  }
  function G(b) {
    const M = b.context(), { offset: W, startLoc: $ } = M, K = U(b);
    return M.currentType === 13 ? K : Y(b, W, $, K);
  }
  function H(b) {
    const M = c0(b, Be({}, i)), W = M.context(), $ = o(0, W.offset, W.startLoc);
    return r && $.loc && ($.loc.source = b), $.body = G(M), i.onCacheKey && ($.cacheKey = i.onCacheKey(b)), W.currentType !== 13 && a(M, we.UNEXPECTED_LEXICAL_ANALYSIS, W.lastStartLoc, 0, b[W.offset] || ""), l($, M.currentOffset(), M.currentPosition()), $;
  }
  return { parse: H };
}
function Ut(i) {
  if (i.type === 13)
    return "EOF";
  const r = (i.value || "").replace(/\r?\n/gu, "\\n");
  return r.length > 10 ? r.slice(0, 9) + "…" : r;
}
function _0(i, r = {}) {
  const n = {
    ast: i,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (l) => (n.helpers.add(l), l) };
}
function Wl(i, r) {
  for (let n = 0; n < i.length; n++)
    Ga(i[n], r);
}
function Ga(i, r) {
  switch (i.type) {
    case 1:
      Wl(i.cases, r), r.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Wl(i.items, r);
      break;
    case 6: {
      Ga(i.key, r), r.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), r.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      r.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), r.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      r.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), r.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function p0(i, r = {}) {
  const n = _0(i);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), i.body && Ga(i.body, n);
  const a = n.context();
  i.helpers = Array.from(a.helpers);
}
function m0(i) {
  const r = i.body;
  return r.type === 2 ? Ul(r) : r.cases.forEach((n) => Ul(n)), i;
}
function Ul(i) {
  if (i.items.length === 1) {
    const r = i.items[0];
    (r.type === 3 || r.type === 9) && (i.static = r.value, delete r.value);
  } else {
    const r = [];
    for (let n = 0; n < i.items.length; n++) {
      const a = i.items[n];
      if (!(a.type === 3 || a.type === 9) || a.value == null)
        break;
      r.push(a.value);
    }
    if (r.length === i.items.length) {
      i.static = Ba(r);
      for (let n = 0; n < i.items.length; n++) {
        const a = i.items[n];
        (a.type === 3 || a.type === 9) && delete a.value;
      }
    }
  }
}
function rr(i) {
  switch (i.t = i.type, i.type) {
    case 0: {
      const r = i;
      rr(r.body), r.b = r.body, delete r.body;
      break;
    }
    case 1: {
      const r = i, n = r.cases;
      for (let a = 0; a < n.length; a++)
        rr(n[a]);
      r.c = n, delete r.cases;
      break;
    }
    case 2: {
      const r = i, n = r.items;
      for (let a = 0; a < n.length; a++)
        rr(n[a]);
      r.i = n, delete r.items, r.static && (r.s = r.static, delete r.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const r = i;
      r.value && (r.v = r.value, delete r.value);
      break;
    }
    case 6: {
      const r = i;
      rr(r.key), r.k = r.key, delete r.key, r.modifier && (rr(r.modifier), r.m = r.modifier, delete r.modifier);
      break;
    }
    case 5: {
      const r = i;
      r.i = r.index, delete r.index;
      break;
    }
    case 4: {
      const r = i;
      r.k = r.key, delete r.key;
      break;
    }
  }
  delete i.type;
}
function y0(i, r) {
  const { filename: n, breakLineCode: a, needIndent: o } = r, l = r.location !== !1, f = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: a,
    needIndent: o,
    indentLevel: 0
  };
  l && i.loc && (f.source = i.loc.source);
  const g = () => f;
  function _(G, H) {
    f.code += G;
  }
  function w(G, H = !0) {
    const b = H ? a : "";
    _(o ? b + "  ".repeat(G) : b);
  }
  function T(G = !0) {
    const H = ++f.indentLevel;
    G && w(H);
  }
  function O(G = !0) {
    const H = --f.indentLevel;
    G && w(H);
  }
  function P() {
    w(f.indentLevel);
  }
  return {
    context: g,
    push: _,
    indent: T,
    deindent: O,
    newline: P,
    helper: (G) => `_${G}`,
    needIndent: () => f.needIndent
  };
}
function v0(i, r) {
  const { helper: n } = i;
  i.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), sr(i, r.key), r.modifier ? (i.push(", "), sr(i, r.modifier), i.push(", _type")) : i.push(", undefined, _type"), i.push(")");
}
function w0(i, r) {
  const { helper: n, needIndent: a } = i;
  i.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), i.indent(a());
  const o = r.items.length;
  for (let l = 0; l < o && (sr(i, r.items[l]), l !== o - 1); l++)
    i.push(", ");
  i.deindent(a()), i.push("])");
}
function E0(i, r) {
  const { helper: n, needIndent: a } = i;
  if (r.cases.length > 1) {
    i.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), i.indent(a());
    const o = r.cases.length;
    for (let l = 0; l < o && (sr(i, r.cases[l]), l !== o - 1); l++)
      i.push(", ");
    i.deindent(a()), i.push("])");
  }
}
function I0(i, r) {
  r.body ? sr(i, r.body) : i.push("null");
}
function sr(i, r) {
  const { helper: n } = i;
  switch (r.type) {
    case 0:
      I0(i, r);
      break;
    case 1:
      E0(i, r);
      break;
    case 2:
      w0(i, r);
      break;
    case 6:
      v0(i, r);
      break;
    case 8:
      i.push(JSON.stringify(r.value), r);
      break;
    case 7:
      i.push(JSON.stringify(r.value), r);
      break;
    case 5:
      i.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${r.index}))`, r);
      break;
    case 4:
      i.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(r.key)}))`, r);
      break;
    case 9:
      i.push(JSON.stringify(r.value), r);
      break;
    case 3:
      i.push(JSON.stringify(r.value), r);
      break;
  }
}
const b0 = (i, r = {}) => {
  const n = q(r.mode) ? r.mode : "normal", a = q(r.filename) ? r.filename : "message.intl";
  r.sourceMap;
  const o = r.breakLineCode != null ? r.breakLineCode : n === "arrow" ? ";" : `
`, l = r.needIndent ? r.needIndent : n !== "arrow", f = i.helpers || [], g = y0(i, {
    filename: a,
    breakLineCode: o,
    needIndent: l
  });
  g.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), g.indent(l), f.length > 0 && (g.push(`const { ${Ba(f.map((T) => `${T}: _${T}`), ", ")} } = ctx`), g.newline()), g.push("return "), sr(g, i), g.deindent(l), g.push("}"), delete i.helpers;
  const { code: _, map: w } = g.context();
  return {
    ast: i,
    code: _,
    map: w ? w.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function L0(i, r = {}) {
  const n = Be({}, r), a = !!n.jit, o = !!n.minify, l = n.optimize == null ? !0 : n.optimize, g = g0(n).parse(i);
  return a ? (l && m0(g), o && rr(g), { ast: g, code: "" }) : (p0(g, n), b0(g, n));
}
/*!
  * core-base v10.0.8
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function R0() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (kn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (kn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Bt(i) {
  return ge(i) && Va(i) === 0 && (Dt(i, "b") || Dt(i, "body"));
}
const Dc = ["b", "body"];
function S0(i) {
  return Rn(i, Dc);
}
const Mc = ["c", "cases"];
function T0(i) {
  return Rn(i, Mc, []);
}
const Fc = ["s", "static"];
function O0(i) {
  return Rn(i, Fc);
}
const kc = ["i", "items"];
function A0(i) {
  return Rn(i, kc, []);
}
const Kc = ["t", "type"];
function Va(i) {
  return Rn(i, Kc);
}
const Wc = ["v", "value"];
function Ni(i, r) {
  const n = Rn(i, Wc);
  if (n != null)
    return n;
  throw Mr(r);
}
const Uc = ["m", "modifier"];
function $0(i) {
  return Rn(i, Uc);
}
const Hc = ["k", "key"];
function C0(i) {
  const r = Rn(i, Hc);
  if (r)
    return r;
  throw Mr(
    6
    /* NodeTypes.Linked */
  );
}
function Rn(i, r, n) {
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    if (Dt(i, o) && i[o] != null)
      return i[o];
  }
  return n;
}
const Bc = [
  ...Dc,
  ...Mc,
  ...Fc,
  ...kc,
  ...Hc,
  ...Uc,
  ...Wc,
  ...Kc
];
function Mr(i) {
  return new Error(`unhandled node type: ${i}`);
}
function _a(i) {
  return (n) => N0(n, i);
}
function N0(i, r) {
  const n = S0(r);
  if (n == null)
    throw Mr(
      0
      /* NodeTypes.Resource */
    );
  if (Va(n) === 1) {
    const l = T0(n);
    return i.plural(l.reduce((f, g) => [
      ...f,
      Hl(i, g)
    ], []));
  } else
    return Hl(i, n);
}
function Hl(i, r) {
  const n = O0(r);
  if (n != null)
    return i.type === "text" ? n : i.normalize([n]);
  {
    const a = A0(r).reduce((o, l) => [...o, Oa(i, l)], []);
    return i.normalize(a);
  }
}
function Oa(i, r) {
  const n = Va(r);
  switch (n) {
    case 3:
      return Ni(r, n);
    case 9:
      return Ni(r, n);
    case 4: {
      const a = r;
      if (Dt(a, "k") && a.k)
        return i.interpolate(i.named(a.k));
      if (Dt(a, "key") && a.key)
        return i.interpolate(i.named(a.key));
      throw Mr(n);
    }
    case 5: {
      const a = r;
      if (Dt(a, "i") && ke(a.i))
        return i.interpolate(i.list(a.i));
      if (Dt(a, "index") && ke(a.index))
        return i.interpolate(i.list(a.index));
      throw Mr(n);
    }
    case 6: {
      const a = r, o = $0(a), l = C0(a);
      return i.linked(Oa(i, l), o ? Oa(i, o) : void 0, i.type);
    }
    case 7:
      return Ni(r, n);
    case 8:
      return Ni(r, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const P0 = (i) => i;
let Pi = Ie();
function x0(i, r = {}) {
  let n = !1;
  const a = r.onError || r0;
  return r.onError = (o) => {
    n = !0, a(o);
  }, { ...L0(i, r), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function D0(i, r) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && q(i)) {
    he(r.warnHtmlMessage) && r.warnHtmlMessage;
    const a = (r.onCacheKey || P0)(i), o = Pi[a];
    if (o)
      return o;
    const { ast: l, detectError: f } = x0(i, {
      ...r,
      location: !1,
      jit: !0
    }), g = _a(l);
    return f ? g : Pi[a] = g;
  } else {
    const n = i.cacheKey;
    if (n) {
      const a = Pi[n];
      return a || (Pi[n] = _a(i));
    } else
      return _a(i);
  }
}
let Fr = null;
function M0(i) {
  Fr = i;
}
function F0(i, r, n) {
  Fr && Fr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: i,
    version: r,
    meta: n
  });
}
const k0 = /* @__PURE__ */ K0("function:translate");
function K0(i) {
  return (r) => Fr && Fr.emit(i, r);
}
const rn = {
  INVALID_ARGUMENT: n0,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, W0 = 24;
function sn(i) {
  return Gi(i, null, void 0);
}
function Ya(i, r) {
  return r.locale != null ? Bl(r.locale) : Bl(i.locale);
}
let pa;
function Bl(i) {
  if (q(i))
    return i;
  if (Ae(i)) {
    if (i.resolvedOnce && pa != null)
      return pa;
    if (i.constructor.name === "Function") {
      const r = i();
      if (jv(r))
        throw sn(rn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return pa = r;
    } else
      throw sn(rn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw sn(rn.NOT_SUPPORT_LOCALE_TYPE);
}
function U0(i, r, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...De(r) ? r : ge(r) ? Object.keys(r) : q(r) ? [r] : [n]
  ])];
}
function Gc(i, r, n) {
  const a = q(n) ? n : kr, o = i;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let l = o.__localeChainCache.get(a);
  if (!l) {
    l = [];
    let f = [n];
    for (; De(f); )
      f = Gl(l, f, r);
    const g = De(r) || !ue(r) ? r : r.default ? r.default : null;
    f = q(g) ? [g] : g, De(f) && Gl(l, f, !1), o.__localeChainCache.set(a, l);
  }
  return l;
}
function Gl(i, r, n) {
  let a = !0;
  for (let o = 0; o < r.length && he(a); o++) {
    const l = r[o];
    q(l) && (a = H0(i, r[o], n));
  }
  return a;
}
function H0(i, r, n) {
  let a;
  const o = r.split("-");
  do {
    const l = o.join("-");
    a = B0(i, l, n), o.splice(-1, 1);
  } while (o.length && a === !0);
  return a;
}
function B0(i, r, n) {
  let a = !1;
  if (!i.includes(r) && (a = !0, r)) {
    a = r[r.length - 1] !== "!";
    const o = r.replace(/!/g, "");
    i.push(o), (De(n) || ue(n)) && n[o] && (a = n[o]);
  }
  return a;
}
const Sn = [];
Sn[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Sn[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Sn[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
Sn[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
Sn[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
Sn[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
Sn[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const G0 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function V0(i) {
  return G0.test(i);
}
function Y0(i) {
  const r = i.charCodeAt(0), n = i.charCodeAt(i.length - 1);
  return r === n && (r === 34 || r === 39) ? i.slice(1, -1) : i;
}
function q0(i) {
  if (i == null)
    return "o";
  switch (i.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return i;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function X0(i) {
  const r = i.trim();
  return i.charAt(0) === "0" && isNaN(parseInt(i)) ? !1 : V0(r) ? Y0(r) : "*" + r;
}
function z0(i) {
  const r = [];
  let n = -1, a = 0, o = 0, l, f, g, _, w, T, O;
  const P = [];
  P[
    0
    /* Actions.APPEND */
  ] = () => {
    f === void 0 ? f = g : f += g;
  }, P[
    1
    /* Actions.PUSH */
  ] = () => {
    f !== void 0 && (r.push(f), f = void 0);
  }, P[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    P[
      0
      /* Actions.APPEND */
    ](), o++;
  }, P[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, a = 4, P[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, f === void 0 || (f = X0(f), f === !1))
        return !1;
      P[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function U() {
    const Y = i[n + 1];
    if (a === 5 && Y === "'" || a === 6 && Y === '"')
      return n++, g = "\\" + Y, P[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; a !== null; )
    if (n++, l = i[n], !(l === "\\" && U())) {
      if (_ = q0(l), O = Sn[a], w = O[_] || O.l || 8, w === 8 || (a = w[0], w[1] !== void 0 && (T = P[w[1]], T && (g = l, T() === !1))))
        return;
      if (a === 7)
        return r;
    }
}
const Vl = /* @__PURE__ */ new Map();
function J0(i, r) {
  return ge(i) ? i[r] : null;
}
function Q0(i, r) {
  if (!ge(i))
    return null;
  let n = Vl.get(r);
  if (n || (n = z0(r), n && Vl.set(r, n)), !n)
    return null;
  const a = n.length;
  let o = i, l = 0;
  for (; l < a; ) {
    const f = n[l];
    if (Bc.includes(f) && Bt(o))
      return null;
    const g = o[f];
    if (g === void 0 || Ae(o))
      return null;
    o = g, l++;
  }
  return o;
}
const Z0 = "10.0.8", Vi = -1, kr = "en-US", Yl = "", ql = (i) => `${i.charAt(0).toLocaleUpperCase()}${i.substr(1)}`;
function j0() {
  return {
    upper: (i, r) => r === "text" && q(i) ? i.toUpperCase() : r === "vnode" && ge(i) && "__v_isVNode" in i ? i.children.toUpperCase() : i,
    lower: (i, r) => r === "text" && q(i) ? i.toLowerCase() : r === "vnode" && ge(i) && "__v_isVNode" in i ? i.children.toLowerCase() : i,
    capitalize: (i, r) => r === "text" && q(i) ? ql(i) : r === "vnode" && ge(i) && "__v_isVNode" in i ? ql(i.children) : i
  };
}
let Vc;
function ew(i) {
  Vc = i;
}
let Yc;
function tw(i) {
  Yc = i;
}
let qc;
function nw(i) {
  qc = i;
}
let Xc = null;
const rw = /* @__NO_SIDE_EFFECTS__ */ (i) => {
  Xc = i;
}, iw = /* @__NO_SIDE_EFFECTS__ */ () => Xc;
let zc = null;
const Xl = (i) => {
  zc = i;
}, sw = () => zc;
let zl = 0;
function aw(i = {}) {
  const r = Ae(i.onWarn) ? i.onWarn : Yv, n = q(i.version) ? i.version : Z0, a = q(i.locale) || Ae(i.locale) ? i.locale : kr, o = Ae(a) ? kr : a, l = De(i.fallbackLocale) || ue(i.fallbackLocale) || q(i.fallbackLocale) || i.fallbackLocale === !1 ? i.fallbackLocale : o, f = ue(i.messages) ? i.messages : ma(o), g = ue(i.datetimeFormats) ? i.datetimeFormats : ma(o), _ = ue(i.numberFormats) ? i.numberFormats : ma(o), w = Be(Ie(), i.modifiers, j0()), T = i.pluralRules || Ie(), O = Ae(i.missing) ? i.missing : null, P = he(i.missingWarn) || ir(i.missingWarn) ? i.missingWarn : !0, U = he(i.fallbackWarn) || ir(i.fallbackWarn) ? i.fallbackWarn : !0, Y = !!i.fallbackFormat, G = !!i.unresolving, H = Ae(i.postTranslation) ? i.postTranslation : null, b = ue(i.processor) ? i.processor : null, M = he(i.warnHtmlMessage) ? i.warnHtmlMessage : !0, W = !!i.escapeParameter, $ = Ae(i.messageCompiler) ? i.messageCompiler : Vc, K = Ae(i.messageResolver) ? i.messageResolver : Yc || J0, V = Ae(i.localeFallbacker) ? i.localeFallbacker : qc || U0, F = ge(i.fallbackContext) ? i.fallbackContext : void 0, Q = i, Z = ge(Q.__datetimeFormatters) ? Q.__datetimeFormatters : /* @__PURE__ */ new Map(), Ee = ge(Q.__numberFormatters) ? Q.__numberFormatters : /* @__PURE__ */ new Map(), Ke = ge(Q.__meta) ? Q.__meta : {};
  zl++;
  const me = {
    version: n,
    cid: zl,
    locale: a,
    fallbackLocale: l,
    messages: f,
    modifiers: w,
    pluralRules: T,
    missing: O,
    missingWarn: P,
    fallbackWarn: U,
    fallbackFormat: Y,
    unresolving: G,
    postTranslation: H,
    processor: b,
    warnHtmlMessage: M,
    escapeParameter: W,
    messageCompiler: $,
    messageResolver: K,
    localeFallbacker: V,
    fallbackContext: F,
    onWarn: r,
    __meta: Ke
  };
  return me.datetimeFormats = g, me.numberFormats = _, me.__datetimeFormatters = Z, me.__numberFormatters = Ee, __INTLIFY_PROD_DEVTOOLS__ && F0(me, n, Ke), me;
}
const ma = (i) => ({ [i]: Ie() });
function qa(i, r, n, a, o) {
  const { missing: l, onWarn: f } = i;
  if (l !== null) {
    const g = l(i, n, r, o);
    return q(g) ? g : r;
  } else
    return r;
}
function Ar(i, r, n) {
  const a = i;
  a.__localeChainCache = /* @__PURE__ */ new Map(), i.localeFallbacker(i, n, r);
}
function ow(i, r) {
  return i === r ? !1 : i.split("-")[0] === r.split("-")[0];
}
function uw(i, r) {
  const n = r.indexOf(i);
  if (n === -1)
    return !1;
  for (let a = n + 1; a < r.length; a++)
    if (ow(i, r[a]))
      return !0;
  return !1;
}
function Jl(i, ...r) {
  const { datetimeFormats: n, unresolving: a, fallbackLocale: o, onWarn: l, localeFallbacker: f } = i, { __datetimeFormatters: g } = i, [_, w, T, O] = Aa(...r), P = he(T.missingWarn) ? T.missingWarn : i.missingWarn;
  he(T.fallbackWarn) ? T.fallbackWarn : i.fallbackWarn;
  const U = !!T.part, Y = Ya(i, T), G = f(
    i,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    Y
  );
  if (!q(_) || _ === "")
    return new Intl.DateTimeFormat(Y, O).format(w);
  let H = {}, b, M = null;
  const W = "datetime format";
  for (let V = 0; V < G.length && (b = G[V], H = n[b] || {}, M = H[_], !ue(M)); V++)
    qa(i, _, b, P, W);
  if (!ue(M) || !q(b))
    return a ? Vi : _;
  let $ = `${b}__${_}`;
  Bi(O) || ($ = `${$}__${JSON.stringify(O)}`);
  let K = g.get($);
  return K || (K = new Intl.DateTimeFormat(b, Be({}, M, O)), g.set($, K)), U ? K.formatToParts(w) : K.format(w);
}
const Jc = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function Aa(...i) {
  const [r, n, a, o] = i, l = Ie();
  let f = Ie(), g;
  if (q(r)) {
    const _ = r.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!_)
      throw sn(rn.INVALID_ISO_DATE_ARGUMENT);
    const w = _[3] ? _[3].trim().startsWith("T") ? `${_[1].trim()}${_[3].trim()}` : `${_[1].trim()}T${_[3].trim()}` : _[1].trim();
    g = new Date(w);
    try {
      g.toISOString();
    } catch {
      throw sn(rn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (zv(r)) {
    if (isNaN(r.getTime()))
      throw sn(rn.INVALID_DATE_ARGUMENT);
    g = r;
  } else if (ke(r))
    g = r;
  else
    throw sn(rn.INVALID_ARGUMENT);
  return q(n) ? l.key = n : ue(n) && Object.keys(n).forEach((_) => {
    Jc.includes(_) ? f[_] = n[_] : l[_] = n[_];
  }), q(a) ? l.locale = a : ue(a) && (f = a), ue(o) && (f = o), [l.key || "", g, l, f];
}
function Ql(i, r, n) {
  const a = i;
  for (const o in n) {
    const l = `${r}__${o}`;
    a.__datetimeFormatters.has(l) && a.__datetimeFormatters.delete(l);
  }
}
function Zl(i, ...r) {
  const { numberFormats: n, unresolving: a, fallbackLocale: o, onWarn: l, localeFallbacker: f } = i, { __numberFormatters: g } = i, [_, w, T, O] = $a(...r), P = he(T.missingWarn) ? T.missingWarn : i.missingWarn;
  he(T.fallbackWarn) ? T.fallbackWarn : i.fallbackWarn;
  const U = !!T.part, Y = Ya(i, T), G = f(
    i,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    Y
  );
  if (!q(_) || _ === "")
    return new Intl.NumberFormat(Y, O).format(w);
  let H = {}, b, M = null;
  const W = "number format";
  for (let V = 0; V < G.length && (b = G[V], H = n[b] || {}, M = H[_], !ue(M)); V++)
    qa(i, _, b, P, W);
  if (!ue(M) || !q(b))
    return a ? Vi : _;
  let $ = `${b}__${_}`;
  Bi(O) || ($ = `${$}__${JSON.stringify(O)}`);
  let K = g.get($);
  return K || (K = new Intl.NumberFormat(b, Be({}, M, O)), g.set($, K)), U ? K.formatToParts(w) : K.format(w);
}
const Qc = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function $a(...i) {
  const [r, n, a, o] = i, l = Ie();
  let f = Ie();
  if (!ke(r))
    throw sn(rn.INVALID_ARGUMENT);
  const g = r;
  return q(n) ? l.key = n : ue(n) && Object.keys(n).forEach((_) => {
    Qc.includes(_) ? f[_] = n[_] : l[_] = n[_];
  }), q(a) ? l.locale = a : ue(a) && (f = a), ue(o) && (f = o), [l.key || "", g, l, f];
}
function jl(i, r, n) {
  const a = i;
  for (const o in n) {
    const l = `${r}__${o}`;
    a.__numberFormatters.has(l) && a.__numberFormatters.delete(l);
  }
}
const lw = (i) => i, cw = (i) => "", fw = "text", hw = (i) => i.length === 0 ? "" : Ba(i), dw = e0;
function ec(i, r) {
  return i = Math.abs(i), r === 2 ? i ? i > 1 ? 1 : 0 : 1 : i ? Math.min(i, 2) : 0;
}
function gw(i) {
  const r = ke(i.pluralIndex) ? i.pluralIndex : -1;
  return i.named && (ke(i.named.count) || ke(i.named.n)) ? ke(i.named.count) ? i.named.count : ke(i.named.n) ? i.named.n : r : r;
}
function _w(i, r) {
  r.count || (r.count = i), r.n || (r.n = i);
}
function pw(i = {}) {
  const r = i.locale, n = gw(i), a = ge(i.pluralRules) && q(r) && Ae(i.pluralRules[r]) ? i.pluralRules[r] : ec, o = ge(i.pluralRules) && q(r) && Ae(i.pluralRules[r]) ? ec : void 0, l = (b) => b[a(n, b.length, o)], f = i.list || [], g = (b) => f[b], _ = i.named || Ie();
  ke(i.pluralIndex) && _w(n, _);
  const w = (b) => _[b];
  function T(b, M) {
    const W = Ae(i.messages) ? i.messages(b, !!M) : ge(i.messages) ? i.messages[b] : !1;
    return W || (i.parent ? i.parent.message(b) : cw);
  }
  const O = (b) => i.modifiers ? i.modifiers[b] : lw, P = ue(i.processor) && Ae(i.processor.normalize) ? i.processor.normalize : hw, U = ue(i.processor) && Ae(i.processor.interpolate) ? i.processor.interpolate : dw, Y = ue(i.processor) && q(i.processor.type) ? i.processor.type : fw, H = {
    list: g,
    named: w,
    plural: l,
    linked: (b, ...M) => {
      const [W, $] = M;
      let K = "text", V = "";
      M.length === 1 ? ge(W) ? (V = W.modifier || V, K = W.type || K) : q(W) && (V = W || V) : M.length === 2 && (q(W) && (V = W || V), q($) && (K = $ || K));
      const F = T(b, !0)(H), Q = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        K === "vnode" && De(F) && V ? F[0] : F
      );
      return V ? O(V)(Q, K) : Q;
    },
    message: T,
    type: Y,
    interpolate: U,
    normalize: P,
    values: Be(Ie(), f, _)
  };
  return H;
}
const tc = () => "", Tt = (i) => Ae(i);
function nc(i, ...r) {
  const { fallbackFormat: n, postTranslation: a, unresolving: o, messageCompiler: l, fallbackLocale: f, messages: g } = i, [_, w] = Ca(...r), T = he(w.missingWarn) ? w.missingWarn : i.missingWarn, O = he(w.fallbackWarn) ? w.fallbackWarn : i.fallbackWarn, P = he(w.escapeParameter) ? w.escapeParameter : i.escapeParameter, U = !!w.resolvedMessage, Y = q(w.default) || he(w.default) ? he(w.default) ? l ? _ : () => _ : w.default : n ? l ? _ : () => _ : null, G = n || Y != null && (q(Y) || Ae(Y)), H = Ya(i, w);
  P && mw(w);
  let [b, M, W] = U ? [
    _,
    H,
    g[H] || Ie()
  ] : Zc(i, _, H, f, O, T), $ = b, K = _;
  if (!U && !(q($) || Bt($) || Tt($)) && G && ($ = Y, K = $), !U && (!(q($) || Bt($) || Tt($)) || !q(M)))
    return o ? Vi : _;
  let V = !1;
  const F = () => {
    V = !0;
  }, Q = Tt($) ? $ : jc(i, _, M, $, K, F);
  if (V)
    return $;
  const Z = ww(i, M, W, w), Ee = pw(Z), Ke = yw(i, Q, Ee);
  let me = a ? a(Ke, _) : Ke;
  if (P && q(me) && (me = Qv(me)), __INTLIFY_PROD_DEVTOOLS__) {
    const pt = {
      timestamp: Date.now(),
      key: q(_) ? _ : Tt($) ? $.key : "",
      locale: M || (Tt($) ? $.locale : ""),
      format: q($) ? $ : Tt($) ? $.source : "",
      message: me
    };
    pt.meta = Be({}, i.__meta, /* @__PURE__ */ iw() || {}), k0(pt);
  }
  return me;
}
function mw(i) {
  De(i.list) ? i.list = i.list.map((r) => q(r) ? Fl(r) : r) : ge(i.named) && Object.keys(i.named).forEach((r) => {
    q(i.named[r]) && (i.named[r] = Fl(i.named[r]));
  });
}
function Zc(i, r, n, a, o, l) {
  const { messages: f, onWarn: g, messageResolver: _, localeFallbacker: w } = i, T = w(i, a, n);
  let O = Ie(), P, U = null;
  const Y = "translate";
  for (let G = 0; G < T.length && (P = T[G], O = f[P] || Ie(), (U = _(O, r)) === null && (U = O[r]), !(q(U) || Bt(U) || Tt(U))); G++)
    if (!uw(P, T)) {
      const H = qa(
        i,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        r,
        P,
        l,
        Y
      );
      H !== r && (U = H);
    }
  return [U, P, O];
}
function jc(i, r, n, a, o, l) {
  const { messageCompiler: f, warnHtmlMessage: g } = i;
  if (Tt(a)) {
    const w = a;
    return w.locale = w.locale || n, w.key = w.key || r, w;
  }
  if (f == null) {
    const w = () => a;
    return w.locale = n, w.key = r, w;
  }
  const _ = f(a, vw(i, n, o, a, g, l));
  return _.locale = n, _.key = r, _.source = a, _;
}
function yw(i, r, n) {
  return r(n);
}
function Ca(...i) {
  const [r, n, a] = i, o = Ie();
  if (!q(r) && !ke(r) && !Tt(r) && !Bt(r))
    throw sn(rn.INVALID_ARGUMENT);
  const l = ke(r) ? String(r) : (Tt(r), r);
  return ke(n) ? o.plural = n : q(n) ? o.default = n : ue(n) && !Bi(n) ? o.named = n : De(n) && (o.list = n), ke(a) ? o.plural = a : q(a) ? o.default = a : ue(a) && Be(o, a), [l, o];
}
function vw(i, r, n, a, o, l) {
  return {
    locale: r,
    key: n,
    warnHtmlMessage: o,
    onError: (f) => {
      throw l && l(f), f;
    },
    onCacheKey: (f) => qv(r, n, f)
  };
}
function ww(i, r, n, a) {
  const { modifiers: o, pluralRules: l, messageResolver: f, fallbackLocale: g, fallbackWarn: _, missingWarn: w, fallbackContext: T } = i, P = {
    locale: r,
    modifiers: o,
    pluralRules: l,
    messages: (U, Y) => {
      let G = f(n, U);
      if (G == null && (T || Y)) {
        const [, , H] = Zc(
          T || i,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          U,
          r,
          g,
          _,
          w
        );
        G = f(H, U);
      }
      if (q(G) || Bt(G)) {
        let H = !1;
        const M = jc(i, U, r, G, U, () => {
          H = !0;
        });
        return H ? tc : M;
      } else return Tt(G) ? G : tc;
    }
  };
  return i.processor && (P.processor = i.processor), a.list && (P.list = a.list), a.named && (P.named = a.named), ke(a.plural) && (P.pluralIndex = a.plural), P;
}
R0();
/*!
  * vue-i18n v10.0.8
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ew = "10.0.8";
function Iw() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (kn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (kn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (kn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (kn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const tt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: W0,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32
};
function ot(i, ...r) {
  return Gi(i, null, void 0);
}
const Na = /* @__PURE__ */ Ln("__translateVNode"), Pa = /* @__PURE__ */ Ln("__datetimeParts"), xa = /* @__PURE__ */ Ln("__numberParts"), ef = Ln("__setPluralRules"), tf = /* @__PURE__ */ Ln("__injectWithOption"), Da = /* @__PURE__ */ Ln("__dispose");
function Kr(i) {
  if (!ge(i) || Bt(i))
    return i;
  for (const r in i)
    if (Dt(i, r))
      if (!r.includes("."))
        ge(i[r]) && Kr(i[r]);
      else {
        const n = r.split("."), a = n.length - 1;
        let o = i, l = !1;
        for (let f = 0; f < a; f++) {
          if (n[f] === "__proto__")
            throw new Error(`unsafe key: ${n[f]}`);
          if (n[f] in o || (o[n[f]] = Ie()), !ge(o[n[f]])) {
            l = !0;
            break;
          }
          o = o[n[f]];
        }
        if (l || (Bt(o) ? Bc.includes(n[a]) || delete i[r] : (o[n[a]] = i[r], delete i[r])), !Bt(o)) {
          const f = o[n[a]];
          ge(f) && Kr(f);
        }
      }
  return i;
}
function Xa(i, r) {
  const { messages: n, __i18n: a, messageResolver: o, flatJson: l } = r, f = ue(n) ? n : De(a) ? Ie() : { [i]: Ie() };
  if (De(a) && a.forEach((g) => {
    if ("locale" in g && "resource" in g) {
      const { locale: _, resource: w } = g;
      _ ? (f[_] = f[_] || Ie(), Di(w, f[_])) : Di(w, f);
    } else
      q(g) && Di(JSON.parse(g), f);
  }), o == null && l)
    for (const g in f)
      Dt(f, g) && Kr(f[g]);
  return f;
}
function nf(i) {
  return i.type;
}
function rf(i, r, n) {
  let a = ge(r.messages) ? r.messages : Ie();
  "__i18nGlobal" in n && (a = Xa(i.locale.value, {
    messages: a,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(a);
  o.length && o.forEach((l) => {
    i.mergeLocaleMessage(l, a[l]);
  });
  {
    if (ge(r.datetimeFormats)) {
      const l = Object.keys(r.datetimeFormats);
      l.length && l.forEach((f) => {
        i.mergeDateTimeFormat(f, r.datetimeFormats[f]);
      });
    }
    if (ge(r.numberFormats)) {
      const l = Object.keys(r.numberFormats);
      l.length && l.forEach((f) => {
        i.mergeNumberFormat(f, r.numberFormats[f]);
      });
    }
  }
}
function rc(i) {
  return Zy(jy, null, i, 0);
}
const ic = "__INTLIFY_META__", sc = () => [], bw = () => !1;
let ac = 0;
function oc(i) {
  return (r, n, a, o) => i(n, a, Dr() || void 0, o);
}
const Lw = /* @__NO_SIDE_EFFECTS__ */ () => {
  const i = Dr();
  let r = null;
  return i && (r = nf(i)[ic]) ? { [ic]: r } : null;
};
function za(i = {}) {
  const { __root: r, __injectWithOption: n } = i, a = r === void 0, o = i.flatJson, l = ki ? Wi : zy;
  let f = he(i.inheritLocale) ? i.inheritLocale : !0;
  const g = l(
    // prettier-ignore
    r && f ? r.locale.value : q(i.locale) ? i.locale : kr
  ), _ = l(
    // prettier-ignore
    r && f ? r.fallbackLocale.value : q(i.fallbackLocale) || De(i.fallbackLocale) || ue(i.fallbackLocale) || i.fallbackLocale === !1 ? i.fallbackLocale : g.value
  ), w = l(Xa(g.value, i)), T = l(ue(i.datetimeFormats) ? i.datetimeFormats : { [g.value]: {} }), O = l(ue(i.numberFormats) ? i.numberFormats : { [g.value]: {} });
  let P = r ? r.missingWarn : he(i.missingWarn) || ir(i.missingWarn) ? i.missingWarn : !0, U = r ? r.fallbackWarn : he(i.fallbackWarn) || ir(i.fallbackWarn) ? i.fallbackWarn : !0, Y = r ? r.fallbackRoot : he(i.fallbackRoot) ? i.fallbackRoot : !0, G = !!i.fallbackFormat, H = Ae(i.missing) ? i.missing : null, b = Ae(i.missing) ? oc(i.missing) : null, M = Ae(i.postTranslation) ? i.postTranslation : null, W = r ? r.warnHtmlMessage : he(i.warnHtmlMessage) ? i.warnHtmlMessage : !0, $ = !!i.escapeParameter;
  const K = r ? r.modifiers : ue(i.modifiers) ? i.modifiers : {};
  let V = i.pluralRules || r && r.pluralRules, F;
  F = (() => {
    a && Xl(null);
    const S = {
      version: Ew,
      locale: g.value,
      fallbackLocale: _.value,
      messages: w.value,
      modifiers: K,
      pluralRules: V,
      missing: b === null ? void 0 : b,
      missingWarn: P,
      fallbackWarn: U,
      fallbackFormat: G,
      unresolving: !0,
      postTranslation: M === null ? void 0 : M,
      warnHtmlMessage: W,
      escapeParameter: $,
      messageResolver: i.messageResolver,
      messageCompiler: i.messageCompiler,
      __meta: { framework: "vue" }
    };
    S.datetimeFormats = T.value, S.numberFormats = O.value, S.__datetimeFormatters = ue(F) ? F.__datetimeFormatters : void 0, S.__numberFormatters = ue(F) ? F.__numberFormatters : void 0;
    const k = aw(S);
    return a && Xl(k), k;
  })(), Ar(F, g.value, _.value);
  function Z() {
    return [
      g.value,
      _.value,
      w.value,
      T.value,
      O.value
    ];
  }
  const Ee = nr({
    get: () => g.value,
    set: (S) => {
      g.value = S, F.locale = g.value;
    }
  }), Ke = nr({
    get: () => _.value,
    set: (S) => {
      _.value = S, F.fallbackLocale = _.value, Ar(F, g.value, S);
    }
  }), me = nr(() => w.value), pt = /* @__PURE__ */ nr(() => T.value), an = /* @__PURE__ */ nr(() => O.value);
  function Tn() {
    return Ae(M) ? M : null;
  }
  function Ot(S) {
    M = S, F.postTranslation = S;
  }
  function $e() {
    return H;
  }
  function mt(S) {
    S !== null && (b = oc(S)), H = S, F.missing = b;
  }
  const At = (S, k, ye, Le, nt, fn) => {
    Z();
    let Ft;
    try {
      __INTLIFY_PROD_DEVTOOLS__, a || (F.fallbackContext = r ? sw() : void 0), Ft = S(F);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, a || (F.fallbackContext = void 0);
    }
    if (ye !== "translate exists" && // for not `te` (e.g `t`)
    ke(Ft) && Ft === Vi || ye === "translate exists" && !Ft) {
      const [hr, Hr] = k();
      return r && Y ? Le(r) : nt(hr);
    } else {
      if (fn(Ft))
        return Ft;
      throw ot(tt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Gt(...S) {
    return At((k) => Reflect.apply(nc, null, [k, ...S]), () => Ca(...S), "translate", (k) => Reflect.apply(k.t, k, [...S]), (k) => k, (k) => q(k));
  }
  function Je(...S) {
    const [k, ye, Le] = S;
    if (Le && !ge(Le))
      throw ot(tt.INVALID_ARGUMENT);
    return Gt(k, ye, Be({ resolvedMessage: !0 }, Le || {}));
  }
  function or(...S) {
    return At((k) => Reflect.apply(Jl, null, [k, ...S]), () => Aa(...S), "datetime format", (k) => Reflect.apply(k.d, k, [...S]), () => Yl, (k) => q(k));
  }
  function ur(...S) {
    return At((k) => Reflect.apply(Zl, null, [k, ...S]), () => $a(...S), "number format", (k) => Reflect.apply(k.n, k, [...S]), () => Yl, (k) => q(k));
  }
  function lr(S) {
    return S.map((k) => q(k) || ke(k) || he(k) ? rc(String(k)) : k);
  }
  const on = {
    normalize: lr,
    interpolate: (S) => S,
    type: "vnode"
  };
  function cr(...S) {
    return At((k) => {
      let ye;
      const Le = k;
      try {
        Le.processor = on, ye = Reflect.apply(nc, null, [Le, ...S]);
      } finally {
        Le.processor = null;
      }
      return ye;
    }, () => Ca(...S), "translate", (k) => k[Na](...S), (k) => [rc(k)], (k) => De(k));
  }
  function Mt(...S) {
    return At((k) => Reflect.apply(Zl, null, [k, ...S]), () => $a(...S), "number format", (k) => k[xa](...S), sc, (k) => q(k) || De(k));
  }
  function Yt(...S) {
    return At((k) => Reflect.apply(Jl, null, [k, ...S]), () => Aa(...S), "datetime format", (k) => k[Pa](...S), sc, (k) => q(k) || De(k));
  }
  function fr(S) {
    V = S, F.pluralRules = V;
  }
  function un(S, k) {
    return At(() => {
      if (!S)
        return !1;
      const ye = q(k) ? k : g.value, Le = Ge(ye), nt = F.messageResolver(Le, S);
      return Bt(nt) || Tt(nt) || q(nt);
    }, () => [S], "translate exists", (ye) => Reflect.apply(ye.te, ye, [S, k]), bw, (ye) => he(ye));
  }
  function ln(S) {
    let k = null;
    const ye = Gc(F, _.value, g.value);
    for (let Le = 0; Le < ye.length; Le++) {
      const nt = w.value[ye[Le]] || {}, fn = F.messageResolver(nt, S);
      if (fn != null) {
        k = fn;
        break;
      }
    }
    return k;
  }
  function cn(S) {
    const k = ln(S);
    return k ?? (r ? r.tm(S) || {} : {});
  }
  function Ge(S) {
    return w.value[S] || {};
  }
  function yt(S, k) {
    if (o) {
      const ye = { [S]: k };
      for (const Le in ye)
        Dt(ye, Le) && Kr(ye[Le]);
      k = ye[S];
    }
    w.value[S] = k, F.messages = w.value;
  }
  function On(S, k) {
    w.value[S] = w.value[S] || {};
    const ye = { [S]: k };
    if (o)
      for (const Le in ye)
        Dt(ye, Le) && Kr(ye[Le]);
    k = ye[S], Di(k, w.value[S]), F.messages = w.value;
  }
  function ut(S) {
    return T.value[S] || {};
  }
  function y(S, k) {
    T.value[S] = k, F.datetimeFormats = T.value, Ql(F, S, k);
  }
  function v(S, k) {
    T.value[S] = Be(T.value[S] || {}, k), F.datetimeFormats = T.value, Ql(F, S, k);
  }
  function x(S) {
    return O.value[S] || {};
  }
  function z(S, k) {
    O.value[S] = k, F.numberFormats = O.value, jl(F, S, k);
  }
  function be(S, k) {
    O.value[S] = Be(O.value[S] || {}, k), F.numberFormats = O.value, jl(F, S, k);
  }
  ac++, r && ki && (xr(r.locale, (S) => {
    f && (g.value = S, F.locale = S, Ar(F, g.value, _.value));
  }), xr(r.fallbackLocale, (S) => {
    f && (_.value = S, F.fallbackLocale = S, Ar(F, g.value, _.value));
  }));
  const re = {
    id: ac,
    locale: Ee,
    fallbackLocale: Ke,
    get inheritLocale() {
      return f;
    },
    set inheritLocale(S) {
      f = S, S && r && (g.value = r.locale.value, _.value = r.fallbackLocale.value, Ar(F, g.value, _.value));
    },
    get availableLocales() {
      return Object.keys(w.value).sort();
    },
    messages: me,
    get modifiers() {
      return K;
    },
    get pluralRules() {
      return V || {};
    },
    get isGlobal() {
      return a;
    },
    get missingWarn() {
      return P;
    },
    set missingWarn(S) {
      P = S, F.missingWarn = P;
    },
    get fallbackWarn() {
      return U;
    },
    set fallbackWarn(S) {
      U = S, F.fallbackWarn = U;
    },
    get fallbackRoot() {
      return Y;
    },
    set fallbackRoot(S) {
      Y = S;
    },
    get fallbackFormat() {
      return G;
    },
    set fallbackFormat(S) {
      G = S, F.fallbackFormat = G;
    },
    get warnHtmlMessage() {
      return W;
    },
    set warnHtmlMessage(S) {
      W = S, F.warnHtmlMessage = S;
    },
    get escapeParameter() {
      return $;
    },
    set escapeParameter(S) {
      $ = S, F.escapeParameter = S;
    },
    t: Gt,
    getLocaleMessage: Ge,
    setLocaleMessage: yt,
    mergeLocaleMessage: On,
    getPostTranslationHandler: Tn,
    setPostTranslationHandler: Ot,
    getMissingHandler: $e,
    setMissingHandler: mt,
    [ef]: fr
  };
  return re.datetimeFormats = pt, re.numberFormats = an, re.rt = Je, re.te = un, re.tm = cn, re.d = or, re.n = ur, re.getDateTimeFormat = ut, re.setDateTimeFormat = y, re.mergeDateTimeFormat = v, re.getNumberFormat = x, re.setNumberFormat = z, re.mergeNumberFormat = be, re[tf] = n, re[Na] = cr, re[Pa] = Yt, re[xa] = Mt, re;
}
function Rw(i) {
  const r = q(i.locale) ? i.locale : kr, n = q(i.fallbackLocale) || De(i.fallbackLocale) || ue(i.fallbackLocale) || i.fallbackLocale === !1 ? i.fallbackLocale : r, a = Ae(i.missing) ? i.missing : void 0, o = he(i.silentTranslationWarn) || ir(i.silentTranslationWarn) ? !i.silentTranslationWarn : !0, l = he(i.silentFallbackWarn) || ir(i.silentFallbackWarn) ? !i.silentFallbackWarn : !0, f = he(i.fallbackRoot) ? i.fallbackRoot : !0, g = !!i.formatFallbackMessages, _ = ue(i.modifiers) ? i.modifiers : {}, w = i.pluralizationRules, T = Ae(i.postTranslation) ? i.postTranslation : void 0, O = q(i.warnHtmlInMessage) ? i.warnHtmlInMessage !== "off" : !0, P = !!i.escapeParameterHtml, U = he(i.sync) ? i.sync : !0;
  let Y = i.messages;
  if (ue(i.sharedMessages)) {
    const K = i.sharedMessages;
    Y = Object.keys(K).reduce((F, Q) => {
      const Z = F[Q] || (F[Q] = {});
      return Be(Z, K[Q]), F;
    }, Y || {});
  }
  const { __i18n: G, __root: H, __injectWithOption: b } = i, M = i.datetimeFormats, W = i.numberFormats, $ = i.flatJson;
  return {
    locale: r,
    fallbackLocale: n,
    messages: Y,
    flatJson: $,
    datetimeFormats: M,
    numberFormats: W,
    missing: a,
    missingWarn: o,
    fallbackWarn: l,
    fallbackRoot: f,
    fallbackFormat: g,
    modifiers: _,
    pluralRules: w,
    postTranslation: T,
    warnHtmlMessage: O,
    escapeParameter: P,
    messageResolver: i.messageResolver,
    inheritLocale: U,
    __i18n: G,
    __root: H,
    __injectWithOption: b
  };
}
function Ma(i = {}) {
  const r = za(Rw(i)), { __extender: n } = i, a = {
    // id
    id: r.id,
    // locale
    get locale() {
      return r.locale.value;
    },
    set locale(o) {
      r.locale.value = o;
    },
    // fallbackLocale
    get fallbackLocale() {
      return r.fallbackLocale.value;
    },
    set fallbackLocale(o) {
      r.fallbackLocale.value = o;
    },
    // messages
    get messages() {
      return r.messages.value;
    },
    // datetimeFormats
    get datetimeFormats() {
      return r.datetimeFormats.value;
    },
    // numberFormats
    get numberFormats() {
      return r.numberFormats.value;
    },
    // availableLocales
    get availableLocales() {
      return r.availableLocales;
    },
    // missing
    get missing() {
      return r.getMissingHandler();
    },
    set missing(o) {
      r.setMissingHandler(o);
    },
    // silentTranslationWarn
    get silentTranslationWarn() {
      return he(r.missingWarn) ? !r.missingWarn : r.missingWarn;
    },
    set silentTranslationWarn(o) {
      r.missingWarn = he(o) ? !o : o;
    },
    // silentFallbackWarn
    get silentFallbackWarn() {
      return he(r.fallbackWarn) ? !r.fallbackWarn : r.fallbackWarn;
    },
    set silentFallbackWarn(o) {
      r.fallbackWarn = he(o) ? !o : o;
    },
    // modifiers
    get modifiers() {
      return r.modifiers;
    },
    // formatFallbackMessages
    get formatFallbackMessages() {
      return r.fallbackFormat;
    },
    set formatFallbackMessages(o) {
      r.fallbackFormat = o;
    },
    // postTranslation
    get postTranslation() {
      return r.getPostTranslationHandler();
    },
    set postTranslation(o) {
      r.setPostTranslationHandler(o);
    },
    // sync
    get sync() {
      return r.inheritLocale;
    },
    set sync(o) {
      r.inheritLocale = o;
    },
    // warnInHtmlMessage
    get warnHtmlInMessage() {
      return r.warnHtmlMessage ? "warn" : "off";
    },
    set warnHtmlInMessage(o) {
      r.warnHtmlMessage = o !== "off";
    },
    // escapeParameterHtml
    get escapeParameterHtml() {
      return r.escapeParameter;
    },
    set escapeParameterHtml(o) {
      r.escapeParameter = o;
    },
    // pluralizationRules
    get pluralizationRules() {
      return r.pluralRules || {};
    },
    // for internal
    __composer: r,
    // t
    t(...o) {
      return Reflect.apply(r.t, r, [...o]);
    },
    // rt
    rt(...o) {
      return Reflect.apply(r.rt, r, [...o]);
    },
    // tc
    tc(...o) {
      const [l, f, g] = o, _ = { plural: 1 };
      let w = null, T = null;
      if (!q(l))
        throw ot(tt.INVALID_ARGUMENT);
      const O = l;
      return q(f) ? _.locale = f : ke(f) ? _.plural = f : De(f) ? w = f : ue(f) && (T = f), q(g) ? _.locale = g : De(g) ? w = g : ue(g) && (T = g), Reflect.apply(r.t, r, [
        O,
        w || T || {},
        _
      ]);
    },
    // te
    te(o, l) {
      return r.te(o, l);
    },
    // tm
    tm(o) {
      return r.tm(o);
    },
    // getLocaleMessage
    getLocaleMessage(o) {
      return r.getLocaleMessage(o);
    },
    // setLocaleMessage
    setLocaleMessage(o, l) {
      r.setLocaleMessage(o, l);
    },
    // mergeLocaleMessage
    mergeLocaleMessage(o, l) {
      r.mergeLocaleMessage(o, l);
    },
    // d
    d(...o) {
      return Reflect.apply(r.d, r, [...o]);
    },
    // getDateTimeFormat
    getDateTimeFormat(o) {
      return r.getDateTimeFormat(o);
    },
    // setDateTimeFormat
    setDateTimeFormat(o, l) {
      r.setDateTimeFormat(o, l);
    },
    // mergeDateTimeFormat
    mergeDateTimeFormat(o, l) {
      r.mergeDateTimeFormat(o, l);
    },
    // n
    n(...o) {
      return Reflect.apply(r.n, r, [...o]);
    },
    // getNumberFormat
    getNumberFormat(o) {
      return r.getNumberFormat(o);
    },
    // setNumberFormat
    setNumberFormat(o, l) {
      r.setNumberFormat(o, l);
    },
    // mergeNumberFormat
    mergeNumberFormat(o, l) {
      r.mergeNumberFormat(o, l);
    }
  };
  return a.__extender = n, a;
}
function Sw(i, r, n) {
  return {
    beforeCreate() {
      const a = Dr();
      if (!a)
        throw ot(tt.UNEXPECTED_ERROR);
      const o = this.$options;
      if (o.i18n) {
        const l = o.i18n;
        if (o.__i18n && (l.__i18n = o.__i18n), l.__root = r, this === this.$root)
          this.$i18n = uc(i, l);
        else {
          l.__injectWithOption = !0, l.__extender = n.__vueI18nExtend, this.$i18n = Ma(l);
          const f = this.$i18n;
          f.__extender && (f.__disposer = f.__extender(this.$i18n));
        }
      } else if (o.__i18n)
        if (this === this.$root)
          this.$i18n = uc(i, o);
        else {
          this.$i18n = Ma({
            __i18n: o.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: r
          });
          const l = this.$i18n;
          l.__extender && (l.__disposer = l.__extender(this.$i18n));
        }
      else
        this.$i18n = i;
      o.__i18nGlobal && rf(r, o, o), this.$t = (...l) => this.$i18n.t(...l), this.$rt = (...l) => this.$i18n.rt(...l), this.$tc = (...l) => this.$i18n.tc(...l), this.$te = (l, f) => this.$i18n.te(l, f), this.$d = (...l) => this.$i18n.d(...l), this.$n = (...l) => this.$i18n.n(...l), this.$tm = (l) => this.$i18n.tm(l), n.__setInstance(a, this.$i18n);
    },
    mounted() {
    },
    unmounted() {
      const a = Dr();
      if (!a)
        throw ot(tt.UNEXPECTED_ERROR);
      const o = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, o.__disposer && (o.__disposer(), delete o.__disposer, delete o.__extender), n.__deleteInstance(a), delete this.$i18n;
    }
  };
}
function uc(i, r) {
  i.locale = r.locale || i.locale, i.fallbackLocale = r.fallbackLocale || i.fallbackLocale, i.missing = r.missing || i.missing, i.silentTranslationWarn = r.silentTranslationWarn || i.silentFallbackWarn, i.silentFallbackWarn = r.silentFallbackWarn || i.silentFallbackWarn, i.formatFallbackMessages = r.formatFallbackMessages || i.formatFallbackMessages, i.postTranslation = r.postTranslation || i.postTranslation, i.warnHtmlInMessage = r.warnHtmlInMessage || i.warnHtmlInMessage, i.escapeParameterHtml = r.escapeParameterHtml || i.escapeParameterHtml, i.sync = r.sync || i.sync, i.__composer[ef](r.pluralizationRules || i.pluralizationRules);
  const n = Xa(i.locale, {
    messages: r.messages,
    __i18n: r.__i18n
  });
  return Object.keys(n).forEach((a) => i.mergeLocaleMessage(a, n[a])), r.datetimeFormats && Object.keys(r.datetimeFormats).forEach((a) => i.mergeDateTimeFormat(a, r.datetimeFormats[a])), r.numberFormats && Object.keys(r.numberFormats).forEach((a) => i.mergeNumberFormat(a, r.numberFormats[a])), i;
}
const Ja = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (i) => i === "parent" || i === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function Tw({ slots: i }, r) {
  return r.length === 1 && r[0] === "default" ? (i.default ? i.default() : []).reduce((a, o) => [
    ...a,
    // prettier-ignore
    ...o.type === Ec ? o.children : [o]
  ], []) : r.reduce((n, a) => {
    const o = i[a];
    return o && (n[a] = o()), n;
  }, Ie());
}
function sf() {
  return Ec;
}
const Ow = /* @__PURE__ */ Ka({
  /* eslint-disable */
  name: "i18n-t",
  props: Be({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: (i) => ke(i) || !isNaN(i)
    }
  }, Ja),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(i, r) {
    const { slots: n, attrs: a } = r, o = i.i18n || Qa({
      useScope: i.scope,
      __useComponent: !0
    });
    return () => {
      const l = Object.keys(n).filter((O) => O !== "_"), f = Ie();
      i.locale && (f.locale = i.locale), i.plural !== void 0 && (f.plural = q(i.plural) ? +i.plural : i.plural);
      const g = Tw(r, l), _ = o[Na](i.keypath, g, f), w = Be(Ie(), a), T = q(i.tag) || ge(i.tag) ? i.tag : sf();
      return wc(T, w, _);
    };
  }
}), lc = Ow;
function Aw(i) {
  return De(i) && !q(i[0]);
}
function af(i, r, n, a) {
  const { slots: o, attrs: l } = r;
  return () => {
    const f = { part: !0 };
    let g = Ie();
    i.locale && (f.locale = i.locale), q(i.format) ? f.key = i.format : ge(i.format) && (q(i.format.key) && (f.key = i.format.key), g = Object.keys(i.format).reduce((P, U) => n.includes(U) ? Be(Ie(), P, { [U]: i.format[U] }) : P, Ie()));
    const _ = a(i.value, f, g);
    let w = [f.key];
    De(_) ? w = _.map((P, U) => {
      const Y = o[P.type], G = Y ? Y({ [P.type]: P.value, index: U, parts: _ }) : [P.value];
      return Aw(G) && (G[0].key = `${P.type}-${U}`), G;
    }) : q(_) && (w = [_]);
    const T = Be(Ie(), l), O = q(i.tag) || ge(i.tag) ? i.tag : sf();
    return wc(O, T, w);
  };
}
const $w = /* @__PURE__ */ Ka({
  /* eslint-disable */
  name: "i18n-n",
  props: Be({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Ja),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(i, r) {
    const n = i.i18n || Qa({
      useScope: i.scope,
      __useComponent: !0
    });
    return af(i, r, Qc, (...a) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[xa](...a)
    ));
  }
}), cc = $w, Cw = /* @__PURE__ */ Ka({
  /* eslint-disable */
  name: "i18n-d",
  props: Be({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Ja),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(i, r) {
    const n = i.i18n || Qa({
      useScope: i.scope,
      __useComponent: !0
    });
    return af(i, r, Jc, (...a) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Pa](...a)
    ));
  }
}), fc = Cw;
function Nw(i, r) {
  const n = i;
  if (i.mode === "composition")
    return n.__getInstance(r) || i.global;
  {
    const a = n.__getInstance(r);
    return a != null ? a.__composer : i.global.__composer;
  }
}
function Pw(i) {
  const r = (f) => {
    const { instance: g, value: _ } = f;
    if (!g || !g.$)
      throw ot(tt.UNEXPECTED_ERROR);
    const w = Nw(i, g.$), T = hc(_);
    return [
      Reflect.apply(w.t, w, [...dc(T)]),
      w
    ];
  };
  return {
    created: (f, g) => {
      const [_, w] = r(g);
      ki && i.global === w && (f.__i18nWatcher = xr(w.locale, () => {
        g.instance && g.instance.$forceUpdate();
      })), f.__composer = w, f.textContent = _;
    },
    unmounted: (f) => {
      ki && f.__i18nWatcher && (f.__i18nWatcher(), f.__i18nWatcher = void 0, delete f.__i18nWatcher), f.__composer && (f.__composer = void 0, delete f.__composer);
    },
    beforeUpdate: (f, { value: g }) => {
      if (f.__composer) {
        const _ = f.__composer, w = hc(g);
        f.textContent = Reflect.apply(_.t, _, [
          ...dc(w)
        ]);
      }
    },
    getSSRProps: (f) => {
      const [g] = r(f);
      return { textContent: g };
    }
  };
}
function hc(i) {
  if (q(i))
    return { path: i };
  if (ue(i)) {
    if (!("path" in i))
      throw ot(tt.REQUIRED_VALUE, "path");
    return i;
  } else
    throw ot(tt.INVALID_VALUE);
}
function dc(i) {
  const { path: r, locale: n, args: a, choice: o, plural: l } = i, f = {}, g = a || {};
  return q(n) && (f.locale = n), ke(o) && (f.plural = o), ke(l) && (f.plural = l), [r, g, f];
}
function xw(i, r, ...n) {
  const a = ue(n[0]) ? n[0] : {};
  (he(a.globalInstall) ? a.globalInstall : !0) && ([lc.name, "I18nT"].forEach((l) => i.component(l, lc)), [cc.name, "I18nN"].forEach((l) => i.component(l, cc)), [fc.name, "I18nD"].forEach((l) => i.component(l, fc))), i.directive("t", Pw(r));
}
const Dw = /* @__PURE__ */ Ln("global-vue-i18n");
function Mw(i = {}, r) {
  const n = __VUE_I18N_LEGACY_API__ && he(i.legacy) ? i.legacy : __VUE_I18N_LEGACY_API__, a = he(i.globalInjection) ? i.globalInjection : !0, o = /* @__PURE__ */ new Map(), [l, f] = Fw(i, n), g = /* @__PURE__ */ Ln("");
  function _(P) {
    return o.get(P) || null;
  }
  function w(P, U) {
    o.set(P, U);
  }
  function T(P) {
    o.delete(P);
  }
  const O = {
    // mode
    get mode() {
      return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
    },
    // install plugin
    async install(P, ...U) {
      if (P.__VUE_I18N_SYMBOL__ = g, P.provide(P.__VUE_I18N_SYMBOL__, O), ue(U[0])) {
        const H = U[0];
        O.__composerExtend = H.__composerExtend, O.__vueI18nExtend = H.__vueI18nExtend;
      }
      let Y = null;
      !n && a && (Y = Vw(P, O.global)), __VUE_I18N_FULL_INSTALL__ && xw(P, O, ...U), __VUE_I18N_LEGACY_API__ && n && P.mixin(Sw(f, f.__composer, O));
      const G = P.unmount;
      P.unmount = () => {
        Y && Y(), O.dispose(), G();
      };
    },
    // global accessor
    get global() {
      return f;
    },
    dispose() {
      l.stop();
    },
    // @internal
    __instances: o,
    // @internal
    __getInstance: _,
    // @internal
    __setInstance: w,
    // @internal
    __deleteInstance: T
  };
  return O;
}
function Qa(i = {}) {
  const r = Dr();
  if (r == null)
    throw ot(tt.MUST_BE_CALL_SETUP_TOP);
  if (!r.isCE && r.appContext.app != null && !r.appContext.app.__VUE_I18N_SYMBOL__)
    throw ot(tt.NOT_INSTALLED);
  const n = kw(r), a = Ww(n), o = nf(r), l = Kw(i, o);
  if (l === "global")
    return rf(a, i, o), a;
  if (l === "parent") {
    let _ = Uw(n, r, i.__useComponent);
    return _ == null && (_ = a), _;
  }
  const f = n;
  let g = f.__getInstance(r);
  if (g == null) {
    const _ = Be({}, i);
    "__i18n" in o && (_.__i18n = o.__i18n), a && (_.__root = a), g = za(_), f.__composerExtend && (g[Da] = f.__composerExtend(g)), Bw(f, r, g), f.__setInstance(r, g);
  }
  return g;
}
function Fw(i, r, n) {
  const a = ka(), o = __VUE_I18N_LEGACY_API__ && r ? a.run(() => Ma(i)) : a.run(() => za(i));
  if (o == null)
    throw ot(tt.UNEXPECTED_ERROR);
  return [a, o];
}
function kw(i) {
  const r = Ki(i.isCE ? Dw : i.appContext.app.__VUE_I18N_SYMBOL__);
  if (!r)
    throw ot(i.isCE ? tt.NOT_INSTALLED_WITH_PROVIDE : tt.UNEXPECTED_ERROR);
  return r;
}
function Kw(i, r) {
  return Bi(i) ? "__i18n" in r ? "local" : "global" : i.useScope ? i.useScope : "local";
}
function Ww(i) {
  return i.mode === "composition" ? i.global : i.global.__composer;
}
function Uw(i, r, n = !1) {
  let a = null;
  const o = r.root;
  let l = Hw(r, n);
  for (; l != null; ) {
    const f = i;
    if (i.mode === "composition")
      a = f.__getInstance(l);
    else if (__VUE_I18N_LEGACY_API__) {
      const g = f.__getInstance(l);
      g != null && (a = g.__composer, n && a && !a[tf] && (a = null));
    }
    if (a != null || o === l)
      break;
    l = l.parent;
  }
  return a;
}
function Hw(i, r = !1) {
  return i == null ? null : r && i.vnode.ctx || i.parent;
}
function Bw(i, r, n) {
  Jy(() => {
  }, r), Qy(() => {
    const a = n;
    i.__deleteInstance(r);
    const o = a[Da];
    o && (o(), delete a[Da]);
  }, r);
}
const Gw = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], gc = ["t", "rt", "d", "n", "tm", "te"];
function Vw(i, r) {
  const n = /* @__PURE__ */ Object.create(null);
  return Gw.forEach((o) => {
    const l = Object.getOwnPropertyDescriptor(r, o);
    if (!l)
      throw ot(tt.UNEXPECTED_ERROR);
    const f = Pr(l.value) ? {
      get() {
        return l.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(g) {
        l.value.value = g;
      }
    } : {
      get() {
        return l.get && l.get();
      }
    };
    Object.defineProperty(n, o, f);
  }), i.config.globalProperties.$i18n = n, gc.forEach((o) => {
    const l = Object.getOwnPropertyDescriptor(r, o);
    if (!l || !l.value)
      throw ot(tt.UNEXPECTED_ERROR);
    Object.defineProperty(i.config.globalProperties, `$${o}`, l);
  }), () => {
    delete i.config.globalProperties.$i18n, gc.forEach((o) => {
      delete i.config.globalProperties[`$${o}`];
    });
  };
}
Iw();
ew(D0);
tw(Q0);
nw(Gc);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const i = kn();
  i.__INTLIFY__ = !0, M0(i.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
function Yw() {
  const r = (rv("lang", ",") || navigator.languages || ["en"]).map(
    (n) => n.toLowerCase().replace(/[_-](\w+)/, "")
  ).find((n) => n in iv.locales);
  return Mw({
    legacy: !1,
    globalInjection: !0,
    fallbackLocale: "en",
    locale: r
  });
}
function cE({ composer: i = null } = null) {
  var o;
  const r = document.querySelectorAll("script[type='application/i18n']:not([data-loaded])");
  i ?? (i = Yi.global);
  const n = i.messages.value;
  n[o = i.locale.value] ?? (n[o] = {});
  const a = all[i.locale.value];
  r.forEach((l) => {
    const f = JSON.loads(l.innerText);
    Object.assign(a, f), l.dataset.loaded = "1";
  });
}
const Yi = Yw(), fE = Yi.global.t, hE = Yi.global.te;
function dE({ path: i = "./", fallback: r = !0, composer: n = null } = {}) {
  n ?? (n = Yi.global);
  const a = n.messages.value;
  return a[n.locale.value] = window.__i18n_messages, xr(n.locale, (o) => {
    a[o] = window.__i18n_messages;
  }), n;
}
const gE = {
  model: (i) => `models.${i.meta.model}`,
  field: (i) => `fields.${i}`
};
class Ur {
  constructor(r = { app: "" }) {
    Object.assign(this, r);
  }
  /** Return a model instance's title */
  getTitle(r) {
    return this.title ? this.title instanceof Function ? this.title(r) : `${r[this.title]}` : null;
  }
  /** Return API url based on id and path. **/
  getUrl({ path: r = null, id: n = null }) {
    let a = this.url;
    if (!a)
      throw Error("No url declared on this model.");
    return n && (a += `/${n}/`), r && (a += r), `${a}/`.replaceAll("//", "/");
  }
  /** Return permission codename */
  getPermission(r) {
    return `${this.app}.${r}_${this.model}`;
  }
}
class ar extends Vv {
  /** Get model's Meta class */
  get $meta() {
    return this.constructor.meta;
  }
  /** Get instance's title based on Meta class. */
  get $title() {
    return this.$meta.getTitle(this);
  }
  /** Get API's model instance url */
  $url(r) {
    return this.$meta.getUrl({ path: r, id: this.id });
  }
}
/**
 * This static attribute SHOULD be provided by the subclass of this model.
 *
 * It specifies various metadata which are used to provide information to
 * user, API, check permissions, etc.
 */
R(ar, "meta", new Ur({
  app: "ox_core"
})), R(ar, "config", {
  axiosApi: { dataKey: "results" }
});
class Mi extends ar {
  constructor() {
    super(...arguments);
    R(this, "$permissions");
  }
  static fields() {
    return {
      id: this.attr(null),
      app: this.string(""),
      model: this.string(""),
      app_verbose: this.string(""),
      model_verbose: this.string(""),
      $permissions: this.hasMany(bn, "content_type")
    };
  }
  /** Label used as django identifier */
  get label() {
    return `${this.app}.${this.model}`;
  }
  /**
  * Return Permission for the provided action.
  * @param {string} action Permission's action to match.
  * @return Permission or null if not found
  */
  getPermission(n) {
    const a = this.$permissions.filter((o) => o.action == n);
    return a && a[0] || null;
  }
}
R(Mi, "entity", "contentTypes"), R(Mi, "meta", new Ur({
  app: "contenttypes",
  model: "content_type",
  url: "ox/core/content_type/",
  title: "label"
})), R(Mi, "config", {});
class bn extends ar {
  static fields() {
    return {
      id: this.attr(null),
      name: this.string(""),
      label: this.string(""),
      codename: this.string(""),
      content_type: this.attr(null),
      $content_type: this.belongsTo(Mi, "content_type")
    };
  }
  /**
   * Return permission as codename.
   *
   * Perm can be:
   * - a string
   * - a list of [ClassType, actionString]
   */
  // TODO: correct typescript type
  static getCodename(r) {
    if (Array.isArray(r)) {
      const [n, a] = r;
      return `${ev(n).meta.app}.${a}_${n.meta.model}`;
    }
    return r;
  }
  /** Action based on codename */
  get action() {
    return this.codename.split("_")[0];
  }
}
R(bn, "entity", "permissions"), R(bn, "meta", new Ur({
  app: "auth",
  model: "permission",
  url: "ox/core/permission/",
  title: "label"
})), R(bn, "config", {});
class Fa extends ar {
  static fields() {
    return {
      id: this.attr(null),
      name: this.string(""),
      permissions: this.attr([]),
      $permissions: this.hasManyBy(bn, "permissions")
    };
  }
}
R(Fa, "entity", "groups"), R(Fa, "meta", new Ur({
  app: "auth",
  model: "group",
  url: "ox/core/group/",
  icon: "mdi-account-multiple",
  title: "name"
}));
class _c extends ar {
  static fields() {
    return {
      id: this.attr(null),
      username: this.string(""),
      last_name: this.string(""),
      first_name: this.string(""),
      email: this.string(""),
      is_superuser: this.boolean(!1),
      all_permissions: this.attr([]),
      permissions: this.attr([]),
      groups: this.attr([]),
      $permissions: this.hasManyBy(bn, "permissions"),
      $groups: this.hasManyBy(Fa, "groups")
    };
  }
  /**
   * Return `true` if the user has the provided permission.
   *
   * Permission is checked against `all_permissions` field.
   *
   * It can be ({@link Permission.getCodename}):
   * - a string: permission codename
   * - a list of: `[ModelClass, "action string"]`
   *
   * @param perm - Check for this permission ({@link Permission.getCodename} value)
   * @param obj - a `django-caps` `Owned` object: if provided and the object has an `access`, check for object permissions
   * @return whether user has permission or not.
   */
  can(r, n) {
    var o;
    r = bn.getCodename(r);
    const a = ((o = this.all_permissions) == null ? void 0 : o.includes(r)) || !1;
    return a && n && n.access ? r in n.access.grants : a;
  }
  /**
   * Return `true` if the user has any of the provided permissions.
   *
   * Value is checked against `all_permissions` field.
   */
  canAny(r) {
    var n;
    return ((n = this.all_permissions) == null ? void 0 : n.some((a) => r.includes(bn.getCodename(a)))) || !1;
  }
}
R(_c, "entity", "users"), R(_c, "meta", new Ur({
  app: "auth",
  model: "user",
  url: "ox/core/user/",
  icon: "mdi-account",
  title: "username"
}));
export {
  ca as A,
  kv as B,
  Mi as C,
  $l as D,
  xe as E,
  Qw as F,
  Fa as G,
  Kv as H,
  nv as I,
  tE as J,
  nE as K,
  Ur as M,
  bn as P,
  Sa as R,
  zw as S,
  _c as U,
  He as a,
  Wv as b,
  Ht as c,
  sE as d,
  Dl as e,
  ar as f,
  rE as g,
  dE as h,
  Yi as i,
  iE as j,
  aE as k,
  tv as l,
  iv as m,
  Jw as n,
  Zw as o,
  gE as p,
  eE as q,
  jw as r,
  Hi as s,
  fE as t,
  Pv as u,
  Yw as v,
  cE as w,
  hE as x,
  Ic as y,
  rv as z
};
//# sourceMappingURL=index2.js.map
