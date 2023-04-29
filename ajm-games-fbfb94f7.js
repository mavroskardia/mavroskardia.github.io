import { s as h, x as o, e as m } from "./query-assigned-elements-94c95e81.js";
var c = Object.defineProperty, f = Object.getOwnPropertyDescriptor, v = (l, r, a, s) => {
  for (var e = s > 1 ? void 0 : s ? f(r, a) : r, t = l.length - 1, p; t >= 0; t--)
    (p = l[t]) && (e = (s ? p(r, a, e) : p(e)) || e);
  return s && e && c(r, a, e), e;
};
let n = class extends h {
  render() {
    return o`
      <app-shell>
        <header slot="header">
          <h1>games?</h1>
        </header>
        <section slot="content">
          <p>
            games (an-ah-krahn-ist)
          </p>
        </section>
      </app-shell>
    `;
  }
};
n = v([
  m("ajm-games")
], n);
export {
  n as AjmGames
};
