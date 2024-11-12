import { s as d, x as l, i as c, e as h } from "./query-assigned-elements-94c95e81.js";
var m = Object.defineProperty, p = Object.getOwnPropertyDescriptor, u = (s, t, a, i) => {
  for (var e = i > 1 ? void 0 : i ? p(t, a) : t, n = s.length - 1, r; n >= 0; n--)
    (r = s[n]) && (e = (i ? r(t, a, e) : r(e)) || e);
  return i && e && m(t, a, e), e;
};
let o = class extends d {
  render() {
    return l`
      <div id="resume">
        <aside>
          <h3>Contact</h3>
          <ul>
            <li>
              <iconify-icon icon="mdi-light:email"></iconify-icon>
              <a href="mailto:andrewjmartin@gmail.com">
                andrewjmartin@gmail.com
              </a>
            </li>
            <li>
              <iconify-icon icon="ant-design:linkedin-outlined"></iconify-icon>
              <a href="https://www.linkedin.com/in/-andy-martin/">LinkedIn</a>
            </li>
            <li></li>
          </ul>
          <h3>Publications</h3>
          <ul>
            <li>
              <a href="#">
                The Structure of BIM: Understanding the Importance of IFC
                Standards
              </a>
            </li>
            <li>
              <a href="#">
                The Structure of BIM: How IFC Impacts Bidding
              </a>
            </li>
            <li>
              <a href="#">
                Taking Steps Toward Model as the Legal Document Through Data
                Standards
              </a>
            </li>
          </ul>
        </aside>
        <div>
          <header>
            <h1>Andrew Martin</h1>
            <h3>Remote | Gainesville, Florida, United States</h3>
          </header>
          <section id="summary">
            <h3>Summary</h3>
            <p>
              I create the environments that identify, develop, and sustain
              teams that create some of the world's most amazing
              software.
            </p>
            <p>
              I've spent my career contemplating everything from operating
              system design to fully modeled virtual worlds to essential
              questions about data, but it always comes back to one fundamental
              thing: are we building software experiences that make our users'
              lives better? To me, that is the reward behind everything I do.
            </p>
         </section>
          <section id="experience">
            <h3>Experience</h3>
            <article>
              <header>
                <h4>Chief Technology Officer</h4>
                <small>
                  <p>July 2022 - Present</p>
                  <p>Gainesville, Florida, United States</p>
                </small>
              </header>
              <p>
                As CTO, I am Infotech's technical thought leader for both our
                proprietary products division and AASHTOWare Project. I am tasked
                with communicating the history, current state, and future state of
                all products. I support our product experts to make strategic
                decisions for integrations based on our goals and technical
                feasibility. I evangelize our advancement of the technology and
                integrations of our current solutions so we can scale and meet our
                key business objectives.
              </p>
              <p>
                And so I never become disconnected from the craft, I also create
                prototypes and proofs-of-concept to demonstrate new ideas and
                communicate them more effectively.
              </p>
            </article>
            <article>
              <header>
                <h4>Vice President Of Products</h4>
                <small>November 2016 - January 2023</small>
              </header>
              <p>
                I led Infotech's proprietary software products division.
                To do so, it was essential to create an environment where each
                and every member of the division feels motivated and engaged,
                where they know and believe in their role in achieving our
                shared goals, and have room to perfect their crafts.
              </p>
              <p>
                This extends beyond the product division. Developing and
                growing partnerships with those who rely on the successful
                execution of our strategy means the difference between success
                and fading into obscurity. Technical excellence is table stakes
                for me, but requires constant vigilance to stay on top of tech
                trends and responsibly respond with sound architecture and
                application design.
              </p>
            </article>
            <article>
              <header>
                <h4>Senior Lead Software Developer</h4>
                <small>April 2014 - November 2016</small>
              </header>
              <p>
                Provided architectural design for large-scale construction
                management systems. Led successful development on greenfield
                projects with high risk that have created millions in revenue.
                Guided development teams in consistent and efficient use of
                frameworks and provided development direction as needed.
              </p>
              <p>
                Perform UX analysis and UI design. Provided training, hiring,
                and other supervisory tasks.
              </p>
            </article>
            <article>
              <header>
                <h4>Lead Software Developer</h4>
                <small>October 2011 - April 2014</small>
              </header>
              <p>
                Provided architectural design for large-scale construction
                management systems. Guided development teams in consistent and
                efficient use of frameworks and provided development direction
                as needed. Led UI analysis and design, focused on user
                interaction and accessibility. Provided support for training,
                hiring, and other supervisory tasks as necessary.
              </p>
            </article>
            <article>
              <header>
                <h4>Application Architect</h4>
                <small>July 2009 - October 2011</small>
              </header>
              <p>
                Provided architectural design for large-scale construction
                management systems.
              </p>
            </article>
            <article>
              <header>
                <h4>Systems Analyst</h4>
                <small>March 2007 - July 2009</small>
              </header>
              <p>
                Design and development of construction management software
                using C# and ASP.NET MVC. Focus on UI design and accessibility.
              </p>
            </article>
          </section>
          <section id="education">
            <h3>Education</h3>
            <article>
              <h4>University of Wisconsin - Madison</h4>
              <p>
                B.S., Computer Science · (September 1999 - December 2003)
              </p>
              <p>
                Minor, Classical Humanities
              </p>
            </article>
          </section>
        </div>
      </div>
    `;
  }
};
o.styles = c`

    #resume {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0; margin: 0;
      height: 100vh;
      width: 100vw;
      font-family: Inter, sans-serif;
      font-weight: 200;
      font-size: 1rem;
      line-height: 1.25rem;
      overflow: hidden;
    }

    div {
      height: 100vh;
      overflow-y: auto;
      padding: 0 1rem;
    }

    aside {
      float: left;
      background-color: rgba(25,125,200,0.125);
      height: 100vh;
      width: 30vw;
      padding: 1rem;
    }

    ul {
      list-style: none;
      padding: 0 1rem; margin: 0;
    }

    a {
      color: rgb(200, 125, 25);
      text-decoration: none;
      display: inline-block;
      padding: 0.5rem 0;
      font-weight: 300;
    }

    a:hover, a:focus {
      text-decoration: underline;
    }

    h1 {
      padding: 0; margin: 1rem 0;
      font-size: 2.5rem;
      color: rgb(200, 100, 50);
    }

    header h3 {
      font-weight: 200;
      font-size: 1rem;
    }

    section > h3 {
      color: rgba(100, 200, 50, 0.5);
      border-bottom: solid 1px rgba(100, 200, 50, 0.5);
      padding: 0 0 0.5rem 0;
    }

  `;
o = u([
  h("ajm-resume")
], o);
export {
  o as AjmResume
};
