import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, Shield, Target } from "lucide-react";

export const Recommendations = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
              Recommandations Stratégiques
            </h2>
            <p className="text-xl text-muted-foreground">
              Construire un numérique public de confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/20 hover:border-primary transition-all bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Lightbulb className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-accent">Transparence Radicale</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Créez une section "Transparence de la donnée" sur votre site web. Expliquez simplement 
                  quels types de données sont utilisées, pour quels services, et avec quelles garanties. 
                  C'est l'attente n°1 de 94% des citoyens.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent transition-all bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Users className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-accent">Contrôle Humain</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Communiquez explicitement que les décisions finales impliquant les citoyens restent 
                  supervisées par des agents publics. Le "dernier mot" doit rester humain. 
                  86% des Français l'exigent.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary transition-all bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Shield className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl text-accent">Preuves de Confiance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Rendez publics vos outils de gouvernance : charte éthique sur l'IA, principes de 
                  vos "clauses data". Démontrez un engagement concret pour un numérique responsable 
                  et souverain.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-all bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-accent">Innovation Acceptable</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Priorisez les projets à forte adhésion citoyenne : efficacité énergétique des bâtiments, 
                  gestion des déchets, optimisation des services de santé. Des domaines où les Français 
                  perçoivent une utilité directe.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-primary/5 rounded-xl p-8 border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-accent mb-4 flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              L'Atout de la Proximité
            </h3>
            <p className="text-foreground text-lg leading-relaxed">
              Les collectivités locales disposent d'un capital confiance unique : <strong className="text-primary">64%</strong> des 
              Français leur font confiance, bien plus qu'à l'État (45%) ou aux acteurs privés. 
              C'est une opportunité historique de bâtir un service public numérique qui soit un modèle 
              d'efficacité, de transparence et de respect des valeurs démocratiques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
