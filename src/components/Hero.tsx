import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo-public-ia.png";
import { edition } from "@/data";

export const Hero = () => {
  const scrollToContent = () => {
    document.getElementById("key-findings")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-accent via-accent to-[hsl(200,60%,30%)] text-accent-foreground overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,hsl(200_89%_20%)_0%,transparent_50%),radial-gradient(circle_at_100%_100%,hsl(28_92%_56%/0.15)_0%,transparent_50%)]" />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.1)_49%,rgba(255,255,255,0.1)_51%,transparent_52%)] bg-[length:30px_30px]" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <img 
            src={logo} 
            alt="Public IA" 
            className="h-28 md:h-40 mx-auto mb-10 drop-shadow-2xl transition-transform hover:scale-105 duration-300" 
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            Les Français, les données et l'IA publique
          </h1>
          <p className="text-xl md:text-3xl mb-6 text-accent-foreground/90 font-light leading-relaxed max-w-3xl mx-auto">
            Édition {edition.annee} : ce que les citoyens attendent des acteurs publics
          </p>
          <p className="text-base md:text-lg text-accent-foreground/80 max-w-3xl mx-auto">
            D'après l'enquête {edition.institut} pour l'{edition.commanditaire}, {edition.date.toLowerCase()} —{" "}
            1 000 Français interrogés
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              variant="default"
              onClick={scrollToContent}
              className="bg-primary hover:bg-primary/90 text-accent font-bold shadow-elegant hover:shadow-elegant-lg transition-all duration-300 text-base md:text-lg px-8 py-6 hover:scale-105 hover:-translate-y-1"
            >
              Découvrir les résultats
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
