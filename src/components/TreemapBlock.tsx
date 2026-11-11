import { useEffect, useMemo, useRef, useState } from "react";
import type { Treemap } from "@/data";
import { squarify } from "@/lib/treemap";
import { Cadre, formatDelta } from "./Blocs";

/** Couleur d'une case selon son rang : les deux premiers domaines ressortent. */
const couleur = (rang: number, total: number) => {
  if (rang === 0) return "bg-accent text-accent-foreground";
  if (rang === 1) return "bg-[hsl(200,40%,45%)] text-white";
  const teintes = [
    "bg-[hsl(200,35%,62%)] text-accent",
    "bg-[hsl(200,35%,70%)] text-accent",
    "bg-[hsl(200,30%,78%)] text-accent",
    "bg-[hsl(200,30%,85%)] text-accent",
  ];
  return teintes[Math.min(teintes.length - 1, Math.floor(((rang - 2) / Math.max(1, total - 2)) * teintes.length))];
};

export const TreemapBlock = ({ t }: { t: Treemap }) => {
  const zone = useRef<HTMLDivElement>(null);
  const [taille, setTaille] = useState({ w: 0, h: 0 });
  const [actif, setActif] = useState(0);

  // Les cases sont placées par ordre décroissant, comme dans le rapport.
  const items = useMemo(() => [...t.items].sort((a, b) => b.value - a.value), [t.items]);

  useEffect(() => {
    const el = zone.current;
    if (!el) return;
    const mesurer = () => {
      const w = el.clientWidth;
      // Format paysage sur grand écran, portrait sur téléphone pour garder des cases lisibles.
      setTaille({ w, h: Math.round(w < 560 ? w * 1.5 : w * 0.62) });
    };
    mesurer();
    const observer = new ResizeObserver(mesurer);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const rects = useMemo(
    () => squarify(items.map((i) => i.value), taille.w, taille.h),
    [items, taille],
  );

  const choisi = items[actif];

  return (
    <Cadre bloc={t} pied="En % des collectivités ; la surface de chaque case est proportionnelle à sa valeur.">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div ref={zone} className="relative w-full" style={{ height: taille.h || undefined }}>
          {rects.map((r, i) => {
            const item = items[i];
            const petit = r.w < 92 || r.h < 62;
            const minuscule = r.w < 44 || r.h < 30;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setActif(i)}
                onMouseEnter={() => setActif(i)}
                onFocus={() => setActif(i)}
                aria-pressed={i === actif}
                aria-label={`${item.label} : ${item.value} %`}
                title={`${item.label} : ${item.value} %`}
                className="absolute p-[2px] text-left focus-visible:z-10 focus-visible:outline-none"
                style={{ left: r.x, top: r.y, width: r.w, height: r.h }}
              >
                <span
                  className={`flex h-full w-full flex-col justify-end overflow-hidden rounded-md p-2 transition-all duration-200 ${couleur(i, items.length)} ${
                    i === actif ? "ring-4 ring-primary ring-inset" : "hover:brightness-110"
                  }`}
                >
                  {!minuscule && (
                    <>
                      <span className={`font-bold tabular-nums leading-none ${i < 2 ? "text-3xl md:text-5xl" : petit ? "text-base" : "text-2xl"}`}>
                        {item.value} %
                      </span>
                      {!petit && (
                        <span className={`mt-1 font-semibold leading-tight ${i < 2 ? "text-base md:text-lg" : "text-xs md:text-sm"}`}>
                          {item.label}
                        </span>
                      )}
                    </>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col justify-center rounded-xl border-2 border-primary/30 bg-primary/5 p-6" aria-live="polite">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Domaine {actif + 1} / {items.length}
          </p>
          <p className="my-2 text-6xl font-bold tabular-nums text-accent">{choisi.value} %</p>
          <p className="text-2xl font-bold leading-tight text-accent">{choisi.label}</p>
          {choisi.rappel && (
            <p className="mt-3 inline-flex w-fit rounded-full border border-accent/30 px-3 py-1 text-sm font-semibold text-accent">
              {formatDelta(choisi.value - choisi.rappel.value)} pts vs {choisi.rappel.annee} ({choisi.rappel.value} %)
            </p>
          )}
          <p className="mt-4 text-base leading-relaxed text-foreground">
            {choisi.detail ?? "Part des collectivités engagées dans l'IA qui mènent des projets dans ce domaine."}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Survolez ou touchez une case pour afficher son détail.</p>
        </div>
      </div>
    </Cadre>
  );
};
