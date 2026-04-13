import { Link } from "react-router-dom";

export function ProjectNavigator({ projects, currentSlug }) {
  return (
    <section className="section">
      <div className="case-studies-heading">
        <span className="section-heading__eyebrow">More Work</span>
        <h2>Continue through the portfolio.</h2>
        <p>Related projects that show how the visual language changes across categories without losing the same level of restraint.</p>
      </div>
      <div className="project-nav-grid">
        {projects
          .filter((project) => project.slug !== currentSlug)
          .slice(0, 3)
          .map((project) => (
            <Link className="project-nav-card" key={project.slug} to={`/projects/${project.slug}`}>
              <div className="project-nav-card__media">
                <img alt={project.title} decoding="async" loading="lazy" src={project.thumbnail} />
              </div>
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.coverNote}</p>
            </Link>
          ))}
      </div>
    </section>
  );
}
