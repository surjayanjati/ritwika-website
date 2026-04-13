export function ManifestoSection({ manifesto, capabilities, featureImage }) {
  return (
    <section className="about-band section" id="about">
      <article className="about-band__visual">
        <div className="about-band__image">
          <img alt="Selected portfolio visual" decoding="async" loading="lazy" src={featureImage} />
        </div>
      </article>
      <article className="about-band__content">
        <span className="section-heading__eyebrow">Positioning</span>
        <h2>{manifesto.quote}</h2>
        <p>{manifesto.approach}</p>
        <div className="about-band__notes">
          <div>
            <span className="section-heading__eyebrow">What improves</span>
            <p>Sharper hierarchy, stronger pacing, and a portfolio structure that makes the work easier to trust quickly.</p>
          </div>
          <div>
            <span className="section-heading__eyebrow">Why it matters</span>
            <p>Good portfolio UX should explain the project before the viewer has to work for it.</p>
          </div>
        </div>
      </article>
      <article className="about-band__services">
        <span className="section-heading__eyebrow">Core Services</span>
        <div>
          <ul>
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
