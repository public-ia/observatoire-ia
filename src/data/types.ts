export type Annee = "2025" | "2024" | "2023" | "2022";
export type Rappels = Partial<Record<Annee, number>>;
export type Source = "barometre" | "ipsos";

export type Palette = "accord4" | "niveau3" | "impact3" | "binaire" | "avancement4" | "progres2";

export interface Item {
  label: string;
  /** Détail des réponses, dans l'ordre de `echelle`. */
  values: number[];
  /** Indicateur de synthèse (ex. % confiance). */
  total: number;
  /** Même indicateur lors des éditions précédentes. */
  rappels?: Rappels;
  /** Item absent des éditions précédentes. */
  nouveau?: boolean;
  /** Affirmation exprimant une crainte (mise en évidence). */
  crainte?: boolean;
}

/** Graphique en barres empilées : répartition des réponses pour chaque ligne. */
export interface Question {
  type?: "empile";
  id: string;
  source: Source;
  page: number;
  /** Enseignement principal. */
  titre: string;
  /** Libellé exact de la question posée (enquête Ipsos). */
  question?: string;
  /** Intitulé du graphique (baromètre). */
  graphique?: string;
  /** Analyse tirée du rapport. */
  commentaire?: string;
  base?: string;
  echelle: string[];
  palette: Palette;
  totalLabel: string;
  items: Item[];
  /** Remarque de lecture. */
  note?: string;
}

/** Graphique en barres simples ou comparées (une ou deux séries). */
export interface Barres {
  type: "barres";
  id: string;
  source: Source;
  page: number;
  titre: string;
  graphique: string;
  commentaire?: string;
  base?: string;
  /** Nom des séries, dans l'ordre des valeurs. La dernière est la série mise en avant. */
  series: string[];
  items: Array<{ label: string; values: number[] }>;
  note?: string;
}

export interface Focus {
  type: "focus";
  id: string;
  page: number;
  titre: string;
  /** Étude complémentaire dont est tiré le focus. */
  etude: string;
  points: string[];
}

/** Carte proportionnelle (treemap) : la surface de chaque case suit sa valeur. */
export interface Treemap {
  type: "treemap";
  id: string;
  source: Source;
  page: number;
  titre: string;
  graphique: string;
  commentaire?: string;
  base?: string;
  items: Array<{
    label: string;
    value: number;
    /** Valeur d'une édition précédente, quand le rapport la donne. */
    rappel?: { annee: string; value: number };
    /** Précision tirée du rapport. */
    detail?: string;
  }>;
  note?: string;
}

export type LogoOutil = "copilot" | "mistral" | "claude" | "chatgpt" | "delibia" | "gemini";

/** Barres verticales accompagnées du logo de chaque outil. */
export interface Outils {
  type: "outils";
  id: string;
  source: Source;
  page: number;
  titre: string;
  graphique: string;
  commentaire?: string;
  base?: string;
  items: Array<{
    label: string;
    editeur: string;
    /** Pays du siège de l'éditeur. */
    pays: string;
    value: number;
    logo: LogoOutil;
  }>;
  note?: string;
}

/** Diagramme de flux (Sankey) : répartition des propositions de chaque origine entre plusieurs sujets. */
export interface Sankey {
  type: "sankey";
  id: string;
  source: Source;
  page: number;
  titre: string;
  graphique: string;
  commentaire?: string;
  base?: string;
  /** Présentation générale affichée tant qu'aucun élément n'est sélectionné. */
  synthese: string;
  origines: Array<{ label: string; couleur: string; detail: string }>;
  sujets: Array<{ label: string; court: string; couleur: string; detail: string }>;
  /**
   * Épaisseur des flux : une ligne par origine, une colonne par sujet,
   * chaque ligne totalisant 100. Voir la remarque dans le fichier de données
   * sur l'origine de ces valeurs.
   */
  flux: number[][];
  note?: string;
}

export type Bloc = Question | Barres | Focus | Treemap | Outils | Sankey;
