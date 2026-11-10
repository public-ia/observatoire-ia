import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { citoyensDonnees, citoyensIA, citoyensSouverainete } from "@/data";
import { BlocList } from "./Blocs";
import { SentimentsIA } from "./SentimentsIA";

const declencheur =
  "px-4 py-3 text-base font-semibold rounded-md text-accent data-[state=active]:bg-accent data-[state=active]:text-accent-foreground";

export const CitizenTabs = () => (
  <Tabs defaultValue="ia">
    <TabsList className="flex flex-wrap h-auto w-full justify-center gap-2 bg-card border-2 border-border p-2 mb-8">
      <TabsTrigger value="ia" className={declencheur}>
        L'intelligence artificielle
      </TabsTrigger>
      <TabsTrigger value="donnees" className={declencheur}>
        Les données personnelles
      </TabsTrigger>
      <TabsTrigger value="souverainete" className={declencheur}>
        La souveraineté numérique
      </TabsTrigger>
    </TabsList>
    <TabsContent value="ia" className="space-y-8">
      <SentimentsIA />
      <BlocList blocs={citoyensIA} />
    </TabsContent>
    <TabsContent value="donnees">
      <BlocList blocs={citoyensDonnees} />
    </TabsContent>
    <TabsContent value="souverainete">
      <BlocList blocs={citoyensSouverainete} />
    </TabsContent>
  </Tabs>
);
