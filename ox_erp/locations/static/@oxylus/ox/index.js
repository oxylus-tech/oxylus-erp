var V = Object.defineProperty;
var Q = (i, e, t) => e in i ? V(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var o = (i, e, t) => Q(i, typeof e != "symbol" ? e + "" : e, t);
import { t as d, R as W, c as C, d as H, l as h, a as U, H as J, b as G, e as Y, B as Z, C as X, G as ee, M as te, f as se, P as ie, U as q, u as S, g as re, S as p, i as ne, h as ae, j as oe, k as le, m as D, s as ue, n as he, o as b, r as ce, p as k, q as de } from "./index2.js";
import { D as at, v as ot, z as lt, I as ut, x as ht, y as ct, A as dt, F as ft, J as pt, E as mt, w as gt } from "./index2.js";
import { inject as v, provide as f, reactive as w, computed as m, ref as fe, createApp as pe, onMounted as F, watch as x, onUnmounted as z, unref as M, defineAsyncComponent as me } from "vue";
import ge from "axios";
import * as ye from "@oxylus/ox/vendor";
import { c as we, a as K, m as ve } from "./vuetify.js";
function T(i, e) {
  let t = `enums.${i}.${e}`, s = d(t);
  return s != t ? s : d(`enums.${i}._.${e}`);
}
const L = {
  get(i, e, t) {
    return e == "items" ? Object.keys(i).filter((s) => s[0] != "_").map((s) => ({
      value: i[s],
      title: T(i.__prefix, s)
    })) : e == "toString" ? (s) => T(t.__prefix, s) : Reflect.get(...arguments);
  }
};
function xe(i, e) {
  return e.__prefix = i, new Proxy(e, L);
}
class be {
  /**
   * Create a new response instance.
   */
  constructor(e, t, s) {
    /**
     * The repository that called the request.
     */
    o(this, "repository");
    /**
     * The request configuration.
     */
    o(this, "config");
    /**
     * The axios response instance.
     */
    o(this, "response");
    /**
     * Entities created by Pinia ORM.
     */
    o(this, "entities", null);
    /**
     * Whether if response data is saved to the store or not.
     */
    o(this, "isSaved", !1);
    this.repository = e, this.config = t, this.response = s;
  }
  /**
   * Save response data to the store.
   */
  async save() {
    const e = this.getDataFromResponse();
    if (!this.validateData(e)) {
      console.warn(
        "[Pinia ORM Axios] The response data could not be saved to the store because it is not an object or an array. You might want to use `dataTransformer` option to handle non-array/object response before saving it to the store."
      );
      return;
    }
    let t = this.config.persistBy || "save";
    this.validatePersistAction(t) || (console.warn(
      '[Pinia ORM Axios] The "persistBy" option configured is not a recognized value. Response data will be persisted by the default `save` method.'
    ), t = "save");
    const s = await this.repository[t](e);
    this.entities = Array.isArray(s) ? s : [s], this.isSaved = !0;
  }
  /**
   * Delete the entity record where the `delete` option is configured.
   */
  async delete() {
    if (this.config.delete === void 0)
      throw new Error(
        "[Pinia ORM Axios] Could not delete records because the `delete` option is not set."
      );
    await this.repository.query().destroy(this.config.delete);
  }
  /**
   * Get the response data from the axios response object. If a `dataTransformer`
   * option is configured, it will be applied to the response object. If the
   * `dataKey` option is configured, it will return the data from the given
   * property within the response body.
   */
  getDataFromResponse() {
    return this.config.dataTransformer ? this.config.dataTransformer(this.response) : this.config.dataKey ? this.response.data[this.config.dataKey] : this.response.data;
  }
  /**
   * Get persist options if any set in config.
   */
  // protected getPersistOptions (): PersistOptions | undefined {
  //   const persistOptions = this.config.persistOptions
  //
  //   if (!persistOptions || typeof persistOptions !== 'object') {
  //     return
  //   }
  //
  //   return Object.keys(persistOptions)
  //     .filter(this.validatePersistAction) // Filter to avoid polluting the payload.
  //     .reduce((carry, key) => {
  //       carry[key] = persistOptions[key]
  //       return carry
  //     }, {} as PersistOptions)
  // }
  /**
   * Validate the given data to ensure the Pinia ORM persist methods accept it.
   */
  validateData(e) {
    return e !== null && typeof e == "object";
  }
  /**
   * Validate the given string as to ensure it correlates with the available
   * Pinia ORM persist methods.
   */
  validatePersistAction(e) {
    return ["save", "insert"].includes(e);
  }
}
class Ae {
  /**
   * Create a new api instance.
   */
  constructor(e) {
    /**
     * The repository class.
     */
    o(this, "repository");
    /**
     * The default config.
     */
    o(this, "config", {
      save: !0
    });
    this.repository = e, this.registerActions();
  }
  /**
   * Get the axios client.
   */
  get axios() {
    if (this.repository.axios = this.repository.axios ?? this.repository.config.axiosApi.axios, !this.repository.axios)
      throw new Error(
        "[Pinia ORM Axios] The axios instance is not registered. Please register the axios instance to the repository."
      );
    return this.repository.axios;
  }
  /**
   * Register actions from the repository config.
   */
  registerActions() {
    var t, s, r;
    const e = { ...(t = this.repository.config.axiosApi) == null ? void 0 : t.actions, ...(r = (s = this.repository.getModel().$config()) == null ? void 0 : s.axiosApi) == null ? void 0 : r.actions };
    if (e)
      for (const n in e) {
        const a = e[n];
        typeof a == "function" ? this.registerFunctionAction(n, a) : this.registerObjectAction(n, a);
      }
  }
  /**
   * Register the given object action.
   */
  registerObjectAction(e, t) {
    this[e] = (s) => this.request({ ...t, ...s });
  }
  /**
   * Register the given function action.
   */
  registerFunctionAction(e, t) {
    this[e] = t.bind(this);
  }
  /**
   * Perform a get request.
   */
  get(e, t = {}) {
    return this.request({ method: "get", url: e, ...t });
  }
  /**
   * Perform a post request.
   */
  post(e, t = {}, s = {}) {
    return this.request({ method: "post", url: e, data: t, ...s });
  }
  /**
   * Perform a put request.
   */
  put(e, t = {}, s = {}) {
    return this.request({ method: "put", url: e, data: t, ...s });
  }
  /**
   * Perform a patch request.
   */
  patch(e, t = {}, s = {}) {
    return this.request({ method: "patch", url: e, data: t, ...s });
  }
  /**
   * Perform a delete request.
   */
  delete(e, t = {}) {
    return this.request({ method: "delete", url: e, ...t });
  }
  /**
   * Perform an api request.
   */
  async request(e) {
    const t = this.createConfig(e), s = await this.axios.request(t);
    return this.createResponse(s, t);
  }
  /**
   * Create a new config by merging the global config, the repository config,
   * and the given config.
   */
  createConfig(e) {
    return {
      ...this.config,
      ...this.repository.globalApiConfig,
      ...this.repository.apiConfig,
      ...e
    };
  }
  /**
   * Create a new response instance by applying a few initialization processes.
   * For example, it saves response data if `save` option id set to `true`.
   */
  async createResponse(e, t) {
    const s = new be(this.repository, t, e);
    return t.delete !== void 0 ? (await s.delete(), s) : (t.save && await s.save(), s);
  }
}
class Ee extends W {
  constructor(t, s) {
    var r, n, a;
    super(t, s);
    o(this, "axios");
    o(this, "globalApiConfig");
    o(this, "apiConfig");
    this.axios = ((n = (r = C) == null ? void 0 : r.axiosApi) == null ? void 0 : n.axios) || null, this.globalApiConfig = ((a = C) == null ? void 0 : a.axiosApi) || {}, this.apiConfig = {};
  }
  api() {
    return qe(this);
  }
  setAxios(t) {
    return this.axios = t, this;
  }
}
function qe(i) {
  return new Ae(i);
}
function Oe(i) {
  return H((e) => (e.config.axiosApi = i, e));
}
class O {
  constructor(e) {
    o(this, "repo");
    o(this, "items");
    this.repo = e, this.items = {};
  }
  /** Acquire a unique context key */
  acquireKey() {
    return this.constructor._lastKey++;
  }
  /** Acquire provided ids for this key */
  acquire(e, t) {
    if (t != null && t.length)
      for (var s of t)
        if (s in this.items) {
          const r = this.items[s];
          !r.includes(e) && r.push(e);
        } else
          this.items[s] = [e];
  }
  /** Release provided ids for this key */
  release(e, t) {
    if (!(t != null && t.length))
      return;
    const s = [];
    for (var r of t) {
      const n = this.items[r];
      h.pull(n, e), n != null && n.length || (s.push(r), delete this.items[r]);
    }
    s.length && this.repo.destroy(s);
  }
  /**
   * Release and acquire for this key.
   *
   * This optimizes out ids
   */
  releaseAcquire(e, t, s) {
    this.release(e, h.difference(t, s)), this.acquire(e, h.difference(s, t));
  }
  /** Release all reference for the provided context key. */
  flush(e) {
    const t = [];
    for (var s in this.refs) {
      const r = this.refs[s], n = r.indexOf(e);
      n != -1 && (r.splice(n, 1), r.length || (t.push(s), delete this.items[s]));
    }
    t.length && this.repo.destroy(t);
  }
  /** Clear reference counter without destroying items. **/
  clear() {
    this.refs = {};
  }
}
o(O, "_lastKey", 0);
class E extends Ee {
  constructor(t, s) {
    super(t, s);
    o(this, "refs");
    this.refs = new O(this);
  }
  flush() {
    this.refs.clear(), super.flush();
  }
}
function N(i, e) {
  var t;
  if (typeof e == "string") {
    const s = (t = i.use) == null ? void 0 : t.fields(), r = s && s[e] || null;
    e = r instanceof U ? r : null;
  }
  return e;
}
function B(i) {
  return i instanceof J || i instanceof G || i instanceof Y || i instanceof Z ? i.foreignKey : null;
}
const We = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ContentType: X,
  Enum: xe,
  Group: ee,
  Meta: te,
  Model: se,
  Permission: ie,
  RefCounter: O,
  Repository: E,
  User: q,
  asRelation: N,
  enumProxy: L,
  getSourceKey: B
}, Symbol.toStringTag, { value: "Module" }));
function Pe(i) {
  S(i);
  const e = re();
  return E.useModel = i, S(E, e);
}
function Re(i, { useInject: e = !0, useDefaults: t = !0, key: s = null } = {}) {
  var r = e && (v("repos") || {});
  const n = e && !!Object.keys(r).length;
  Array.isArray(i) || (i = Object.values(i)), t && i.push(q);
  for (const a of i)
    if (a && a.entity) {
      if (a.entity in r)
        continue;
      r[a.entity] = Pe(a);
    }
  return !n && f("repos", r), r;
}
class $e {
  static reactive(e) {
    const t = w(new this(e));
    return t.user = m(() => {
      var s;
      return new q(((s = t.data) == null ? void 0 : s.user) || {});
    }), t;
  }
  constructor(e = {}) {
    Object.assign(this, e), this.state = p.none(), this.showState = !1;
  }
  /**
   * Load data into AppData. If no `value` is provided, read it from
   * source element.
   */
  load(e = void 0) {
    this.dataEl !== void 0 && (e === void 0 && (e = this.readData(this.dataEl)), e.dataEl = this.dataEl, this.data = e), this.models !== void 0 && (this.repos = Re(this.models));
  }
  /**
   * Read data from the context of provided source element.
   * @param {String} el - id of the DOM element.
   * @return {Object} read data
   */
  readData(e) {
    const t = document.getElementById(e);
    if (!t)
      throw "Element {elementId} not found";
    return t.innerText ? JSON.parse(t.innerText) : {};
  }
}
function He(i, e = !0) {
  const t = $e.reactive(i);
  return e && t.dataEl && t.load(), f("context", t), f("user", t.user), t;
}
function Je({ props: i, user: e, emits: t = null }) {
  const s = fe(!1), r = m(() => !i.permission || e.can(i.permission, i.item));
  return { processing: s, run: async (...a) => {
    if (i.confirm && !confirm(i.confirm))
      return;
    if (i.href)
      return window.open(i.href, "_blank");
    s.value = !0;
    let l = i.run(e, i.item, ...a);
    return l instanceof Promise && (l = await l), s.value = !1, t && t("completed", i.item, ...a), l;
  }, allowed: r };
}
function Ge({ App: i = null, el: e = "#app", onLoad: t = !0, ...s } = {}) {
  function r() {
    const n = _e(i, s), a = e ? n.mount(e) : null;
    return document.body.classList.remove("loading"), { app: n, el: e, vm: a };
  }
  return new Promise((n) => {
    if (t)
      return window.addEventListener(
        "load",
        () => n(r())
      );
    n(r());
  });
}
function _e(i, { props: e = {}, vuetify: t = {}, plugins: s = null } = {}) {
  return i = pe(i, e), i.config.globalProperties.window = window, i.use(je(t)), i.use(ne), ae(), s && s.forEach((r) => i.use(r)), i;
}
function je({ components: i = {}, defaults: e = {}, ...t }) {
  return t.components = {
    ...ye,
    ...i
  }, we({
    blueprint: ve,
    theme: {
      themes: {
        light: {
          dark: !1,
          colors: {
            primary: K.green.darken1,
            secondary: K.green.lighten4
          }
        }
      }
    },
    defaults: {
      ...e,
      VTextField: { variant: "underlined" },
      VSelect: { variant: "underlined" },
      VTextarea: { variant: "outlined" },
      VCombobox: { variant: "underlined" },
      VAutocomplete: { variant: "underlined" }
    },
    ...t
  });
}
function Ye({ axiosConfig: i = null, baseURL: e = null } = {}) {
  e || (e = document.body.dataset.apiUrl);
  const t = oe(), s = le({
    plugins: [
      Oe({
        axios: ge,
        ...i || D.axiosConfig,
        baseURL: e
      })
    ]
  });
  return ue(t), t.use(s);
}
class g {
  /**
  * @param {Repos} [repos] all models repositories
  * @param {Repository<M>} [repo] the main repository
  */
  constructor(e, t = null, s) {
    this.repo = e, this.repos = t, this.opts = s;
  }
  /** Fetch items from api. */
  async fetch(e = {}) {
    var P, R, $, _, j;
    e = { ...this.opts, ...e };
    let { url: t, id: s, repo: r, lookup: n, params: a, relations: l, path: u, ...c } = e;
    n ?? (n = "id__in"), r ?? (r = this.repo);
    let A = null;
    if (Array.isArray(s) && (s.length == 1 ? s = s[0] : (A = s, s = null)), t || (t = (R = (P = r.use) == null ? void 0 : P.meta) == null ? void 0 : R.getUrl({ path: u, id: s })), s ? c.dataKey = null : "dataKey" in c || (c.dataKey = (j = (_ = ($ = r.use) == null ? void 0 : $.config) == null ? void 0 : _.axiosApi) == null ? void 0 : j.dataKey), A && n !== void 0) {
      if (s)
        throw Error("Both `ids` and `id` are provided while only one of those arguments is accepted.");
      a = { ...a || {} }, a[n] = A.join(",");
    }
    const y = await r.api().get(t, { ...c, params: a });
    return c.save === !1 && (y.entities = this.getEntities(y)), l && (y.relations = await this.relations(y.entities, l, { ...c, params: {} })), y;
  }
  /** Get entities from response **/
  getEntities(e) {
    const t = e.getDataFromResponse();
    return Array.isArray(t) ? t.map((s) => this.repo.make(s)) : [this.repo.make(t)];
  }
  /**
   * Fetch all items from api.
   *
   * @param [options.nextKey] response object key to get next url
   * @param [options.limit] max count of consecutive requests
   * @return Response of the first request, whoses ``entities`` has \
   * model instances of all requests.
   */
  async all({ nextKey: e = "next", limit: t = -1, flush: s = !1, ...r } = {}) {
    const n = await this.fetch({ flush: s, ...r });
    let a = n.response.data[e];
    for (; a; ) {
      const l = await this.fetch({ ...r, url: a });
      if (l.entities && (n.entities = n.entities !== null ? n.entities.concat(l.entities) : l.entities), a = l.response.data[e], t > 0 && t--, !t) break;
    }
    return n;
  }
  /**
   * Fetch all from API if repository is empty (see {@link Query.all}).
   *
   * For arguments see {@link Query.all}.
   *
   * Return null if no request has been made.
   */
  async allOnce(e = {}) {
    return (e.repo ?? this.repo).first() ? null : await this.all(e);
  }
  /**
   * Fetch related objects for the provided list and field names.
   *
   * @param objs - the objects to get related ids from.
   * @param options.fields - list of field names.
   * @param options.opts - options to pass down to {@link Quey.relation}.
   * @return the resulting entities.
   */
  async relations(e, t, s = {}) {
    var a;
    this._ensureRepos("relations");
    const r = {}, n = (a = this.repo.use) == null ? void 0 : a.fields();
    if (n)
      for (const l of t) {
        const u = n[l];
        if (u instanceof U)
          r[l] = await this.relation(e, u, s);
        else
          throw Error(`Field ${l} is not a relation`);
      }
    return r;
  }
  _ensureRepos(e) {
    if (!this.repos)
      throw Error(`Query.repos is not provided although it is mandatory to call ${e}.`);
  }
  /**
   * Fetch related objects for the provided object list and field name.
   * It uses {@link Query.all} in order to fetch all items.
   *
   * @param objs - the objects to get ids from.
   * @param relation - objects' field or field name.
   * @param options - options to pass down to `all()`.
   */
  async relation(e, t, s = {}) {
    this._ensureRepos("relations");
    const r = N(this.repo, t);
    if (!r)
      throw Error(`No Relation found for field ${t}.`);
    const n = r.related.constructor.entity, a = this.repos[n];
    if (!a)
      throw Error(`No repository "${n}" found.`);
    const l = B(r);
    if (!l)
      throw Error(`No source ids attributes for ${t}.`);
    const u = [...new Set(he(e, l))];
    return new g(a, this.repos).all({ ...s, id: u, repo: a });
  }
}
function Ce(i, e, t = null) {
  if (typeof i == "string") {
    if (!(i in e))
      throw Error(`Repository "${i}" is not present in provided repositories.`);
    return new g(e[i], e, t);
  }
  return new g(i, e, t);
}
class I {
  constructor(e) {
    o(this, "state", p.none());
    o(this, "value", {});
    e && b(this, e), this.state || (this.state = new p()), this.value ?? (this.value = {}), this.empty ?? (this.empty = {}), this.initial ?? (this.initial = this.props.initial || this.empty), this.valid = !0, this.reset(this.initial);
  }
  get name() {
    return this.props.name;
  }
  get url() {
    return this.props.url;
  }
  get errors() {
    return this.state.isError && this.state.data || null;
  }
  error(e) {
    var s;
    const t = this.state.isError && ((s = this.state.data) == null ? void 0 : s[e]);
    return t && this.initial[e] != this.value[e] && t.join(`
`) || "";
  }
  /** Discard changes, resetting to initial value. */
  discard() {
    this.reset(this.initial);
  }
  /**
   * Reset editor data to provided value.
   * When value is provided, reset initial to this value.
   */
  reset(e = null) {
    ce(this.value, e ?? this.empty), this.state.none();
  }
  /** Return wether value has been edited or not */
  isEdited() {
    return !h.isEqual(this.value, this.initial);
  }
  /**
   * Save data. It will `serialize()` value then `send()` it.
   *
   * Note: default implementation does not provide `send()` method
   * and thus will raise an error.
   *
   * @param [value] if provided use this instead of `this.value`. When a form is provided, it will get
   * @return state.
   */
  async save(e = null, t = {}) {
    var r;
    if (this.state.processing(), this.valid === !1)
      return this.state.error({
        _: "Some of the input values are invalid"
      });
    e ?? (e = this.value), e instanceof FormData ? t.headers = {
      ...D.axiosConfig.headers,
      "Content-Type": "multipart/form-data",
      ...t.headers
    } : e = this.serialize(e);
    const s = await this.send(e, t);
    return s.isOk ? (this.reset(s.data, !0), this.initial = h.cloneDeep(this.value), (r = this.saved) == null || r.call(this, this.value)) : this.state = s, this.state;
  }
  /**
   * This method is called when editor successfully saved the
   * edited item to the server.
   *
   * By default, it will call {@link Editor.props.saved} if provided.
   */
  saved(e) {
    var t, s;
    (s = (t = this.props).saved) == null || s.call(t, e, this);
  }
  /** Serialize value before sending. */
  serialize(e) {
    return e;
  }
  /** Send value (not implemented, MUST BE in subclasses). */
  async send(e, t) {
    throw "not implemented";
  }
}
class Se {
  constructor(e = null) {
    o(this, "index", "list.table");
    o(this, "view", "");
    o(this, "value", null);
    o(this, "item", null);
    o(this, "editions", /* @__PURE__ */ new Set());
    /**
     * Translation key for message displayed on `confirm()` to leave unsaved
     * changes.
     */
    o(this, "confirmTKey", "panel.confirm");
    e && b(this, e), this.view ?? (this.view = this.index || "");
  }
  /** Panel name (based on props) **/
  get name() {
    var e;
    return ((e = this.props) == null ? void 0 : e.name) || "";
  }
  /** Wether there are still edited items on current view. */
  get edited() {
    var e;
    return !!((e = this.editions) != null && e.size);
  }
  /** Return adequate icon based on props and model **/
  get icon() {
    var e;
    return ((e = this.props) == null ? void 0 : e.icon) || null;
  }
  /** Return panel's title based on props. */
  get title() {
    var e;
    return (e = this.props) == null ? void 0 : e.title;
  }
  /** Return URL GET parameters for the current view */
  getUrlParams() {
    const e = { panel: this.name };
    return this.view != this.index && (e.view = this.view), this.view.startsWith("detail.") && this.value && (e.value = this.value), e;
  }
  /** Set or remove an edition by name. */
  setEdition(e, t) {
    t ? this.editions.add(e) : this.editions.delete(e);
  }
  /**
   * Show a view, providing optional value.
   * @return - true if view changed
   */
  show({ view: e = null, value: t = null, silent: s = !1, force: r = !1 } = {}) {
    return (e != this.view || t != this.value) && (r || this.canLeave()) ? (this.view = e || this.index, this.value = t, !s && this.updateLocation(), !0) : !1;
  }
  /** Update current location using History api */
  updateLocation() {
    const e = this.getUrlParams();
    if (e) {
      const t = new URLSearchParams(e).toString();
      history.pushState(e, "", `?${t}`);
    }
  }
  /**
   * Called when view or panel changes. It returns `true` if view/panel can be changed.
   *
   * Ask user for confirmation if there is unsaved changes (aka editions).
   *
   * @return true if we can proceed to view/panel change.
   */
  canLeave() {
    if (!this.edited)
      return !0;
    const e = d(this.confirmTKey);
    return confirm(e);
  }
}
class ke {
  constructor(e = null) {
    o(this, "panel", "");
    o(this, "params", {});
    o(this, "paramsString", "");
    o(this, "children", {});
    o(this, "current");
    e && b(this, e);
  }
  /**
   * Set {@link Panels.params based on current document location.
   */
  readDocumentLocation() {
    this.paramsString = document.location.search.substring(1);
    const e = new URLSearchParams(this.paramsString), { panel: t, ...s } = Object.fromEntries(e.entries());
    this.panel = t, this.params = s || {};
  }
  /** Read provided path and return current panel and view */
  static readPath(e) {
    if (!e)
      return { panel: "", view: "" };
    const t = e.indexOf(".");
    return t < 0 ? { panel: e, view: "" } : { panel: e.substring(0, t), view: e.substring(t + 1) };
  }
  /** Register a panel */
  register(e, t) {
    this.children[e] || (this.children[e] = t, this.panel == t.name && (this.current = t, t.show(this.params)));
  }
  /** Unregister a panel */
  unregister(e) {
    delete this.children[e];
  }
  /**
   * Show a panel, loading page provided by href if required.
   * When there is already a panel displayed, it will call {@link Panel.onLeave} in order to eventually prevent
   * unwanted page change.
   */
  show({ force: e = !1, href: t = null, ...s }) {
    if (e || this.canLeave()) {
      if (t && window.location.pathname != t) {
        if (!s.panel)
          throw Error("The attribute `href` requires`panel`.");
        t = `${t}?panel=${s.panel}`, s.view && (t = `${t}&view=${s.view || ""}`), window.location.href = t;
        return;
      }
      this.reset(s);
    }
  }
  /** Return whether we can change page/panel. */
  canLeave() {
    return this.current ? this.current.canLeave() : !0;
  }
  reset({ panel: e, silent: t = !1, ...s }) {
    var n;
    e && e != this.panel && !this.canLeave() || (this.panel = e || this.panel, this.params = s, this.current = this.children[this.panel], (n = this.current) == null || n.show({ ...this.params, silent: t }));
  }
}
class Me {
  constructor(e = null) {
    o(this, "state", p.none());
    o(this, "save", !0);
    e && b(this, e);
  }
  /** The repository of contained items. */
  get repo() {
    return this.query.repo;
  }
  /** Current model. */
  get model() {
    return this.repo.use;
  }
  /** Return orm's query to object. This will includes declared {@link List.relations}.
   *
   *   @param ids - optional id lookup
   *   @param first - if true, return the first item
   *   @return orm's query
   */
  queryset(e = null, t = !1) {
    let s = this.repo.query();
    if (this.relations)
      for (const r of this.relations)
        s = s.with(r);
    return e !== null && (s = s.whereId(e)), t ? s.first() : s;
  }
  /**
   * Fetch model instance from the server and select them.
   *
   * Calling this method updates state to:
   * - `PROCESSING`: request is being made;
   * - `NONE`: request has been done without error;
   * - `ERROR`: if an error happened;
   *
   * Flowchart:
   * - {@link ModelController.fetch}
   * - {@link ModelController.handleResponse}
   */
  async load(e = {}) {
    this.state.processing();
    let t = null;
    try {
      t = await this.fetch(e), t = await this.handleResponse(e, t);
    } catch (s) {
      console.log(s), this.state.error(s);
    }
    return this.state.isError || this.state.none(), t;
  }
  /** Fetch model instance from the server.
   *
   * Flowchart:
   * - {@link ModelController.getQueryParams}
   * - {@link Query.fetch}
   */
  async fetch(e = {}) {
    const t = this.getQueryOptions(e);
    return e.all ? this.query.fetch : this.query.all, await this.query.fetch(t);
  }
  /** Handle response from the {@link ModelContainer.fetch}'s request. */
  async handleResponse(e, t) {
    return t;
  }
  /** Get {@link Query.fetch} options. */
  getQueryOptions(e) {
    return !e.relations && this.relations && this.fetchRelations && (e.relations = this.relations), e.url || (e.url = this.url), "save" in e || (e.save = this.save), e;
  }
}
class Ke extends Me {
  constructor(...t) {
    super(...t);
    // /** Reference counter key **/
    // $id: number
    o(this, "ids", []);
    o(this, "filters", {});
    o(this, "nextUrl", null);
    o(this, "prevUrl", null);
    o(this, "count", null);
    o(this, "page_size", null);
    o(this, "dataKey", "results");
    o(this, "nextKey", "next");
    o(this, "prevKey", "previous");
    o(this, "countKey", "count");
  }
  get length() {
    return this.ids.length;
  }
  /** Return index for id */
  indexOf(t) {
    return this.ids.indexOf(t);
  }
  /** Destroy list, ensuring cleaning behind the scenes */
  drop() {
    this.ids.splice(0);
  }
  /** Reset list */
  reset(t = []) {
    this.ids = [...t], this.nextUrl = null, this.prevUrl = null, this.count = this.ids.length;
  }
  /** Get item index by id */
  //findIndex(id: number): number { return this.items.findIndex((v) => v.id == id) }
  /** Add item if not present in list.
  *
  * @param id - item id to insert
  * @param index - if provided insert at this position
  * @return item index if already in the list, else insertion one
  */
  add(t, s = null) {
    const r = this.ids.indexOf(t);
    return r != -1 ? r : s !== null ? (this.ids.splice(s, 0, t), s) : (this.ids.push(t), this.ids.length - 1);
  }
  /** Remove item by id from list if present. */
  remove(t) {
    const s = this.ids.indexOf(t);
    s != -1 && this.ids.splice(s, 1);
  }
  /**
   * Get item id next to provided one at the specified direction.
   *
   * @param item - reference item
   * @param step - increment or decrement item index by this value.
   * @return the target item id or null if not found.
   */
  getSiblingIndex(t, s) {
    if (t === null)
      return -1;
    const r = this.ids.indexOf(t.id), n = r >= 0 ? r + s : -1;
    return n >= 0 && n < this.ids.length ? n : -1;
  }
  /**
   * Fetch next items from API, override `url` using {@link ModelList.nextUrl}.
   */
  async loadNext(t) {
    return await this.load({ ...t, url: this.nextUrl });
  }
  /**
   * Fetch previous items from API, override `url` using {@link ModelList.prevUrl}.
   */
  async loadPrev(t) {
    return await this.load({ ...t, url: this.prevUrl });
  }
  getQueryOptions(t) {
    return !("filters" in t) && this.filters && (t.params = { ...this.filters, ...t.params ?? [] }), this.page_size && (t.params = { ...t.params, page_size: this.page_size }), super.getQueryOptions(t);
  }
  /**
   * Handle response from API: update owned items list and related information (next/prev url, total count).
   *
   * Theses informations will not be set if `options.save == false`. You
   * can however call this method later if you need to defer persistence.
   */
  async handleResponse({ append: t = !1, ...s }, r) {
    if (r = await super.handleResponse(s, r), !this.state.isError && s.save !== !1) {
      const n = h.map(r.entities, "id");
      this.update(n, t), this.nextUrl = r.response.data[this.nextKey] || null, this.prevUrl = r.response.data[this.prevKey] || null, this.count = r.response.data[this.countKey] || this.ids.length;
    }
    return r;
  }
  /**
   * Update the list with the provided ids
   *
   * @param {ModelId[]} ids - The ids to add to the list
   * @param {boolean|number} append - When `true`, append items. When a number, insert at the provided position. \
   *                                  When `false`, remove all previous ids.
   */
  update(t, s = !1) {
    typeof s == "number" ? this.ids.splice(s, 0, ...t) : s && this.ids.length ? this.ids = h.union(this.ids, t) : this.ids = t;
  }
  /**
   * Update the list with the provided items.
   *
   * It first insert items in the repository before calling {@link ModelList.update}.
   *
   * @param {Model[]} items - The items to insert and add to the list.
   * @param ...args - Arguments passed down to {@link ModelList.update}.
   */
  updateWith(t, ...s) {
    this.repo.insert(t), this.update(t.map((r) => r.id), ...s);
  }
}
class Te extends I {
  constructor(e) {
    e.fields = Object.keys(e.props.repo.use.fields()), e.empty ?? (e.empty = new e.props.repo.use()), super(e);
  }
  get repo() {
    return this.props.repo;
  }
  get name() {
    return this.props.name || `${this.repo.use.entity}-edit`;
  }
  isEdited() {
    return !h.isEqual(h.pick(this.value, this.fields), h.pick(this.initial, this.fields));
  }
  get url() {
    var t, s;
    const e = super.url || ((s = (t = this.repo.use) == null ? void 0 : t.meta) == null ? void 0 : s.url);
    if (!e)
      throw Error("No url specified as parameter or in Model.meta.");
    return e;
  }
  reset(e) {
    (!e || !Object.keys(e).length) && (e = this.empty);
    const t = this.fields.filter((s) => s in e);
    this.value = h.cloneDeep(h.pick(e, t)) || {}, this.state.none();
  }
  serialize(e) {
    const t = this.repo.use;
    return new t({ ...this.value }).$toJson(null, { relations: !1 });
  }
  async send(e, t = {}) {
    let [s, r] = ["post", this.url];
    return this.value.id && (r = `${r}${this.value.id}/`, s = "put"), await this.repo.api()[s](r, e, t).then(
      (n) => p.ok(n.entities[0]),
      (n) => p.error(n.response.data)
    );
  }
}
class Ue extends Se {
  constructor(t) {
    var s;
    super(t);
    o(this, "showFilters", !1);
    this.showFilters = ((s = this.props) == null ? void 0 : s.showFilters) || !1;
  }
  /** Current model's repository. */
  get repo() {
    return this.props.repo;
  }
  /** Current model. */
  get model() {
    return this.repo.use;
  }
  /** Query (shortcut to `this.list.query`). **/
  get query() {
    return this.list.query;
  }
  /** Return icon based on props and model **/
  get icon() {
    var t;
    return super.icon || ((t = this.model.meta) == null ? void 0 : t.icon);
  }
  /** Return panel's title based on view and current item. */
  get title() {
    var n, a, l, u;
    const { props: t, list: s } = this, r = this.repo.use;
    if (r) {
      if ((n = this.view) != null && n.startsWith("list."))
        return d(k.model(r), 3);
      if ((a = this.view) != null && a.startsWith("detail.")) {
        if ((l = this.value) != null && l.$title)
          return this.value.$title;
        const c = d(k.model(r));
        return (u = this.value) != null && u.id ? d("models._.title", { model: c, id: this.value.id }) : d("models._.title.new", { model: c });
      }
    }
    return super.title;
  }
  getUrlParams() {
    const { value: t = null, ...s } = super.getUrlParams();
    return t != null && t.id && (s.id = t.id), s;
  }
  /**
   * Edit a new item.
   *
   * @param view - edit view.
   */
  create(t = "detail.edit") {
    this.show({ view: t, value: null });
  }
  /** Called when an item has been created. By default, show edit view. */
  created(t, s = "detail.edit") {
    this.show({ view: s, value: t });
  }
  show({ id: t = null, ...s }) {
    if (t)
      Ce(this.repo).fetch({ id: t, relations: this.relations }).then((r) => (super.show({ ...s, value: r.entities[0] }), r));
    else
      return super.show(s);
  }
}
function Ze(i) {
  const e = w(new ke(i));
  f("panels", e), F(() => {
    e.readDocumentLocation(), e.panel && e.show({
      panel: e.panel,
      silent: !0,
      ...e.params
    });
  }), window.addEventListener("popstate", (s) => {
    s.state && e.show({ ...s.state, silent: !0 });
  });
  const t = document.title;
  return x(() => {
    var s;
    return (s = e.current) == null ? void 0 : s.title;
  }, (s) => {
    s ? document.title = `${s} | ${t}` : document.title = t;
  }), e;
}
function De(i, e) {
  const t = w(new e(i));
  return f("panel", t), F(() => t.panels.register(t.name, t)), z(() => t.panels.unregister(t.name)), { panel: t };
}
function Xe({ query: i, repos: e, ...t }) {
  e ?? (e = v("repos")), i ?? (i = new g(t.props.repo, e)), t.panels ?? (t.panels = v("panels"));
  const { list: s, items: r } = Fe({
    query: i,
    relations: t.props.relations,
    fetchRelations: t.props.fetchRelations
  }), { panel: n } = De({ list: s, ...t }, Ue), a = m(() => {
    const u = s.getSiblingIndex(M(n.value), 1);
    return r.value[u] ?? null;
  }), l = m(() => {
    const u = s.getSiblingIndex(M(n.value), -1);
    return r.value[u] ?? null;
  });
  return { panels: n.panels, panel: n, list: s, items: r, next: a, prev: l };
}
function Fe(i, e = Ke) {
  const t = w(new e(i)), s = t.repo.refs.acquireKey(), r = m(() => t.length ? t.queryset(t.ids).orderBy((n) => t.ids.indexOf(n)).get() : []);
  return x(
    () => t.ids,
    de((n, a) => t.repo.refs.releaseAcquire(s, a, n))
  ), z(() => t.repo.refs.flush(s)), f("list", t), f("items", r), { list: t, items: r, listId: s };
}
function et(i, e = null, t) {
  const s = new g(i, e, t), r = p.none();
  async function n(a) {
    r.processing();
    let l = null;
    try {
      l = await s.fetch(a), r.none();
    } catch (u) {
      r.error(u);
    }
    return l;
  }
  return { state: r, query: s, fetch: n };
}
function ze(i, e = I) {
  i.initial || i.props.initial;
  const t = w(new e(i));
  f("editor", t);
  const s = m(() => t.isEdited());
  x(() => t.props.initial, (n) => {
    t.initial = n || t.empty, t.reset(n || t.empty);
  });
  const r = v("panel");
  return r && x(() => t.edited, (n) => r.setEdition(t.name, n)), { editor: t, edited: s };
}
function tt(i, e = Te) {
  return ze(i, e);
}
const st = {
  /** Field is required */
  required(i) {
    return i || i === 0 ? !0 : d("fields._.required");
  },
  /**
   * Validate field errors returned from the server.
   */
  errors(i) {
    return () => i != null && i.length ? i.join("<br>") || !1 : !0;
  },
  /**
   * Return a rule whose validating value is optional.
   *
   * By default rules require value to be provided. This returns a new
   * rule whose value can either be empty or must match provided rule.
   */
  optional(i) {
    return (e) => !e || i(e);
  },
  /** Rule validating email */
  email(i) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(i) || d("fields.email.rule");
  },
  /** Rule validating username */
  username(i) {
    return /^[A-Za-z0-9@.+\-_]+$/.test(i) || "Username must not be empty. It only can contain letters, numbers and @/+/./- special characters";
  }
};
function it(i, e) {
  return me(() => import(i).then((t) => (i.endsWith(".js") && Le(import.meta.resolve(i.replace(/\.js$/, ".css"))), e ? Object.values(t).filter((r) => r.__name == e)[0] : t)));
}
function Le(i) {
  return new Promise((e, t) => {
    if (document.querySelector(`link[href="${i}"]`)) {
      e();
      return;
    }
    const s = document.createElement("link");
    s.rel = "stylesheet", s.href = i, s.onload = () => e(), s.onerror = (r) => t(r), document.head.appendChild(s);
  });
}
export {
  $e as AppContext,
  I as Editor,
  Me as ModelController,
  Te as ModelEditor,
  Ke as ModelList,
  Ue as ModelPanel,
  Se as Panel,
  ke as Panels,
  g as Query,
  p as State,
  at as States,
  b as assignNonEmpty,
  he as collectAttr,
  D as config,
  _e as createApp,
  ot as createI18n,
  Ye as createPinia,
  je as createVuetify,
  lt as csrfToken,
  it as defineAsyncComponent,
  ut as filterSlots,
  ht as getCookie,
  ct as getCookieList,
  dt as getCsrf,
  ne as i18n,
  ft as ifNotEqual,
  de as ifNotEqualFn,
  Ge as init,
  pt as injectOrProvide,
  mt as mapToObject,
  We as models,
  Ce as query,
  ce as reset,
  st as rules,
  d as t,
  k as tKeys,
  gt as te,
  Je as useAction,
  He as useAppContext,
  ze as useEditor,
  ae as useI18n,
  tt as useModelEditor,
  Fe as useModelList,
  Xe as useModelPanel,
  Re as useModels,
  De as usePanel,
  Ze as usePanels,
  et as useQuery,
  Pe as useRepo
};
//# sourceMappingURL=index.js.map
