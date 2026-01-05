import { Link } from "react-router-dom";

const services = [
  {
    icon: "bi-search",
    title: "Consultoría Archivística",
    description:
      "Ofrecemos herramientas y asesoría técnica para la correcta administración de sus archivos, incluyendo orientación legal sobre qué documentos pueden digitalizarse.",
    features: ["Diagnóstico de archivos", "Asesoría legal", "Plan de gestión"],
    link: null,
  },
  {
    icon: "bi-display",
    title: "Digitalización de Documentos",
    description:
      "Transformamos sus documentos físicos a formatos digitales con tecnología de vanguardia, utilizando escáneres Kodak Alaris de alto volumen.",
    features: ["Escaneo de alta calidad", "OCR avanzado", "Indexación inteligente"],
    link: "/digitalizacion-de-documentos",
  },
  {
    icon: "bi-database",
    title: "Gestión Documental",
    description:
      "Sistema integral para organizar documentos físicos y digitales, con flujos de trabajo automatizados y acceso desde cualquier ubicación.",
    features: ["Laserfiche", "Acceso remoto", "Automatización"],
    link: "/gestion-documental",
  },
  {
    icon: "bi-gear",
    title: "Automatización de Procesos",
    description:
      "Optimiza tus flujos de trabajo empresariales con automatización inteligente. Reduce tiempos y errores en procesos documentales.",
    features: ["Flujos automatizados", "Integración ERP", "Reportes en tiempo real"],
    link: "/automatizacion-procesos-empresariales",
  },
  {
    icon: "bi-mortarboard",
    title: "Capacitación Documental",
    description:
      "Plataforma líder en Ciencias de la Documentación. Cursos virtuales diseñados para facilitar y automatizar la formación de tus empleados.",
    features: ["Cursos virtuales", "Certificaciones", "Flexibilidad total"],
    link: "/capacitacion",
  },
  {
    icon: "bi-cloud-arrow-up",
    title: "Respaldo de Información",
    description:
      "Solución completa de respaldos en la nube para PCs, laptops, servidores y dispositivos móviles con tecnología Synology.",
    features: ["Backup automático", "Recuperación rápida", "Seguridad total"],
    link: "/respaldo-servidores",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-5" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <span 
            className="section-badge"
            style={{ background: 'rgba(13, 74, 140, 0.1)', color: 'var(--bs-primary)' }}
          >
            Nuestros Servicios
          </span>
          <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'var(--bs-heading-font)' }}>
            Incrementa tu productividad con{" "}
            <span className="text-gradient">nuestras soluciones</span>
          </h2>
          <p className="lead text-muted">
            Soluciones integrales, sofisticadas y escalables que mejoran la forma 
            en que las empresas procesan, archivan y comparten documentos.
          </p>
        </div>

        {/* Services grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6">
              <div className="card card-service h-100 p-4">
                <div className="card-body">
                  {/* Icon */}
                  <div className="icon-box mb-4">
                    <i className={`bi ${service.icon} fs-4`}></i>
                  </div>

                  {/* Content */}
                  <h3 className="h4 fw-bold mb-3" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                    {service.title}
                  </h3>
                  <p className="text-muted mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="list-unstyled mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-center gap-2 mb-2">
                        <span 
                          className="rounded-circle"
                          style={{ 
                            width: '6px', 
                            height: '6px', 
                            background: 'var(--bs-secondary)',
                            flexShrink: 0
                          }}
                        ></span>
                        <span className="small">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  {service.link ? (
                    <Link 
                      to={service.link}
                      className="text-decoration-none d-inline-flex align-items-center gap-1"
                      style={{ color: 'var(--bs-primary)' }}
                    >
                      Conocer más
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  ) : (
                    <a 
                      href="#contacto" 
                      className="text-decoration-none d-inline-flex align-items-center gap-1"
                      style={{ color: 'var(--bs-primary)' }}
                    >
                      Conocer más
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
