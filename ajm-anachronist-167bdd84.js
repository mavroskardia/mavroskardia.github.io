import { s as p, x as l, e as c } from "./query-assigned-elements-94c95e81.js";
var i = Object.defineProperty, f = Object.getOwnPropertyDescriptor, v = (h, r, s, n) => {
  for (var e = n > 1 ? void 0 : n ? f(r, s) : r, t = h.length - 1, a; t >= 0; t--)
    (a = h[t]) && (e = (n ? a(r, s, e) : a(e)) || e);
  return n && e && i(r, s, e), e;
};
let o = class extends p {
  render() {
    return l`
      <app-shell>
        <header slot="header">
          <h1>Anachronist?</h1>
        </header>
        <section slot="content">
          <p>
            Anachronist (an-ah-krahn-ist)
          </p>
        </section>
      </app-shell>
    `;
  }
};
o = v([
  c("ajm-anachronist")
], o);
export {
  o as AjmAnachronist
};
