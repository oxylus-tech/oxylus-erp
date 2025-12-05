import { defineComponent as j, useAttrs as X, inject as U, createElementBlock as w, createCommentVNode as k, unref as e, openBlock as p, Fragment as h, createBlock as y, mergeProps as C, withModifiers as F, ref as R, computed as I, resolveComponent as Fe, withCtx as o, renderList as L, createVNode as b, createTextVNode as _, toDisplayString as N, mergeModels as oe, useModel as ie, renderSlot as v, useSlots as J, reactive as se, onMounted as ae, watch as W, onErrorCaptured as Ue, createElementVNode as G, createSlots as Q, normalizeProps as B, guardReactiveProps as P, shallowRef as je, h as De, defineAsyncComponent as ze, normalizeClass as Ne, withKeys as be, onUnmounted as Re, Teleport as ge, useTemplateRef as qe, toRefs as Ke, withDirectives as We, vShow as Ge } from "vue";
import { useAction as Je, t as g, filterSlots as Y, useAppContext as Qe, usePanels as He, useQuery as Ye, ifNotEqualFn as Xe, defineAsyncComponent as Ze, rules as et, useModelList as tt, Query as lt, ifNotEqual as at, tKeys as st, useModelEditor as nt, useModelPanel as ot } from "@oxylus/ox";
import { V as T, b as H, d as pe, e as it, f as rt, g as Z, h as ut, i as dt, j as pt, k as ke, l as he, n as fe, o as mt, p as Se, q as me, r as ct, s as vt, t as ft, u as yt, v as ne, w as bt, x as gt, y as ce, z as xe, A as Ce, B as kt, C as $t, D as Ae, E as wt, F as Vt, G as Le, H as Ot, I as ht, J as St, K as xt, L as te, M as K, N as Ct, O as At, P as Lt, Q as $e, R as we, S as Mt, T as Bt } from "./vuetify.js";
import { l as ve, J as Pt, E as Tt, t as de, S as _t, r as It, m as Et } from "./index2.js";
import "axios";
import { components as Ft } from "@oxylus/ox/vendor";
const le = /* @__PURE__ */ j({
  __name: "OxAction",
  props: {
    item: {},
    title: {},
    icon: {},
    color: {},
    button: { type: Boolean },
    confirm: {},
    permission: {},
    run: { type: Function },
    href: {}
  },
  emits: ["completed"],
  setup(c, { emit: m }) {
    const u = c, i = X(), n = m, r = U("user"), { run: t, processing: d, allowed: l } = Je({ user: r, emits: n, props: u });
    return (s, a) => e(l) ? (p(), w(h, { key: 0 }, [
      u.button ? (p(), y(T, C({
        key: 0,
        variant: "text"
      }, e(i), {
        disabled: e(d),
        color: u.color,
        icon: u.icon,
        title: u.title,
        "aria-label": u.title,
        onClick: F(e(t), ["stop"])
      }), null, 16, ["disabled", "color", "icon", "title", "aria-label", "onClick"])) : (p(), y(H, C({ key: 1 }, e(i), {
        title: u.title,
        "base-color": u.color,
        "prepend-icon": u.icon,
        disabled: e(d),
        onClick: F(e(t), ["stop"])
      }), null, 16, ["title", "base-color", "prepend-icon", "disabled", "onClick"]))
    ], 64)) : k("", !0);
  }
}), Ut = /* @__PURE__ */ j({
  __name: "OxActionModelDelete",
  props: {
    item: {}
  },
  setup(c) {
    const m = U("panel"), u = U("repos"), i = X(), n = c;
    async function r(t, d) {
      return await u[d.constructor.entity].api().delete(d.$url(), { delete: n.item.id });
    }
    return (t, d) => (p(), y(le, C(e(i), {
      item: n.item,
      icon: "mdi-delete",
      color: "error",
      title: e(g)("actions.delete"),
      confirm: e(g)("actions.delete.confirm"),
      permission: [n.item.constructor, "delete"],
      run: r,
      onCompleted: d[0] || (d[0] = (l) => {
        var s;
        return (s = e(m)) == null ? void 0 : s.show({ view: e(m).index });
      })
    }), null, 16, ["item", "title", "confirm", "permission"]));
  }
}), jt = /* @__PURE__ */ j({
  __name: "OxActionPost",
  props: {
    /**
     * URL path to append to item's url. Should be provided.
     */
    path: String,
    /**
     * HTTP method to use (upper or lower cased)
     */
    method: { type: String, default: "post" },
    /** Model repository to use */
    repo: Object,
    /** POST data to send (optional) */
    data: Object,
    /** Pinia-Orm AXIOS options */
    options: Object
  },
  setup(c) {
    const m = X(), u = c;
    async function i(n, r) {
      const t = u.repo.api();
      return await t[u.method.toLowerCase()].apply(t, [r.$url(u.path), u.data, u.options]);
    }
    return (n, r) => (p(), y(e(le), C(e(m), { run: i }), null, 16));
  }
}), Dt = /* @__PURE__ */ j({
  __name: "OxAppNavItem",
  props: {
    name: {},
    url: {},
    permission: {},
    type: {},
    items: {},
    order: {},
    title: {},
    icon: {}
  },
  setup(c) {
    const m = c;
    R(null);
    const u = U("user"), i = U("panels");
    I(() => !m.auto || panel.name == m.name);
    function n(t) {
      return t.permission && !u.can(t.permission) ? !1 : t.items ? t.items.some((d) => n(d)) : !0;
    }
    function r() {
      const t = { panel: m.name, href: m.url };
      i.show(t);
    }
    return (t, d) => {
      const l = Fe("ox-app-nav-item", !0);
      return n(m) ? (p(), w(h, { key: 0 }, [
        m.type == "group" ? (p(), y(pe, {
          key: 0,
          value: m.name
        }, {
          activator: o(({ props: s }) => [
            b(H, C(s, {
              title: m.title,
              "prepend-icon": m.icon
            }), null, 16, ["title", "prepend-icon"])
          ]),
          default: o(() => [
            (p(!0), w(h, null, L(m.items, (s, a) => (p(), y(l, C({
              key: a,
              ref_for: !0
            }, s, {
              type: s.type == "group" ? "subheader" : s.type
            }), null, 16, ["type"]))), 128))
          ]),
          _: 1
        }, 8, ["value"])) : m.type == "subheader" ? (p(), w(h, { key: 1 }, [
          b(it, null, {
            default: o(() => [
              _(N(m.title), 1)
            ]),
            _: 1
          }),
          m.items ? (p(!0), w(h, { key: 0 }, L(m.items, (s) => (p(), y(l, C({ ref_for: !0 }, s), null, 16))), 256)) : k("", !0)
        ], 64)) : (p(), y(H, {
          key: 2,
          active: e(i).panel == m.name,
          value: m.name,
          "prepend-icon": m.icon,
          title: m.title,
          onClick: F(r, ["stop"])
        }, null, 8, ["active", "value", "prepend-icon", "title"]))
      ], 64)) : k("", !0);
    };
  }
}), zt = {
  __name: "OxAppNav",
  props: /* @__PURE__ */ oe({
    /** The list of items */
    items: Array
  }, {
    drawer: {},
    drawerModifiers: {}
  }),
  emits: ["update:drawer"],
  setup(c) {
    const m = U("panels"), u = ie(c, "drawer"), i = R([]), n = c, r = I(() => (t(n.items), n.items));
    function t(l) {
      i.value = d(l);
    }
    function d(l) {
      if (m.panel) {
        for (const s of l)
          if (s.items) {
            const a = d(s.items);
            if (a)
              return [a, s.name];
          } else if (s.name == m.panel)
            return [s.name];
      }
    }
    return (l, s) => (p(), y(rt, {
      modelValue: u.value,
      "onUpdate:modelValue": s[1] || (s[1] = (a) => u.value = a),
      theme: "dark"
    }, {
      append: o(() => [
        b(Z, null, {
          default: o(() => [
            v(l.$slots, "append")
          ]),
          _: 3
        })
      ]),
      default: o(() => [
        v(l.$slots, "prepend"),
        b(Z, {
          opened: i.value,
          "onUpdate:opened": s[0] || (s[0] = (a) => i.value = a),
          density: "compact"
        }, {
          default: o(() => [
            (p(!0), w(h, null, L(r.value, (a, f) => (p(), y(Dt, C({
              key: f,
              ref_for: !0
            }, a), null, 16))), 128))
          ]),
          _: 1
        }, 8, ["opened"])
      ]),
      _: 3
    }, 8, ["modelValue"]));
  }
}, Nt = {
  class: "nav-home",
  href: "/"
};
var Oe;
const Rt = /* @__PURE__ */ j({
  __name: "OxApp",
  props: {
    apiUrl: {},
    logo: {},
    dataEl: { default: (Oe = document.body.dataset) == null ? void 0 : Oe.appData },
    models: {},
    data: {}
  },
  setup(c) {
    const m = J(), u = Y(m, "panels."), i = c, n = se({ drawer: !0 }), r = Qe(i), t = He();
    return ae(() => {
      t.panel = r.data.panel;
    }), W(() => [r.state.state, r.state.data], () => {
      r.showState = !0;
    }), Ue((d, l, s) => {
      r.state.error(`${d}`);
    }), (d, l) => (p(), y(ut, null, {
      default: o(() => [
        b(dt, {
          modelValue: e(r).showState,
          "onUpdate:modelValue": l[0] || (l[0] = (s) => e(r).showState = s),
          color: e(r).state.color,
          "multi-line": ""
        }, {
          default: o(() => [
            _(N(e(r).state.toString()), 1)
          ]),
          _: 1
        }, 8, ["modelValue", "color"]),
        b(pt, { color: "primary" }, {
          prepend: o(() => [
            e(m)["nav-start"] || e(m)["nav-end"] ? (p(), y(he, {
              key: 0,
              icon: "mdi-apps",
              title: e(g)("nav.panels"),
              "aria-label": e(g)("nav.panels"),
              onClick: l[1] || (l[1] = F((s) => n.drawer = !n.drawer, ["stop"]))
            }, null, 8, ["title", "aria-label"])) : k("", !0)
          ]),
          default: o(() => [
            b(ke, { id: "app-bar-sheet-title" }),
            b(ke, { id: "app-bar-title" }, {
              default: o(() => [
                v(d.$slots, "title")
              ]),
              _: 3
            }),
            v(d.$slots, "app-bar-left"),
            l[5] || (l[5] = G("div", {
              id: "app-bar-right",
              class: "mr-3"
            }, null, -1)),
            v(d.$slots, "app-bar-right")
          ]),
          _: 3
        }),
        e(m)["nav-start"] || e(m)["nav-end"] ? (p(), y(zt, {
          key: 0,
          drawer: n.drawer,
          "onUpdate:drawer": l[3] || (l[3] = (s) => n.drawer = s),
          items: e(r).data.nav
        }, Q({
          prepend: o(() => [
            G("a", Nt, [
              c.logo ? (p(), y(fe, {
                key: 0,
                src: c.logo,
                class: "logo"
              }, null, 8, ["src"])) : k("", !0)
            ]),
            v(d.$slots, "nav-start", { context: e(r) })
          ]),
          _: 2
        }, [
          e(m)["nav-end"] ? {
            name: "append",
            fn: o(() => [
              b(Z, {
                opened: n.opened,
                "onUpdate:opened": l[2] || (l[2] = (s) => n.opened = s)
              }, {
                default: o(() => [
                  v(d.$slots, "nav-end", { context: e(r) })
                ]),
                _: 3
              }, 8, ["opened"])
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["drawer", "items"])) : k("", !0),
        b(mt, null, {
          default: o(() => [
            v(d.$slots, "main", {}, () => [
              b(Se, {
                modelValue: e(t).panel,
                "onUpdate:modelValue": l[4] || (l[4] = (s) => e(t).panel = s)
              }, {
                default: o((s) => [
                  v(d.$slots, "default", C(s, { context: e(r) })),
                  (p(!0), w(h, null, L(e(u), (a, f) => (p(), y(me, {
                    key: f,
                    value: a
                  }, {
                    default: o(() => [
                      v(d.$slots, f, C({ ref_for: !0 }, s, { context: e(r) }))
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128))
                ]),
                _: 3
              }, 8, ["modelValue"])
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), qt = ["name", "value"], Kt = /* @__PURE__ */ j({
  __name: "OxAutocomplete",
  props: /* @__PURE__ */ oe({
    repo: {},
    lookup: { default: "search" },
    name: {},
    filters: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(c, { expose: m }) {
    const u = J(), i = ie(c, "modelValue"), n = R(""), r = c, t = X(), d = U("repos"), { state: l, query: s, fetch: a } = Ye(r.repo, d, { save: !1 }), f = se([]), S = R([]);
    async function A(x) {
      const O = x && E(x);
      if (O != null && O.length) {
        const V = await a({ id: O });
        f.splice(0, 0, ...V.entities);
      }
      q(x);
    }
    function E(x) {
      if (!Array.isArray(x))
        return f.findIndex((V) => V.id == x) == -1 ? [x] : null;
      const O = new Set(f.map((V) => V.id));
      return x.filter((V) => !O.has(V));
    }
    function q(x) {
      Array.isArray(x) ? S.value = f.filter((O) => x.includes(O.id)) : x ? S.value = [f.find((O) => O.id == x)] : S.value = [];
    }
    let z = null;
    const ee = ve.debounce(async ({ reset: x = !1 } = {}) => {
      if (l.isProcessing)
        return;
      const O = n.value != "<empty string>" && n.value || "";
      if (!x && O == z)
        return;
      z = O;
      const V = { ...r.filters, page_size: 20 };
      V[r.lookup] = O;
      let $ = await a({ params: V });
      const M = S.value ? ve.unionBy($.entities, S.value, (D) => D.id) : $.entities;
      f.splice(0, f.length, ...M), x || (n.value = O);
    }, 500);
    return ae(async () => {
      await ee(), i.value && await A(i.value);
    }), W(() => r.filters, Xe(() => ee({ reset: !0 }))), W(n, (x) => {
      x != "<empty string>" && x != z && ee({ q: x });
    }), W(i, (x, O) => {
      x != O && q(x);
    }), m({
      /** Selected models ids. */
      value: i,
      /** Selected items. */
      selected: S,
      /** Load list of items. */
      load: ee,
      /** All fetched items (displayed in the selection list). */
      items: f
    }), (x, O) => (p(), w(h, null, [
      r.name ? (p(), w("input", {
        key: 0,
        type: "hidden",
        name: r.name,
        value: i.value
      }, null, 8, qt)) : k("", !0),
      b(e(ct), C(e(t), {
        items: f,
        loading: e(l).isProcessing,
        modelValue: i.value,
        "onUpdate:modelValue": O[0] || (O[0] = (V) => i.value = V),
        search: n.value,
        "onUpdate:search": O[1] || (O[1] = (V) => n.value = V)
      }), Q({ _: 2 }, [
        L(e(u), (V, $) => ({
          name: $,
          fn: o((M) => [
            v(x.$slots, $, B(P(M)))
          ])
        }))
      ]), 1040, ["items", "loading", "modelValue", "search"])
    ], 64));
  }
}), Wt = {
  props: {
    /** Component url. */
    src: String,
    /** Component name. If not provided, use file name. */
    is: String
  },
  setup(c) {
    const m = je(null), u = I(() => {
      if (c.is)
        return c.is;
      let n = c.src.substring(c.src.lastIndexOf("/") + 1);
      if (n && (n = n.substring(0, n.indexOf("."))), !n)
        throw Error(
          "`is` not provided and could not be deducted from `src`."
        );
      return n;
    });
    function i() {
      m.value = Ze(c.src, u.value);
    }
    return W(() => c.src, i), i(), () => De(m.value, c);
  }
}, Gt = /* @__PURE__ */ j({
  __name: "OxField",
  props: {
    /** Field or attribute name */
    name: String,
    /** Editor to use **/
    editor: Object,
    /** If true, add a required rule */
    required: Boolean,
    /** Field type */
    type: String,
    /** Field rules as provided to Vuetify field inputs. */
    rules: Array
  },
  emits: [
    /** Value has changed */
    "update:modelValue"
  ],
  setup(c, { emit: m }) {
    const u = ze(() => import("./OxAutocomplete.js")), i = m, n = X(), r = J(), t = c, d = I(() => {
      const l = `fields.${t.name}.help`, s = {
        name: t.name,
        label: g(`fields.${t.name}`),
        "aria-label": g(`fields.${t.name}`),
        "error-messages": t.editor.error(t.name),
        rules: t.rules || [],
        "onUpdate:modelValue": (...f) => i("update:modelValue", ...f),
        ...n
      }, a = g(l);
      return a != l && (s.hint = a, s["aria-description"] = a), t.required && s.rules.push(et.required), s;
    });
    return (l, s) => v(l.$slots, "default", {
      props: d.value,
      editor: t.editor
    }, () => [
      t.type == "select" ? (p(), y(vt, C({ key: 0 }, d.value, {
        modelValue: t.editor.value[t.name],
        "onUpdate:modelValue": s[0] || (s[0] = (a) => t.editor.value[t.name] = a)
      }), null, 16, ["modelValue"])) : t.type == "textarea" ? (p(), y(ft, C({ key: 1 }, d.value, {
        modelValue: t.editor.value[t.name],
        "onUpdate:modelValue": s[1] || (s[1] = (a) => t.editor.value[t.name] = a)
      }), null, 16, ["modelValue"])) : t.type == "checkbox" ? (p(), y(yt, C({ key: 2 }, d.value, {
        modelValue: t.editor.value[t.name],
        "onUpdate:modelValue": s[2] || (s[2] = (a) => t.editor.value[t.name] = a)
      }), null, 16, ["modelValue"])) : t.type == "autocomplete" ? (p(), y(e(u), C({ key: 3 }, d.value, {
        modelValue: t.editor.value[t.name],
        "onUpdate:modelValue": s[3] || (s[3] = (a) => t.editor.value[t.name] = a)
      }), Q({ _: 2 }, [
        L(e(r), (a, f) => ({
          name: f,
          fn: o((S) => [
            v(l.$slots, f, B(P(S)))
          ])
        }))
      ]), 1040, ["modelValue"])) : (p(), y(ne, C({ key: 4 }, d.value, {
        type: t.type,
        modelValue: t.editor.value[t.name],
        "onUpdate:modelValue": s[4] || (s[4] = (a) => t.editor.value[t.name] = a)
      }), null, 16, ["type", "modelValue"]))
    ]);
  }
}), Jt = /* @__PURE__ */ j({
  __name: "OxModelList",
  props: /* @__PURE__ */ oe({
    /**
     * The model repository to use.
     */
    repo: Object,
    /**
     * Allow to remove items from the list.
     */
    editable: Boolean
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(c, { expose: m }) {
    const u = ie(c, "modelValue");
    J();
    const i = c, n = X(), { list: r, items: t } = tt({
      query: new lt(i.repo)
    });
    function d(l) {
      r.remove(l), u.value = [...r.ids];
    }
    return ae(() => u.value.length && r.load({ id: u.value })), W(u, (l) => l.length && at(l, r.ids, (s) => s.length && r.load({ id: s }))), W(() => r.ids, (l) => u.value = [...l]), m({
      /** The used {@link ModelList} controller. */
      list: r,
      /** The actual list of items. */
      items: t
    }), (l, s) => v(l.$slots, "default", {
      list: e(r),
      items: e(t)
    }, () => [
      b(Z, B(P(e(n))), {
        default: o(() => [
          v(l.$slots, "list", {
            list: e(r),
            items: e(t)
          }, () => [
            (p(!0), w(h, null, L(e(t), (a) => (p(), y(H, {
              key: a.id
            }, {
              append: o(() => [
                v(l.$slots, "item.actions", {
                  list: e(r),
                  item: a
                }),
                i.editable ? (p(), y(T, {
                  key: 0,
                  type: "button",
                  class: "ml-2",
                  size: "small",
                  color: "error",
                  onClick: F((f) => d(a.id), ["stop", "prevent"]),
                  "aria-label": e(g)("actions.remove"),
                  title: e(g)("actions.remove"),
                  icon: "mdi-delete"
                }, null, 8, ["onClick", "aria-label", "title"])) : k("", !0)
              ]),
              default: o(() => [
                v(l.$slots, "item", {
                  list: e(r),
                  item: a
                })
              ]),
              _: 2
            }, 1024))), 128))
          ])
        ]),
        _: 3
      }, 16)
    ]);
  }
}), Me = {
  __name: "OxListFilters",
  props: {
    /** Search GET parameter. If provided, display search field. */
    search: String
  },
  setup(c, { expose: m }) {
    const u = U("list"), i = c, n = I(() => {
      const d = u.filters;
      return d && Object.entries(d).some(
        ([l, s]) => !l.startsWith("page") && !l.startsWith("ordering") && !!s
      );
    }), r = I(() => n.value ? "mdi-filter-check" : "mdi-filter-outline");
    function t() {
      u.filters = {}, u.load();
    }
    return m({
      // FIXME: remove icon ?
      /** Current computed icon */
      icon: r,
      /** Computed value indicating whether there are filters */
      hasFilters: n,
      /** Reset filters function. */
      reset: t
    }), (d, l) => (p(), w("form", {
      onSubmit: l[2] || (l[2] = F((s) => e(u).load(), ["prevent"])),
      class: "ox-list-filters width-full"
    }, [
      b(bt, {
        dense: "",
        color: "transparent"
      }, {
        default: o(() => [
          b(he, {
            icon: r.value,
            readonly: ""
          }, null, 8, ["icon"]),
          i.search && e(u).filters ? (p(), y(ne, {
            key: 0,
            label: e(g)("filters.search"),
            density: "compact",
            class: "ml-2",
            modelValue: e(u).filters[i.search],
            "onUpdate:modelValue": l[0] || (l[0] = (s) => e(u).filters[i.search] = s),
            "hide-details": ""
          }, null, 8, ["label", "modelValue"])) : k("", !0),
          v(d.$slots, "default", {
            list: e(u),
            filters: e(u).filters
          }),
          b(T, {
            onClick: l[1] || (l[1] = F((s) => e(u).load(), ["stop"])),
            class: "ml-2",
            icon: "mdi-check",
            "aria-label": d.$t("filters.apply"),
            title: e(g)("filters.apply")
          }, null, 8, ["aria-label", "title"]),
          n.value ? (p(), y(T, {
            key: 1,
            onClick: F(t, ["stop"]),
            icon: "mdi-backspace",
            "aria-label": e(g)("filters.reset"),
            title: e(g)("filters.reset")
          }, null, 8, ["aria-label", "title"])) : k("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
}, Ve = /* @__PURE__ */ j({
  __name: "OxFormListItem",
  props: {
    item: {},
    remove: { type: Boolean }
  },
  emits: [
    /**
     * Remove item button has been clicked. The click event data is passed along.
     */
    "remove"
  ],
  setup(c, { emit: m }) {
    const u = c, i = m, n = X();
    return (r, t) => (p(), y(H, B(P(e(n))), {
      append: o(() => [
        G("div", {
          onClick: t[1] || (t[1] = F(() => {
          }, ["stop"]))
        }, [
          v(r.$slots, "actions", { item: c.item }),
          u.remove ? (p(), y(T, {
            key: 0,
            type: "button",
            class: "ml-2",
            size: "small",
            onClick: t[0] || (t[0] = F((d) => i("remove", r.$events), ["stop", "prevent"])),
            color: "error",
            "aria-label": e(g)("actions.remove"),
            title: e(g)("actions.remove"),
            icon: "mdi-delete"
          }, null, 8, ["aria-label", "title"])) : k("", !0)
        ])
      ]),
      default: o(() => [
        b(gt, null, {
          default: o(() => [
            v(r.$slots, "default", { item: c.item })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16));
  }
}), Qt = {
  key: 0,
  class: "flex-row justify-right"
}, Ht = /* @__PURE__ */ j({
  __name: "OxFormList",
  props: /* @__PURE__ */ oe({
    useModel: { type: Function },
    editable: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(c) {
    var s;
    const m = ie(c, "modelValue"), u = U("user"), i = R({}), n = c, r = I(() => ({
      add: n.editable && u.can([n.useModel, "add"]),
      change: n.editable && u.can([n.useModel, "change"]),
      delete: n.editable && u.can([n.useModel, "delete"])
    })), t = R([]);
    (s = m.value) != null && s.length || t.value.push(-1);
    function d() {
      m.value.push(i.value), i.value = {};
    }
    function l(a) {
      confirm(g("actions.delete.confirm")) && m.value.splice(a, 1);
    }
    return (a, f) => (p(), y(Z, {
      opened: t.value,
      "onUpdate:opened": f[2] || (f[2] = (S) => t.value = S)
    }, {
      default: o(() => {
        var S;
        return [
          (S = m.value) != null && S.length ? (p(), w(h, { key: 0 }, [
            r.value.change ? (p(!0), w(h, { key: 0 }, L(m.value, (A, E) => (p(), y(pe, {
              key: E,
              value: E
            }, {
              activator: o(({ props: q }) => [
                b(Ve, C({ item: A }, { ref_for: !0 }, q, {
                  remove: r.value.delete,
                  onRemove: (z) => l(E)
                }), {
                  default: o(({ item: z }) => [
                    v(a.$slots, "item", {
                      item: z,
                      index: E
                    })
                  ]),
                  actions: o(({ item: z }) => [
                    v(a.$slots, "item.actions", {
                      item: z,
                      index: E
                    })
                  ]),
                  _: 2
                }, 1040, ["item", "remove", "onRemove"])
              ]),
              default: o(() => [
                b(ce, {
                  disabled: !r.value.change
                }, {
                  default: o(() => [
                    v(a.$slots, "item.form", {
                      item: A,
                      index: E,
                      editable: r.value.change
                    })
                  ]),
                  _: 2
                }, 1032, ["disabled"])
              ]),
              _: 2
            }, 1032, ["value"]))), 128)) : (p(!0), w(h, { key: 1 }, L(m.value, (A, E) => (p(), y(Ve, C({
              key: E,
              item: A
            }, { ref_for: !0 }, n, {
              value: E,
              remove: r.value.delete,
              onRemove: (q) => l(E)
            }), {
              default: o(({ item: q }) => [
                v(a.$slots, "item", {
                  item: q,
                  index: E
                })
              ]),
              actions: o(({ item: q }) => [
                v(a.$slots, "item.actions", {
                  item: q,
                  index: E
                })
              ]),
              _: 2
            }, 1040, ["item", "value", "remove", "onRemove"]))), 128))
          ], 64)) : (p(), y(H, {
            key: 1,
            title: e(g)("lists.empty")
          }, null, 8, ["title"])),
          r.value.add ? (p(), w(h, { key: 2 }, [
            m.value.length ? (p(), y(xe, { key: 0 })) : k("", !0),
            b(pe, { value: -1 }, {
              activator: o(({ props: A }) => [
                b(H, C(A, {
                  title: e(g)("actions.add_item"),
                  "prepend-icon": "mdi-plus"
                }), null, 16, ["title"])
              ]),
              default: o(() => [
                b(ce, null, {
                  default: o(() => [
                    v(a.$slots, "item.form", {
                      item: i.value,
                      edit: !0
                    })
                  ]),
                  _: 3
                }),
                i.value ? (p(), y(H, { key: 0 }, {
                  default: o(() => [
                    Object.values(i.value).length ? (p(), w("div", Qt, [
                      b(T, {
                        size: "small",
                        color: "secondary",
                        "prepend-icon": "mdi-backspace",
                        onClick: f[0] || (f[0] = (A) => i.value = {}),
                        "aria-label": e(g)("actions.discard")
                      }, {
                        default: o(() => [
                          _(N(e(g)("actions.discard")), 1)
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      b(T, {
                        size: "small",
                        color: "primary",
                        "prepend-icon": "mdi-plus",
                        class: "ml-2",
                        onClick: f[1] || (f[1] = (A) => d()),
                        "aria-label": e(g)("actions.add")
                      }, {
                        default: o(() => [
                          _(N(e(g)("actions.add")), 1)
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ])) : k("", !0)
                  ]),
                  _: 1
                })) : k("", !0)
              ]),
              _: 3
            })
          ], 64)) : k("", !0)
        ];
      }),
      _: 3
    }, 8, ["opened"]));
  }
}), Yt = {
  __name: "OxListKanban",
  props: {
    itemTitle: String,
    itemValue: String,
    field: String,
    headers: Array,
    colors: { type: Array, default: () => [
      "purple",
      "blue",
      "teal",
      "lime",
      "orange",
      "blue-gray",
      "pink",
      "indigo",
      "cyan",
      "light-green",
      "amber",
      "brown",
      "red",
      "deep-purple",
      "light-blue",
      "green",
      "yellow",
      "deep-orange"
    ] },
    colorVariant: { type: String, default: "lighten-2" }
  },
  emits: ["click"],
  setup(c, { emit: m }) {
    const u = m;
    U("list");
    const i = U("items"), n = c;
    function r(l) {
      return l = l % n.colors.length, n.colorVariant ? n.colors[l] + "-" + n.colorVariant : n.colors[l];
    }
    function t(l, s, a) {
      l[a] ? !l[a].includes(s) && l[a].push(s) : l[a] = [s];
    }
    const d = I(() => {
      const l = {};
      if (i.value)
        for (var s of i.value) {
          const f = s[n.field];
          if (Array.isArray(f))
            if (f.length)
              for (var a of f)
                t(l, s, a);
            else
              t(l, s, null);
          else
            t(l, s, f);
        }
      return l;
    });
    return (l, s) => (p(), y(Ce, null, {
      default: o(() => [
        b(kt, null, {
          default: o(() => [
            (p(!0), w(h, null, L(n.headers, (a, f) => (p(), y($t, {
              key: a.value
            }, {
              default: o(({ selectedClass: S }) => [
                b(Ae, {
                  width: "400",
                  class: Ne(["ma-3", S]),
                  color: r(f),
                  lines: "two"
                }, {
                  default: o(() => [
                    b(wt, null, {
                      default: o(() => [
                        _(N(a.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    b(Z, {
                      "bg-color": r(f)
                    }, {
                      default: o(() => [
                        d.value && d.value[a.value] ? (p(!0), w(h, { key: 0 }, L(d.value[a.value], (A) => v(l.$slots, "item", {
                          key: A.id,
                          header: a,
                          item: A
                        }, () => [
                          b(H, {
                            title: A[n.itemTitle],
                            value: n.itemValue && A[n.itemValue],
                            onClick: (E) => u("click", A)
                          }, {
                            append: o(() => [
                              v(l.$slots, "item.action")
                            ]),
                            _: 3
                          }, 8, ["title", "value", "onClick"])
                        ])), 128)) : k("", !0)
                      ]),
                      _: 2
                    }, 1032, ["bg-color"])
                  ]),
                  _: 2
                }, 1032, ["class", "color"])
              ]),
              _: 2
            }, 1024))), 128))
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}, Be = /* @__PURE__ */ j({
  __name: "OxActionEdit",
  props: {
    item: {},
    edit: { type: Boolean },
    view: { default: "detail.edit" }
  },
  setup(c) {
    const m = U("panel");
    U("repos");
    const u = U("user"), i = X(), n = c;
    function r(t, d) {
      m.show({ view: n.view, value: d });
    }
    return (t, d) => n.edit && e(u).can([c.item.constructor, "change"], c.item) ? (p(), y(le, C({ key: 0 }, e(i), {
      icon: "mdi-pencil",
      title: e(g)("actions.edit"),
      item: c.item,
      run: r
    }), null, 16, ["title", "item"])) : n.edit && e(u).can([c.item.constructor, "view"], c.item) ? (p(), y(le, C({ key: 1 }, e(i), {
      icon: "mdi-eye-outline",
      title: e(g)("actions.view"),
      item: c.item,
      run: r
    }), null, 16, ["title", "item"])) : k("", !0);
  }
}), Pe = /* @__PURE__ */ j({
  __name: "OxListTable",
  props: {
    /** ModelList used to display objects */
    list: Object,
    /** List items (cf. {@link useModelList}) */
    items: Array,
    /** Table headers */
    headers: Array,
    /** If True, display edit/view button */
    edit: Boolean,
    /** If provided, use this item field as image */
    image: String
  },
  setup(c) {
    const m = J(), u = Pt(m, "item.", { exclude: ["item.actions", "item.image"] }), i = c, n = I(() => {
      const t = [];
      return (i.image || m["item.image"]) && t.push({ key: "image", title: "" }), t.concat(
        i.headers.reduce((d, l) => (d.push(
          typeof l == "string" ? { key: l, title: g(st.field(l)) } : { key: l.key, title: g(l.title) }
        ), d), [])
      );
    });
    function r(t) {
      const d = {
        ...i.list.filters,
        page: t.page,
        page_size: t.itemsPerPage,
        ordering: t.sortBy.map(({ key: l, order: s }) => s == "asc" ? l : `-${l}`)
      };
      i.list.page_size = t.itemsPerPage, i.list.load({ params: d });
    }
    return (t, d) => {
      var l;
      return p(), y(Vt, {
        items: i.items,
        "item-index": "id",
        "items-length": i.list.count || i.items.length,
        "items-per-page": i.list.page_size,
        "hide-default-footer": (i.list.count || i.items.length || 0) < i.list.page_size,
        loading: (l = i.list.state) == null ? void 0 : l.isProcessing,
        headers: n.value,
        "no-data-text": e(g)("lists.empty"),
        class: "align-top-table",
        "onUpdate:options": r
      }, Q({
        "item.actions": o(({ item: s }) => [
          b(Be, {
            button: "",
            item: s,
            edit: i.edit
          }, null, 8, ["item", "edit"]),
          v(t.$slots, "item.actions", {
            item: s,
            dense: !0,
            button: !0
          })
        ]),
        _: 2
      }, [
        e(m)["item.image"] ? {
          name: "item.image",
          fn: o(({ item: s }) => [
            v(t.$slots, "item.image", { item: s }, () => [
              s[i.image] ? (p(), y(fe, {
                key: 0,
                src: s[i.image],
                class: "preview",
                cover: "",
                "max-height": "200"
              }, null, 8, ["src"])) : k("", !0)
            ])
          ]),
          key: "0"
        } : void 0,
        L(e(u), (s, a) => ({
          name: a,
          fn: o((f) => [
            v(t.$slots, a, B(P(f)))
          ])
        }))
      ]), 1032, ["items", "items-length", "items-per-page", "hide-default-footer", "loading", "headers", "no-data-text"]);
    };
  }
}), Xt = { class: "d-flex flex-no-wrap justify-space-between" }, Zt = { key: 0 }, el = { key: 0 }, tl = /* @__PURE__ */ j({
  __name: "OxListCard",
  props: {
    /** ModelList used to display objects */
    list: Object,
    /** List items (cf. {@link useModelList}) */
    items: Array,
    /**
     * Displayed fields, where the first value is set as title.
     * Two formats: a string (as field name), or `{key: "fieldName", title: "Field Title"}`.
     **/
    headers: Array,
    /** If True, display edit/view button */
    edit: Boolean,
    /** Field name used as image */
    image: String
  },
  setup(c) {
    const m = J(), u = Y(m, "item.", { exclude: ["item.actions", "item.image"] }), i = c, n = I(() => {
      if (!i.headers)
        return [];
      const t = [];
      for (var d of i.headers)
        d = typeof d == "string" ? { key: d, title: g("fields." + d) } : { ...d }, d.slot = `item.${d.key}`, t.push(d);
      return t;
    }), r = I(() => {
      var t;
      return /* @__PURE__ */ new Set([
        n.value[0].key,
        (t = n.value[1]) == null ? void 0 : t.key,
        i.image
      ]);
    });
    return ae(() => !i.list.length && i.list.load()), (t, d) => (p(), y(Le, { class: "card-grid" }, {
      default: o(() => [
        (p(!0), w(h, null, L(i.items, (l) => {
          var s, a;
          return p(), y(Ae, {
            key: l.id,
            density: "compact",
            title: n.value[0].key && l[n.value[0].key],
            subtitle: ((s = n.value[1]) == null ? void 0 : s.key) && l[n.value[1].key]
          }, Q({
            default: o(() => [
              G("div", Xt, [
                e(m)["item.image"] || i.image ? (p(), w("div", Zt, [
                  b(Ot, {
                    rounded: "0",
                    size: "125"
                  }, {
                    default: o(() => [
                      v(t.$slots, "item.image", { item: l }, () => [
                        b(fe, {
                          src: i.image
                        }, null, 8, ["src"])
                      ], !0)
                    ]),
                    _: 2
                  }, 1024)
                ])) : k("", !0),
                G("div", null, [
                  !e(m)["item.default"] && (n.value.length > 2 || e(u).length) ? (p(), y(ht, { key: 0 }, {
                    default: o(() => [
                      G("div", null, [
                        (p(!0), w(h, null, L(n.value, (f) => (p(), w(h, null, [
                          r.value.has(f.key) ? k("", !0) : (p(), w("div", el, [
                            b(St, {
                              text: f.title + ":",
                              class: "mr-2"
                            }, null, 8, ["text"]),
                            v(t.$slots, f.slot, { item: l }, () => [
                              e(ve.isEmpty)(l[f.key]) ? k("", !0) : (p(), w(h, { key: 0 }, [
                                _(N(l[f.key]), 1)
                              ], 64))
                            ], !0)
                          ]))
                        ], 64))), 256))
                      ])
                    ]),
                    _: 2
                  }, 1024)) : k("", !0),
                  b(xt, null, {
                    default: o(() => [
                      b(Be, {
                        button: "",
                        item: l,
                        edit: i.edit,
                        size: "small"
                      }, null, 8, ["item", "edit"]),
                      v(t.$slots, "item.actions", {
                        item: l,
                        button: !0,
                        size: "small"
                      }, void 0, !0)
                    ]),
                    _: 2
                  }, 1024)
                ])
              ])
            ]),
            _: 2
          }, [
            e(m)[n.value[0].slot] ? {
              name: "title",
              fn: o(() => [
                v(t.$slots, n.value[0].slot, { item: l }, void 0, !0)
              ]),
              key: "0"
            } : void 0,
            e(m)[(a = n.value[1]) == null ? void 0 : a.slot] ? {
              name: "subtitle",
              fn: o(() => [
                v(t.$slots, n.value[1].slot, { item: l }, void 0, !0)
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["title", "subtitle"]);
        }), 128))
      ]),
      _: 3
    }));
  }
}), ll = (c, m) => {
  const u = c.__vccOpts || c;
  for (const [i, n] of m)
    u[i] = n;
  return u;
}, Te = /* @__PURE__ */ ll(tl, [["__scopeId", "data-v-8c0c8094"]]), re = {
  __name: "OxStateAlert",
  props: {
    /** The state. */
    state: Object,
    /** Delay PROCESSING state display by 5 seconds. */
    delay: { type: Boolean, default: !1 },
    /** Alert title on state `ok`. */
    okTitle: { type: String, default: "" },
    /** Alert title on state `none`. */
    noneTitle: { type: String, default: "" },
    /** Alert title on state `error`. */
    errorTitle: { type: String, default: "Oups..." },
    /** Alert title on state `processing`. */
    processingTitle: { type: String, default: "Processing..." }
  },
  setup(c) {
    const m = J(), u = c;
    let i = R(!1);
    W(() => u.state.state, (t) => {
      u.delay && t == Tt.PROCESSING && (i.value = !1, window.setTimeout(() => {
        i.value = !0;
      }, 5e3));
    });
    const n = I(() => {
      var t;
      return ((t = u.state) == null ? void 0 : t.isProcessing) && (!u.delay || i.value);
    }), r = I(() => {
      var t, d;
      return (d = (t = u.state) == null ? void 0 : t.data) == null ? void 0 : d.messages;
    });
    return (t, d) => (p(), w(h, null, [
      u.state.isNone && e(m).none ? (p(), y(e(te), {
        key: 0,
        type: "info",
        variant: "tonal",
        class: "mb-3",
        state: c.state,
        title: c.noneTitle
      }, {
        default: o(() => [
          v(t.$slots, "none", { state: c.state })
        ]),
        _: 3
      }, 8, ["state", "title"])) : n.value ? (p(), y(e(te), {
        key: 1,
        type: "info",
        variant: "tonal",
        class: "mb-3",
        closable: "",
        state: c.state,
        title: c.processingTitle
      }, {
        default: o(() => [
          v(t.$slots, "processing", { state: c.state }, () => [
            d[0] || (d[0] = _(" Data are being sent to server, please be patient. If this message persist you might wan't to retry. ", -1))
          ])
        ]),
        _: 3
      }, 8, ["state", "title"])) : u.state.isError ? (p(), y(e(te), {
        key: 2,
        type: "error",
        variant: "tonal",
        class: "mb-3",
        closable: "",
        state: c.state,
        title: c.errorTitle
      }, {
        default: o(() => [
          v(t.$slots, "error", { state: c.state }, () => [
            d[1] || (d[1] = _(" Oups... something wrong happened. ", -1))
          ]),
          v(t.$slots, "error-detail", { state: c.state })
        ]),
        _: 3
      }, 8, ["state", "title"])) : u.state.isOk ? (p(), y(e(te), {
        key: 3,
        type: "success",
        variant: "tonal",
        class: "mb-3",
        closable: "",
        state: c.state,
        title: c.okTitle
      }, {
        default: o(() => [
          v(t.$slots, "ok", { state: c.state }, () => [
            d[2] || (d[2] = G("p", null, "Congrats! Data have been updated.", -1))
          ]),
          r.value ? (p(), w(h, { key: 0 }, [
            b(xe),
            (p(!0), w(h, null, L(r.value, (l) => (p(), w("p", null, N(l), 1))), 256))
          ], 64)) : k("", !0),
          v(t.$slots, "ok-detail", { state: c.state })
        ]),
        _: 3
      }, 8, ["state", "title"])) : k("", !0),
      v(t.$slots, "default", {
        state: u.state
      })
    ], 64));
  }
}, al = { class: "text-right" }, ye = {
  __name: "OxValidationBtn",
  props: {
    /** The state object used. */
    state: { type: Object, default: () => State.none() },
    /** Button label for reset/discard */
    resetLabel: String,
    /** Button label for reset/discard */
    resetIcon: { type: String, default: "mdi-close-circle" },
    /** Button label for validation/save */
    validateLabel: String,
    /** Button label for validation/save */
    validateIcon: { type: String, default: "mdi-content-save" },
    /** Button label for processing */
    processingLabel: String,
    /** Button label for processing */
    processingIcon: { type: String, default: "mdi-content-save" },
    /** Disable buttons */
    disabled: { type: Boolean, default: !1 },
    /** Disable validation button */
    validateDisabled: { type: Boolean, default: !1 }
  },
  emits: [
    /** Validate button has been clicked */
    "validate",
    /** Reset button has been clicked */
    "reset"
  ],
  setup(c, { emit: m }) {
    const u = m, i = c;
    return (n, r) => (p(), w("div", al, [
      b(T, {
        color: "error",
        class: "me-2",
        "prepend-icon": i.resetIcon,
        onClick: r[0] || (r[0] = (t) => u("reset")),
        disabled: i.disabled
      }, {
        default: o(() => [
          v(n.$slots, "discard", {}, () => [
            _(N(i.resetLabel || e(de)("actions.discard")), 1)
          ])
        ]),
        _: 3
      }, 8, ["prepend-icon", "disabled"]),
      i.state.isSending || i.state.isProcessing ? (p(), y(T, {
        key: 0,
        color: "primary",
        "prepend-icon": i.processingIcon,
        disabled: ""
      }, {
        default: o(() => [
          v(n.$slots, "processing", {}, () => [
            _(N(i.processingLabel || e(de)("actions.saving")), 1)
          ])
        ]),
        _: 3
      }, 8, ["prepend-icon"])) : (p(), y(T, {
        key: 1,
        color: "primary",
        "prepend-icon": i.validateIcon,
        onClick: r[1] || (r[1] = (t) => u("validate")),
        disabled: i.disabled || i.validateDisabled
      }, {
        default: o(() => [
          v(n.$slots, "validate", {}, () => [
            _(N(i.validateLabel || e(de)("actions.save")), 1)
          ])
        ]),
        _: 3
      }, 8, ["prepend-icon", "disabled"]))
    ]));
  }
}, sl = { key: 0 }, nl = { class: "text-right mt-3" }, ol = {
  __name: "OxLogin",
  props: {
    /** Url to go once logged in. */
    next: { type: String },
    /** API url to call to log in. */
    url: { type: String }
  },
  setup(c, { expose: m }) {
    const u = R("passwordInput"), i = c, n = se({
      username: "",
      password: ""
    }), r = R(!1), t = se(new _t());
    function d(s = !0) {
      It(n, { username: "", password: "" }), s && t.none();
    }
    async function l() {
      t.processing();
      try {
        const s = await fetch(i.url, {
          method: "POST",
          headers: Et.axiosConfig.headers,
          body: JSON.stringify(n)
        });
        s.status == 200 ? (n.credentials = "", n.password = "", t.ok(await s.json()), i.next && (window.location.href = i.next)) : t.error(await s.json());
      } catch (s) {
        t.error((s == null ? void 0 : s.message) || s);
      }
    }
    return m({
      /** Run login. */
      login: l,
      /** Reset login form. */
      reset: d,
      /** Current state. */
      state: t
    }), (s, a) => (p(), w(h, null, [
      b(re, { state: t }, {
        none: o(({ state: f }) => [...a[7] || (a[7] = [
          G("p", null, "Please enter your credentials in order too proceed...", -1)
        ])]),
        "ok-detail": o(({ state: f }) => [
          i.next ? (p(), w("p", sl, [
            a[8] || (a[8] = _("You soon will be redirected to ", -1)),
            G("i", null, N(i.next), 1)
          ])) : k("", !0)
        ]),
        _: 1
      }, 8, ["state"]),
      t.isOk ? k("", !0) : (p(), w(h, { key: 0 }, [
        b(ne, {
          variant: "underlined",
          label: "Enter login",
          modelValue: n.username,
          "onUpdate:modelValue": a[0] || (a[0] = (f) => n.username = f),
          onKeyup: a[1] || (a[1] = be(F((f) => u.value.focus(), ["stop"]), ["enter"]))
        }, null, 8, ["modelValue"]),
        b(ne, {
          variant: "underlined",
          ref: "password",
          label: "Enter password",
          modelValue: n.password,
          "onUpdate:modelValue": a[2] || (a[2] = (f) => n.password = f),
          type: r.value ? "text" : "password",
          "append-icon": r.value ? "mdi-eye" : "mdi-eye-off",
          "onClick:append": a[3] || (a[3] = (f) => r.value = !r.value),
          onKeyup: a[4] || (a[4] = be(F((f) => l(), ["stop"]), ["enter"]))
        }, null, 8, ["modelValue", "type", "append-icon"]),
        G("div", nl, [
          v(s.$slots, "bottom", {
            password: n.password,
            username: n.username,
            login: l,
            reset: d
          }, () => [
            n.username && n.password ? (p(), y(ye, {
              key: 0,
              "validate-label": "Login!",
              onValidate: a[5] || (a[5] = (f) => l()),
              onReset: a[6] || (a[6] = (f) => d()),
              state: t
            }, null, 8, ["state"])) : k("", !0)
          ])
        ])
      ], 64))
    ], 64));
  }
}, _e = /* @__PURE__ */ j({
  __name: "OxPanel",
  props: {
    index: {},
    view: {},
    value: {},
    state: {},
    help: {},
    name: {},
    title: {},
    icon: {}
  },
  setup(c) {
    const m = J(), u = c, i = Y(m, "views."), n = R(!1);
    ae(() => {
      n.value = !0;
    }), Re(() => {
      n.value = !1;
    });
    const r = U("panels"), t = U("panel");
    return (d, l) => (p(), w(h, null, [
      u.state ? (p(), y(re, {
        key: 0,
        state: u.state,
        delay: ""
      }, null, 8, ["state"])) : k("", !0),
      e(m).prepend && e(r).panel == e(t).name ? v(d.$slots, "prepend", { key: 1 }) : k("", !0),
      b(Ce, { class: "ma-4" }, {
        default: o(() => [
          (p(), y(ge, {
            to: "#app-bar-sheet-title",
            disabled: !n.value || e(r).panel != u.name
          }, [
            u.icon ? (p(), y(K, {
              key: 0,
              icon: u.icon
            }, null, 8, ["icon"])) : k("", !0),
            _(" " + N(u.title) + " ", 1),
            v(d.$slots, "append-title")
          ], 8, ["disabled"])),
          (p(), y(ge, {
            to: "#app-bar-right",
            disabled: !n.value || e(r).panel != u.name
          }, [
            v(d.$slots, "app-bar-right"),
            u.help ? (p(), y(T, {
              key: 0,
              class: "ml-3",
              href: u.help,
              panels: "new",
              icon: "mdi-information-outline"
            }, null, 8, ["href"])) : k("", !0)
          ], 8, ["disabled"])),
          v(d.$slots, "top"),
          v(d.$slots, "default", {}, () => [
            e(i) ? (p(), y(Ct, {
              key: 0,
              modelValue: e(t).view,
              "onUpdate:modelValue": l[0] || (l[0] = (s) => e(t).view = s)
            }, {
              default: o(() => [
                (p(!0), w(h, null, L(e(i), (s, a) => (p(), y(At, {
                  key: s,
                  value: s
                }, {
                  default: o(() => [
                    v(d.$slots, a)
                  ]),
                  _: 2
                }, 1032, ["value"]))), 128))
              ]),
              _: 3
            }, 8, ["modelValue"])) : k("", !0)
          ]),
          v(d.$slots, "bottom")
        ]),
        _: 3
      }),
      e(m).append && e(r).panel == e(t).name ? v(d.$slots, "append", { key: 2 }) : k("", !0)
    ], 64));
  }
}), Ie = /* @__PURE__ */ j({
  __name: "OxView",
  props: {
    /** Default tab title. */
    title: String
  },
  setup(c) {
    const m = c, u = R(null), i = J(), n = Y(i, "tab.", { exclude: ["tab.default"] }), r = Y(i, "window.");
    return (t, d) => e(n) && Object.keys(e(n)).length ? (p(), w(h, { key: 0 }, [
      b(Lt, {
        modelValue: u.value,
        "onUpdate:modelValue": d[0] || (d[0] = (l) => u.value = l)
      }, {
        default: o(() => [
          e(i).default ? v(t.$slots, "tab", { key: 0 }, () => [
            b($e, {
              text: m == null ? void 0 : m.title,
              value: "default"
            }, null, 8, ["text"])
          ]) : k("", !0),
          (p(!0), w(h, null, L(e(n), (l, s) => (p(), y($e, { value: l }, {
            default: o(() => [
              v(t.$slots, s)
            ]),
            _: 2
          }, 1032, ["value"]))), 256))
        ]),
        _: 3
      }, 8, ["modelValue"]),
      b(Se, {
        modelValue: u.value,
        "onUpdate:modelValue": d[1] || (d[1] = (l) => u.value = l)
      }, {
        default: o(() => [
          e(i).default ? (p(), y(me, {
            key: 0,
            value: "default"
          }, {
            default: o(() => [
              v(t.$slots, "default")
            ]),
            _: 3
          })) : k("", !0),
          (p(!0), w(h, null, L(e(r), (l, s) => (p(), y(me, { value: l }, {
            default: o(() => [
              v(t.$slots, s)
            ]),
            _: 2
          }, 1032, ["value"]))), 256))
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 64)) : v(t.$slots, "default", { key: 1 });
  }
}), Ee = /* @__PURE__ */ j({
  __name: "OxModelEditor",
  props: {
    repo: {},
    initial: {},
    name: {},
    url: {},
    saved: { type: Function }
  },
  setup(c, { expose: m }) {
    const u = R(null), i = U("user"), n = c, { editor: r, edited: t } = nt({ props: n }), d = I(() => i.can([r.repo.use, "change", n.initial])), l = I(() => ({
      editor: r,
      edited: t.value,
      form: u.value,
      editable: d.value,
      disabled: !d.value,
      value: r.value,
      model: r.repo.use
    }));
    return W(() => r.errors && Object.values(r.errors), () => u.value.validate()), m({
      /** The {@link ModelEditor} instance. */
      editor: r,
      /** A computed boolean indicating if content has been edited. */
      edited: t,
      /** A computed boolean indicating if content can be edited. */
      editable: d,
      /** Reference to inner `v-form`. */
      form: u
    }), (s, a) => (p(), w(h, null, [
      v(s.$slots, "prepend", B(P(l.value))),
      b(ce, {
        ref_key: "form",
        ref: u,
        modelValue: e(r).valid,
        "onUpdate:modelValue": a[0] || (a[0] = (f) => e(r).valid = f),
        disabled: !d.value
      }, {
        default: o(() => [
          v(s.$slots, "default", B(P(l.value)))
        ]),
        _: 3
      }, 8, ["modelValue", "disabled"]),
      v(s.$slots, "append", B(P(l.value)))
    ], 64));
  }
}), il = { key: 0 }, rl = /* @__PURE__ */ j({
  __name: "OxModelEdit",
  props: {
    sendFormData: { type: Boolean },
    hideValidationBtn: { type: Boolean },
    repo: {},
    initial: {},
    name: {},
    url: {},
    saved: { type: Function }
  },
  emits: [
    /** Item was saved `(editor: ModelEditor): void`. */
    "saved"
  ],
  setup(c, { expose: m, emit: u }) {
    const i = u, n = c, r = R(null), t = I(() => {
      const { sendFormData: s, hideValidationBtn: a, ...f } = n;
      return f;
    });
    function d() {
      r.value.editor.reset(n.initial);
    }
    async function l() {
      const s = r.value, a = n.sendFormData ? await s.editor.save(new FormData(s.form.$el)) : await s.editor.save();
      return i("saved", r.value.editor), a;
    }
    return m({
      /** Save edited item. */
      save: l,
      /** Reset edited item to initial value */
      reset: d,
      /** {@link ModelEditor} controller */
      get editor() {
        return r.value.editor;
      },
      /** Item is edited */
      get edited() {
        return r.value.edited;
      },
      /** Edition is allowed */
      get editable() {
        return r.value.editable;
      },
      /** Inner OxModelEditor's form */
      get form() {
        return r.value.form;
      }
    }), (s, a) => {
      var f;
      return p(), w(h, null, [
        (f = r.value) != null && f.editor ? (p(), y(re, {
          key: 0,
          state: r.value.editor.state
        }, null, 8, ["state"])) : k("", !0),
        b(Le, { class: "ox-model-edit" }, {
          default: o(() => [
            b(Ee, C({
              ref_key: "modelEditor",
              ref: r
            }, t.value), {
              prepend: o((S) => [
                n.hideValidationBtn ? k("", !0) : (p(), w("div", il, [
                  v(s.$slots, "prepend", C(S, {
                    save: l,
                    reset: d
                  }), () => [
                    S.editable && S.edited ? (p(), y(ye, {
                      key: 0,
                      onValidate: a[0] || (a[0] = (A) => l()),
                      onReset: a[1] || (a[1] = (A) => d()),
                      state: S.editor.state,
                      "validate-disabled": S.editor.valid === !1
                    }, null, 8, ["state", "validate-disabled"])) : k("", !0)
                  ])
                ]))
              ]),
              default: o((S) => [
                v(s.$slots, "default", C(S, {
                  save: l,
                  reset: d
                }))
              ]),
              append: o((S) => [
                v(s.$slots, "append", C(S, {
                  save: l,
                  reset: d
                }))
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        })
      ], 64);
    };
  }
}), ul = /* @__PURE__ */ j({
  __name: "OxModelPanel",
  props: {
    repo: {},
    view: {},
    headers: {},
    relations: {},
    showFilters: { type: Boolean },
    fetchRelations: { type: Boolean, default: !0 },
    search: { default: "search" },
    warning: {},
    index: { default: "list.table" },
    value: {},
    state: {},
    help: {},
    name: {},
    title: {},
    icon: {}
  },
  setup(c, { expose: m }) {
    const u = J(), i = Y(u, "views.list."), n = Y(u, "item."), r = Y(u, "views.detail.edit."), t = I(() => !!Object.keys(r).length), d = qe("filters"), l = c, s = U("user"), { panel: a, list: f, items: S, next: A, prev: E } = ot({ props: l }), q = a.panels;
    I(() => {
      var V;
      return s.can([a.model, (V = a.value) != null && V.id ? "change" : "add"]);
    });
    const { showFilters: z } = Ke(a), ee = I(() => [
      ...l.headers,
      { key: "actions", title: g("actions") }
    ]);
    function x(V) {
      V = new l.repo.use(V), a.show({ view: a.view, value: V }), f.load();
    }
    const O = I(() => ({
      panel: a,
      panels: q,
      list: f,
      items: S,
      saved: x,
      value: a.value
    }));
    return W(() => Object.values(f.filters), () => f.load()), m({
      /** The ModelList being used across all views */
      list: f,
      /** The {@link OxModelPanel} controller */
      panel: a,
      /** The actual list of items */
      items: S,
      /** URL to next page. */
      next: A,
      /** URL to prev page. */
      prev: E
    }), (V, $) => (p(), y(_e, {
      name: l.name,
      title: e(a).title,
      icon: e(a).icon,
      state: e(f).state,
      index: l.index
    }, Q({
      "app-bar-right": o(() => [
        v(V.$slots, "app-bar-right", B(P(O.value))),
        e(a).view.startsWith("list.") ? (p(), y(we, {
          key: 0,
          class: "ml-3",
          color: "secondary",
          density: "compact",
          variant: "tonal"
        }, {
          default: o(() => [
            v(V.$slots, "nav.list", B(P(O.value))),
            b(T, {
              title: e(g)("actions.list.reload"),
              "aria-label": e(g)("actions.list.reload"),
              onClick: $[0] || ($[0] = (M) => e(f).load())
            }, {
              default: o(() => [
                b(K, null, {
                  default: o(() => [...$[10] || ($[10] = [
                    _("mdi-reload", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "aria-label"]),
            d.value ? (p(), y(T, {
              key: 0,
              title: e(z) ? e(g)("filters.hide") : e(g)("filters.show"),
              "aria-label": e(z) ? e(g)("filters.hide") : e(g)("filters.show"),
              onClick: $[1] || ($[1] = (M) => z.value = !e(z)),
              active: e(z)
            }, {
              default: o(() => [
                b(K, {
                  icon: d.value.icon
                }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["title", "aria-label", "active"])) : k("", !0)
          ]),
          _: 3
        })) : e(a).view.startsWith("detail.") && e(a).value ? (p(), y(we, {
          key: 1,
          class: "ml-3",
          color: "secondary",
          density: "compact",
          variant: "tonal"
        }, {
          default: o(() => [
            v(V.$slots, "nav.detail", B(P(O.value))),
            e(a).view == "detail.edit" && e(a).value ? (p(), y(Mt, { key: 0 }, {
              activator: o(({ props: M }) => [
                b(T, C({ "prepend-icon": "mdi-dots-vertical" }, M), {
                  default: o(() => [
                    _(N(e(g)("actions")), 1)
                  ]),
                  _: 1
                }, 16)
              ]),
              default: o(() => [
                b(Z, null, {
                  default: o(() => [
                    v(V.$slots, "item.actions", {
                      item: e(a).value
                    })
                  ]),
                  _: 3
                })
              ]),
              _: 3
            })) : k("", !0),
            b(T, {
              disabled: !e(E),
              title: e(g)("prev"),
              "aria-label": e(g)("prev"),
              onClick: $[2] || ($[2] = F((M) => e(a).show({ view: e(a).view, value: e(E) }), ["stop"]))
            }, {
              default: o(() => [
                b(K, { icon: "mdi-chevron-left" })
              ]),
              _: 1
            }, 8, ["disabled", "title", "aria-label"]),
            b(T, {
              disabled: !e(A),
              title: e(g)("next"),
              "aria-label": e(g)("next"),
              onClick: $[3] || ($[3] = F((M) => e(a).show({ view: e(a).view, value: e(A) }), ["stop"]))
            }, {
              default: o(() => [
                b(K, { icon: "mdi-chevron-right" })
              ]),
              _: 1
            }, 8, ["disabled", "title", "aria-label"])
          ]),
          _: 3
        })) : k("", !0),
        b(Bt, {
          class: "ml-3",
          color: "secondary",
          density: "compact",
          variant: "tonal",
          mandatory: "",
          modelValue: e(a).view,
          "onUpdate:modelValue": $[9] || ($[9] = (M) => e(a).view = M)
        }, {
          default: o(() => {
            var M;
            return [
              b(T, {
                value: "list.table",
                onClickCapture: $[4] || ($[4] = F((D) => e(a).show({ view: "list.table" }), ["stop"])),
                title: e(g)("panels.nav.table"),
                "aria-label": e(g)("panels.nav.table")
              }, {
                default: o(() => [
                  b(K, null, {
                    default: o(() => [...$[11] || ($[11] = [
                      _("mdi-table", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "aria-label"]),
              b(T, {
                value: "list.cards",
                onClickCapture: $[5] || ($[5] = F((D) => e(a).show({ view: "list.cards" }), ["stop"])),
                title: e(g)("panels.nav.cards"),
                "aria-label": e(g)("panels.nav.cards")
              }, {
                default: o(() => [
                  b(K, null, {
                    default: o(() => [...$[12] || ($[12] = [
                      _("mdi-view-grid", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "aria-label"]),
              e(u)["views.list.kanban"] ? (p(), y(T, {
                key: 0,
                value: "list.kanban",
                onClickCapture: $[6] || ($[6] = F((D) => e(a).show({ view: "list.kanban" }), ["stop"])),
                title: e(g)("panels.nav.kanban"),
                "aria-label": e(g)("panels.nav.kanban")
              }, {
                default: o(() => [
                  b(K, null, {
                    default: o(() => [...$[13] || ($[13] = [
                      _("mdi-view-column", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "aria-label"])) : k("", !0),
              t.value ? (p(), y(T, {
                key: 1,
                value: "detail.edit",
                onClickCapture: $[7] || ($[7] = F((D) => e(a).show({ view: "detail.edit", value: e(a).value }), ["stop"])),
                disabled: !((M = e(a).value) != null && M.id) && e(a).view != "detail.edit",
                title: e(g)("panels.nav.edit"),
                "aria-label": e(g)("panels.nav.edit")
              }, {
                default: o(() => [
                  e(s).can([e(a).model, "change"]) ? (p(), y(K, { key: 0 }, {
                    default: o(() => [...$[14] || ($[14] = [
                      _("mdi-pencil", -1)
                    ])]),
                    _: 1
                  })) : (p(), y(K, { key: 1 }, {
                    default: o(() => [...$[15] || ($[15] = [
                      _("mdi-eye", -1)
                    ])]),
                    _: 1
                  }))
                ]),
                _: 1
              }, 8, ["disabled", "title", "aria-label"])) : k("", !0),
              t.value && e(s).can([e(a).model, "add"]) ? (p(), y(T, {
                key: 2,
                value: "detail.add",
                onClickCapture: $[8] || ($[8] = F((D) => e(a).create(), ["stop"])),
                title: e(g)("panels.nav.add"),
                "aria-label": e(g)("panels.nav.add")
              }, {
                default: o(() => [
                  b(K, null, {
                    default: o(() => [...$[16] || ($[16] = [
                      _("mdi-plus-box", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "aria-label"])) : k("", !0),
              v(V.$slots, "nav.views", B(P(O.value)))
            ];
          }),
          _: 3
        }, 8, ["modelValue"]),
        v(V.$slots, "app-bar-end", B(P(O.value)))
      ]),
      top: o(() => [
        l.warning ? (p(), y(te, {
          key: 0,
          type: "warning",
          variant: "tonal",
          text: l.warning
        }, null, 8, ["text"])) : k("", !0),
        v(V.$slots, "top"),
        We(b(Me, {
          ref_key: "filters",
          ref: d,
          search: l.search,
          "teleport-to": "#panel-list-actions"
        }, {
          default: o((M) => [
            v(V.$slots, "list.filters", B(P(M)))
          ]),
          _: 3
        }, 8, ["search"]), [
          [Ge, e(a).view.startsWith("list.") && e(z)]
        ])
      ]),
      _: 2
    }, [
      e(u)["append-title"] ? {
        name: "append-title",
        fn: o(() => [
          v(V.$slots, "append-title", B(P(O.value)))
        ]),
        key: "0"
      } : void 0,
      e(u).prepend ? {
        name: "prepend",
        fn: o(() => [
          v(V.$slots, "prepend", B(P(O.value)))
        ]),
        key: "1"
      } : void 0,
      e(u).append ? {
        name: "append",
        fn: o(() => [
          v(V.$slots, "append", B(P(O.value)))
        ]),
        key: "2"
      } : void 0,
      e(u)["views.list.table"] ? void 0 : {
        name: "views.list.table",
        fn: o(() => [
          b(Pe, {
            list: e(f),
            items: e(S),
            headers: ee.value,
            edit: t.value
          }, Q({ _: 2 }, [
            L(e(n), (M, D) => ({
              name: D,
              fn: o((ue) => [
                v(V.$slots, D, B(P(ue)))
              ])
            }))
          ]), 1032, ["list", "items", "headers", "edit"])
        ]),
        key: "3"
      },
      e(u)["views.list.cards"] ? void 0 : {
        name: "views.list.cards",
        fn: o(() => [
          b(Te, {
            list: e(f),
            items: e(S),
            edit: t.value,
            headers: l.headers
          }, Q({ _: 2 }, [
            L(e(n), (M, D) => ({
              name: D,
              fn: o((ue) => [
                v(V.$slots, D, B(P(ue)))
              ])
            }))
          ]), 1032, ["list", "items", "edit", "headers"])
        ]),
        key: "4"
      },
      L(e(i), (M, D) => ({
        name: D,
        fn: o(() => [
          v(V.$slots, D, B(P(O.value)))
        ])
      })),
      t.value ? {
        name: "views.detail.edit",
        fn: o(() => [
          b(Ie, {
            title: e(g)(`models.${e(a).model.entity}`)
          }, Q({ _: 2 }, [
            L(e(r), (M, D) => ({
              name: M,
              fn: o(() => [
                v(V.$slots, D, B(P(O.value)))
              ])
            }))
          ]), 1032, ["title"])
        ]),
        key: "5"
      } : void 0
    ]), 1032, ["name", "title", "icon", "state", "index"]));
  }
}), dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OxAction: le,
  OxActionModelDelete: Ut,
  OxActionPost: jt,
  OxApp: Rt,
  OxAutocomplete: Kt,
  OxComponent: Wt,
  OxField: Gt,
  OxFormList: Ht,
  OxListCard: Te,
  OxListFilters: Me,
  OxListKanban: Yt,
  OxListTable: Pe,
  OxLogin: ol,
  OxModelEdit: rl,
  OxModelEditor: Ee,
  OxModelList: Jt,
  OxModelPanel: ul,
  OxPanel: _e,
  OxStateAlert: re,
  OxValidationBtn: ye,
  OxView: Ie
}, Symbol.toStringTag, { value: "Module" })), bl = {
  el: "#app",
  delimiters: ["[[", "]]"],
  components: { ...dl, ...Ft }
};
export {
  bl as App,
  le as OxAction,
  Ut as OxActionModelDelete,
  jt as OxActionPost,
  Rt as OxApp,
  Kt as OxAutocomplete,
  Wt as OxComponent,
  Gt as OxField,
  Ht as OxFormList,
  Te as OxListCard,
  Me as OxListFilters,
  Yt as OxListKanban,
  Pe as OxListTable,
  ol as OxLogin,
  rl as OxModelEdit,
  Ee as OxModelEditor,
  Jt as OxModelList,
  ul as OxModelPanel,
  _e as OxPanel,
  re as OxStateAlert,
  ye as OxValidationBtn,
  Ie as OxView
};
//# sourceMappingURL=components.js.map
