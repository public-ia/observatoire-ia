# Observatoire IA — Public IA

Site pédagogique qui présente, sous forme interactive, le **Baromètre de l'Observatoire Data Publica** sur la donnée et l'IA dans les collectivités territoriales, complété par l'**enquête Ipsos bva** sur la perception des Français.

- **Site en ligne** : https://observatoire.public-ia.fr
- **Édition affichée** : 2026 (5e édition du baromètre)
- **Usage** : support de formation et de sensibilisation pour les élus et les agents des collectivités

Le site est une adaptation réalisée par Public IA à partir des publications de l'Observatoire Data Publica. Le quiz, les pistes de discussion et les recommandations sont des contenus Public IA ; ils ne figurent pas dans les études.

## Sommaire

- [Ce que contient le site](#ce-que-contient-le-site)
- [Sources](#sources)
- [Installer le site en local](#installer-le-site-en-local)
- [Organisation du code](#organisation-du-code)
- [Modifier les chiffres et les textes](#modifier-les-chiffres-et-les-textes)
- [Préparer une nouvelle édition](#préparer-une-nouvelle-édition)
- [Publier une modification](#publier-une-modification)
- [Animations et accessibilité](#animations-et-accessibilité)
- [Problèmes fréquents](#problèmes-fréquents)

## Ce que contient le site

Le site tient sur une seule page, découpée en sections accessibles depuis le menu :

| Section | Contenu |
|---|---|
| Accueil | Titre de l'édition et rappel des deux enquêtes |
| Chiffres clés | Neuf chiffres présentés un par un « en orbite » sur grand écran (grille sur mobile), puis six courbes de tendance |
| Quiz | Douze questions : le groupe estime un chiffre avec un curseur avant de le révéler |
| Data | Partie 1 du baromètre : la data territoriale |
| Souveraineté | Partie 2 du baromètre : la souveraineté numérique |
| IA | Partie 3 du baromètre : l'IA territoriale |
| Citoyens | Enquête Ipsos, en trois onglets : IA, données personnelles, souveraineté |
| Recommandations | Six leviers proposés par Public IA |
| Méthodologie | Échantillon, dates et méthode des deux enquêtes |

Chaque graphique affiche l'enseignement principal, l'analyse du rapport, la base de calcul et la page du rapport d'où vient le chiffre. Chaque partie se termine par des questions « Pour en discuter en formation ».

## Sources

| Source | Détail | Rôle dans le site |
|---|---|---|
| Baromètre 2026 de l'Observatoire Data Publica | « Les collectivités territoriales, la donnée et l'IA », 382 collectivités et établissements publics locaux, mai à juillet 2026 | Source principale |
| Enquête Ipsos bva pour l'Observatoire Data Publica | « La perception des Français de la gestion des données et de l'utilisation de l'IA par les acteurs publics », 1 000 personnes, 16 au 22 juillet 2026 | Regard des Français |

Publications de l'Observatoire : https://observatoire.data-publica.eu/

## Installer le site en local

### Prérequis

- **Git**
- **Node.js 18 ou plus récent** (le projet est testé avec Node 22), fourni avec npm. Pour l'installer : https://nodejs.org ou via [nvm](https://github.com/nvm-sh/nvm).

Pour vérifier les versions installées :

```bash
node -v
```

```bash
npm -v
```

### Installation

1. Récupérer le dépôt :

```bash
git clone https://github.com/public-ia/observatoire-ia.git
```

2. Entrer dans le dossier :

```bash
cd observatoire-ia
```

3. Installer les dépendances, exactement dans les versions du fichier de verrouillage :

```bash
npm ci
```

4. Lancer le site en mode développement :

```bash
npm run dev
```

Le site s'ouvre sur http://localhost:8080. Il se recharge automatiquement à chaque fichier enregistré.

### Commandes utiles

| Commande | Effet |
|---|---|
| `npm run dev` | Lance le site en développement sur le port 8080 |
| `npm run build` | Construit la version de production dans le dossier `dist/` |
| `npm run preview` | Sert en local la version construite, pour la vérifier avant publication |
| `npm run lint` | Analyse le code avec ESLint |
| `npx tsc --noEmit -p tsconfig.app.json` | Vérifie les types TypeScript |

Le projet n'a pas de tests automatisés. Avant de publier, lancez au minimum `npm run build` et parcourez le site sur ordinateur et sur téléphone.

`npm run lint` signale trois erreurs dans des fichiers générés (`src/components/ui/`, `tailwind.config.ts`). Elles existent depuis la création du projet et ne bloquent pas la construction.

## Organisation du code

Le site est une application React (Vite, TypeScript, Tailwind CSS, composants shadcn/ui).

```
src/
├── data/                  Tous les chiffres et les textes du site
│   ├── barometre2026.ts   Baromètre des collectivités (data, souveraineté, IA)
│   ├── ipsos2026.ts       Enquête Ipsos auprès des Français
│   ├── edition2026.ts     Méthodologie, chiffres clés, tendances, quiz,
│   │                      pistes de discussion, recommandations
│   ├── types.ts           Format des données
│   └── index.ts           Choix de l'édition affichée
├── components/            Sections et graphiques
│   ├── Blocs.tsx          Graphiques : barres empilées, barres simples ou
│   │                      comparées, encadrés « regard complémentaire »
│   ├── KeyFindings.tsx    Chiffres clés et tendances
│   ├── KeyOrbit.tsx       Chiffres clés « en orbite » (grand écran)
│   ├── Quiz.tsx           Quiz d'estimation
│   ├── CitizenTabs.tsx    Onglets de l'enquête Ipsos
│   ├── Footer.tsx         Pied de page animé
│   └── ui/                Composants shadcn/ui (générés, à ne pas modifier)
├── lib/motion.ts          Défilement fluide et animations (Lenis, GSAP)
├── hooks/                 Fonctions React réutilisables
├── pages/Index.tsx        Ordre des sections de la page
└── index.css              Couleurs de la charte et styles des animations
```

Les couleurs de la charte Public IA (bleu foncé, orange, gris-bleu) sont définies en haut de `src/index.css`.

## Modifier les chiffres et les textes

Aucun chiffre n'est écrit dans les composants : tout se trouve dans `src/data/`.

- **Corriger un chiffre d'un graphique** : ouvrir `barometre2026.ts` ou `ipsos2026.ts`, retrouver le graphique par son titre et modifier la valeur. Le champ `page` indique la page du rapport, pour vérifier.
- **Modifier un chiffre clé, une question du quiz, une piste de discussion ou une recommandation** : ouvrir `edition2026.ts`.
- **Changer l'ordre des sections** : ouvrir `src/pages/Index.tsx`.

Attention : les chiffres clés, le quiz et les recommandations reprennent des valeurs des graphiques. Si vous corrigez un chiffre dans un graphique, cherchez-le aussi dans `edition2026.ts`.

Les graphiques existent en trois formats, décrits dans `types.ts` :

| Format | Usage | Exemple |
|---|---|---|
| Barres empilées (par défaut) | Répartition des réponses pour chaque ligne | Niveau d'acculturation par type de collectivité |
| `type: "barres"` | Une valeur par ligne, ou deux séries comparées | Obstacles ; priorités 2024 et 2026 |
| `type: "focus"` | Encadré de texte tiré d'une étude complémentaire | Étude Municipales 2026 |

## Préparer une nouvelle édition

1. Dupliquer les trois fichiers de l'année dans `src/data/` (par exemple `barometre2027.ts`, `ipsos2027.ts`, `edition2027.ts`).
2. Mettre à jour les valeurs, les pages, les rappels des années précédentes et la méthodologie.
3. Modifier les imports dans `src/data/index.ts` pour pointer vers les nouveaux fichiers.
4. Mettre à jour le titre et la description dans `index.html`.
5. Relire le quiz, les pistes de discussion et les recommandations : ils citent des chiffres de l'édition.
6. Vérifier avec `npm run build`, puis parcourir tout le site.

## Publier une modification

Le site est hébergé par [Lovable](https://lovable.dev/projects/5fb35922-1149-4530-a6b3-8f6e40c3491f), qui est relié à ce dépôt GitHub. Le domaine `observatoire.public-ia.fr` est rattaché au projet Lovable.

1. Créer une branche et y faire les modifications. Lovable ne synchronise que la branche `main` : une autre branche n'a aucun effet sur le site.
2. Vérifier en local avec `npm run build`.
3. Ouvrir une pull request vers `main` et la fusionner.
4. Dans Lovable, vérifier l'aperçu, puis cliquer sur **Publier**. Tant que ce bouton n'est pas cliqué, le site en ligne ne change pas.

À savoir :

- Les modifications faites directement dans Lovable sont enregistrées dans `main`. Évitez de modifier le site dans Lovable pendant qu'une branche est en cours, pour ne pas créer de conflits.
- Le dépôt peut être renommé sans casser le lien avec Lovable. Il ne faut ni le supprimer, ni le transférer vers un autre compte.
- Le projet a deux fichiers de verrouillage : `bun.lockb` (utilisé par Lovable) et `package-lock.json` (utilisé par npm). Pour ajouter une dépendance, mettez les deux à jour :

```bash
bun add nom-du-paquet
```

```bash
npm install --package-lock-only --legacy-peer-deps
```

## Animations et accessibilité

Le défilement fluide repose sur [Lenis](https://lenis.darkroom.engineering/) et les animations sur [GSAP](https://gsap.com/) (ScrollTrigger). Tout est centralisé dans `src/lib/motion.ts`.

- **Chiffres clés en orbite** : affichés sur les écrans d'au moins 1 024 px de large et 680 px de haut. En dessous, une grille de cartes les remplace.
- **Pied de page « en rideau »** : actif sur les écrans d'au moins 768 px de large et 700 px de haut.
- **Réduction des mouvements** : si le système de l'utilisateur demande de réduire les animations, le site utilise le défilement normal et n'anime rien.

## Problèmes fréquents

| Problème | Solution |
|---|---|
| `npm install` échoue avec `ERESOLVE` | Utiliser `npm ci`, ou `npm install --legacy-peer-deps`. Le conflit vient de dépendances de développement et n'affecte pas le site. |
| Le port 8080 est déjà utilisé | Lancer `npm run dev -- --port 3000`, ou fermer l'autre programme. |
| Le site en ligne n'a pas changé après une fusion | Cliquer sur « Publier » dans Lovable ; la fusion seule ne suffit pas. |
| Les chiffres en orbite n'apparaissent pas | La fenêtre est trop petite, ou la réduction des mouvements est activée dans le système : la grille s'affiche à la place. |

## Contact

Public IA — https://www.public-ia.fr/contact/
