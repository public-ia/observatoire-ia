import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Shield, Info, Eye } from "lucide-react";

export const CitizenPerception = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-accent mb-6 tracking-tight">
              La Perception des Citoyens
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Attentes, inquiétudes et exigences des Français face au numérique public
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="group border-2 border-destructive/20 bg-gradient-to-br from-card to-destructive/5 hover:border-destructive transition-all duration-500 hover:shadow-elegant">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-destructive/10 rounded-xl group-hover:bg-destructive/20 transition-colors">
                    <AlertCircle className="h-8 w-8 text-destructive" />
                  </div>
                  <CardTitle className="text-3xl text-accent">Inquiétudes Majeures</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-destructive/5 rounded-xl hover:bg-destructive/10 transition-colors">
                  <span className="text-foreground font-medium text-lg">Risque de dépendance à l'IA</span>
                  <Badge variant="destructive" className="text-base px-4 py-1">85%</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-destructive/5 rounded-xl hover:bg-destructive/10 transition-colors">
                  <span className="text-foreground font-medium text-lg">Perte de contrôle humain</span>
                  <Badge variant="destructive" className="text-base px-4 py-1">79%</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-destructive/5 rounded-xl hover:bg-destructive/10 transition-colors">
                  <span className="text-foreground font-medium text-lg">Sentiment négatif envers l'IA</span>
                  <Badge variant="destructive" className="text-base px-4 py-1">51%</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:border-primary transition-all duration-500 hover:shadow-elegant">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors group-hover:shadow-glow">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl text-accent">Confiance des Français</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
                  <span className="text-foreground font-medium text-lg">Pharmaciens</span>
                  <Badge className="bg-primary text-primary-foreground text-base px-4 py-1">78%</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
                  <span className="text-foreground font-medium text-lg">Commune/Intercommunalité</span>
                  <Badge className="bg-primary text-primary-foreground text-base px-4 py-1">64%</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
                  <span className="text-foreground font-medium text-lg">L'État</span>
                  <Badge className="bg-secondary text-secondary-foreground text-base px-4 py-1">45%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="group border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10 hover:border-accent transition-all duration-500 hover:shadow-elegant">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <Info className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-3xl text-accent">Le Déficit d'Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center p-8 bg-background rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-6xl font-bold text-destructive mb-3">31%</div>
                  <p className="text-foreground font-semibold text-lg mb-2">Se sentent bien informés sur l'usage de leurs données</p>
                  <p className="text-sm text-muted-foreground">En baisse de 10 points depuis 2022</p>
                </div>
                <div className="text-center p-8 bg-background rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-6xl font-bold text-destructive mb-3">14%</div>
                  <p className="text-foreground font-semibold text-lg mb-2">Se sentent bien informés sur l'usage de l'IA</p>
                  <p className="text-sm text-muted-foreground">Un manque criant de transparence</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 mt-8 hover:border-primary transition-all duration-500 hover:shadow-elegant">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors group-hover:shadow-glow">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl text-accent">Exigences Prioritaires</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-5 bg-primary/10 rounded-xl border-2 border-primary/30 hover:bg-primary/15 transition-all duration-300">
                  <span className="text-foreground font-semibold text-lg">Information claire et pédagogique</span>
                  <Badge className="bg-primary text-primary-foreground text-base px-5 py-1.5 shadow-md">94%</Badge>
                </div>
                <div className="flex items-center justify-between p-5 bg-background rounded-xl border-2 border-border hover:border-secondary transition-all duration-300">
                  <span className="text-foreground font-semibold text-lg">Hébergement des données en France/Europe</span>
                  <Badge className="bg-secondary text-secondary-foreground text-base px-5 py-1.5">91%</Badge>
                </div>
                <div className="flex items-center justify-between p-5 bg-background rounded-xl border-2 border-border hover:border-secondary transition-all duration-300">
                  <span className="text-foreground font-semibold text-lg">Contrôles par un organisme indépendant</span>
                  <Badge className="bg-secondary text-secondary-foreground text-base px-5 py-1.5">91%</Badge>
                </div>
                <div className="flex items-center justify-between p-5 bg-accent/10 rounded-xl border-2 border-accent/30 hover:bg-accent/15 transition-all duration-300">
                  <span className="text-foreground font-semibold text-lg">Contrôle humain strict sur l'IA</span>
                  <Badge className="bg-accent text-accent-foreground text-base px-5 py-1.5">86%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
