import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight, Eye, RotateCcw } from "lucide-react";
import { edition, quiz } from "@/data";

export const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [estimation, setEstimation] = useState(50);
  const [revele, setRevele] = useState(false);

  const item = quiz[index];
  const ecart = Math.abs(estimation - item.reponse);

  const aller = (i: number) => {
    setIndex(i);
    setEstimation(50);
    setRevele(false);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-accent via-accent to-[hsl(200,60%,30%)] text-accent-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-5 tracking-tight">À vous de deviner</h2>
            <p className="text-xl md:text-2xl text-accent-foreground/90 font-light">
              Faites estimer le chiffre par le groupe avant de le révéler
            </p>
          </div>

          <Card className="border-0 bg-card text-card-foreground shadow-elegant-lg">
            <CardContent className="p-6 md:p-10">
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                Question {index + 1} / {quiz.length}
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-accent leading-snug mb-8">{item.question}</p>

              <div className="flex items-center gap-6 mb-8">
                <Slider
                  value={[estimation]}
                  onValueChange={([v]) => setEstimation(v)}
                  min={0}
                  max={100}
                  step={1}
                  disabled={revele}
                  aria-label="Votre estimation en pourcentage"
                  className="flex-1"
                />
                <span className="text-4xl font-bold text-accent tabular-nums w-28 text-right">{estimation} %</span>
              </div>

              {revele ? (
                <div className="rounded-xl bg-primary/10 border-2 border-primary/40 p-6 mb-8" aria-live="polite">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                    <span className="text-6xl font-bold text-accent tabular-nums">{item.reponse} %</span>
                    <span className="text-lg font-semibold text-foreground">
                      {ecart === 0 ? "Exactement !" : ecart <= 5 ? `Très proche : ${ecart} ${ecart > 1 ? "points" : "point"} d'écart` : `${ecart} points d'écart`}
                    </span>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">{item.explication}</p>
                  <p className="text-xs text-muted-foreground/80 mt-3">
                    Source : {edition.institut} pour l'{edition.commanditaire}, {edition.date.toLowerCase()}, p. {item.page}.
                  </p>
                </div>
              ) : (
                <Button
                  size="lg"
                  onClick={() => setRevele(true)}
                  className="mb-8 bg-primary hover:bg-primary/90 text-accent font-bold text-lg px-8 py-6"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  Révéler la réponse
                </Button>
              )}

              <div className="flex items-center justify-between border-t border-border/60 pt-6">
                <Button variant="outline" onClick={() => aller(index - 1)} disabled={index === 0}>
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Précédente
                </Button>
                {index === quiz.length - 1 ? (
                  <Button variant="outline" onClick={() => aller(0)}>
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Recommencer
                  </Button>
                ) : (
                  <Button variant="outline" onClick={() => aller(index + 1)}>
                    Suivante
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
