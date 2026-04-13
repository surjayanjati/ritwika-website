export function ProjectOverview({ project }) {
  return (
    <section className="section project-overview">
      <div className="project-overview__intro">
        <span className="section-heading__eyebrow">Project Overview</span>
        <p>{project.outcome}</p>
      </div>
      <div className="project-overview__services">
        {project.services.map((service) => (
          <span key={service}>{service}</span>
        ))}
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
