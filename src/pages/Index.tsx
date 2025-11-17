import { Hero } from "@/components/Hero";
import { KeyFindings } from "@/components/KeyFindings";
import { StudySection } from "@/components/StudySection";
import { UsageTreemap } from "@/components/UsageTreemap";
import { CitizenPerception } from "@/components/CitizenPerception";
import { Recommendations } from "@/components/Recommendations";
import { Footer } from "@/components/Footer";

const Index = () => {
  const collectivitiesInsights = [
    {
      title: "Généralisation des projets data",
      content: "74% des collectivités de plus de 3 500 habitants ont engagé au moins un projet data en 2025, contre 40% en 2022. Pour les communes de moins de 3 500 habitants, le taux est passé de 6% à 49%.",
      tag: "Progression"
    },
    {
      title: "Implication des directions générales",
      content: "73% des directions générales sont impliquées dans la gestion des données (contre 53% en 2022), signe d'une prise en main stratégique au plus haut niveau.",
      tag: "Gouvernance"
    },
    {
      title: "L'essor de l'IA générative",
      content: "84% des collectivités qui expérimentent l'IA utilisent l'IA générative (contre 52% en 2024). Elle est perçue comme accessible et peu coûteuse, irrigant de nouveaux domaines d'application.",
      tag: "Innovation"
    },
    {
      title: "Défis de qualité des données",
      content: "50% des collectivités expérimentées identifient l'accès limité à des données de qualité comme premier obstacle. Le manque de temps (62%) et de compétences (62%) restent des freins majeurs.",
      tag: "Enjeux"
    },
    {
      title: "Objectifs en tension",
      content: "Priorité à la qualité du service public (83%) et au pilotage (66%), mais recul préoccupant de la transparence comme objectif (43% en 2025 vs 59% en 2024).",
      tag: "Stratégie"
    }
  ];

  const maturityInsights = [
    {
      title: "Structuration de la gouvernance",
      content: "50% des collectivités de plus de 3 500 habitants ont adopté ou prévoient d'adopter un cadre stratégique. Les conventions partenariales progressent (60% vs 42% en 2024).",
      tag: "Maturité"
    },
    {
      title: "IA dans l'administration",
      content: "45% des projets IA concernent l'administration et la gestion interne, 20% la relation aux usagers. Cependant, 48% des collectivités n'ont donné aucune consigne à leurs agents.",
      tag: "Adoption"
    },
    {
      title: "Sécurisation juridique",
      content: "Les clauses data sont mobilisées par 51% des collectivités pour garantir le RGPD (97%) et asseoir le statut public des données (74% en 2025 vs 53% en 2024).",
      tag: "Conformité"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <KeyFindings />
      
      <StudySection
        title="État des lieux dans les collectivités"
        subtitle="Baromètre 2025 : Une montée en maturité incontestable"
        insights={collectivitiesInsights}
        backgroundColor="bg-card"
      />
      
      <UsageTreemap />
      
      <StudySection
        title="Gouvernance et Structuration"
        subtitle="De l'expérimentation à la professionnalisation"
        insights={maturityInsights}
        backgroundColor="bg-background"
      />
      
      <CitizenPerception />
      
      <Recommendations />
      
      <Footer />
    </div>
  );
};

export default Index;
