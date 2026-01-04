import { Link } from "react-router-dom";

const features = [
  { icon: "bi-laptop", text: "Cursos virtuales" },
  { icon: "bi-person-check", text: "Certificaciones" },
  { icon: "bi-calendar-check", text: "Flexibilidad total" },
];

const caracteristicas = [
  {
    icon: "bi-palette",
    title: "Desarrollo de Cursos Personalizados",
    description: "Gestionamos los contenidos para ofrecer una experiencia educativa única. Mantenemos una fluida relación y comunicación entre alumnos y docentes."
  },
  {
    icon: "bi-clipboard-check",
    title: "Potente Estructura de Evaluaciones",
    description: "Generación de constancias, certificados y reportes para un seguimiento detallado del progreso. Personalizable según tus necesidades específicas."
  },
  {
    icon: "bi-phone",
    title: "Flexibilidad y Accesibilidad",
    description: "Estandariza el aprendizaje con una interfaz fácil y flexible desde cualquier dispositivo. Implementación rápida, remota y personalizada."
  },
  {
    icon: "bi-piggy-bank",
    title: "Ahorro de Costos Operativos",
    description: "Reducción significativa de gastos asociados a la capacitación tradicional. Adaptable a las necesidades educativas cambiantes."
  },
];

const beneficios = [
  {
    icon: "bi-mortarboard",
    title: "Plataforma Líder",
    description: "Ciencias de la Documentación con tecnología de punta"
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Potencia tu Equipo",
    description: "Formación continua para el crecimiento profesional"
  },
  {
    icon: "bi-clock-history",
    title: "Aprendizaje Flexible",
    description: "Estudia a tu ritmo desde cualquier lugar"
  },
  {
    icon: "bi-patch-check",
    title: "Certificación Oficial",
    description: "Constancias y certificados reconocidos"
  },
];

export default function Capacitacion() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top py-3"
        style={{
          background: "rgba(13, 58, 110, 0.95)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="container">
          <Link className="navbar-brand d-flex flex-column" to="/">
            <span
              className="fw-bold text-white"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              ARGUZ
            </span>
            <span
              className="text-white-50"
              style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}
            >
              QUE VIVA LA INFORMACIÓN
            </span>
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link text-white px-3" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white px-3" to="/#servicios">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white px-3" to="/#beneficios">
                  Beneficios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white px-3" to="/#nosotros">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white px-3" to="/#contacto">
                  Contacto
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3">
              <a
                href="tel:+525530042777"
                className="text-white text-decoration-none d-none d-lg-flex align-items-center gap-2"
              >
                <i className="bi bi-telephone"></i>
                <span>+52 (55) 3004-2777</span>
              </a>
              <Link
                to="/#contacto"
                className="btn"
                style={{
                  background: "#d4a017",
                  color: "#1e293b",
                  fontWeight: 700,
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.75rem",
                  boxShadow: "0 8px 30px -8px rgba(212, 160, 23, 0.3)",
                }}
              >
                Cotizar ahora
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="d-flex align-items-center position-relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #082548 0%, #0d3a6e 50%, #2a8a8a 100%)",
          minHeight: "100vh",
          paddingTop: "100px",
        }}
      >
        {/* Pattern overlay */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            top: 0,
            left: 0,
          }}
        ></div>

        {/* Floating circles */}
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "300px",
            height: "300px",
            background: "rgba(212, 160, 23, 0.2)",
            top: "80px",
            right: "50px",
            filter: "blur(60px)",
          }}
        ></div>
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "400px",
            height: "400px",
            background: "rgba(42, 138, 138, 0.1)",
            bottom: "80px",
            left: "50px",
            filter: "blur(60px)",
          }}
        ></div>

        <div className="container position-relative" style={{ zIndex: 10 }}>
          <div className="row">
            <div className="col-lg-10 col-xl-8">
              {/* Badge */}
              <div className="mb-4">
                <span
                  className="d-inline-flex align-items-center px-3 py-2"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "50px",
                    fontSize: "0.875rem",
                    color: "white",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "#d4a017",
                      borderRadius: "50%",
                      marginRight: "0.5rem",
                    }}
                  ></span>
                  Formación en Ciencias de la Documentación
                </span>
              </div>

              {/* Heading */}
              <h1
                className="display-3 fw-bold text-white mb-4"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  lineHeight: 1.1,
                }}
              >
                Capacitación{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #d4a017 0%, #e8b82a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Documental
                </span>
              </h1>

              {/* Subheading */}
              <p
                className="lead text-white mb-5"
                style={{ opacity: 0.9, maxWidth: "600px" }}
              >
                Transforma la forma en que tu empresa aborda la formación con 
                nuestra plataforma líder en Ciencias de la Documentación. 
                Cursos virtuales diseñados para facilitar y automatizar la formación de tus empleados.
              </p>

              {/* CTA Buttons */}
              <div className="d-flex flex-wrap gap-3 mb-5">
                <a
                  href="#caracteristicas"
                  className="btn"
                  style={{
                    background: "#d4a017",
                    color: "#1e293b",
                    fontWeight: 700,
                    padding: "1rem 2rem",
                    borderRadius: "0.75rem",
                    boxShadow: "0 8px 30px -8px rgba(212, 160, 23, 0.3)",
                  }}
                >
                  Ver características
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
                <Link
                  to="/#contacto"
                  className="btn"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    fontWeight: 600,
                    padding: "1rem 2rem",
                    borderRadius: "0.75rem",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Solicitar información
                </Link>
              </div>

              {/* Feature pills */}
              <div className="d-flex flex-wrap gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center gap-2 px-3 py-2"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "0.75rem",
                      color: "white",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                    }}
                  >
                    <i
                      className={`bi ${feature.icon}`}
                      style={{ color: "#d4a017" }}
                    ></i>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gradient fade */}
        <div
          className="position-absolute w-100"
          style={{
            bottom: 0,
            left: 0,
            height: "150px",
            background:
              "linear-gradient(to top, white 0%, transparent 100%)",
          }}
        ></div>
      </section>

      {/* Características Section */}
      <section id="caracteristicas" className="py-5" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="container">
          <div className="text-center mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
            <span
              className="d-inline-block px-3 py-2 mb-3"
              style={{
                background: "rgba(13, 74, 140, 0.1)",
                color: "#0d3a6e",
                fontSize: "0.875rem",
                fontWeight: 600,
                borderRadius: "50px",
              }}
            >
              Características Principales
            </span>
            <h2
              className="display-5 fw-bold mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Plataforma de{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #d4a017 0%, #e8b82a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                capacitación única
              </span>
            </h2>
            <p className="lead text-muted">
              Hemos perfeccionado la sinergia entre tecnología y educación para 
              ofrecerte una experiencia de formación excepcional.
            </p>
          </div>

          <div className="row g-4">
            {caracteristicas.map((item, index) => (
              <div key={index} className="col-md-6">
                <div
                  className="h-100 p-4"
                  style={{
                    background: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "1rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "rgba(13, 58, 110, 0.1)",
                      borderRadius: "0.75rem",
                    }}
                  >
                    <i
                      className={`bi ${item.icon} fs-4`}
                      style={{ color: "#0d3a6e" }}
                    ></i>
                  </div>
                  <h3
                    className="h4 fw-bold mb-3"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section
        className="py-5"
        style={{
          background: "#f8fafc",
          paddingTop: "6rem",
          paddingBottom: "6rem",
        }}
      >
        <div className="container">
          <div className="text-center mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
            <span
              className="d-inline-block px-3 py-2 mb-3"
              style={{
                background: "rgba(212, 160, 23, 0.15)",
                color: "#1e293b",
                fontSize: "0.875rem",
                fontWeight: 600,
                borderRadius: "50px",
              }}
            >
              Beneficios
            </span>
            <h2
              className="display-5 fw-bold mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              ¿Por qué elegir nuestra{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #d4a017 0%, #e8b82a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                capacitación?
              </span>
            </h2>
          </div>

          <div className="row g-4">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div
                  className="h-100 p-4 text-center"
                  style={{
                    background: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "1rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "rgba(13, 58, 110, 0.1)",
                      borderRadius: "0.75rem",
                    }}
                  >
                    <i
                      className={`bi ${beneficio.icon} fs-4`}
                      style={{ color: "#0d3a6e" }}
                    ></i>
                  </div>
                  <h4
                    className="h5 fw-bold mb-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {beneficio.title}
                  </h4>
                  <p className="text-muted small mb-0">{beneficio.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #0d3a6e 0%, #082548 100%)",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="container text-center">
          <h2
            className="display-5 fw-bold text-white mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            ¿Listo para potenciar a tu equipo?
          </h2>
          <p className="lead text-white mb-4" style={{ opacity: 0.9 }}>
            Contáctanos hoy para explorar cómo podemos potenciar juntos el 
            crecimiento y el éxito de tu equipo.
          </p>
          <Link
            to="/#contacto"
            className="btn btn-lg"
            style={{
              background: "#d4a017",
              color: "#1e293b",
              fontWeight: 700,
              padding: "1rem 2.5rem",
              borderRadius: "0.75rem",
              boxShadow: "0 8px 30px -8px rgba(212, 160, 23, 0.3)",
            }}
          >
            Solicitar información
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-5"
        style={{ background: "#0d3a6e", color: "white" }}
      >
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="mb-4">
                <span
                  className="fw-bold"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.5rem",
                  }}
                >
                  ARGUZ
                </span>
                <span
                  className="d-block text-white-50"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}
                >
                  QUE VIVA LA INFORMACIÓN
                </span>
              </div>
              <p className="text-white-50 mb-4">
                Empresa mexicana especializada en gestión documental, 
                digitalización de documentos, capacitación y respaldo de información.
              </p>
            </div>

            <div className="col-lg-2 col-md-4">
              <h6 className="fw-bold mb-3">Servicios</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    to="/digitalizacion-de-documentos"
                    className="text-white-50 text-decoration-none"
                    style={{ transition: "color 0.3s" }}
                  >
                    Digitalización
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/gestion-documental"
                    className="text-white-50 text-decoration-none"
                  >
                    Gestión Documental
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/automatizacion-procesos-empresariales"
                    className="text-white-50 text-decoration-none"
                  >
                    Automatización
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/capacitacion"
                    className="text-white-50 text-decoration-none"
                  >
                    Capacitación
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-4">
              <h6 className="fw-bold mb-3">Navegación</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-white-50 text-decoration-none">
                    Inicio
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/#servicios"
                    className="text-white-50 text-decoration-none"
                  >
                    Servicios
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/#nosotros"
                    className="text-white-50 text-decoration-none"
                  >
                    Nosotros
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/#contacto"
                    className="text-white-50 text-decoration-none"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-4">
              <h6 className="fw-bold mb-3">Contacto</h6>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-center gap-2">
                  <i className="bi bi-telephone text-white-50"></i>
                  <a
                    href="tel:+525530042777"
                    className="text-white-50 text-decoration-none"
                  >
                    +52 (55) 3004-2777
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <i className="bi bi-envelope text-white-50"></i>
                  <a
                    href="mailto:contacto@arguz.com"
                    className="text-white-50 text-decoration-none"
                  >
                    contacto@arguz.com
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <i className="bi bi-geo-alt text-white-50 mt-1"></i>
                  <span className="text-white-50">
                    Ciudad de México, México
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-4" style={{ borderColor: "rgba(255,255,255,0.1)" }} />

          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <p className="text-white-50 small mb-0">
              © {new Date().getFullYear()} Arguz Digitalización. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
