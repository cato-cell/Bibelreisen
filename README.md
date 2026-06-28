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
| `images/00-start.webp` | Startbildet (to søsken finner den lysende boken) |
| `images/02-abel.webp` | Abel (gjeteren med sauene) |
| `images/03-kain.webp` | Kain (i kornåkeren) |
| `images/04-enok.webp` | Enok (vandrer med Jehova) |
| `images/05-metusjalah.webp` | Metusjalah (den eldste, ved teltet) |
| `images/06-nefilim.webp` | Nefilim (kjempene før vannflommen) |
| `images/07-noah.webp` | Noah (familien bygger arken) |
| `images/08-abraham.webp` | Abraham *(låst – mangler)* |

Alle bildene refereres direkte fra `images/`-mappen (ingen base64 i
`index.html` lenger). Mangler et bilde, viser spillet et pent
plassholder-felt med filstien – så det er lett å se hva som skal legges inn.

## Personer
Reisen følger den røde tråden kronologisk: **Abel → Kain → Enok →
Metusjalah → Nefilim → Noah → (Abraham, kommer)**. Hver person har en
`side` (`jehova` eller `slange`). Rene fakta-stopp (f.eks. Metusjalah)
bruker `side:"fakta"` + `noSide:true`, som hopper over «Velg side»-steget
og gir en gull-stjerne i stedet for hjerte/gaffel.

## Legge til en ny person
Legg bildet i `images/` og legg til et objekt i `PERSONS`-listen i `index.html`
(felt: id, name, eraDate, img, side, puzzle, guessWrong, arrival, greet, story,
quiz, reflect {q,a}, refs, sideQ, lesson; valgfritt `noSide:true` for
fakta-stopp, `locked:true` for kommende stopp). Følg Abel/Kain som mal.
