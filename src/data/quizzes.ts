// =============================================================================
//  Bibelreisen – quiz-innhold
// -----------------------------------------------------------------------------
//  Dette er den ENESTE filen du trenger å redigere for å legge til nytt innhold.
//
//  Slik legger du til et nytt spørsmål i en eksisterende kategori:
//    - Finn riktig kategori under `quizzes` og legg til et objekt i `questions`.
//
//  Slik legger du til en HELT NY kategori (tema/etappe):
//    - Kopier et helt kategori-objekt, gi det en unik `id`, og fyll inn.
//
//  Hvert spørsmål:
//    {
//      question: "Spørsmålsteksten",
//      options: ["Svar A", "Svar B", "Svar C", "Svar D"],
//      correctIndex: 0,            // 0 = første alternativ, 1 = andre, osv.
//      explanation: "Kort forklaring som vises etter at man har svart.",
//      reference: "1 Mos 12,1"     // (valgfritt) bibelhenvisning
//    }
// =============================================================================

export interface Question {
  question: string
  options: string[]
  correctIndex: number
  explanation?: string
  reference?: string
}

export interface Quiz {
  id: string
  title: string
  description: string
  emoji: string
  questions: Question[]
}

export const quizzes: Quiz[] = [
  {
    id: 'skapelse-og-urtid',
    title: 'Skapelsen og urtiden',
    description: 'Fra skapelsen til Babels tårn – de første kapitlene i 1. Mosebok.',
    emoji: '🌅',
    questions: [
      {
        question: 'Hva skapte Gud på den første dagen?',
        options: ['Dyrene', 'Lyset', 'Mennesket', 'Stjernene'],
        correctIndex: 1,
        explanation: 'På den første dagen sa Gud: «Det skal bli lys!» og lyset ble til.',
        reference: '1 Mos 1,3',
      },
      {
        question: 'Hvem var de to første menneskene?',
        options: ['Kain og Abel', 'Noah og Sem', 'Adam og Eva', 'Abraham og Sara'],
        correctIndex: 2,
        explanation: 'Adam og Eva var de første menneskene, plassert i Edens hage.',
        reference: '1 Mos 2,7–22',
      },
      {
        question: 'Hvor mange dager og netter regnet det under storflommen?',
        options: ['7', '12', '40', '100'],
        correctIndex: 2,
        explanation: 'Det regnet i 40 dager og 40 netter mens Noah og familien var i arken.',
        reference: '1 Mos 7,12',
      },
      {
        question: 'Hva ble forvirret ved Babels tårn?',
        options: ['Folkets språk', 'Værforholdene', 'Tidsregningen', 'Stjernehimmelen'],
        correctIndex: 0,
        explanation: 'Gud forvirret språket deres slik at de ikke lenger forsto hverandre, og spredte dem ut over jorden.',
        reference: '1 Mos 11,7–9',
      },
    ],
  },
  {
    id: 'patriarkene',
    title: 'Patriarkene',
    description: 'Abraham, Isak, Jakob og Josef – løftets folk tar form.',
    emoji: '⛺',
    questions: [
      {
        question: 'Hvilket land ba Gud Abraham om å dra til?',
        options: ['Egypt', 'Kanaan', 'Babylon', 'Assyria'],
        correctIndex: 1,
        explanation: 'Gud kalte Abraham ut fra Ur og lovet ham landet Kanaan.',
        reference: '1 Mos 12,1–7',
      },
      {
        question: 'Hva het Abrahams og Saras sønn?',
        options: ['Ismael', 'Isak', 'Jakob', 'Esau'],
        correctIndex: 1,
        explanation: 'Isak var løftesønnen, født da Abraham og Sara var gamle.',
        reference: '1 Mos 21,1–3',
      },
      {
        question: 'Hvilket nytt navn fikk Jakob etter å ha kjempet med Gud?',
        options: ['Israel', 'Edom', 'Juda', 'Levi'],
        correctIndex: 0,
        explanation: 'Jakob fikk navnet Israel, som betyr «han som kjemper med Gud».',
        reference: '1 Mos 32,28',
      },
      {
        question: 'Hvordan endte Josef opp i Egypt?',
        options: [
          'Han ble sendt som budbringer',
          'Brødrene solgte ham som slave',
          'Han flyktet fra hungersnød',
          'Faraos hær tok ham til fange',
        ],
        correctIndex: 1,
        explanation: 'Josefs misunnelige brødre solgte ham til kjøpmenn, og han havnet i Egypt.',
        reference: '1 Mos 37,28',
      },
    ],
  },
  {
    id: 'exodus',
    title: 'Utgangen fra Egypt',
    description: 'Moses, plagene og veien gjennom ørkenen mot det lovede land.',
    emoji: '🔥',
    questions: [
      {
        question: 'Hvordan åpenbarte Gud seg for Moses første gang?',
        options: [
          'I en brennende busk',
          'I en sky om dagen',
          'Gjennom en engel i drømme',
          'Med en røst fra himmelen',
        ],
        correctIndex: 0,
        explanation: 'Gud talte til Moses fra en tornebusk som brant uten å bli fortært.',
        reference: '2 Mos 3,2',
      },
      {
        question: 'Hvor mange plager rammet Egypt?',
        options: ['7', '10', '12', '40'],
        correctIndex: 1,
        explanation: 'Det var ti plager, der den siste var de førstefødtes død.',
        reference: '2 Mos 7–12',
      },
      {
        question: 'Hvilket hav delte seg da israelittene flyktet?',
        options: ['Middelhavet', 'Galileasjøen', 'Sivsjøen (Rødehavet)', 'Dødehavet'],
        correctIndex: 2,
        explanation: 'Gud delte Sivsjøen (Rødehavet) slik at folket kunne gå tørrskodd over.',
        reference: '2 Mos 14,21',
      },
      {
        question: 'Hvor mottok Moses de ti bud?',
        options: ['Sinai-fjellet', 'Oljeberget', 'Karmel', 'Sion'],
        correctIndex: 0,
        explanation: 'Moses mottok lovens tavler på Sinai-fjellet.',
        reference: '2 Mos 19–20',
      },
    ],
  },
  {
    id: 'jesu-liv',
    title: 'Jesu liv',
    description: 'Fra Betlehem til Jerusalem – evangelienes fortelling om Jesus.',
    emoji: '✝️',
    questions: [
      {
        question: 'I hvilken by ble Jesus født?',
        options: ['Nasaret', 'Jerusalem', 'Betlehem', 'Kapernaum'],
        correctIndex: 2,
        explanation: 'Jesus ble født i Betlehem, slik profeten Mika hadde forutsagt.',
        reference: 'Luk 2,4–7',
      },
      {
        question: 'Hvem døpte Jesus i Jordanelven?',
        options: ['Peter', 'Johannes døperen', 'Elia', 'Andreas'],
        correctIndex: 1,
        explanation: 'Johannes døperen døpte Jesus, og Ånden kom over ham som en due.',
        reference: 'Matt 3,13–16',
      },
      {
        question: 'Hvor mange disipler valgte Jesus ut?',
        options: ['7', '10', '12', '70'],
        correctIndex: 2,
        explanation: 'Jesus valgte tolv disipler (apostler) som skulle følge ham nært.',
        reference: 'Mark 3,14',
      },
      {
        question: 'Hva var Jesu første under ifølge Johannesevangeliet?',
        options: [
          'Han gikk på vannet',
          'Han mettet fem tusen',
          'Han gjorde vann til vin i Kana',
          'Han vekket Lasarus opp',
        ],
        correctIndex: 2,
        explanation: 'I bryllupet i Kana gjorde Jesus vann til vin – hans første tegn.',
        reference: 'Joh 2,1–11',
      },
    ],
  },
  {
    id: 'paulus-reiser',
    title: 'Paulus’ reiser',
    description: 'Den tidlige kirken og misjonsreisene rundt Middelhavet.',
    emoji: '⛵',
    questions: [
      {
        question: 'Hva het Paulus før han ble en Kristus-troende?',
        options: ['Simon', 'Saulus', 'Stefanus', 'Silas'],
        correctIndex: 1,
        explanation: 'Han het Saulus og forfulgte de kristne før omvendelsen.',
        reference: 'Apg 9,1–4',
      },
      {
        question: 'På veien til hvilken by ble Paulus omvendt?',
        options: ['Damaskus', 'Antiokia', 'Efesos', 'Korint'],
        correctIndex: 0,
        explanation: 'Paulus møtte den oppstandne Jesus i et lys på veien til Damaskus.',
        reference: 'Apg 9,3',
      },
      {
        question: 'Til hvilken by skrev Paulus brevet «Romerbrevet»?',
        options: ['Jerusalem', 'Roma', 'Aten', 'Filippi'],
        correctIndex: 1,
        explanation: 'Romerbrevet er skrevet til menigheten i Roma, rikets hovedstad.',
        reference: 'Rom 1,7',
      },
      {
        question: 'Hva skjedde med Paulus på vei til Roma som fange?',
        options: [
          'Han ble løslatt underveis',
          'Skipet led forlis ved Malta',
          'Han rømte fra fangenskapet',
          'Han ble ført til Egypt',
        ],
        correctIndex: 1,
        explanation: 'Skipet forliste ved Malta, men alle om bord ble berget.',
        reference: 'Apg 27–28',
      },
    ],
  },
]
