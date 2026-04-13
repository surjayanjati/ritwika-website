export function CollaboratorsStrip({ clients }) {
  return (
    <section className="collaborators-strip">
      <span className="section-heading__eyebrow">Worked with</span>
      <div className="collaborators-strip__grid">
        {clients.map((client) => (
          <article className="client-badge" key={client}>
            {client}
          </article>
        ))}
      </div>
    </section>
  );
}
