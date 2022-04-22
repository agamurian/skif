import { d as getContext, c as create_ssr_component, b as subscribe, e as escape, f as add_attribute } from "../../chunks/index-bb157ef7.js";
import { l as loadTranslations, t } from "../../chunks/index-06d7d650.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var __error_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root[data-color-scheme=light]{--main-bg-color:#E5E5E5;--container-bg-color:#FFFFFF;--card-bg-color:#FFFFFF;--main-font-color:#090909;--mute-font-color:#6D6D6D;--bs-body-bg:var(--main-bg-color);--bs-body-color:var(--main-font-color)}:root[data-color-scheme=dark]{--main-bg-color:#292929;--container-bg-color:#121212;--card-bg-color:#1E1E1E;--main-font-color:#DADADA;--mute-font-color:#9C9C9C;--bs-body-bg:var(--main-bg-color);--bs-body-color:var(--main-font-color)}html[data-color-scheme] body{color:var(--main-font-color);display:flex;flex-direction:column;height:100%;font-family:IBM Plex Mono, Monaco, Consolas, "Courier New", monospace}html[data-color-scheme] a{color:var(--main-font-color);text-decoration:none}html[data-color-scheme] a:hover{color:var(--main-font-color);text-decoration:underline}html[data-color-scheme] .curPoi{cursor:pointer}html[data-color-scheme] h1{font-weight:900}html[data-color-scheme] .btn{border-radius:2px;background-color:rgba(150, 70, 41, 0.8);border-color:rgba(153, 102, 67, 0.6666666667);color:white;box-shadow:rgba(0, 0, 0, 0.2) 2px 2px 1px}html[data-color-scheme] .btn:hover{color:rgb(17, 23, 15);background-color:rgba(165, 101, 65, 0.6666666667)}html[data-color-scheme] .rounded{border-radius:15px}html[data-color-scheme] .card{border:7px;background-color:rgba(119, 119, 119, 0.0941176471);padding:20px;border-radius:0px;border:4px dashed rgba(119, 119, 119, 0.0941176471);margin:-2px}html[data-color-scheme] .colinher{color:inherit;background-color:--main-bg-color;z-index:50}html[data-color-scheme] .column{-webkit-column-width:200px;-moz-column-width:200px;column-width:200px;-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:2em;-moz-column-gap:2em;column-gap:2em;-webkit-column-rule:2px dashed rgba(204, 204, 204, 0.8);-moz-column-rule:2px dashed rgba(204, 204, 204, 0.8);column-rule:2px solid rgba(204, 204, 204, 0.8);padding:2em}html[data-color-scheme] .notSel{user-select:none}html[data-color-scheme] .modal-backdrop{z-index:-1;opacity:0%}.error--wrapper.svelte-m07eh2{background-color:#ccc}',
  map: null
};
const load = async ({ stuff, props }) => {
  await loadTranslations(stuff.lang, "error");
  return {};
};
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { status = $page.status } = $$props;
  let { url = $page.url } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_t();
  return `<div class="${"d-block mx-auto vw-100 vh-100"}"><div class="${"error--wrapper h-100 d-flex flex-wrap flex-column align-items-center justify-content-center svelte-m07eh2"}"><h1>${escape($t("error.oops"))}</h1>
        <h2>${escape($t(`error.${status}`, { default: $t("error.default") }))}</h2>
        <p><small class="${"text-secondary"}">${escape(status)}</small></p>
        <div><a${add_attribute("href", url.origin, 0)} class="${"btn btn-primary"}">${escape($t(`error.[backToHome]`))}</a></div></div>
</div>`;
});
export { _error as default, load };
