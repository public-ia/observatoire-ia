/**
 * Édition 2026 : métadonnées, synthèses et contenus d'animation.
 * Les chiffres repris ici viennent de `barometre2026.ts` (source principale)
 * et de `ipsos2026.ts` (regard des Français).
 */
import type { Rappels, Source } from "./types";

export const edition = {
  annee: 2026,
  lienObservatoire: "https://observatoire.data-publica.eu/",
  barometre: {
    titre: "Les collectivités territoriales, la donnée et l'IA",
    nom: "Baromètre 2026 de l'Observatoire Data Publica",
    numero: "5e édition",
    echantillon: "382 collectivités et établissements publics locaux",
    terrain: "Enquête conduite de mai à juillet 2026, administrée avec l'outil open source LimeSurvey",
    composition:
      "Communes de moins de 3 500 habitants 31 %, de 3 500 à 10 000 habitants 9 %, de 10 000 à 100 000 habitants 11 %, de plus de 100 000 habitants 2 % ; communautés de communes 11 %, d'agglomération 9 %, urbaines 2 % ; métropoles 5 % ; départements 9 % ; régions 3 % ; autres (syndicats mixtes, opérateurs publics de services numériques…) 8 %",
    lecture:
      "Certains résultats sont présentés hors communes de moins de 3 500 habitants, ou parmi les seules collectivités concernées : la base est indiquée sous chaque graphique.",
    pilotage:
      "Enquête pilotée par Jacques Priol, avec la contribution de Simon Chignard et Jeanne Chicote-Navas (Civiteo). Avec le soutien de la Banque des Territoires, du groupe La Poste et d'Orange, en partenariat avec La Gazette des communes.",
  },
  ipsos: {
    titre: "La perception des Français de la gestion des données et de l'utilisation de l'IA par les acteurs publics",
    nom: "Enquête Ipsos bva pour l'Observatoire Data Publica",
    echantillon: "1 000 personnes, échantillon national représentatif de la population française âgée de 18 ans et plus",
    terrain: "Du 16 au 22 juillet 2026, par Internet via l'Access Panel Online d'Ipsos",
    methode:
      "Méthode des quotas (sexe, âge, profession de la personne de référence du foyer, catégorie d'agglomération, département) ; échantillon pondéré par calage sur marges",
    marge:
      "Intervalle de confiance à 95 % : pour un résultat de 50 %, la valeur réelle se situe entre 46,9 % et 53,1 % ; pour 80 %, entre 77,5 % et 82,5 %. Rappels disponibles pour 2025, 2024 et 2022.",
  },
};

export const SOURCES: Record<Source, { court: string; reference: string }> = {
  barometre: { court: "Baromètre", reference: "Baromètre 2026 de l'Observatoire Data Publica" },
  ipsos: { court: "Enquête Ipsos", reference: "Enquête Ipsos bva pour l'Observatoire Data Publica, juillet 2026, rapport Ipsos" },
};

export type Icone =
  | "ia" | "generative" | "charte" | "data" | "dialogue" | "qualite" | "souverainete" | "mesure"
  | "sentiment" | "controle" | "information" | "humain" | "formation" | "proximite";

export interface ChiffreCle {
  value: number;
  label: string;
  description: string;
  icone: Icone;
  source: Source;
  rappels?: Rappels;
  page: number;
}

export const chiffresCles: ChiffreCle[] = [
  { source: "barometre", value: 56, label: "Projets IA engagés", description: "des collectivités (hors communes de moins de 3 500 habitants) ont engagé au moins un projet d'IA ; 20 % de plus prévoient de le faire dans l'année", icone: "ia", rappels: { "2025": 49, "2024": 36, "2023": 28 }, page: 30 },
  { source: "barometre", value: 86, label: "IA générative", description: "des collectivités engagées dans des projets IA testent ou déploient de l'IA générative", icone: "generative", rappels: { "2024": 52 }, page: 34 },
  { source: "barometre", value: 75, label: "Charte IA", description: "des collectivités ayant engagé une démarche IA ont produit une charte ou un document de référence", icone: "charte", rappels: { "2025": 57 }, page: 39 },
  { source: "barometre", value: 44, label: "« Pas d'IA sans data »", description: "des collectivités ayant engagé des projets IA butent sur l'accès à des données de qualité, contre 28 % de celles qui n'ont pas débuté", icone: "qualite", page: 41 },
  { source: "barometre", value: 26, label: "Dialogue social", description: "seulement des collectivités ayant engagé une démarche IA ont inscrit le sujet à l'agenda du dialogue social", icone: "dialogue", page: 39 },
  { source: "barometre", value: 15, label: "Souveraineté intégrée", description: "des collectivités ont intégré la souveraineté numérique dans leurs choix stratégiques ; 40 % identifient le sujet sans levier d'action concret", icone: "souverainete", page: 25 },
  { source: "ipsos", value: 55, label: "Sentiments négatifs envers l'IA", description: "des Français ressentent de l'inquiétude ou du rejet quand ils entendent parler d'IA", icone: "sentiment", rappels: { "2025": 51, "2024": 51, "2022": 36 }, page: 20 },
  { source: "ipsos", value: 87, label: "Contrôle strict", description: "veulent que le service public garde le contrôle le plus strict sur l'IA, même au prix de l'efficacité", icone: "controle", rappels: { "2025": 86, "2024": 84 }, page: 23 },
  { source: "ipsos", value: 93, label: "Être informé de l'usage de l'IA", description: "jugent prioritaire ou important d'être informés à chaque fois qu'une IA est utilisée", icone: "information", page: 25 },
];

export interface Tendance {
  label: string;
  source: Source;
  /** Une hausse est-elle une bonne nouvelle pour l'action publique ? */
  hausseFavorable: boolean;
  points: Array<{ annee: string; value: number }>;
  page: number;
}

export const tendances: Tendance[] = [
  { source: "barometre", label: "Collectivités ayant engagé un projet IA", hausseFavorable: true, page: 30, points: [{ annee: "2023", value: 28 }, { annee: "2024", value: 36 }, { annee: "2025", value: 49 }, { annee: "2026", value: 56 }] },
  { source: "barometre", label: "Part de l'IA générative dans les projets IA", hausseFavorable: true, page: 34, points: [{ annee: "2024", value: 52 }, { annee: "2026", value: 86 }] },
  { source: "barometre", label: "Communes de moins de 3 500 habitants ayant engagé un projet data", hausseFavorable: true, page: 9, points: [{ annee: "2022", value: 6 }, { annee: "2026", value: 47 }] },
  { source: "ipsos", label: "Sentiments négatifs des Français envers l'IA", hausseFavorable: false, page: 20, points: [{ annee: "2022", value: 36 }, { annee: "2024", value: 51 }, { annee: "2025", value: 51 }, { annee: "2026", value: 55 }] },
  { source: "ipsos", label: "Confiance des Français dans l'IA", hausseFavorable: true, page: 21, points: [{ annee: "2022", value: 45 }, { annee: "2024", value: 35 }, { annee: "2025", value: 32 }, { annee: "2026", value: 34 }] },
  { source: "ipsos", label: "Confiance dans la commune ou l'intercommunalité pour la gestion des données", hausseFavorable: true, page: 10, points: [{ annee: "2022", value: 69 }, { annee: "2024", value: 66 }, { annee: "2025", value: 64 }, { annee: "2026", value: 64 }] },
];

/* ------------------------------------------------------------------ */
/* Outils d'animation (contenus Public IA, hors études)                */
/* ------------------------------------------------------------------ */

export interface QuizItem {
  question: string;
  reponse: number;
  explication: string;
  source: Source;
  page: number;
}

export const quiz: QuizItem[] = [
  { source: "barometre", question: "Quelle part des collectivités (hors communes de moins de 3 500 habitants) a engagé au moins un projet d'IA ?", reponse: 56, explication: "56 %, contre 49 % en 2025 et 28 % en 2023. À titre de comparaison, 18 % des entreprises françaises utilisaient l'IA en 2025 selon l'INSEE.", page: 30 },
  { source: "ipsos", question: "Quelle part des Français ressent principalement de l'inquiétude ou du rejet lorsqu'elle entend parler d'IA ?", reponse: 55, explication: "55 % de sentiments négatifs (45 % d'inquiétude, 10 % de rejet), contre 36 % en 2022.", page: 20 },
  { source: "barometre", question: "Parmi les collectivités qui ont engagé une démarche IA, quelle part a inscrit le sujet à l'agenda du dialogue social ?", reponse: 26, explication: "26 % seulement, alors que 75 % ont produit une charte et 68 % un plan de formation. Des jurisprudences ont pourtant conduit en 2026, dans le privé, à l'arrêt de projets d'IA faute de consultation des instances.", page: 39 },
  { source: "ipsos", question: "Pour obtenir une information auprès d'un service public, quelle part des Français préfère un humain aux horaires d'ouverture plutôt qu'une IA disponible à toute heure ?", reponse: 81, explication: "81 % préfèrent un humain ; 19 % une messagerie instantanée avec une IA. Dans le même temps, 31 % des collectivités ayant des projets IA en mènent pour la relation aux usagers.", page: 24 },
  { source: "barometre", question: "Parmi les collectivités ayant engagé des projets IA, quelle part cite l'accès à des données de qualité comme un obstacle ?", reponse: 44, explication: "44 %, contre 28 % de celles qui n'ont pas débuté : l'obstacle est souvent sous-estimé avant de commencer. « Pas d'IA sans data. »", page: 41 },
  { source: "barometre", question: "Quelle part des collectivités indique ne pas mesurer, pour le moment, l'impact de l'IA sur le travail et l'organisation ?", reponse: 40, explication: "40 % n'ont pas d'outil de suivi. 39 % mettent en avant des gains de temps significatifs, 28 % jugent l'impact très limité, 5 % constatent des économies budgétaires.", page: 42 },
  { source: "ipsos", question: "Quelle part des Français juge prioritaire ou important d'être informée à chaque fois qu'une IA est utilisée pour produire une décision, un document ou une illustration ?", reponse: 93, explication: "93 %, dont 69 % qui jugent cela prioritaire. C'est le premier levier de confiance testé.", page: 25 },
  { source: "barometre", question: "Parmi les collectivités ayant publié une liste d'outils d'IA autorisés, quelle part autorise ou recommande Mistral ?", reponse: 52, explication: "52 %, juste derrière Copilot (55 %). Suivent Claude (23 %), ChatGPT (21 %), DelibIA (18 %) et Gemini (16 %).", page: 36 },
  { source: "barometre", question: "Quelle part des collectivités estime avoir intégré la souveraineté numérique dans ses choix stratégiques ?", reponse: 15, explication: "15 %, et 40 % identifient le sujet sans levier d'action concret. Côté citoyens, 91 % jugent prioritaire ou important le choix de logiciels français ou européens.", page: 25 },
  { source: "ipsos", question: "Quelle part des Français souhaite que le service public garde le contrôle le plus strict sur ses outils d'IA, même s'ils perdent en efficacité ?", reponse: 87, explication: "87 %, en hausse régulière (84 % en 2024, 86 % en 2025).", page: 23 },
  { source: "barometre", question: "Quelle part des communes de moins de 3 500 habitants a déjà engagé des projets data ?", reponse: 47, explication: "47 %, et 23 % annoncent vouloir le faire. Elles étaient 6 % dans le premier baromètre en 2022.", page: 9 },
  { source: "barometre", question: "Quelle part des collectivités déclare que l'IA fait l'objet d'un portage politique ?", reponse: 35, explication: "35 % seulement. Le portage est explicite dans 67 % des régions et 44 % des métropoles, mais absent dans 88 % des communes de moins de 3 500 habitants.", page: 49 },
];

export const pistesDiscussion = {
  data: [
    "Dans votre collectivité, le sujet des données est-il suivi en direction générale ou reste-t-il l'affaire de quelques services ?",
    "62 % citent le manque de temps comme premier obstacle : quel premier projet data serait réaliste avec vos moyens actuels ?",
    "Avez-vous des règles écrites de gestion des données, ou des clauses data dans vos contrats avec les prestataires ?",
  ],
  souverainete: [
    "Savez-vous où sont hébergées les données de vos principaux logiciels métiers ?",
    "Parmi vos outils d'IA, lesquels sont français ou européens ? Lesquels ne le sont pas, et pour quelles raisons ?",
    "15 % des collectivités ont intégré la souveraineté dans leurs choix, 91 % des Français l'attendent : par où commencer ?",
  ],
  ia: [
    "Votre structure a-t-elle une charte IA ? Qui l'a rédigée, qui la connaît ?",
    "Vos données sont-elles prêtes pour l'IA ? Quel jeu de données vous manque pour votre premier cas d'usage ?",
    "L'IA a-t-elle été abordée avec les représentants du personnel ? Que faudrait-il leur présenter ?",
    "Comment mesurer ce que l'IA apporte réellement : temps gagné, qualité du service, satisfaction des agents ?",
  ],
  citoyens: [
    "Aujourd'hui, un usager peut-il savoir qu'une IA a contribué à un courrier, une décision ou une illustration de votre collectivité ?",
    "81 % préfèrent un humain au guichet : quelle place donner à un agent conversationnel sans dégrader l'accueil ?",
    "La transparence recule dans les priorités data des collectivités (49 %, contre 59 % en 2024) alors que 93 % des Français demandent une information claire : comment réconcilier les deux ?",
  ],
};

export interface Recommandation {
  titre: string;
  texte: string;
  icone: Icone;
}

export const recommandations: Recommandation[] = [
  { icone: "charte", titre: "Encadrer avant de déployer", texte: "Fixez les usages autorisés et interdits dans une charte, et rendez-la publique. 75 % des collectivités engagées dans une démarche IA l'ont fait ; 92 % des Français jugent une charte prioritaire ou importante." },
  { icone: "data", titre: "Soigner ses données d'abord", texte: "« Pas d'IA sans data » : 44 % des collectivités qui ont engagé des projets IA butent sur la qualité de leurs données. Règles de gestion, guide interne et clauses data sont les fondations." },
  { icone: "dialogue", titre: "Former et ouvrir le dialogue social", texte: "68 % des collectivités engagées prévoient un plan de formation, mais 26 % seulement ont porté l'IA au dialogue social. 83 % des Français attendent une formation systématique des agents." },
  { icone: "information", titre: "Dire quand l'IA est utilisée", texte: "93 % des Français veulent être informés à chaque usage d'une IA, et 87 % exigent un contrôle strict, même au prix de l'efficacité. La transparence recule pourtant dans les priorités des collectivités." },
  { icone: "mesure", titre: "Mesurer les impacts", texte: "40 % des collectivités ne mesurent pas l'impact de l'IA. Suivez le temps gagné, la qualité du service et la satisfaction des agents, et décidez de l'usage du temps libéré." },
  { icone: "souverainete", titre: "Faire des choix souverains", texte: "15 % des collectivités ont intégré la souveraineté dans leurs choix, alors que 94 % des Français veulent un hébergement en France ou en Europe. Localisation des données, réversibilité et clauses IA sont des leviers concrets." },
];
