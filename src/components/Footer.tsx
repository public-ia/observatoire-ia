import { ExternalLink } from "lucide-react";
import { edition } from "@/data";
export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-accent via-accent to-[hsl(200,60%,30%)] text-accent-foreground py-16 border-t border-accent-foreground/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Source des données et de l'analyse</h3>
            <p className="text-accent-foreground/90 leading-relaxed mb-6 text-lg">
              {edition.barometre.nom} ({edition.barometre.numero}), « {edition.barometre.titre} », et{" "}
              {edition.ipsos.nom.toLowerCase()}. Ce site est une adaptation réalisée par Public IA à des fins
              pédagogiques ; le quiz, les questions de discussion et les recommandations sont proposés par Public IA.
            </p>
            <a
              href={edition.lienObservatoire}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-accent px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Observatoire Data Publica
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Édition {edition.annee}</h3>
            <ul className="space-y-3 text-accent-foreground/90 text-lg">
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">•</span> La data territoriale
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">•</span> La souveraineté
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">•</span> L'IA territoriale
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">•</span> Qu'en pensent les Français ?
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Contactez-nous</h3>
            <a
              href="https://www.public-ia.fr/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Public IA
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-10 text-center">
          <p className="text-accent-foreground/80 text-lg">© {edition.annee} Public IA - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};
