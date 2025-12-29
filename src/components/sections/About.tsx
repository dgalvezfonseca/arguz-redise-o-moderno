import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Más de 25 años de trayectoria en digitalización",
  "Cumplimos estándares internacionales de calidad",
  "Asesoría técnica y legal incluida",
  "Normas ISO-27000 en seguridad de documentos",
  "Equipos Kodak Alaris de alto volumen",
  "Soluciones adaptadas a cada cliente",
];

export const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
              Sobre Nosotros
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Su socio confiable en{" "}
              <span className="text-gradient">soluciones documentales</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              En Arguz Digitalización, nuestras soluciones van más allá de la transformación 
              de documentos en papel a formato digital. Incluimos asesoría técnica y legal 
              para determinar qué se puede y qué no se debe digitalizar.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Con la finalidad de generar ahorros sustanciales para nuestros clientes, 
              llevamos una gestión documental apegada a los principios de austeridad, 
              honestidad y eficiencia.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg">
              Conocer más sobre Arguz
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-card rounded-3xl p-8 shadow-lg border border-border">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  2025: Año de nuevas transformaciones
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Arguz ofrece soluciones integrales, sofisticadas y escalables que mejoran 
                  enormemente la forma en que las empresas procesan, archivan y comparten 
                  los documentos digitales y de papel.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted rounded-xl">
                    <div className="font-display text-3xl font-bold text-primary mb-1">25+</div>
                    <div className="text-xs text-muted-foreground">Años</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-xl">
                    <div className="font-display text-3xl font-bold text-primary mb-1">30+</div>
                    <div className="text-xs text-muted-foreground">Equipos</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-xl">
                    <div className="font-display text-3xl font-bold text-primary mb-1">200</div>
                    <div className="text-xs text-muted-foreground">Hojas/min</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-glow">
              <div className="font-display text-lg font-bold">ISO-27000</div>
              <div className="text-xs text-primary-foreground/80">Certificación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
