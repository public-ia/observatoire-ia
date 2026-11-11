import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { TreemapBlock } from "./TreemapBlock";
import { OutilsBlock } from "./OutilsBlock";
import { SankeyBlock } from "./SankeyBlock";
import { SOURCES, type Barres, type Bloc, type Outils, type Sankey, type Treemap, type Focus, type Palette, type Question, type Rappels, type Source } from "@/data";

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
  avancement4: [
    "bg-accent text-accent-foreground",
    "bg-[hsl(200,40%,45%)] text-white",
    "bg-primary text-accent",
    "bg-secondary text-accent",
  ],
  progres2: ["bg-accent text-accent-foreground", "bg-[hsl(200,40%,45%)] text-white"],
};

const ANNEES = ["2025", "2024", "2023", "2022"] as const;

export const formatDelta = (delta: number) => (delta > 0 ? `+${delta}` : delta < 0 ? `−${Math.abs(delta)}` : "=");

/** Valeur de l'édition disponible la plus récente. */
const dernierRappel = (rappels?: Rappels) => {
  if (!rappels) return null;
  const annee = ANNEES.find((a) => rappels[a] !== undefined);
  return annee ? { annee, value: rappels[annee] as number } : null;
};

export const referenceSource = (source: Source, page: number) => `${SOURCES[source].reference}, p. ${page}`;

export const DeltaBadge = ({ value, rappels, nouveau }: { value: number; rappels?: Rappels; nouveau?: boolean }) => {
  if (nouveau) {
    return <Badge className="bg-primary text-accent hover:bg-primary whitespace-nowrap">Nouveau 2026</Badge>;
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

interface CadreProps {
  bloc: Question | Barres | Treemap | Outils | Sankey;
  pied: string;
  children: ReactNode;
}

/** Habillage commun : enseignement, intitulé, analyse, graphique, source. */
export const Cadre = ({ bloc, pied, children }: CadreProps) => (
  <Card className="reveal border-2 border-border bg-card shadow-md">
    <CardHeader className="pb-4">
      <CardTitle className="text-xl md:text-2xl text-accent leading-snug">{bloc.titre}</CardTitle>
      {bloc.commentaire && <p className="text-base md:text-lg text-foreground leading-relaxed pt-2">{bloc.commentaire}</p>}
      {"question" in bloc && bloc.question ? (
        <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed pt-2">
          <span className="font-semibold not-italic">Question posée : </span>« {bloc.question} »
        </p>
      ) : (
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2">
          <span className="font-semibold">Graphique : </span>
          {bloc.graphique}
        </p>
      )}
    </CardHeader>
    <CardContent>
      {children}
      <div className="mt-6 pt-4 border-t border-border/60 text-xs text-muted-foreground space-y-1">
        {bloc.note && <p className="text-sm text-foreground">{bloc.note}</p>}
        <p>
          {pied} Base : {bloc.base ?? (bloc.source === "ipsos" ? "ensemble des répondants" : "ensemble des collectivités répondantes")}.
          Source : {referenceSource(bloc.source, bloc.page)}.
        </p>
      </div>
    </CardContent>
  </Card>
);

const Legende = ({ niveaux, couleurs }: { niveaux: string[]; couleurs: string[] }) => (
  <ul className="flex flex-wrap gap-x-5 gap-y-2 mb-6 text-sm text-foreground" aria-label="Légende">
    {niveaux.map((niveau, i) => (
      <li key={niveau} className="flex items-start gap-2 max-w-xl">
        <span className={`mt-1 h-3 w-3 shrink-0 rounded-sm ${couleurs[i].split(" ")[0]}`} aria-hidden />
        {niveau}
      </li>
    ))}
  </ul>
);

export const QuestionBlock = ({ q }: { q: Question }) => {
  const couleurs = PALETTES[q.palette];
  return (
    <Cadre bloc={q} pied={`Indicateur à droite : ${q.totalLabel}.`}>
      <Legende niveaux={q.echelle} couleurs={couleurs} />
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
              className="flex h-9 w-full overflow-hidden rounded-md bg-background"
              role="img"
              aria-label={q.echelle.map((n, i) => `${n} : ${item.values[i]} %`).join(", ")}
            >
              {item.values.map((v, i) =>
                v > 0 ? (
                  <div
                    key={i}
                    className={`flex items-center justify-center text-sm font-bold ${couleurs[i]}`}
                    style={{ width: `${v}%` }}
                    title={`${q.echelle[i]} : ${v} %`}
                  >
                    {v >= 6 ? v : ""}
                  </div>
                ) : null,
              )}
            </div>
            <div className="flex items-center gap-3 lg:w-60 lg:justify-end">
              <span className="text-3xl font-bold text-accent tabular-nums whitespace-nowrap">{item.total} %</span>
              <DeltaBadge value={item.total} rappels={item.rappels} nouveau={item.nouveau} />
            </div>
          </div>
        ))}
      </div>
    </Cadre>
  );
};

const COULEURS_SERIES = ["bg-secondary", "bg-accent"];

export const BarresBlock = ({ b }: { b: Barres }) => {
  const comparaison = b.series.length > 1;
  // Une série seule prend la couleur principale ; en comparaison, la dernière série est mise en avant.
  const couleurs = comparaison ? COULEURS_SERIES : ["bg-accent"];
  const temporel = comparaison && b.series.every((s) => /^\d{4}$/.test(s));
  return (
    <Cadre bloc={b} pied="En % des collectivités.">
      {comparaison && <Legende niveaux={b.series} couleurs={couleurs} />}
      <div className="space-y-4">
        {b.items.map((item) => {
          const ecart = item.values[item.values.length - 1] - item.values[0];
          return (
            <div
              key={item.label}
              className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_auto] gap-x-6 gap-y-2 lg:items-center"
            >
              <p className="font-medium leading-snug text-foreground">{item.label}</p>
              <div className="space-y-1">
                {item.values.map((v, i) => (
                  <div key={b.series[i]} className="flex items-center gap-3">
                    <div className="flex-1 h-7 rounded-md bg-background overflow-hidden">
                      <div
                        className={`h-full rounded-md ${couleurs[i]}`}
                        style={{ width: `${v}%` }}
                        role="img"
                        aria-label={`${b.series[i]} : ${v} %`}
                      />
                    </div>
                    <span
                      className={`w-16 text-right tabular-nums whitespace-nowrap ${
                        i === item.values.length - 1 ? "text-2xl font-bold text-accent" : "text-base font-semibold text-muted-foreground"
                      }`}
                    >
                      {v} %
                    </span>
                  </div>
                ))}
              </div>
              {comparaison && (
                <div className="lg:w-40 lg:text-right">
                  <Badge variant="outline" className="border-accent/30 text-accent whitespace-nowrap font-semibold">
                    {formatDelta(ecart)} {ecart === 0 ? "" : Math.abs(ecart) > 1 ? "pts" : "pt"}
                    {temporel ? ` vs ${b.series[0]}` : ""}
                  </Badge>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Cadre>
  );
};

export const FocusBlock = ({ f }: { f: Focus }) => (
  <aside className="reveal rounded-xl border-2 border-accent/20 bg-accent/5 p-6 md:p-8">
    <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent/80 mb-2">
      <BookOpen className="h-4 w-4" />
      Regard complémentaire
    </p>
    <h3 className="text-xl md:text-2xl font-bold text-accent mb-4">{f.titre}</h3>
    <ul className="space-y-3 text-foreground text-base md:text-lg leading-relaxed">
      {f.points.map((p) => (
        <li key={p} className="flex gap-3">
          <span className="text-primary font-bold">•</span>
          {p}
        </li>
      ))}
    </ul>
    <p className="text-xs text-muted-foreground mt-4">
      {f.etude}. Source : {referenceSource("barometre", f.page)}.
    </p>
  </aside>
);

export const BlocList = ({ blocs }: { blocs: Bloc[] }) => (
  <div className="space-y-8">
    {blocs.map((bloc) =>
      bloc.type === "barres" ? (
        <BarresBlock key={bloc.id} b={bloc} />
      ) : bloc.type === "sankey" ? (
        <SankeyBlock key={bloc.id} s={bloc} />
      ) : bloc.type === "outils" ? (
        <OutilsBlock key={bloc.id} o={bloc} />
      ) : bloc.type === "treemap" ? (
        <TreemapBlock key={bloc.id} t={bloc} />
      ) : bloc.type === "focus" ? (
        <FocusBlock key={bloc.id} f={bloc} />
      ) : (
        <QuestionBlock key={bloc.id} q={bloc} />
      ),
    )}
  </div>
);
