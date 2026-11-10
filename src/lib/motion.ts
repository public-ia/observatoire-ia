import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

let lenis: Lenis | null = null;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Active le défilement fluide (Lenis) et le synchronise avec GSAP ScrollTrigger. */
export const initSmoothScroll = () => {
  if (prefersReducedMotion()) return () => {};

  const instance = new Lenis({ lerp: 0.1 });
  lenis = instance;
  instance.on("scroll", ScrollTrigger.update);
  const tick = (time: number) => instance.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  // La hauteur de page change (onglets, quiz) : recalculer les déclencheurs.
  let timer: number | undefined;
  const observer = new ResizeObserver(() => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => ScrollTrigger.refresh(), 200);
  });
  observer.observe(document.body);

  return () => {
    window.clearTimeout(timer);
    observer.disconnect();
    gsap.ticker.remove(tick);
    instance.destroy();
    lenis = null;
  };
};

/** Défile jusqu'à un élément ou une position, en fluide si possible. */
export const scrollToTarget = (target: HTMLElement | number, offset = 0) => {
  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.2 });
    return;
  }
  const top = typeof target === "number" ? target : target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: top + offset, behavior: prefersReducedMotion() ? "auto" : "smooth" });
};
