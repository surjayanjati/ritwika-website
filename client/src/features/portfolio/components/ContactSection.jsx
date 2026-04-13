export function ContactSection({ prompt, email, availability }) {
  return (
    <section className="contact-band">
      <div className="contact-band__content">
        <span className="section-heading__eyebrow">Get in touch</span>
        <p>{prompt}</p>
        <small>{availability}</small>
      </div>
      <a href={`mailto:${email}`}>Email Ritwika</a>
    </section>
  );
}
