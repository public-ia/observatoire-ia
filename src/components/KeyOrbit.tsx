import { useEffect, useRef, useState } from "react";
import { chiffresCles, edition, SOURCES } from "@/data";
import { gsap } from "@/lib/motion";
import { DeltaBadge } from "./Blocs";
import { ICONES } from "./icones";

const RAYON = 520; // rayon de l'orbite, en px
const DISQUE = 320; // diamètre d'un disque, en px
const PAS = 36; // angle entre deux chiffres, en degrés
const HAUTEUR_NAV = 80;

const N = chiffresCles.length;

/**
 * Chiffres clés en orbite : la section reste épinglée pendant le défilement,
 * chaque chiffre sort le long d'un arc pendant que le suivant entre.
 */
export const KeyOrbit = () => {
  const scene = useRef<HTMLDivElement>(null);
  const anneau = useRef<HTMLDivElement>(null);
  const [actif, setActif] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: scene.current,
            start: `top top+=${HAUTEUR_NAV}`,
            end: () => `+=${window.innerHeight * 0.55 * (N - 1)}`,
            pin: true,
            scrub: 0.6,
            snap: { snapTo: 1 / (N - 1), duration: { min: 0.2, max: 0.5 }, delay: 0.05, ease: "power2.inOut" },
            invalidateOnRefresh: true,
            onUpdate: (self) => setActif(Math.round(self.progress * (N - 1))),
          },
        })
        .to(anneau.current, { rotation: -(N - 1) * PAS }, 0)
        .to(".orbit-disc-inner", { rotation: (N - 1) * PAS }, 0);
    }, scene);
    return () => ctx.revert();
  }, []);

  const c = chiffresCles[actif];
  const collectivites = c.source === "barometre";

  return (
    <div
      ref={scene}
      className="relative overflow-hidden bg-background"
      style={{ height: `calc(100svh - ${HAUTEUR_NAV}px)` }}
    >
      {/* Bande dont la couleur change avec la source du chiffre */}
      <div
        className={`absolute inset-y-0 right-0 w-[46%] origin-top-right -skew-x-6 transition-colors duration-700 ${
          collectivites ? "bg-primary" : "bg-[hsl(200,40%,45%)]"
        }`}
        aria-hidden
      />

      <div className="container relative z-10 mx-auto flex h-full items-center px-6">
        <div className="w-[46%]">
          <p className="mb-3 font-bold uppercase tracking-widest text-primary">Chiffres clés {edition.annee}</p>
          <p className="mb-8 flex items-baseline gap-3 text-accent">
            <span className="text-5xl font-bold tabular-nums">{String(actif + 1).padStart(2, "0")}</span>
            <span className="text-xl text-muted-foreground tabular-nums">/ {String(N).padStart(2, "0")}</span>
            <span
              className={`ml-3 rounded-full px-4 py-1 text-sm font-bold transition-colors duration-700 ${
                collectivites ? "bg-primary text-accent" : "bg-[hsl(200,40%,45%)] text-white"
              }`}
            >
              {collectivites ? "Dans les collectivités" : "Chez les Français"}
            </span>
          </p>

          {/* Le `key` relance l'animation de balayage à chaque changement de chiffre. */}
          <div key={actif} className="orbit-wipe" aria-live="polite">
            <h3 className="mb-5 text-5xl font-bold leading-tight tracking-tight text-accent xl:text-6xl">
              <span className="font-light">{c.value} % </span>
              {c.label}
            </h3>
            <p className="mb-5 max-w-xl text-xl leading-relaxed text-foreground">{c.description}</p>
            <div className="flex items-center gap-4">
              <DeltaBadge value={c.value} rappels={c.rappels} />
              <span className="text-sm text-muted-foreground">
                {SOURCES[c.source].court}, p. {c.page}
              </span>
            </div>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">Faites défiler pour passer au chiffre suivant</p>
        </div>
      </div>

      {/* Orbite : l'anneau tourne, les disques restent droits. */}
      <div
        ref={anneau}
        className="absolute top-1/2 z-10"
        style={{ width: RAYON * 2, height: RAYON * 2, left: `calc(100% - ${RAYON * 0.62}px)`, marginTop: -RAYON }}
        aria-hidden
      >
        {chiffresCles.map((chiffre, i) => {
          const angle = ((180 + i * PAS) * Math.PI) / 180;
          const Icone = ICONES[chiffre.icone];
          return (
            <div
              key={chiffre.label}
              className="absolute"
              style={{
                width: DISQUE,
                height: DISQUE,
                left: RAYON + RAYON * Math.cos(angle) - DISQUE / 2,
                top: RAYON + RAYON * Math.sin(angle) - DISQUE / 2,
              }}
            >
              <div className="orbit-disc-inner h-full w-full">
                <div
                  className={`flex h-full w-full flex-col items-center justify-center rounded-full border-[10px] border-white/70 bg-card shadow-elegant-lg transition-all duration-500 ${
                    i === actif ? "scale-100 opacity-100" : "scale-[0.6] opacity-60"
                  }`}
                >
                  <Icone className="mb-2 h-9 w-9 text-primary" />
                  <span className="text-7xl font-bold tabular-nums text-accent">{chiffre.value} %</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
