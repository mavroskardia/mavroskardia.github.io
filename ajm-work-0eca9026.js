import { s as a, x as h, e as c } from "./query-assigned-elements-94c95e81.js";
var f = Object.defineProperty, v = Object.getOwnPropertyDescriptor, _ = (l, r, s, o) => {
  for (var e = o > 1 ? void 0 : o ? v(r, s) : r, p = l.length - 1, t; p >= 0; p--)
    (t = l[p]) && (e = (o ? t(r, s, e) : t(e)) || e);
  return o && e && f(r, s, e), e;
};
let n = class extends a {
  render() {
    return h`
      <app-shell>
        <header slot="header">
          <h1>Work</h1>
        </header>
        <section slot="content">
          <p>Work</p>
        </section>
      </app-shell>
    `;
  }
};
n = _([
  c("ajm-work")
], n);
export {
  n as AjmWork
};
