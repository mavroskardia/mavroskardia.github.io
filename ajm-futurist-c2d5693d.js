import { s as n, x as a, e as h } from "./query-assigned-elements-94c95e81.js";
var f = Object.defineProperty, i = Object.getOwnPropertyDescriptor, c = (u, r, s, t) => {
  for (var e = t > 1 ? void 0 : t ? i(r, s) : r, p = u.length - 1, l; p >= 0; p--)
    (l = u[p]) && (e = (t ? l(r, s, e) : l(e)) || e);
  return t && e && f(r, s, e), e;
};
let o = class extends n {
  render() {
    return a`
      <app-shell>
        <header slot="header">
          <h1>Futurist</h1>
        </header>
        <section slot="content">
          <p>
            Futurist
          </p>
        </section>
      </app-shell>
    `;
  }
};
o = c([
  h("ajm-futurist")
], o);
export {
  o as AjmFuturist
};
