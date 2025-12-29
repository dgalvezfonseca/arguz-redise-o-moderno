import { useState, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section 
      id="contacto" 
      className="py-5"
      style={{ paddingTop: '6rem', paddingBottom: '6rem', background: '#f1f5f9' }}
    >
      <div className="container">
        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-lg-6">
            <span 
              className="section-badge"
              style={{ background: 'rgba(13, 74, 140, 0.1)', color: 'var(--bs-primary)' }}
            >
              Contacto
            </span>
            <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: 'var(--bs-heading-font)' }}>
              ¿Listo para{" "}
              <span className="text-gradient">transformar</span>{" "}
              tu gestión documental?
            </h2>
            <p className="lead text-muted mb-5">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a optimizar 
              tu archivo documental. Nuestro equipo está listo para asesorarte.
            </p>

            {/* Contact details */}
            <div className="d-flex flex-column gap-4">
              <div className="d-flex gap-3">
                <div className="icon-box flex-shrink-0">
                  <i className="bi bi-geo-alt fs-5"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-1">Dirección</h4>
                  <p className="text-muted mb-0">
                    Av. Miguel Hidalgo 24-B, Lago de Gpe,<br />
                    Cuautitlán Izcalli, Estado de México, México
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3">
                <div className="icon-box flex-shrink-0">
                  <i className="bi bi-telephone fs-5"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-1">Teléfono</h4>
                  <a 
                    href="tel:+525530042777" 
                    className="text-muted text-decoration-none"
                  >
                    +52 (55) 3004-2777
                  </a>
                </div>
              </div>

              <div className="d-flex gap-3">
                <div className="icon-box flex-shrink-0">
                  <i className="bi bi-envelope fs-5"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-1">Email</h4>
                  <a 
                    href="mailto:contacto@arguz.com" 
                    className="text-muted text-decoration-none"
                  >
                    contacto@arguz.com
                  </a>
                </div>
              </div>

              <div className="d-flex gap-3">
                <div className="icon-box flex-shrink-0">
                  <i className="bi bi-clock fs-5"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-1">Horario</h4>
                  <p className="text-muted mb-0">
                    Lunes a Viernes: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="contact-card">
              <h3 className="h4 fw-bold mb-4" style={{ fontFamily: 'var(--bs-heading-font)' }}>
                Solicita tu cotización
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-sm-6">
                    <label htmlFor="name" className="form-label small fw-medium">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="company" className="form-label small fw-medium">
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="company"
                      name="company"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-sm-6">
                    <label htmlFor="email" className="form-label small fw-medium">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="phone" className="form-label small fw-medium">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      id="phone"
                      name="phone"
                      placeholder="+52 (55) 1234-5678"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="service" className="form-label small fw-medium">
                    Servicio de interés
                  </label>
                  <select
                    className="form-select form-select-lg"
                    id="service"
                    name="service"
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="digitalizacion">Digitalización de Documentos</option>
                    <option value="consultoria">Consultoría Archivística</option>
                    <option value="gestion">Gestión Documental</option>
                    <option value="respaldo">Respaldo de Información</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label small fw-medium">
                    Mensaje
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <i className="bi bi-send"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
