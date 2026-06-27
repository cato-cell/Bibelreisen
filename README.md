# Bibelreisen

En historisk reise gjennom Bibelen – en **quiz- og læringsapp** bygget som en
installerbar web-app (PWA). Reis gjennom Bibelens store fortellinger, fra
skapelsen til den tidlige kirken, og test kunnskapen din etappe for etappe.

## Funksjoner

- 📖 Flere quiz-etapper (Skapelsen, Patriarkene, Utgangen fra Egypt, Jesu liv, Paulus' reiser)
- ✅ Umiddelbar tilbakemelding med forklaring og bibelhenvisning etter hvert svar
- 📊 Resultatskjerm med poengsum og oppmuntring
- 📱 PWA – kan installeres på mobil og brukes offline
- 🎨 Varmt, «reise»-inspirert design

## Kom i gang

```bash
npm install      # installer avhengigheter
npm run dev      # start utviklingsserver (http://localhost:5173)
npm run build    # bygg produksjonsversjon til dist/
npm run preview  # forhåndsvis produksjonsbygget lokalt
```

## Legge til nytt innhold

Alt quiz-innhold ligger i **én** fil:

```
src/data/quizzes.ts
```

Der finner du en kommentert mal øverst. Du kan:

- **legge til et spørsmål** i en eksisterende etappe, eller
- **lage en ny etappe** ved å kopiere et helt kategori-objekt og gi det en unik `id`.

Hvert spørsmål har spørsmålstekst, svaralternativer, riktig svar, en kort
forklaring (vises etter svar) og en valgfri bibelhenvisning.

## Teknologi

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (byggverktøy)
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) (offline / installerbar)

## Publisering

Produksjonsbygget i `dist/` er statiske filer og kan hostes hvor som helst –
f.eks. Vercel, Netlify, GitHub Pages eller en vanlig webserver. Appen bruker
relativ `base` (`./`), så den fungerer også fra en undermappe.
