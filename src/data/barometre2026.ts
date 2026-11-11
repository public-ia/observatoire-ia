/**
 * Baromètre 2026 de l'Observatoire Data Publica (5e édition) :
 * « Les collectivités territoriales, la donnée et l'IA ».
 * Enquête menée de mai à juillet 2026 auprès de 382 collectivités et
 * établissements publics locaux. C'est la source principale du site.
 * Le champ `page` renvoie à la page du baromètre.
 */
import type { Bloc } from "./types";

const TYPES = ["Communes", "EPCI (hors métropoles)", "Métropoles", "Départements", "Régions"];
const AVANCEMENT = ["Oui", "Non, mais prévu dans les 12 prochains mois", "Non, et ce n'est pas prévu", "Ne sait pas"];

/** Construit les lignes d'un graphique par type de collectivité. */
const parType = (lignes: number[][], total: (v: number[]) => number) =>
  lignes.map((values, i) => ({ label: TYPES[i], values, total: total(values) }));

const premier = (v: number[]) => v[0];
const deuxPremiers = (v: number[]) => v[0] + v[1];

/* ------------------------------------------------------------------ */
/* 1. La data territoriale                                             */
/* ------------------------------------------------------------------ */

export const dataTerritoriale: Bloc[] = [
  {
    type: "barres",
    id: "projets-data",
    source: "barometre",
    page: 10,
    titre: "Toutes les collectivités sont concernées",
    graphique: "Collectivités ayant engagé au moins un projet data au cours des deux dernières années (2022-2026)",
    commentaire:
      "En 2026, 86 % des collectivités ont engagé au moins un projet data dans l'année (70 %) ou s'apprêtent à le faire (16 %). Ce chiffre est relativement stable : c'est une première depuis 2022. L'évolution marquante concerne les petites communes : 47 % des communes de moins de 3 500 habitants ont déjà engagé des projets data et 23 % annoncent vouloir le faire. Elles étaient 6 % dans le premier baromètre en 2022.",
    series: ["2022", "2026"],
    items: [
      { label: "Communes", values: [18, 58] },
      { label: "EPCI (hors métropoles)", values: [54, 81] },
      { label: "Métropoles", values: [89, 100] },
      { label: "Départements", values: [75, 84] },
      { label: "Régions", values: [90, 100] },
    ],
  },
  {
    type: "barres",
    id: "priorites-data",
    source: "barometre",
    page: 11,
    titre: "Des données pour quoi faire ? D'abord pour la qualité du service public",
    graphique: "Les priorités des collectivités dans l'utilisation des données (% ayant placé chaque objectif en rang 1, 2 ou 3)",
    commentaire:
      "Le recours à la data reste prioritairement envisagé pour améliorer la qualité du service public (81 %) et renforcer l'évaluation et le pilotage (64 %). Les économies budgétaires progressent peu : elles ne figurent en rang 1 que dans 14 % des réponses. La transparence vis-à-vis des citoyens recule de 10 points en deux ans.",
    series: ["2024", "2026"],
    items: [
      { label: "L'amélioration de la qualité du service", values: [73, 81] },
      { label: "L'amélioration de l'évaluation et du pilotage des politiques publiques", values: [56, 64] },
      { label: "L'amélioration de l'information et de la transparence vis-à-vis des citoyens", values: [59, 49] },
      { label: "Les économies budgétaires", values: [45, 46] },
      { label: "Le développement de nouveaux services ou de nouvelles politiques publiques", values: [44, 43] },
      { label: "Les retombées économiques au bénéfice du territoire", values: [20, 18] },
    ],
  },
  {
    type: "barres",
    id: "domaines-data",
    source: "barometre",
    page: 12,
    titre: "Des projets data dans tous les métiers",
    graphique: "Collectivités ayant des projets data en cours ou prévus dans les 12 prochains mois, par domaine",
    base: "collectivités hors communes de moins de 3 500 habitants",
    commentaire:
      "Pour la seconde année consécutive, le domaine le plus cité est l'administration et la gestion interne : des usages transverses de pilotage. Les conseils départementaux sont 84 % à annoncer leur engagement dans des projets data, et 64 % à le faire pour leurs politiques sociales.",
    series: ["2026"],
    items: [
      { label: "Administration et gestion interne", values: [59] },
      { label: "Aménagement du territoire", values: [53] },
      { label: "Mobilité", values: [48] },
      { label: "Environnement", values: [46] },
      { label: "Patrimoine", values: [45] },
      { label: "Énergie et éclairage", values: [44] },
      { label: "Eau", values: [42] },
      { label: "Développement économique", values: [39] },
      { label: "Action sociale", values: [34] },
      { label: "Déchets", values: [34] },
      { label: "Gestion de l'espace public", values: [33] },
      { label: "Tourisme", values: [27] },
      { label: "Sécurité", values: [27] },
      { label: "Citoyenneté", values: [24] },
      { label: "Autre", values: [12] },
    ],
  },
  {
    type: "barres",
    id: "obstacles-data",
    source: "barometre",
    page: 15,
    titre: "Les obstacles : nombreux mais bien identifiés",
    graphique: "Les principaux obstacles à l'utilisation des données",
    commentaire:
      "S'engager dans une démarche de gestion des données prend du temps, et les équipes territoriales n'en ont pas : 62 % des collectivités citent le manque de temps comme principal obstacle. Viennent ensuite le manque de compétences et, pour les plus grandes, les difficultés de recrutement d'experts de la donnée.",
    series: ["2026"],
    items: [
      { label: "Le manque de temps", values: [62] },
      { label: "Le manque de compétences", values: [59] },
      { label: "Le manque de moyens financiers", values: [36] },
      { label: "L'accès limité à des données de qualité", values: [32] },
      { label: "Un manque de confiance dans la gestion des données", values: [29] },
      { label: "Le peu de formations disponibles", values: [26] },
      { label: "Les difficultés de recrutement", values: [6] },
    ],
  },
  {
    id: "importance-strategique",
    source: "barometre",
    page: 16,
    titre: "Un sujet de « gestion » devenu « stratégique » ?",
    graphique: "L'importance stratégique des enjeux data, par type de collectivité",
    commentaire:
      "Pour 3 collectivités sur 10 (32 %), le sujet est soit piloté par la direction générale, soit l'objet d'un reporting en DG. L'effet taille joue à plein : c'est le cas dans 50 % des métropoles, 59 % des régions et 60 % des départements, mais dans 24 % des communes seulement.",
    echelle: [
      "Stratégique, piloté par la direction générale des services",
      "Important, objet de points réguliers en direction générale",
      "Important pour quelques services, sans enjeu stratégique transverse",
      "Pas considéré comme important à ce jour",
    ],
    palette: "accord4",
    totalLabel: "% piloté ou suivi en direction générale",
    items: parType(
      [
        [9, 15, 38, 38],
        [11, 19, 54, 16],
        [6, 44, 44, 6],
        [33, 27, 33, 6],
        [42, 17, 42, 0],
      ],
      deuxPremiers,
    ),
  },
  {
    id: "acculturation",
    source: "barometre",
    page: 17,
    titre: "Le niveau monte (encore) et c'est une bonne nouvelle",
    graphique: "Niveau d'acculturation aux enjeux de la data, par type de collectivité",
    commentaire:
      "En 2022, 41 % des collectivités déclaraient un niveau bon ou correct ; elles sont 52 % en 2026. La progression est plus forte encore dans les communes de moins de 3 500 habitants, passées de 23 % à 43 % en quatre ans.",
    echelle: [
      "Bon : sujet identifié et partagé par les cadres (et les élus)",
      "Correct : sujet partagé par quelques services pionniers",
      "Insuffisant : sujet identifié par quelques experts seulement",
      "Le sujet n'est pas identifié",
    ],
    palette: "accord4",
    totalLabel: "% niveau bon ou correct",
    items: parType(
      [
        [12, 32, 45, 11],
        [8, 48, 40, 4],
        [44, 44, 11, 0],
        [21, 42, 36, 0],
        [33, 42, 25, 0],
      ],
      deuxPremiers,
    ),
  },
  {
    id: "regles-gestion",
    source: "barometre",
    page: 18,
    titre: "La gouvernance data s'organise",
    graphique: "Collectivités ayant défini des règles de gestion des données (ou prévoyant de le faire d'ici 12 mois)",
    commentaire:
      "56 % des métropoles ont déjà défini des règles internes, tout comme 42 % des régions et 39 % des départements. Seules 15 % des communes s'en sont dotées, mais 29 % veulent le faire dans les 12 prochains mois.",
    echelle: AVANCEMENT,
    palette: "avancement4",
    totalLabel: "% ayant défini des règles",
    items: parType(
      [
        [15, 29, 46, 10],
        [21, 31, 38, 11],
        [56, 22, 22, 0],
        [39, 39, 21, 0],
        [42, 58, 0, 0],
      ],
      premier,
    ),
  },
  {
    type: "barres",
    id: "outils-gouvernance",
    source: "barometre",
    page: 19,
    titre: "Clauses contractuelles et guides internes : les outils de gouvernance préférés",
    graphique: "Les outils de gouvernance préférés des collectivités",
    base: "collectivités ayant mis en place une gouvernance data",
    commentaire:
      "Ces évolutions pourraient être fortement amplifiées par la nécessité de renforcer la souveraineté sur les données, dans un contexte de massification des usages liée aux systèmes d'IA.",
    series: ["2026"],
    items: [
      { label: "Des clauses contractuelles data avec les prestataires", values: [59] },
      { label: "Une politique ou un guide de gestion interne des données", values: [43] },
      { label: "Une charte de la donnée", values: [38] },
      { label: "Une ou des conventions partenariales", values: [32] },
    ],
  },
  {
    id: "cadre-strategique",
    source: "barometre",
    page: 20,
    titre: "Vers de véritables « stratégies de la donnée » ?",
    graphique: "Collectivités ayant adopté un cadre stratégique fixant des priorités en matière de gestion des données",
    commentaire:
      "Les plus grandes collectivités se dotent d'une véritable stratégie de la donnée, parfois votée par l'assemblée locale. La tendance pourrait s'accélérer : près d'une collectivité sur trois (31 %) envisage de se doter d'une stratégie dans les 12 prochains mois.",
    echelle: AVANCEMENT,
    palette: "avancement4",
    totalLabel: "% ayant adopté un cadre stratégique",
    items: parType(
      [
        [5, 29, 52, 14],
        [9, 27, 47, 16],
        [28, 28, 39, 6],
        [24, 42, 27, 6],
        [33, 58, 8, 0],
      ],
      premier,
    ),
  },
  {
    id: "technologies",
    source: "barometre",
    page: 21,
    titre: "Des choix technologiques qui restent indécis",
    graphique: "Les technologies déployées par les collectivités",
    commentaire:
      "Plateformes de données, réseaux IoT, hyperviseurs et jumeaux numériques restent des projets lourds à déployer. Imaginés d'abord pour les fonctions urbaines, ils peinent à s'imposer comme outils d'orchestration plus globale des données.",
    echelle: AVANCEMENT,
    palette: "avancement4",
    totalLabel: "% en place",
    items: [
      { label: "Une plateforme de données pour rassembler, structurer et exploiter les données des principaux métiers", values: [28, 19, 44, 9], total: 28 },
      { label: "Le déploiement de capteurs et un réseau d'objets connectés", values: [25, 13, 47, 15], total: 25 },
      { label: "Un hyperviseur pour piloter certaines fonctions techniques", values: [14, 12, 57, 17], total: 14 },
      { label: "Un jumeau numérique en lien avec le SIG", values: [10, 10, 62, 17], total: 10 },
    ],
  },
  {
    type: "focus",
    id: "focus-elus",
    page: 22,
    titre: "Les élus en charge de la data et de l'IA",
    etude: "Étude Municipales 2026 de l'Observatoire — 100 plus grandes communes et 100 plus grands EPCI",
    points: [
      "87 % des grandes communes et 86 % des grands EPCI ont nommé au moins un élu en charge du numérique, des chiffres stables depuis 2020.",
      "En 2020, seuls trois élus avaient une délégation à l'IA ; ils sont désormais 14 dans les communes et 14 dans les EPCI.",
      "Dans les programmes des villes de plus de 100 000 habitants, 38 propositions sur 269 concernaient la ville intelligente : capteurs et monitoring urbain (15), éclairage intelligent (14), pilotage stratégique (9).",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 2. La souveraineté                                                  */
/* ------------------------------------------------------------------ */

export const souverainete: Bloc[] = [
  {
    id: "souverainete-prise-en-compte",
    source: "barometre",
    page: 25,
    titre: "La souveraineté numérique : enjeu national, mais pas encore local ?",
    graphique: "La prise en compte des enjeux de souveraineté, par type de collectivité",
    commentaire:
      "15 % des collectivités estiment avoir bien identifié l'enjeu de la souveraineté et l'avoir intégré dans leurs choix stratégiques. 40 % identifient le sujet mais n'ont pour l'instant pas de levier d'action concret. Les métropoles font figure de pionnières : 44 % déclarent avoir commencé à agir.",
    echelle: [
      "Sujet connu et intégré dans les choix stratégiques",
      "Sujet connu, mais encore peu intégré dans les décisions concrètes",
      "Sujet peu connu ou peu discuté",
    ],
    palette: "niveau3",
    totalLabel: "% ayant intégré le sujet",
    items: parType(
      [
        [13, 30, 58],
        [10, 46, 44],
        [44, 50, 6],
        [18, 58, 24],
        [25, 67, 8],
      ],
      premier,
    ),
  },
  {
    type: "barres",
    id: "souverainete-criteres",
    source: "barometre",
    page: 26,
    titre: "Conformité au RGPD et localisation des données : les premiers critères d'un choix souverain",
    graphique: "Critères pris en compte dans un choix de solutions numériques souveraines",
    base: "collectivités ayant intégré les enjeux de souveraineté numérique",
    commentaire:
      "Parmi les collectivités qui ont fait des choix pour renforcer leur souveraineté, 90 % ciblent la protection des données des usagers et 77 % exigent la localisation des données en Europe. 30 % veulent s'affranchir de toute dépendance à des règles extra-territoriales non européennes ; 23 % privilégient les solutions libres.",
    series: ["2026"],
    items: [
      { label: "La conformité au RGPD", values: [90] },
      { label: "La localisation des données en Europe ou en France", values: [77] },
      { label: "La réversibilité des solutions et la portabilité des données", values: [58] },
      { label: "L'indépendance vis-à-vis d'acteurs extra-européens", values: [30] },
      { label: "La propriété des infrastructures", values: [29] },
      { label: "Le recours à des logiciels libres ou open source", values: [23] },
    ],
  },
  {
    type: "focus",
    id: "focus-souverainete",
    page: 27,
    titre: "La souveraineté des données dans les programmes municipaux",
    etude: "Étude Municipales 2026 de l'Observatoire — programmes des villes de plus de 100 000 habitants",
    points: [
      "Trois sujets ont trait à la souveraineté : la (re)localisation des infrastructures, la priorité aux logiciels libres, la cybersécurité des données communales.",
      "Ces propositions sont presque exclusivement formulées à gauche de l'échiquier politique, avec des finalités différentes : indépendance face aux GAFAM pour les uns, sobriété numérique pour les autres.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 3. L'IA territoriale                                                */
/* ------------------------------------------------------------------ */

export const iaTerritoriale: Bloc[] = [
  {
    id: "projets-ia",
    source: "barometre",
    page: 30,
    titre: "Après l'engouement, la maîtrise ?",
    graphique: "Collectivités ayant engagé un projet IA, 2023-2026",
    base: "collectivités hors communes de moins de 3 500 habitants",
    commentaire:
      "56 % des collectivités ont engagé au moins un projet d'IA, contre 49 % en 2025, et 20 % veulent le faire dans les 12 prochains mois. La progression continue, un peu moins rapide. En 2026, 100 % des régions et 94 % des métropoles ont engagé des projets IA ; 70 % des conseils départementaux, contre 40 % en 2025. À titre de comparaison, 18 % des entreprises françaises utilisaient l'IA en 2025 selon l'INSEE : le service public local n'est pas à la traîne.",
    echelle: ["Oui", "Non, mais prévu dans les 12 prochains mois"],
    palette: "progres2",
    totalLabel: "% ayant engagé un projet IA",
    note: "Le baromètre mesure les projets testés ou exploités par les administrations, pas les usages individuels non déclarés (« shadow AI »).",
    items: [
      { label: "2026", values: [56, 20], total: 56 },
      { label: "2025", values: [49, 28], total: 49 },
      { label: "2024", values: [36, 15], total: 36 },
      { label: "2023", values: [28, 0], total: 28 },
    ],
  },
  {
    type: "treemap",
    id: "domaines-ia",
    source: "barometre",
    page: 31,
    titre: "Confirmation : tous les métiers sont concernés !",
    graphique: "Domaines dans lesquels des projets ayant recours à de l'IA sont en cours en 2026",
    base: "collectivités ayant engagé des projets IA",
    commentaire:
      "Une double confirmation : tous les métiers sont concernés, et certains progressent très vite. 54 % des collectivités concernées mènent des projets d'IA pour la gestion interne (45 % en 2024) et 31 % pour la relation aux usagers (20 % en 2024). C'est une « IA du quotidien » mise à disposition des agents, traduction concrète du déploiement de l'IA générative.",
    note: "Plusieurs réponses possibles : le total dépasse 100 %. Pour l'eau, le graphique du rapport indique 10 % et son texte 9 %.",
    items: [
      {
        label: "Administration et gestion interne",
        value: 54,
        rappel: { annee: "2024", value: 45 },
        detail:
          "Une « IA du quotidien » mise à disposition des agents publics pour gérer leur activité, dans la recherche de gains de temps et d'efficacité : la traduction concrète du déploiement d'outils d'IA générative.",
      },
      {
        label: "Relation aux usagers",
        value: 31,
        rappel: { annee: "2024", value: 20 },
        detail: "Avec la gestion interne, le domaine qui progresse le plus vite, porté par les outils d'IA générative.",
      },
      { label: "Aménagement du territoire", value: 12 },
      { label: "Environnement", value: 12 },
      {
        label: "Gestion de l'espace public",
        value: 11,
        detail: "On y retrouve notamment la gestion d'incidents dans l'espace public.",
      },
      {
        label: "Mobilité",
        value: 11,
        detail: "On y retrouve les outils qui permettent le fonctionnement de carrefours dits « intelligents ».",
      },
      {
        label: "Déchets",
        value: 10,
        detail: "Un métier où l'on retrouve d'autres systèmes d'IA : modélisation prédictive ou automatismes.",
      },
      {
        label: "Eau",
        value: 10,
        detail: "Un métier où l'on retrouve d'autres systèmes d'IA : modélisation prédictive ou automatismes.",
      },
      { label: "Autre", value: 10 },
      { label: "Citoyenneté", value: 9 },
      { label: "Action sociale", value: 9 },
      { label: "Sécurité", value: 8, detail: "Des projets qui portent directement sur la sécurité et la vidéoprotection." },
      {
        label: "Énergie et éclairage",
        value: 8,
        detail: "Éclairage ou énergie des bâtiments publics : modélisation prédictive ou automatismes.",
      },
      { label: "Développement économique", value: 7 },
      { label: "Patrimoine", value: 7 },
      { label: "Tourisme", value: 4 },
    ],
  },
  {
    type: "barres",
    id: "systemes-ia",
    source: "barometre",
    page: 34,
    titre: "L'IA générative comme outil du quotidien",
    graphique: "Les systèmes d'IA utilisés dans les collectivités",
    base: "collectivités ayant engagé des projets IA",
    commentaire:
      "86 % des collectivités engagées dans des projets testent ou déploient de l'IA générative. Si les IA traditionnelles impactent directement de nombreuses politiques publiques, l'IA générative est celle dont on parle le plus et celle qui touche le plus grand nombre d'agents publics.",
    series: ["2024", "2026"],
    items: [
      { label: "IA générative", values: [52, 86] },
      { label: "Apprentissage machine pour des modèles prédictifs", values: [51, 27] },
      { label: "Traitement automatique du langage", values: [18, 26] },
      { label: "Vision par ordinateur", values: [40, 25] },
    ],
  },
  {
    type: "barres",
    id: "iag-par-type",
    source: "barometre",
    page: 35,
    titre: "L'IA générative s'impose dans tous les types de collectivités",
    graphique: "Usage de l'IA générative dans les projets et expérimentations IA (2024-2026)",
    base: "collectivités ayant engagé des projets IA",
    commentaire:
      "En 2026, 100 % des régions et des métropoles ayant des projets IA ont déployé de l'IA générative. C'est aussi le cas de 82 % des communes, dont 79 % pour les communes de moins de 3 500 habitants. L'IA agentique pourrait constituer l'étape suivante.",
    series: ["2024", "2026"],
    items: [
      { label: "Communes", values: [40, 82] },
      { label: "EPCI (hors métropoles)", values: [52, 84] },
      { label: "Métropoles", values: [50, 100] },
      { label: "Départements", values: [50, 89] },
      { label: "Régions", values: [73, 100] },
    ],
  },
  {
    type: "outils",
    id: "outils-ia",
    source: "barometre",
    page: 36,
    titre: "Le difficile choix des outils",
    graphique: "Les outils autorisés ou recommandés",
    base: "collectivités ayant publié une liste d'outils autorisés ou interdits",
    commentaire:
      "30 % des collectivités ont fait le choix d'encadrer et d'autoriser (ou de mettre à disposition) un ou plusieurs outils. Parmi celles-ci, elles sont nombreuses à privilégier Microsoft Copilot (55 %), mais aussi Mistral (52 %). Microsoft a une démarche commerciale très offensive, intégrant systématiquement son IA dans les suites bureautiques, là où le choix de Mistral relève plus certainement d'un choix de souveraineté numérique. On notera la percée de l'entreprise française DelibIA, citée spontanément par 18 % des collectivités, qui intègre Mistral dans ses briques de service IA.",
    note: "Plusieurs réponses possibles : le total dépasse 100 %. Les logos sont la propriété de leurs détenteurs respectifs.",
    items: [
      { label: "Copilot", editeur: "Microsoft", pays: "États-Unis", value: 55, logo: "copilot" },
      { label: "Mistral", editeur: "Mistral AI", pays: "France", value: 52, logo: "mistral" },
      { label: "Claude", editeur: "Anthropic", pays: "États-Unis", value: 23, logo: "claude" },
      { label: "ChatGPT", editeur: "OpenAI", pays: "États-Unis", value: 21, logo: "chatgpt" },
      { label: "DelibIA", editeur: "DelibIA", pays: "France", value: 18, logo: "delibia" },
      { label: "Gemini", editeur: "Google", pays: "États-Unis", value: 16, logo: "gemini" },
    ],
  },
  {
    type: "barres",
    id: "pilotage-ia",
    source: "barometre",
    page: 37,
    titre: "Une collectivité sur deux a engagé une démarche pour piloter l'IA",
    graphique: "Collectivités ayant engagé une démarche pour piloter et encadrer le recours à l'IA",
    commentaire:
      "51 % des collectivités déclarent avoir engagé une démarche pour piloter le recours à l'IA. Les communes sont 29 % dans ce cas, mais 69 % au-dessus de 10 000 habitants. Presque aucune grande collectivité ne déploie en 2026 des projets d'IA sans travailler aux conditions d'un déploiement maîtrisé.",
    series: ["2026"],
    items: [
      { label: "Communes", values: [29] },
      { label: "EPCI (hors métropoles)", values: [65] },
      { label: "Métropoles", values: [100] },
      { label: "Départements", values: [94] },
      { label: "Régions", values: [100] },
    ],
  },
  {
    type: "barres",
    id: "demarches-ia",
    source: "barometre",
    page: 38,
    titre: "L'esquisse d'une méthode : encadrer, travailler en collectif, former",
    graphique: "Les démarches IA des collectivités",
    base: "collectivités ayant engagé une démarche IA",
    commentaire:
      "75 % des collectivités concernées ont produit une charte ou un document de référence pour encadrer les usages de l'IA (57 % en 2025). Point d'attention : seules 26 % ont inscrit l'IA à l'agenda du dialogue social, alors que plusieurs jurisprudences, pour l'instant dans le privé, ont conduit en 2026 à l'arrêt de projets d'IA faute d'information et de consultation des instances, y compris en phase de test. Les plus grandes créent des postes de chef de projet IA (39 % des métropoles, 42 % des régions).",
    series: ["2026"],
    items: [
      { label: "Encadrement de l'IA (chartes…)", values: [75] },
      { label: "Groupe de travail interne", values: [70] },
      { label: "Plan de formation", values: [68] },
      { label: "Choix des outils et ressources techniques", values: [55] },
      { label: "Feuille de route ou stratégie interne", values: [52] },
      { label: "Dispositif d'expérimentation (« bac à sable »…)", values: [52] },
      { label: "Dialogue social", values: [26] },
      { label: "Un ou plusieurs recrutements", values: [14] },
    ],
  },
  {
    type: "barres",
    id: "obstacles-ia",
    source: "barometre",
    page: 40,
    titre: "Des obstacles nombreux et parfois bloquants : « pas d'IA sans data »",
    graphique: "Les principaux obstacles à la diffusion de l'IA dans les collectivités",
    commentaire:
      "Le manque de compétences internes est un frein pour 54 % des collectivités engagées ; 47 % redoutent des difficultés budgétaires face au coût réel des projets. La qualité des données est l'obstacle le plus sous-estimé : 28 % de celles qui n'ont pas débuté l'anticipent, mais 44 % de celles qui ont commencé le constatent.",
    series: ["Sans projet IA", "Avec projet(s) IA"],
    items: [
      { label: "Le manque de compétences", values: [60, 54] },
      { label: "La difficulté à identifier les outils IA adaptés", values: [56, 41] },
      { label: "Un manque de confiance dans l'IA", values: [51, 39] },
      { label: "Les obstacles juridiques (RGPD, droits d'auteur…)", values: [51, 43] },
      { label: "Le manque de moyens financiers", values: [48, 47] },
      { label: "Le peu de formations disponibles", values: [36, 16] },
      { label: "L'impact environnemental", values: [31, 36] },
      { label: "L'accès limité à des données de qualité", values: [28, 44] },
      { label: "Le risque d'une perte de compétence", values: [25, 24] },
      { label: "Le risque ou le constat de résultats décevants", values: [20, 25] },
      { label: "Le risque de suppression d'emplois", values: [11, 13] },
      { label: "Des conflits avec des prestataires utilisant l'IA", values: [10, 11] },
      { label: "Les difficultés de recrutement", values: [7, 6] },
    ],
  },
  {
    type: "barres",
    id: "impacts-ia",
    source: "barometre",
    page: 42,
    titre: "Des impacts qui restent à bien mesurer",
    graphique: "Les premiers impacts de l'IA sur le travail et l'organisation interne",
    commentaire:
      "Pour la première fois en 2026, le baromètre questionne la mesure de l'impact de l'IA. Les résultats sont contrastés : 39 % mettent en avant des gains de temps significatifs, 28 % jugent les impacts très limités, et 40 % n'ont pas mis en place d'outil de suivi et de mesure. Reste à savoir comment le temps gagné est réinvesti.",
    series: ["2026"],
    items: [
      { label: "Des gains de temps significatifs", values: [39] },
      { label: "Une accélération des procédures", values: [24] },
      { label: "La satisfaction des agents", values: [13] },
      { label: "Une amélioration de la qualité des services aux usagers", values: [10] },
      { label: "Des économies budgétaires", values: [5] },
      { label: "Cet impact reste très limité", values: [28] },
      { label: "Ce n'est pas mesuré", values: [40] },
    ],
  },
  {
    type: "focus",
    id: "focus-capcom",
    page: 33,
    titre: "L'IA et la communication publique",
    etude: "Étude « IA et communication publique » de l'Observatoire Data Publica et CAP'COM — 219 directions de la communication",
    points: [
      "Dans 96 % des collectivités interrogées, des collaborateurs de la communication ont recours à l'IA générative pour produire du contenu.",
      "Sur 137 cas d'usage évalués : gains de temps dans 74 % des cas, amélioration de la qualité dans 34 %, de la créativité dans 20 %, impact limité dans 18 %.",
      "Dans 13 % des cas, des prestations externes n'ont pas été commandées : l'IA semble favoriser une forme de réinternalisation plutôt que menacer directement des emplois.",
      "29 % des collectivités intègrent des clauses spécifiques sur le recours à l'IA dans leurs marchés de communication.",
    ],
  },
  {
    id: "clauses",
    source: "barometre",
    page: 44,
    titre: "Encadrer juridiquement le recours à l'IA et l'usage de la data",
    graphique: "Collectivités ayant mis en place des clauses juridiques pour la gestion des données ou le recours à l'IA",
    commentaire:
      "La mise en œuvre de l'action publique repose sur des prestataires, des délégataires et des partenaires : la présence de « clauses data » et de « clauses IA » devient indispensable. En 2026, 13 % des collectivités en utilisent et 26 % prévoient de le faire.",
    echelle: AVANCEMENT,
    palette: "avancement4",
    totalLabel: "% ayant des clauses data ou IA",
    items: parType(
      [
        [5, 19, 66, 10],
        [13, 32, 27, 28],
        [56, 39, 0, 6],
        [27, 33, 18, 21],
        [50, 42, 0, 8],
      ],
      premier,
    ),
  },
  {
    type: "barres",
    id: "domaines-clauses",
    source: "barometre",
    page: 45,
    titre: "Des clauses d'abord centrées sur le RGPD, les clauses IA émergent",
    graphique: "Les domaines concernés par les clauses juridiques",
    base: "collectivités ayant mis en place des clauses",
    commentaire:
      "Apparues plus récemment, les clauses concernant l'IA portent sur la propriété intellectuelle et l'usage des données par les IA (42 %), les conditions de recours à l'IA (35 %), voire son interdiction dans certains domaines (25 %), par exemple certaines prestations de communication.",
    series: ["2026"],
    items: [
      { label: "Le respect du RGPD", values: [94] },
      { label: "La propriété des données publiques", values: [75] },
      { label: "Le respect de standards ou de formats de données", values: [58] },
      { label: "La publication des données (open data)", values: [46] },
      { label: "La propriété intellectuelle en matière de data ou d'IA", values: [42] },
      { label: "Les conditions de recours à l'IA dans certains domaines", values: [35] },
      { label: "L'interdiction de l'IA dans certains domaines", values: [25] },
    ],
  },
  {
    id: "portage-politique",
    source: "barometre",
    page: 49,
    titre: "Et après : un portage politique à construire ?",
    graphique: "Niveau de portage politique des sujets liés à l'IA, par type de collectivité",
    commentaire:
      "Seules 35 % des collectivités déclarent que l'IA fait l'objet d'un portage politique. Il est le plus fort dans les régions (67 %) et les métropoles (44 %). À l'inverse, il n'existe aucun portage politique dans 88 % des communes de moins de 3 500 habitants.",
    echelle: [
      "Portage politique explicite (priorités affichées, arbitrages, impulsion)",
      "Portage politique encore limité ou émergent",
      "Sujet identifié, sans portage politique structuré",
      "Sujet non porté politiquement à ce jour",
    ],
    palette: "accord4",
    totalLabel: "% portage explicite",
    items: parType(
      [
        [6, 17, 35, 42],
        [11, 28, 38, 24],
        [44, 39, 11, 6],
        [33, 30, 30, 6],
        [67, 17, 17, 0],
      ],
      premier,
    ),
  },
  {
    type: "focus",
    id: "focus-municipales-ia",
    page: 47,
    titre: "L'IA dans les programmes des municipales",
    etude: "Étude Municipales 2026 de l'Observatoire — 130 propositions liées à l'IA dans les villes de plus de 100 000 habitants",
    points: [
      "Premier registre : l'IA dans la sécurité et la gestion urbaine (32 % des propositions), suivi de l'IA comme sujet de gouvernance et de principes (31 %).",
      "Viennent ensuite le développement économique (15 %), la formation et l'inclusion (14 %) et la modernisation des services publics (9 %).",
      "À gauche, les propositions se concentrent sur la gouvernance, la transparence et l'affirmation de principes ; à droite et à l'extrême droite, sur la sécurité et la gestion urbaine ; le pôle central met l'accent sur la modernisation du service public.",
    ],
  },
];
