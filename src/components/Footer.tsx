import { ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-accent via-accent to-[hsl(200,60%,30%)] text-accent-foreground py-16 border-t border-accent-foreground/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Observatoire Data Publica</h3>
            <p className="text-accent-foreground/90 leading-relaxed mb-6 text-lg">
              Baromètre annuel sur l'état des projets d'intelligence artificielle dans les collectivités territoriales
              françaises.
            </p>
            <a
              href="/Observatoire-Data-Publica-Barometre-2025.pdf"
              download
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:scale-105"
            >
              Télécharger l'étude (PDF)
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Études 2025</h3>
            <ul className="space-y-3 text-accent-foreground/90 text-lg">
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">•</span> Source des données et de l'analyse : Cahier de
                l’Observatoire Data Publica, coordonné par Jacques Priol et CIVITEO. Ce site est une adaptation
                technique réalisée par Public IA à des fins pédagogiques, sous licence CC-BY-NC 4.0.
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
          <p className="text-accent-foreground/80 text-lg">© 2025 Public IA - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};
