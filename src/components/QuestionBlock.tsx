import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { edition, type Palette, type Question, type Rappels } from "@/data";

const PALETTES: Record<Palette, string[]> = {
  accord4: [
    "bg-accent text-accent-foreground",
    "bg-[hsl(200,40%,45%)] text-white",
    "bg-[hsl(28,92%,80%)] text-accent",
    "bg-primary text-accent",
  ],
  niveau3: ["bg-accent text-accent-foreground", "bg-[hsl(200,40%,45%)] text-white", "bg-secondary text-accent"],
  impact3: ["bg-accent text-accent-foreground", "bg-secondary text-accent", "bg-primary text-accent"],
  binaire: ["bg-accent text-accent-foreground", "bg-primary text-accent"],
};

const ANNEES = ["2025", "2024", "2022"] as const;

export const formatDelta = (delta: number) => (delta > 0 ? `+${delta}` : delta < 0 ? `−${Math.abs(delta)}` : "=");

/** Écart avec l'édition disponible la plus récente. */
export const dernierRappel = (rappels?: Rappels) => {
  if (!rappels) return null;
  const annee = ANNEES.find((a) => rappels[a] !== undefined);
  return annee ? { annee, value: rappels[annee] as number } : null;
};

export const DeltaBadge = ({ value, rappels, nouveau }: { value: number; rappels?: Rappels; nouveau?: boolean }) => {
  if (nouveau) {
    return <Badge className="bg-primary text-accent hover:bg-primary whitespace-nowrap">Nouveau {edition.annee}</Badge>;
  }
  const ref = dernierRappel(rappels);
  if (!ref) return null;
  const delta = value - ref.value;
  return (
    <Badge variant="outline" className="border-accent/30 text-accent whitespace-nowrap font-semibold">
      {formatDelta(delta)} {delta === 0 ? "" : Math.abs(delta) > 1 ? "pts " : "pt "}vs {ref.annee}
    </Badge>
  );
};

const RappelsLigne = ({ rappels }: { rappels?: Rappels }) => {
  if (!rappels) return null;
  const parts = ANNEES.filter((a) => rappels[a] !== undefined).map((a) => `${a} : ${rappels[a]} %`);
  if (!parts.length) return null;
  return <p className="text-xs text-muted-foreground/80 mt-1">Rappels — {parts.join(" · ")}</p>;
};

export const QuestionBlock = ({ q }: { q: Question }) => {
  const couleurs = PALETTES[q.palette];
  return (
    <Card className="border-2 border-border bg-card shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl md:text-2xl text-accent leading-snug">{q.titre}</CardTitle>
        <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed pt-2">
          <span className="font-semibold not-italic">Question posée : </span>« {q.question} »
        </p>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 mb-6 text-sm text-foreground" aria-label="Légende">
          {q.echelle.map((niveau, i) => (
            <li key={niveau} className="flex items-start gap-2 max-w-xl">
              <span className={`mt-1 h-3 w-3 shrink-0 rounded-sm ${couleurs[i].split(" ")[0]}`} aria-hidden />
              {niveau}
            </li>
          ))}
        </ul>

        <div className="space-y-5">
          {q.items.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_auto] gap-x-6 gap-y-2 lg:items-center"
            >
              <div>
                <p className={`font-medium leading-snug ${item.crainte ? "text-[hsl(14,80%,38%)]" : "text-foreground"}`}>
                  {item.label}
                </p>
                <RappelsLigne rappels={item.rappels} />
              </div>
              <div
                className="flex h-9 w-full overflow-hidden rounded-md"
                role="img"
                aria-label={q.echelle.map((n, i) => `${n} : ${item.values[i]} %`).join(", ")}
              >
                {item.values.map((v, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center text-sm font-bold ${couleurs[i]}`}
                    style={{ width: `${v}%` }}
                    title={`${q.echelle[i]} : ${v} %`}
                  >
                    {v >= 6 ? v : ""}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 lg:w-60 lg:justify-end">
                <span className="text-3xl font-bold text-accent tabular-nums whitespace-nowrap">{item.total} %</span>
                <DeltaBadge value={item.total} rappels={item.rappels} nouveau={item.nouveau} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-border/60 text-xs text-muted-foreground space-y-1">
          {q.note && <p className="text-sm text-foreground">{q.note}</p>}
          <p>
            Indicateur à droite : {q.totalLabel}. Base : {q.base ?? "ensemble des répondants"}. Source : {edition.institut}{" "}
            pour l'{edition.commanditaire}, {edition.date.toLowerCase()}, p. {q.page}.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
