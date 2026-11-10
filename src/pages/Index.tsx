import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { KeyFindings } from "@/components/KeyFindings";
import { ThemeSection } from "@/components/ThemeSection";
import { BlocList } from "@/components/Blocs";
import { CitizenTabs } from "@/components/CitizenTabs";
import { Quiz } from "@/components/Quiz";
import { Recommendations } from "@/components/Recommendations";
import { Methodology } from "@/components/Methodology";
import { Footer } from "@/components/Footer";
import { useScrollAnimations } from "@/hooks/use-scroll-animations";
import { dataTerritoriale, iaTerritoriale, souverainete, pistesDiscussion } from "@/data";

const Index = () => {
  useScrollAnimations();
  return (
  <div className="min-h-screen">
    <main className="relative z-10 bg-background">
    <Navigation />
    <section id="accueil">
      <Hero />
    </section>
    <section id="chiffres-cles">
      <KeyFindings />
    </section>
    <section id="quiz">
      <Quiz />
    </section>
    <section id="data">
      <ThemeSection
        surTitre="Baromètre — Partie 1"
        titre="La data territoriale"
        sousTitre="7 collectivités sur 10 engagées dans des projets data : un niveau élevé, stable pour la première fois"
        pistes={pistesDiscussion.data}
        fond="bg-card"
      >
        <BlocList blocs={dataTerritoriale} />
      </ThemeSection>
    </section>
    <section id="souverainete">
      <ThemeSection
        surTitre="Baromètre — Partie 2"
        titre="La souveraineté"
        sousTitre="Un enjeu national, mais pas encore local"
        pistes={pistesDiscussion.souverainete}
        fond="bg-background"
      >
        <BlocList blocs={souverainete} />
      </ThemeSection>
    </section>
    <section id="ia">
      <ThemeSection
        surTitre="Baromètre — Partie 3"
        titre="L'IA territoriale"
        sousTitre="Après l'engouement, la maîtrise ? Méthode, encadrement des usages et mesure des impacts"
        pistes={pistesDiscussion.ia}
        fond="bg-card"
      >
        <BlocList blocs={iaTerritoriale} />
      </ThemeSection>
    </section>
    <section id="citoyens">
      <ThemeSection
        surTitre="Enquête Ipsos bva"
        titre="Qu'en pensent les Français ?"
        sousTitre="Une perception de l'IA qui continue de se détériorer, et une demande forte de contrôle et de transparence"
        pistes={pistesDiscussion.citoyens}
        fond="bg-background"
      >
        <CitizenTabs />
      </ThemeSection>
    </section>
    <section id="recommandations">
      <Recommendations />
    </section>
    <section id="methodologie">
      <Methodology />
    </section>
    </main>
    <Footer />
  </div>
  );
};

export default Index;
