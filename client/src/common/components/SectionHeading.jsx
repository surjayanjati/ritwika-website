export function SectionHeading({ eyebrow, title, copy }) {
  return (
    <header className="section-heading">
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <div>
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
    </header>
  );
}
