import { SectionHeading } from "../../../common/components/SectionHeading";

export function TestimonialsSection({ testimonials }) {
  return (
    <section className="section testimonial-section" id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="The work feels clearer to clients because the thinking is clearer on the page."
        copy="A strong portfolio should read as intentional before anyone needs to explain it in a call."
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
