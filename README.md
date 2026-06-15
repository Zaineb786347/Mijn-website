# 🎓 Portfolio Website - Zaineb Adalat

> Modern, professioneel portfolio gebouwd met React + TypeScript voor Software Development stage

## 📋 Over Dit Project

Dit is mijn persoonlijke portfolio website, gebouwd om mijn vaardigheden, projecten en motivatie te tonen aan potentiële stagebedrijven. De website is volledig responsive en werkt perfect op desktop, tablet en mobiel.

### ✨ Features

- **Modern Design**: Professioneel paars-roze kleurenschema
- **Responsive**: Werkt op alle schermformaten
- **5 Pagina's**: Home, Over Mij, Opleidingen, Beroep, Projecten, Contact
- **CV Download**: Knop om mijn CV als PDF te downloaden
- **Contact Formulier**: Direct contact opnemen via formulier
- **Snelle Navigatie**: Smooth page transitions met React Router
- **Optimaal voor Stages**: Professionele content gericht op stagegesprekken

## 🚀 Hoe Start Ik de Website?

### Vereisten

Je hebt het volgende nodig:
- **Node.js** (versie 16 of hoger) - [Download hier](https://nodejs.org/)
- Een **code editor** zoals VS Code - [Download hier](https://code.visualstudio.com/)
- Een **terminal** (Command Prompt, PowerShell, of Git Bash)

### Stap 1: Open Terminal

1. Open de map `mirror` in VS Code
2. Ga naar **Terminal** → **New Terminal** (of druk op `Ctrl + ` `)

### Stap 2: Installeer Dependencies

In de terminal, typ:

```bash
npm install
```

Dit installeert alle benodigde packages. Dit hoef je maar **1 keer** te doen.

### Stap 3: Start Development Server

```bash
npm run dev
```

De website opent automatisch in je browser op `http://localhost:5173`

### Stap 4: Bekijk Je Website

De website draait nu! Elke keer dat je een bestand opslaat, wordt de website automatisch ververst.

## 📁 Project Structuur

```
mirror/
├── src/
│   ├── pages/           # Alle pagina's (Home, AboutMe, etc.)
│   ├── components/      # Herbruikbare onderdelen (Navbar, Footer)
│   ├── styles/          # CSS styling bestanden
│   └── assets/          # Afbeeldingen en andere media
├── public/              # Publieke bestanden (CV PDF hier plaatsen!)
├── index.html           # Hoofd HTML bestand
├── package.json         # Project configuratie
└── README.md            # Dit bestand!
```

## 🎨 Hoe Pas Ik de Website Aan?

### Tekst Wijzigen

#### Home Pagina
Open `src/pages/Home.tsx` en pas de tekst aan:
```tsx
<h1>Jouw Naam</h1>
<p>Jouw intro tekst...</p>
```

#### Over Mij
Open `src/pages/AboutMe.tsx` en wijzig:
- Je intro tekst in de `<p>` tags
- Kwaliteiten in de `qualities` array
- Hobbies in de `hobbies` array

#### Projecten
Open `src/pages/Projects.tsx` en pas de project data aan in de `projects` array.

### Foto's Toevoegen

1. Plaats je foto in `src/assets/img/`
2. Noem het bijvoorbeeld `foto.png`
3. In AboutMe.tsx, de foto wordt automatisch gebruikt

### Kleuren Aanpassen

Open `src/styles/variables.css` en wijzig de kleuren:

```css
--primary: #8b5cf6;    /* Hoofdkleur (paars) */
--secondary: #ec4899;  /* Secundaire kleur (roze) */
```

## 📄 CV Download Toevoegen

1. Maak een PDF van je CV
2. Noem het `cv-zaineb-adalat.pdf`
3. Plaats het in de `public/` map
4. De download knop op de Contact pagina werkt nu automatisch!

## 📧 Contact Formulier Instellen

Het formulier is voorbereid met [Formspree](https://formspree.io/):

1. Ga naar [formspree.io](https://formspree.io/) en maak een gratis account
2. Maak een nieuw formulier
3. Kopieer je Form ID
4. Open `src/pages/Contact.tsx`
5. Vervang `YOUR_FORM_ID` met jouw echte ID:
   ```tsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

Nu ontvang je emails wanneer iemand het formulier invult!

## 🌐 Website Online Zetten

### Optie 1: Netlify (Gemakkelijkst)

1. Ga naar [netlify.com](https://netlify.com)
2. Maak een gratis account
3. Klik op "Add new site" → "Deploy manually"
4. Sleep de hele `mirror` map naar Netlify
5. Wacht 1-2 minuten
6. Je krijgt een gratis URL zoals `jouw-naam.netlify.app`!

### Optie 2: Vercel

1. Ga naar [vercel.com](https://vercel.com)
2. Maak een gratis account
3. Klik "Import Project"
4. Selecteer je `mirror` map
5. Klik "Deploy"
6. Klaar! Je krijgt een gratis URL.

## 🛠 Technologieën

- **React 18** - Modern JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Super snelle build tool
- **React Router** - Pagina navigatie
- **CSS Modules** - Scoped styling
- **Font Awesome** - Iconen

## 📚 Handige Commando's

```bash
# Start development server
npm run dev

# Build voor productie
npm run build

# Preview productie build
npm run preview

# Stop de server
Ctrl + C (in terminal)
```

## 🐛 Problemen Oplossen

### "npm is not recognized"
➡️ Node.js is niet geïnstalleerd. Download het van [nodejs.org](https://nodejs.org/)

### "Port 5173 is already in use"
➡️ Een andere applicatie gebruikt deze poort. Stop die eerst of wijzig de poort in `vite.config.ts`

### Styling werkt niet
➡️ Check of alle CSS bestanden correct geïmporteerd zijn in je component

### Afbeeldingen laden niet
➡️ Controleer of het pad correct is. Gebruik altijd `import` voor afbeeldingen in src/assets

## 📞 Hulp Nodig?

- **Email**: zaineb.adalat786@gmail.com
- **Telefoon**: +31 6 45771052

## 📝 Licentie

Dit project is gemaakt voor persoonlijk gebruik als portfolio. Voel je vrij om het als inspiratie te gebruiken!

---

**Gemaakt met ❤️ door Zaineb Adalat** | Software Developer in Opleiding

*Laatste update: December 2025*
