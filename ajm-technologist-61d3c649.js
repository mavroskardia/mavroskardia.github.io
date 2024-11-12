import { s as h, x as c, e as a } from "./query-assigned-elements-94c95e81.js";
var i = Object.defineProperty, f = Object.getOwnPropertyDescriptor, v = (n, r, s, o) => {
  for (var e = o > 1 ? void 0 : o ? f(r, s) : r, t = n.length - 1, l; t >= 0; t--)
    (l = n[t]) && (e = (o ? l(r, s, e) : l(e)) || e);
  return o && e && i(r, s, e), e;
};
let p = class extends h {
  render() {
    return c`
      <app-shell>
        <header slot="header">
          <h1>Technologist</h1>
        </header>
        <section slot="content">
          <p>
            Technologist
          </p>
        </section>
      </app-shell>
    `;
  }
};
p = v([
  a("ajm-technologist")
], p);
export {
  p as AjmTechnologist
};
