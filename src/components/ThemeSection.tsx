import type { ReactNode } from "react";
import { MessagesSquare } from "lucide-react";

interface ThemeSectionProps {
  surTitre: string;
  titre: string;
  sousTitre: string;
  pistes: string[];
  fond: "bg-background" | "bg-card";
  children: ReactNode;
}

export const ThemeSection = ({ surTitre, titre, sousTitre, pistes, fond, children }: ThemeSectionProps) => (
  <div className={`py-20 ${fond}`}>
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-primary font-bold tracking-widest uppercase mb-3">{surTitre}</p>
          <h2 className="text-4xl md:text-6xl font-bold text-accent mb-5 tracking-tight">{titre}</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-4xl mx-auto">{sousTitre}</p>
        </div>

        <div className="space-y-8">{children}</div>

        <aside className="reveal mt-10 rounded-xl border-2 border-primary/30 bg-primary/5 p-6 md:p-8">
          <h3 className="flex items-center gap-3 text-2xl font-bold text-accent mb-2">
            <MessagesSquare className="h-6 w-6 text-primary" />
            Pour en discuter en formation
          </h3>
          <p className="text-sm text-muted-foreground mb-4">Questions proposées par Public IA, hors études.</p>
          <ul className="space-y-3 text-lg text-foreground">
            {pistes.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                {p}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  </div>
);
