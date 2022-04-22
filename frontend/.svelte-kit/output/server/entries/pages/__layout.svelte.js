import { c as create_ssr_component } from "../../chunks/index-bb157ef7.js";
import { l as loadTranslations } from "../../chunks/index-06d7d650.js";
Object.freeze({
  DARK: Symbol("dark"),
  LIGHT: Symbol("light")
});
var Footer_svelte_svelte_type_style_lang = "";
var bootstrap_min = "";
var Navbar_svelte_svelte_type_style_lang = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".colinher.svelte-1ps839v{background-color:inherit}",
  map: null
};
const load = async ({ url }) => {
  const { pathname } = url;
  const lang = `${pathname.match(/\w+?(?=\/|$)/) || ""}`;
  const route = pathname.replace(new RegExp(`^/${lang}`), "");
  await loadTranslations(lang, route);
  return { stuff: { route, lang } };
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${``}`;
});
export { _layout as default, load };
