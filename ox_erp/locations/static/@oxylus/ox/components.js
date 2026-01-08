import { defineComponent as j, useAttrs as H, inject as I, createElementBlock as V, createCommentVNode as w, unref as e, openBlock as d, Fragment as x, createBlock as y, mergeProps as C, withModifiers as F, ref as N, computed as E, resolveComponent as Fe, withCtx as i, renderList as B, createVNode as f, createTextVNode as M, toDisplayString as U, mergeModels as ie, useModel as re, renderSlot as v, useSlots as J, reactive as ae, onMounted as ne, watch as K, onErrorCaptured as Ie, createElementVNode as q, createSlots as W, normalizeProps as L, guardReactiveProps as _, shallowRef as je, h as De, defineAsyncComponent as ze, normalizeClass as Ne, withKeys as ye, onUnmounted as We, Teleport as be, useTemplateRef as Re, toRefs as qe, withDirectives as Ke, vShow as Ge } from "vue";
import { useAction as Je, t as g, filterSlots as G, useAppContext as Qe, usePanels as He, useQuery as Ye, ifNotEqualFn as Xe, defineAsyncComponent as Ze, rules as et, useModelList as tt, Query as lt, ifNotEqual as at, tKeys as st, States as nt, useModelEditor as ot, useModelPanel as it } from "@oxylus/ox";
import { V as T, b as X, d as rt, e as dt, f as ut, g as te, h as pt, i as mt, j as ct, k as ge, l as Ve, n as ce, o as vt, p as Oe, q as pe, r as ft, s as yt, t as bt, u as gt, v as oe, w as kt, x as $t, y as wt, z as ve, A as he, B as Vt, C as Se, D as xe, E as Ce, F as Ot, G as ht, H as St, I as Ae, J as xt, K as Ct, L as At, M as le, N as Mt, O as R, P as Lt, Q as _t, R as Tt, S as ke, T as $e, U as Bt, W as Pt } from "./vuetify.js";
import { l as me, J as Ut, t as ue, S as Et, r as Ft, m as It } from "./index2.js";
import "axios";
import { components as jt } from "@oxylus/ox/vendor";
const se = /* @__PURE__ */ j({
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
    const o = c, p = H(), a = m, r = I("user"), { run: t, processing: u, allowed: l } = Je({ user: r, emits: a, props: o });
    return (s, n) => e(l) ? (d(), V(x, { key: 0 }, [
      o.button ? (d(), y(T, C({
        key: 0,
        variant: "text"
      }, e(p), {
        disabled: e(u),
        color: o.color,
        icon: o.icon,
        title: o.title,
        "aria-label": o.title,
        onClick: F(e(t), ["stop"])
      }), null, 16, ["disabled", "color", "icon", "title", "aria-label", "onClick"])) : (d(), y(X, C({ key: 1 }, e(p), {
        title: o.title,
        "base-color": o.color,
        "prepend-icon": o.icon,
        disabled: e(u),
        onClick: F(e(t), ["stop"])
      }), null, 16, ["title", "base-color", "prepend-icon", "disabled", "onClick"]))
    ], 64)) : w("", !0);
  }
}), Dt = /* @__PURE__ */ j({
  __name: "OxActionModelDelete",
  props: {
    item: {}
  },
  setup(c) {
    const m = I("panel"), o = I("repos"), p = H(), a = c;
    async function r(t, u) {
      return await o[u.constructor.entity].api().delete(u.$url(), { delete: a.item.id });
    }
    return (t, u) => (d(), y(se, C(e(p), {
      item: a.item,
      icon: "mdi-delete",
      color: "error",
      title: e(g)("actions.delete"),
      confirm: e(g)("actions.delete.confirm"),
      permission: [a.item.constructor, "delete"],
      run: r,
      onCompleted: u[0] || (u[0] = (l) => {
        var s;
        return (s = e(m)) == null ? void 0 : s.show({ view: e(m).index });
      })
    }), null, 16, ["item", "title", "confirm", "permission"]));
  }
}), zt = /* @__PURE__ */ j({
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
    const m = H(), o = c;
    async function p(a, r) {
      const t = o.repo.api();
      return await t[o.method.toLowerCase()].apply(t, [r.$url(o.path), o.data, o.options]);
    }
    return (a, r) => (d(), y(e(se), C(e(m), { run: p }), null, 16));
  }
}), Nt = /* @__PURE__ */ j({
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
    N(null);
    const o = I("user"), p = I("panels");
    E(() => !m.auto || panel.name == m.name);
    function a(t) {
      return t.permission && !o.can(t.permission) ? !1 : t.items ? t.items.some((u) => a(u)) : !0;
    }
    function r() {
      const t = { panel: m.name, href: m.url };
      p.show(t);
    }
    return (t, u) => {
      const l = Fe("ox-app-nav-item", !0);
      return a(m) ? (d(), V(x, { key: 0 }, [
        m.type == "group" ? (d(), y(rt, {
          key: 0,
          value: m.name
        }, {
          activator: i(({ props: s }) => [
            f(X, C(s, {
              title: m.title,
              "prepend-icon": m.icon
            }), null, 16, ["title", "prepend-icon"])
          ]),
          default: i(() => [
            (d(!0), V(x, null, B(m.items, (s, n) => (d(), y(l, C({
              key: n,
              ref_for: !0
            }, s, {
              type: s.type == "group" ? "subheader" : s.type
            }), null, 16, ["type"]))), 128))
          ]),
          _: 1
        }, 8, ["value"])) : m.type == "subheader" ? (d(), V(x, { key: 1 }, [
          f(dt, null, {
            default: i(() => [
              M(U(m.title), 1)
            ]),
            _: 1
          }),
          m.items ? (d(!0), V(x, { key: 0 }, B(m.items, (s) => (d(), y(l, C({ ref_for: !0 }, s), null, 16))), 256)) : w("", !0)
        ], 64)) : (d(), y(X, {
          key: 2,
          active: e(p).panel == m.name,
          value: m.name,
          "prepend-icon": m.icon,
          title: m.title,
          onClick: F(r, ["stop"])
        }, null, 8, ["active", "value", "prepend-icon", "title"]))
      ], 64)) : w("", !0);
    };
  }
}), Wt = {
  __name: "OxAppNav",
  props: /* @__PURE__ */ ie({
    /** The list of items */
    items: Array
  }, {
    drawer: {},
    drawerModifiers: {}
  }),
  emits: ["update:drawer"],
  setup(c) {
    const m = I("panels"), o = re(c, "drawer"), p = N([]), a = c, r = E(() => (t(a.items), a.items));
    function t(l) {
      p.value = u(l);
    }
    function u(l) {
      if (m.panel) {
        for (const s of l)
          if (s.items) {
            const n = u(s.items);
            if (n)
              return [n, s.name];
          } else if (s.name == m.panel)
            return [s.name];
      }
    }
    return (l, s) => (d(), y(ut, {
      modelValue: o.value,
      "onUpdate:modelValue": s[1] || (s[1] = (n) => o.value = n),
      theme: "dark"
    }, {
      append: i(() => [
        f(te, null, {
          default: i(() => [
            v(l.$slots, "append")
          ]),
          _: 3
        })
      ]),
      default: i(() => [
        v(l.$slots, "prepend"),
        f(te, {
          opened: p.value,
          "onUpdate:opened": s[0] || (s[0] = (n) => p.value = n),
          density: "compact"
        }, {
          default: i(() => [
            (d(!0), V(x, null, B(r.value, (n, b) => (d(), y(Nt, C({
              key: b,
              ref_for: !0
            }, n), null, 16))), 128))
          ]),
          _: 1
        }, 8, ["opened"])
      ]),
      _: 3
    }, 8, ["modelValue"]));
  }
}, Rt = {
  class: "nav-home",
  href: "/"
};
var we;
const qt = /* @__PURE__ */ j({
  __name: "OxApp",
  props: {
    apiUrl: {},
    logo: {},
    dataEl: { default: (we = document.body.dataset) == null ? void 0 : we.appData },
    models: {},
    data: {}
  },
  setup(c) {
    const m = J(), o = G(m, "panels."), p = c, a = ae({ drawer: !0 }), r = Qe(p), t = He();
    return ne(() => {
      t.panel = r.data.panel;
    }), K(() => [r.state.state, r.state.data], () => {
      r.showState = !0;
    }), Ie((u, l, s) => {
      r.state.error(`${u}`);
    }), (u, l) => (d(), y(pt, null, {
      default: i(() => [
        f(mt, {
          modelValue: e(r).showState,
          "onUpdate:modelValue": l[0] || (l[0] = (s) => e(r).showState = s),
          color: e(r).state.color,
          "multi-line": ""
        }, {
          default: i(() => [
            M(U(e(r).state.toString()), 1)
          ]),
          _: 1
        }, 8, ["modelValue", "color"]),
        f(ct, { color: "primary" }, {
          prepend: i(() => [
            e(m)["nav-start"] || e(m)["nav-end"] ? (d(), y(Ve, {
              key: 0,
              icon: "mdi-apps",
              title: e(g)("nav.panels"),
              "aria-label": e(g)("nav.panels"),
              onClick: l[1] || (l[1] = F((s) => a.drawer = !a.drawer, ["stop"]))
            }, null, 8, ["title", "aria-label"])) : w("", !0)
          ]),
          default: i(() => [
            f(ge, { id: "app-bar-sheet-title" }),
            f(ge, { id: "app-bar-title" }, {
              default: i(() => [
                v(u.$slots, "title")
              ]),
              _: 3
            }),
            v(u.$slots, "app-bar-left"),
            l[5] || (l[5] = q("div", {
              id: "app-bar-right",
              class: "mr-3"
            }, null, -1)),
            v(u.$slots, "app-bar-right")
          ]),
          _: 3
        }),
        e(m)["nav-start"] || e(m)["nav-end"] ? (d(), y(Wt, {
          key: 0,
          drawer: a.drawer,
          "onUpdate:drawer": l[3] || (l[3] = (s) => a.drawer = s),
          items: e(r).data.nav
        }, W({
          prepend: i(() => [
            q("a", Rt, [
              c.logo ? (d(), y(ce, {
                key: 0,
                src: c.logo,
                class: "logo"
              }, null, 8, ["src"])) : w("", !0)
            ]),
            v(u.$slots, "nav-start", { context: e(r) })
          ]),
          _: 2
        }, [
          e(m)["nav-end"] ? {
            name: "append",
            fn: i(() => [
              f(te, {
                opened: a.opened,
                "onUpdate:opened": l[2] || (l[2] = (s) => a.opened = s)
              }, {
                default: i(() => [
                  v(u.$slots, "nav-end", { context: e(r) })
                ]),
                _: 3
              }, 8, ["opened"])
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["drawer", "items"])) : w("", !0),
        f(vt, null, {
          default: i(() => [
            v(u.$slots, "main", {}, () => [
              f(Oe, {
                modelValue: e(t).panel,
                "onUpdate:modelValue": l[4] || (l[4] = (s) => e(t).panel = s)
              }, {
                default: i((s) => [
                  v(u.$slots, "default", C(s, { context: e(r) })),
                  (d(!0), V(x, null, B(e(o), (n, b) => (d(), y(pe, {
                    key: b,
                    value: n
                  }, {
                    default: i(() => [
                      v(u.$slots, b, C({ ref_for: !0 }, s, { context: e(r) }))
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
}), Kt = ["name", "value"], Gt = /* @__PURE__ */ j({
  __name: "OxAutocomplete",
  props: /* @__PURE__ */ ie({
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
    const o = J(), p = G(o, "item.");
    console.log(p, o), G(o, "selection.");
    const a = re(c, "modelValue"), r = N(""), t = c, u = H(), l = I("repos"), { state: s, query: n, fetch: b } = Ye(t.repo, l, { save: !1 }), O = ae([]), S = N([]);
    async function D(h) {
      const $ = h && Y(h);
      if ($ != null && $.length) {
        const k = await b({ id: $ });
        O.splice(0, 0, ...k.entities);
      }
      z(h);
    }
    function Y(h) {
      if (!Array.isArray(h))
        return O.findIndex((k) => k.id == h) == -1 ? [h] : null;
      const $ = new Set(O.map((k) => k.id));
      return h.filter((k) => !$.has(k));
    }
    function z(h) {
      Array.isArray(h) ? S.value = O.filter(($) => h.includes($.id)) : h ? S.value = [O.find(($) => $.id == h)] : S.value = [];
    }
    let Q = null;
    const Z = me.debounce(async ({ reset: h = !1 } = {}) => {
      if (s.isProcessing)
        return;
      const $ = r.value != "<empty string>" && r.value || "";
      if (!h && $ == Q)
        return;
      Q = $;
      const k = { ...t.filters, page_size: 20 };
      k[t.lookup] = $;
      let A = await b({ params: k });
      console.log(S.value);
      const P = S.value ? me.unionBy(A.entities, S.value, (ee) => ee.id) : A.entities;
      O.splice(0, O.length, ...P), h || (r.value = $);
    }, 500);
    return ne(async () => {
      await Z(), a.value && await D(a.value);
    }), K(() => t.filters, Xe(() => Z({ reset: !0 }))), K(r, (h) => {
      h != "<empty string>" && h != Q && Z({ q: h });
    }), K(a, (h, $) => {
      h != $ && z(h);
    }), m({
      /** Selected models ids. */
      value: a,
      /** Selected items. */
      selected: S,
      /** Load list of items. */
      load: Z,
      /** All fetched items (displayed in the selection list). */
      items: O
    }), (h, $) => (d(), V(x, null, [
      t.name ? (d(), V("input", {
        key: 0,
        type: "hidden",
        name: t.name,
        value: a.value
      }, null, 8, Kt)) : w("", !0),
      f(e(ft), C(e(u), {
        items: O,
        loading: e(s).isProcessing,
        modelValue: a.value,
        "onUpdate:modelValue": $[0] || ($[0] = (k) => a.value = k),
        search: r.value,
        "onUpdate:search": $[1] || ($[1] = (k) => r.value = k)
      }), W({
        item: i(({ item: k, props: A }) => [
          f(X, L(_(A)), W({ _: 2 }, [
            B(e(p), (P, ee) => ({
              name: P,
              fn: i((Ee) => [
                v(h.$slots, ee, C({ item: k }, Ee))
              ])
            }))
          ]), 1040)
        ]),
        _: 2
      }, [
        B(e(o), (k, A) => ({
          name: A,
          fn: i((P) => [
            !A.startsWith("item") && !A.startsWith("selection") ? v(h.$slots, A, L(C({ key: 0 }, P))) : w("", !0)
          ])
        })),
        e(o).selection ? {
          name: "selection",
          fn: i((k) => [
            v(h.$slots, "selection", L(_(k)))
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["items", "loading", "modelValue", "search"])
    ], 64));
  }
}), Jt = {
  props: {
    /** Component url. */
    src: String,
    /** Component name. If not provided, use file name. */
    is: String
  },
  setup(c) {
    const m = je(null), o = E(() => {
      if (c.is)
        return c.is;
      let a = c.src.substring(c.src.lastIndexOf("/") + 1);
      if (a && (a = a.substring(0, a.indexOf("."))), !a)
        throw Error(
          "`is` not provided and could not be deducted from `src`."
        );
      return a;
    });
    function p() {
      m.value = Ze(c.src, o.value);
    }
    return K(() => c.src, p), p(), () => De(m.value, c);
  }
}, Qt = /* @__PURE__ */ j({
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
    const o = ze(() => import("./OxAutocomplete.js")), p = m, a = H(), r = J(), t = c, u = E(() => {
      const l = `fields.${t.name}.help`, s = {
        name: t.name,
        label: g(`fields.${t.name}`),
        "aria-label": g(`fields.${t.name}`),
        "error-messages": t.editor.error(t.name),
        rules: t.rules || [],
        "onUpdate:modelValue": (...b) => p("update:modelValue", ...b),
        ...a
      }, n = g(l);
      return n != l && (s.hint = n, s["aria-description"] = n), t.required && s.rules.push(et.required), s;
    });
    return (l, s) => v(l.$slots, "default", {
      props: u.value,
      editor: t.editor
    }, () => [
      t.type == "select" ? (d(), y(yt, C({ key: 0 }, u.value, {
        modelValue: t.editor.value[t.name],
        "onUpdate:modelValue": s[0] || (s[0] = (n) => t.editor.value[t.name] = n)
      }), null, 16, ["modelValue"])) : t.type == "textarea" ? (d(), y(bt, C({ key: 1 }, u.value, {
        modelValue: t.editor.value[t.name],
        "onUpdate:modelValue": s[1] || (s[1] = (n) => t.editor.value[t.name] = n)
      }), null, 16, ["modelValue"])) : t.type == "checkbox" ? (d(), y(gt, C({ key: 2 }, u.value, {
        modelValue: t.editor.value[t.name],
        "onUpdate:modelValue": s[2] || (s[2] = (n) => t.editor.value[t.name] = n)
      }), null, 16, ["modelValue"])) : t.type == "autocomplete" ? (d(), y(e(o), C({ key: 3 }, u.value, {
        modelValue: t.editor.value[t.name],
        "onUpdate:modelValue": s[3] || (s[3] = (n) => t.editor.value[t.name] = n)
      }), W({ _: 2 }, [
        B(e(r), (n, b) => ({
          name: b,
          fn: i((O) => [
            v(l.$slots, b, L(_(O)))
          ])
        }))
      ]), 1040, ["modelValue"])) : (d(), y(oe, C({ key: 4 }, u.value, {
        type: t.type,
        modelValue: t.editor.value[t.name],
        "onUpdate:modelValue": s[4] || (s[4] = (n) => t.editor.value[t.name] = n)
      }), W({ _: 2 }, [
        B(e(r), (n, b) => ({
          name: b,
          fn: i((O) => [
            v(l.$slots, b, L(_(O)))
          ])
        }))
      ]), 1040, ["type", "modelValue"]))
    ]);
  }
}), Ht = /* @__PURE__ */ j({
  __name: "OxModelList",
  props: /* @__PURE__ */ ie({
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
    const o = re(c, "modelValue");
    J();
    const p = c, a = H(), { list: r, items: t } = tt({
      query: new lt(p.repo)
    });
    function u(l) {
      r.remove(l), o.value = [...r.ids];
    }
    return ne(() => o.value.length && r.load({ id: o.value })), K(o, (l) => l.length && at(l, r.ids, (s) => s.length && r.load({ id: s }))), K(() => r.ids, (l) => o.value = [...l]), m({
      /** The used {@link ModelList} controller. */
      list: r,
      /** The actual list of items. */
      items: t
    }), (l, s) => v(l.$slots, "default", {
      list: e(r),
      items: e(t)
    }, () => [
      f(te, L(_(e(a))), {
        default: i(() => [
          v(l.$slots, "list", {
            list: e(r),
            items: e(t)
          }, () => [
            (d(!0), V(x, null, B(e(t), (n) => (d(), y(X, {
              key: n.id
            }, {
              append: i(() => [
                v(l.$slots, "item.actions", {
                  list: e(r),
                  item: n
                }),
                p.editable ? (d(), y(T, {
                  key: 0,
                  type: "button",
                  class: "ml-2",
                  size: "small",
                  color: "error",
                  onClick: F((b) => u(n.id), ["stop", "prevent"]),
                  "aria-label": e(g)("actions.remove"),
                  title: e(g)("actions.remove"),
                  icon: "mdi-delete"
                }, null, 8, ["onClick", "aria-label", "title"])) : w("", !0)
              ]),
              default: i(() => [
                v(l.$slots, "item", {
                  list: e(r),
                  item: n
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
    const o = I("list"), p = c, a = E(() => {
      const u = o.filters;
      return u && Object.entries(u).some(
        ([l, s]) => !l.startsWith("page") && !l.startsWith("ordering") && !!s
      );
    }), r = E(() => a.value ? "mdi-filter-check" : "mdi-filter-outline");
    function t() {
      o.filters = {}, o.load();
    }
    return m({
      // FIXME: remove icon ?
      /** Current computed icon */
      icon: r,
      /** Computed value indicating whether there are filters */
      hasFilters: a,
      /** Reset filters function. */
      reset: t
    }), (u, l) => (d(), V("form", {
      onSubmit: l[2] || (l[2] = F((s) => e(o).load(), ["prevent"])),
      class: "ox-list-filters width-full"
    }, [
      f(kt, {
        dense: "",
        color: "transparent"
      }, {
        default: i(() => [
          f(Ve, {
            icon: r.value,
            readonly: ""
          }, null, 8, ["icon"]),
          p.search && e(o).filters ? (d(), y(oe, {
            key: 0,
            label: e(g)("filters.search"),
            density: "compact",
            class: "ml-2",
            modelValue: e(o).filters[p.search],
            "onUpdate:modelValue": l[0] || (l[0] = (s) => e(o).filters[p.search] = s),
            "hide-details": ""
          }, null, 8, ["label", "modelValue"])) : w("", !0),
          v(u.$slots, "default", {
            list: e(o),
            filters: e(o).filters
          }),
          f(T, {
            onClick: l[1] || (l[1] = F((s) => e(o).load(), ["stop"])),
            class: "ml-2",
            icon: "mdi-check",
            "aria-label": u.$t("filters.apply"),
            title: e(g)("filters.apply")
          }, null, 8, ["aria-label", "title"]),
          a.value ? (d(), y(T, {
            key: 1,
            onClick: F(t, ["stop"]),
            icon: "mdi-backspace",
            "aria-label": e(g)("filters.reset"),
            title: e(g)("filters.reset")
          }, null, 8, ["aria-label", "title"])) : w("", !0)
        ]),
        _: 3
      })
    ], 32));
  }
}, Yt = /* @__PURE__ */ j({
  __name: "OxFormListItem",
  props: {
    item: {},
    remove: { type: Boolean },
    title: {}
  },
  emits: [
    /**
     * Remove item button has been clicked. The click event data is passed along.
     */
    "remove"
  ],
  setup(c, { emit: m }) {
    const o = c;
    console.log(o.item);
    const p = m, a = H();
    return (r, t) => (d(), y(X, L(_(e(a))), {
      append: i(() => [
        q("div", {
          onClick: t[1] || (t[1] = F(() => {
          }, ["stop"]))
        }, [
          v(r.$slots, "actions", {
            item: o.item
          }),
          o.remove ? (d(), y(T, {
            key: 0,
            type: "button",
            class: "ml-1",
            size: "small",
            onClick: t[0] || (t[0] = F((u) => p("remove", r.$events), ["stop", "prevent"])),
            color: "error",
            "aria-label": e(g)("actions.remove"),
            title: e(g)("actions.remove"),
            icon: "mdi-delete"
          }, null, 8, ["aria-label", "title"])) : w("", !0)
        ])
      ]),
      default: i(() => [
        f($t, null, {
          default: i(() => [
            v(r.$slots, "default", {
              item: o.item
            }, () => [
              M(U(o.title), 1)
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16));
  }
}), Xt = /* @__PURE__ */ j({
  __name: "OxFormList",
  props: /* @__PURE__ */ ie({
    useModel: { type: Function },
    editable: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(c) {
    var b;
    const m = re(c, "modelValue"), o = I("user");
    N({});
    const p = c, a = E(() => ({
      add: p.editable && o.can([p.useModel, "add"]),
      change: p.editable && o.can([p.useModel, "change"]),
      delete: p.editable && o.can([p.useModel, "delete"])
    })), r = N([]), t = ae({
      open: !1,
      item: null,
      add: !1
    });
    (b = m.value) != null && b.length || r.value.push(-1);
    function u(O = null) {
      t.add = O === null, t.editable = t.add ? a.value.add : a.value.change, t.item = O || new p.useModel({}), t.value = new p.useModel({ ...t.item }), t.open = !0;
    }
    function l() {
      t.open = !1, t.item = null, t.value = null;
    }
    function s() {
      t.add ? m.value.push(p.useModel({ ...t.value })) : Object.assign(t.item, t.value), l();
    }
    function n(O) {
      confirm(g("actions.delete.confirm")) && m.value.splice(O, 1);
    }
    return (O, S) => (d(), V(x, null, [
      f(wt, {
        modelValue: t.open,
        "onUpdate:modelValue": S[3] || (S[3] = (D) => t.open = D)
      }, {
        default: i(() => [
          f(ve, null, {
            default: i(() => [
              t.value ? (d(), y(he, { key: 0 }, {
                default: i(() => [
                  t.add && p.useModel ? (d(), V(x, { key: 0 }, [
                    M(U(e(g)("actions.new_item", { name: p.useModel.meta.verbose_name })), 1)
                  ], 64)) : t.add ? (d(), V(x, { key: 1 }, [
                    M(U(e(g)("actions.add_item")), 1)
                  ], 64)) : (d(), V(x, { key: 2 }, [
                    M(U(e(g)("actions.edit_item", { name: t.value.$title })), 1)
                  ], 64))
                ]),
                _: 1
              })) : w("", !0),
              f(Vt, null, {
                default: i(() => [
                  t.item ? (d(), y(Se, {
                    key: 0,
                    disabled: !t.editable,
                    modelValue: t.valid,
                    "onUpdate:modelValue": S[0] || (S[0] = (D) => t.valid = D)
                  }, {
                    default: i(() => [
                      v(O.$slots, "item.form", {
                        item: t.value
                      })
                    ]),
                    _: 3
                  }, 8, ["disabled", "modelValue"])) : w("", !0)
                ]),
                _: 3
              }),
              f(xe, null, {
                default: i(() => [
                  f(T, {
                    color: "error",
                    "prepend-icon": "mdi-cancel",
                    "aria-label": e(g)("actions.discard"),
                    onClick: S[1] || (S[1] = (D) => l())
                  }, {
                    default: i(() => [
                      M(U(e(g)("actions.discard")), 1)
                    ]),
                    _: 1
                  }, 8, ["aria-label"]),
                  f(T, {
                    disabled: !t.valid,
                    color: "primary",
                    "prepend-icon": "mdi-content-save",
                    "aria-label": e(g)("actions.save"),
                    onClick: S[2] || (S[2] = (D) => s())
                  }, {
                    default: i(() => [
                      M(U(e(g)("actions.save")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "aria-label"])
                ]),
                _: 1
              })
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["modelValue"]),
      f(te, {
        opened: r.value,
        "onUpdate:opened": S[5] || (S[5] = (D) => r.value = D)
      }, {
        default: i(() => {
          var D;
          return [
            (D = m.value) != null && D.length ? (d(!0), V(x, { key: 0 }, B(m.value, (Y, z) => (d(), y(Yt, {
              key: z,
              value: z,
              item: Y,
              remove: a.value.delete,
              onRemove: (Q) => n(z)
            }, {
              default: i((Q) => [
                v(O.$slots, "item", C({ ref_for: !0 }, Q, { index: z }))
              ]),
              actions: i((Q) => [
                v(O.$slots, "item.actions", {
                  item: Y,
                  index: z,
                  editable: a.value.change
                }),
                f(T, {
                  size: "small",
                  color: "primary",
                  icon: "mdi-pencil",
                  class: "ml-1",
                  title: e(g)("actions.edit"),
                  "aria-label": e(g)("actions.edit"),
                  onClick: (Z) => u(Y)
                }, null, 8, ["title", "aria-label", "onClick"])
              ]),
              _: 2
            }, 1032, ["value", "item", "remove", "onRemove"]))), 128)) : (d(), y(X, {
              key: 1,
              title: e(g)("lists.empty")
            }, W({ _: 2 }, [
              a.value.add ? {
                name: "append",
                fn: i(() => [
                  f(T, {
                    size: "small",
                    color: "primary",
                    "prepend-icon": "mdi-plus",
                    onClick: S[4] || (S[4] = (Y) => u()),
                    "aria-label": e(g)("actions.discard")
                  }, {
                    default: i(() => [
                      M(U(e(g)("actions.add_item")), 1)
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["title"]))
          ];
        }),
        _: 3
      }, 8, ["opened"])
    ], 64));
  }
}), Zt = {
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
    const o = m;
    I("list");
    const p = I("items"), a = c;
    function r(l) {
      return l = l % a.colors.length, a.colorVariant ? a.colors[l] + "-" + a.colorVariant : a.colors[l];
    }
    function t(l, s, n) {
      l[n] ? !l[n].includes(s) && l[n].push(s) : l[n] = [s];
    }
    const u = E(() => {
      const l = {};
      if (p.value)
        for (var s of p.value) {
          const b = s[a.field];
          if (Array.isArray(b))
            if (b.length)
              for (var n of b)
                t(l, s, n);
            else
              t(l, s, null);
          else
            t(l, s, b);
        }
      return l;
    });
    return (l, s) => (d(), y(Ce, null, {
      default: i(() => [
        f(Ot, null, {
          default: i(() => [
            (d(!0), V(x, null, B(a.headers, (n, b) => (d(), y(ht, {
              key: n.value
            }, {
              default: i(({ selectedClass: O }) => [
                f(ve, {
                  width: "400",
                  class: Ne(["ma-3", O]),
                  color: r(b),
                  lines: "two"
                }, {
                  default: i(() => [
                    f(he, null, {
                      default: i(() => [
                        M(U(n.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    f(te, {
                      "bg-color": r(b)
                    }, {
                      default: i(() => [
                        u.value && u.value[n.value] ? (d(!0), V(x, { key: 0 }, B(u.value[n.value], (S) => v(l.$slots, "item", {
                          key: S.id,
                          header: n,
                          item: S
                        }, () => [
                          f(X, {
                            title: S[a.itemTitle],
                            value: a.itemValue && S[a.itemValue],
                            onClick: (D) => o("click", S)
                          }, {
                            append: i(() => [
                              v(l.$slots, "item.action")
                            ]),
                            _: 3
                          }, 8, ["title", "value", "onClick"])
                        ])), 128)) : w("", !0)
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
}, Le = /* @__PURE__ */ j({
  __name: "OxActionEdit",
  props: {
    item: {},
    edit: { type: Boolean },
    view: { default: "detail.edit" }
  },
  setup(c) {
    const m = I("panel");
    I("repos");
    const o = I("user"), p = H(), a = c;
    function r(t, u) {
      m.show({ view: a.view, value: u });
    }
    return (t, u) => a.edit && e(o).can([c.item.constructor, "change"], c.item) ? (d(), y(se, C({ key: 0 }, e(p), {
      icon: "mdi-pencil",
      title: e(g)("actions.edit"),
      item: c.item,
      run: r
    }), null, 16, ["title", "item"])) : a.edit && e(o).can([c.item.constructor, "view"], c.item) ? (d(), y(se, C({ key: 1 }, e(p), {
      icon: "mdi-eye-outline",
      title: e(g)("actions.view"),
      item: c.item,
      run: r
    }), null, 16, ["title", "item"])) : w("", !0);
  }
}), _e = /* @__PURE__ */ j({
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
    const m = J(), o = Ut(m, "item.", { exclude: ["item.actions", "item.image"] }), p = c, a = E(() => {
      const t = [];
      return (p.image || m["item.image"]) && t.push({ key: "image", title: "" }), t.concat(
        p.headers.reduce((u, l) => (u.push(
          typeof l == "string" ? { key: l, title: g(st.field(l)) } : { key: l.key, title: g(l.title) }
        ), u), [])
      );
    });
    function r(t) {
      const u = {
        ...p.list.filters,
        page: t.page,
        page_size: t.itemsPerPage,
        ordering: t.sortBy.map(({ key: l, order: s }) => s == "asc" ? l : `-${l}`)
      };
      p.list.page_size = t.itemsPerPage, p.list.load({ params: u });
    }
    return (t, u) => {
      var l;
      return d(), y(St, {
        items: p.items,
        "item-index": "id",
        "items-length": p.list.count || p.items.length,
        "items-per-page": p.list.page_size,
        "hide-default-footer": (p.list.count || p.items.length || 0) < p.list.page_size,
        loading: (l = p.list.state) == null ? void 0 : l.isProcessing,
        headers: a.value,
        "no-data-text": e(g)("lists.empty"),
        class: "align-top-table",
        "onUpdate:options": r
      }, W({
        "item.actions": i(({ item: s }) => [
          f(Le, {
            button: "",
            item: s,
            edit: p.edit
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
          fn: i(({ item: s }) => [
            v(t.$slots, "item.image", { item: s }, () => [
              s[p.image] ? (d(), y(ce, {
                key: 0,
                src: s[p.image],
                class: "preview",
                cover: "",
                "max-height": "200"
              }, null, 8, ["src"])) : w("", !0)
            ])
          ]),
          key: "0"
        } : void 0,
        B(e(o), (s, n) => ({
          name: n,
          fn: i((b) => [
            v(t.$slots, n, L(_(b)))
          ])
        }))
      ]), 1032, ["items", "items-length", "items-per-page", "hide-default-footer", "loading", "headers", "no-data-text"]);
    };
  }
}), el = { class: "d-flex flex-no-wrap justify-space-between" }, tl = { key: 0 }, ll = { key: 0 }, al = /* @__PURE__ */ j({
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
    const m = J(), o = G(m, "item.", { exclude: ["item.actions", "item.image"] }), p = c, a = E(() => {
      if (!p.headers)
        return [];
      const t = [];
      for (var u of p.headers)
        u = typeof u == "string" ? { key: u, title: g("fields." + u) } : { ...u }, u.slot = `item.${u.key}`, t.push(u);
      return t;
    }), r = E(() => {
      var t;
      return /* @__PURE__ */ new Set([
        a.value[0].key,
        (t = a.value[1]) == null ? void 0 : t.key,
        p.image
      ]);
    });
    return ne(() => !p.list.length && p.list.load()), (t, u) => (d(), y(Ae, { class: "card-grid" }, {
      default: i(() => [
        (d(!0), V(x, null, B(p.items, (l) => {
          var s, n;
          return d(), y(ve, {
            key: l.id,
            density: "compact",
            title: a.value[0].key && l[a.value[0].key],
            subtitle: ((s = a.value[1]) == null ? void 0 : s.key) && l[a.value[1].key]
          }, W({
            default: i(() => [
              q("div", el, [
                e(m)["item.image"] || p.image ? (d(), V("div", tl, [
                  f(xt, {
                    rounded: "0",
                    size: "125"
                  }, {
                    default: i(() => [
                      v(t.$slots, "item.image", { item: l }, () => [
                        f(ce, {
                          src: p.image
                        }, null, 8, ["src"])
                      ], !0)
                    ]),
                    _: 2
                  }, 1024)
                ])) : w("", !0),
                q("div", null, [
                  !e(m)["item.default"] && (a.value.length > 2 || e(o).length) ? (d(), y(Ct, { key: 0 }, {
                    default: i(() => [
                      q("div", null, [
                        (d(!0), V(x, null, B(a.value, (b) => (d(), V(x, null, [
                          r.value.has(b.key) ? w("", !0) : (d(), V("div", ll, [
                            f(At, {
                              text: b.title + ":",
                              class: "mr-2"
                            }, null, 8, ["text"]),
                            v(t.$slots, b.slot, { item: l }, () => [
                              e(me.isEmpty)(l[b.key]) ? w("", !0) : (d(), V(x, { key: 0 }, [
                                M(U(l[b.key]), 1)
                              ], 64))
                            ], !0)
                          ]))
                        ], 64))), 256))
                      ])
                    ]),
                    _: 2
                  }, 1024)) : w("", !0),
                  f(xe, null, {
                    default: i(() => [
                      f(Le, {
                        button: "",
                        item: l,
                        edit: p.edit,
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
            e(m)[a.value[0].slot] ? {
              name: "title",
              fn: i(() => [
                v(t.$slots, a.value[0].slot, { item: l }, void 0, !0)
              ]),
              key: "0"
            } : void 0,
            e(m)[(n = a.value[1]) == null ? void 0 : n.slot] ? {
              name: "subtitle",
              fn: i(() => [
                v(t.$slots, a.value[1].slot, { item: l }, void 0, !0)
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["title", "subtitle"]);
        }), 128))
      ]),
      _: 3
    }));
  }
}), sl = (c, m) => {
  const o = c.__vccOpts || c;
  for (const [p, a] of m)
    o[p] = a;
  return o;
}, Te = /* @__PURE__ */ sl(al, [["__scopeId", "data-v-8c0c8094"]]), de = {
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
    errorTitle: { type: String, default: "" },
    /** Alert title on state `processing`. */
    processingTitle: { type: String, default: "" }
  },
  setup(c) {
    const m = J(), o = c;
    let p = N(!1);
    K(() => o.state.state, (t) => {
      o.delay && t == nt.PROCESSING && (p.value = !1, window.setTimeout(() => {
        p.value = !0;
      }, 5e3));
    });
    const a = E(() => {
      var t;
      return ((t = o.state) == null ? void 0 : t.isProcessing) && (!o.delay || p.value);
    }), r = E(() => {
      var t, u;
      return (u = (t = o.state) == null ? void 0 : t.data) == null ? void 0 : u.messages;
    });
    return (t, u) => (d(), V(x, null, [
      o.state.isNone && e(m).none ? (d(), y(e(le), {
        key: 0,
        type: "info",
        variant: "tonal",
        class: "mb-3",
        state: c.state,
        title: c.noneTitle
      }, {
        default: i(() => [
          v(t.$slots, "none", { state: c.state })
        ]),
        _: 3
      }, 8, ["state", "title"])) : a.value ? (d(), y(e(le), {
        key: 1,
        type: "info",
        variant: "tonal",
        class: "mb-3",
        closable: "",
        state: c.state,
        title: c.processingTitle || e(g)("state.processing.title")
      }, {
        default: i(() => [
          v(t.$slots, "processing", { state: c.state }, () => [
            q("p", null, U(e(g)("state.processing.detail")), 1)
          ])
        ]),
        _: 3
      }, 8, ["state", "title"])) : o.state.isError ? (d(), y(e(le), {
        key: 2,
        type: "error",
        variant: "tonal",
        class: "mb-3",
        closable: "",
        state: c.state,
        title: c.errorTitle || e(g)("state.error.title")
      }, {
        default: i(() => [
          v(t.$slots, "error", { state: c.state }, () => [
            M(U(c.state.toString() || e(g)("state.error.detail")), 1)
          ]),
          v(t.$slots, "error-detail", { state: c.state })
        ]),
        _: 3
      }, 8, ["state", "title"])) : o.state.isOk ? (d(), y(e(le), {
        key: 3,
        type: "success",
        variant: "tonal",
        class: "mb-3",
        closable: "",
        state: c.state,
        title: c.okTitle || e(g)("state.ok.title")
      }, {
        default: i(() => [
          v(t.$slots, "ok", { state: c.state }, () => [
            q("p", null, U(e(g)("state.ok.detail")), 1)
          ]),
          r.value ? (d(), V(x, { key: 0 }, [
            f(Mt),
            (d(!0), V(x, null, B(r.value, (l) => (d(), V("p", null, U(l), 1))), 256))
          ], 64)) : w("", !0),
          v(t.$slots, "ok-detail", { state: c.state })
        ]),
        _: 3
      }, 8, ["state", "title"])) : w("", !0),
      v(t.$slots, "default", {
        state: o.state
      })
    ], 64));
  }
}, nl = { class: "text-right" }, fe = {
  __name: "OxValidationBtn",
  props: {
    /** The state object used. */
    state: { type: Object, default: () => State.none() },
    /** Button label for reset/discard */
    resetLabel: String,
    /** Button label for reset/discard */
    resetIcon: { type: String, default: "mdi-cancel" },
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
    const o = m, p = H(), a = c;
    return (r, t) => (d(), V("div", nl, [
      v(r.$slots, "prepend", {
        state: "props.state",
        disabled: "props.disabled"
      }),
      f(T, C(e(p), {
        color: "error",
        class: "me-2",
        "prepend-icon": a.resetIcon,
        onClick: t[0] || (t[0] = (u) => o("reset")),
        disabled: a.disabled
      }), {
        default: i(() => [
          v(r.$slots, "discard", {}, () => [
            M(U(a.resetLabel || e(ue)("actions.discard")), 1)
          ])
        ]),
        _: 3
      }, 16, ["prepend-icon", "disabled"]),
      a.state.isSending || a.state.isProcessing ? (d(), y(T, C({ key: 0 }, e(p), {
        color: "primary",
        "prepend-icon": a.processingIcon,
        disabled: ""
      }), {
        default: i(() => [
          v(r.$slots, "processing", {}, () => [
            M(U(a.processingLabel || e(ue)("actions.saving")), 1)
          ])
        ]),
        _: 3
      }, 16, ["prepend-icon"])) : (d(), y(T, C({ key: 1 }, e(p), {
        color: "primary",
        "prepend-icon": a.validateIcon,
        onClick: t[1] || (t[1] = (u) => o("validate")),
        disabled: a.disabled || a.validateDisabled
      }), {
        default: i(() => [
          v(r.$slots, "validate", {}, () => [
            M(U(a.validateLabel || e(ue)("actions.save")), 1)
          ])
        ]),
        _: 3
      }, 16, ["prepend-icon", "disabled"])),
      v(r.$slots, "append", {
        state: "props.state",
        disabled: "props.disabled"
      })
    ]));
  }
}, ol = { key: 0 }, il = { class: "text-right mt-3" }, rl = {
  __name: "OxLogin",
  props: {
    /** Url to go once logged in. */
    next: { type: String },
    /** API url to call to log in. */
    url: { type: String }
  },
  setup(c, { expose: m }) {
    const o = N("passwordInput"), p = c, a = ae({
      username: "",
      password: ""
    }), r = N(!1), t = ae(new Et());
    function u(s = !0) {
      Ft(a, { username: "", password: "" }), s && t.none();
    }
    async function l() {
      t.processing();
      try {
        const s = await fetch(p.url, {
          method: "POST",
          headers: It.axiosConfig.headers,
          body: JSON.stringify(a)
        });
        s.status == 200 ? (a.credentials = "", a.password = "", t.ok(await s.json()), p.next && (window.location.href = p.next)) : t.error(await s.json());
      } catch (s) {
        t.error((s == null ? void 0 : s.message) || s);
      }
    }
    return m({
      /** Run login. */
      login: l,
      /** Reset login form. */
      reset: u,
      /** Current state. */
      state: t
    }), (s, n) => (d(), V(x, null, [
      f(de, { state: t }, {
        none: i(({ state: b }) => [...n[7] || (n[7] = [
          q("p", null, "Please enter your credentials in order too proceed...", -1)
        ])]),
        "ok-detail": i(({ state: b }) => [
          p.next ? (d(), V("p", ol, [
            n[8] || (n[8] = M("You soon will be redirected to ", -1)),
            q("i", null, U(p.next), 1)
          ])) : w("", !0)
        ]),
        _: 1
      }, 8, ["state"]),
      t.isOk ? w("", !0) : (d(), V(x, { key: 0 }, [
        f(oe, {
          variant: "underlined",
          label: "Enter login",
          modelValue: a.username,
          "onUpdate:modelValue": n[0] || (n[0] = (b) => a.username = b),
          onKeyup: n[1] || (n[1] = ye(F((b) => o.value.focus(), ["stop"]), ["enter"]))
        }, null, 8, ["modelValue"]),
        f(oe, {
          variant: "underlined",
          ref: "password",
          label: "Enter password",
          modelValue: a.password,
          "onUpdate:modelValue": n[2] || (n[2] = (b) => a.password = b),
          type: r.value ? "text" : "password",
          "append-icon": r.value ? "mdi-eye" : "mdi-eye-off",
          "onClick:append": n[3] || (n[3] = (b) => r.value = !r.value),
          onKeyup: n[4] || (n[4] = ye(F((b) => l(), ["stop"]), ["enter"]))
        }, null, 8, ["modelValue", "type", "append-icon"]),
        q("div", il, [
          v(s.$slots, "bottom", {
            password: a.password,
            username: a.username,
            login: l,
            reset: u
          }, () => [
            a.username && a.password ? (d(), y(fe, {
              key: 0,
              "validate-label": "Login!",
              onValidate: n[5] || (n[5] = (b) => l()),
              onReset: n[6] || (n[6] = (b) => u()),
              state: t
            }, null, 8, ["state"])) : w("", !0)
          ])
        ])
      ], 64))
    ], 64));
  }
}, Be = /* @__PURE__ */ j({
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
    const m = J(), o = c, p = G(m, "views."), a = N(!1);
    ne(() => {
      a.value = !0;
    }), We(() => {
      a.value = !1;
    });
    const r = I("panels"), t = I("panel");
    return (u, l) => (d(), V(x, null, [
      o.state ? (d(), y(de, {
        key: 0,
        state: o.state,
        delay: ""
      }, null, 8, ["state"])) : w("", !0),
      e(m).prepend && e(r).panel == e(t).name ? v(u.$slots, "prepend", { key: 1 }) : w("", !0),
      f(Ce, { class: "ma-4" }, {
        default: i(() => [
          (d(), y(be, {
            to: "#app-bar-sheet-title",
            disabled: !a.value || e(r).panel != o.name
          }, [
            o.icon ? (d(), y(R, {
              key: 0,
              icon: o.icon
            }, null, 8, ["icon"])) : w("", !0),
            M(" " + U(o.title) + " ", 1),
            v(u.$slots, "append-title")
          ], 8, ["disabled"])),
          (d(), y(be, {
            to: "#app-bar-right",
            disabled: !a.value || e(r).panel != o.name
          }, [
            v(u.$slots, "app-bar-right"),
            o.help ? (d(), y(T, {
              key: 0,
              class: "ml-3",
              href: o.help,
              panels: "new",
              icon: "mdi-information-outline"
            }, null, 8, ["href"])) : w("", !0)
          ], 8, ["disabled"])),
          v(u.$slots, "top"),
          v(u.$slots, "default", {}, () => [
            e(p) ? (d(), y(Lt, {
              key: 0,
              modelValue: e(t).view,
              "onUpdate:modelValue": l[0] || (l[0] = (s) => e(t).view = s)
            }, {
              default: i(() => [
                (d(!0), V(x, null, B(e(p), (s, n) => (d(), y(_t, {
                  key: s,
                  value: s
                }, {
                  default: i(() => [
                    v(u.$slots, n)
                  ]),
                  _: 2
                }, 1032, ["value"]))), 128))
              ]),
              _: 3
            }, 8, ["modelValue"])) : w("", !0)
          ]),
          v(u.$slots, "bottom")
        ]),
        _: 3
      }),
      e(m).append && e(r).panel == e(t).name ? v(u.$slots, "append", { key: 2 }) : w("", !0)
    ], 64));
  }
}), Pe = /* @__PURE__ */ j({
  __name: "OxView",
  props: {
    /** Default tab title. */
    title: String
  },
  setup(c) {
    const m = c, o = N(null), p = J(), a = G(p, "tab.", { exclude: ["tab.default"] }), r = G(p, "window.");
    return (t, u) => e(a) && Object.keys(e(a)).length ? (d(), V(x, { key: 0 }, [
      f(Tt, {
        modelValue: o.value,
        "onUpdate:modelValue": u[0] || (u[0] = (l) => o.value = l)
      }, {
        default: i(() => [
          e(p).default ? v(t.$slots, "tab", { key: 0 }, () => [
            f(ke, {
              text: m == null ? void 0 : m.title,
              value: "default"
            }, null, 8, ["text"])
          ]) : w("", !0),
          (d(!0), V(x, null, B(e(a), (l, s) => (d(), y(ke, { value: l }, {
            default: i(() => [
              v(t.$slots, s)
            ]),
            _: 2
          }, 1032, ["value"]))), 256))
        ]),
        _: 3
      }, 8, ["modelValue"]),
      f(Oe, {
        modelValue: o.value,
        "onUpdate:modelValue": u[1] || (u[1] = (l) => o.value = l)
      }, {
        default: i(() => [
          e(p).default ? (d(), y(pe, {
            key: 0,
            value: "default"
          }, {
            default: i(() => [
              v(t.$slots, "default")
            ]),
            _: 3
          })) : w("", !0),
          (d(!0), V(x, null, B(e(r), (l, s) => (d(), y(pe, { value: l }, {
            default: i(() => [
              v(t.$slots, s)
            ]),
            _: 2
          }, 1032, ["value"]))), 256))
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 64)) : v(t.$slots, "default", { key: 1 });
  }
}), Ue = /* @__PURE__ */ j({
  __name: "OxModelEditor",
  props: {
    repo: {},
    initial: {},
    name: {},
    url: {},
    saved: { type: Function }
  },
  setup(c, { expose: m }) {
    const o = N(null), p = I("user"), a = c, { editor: r, edited: t } = ot({ props: a }), u = E(() => p.can([r.repo.use, "change", a.initial])), l = E(() => ({
      editor: r,
      edited: t.value,
      form: o.value,
      editable: u.value,
      disabled: !u.value,
      value: r.value,
      model: r.repo.use
    }));
    return K(() => r.errors && Object.values(r.errors), () => o.value.validate()), m({
      /** The {@link ModelEditor} instance. */
      editor: r,
      /** A computed boolean indicating if content has been edited. */
      edited: t,
      /** A computed boolean indicating if content can be edited. */
      editable: u,
      /** Reference to inner `v-form`. */
      form: o
    }), (s, n) => (d(), V(x, null, [
      v(s.$slots, "prepend", L(_(l.value))),
      f(Se, {
        ref_key: "form",
        ref: o,
        modelValue: e(r).valid,
        "onUpdate:modelValue": n[0] || (n[0] = (b) => e(r).valid = b),
        disabled: !u.value
      }, {
        default: i(() => [
          v(s.$slots, "default", L(_(l.value)))
        ]),
        _: 3
      }, 8, ["modelValue", "disabled"]),
      v(s.$slots, "append", L(_(l.value)))
    ], 64));
  }
}), dl = { key: 0 }, ul = /* @__PURE__ */ j({
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
  setup(c, { expose: m, emit: o }) {
    const p = o, a = c, r = N(null), t = E(() => {
      const { sendFormData: s, hideValidationBtn: n, ...b } = a;
      return b;
    });
    function u() {
      r.value.editor.reset(a.initial);
    }
    async function l() {
      const s = r.value, n = a.sendFormData ? await s.editor.save(new FormData(s.form.$el)) : await s.editor.save();
      return p("saved", r.value.editor), n;
    }
    return m({
      /** Save edited item. */
      save: l,
      /** Reset edited item to initial value */
      reset: u,
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
    }), (s, n) => {
      var b;
      return d(), V(x, null, [
        (b = r.value) != null && b.editor ? (d(), y(de, {
          key: 0,
          state: r.value.editor.state
        }, null, 8, ["state"])) : w("", !0),
        f(Ae, { class: "ox-model-edit" }, {
          default: i(() => [
            f(Ue, C({
              ref_key: "modelEditor",
              ref: r
            }, t.value), {
              prepend: i((O) => [
                a.hideValidationBtn ? w("", !0) : (d(), V("div", dl, [
                  v(s.$slots, "prepend", C(O, {
                    save: l,
                    reset: u
                  }), () => [
                    O.editable && O.edited ? (d(), y(fe, {
                      key: 0,
                      onValidate: n[0] || (n[0] = (S) => l()),
                      onReset: n[1] || (n[1] = (S) => u()),
                      state: O.editor.state,
                      "validate-disabled": O.editor.valid === !1
                    }, null, 8, ["state", "validate-disabled"])) : w("", !0)
                  ])
                ]))
              ]),
              default: i((O) => [
                v(s.$slots, "default", C(O, {
                  save: l,
                  reset: u
                }))
              ]),
              append: i((O) => [
                v(s.$slots, "append", C(O, {
                  save: l,
                  reset: u
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
}), pl = /* @__PURE__ */ j({
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
    const o = J(), p = G(o, "views.list."), a = G(o, "item."), r = G(o, "views.detail.edit."), t = E(() => !!Object.keys(r).length), u = Re("filters"), l = c, s = I("user"), { panel: n, list: b, items: O, next: S, prev: D } = it({ props: l }), Y = n.panels;
    E(() => {
      var $;
      return s.can([n.model, ($ = n.value) != null && $.id ? "change" : "add"]);
    });
    const { showFilters: z } = qe(n), Q = E(() => [
      ...l.headers,
      { key: "actions", title: g("actions") }
    ]);
    function Z($) {
      $ = new l.repo.use($), n.show({ view: n.view, value: $ }), b.load();
    }
    const h = E(() => ({
      panel: n,
      panels: Y,
      list: b,
      items: O,
      saved: Z,
      value: n.value
    }));
    return K(() => Object.values(b.filters), () => b.load()), m({
      /** The ModelList being used across all views */
      list: b,
      /** The {@link OxModelPanel} controller */
      panel: n,
      /** The actual list of items */
      items: O,
      /** URL to next page. */
      next: S,
      /** URL to prev page. */
      prev: D
    }), ($, k) => (d(), y(Be, {
      name: l.name,
      title: e(n).title,
      icon: e(n).icon,
      state: e(b).state,
      index: l.index
    }, W({
      "app-bar-right": i(() => [
        v($.$slots, "app-bar-right", L(_(h.value))),
        e(n).view.startsWith("list.") ? (d(), y($e, {
          key: 0,
          class: "ml-3",
          color: "secondary",
          density: "compact",
          variant: "tonal"
        }, {
          default: i(() => [
            v($.$slots, "nav.list", L(_(h.value))),
            f(T, {
              title: e(g)("actions.list.reload"),
              "aria-label": e(g)("actions.list.reload"),
              onClick: k[0] || (k[0] = (A) => e(b).load())
            }, {
              default: i(() => [
                f(R, null, {
                  default: i(() => [...k[10] || (k[10] = [
                    M("mdi-reload", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "aria-label"]),
            u.value ? (d(), y(T, {
              key: 0,
              title: e(z) ? e(g)("filters.hide") : e(g)("filters.show"),
              "aria-label": e(z) ? e(g)("filters.hide") : e(g)("filters.show"),
              onClick: k[1] || (k[1] = (A) => z.value = !e(z)),
              active: e(z)
            }, {
              default: i(() => [
                f(R, {
                  icon: u.value.icon
                }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["title", "aria-label", "active"])) : w("", !0)
          ]),
          _: 3
        })) : e(n).view.startsWith("detail.") && e(n).value ? (d(), y($e, {
          key: 1,
          class: "ml-3",
          color: "secondary",
          density: "compact",
          variant: "tonal"
        }, {
          default: i(() => [
            v($.$slots, "nav.detail", L(_(h.value))),
            e(n).view == "detail.edit" && e(n).value ? (d(), y(Bt, { key: 0 }, {
              activator: i(({ props: A }) => [
                f(T, C({ "prepend-icon": "mdi-dots-vertical" }, A), {
                  default: i(() => [
                    M(U(e(g)("actions")), 1)
                  ]),
                  _: 1
                }, 16)
              ]),
              default: i(() => [
                f(te, null, {
                  default: i(() => [
                    v($.$slots, "item.actions", {
                      item: e(n).value
                    })
                  ]),
                  _: 3
                })
              ]),
              _: 3
            })) : w("", !0),
            f(T, {
              disabled: !e(D),
              title: e(g)("prev"),
              "aria-label": e(g)("prev"),
              onClick: k[2] || (k[2] = F((A) => e(n).show({ view: e(n).view, value: e(D) }), ["stop"]))
            }, {
              default: i(() => [
                f(R, { icon: "mdi-chevron-left" })
              ]),
              _: 1
            }, 8, ["disabled", "title", "aria-label"]),
            f(T, {
              disabled: !e(S),
              title: e(g)("next"),
              "aria-label": e(g)("next"),
              onClick: k[3] || (k[3] = F((A) => e(n).show({ view: e(n).view, value: e(S) }), ["stop"]))
            }, {
              default: i(() => [
                f(R, { icon: "mdi-chevron-right" })
              ]),
              _: 1
            }, 8, ["disabled", "title", "aria-label"])
          ]),
          _: 3
        })) : w("", !0),
        f(Pt, {
          class: "ml-3",
          color: "secondary",
          density: "compact",
          variant: "tonal",
          mandatory: "",
          modelValue: e(n).view,
          "onUpdate:modelValue": k[9] || (k[9] = (A) => e(n).view = A)
        }, {
          default: i(() => {
            var A;
            return [
              f(T, {
                value: "list.table",
                onClickCapture: k[4] || (k[4] = F((P) => e(n).show({ view: "list.table" }), ["stop"])),
                title: e(g)("panels.nav.table"),
                "aria-label": e(g)("panels.nav.table")
              }, {
                default: i(() => [
                  f(R, null, {
                    default: i(() => [...k[11] || (k[11] = [
                      M("mdi-table", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "aria-label"]),
              f(T, {
                value: "list.cards",
                onClickCapture: k[5] || (k[5] = F((P) => e(n).show({ view: "list.cards" }), ["stop"])),
                title: e(g)("panels.nav.cards"),
                "aria-label": e(g)("panels.nav.cards")
              }, {
                default: i(() => [
                  f(R, null, {
                    default: i(() => [...k[12] || (k[12] = [
                      M("mdi-view-grid", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "aria-label"]),
              e(o)["views.list.kanban"] ? (d(), y(T, {
                key: 0,
                value: "list.kanban",
                onClickCapture: k[6] || (k[6] = F((P) => e(n).show({ view: "list.kanban" }), ["stop"])),
                title: e(g)("panels.nav.kanban"),
                "aria-label": e(g)("panels.nav.kanban")
              }, {
                default: i(() => [
                  f(R, null, {
                    default: i(() => [...k[13] || (k[13] = [
                      M("mdi-view-column", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "aria-label"])) : w("", !0),
              t.value ? (d(), y(T, {
                key: 1,
                value: "detail.edit",
                onClickCapture: k[7] || (k[7] = F((P) => e(n).show({ view: "detail.edit", value: e(n).value }), ["stop"])),
                disabled: !((A = e(n).value) != null && A.id) && e(n).view != "detail.edit",
                title: e(g)("panels.nav.edit"),
                "aria-label": e(g)("panels.nav.edit")
              }, {
                default: i(() => [
                  e(s).can([e(n).model, "change"]) ? (d(), y(R, { key: 0 }, {
                    default: i(() => [...k[14] || (k[14] = [
                      M("mdi-pencil", -1)
                    ])]),
                    _: 1
                  })) : (d(), y(R, { key: 1 }, {
                    default: i(() => [...k[15] || (k[15] = [
                      M("mdi-eye", -1)
                    ])]),
                    _: 1
                  }))
                ]),
                _: 1
              }, 8, ["disabled", "title", "aria-label"])) : w("", !0),
              t.value && e(s).can([e(n).model, "add"]) ? (d(), y(T, {
                key: 2,
                value: "detail.add",
                onClickCapture: k[8] || (k[8] = F((P) => e(n).create(), ["stop"])),
                title: e(g)("panels.nav.add"),
                "aria-label": e(g)("panels.nav.add")
              }, {
                default: i(() => [
                  f(R, null, {
                    default: i(() => [...k[16] || (k[16] = [
                      M("mdi-plus-box", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "aria-label"])) : w("", !0),
              v($.$slots, "nav.views", L(_(h.value)))
            ];
          }),
          _: 3
        }, 8, ["modelValue"]),
        v($.$slots, "app-bar-end", L(_(h.value)))
      ]),
      top: i(() => [
        l.warning ? (d(), y(le, {
          key: 0,
          type: "warning",
          variant: "tonal",
          text: l.warning
        }, null, 8, ["text"])) : w("", !0),
        v($.$slots, "top"),
        Ke(f(Me, {
          ref_key: "filters",
          ref: u,
          search: l.search,
          "teleport-to": "#panel-list-actions"
        }, {
          default: i((A) => [
            v($.$slots, "list.filters", L(_(A)))
          ]),
          _: 3
        }, 8, ["search"]), [
          [Ge, e(n).view.startsWith("list.") && e(z)]
        ])
      ]),
      _: 2
    }, [
      e(o)["append-title"] ? {
        name: "append-title",
        fn: i(() => [
          v($.$slots, "append-title", L(_(h.value)))
        ]),
        key: "0"
      } : void 0,
      e(o).prepend ? {
        name: "prepend",
        fn: i(() => [
          v($.$slots, "prepend", L(_(h.value)))
        ]),
        key: "1"
      } : void 0,
      e(o).append ? {
        name: "append",
        fn: i(() => [
          v($.$slots, "append", L(_(h.value)))
        ]),
        key: "2"
      } : void 0,
      e(o)["views.list.table"] ? void 0 : {
        name: "views.list.table",
        fn: i(() => [
          f(_e, {
            list: e(b),
            items: e(O),
            headers: Q.value,
            edit: t.value
          }, W({ _: 2 }, [
            B(e(a), (A, P) => ({
              name: P,
              fn: i((ee) => [
                v($.$slots, P, L(_(ee)))
              ])
            }))
          ]), 1032, ["list", "items", "headers", "edit"])
        ]),
        key: "3"
      },
      e(o)["views.list.cards"] ? void 0 : {
        name: "views.list.cards",
        fn: i(() => [
          f(Te, {
            list: e(b),
            items: e(O),
            edit: t.value,
            headers: l.headers
          }, W({ _: 2 }, [
            B(e(a), (A, P) => ({
              name: P,
              fn: i((ee) => [
                v($.$slots, P, L(_(ee)))
              ])
            }))
          ]), 1032, ["list", "items", "edit", "headers"])
        ]),
        key: "4"
      },
      B(e(p), (A, P) => ({
        name: P,
        fn: i(() => [
          v($.$slots, P, L(_(h.value)))
        ])
      })),
      t.value ? {
        name: "views.detail.edit",
        fn: i(() => [
          f(Pe, {
            title: e(g)(`models.${e(n).model.entity}`)
          }, W({ _: 2 }, [
            B(e(r), (A, P) => ({
              name: A,
              fn: i(() => [
                v($.$slots, P, L(_(h.value)))
              ])
            }))
          ]), 1032, ["title"])
        ]),
        key: "5"
      } : void 0
    ]), 1032, ["name", "title", "icon", "state", "index"]));
  }
}), ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OxAction: se,
  OxActionModelDelete: Dt,
  OxActionPost: zt,
  OxApp: qt,
  OxAutocomplete: Gt,
  OxComponent: Jt,
  OxField: Qt,
  OxFormList: Xt,
  OxListCard: Te,
  OxListFilters: Me,
  OxListKanban: Zt,
  OxListTable: _e,
  OxLogin: rl,
  OxModelEdit: ul,
  OxModelEditor: Ue,
  OxModelList: Ht,
  OxModelPanel: pl,
  OxPanel: Be,
  OxStateAlert: de,
  OxValidationBtn: fe,
  OxView: Pe
}, Symbol.toStringTag, { value: "Module" })), kl = {
  el: "#app",
  delimiters: ["[[", "]]"],
  components: { ...ml, ...jt }
};
export {
  kl as App,
  se as OxAction,
  Dt as OxActionModelDelete,
  zt as OxActionPost,
  qt as OxApp,
  Gt as OxAutocomplete,
  Jt as OxComponent,
  Qt as OxField,
  Xt as OxFormList,
  Te as OxListCard,
  Me as OxListFilters,
  Zt as OxListKanban,
  _e as OxListTable,
  rl as OxLogin,
  ul as OxModelEdit,
  Ue as OxModelEditor,
  Ht as OxModelList,
  pl as OxModelPanel,
  Be as OxPanel,
  de as OxStateAlert,
  fe as OxValidationBtn,
  Pe as OxView
};
//# sourceMappingURL=components.js.map
