# React + Vite
 

# Projet React - Application de gestion de logements

## Description

Cette application est un projet réalisé avec **React**, avec les contraintes techniques suivantes :
- Utilisation de **Create React App** pour initialiser le projet.
- Utilisation de **React Router** pour la gestion des routes.
- Stylisation de l'application avec **Sass**.
- Respect des bonnes pratiques de **React** : composants modulaires et réutilisables, gestion des props, state, événements, etc.
- Aucune librairie externe **React** autorisée pour gérer les composants.

## Dépendances
- React Router Dom
- React 18
- Sass


## Quick start
 Afin d'initialiser le projet **npm install**
 Une fois installation ok, selectionner : **React** , et ensuite **Javascript**
 ensuite à chaque fois pour démarrer le projet **npm run dev**

## Fonctionnalités

- Navigation via **React Router**, permettant de récupérer des paramètres dans l'URL pour afficher des données spécifiques.
- Chaque page possède sa propre route, et une page 404 est renvoyée pour toute route non existante ou URL incorrecte.
- Les listes sont gérées de manière dynamique avec la méthode `.map()` pour itérer sur les données.
- Structure logique des composants : un composant par fichier pour maintenir une organisation claire du projet.



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
