import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { edition, sentimentsIA } from "@/data";
import { DeltaBadge } from "./QuestionBlock";

const COULEURS = {
  positif: "bg-accent",
  neutre: "bg-secondary",
  negatif: "bg-primary",
} as const;

export const SentimentsIA = () => {
  const { titre, question, items, positifs, negatifs, page } = sentimentsIA;
  return (
    <Card className="border-2 border-border bg-card shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl md:text-2xl text-accent leading-snug">{titre}</CardTitle>
        <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed pt-2">
          <span className="font-semibold not-italic">Question posée : </span>« {question} »
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-8">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.label} className="grid grid-cols-[9rem_minmax(0,1fr)] md:grid-cols-[11rem_minmax(0,1fr)_auto] gap-x-4 gap-y-1 items-center">
                <p className="font-medium text-foreground">{item.label}</p>
                <div className="flex items-center gap-3">
                  <div
                    className={`h-8 rounded-md ${COULEURS[item.tonalite]}`}
                    style={{ width: `${item.value * 1.5}%` }}
                    aria-hidden
                  />
                  <span className="text-xl font-bold text-accent tabular-nums whitespace-nowrap">{item.value} %</span>
                </div>
                <div className="col-span-2 md:col-span-1 flex items-center gap-3 text-xs text-muted-foreground/80">
                  <DeltaBadge value={item.value} rappels={item.rappels} />
                  <span>
                    2024 : {item.rappels["2024"]} % · 2022 : {item.rappels["2022"]} %
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {[
              { titre: "Sentiments positifs", d: positifs, style: "border-accent/30 bg-accent/5" },
              { titre: "Sentiments négatifs", d: negatifs, style: "border-primary/50 bg-primary/10" },
            ].map(({ titre: t, d, style }) => (
              <div key={t} className={`rounded-xl border-2 p-5 text-center ${style}`}>
                <p className="font-semibold text-foreground">{t}</p>
                <p className="text-5xl font-bold text-accent my-2 tabular-nums">{d.value} %</p>
                <DeltaBadge value={d.value} rappels={d.rappels} />
                <p className="text-xs text-muted-foreground/80 mt-2">
                  2024 : {d.rappels["2024"]} % · 2022 : {d.rappels["2022"]} %
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 pt-4 border-t border-border/60 text-xs text-muted-foreground">
          Une seule réponse possible. Base : ensemble des répondants. Source : {edition.institut} pour l'
          {edition.commanditaire}, {edition.date.toLowerCase()}, p. {page}.
        </p>
      </CardContent>
    </Card>
  );
};
