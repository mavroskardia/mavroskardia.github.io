import { i as o, s as m, x as c, e as b } from "./query-assigned-elements-94c95e81.js";
const p = o`
  :root {
    --text-color: rgba(255, 255, 255, 0.7);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    position: relative;
    font-weight: normal;
  }

  * {
    font-family: monospace;
    color: var(--text-color);
  }
`, d = o`
  .slide-in-blurred-left {
    -webkit-animation: slide-in-blurred-left 0.6s cubic-bezier(0.23, 1, 0.32, 1)
      both;
    animation: slide-in-blurred-left 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  }
  .fade-in-left {
    -webkit-animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  .fade-in-right {
    -webkit-animation: fade-in-right 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: fade-in-right 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  /* ----------------------------------------------
 * Generated by Animista on 2023-4-11 10:17:31
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation slide-in-blurred-left
 * ----------------------------------------
 */
  @-webkit-keyframes slide-in-blurred-left {
    0% {
      -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
      transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0) scaleY(1) scaleX(1);
      transform: translateX(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-blurred-left {
    0% {
      -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
      transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0) scaleY(1) scaleX(1);
      transform: translateX(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  /* ----------------------------------------------
 * Generated by Animista on 2023-4-11 10:19:56
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation fade-in-left
 * ----------------------------------------
 */
  @-webkit-keyframes fade-in-left {
    0% {
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-left {
    0% {
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  /* ----------------------------------------------
 * Generated by Animista on 2023-4-11 10:20:48
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation fade-in-right
 * ----------------------------------------
 */
  @-webkit-keyframes fade-in-right {
    0% {
      -webkit-transform: translateX(50px);
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-right {
    0% {
      -webkit-transform: translateX(50px);
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
var h = Object.defineProperty, u = Object.getOwnPropertyDescriptor, w = (s, t, r, a) => {
  for (var e = a > 1 ? void 0 : a ? u(t, r) : t, i = s.length - 1, n; i >= 0; i--)
    (n = s[i]) && (e = (a ? n(t, r, e) : n(e)) || e);
  return a && e && h(t, r, e), e;
};
let l = class extends m {
  render() {
    return c`
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/tinkerings">Tinkerings</a>
        <a href="/other">Other</a>
        <a href="/and">And</a>
      </nav>
    `;
  }
};
l.styles = [
  p,
  o`
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
l = w([
  b("app-nav")
], l);
var X = Object.defineProperty, x = Object.getOwnPropertyDescriptor, y = (s, t, r, a) => {
  for (var e = a > 1 ? void 0 : a ? x(t, r) : t, i = s.length - 1, n; i >= 0; i--)
    (n = s[i]) && (e = (a ? n(t, r, e) : n(e)) || e);
  return a && e && X(t, r, e), e;
};
let f = class extends m {
  render() {
    return c`
      <slot name="header"></slot>
      <div>
        <slot name="content"></slot>
        <app-nav class="fade-in-right"></app-nav>
      </div>
      <app-footer slot="footer"></app-footer>
    `;
  }
};
f.styles = [
  p,
  d,
  o`
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
f = y([
  b("app-shell")
], f);
export {
  d as a,
  p as b
};