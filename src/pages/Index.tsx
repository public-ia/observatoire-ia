import { Hero } from "@/components/Hero";
import { KeyFindings } from "@/components/KeyFindings";
import { StudySection } from "@/components/StudySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const collectivitiesInsights = [
    {
      title: "Adoption progressive de l'IA",
      content: "Les collectivités territoriales montrent un intérêt croissant pour l'intelligence artificielle, avec une augmentation significative des projets pilotes et des expérimentations en 2025.",
      tag: "Tendance"
    },
    {
      title: "Priorités d'application",
      content: "Les domaines privilégiés incluent l'optimisation des services publics, la gestion urbaine intelligente, et l'amélioration de la relation citoyen.",
      tag: "Focus"
    },
    {
      title: "Défis identifiés",
      content: "Les principales difficultés rencontrées concernent les compétences internes, les budgets alloués, et les questions de gouvernance des données.",
      tag: "Enjeux"
    }
  ];

  const perceptionInsights = [
    {
      title: "Confiance nuancée des citoyens",
      content: "Les Français expriment des attentes élevées concernant l'utilisation de l'IA dans le service public, tout en manifestant des préoccupations légitimes sur la protection des données personnelles.",
      tag: "Opinion"
    },
    {
      title: "Transparence et éthique",
      content: "Une forte demande de transparence émerge sur les algorithmes utilisés et leurs impacts sur les décisions administratives affectant les citoyens.",
      tag: "Attentes"
    },
    {
      title: "Formation et accompagnement",
      content: "Les citoyens souhaitent être mieux informés et accompagnés dans la compréhension des technologies d'IA déployées dans les services publics.",
      tag: "Besoin"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <KeyFindings />
      
      <StudySection
        title="État des lieux dans les collectivités"
        subtitle="Baromètre 2025 : Projets et initiatives IA"
        insights={collectivitiesInsights}
        backgroundColor="bg-card"
      />
      
      <StudySection
        title="Perception des Français"
        subtitle="Ipsos-BVA : Gestion des données et utilisation de l'IA"
        insights={perceptionInsights}
        backgroundColor="bg-background"
      />
      
      <Footer />
    </div>
  );
};

export default Index;
