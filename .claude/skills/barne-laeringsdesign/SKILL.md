---
name: barne-laeringsdesign
description: Pedagogisk standard for Bibelreisen (Den røde tråden) – bruk ved ALT arbeid på kort, quiz, refleksjon, stopp-typer og læringsflyt. Inneholder definition of done per kort, quiz-kvalitetskrav, refleksjonstrapp, aldersdifferensiering, etisk ramme og kvalitetskontroll-liste.
---

# Barne-læringsdesign — pedagogisk standard for Den røde tråden

Målgruppe: barn 5–14 år. Alt innhold sett fra Jehovas vitners perspektiv,
forankret i CLAUDE.md (doktrineregler, skriftstedsregel, den store hensikten).
Denne skilen definerer HVORDAN vi lærer bort – CLAUDE.md definerer HVA.

---

## Fire læringsfaser (ryggraden i hvert stopp)

OPPDAG → FORSTÅ → VURDER → KNYTT SAMMEN. Fasene er faste; aktivitetene varierer.

| Fase | Steg i møteløkka | Hensikt |
|---|---|---|
| OPPDAG | Ankomsthint → puslespill → gjettelek → avsløring | Nysgjerrighet. Identiteten er skjult (slørt bilde) til avsløringen. |
| FORSTÅ | Fortelling + navngivende verskort | Hva skjedde, med Bibelens egne ord. |
| VURDER | Quiz + refleksjonstrapp | Årsak/virkning, hva det viser om Jehova, eget hjerte. |
| KNYTT SAMMEN | «Velg side» + belønning m/ rød-tråd-linje | Alt ender i ett valg; personen er en brikke i Jehovas hensikt. |

---

## Stopp-typer

1. **Full løkke** (hovedpersoner, Jehovas side): alle 9 steg i møteløkka.
2. **Kort løkke** (slangens side / bipersoner): færre fortellings-/quizsteg.
   Hold bilde og tekst på VALGET, ikke utfallet/straffen.
3. **Faktastopp** (Bibelen er taus om troen, f.eks. Metusjalah): ingen
   sidevelger, gull-stjerne på kartet, «Visste du?»-vinkling. Kun vers som
   direkte nevner personen.
4. **Overgangsfelt** (gateway-kort): binder kartene sammen til én reise.
   Ingen læringskrav – kun fremdrift og forventning.

---

## Quiz-kvalitet (per kort)

- **Miks, ikke trivia.** Tilstreb: ett faktaspørsmål, ett om årsak/konsekvens,
  ett om hva beretningen viser om Jehova, ett om den røde tråden. Aldri rene
  tallspørsmål («hvor mange…») med mindre tallet ER poenget (faktastopp).
- **Feilhåndtering uten skam:** feil valg dempes og deaktiveres (ingen røde
  kryss, ingen shake), varm «prøv igjen»-melding eller `hint`-tekst, barnet
  mister aldri belønning. Riktig svar → bekreftende verskort (`verseAfter`).
- Tilfeldig svarrekkefølge. 1–4 spørsmål per kort (kort løkke: 1–2).
- Vers i quiz følger skriftstedsregelen (person-spesifikt; unntak kun
  lærdoms-spørsmålet «Hva lærer vi om Jehova?» – ett prinsippvers tillatt).
- **Aldri samme vers to ganger i samme løkke** (reveal + quiz sjekkes samlet).

## Refleksjonstrapp (fast, 4 trinn)

1. Hva gjorde Jehova? *(fasit: `reflect.a`)*
2. Hvorfor tror du han gjorde det? *(åpent hjertespørsmål – ingen fasit)*
3. Hvilken egenskap viser dette? *(fasit: `trait`)*
4. Hva betyr det for oss? *(åpent hjertespørsmål – ingen fasit)*

Trykk-for-å-avsløre forslag per trinn. **Aldri** tving fram personlige
trosbekjennelser; «Videre» er aldri gated på svar.

---

## Aldersdifferensiering (én nivåsatt versjon + presentasjonsbryter)

- Grunnversjon skal fungere for 5–8: korte setninger, ett poeng per skjerm,
  store trykkflater, ingen tidspress.
- 9–14 får dybde via: `fordypning`-vers (nivaa-tagging), åpne hjertespørsmål,
  og (valgfritt) ett beat FORAN «Velg side»: «Hva gjorde valget vanskelig?»
- Presentasjonsbryter (opplesning, færre valg, enklere språk) er v1-mål –
  ikke to separate innholdsversjoner.

## Repetisjon og sammenheng

- «Velg side» er et fast pedagogisk anker på hvert relevant stopp – formet
  som refleks: alt ender i ett valg, og det kloke er alltid Jehova.
- «Den røde tråden»-linjen (`thread`) vises på belønningsskjermen (ETTER
  valget – aldri før, det røper svaret).
- Samlingen «Vi har truffet» (emblem per person) er gjenbesøks-mekanikken:
  venner / dårlige eksempler / visste du.

## Tilgjengelighet

- Mobil-først. Store knapper, god kontrast, Fredoka/Nunito-lesbarhet.
- Alt-tekster på bilder. Ingen blinkende/stressende elementer, ingen nedtelling.
- Alt kan fullføres i eget tempo; feil svar koster aldri fremdrift.

## Etisk ramme

- **Vis VALGET, ikke dommen.** Ikke dvel ved straff, vold eller skrekk –
  spesielt på slangens side-kort (bilde OG tekst).
- Spenning skal komme fra løftet og hindringene i beretningen – aldri fra
  frykt. Målet er tillit til Jehova.
- Åpne spørsmål er åpne: vi antyder, barnet konkluderer.

---

## Kvalitetskontroll — Definition of done per kort

Et kort er ferdig når ALT under er sant:

1. ☐ Følger Abel/Kain-malen (feltstruktur, kommentarstil, norsk).
2. ☐ Alle vers `verifisert:true` i `data/bibelvers.json` (PORTEN – ingen
   merge uten; kjør `python3 scripts/verifiser_vers.py`).
3. ☐ Vers er person-spesifikke (skriftstedsregelen); ingen versgjenbruk i løkka.
4. ☐ Fire trådfelt (`traad`) utfylt der innholdet finnes; `thread` + `trait` satt.
5. ☐ Quiz-miks per standarden over; hint der det hjelper.
6. ☐ Slørt bilde t.o.m. gjettelek; klart bilde + navngivende vers først ved avsløring.
7. ☐ Riktig stopp-type (full/kort/faktastopp) og side-verdi.
8. ☐ `node scripts/smoke-test.mjs` grønn (alle kort rendrer alle steg).
9. ☐ Karakterstatus-tabellen i CLAUDE.md oppdatert (🔒 → ✅).
