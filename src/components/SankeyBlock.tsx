import { useEffect, useMemo, useRef, useState } from "react";
import type { Sankey } from "@/data";
import { Cadre } from "./Blocs";

type Selection = { cote: "origine" | "sujet"; index: number } | null;

const NOEUD = 14; // largeur d'un nœud, en px
const ECART = 8; // espace entre deux nœuds d'origine, en px

/** Positions verticales des nœuds et des flux, pour une zone de dessin donnée. */
const calculer = (s: Sankey, hauteur: number) => {
  const nO = s.origines.length;
  const nS = s.sujets.length;
  const totalOrigine = s.flux.map((ligne) => ligne.reduce((a, b) => a + b, 0));
  const totalSujet = s.sujets.map((_, j) => s.flux.reduce((a, ligne) => a + ligne[j], 0));
  const total = totalOrigine.reduce((a, b) => a + b, 0);

  // Même échelle des deux côtés ; l'espace entre sujets absorbe la différence.
  const echelle = (hauteur - ECART * (nO - 1)) / total;
  const ecartSujets = (hauteur - total * echelle) / (nS - 1);

  const origines: Array<{ y: number; h: number }> = [];
  let y = 0;
  for (let i = 0; i < nO; i++) {
    origines.push({ y, h: totalOrigine[i] * echelle });
    y += totalOrigine[i] * echelle + ECART;
  }
  const sujets: Array<{ y: number; h: number }> = [];
  y = 0;
  for (let j = 0; j < nS; j++) {
    sujets.push({ y, h: totalSujet[j] * echelle });
    y += totalSujet[j] * echelle + ecartSujets;
  }

  // Côté origine, les flux s'empilent dans l'ordre des sujets ; côté sujet, dans l'ordre des origines.
  const departs = origines.map((o) => o.y);
  const arrivees = sujets.map((t) => t.y);
  const liens: Array<{ i: number; j: number; y0: number; y1: number; h: number }> = [];
  for (let i = 0; i < nO; i++) {
    for (let j = 0; j < nS; j++) {
      const h = s.flux[i][j] * echelle;
      if (h <= 0) continue;
      liens.push({ i, j, y0: departs[i], y1: arrivees[j], h });
      departs[i] += h;
      arrivees[j] += h;
    }
  }
  return { origines, sujets, liens };
};

export const SankeyBlock = ({ s }: { s: Sankey }) => {
  const zone = useRef<HTMLDivElement>(null);
  const [largeur, setLargeur] = useState(0);
  const [selection, setSelection] = useState<Selection>(null);

  useEffect(() => {
    const el = zone.current;
    if (!el) return;
    const mesurer = () => setLargeur(el.clientWidth);
    mesurer();
    const observer = new ResizeObserver(mesurer);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const etroit = largeur < 560;
  const hauteur = etroit ? 470 : Math.round(Math.min(600, largeur * 0.68));
  const { origines, sujets, liens } = useMemo(() => calculer(s, hauteur), [s, hauteur]);

  const x0 = NOEUD;
  const x1 = largeur - NOEUD;
  const milieu = (x0 + x1) / 2;
  const police = etroit ? 12 : 15;

  const actif = (i: number, j: number) =>
    !selection || (selection.cote === "origine" ? selection.index === i : selection.index === j);

  const choisi = selection
    ? selection.cote === "origine"
      ? s.origines[selection.index]
      : s.sujets[selection.index]
    : null;

  // Le survol sélectionne déjà : un clic ne doit donc pas désélectionner.
  const basculer = (cote: "origine" | "sujet", index: number) => setSelection({ cote, index });

  const etiquette = {
    fontSize: police,
    fontWeight: 700,
    fill: "hsl(200 89% 14%)",
    stroke: "white",
    strokeWidth: 3.5,
    paintOrder: "stroke" as const,
    pointerEvents: "none" as const,
  };

  return (
    <Cadre bloc={s} pied="Chaque bloc politique a la même hauteur : le diagramme montre la répartition de ses propositions, pas leur nombre.">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div ref={zone} className="w-full">
          {largeur > 0 && (
            <svg
              width={largeur}
              height={hauteur}
              viewBox={`0 0 ${largeur} ${hauteur}`}
              role="group"
              aria-label={`${s.graphique} : diagramme de flux entre ${s.origines.length} blocs politiques et ${s.sujets.length} sujets`}
            >
              <defs>
                {liens.map(({ i, j }) => (
                  <linearGradient key={`${i}-${j}`} id={`${s.id}-g-${i}-${j}`} x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor={s.origines[i].couleur} />
                    <stop offset="100%" stopColor={s.sujets[j].couleur} />
                  </linearGradient>
                ))}
              </defs>

              {liens.map(({ i, j, y0, y1, h }) => (
                <path
                  key={`${i}-${j}`}
                  d={`M${x0},${y0} C${milieu},${y0} ${milieu},${y1} ${x1},${y1} L${x1},${y1 + h} C${milieu},${y1 + h} ${milieu},${y0 + h} ${x0},${y0 + h} Z`}
                  fill={`url(#${s.id}-g-${i}-${j})`}
                  opacity={actif(i, j) ? (selection ? 0.85 : 0.6) : 0.08}
                  style={{ transition: "opacity 0.3s" }}
                />
              ))}

              {s.origines.map((o, i) => (
                <g
                  key={o.label}
                  role="button"
                  tabIndex={0}
                  aria-pressed={selection?.cote === "origine" && selection.index === i}
                  aria-label={`Bloc politique : ${o.label}`}
                  onClick={() => basculer("origine", i)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), basculer("origine", i))}
                  onMouseEnter={() => setSelection({ cote: "origine", index: i })}
                  className="cursor-pointer outline-none [&:focus-visible>rect:first-child]:stroke-[hsl(28,92%,56%)] [&:focus-visible>rect:first-child]:stroke-[3px]"
                >
                  <rect x={0} y={origines[i].y} width={NOEUD} height={origines[i].h} fill={o.couleur} />
                  {/* Zone de clic élargie */}
                  <rect x={0} y={origines[i].y} width={Math.max(120, largeur * 0.3)} height={origines[i].h} fill="transparent" />
                  <text x={NOEUD + 8} y={origines[i].y + origines[i].h / 2} dominantBaseline="middle" style={etiquette}>
                    {o.label}
                  </text>
                </g>
              ))}

              {s.sujets.map((t, j) => (
                <g
                  key={t.label}
                  role="button"
                  tabIndex={0}
                  aria-pressed={selection?.cote === "sujet" && selection.index === j}
                  aria-label={`Sujet : ${t.label}`}
                  onClick={() => basculer("sujet", j)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), basculer("sujet", j))}
                  onMouseEnter={() => setSelection({ cote: "sujet", index: j })}
                  className="cursor-pointer outline-none [&:focus-visible>rect:first-child]:stroke-[hsl(28,92%,56%)] [&:focus-visible>rect:first-child]:stroke-[3px]"
                >
                  <rect x={x1} y={sujets[j].y} width={NOEUD} height={sujets[j].h} fill={t.couleur} />
                  <rect
                    x={largeur - Math.max(120, largeur * 0.3)}
                    y={sujets[j].y}
                    width={Math.max(120, largeur * 0.3)}
                    height={sujets[j].h}
                    fill="transparent"
                  />
                  <text x={x1 - 8} y={sujets[j].y + sujets[j].h / 2} textAnchor="end" dominantBaseline="middle" style={etiquette}>
                    {etroit ? t.court : t.label}
                  </text>
                </g>
              ))}
            </svg>
          )}
        </div>

        <div className="flex flex-col justify-center rounded-xl border-2 border-primary/30 bg-primary/5 p-6" aria-live="polite">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            {!selection ? "Vue d'ensemble" : selection.cote === "origine" ? "Bloc politique" : "Sujet"}
          </p>
          <p className="my-2 flex items-center gap-3 text-2xl font-bold leading-tight text-accent">
            {choisi && <span className="h-5 w-5 shrink-0 rounded-sm" style={{ background: choisi.couleur }} aria-hidden />}
            {choisi ? choisi.label : s.graphique}
          </p>
          <p className="mt-2 text-base leading-relaxed text-foreground">{choisi ? choisi.detail : s.synthese}</p>
          {selection ? (
            <button
              type="button"
              onClick={() => setSelection(null)}
              className="mt-4 w-fit rounded-full border border-accent/30 px-4 py-1.5 text-sm font-semibold text-accent hover:bg-accent/10"
            >
              Tout afficher
            </button>
          ) : (
            <p className="mt-4 text-sm text-muted-foreground">
              Survolez ou touchez un bloc politique ou un sujet pour isoler ses flux.
            </p>
          )}
        </div>
      </div>
    </Cadre>
  );
};
