import { StatCard } from "./StatCard";
import { TrendingUp, Users, Building2, Sparkles, ShieldCheck, Database } from "lucide-react";

export const KeyFindings = () => {
  return (
    <section id="key-findings" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Chiffres Clés
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Les données marquantes du baromètre 2025 sur l'IA dans les collectivités territoriales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <StatCard
            value="XX%"
            label="Collectivités engagées"
            icon={Building2}
            description="des collectivités ont initié au moins un projet IA"
          />
          <StatCard
            value="XX%"
            label="Perception positive"
            icon={TrendingUp}
            description="des Français favorables à l'IA dans le service public"
          />
          <StatCard
            value="XX"
            label="Projets en cours"
            icon={Sparkles}
            description="nombre moyen de projets IA par collectivité"
          />
          <StatCard
            value="XX%"
            label="Priorité données"
            icon={Database}
            description="considèrent la gestion des données comme prioritaire"
          />
          <StatCard
            value="XX%"
            label="Préoccupation sécurité"
            icon={ShieldCheck}
            description="des citoyens préoccupés par la protection des données"
          />
          <StatCard
            value="XX%"
            label="Adoption en hausse"
            icon={Users}
            description="d'augmentation des projets IA vs 2024"
          />
        </div>

        <div className="bg-accent/5 rounded-xl p-8 border-2 border-accent/10">
          <h3 className="text-2xl font-bold text-accent mb-4">
            📊 Note importante
          </h3>
          <p className="text-foreground">
            Les statistiques complètes seront intégrées après extraction des données des documents fournis. 
            Cette structure présente l'organisation visuelle finale du site.
          </p>
        </div>
      </div>
    </section>
  );
};
