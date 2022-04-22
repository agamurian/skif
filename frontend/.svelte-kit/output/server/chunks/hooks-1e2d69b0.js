import { a as locales, d as defaultLocale } from "./index-06d7d650.js";
import "./index-bb157ef7.js";
const routeRegex = new RegExp(/^\/[^.]*([?#].*)?$/);
const handle = async ({ event, resolve }) => {
  const { url, request } = event;
  const { pathname } = url;
  if (routeRegex.test(pathname)) {
    const supportedLocales = locales.get();
    let locale = supportedLocales.find((l) => l === `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase());
    if (!locale) {
      locale = `${`${request.headers["accept-language"]}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();
      if (!supportedLocales.includes(locale))
        locale = defaultLocale;
      return new Response(void 0, { headers: { "location": `/${locale}${pathname}` }, status: 301 });
    }
    const response = await resolve(event);
    const body = await response.text();
    return new Response(`${body}`.replace(/<html.*>/, `<html lang="${locale}">`), response);
  }
  return resolve(event);
};
function getSession(event) {
  return event.locals.user ? {
    user: {
      name: event.locals.user.name,
      email: event.locals.user.email,
      avatar: event.locals.user.avatar
    }
  } : {};
}
export { getSession, handle };
