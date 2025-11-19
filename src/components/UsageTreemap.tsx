import { useState } from "react";
import treemapImage from "@/assets/usages-ia-treemap.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp } from "lucide-react";

export const UsageTreemap = () => {
  const [selectedUsage, setSelectedUsage] = useState<number | null>(null);
  const usages = [
    { 
      domain: "Administration et gestion interne", 
      percentage: 45,
      useCases: [
        "Assistance administrative par IA générative : L'IA est utilisée pour aider les agents dans leurs tâches administratives, un usage qui connaît la plus forte progression (passant de 29% en 2024 à 45% en 2025 pour les collectivités expérimentant l'IA). L'IA générative est perçue comme la \"locomotive\" ou le \"cheval de Troie\" de l'IA au sein des collectivités, car elle est considérée comme facile d'accès et peu coûteuse.",
        "Amélioration du pilotage stratégique : L'utilisation des données pour améliorer l'évaluation et le pilotage des politiques publiques est une priorité majeure pour 66% des collectivités, ce qui sous-tend une grande partie de la gestion interne.",
        "Recherche d'économies budgétaires : L'un des principaux avantages de l'utilisation de l'IA par le service public, selon 42% des Français, est la réalisation d'économies budgétaires. Cet objectif est en légère progression chez les collectivités (16% en font leur priorité n°1 en 2025)."
      ],
      examples: [
        {
          collectivite: "Métropole de Lyon",
          type: "Métropole",
          project: "Déploiement d'un assistant IA générative pour aider 10 000 agents dans la rédaction de documents administratifs",
          results: "Réduction de 30% du temps de traitement des documents"
        },
        {
          collectivite: "Ville de Nantes",
          type: "Ville",
          project: "Automatisation de l'analyse des délibérations et des comptes rendus de conseils municipaux par IA",
          results: "Gain de productivité significatif dans le traitement des décisions"
        },
        {
          collectivite: "Département de la Seine-Saint-Denis",
          type: "Département",
          project: "Outil d'aide à la décision basé sur la data pour optimiser l'allocation budgétaire",
          results: "Amélioration du pilotage stratégique et de la répartition des ressources"
        }
      ]
    },
    { 
      domain: "Relation aux usagers", 
      percentage: 20,
      useCases: [
        "Traitement et personnalisation des demandes : L'IA est spécifiquement utilisée pour traiter les demandes des administrés et fournir des réponses personnalisées, ce domaine étant en forte progression dans les projets d'IA.",
        "Soutien à l'inclusion et à l'accueil multilingue : L'IA est mobilisée pour développer l'accueil de tous les publics, y compris pour l'inclusion et la gestion des langues.",
        "Réservation face à l'humain : L'utilisation de l'IA pour proposer un robot interactif afin d'accueillir les usagers et les guider dans leurs démarches administratives (l'« IA au guichet ») est le cas d'usage qui génère le plus de sentiments partagés chez les Français. De fait, 81% des Français préfèrent s'adresser à un humain plutôt qu'à une messagerie instantanée avec une IA."
      ],
      examples: [
        {
          collectivite: "Ville de Marseille",
          type: "Ville",
          project: "Chatbot multilingue pour l'accueil des usagers (français, anglais, arabe) avec traduction automatique par IA",
          results: "Amélioration de l'accessibilité pour les publics non-francophones"
        },
        {
          collectivite: "Métropole de Toulouse",
          type: "Métropole",
          project: "Système IA de personnalisation des réponses aux demandes citoyennes",
          results: "Réduction de 40% du temps de réponse"
        },
        {
          collectivite: "Ville de Rennes",
          type: "Ville",
          project: "Assistant virtuel pour guider les usagers dans leurs démarches administratives en ligne",
          results: "Augmentation de la satisfaction usager et désengorgement des guichets"
        }
      ]
    },
    { 
      domain: "Aménagement du territoire", 
      percentage: 14,
      useCases: [
        "Aide à la décision en urbanisme : L'IA est perçue comme devant jouer un rôle essentiel ou important dans l'urbanisme et l'aménagement du territoire, selon 70% des Français.",
        "Promotion de l'égalité territoriale : L'usage des données est jugé susceptible d'améliorer l'aménagement du territoire et l'égalité territoriale, en particulier en réduisant les disparités entre le monde rural et les villes.",
        "Exploitation des référentiels nationaux : Les projets d'aménagement s'appuient sur l'utilisation des données ouvertes, notamment celles de l'État, ses agences et opérateurs (91% des collectivités les privilégient), ce qui inclut les grands référentiels comme le plan cadastral informatisé."
      ],
      examples: [
        {
          collectivite: "Région Île-de-France",
          type: "Région",
          project: "Plateforme d'analyse prédictive des besoins en logements sociaux par IA et données INSEE",
          results: "Meilleure anticipation des besoins et optimisation de la planification"
        },
        {
          collectivite: "Métropole de Grenoble",
          type: "Métropole",
          project: "Outil d'aide à la décision urbanistique intégrant les données cadastrales, démographiques et environnementales",
          results: "Décisions d'aménagement plus éclairées et durables"
        }
      ]
    },
    { 
      domain: "Autre", 
      percentage: 12,
      useCases: [
        "Autres domaines d'usage : Certains projets d'IA dans les collectivités territoriales concernent d'autres domaines spécifiques non classés dans les catégories principales.",
        "Expérimentations variées : Les collectivités explorent différents cas d'usage de l'IA dans des domaines émergents ou transversaux.",
        "Innovation et adaptation : Les collectivités adaptent l'usage de l'IA à leurs besoins spécifiques et contextes locaux."
      ],
      examples: [
        {
          collectivite: "Ville de Lyon",
          type: "Ville",
          project: "IA pour recommandations culturelles personnalisées dans les équipements municipaux",
          results: "Augmentation de la fréquentation et satisfaction des usagers"
        },
        {
          collectivite: "Département du Var",
          type: "Département",
          project: "Optimisation de l'utilisation des équipements sportifs par analyse de données",
          results: "Meilleure répartition et disponibilité des infrastructures"
        }
      ]
    },
    { 
      domain: "Déchets", 
      percentage: 11,
      useCases: [
        "Optimisation de la collecte et du tri : 40% des Français estiment que l'usage des données par les acteurs publics est susceptible d'améliorer la gestion de la collecte et du tri des déchets.",
        "Alignement des pratiques et des attentes : La gestion des déchets fait partie des domaines où les attentes des Français concernant l'usage des données sont bien alignées avec les pratiques des collectivités.",
        "Gestion du service public local : L'utilisation des données par les collectivités locales pour la gestion générale des services publics, y compris les déchets, est un usage constant."
      ],
      examples: [
        {
          collectivite: "Métropole de Nice Côte d'Azur",
          type: "Métropole",
          project: "Optimisation des tournées de collecte par IA",
          results: "Économie de 15% de carburant et réduction des émissions CO2"
        },
        {
          collectivite: "Ville de Lille",
          type: "Ville",
          project: "Prédiction des taux de remplissage des conteneurs par capteurs et IA",
          results: "Collecte plus efficace et réduction des débordements"
        },
        {
          collectivite: "Communauté d'agglomération de La Rochelle",
          type: "Agglomération",
          project: "IA pour améliorer le tri et détecter les erreurs de tri des usagers",
          results: "Amélioration de la qualité du tri et sensibilisation des citoyens"
        }
      ]
    },
    { 
      domain: "Sécurité", 
      percentage: 10,
      useCases: [
        "Vidéoprotection et détection de comportements suspects : L'IA est utilisée pour analyser en direct les images de vidéoprotection dans le but de détecter et d'identifier les comportements suspects, un usage soutenu par 75% des Français.",
        "Rôle essentiel pour la protection des biens et personnes : 72% des Français estiment que l'IA jouera un rôle essentiel ou important dans la sécurité des biens et des personnes dans les années à venir.",
        "Amélioration de la sécurité via les données : L'usage des données par les acteurs publics est perçu comme susceptible d'améliorer la sécurité des biens et des personnes."
      ],
      examples: [
        {
          collectivite: "Ville de Nice",
          type: "Ville",
          project: "Analyse vidéo par IA pour détecter les comportements à risque (attroupements, colis abandonnés)",
          results: "Amélioration de la prévention et de la réactivité des services de sécurité"
        },
        {
          collectivite: "Métropole de Bordeaux",
          type: "Métropole",
          project: "Prédiction des zones à risque d'incivilités pour optimiser les patrouilles de police municipale",
          results: "Meilleure allocation des ressources de sécurité publique"
        }
      ]
    },
    { 
      domain: "Mobilité", 
      percentage: 10,
      useCases: [
        "Optimisation de la gestion du trafic urbain : L'IA est utilisée pour optimiser la gestion du trafic urbain, notamment en exploitant les données des automobilistes en temps réel. 72% des Français sont favorables à ce recours.",
        "Amélioration des transports et de la mobilité : L'usage des données est jugé susceptible d'améliorer les transports et la mobilité personnelle et collective. De plus, 71% des Français estiment que l'IA jouera un rôle essentiel ou important dans les transports dans les villes.",
        "Comptage des flux : Les projets data et IA s'appuient sur la collecte de données, y compris le comptage des fréquentations et des véhicules, souvent via des réseaux de capteurs."
      ],
      examples: [
        {
          collectivite: "Métropole du Grand Paris",
          type: "Métropole",
          project: "Prédiction des flux de transport en temps réel pour optimiser la régulation du trafic",
          results: "Réduction des temps de trajet et amélioration de la fluidité"
        },
        {
          collectivite: "Ville de Montpellier",
          type: "Ville",
          project: "IA pour optimiser les feux tricolores en fonction du trafic réel",
          results: "Diminution des temps d'attente et de la congestion"
        },
        {
          collectivite: "Métropole de Lyon",
          type: "Métropole",
          project: "Système de prédiction de la demande de vélos en libre-service",
          results: "Meilleure disponibilité et répartition des vélos dans les stations"
        }
      ]
    },
    { 
      domain: "Eau", 
      percentage: 9,
      useCases: [
        "Rôle essentiel de l'IA dans la gestion de l'eau : 78% des Français estiment que l'IA aura un rôle essentiel ou important dans la gestion de l'eau dans les années à venir.",
        "Gestion des ressources par la donnée : L'usage des données est susceptible d'améliorer la bonne gestion des ressources, notamment l'eau et l'énergie.",
        "Déploiement de capteurs pour le suivi : Le déploiement de réseaux de capteurs (en forte progression à 27% des collectivités) est souvent utilisé dans le domaine de la gestion de l'eau."
      ],
      examples: [
        {
          collectivite: "Métropole d'Aix-Marseille-Provence",
          type: "Métropole",
          project: "Détection des fuites d'eau par IA et capteurs IoT",
          results: "Économie de 20% sur les pertes en eau du réseau"
        },
        {
          collectivite: "Ville de Brest",
          type: "Ville",
          project: "Prédiction de la qualité de l'eau potable par analyse de données en temps réel",
          results: "Garantie de la qualité et anticipation des problèmes"
        },
        {
          collectivite: "Syndicat des Eaux Île-de-France",
          type: "Syndicat",
          project: "IA pour optimiser la gestion des réseaux d'eau et anticiper les pannes",
          results: "Réduction des interruptions de service et maintenance prédictive"
        }
      ]
    },
    { 
      domain: "Gestion de l'espace public", 
      percentage: 9,
      useCases: [
        "Comptage des flux et fréquentation : L'utilisation des données issues de capteurs variés permet le comptage des fréquentations (piétons, véhicules, etc.) dans l'espace public.",
        "Amélioration de la qualité des services locaux : L'usage des données est susceptible d'améliorer la qualité des services publics au niveau local.",
        "Gestion des services publics : Les collectivités locales utilisent les données pour la gestion générale du service public, qui englobe l'espace public."
      ],
      examples: [
        {
          collectivite: "Ville de Nantes",
          type: "Ville",
          project: "Détection automatique des dégradations de voirie par IA et photos satellites",
          results: "Intervention plus rapide et meilleure priorisation des réparations"
        },
        {
          collectivite: "Métropole de Toulouse",
          type: "Métropole",
          project: "Optimisation de l'entretien des espaces verts par analyse prédictive",
          results: "Réduction des coûts et amélioration de la qualité des espaces publics"
        }
      ]
    },
    { 
      domain: "Environnement", 
      percentage: 8,
      useCases: [
        "Collecte de données environnementales : L'IA et la data s'appuient sur la collecte de données via des capteurs variés pour mesurer des facteurs environnementaux tels que la qualité de l'air et les températures.",
        "Faciliter la transition écologique : L'usage des données par les acteurs publics est perçu comme susceptible d'apporter des améliorations dans le domaine de la transition écologique (30% des Français le pensent).",
        "Lutte contre le réchauffement climatique : 68% des Français pensent que l'IA aura un rôle essentiel ou important dans la lutte contre le réchauffement climatique."
      ],
      examples: [
        {
          collectivite: "Région Nouvelle-Aquitaine",
          type: "Région",
          project: "Surveillance de la qualité de l'air par IA et capteurs, alertes automatiques",
          results: "Meilleure information des citoyens et prévention des pics de pollution"
        },
        {
          collectivite: "Ville de Grenoble",
          type: "Ville",
          project: "Prédiction des îlots de chaleur urbains pour orienter les politiques de végétalisation",
          results: "Adaptation au changement climatique et amélioration du confort urbain"
        },
        {
          collectivite: "Métropole de Strasbourg",
          type: "Métropole",
          project: "Analyse IA de l'impact carbone des politiques publiques",
          results: "Décisions plus éclairées pour la transition écologique"
        }
      ]
    },
    { 
      domain: "Énergie et éclairage", 
      percentage: 6,
      useCases: [
        "Amélioration de l'efficacité énergétique des bâtiments : 82% des Français sont d'accord avec le fait que le service public utilise l'IA pour réduire l'éclairage et le chauffage des bâtiments publics en fonction des mesures de fréquentation en temps réel.",
        "Rôle essentiel dans la gestion des consommations : 80% des Français estiment que l'IA jouera un rôle essentiel ou important dans la gestion des consommations énergétiques.",
        "Gestion des ressources par les données : L'usage des données est susceptible d'améliorer la bonne gestion des ressources, incluant l'énergie et l'eau."
      ],
      examples: [
        {
          collectivite: "Ville de Dijon",
          type: "Ville",
          project: "Pilotage intelligent de l'éclairage public par IA",
          results: "65% d'économies d'énergie sur l'éclairage public"
        },
        {
          collectivite: "Métropole de Rennes",
          type: "Métropole",
          project: "Optimisation de la consommation énergétique des bâtiments publics par IA prédictive",
          results: "Réduction significative de la facture énergétique et des émissions"
        },
        {
          collectivite: "Ville de Paris",
          type: "Ville",
          project: "Détection des anomalies de consommation énergétique dans les équipements municipaux",
          results: "Maintenance prédictive et évitement du gaspillage énergétique"
        }
      ]
    },
    { 
      domain: "Patrimoine", 
      percentage: 6,
      useCases: [
        "Pilotage des politiques publiques : La gestion du patrimoine s'inscrit dans le cadre du pilotage des politiques publiques, un domaine où 74% des collectivités utilisent la donnée.",
        "Collecte de données techniques : Les projets s'appuient sur le déploiement croissant des réseaux de capteurs (27% des collectivités) qui peuvent être utilisés pour le suivi technique du patrimoine (bâtiments, infrastructures).",
        "Amélioration de la qualité du service : L'amélioration de la qualité du service public est l'objectif prioritaire pour 83% des collectivités qui utilisent des données, ce qui peut concerner la maintenance et la gestion patrimoniale."
      ],
      examples: [
        {
          collectivite: "Ville de Lyon",
          type: "Ville",
          project: "Numérisation et classification automatique par IA de 50 000 documents d'archives historiques",
          results: "Meilleur accès au patrimoine et facilitation de la recherche"
        },
        {
          collectivite: "Département de la Dordogne",
          type: "Département",
          project: "IA pour surveiller l'état de conservation des monuments historiques",
          results: "Anticipation des besoins de restauration et préservation du patrimoine"
        }
      ]
    },
    { 
      domain: "Développement économique", 
      percentage: 5,
      useCases: [
        "Génération de croissance et de productivité : L'IA est vue par 54% des Français comme ayant un impact important sur la productivité et étant une source importante de croissance économique.",
        "Soutien à l'emploi : L'usage des données est jugé susceptible d'améliorer le développement économique et l'emploi.",
        "Retombées économiques territoriales : Les retombées économiques au bénéfice du territoire (comme la création d'emplois) sont citées par 24% des Français comme un avantage potentiel de l'utilisation de l'IA par le service public."
      ],
      examples: [
        {
          collectivite: "Région Auvergne-Rhône-Alpes",
          type: "Région",
          project: "Plateforme IA de matching entre entreprises et zones d'activité disponibles",
          results: "Accélération de l'implantation d'entreprises et développement économique"
        },
        {
          collectivite: "Métropole de Nantes",
          type: "Métropole",
          project: "Analyse prédictive des secteurs économiques porteurs par IA",
          results: "Orientation stratégique des politiques d'accompagnement"
        }
      ]
    },
    { 
      domain: "Action sociale", 
      percentage: 4,
      useCases: [
        "Soutien aux politiques d'aide sociale : 58% des Français estiment que l'IA jouera un rôle essentiel ou important dans les politiques d'aide sociale dans les années à venir.",
        "Lutte contre les inégalités : L'usage des données est perçu comme susceptible d'améliorer la lutte contre les inégalités sociales et les discriminations.",
        "Amélioration de l'accueil pour l'inclusion : L'IA est utilisée pour développer l'accueil des publics, y compris pour des objectifs d'inclusion (gestion des langues, etc.)."
      ],
      examples: [
        {
          collectivite: "Département du Nord",
          type: "Département",
          project: "IA pour détecter les situations de fragilité sociale et prévenir le non-recours aux droits",
          results: "Meilleur accès aux aides pour les populations vulnérables"
        },
        {
          collectivite: "Ville de Marseille",
          type: "Ville",
          project: "Optimisation de l'attribution des logements sociaux par algorithme et données sociales",
          results: "Attribution plus équitable et transparente des logements"
        }
      ]
    },
    { 
      domain: "Tourisme", 
      percentage: 2,
      useCases: [
        "Développement de nouveaux services : L'utilisation de l'IA est citée par 20% des Français pour le développement de nouveaux services ou de nouvelles politiques publiques.",
        "Amélioration de l'information aux citoyens/usagers : L'IA peut être utilisée pour améliorer l'information et la transparence vis-à-vis des citoyens (avantage cité par 29% des Français).",
        "Pilotage des politiques publiques : L'IA peut améliorer l'évaluation et le pilotage des politiques publiques, ce qui inclut les stratégies territoriales liées au tourisme."
      ],
      examples: [
        {
          collectivite: "Ville de Nice",
          type: "Ville",
          project: "Chatbot touristique multilingue alimenté par IA pour recommandations personnalisées",
          results: "Amélioration de l'expérience visiteur et disponibilité 24/7"
        },
        {
          collectivite: "Région Bretagne",
          type: "Région",
          project: "Analyse des flux touristiques par IA pour mieux répartir les visiteurs",
          results: "Désengorgement des sites populaires et valorisation d'autres lieux"
        }
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

              {usages[selectedUsage].examples && (
                <div className="mt-8 space-y-6">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Exemples concrets
                  </h3>
                  
                  <div className="space-y-4">
                    {usages[selectedUsage].examples?.map((example, idx) => (
                      <div 
                        key={idx} 
                        className="p-5 bg-gradient-to-br from-card to-card/50 rounded-lg border-2 border-border hover:border-primary transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-bold text-accent">
                              {example.collectivite}
                            </h4>
                            <Badge variant="secondary" className="mt-1">
                              {example.type}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-semibold text-muted-foreground mb-1">
                              Projet :
                            </p>
                            <p className="text-foreground leading-relaxed">
                              {example.project}
                            </p>
                          </div>
                          
                          <div className="pt-3 border-t border-border">
                            <div className="flex items-start gap-2">
                              <TrendingUp className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-semibold text-muted-foreground mb-1">
                                  Résultats :
                                </p>
                                <p className="text-foreground leading-relaxed">
                                  {example.results}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
