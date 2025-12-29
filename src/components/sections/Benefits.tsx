import { Users, TrendingUp, ShieldCheck, Clock, Search, Share2 } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Personal Calificado",
    description: "Todo nuestro personal está capacitado para brindarle el mejor apoyo dentro de su proyecto.",
    stat: "25+",
    statLabel: "años de experiencia",
  },
  {
    icon: TrendingUp,
    title: "Aumento de Productividad",
    description: "Creamos soluciones escalables para eficientar la búsqueda y gestión de documentos.",
    stat: "88%",
    statLabel: "menos espacio físico",
  },
  {
    icon: ShieldCheck,
    title: "Programa Anti-Desastre",
    description: "Tecnología y equipos de alto desempeño para garantizar la seguridad de su información.",
    stat: "30+",
    statLabel: "escáneres de alto volumen",
  },
  {
    icon: Clock,
    title: "Acceso Inmediato",
    description: "Encuentre y consulte archivos digitales en segundos desde cualquier ubicación.",
    stat: "95%",
    statLabel: "reducción de pérdidas",
  },
  {
    icon: Search,
    title: "Búsqueda Inteligente",
    description: "Motor OCR avanzado para localizar documentos mediante búsqueda de palabras.",
    stat: "200",
    statLabel: "hojas por minuto",
  },
  {
    icon: Share2,
    title: "Colaboración Remota",
    description: "Comparta documentos electrónicamente y agilice el trabajo en equipo.",
    stat: "100%",
    statLabel: "acceso remoto",
  },
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-semibold mb-4">
            Beneficios Arguz
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Eficienta tu proceso de{" "}
            <span className="text-gradient">consulta documental</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Reducción de tiempo en la solicitud de documentos y ahorro en la manutención del documento físico.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Stat */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {benefit.stat}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {benefit.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
