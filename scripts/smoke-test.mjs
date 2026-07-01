#!/usr/bin/env node
/* ===================================================================
   RØYK-TEST — Den røde tråden
   -------------------------------------------------------------------
   Kjøres FØR hver push. Åpner index.html headless og kontrollerer:
    1. Ingen JS-feil ved lasting.
    2. Alle kort rendrer ALLE steg uten å kaste.
    3. Ingen versgjenbruk (samme ref to ganger) i samme løkke.
    4. Alle kort har thread, trait og traad-struktur.
    5. window.BIBELVERS er lastet (vers fra fasit-speilet).
    6. Prolog-slidene rendrer.

   Bruk:  node scripts/smoke-test.mjs
   Exit 0 = grønn. Exit 1 = funn (listes i output).

   Krever playwright + chromium. I Claude Code-miljøet finnes de på
   /opt/node22/lib/node_modules/playwright og /opt/pw-browsers/…
   (skriptet prøver vanlig `playwright`-import først).
   =================================================================== */
import { pathToFileURL } from 'node:url';
import { existsSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

async function loadChromium() {
  let pw;
  try { pw = await import('playwright'); }
  catch { pw = await import('/opt/node22/lib/node_modules/playwright/index.js'); }
  const chromium = pw.chromium || pw.default?.chromium;
  // finn eksplisitt chromium-binær om miljøet krever det
  let executablePath;
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  if (existsSync(base)) {
    const dir = readdirSync(base).find(d => d.startsWith('chromium'));
    if (dir) {
      for (const c of [`${base}/${dir}/chrome-linux/chrome`, `${base}/${dir}`]) {
        if (existsSync(c)) { executablePath = c; break; }
      }
    }
  }
  return chromium.launch(executablePath ? { executablePath } : {});
}

const browser = await loadChromium();
const page = await browser.newPage();
const jsErrors = [];
page.on('pageerror', e => jsErrors.push(e.message));

await page.goto(pathToFileURL(resolve(ROOT, 'index.html')).href);
await page.waitForTimeout(600);

const r = await page.evaluate(() => {
  const funn = [];
  if (typeof PERSONS === 'undefined') return { fatal: 'PERSONS ikke lastet (data/persons.js)' };
  if (typeof window.BIBELVERS !== 'object' || !Object.keys(window.BIBELVERS).length)
    funn.push('BIBELVERS ikke lastet (data/bibelvers.js)');

  for (const c of PERSONS) {
    // 3) versgjenbruk i løkka (reveal + scenevers + quizvers)
    const refs = [];
    if (c.verse) refs.push(c.verse.ref);
    (c.story || []).forEach(sc => { if (typeof sc === 'object' && sc.verse) refs.push(sc.verse.ref); });
    (c.quiz || []).forEach(q => { if (q.verseAfter) refs.push(q.verseAfter.ref); });
    const dup = refs.filter((x, i) => refs.indexOf(x) !== i);
    if (dup.length) funn.push(`${c.id}: versgjenbruk ${dup.join(', ')}`);
    // 4) obligatoriske felter
    if (!c.thread) funn.push(`${c.id}: mangler thread`);
    if (!c.trait) funn.push(`${c.id}: mangler trait`);
    if (!c.traad || !('skjedde' in c.traad)) funn.push(`${c.id}: mangler traad-struktur`);
    // 2) rendrer alle steg
    try {
      startPerson(c.id);
      for (let i = 0; i < STATE.steps.length; i++) { STATE.i = i; renderStep(); }
    } catch (e) { funn.push(`${c.id}: kastet i renderStep – ${e.message}`); }
  }
  // 6) prolog
  try { for (let i = 0; i < PROLOG.length; i++) renderProlog(i); }
  catch (e) { funn.push('prolog kastet: ' + e.message); }
  return { funn, kort: PERSONS.length };
});
await browser.close();

if (r.fatal) { console.error('FATALT:', r.fatal); process.exit(1); }
const alle = [...(r.funn || []), ...jsErrors.map(e => 'JS-feil: ' + e)];
console.log(`Røyk-test: ${r.kort} kort kontrollert.`);
if (alle.length) {
  console.error(`RØD (${alle.length} funn):`);
  alle.forEach(f => console.error('  ✗', f));
  process.exit(1);
}
console.log('✅ GRØNN – alle kort rendrer, ingen versgjenbruk, felter på plass.');
