/**
 * Enquête Ipsos bva pour l'Observatoire Data Publica (juillet 2026) :
 * « La perception des Français de la gestion des données et de l'utilisation
 * de l'IA par les acteurs publics ». Elle complète le baromètre des collectivités.
 * Le champ `page` renvoie à la page du rapport Ipsos.
 */
import type { Question, Rappels } from "./types";

const CONFIANCE = ["Tout à fait confiance", "Plutôt confiance", "Plutôt pas confiance", "Pas confiance du tout"];
const ACCORD = ["Tout à fait d'accord", "Plutôt d'accord", "Plutôt pas d'accord", "Pas du tout d'accord"];
const PRIORITE = ["Prioritaire", "Important mais pas prioritaire", "Secondaire"];
const NOTORIETE = ["Oui, et voit bien de quoi il s'agit", "Oui, mais ne voit pas de quoi il s'agit", "Non"];

/* ------------------------------------------------------------------ */
/* 1. Les données personnelles                                         */
/* ------------------------------------------------------------------ */

export const citoyensDonnees: Question[] = [
  {
    id: "information",
    source: "ipsos",
    page: 9,
    titre: "Les Français se sentent globalement mal informés sur l'utilisation de leurs données",
    question: "D'une manière générale, diriez-vous que vous vous sentez bien informé ou mal informé…",
    echelle: ["Très bien informé", "Plutôt bien informé", "Plutôt mal informé", "Très mal informé"],
    palette: "accord4",
    totalLabel: "% bien informé",
    items: [
      {
        label: "… sur l'utilisation de vos données personnelles par les acteurs publics (État, collectivités locales, entreprises publiques…)",
        values: [4, 29, 48, 19],
        total: 33,
        rappels: { "2025": 31, "2024": 37, "2022": 41 },
      },
      {
        label: "… sur l'utilisation de vos données personnelles par les entreprises privées",
        values: [4, 24, 49, 23],
        total: 28,
        rappels: { "2025": 27, "2024": 32, "2022": 36 },
      },
    ],
  },
  {
    id: "confiance-acteurs",
    source: "ipsos",
    page: 10,
    titre: "Les acteurs de la santé suscitent le plus de confiance ; la défiance envers les acteurs privés demeure très élevée",
    question:
      "Pour chacun des acteurs suivants, pouvez-vous me dire si concernant la gestion et l'utilisation des données en France vous lui faites tout à fait confiance, assez confiance, assez peu confiance ou pas confiance du tout ?",
    echelle: CONFIANCE,
    palette: "accord4",
    totalLabel: "% confiance",
    items: [
      { label: "Les pharmaciens", values: [20, 58, 16, 6], total: 78, rappels: { "2025": 78, "2024": 77, "2022": 78 } },
      { label: "Le système de santé, les hôpitaux, les médecins", values: [20, 54, 19, 7], total: 74, rappels: { "2025": 77, "2024": 74, "2022": 76 } },
      { label: "La sécurité sociale", values: [15, 56, 21, 8], total: 71, rappels: { "2025": 72, "2024": 72, "2022": 75 } },
      { label: "Les chercheurs et les scientifiques", values: [16, 53, 22, 9], total: 69, rappels: { "2025": 72, "2024": 70, "2022": 70 } },
      { label: "La CNIL", values: [21, 46, 24, 9], total: 67, rappels: { "2025": 69, "2024": 68, "2022": 72 } },
      { label: "Votre commune ou intercommunalité", values: [10, 54, 28, 8], total: 64, rappels: { "2025": 64, "2024": 66, "2022": 69 } },
      { label: "La région ou le département", values: [8, 52, 31, 9], total: 60, rappels: { "2025": 60, "2024": 65, "2022": 66 } },
      { label: "Les banques et les assurances", values: [9, 46, 31, 14], total: 55, rappels: { "2025": 56, "2024": 55, "2022": 55 } },
      { label: "Les entreprises publiques (SNCF, La Poste…)", values: [6, 47, 34, 13], total: 53, rappels: { "2025": 51, "2024": 56, "2022": 54 } },
      { label: "Les fournisseurs d'accès Internet", values: [5, 40, 38, 17], total: 45, rappels: { "2025": 42, "2024": 45, "2022": 42 } },
      { label: "L'État", values: [9, 35, 31, 25], total: 44, rappels: { "2025": 45, "2024": 49, "2022": 53 } },
      { label: "Les enseignes de vente en ligne", values: [4, 35, 37, 24], total: 39, rappels: { "2025": 39, "2024": 40, "2022": 40 } },
      { label: "La grande distribution", values: [3, 33, 43, 21], total: 36, rappels: { "2025": 37, "2024": 41, "2022": 40 } },
      { label: "Les moteurs de recherche", values: [4, 28, 37, 31], total: 32, rappels: { "2025": 34, "2024": 38, "2022": 34 } },
      { label: "Les fournisseurs de musique ou de films", values: [4, 28, 44, 24], total: 32, rappels: { "2025": 35, "2024": 36, "2022": 38 } },
      { label: "Les acteurs du tourisme (Booking, Airbnb…)", values: [3, 26, 44, 27], total: 29, rappels: { "2025": 28, "2024": 34, "2022": 34 } },
      { label: "Les réseaux sociaux", values: [2, 9, 31, 58], total: 11, rappels: { "2025": 13, "2024": 19, "2022": 19 } },
    ],
  },
  {
    id: "usage-croissant",
    source: "ipsos",
    page: 12,
    titre: "L'usage croissant des données demeure largement perçu comme une mauvaise chose pour l'évolution de la société",
    question:
      "Au total, pensez-vous que l'usage croissant des données constitue une très bonne chose, une assez bonne chose, une assez mauvaise chose ou une très mauvaise chose pour l'évolution de la société ?",
    echelle: ["Une très bonne chose", "Plutôt une bonne chose", "Plutôt une mauvaise chose", "Une très mauvaise chose"],
    palette: "accord4",
    totalLabel: "% une bonne chose",
    items: [
      {
        label: "L'usage croissant des données pour l'évolution de la société",
        values: [4, 32, 48, 16],
        total: 36,
        rappels: { "2025": 36, "2024": 45, "2022": 47 },
      },
    ],
  },
  {
    id: "domaines-donnees",
    source: "ipsos",
    page: 13,
    titre: "La santé est le domaine où l'amélioration grâce à l'usage des données est la plus perçue",
    question:
      "Plus précisément, pensez-vous que l'usage des données par des acteurs publics soit susceptible d'améliorer, de détériorer ou, ni d'améliorer ni de détériorer, chacun des points suivants ?",
    echelle: ["Améliorer", "Ni améliorer, ni détériorer", "Détériorer"],
    palette: "impact3",
    totalLabel: "% améliorer",
    note: "Pour la sécurité des biens et des personnes (40 % contre 27 %), la bonne gestion des finances publiques (36 % contre 23 %) et la lutte contre les inégalités (33 % contre 21 %), les Français sont plus nombreux à anticiper une détérioration qu'une amélioration.",
    items: [
      { label: "La santé (prévention, recherche, diagnostic, traitement…)", values: [48, 30, 22], total: 48, rappels: { "2025": 49, "2024": 46, "2022": 51 } },
      { label: "La gestion de la collecte et du tri des déchets", values: [41, 39, 20], total: 41, rappels: { "2025": 40, "2024": 39, "2022": 46 } },
      { label: "Les transports et la mobilité personnelle et collective", values: [38, 41, 21], total: 38, rappels: { "2025": 37, "2024": 38, "2022": 43 } },
      { label: "La bonne gestion des ressources : l'eau et l'énergie notamment", values: [37, 39, 24], total: 37, rappels: { "2025": 36, "2024": 37, "2022": 41 } },
      { label: "La qualité des services publics au niveau local", values: [34, 38, 28], total: 34, rappels: { "2025": 35, "2024": 37, "2022": 37 } },
      { label: "L'aménagement du territoire et l'égalité territoriale", values: [34, 42, 24], total: 34, rappels: { "2025": 30, "2024": 31, "2022": 37 } },
      { label: "La qualité des services publics au niveau national", values: [32, 38, 30], total: 32, rappels: { "2025": 30, "2024": 33, "2022": 36 } },
      { label: "Le développement économique et l'emploi", values: [28, 43, 29], total: 28, rappels: { "2025": 26, "2024": 28, "2022": 35 } },
      { label: "La transition écologique", values: [28, 44, 28], total: 28, rappels: { "2025": 30, "2024": 30, "2022": 35 } },
      { label: "La sécurité des biens et des personnes", values: [27, 33, 40], total: 27, rappels: { "2025": 25, "2024": 27, "2022": 34 } },
      { label: "La bonne gestion des finances publiques", values: [23, 41, 36], total: 23, rappels: { "2025": 26, "2024": 25, "2022": 30 } },
      { label: "La lutte contre les inégalités sociales et les discriminations", values: [21, 46, 33], total: 21, rappels: { "2025": 20, "2024": 23, "2022": 26 } },
    ],
  },
  {
    id: "villes-intelligentes",
    source: "ipsos",
    page: 14,
    titre: "L'utilisation des données par les communes et intercommunalités reste perçue comme utile, malgré un recul",
    question:
      "De plus en plus de communes et intercommunalités utilisent des données pour améliorer la gestion des services publics. On parle parfois de « villes intelligentes ». Selon vous, cette utilisation des données est-elle utile ou non…",
    echelle: ["Très utile", "Plutôt utile", "Plutôt pas utile", "Pas du tout utile"],
    palette: "accord4",
    totalLabel: "% utile",
    note: "Question non posée en 2025 : les rappels portent sur 2024 et 2022.",
    items: [
      { label: "… pour améliorer la vie des habitants ?", values: [12, 54, 24, 10], total: 66, rappels: { "2024": 70, "2022": 73 } },
      { label: "… pour réduire les dépenses publiques ?", values: [12, 51, 24, 13], total: 63, rappels: { "2024": 66, "2022": 72 } },
    ],
  },
  {
    id: "leviers-donnees",
    source: "ipsos",
    page: 15,
    titre: "L'hébergement des données en France ou en Europe est l'élément le plus prioritaire pour améliorer la confiance",
    question:
      "Afin de vous donner davantage confiance dans cette démarche d'utilisation des données pour la gestion du service public, la mise en place de chacun des éléments suivants vous paraît-elle prioritaire, importante mais pas prioritaire ou secondaire ?",
    echelle: PRIORITE,
    palette: "niveau3",
    totalLabel: "% prioritaire ou important",
    items: [
      { label: "Le fait que les données collectées ne soient hébergées qu'en France ou en Europe", values: [67, 27, 6], total: 94, rappels: { "2025": 91, "2024": 92, "2022": 91 } },
      { label: "Une information claire et pédagogique permettant à tous de comprendre quelles données sont collectées et comment elles sont utilisées", values: [56, 37, 7], total: 93, rappels: { "2025": 94, "2024": 91, "2022": 92 } },
      { label: "Des contrôles par un organisme indépendant", values: [58, 33, 9], total: 91, rappels: { "2025": 91, "2024": 90, "2022": 89 } },
      { label: "Le fait que les données soient traitées avec des logiciels souverains, c'est-à-dire français ou européens", values: [58, 33, 9], total: 91, nouveau: true },
      { label: "L'anonymisation complète des données individuelles, même si cela limite les traitements possibles", values: [54, 36, 10], total: 90, rappels: { "2025": 90, "2024": 90, "2022": 90 } },
      { label: "L'élaboration d'une charte éthique sur les finalités de la collecte et les modalités d'exploitation", values: [51, 38, 11], total: 89, rappels: { "2025": 89, "2024": 89, "2022": 89 } },
      { label: "La création d'un comité éthique citoyen pouvant contrôler les usages et traitements des données", values: [43, 40, 17], total: 83, rappels: { "2025": 82, "2024": 85, "2022": 87 } },
    ],
  },
  {
    id: "rgpd-notoriete",
    source: "ipsos",
    page: 16,
    titre: "La notoriété du RGPD demeure importante, mais moins de 4 Français sur 10 voient bien de quoi il s'agit",
    question: "Avez-vous entendu parler du règlement européen RGPD (Règlement européen sur la protection des données personnelles) ?",
    echelle: NOTORIETE,
    palette: "niveau3",
    totalLabel: "% connaît le RGPD",
    note: "En 2024, 39 % voyaient bien de quoi il s'agit ; 41 % en 2022. Question non posée en 2025.",
    items: [{ label: "Notoriété du RGPD", values: [37, 38, 25], total: 75, rappels: { "2024": 71, "2022": 75 } }],
  },
  {
    id: "rgpd-confiance",
    source: "ipsos",
    page: 17,
    titre: "La confiance dans le RGPD demeure majoritaire mais est de nouveau en baisse",
    question: "Diriez-vous que vous avez confiance ou non dans le RGPD pour garantir la protection de vos données personnelles ?",
    echelle: CONFIANCE,
    palette: "accord4",
    totalLabel: "% confiance",
    note: "Question non posée en 2025 : les rappels portent sur 2024 et 2022.",
    items: [{ label: "Confiance dans le RGPD", values: [9, 50, 34, 7], total: 59, rappels: { "2024": 61, "2022": 66 } }],
  },
  {
    id: "rgpd-application",
    source: "ipsos",
    page: 18,
    titre: "Au-delà du RGPD, c'est la confiance dans le respect de la réglementation par les acteurs qui est en baisse",
    question: "Et plus précisément, avez-vous confiance dans les acteurs suivants pour la bonne application de cette réglementation ?",
    echelle: CONFIANCE,
    palette: "accord4",
    totalLabel: "% confiance",
    note: "Question non posée en 2025 : les rappels portent sur 2024 et 2022.",
    items: [
      { label: "Les services publics français", values: [14, 47, 28, 11], total: 61, rappels: { "2024": 67, "2022": 72 } },
      { label: "Les entreprises françaises", values: [7, 48, 36, 9], total: 55, rappels: { "2024": 57, "2022": 58 } },
      { label: "Les entreprises étrangères", values: [2, 14, 48, 36], total: 16, rappels: { "2024": 24, "2022": 24 } },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 2. L'intelligence artificielle                                      */
/* ------------------------------------------------------------------ */

export const sentimentsIA = {
  page: 20,
  titre: "Les sentiments négatifs à l'égard de l'IA progressent de nouveau cette année",
  question: "Lorsque vous entendez parler du sujet de l'Intelligence artificielle, que ressentez-vous principalement ?",
  items: [
    { label: "De l'enthousiasme", value: 10, rappels: { "2025": 6, "2024": 6, "2022": 9 }, tonalite: "positif" },
    { label: "De la curiosité", value: 26, rappels: { "2025": 33, "2024": 34, "2022": 43 }, tonalite: "positif" },
    { label: "De l'indifférence", value: 9, rappels: { "2025": 10, "2024": 9, "2022": 12 }, tonalite: "neutre" },
    { label: "De l'inquiétude", value: 45, rappels: { "2025": 46, "2024": 45, "2022": 32 }, tonalite: "negatif" },
    { label: "Du rejet", value: 10, rappels: { "2025": 5, "2024": 6, "2022": 4 }, tonalite: "negatif" },
  ] as Array<{ label: string; value: number; rappels: Rappels; tonalite: "positif" | "neutre" | "negatif" }>,
  positifs: { value: 36, rappels: { "2025": 39, "2024": 40, "2022": 52 } as Rappels },
  negatifs: { value: 55, rappels: { "2025": 51, "2024": 51, "2022": 36 } as Rappels },
};

export const citoyensIA: Question[] = [
  {
    id: "affirmations-ia",
    source: "ipsos",
    page: 21,
    titre: "Les inquiétudes à l'égard de l'IA demeurent très fortes, même si une majorité de Français y voit aussi des avantages",
    question:
      "Voici une liste d'affirmations concernant l'intelligence artificielle. Pour chacune d'entre elles diriez-vous que vous êtes d'accord ou pas d'accord ?",
    echelle: ACCORD,
    palette: "accord4",
    totalLabel: "% d'accord",
    items: [
      { label: "L'humain risque de devenir dépendant de l'IA pour résoudre des problèmes complexes", values: [42, 46, 9, 3], total: 88, rappels: { "2025": 85, "2024": 81, "2022": 79 }, crainte: true },
      { label: "Il existe un risque que l'IA échappe au contrôle humain", values: [39, 42, 15, 4], total: 81, rappels: { "2025": 79, "2024": 78, "2022": 71 }, crainte: true },
      { label: "L'IA sera particulièrement utile dans le domaine de la santé (suivi des patients, diagnostics…)", values: [24, 51, 19, 6], total: 75, rappels: { "2025": 73, "2024": 70, "2022": 74 } },
      { label: "La capacité de l'IA à résoudre des problèmes complexes va permettre de grandes avancées", values: [16, 52, 25, 7], total: 68, rappels: { "2025": 65, "2024": 65, "2022": 72 } },
      { label: "L'IA va avoir un impact important sur la productivité et sera une source importante de croissance économique", values: [13, 43, 33, 11], total: 56, rappels: { "2025": 54, "2024": 57, "2022": 63 } },
      { label: "L'IA pourrait à terme menacer votre emploi (posée aux actifs)", values: [23, 32, 29, 16], total: 55, rappels: { "2025": 52, "2024": 51, "2022": 59 }, crainte: true },
      { label: "L'IA sera particulièrement utile dans la lutte contre le réchauffement climatique", values: [7, 32, 40, 21], total: 39, rappels: { "2025": 39, "2024": 45, "2022": 52 } },
      { label: "Vous avez confiance dans l'intelligence artificielle", values: [4, 30, 38, 28], total: 34, rappels: { "2025": 32, "2024": 35, "2022": 45 } },
    ],
  },
  {
    id: "domaines-ia",
    source: "ipsos",
    page: 22,
    titre: "L'IA est perçue comme allant jouer un rôle important au cours des prochaines années",
    question:
      "Pour chacun des domaines suivants, diriez-vous que dans les années à venir, l'intelligence artificielle va jouer un rôle essentiel, important mais pas essentiel ou un rôle secondaire ?",
    echelle: ["Essentiel", "Important mais pas essentiel", "Secondaire"],
    palette: "niveau3",
    totalLabel: "% essentiel ou important",
    items: [
      { label: "La gestion des consommations énergétiques", values: [38, 42, 20], total: 80, rappels: { "2025": 80, "2024": 84 } },
      { label: "La gestion de l'eau", values: [39, 38, 23], total: 77, rappels: { "2025": 78, "2024": 81 } },
      { label: "La sécurité des biens et des personnes", values: [35, 40, 25], total: 75, rappels: { "2025": 72, "2024": 76 } },
      { label: "L'urbanisme et l'aménagement du territoire", values: [23, 50, 27], total: 73, rappels: { "2025": 70, "2024": 76 } },
      { label: "Les transports dans les villes", values: [24, 48, 28], total: 72, rappels: { "2025": 71, "2024": 78 } },
      { label: "L'accueil et l'information du public", values: [23, 46, 31], total: 69, rappels: { "2025": 68, "2024": 72 } },
      { label: "La lutte contre le réchauffement climatique", values: [33, 35, 32], total: 68, rappels: { "2025": 68, "2024": 73 } },
      { label: "Les politiques d'aide sociale", values: [17, 42, 41], total: 59, rappels: { "2025": 58, "2024": 62 } },
    ],
  },
  {
    id: "controle-ia",
    source: "ipsos",
    page: 23,
    titre: "La préférence pour un contrôle des outils d'IA est largement majoritaire et chaque année plus importante",
    question:
      "Parmi les deux phrases suivantes, laquelle correspond le plus à ce que vous pensez ? Le service public doit utiliser les outils d'intelligence artificielle…",
    echelle: [
      "… mais garder le contrôle le plus strict possible sur ces outils, même s'ils perdent en efficacité",
      "… les plus performants, car le plus important est de gagner en efficacité, même sans contrôle complet",
    ],
    palette: "binaire",
    totalLabel: "% contrôle strict",
    items: [{ label: "Contrôle strict ou performance ?", values: [87, 13], total: 87, rappels: { "2025": 86, "2024": 84 } }],
  },
  {
    id: "humain-ou-ia",
    source: "ipsos",
    page: 24,
    titre: "Les Français privilégient le contact humain à l'utilisation d'une messagerie instantanée",
    question:
      "Parmi les deux phrases suivantes, laquelle correspond le plus à ce que vous préférez. Pour obtenir une information auprès d'un service public, vous préférez avoir accès à…",
    echelle: [
      "… un humain capable de vous apporter plus d'explications, même si cela ne peut se faire qu'aux horaires d'ouverture des guichets",
      "… une messagerie instantanée avec une IA, qui peut répondre plus vite et à n'importe quelle heure",
    ],
    palette: "binaire",
    totalLabel: "% préfère un humain",
    items: [{ label: "Un humain ou une IA au guichet ?", values: [81, 19], total: 81, rappels: { "2025": 81, "2024": 80 } }],
  },
  {
    id: "leviers-ia",
    source: "ipsos",
    page: 25,
    titre: "Informer les citoyens et adopter une charte : les deux premiers leviers de confiance dans l'IA publique",
    question:
      "Afin de vous donner davantage confiance dans l'utilisation de l'intelligence artificielle pour la gestion du service public, la mise en place de chacun des éléments suivants vous paraît-il prioritaire, important mais pas prioritaire ou secondaire ?",
    echelle: PRIORITE,
    palette: "niveau3",
    totalLabel: "% prioritaire ou important",
    note: "Question sans rappel des éditions précédentes dans le rapport 2026.",
    items: [
      { label: "Vous informer à chaque fois qu'une IA est utilisée pour produire une décision, un document ou même une illustration", values: [69, 24, 7], total: 93 },
      { label: "L'adoption d'une charte qui encadre les usages autorisés ou interdits de l'IA pour le service public", values: [63, 29, 8], total: 92 },
      { label: "L'obligation pour le service public de recourir à des systèmes d'IA souverains, c'est-à-dire français ou européens", values: [51, 34, 15], total: 85 },
      { label: "La formation systématique des fonctionnaires à l'intelligence artificielle", values: [45, 38, 17], total: 83 },
      { label: "Le recrutement d'experts en IA par le service public", values: [45, 36, 19], total: 81 },
    ],
  },
  {
    id: "environnement",
    source: "ipsos",
    page: 26,
    titre: "Les Français souhaitent une limitation du recours à l'IA pour le service public et les géants du numérique",
    question:
      "Le stockage des données tout comme le recours à l'intelligence artificielle ont un impact environnemental significatif en termes de consommation énergétique. Diriez-vous que vous êtes d'accord ou non avec chacune des propositions suivantes ?",
    echelle: ACCORD,
    palette: "accord4",
    totalLabel: "% d'accord",
    items: [
      { label: "Le service public doit limiter l'utilisation massive des données et le recours à l'IA à cause de l'impact environnemental, même si ceci réduit son efficacité", values: [28, 51, 17, 4], total: 79, rappels: { "2025": 75, "2024": 77, "2022": 76 } },
      { label: "La limitation du recours aux données doit s'imposer avant tout aux géants du numérique et moins au service public", values: [36, 39, 20, 5], total: 75, rappels: { "2025": 76, "2024": 78, "2022": 81 } },
      { label: "Pour certains services publics (la recherche en santé par exemple) il ne doit pas y avoir de limitation, même si cela a un impact important sur l'environnement", values: [19, 38, 31, 12], total: 57, rappels: { "2025": 61, "2024": 64, "2022": 67 } },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 3. La souveraineté numérique (nouveau en 2026)                      */
/* ------------------------------------------------------------------ */

export const citoyensSouverainete: Question[] = [
  {
    id: "souverainete-notoriete",
    source: "ipsos",
    page: 28,
    titre: "Une majorité de Français a entendu parler de la souveraineté numérique, mais moins d'un sur trois voit de quoi il s'agit",
    question: "Avez-vous entendu parler des enjeux de « souveraineté numérique » ?",
    echelle: NOTORIETE,
    palette: "niveau3",
    totalLabel: "% en a entendu parler",
    items: [{ label: "Notoriété de la souveraineté numérique", values: [29, 32, 39], total: 61, nouveau: true }],
  },
  {
    id: "souverainete-leviers",
    source: "ipsos",
    page: 29,
    titre: "Logiciels et systèmes d'IA français ou européens : les éléments jugés les plus importants",
    question:
      "Pour chacun des éléments suivants, dans le cadre du développement de la souveraineté numérique, diriez-vous que leur mise en place vous paraît…",
    echelle: PRIORITE,
    palette: "niveau3",
    totalLabel: "% prioritaire ou important",
    items: [
      { label: "Le choix de logiciels français ou européens pour la gestion quotidienne du service public", values: [61, 30, 9], total: 91, nouveau: true },
      { label: "Le recours à des systèmes d'IA uniquement français ou européens", values: [54, 35, 11], total: 89, nouveau: true },
      { label: "L'investissement dans des infrastructures numériques nationales comme les data centers afin d'héberger le maximum de données en France", values: [50, 37, 13], total: 87, nouveau: true },
      { label: "La construction d'une IA par et pour le service public", values: [37, 42, 21], total: 79, nouveau: true },
      { label: "Autoriser les entreprises françaises ou européennes d'IA à s'entraîner sur des données du service public afin d'améliorer leur IA", values: [27, 43, 30], total: 70, nouveau: true },
    ],
  },
];
