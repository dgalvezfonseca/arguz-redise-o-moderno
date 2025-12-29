const services = [
  "Digitalización de Documentos",
  "Consultoría Archivística",
  "Gestión Documental",
  "Respaldo de Información",
  "Digitalización para PyMes",
];

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Beneficios", href: "#beneficios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
];

export const Footer = () => {
  return (
    <footer className="footer-dark text-white py-5">
      <div className="container">
        <div className="row g-5">
          {/* Brand */}
          <div className="col-lg-3">
            <div className="mb-4">
              <span className="fw-bold fs-4" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                ARGUZ
              </span>
              <p 
                className="text-uppercase mb-0 mt-1" 
                style={{ fontSize: '0.65rem', letterSpacing: '0.15em', opacity: 0.7 }}
              >
                Que viva la información
              </p>
            </div>
            <p className="small opacity-75 mb-0">
              Su socio confiable para soluciones totales en procesos documentales. 
              Más de 25 años transformando la gestión de información.
            </p>
          </div>

          {/* Services */}
          <div className="col-lg-3">
            <h5 className="fw-bold mb-4" style={{ fontFamily: 'var(--bs-heading-font)' }}>
              Servicios
            </h5>
            <ul className="list-unstyled mb-0">
              {services.map((service, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href="#servicios" 
                    className="text-white-50 text-decoration-none small"
                    style={{ transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--bs-secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3">
            <h5 className="fw-bold mb-4" style={{ fontFamily: 'var(--bs-heading-font)' }}>
              Enlaces
            </h5>
            <ul className="list-unstyled mb-0">
              {links.map((link, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href={link.href} 
                    className="text-white-50 text-decoration-none small"
                    style={{ transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--bs-secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3">
            <h5 className="fw-bold mb-4" style={{ fontFamily: 'var(--bs-heading-font)' }}>
              Contacto
            </h5>
            <ul className="list-unstyled mb-0">
              <li className="d-flex gap-2 mb-3">
                <i className="bi bi-geo-alt" style={{ color: 'var(--bs-secondary)' }}></i>
                <span className="text-white-50 small">
                  Av. Miguel Hidalgo 24-B, Lago de Gpe,<br />
                  Cuautitlán Izcalli, EdoMex, México
                </span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-telephone" style={{ color: 'var(--bs-secondary)' }}></i>
                <a 
                  href="tel:+525530042777" 
                  className="text-white-50 text-decoration-none small"
                >
                  +52 (55) 3004-2777
                </a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope" style={{ color: 'var(--bs-secondary)' }}></i>
                <a 
                  href="mailto:contacto@arguz.com" 
                  className="text-white-50 text-decoration-none small"
                >
                  contacto@arguz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <hr className="my-5 opacity-25" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="small text-white-50 mb-3 mb-md-0">
              © {new Date().getFullYear()} Arguz Digitalización S.A. de C.V. Todos los derechos reservados.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-white-50 text-decoration-none small me-4">
              Aviso de Privacidad
            </a>
            <a href="#" className="text-white-50 text-decoration-none small">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
