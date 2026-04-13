export function ProjectOverview({ project }) {
  return (
    <section className="section project-overview">
      <div className="project-overview__intro project-overview__intro--story">
        <span className="section-heading__eyebrow">Project Overview</span>
        <h2>The brief and the shift.</h2>
        <p>{project.intro}</p>
      </div>
      <div className="project-overview__intro">
        <span className="section-heading__eyebrow">Outcome</span>
        <p>{project.outcome}</p>
      </div>
      <div className="project-overview__services">
        <span className="section-heading__eyebrow">Scope</span>
        {project.services.map((service) => (
          <span key={service}>{service}</span>
        ))}
      </div>
      <div className="project-overview__gallery-heading">
        <span className="section-heading__eyebrow">Selected Frames</span>
        <h2>Visual proof from the project system.</h2>
      </div>
      <div className="project-overview__gallery">
        {project.gallery.map((image, index) => (
          <div className="project-overview__image" key={image}>
            <img
              alt={`${project.title} gallery ${index + 1}`}
              decoding="async"
              loading="lazy"
              src={image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
