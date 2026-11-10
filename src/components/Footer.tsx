import { useEffect, useRef } from "react";
import { ArrowUp, ExternalLink } from "lucide-react";
import { edition } from "@/data";
import { gsap, prefersReducedMotion, scrollToTarget } from "@/lib/motion";
import { MagneticLink } from "./MagneticLink";

const MOTS = ["Data territoriale", "Souveraineté", "IA territoriale", `Baromètre ${edition.annee}`, "Qu'en pensent les Français ?"];

const Bandeau = () => (
  <div className="pointer-events-none absolute left-[-5%] top-10 w-[110%] -rotate-2 border-y border-white/15 bg-white/5 py-3 backdrop-blur-sm" aria-hidden>
    <div className="marquee flex w-max gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
      {[0, 1, 2, 3].map((n) => (
        <span key={n} className="flex gap-10">
          {MOTS.map((m) => (
            <span key={m} className="flex items-center gap-10">
              {m}
              <span className="text-primary">✦</span>
            </span>
          ))}
        </span>
      ))}
    </div>
  </div>
);

export const Footer = () => {
  const rideau = useRef<HTMLDivElement>(null);
  const contenu = useRef<HTMLDivElement>(null);
  const titre = useRef<HTMLParagraphElement>(null);

  // Effet rideau : le pied de page est fixe derrière la page et se dévoile avec une parallaxe.
  useEffect(() => {
    if (prefersReducedMotion() || !rideau.current) return;
    const ctx = gsap.context(() => {
      const scrollTrigger = { trigger: rideau.current, start: "top bottom", end: "bottom bottom", scrub: true };
      gsap.fromTo(contenu.current, { yPercent: -18, autoAlpha: 0.3 }, { yPercent: 0, autoAlpha: 1, ease: "none", scrollTrigger });
      gsap.fromTo(titre.current, { yPercent: 45, scale: 0.9 }, { yPercent: 0, scale: 1, ease: "none", scrollTrigger });
    }, rideau);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rideau} className="curtain relative">
      <footer className="relative flex w-full flex-col justify-between overflow-hidden bg-accent text-accent-foreground">
        {/* Halo lumineux et grille */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="aurora aurora-a" />
          <div className="aurora aurora-b" />
          <div className="grid-pattern absolute inset-0" />
        </div>
        <Bandeau />

        <div ref={contenu} className="container relative z-10 mx-auto px-6 pb-8 pt-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <h3 className="mb-4 text-xl font-bold tracking-tight">Source des données et de l'analyse</h3>
              <p className="text-base leading-relaxed text-accent-foreground/85">
                {edition.barometre.nom} ({edition.barometre.numero}), « {edition.barometre.titre} », et{" "}
                {edition.ipsos.nom.toLowerCase()}. Ce site est une adaptation réalisée par Public IA à des fins
                pédagogiques ; le quiz, les questions de discussion et les recommandations sont proposés par Public IA.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold tracking-tight">Édition {edition.annee}</h3>
              <ul className="space-y-2 text-base text-accent-foreground/85">
                {["La data territoriale", "La souveraineté", "L'IA territoriale", "Qu'en pensent les Français ?"].map((l) => (
                  <li key={l} className="flex items-center gap-2">
                    <span className="font-bold text-primary">•</span> {l}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold tracking-tight">Aller plus loin</h3>
              <p className="text-base leading-relaxed text-accent-foreground/85">
                Public IA forme et accompagne les collectivités sur la donnée et l'intelligence artificielle.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticLink href={edition.lienObservatoire} target="_blank" rel="noopener noreferrer">
              Observatoire Data Publica
              <ExternalLink className="h-4 w-4" />
            </MagneticLink>
            <MagneticLink
              href="https://www.public-ia.fr/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary/60 bg-primary/90 text-accent hover:bg-primary hover:border-primary"
            >
              Contacter Public IA
              <ExternalLink className="h-4 w-4" />
            </MagneticLink>
            <MagneticLink
              href="#accueil"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget(0);
              }}
            >
              Haut de page
              <ArrowUp className="h-4 w-4" />
            </MagneticLink>
          </div>
        </div>

        <div className="relative z-10">
          <p ref={titre} className="giant-text select-none px-4 text-center font-bold leading-none tracking-tighter" aria-hidden>
            Observatoire IA
          </p>
          <p className="border-t border-white/15 py-5 text-center text-sm text-accent-foreground/75">
            © {edition.annee} Public IA - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
};
