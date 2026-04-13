import { Link } from "react-router-dom";
import { SectionHeading } from "../../../common/components/SectionHeading";

export function FeaturedStorySection({ projects }) {
  return (
    <section className="section">
      <SectionHeading
        eyebrow="Featured Stories"
        title="Three projects that show the range of the system."
        copy="A fast editorial read into identity, digital publishing, and image-led campaign work."
      />
      <div className="featured-story-grid">
        {projects.map((project) => (
          <Link className="featured-story-card" key={project.slug} to={`/projects/${project.slug}`}>
            <div className="featured-story-card__image">
              <img alt={project.title} decoding="async" loading="lazy" src={project.heroImage} />
            </div>
            <div className="featured-story-card__content">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.coverNote}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
