import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const processSteps = [
  {
    icon: "bi-inbox",
    title: "Recepción y clasificación",
    description: "Organizamos los documentos para su procesamiento eficiente."
  },
  {
    icon: "bi-brush",
    title: "Preparación y limpieza",
    description: "Eliminamos elementos innecesarios para un escaneo óptimo."
  },
  {
    icon: "bi-display",
    title: "Escaneo de alta calidad",
    description: "Utilizamos escáneres Kodak Alaris de alto volumen para obtener imágenes nítidas."
  },
  {
    icon: "bi-tags",
    title: "Indexación",
    description: "Capturamos metadatos esenciales para facilitar la búsqueda y recuperación de documentos."
  },
  {
    icon: "bi-database-check",
    title: "Almacenamiento digital",
    description: "Integramos la información en su sistema de gestión documental, utilizando unidades NAS o SAN."
  }
];

const benefits = [
  {
    icon: "bi-shield-check",
    stat: "95%",
    title: "Reducción de pérdidas",
    description: "Minimiza el riesgo de extravío de documentos."
  },
  {
    icon: "bi-box-seam",
    stat: "88%",
    title: "Optimización del espacio",
    description: "Disminuye la necesidad de almacenamiento físico."
  },
  {
    icon: "bi-lightning-charge",
    stat: "Segundos",
    title: "Acceso inmediato",
    description: "Encuentra y consulta archivos digitales al instante."
  },
  {
    icon: "bi-lock",
    stat: "100%",
    title: "Seguridad reforzada",
    description: "Protege la información contra daños y pérdidas."
  },
  {
    icon: "bi-search",
    stat: "Inteligente",
    title: "Búsqueda avanzada",
    description: "Facilita la recuperación de datos con herramientas avanzadas."
  },
  {
    icon: "bi-people",
    stat: "Remoto",
    title: "Colaboración",
    description: "Permite compartir documentos de forma electrónica."
  }
];

const Digitalizacion = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="hero-section position-relative d-flex align-items-center" 
        id="inicio"
        style={{ paddingTop: '120px', paddingBottom: '80px' }}
      >
        <div className="hero-pattern"></div>
        <div className="hero-blob-1"></div>
        <div className="hero-blob-2"></div>
        
        <div className="container position-relative" style={{ zIndex: 10 }}>
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center text-white">
              <span 
                className="section-badge mb-4 d-inline-block"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.15)', 
                  color: 'white',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <i className="bi bi-display me-2"></i>
                Servicio Especializado
              </span>
              
              <h1 
                className="display-4 fw-bold mb-4 animate-slide-up"
                style={{ fontFamily: 'var(--bs-heading-font)' }}
              >
                Digitalización de Documentos
              </h1>
              
              <p className="lead mb-4 animate-slide-up-1" style={{ opacity: 0.9 }}>
                Transformamos información física en formatos digitales con tecnología avanzada, 
                cumpliendo los más altos estándares internacionales para optimizar tu gestión documental.
              </p>
              
              <div className="d-flex flex-wrap gap-3 justify-content-center animate-slide-up-2">
                <a href="#contacto" className="btn btn-secondary btn-lg">
                  <i className="bi bi-chat-dots me-2"></i>
                  Solicitar cotización
                </a>
                <a href="#proceso" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-arrow-down me-2"></i>
                  Ver proceso
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className="position-absolute bottom-0 start-0 end-0" 
          style={{ 
            height: '150px', 
            background: 'linear-gradient(to top, white, transparent)' 
          }}
        ></div>
      </section>

      {/* Experience Section */}
      <section className="py-5" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="section-badge" style={{ background: 'rgba(13, 74, 140, 0.1)', color: 'var(--bs-primary)' }}>
                +25 años de experiencia
              </span>
              <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                Experiencia y <span className="text-gradient">soluciones avanzadas</span>
              </h2>
              <p className="lead text-muted mb-4">
                Con más de 25 años de trayectoria, <strong>Arguz Digitalización</strong> ofrece 
                soluciones innovadoras para convertir archivos físicos en documentos digitales.
              </p>
              <p className="text-muted mb-4">
                Optimizamos la gestión documental y garantizamos la protección de la información, 
                proporcionando tecnologías eficientes que mejoran la accesibilidad a los datos y 
                se adaptan a las necesidades específicas de cada cliente.
              </p>
              <div className="d-flex gap-4">
                <div className="stat-box text-center">
                  <div className="stat-number">25+</div>
                  <div className="small text-muted">Años</div>
                </div>
                <div className="stat-box text-center">
                  <div className="stat-number">1M+</div>
                  <div className="small text-muted">Documentos</div>
                </div>
                <div className="stat-box text-center">
                  <div className="stat-number">500+</div>
                  <div className="small text-muted">Clientes</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card card-service p-4 text-center">
                <div className="card-body">
                  <div 
                    className="rounded-3 mb-4 d-flex align-items-center justify-content-center mx-auto"
                    style={{ 
                      width: '120px', 
                      height: '120px', 
                      background: 'linear-gradient(135deg, var(--bs-primary), var(--bs-secondary))' 
                    }}
                  >
                    <i className="bi bi-cpu fs-1 text-white"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Tecnología de vanguardia</h4>
                  <p className="text-muted mb-4">
                    Utilizamos escáneres <strong>Kodak Alaris</strong> de alto volumen, 
                    garantizando imágenes nítidas y procesamiento eficiente de grandes cantidades de documentos.
                  </p>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">OCR Avanzado</span>
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">Alta Resolución</span>
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">ISO 9001</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-5" style={{ background: '#f8f9fa', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <span className="section-badge" style={{ background: 'rgba(13, 74, 140, 0.1)', color: 'var(--bs-primary)' }}>
              Metodología probada
            </span>
            <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'var(--bs-heading-font)' }}>
              Nuestro <span className="text-gradient">proceso de digitalización</span>
            </h2>
            <p className="lead text-muted">
              Un flujo de trabajo optimizado que garantiza la máxima calidad y eficiencia en cada etapa.
            </p>
          </div>
          
          <div className="row g-4">
            {processSteps.map((step, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card card-service h-100 p-4">
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{ 
                          width: '50px', 
                          height: '50px', 
                          background: 'var(--bs-primary)', 
                          color: 'white',
                          flexShrink: 0
                        }}
                      >
                        <span className="fw-bold">{index + 1}</span>
                      </div>
                      <div className="icon-box">
                        <i className={`bi ${step.icon} fs-5`}></i>
                      </div>
                    </div>
                    <h5 className="fw-bold mb-2">{step.title}</h5>
                    <p className="text-muted mb-0 small">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <span className="section-badge" style={{ background: 'rgba(13, 74, 140, 0.1)', color: 'var(--bs-primary)' }}>
              Ventajas competitivas
            </span>
            <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'var(--bs-heading-font)' }}>
              Beneficios de <span className="text-gradient">digitalizar tus documentos</span>
            </h2>
            <p className="lead text-muted">
              La digitalización no solo reduce el uso de papel, sino que también mejora 
              la accesibilidad, preservación y protección de la información.
            </p>
          </div>
          
          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card card-benefit h-100 p-4 text-center">
                  <div className="card-body">
                    <div className="icon-box mx-auto mb-3">
                      <i className={`bi ${benefit.icon} fs-4`}></i>
                    </div>
                    <div 
                      className="fw-bold mb-2"
                      style={{ fontSize: '2rem', color: 'var(--bs-primary)' }}
                    >
                      {benefit.stat}
                    </div>
                    <h5 className="fw-bold mb-2">{benefit.title}</h5>
                    <p className="text-muted mb-0 small">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="contacto"
        className="py-5" 
        style={{ 
          background: 'linear-gradient(135deg, var(--bs-primary) 0%, #1a5a9e 100%)',
          paddingTop: '5rem',
          paddingBottom: '5rem'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 text-white text-center text-lg-start mb-4 mb-lg-0">
              <h2 className="display-6 fw-bold mb-3" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                ¿Listo para digitalizar tus documentos?
              </h2>
              <p className="lead mb-0" style={{ opacity: 0.9 }}>
                Contáctanos hoy mismo y descubre cómo podemos ayudarte a optimizar tu archivo documental.
              </p>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <a href="/#contacto" className="btn btn-secondary btn-lg me-2 mb-2">
                <i className="bi bi-chat-dots me-2"></i>
                Contactar ahora
              </a>
              <a href="tel:+525530042777" className="btn btn-outline-light btn-lg mb-2">
                <i className="bi bi-telephone me-2"></i>
                Llamar
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Digitalizacion;
