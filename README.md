# Observatoire IA — Public IA

Site pédagogique présentant l'enquête Ipsos bva pour l'Observatoire Data Publica sur la perception
des Français de la gestion des données et de l'utilisation de l'IA par les acteurs publics.
Publié sur https://observatoire.public-ia.fr via Lovable.

## Mettre à jour pour une nouvelle édition

Tous les chiffres sont dans `src/data/etude2026.ts` (un champ `page` renvoie à la page du rapport).

1. Dupliquer ce fichier (ex. `etude2027.ts`) et mettre à jour les valeurs et les rappels.
2. Changer l'import dans `src/data/index.ts`.
3. Mettre à jour le titre et la description dans `index.html`.

Lovable ne synchronise que la branche `main` : travailler sur une branche, fusionner, puis publier depuis Lovable.

# Projet Lovable

## Project info

**URL**: https://lovable.dev/projects/5fb35922-1149-4530-a6b3-8f6e40c3491f

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/5fb35922-1149-4530-a6b3-8f6e40c3491f) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/5fb35922-1149-4530-a6b3-8f6e40c3491f) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
