import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { KeyFindings } from "@/components/KeyFindings";
import { ThemeSection } from "@/components/ThemeSection";
import { SentimentsIA } from "@/components/SentimentsIA";
import { Quiz } from "@/components/Quiz";
import { Recommendations } from "@/components/Recommendations";
import { Methodology } from "@/components/Methodology";
import { Footer } from "@/components/Footer";
import { donnees, ia, souverainete, pistesDiscussion } from "@/data";

const Index = () => (
  <div className="min-h-screen">
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
    <section id="donnees">
      <ThemeSection
        numero="1"
        titre="Les données personnelles"
        sousTitre="Un sentiment de mauvaise information et une confiance qui se concentre sur les acteurs de proximité"
        questions={donnees}
        pistes={pistesDiscussion.donnees}
        fond="bg-card"
      />
    </section>
    <section id="ia">
      <ThemeSection
        numero="2"
        titre="L'intelligence artificielle"
        sousTitre="Une perception qui continue de se détériorer, et une demande forte de contrôle et de transparence"
        questions={ia}
        pistes={pistesDiscussion.ia}
        fond="bg-background"
      >
        <SentimentsIA />
      </ThemeSection>
    </section>
    <section id="souverainete">
      <ThemeSection
        numero="3"
        titre="La souveraineté numérique"
        sousTitre="Nouveau en 2026 : un concept peu connu, mais dont les éléments de mise en place suscitent l'adhésion"
        questions={souverainete}
        pistes={pistesDiscussion.souverainete}
        fond="bg-card"
      />
    </section>
    <section id="recommandations">
      <Recommendations />
    </section>
    <section id="methodologie">
      <Methodology />
    </section>
    <Footer />
  </div>
);

export default Index;
