import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-bb157ef7.js";
import _error from "../../__error.svelte.js";
import { l as loadTranslations } from "../../../../chunks/index-06d7d650.js";
const load = async ({ params }) => {
  const { error, lang } = params;
  let status = parseInt(error);
  if (Number.isNaN(status))
    status = 404;
  await loadTranslations(lang, "error");
  return {
    props: { status },
    status: 200,
    stuff: { status }
  };
};
const U5B_erroru5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  return `${validate_component(_error, "Error").$$render($$result, { status }, {}, {})}`;
});
export { U5B_erroru5D as default, load };
