import { Link } from "react-router-dom";
import { SectionHeading } from "../../../common/components/SectionHeading";

export function FeaturedStorySection({ projects }) {
  return (
    <section className="section">
      <SectionHeading
        eyebrow="Visual Direction"
        title="A clearer visual story, carried through images, captions, and stronger content grouping."
        copy="Instead of dropping every project into the same card format, the portfolio now gives featured work more breathing room and stronger entry points."
      />
      <div className="featured-story-grid">
        {projects.map((project) => (
          <Link className="featured-story-card" key={project.slug} to={`/projects/${project.slug}`}>
            <div className="featured-story-card__image">
              <img alt={project.title} src={project.heroImage} />
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
