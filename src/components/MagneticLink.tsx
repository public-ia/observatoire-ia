import { useRef, type AnchorHTMLAttributes, type MouseEvent } from "react";
import { gsap, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Lien « pilule » en verre dépoli, attiré par le curseur. */
export const MagneticLink = ({ className, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const suivre = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    gsap.to(el, {
      x: (e.clientX - (r.left + r.width / 2)) * 0.35,
      y: (e.clientY - (r.top + r.height / 2)) * 0.35,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const relacher = () => {
    if (ref.current) gsap.to(ref.current, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <a
      ref={ref}
      onMouseMove={suivre}
      onMouseLeave={relacher}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/20 hover:border-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};
