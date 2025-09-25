# 🥩 Délice Rouge - Site Web Restaurant/Supermarché

![Délice Rouge](https://img.shields.io/badge/Status-Production%20Ready-green)
![React](https://img.shields.io/badge/React-18+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![Mobile](https://img.shields.io/badge/Mobile-Friendly-green)

## 📋 Description

Site web moderne et responsive pour **Délice Rouge**, un restaurant/supermarché spécialisé dans la boucherie, l'épicerie fine et les snacks, situé à Brazzaville, République du Congo. Le site offre une expérience utilisateur élégante avec une navigation intuitive et un système de gestion intégré.

## ✨ Fonctionnalités

### 🏠 **Page d'Accueil**
- Présentation élégante avec hero section
- Services proposés (Boucherie, Épicerie, Snack)
- Section "À propos" avec l'histoire de l'entreprise
- Informations de contact complètes

### 📋 **Menu Interactif**
- Navigation par catégories (Boucherie, Épicerie, Snack)
- Affichage des prix en temps réel
- Articles populaires mis en avant
- Offres spéciales et promotions
- Boutons de commande intégrés

### ⭐ **Système d'Avis Clients**
- Affichage des avis avec système de notation (5 étoiles)
- Statistiques de satisfaction client
- Formulaire pour laisser un nouvel avis
- Système de vérification des avis
- Distribution des notes en graphique

### ⚙️ **Tableau de Bord Admin**
- Authentification sécurisée
- Statistiques en temps réel
- Gestion du menu (ajout, modification, suppression)
- Modération des avis clients
- Gestion des commandes
- Notifications en temps réel

### 📱 **Contact WhatsApp**
- Bouton flottant avec animation
- Message pré-rempli pour faciliter le contact
- Responsive et discret

## 🛠️ Technologies Utilisées

- **Frontend**: React 18+ avec TypeScript
- **Styling**: Tailwind CSS v4 avec design system personnalisé
- **Icons**: Émojis natifs pour performance optimale
- **Responsive**: Mobile-first design
- **Accessibilité**: WCAG 2.1 compliant
- **SEO**: Meta tags optimisés, structure sémantique

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone [repository-url]
cd delice-rouge

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm start
```

### Build de Production
```bash
# Créer le build optimisé
npm run build

# Servir en production
npm run serve
```

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 **Mobile** (320px - 768px)
- 📱 **Tablette** (768px - 1024px)
- 💻 **Desktop** (1024px+)

## 🎨 Design System

### Couleurs Principales
- **Rouge Principal**: `#DC2626` (rouge de la marque)
- **Rouge Secondaire**: `#B91C1C`
- **Vert WhatsApp**: `#10B981`
- **Gris**: Échelle de gris pour le texte et les arrière-plans

### Typographie
- Police système pour performance optimale
- Hiérarchie claire (H1-H4)
- Tailles responsives automatiques

## 🔐 Administration

### Accès Admin
- **URL**: `/admin` ou bouton "Admin" dans la navigation
- **Identifiants de démo**:
  - Utilisateur: `admin`
  - Mot de passe: `delice2024`

### Fonctionnalités Admin
1. **Dashboard**: Vue d'ensemble avec statistiques
2. **Gestion Menu**: Ajouter, modifier, supprimer les articles
3. **Avis Clients**: Modérer et gérer les avis
4. **Commandes**: Suivre et gérer les commandes

## 📞 Configuration WhatsApp

Pour personnaliser le bouton WhatsApp :

1. Modifier le numéro dans `/components/WhatsAppButton.tsx`
2. Changer la variable `phoneNumber` (format international sans +)
3. Personnaliser le message par défaut

```typescript
const phoneNumber = '24206123456'; // Votre numéro (format international)
const message = 'Votre message personnalisé';
```

## 🎯 SEO et Performance

### Optimisations SEO
- Meta tags optimisés pour chaque page
- Structure HTML sémantique
- URLs propres et descriptives
- Schema markup pour les entreprises locales
- Optimisation des images avec alt tags

### Performance
- Code splitting automatique
- Images optimisées
- CSS critical inlined
- Lazy loading des composants
- Bundle size < 300KB gzipped

## 🔧 Personnalisation

### Modifier le Logo
1. Remplacer l'image dans les assets
2. Mettre à jour l'import dans `/components/Navigation.tsx`

### Ajouter de Nouvelles Pages
1. Créer un nouveau composant dans `/components/`
2. Ajouter la route dans `App.tsx`
3. Mettre à jour la navigation

### Modifier les Couleurs
1. Éditer les variables CSS dans `/styles/globals.css`
2. Les couleurs Tailwind se mettront à jour automatiquement

## 📊 Métriques et Analytics

Le site est prêt pour l'intégration de :
- Google Analytics 4
- Google Search Console
- Facebook Pixel
- Hotjar pour l'analyse UX

## 🧪 Tests

### Tests Manuels Recommandés
- [ ] Navigation sur tous les devices
- [ ] Formulaire d'avis fonctionnel
- [ ] Bouton WhatsApp opérationnel
- [ ] Admin dashboard accessible
- [ ] Responsive design sur différentes tailles d'écran

## 🚀 Déploiement

### Plateformes Recommandées
- **Vercel**: Déploiement automatique depuis Git
- **Netlify**: Build et déploiement continu
- **GitHub Pages**: Pour les projets open source

### Variables d'Environnement
```env
REACT_APP_WHATSAPP_NUMBER=24206123456
REACT_APP_ADMIN_USERNAME=admin
REACT_APP_ADMIN_PASSWORD=delice2024
```

## 🔄 Maintenance

### Mises à jour Régulières
- [ ] Mise à jour du menu et des prix
- [ ] Modération des avis clients
- [ ] Vérification des liens WhatsApp
- [ ] Optimisation des images
- [ ] Sauvegarde des données

### Monitoring
- Performance avec Lighthouse
- Uptime monitoring
- Erreurs JavaScript
- Métriques de conversion

## 🆘 Support et Dépannage

### Problèmes Courants

**Le bouton WhatsApp ne fonctionne pas**
- Vérifier le format du numéro de téléphone
- Tester sur différents navigateurs

**Admin ne se connecte pas**
- Vérifier les identifiants
- Effacer le cache du navigateur

**Images ne s'affichent pas**
- Vérifier les chemins d'import
- Optimiser les tailles d'images

## 📝 Changelog

### Version 1.0.0 (Janvier 2024)
- ✅ Site web complet avec 4 pages
- ✅ Design responsive mobile-first
- ✅ Système d'avis clients
- ✅ Dashboard administrateur
- ✅ Intégration WhatsApp
- ✅ Optimisations SEO

## 🤝 Contribution

Pour contribuer au projet :
1. Fork le repository
2. Créer une branche feature
3. Commiter les changements
4. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Développé avec ❤️ pour Délice Rouge**

*Site web moderne, performant et mobile-friendly pour votre restaurant/supermarché*