# Guide de Déploiement - Délice Rouge

## Configuration Vercel

Votre projet est maintenant configuré pour le déploiement sur Vercel avec les fichiers suivants :

### Fichiers de Configuration Créés

1. **vercel.json** - Configuration de déploiement Vercel
2. **package.json** - Dépendances et scripts de build
3. **vite.config.ts** - Configuration du bundler Vite
4. **tsconfig.json** - Configuration TypeScript
5. **index.html** - Point d'entrée HTML avec SEO optimisé
6. **main.tsx** - Point d'entrée React
7. **postcss.config.js** - Configuration PostCSS pour Tailwind
8. **tailwind.config.ts** - Configuration Tailwind CSS

### Instructions de Déploiement

1. **Pousser les changements sur GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Add Vercel deployment configuration"
   git push origin main
   ```

2. **Redéployer sur Vercel**
   - Allez sur votre dashboard Vercel
   - Sélectionnez votre projet
   - Cliquez sur "Redeploy" ou attendez le déploiement automatique

3. **Vérification**
   - Le build devrait maintenant créer un dossier `dist`
   - Les routes SPA fonctionneront correctement grâce aux rewrites
   - Le site sera optimisé pour les performances

### Structure de Build

```
dist/
├── index.html
├── assets/
│   ├── App-[hash].js
│   ├── App-[hash].css
│   └── ...autres assets
└── ...autres fichiers statiques
```

### Fonctionnalités Incluses

- ✅ Build optimisé avec Vite
- ✅ Routing SPA fonctionnel
- ✅ SEO meta tags
- ✅ Favicon et manifest
- ✅ Service Worker (PWA ready)
- ✅ Performance optimizations
- ✅ TypeScript support complet

### Commandes Utiles

- `npm run dev` - Développement local
- `npm run build` - Build de production
- `npm run preview` - Aperçu du build local

Le déploiement devrait maintenant fonctionner sans problème ! 🚀