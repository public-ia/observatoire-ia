import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo-public-ia.png";
import { edition } from "@/data";
import { scrollToTarget } from "@/lib/motion";

export const Hero = () => {
  const scrollToContent = () => {
    const cible = document.getElementById("chiffres-cles");
    if (cible) scrollToTarget(cible, -80);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-accent text-accent-foreground overflow-hidden">
      {/* Halo lumineux et grille */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="aurora aurora-a" />
        <div className="aurora aurora-b" />
        <div className="grid-pattern absolute inset-0" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <img 
            src={logo} 
            alt="Public IA" 
            className="h-28 md:h-40 mx-auto mb-10 drop-shadow-2xl transition-transform hover:scale-105 duration-300" 
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            Les collectivités, la donnée et l'IA
          </h1>
          <p className="text-xl md:text-3xl mb-6 text-accent-foreground/90 font-light leading-relaxed max-w-3xl mx-auto">
            {edition.barometre.nom} : une année de consolidation, et ce qu'en pensent les Français
          </p>
          <p className="text-base md:text-lg text-accent-foreground/80 max-w-3xl mx-auto">
            {edition.barometre.numero} : 382 collectivités interrogées,{" "}
            <br />
            complétées par une enquête{" "}Ipsos bva auprès de 1 000 Français
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
