import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import {
  chiffresCles,
  edition,
  tendances,
  SOURCES,
  type ChiffreCle,
  type Source,
} from "@/data";
import { DeltaBadge, formatDelta } from "./Blocs";
import { ICONES } from "./icones";
import { KeyOrbit } from "./KeyOrbit";
import { useMediaQuery } from "@/hooks/use-media-query";

// L'orbite épinglée demande un grand écran ; sinon on affiche la grille.
const ORBITE =
  "(min-width: 1024px) and (min-height: 680px) and (prefers-reduced-motion: no-preference)";

const GROUPES: Array<{ source: Source; titre: string; sousTitre: string }> = [
  {
    source: "barometre",
    titre: "Dans les collectivités",
    sousTitre: `${edition.barometre.nom} — ${edition.barometre.echantillon}`,
  },
  {
    source: "ipsos",
    titre: "Chez les Français",
    sousTitre: `${edition.ipsos.nom} — 1 000 personnes interrogées`,
  },
];

const Carte = ({ c }: { c: ChiffreCle }) => {
  const Icone = ICONES[c.icone];
  return (
    <Card className="reveal border-2 border-border hover:border-primary transition-colors duration-300 bg-card shadow-md">
      <CardContent className="p-7">
        <div className="flex items-start justify-between mb-5">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Icone className="h-7 w-7 text-primary" />
          </div>
          <DeltaBadge value={c.value} rappels={c.rappels} />
        </div>
        <div className="text-5xl md:text-6xl font-bold text-accent mb-2 tabular-nums">
          {c.value} %
        </div>
        <div className="text-xl font-semibold text-foreground mb-2 leading-tight">
          {c.label}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {c.description}
        </p>
        <p className="text-xs text-muted-foreground/70 mt-3">
          {SOURCES[c.source].court}, p. {c.page}
        </p>
      </CardContent>
    </Card>
  );
};

export const KeyFindings = () => {
  const orbite = useMediaQuery(ORBITE);
  return (
    <div id="key-findings" className="bg-background">
      {orbite && <KeyOrbit />}
      <div className="container mx-auto px-4 md:px-6 py-20">
        {!orbite && (
          <>
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-6xl font-bold text-accent mb-5 tracking-tight">
                Chiffres clés {edition.annee}
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
                Après l'engouement, la maîtrise ? Une année de consolidation
                pour l'IA dans les territoires
              </p>
            </div>

            {GROUPES.map((g) => (
              <div key={g.source} className="mb-14">
                <h3 className="text-2xl md:text-3xl font-bold text-accent">
                  {g.titre}
                </h3>
                <p className="text-muted-foreground mb-6">{g.sousTitre}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {chiffresCles
                    .filter((c) => c.source === g.source)
                    .map((c) => (
                      <Carte key={c.label} c={c} />
                    ))}
                </div>
              </div>
            ))}
          </>
        )}

        <div className="text-center mb-10 pt-6">
          <h3 className="text-3xl md:text-4xl font-bold text-accent mb-3">
            Tendances
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Les collectivités accélèrent sur l'IA pendant que la confiance des
            Français s'érode
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tendances.map((t) => {
            const delta =
              t.points[t.points.length - 1].value - t.points[0].value;
            const favorable =
              delta === 0 ? null : delta > 0 === t.hausseFavorable;
            return (
              <Card
                key={t.label}
                className="reveal border-2 border-border bg-card"
              >
                <CardContent className="p-6">
                  <p className="font-semibold text-accent leading-snug min-h-[3rem]">
                    {t.label}
                  </p>
                  <p
                    className={`text-sm font-bold mb-2 ${favorable === false ? "text-[hsl(14,80%,38%)]" : "text-accent"}`}
                  >
                    {formatDelta(delta)} points depuis {t.points[0].annee}
                  </p>
                  <ResponsiveContainer width="100%" height={170}>
                    <LineChart
                      data={t.points}
                      margin={{ top: 24, right: 24, left: 24, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(var(--border))"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="annee"
                        stroke="hsl(var(--foreground))"
                        tickLine={false}
                        style={{ fontSize: "12px" }}
                        padding={{ left: 10, right: 10 }}
                      />
                      <YAxis hide domain={[0, 100]} />
                      <Line
                        type="linear"
                        dataKey="value"
                        stroke={
                          favorable === false
                            ? "hsl(var(--primary))"
                            : "hsl(var(--accent))"
                        }
                        strokeWidth={3}
                        dot={{ r: 5 }}
                        isAnimationActive={false}
                      >
                        <LabelList
                          dataKey="value"
                          position="top"
                          offset={10}
                          style={{
                            fontSize: "13px",
                            fontWeight: 700,
                            fill: "hsl(var(--foreground))",
                          }}
                        />
                      </Line>
                    </LineChart>
                  </ResponsiveContainer>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    En %. {SOURCES[t.source].court}, p. {t.page}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
