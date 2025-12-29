import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Digitalización de Documentos",
  "Consultoría Archivística",
  "Gestión Documental",
  "Respaldo de Información",
  "Digitalización para PyMes",
];

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Beneficios", href: "#beneficios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-display text-2xl font-bold">ARGUZ</span>
              <p className="text-xs tracking-widest text-primary-foreground/70 mt-1">
                QUE VIVA LA INFORMACIÓN
              </p>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Su socio confiable para soluciones totales en procesos documentales. 
              Más de 25 años transformando la gestión de información.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#servicios" 
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Av. Miguel Hidalgo 24-B, Lago de Gpe,<br />
                  Cuautitlán Izcalli, EdoMex, México
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a 
                  href="tel:+525530042777" 
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  +52 (55) 3004-2777
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a 
                  href="mailto:contacto@arguz.com" 
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  contacto@arguz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Arguz Digitalización S.A. de C.V. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
              Aviso de Privacidad
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
