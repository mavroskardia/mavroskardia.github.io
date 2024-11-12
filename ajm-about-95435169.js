import { s, x as l, i as p, e as m } from "./query-assigned-elements-94c95e81.js";
import "./app-shell-ddba818c.js";
import "./base-8581a63a.js";
var d = Object.defineProperty, f = Object.getOwnPropertyDescriptor, c = (h, a, n, i) => {
  for (var e = i > 1 ? void 0 : i ? f(a, n) : a, o = h.length - 1, t; o >= 0; o--)
    (t = h[o]) && (e = (i ? t(a, n, e) : t(e)) || e);
  return i && e && d(a, n, e), e;
};
let r = class extends s {
  render() {
    return l`
      <app-shell>
        <header slot="header">
          <h1>About Andy</h1>
        </header>
        <ol slot="content">
          <li>
            <h2>Who??</h2>
            <p>
              Having a really common name has made it really easy to hide in plain sight, especially
              when there are so many other far more amazing
              <a href="https://en.wikipedia.org/wiki/Andy_Martin_(disambiguation)">Andy Martins</a>
              out there.
            </p>
          </li>
          <li>
            <h2>What</h2>
            <p>
              I am a lifelong computer enthusiast. I have fond memories of our family's first computer:
              a Packard Bell 386SX running MS-DOS 5.0 on a 10MB HDD with 4MB of memory. Even before that,
              having encounters with my neighbor's Commodore 64 and then my friend's Apple IIc, I knew
              from an early age what I wanted to be when I grew up.
            </p>
          </li>
          <li>
            <h2>Where</h2>
            <p>
              After being born and raised in Wisconsin, which does funny things to speech patterns
              and accents, I moved to Gainesville, Florida. I live here with my incredible wife and kids.
            </p>
          </li>
          <li>
            <h2>When</h2>
            <p>
              I am old enough to have seen the formation of the web and young enough to have embraced it.
            </p>
          </li>
          <li>
            <h2>Why</h2>
            <p>
              That technology and software creation in specific are combinations of both science and art,
              I feel both sides of my brain are able to be satisfied in a way no other pursuit can offer.
            </p>
          </li>
        </ol>
      </app-shell>
    `;
  }
};
r.styles = p`
    ol {
      list-style: upper-roman;
      max-width: 40vw;
    }
  `;
r = c([
  m("ajm-about")
], r);
export {
  r as AjmAbout
};
