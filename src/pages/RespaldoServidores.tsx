import { Link } from "react-router-dom";

const RespaldoServidores = () => {
  return (
    <div className="min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: 'rgba(8, 51, 94, 0.95)', backdropFilter: 'blur(10px)' }}>
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <span className="fw-bold fs-5" style={{ fontFamily: 'var(--bs-heading-font)' }}>
              <span style={{ color: 'var(--bs-secondary)' }}>Arguz</span> Digitalización
            </span>
          </Link>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-3 gap-1">
              <li className="nav-item">
                <Link className="nav-link px-3" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="/#servicios">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="/#nosotros">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="/#contacto">Contacto</a>
              </li>
            </ul>
            <a href="/#contacto" className="btn btn-secondary">Cotizar ahora</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden d-flex align-items-center" style={{ minHeight: '70vh', paddingTop: '100px' }}>
        <div className="hero-pattern position-absolute top-0 start-0 w-100 h-100"></div>
        <div className="hero-blob-1"></div>
        <div className="hero-blob-2"></div>
        
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center text-white">
              <span className="badge bg-white bg-opacity-25 text-white px-3 py-2 rounded-pill mb-4">
                <i className="bi bi-cloud-arrow-up me-2"></i>
                Soluciones de Respaldo
              </span>
              <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                Respaldo de <span style={{ color: 'var(--bs-secondary)' }}>Servidores</span>
              </h1>
              <p className="lead mb-4 opacity-90" style={{ fontSize: '1.25rem' }}>
                Garantizamos que, en caso de un desastre, podrá recuperar un servidor y 
                <strong> reanudar operaciones en menos de 15 minutos.</strong>
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <a href="#soluciones" className="btn btn-secondary btn-lg">
                  <i className="bi bi-shield-check me-2"></i>
                  Ver soluciones
                </a>
                <a href="#contacto" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-chat-dots me-2"></i>
                  Cotizar ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-5" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="section-badge" style={{ background: 'rgba(13, 74, 140, 0.1)', color: 'var(--bs-primary)' }}>
                Protección Total
              </span>
              <h2 className="display-6 fw-bold mb-4" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                Una solución universal para respaldo de servidores
              </h2>
              <p className="lead text-muted mb-4">
                <strong>Mantenga siempre protegida la información vital para su negocio.</strong>
              </p>
              <p className="text-muted mb-4">
                Todas las empresas necesitan de un plan de respaldo y recuperación ante desastres 
                para proteger su centro de datos físico y virtual. Los negocios grandes, medianos 
                y pequeños protegen sus ambientes físicos y virtuales usando <strong>Active Backup 
                for Business de Synology</strong>, ahorrando de esta manera grandes cantidades de recursos de TI.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="card card-benefit h-100 p-3 text-center">
                    <div className="icon-box mx-auto mb-3">
                      <i className="bi bi-pc-display fs-4"></i>
                    </div>
                    <h6 className="fw-bold">PCs y Macs</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card card-benefit h-100 p-3 text-center">
                    <div className="icon-box mx-auto mb-3">
                      <i className="bi bi-server fs-4"></i>
                    </div>
                    <h6 className="fw-bold">Servidores Físicos</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card card-benefit h-100 p-3 text-center">
                    <div className="icon-box mx-auto mb-3">
                      <i className="bi bi-folder2-open fs-4"></i>
                    </div>
                    <h6 className="fw-bold">Servidores de Archivos</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card card-benefit h-100 p-3 text-center">
                    <div className="icon-box mx-auto mb-3">
                      <i className="bi bi-hdd-stack fs-4"></i>
                    </div>
                    <h6 className="fw-bold">Máquinas Virtuales</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="soluciones" className="py-5">
        <div className="container">
          <div className="text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <span className="section-badge" style={{ background: 'rgba(13, 74, 140, 0.1)', color: 'var(--bs-primary)' }}>
              Nuestras Soluciones
            </span>
            <h2 className="display-6 fw-bold mb-3" style={{ fontFamily: 'var(--bs-heading-font)' }}>
              Protección <span className="text-gradient">completa</span> para cada escenario
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card card-service h-100 p-4">
                <div className="card-body">
                  <div className="icon-box mb-4">
                    <i className="bi bi-pc-display fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                    Copias de seguridad para PC y Mac
                  </h4>
                  <p className="text-muted mb-3">
                    Realice copias de seguridad y administre PC con Windows y Mac desde una sola consola.
                  </p>
                  <p className="text-muted small">
                    <strong>Copia de seguridad y recuperación sin sistema operativo:</strong> Proteja los endpoints 
                    en caso de tiempo de inactividad con copias de seguridad a nivel del sistema y recuperación 
                    completa para todas las aplicaciones, configuraciones y datos.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card card-service h-100 p-4">
                <div className="card-body">
                  <div className="icon-box mb-4">
                    <i className="bi bi-server fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                    Protección completa para sus servidores
                  </h4>
                  <p className="text-muted mb-3">
                    Realice copias de seguridad de sus datos y servicios en servidores físicos con Windows o Linux.
                  </p>
                  <p className="text-muted small">
                    Con <strong>Instant Restore</strong>, puede restaurar sus servidores en VMware vSphere™, 
                    Microsoft Hyper-V y Synology Virtual Machine Manager (VMM) en caso de interrupciones inesperadas.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card card-service h-100 p-4">
                <div className="card-body">
                  <div className="icon-box mb-4">
                    <i className="bi bi-folder2-open fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                    Consolide la protección de su servidor de archivos
                  </h4>
                  <p className="text-muted mb-3">
                    Es compatible con Nutanix Files, NetApp ONTAP y Windows VSS.
                  </p>
                  <p className="text-muted small">
                    Soporta protocolos de archivos como SMB y rsync para realizar backups seguros y fiables 
                    en servidores de archivos de producción.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card card-service h-100 p-4">
                <div className="card-body">
                  <div className="icon-box mb-4">
                    <i className="bi bi-hdd-stack fs-4"></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                    Copia de seguridad para VMware y Hyper-V
                  </h4>
                  <p className="text-muted mb-3">
                    Copia de seguridad ilimitada de VMware vSphere™ y máquinas virtuales Microsoft Hyper-V.
                  </p>
                  <p className="text-muted small">
                    Con potentes tecnologías de reducción de espacio de almacenamiento para optimizar 
                    sus recursos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="section-badge" style={{ background: 'rgba(13, 74, 140, 0.1)', color: 'var(--bs-primary)' }}>
                Características
              </span>
              <h2 className="display-6 fw-bold mb-4" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                Copia de seguridad <span className="text-gradient">integral</span>
              </h2>
              <p className="text-muted mb-4">
                Solución integral de respaldo y recuperación ante desastres diseñada para proteger 
                los datos en diversos entornos de TI que incluyen ambientes virtuales.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center gap-3 mb-3">
                  <div className="icon-box" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-plug fs-6"></i>
                  </div>
                  <span>Fácil de conectarse</span>
                </li>
                <li className="d-flex align-items-center gap-3 mb-3">
                  <div className="icon-box" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-globe fs-6"></i>
                  </div>
                  <span>Accesibilidad vía remota</span>
                </li>
                <li className="d-flex align-items-center gap-3 mb-3">
                  <div className="icon-box" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-currency-dollar fs-6"></i>
                  </div>
                  <span>Precios accesibles</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="stat-box">
                    <div className="stat-number">89%</div>
                    <div className="small text-muted">Hardware</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-box">
                    <div className="stat-number">88%</div>
                    <div className="small text-muted">End Point</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-box">
                    <div className="stat-number">98%</div>
                    <div className="small text-muted">Software</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-box">
                    <div className="stat-number">+500</div>
                    <div className="small text-muted">Usuarios</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ background: 'var(--bs-primary)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 text-white">
              <h2 className="display-6 fw-bold mb-3" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                Tu información, lo más importante
              </h2>
              <p className="lead opacity-90 mb-0">
                Las empresas de hoy dependen totalmente de sus datos. No importa el tamaño de la organización, 
                sus datos son vulnerables a varias amenazas y desastres. <strong>Contamos con una amplia 
                variedad de unidades de almacenamiento en existencia.</strong>
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <a href="#contacto" className="btn btn-secondary btn-lg">
                <i className="bi bi-chat-dots me-2"></i>
                Cotiza ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-5" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <span className="section-badge" style={{ background: 'rgba(13, 74, 140, 0.1)', color: 'var(--bs-primary)' }}>
                Contáctanos
              </span>
              <h2 className="display-6 fw-bold mb-4" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                ¿Listo para proteger tu información?
              </h2>
              <p className="text-muted mb-4">
                Verificación automática de respaldo para asegurar la recuperación de los datos.
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-box" style={{ width: '50px', height: '50px' }}>
                    <i className="bi bi-geo-alt fs-5"></i>
                  </div>
                  <div>
                    <div className="fw-bold">Ubicación</div>
                    <div className="text-muted small">Av. Miguel Hidalgo 24-B, Lago de Gpe, Cuautitlán Izcalli, Estado de México</div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-box" style={{ width: '50px', height: '50px' }}>
                    <i className="bi bi-telephone fs-5"></i>
                  </div>
                  <div>
                    <div className="fw-bold">Teléfono</div>
                    <div className="text-muted small">+52 55 3004-2777</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-card p-4 p-lg-5">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-medium">Nombre</label>
                      <input type="text" className="form-control" placeholder="Tu nombre" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-medium">Email</label>
                      <input type="email" className="form-control" placeholder="tu@email.com" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-medium">Teléfono</label>
                      <input type="tel" className="form-control" placeholder="+52 55 1234 5678" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-medium">Empresa</label>
                      <input type="text" className="form-control" placeholder="Tu empresa" />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-medium">Mensaje</label>
                      <textarea className="form-control" rows={4} placeholder="¿Cómo podemos ayudarte?"></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100">
                        <i className="bi bi-send me-2"></i>
                        Enviar mensaje
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-dark py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="fw-bold fs-5" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                  <span style={{ color: 'var(--bs-secondary)' }}>Arguz</span> Digitalización
                </span>
              </div>
              <p className="text-white-50 small">
                Soluciones integrales en gestión documental, digitalización y automatización de procesos empresariales.
              </p>
            </div>
            <div className="col-lg-2">
              <h6 className="text-white fw-bold mb-3">Servicios</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/digitalizacion-de-documentos" className="text-white-50 text-decoration-none small">Digitalización</Link></li>
                <li className="mb-2"><Link to="/gestion-documental" className="text-white-50 text-decoration-none small">Gestión Documental</Link></li>
                <li className="mb-2"><Link to="/automatizacion-procesos-empresariales" className="text-white-50 text-decoration-none small">Automatización</Link></li>
                <li className="mb-2"><Link to="/capacitacion" className="text-white-50 text-decoration-none small">Capacitación</Link></li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h6 className="text-white fw-bold mb-3">Navegación</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/" className="text-white-50 text-decoration-none small">Inicio</Link></li>
                <li className="mb-2"><a href="/#servicios" className="text-white-50 text-decoration-none small">Servicios</a></li>
                <li className="mb-2"><a href="/#nosotros" className="text-white-50 text-decoration-none small">Nosotros</a></li>
                <li className="mb-2"><a href="/#contacto" className="text-white-50 text-decoration-none small">Contacto</a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h6 className="text-white fw-bold mb-3">Contacto</h6>
              <ul className="list-unstyled text-white-50 small">
                <li className="mb-2"><i className="bi bi-geo-alt me-2"></i>Av. Miguel Hidalgo 24-B, Cuautitlán Izcalli, Edo. de México</li>
                <li className="mb-2"><i className="bi bi-telephone me-2"></i>+52 55 3004-2777</li>
              </ul>
            </div>
          </div>
          <hr className="my-4 border-white-50" />
          <div className="text-center text-white-50 small">
            © {new Date().getFullYear()} Arguz Digitalización S.A. de C.V. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RespaldoServidores;
