import { s as h, x as a, e as c } from "./query-assigned-elements-94c95e81.js";
var i = Object.defineProperty, u = Object.getOwnPropertyDescriptor, f = (p, r, s, t) => {
  for (var e = t > 1 ? void 0 : t ? u(r, s) : r, o = p.length - 1, l; o >= 0; o--)
    (l = p[o]) && (e = (t ? l(r, s, e) : l(e)) || e);
  return t && e && i(r, s, e), e;
};
let n = class extends h {
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
n = f([
  c("ajm-technologist")
], n);
export {
  n as AjmTechnologist
};
