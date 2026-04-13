export function CaseStudiesSection({ caseStudies }) {
  return (
    <section className="section">
      <div className="case-studies-heading">
        <span className="section-heading__eyebrow">Case Studies</span>
        <h2>Key decisions inside the project, broken into readable parts.</h2>
        <p>Each case study isolates a design move, the deliverables involved, and the core idea guiding the execution.</p>
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
            <strong>Insight: {caseStudy.insight}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
