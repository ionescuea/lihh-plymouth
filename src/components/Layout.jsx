import { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { site } from '../data/site.js';

export default function Layout() {
  const { pathname } = useLocation();

  // Start each page at the top, which a browser would do on its own if these
  // were separate HTML files.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Close the mobile menu after following a link.
  const closeMenu = () => {
    document.getElementById('site-menu')?.classList.remove('show');
  };

  return (
    <div className="page-shell d-flex flex-column min-vh-100 position-relative">
      {/* Gold brush strokes lifted from the club leaflet, sitting behind the content. */}
      <div className="ornament-layer" aria-hidden="true">
        <img src="/images/ornament-gold.png" alt="" className="ornament ornament-start" />
        <img src="/images/ornament-gold.png" alt="" className="ornament ornament-end" />
      </div>

      {/* bg-cream is the exact background baked into logo.png, so the logo sits flush. */}
      <header className="bg-cream border-bottom border-gold sticky-top">
        <nav className="navbar navbar-expand-md site-nav container py-3">
          <NavLink to="/" className="navbar-brand p-0" onClick={closeMenu}>
            <img src="/images/logo.png" alt={site.name} className="site-logo" />
          </NavLink>

          <button
            className="navbar-toggler border-gold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#site-menu"
            aria-controls="site-menu"
            aria-expanded="false"
            aria-label="Show menu"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="site-menu">
            <ul className="navbar-nav gap-md-3 mt-3 mt-md-0">
              {site.nav.map((item) => (
                <li className="nav-item" key={item.href}>
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <main className="container flex-grow-1 py-5">
        <Outlet />
      </main>

      <footer className="bg-cream border-top border-gold">
        <div className="container py-4 text-ink-soft small">
          <p className="heading-caps text-ink fs-6 mb-1">{site.name}</p>
          <p className="mb-2">{site.location}</p>
          <p className="mb-0">
            <a
              className="link-offset-2"
              href={site.facebookGroupUrl}
              target="_blank"
              rel="noopener"
            >
              Facebook group
            </a>
            {site.contactEmail && (
              <>
                <span aria-hidden="true"> · </span>
                <a className="link-offset-2" href={`mailto:${site.contactEmail}`}>
                  Contact
                </a>
              </>
            )}
          </p>
        </div>
      </footer>
    </div>
  );
}
