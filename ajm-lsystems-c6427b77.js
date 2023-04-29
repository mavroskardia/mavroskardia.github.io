import { s as h, x as o, e as m } from "./query-assigned-elements-94c95e81.js";
var c = Object.defineProperty, f = Object.getOwnPropertyDescriptor, v = (a, s, t, r) => {
  for (var e = r > 1 ? void 0 : r ? f(s, t) : s, l = a.length - 1, p; l >= 0; l--)
    (p = a[l]) && (e = (r ? p(s, t, e) : p(e)) || e);
  return r && e && c(s, t, e), e;
};
let n = class extends h {
  render() {
    return o`
      <app-shell>
        <header slot="header">
          <h1>lsystems?</h1>
        </header>
        <section slot="content">
          <p>
            lsystems (an-ah-krahn-ist)
          </p>
        </section>
      </app-shell>
    `;
  }
};
n = v([
  m("ajm-lsystems")
], n);
export {
  n as AjmLSystems
};
