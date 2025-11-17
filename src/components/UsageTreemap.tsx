import treemapImage from "@/assets/usages-ia-treemap.png";

export const UsageTreemap = () => {
  const usages = [
    { 
      domain: "Administration et gestion interne", 
      percentage: 69,
      useCases: [
        "Assistance administrative par IA générative",
        "Amélioration du pilotage des politiques publiques",
        "Optimisation budgétaire"
      ]
    },
    { 
      domain: "Environnement", 
      percentage: 66,
      useCases: [
        "Gestion de l'environnement",
        "Collecte de données environnementales",
        "Faciliter la transition écologique"
      ]
    },
    { 
      domain: "Mobilité", 
      percentage: 60,
      useCases: [
        "Optimisation du trafic urbain",
        "Amélioration de la gestion des déplacements",
        "Gestion des transports"
      ]
    },
    { 
      domain: "Aménagement du territoire", 
      percentage: 57,
      useCases: [
        "Égalité territoriale",
        "Urbanisme",
        "Utilisation des données de référence"
      ]
    },
    { 
      domain: "Énergie et éclairage", 
      percentage: 55,
      useCases: [
        "Efficacité énergétique des bâtiments",
        "Gestion des consommations énergétiques",
        "Gestion des ressources"
      ]
    },
    { 
      domain: "Patrimoine", 
      percentage: 53,
      useCases: [
        "Pilotage des politiques publiques",
        "Collecte de données techniques",
        "Amélioration de la qualité du service"
      ]
    },
    { 
      domain: "Développement économique", 
      percentage: 52,
      useCases: [
        "Soutien à l'emploi",
        "Génération de croissance",
        "Retombées économiques territoriales"
      ]
    },
    { 
      domain: "Eau", 
      percentage: 50,
      useCases: [
        "Gestion de l'eau",
        "Déploiement de capteurs",
        "Gestion des ressources"
      ]
    },
    { 
      domain: "Déchets", 
      percentage: 46,
      useCases: [
        "Optimisation de la collecte",
        "Gestion du service public",
        "Utilisation des données de capteurs"
      ]
    },
    { 
      domain: "Tourisme", 
      percentage: 45,
      useCases: [
        "Développement de nouveaux services",
        "Amélioration de l'information aux citoyens/usagers",
        "Évaluation des politiques publiques"
      ]
    },
    { 
      domain: "Gestion de l'espace public", 
      percentage: 44,
      useCases: [
        "Comptage des flux",
        "Gestion de l'espace public",
        "Analyse de données de fréquentation"
      ]
    },
    { 
      domain: "Action sociale", 
      percentage: 39,
      useCases: [
        "Lutte contre les inégalités",
        "Politiques d'aide sociale",
        "Amélioration de la relation aux usagers"
      ]
    },
    { 
      domain: "Sécurité", 
      percentage: 35,
      useCases: [
        "Vidéoprotection et détection de comportements suspects",
        "Sécurité des biens et des personnes",
        "Gestion de la sécurité"
      ]
    },
    { 
      domain: "Citoyenneté", 
      percentage: 32,
      useCases: [
        "Amélioration de l'information citoyenne",
        "Traitement des demandes des administrés",
        "Mise en place d'une gouvernance citoyenne"
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
                className="p-6 bg-background rounded-lg border-2 border-border hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground">{usage.domain}</h3>
                  <span className="text-3xl font-bold text-primary ml-4">{usage.percentage}%</span>
                </div>
                <div className="space-y-2">
                  {usage.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">{idx + 1}.</span>
                      <p className="text-sm text-muted-foreground">{useCase}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
