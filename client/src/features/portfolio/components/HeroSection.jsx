import mainProfileImage from "../../../../main.jpeg";

export function HeroSection({ identity, projectCount, selectedClientsCount }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__kicker">Independent Designer based in {identity.location}</p>
        <h1>
          Quiet visuals.
          <br />
          Clearer stories.
        </h1>
        <p className="hero__intro">{identity.name}</p>
        <p className="hero__lede">{identity.statement}</p>
        <div className="hero__actions">
          <a className="hero__action hero__action--primary" href="#projects">
            Explore selected work
          </a>
          <a href={`mailto:${identity.email}`}>Book a design inquiry</a>
        </div>
        <div className="hero__support">
          <p>{identity.shortBio}</p>
          <div className="hero__proof">
            <article>
              <strong>{projectCount}+</strong>
              <span>Detailed projects across identity, digital, and campaigns</span>
            </article>
            <article>
              <strong>{selectedClientsCount}</strong>
              <span>Recognizable teams and brands already featured in the portfolio</span>
            </article>
          </div>
          <div className="hero__focus-list">
            <span>Portfolio websites</span>
            <span>Brand identity</span>
            <span>Art direction</span>
          </div>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__portrait-wrap">
          <img
            alt={identity.name}
            className="hero__portrait"
            decoding="async"
            fetchPriority="high"
            src={mainProfileImage}
          />
        </div>
        <div className="hero__meta">
          <div>
            <span>Practice</span>
            <strong>{identity.role}</strong>
          </div>
          <div>
            <span>Based in</span>
            <strong>{identity.location}</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>{identity.focus}</strong>
          </div>
          <div>
            <span>Availability</span>
            <strong>{identity.availability}</strong>
          </div>
          <div>
            <span>Email</span>
            <a href={`mailto:${identity.email}`}>{identity.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
