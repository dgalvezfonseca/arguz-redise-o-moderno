import { useState, useEffect } from "react";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Beneficios", href: "#beneficios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top py-3 transition ${
        isScrolled ? "navbar-scrolled navbar-light" : "navbar-dark"
      }`}
      style={{ transition: "all 0.3s ease" }}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex flex-column" href="#inicio">
          <span className="fw-bold fs-4" style={{ fontFamily: 'var(--bs-heading-font)' }}>
            ARGUZ
          </span>
          <small 
            className="text-uppercase" 
            style={{ 
              fontSize: '0.65rem', 
              letterSpacing: '0.15em',
              opacity: 0.7 
            }}
          >
            Que viva la información
          </small>
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <a className="nav-link px-3 fw-medium" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="d-flex align-items-center gap-3">
            <a
              href="tel:+525530042777"
              className={`d-none d-lg-flex align-items-center gap-2 text-decoration-none ${
                isScrolled ? "text-dark" : "text-white"
              }`}
            >
              <i className="bi bi-telephone"></i>
              <span>+52 (55) 3004-2777</span>
            </a>
            <a 
              href="#contacto" 
              className={`btn ${isScrolled ? 'btn-primary' : 'btn-secondary'}`}
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
