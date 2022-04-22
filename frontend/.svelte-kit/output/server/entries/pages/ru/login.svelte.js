import { c as create_ssr_component, f as add_attribute } from "../../../chunks/index-bb157ef7.js";
var login_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-x3itve{padding-top:80px}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username;
  let password;
  $$result.css.add(css);
  return `<div class="${"container svelte-x3itve"}">${`<h1 class="${"mx-auto center text-center"}">\u0412\u043E\u0439\u0442\u0438</h1>
      <br>
<form id="${"form"}" class="${"form my-3 w-50 text-left mx-auto"}"><div class="${"mb-3 text-left"}"><label for="${"text"}" class="${"form-label text-left"}">\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F</label>
            <input type="${"text"}" class="${"form-text form-control"}"${add_attribute("value", username, 0)}></div>
          <div class="${"mb-3"}"><label for="${"exampleInputPassword1"}" class="${"form-label"}">\u041F\u0430\u0440\u043E\u043B\u044C</label>
            <input type="${"password"}" class="${"form-control"}"${add_attribute("value", password, 0)}>
            <br></div>
        <button type="${"button"}" class="${"btn"}">\u0412\u043E\u0439\u0442\u0438</button></form>`}</div>`;
});
export { Login as default };
