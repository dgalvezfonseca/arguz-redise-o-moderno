import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const UsbEncriptados = () => {
  return (
    <>
      <Helmet>
        <title>USB Encriptados | Almacenamiento Seguro | Arguz Digitalización</title>
        <meta name="description" content="Dispositivos de almacenamiento portátiles encriptados con hardware de última generación. Distribuidores oficiales de iStorage® en México. Seguridad total para sus datos." />
      </Helmet>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', boxShadow: '0 2px 20px rgba(0,0,0,0.08)' }}>
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <div 
              className="rounded-3 d-flex align-items-center justify-content-center"
              style={{ width: '45px', height: '45px', background: 'linear-gradient(135deg, #0D4A8C 0%, #1E6ECF 100%)' }}
            >
              <i className="bi bi-file-earmark-text-fill text-white fs-5"></i>
            </div>
            <div>
              <span className="fw-bold" style={{ color: '#0D4A8C', fontSize: '1.25rem', letterSpacing: '-0.5px' }}>Arguz</span>
              <span className="text-muted d-block" style={{ fontSize: '0.7rem', marginTop: '-4px' }}>Digitalización</span>
            </div>
          </Link>
          
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-3">
              <li className="nav-item"><Link className="nav-link px-3" to="/#servicios">Servicios</Link></li>
              <li className="nav-item"><Link className="nav-link px-3" to="/#beneficios">Beneficios</Link></li>
              <li className="nav-item"><Link className="nav-link px-3" to="/#nosotros">Nosotros</Link></li>
              <li className="nav-item"><Link className="nav-link px-3" to="/#contacto">Contacto</Link></li>
            </ul>
            <a href="#contacto-usb" className="btn px-4 py-2" style={{ background: 'linear-gradient(135deg, #0D4A8C 0%, #1E6ECF 100%)', color: 'white', borderRadius: '50px', fontWeight: '600' }}>
              Cotizar Ahora
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden" style={{ paddingTop: '140px', paddingBottom: '100px', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                  <li className="breadcrumb-item active">USB Encriptados</li>
                </ol>
              </nav>
              <span className="badge mb-3" style={{ background: 'rgba(13, 74, 140, 0.1)', color: '#0D4A8C', padding: '8px 16px', borderRadius: '50px', fontWeight: '600' }}>
                <i className="bi bi-shield-lock me-2"></i>
                Almacenamiento Seguro
              </span>
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#0D4A8C', lineHeight: '1.2' }}>
                Protección Total de Datos: <span style={{ background: 'linear-gradient(135deg, #F7931E, #FFB347)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Almacenamiento Encriptado Portátil</span>
              </h1>
              <p className="lead text-muted mb-4" style={{ fontSize: '1.2rem' }}>
                Dispositivos de almacenamiento de datos portátiles encriptados con hardware de última generación, ultra seguros, fáciles de usar con una solución de encriptación que le brindan total seguridad y control sobre sus datos.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#contacto-usb" className="btn btn-lg px-5 py-3" style={{ background: 'linear-gradient(135deg, #0D4A8C 0%, #1E6ECF 100%)', color: 'white', borderRadius: '50px', fontWeight: '600' }}>
                  Solicitar Cotización
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
                <a href="https://arguz.net/categoria-producto/istorage/" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-outline-primary px-5 py-3" style={{ borderRadius: '50px', borderWidth: '2px' }}>
                  <i className="bi bi-shop me-2"></i>
                  Tienda Online
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="position-relative">
                <div 
                  className="rounded-4 p-5 d-flex align-items-center justify-content-center"
                  style={{ 
                    background: 'linear-gradient(135deg, #0D4A8C 0%, #1E6ECF 100%)', 
                    minHeight: '400px',
                    boxShadow: '0 25px 50px rgba(13, 74, 140, 0.3)'
                  }}
                >
                  <div className="text-center text-white">
                    <i className="bi bi-usb-drive display-1 mb-4"></i>
                    <h3 className="fw-bold mb-3">iStorage®</h3>
                    <p className="mb-0 opacity-75">Distribuidor Oficial en México</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-5" style={{ background: 'white' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge mb-3" style={{ background: 'rgba(247, 147, 30, 0.1)', color: '#F7931E', padding: '8px 16px', borderRadius: '50px', fontWeight: '600' }}>
              Distribuidor Autorizado
            </span>
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#0D4A8C' }}>
              Socios Oficiales de <span style={{ color: '#F7931E' }}>iStorage®</span>
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              iStorage® es una marca británica con más de 10 años en el mercado, pionera en el desarrollo de innovadores dispositivos de almacenamiento de datos portátiles ultra seguros.
            </p>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <div className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', background: 'rgba(13, 74, 140, 0.1)' }}>
                    <i className="bi bi-award-fill fs-2" style={{ color: '#0D4A8C' }}></i>
                  </div>
                  <h5 className="fw-bold">Certificación Gobierno</h5>
                  <p className="text-muted mb-0">Certificaciones con los estándares más altos de seguridad gubernamental</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <div className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', background: 'rgba(247, 147, 30, 0.1)' }}>
                    <i className="bi bi-shield-check fs-2" style={{ color: '#F7931E' }}></i>
                  </div>
                  <h5 className="fw-bold">Aprobado por OTAN</h5>
                  <p className="text-muted mb-0">Cumple con los requisitos de seguridad de la OTAN</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <div className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', background: 'rgba(40, 167, 69, 0.1)' }}>
                    <i className="bi bi-trophy-fill fs-2" style={{ color: '#28a745' }}></i>
                  </div>
                  <h5 className="fw-bold">Premios Internacionales</h5>
                  <p className="text-muted mb-0">Ganador de prestigiosos premios de la industria tecnológica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5" style={{ background: '#f8fafc', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge mb-3" style={{ background: 'rgba(13, 74, 140, 0.1)', color: '#0D4A8C', padding: '8px 16px', borderRadius: '50px', fontWeight: '600' }}>
              Características
            </span>
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#0D4A8C' }}>
              La Solución Perfecta para <span style={{ color: '#F7931E' }}>Almacenamiento Seguro</span>
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Para cualquier persona que desee almacenar, compartir y administrar datos de forma segura.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ borderRadius: '16px' }}>
                <div className="card-body">
                  <div className="rounded-3 mb-4 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #0D4A8C 0%, #1E6ECF 100%)' }}>
                    <i className="bi bi-lock-fill text-white fs-4"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Encriptación por Hardware</h5>
                  <p className="text-muted mb-0">Cifrado a nivel de hardware que protege sus datos sin depender del software del sistema operativo.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ borderRadius: '16px' }}>
                <div className="card-body">
                  <div className="rounded-3 mb-4 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #F7931E 0%, #FFB347 100%)' }}>
                    <i className="bi bi-cloud-check-fill text-white fs-4"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Administración Remota</h5>
                  <p className="text-muted mb-0">Gestione y controle sus dispositivos de forma remota con nuestra solución de almacenamiento BT cifrada.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ borderRadius: '16px' }}>
                <div className="card-body">
                  <div className="rounded-3 mb-4 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #28a745 0%, #5cb85c 100%)' }}>
                    <i className="bi bi-hand-thumbs-up-fill text-white fs-4"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Fácil de Usar</h5>
                  <p className="text-muted mb-0">Diseño intuitivo que permite a cualquier usuario proteger sus datos sin complicaciones técnicas.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ borderRadius: '16px' }}>
                <div className="card-body">
                  <div className="rounded-3 mb-4 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #6f42c1 0%, #9f7ae3 100%)' }}>
                    <i className="bi bi-phone-fill text-white fs-4"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Portabilidad Total</h5>
                  <p className="text-muted mb-0">Dispositivos compactos y portátiles que puede llevar a cualquier lugar con total seguridad.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ borderRadius: '16px' }}>
                <div className="card-body">
                  <div className="rounded-3 mb-4 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #dc3545 0%, #ff6b7a 100%)' }}>
                    <i className="bi bi-shield-lock-fill text-white fs-4"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Seguridad Militar</h5>
                  <p className="text-muted mb-0">Cumple con estándares de seguridad militar y certificaciones gubernamentales internacionales.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ borderRadius: '16px' }}>
                <div className="card-body">
                  <div className="rounded-3 mb-4 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #17a2b8 0%, #5bc0de 100%)' }}>
                    <i className="bi bi-building-fill text-white fs-4"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Solución Empresarial</h5>
                  <p className="text-muted mb-0">Ideal para empresas que necesitan proteger información confidencial y cumplir con normativas de seguridad.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #0D4A8C 0%, #1E6ECF 100%)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container text-center">
          <h2 className="display-5 fw-bold text-white mb-4">
            ¿Listo para Proteger sus Datos?
          </h2>
          <p className="lead text-white opacity-75 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            Visite nuestra tienda en línea y descubra la gama completa de dispositivos iStorage® disponibles.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a 
              href="https://arguz.net/categoria-producto/istorage/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-lg px-5 py-3" 
              style={{ background: '#F7931E', color: 'white', borderRadius: '50px', fontWeight: '600' }}
            >
              <i className="bi bi-shop me-2"></i>
              Visitar Tienda Online
            </a>
            <a href="#contacto-usb" className="btn btn-lg btn-outline-light px-5 py-3" style={{ borderRadius: '50px', borderWidth: '2px' }}>
              Solicitar Información
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto-usb" className="py-5" style={{ background: 'white', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <span className="badge mb-3" style={{ background: 'rgba(13, 74, 140, 0.1)', color: '#0D4A8C', padding: '8px 16px', borderRadius: '50px', fontWeight: '600' }}>
                  Contacto
                </span>
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#0D4A8C' }}>
                  Solicite su <span style={{ color: '#F7931E' }}>Cotización</span>
                </h2>
                <p className="lead text-muted">
                  Cuéntenos sobre sus necesidades de almacenamiento seguro y le ayudaremos a encontrar la mejor solución.
                </p>
              </div>

              <div className="card border-0 shadow-lg p-4 p-md-5" style={{ borderRadius: '20px' }}>
                <form>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Nombre Completo</label>
                      <input type="text" className="form-control form-control-lg" placeholder="Tu nombre" style={{ borderRadius: '10px' }} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Empresa</label>
                      <input type="text" className="form-control form-control-lg" placeholder="Nombre de tu empresa" style={{ borderRadius: '10px' }} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Email</label>
                      <input type="email" className="form-control form-control-lg" placeholder="tu@email.com" style={{ borderRadius: '10px' }} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Teléfono</label>
                      <input type="tel" className="form-control form-control-lg" placeholder="+52 55 1234 5678" style={{ borderRadius: '10px' }} />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">Tipo de Dispositivo de Interés</label>
                      <select className="form-select form-select-lg" style={{ borderRadius: '10px' }}>
                        <option>Seleccione una opción</option>
                        <option>USB Encriptado</option>
                        <option>Disco Duro Externo Encriptado</option>
                        <option>Solución Empresarial Completa</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">Mensaje</label>
                      <textarea className="form-control" rows={4} placeholder="Cuéntenos sobre sus necesidades de almacenamiento seguro..." style={{ borderRadius: '10px' }}></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-lg w-100 py-3" style={{ background: 'linear-gradient(135deg, #0D4A8C 0%, #1E6ECF 100%)', color: 'white', borderRadius: '50px', fontWeight: '600' }}>
                        Enviar Solicitud
                        <i className="bi bi-send-fill ms-2"></i>
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
      <footer style={{ background: '#0a3a6e', color: 'white', paddingTop: '60px', paddingBottom: '30px' }}>
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-lg-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center"
                  style={{ width: '45px', height: '45px', background: 'linear-gradient(135deg, #F7931E, #FFB347)' }}
                >
                  <i className="bi bi-file-earmark-text-fill text-white fs-5"></i>
                </div>
                <div>
                  <span className="fw-bold text-white" style={{ fontSize: '1.25rem' }}>Arguz</span>
                  <span className="d-block" style={{ fontSize: '0.7rem', opacity: 0.7 }}>Digitalización</span>
                </div>
              </div>
              <p style={{ opacity: 0.7 }}>
                Su socio confiable para soluciones totales en procesos documentales y seguridad de datos.
              </p>
            </div>
            <div className="col-lg-2 col-md-4">
              <h6 className="fw-bold mb-3">Servicios</h6>
              <ul className="list-unstyled" style={{ opacity: 0.7 }}>
                <li className="mb-2"><Link to="/digitalizacion-de-documentos" className="text-white text-decoration-none">Digitalización</Link></li>
                <li className="mb-2"><Link to="/gestion-documental" className="text-white text-decoration-none">Gestión Documental</Link></li>
                <li className="mb-2"><Link to="/automatizacion-procesos-empresariales" className="text-white text-decoration-none">Automatización</Link></li>
                <li className="mb-2"><Link to="/usb-encriptados" className="text-white text-decoration-none">USB Encriptados</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4">
              <h6 className="fw-bold mb-3">Navegación</h6>
              <ul className="list-unstyled" style={{ opacity: 0.7 }}>
                <li className="mb-2"><Link to="/" className="text-white text-decoration-none">Inicio</Link></li>
                <li className="mb-2"><Link to="/#servicios" className="text-white text-decoration-none">Servicios</Link></li>
                <li className="mb-2"><Link to="/#nosotros" className="text-white text-decoration-none">Nosotros</Link></li>
                <li className="mb-2"><Link to="/#contacto" className="text-white text-decoration-none">Contacto</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <h6 className="fw-bold mb-3">Contacto</h6>
              <ul className="list-unstyled" style={{ opacity: 0.7 }}>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt-fill"></i>
                  Av. Miguel Hidalgo 24-B, Cuautitlán Izcalli, México
                </li>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <i className="bi bi-telephone-fill"></i>
                  +52 (55) 3004-2777
                </li>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <i className="bi bi-envelope-fill"></i>
                  contacto@arguz.com
                </li>
              </ul>
            </div>
          </div>
          <hr style={{ opacity: 0.2 }} />
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-3">
            <p className="mb-0" style={{ opacity: 0.7 }}>© 2024 Arguz Digitalización. Todos los derechos reservados.</p>
            <div className="d-flex gap-3 mt-3 mt-md-0">
              <a href="#" className="text-white"><i className="bi bi-facebook fs-5"></i></a>
              <a href="#" className="text-white"><i className="bi bi-linkedin fs-5"></i></a>
              <a href="#" className="text-white"><i className="bi bi-instagram fs-5"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default UsbEncriptados;
