const benefits = [
  {
    icon: "bi-people",
    title: "Personal Calificado",
    description: "Todo nuestro personal está capacitado para brindarle el mejor apoyo dentro de su proyecto.",
    stat: "25+",
    statLabel: "años de experiencia",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Aumento de Productividad",
    description: "Creamos soluciones escalables para eficientar la búsqueda y gestión de documentos.",
    stat: "88%",
    statLabel: "menos espacio físico",
  },
  {
    icon: "bi-shield-check",
    title: "Programa Anti-Desastre",
    description: "Tecnología y equipos de alto desempeño para garantizar la seguridad de su información.",
    stat: "30+",
    statLabel: "escáneres de alto volumen",
  },
  {
    icon: "bi-lightning",
    title: "Acceso Inmediato",
    description: "Encuentre y consulte archivos digitales en segundos desde cualquier ubicación.",
    stat: "95%",
    statLabel: "reducción de pérdidas",
  },
  {
    icon: "bi-search",
    title: "Búsqueda Inteligente",
    description: "Motor OCR avanzado para localizar documentos mediante búsqueda de palabras.",
    stat: "200",
    statLabel: "hojas por minuto",
  },
  {
    icon: "bi-share",
    title: "Colaboración Remota",
    description: "Comparta documentos electrónicamente y agilice el trabajo en equipo.",
    stat: "100%",
    statLabel: "acceso remoto",
  },
];

export const Benefits = () => {
  return (
    <section 
      id="beneficios" 
      className="py-5"
      style={{ paddingTop: '6rem', paddingBottom: '6rem', background: '#f1f5f9' }}
    >
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <span 
            className="section-badge"
            style={{ background: 'rgba(212, 160, 23, 0.2)', color: '#1e293b' }}
          >
            Beneficios Arguz
          </span>
          <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'var(--bs-heading-font)' }}>
            Eficienta tu proceso de{" "}
            <span className="text-gradient">consulta documental</span>
          </h2>
          <p className="lead text-muted">
            Reducción de tiempo en la solicitud de documentos y ahorro en la manutención del documento físico.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="row g-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card card-benefit h-100 p-4">
                <div className="card-body">
                  <div className="d-flex gap-3">
                    {/* Icon */}
                    <div className="icon-box flex-shrink-0">
                      <i className={`bi ${benefit.icon} fs-5`}></i>
                    </div>

                    {/* Content */}
                    <div className="flex-grow-1">
                      <h3 className="h5 fw-bold mb-2" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                        {benefit.title}
                      </h3>
                      <p className="text-muted small mb-3">
                        {benefit.description}
                      </p>

                      {/* Stat */}
                      <div className="d-flex align-items-baseline gap-2">
                        <span 
                          className="fw-bold"
                          style={{ fontSize: '1.5rem', color: 'var(--bs-primary)' }}
                        >
                          {benefit.stat}
                        </span>
                        <span className="text-muted small">
                          {benefit.statLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
