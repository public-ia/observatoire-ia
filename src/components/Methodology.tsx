import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users } from "lucide-react";
import { edition } from "@/data";

const { barometre, ipsos } = edition;

const etudes = [
  {
    icone: Building2,
    role: "Source principale",
    nom: `${barometre.nom} (${barometre.numero})`,
    titre: barometre.titre,
    lignes: [
      ["Échantillon", barometre.echantillon],
      ["Terrain", barometre.terrain],
      ["Composition", barometre.composition],
      ["Lecture", barometre.lecture],
      ["Réalisation", barometre.pilotage],
    ],
  },
  {
    icone: Users,
    role: "Regard des Français",
    nom: ipsos.nom,
    titre: ipsos.titre,
    lignes: [
      ["Échantillon", ipsos.echantillon],
      ["Terrain", ipsos.terrain],
      ["Méthode", ipsos.methode],
      ["Marge d'erreur", ipsos.marge],
    ],
  },
];

export const Methodology = () => (
  <div className="py-20 bg-background">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-5 tracking-tight">Méthodologie</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Deux enquêtes de l'Observatoire Data Publica, menées en 2026 : l'une auprès des collectivités, l'autre
            auprès des Français
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {etudes.map(({ icone: Icone, role, nom, titre, lignes }) => (
            <Card key={nom} className="reveal border-2 border-border bg-card">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl h-fit">
                    <Icone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-primary">{role}</p>
                    <h3 className="text-xl font-bold text-accent">{nom}</h3>
                  </div>
                </div>
                <p className="text-foreground italic mb-5">« {titre} »</p>
                <dl className="space-y-3">
                  {lignes.map(([terme, texte]) => (
                    <div key={terme}>
                      <dt className="font-bold text-accent">{terme}</dt>
                      <dd className="text-foreground leading-relaxed">{texte}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </div>
);
