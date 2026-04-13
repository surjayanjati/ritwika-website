import { Link } from "react-router-dom";

export function ProjectHero({ project }) {
  return (
    <section className="project-hero">
      <div className="project-hero__top">
        <Link className="project-hero__back" to="/">
          Back to portfolio
        </Link>
        <span>{project.category}</span>
      </div>
      <div className="project-hero__body">
        <div className="project-hero__content">
          <p className="hero__kicker">{project.client}</p>
          <h1>{project.title}</h1>
          <p className="project-hero__cover-note">{project.coverNote}</p>
          <p className="project-hero__summary">{project.intro}</p>
          <div className="project-hero__services">
            {project.services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
        <div className="project-hero__meta">
          {project.metrics.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="project-hero__image">
        <img alt={project.title} decoding="async" fetchPriority="high" src={project.heroImage} />
      </div>
    </section>
  );
}
