import { Link } from "react-router-dom";

export function SiteHeader({ identity }) {
  return (
    <header className="site-header">
      <Link className="site-header__brand" to="/">
        <span>RM</span>
        <div>
          <strong>{identity.name}</strong>
          <small>{identity.role}</small>
        </div>
      </Link>
      <nav className="site-header__nav">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href={`mailto:${identity.email}`}>Contact</a>
      </nav>
      <div className="site-header__socials">
        {identity.socialLinks.map((item) => (
          <a
            aria-label={item.label}
            href={item.href}
            key={item.label}
            rel="noreferrer"
            target="_blank"
          >
            {item.shortLabel}
          </a>
        ))}
      </div>
    </header>
  );
}
