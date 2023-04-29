import { s as l, x as o, e as i } from "./query-assigned-elements-94c95e81.js";
var g = Object.defineProperty, c = Object.getOwnPropertyDescriptor, f = (h, r, a, p) => {
  for (var e = p > 1 ? void 0 : p ? c(r, a) : r, n = h.length - 1, s; n >= 0; n--)
    (s = h[n]) && (e = (p ? s(r, a, e) : s(e)) || e);
  return p && e && g(r, a, e), e;
};
let t = class extends l {
  render() {
    return o`
      <app-shell>
        <header slot="header">
          <h1>graphing?</h1>
        </header>
        <section slot="content">
          <p>
            graphing (an-ah-krahn-ist)
          </p>
        </section>
      </app-shell>
    `;
  }
};
t = f([
  i("ajm-graphing")
], t);
export {
  t as AjmGraphing
};
