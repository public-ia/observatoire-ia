import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, ScrollText, Users, Flag, GraduationCap, Leaf, Shield, type LucideIcon } from "lucide-react";
import { recommandations, type Recommandation } from "@/data";

const ICONES: Record<Recommandation["icone"], LucideIcon> = {
  transparence: Megaphone,
  charte: ScrollText,
  humain: Users,
  souverainete: Flag,
  formation: GraduationCap,
  sobriete: Leaf,
};

export const Recommendations = () => (
  <div className="py-20 bg-card">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-bold text-accent mb-5 tracking-tight">Recommandations</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Six leviers pour une IA publique de confiance — lecture proposée par Public IA à partir des résultats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommandations.map((r) => {
            const Icone = ICONES[r.icone];
            return (
              <Card key={r.titre} className="border-2 border-primary/20 hover:border-primary transition-colors duration-300 bg-gradient-to-br from-card to-primary/5">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icone className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-accent leading-snug">{r.titre}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{r.texte}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 bg-primary/5 rounded-xl p-8 border-2 border-primary/20">
          <h3 className="text-2xl font-bold text-accent mb-4 flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            L'atout de la proximité
          </h3>
          <p className="text-foreground text-lg leading-relaxed">
            <strong className="text-accent">64 %</strong> des Français font confiance à leur commune ou intercommunalité
            pour la gestion des données, contre 44 % pour l'État et 11 % pour les réseaux sociaux. Ce capital s'érode
            toutefois (69 % en 2022) : il se préserve par la transparence, le contrôle humain et des choix
            technologiques assumés.
          </p>
        </div>
      </div>
    </div>
  </div>
);
