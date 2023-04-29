import { s as c, x as n, e as h } from "./query-assigned-elements-94c95e81.js";
var o = Object.defineProperty, f = Object.getOwnPropertyDescriptor, v = (p, s, t, r) => {
  for (var e = r > 1 ? void 0 : r ? f(s, t) : s, a = p.length - 1, l; a >= 0; a--)
    (l = p[a]) && (e = (r ? l(s, t, e) : l(e)) || e);
  return r && e && o(s, t, e), e;
};
let i = class extends c {
  render() {
    return n`
      <app-shell>
        <header slot="header">
          <h1>Classicist</h1>
        </header>
        <section slot="content">
          <p>
            Classicist (an-ah-krahn-ist)
          </p>
        </section>
      </app-shell>
    `;
  }
};
i = v([
  h("ajm-classicist")
], i);
export {
  i as AjmClassicist
};
