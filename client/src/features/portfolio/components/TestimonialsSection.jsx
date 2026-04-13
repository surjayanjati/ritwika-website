import { SectionHeading } from "../../../common/components/SectionHeading";

export function TestimonialsSection({ testimonials }) {
  return (
    <section className="section testimonial-section" id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="What clients said."
      />
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <p>"{testimonial.quote}"</p>
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.title}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
