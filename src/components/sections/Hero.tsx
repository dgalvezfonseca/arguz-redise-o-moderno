import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Shield, Clock, Server } from "lucide-react";

const features = [
  { icon: FileText, text: "Consultoría Archivística" },
  { icon: Server, text: "Digitalización de Documentos" },
  { icon: Shield, text: "Respaldo de Información" },
  { icon: Clock, text: "Gestión Documental" },
];

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-slide-up">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse" />
              Empresa mexicana con más de 25 años de experiencia
            </span>
          </div>

          {/* Main heading */}
          <h1 className="animate-slide-up-delay-1 font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Gestión Documental,{" "}
            <span className="text-secondary">Archivística</span> y{" "}
            Digitalización de Documentos
          </h1>

          {/* Subheading */}
          <p className="animate-slide-up-delay-2 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8">
            Especialistas en servicios de digitalización de documentos en grandes volúmenes. 
            Transformamos su archivo físico en información digital segura y accesible.
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up-delay-3 flex flex-wrap gap-4 mb-12">
            <Button variant="hero" size="xl">
              Solicitar cotización
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Conocer servicios
            </Button>
          </div>

          {/* Features */}
          <div className="animate-slide-up-delay-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10"
              >
                <feature.icon className="w-5 h-5 text-secondary" />
                <span className="text-sm text-primary-foreground font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
