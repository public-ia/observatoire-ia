import type { LogoOutil, Outils } from "@/data";
import chatgpt from "@/assets/logos/chatgpt.svg";
import claude from "@/assets/logos/claude.svg";
import copilot from "@/assets/logos/copilot.svg";
import delibia from "@/assets/logos/delibia.png";
import gemini from "@/assets/logos/gemini.svg";
import mistral from "@/assets/logos/mistral.svg";
import { Cadre } from "./Blocs";

const LOGOS: Record<LogoOutil, string> = { chatgpt, claude, copilot, delibia, gemini, mistral };

const HAUTEUR = 300; // hauteur de la zone des barres, en px
const GRADUATIONS = [60, 40, 20, 0];
const MAX = GRADUATIONS[0];

export const OutilsBlock = ({ o }: { o: Outils }) => (
  <Cadre bloc={o} pied="En % des collectivités.">
    <ul className="mb-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground" aria-label="Légende">
      <li className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-sm bg-primary" aria-hidden />
        Éditeur français
      </li>
      <li className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-sm bg-accent" aria-hidden />
        Éditeur américain
      </li>
    </ul>

    {/* Téléphone : une ligne par outil */}
    <ol className="space-y-4 md:hidden">
      {o.items.map((item) => (
        <li key={item.label} className="grid grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-white p-2 shadow-sm">
            <img src={LOGOS[item.logo]} alt={`Logo ${item.label}`} className="h-full w-full object-contain" loading="lazy" />
          </span>
          <div>
            <p className="flex items-baseline justify-between gap-2">
              <span className="font-bold text-accent">
                {item.label}
                <span className="ml-2 text-xs font-normal text-muted-foreground">
                  {item.editeur} · {item.pays}
                </span>
              </span>
              <span className="whitespace-nowrap text-xl font-bold tabular-nums text-accent">{item.value} %</span>
            </p>
            <div className="mt-1 h-3 overflow-hidden rounded-full bg-background">
              <div
                className={`h-full rounded-full ${item.pays === "France" ? "bg-primary" : "bg-accent"}`}
                style={{ width: `${(item.value / MAX) * 100}%` }}
              />
            </div>
          </div>
        </li>
      ))}
    </ol>

    {/* Grand écran : barres verticales, comme dans le rapport */}
    <div className="relative hidden md:block" style={{ paddingLeft: "2.75rem" }}>
      {/* Graduations */}
      <div className="absolute inset-x-0 top-0" style={{ height: HAUTEUR }} aria-hidden>
        {GRADUATIONS.map((g) => (
          <div
            key={g}
            className="absolute inset-x-0 flex items-center gap-2"
            style={{ top: `${(1 - g / MAX) * 100}%`, transform: "translateY(-50%)" }}
          >
            <span className="w-9 text-right text-xs tabular-nums text-muted-foreground">{g} %</span>
            <span className="h-px flex-1 bg-border/60" />
          </div>
        ))}
      </div>

      <ol className="relative grid" style={{ gridTemplateColumns: `repeat(${o.items.length}, minmax(0, 1fr))` }}>
        {o.items.map((item) => {
          const francais = item.pays === "France";
          return (
            <li key={item.label} className="flex flex-col items-center px-3">
              <div className="flex w-full flex-col items-center justify-end" style={{ height: HAUTEUR }}>
                <span className="mb-1 whitespace-nowrap text-3xl font-bold tabular-nums text-accent">{item.value} %</span>
                <div
                  className={`relative w-full max-w-[5.5rem] rounded-t-lg ${francais ? "bg-primary" : "bg-accent"}`}
                  style={{ height: `${(item.value / MAX) * 100}%` }}
                  role="img"
                  aria-label={`${item.label} : ${item.value} %`}
                >
                  <span className="absolute bottom-2 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-xl bg-white p-3 shadow-md">
                    <img src={LOGOS[item.logo]} alt={`Logo ${item.label}`} className="h-full w-full object-contain" loading="lazy" />
                  </span>
                </div>
              </div>
              <p className="mt-3 text-center text-lg font-bold leading-tight text-accent">{item.label}</p>
              <p className="text-center text-sm leading-tight text-muted-foreground">
                {item.editeur} · {item.pays}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  </Cadre>
);
