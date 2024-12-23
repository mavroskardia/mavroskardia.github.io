import { s as h, x as f, e as p } from "./query-assigned-elements-94c95e81.js";
import { b as o, a as m } from "./base-8581a63a.js";
var c = Object.defineProperty, g = Object.getOwnPropertyDescriptor, u = (n, r, a, s) => {
  for (var e = s > 1 ? void 0 : s ? g(r, a) : r, l = n.length - 1, i; l >= 0; l--)
    (i = n[l]) && (e = (s ? i(r, a, e) : i(e)) || e);
  return s && e && c(r, a, e), e;
};
let t = class extends h {
  render() {
    return f`
      <app-shell>
        <header slot="header">
          <h1>Tinkerings</h1>
        </header>
        <section slot="content">
          <ul>
            <li><a href="/lsystem">L-Systems</a></li>
            <li><a href="/starfield">Starfield</a></li>
            <li><a href="/games">Games</a></li>
            <li><a href="/graphing">Graphing</a></li>
            <li><a href="/cssfun">Fun with CSS & JS</a></li>
          </ul>
        </section>
      </app-shell>
    `;
  }
};
t.styles = [o, m];
t = u([
  p("ajm-tinkerings")
], t);
export {
  t as AjmTinkerings
};
