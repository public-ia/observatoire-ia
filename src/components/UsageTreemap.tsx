import { useState } from "react";
import treemapImage from "@/assets/usages-ia-treemap.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const UsageTreemap = () => {
  const [selectedUsage, setSelectedUsage] = useState<number | null>(null);
  const usages = [
    { 
      domain: "Administration et gestion interne", 
      percentage: 69,
      useCases: [
        "Assistance administrative par IA générative : Il s'agit d'un domaine en forte progression dans les usages de l'IA (45% des collectivités ayant engagé un projet IA déclarent des usages sur cette thématique, contre 29% en 2024), principalement grâce à l'utilisation de l'IA générative pour aider les agents dans leurs tâches administratives. L'IA générative est perçue comme la \"locomotive\" ou le \"cheval de Troie\" de l'IA au sein des collectivités, étant utilisée par 84% de celles qui expérimentent l'IA.",
        "Amélioration du pilotage des politiques publiques : L'utilisation des données pour améliorer l'évaluation et le pilotage des politiques publiques est le deuxième objectif prioritaire des collectivités (66% des répondants). Au total, 74% des collectivités de plus de 3 500 habitants utilisent la donnée pour piloter des politiques publiques.",
        "Optimisation budgétaire : Les économies budgétaires sont l'un des deux principaux avantages mis en avant par les Français concernant l'utilisation de l'IA par le service public (42%). L'objectif de réaliser des économies budgétaires est en légère progression parmi les priorités des collectivités."
      ]
    },
    { 
      domain: "Environnement", 
      percentage: 66,
      useCases: [
        "Gestion de l'environnement : Ce domaine fait partie du trio de tête des usages de la donnée par les collectivités locales.",
        "Collecte de données environnementales : L'utilisation des données implique la mobilisation de capteurs variés pour mesurer, par exemple, la qualité de l'air et les températures. Le déploiement de réseaux de capteurs a fortement progressé en 2025 (27% des collectivités en sont dotées, contre 19% l'an dernier).",
        "Faciliter la transition écologique : 30% des Français estiment que l'usage des données par les acteurs publics est susceptible d'apporter des améliorations dans le domaine de la transition écologique. Cependant, 75% des Français souhaitent que l'usage de l'IA et des données soit limité pour réduire l'impact environnemental, même si cela nuit à l'efficacité."
      ]
    },
    { 
      domain: "Mobilité", 
      percentage: 60,
      useCases: [
        "Optimisation du trafic urbain : 72% des Français sont d'accord avec l'idée que le service public utilise l'IA pour optimiser la gestion du trafic urbain, notamment en exploitant les données des automobilistes en temps réel.",
        "Amélioration de la gestion des déplacements : Les acteurs publics, y compris les collectivités locales, utilisent les données pour améliorer la gestion des déplacements.",
        "Gestion des transports : L'IA est perçue comme devant jouer un rôle essentiel ou important dans les transports dans les villes par 71% des Français dans les années à venir. L'usage des données est jugé susceptible d'améliorer les transports et la mobilité personnelle et collective."
      ]
    },
    { 
      domain: "Aménagement du territoire", 
      percentage: 57,
      useCases: [
        "Urbanisme : 70% des Français estiment que l'IA jouera un rôle essentiel ou important dans l'urbanisme et l'aménagement du territoire.",
        "Égalité territoriale : 30% des Français considèrent que l'usage des données peut améliorer l'aménagement du territoire et l'égalité territoriale, en particulier entre le monde rural et les villes.",
        "Utilisation des données de référence : Les collectivités utilisent majoritairement des données ouvertes provenant de l'État, ses agences et opérateurs (91% des collectivités), ce qui inclut les grands référentiels comme le plan cadastral informatisé."
      ]
    },
    { 
      domain: "Énergie et éclairage", 
      percentage: 55,
      useCases: [
        "Efficacité énergétique des bâtiments : 82% des Français sont favorables à ce que le service public ait recours à l'IA pour réduire l'éclairage et le chauffage des bâtiments publics en fonction des mesures de fréquentation en temps réel.",
        "Gestion des consommations énergétiques : 80% des Français estiment que l'IA aura un rôle essentiel ou important dans la gestion des consommations énergétiques.",
        "Déploiement de capteurs pour la gestion des ressources : Les réseaux de capteurs, souvent utilisés dans le domaine de l'énergie, ont vu leur déploiement progresser (27% des collectivités). De plus, 35% des Français pensent que l'usage des données peut améliorer la bonne gestion des ressources en énergie."
      ]
    },
    { 
      domain: "Patrimoine", 
      percentage: 53,
      useCases: [
        "Amélioration de la qualité du service : Améliorer la qualité du service public est la principale priorité des collectivités lorsqu'elles utilisent des données (pour 83% des répondants).",
        "Pilotage des politiques publiques : La majorité des collectivités (74%) utilisent la donnée pour le pilotage de leurs politiques publiques, ce qui englobe potentiellement la gestion de leur patrimoine.",
        "Collecte de données techniques : Les projets data s'appuient sur l'essor des réseaux de capteurs (27% des collectivités les ont déployés en 2025)."
      ]
    },
    { 
      domain: "Développement économique", 
      percentage: 52,
      useCases: [
        "Génération de croissance et de productivité : 54% des Français estiment que l'IA aura un impact important sur la productivité et sera une source importante de croissance économique.",
        "Soutien à l'emploi : 26% des Français considèrent que l'usage des données est susceptible d'améliorer le développement économique et l'emploi.",
        "Retombées économiques territoriales : 24% des Français citent les retombées économiques au bénéfice du territoire (comme la création d'emplois) comme un avantage particulièrement utile de l'utilisation de l'IA par le service public."
      ]
    },
    { 
      domain: "Eau", 
      percentage: 50,
      useCases: [
        "Gestion de l'eau : 78% des Français estiment que l'IA aura un rôle essentiel ou important dans la gestion de l'eau dans les années à venir. La gestion de l'eau est un domaine où les attentes des Français et les pratiques des collectivités sont bien alignées.",
        "Déploiement de capteurs : Les réseaux de capteurs sont utilisés notamment dans le domaine de la gestion de l'eau, et leur déploiement a progressé à 27% des collectivités en 2025.",
        "Gestion des ressources : L'usage des données est jugé susceptible d'améliorer la bonne gestion des ressources, y compris l'eau."
      ]
    },
    { 
      domain: "Déchets", 
      percentage: 46,
      useCases: [
        "Optimisation de la collecte et du tri : 40% des Français estiment que l'usage des données par les acteurs publics est susceptible d'améliorer la gestion de la collecte et du tri des déchets.",
        "Gestion du service public : Les collectivités locales utilisent les données pour la gestion générale des services publics.",
        "Alignement avec les attentes citoyennes : La gestion des déchets est un des domaines d'usages des données sur lesquels les attentes des Français et les pratiques des collectivités sont alignées."
      ]
    },
    { 
      domain: "Tourisme", 
      percentage: 45,
      useCases: [
        "Développement de nouveaux services : 20% des Français citent le développement de nouveaux services ou de nouvelles politiques publiques comme un avantage potentiel de l'utilisation de l'IA par le service public.",
        "Amélioration de l'information aux citoyens/usagers : L'amélioration de l'information et de la transparence vis-à-vis des citoyens est citée par 29% des Français comme un avantage de l'IA.",
        "Amélioration de l'évaluation et du pilotage : 18% des Français considèrent que l'IA peut améliorer l'évaluation et le pilotage des politiques publiques."
      ]
    },
    { 
      domain: "Gestion de l'espace public", 
      percentage: 44,
      useCases: [
        "Comptage des flux : La collecte de données comprend le comptage des fréquentations et des véhicules, souvent via des capteurs.",
        "Gestion du service public : Les collectivités locales utilisent les données pour la gestion du service public.",
        "Amélioration des services locaux : 35% des Français estiment que l'usage des données est susceptible d'améliorer la qualité des services publics au niveau local."
      ]
    },
    { 
      domain: "Action sociale", 
      percentage: 39,
      useCases: [
        "Politiques d'aide sociale : 58% des Français estiment que l'IA jouera un rôle essentiel ou important dans les politiques d'aide sociale dans les années à venir.",
        "Lutte contre les inégalités : 20% des Français estiment que l'usage des données est susceptible d'améliorer la lutte contre les inégalités sociales et les discriminations.",
        "Amélioration de la relation aux usagers : L'IA est utilisée dans les projets en cours (environ 20%) pour traiter les demandes des administrés, fournir des réponses personnalisées ou développer l'accueil pour l'inclusion (gestion des langues, etc.)."
      ]
    },
    { 
      domain: "Sécurité", 
      percentage: 35,
      useCases: [
        "Vidéoprotection et détection de comportements suspects : 75% des Français sont d'accord avec le fait que le service public utilise l'IA pour analyser en direct les images de vidéoprotection afin de détecter et d'identifier les comportements suspects.",
        "Sécurité des biens et des personnes : 72% des Français estiment que l'IA jouera un rôle essentiel ou important dans la sécurité des biens et des personnes.",
        "Gestion de la sécurité : Les données sont utilisées par les acteurs publics locaux pour gérer la sécurité."
      ]
    },
    { 
      domain: "Citoyenneté", 
      percentage: 32,
      useCases: [
        "Amélioration de l'information et transparence : L'amélioration de l'information et de la transparence vis-à-vis des citoyens est citée par 29% des Français comme un avantage de l'IA. Cependant, l'amélioration de l'information et de la transparence est en recul dans les priorités des collectivités.",
        "Traitement des demandes des administrés : L'IA est utilisée pour traiter les demandes et fournir des réponses personnalisées aux administrés, s'inscrivant dans le domaine de la relation aux usagers.",
        "Mise en place d'une gouvernance citoyenne et contrôle : Les Français sont largement favorables à la mise en place de contrôles par un organisme indépendant (91% le jugent prioritaire/important pour les données) et 93% le jugent essentiel/important pour l'IA."
      ]
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
              Domaines d'usage de l'IA
            </h2>
            <p className="text-xl text-muted-foreground">
              Répartition des projets d'intelligence artificielle par secteur dans les collectivités territoriales
            </p>
          </div>

          <div className="mb-12">
            <img 
              src={treemapImage} 
              alt="Treemap des usages de l'IA dans les collectivités territoriales" 
              className="w-full rounded-xl shadow-lg border-2 border-border"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usages.map((usage, index) => (
              <div 
                key={index}
                onClick={() => setSelectedUsage(index)}
                className="p-6 bg-background rounded-lg border-2 border-border hover:border-primary transition-all hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground">{usage.domain}</h3>
                  <span className="text-3xl font-bold text-primary ml-4">{usage.percentage}%</span>
                </div>
                <div className="space-y-2">
                  {usage.useCases.map((useCase, idx) => {
                    const shortTitle = useCase.split(':')[0];
                    return (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-1">{idx + 1}.</span>
                        <p className="text-sm text-muted-foreground">{shortTitle}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={selectedUsage !== null} onOpenChange={() => setSelectedUsage(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedUsage !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl text-accent mb-2">
                  {usages[selectedUsage].domain}
                </DialogTitle>
                <DialogDescription className="text-2xl font-bold text-primary">
                  {usages[selectedUsage].percentage}% des projets data en cours ou prévus
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6 space-y-6">
                <h3 className="text-xl font-semibold text-foreground">
                  Cas d'usages dans les collectivités territoriales
                </h3>
                
                <div className="space-y-4">
                  {usages[selectedUsage].useCases.map((useCase, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 bg-card rounded-lg border-2 border-border"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl font-bold text-primary min-w-[32px]">
                          {idx + 1}.
                        </span>
                        <p className="text-foreground leading-relaxed">
                          {useCase}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
