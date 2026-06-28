# CLAUDE.md — Den røde tråden

Denne filen gir deg (Claude) all kontekst du trenger for å jobbe med dette
depoet. **Les den før du foreslår eller skriver noe.**

---

## Hva dette er

Et nettbasert **bibelspill for barn (5–14 år)** sett fra Jehovas vitners
perspektiv. Et søskenpar reiser **kronologisk gjennom Bibelen** via en lysende
bok og møter bibelske personer underveis.

**Kjerneprinsipp:** Vi viser **VALGET, ikke dommen.** Forankret i 1. Mosebok
3:15 — Jehovas side vs. Slangens side. "Side" = hvem man etterligner, ikke
blodlinje.

---

## Den store hensikten (fundamentet for hele spillet)

Hele spillet har ett gjennomgående fokus: **Jehovas hensikt.** Alt innhold skal
underbygge denne røde tråden:

- Jehovas opprinnelige hensikt var et **paradis på jorden**, fylt av mennesker
  som elsker ham og lever lykkelig for alltid.
- I Eden gjorde Adam og Eva opprør og var ulydige. **Først da** kommer 1. Mosebok
  3:15 inn — profetien om hvordan Jehova skal **ordne opp i konsekvensene av
  opprøret** og til slutt gjenopprette paradiset.
- Derfor er **3:15 alltid avslutningen på innledningen**, aldri en teaser før
  ulydigheten. Verset røpes først i det øyeblikket synden kommer inn.
- Sluttmålet: Jehova skal lage **et paradis igjen som aldri mer kan ødelegges.**
  Alle personene søsknene møter på reisen er **brikker i denne tråden** frem mot
  det gjenopprettede paradiset.

**Hvorfor «velg side» betyr noe:** Gjennom hele Bibelen er det mange mennesker
som **frivillig valgte Jehovas side** — ikke slangens. Nettopp fordi valget er
**frivillig**, beviser det at **slangen tok feil** i Eden. Hver person som velger
Jehova av eget hjerte, er et levende motbevis mot slangens påstand.

Dette fundamentet skal gjennomsyre tekst, vers og refleksjon på alle stopp:
ikke bare «hva skjedde», men **hvordan personen er en brikke i Jehovas hensikt,
og hvordan deres frie valg viser at slangen tok feil.**

---

## Doktrineregler (ufravikelige)

- Bruk **alltid Ny verden-oversettelsen (NV)** for bibelsitater.
- **Sitater skal være 100 % ordrett** etter NV — aldri parafrasert, aldri
  blandet med andre oversettelser. Kilde/fasit: **jw.org / wol.jw.org**.
  - Er du i tvil om eksakt ordlyd, eller får du ikke bekreftet teksten mot
    jw.org → **ikke gjett.** Marker verset «// MÅ BEKREFTES» og spør Cato.
  - (Merk: i enkelte arbeidsmiljøer er jw.org nettverksblokkert. Da er Cato
    fasit på ordlyden.)
- Alt bibelsk/åndelig innhold forankres i **jw.org** og JV-publikasjoner.
- **Aldri** kirketradisjon, moderne teologi eller eksterne religiøse kilder.
- "Kvinnens avkom" (1. Mos 3:15) = Jesus + de 144 000. "Kvinnen" = Jehovas
  himmelske organisasjon.
- **Enok:** gikk med Jehova, ble tatt **fredelig (= død FØR fiender kunne
  skade ham)** — gikk **IKKE** til himmelen.
- **Metusjalah:** Bibelen er taus om hans tro → **faktastopp uten sidevelger.**
  969 år, døde i flodåret.
- Er Bibelen taus om en persons tro → ingen sidevelger, kun faktastopp.

---

## Skriftstedsregel (ufravikelig)

Alle skriftsteder som brukes for en karakter **må handle direkte om nettopp
den personen.** Bruk kun vers der personen selv nevnes, omtales eller står i
sentrum.

- **IKKE** bruk vers som "passer tematisk" men ikke handler om personen.
- **IKKE** hent generelle prinsippvers bare fordi de er tilgjengelige.
- Eksempel Enok: bruk vers som faktisk sier noe om Enok (1. Mos 5:21–24,
  Hebr 11:5, Judas 14–15) — ikke et generelt vers om tro eller lydighet som
  "kunne passet".
- Er det skrevet lite om personen: bruk det lille som finnes, og **ikke** fyll
  på med urelaterte vers.
- Faktastopp-karakterer (f.eks. Metusjalah): kun vers som **direkte nevner dem.**

**Godkjent unntak (av Cato):** På lærdoms-quizspørsmålet «Hva lærer vi om
Jehova?» kan det brukes ett **generelt prinsippvers** selv om det ikke nevner
personen — f.eks. **2. Korinter 9:7** («Gud elsker en glad giver») for Abel.
Unntaket gjelder **kun** dette lærdoms-spørsmålet. Alle andre verskort
(avsløring, øvrige quizvers, refleksjon) forblir person-spesifikke.

---

## Sitater i spillet (skriftsteder)

- Hele spillet skal alltid kunne **underbygges av bibelske sannheter**.
- Legg inn skriftsteder **alle steder der det er naturlig og underbygger det vi
  skal lære** — men alltid i tråd med Skriftstedsregelen over (person-spesifikt)
  og 100 % ordrett NV.
- **Ingen spoiler under puslespillet (godkjent av Cato):**
  Mens man pusler skal motivet **ikke røpe identitet**. Sløret er **bakt inn i
  pikslene** via canvas (`obscureImage()`), så det ferdige puslebildet forblir
  uidentifiserbart.
  - Ved «Ferdig! Godt jobbet!» vises **kun nøytral ros + CTA** «Hvem tror du
    dette er? →». **Ingen navngivende vers her.**
  - **Gjette-skjermen viser det klare bildet** (man har nettopp pusla det fram):
    `sceneImg(src, caption)` uten slør. Man gjetter navnet ut fra bildet.
- **Navngivende verskort:** det person-spesifikke verset (`verse:{ t, ref }`)
  vises **etter avsløringen** (i `reveal`-steget, `.versecard`), når identiteten
  allerede er kjent. Person-spesifikt + 100 % ordrett NV som ellers.
- Refleksjonsskjermen og venn-modalen (Mine venner) viser bibelreferanser (`refs`).

---

## Møteløkke per karakter (fast rekkefølge)

1. Ankomsthint (**uten navn**)
2. Puslespill (slørt motiv; ved ferdig: kun nøytral ros + CTA)
3. Gjettelek (4 valg; **klart** bilde – nettopp pusla fram)
4. Avsløring + hilsen (+ navngivende verskort her)
5. Fortelling
6. Quiz (tilfeldig rekkefølge)
7. Refleksjonsspørsmål
8. Velg side (utelates ved faktastopp)
9. Belønning: personens **emblem** (kun portrett, intet side-merke) legges i
   samlingen **«Vi har truffet»** — delt i seksjoner: «Mine venner» (Jehovas
   side), «Dårlige eksempler» (slangens side), «Visste du?» (faktastopp).
   Seksjonen viser siden; emblemet selv er bare portrettet. (Erstatter tidligere
   perle/troférom.)

**Refleksjonsspørsmålet er alltid:** «Hva forteller denne historien om
Jehova?» — med trykk-for-å-avsløre-svar. Bibelreferanser vises på
refleksjonsskjermen og i emblem-modalen («Vi har truffet»).

---

## Karakterstatus

| Karakter | Side | Løkke | Status |
|---|---|---|---|
| Abel | Jehovas side | Full | ✅ Implementert — **malformat** |
| Kain | Slangens side | Kort | ✅ Implementert — **malformat** |
| Enok | Jehovas side | Full | ✅ Implementert |
| Metusjalah | Faktastopp | Uten sidevelger | ✅ Implementert (gull-stjerne) |
| Nefilim | Slangens side | Kort | ✅ Implementert |
| Noah | Jehovas side | Full | ✅ Implementert (familien vektlagt) |
| Abraham | — | — | 🔒 Låst — neste karakter |

**Abel og Kain er malen.** Alle nye karakterer skal følge nøyaktig samme
struktur, kodemønster og kommentarstil.

**Neste:** Abraham → deretter kronologisk videre.

---

## Bilder

- Møte-bilder ligger i `images/` som **WebP**, navngitt med løpenummer + person.
- Refereres direkte fra `images/` (ingen base64 i `index.html`). Mangler et
  bilde, viser spillet et plassholder-felt med filstien.

| Fil | Person |
|---|---|
| `images/00-start.webp` | Startbildet (søsknene + boken) |
| `images/02-abel.webp` | Abel |
| `images/03-kain.webp` | Kain |
| `images/04-enok.webp` | Enok |
| `images/05-metusjalah.webp` | Metusjalah |
| `images/06-nefilim.webp` | Nefilim |
| `images/07-noah.webp` | Noah |
| `images/08-abraham.webp` | Abraham *(mangler)* |

---

## Teknisk stack

- **Statisk-først**, vanilla JS (ingen rammeverk, ingen byggesteg)
- **Mobil-først**
- Hosting: **Cloudflare Pages** (preview-URL bygges automatisk). Output-mappe: `/`.
- Versjonskontroll: **GitHub**
- **Norske kodekommentarer**
- Selvstendige filer

### Estetikk (v5, fungerende build) — IKKE ØDELEGG DISSE
- Ekte interlåsende puslespillformer (tabs/blanks, ingen ghost-guide)
- **Puslebrettet fyller nesten hele bredden;** skuff-brikkene skaleres ned så de
  får plass, og vokser til full størrelse når de løftes
- Slørt møte-motiv i puslespill/gjettelek (ingen spoiler); navngivende verskort
  vises først ved avsløring (`.versecard`)
- Atlas/pergament-estetikk
- Voksseglmedaljonger på kartet; faktastopp får **gull-stjerne** (ikke
  hjerte/gaffel)
- Stiplet "rød tråd"-sti + kompassrose
- Komplett tilpasset **SVG-ikonsett** (erstatter alle emoji)
- **«Vi har truffet»**-samling (ikke perler/troférom): ferdige stopp gir et
  emblem (kun portrett), delt i seksjoner: venner / dårlige eksempler / fakta
- Tilfeldig quizrekkefølge, korrekt hover-tilstand, synlig CTA ved
  puslespillferdigstilling

---

## Arbeidsflyt

1. Du leverer ferdig kodeblokk/fil.
2. Cato committer.
3. Cloudflare bygger preview-URL automatisk.

---

## Slik skal du jobbe (viktig)

- **Én oppgave / én fil av gangen.** Ikke prøv å lese eller endre hele
  prosjektet i én forespørsel — det kutter svaret.
- **Ikke gjett struktur.** Følg Abel/Kain-malen.
- **Ikke gjett skriftsteder.** Person-spesifikt + 100 % ordrett NV; bekreft mot
  jw.org, ellers marker «// MÅ BEKREFTES» og spør Cato.
- **Ikke ødelegg design-endringene** (se Estetikk over).
- **Lever koden, ikke lange forklaringer.** Cato committer direkte.
- Korte, praktiske svar. Konklusjon først.
- Bildegenerering: bruk **filtervennlig språk** — unngå volds-/panikkord.

---

## Standard startmelding for ny karakter

```
Implementer ÉN karakter. Jobb kun med dataene her — ikke les hele prosjektet.

KARAKTER: [navn]
SIDE: [Jehovas side / Slangens side / faktastopp uten sidevelger]
LØKKE: [full / kort]
FORMAT: Bruk Abel/Kain som mal.

INNHOLD:
- Ankomsthint (uten navn): [...]
- Fortelling: [...]
- Quiz (3–4 spm + svar): [...]
- Refleksjon → svar: [...]
- Skriftsted til verskort (NV, 100 % ordrett, PERSON-SPESIFIKt): [...]
- Bibelreferanse(r): [...]
- Hilsen ved avsløring: [...]

LEVERANSE: Ferdig kodeblokk, én fil, klar til commit. Ikke forklar.
```
