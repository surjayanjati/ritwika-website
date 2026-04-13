import { Link } from "react-router-dom";
import { SectionHeading } from "../../../common/components/SectionHeading";

export function ProjectsSection({ projects }) {
  return (
    <section className="section" id="projects">
      <SectionHeading
        eyebrow="Selected Projects"
        title="Selected work."
        copy="A clean entry into Ritwika Mandal's strongest portfolio pieces."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Link
            className={`project-card ${index === 0 ? "project-card--featured" : ""}`}
            key={project.slug}
            to={`/projects/${project.slug}`}
          >
            <div className="project-card__media">
              <img alt={project.title} decoding="async" loading="lazy" src={project.thumbnail} />
            </div>
            <div className="project-card__panel">
              <div className="project-card__header">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{project.category}</p>
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p className="project-card__summary">{project.summary}</p>
              </div>
              <div className="project-card__details">
                <span>{project.year}</span>
                <span>{project.client}</span>
              </div>
              <ul className="project-card__tags">
                {project.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <span className="project-card__cta">Open project</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
