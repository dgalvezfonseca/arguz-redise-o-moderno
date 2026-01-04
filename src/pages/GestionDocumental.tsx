import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const features = [
  {
    icon: "bi-piggy-bank",
    title: "Ahorre en Costos",
    description: "Sólo pague por lo que use. Contamos con distintas opciones de almacenamiento para cubrir todas sus necesidades."
  },
  {
    icon: "bi-shield-lock",
    title: "Protección de Datos",
    description: "Garantizamos la seguridad de su información conforme a las Normas ISO-27000, relativas a la gestión y seguridad de documentos electrónicos."
  },
  {
    icon: "bi-diagram-3",
    title: "Optimización de Trabajo",
    description: "Flujos de trabajo para una rápida autorización, ejecución y revisión de tareas."
  },
  {
    icon: "bi-clock-history",
    title: "Gestión de Versiones",
    description: "Los registros de versiones pueden ser verificados dentro y fuera del sistema, en cualquier momento y desde una ubicación remota."
  },
  {
    icon: "bi-search",
    title: "Búsqueda de OCR",
    description: "Poderoso motor de OCR para localizar de forma rápida y sencilla los documentos a través de un sistema de búsqueda de palabras."
  },
  {
    icon: "bi-cpu",
    title: "Tecnología de Vanguardia",
    description: "El mejor rendimiento, durabilidad y tiempo de respuesta para cualquier empresa sin importar su tamaño."
  }
];

const laserFicheFeatures = [
  {
    icon: "bi-lightning-charge",
    title: "Acceso Rápido",
    description: "Acceda de forma inmediata a la documentación desde varias ubicaciones."
  },
  {
    icon: "bi-people",
    title: "Trabajo en equipo",
    description: "Colaborar con otros usuarios en un espacio de trabajo compartido."
  },
  {
    icon: "bi-upload",
    title: "Drag & Drop",
    description: "Fácil carga de documentos. Tan simple como arrastrar y soltar documentos desde su PC."
  },
  {
    icon: "bi-clipboard-check",
    title: "Auditoría Electrónica",
    description: "Una bitácora de auditoría electrónica completa para rastrear todas las acciones."
  }
];

const highlights = [
  { icon: "bi-cloud", text: "Servicio en la Nube" },
  { icon: "bi-image", text: "Integración de Imágenes" },
  { icon: "bi-gear-wide-connected", text: "Automatización de Procesos" }
];

const GestionDocumental = () => {
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
                <i className="bi bi-database me-2"></i>
                Software Laserfiche
              </span>
              
              <h1 
                className="display-4 fw-bold mb-4 animate-slide-up"
                style={{ fontFamily: 'var(--bs-heading-font)' }}
              >
                Gestión Documental
              </h1>
              
              <p className="lead mb-4 animate-slide-up-1" style={{ opacity: 0.9 }}>
                Ofrecemos un servicio de vanguardia en la administración de archivos y gestión documental, 
                respaldado por más de 10 años de experiencia y una profunda comprensión de las estrategias digitales más efectivas.
              </p>
              
              <div className="d-flex flex-wrap gap-3 justify-content-center animate-slide-up-2">
                <a href="#contacto" className="btn btn-secondary btn-lg">
                  <i className="bi bi-chat-dots me-2"></i>
                  Solicitar demo
                </a>
                <a href="#caracteristicas" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-arrow-down me-2"></i>
                  Ver características
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

      {/* Intro Section */}
      <section className="py-5" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="section-badge" style={{ background: 'rgba(13, 74, 140, 0.1)', color: 'var(--bs-primary)' }}>
                Solución integral
              </span>
              <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                Cómo funciona la <span className="text-gradient">gestión documental</span>
              </h2>
              <p className="lead text-muted mb-4">
                La gestión documental va más allá de simplemente almacenar archivos digitales. 
                En Arguz, implementamos técnicas y normas de última generación para la administración de información.
              </p>
              <p className="text-muted mb-4">
                Reducimos el tiempo de búsqueda de datos y mejoramos el acceso a la información, 
                optimizando costos y proporcionando resultados excepcionales para empresas y gobiernos. 
                Nuestro sólido sistema de gestión documental garantiza una eficiencia incomparable.
              </p>
              <a href="#contacto" className="btn btn-primary btn-lg">
                <i className="bi bi-send me-2"></i>
                Cotizar ahora
              </a>
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
                    <i className="bi bi-folder2-open fs-1 text-white"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Rendimiento excepcional</h4>
                  <p className="text-muted mb-4">
                    El mejor rendimiento, durabilidad y tiempo de respuesta para cualquier empresa 
                    sin importar su tamaño.
                  </p>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">ISO 27000</span>
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">Acceso Remoto</span>
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">Seguridad Total</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-5" style={{ background: '#f8f9fa', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <span className="section-badge" style={{ background: 'rgba(13, 74, 140, 0.1)', color: 'var(--bs-primary)' }}>
              Características principales
            </span>
            <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'var(--bs-heading-font)' }}>
              Beneficios de nuestra <span className="text-gradient">gestión documental</span>
            </h2>
            <p className="lead text-muted">
              Soluciones completas para optimizar la administración de documentos en su organización.
            </p>
          </div>
          
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card card-benefit h-100 p-4">
                  <div className="card-body">
                    <div className="icon-box mb-3">
                      <i className={`bi ${feature.icon} fs-4`}></i>
                    </div>
                    <h5 className="fw-bold mb-2">{feature.title}</h5>
                    <p className="text-muted mb-0 small">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laserfiche Section */}
      <section className="py-5" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="text-center mb-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge" style={{ background: 'rgba(13, 74, 140, 0.1)', color: 'var(--bs-primary)' }}>
              Software líder mundial
            </span>
            <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'var(--bs-heading-font)' }}>
              Administra eficientemente con <span className="text-gradient">Laserfiche</span>
            </h2>
            <p className="lead text-muted">
              Laserfiche es el software líder mundial en administración de archivos, gestión documental 
              y de contenido empresarial, automatización de procesos de negocios y análisis potenciadores de productividad.
            </p>
          </div>
          
          <div className="row g-4 mb-5">
            {laserFicheFeatures.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card card-service h-100 p-4 text-center">
                  <div className="card-body">
                    <div className="icon-box mx-auto mb-3">
                      <i className={`bi ${feature.icon} fs-4`}></i>
                    </div>
                    <h5 className="fw-bold mb-2">{feature.title}</h5>
                    <p className="text-muted mb-0 small">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Search Feature */}
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="card card-service p-4">
                <div className="card-body">
                  <h4 className="fw-bold mb-3">
                    <i className="bi bi-search text-primary me-2"></i>
                    Búsqueda Avanzada
                  </h4>
                  <p className="text-muted mb-4">
                    Localice al instante sus documentos a través de un sistema de búsqueda avanzada. 
                    Accesible desde computadoras portátiles, navegadores web y dispositivos móviles.
                  </p>
                  <p className="text-muted mb-0">
                    Trabajar con archivos y documentos electrónicos en un repositorio fácil de navegar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="feature-pill d-flex align-items-center gap-2 px-4 py-3"
                    style={{
                      background: 'white',
                      borderRadius: '50rem',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      border: '1px solid rgba(0,0,0,0.05)'
                    }}
                  >
                    <i className={`bi ${highlight.icon} text-primary`}></i>
                    <span className="fw-medium">{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
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
                ¿Listo para optimizar tu gestión documental?
              </h2>
              <p className="lead mb-0" style={{ opacity: 0.9 }}>
                Solicita tu demo de Laserfiche y descubre cómo podemos transformar la manera en que administras tus documentos.
              </p>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <a href="/#contacto" className="btn btn-secondary btn-lg me-2 mb-2">
                <i className="bi bi-chat-dots me-2"></i>
                Solicitar demo
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

export default GestionDocumental;
