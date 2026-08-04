# Tech Stack Icons

Cette page contient les icônes SVG personnalisées utilisées dans le README.

## Backpack Custom Icon

```svg
<svg width="65" height="65" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="backpackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0770E3;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#47C5FF;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Backpack shape -->
  <rect x="20" y="25" width="60" height="50" rx="8" fill="url(#backpackGradient)"/>
  
  <!-- Backpack straps -->
  <rect x="30" y="15" width="8" height="20" rx="4" fill="url(#backpackGradient)"/>
  <rect x="62" y="15" width="8" height="20" rx="4" fill="url(#backpackGradient)"/>
  
  <!-- Backpack pocket -->
  <rect x="25" y="35" width="50" height="30" rx="4" fill="white" fill-opacity="0.3"/>
  
  <!-- Zipper -->
  <line x1="25" y1="40" x2="75" y2="40" stroke="white" stroke-width="2" stroke-linecap="round"/>
  
  <!-- Handle -->
  <rect x="45" y="20" width="10" height="4" rx="2" fill="white" fill-opacity="0.8"/>
</svg>
```

## Design System Icon

```svg
<svg width="65" height="65" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667EEA;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764BA2;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Grid -->
  <rect x="10" y="10" width="25" height="25" rx="3" fill="url(#designGradient)"/>
  <rect x="37.5" y="10" width="25" height="25" rx="3" fill="url(#designGradient)" opacity="0.7"/>
  <rect x="65" y="10" width="25" height="25" rx="3" fill="url(#designGradient)" opacity="0.5"/>
  
  <rect x="10" y="37.5" width="25" height="25" rx="3" fill="url(#designGradient)" opacity="0.7"/>
  <rect x="37.5" y="37.5" width="25" height="25" rx="3" fill="url(#designGradient)"/>
  <rect x="65" y="37.5" width="25" height="25" rx="3" fill="url(#designGradient)" opacity="0.7"/>
  
  <rect x="10" y="65" width="25" height="25" rx="3" fill="url(#designGradient)" opacity="0.5"/>
  <rect x="37.5" y="65" width="25" height="25" rx="3" fill="url(#designGradient)" opacity="0.7"/>
  <rect x="65" y="65" width="25" height="25" rx="3" fill="url(#designGradient)"/>
</svg>
```

## Calendar Icon

```svg
<svg width="65" height="65" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="calendarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4ECDC4;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Calendar base -->
  <rect x="15" y="20" width="70" height="65" rx="6" fill="white" stroke="url(#calendarGradient)" stroke-width="3"/>
  
  <!-- Calendar header -->
  <rect x="15" y="20" width="70" height="20" rx="6" fill="url(#calendarGradient)"/>
  
  <!-- Rings -->
  <rect x="25" y="10" width="4" height="20" rx="2" fill="url(#calendarGradient)"/>
  <rect x="71" y="10" width="4" height="20" rx="2" fill="url(#calendarGradient)"/>
  
  <!-- Dates -->
  <circle cx="30" cy="55" r="4" fill="url(#calendarGradient)" opacity="0.3"/>
  <circle cx="45" cy="55" r="4" fill="url(#calendarGradient)" opacity="0.3"/>
  <circle cx="60" cy="55" r="4" fill="url(#calendarGradient)"/>
  <circle cx="75" cy="55" r="4" fill="url(#calendarGradient)" opacity="0.3"/>
  
  <circle cx="30" cy="70" r="4" fill="url(#calendarGradient)" opacity="0.3"/>
  <circle cx="45" cy="70" r="4" fill="url(#calendarGradient)" opacity="0.3"/>
  <circle cx="60" cy="70" r="4" fill="url(#calendarGradient)" opacity="0.3"/>
</svg>
```

## Utilisation

Ces icônes peuvent être utilisées directement dans le README en les hébergeant sur GitHub ou en utilisant des services comme shields.io ou techstack-generator.vercel.app.