import { s as p, x as m, i as v, e as y } from "./query-assigned-elements-94c95e81.js";
import { b, a as g } from "./base-8581a63a.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x = ({ finisher: s, descriptor: r }) => (t, a) => {
  var e;
  if (a === void 0) {
    const i = (e = t.originalKey) !== null && e !== void 0 ? e : t.key, n = r != null ? { kind: "method", placement: "prototype", key: i, descriptor: r(t.key) } : { ...t, key: i };
    return s != null && (n.finisher = function(o) {
      s(o, i);
    }), n;
  }
  {
    const i = t.constructor;
    r !== void 0 && Object.defineProperty(t, a, r(a)), s == null || s(i, a);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function S(s, r) {
  return x({ descriptor: (t) => {
    const a = { get() {
      var e, i;
      return (i = (e = this.renderRoot) === null || e === void 0 ? void 0 : e.querySelector(s)) !== null && i !== void 0 ? i : null;
    }, enumerable: !0, configurable: !0 };
    if (r) {
      const e = typeof t == "symbol" ? Symbol() : "__" + t;
      a.get = function() {
        var i, n;
        return this[e] === void 0 && (this[e] = (n = (i = this.renderRoot) === null || i === void 0 ? void 0 : i.querySelector(s)) !== null && n !== void 0 ? n : null), this[e];
      };
    }
    return a;
  } });
}
var w = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, h = (s, r, t, a) => {
  for (var e = a > 1 ? void 0 : a ? _(r, t) : r, i = s.length - 1, n; i >= 0; i--)
    (n = s[i]) && (e = (a ? n(r, t, e) : n(e)) || e);
  return a && e && w(r, t, e), e;
};
class z {
  constructor(r, t, a) {
    this.x = 0, this.y = 0, this.z = 0, this.c = Math.random() * 255, this.x = r, this.y = t, this.z = a;
  }
  update(r, t) {
    if (!t)
      return;
    this.z -= r, this.z <= 1 && (this.z += 1e3);
    const a = t.canvas.width / 2, e = t.canvas.height / 2, i = a + this.x / (this.z * 1e-3), n = e + this.y / (this.z * 1e-3);
    if (i < 0 || i >= t.canvas.width || n < 0 || n > t.canvas.height)
      return;
    const o = this.z / 1e3, f = 1 - o * o, u = Math.abs(1 - o) * 3;
    t.fillStyle = `hsla(${this.c}, 90%, 85%, ${f})`, t.beginPath(), t.arc(i, n, u, 0, 2 * Math.PI), t.fill();
  }
}
const c = class {
  constructor() {
    this.ctx = null, this.stars = [], this.width = 800, this.height = 600, this.prevTime = 0;
  }
  init(s) {
    this.ctx = s.getContext("2d"), this.width = s.width, this.height = s.height;
    for (let r = 0; r < c.TotalStars; r++) {
      const t = new z(
        Math.random() * 1600 - 800,
        Math.random() * 1200 - 600,
        Math.random() * 1e3
      );
      this.stars.push(t);
    }
  }
  update(s) {
    if (!this.ctx)
      return;
    const r = s - this.prevTime;
    this.prevTime = s, this.ctx.fillStyle = "black", this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.stars.forEach((t) => t.update(r * 0.1, this.ctx)), requestAnimationFrame((t) => this.update(t));
  }
};
let d = c;
d.TotalStars = 1e4;
let l = class extends p {
  constructor() {
    super(...arguments), this.starfield = new d();
  }
  firstUpdated() {
    if (!this._starfieldElement) {
      console.error("no starfield element");
      return;
    }
    this.starfield.init(this._starfieldElement), requestAnimationFrame((s) => this.starfield.update(s));
  }
  render() {
    return m`
      <app-shell>
        <section slot="content">
          <canvas id="starfield" width="800" height="600"></canvas>
          <p>
            I have probably made a variation of this starfield at least a dozen
            times for different games or tech demos. It holds a special place
            for me since it evokes 90s era screensavers.
          </p>
        </section>
      </app-shell>
    `;
  }
};
l.styles = [
  b,
  g,
  v`
      section[slot="content"] {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #starfield {
        box-shadow: 0 0 10px 10px black;
        margin-bottom: 2rem;
      }
    `
];
h([
  S("#starfield")
], l.prototype, "_starfieldElement", 2);
l = h([
  y("ajm-starfield")
], l);
export {
  l as AjmStarfield
};
