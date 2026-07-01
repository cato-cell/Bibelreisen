#!/usr/bin/env node
/* ===================================================================
   GENERATOR · bibelvers  —  Den røde tråden
   -------------------------------------------------------------------
   Kanonisk fasit:  data/bibelvers.json   (ENESTE sannhet for vers-tekst)
   Denne generatoren:
     • skriver  data/bibelvers.js   (window.BIBELVERS – speilet, lastes i spillet)
     • validerer at inline-fallback i data/persons.js er I SYNC med fasit

   Bruk:
     node data/gen-bibelvers.mjs          # skriv mirror + valider inline
     node data/gen-bibelvers.mjs --check  # kun valider (exit 1 ved avvik)

   REGEL: rediger vers-tekst KUN i bibelvers.json, kjør så denne. Rediger
   ALDRI data/bibelvers.js (generert) eller vers-tekst i persons.js for hånd.
   =================================================================== */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const DIR = dirname(fileURLToPath(import.meta.url));
const checkOnly = process.argv.includes('--check');

const fasit = JSON.parse(readFileSync(join(DIR, 'bibelvers.json'), 'utf8'));
const vers = fasit.vers || [];
const key = (karakter, ref) => `${karakter}|${ref}`;

// Bygg oppslag karakter|referanse -> tekst
const map = {};
for (const v of vers) {
  const k = key(v.karakter, v.referanse);
  if (k in map && map[k] !== v.tekst) {
    console.error(`FEIL: kollisjon for ${k} (ulik tekst i fasit)`); process.exit(1);
  }
  map[k] = v.tekst;
}

// --- Skriv mirror (bibelvers.js) ---
if (!checkOnly) {
  const header =
`/* ===================================================================
   GENERERT FIL — IKKE REDIGER FOR HÅND.
   Speiler data/bibelvers.json. Kjør: node data/gen-bibelvers.mjs
   Kanonisk fasit er data/bibelvers.json (eneste sannhet for vers-tekst).
   =================================================================== */
`;
  const body = `window.BIBELVERS = ${JSON.stringify(map, null, 0)};\n`;
  writeFileSync(join(DIR, 'bibelvers.js'), header + body);
  console.log(`Skrev data/bibelvers.js (${Object.keys(map).length} vers).`);
}

// --- Valider at inline-fallback i persons.js speiler fasit ---
const persons = readFileSync(join(DIR, 'persons.js'), 'utf8');
const cards = persons.split(/\n  \{\n/);
const nameRe = /id:"([a-z0-9]+)", name:"([^"]+)"/;
const vRe = /(?:verse|verseAfter):\{ t:"((?:[^"\\]|\\.)*)", ref:"([^"]+)" \}/g;
let checked = 0, mismatches = [];
for (const blk of cards) {
  const nm = blk.match(nameRe); if (!nm) continue;
  const karakter = nm[2];
  let m;
  while ((m = vRe.exec(blk))) {
    const inlineText = JSON.parse(`"${m[1]}"`);   // avescape som JSON-streng
    const ref = m[2], k = key(karakter, ref);
    checked++;
    if (!(k in map)) { mismatches.push(`mangler i fasit: ${k}`); }
    else if (map[k] !== inlineText) { mismatches.push(`ulik tekst: ${k}`); }
  }
}
if (mismatches.length) {
  console.error(`INLINE UT AV SYNC (${mismatches.length}):`);
  mismatches.slice(0, 20).forEach(s => console.error('  - ' + s));
  process.exit(1);
}
console.log(`Inline-fallback i persons.js er i sync med fasit (${checked} vers).`);
