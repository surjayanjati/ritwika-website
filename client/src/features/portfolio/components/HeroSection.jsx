export function HeroSection({ identity }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__kicker">{identity.role}</p>
        <h1>{identity.name}</h1>
        <p className="hero__lede">{identity.statement}</p>
        <div className="hero__actions">
          <a className="hero__action hero__action--primary" href="#projects">
            View selected work
          </a>
          <a href={`mailto:${identity.email}`}>Book a design inquiry</a>
        </div>
        <div className="hero__support">
          <p>{identity.shortBio}</p>
          <div className="hero__focus-list">
            <span>Portfolio websites</span>
            <span>Brand identity</span>
            <span>Art direction</span>
          </div>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__portrait-wrap">
          <img alt={identity.name} className="hero__portrait" src={identity.portraitImage} />
        </div>
        <div className="hero__meta">
          <div>
            <span>Based in</span>
            <strong>{identity.location}</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>{identity.focus}</strong>
          </div>
          <div>
            <span>Contact</span>
            <a href={`mailto:${identity.email}`}>{identity.email}</a>
          </div>
          <div>
            <span>Availability</span>
            <strong>{identity.availability}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
