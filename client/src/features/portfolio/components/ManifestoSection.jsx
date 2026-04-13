export function ManifestoSection({ manifesto, capabilities, featureImage }) {
  return (
    <section className="about-band section" id="about">
      <article className="about-band__visual">
        <div className="about-band__image">
          <img alt="Selected portfolio visual" src={featureImage} />
        </div>
      </article>
      <article className="about-band__content">
        <span className="section-heading__eyebrow">About</span>
        <h2>{manifesto.quote}</h2>
        <p>{manifesto.approach}</p>
      </article>
      <article className="about-band__services">
        <span className="section-heading__eyebrow">Services</span>
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
