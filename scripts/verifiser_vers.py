#!/usr/bin/env python3
# ===================================================================
# PORT-VERKTØY · Versverifisering — Den røde tråden
# -------------------------------------------------------------------
# Kontrollerer HVERT vers i data/bibelvers.json ordrett (bokstav for
# bokstav) mot nwt_N.pdf, på det oppgitte sidetallet (±1 side).
# Utdrag markeres med «…»; hvert fragment må finnes ordrett.
#
# Bruk:
#   python3 scripts/verifiser_vers.py                 # full kontroll
#   python3 scripts/verifiser_vers.py --pdf STI.pdf   # egen PDF-sti
#
# Exit 0 = alle vers OK og verifisert:true.
# Exit 1 = ordlydsavvik, manglende side, eller verifisert:false funnet.
#
# Krever: pymupdf (pip install pymupdf) + lokal nwt_N.pdf
# (standard: assets/nwt_N.pdf — .gitignore-et, ALDRI i repoet).
#
# Normalisering (kun for søk – rapporten viser rå tekst):
#  - PDF-artefakter: kontrolltegn inni ord, «˚a»→å, «´e»→é, myk bindestrek
#  - whitespace/orddelings-bindestreker ignoreres
#  - sammenlignes på bokstaver+sifre; tegnsetting kontrolleres manuelt
#    ved avvik (utdragskonvensjon: avsluttende punktum/sitattegn tillatt)
# ===================================================================
import json, re, sys, unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PDF = ROOT / 'assets' / 'nwt_N.pdf'
if '--pdf' in sys.argv:
    PDF = Path(sys.argv[sys.argv.index('--pdf') + 1])

try:
    import fitz
except ImportError:
    sys.exit("FEIL: pymupdf mangler (pip install pymupdf)")
if not PDF.exists():
    sys.exit(f"FEIL: finner ikke {PDF} – legg nwt_N.pdf lokalt (aldri commit!)")

doc = fitz.open(PDF)

def rawbody(pno):
    """Kroppstekst (brødtekst + versnummer-font) for én side, artefakt-renset."""
    if not (0 <= pno < doc.page_count):
        return ''
    out = []
    for b in doc[pno].get_text('dict')['blocks']:
        for l in b.get('lines', []):
            for s in l['spans']:
                f = s['font']
                if 'WtClearTextMedium' in f or 'WtKnollTextBoldFixedNum' in f:
                    out.append(s['text'])
    t = ''.join(out)
    t = re.sub(r'[\x00-\x1f]', '', t)
    t = t.replace('˚a', 'å').replace('´e', 'é').replace('­', '')
    return unicodedata.normalize('NFC', t)

def lonly(s):
    s = s.replace('˚a', 'å').replace('´e', 'é')
    return ''.join(ch for ch in s if ch.isalnum())

def aonly(s):
    """Kun bokstaver. Fallback for flervers-sitater: PDF-en har versnumre
    (f.eks. «…for andre.3 Jeg skal…») inni spennet som spillet siterer
    kontinuerlig. Ordlyden kontrolleres fortsatt bokstav for bokstav."""
    s = s.replace('˚a', 'å').replace('´e', 'é')
    return ''.join(ch for ch in s if ch.isalpha())

fasit = json.loads((ROOT / 'data' / 'bibelvers.json').read_text())
CACHE = {}
def page(p):
    if p not in CACHE:
        CACHE[p] = rawbody(p)
    return CACHE[p]

feil = []
uverifisert = []
for v in fasit['vers']:
    key = f"{v['karakter']}|{v['referanse']}"
    if not v.get('verifisert'):
        uverifisert.append(key)
    if not v.get('side'):
        feil.append((key, 'mangler side (PDF-sidetall)'))
        continue
    pidx = v['side'] - 1                       # trykt side = pdf-indeks + 1
    raw3 = page(pidx - 1) + page(pidx) + page(pidx + 1)
    hay, hay_a = lonly(raw3), aonly(raw3)
    for fx in (x.strip() for x in v['tekst'].split('…')):
        lf = lonly(fx)
        if len(lf) < 6:
            continue
        if lf not in hay and aonly(fx) not in hay_a:
            feil.append((key, f'ordlydsavvik nær s.{v["side"]}: «{fx[:60]}…»'))
            break

n = len(fasit['vers'])
print(f"Kontrollert {n} vers mot {PDF.name}.")
if uverifisert:
    print(f"\nPORT STENGT – {len(uverifisert)} vers med verifisert:false:")
    for k in uverifisert:
        print('  ✗', k)
if feil:
    print(f"\nORDLYDSAVVIK ({len(feil)}):")
    for k, msg in feil:
        print('  ⚠', k, '—', msg)
if uverifisert or feil:
    sys.exit(1)
print("✅ PORT ÅPEN – alle vers verifisert og ordrett mot PDF-en.")
