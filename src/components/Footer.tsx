import { ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Observatoire Data Publica</h3>
            <p className="text-accent-foreground/80 leading-relaxed">
              Baromètre annuel sur l'état des projets d'intelligence artificielle dans les collectivités territoriales
              françaises.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Études 2025</h3>
            <ul className="space-y-2 text-accent-foreground/80">
              <li>• Baromètre des collectivités</li>
              <li>• Perception des Français</li>
              <li>• Gestion des données publiques</li>
              <li>• Utilisation de l'IA</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
            <a
              href="https://www.public-ia.fr/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              Visiter public-ia.fr
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8 text-center text-accent-foreground/60">
          <p>© 2025 Public IA - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};
