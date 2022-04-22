import { n as noop, a as safe_not_equal, b as subscribe, r as run_all, i as is_function, g as get_store_value } from "./index-bb157ef7.js";
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i2 = 0; i2 < subscriber_queue.length; i2 += 2) {
            subscriber_queue[i2][0](subscriber_queue[i2 + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store, i2) => subscribe(store, (value) => {
      values[i2] = value;
      pending &= ~(1 << i2);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i2;
    }));
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}
var D$1 = Object.defineProperty, I = Object.defineProperties;
var H$1 = Object.getOwnPropertyDescriptors;
var T$1 = Object.getOwnPropertySymbols;
var z$1 = Object.prototype.hasOwnProperty, K = Object.prototype.propertyIsEnumerable;
var F = (i2, e, t2) => e in i2 ? D$1(i2, e, { enumerable: true, configurable: true, writable: true, value: t2 }) : i2[e] = t2, l$1 = (i2, e) => {
  for (var t2 in e || (e = {}))
    z$1.call(e, t2) && F(i2, t2, e[t2]);
  if (T$1)
    for (var t2 of T$1(e))
      K.call(e, t2) && F(i2, t2, e[t2]);
  return i2;
}, d$2 = (i2, e) => I(i2, H$1(e));
var L = (i2, e) => {
  var t2 = {};
  for (var s in i2)
    z$1.call(i2, s) && e.indexOf(s) < 0 && (t2[s] = i2[s]);
  if (i2 != null && T$1)
    for (var s of T$1(i2))
      e.indexOf(s) < 0 && K.call(i2, s) && (t2[s] = i2[s]);
  return t2;
};
var C$2 = ({ parser: i2, key: e, params: t2, translations: s, locale: r, fallbackLocale: a2 }) => {
  if (!(e && r))
    return console.warn("[i18n]: No translation key or locale provided. Skipping translation..."), "";
  let n2 = (s[r] || {})[e];
  return a2 && n2 === void 0 && (n2 = (s[a2] || {})[e]), i2.parse(n2, t2, r, e);
}, h$1 = (...i2) => i2.length ? i2.filter((e) => !!e).map((e) => {
  let t2 = `${e}`.toLowerCase();
  try {
    [t2] = Intl.Collator.supportedLocalesOf(e);
  } catch {
    console.warn(`[i18n]: Non-standard locale provided: '${i2}'. Check your 'translations' and 'loaders' in i18n config...`);
  }
  return t2;
}) : [], P$1 = (i2, e) => Object.keys(i2 || {}).reduce((t2, s) => {
  let r = i2[s], a2 = e ? `${e}.${s}` : `${s}`;
  return r && typeof r == "object" ? l$1(l$1({}, t2), P$1(r, a2)) : d$2(l$1({}, t2), { [a2]: r });
}, {}), j = async (i2) => {
  try {
    return (await Promise.all(i2.map((r) => {
      var a2 = r, { loader: t2 } = a2, s = L(a2, ["loader"]);
      return new Promise(async (n2) => {
        let c;
        try {
          c = await t2();
        } catch (v2) {
          console.error(`[i18n]: Failed to load translation. Verify your '${s.locale}' > '${s.key}' Loader.`), console.error(v2);
        }
        n2(d$2(l$1({ loader: t2 }, s), { data: c }));
      });
    }))).reduce((t2, { key: s, data: r, locale: a2 }) => {
      if (!r)
        return t2;
      let [n2] = h$1(a2);
      return d$2(l$1({}, t2), { [n2]: P$1(d$2(l$1({}, t2[n2] || {}), { [s]: r })) });
    }, {});
  } catch (e) {
    console.error(e);
  }
  return {};
}, k$1 = (i2) => (e) => {
  try {
    if (typeof e == "string")
      return e === i2;
    if (typeof e == "object")
      return e.test(i2);
  } catch {
    throw new Error("[i18n]: Invalid route config!");
  }
  return false;
}, N$1 = (i2, e) => {
  let t2 = true;
  try {
    t2 = Object.keys(i2).filter((s) => i2[s] !== void 0).every((s) => i2[s] === e[s]);
  } catch {
  }
  return t2;
};
var A$1 = 1e3 * 60 * 60 * 24, O$1 = class {
  constructor(e) {
    this.cachedAt = 0;
    this.loadedKeys = {};
    this.currentRoute = writable();
    this.config = writable();
    this.isLoading = writable(false);
    this.promises = /* @__PURE__ */ new Set();
    this.loading = { subscribe: this.isLoading.subscribe, toPromise: (e2, t2) => {
      let s = Array.from(this.promises).filter((r) => N$1({ locale: h$1(e2)[0], route: t2 }, r)).map(({ promise: r }) => r);
      return Promise.all(s);
    }, get: () => get_store_value(this.isLoading) };
    this.privateTranslations = writable({});
    this.translations = { subscribe: this.privateTranslations.subscribe, get: () => get_store_value(this.translations) };
    this.locales = d$2(l$1({}, derived([this.config, this.privateTranslations], ([e2, t2]) => {
      if (!e2)
        return [];
      let { loaders: s = [] } = e2, r = s.map(({ locale: n2 }) => h$1(n2)[0]), a2 = Object.keys(t2).map((n2) => h$1(n2)[0]);
      return Array.from(/* @__PURE__ */ new Set([...r, ...a2]));
    }, [])), { get: () => get_store_value(this.locales) });
    this.internalLocale = writable();
    this.loaderTrigger = derived([this.internalLocale, this.currentRoute], ([e2, t2], s) => {
      var r, a2, n2;
      e2 !== void 0 && t2 !== void 0 && (e2 !== ((r = get_store_value(this.loaderTrigger)) == null ? void 0 : r[0]) || t2 !== ((a2 = get_store_value(this.loaderTrigger)) == null ? void 0 : a2[1])) && ((n2 = get_store_value(this.config)) != null && n2.debug && console.debug("[i18n]: Triggering translation load..."), s([e2, t2]));
    }, []);
    this.localeHelper = writable();
    this.locale = { subscribe: this.localeHelper.subscribe, forceSet: this.localeHelper.set, set: this.internalLocale.set, update: this.internalLocale.update, get: () => get_store_value(this.locale) };
    this.initialized = derived([this.locale, this.currentRoute, this.privateTranslations], ([e2, t2, s], r) => {
      get_store_value(this.initialized) || r(e2 !== void 0 && t2 !== void 0 && !!Object.keys(s).length);
    });
    this.translation = derived([this.privateTranslations, this.locale, this.isLoading], ([e2, t2, s], r) => {
      let a2 = e2[t2];
      a2 && Object.keys(a2).length && !s && r(a2);
    }, {});
    this.t = d$2(l$1({}, derived([this.config, this.translation], ([{ parser: e2, fallbackLocale: t2 }]) => (s, ...r) => C$2({ parser: e2, key: s, params: r, translations: this.translations.get(), locale: this.locale.get(), fallbackLocale: t2 }))), { get: (e2, ...t2) => get_store_value(this.t)(e2, ...t2) });
    this.l = d$2(l$1({}, derived([this.config, this.translations], ([{ parser: e2, fallbackLocale: t2 }, s]) => (r, a2, ...n2) => C$2({ parser: e2, key: a2, params: n2, translations: s, locale: r, fallbackLocale: t2 }))), { get: (e2, t2, ...s) => get_store_value(this.l)(e2, t2, ...s) });
    this.getLocale = (e2) => {
      if (!e2)
        return "";
      let s = this.locales.get().find((r) => r === h$1(e2)[0]) || "";
      return h$1(s)[0] || "";
    };
    this.setLocale = (e2) => {
      var s;
      if (!e2)
        return;
      let [t2] = h$1(e2);
      if (t2 !== get_store_value(this.internalLocale))
        return (s = get_store_value(this.config)) != null && s.debug && console.debug(`[i18n]: Setting '${t2}' locale.`), this.internalLocale.set(t2), this.loading.toPromise(e2, get_store_value(this.currentRoute));
    };
    this.setRoute = (e2) => {
      var t2;
      if (e2 !== get_store_value(this.currentRoute)) {
        (t2 = get_store_value(this.config)) != null && t2.debug && console.debug(`[i18n]: Setting '${e2}' route.`), this.currentRoute.set(e2);
        let s = get_store_value(this.internalLocale);
        return this.loading.toPromise(s, e2);
      }
    };
    this.loadConfig = async (e2) => {
      await this.configLoader(e2);
    };
    this.getTranslationProps = async (e2 = this.locale.get(), t2 = get_store_value(this.currentRoute)) => {
      let s = get_store_value(this.config);
      if (!s || !e2)
        return [];
      let r = this.translations.get(), { loaders: a2, fallbackLocale: n2 = "", cache: c = A$1 } = s || {}, v2 = Number.isNaN(+c) ? A$1 : +c;
      this.cachedAt ? Date.now() > v2 + this.cachedAt && (s != null && s.debug && console.debug("[i18n]: Refreshing cache."), this.loadedKeys = {}, this.cachedAt = 0) : (s != null && s.debug && console.debug("[i18n]: Setting cache timestamp."), this.cachedAt = Date.now());
      let [S2, w2] = h$1(e2, n2), E2 = r[S2], W2 = r[w2], x = (a2 || []).map((R2) => {
        var u2 = R2, { locale: g2 } = u2, f2 = L(u2, ["locale"]);
        return d$2(l$1({}, f2), { locale: h$1(g2)[0] });
      }).filter(({ routes: g2 }) => !g2 || (g2 || []).some(k$1(t2))).filter(({ key: g2, locale: f2 }) => f2 === S2 && (!E2 || !(this.loadedKeys[S2] || []).includes(g2)) || n2 && f2 === w2 && (!W2 || !(this.loadedKeys[w2] || []).includes(g2)));
      if (x.length) {
        this.isLoading.set(true), s != null && s.debug && console.debug("[i18n]: Fetching translations...");
        let g2 = await j(x);
        this.isLoading.set(false);
        let f2 = Object.keys(g2).reduce((u2, p2) => d$2(l$1({}, u2), { [p2]: Object.keys(g2[p2]) }), {}), R2 = x.filter(({ key: u2, locale: p2 }) => (f2[p2] || []).some((y) => `${y}`.startsWith(u2))).reduce((u2, { key: p2, locale: y }) => d$2(l$1({}, u2), { [y]: [...u2[y] || [], p2] }), {});
        return [g2, R2];
      }
      return [];
    };
    this.addTranslations = (e2, t2) => {
      var r;
      if (!e2)
        return;
      (r = get_store_value(this.config)) != null && r.debug && console.debug("[i18n]: Adding translations...");
      let s = Object.keys(e2 || {});
      this.privateTranslations.update((a2) => s.reduce((n2, c) => d$2(l$1({}, n2), { [c]: l$1(l$1({}, n2[c] || {}), P$1(e2[c])) }), a2)), s.forEach((a2) => {
        let n2 = Object.keys(e2[a2]).map((c) => `${c}`.split(".")[0]);
        t2 && (n2 = t2[a2]), this.loadedKeys[a2] = Array.from(/* @__PURE__ */ new Set([...this.loadedKeys[a2] || [], ...n2 || []]));
      });
    };
    this.loader = async ([e2, t2]) => {
      var r;
      (r = get_store_value(this.config)) != null && r.debug && console.debug("[i18n]: Adding loader promise.");
      let s = (async () => {
        let a2 = await this.getTranslationProps(e2, t2);
        a2.length && this.addTranslations(...a2);
      })();
      this.promises.add({ locale: e2, route: t2, promise: s }), s.then(() => {
        let a2 = this.getLocale(e2);
        a2 && this.locale.get() !== a2 && this.locale.forceSet(a2);
      });
    };
    this.loadTranslations = (e2, t2 = get_store_value(this.currentRoute) || "") => {
      if (!!e2)
        return this.setRoute(t2), this.setLocale(e2), this.loading.toPromise(e2, t2);
    };
    e && this.loadConfig(e), this.loaderTrigger.subscribe(this.loader), this.isLoading.subscribe(async (t2) => {
      var s;
      t2 && this.promises.size && (await this.loading.toPromise(), this.promises.clear(), (s = get_store_value(this.config)) != null && s.debug && console.debug("[i18n]: Loader promises have been purged."));
    });
  }
  async configLoader(e) {
    if (!e)
      throw new Error("[i18n]: No config provided!");
    let c = e, { initLocale: t2, fallbackLocale: s, translations: r, debug: a2 } = c, n2 = L(c, ["initLocale", "fallbackLocale", "translations", "debug"]);
    t2 = h$1(t2)[0], s = h$1(s)[0], a2 && console.debug("[i18n]: Setting config."), this.config.set(l$1({ initLocale: t2, fallbackLocale: s, translations: r, debug: a2 }, n2)), r && this.addTranslations(r), await this.loadTranslations(t2);
  }
};
var R = Object.defineProperty, E = Object.defineProperties;
var v = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var C$1 = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
var w = (t2, e, r) => e in t2 ? R(t2, e, { enumerable: true, configurable: true, writable: true, value: r }) : t2[e] = r, u$1 = (t2, e) => {
  for (var r in e || (e = {}))
    C$1.call(e, r) && w(t2, r, e[r]);
  if (k)
    for (var r of k(e))
      O.call(e, r) && w(t2, r, e[r]);
  return t2;
}, $ = (t2, e) => E(t2, v(e));
var d$1 = (t2, e) => {
  var r = {};
  for (var i2 in t2)
    C$1.call(t2, i2) && e.indexOf(i2) < 0 && (r[i2] = t2[i2]);
  if (t2 != null && k)
    for (var i2 of k(t2))
      e.indexOf(i2) < 0 && O.call(t2, i2) && (r[i2] = t2[i2]);
  return r;
};
var z = (t2, e) => {
  for (var r in e)
    R(t2, r, { get: e[r], enumerable: true });
};
var h = {};
z(h, { ago: () => X, date: () => Q, eq: () => p$1, gt: () => q, gte: () => H, lt: () => U, lte: () => G, ne: () => B$1, number: () => J });
var T = (t2, e) => {
  let { modifierDefaults: r } = e || {}, { [t2]: i2 } = r || {};
  return i2 || {};
};
var p$1 = ({ value: t2, options: e = [], defaultValue: r = "" }) => (e.find(({ key: i2 }) => `${i2}`.toLowerCase() === `${t2}`.toLowerCase()) || {}).value || r, B$1 = ({ value: t2, options: e = [], defaultValue: r = "" }) => (e.find(({ key: i2 }) => `${i2}`.toLowerCase() !== `${t2}`.toLowerCase()) || {}).value || r, U = ({ value: t2, options: e = [], defaultValue: r = "" }) => (e.sort((o, n2) => +o.key - +n2.key).find(({ key: o }) => +t2 < +o) || {}).value || r, q = ({ value: t2, options: e = [], defaultValue: r = "" }) => (e.sort((o, n2) => +n2.key - +o.key).find(({ key: o }) => +t2 > +o) || {}).value || r, G = ({ value: t2, options: e = [], defaultValue: r = "" }) => p$1({ value: t2, options: e, defaultValue: U({ value: t2, options: e, defaultValue: r }) }), H = ({ value: t2, options: e = [], defaultValue: r = "" }) => p$1({ value: t2, options: e, defaultValue: q({ value: t2, options: e, defaultValue: r }) }), J = ({ value: t2, props: e, defaultValue: r = "", locale: i2 = "", parserOptions: o }) => {
  if (!i2)
    return "";
  let s = T("number", o), { maximumFractionDigits: n2 } = s, m2 = d$1(s, ["maximumFractionDigits"]), c = (e == null ? void 0 : e.number) || {}, { maximumFractionDigits: f2 = n2 || 2 } = c, a2 = d$1(c, ["maximumFractionDigits"]);
  return new Intl.NumberFormat(i2, u$1($(u$1({}, m2), { maximumFractionDigits: f2 }), a2)).format(+t2 || +r);
}, Q = ({ value: t2, props: e, defaultValue: r = "", locale: i2 = "", parserOptions: o }) => {
  if (!i2)
    return "";
  let n2 = d$1(T("date", o), []), m2 = d$1((e == null ? void 0 : e.date) || {}, []);
  return new Intl.DateTimeFormat(i2, u$1(u$1({}, n2), m2)).format(+t2 || +r);
}, P = [{ key: "second", multiplier: 1e3 }, { key: "minute", multiplier: 60 }, { key: "hour", multiplier: 60 }, { key: "day", multiplier: 24 }, { key: "week", multiplier: 7 }, { key: "month", multiplier: 13 / 3 }, { key: "year", multiplier: 12 }], N = (t2 = "", e = "") => new RegExp(`^${t2}s?$`).test(e), S = (t2) => P.indexOf(P.find(({ key: e }) => N(e, t2))), W = (t2, e) => P.reduce(([r, i2], { key: o, multiplier: n2 }, m2) => {
  if (N(i2, e))
    return [r, i2];
  if (!i2 || m2 === S(i2) + 1) {
    let f2 = Math.round(r / n2);
    if (!i2 || Math.abs(f2) >= 1 || e !== "auto")
      return [f2, o];
  }
  return [r, i2];
}, [t2, ""]), X = ({ value: t2, defaultValue: e = "", locale: r = "", props: i2, parserOptions: o }) => {
  if (!r)
    return "";
  let g2 = T("ago", o), { format: n2, numeric: m2 } = g2, f2 = d$1(g2, ["format", "numeric"]), l2 = (i2 == null ? void 0 : i2.ago) || {}, { format: a2 = n2 || "auto", numeric: s = m2 || "auto" } = l2, c = d$1(l2, ["format", "numeric"]), x = +t2 || +e, M = W(x, a2);
  return new Intl.RelativeTimeFormat(r, u$1($(u$1({}, f2), { numeric: s }), c)).format(...M);
};
var Y = (t2) => typeof t2 == "string" && /{{(?:(?!{{|}}).)+}}/.test(t2), D = (t2) => typeof t2 == "string" ? t2.replace(/\\(?=:|;|{|})/g, "") : t2, Z = ({ value: t2, props: e, payload: r, parserOptions: i2, locale: o }) => `${t2}`.replace(/{{\s*(?:(?!{{|}}).)+\s*}}/g, (n2) => {
  let m2 = D(`${n2.match(/(?!{|\s).+?(?!\\[:;]).(?=\s*(?:[:;]|}}$))/)}`), f2 = r == null ? void 0 : r[m2], [, a2 = ""] = n2.match(/.+?(?!\\;).;\s*default\s*:\s*([^\s:;].+?(?:\\[:;]|[^;\s}])*)(?=\s*(?:;|}}$))/i) || [];
  a2 = a2 || (r == null ? void 0 : r.default) || "";
  let [, s = ""] = n2.match(/{{\s*(?:[^;]|(?:\\;))+\s*(?:(?!\\:).[:])\s*(?!\s)((?:\\;|[^;])+?)(?=\s*(?:[;]|}}$))/i) || [];
  if (f2 === void 0 && s !== "ne")
    return a2;
  let c = !!s, { customModifiers: x } = i2 || {}, M = u$1(u$1({}, h), x || {});
  s = Object.keys(M).includes(s) ? s : "eq";
  let g2 = M[s], l2 = (n2.match(/[^\s:;{](?:[^;]|\\[;])+[^\s:;}]/gi) || []).reduce((F2, b, j2) => {
    if (j2 > 0) {
      let y = D(`${b.match(/(?:(?:\\:)|[^:])+/)}`.trim()), I2 = `${b.match(/(?:(?:\\:)|[^:])+$/)}`.trim();
      if (y && y !== "default" && I2)
        return [...F2, { key: y, value: I2 }];
    }
    return F2;
  }, []);
  return !c && !l2.length ? f2 : g2({ value: f2, options: l2, props: e, defaultValue: a2, locale: o, parserOptions: i2 });
}), A = ({ value: t2, props: e, payload: r, parserOptions: i2, locale: o }) => {
  if (Y(t2)) {
    let n2 = Z({ value: t2, payload: r, props: e, parserOptions: i2, locale: o });
    return A({ value: n2, payload: r, props: e, parserOptions: i2, locale: o });
  } else
    return D(t2);
}, _ = (t2) => ({ parse: (e, [r, i2], o, n2) => ((r == null ? void 0 : r.default) && e === void 0 && (e = `${r.default}`), e === void 0 && (e = `${n2}`), A({ value: e, payload: r, props: i2, parserOptions: t2, locale: o })) }), rt = _;
var d = Object.defineProperty, l = Object.defineProperties;
var u = Object.getOwnPropertyDescriptors;
var t$1 = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? d(e, r, { enumerable: true, configurable: true, writable: true, value: o }) : e[r] = o, f = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && a(e, o, r[o]);
  if (t$1)
    for (var o of t$1(r))
      i.call(r, o) && a(e, o, r[o]);
  return e;
}, n = (e, r) => l(e, u(r));
var m = (e, r) => {
  var o = {};
  for (var s in e)
    p.call(e, s) && r.indexOf(s) < 0 && (o[s] = e[s]);
  if (e != null && t$1)
    for (var s of t$1(e))
      r.indexOf(s) < 0 && i.call(e, s) && (o[s] = e[s]);
  return o;
};
var g = (o) => {
  var s = o, { parserOptions: e = {} } = s, r = m(s, ["parserOptions"]);
  return n(f({}, r), { parser: rt(e) });
}, C = class extends O$1 {
  constructor(r) {
    super(r && g(r));
    this.loadConfig = (r2) => super.configLoader(g(r2));
  }
}, B = C;
var lang = {
  "en": "English",
  "ru": "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
};
const en = [
  {
    locale: "en",
    key: "common",
    loader: async () => (await import("./common-d91e288c.js")).default
  },
  {
    locale: "en",
    key: "menu",
    loader: async () => (await import("./menu-355c5c2e.js")).default
  },
  {
    locale: "en",
    key: "home",
    routes: ["", "/"],
    loader: async () => (await import("./home-346bf1d8.js")).default
  },
  {
    locale: "en",
    key: "error",
    routes: ["error"],
    loader: async () => (await import("./error-60ee6c56.js")).default
  }
];
const ru = [
  {
    locale: "ru",
    key: "common",
    loader: async () => (await import("./common-b22ab1f9.js")).default
  },
  {
    locale: "ru",
    key: "menu",
    loader: async () => (await import("./menu-6743caf7.js")).default
  },
  {
    locale: "ru",
    key: "home",
    routes: ["", "/"],
    loader: async () => (await import("./home-3dbd43c8.js")).default
  },
  {
    locale: "ru",
    key: "error",
    routes: ["error"],
    loader: async () => (await import("./error-b172b9a7.js")).default
  }
];
const config = {
  translations: {
    en: { lang },
    ru: { lang }
  },
  loaders: [...en, ...ru]
};
const defaultLocale = "en";
const { t, locale, locales, loading, loadTranslations, translations } = new B(config);
loading.subscribe(async ($loading) => {
  if ($loading) {
    console.log("Loading translations...");
    await loading.toPromise();
    console.log("Updated translations", translations.get());
  }
});
export { locales as a, defaultLocale as d, loadTranslations as l, t };
