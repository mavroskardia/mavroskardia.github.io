import { i, s as f, x as v, e as c } from "./query-assigned-elements-94c95e81.js";
import { b as m, a as d } from "./base-8581a63a.js";
var h = Object.defineProperty, u = Object.getOwnPropertyDescriptor, _ = (s, r, t, a) => {
  for (var e = a > 1 ? void 0 : a ? u(r, t) : r, n = s.length - 1, o; n >= 0; n--)
    (o = s[n]) && (e = (a ? o(r, t, e) : o(e)) || e);
  return a && e && h(r, t, e), e;
};
let l = class extends f {
  render() {
    return v`
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/tinkerings">Tinkerings</a>
        <a href="/resume">Resume</a>
      </nav>
    `;
  }
};
l.styles = [
  m,
  i`
      nav {
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        padding: 2rem;
      }
      nav a {
        padding: 1rem 0;
      }

      nav a:hover {
        color: rgba(50, 100, 200, 0.8);
      }
    `
];
l = _([
  c("app-nav")
], l);
var b = Object.defineProperty, x = Object.getOwnPropertyDescriptor, g = (s, r, t, a) => {
  for (var e = a > 1 ? void 0 : a ? x(r, t) : r, n = s.length - 1, o; n >= 0; n--)
    (o = s[n]) && (e = (a ? o(r, t, e) : o(e)) || e);
  return a && e && b(r, t, e), e;
};
let p = class extends f {
  render() {
    return v`
      <slot name="header"></slot>
      <div>
        <slot name="content"></slot>
        <app-nav class="fade-in-right"></app-nav>
      </div>
      <app-footer slot="footer"></app-footer>
    `;
  }
};
p.styles = [
  m,
  d,
  i`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      slot[name="header"] {
        color: var(--text-color);
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      app-footer {
        position: fixed;
        bottom: 0;
        right: 0;
      }
    `
];
p = g([
  c("app-shell")
], p);
