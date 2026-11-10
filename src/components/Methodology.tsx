import { Card, CardContent } from "@/components/ui/card";
import { Users, CalendarDays, ClipboardList, Ruler } from "lucide-react";
import { edition } from "@/data";

const blocs = [
  { icone: Users, titre: "Échantillon", texte: edition.echantillon },
  { icone: CalendarDays, titre: "Terrain", texte: `${edition.terrain}. ${edition.mode}.` },
  { icone: ClipboardList, titre: "Méthode", texte: `${edition.quotas}. ${edition.ponderation}.` },
  { icone: Ruler, titre: "Marge d'erreur", texte: edition.marge },
];

export const Methodology = () => (
  <div className="py-20 bg-background">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-5 tracking-tight">Méthodologie</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            « {edition.titreEtude} », enquête {edition.institut} pour l'{edition.commanditaire}, {edition.date.toLowerCase()}.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blocs.map(({ icone: Icone, titre, texte }) => (
            <Card key={titre} className="border-2 border-border bg-card">
              <CardContent className="p-6 flex gap-5">
                <div className="p-3 bg-primary/10 rounded-xl h-fit">
                  <Icone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">{titre}</h3>
                  <p className="text-foreground leading-relaxed">{texte}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground">
          Les écarts d'un ou deux points d'une année sur l'autre sont dans la marge d'erreur : ce sont les tendances
          sur plusieurs éditions qui sont significatives. {edition.editionsPrecedentes}
        </p>
      </div>
    </div>
  </div>
);
