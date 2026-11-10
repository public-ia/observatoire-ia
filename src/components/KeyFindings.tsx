import { Card, CardContent } from "@/components/ui/card";
import { Frown, ShieldCheck, Megaphone, ScrollText, Users, Flag, type LucideIcon } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList } from "recharts";
import { chiffresCles, edition, tendances, type ChiffreCle } from "@/data";
import { DeltaBadge, formatDelta } from "./QuestionBlock";

const ICONES: Record<ChiffreCle["icone"], LucideIcon> = {
  sentiment: Frown,
  controle: ShieldCheck,
  information: Megaphone,
  charte: ScrollText,
  confiance: Users,
  souverainete: Flag,
};

export const KeyFindings = () => (
  <div id="key-findings" className="py-20 bg-background">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-6xl font-bold text-accent mb-5 tracking-tight">Chiffres clés {edition.annee}</h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
          Ce que les Français attendent des acteurs publics en matière de données et d'IA
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {chiffresCles.map((c) => {
          const Icone = ICONES[c.icone];
          return (
            <Card key={c.label} className="border-2 border-border hover:border-primary transition-colors duration-300 bg-card shadow-md">
              <CardContent className="p-7">
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icone className="h-7 w-7 text-primary" />
                  </div>
                  <DeltaBadge value={c.value} rappels={c.rappels} nouveau={c.nouveau} />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-accent mb-2 tabular-nums">{c.value} %</div>
                <div className="text-xl font-semibold text-foreground mb-2 leading-tight">{c.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                <p className="text-xs text-muted-foreground/70 mt-3">Rapport p. {c.page}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-accent mb-3">Tendances 2022-{edition.annee}</h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          La perception de l'IA continue de se détériorer et la confiance s'érode. {edition.editionsPrecedentes}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tendances.map((t) => {
          const delta = t.points[t.points.length - 1].value - t.points[0].value;
          const favorable = delta === 0 ? null : delta > 0 === t.hausseFavorable;
          return (
            <Card key={t.label} className="border-2 border-border bg-card">
              <CardContent className="p-6">
                <p className="font-semibold text-accent leading-snug min-h-[3rem]">{t.label}</p>
                <p className={`text-sm font-bold mb-2 ${favorable === false ? "text-[hsl(14,80%,38%)]" : "text-accent"}`}>
                  {formatDelta(delta)} points depuis {t.points[0].annee}
                </p>
                <ResponsiveContainer width="100%" height={170}>
                  <LineChart data={t.points} margin={{ top: 24, right: 20, left: 20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="annee" stroke="hsl(var(--foreground))" tickLine={false} style={{ fontSize: "12px" }} />
                    <YAxis hide domain={[0, 100]} />
                    <Line
                      type="linear"
                      dataKey="value"
                      stroke={favorable === false ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                      strokeWidth={3}
                      dot={{ r: 5 }}
                      isAnimationActive={false}
                    >
                      <LabelList dataKey="value" position="top" offset={10} style={{ fontSize: "13px", fontWeight: 700, fill: "hsl(var(--foreground))" }} />
                    </Line>
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-xs text-muted-foreground/70 mt-2">En %. Rapport p. {t.page}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </div>
);
