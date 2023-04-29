import { s as c, x as f, e as a } from "./query-assigned-elements-94c95e81.js";
var h = Object.defineProperty, j = Object.getOwnPropertyDescriptor, u = (l, s, n, r) => {
  for (var e = r > 1 ? void 0 : r ? j(s, n) : s, p = l.length - 1, t; p >= 0; p--)
    (t = l[p]) && (e = (r ? t(s, n, e) : t(e)) || e);
  return r && e && h(s, n, e), e;
};
let o = class extends c {
  render() {
    return f`
      <app-shell>
        <header slot="header">
          <h1>cssjsfun?</h1>
        </header>
        <section slot="content">
          <p>
            cssjsfun
          </p>
        </section>
      </app-shell>
    `;
  }
};
o = u([
  a("ajm-cssjsfun")
], o);
export {
  o as AjmCssJsFun
};
