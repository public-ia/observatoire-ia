import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Shield, Info, Eye } from "lucide-react";

export const CitizenPerception = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
              La Perception des Citoyens
            </h2>
            <p className="text-xl text-muted-foreground">
              Attentes, inquiétudes et exigences des Français face au numérique public
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 border-destructive/20 bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-8 w-8 text-destructive" />
                  <CardTitle className="text-2xl text-accent">Inquiétudes Majeures</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-destructive/5 rounded-lg">
                  <span className="text-foreground">Risque de dépendance à l'IA</span>
                  <Badge variant="destructive">85%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-destructive/5 rounded-lg">
                  <span className="text-foreground">Perte de contrôle humain</span>
                  <Badge variant="destructive">79%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-destructive/5 rounded-lg">
                  <span className="text-foreground">Sentiment négatif envers l'IA</span>
                  <Badge variant="destructive">51%</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl text-accent">Confiance des Français</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                  <span className="text-foreground">Pharmaciens</span>
                  <Badge className="bg-primary text-primary-foreground">78%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                  <span className="text-foreground">Commune/Intercommunalité</span>
                  <Badge className="bg-primary text-primary-foreground">64%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                  <span className="text-foreground">L'État</span>
                  <Badge className="bg-secondary text-secondary-foreground">45%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-accent/20 bg-accent/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Info className="h-8 w-8 text-accent" />
                <CardTitle className="text-2xl text-accent">Le Déficit d'Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="text-5xl font-bold text-destructive mb-2">31%</div>
                  <p className="text-foreground font-medium">Se sentent bien informés sur l'usage de leurs données</p>
                  <p className="text-sm text-muted-foreground mt-2">En baisse de 10 points depuis 2022</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="text-5xl font-bold text-destructive mb-2">14%</div>
                  <p className="text-foreground font-medium">Se sentent bien informés sur l'usage de l'IA</p>
                  <p className="text-sm text-muted-foreground mt-2">Un manque criant de transparence</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 bg-card mt-6">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Eye className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-accent">Exigences Prioritaires</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="text-foreground font-semibold">Information claire et pédagogique</span>
                  <Badge className="bg-primary text-primary-foreground text-lg px-4 py-1">94%</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                  <span className="text-foreground font-semibold">Hébergement des données en France/Europe</span>
                  <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-1">91%</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                  <span className="text-foreground font-semibold">Contrôles par un organisme indépendant</span>
                  <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-1">91%</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <span className="text-foreground font-semibold">Contrôle humain strict sur l'IA</span>
                  <Badge className="bg-accent text-accent-foreground text-lg px-4 py-1">86%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
