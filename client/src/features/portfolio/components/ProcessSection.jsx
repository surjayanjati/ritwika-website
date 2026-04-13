import { SectionHeading } from "../../../common/components/SectionHeading";

export function ProcessSection({ process }) {
  return (
    <section className="section process-section" id="process">
      <SectionHeading
        eyebrow="Process"
        title="A deliberate sequence from strategy pressure to launch-ready clarity."
        copy="The workflow is built to make the portfolio stronger at every layer: positioning, structure, image rhythm, and final polish."
      />
      <div className="process-grid">
        {process.map((step) => (
          <article className="process-card" key={step.name}>
            <span>{step.phase}</span>
            <h3>{step.name}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
