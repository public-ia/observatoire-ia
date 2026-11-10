import { useEffect } from "react";
import { gsap, initSmoothScroll, prefersReducedMotion } from "@/lib/motion";

/**
 * Défilement fluide, apparition progressive des éléments `.reveal`
 * et barre de progression de lecture (`#scroll-progress`).
 */
export const useScrollAnimations = () => {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const stop = initSmoothScroll();

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 36,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      gsap.to("#scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
      });
    });

    return () => {
      ctx.revert();
      stop();
    };
  }, []);
};
