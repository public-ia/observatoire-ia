import { StatCard } from "./StatCard";
import { TrendingUp, Users, Building2, Sparkles, ShieldCheck, Database } from "lucide-react";

export const KeyFindings = () => {
  return (
    <section id="key-findings" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-accent mb-6 tracking-tight">
            Chiffres Clés
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
            Les données marquantes du baromètre 2025 sur l'IA dans les collectivités territoriales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <StatCard
            value="77%"
            label="Projets IA engagés"
            icon={Sparkles}
            description="des collectivités ont engagé ou prévoient un projet IA"
          />
          <StatCard
            value="74%"
            label="Collectivités data"
            icon={Building2}
            description="des collectivités (+3500 hab) ont au moins un projet data"
          />
          <StatCard
            value="64%"
            label="Confiance locale"
            icon={Users}
            description="des Français font confiance à leur commune"
          />
          <StatCard
            value="84%"
            label="IA Générative"
            icon={TrendingUp}
            description="des projets IA utilisent l'IA générative"
          />
          <StatCard
            value="85%"
            label="Inquiétude cyber"
            icon={ShieldCheck}
            description="des citoyens inquiets des cyberattaques"
          />
          <StatCard
            value="94%"
            label="Besoin d'information"
            icon={Database}
            description="jugent une information claire prioritaire/importante"
          />
        </div>

      </div>
    </section>
  );
};
