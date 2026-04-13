import { useState } from "react";

export function ContactSection({ email, availability, socialLinks }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Project inquiry from ${form.name || "Website visitor"}`,
    );

    const body = encodeURIComponent(
      [
        `Name: ${form.name || "-"}`,
        `Email: ${form.email || "-"}`,
        `Project type: ${form.projectType || "-"}`,
        "",
        "Project details:",
        form.message || "-",
      ].join("\n"),
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact-section section" id="contact">
      <div className="contact-section__intro">
        <span className="section-heading__eyebrow">Contact</span>
        <h2>Start a project conversation.</h2>
        <p>
          Share a few details about the website, identity, or launch you are planning.
          The form opens a prepared email so the inquiry is easy to send.
        </p>
        <small>{availability}</small>
        <div className="contact-section__links">
          <a href={`mailto:${email}`}>{email}</a>
          {socialLinks.map((item) => (
            <a href={item.href} key={item.label} rel="noreferrer" target="_blank">
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input name="name" onChange={handleChange} placeholder="Your name" value={form.name} />
        </label>

        <label>
          <span>Email</span>
          <input
            name="email"
            onChange={handleChange}
            placeholder="you@example.com"
            type="email"
            value={form.email}
          />
        </label>

        <label>
          <span>Project Type</span>
          <input
            name="projectType"
            onChange={handleChange}
            placeholder="Portfolio website, brand refresh, campaign launch..."
            value={form.projectType}
          />
        </label>

        <label>
          <span>Project Details</span>
          <textarea
            name="message"
            onChange={handleChange}
            placeholder="Tell me what you want to build, improve, or launch."
            rows="6"
            value={form.message}
          />
        </label>

        <button type="submit">Send Inquiry</button>
      </form>
    </section>
  );
}
