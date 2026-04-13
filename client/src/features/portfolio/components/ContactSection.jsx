export function ContactSection({ prompt, email }) {
  return (
    <section className="contact-band">
      <div className="contact-band__content">
        <span className="section-heading__eyebrow">Get in touch</span>
        <p>{prompt}</p>
      </div>
      <a href={`mailto:${email}`}>Email Ritwika</a>
    </section>
  );
}
