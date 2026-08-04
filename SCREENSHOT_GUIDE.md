# 📸 Guide de Capture d'Écran

Ce guide vous aide à prendre les screenshots parfaits pour votre documentation.

## 🎯 Screenshots Requis

### 1. Desktop View (`desktop-view.png`)
**Objectif**: Montrer l'application complète sur desktop
```
✅ Actions à effectuer:
1. Ouvrir l'application avec `npm start`
2. Ouvrir dans un navigateur en plein écran (1920x1080)
3. S'assurer que tout est visible:
   - Header "Flight Schedule" avec le gradient bleu
   - Calendrier centré avec navigation
   - Bouton "Continue" sous le calendrier
4. Prendre la capture complète de la fenêtre
```

### 2. Mobile View (`mobile-view.png`)  
**Objectif**: Démontrer le design responsive
```
✅ Actions à effectuer:
1. Ouvrir les DevTools (F12)
2. Activer le mode responsive (Ctrl+Shift+M)
3. Sélectionner iPhone 12 Pro (390x844) ou similaire
4. Vérifier que le layout mobile s'affiche:
   - Header adapté
   - Calendrier responsive
   - Bouton bien centré
5. Capturer la vue mobile complète
```

### 3. Calendar Interaction (`calendar-interaction.png`)
**Objectif**: Montrer l'interaction avec le calendrier
```
✅ Actions à effectuer:
1. Cliquer sur une date dans le calendrier
2. Vérifier qu'elle se surligne (couleur Skyscanner)
3. S'assurer que la navigation (flèches, dropdown) est visible
4. Capturer avec une date sélectionnée
```

### 4. Button Action (`button-action.png`)
**Objectif**: Montrer la réaction du bouton Continue
```
✅ Actions à effectuer:
Option A - Avec date sélectionnée:
1. Sélectionner une date
2. Cliquer sur "Continue"
3. Capturer l'alert/popup qui s'affiche

Option B - Sans date sélectionnée:
1. Cliquer sur "Continue" sans sélectionner de date
2. Capturer le message d'erreur
```

### 5. Test Results (`test-results.png`)
**Objectif**: Prouver que tous les tests passent
```
✅ Actions à effectuer:
1. Ouvrir un terminal dans le projet
2. Exécuter: npm test
3. Attendre que tous les tests passent (4 passed)
4. Capturer le terminal avec les résultats verts
```

## 📐 Spécifications Techniques

### Résolutions Recommandées
- **Desktop**: 1920x1080, 1440x900, ou 1600x900
- **Mobile**: 375x812 (iPhone 12), 390x844 (iPhone 12 Pro), ou 360x740 (Android)

### Outils de Capture
- **Windows**: Snipping Tool, Win + Shift + S
- **Mac**: Cmd + Shift + 4, Cmd + Shift + 5
- **Linux**: GNOME Screenshot, Flameshot
- **Navigateur**: Extensions comme Awesome Screenshot

### Qualité d'Image
- Format PNG (meilleure qualité)
- Pas de compression excessive
- Texte lisible et net
- Couleurs fidèles

## 🎨 Conseils de Style

### Pour de Belles Captures
1. **Fenêtre propre**: Fermez les onglets inutiles
2. **Focus**: Montrez l'interaction principale
3. **Contraste**: Assurez-vous que le texte est lisible
4. **Cohérence**: Utilisez le même navigateur pour toutes les captures
5. **Timing**: Pour les interactions, capturez au bon moment

### États à Capturer
- **État normal**: Application au repos
- **État hover**: Bouton survolé (optionnel)
- **État actif**: Date sélectionnée
- **État success**: Action réussie
- **État error**: Message d'erreur

## 📁 Organisation des Fichiers

Une fois vos captures prêtes:
```bash
# 1. Placez vos images dans docs/images/
cp ~/Downloads/desktop-view.png docs/images/
cp ~/Downloads/mobile-view.png docs/images/
cp ~/Downloads/calendar-interaction.png docs/images/
cp ~/Downloads/button-action.png docs/images/
cp ~/Downloads/test-results.png docs/images/

# 2. Vérifiez que les noms correspondent exactement
ls docs/images/

# 3. Ajoutez et committez
git add docs/images/
git commit -m "Add application screenshots"
git push origin main
```

## ✅ Checklist Final

Avant de committer vos images:
- [ ] `desktop-view.png` - Vue desktop complète ✨
- [ ] `mobile-view.png` - Vue mobile responsive 📱  
- [ ] `calendar-interaction.png` - Date sélectionnée 📅
- [ ] `button-action.png` - Action du bouton Continue ▶️
- [ ] `test-results.png` - Tests passants ✅
- [ ] Images optimisées et bien nommées 🎯
- [ ] Taille < 2MB par image 📏
- [ ] Qualité haute mais web-optimisée 🌐

## 🚀 Publication

Une fois vos images ajoutées et poussées sur GitHub:
1. Allez sur votre repository GitHub
2. Naviguez vers le README.md  
3. Vos images s'afficheront automatiquement !
4. Partagez le lien de votre repository 🎉

Bon travail ! Vos captures vont rendre votre documentation parfaite pour la simulation Skyscanner ! 📸✨