# Images Documentation

Cette dossier contient toutes les images utilisées dans la documentation du projet.

## 📁 Structure des Images

### Screenshots Principaux
- `desktop-view.png` - Vue desktop de l'application complète
- `mobile-view.png` - Vue mobile responsive
- `calendar-interaction.png` - Interaction avec le calendrier
- `button-action.png` - Action du bouton Continue

### Screenshots Techniques
- `test-results.png` - Résultats des tests Jest
- `component-structure.png` - Structure des composants Backpack
- `code-architecture.png` - Architecture du code

### Diagrammes (optionnel)
- `user-flow.png` - Flux utilisateur de sélection de date
- `component-hierarchy.png` - Hiérarchie des composants React

## 📐 Spécifications d'Images

### Format recommandé
- **Format**: PNG ou JPG
- **Résolution**: 1920x1080 (desktop), 375x812 (mobile)
- **Qualité**: Haute qualité pour les screenshots
- **Compression**: Optimisée pour le web

### Conventions de nommage
- Utiliser des tirets (`-`) pour séparer les mots
- Noms descriptifs en anglais
- Format: `description-view.png`

## 🎯 Captures à Effectuer

### 1. Desktop View (desktop-view.png)
- Application complète en plein écran
- Calendrier visible avec quelques dates
- Header "Flight Schedule" bien visible
- Bouton "Continue" centré sous le calendrier

### 2. Mobile View (mobile-view.png)  
- Vue mobile (375px de largeur)
- Layout responsive adapté
- Éléments empilés verticalement
- Calendrier adapté à la taille mobile

### 3. Calendar Interaction (calendar-interaction.png)
- Une date sélectionnée (surligné en bleu Skyscanner)
- Navigation des mois visible
- Hover states si possible

### 4. Button Action (button-action.png)
- Modal/alert affiché après clic sur "Continue"
- ou état hover/focus du bouton

### 5. Test Results (test-results.png)
- Terminal avec `npm test` exécuté
- Tous les tests en vert (passing)
- Statistiques de coverage si disponible

## 📝 Instructions pour les Captures

1. **Ouvrir l'application** avec `npm start`
2. **Redimensionner la fenêtre** selon les besoins
3. **Interagir avec les composants** pour les états souhaités
4. **Utiliser l'outil de capture** de votre système
5. **Optimiser les images** avant de les ajouter
6. **Nommer correctement** selon les conventions

## 🔄 Mise à jour

Quand vous ajoutez des images :
1. Placez-les dans ce dossier `docs/images/`
2. Vérifiez que les liens dans `README.md` sont corrects
3. Commitez et pushez les changements

Les images seront automatiquement affichées sur GitHub !