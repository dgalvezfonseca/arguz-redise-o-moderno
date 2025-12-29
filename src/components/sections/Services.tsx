import { FileSearch, Monitor, Database, CloudCog, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: FileSearch,
    title: "Consultoría Archivística",
    description:
      "Ofrecemos herramientas y asesoría técnica para la correcta administración de sus archivos, incluyendo orientación legal sobre qué documentos pueden digitalizarse.",
    features: ["Diagnóstico de archivos", "Asesoría legal", "Plan de gestión"],
  },
  {
    icon: Monitor,
    title: "Digitalización de Documentos",
    description:
      "Transformamos sus documentos físicos a formatos digitales con tecnología de vanguardia, utilizando escáneres Kodak Alaris de alto volumen.",
    features: ["Escaneo de alta calidad", "OCR avanzado", "Indexación inteligente"],
  },
  {
    icon: Database,
    title: "Gestión Documental",
    description:
      "Sistema integral para organizar documentos físicos y digitales, con flujos de trabajo automatizados y acceso desde cualquier ubicación.",
    features: ["Laserfiche", "Acceso remoto", "Automatización"],
  },
  {
    icon: CloudCog,
    title: "Respaldo de Información",
    description:
      "Solución completa de respaldos en la nube para PCs, laptops, servidores y dispositivos móviles con tecnología Synology.",
    features: ["Backup automático", "Recuperación rápida", "Seguridad total"],
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Incrementa tu productividad con{" "}
            <span className="text-gradient">nuestras soluciones</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones integrales, sofisticadas y escalables que mejoran la forma 
            en que las empresas procesan, archivan y comparten documentos.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary-light">
                Conocer más
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
