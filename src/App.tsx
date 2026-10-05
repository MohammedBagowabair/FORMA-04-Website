import { useState } from "react";

const projects = [
  {
    number: "01",
    name: "Color Block House",
    place: "Rotterdam · NL",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1648737851580-d6114214581b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600",
    className: "project-blue",
  },
  {
    number: "02",
    name: "Common Ground",
    place: "Berlin · DE",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1561400502-8a4c8e0c956c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600",
    className: "project-pink",
  },
  {
    number: "03",
    name: "Casa Alegre",
    place: "Madrid · ES",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1683576221759-cb3fe4bf9c8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600",
    className: "project-yellow",
  },
];

const capabilities = [
  ["A", "Spatial identity", "Concepts and interiors with a clear point of view."],
  ["B", "Interior architecture", "Planning, materials, detailing and site direction."],
  ["C", "Objects & furniture", "Custom pieces made specifically for your space."],
  ["D", "Art direction", "Visual systems that make physical places memorable."],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page">
      <header className="header">
        <a className="logo" href="#top" onClick={closeMenu}>
          FORMA<span>/04</span>
        </a>
        <div className="availability">
          <span className="status-dot" />
          Projects 2025
        </div>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <p>Independent interior design studio<br />Copenhagen · Everywhere</p>
        </nav>
        <button
          className={menuOpen ? "menu-button open" : "menu-button"}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <b>{menuOpen ? "Close" : "Menu"}</b>
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-title">
            <p>Interior design for<br />people with ideas.</p>
            <h1>
              Rooms
              <span>with a</span>
              pulse.
            </h1>
          </div>
          <div className="hero-media">
            <img
              src="https://images.unsplash.com/photo-1693436237252-1c1974dea560?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800"
              alt="Graphic tiled interior with three colorful doorways"
            />
            <a href="#projects">See our work <span>→</span></a>
            <p className="image-code">FRM — 024<br />55°40'N 12°34'E</p>
          </div>
        </section>

        <div className="ticker" aria-label="Studio specialties">
          <div>
            <span>Homes</span><b>+</b><span>Restaurants</span><b>+</b><span>Workplaces</span><b>+</b>
            <span>Objects</span><b>+</b><span>Homes</span><b>+</b><span>Restaurants</span><b>+</b>
          </div>
        </div>

        <section className="intro" id="about">
          <div className="intro-side">
            <p>( Our approach )</p>
            <span>Est. 2018</span>
          </div>
          <div className="intro-copy">
            <h2>We make spaces that wake you up.</h2>
            <div>
              <p>
                No beige-on-beige. No copy-paste formulas. We build expressive interiors around how people actually
                move, meet, work, and live.
              </p>
              <p>
                Our studio brings architecture, furniture, color, and art into one clear idea — then makes every detail
                count.
              </p>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="projects-header">
            <p>Selected projects</p>
            <h2>Made to be <i>felt.</i></h2>
            <span>2023–2025</span>
          </div>
          <div className="project-stack">
            {projects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <p>{project.category}</p>
                  <p>{project.place}</p>
                </div>
                <a className="project-photo" href="#contact" aria-label={`View ${project.name}`}>
                  <img src={project.image} alt={`${project.name} interior`} />
                  <span>View case →</span>
                </a>
                <h3>{project.name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="services" id="services">
          <div className="services-heading">
            <p>( Capabilities )</p>
            <h2>Big picture.<br />Tiny details.</h2>
          </div>
          <div className="capability-list">
            {capabilities.map(([letter, title, text]) => (
              <article key={letter}>
                <span>{letter}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <b>+</b>
              </article>
            ))}
          </div>
        </section>

        <section className="manifesto">
          <p>Good design is not quiet.</p>
          <h2>
            It starts a <span>conversation.</span>
          </h2>
          <img
            src="https://images.unsplash.com/photo-1507178593478-4cc8e1711ccf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1000"
            alt="Colorful geometric architectural wall"
          />
        </section>

        <section className="contact" id="contact">
          <div className="contact-label">
            <span className="status-dot" />
            New projects / 2025
          </div>
          <h2>Let's make<br />something <i>real.</i></h2>
          <a href="mailto:hello@forma04.studio">
            hello@forma04.studio <span>→</span>
          </a>
          <div className="contact-bottom">
            <p>Copenhagen, DK<br />Working worldwide</p>
            <p>Instagram<br />Pinterest<br />LinkedIn</p>
            <p>+45 31 58 42 90<br />Mon–Fri / 9–17</p>
          </div>
        </section>
      </main>

      <footer>
        <p>FORMA/04 © 2025</p>
        <a href="#top">Back up ↑</a>
      </footer>
    </div>
  );
}
