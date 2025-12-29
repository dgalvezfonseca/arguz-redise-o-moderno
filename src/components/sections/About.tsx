const highlights = [
  "Más de 25 años de trayectoria en digitalización",
  "Cumplimos estándares internacionales de calidad",
  "Asesoría técnica y legal incluida",
  "Normas ISO-27000 en seguridad de documentos",
  "Equipos Kodak Alaris de alto volumen",
  "Soluciones adaptadas a cada cliente",
];

export const About = () => {
  return (
    <section id="nosotros" className="py-5" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Content */}
          <div className="col-lg-6">
            <span 
              className="section-badge"
              style={{ background: 'rgba(26, 138, 125, 0.15)', color: 'var(--bs-accent)' }}
            >
              Sobre Nosotros
            </span>
            <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: 'var(--bs-heading-font)' }}>
              Su socio confiable en{" "}
              <span className="text-gradient">soluciones documentales</span>
            </h2>
            <p className="lead text-muted mb-4">
              En Arguz Digitalización, nuestras soluciones van más allá de la transformación 
              de documentos en papel a formato digital. Incluimos asesoría técnica y legal 
              para determinar qué se puede y qué no se debe digitalizar.
            </p>
            <p className="text-muted mb-4">
              Con la finalidad de generar ahorros sustanciales para nuestros clientes, 
              llevamos una gestión documental apegada a los principios de austeridad, 
              honestidad y eficiencia.
            </p>

            {/* Highlights */}
            <div className="row g-3 mb-4">
              {highlights.map((item, index) => (
                <div key={index} className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill" style={{ color: 'var(--bs-secondary)' }}></i>
                    <span className="small">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contacto" className="btn btn-primary btn-lg">
              Conocer más sobre Arguz
            </a>
          </div>

          {/* Visual */}
          <div className="col-lg-6">
            <div className="position-relative">
              {/* Main card */}
              <div className="about-card">
                {/* Decorative blobs */}
                <div 
                  className="position-absolute"
                  style={{ 
                    top: '-1rem', 
                    right: '-1rem', 
                    width: '6rem', 
                    height: '6rem',
                    background: 'rgba(212, 160, 23, 0.2)',
                    borderRadius: '50%',
                    filter: 'blur(30px)'
                  }}
                ></div>
                <div 
                  className="position-absolute"
                  style={{ 
                    bottom: '-1.5rem', 
                    left: '-1.5rem', 
                    width: '8rem', 
                    height: '8rem',
                    background: 'rgba(13, 74, 140, 0.1)',
                    borderRadius: '50%',
                    filter: 'blur(30px)'
                  }}
                ></div>

                <div className="position-relative">
                  <h3 className="h4 fw-bold mb-3" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                    2025: Año de nuevas transformaciones
                  </h3>
                  <p className="text-muted mb-4">
                    Arguz ofrece soluciones integrales, sofisticadas y escalables que mejoran 
                    enormemente la forma en que las empresas procesan, archivan y comparten 
                    los documentos digitales y de papel.
                  </p>

                  {/* Stats */}
                  <div className="row g-3">
                    <div className="col-4">
                      <div className="stat-box">
                        <div className="stat-number">25+</div>
                        <div className="text-muted small">Años</div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="stat-box">
                        <div className="stat-number">30+</div>
                        <div className="text-muted small">Equipos</div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="stat-box">
                        <div className="stat-number">200</div>
                        <div className="text-muted small">Hojas/min</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="floating-badge d-none d-md-block">
                <div className="fw-bold" style={{ fontFamily: 'var(--bs-heading-font)' }}>ISO-27000</div>
                <div className="small opacity-75">Certificación</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
