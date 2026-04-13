export function SiteFooter({ identity }) {
  return (
    <footer className="site-footer">
      <div>
        <strong>{identity.name}</strong>
        <p>{identity.role}</p>
      </div>
      <nav className="site-footer__links">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="site-footer__meta">
        <a href={`mailto:${identity.email}`}>{identity.email}</a>
        <span>{identity.location}</span>
      </div>
    </footer>
  );
}
