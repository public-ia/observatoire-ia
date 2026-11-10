import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { recommandations } from "@/data";
import { ICONES } from "./icones";

export const Recommendations = () => (
  <div className="py-20 bg-card">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-bold text-accent mb-5 tracking-tight">Recommandations</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Six leviers pour une IA territoriale maîtrisée — lecture proposée par Public IA à partir des deux enquêtes
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
            pour la gestion des données, contre 44 % pour l'État. Mais ce capital s'érode (69 % en 2022) et seules
            35 % des collectivités déclarent un portage politique de l'IA. Le nouveau mandat municipal est le moment
            d'en faire un sujet d'élus autant que de services.
          </p>
        </div>
      </div>
    </div>
  </div>
);
