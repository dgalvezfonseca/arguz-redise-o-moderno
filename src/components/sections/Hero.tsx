const features = [
  { icon: "bi-file-earmark-text", text: "Consultoría Archivística" },
  { icon: "bi-pc-display", text: "Digitalización de Documentos" },
  { icon: "bi-shield-check", text: "Respaldo de Información" },
  { icon: "bi-clock-history", text: "Gestión Documental" },
];

export const Hero = () => {
  return (
    <section id="inicio" className="hero-section d-flex align-items-center">
      {/* Background elements */}
      <div className="hero-pattern"></div>
      <div className="hero-blob-1"></div>
      <div className="hero-blob-2"></div>

      <div className="container position-relative" style={{ zIndex: 10, paddingTop: '6rem' }}>
        <div className="row">
          <div className="col-lg-10 col-xl-8">
            {/* Badge */}
            <div className="animate-slide-up">
              <span 
                className="d-inline-flex align-items-center px-3 py-2 rounded-pill text-white mb-4"
                style={{ 
                  background: 'rgba(255,255,255,0.1)', 
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  fontSize: '0.875rem'
                }}
              >
                <span 
                  className="rounded-circle me-2" 
                  style={{ 
                    width: '8px', 
                    height: '8px', 
                    background: 'var(--bs-secondary)',
                    animation: 'pulse 2s infinite'
                  }}
                ></span>
                Empresa mexicana con más de 25 años de experiencia
              </span>
            </div>

            {/* Heading */}
            <h1 
              className="display-3 fw-bold text-white mb-4 animate-slide-up animate-slide-up-1"
              style={{ fontFamily: 'var(--bs-heading-font)', lineHeight: 1.1 }}
            >
              Gestión Documental,{" "}
              <span style={{ color: 'var(--bs-secondary)' }}>Archivística</span> y{" "}
              Digitalización de Documentos
            </h1>

            {/* Subheading */}
            <p 
              className="lead text-white-50 mb-5 animate-slide-up animate-slide-up-2"
              style={{ maxWidth: '700px' }}
            >
              Especialistas en servicios de digitalización de documentos en grandes volúmenes. 
              Transformamos su archivo físico en información digital segura y accesible.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-5 animate-slide-up animate-slide-up-3">
              <a href="#contacto" className="btn btn-secondary btn-xl d-inline-flex align-items-center gap-2">
                Solicitar cotización
                <i className="bi bi-arrow-right"></i>
              </a>
              <a href="#servicios" className="btn btn-outline-light btn-xl">
                Conocer servicios
              </a>
            </div>

            {/* Features */}
            <div className="row g-3 animate-slide-up animate-slide-up-4">
              {features.map((feature, index) => (
                <div key={index} className="col-6 col-md-3">
                  <div className="feature-pill">
                    <i className={`bi ${feature.icon}`}></i>
                    <span>{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div 
        className="position-absolute bottom-0 start-0 end-0"
        style={{ 
          height: '8rem',
          background: 'linear-gradient(to top, var(--bs-body-bg), transparent)'
        }}
      ></div>
    </section>
  );
};
