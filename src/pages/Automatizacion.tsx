import { Link } from "react-router-dom";

const features = [
  {
    icon: "bi-mouse",
    title: "Automatización sin código",
    description: "Crea flujos de trabajo personalizados de manera rápida y sencilla con nuestra interfaz intuitiva de arrastrar y soltar, sin necesidad de programación."
  },
  {
    icon: "bi-plug",
    title: "Integraciones poderosas",
    description: "Conecta Laserfiche con tus aplicaciones empresariales clave, como Salesforce, SAP, Adobe Sign y más."
  },
  {
    icon: "bi-check2-circle",
    title: "Aprobaciones aceleradas",
    description: "Gestiona contratos y políticas internas automatizando el enrutamiento de documentos y recopilando aprobaciones y firmas de manera eficiente."
  },
  {
    icon: "bi-collection",
    title: "Plantillas preconstruidas",
    description: "Accede a cientos de flujos de trabajo predefinidos que te permiten implementar soluciones rápidamente."
  },
  {
    icon: "bi-robot",
    title: "Inteligencia artificial integrada",
    description: "Automatiza decisiones complejas utilizando herramientas basadas en IA y machine learning que analizan datos y detectan patrones."
  },
  {
    icon: "bi-shield-lock",
    title: "Cumplimiento normativo y seguridad",
    description: "Mantente en cumplimiento con normativas como la Ley General de Archivos, con controles de acceso granulares y cifrado de datos."
  }
];

const departments = [
  {
    icon: "bi-calculator",
    title: "Contabilidad y Finanzas",
    description: "Optimiza el procesamiento de facturas y mejora la visibilidad de tus procesos de cuentas por pagar."
  },
  {
    icon: "bi-headset",
    title: "Servicio al Cliente",
    description: "Permite que tus representantes se enfoquen en brindar un servicio excepcional, automatizando tareas administrativas."
  },
  {
    icon: "bi-people",
    title: "Recursos Humanos",
    description: "Automatiza tareas relacionadas con el personal y realiza un seguimiento de las decisiones a lo largo del ciclo de vida del empleado."
  },
  {
    icon: "bi-gear",
    title: "Sistemas",
    description: "Moderniza tu infraestructura de TI con una plataforma ECM flexible y escalable."
  }
];

const Automatizacion = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: 'linear-gradient(135deg, #0d4a8c 0%, #1a5fb4 100%)' }}>
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.2)' }}
            >
              <i className="bi bi-folder-fill text-white"></i>
            </div>
            <span className="fw-bold">Arguz</span>
          </Link>
          <Link to="/" className="btn btn-outline-light btn-sm">
            <i className="bi bi-arrow-left me-1"></i> Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="py-5" 
        style={{ 
          background: 'linear-gradient(135deg, #0d4a8c 0%, #1a5fb4 50%, #3584e4 100%)',
          paddingTop: '8rem',
          paddingBottom: '4rem'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center text-white">
              <span 
                className="badge mb-3 px-3 py-2"
                style={{ background: 'rgba(255,255,255,0.2)', fontSize: '0.875rem' }}
              >
                <i className="bi bi-gear-wide-connected me-1"></i> Laserfiche Partner
              </span>
              <h1 className="display-4 fw-bold mb-4">
                Automatización de Procesos Empresariales
              </h1>
              <p className="lead mb-4" style={{ opacity: 0.9 }}>
                Plataforma líder en automatización de procesos empresariales y gestión documental. 
                Optimiza tus operaciones, reduce costos y mejora la eficiencia en todos los niveles de tu organización.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a href="#contacto" className="btn btn-light btn-lg px-4">
                  <i className="bi bi-calendar-check me-2"></i>
                  Solicitar demo
                </a>
                <a href="#caracteristicas" className="btn btn-outline-light btn-lg px-4">
                  Conocer más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-5" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span 
              className="badge mb-3 px-3 py-2"
              style={{ background: 'rgba(13, 74, 140, 0.1)', color: '#0d4a8c', fontSize: '0.875rem' }}
            >
              Características
            </span>
            <h2 className="display-5 fw-bold mb-3">
              Automatización de procesos <span style={{ color: '#0d4a8c' }}>de forma ágil</span>
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Transforma la manera en que tu empresa opera con herramientas intuitivas y potentes
            </p>
          </div>

          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm p-4" style={{ borderRadius: '16px' }}>
                  <div className="card-body">
                    <div 
                      className="d-flex align-items-center justify-content-center mb-4"
                      style={{ 
                        width: '60px', 
                        height: '60px', 
                        background: 'linear-gradient(135deg, #0d4a8c 0%, #1a5fb4 100%)',
                        borderRadius: '12px'
                      }}
                    >
                      <i className={`bi ${feature.icon} text-white fs-4`}></i>
                    </div>
                    <h4 className="fw-bold mb-3">{feature.title}</h4>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </div>
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
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          paddingTop: '4rem',
          paddingBottom: '4rem'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-6 fw-bold mb-4">
                Comienza tu automatización de procesos empresariales ahora mismo
              </h2>
              <p className="lead text-muted mb-4">
                Laserfiche es el software líder mundial en administración de archivos, gestión documental 
                y de contenido empresarial, automatización de procesos de negocios y análisis potenciadores de productividad.
              </p>
              <a 
                href="#contacto" 
                className="btn btn-lg px-5 py-3 text-white"
                style={{ background: 'linear-gradient(135deg, #0d4a8c 0%, #1a5fb4 100%)' }}
              >
                <i className="bi bi-rocket-takeoff me-2"></i>
                Comenzar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-5" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span 
              className="badge mb-3 px-3 py-2"
              style={{ background: 'rgba(13, 74, 140, 0.1)', color: '#0d4a8c', fontSize: '0.875rem' }}
            >
              Departamentos
            </span>
            <h2 className="display-5 fw-bold mb-3">
              Soluciones adaptadas a <span style={{ color: '#0d4a8c' }}>cada departamento</span>
            </h2>
          </div>

          <div className="row g-4">
            {departments.map((dept, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div 
                  className="card h-100 border-0 text-center p-4" 
                  style={{ 
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #0d4a8c 0%, #1a5fb4 100%)'
                  }}
                >
                  <div className="card-body text-white">
                    <div 
                      className="d-flex align-items-center justify-content-center mx-auto mb-4"
                      style={{ 
                        width: '70px', 
                        height: '70px', 
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '50%'
                      }}
                    >
                      <i className={`bi ${dept.icon} fs-2`}></i>
                    </div>
                    <h5 className="fw-bold mb-3">{dept.title}</h5>
                    <p className="small mb-0" style={{ opacity: 0.9 }}>{dept.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-5" style={{ background: '#f8f9fa', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg" style={{ borderRadius: '20px' }}>
                <div className="card-body p-5">
                  <div className="text-center mb-4">
                    <h2 className="fw-bold mb-2">Solicita tu demo</h2>
                    <p className="text-muted">Descubre cómo Laserfiche puede transformar tu empresa</p>
                  </div>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control form-control-lg" placeholder="Tu nombre" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Empresa</label>
                        <input type="text" className="form-control form-control-lg" placeholder="Tu empresa" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control form-control-lg" placeholder="tu@email.com" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Teléfono</label>
                        <input type="tel" className="form-control form-control-lg" placeholder="+52 55 1234 5678" />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Departamento de interés</label>
                        <select className="form-select form-select-lg">
                          <option>Selecciona un departamento</option>
                          <option>Contabilidad y Finanzas</option>
                          <option>Servicio al Cliente</option>
                          <option>Recursos Humanos</option>
                          <option>Sistemas / TI</option>
                          <option>Otro</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label">Mensaje</label>
                        <textarea className="form-control" rows={4} placeholder="Cuéntanos sobre tus necesidades de automatización..."></textarea>
                      </div>
                      <div className="col-12">
                        <button 
                          type="submit" 
                          className="btn btn-lg w-100 text-white py-3"
                          style={{ background: 'linear-gradient(135deg, #0d4a8c 0%, #1a5fb4 100%)' }}
                        >
                          <i className="bi bi-send me-2"></i>
                          Solicitar demo gratuita
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-white text-center" style={{ background: '#0d4a8c' }}>
        <div className="container">
          <p className="mb-2">
            <i className="bi bi-geo-alt me-1"></i> Av. Miguel Hidalgo 24-B, Lago de Gpe, Cuautitlan Izcalli, Estado de México
          </p>
          <p className="mb-2">
            <i className="bi bi-telephone me-1"></i> +52 (55) 3004-2777
          </p>
          <p className="mb-0 small" style={{ opacity: 0.8 }}>
            © 2024 Arguz. Distribuidor autorizado de Laserfiche en México.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Automatizacion;
