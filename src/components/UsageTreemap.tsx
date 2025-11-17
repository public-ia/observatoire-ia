import treemapImage from "@/assets/usages-ia-treemap.png";

export const UsageTreemap = () => {
  const usages = [
    { domain: "Administration et gestion interne", percentage: 69 },
    { domain: "Environnement", percentage: 66 },
    { domain: "Mobilité", percentage: 60 },
    { domain: "Aménagement du territoire", percentage: 57 },
    { domain: "Énergie et éclairage", percentage: 55 },
    { domain: "Patrimoine", percentage: 53 },
    { domain: "Développement économique", percentage: 52 },
    { domain: "Eau", percentage: 50 },
    { domain: "Déchets", percentage: 46 },
    { domain: "Tourisme", percentage: 45 },
    { domain: "Gestion de l'espace public", percentage: 44 },
    { domain: "Action sociale", percentage: 39 },
    { domain: "Sécurité", percentage: 35 },
    { domain: "Citoyenneté", percentage: 32 }
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {usages.map((usage, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary transition-all"
              >
                <span className="text-foreground font-medium">{usage.domain}</span>
                <span className="text-2xl font-bold text-primary ml-4">{usage.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
