export function CaseStudiesSection({ caseStudies }) {
  return (
    <section className="section">
      <div className="case-studies-heading">
        <span className="section-heading__eyebrow">Case Studies</span>
        <h2>Key parts of the project, shown cleanly.</h2>
      </div>
      <div className="case-studies-grid">
        {caseStudies.map((caseStudy, index) => (
          <article className="case-study-card" key={caseStudy.slug}>
            <div className="case-study-card__image">
              <img alt={caseStudy.title} decoding="async" loading="lazy" src={caseStudy.image} />
            </div>
            <div className="case-study-card__header">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{caseStudy.title}</h3>
            </div>
            <p>{caseStudy.summary}</p>
            <ul>
              {caseStudy.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <strong>{caseStudy.insight}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
