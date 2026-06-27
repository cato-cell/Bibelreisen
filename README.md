# Den røde tråden

En reise gjennom Bibelen for barn (Jehovas vitner-perspektiv).

## Struktur
- `index.html` – hele spillet (vanilla JS, mobil-først, ingen byggesteg)
- `images/` – møte-bilder i WebP (lazy-vennlig, lette)

## Kjøre lokalt
Åpne `index.html` i nettleser, eller kjør en enkel server:

```sh
python3 -m http.server
```

Deretter åpne http://localhost:8000

## Cloudflare Pages
Koble repoet til Cloudflare Pages. Ingen build-kommando trengs – statisk.
Output-mappe: `/` (rot).

## Bilder
Møte-bilder ligger i `images/` som WebP og navngis med løpenummer + person:

| Fil | Brukes til |
| --- | --- |
| `images/01-start.webp` | Startbildet (to søsken finner den lysende boken) |
| `images/02-abel.webp` | Abel (gjeteren med sauene) |
| `images/03-kain.webp` | Kain (i kornåkeren) |
| `images/04-noah.webp` | Noah *(låst – mangler)* |
| `images/05-abraham.webp` | Abraham *(låst – mangler)* |

Startbildet og de to første møtene (Abel/Kain) ligger foreløpig også
inline som base64 i `index.html`, slik at filen kan deles frittstående.
Når flere personer legges til, bruk `images/`-filene direkte (se Noah/Abraham
som mal med `img:"images/04-noah.webp"`).

## Legge til en ny person
Legg bildet i `images/` og legg til et objekt i `PERSONS`-listen i `index.html`
(felt: id, name, eraDate, img, side, puzzle, guessWrong, arrival, greet, story,
quiz, reflect {q,a}, refs, sideQ, lesson). Følg Abel/Kain som mal.
