/* ===================================================================
   DATA · Kort-innhold (persons)  —  Den røde tråden
   -------------------------------------------------------------------
   Skilt fra presentasjon (index.html) i Fase 1. Lastes via
   <script src="data/persons.js"> FØR hovedskriptet, så de globale
   const-ene IMG og PERSONS er synlige for render-koden.
   ENDRE KORT-INNHOLD HER — ikke i index.html.

   MERK (vers): tekst i verse.t / quiz[].verseAfter.t er en INLINE
   FALLBACK. Den kanoniske ordlyden eies av data/bibelvers.json og
   speiles av data/bibelvers.js (generert). Rediger ALDRI vers-tekst
   for hånd her — rediger fasit-fila og kjør data/gen-bibelvers.mjs.
   =================================================================== */

const IMG = { abel:"images/02-abel.webp", kain:"images/03-kain.webp" };

const PERSONS = [
  {
    id:"abel", name:"Abel", eraDate:"ca. 3900 f.v.t.", img:IMG.abel, imgFocus:"82% 32%", side:"jehova",
    puzzle:true, guessWrong:["Noah","Moses","David"],
    arrival:"Den røde tråden tar dere med til en grønn eng for lenge, lenge siden. Dere hører sauer som breker. Noen passer på dem …",
    greet:"Hei! Jeg heter Abel, og jeg passer på sauene mine her. Vil dere bli med litt?",
    story:[
      "Abel var en av de aller første menneskene på jorden. Han elsket Jehova av hele sitt hjerte.",
      "En dag ville Abel gi Jehova en gave. Han valgte det aller fineste han hadde, og ga det med kjærlighet.",
      "Jehova ble glad i gaven – ikke fordi den var stor, men fordi den kom fra et godt hjerte."
    ],
    quiz:[
      { q:"Hva jobbet Abel med?", options:["Han var gjeter og passet sauer","Han var fisker","Han var snekker"], correct:0,
        verseAfter:{ t:"Abel ble gjeter, og Kain ble jorddyrker.", ref:"1. Mosebok 4:2" } }, // person-spesifikt. // verifisert mot NV (nwt_N.pdf)
      { q:"Hvorfor ble Jehova glad i gaven?", options:["Den var gitt i tro, av kjærlighet fra hjertet","Den var størst","Abel var eldst"], correct:0,
        verseAfter:{ t:"På grunn av sin tro fikk han en bekreftelse på at han var rettferdig, for Gud godkjente hans gaver.", ref:"Hebreerne 11:4" } }, // ordlyd fra Cato; verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han ser på hjertet vårt","Han teller gavene","Han liker bare store gaver"], correct:0,
        verseAfter:{ t:"… for Gud elsker en glad giver.", ref:"2. Korinter 9:7" } } // prinsippvers (ikke person-spesifikt) – ønsket av Cato. // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova bryr seg om hjertet vårt. Han ser når vi gir og gjør ting av kjærlighet – ikke for å vise oss fram." },
    refs:"1. Mosebok 4:1–8; Hebreerne 11:4",
    verse:{ t:"Men Abel bar fram noen av de førstefødte i flokken sin … Jehova så med velvilje på Abel og offergaven hans.", ref:"1. Mosebok 4:4" }, // navngivende vers ved avsløring (utdrag). // verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem lyttet Abel til?",
    thread:"Abel er den første som frivillig valgte Jehova – et tidlig bevis på at slangen tok feil, og løftet fra Eden lever videre.",
    trait:"Rettferdighet – han ser til hjertet, ikke til det ytre.",
    traad:{ skjedde:"Abel bar fram sitt beste offer til Jehova, gitt i tro og av et godt hjerte.", jehova:"At Jehova ser til hjertet, ikke til det ytre.", valg:"Abel valgte å gi det aller fineste av kjærlighet – ikke for å vise seg fram.", videre:"Den første som frivillig valgte Jehova – et tidlig bevis på at slangen tok feil, og løftet fra Eden lever videre." },
    lesson:"Abel valgte Jehovas side. Lærdom: Jehova ser til hjertet – gi av kjærlighet."
  },
  {
    id:"kain", name:"Kain", eraDate:"ca. 3900 f.v.t.", img:IMG.kain, imgFocus:"78% 16%", side:"slange",
    puzzle:true, guessWrong:["Abraham","Josef","Jonas"],
    arrival:"Tråden lyser videre til en åker full av korn. Noen står og arbeider hardt i jorden.",
    greet:"Jeg heter Kain. Jeg dyrker jorden, og dette feltet er mitt. (Han ser knapt opp.)",
    story:[
      "Kain ga også Jehova en gave. Men hjertet hans var ikke helt med.",
      "Kain ble misunnelig på broren sin, og sint. Jehova så det, og advarte ham vennlig: «Pass på – du kan velge å gjøre det gode.»",
      "Men Kain ville ikke høre på Jehova. Han lot sinnet styre seg, og gjorde noe veldig galt."
    ],
    quiz:[ { q:"Hva ville Jehova at Kain skulle gjøre?", options:["Velge det gode og slutte å være sint","Fortsette å være sint","Gi en større gave"], correct:0,
      verseAfter:{ t:"Hvorfor er du så sint og bitter?", ref:"1. Mosebok 4:6" } } ], // person-spesifikt (annet enn reveal 4:7). // verifisert mot NV (nwt_N.pdf)
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Selv da Kain var på vei til å velge feil, advarte Jehova ham FØRST – for å hjelpe ham. Jehova gir oss alltid en sjanse til å velge rett." },
    refs:"1. Mosebok 4:1–16",
    verse:{ t:"… ligger synden på lur ved døren. Den ønsker å herske over deg, men kommer du til å få kontroll over den?", ref:"1. Mosebok 4:7" }, // verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem lyttet Kain til?",
    thread:"Kain gikk slangens vei, men Jehova lot løftet fra Eden gå videre gjennom en annen sønn.",
    trait:"Tålmodighet – han advarte Kain og ga ham sjansen til å velge rett.",
    traad:{ skjedde:"Kain ga et offer uten hjertet med, ble misunnelig på broren og lot sinnet styre seg til noe galt.", jehova:"At Jehova er tålmodig – han advarte Kain først for å hjelpe ham.", valg:"Kain ville ikke høre Jehovas vennlige advarsel, men lot sinne og misunnelse råde.", videre:"Kain gikk slangens vei, men Jehova lot løftet fra Eden gå videre gjennom en annen sønn." },
    lesson:"Kain valgte slangens side. Lærdom: Jehova advarer oss fordi han er glad i oss – men vi velger selv."
  },
  {
    id:"enok", name:"Enok", eraDate:"ca. 3400 f.v.t.", img:"images/04-enok.webp", imgFocus:"54% 15%", side:"jehova",
    puzzle:true, guessWrong:["Noah","Abraham","Moses"],
    arrival:"Tråden tar dere til en stille sti i morgenlys. En eldre mann går der, ser opp og snakker varmt – som med en god venn.",
    greet:"Hei! Jeg heter Enok. Jeg liker å vandre og snakke med Jehova – han er den beste vennen min.",
    story:[
      "Enok levde i en verden full av slemme mennesker. Men han var annerledes – han «vandret med Jehova». Det betyr at han var Jehovas nære venn og gjorde alt for å glede ham.",
      "Jehova ga Enok en modig jobb: å si fra til folk at all ondskapen måtte ta slutt. Mange ble sinte, men Enok var modig og fortsatte.",
      "Enok ble 365 år. Da fiender ville skade ham, lot Jehova ham sovne stille inn – så han slapp å lide. Jehova passet på vennen sin helt til slutt."
    ],
    quiz:[
      { q:"Hva betyr det at Enok «vandret med Jehova»?", options:["Han var Jehovas nære venn og gjorde det Jehova liker","Han gikk lange turer alene","Han bodde i en stor hage"], correct:0,
        verseAfter:{ t:"… fikk han en bekreftelse på at Gud hadde godkjent ham.", ref:"Hebreerne 11:5" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva gjorde Enok da folk ble sinte på budskapet?", options:["Han var modig og fortsatte","Han ga opp med en gang","Han gjemte seg for alltid"], correct:0,
        verseAfter:{ t:"Ja, Enok, den sjuende i rekken fra Adam, profeterte også om dem …", ref:"Judas 14" } } // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova legger merke til dem som vil være vennene hans, selv når alle andre gjør det onde – og han passer på dem." },
    refs:"1. Mosebok 5:21–24; Hebreerne 11:5; Judas 14, 15",
    verse:{ t:"Enok vandret trofast med den sanne Gud. Så var han ikke mer, for Gud tok ham bort.", ref:"1. Mosebok 5:24" }, // verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem lyttet Enok til?",
    thread:"Enok gikk trofast med Jehova midt i en ond verden – et bevis på at mennesker kan holde seg på Jehovas side helt fram mot løftet.",
    trait:"Omsorg – han verner vennene sine, som da han tok Enok bort i fred.",
    traad:{ skjedde:"Enok vandret med Jehova i en ond verden og forkynte modig at ondskapen måtte ta slutt.", jehova:"At Jehova legger merke til og verner dem som vil være vennene hans.", valg:"Enok valgte å være Jehovas nære venn og tale sant, selv når mange ble sinte.", videre:"Holdt seg trofast på Jehovas side – et bevis på at mennesker kan gjøre det helt fram mot løftet." },
    lesson:"Enok valgte Jehovas side. Lærdom: Vi kan være Jehovas nære venn selv når ingen andre er det."
  },
  {
    id:"metusjalah", name:"Metusjalah", eraDate:"ca. 3300 f.v.t.", img:"images/05-metusjalah.webp", imgFocus:"38% 14%", side:"fakta", noSide:true,
    puzzle:true, guessWrong:["Enok","Noah","Adam"],
    arrival:"Tråden lyser fram til en svært, svært gammel mann som sitter utenfor et telt, omgitt av mange slektninger.",
    greet:"Hei, små venner! Jeg er Metusjalah. Jeg har levd LENGER enn noe annet menneske som har levd – kan dere gjette hvor lenge?",
    story:[
      "Metusjalah ble 969 år gammel – ingen i hele Bibelen har levd lenger!",
      "Han var sønn av Enok og oldefar til Noah. Slik går den gode tråden videre, fra Enok mot Noah.",
      "Metusjalah døde akkurat det året den store vannflommen kom. Et langt liv – men det viser at alle mennesker trenger Jehova."
    ],
    quiz:[
      { q:"Hvor gammel ble Metusjalah?", options:["969 år","100 år","500 år"], correct:0,
        verseAfter:{ t:"Metusjalah levde altså i 969 år, og så døde han.", ref:"1. Mosebok 5:27" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hvem var Metusjalah i slekt med?", options:["Han var Enoks sønn og Noahs oldefar","Han var Abels bror","Han var en konge"], correct:0,
        verseAfter:{ t:"Da Enok var 65 år, ble han far til Metusjalah.", ref:"1. Mosebok 5:21" } } // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova lot menneskene leve lenge i begynnelsen. Men selv et langt liv er ikke nok uten Jehova – det er han som gir liv som varer." },
    refs:"1. Mosebok 5:21–27",
    verse:{ t:"Da Metusjalah var 187 år, ble han far til Lamek.", ref:"1. Mosebok 5:25" }, // navngivende vers ved avsløring (alder-verset flyttet til quiz). // verifisert mot NV (nwt_N.pdf)
    thread:"Metusjalah er et ledd i slektslinjen fra Enok videre til Noah – tråden føres trygt gjennom generasjonene.",
    trait:"Han er kilden til liv – han lot menneskene leve lenge, og gir liv som varer.",
    traad:{ skjedde:"Metusjalah levde lengst av alle, 969 år, og døde i flodåret.", jehova:"At Jehova er kilden til liv – han lot menneskene leve lenge.", valg:"", videre:"Et ledd i slektslinjen fra Enok videre til Noah – tråden føres trygt gjennom generasjonene." },
    lesson:"Visste du? Metusjalah levde i 969 år – lengst av alle i Bibelen, og helt til flommen kom. Tråden går fra Enok, gjennom ham, videre til Noah."
  },
  {
    id:"nefilim", name:"Nefilim", eraDate:"før vannflommen", img:"images/06-nefilim.webp", imgFocus:"62% 14%", side:"slange",
    puzzle:true, guessWrong:["Vanlige menn","Soldater","Bønder"],
    arrival:"Tråden tar dere til en tid da verden var blitt farlig. Bak en stor stein ser dere noen kjempestore menn …",
    greet:"Disse kjempene kalles nefilim. De var kjempestore og kjempesterke – men de brukte styrken til å være slemme og skremme alle rundt seg.",
    story:[
      "Nefilim var mye større og sterkere enn vanlige mennesker. Men i stedet for å hjelpe andre, plaget de folk og fylte jorden med vold.",
      "De var en trussel mot alle som elsket Jehova og ville gjøre det gode. Verden ble et farlig sted å leve."
    ],
    quiz:[
      { q:"Hvordan brukte nefilim styrken sin?", options:["Til å være slemme og skremme andre","Til å hjelpe folk","Til å bygge fine hus"], correct:0 }
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova ser når de sterke gjør de svake vondt. Han lar ikke ondskapen vare for alltid – og snart skulle han gjøre noe med det." },
    refs:"1. Mosebok 6:1–5",
    verse:{ t:"På den tiden … levde kjempene på jorden … Dette var de mektige mennene i gammel tid, de som var berømte.", ref:"1. Mosebok 6:4" }, // verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvilken side var nefilim på?",
    thread:"Nefilim viste hvor ille det ble på slangens side – men Jehova bevarte løftet gjennom Noah.",
    trait:"Rettferdighet – han tåler ikke ondskap og setter en grense for den.",
    traad:{ skjedde:"Nefilim var mektige menn som brukte styrken sin til vold mot de svake.", jehova:"At Jehova er rettferdig – han tåler ikke ondskap og setter en grense for den.", valg:"De valgte å bruke styrken sin til å skade andre, på slangens side.", videre:"Viste hvor ille det ble på slangens side – men Jehova bevarte løftet gjennom Noah." },
    lesson:"Nefilim var på slangens side. Lærdom: Å være stor og sterk betyr ingenting hvis hjertet er slemt."
  },
  {
    id:"noah", name:"Noah", eraDate:"ca. 2400 f.v.t.", img:"images/07-noah.webp", imgFocus:"52% 10%", side:"jehova",
    puzzle:true, guessWrong:["Abraham","Moses","David"],
    arrival:"Tråden lyser fram til en diger trekasse under bygging. Dere hører hamring og saging – en hel familie jobber sammen.",
    greet:"Hei! Jeg heter Noah. Dette er familien min – kona mi, sønnene Sem, Kam og Jafet, og konene deres. Jehova har bedt oss bygge denne store arken. Vil dere hjelpe til?",
    story:[
      "Jehova så at jorden var full av vold. Men han var glad i Noah og hele familien hans, og ville redde dem alle sammen.",
      "Jehova ga familien en stor jobb: å bygge en kjempestor ark. Noah, kona hans, de tre sønnene Sem, Kam og Jafet, og konene deres – åtte personer – jobbet sammen i mange, mange år. De saget, hamret og bar tunge planker, side om side.",
      "Folk lo av dem og trodde ikke på flommen. Men hele familien stolte på Jehova og ga aldri opp. Til slutt reddet Jehova alle åtte – og dyrene også."
    ],
    quiz:[
      { q:"Hvem bygde arken sammen med Noah?", options:["Hele familien hans – åtte personer","Han bygde den helt alene","Naboene i byen"], correct:0,
        verseAfter:{ t:"Du skal gå inn i arken sammen med dine sønner, din kone og dine sønners koner.", ref:"1. Mosebok 6:18" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hvorfor ble Noah og familien reddet?", options:["De lyttet til Jehova og adlød","De var sterkest","De bygde raskest"], correct:0,
        verseAfter:{ t:"Og Noah gjorde alt det Gud hadde befalt ham. Akkurat slik gjorde han.", ref:"1. Mosebok 6:22" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva gjorde folk rundt dem?", options:["De lo og trodde ikke på flommen","De hjalp ivrig til","De bygde sine egne arker"], correct:0,
        verseAfter:{ t:"Ved tro viste Noah gudsfrykt og bygde en ark … På denne måten kunne familien hans bli reddet. Og ved sin tro viste han at verden fortjente å bli straffet …", ref:"Hebreerne 11:7" } } // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova advarer på forhånd og redder dem som lytter til ham. Han ville at HELE familien skulle holde sammen og bli reddet – ikke bare Noah. Jehova holder alltid løftene sine." },
    refs:"1. Mosebok 6:9–22; 7:1; Hebreerne 11:7",
    verse:{ t:"Gå inn i arken, du og hele din familie, for jeg har sett at du er den som er rettferdig i denne generasjonen.", ref:"1. Mosebok 7:1" }, // verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem lyttet Noah og familien til?",
    thread:"Gjennom Noah og familien berget Jehova menneskeslekten gjennom flommen – og løftets ætt lever videre.",
    trait:"Omsorg – han redder dem som lytter, og gir alltid en vei ut.",
    traad:{ skjedde:"Noah bygde arken slik Jehova sa, og han og familien ble reddet gjennom flommen.", jehova:"At Jehova advarer på forhånd og redder hele familien som lytter til ham.", valg:"Noah valgte å adlyde og gjøre alt Jehova befalte, selv om alle andre spottet.", videre:"Gjennom Noah og familien berget Jehova menneskeslekten – og løftets ætt lever videre." },
    lesson:"Noah valgte Jehovas side – sammen med hele familien. Lærdom: Når vi lytter til Jehova og holder sammen som familie, passer han på oss."
  },
  /* ===== BOLK 2 – Etter flommen → patriarkene (kart 2). Ramme; fylles ett kort av gangen. ===== */
  {
    id:"nimrod", name:"Nimrod", eraDate:"ca. 2200 f.v.t.", img:"images/09-nimrod.webp", imgFocus:"74% 18%", side:"slange", bolk:2,
    puzzle:true, guessWrong:["Farao","Goliat","Esau"],
    arrival:"Tråden tar dere til en svær, travel byggeplass lenge etter vannflommen. Et kjempetårn vokser mot himmelen, og en mektig mann står stolt og ser opp på alt han har satt i gang …",
    greet:"Jeg er Nimrod! Se på tårnet mitt – det skal nå helt opp til himmelen. Her er det JEG som bestemmer.",
    story:[
      "Lenge etter vannflommen levde en sterk og modig mann som het Nimrod. Men han brukte ikke styrken til å glede Jehova – han ville at alle skulle se opp til HAM.",
      "Nimrod fikk folk til å bygge en stor by og et kjempetårn i Babel. «Vi skal gjøre oss et navn!» sa de – som om de ikke trengte Jehova i det hele tatt.",
      "Men Jehova så alt fra himmelen. Han gjorde at de plutselig snakket forskjellige språk, så de ikke lenger forsto hverandre. Da måtte de slutte å bygge, og det Nimrod var så stolt av, falt fra hverandre."
    ],
    quiz:[
      { q:"Hva var Nimrod kjent for?", options:["Han var en mektig jeger som satte seg opp mot Jehova","Han var en snill gjeter","Han bygde en ark"], correct:0,
        verseAfter:{ t:"Han ble en mektig jeger i opposisjon til Jehova.", ref:"1. Mosebok 10:9" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hvorfor bygde de tårnet i Babel?", options:["For å gjøre seg et navn, uten å bry seg om Jehova","For å takke Jehova","For å gjemme seg for regnet"], correct:0,
        verseAfter:{ t:"De første byene i hans rike var Babel … i landet Sinear.", ref:"1. Mosebok 10:10" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han er størst – ingen stolt plan kan stå seg mot ham","Han liker høye tårn","Han bryr seg ikke"], correct:0,
        verseAfter:{ t:"Gud står de stolte imot, men han viser de ydmyke ufortjent godhet.", ref:"Jakob 4:6" } } // prinsippvers (lærdoms-unntak). // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova er mye større enn noen stolt konge eller noe høyt tårn. Når mennesker tror de klarer seg uten ham, kan ingen plan stå seg mot ham – men de ydmyke er han glad i." },
    refs:"1. Mosebok 10:8–10; 11:1–9",
    verse:{ t:"Kusj ble også far til Nimrod. Han var den første som ble en mektig mann på jorden.", ref:"1. Mosebok 10:8" }, // navngivende vers ved avsløring. // verifisert mot NV (nwt_N.pdf)
    thread:"Nimrod ville gjøre seg et navn mot Jehova, men hensikten gikk videre – snart gjennom en mann som stolte på Jehova: Abraham.",
    trait:"Overhøyhet – ingen som trosser Jehova, kan stoppe hensikten hans.",
    traad:{ skjedde:"Nimrod ble en mektig jeger i opposisjon til Jehova og bygde Babel for å gjøre seg et navn.", jehova:"At ingen som trosser Jehova, kan stoppe hensikten hans.", valg:"Nimrod valgte stolthet og opprør – å gjøre seg selv stor i stedet for å ære Jehova.", videre:"Hensikten gikk likevel videre – snart gjennom en mann som stolte på Jehova: Abraham." },
    lesson:"Nimrod valgte slangens side. Lærdom: Å gjøre seg stor på egen hånd fører ingen vei – bare Jehova fortjener et stort navn."
  },
  {
    id:"abraham", name:"Abraham", eraDate:"f. 2018 f.v.t.", img:"images/10-abraham.webp", imgFocus:"72% 16%", side:"jehova", bolk:2,
    puzzle:true, guessWrong:["Noah","Moses","David"],
    arrival:"Tråden fører dere til en stor teltleir under en stjerneklar himmel. En gammel mann står utenfor teltet og ser opp på alle stjernene – som om Noen nettopp har gitt ham et stort løfte …",
    greet:"Velkommen! Jeg heter Abraham. Jehova ba meg forlate hjemmet mitt og reise til et land han ville vise meg – og jeg stolte på ham.",
    nymodell:true,   // REFERANSESTOPP i ny modell (fire læringsfaser). Malen andre kort migreres etter.
    hook:"Jehova lover Abraham noe stort: slekten hans skal bli et helt folk, og ALLE familier på jorden skal bli velsignet gjennom den. Men vent … Abraham og Sara har ingen barn – og de er gamle. Hvordan i all verden skal løftet kunne skje? Ta med dere spørsmålet inn i historien.",
    story:[
      { tittel:"Dra fra alt",
        t:"Abraham bodde i byen Ur, der folk tilba avguder. En dag sa Jehova: «Dra bort fra landet ditt til det landet som jeg skal vise deg.» Abraham pakket sammen og dro – uten å vite hvor veien endte. Han stolte helt på Jehova." },
      { tittel:"Løftet gis",
        t:"Så ga Jehova Abraham det store LØFTET – hør hvor stort det er:",
        verse:{ t:"Jeg skal gjøre deg til en stor nasjon. Jeg skal velsigne deg, og jeg skal gjøre navnet ditt stort. Du skal bli til velsignelse for andre. Jeg skal velsigne dem som velsigner deg, og jeg skal forbanne den som forbanner deg, og alle jordens slekter skal bli velsignet gjennom deg.", ref:"1. Mosebok 12:2-3" } }, // verifisert mot NV (nwt_N.pdf)
      { tittel:"Ventetiden",
        t:"Men årene gikk – og fortsatt ingen barn. En natt tok Jehova Abraham med ut under stjernehimmelen og lot ham se opp. Kunne han telle stjernene? Så tallrik skulle slekten hans bli! Og Abraham trodde på Jehova.",
        verse:{ t:"«Se opp mot himmelen og tell stjernene om du kan.» … «Så tallrike skal dine etterkommere bli.» … Abram trodde på Jehova …", ref:"1. Mosebok 15:5-6" } }, // verifisert mot NV (nwt_N.pdf)
      { tittel:"Isak blir født",
        t:"Og så – akkurat da Jehova hadde sagt – skjedde det som virket umulig: Sara fødte en sønn, Isak! Abraham var 100 år gammel. Jehova hadde ikke glemt løftet sitt et eneste øyeblikk." },
      { tittel:"Løftet bekreftes med ed",
        t:"Senere viste Abraham at han stolte fullt og helt på Jehova, selv i den aller vanskeligste prøven. Da sverget Jehova en ed: Løftet står fast! Gjennom Abrahams ætt skulle alle jordens nasjoner få en velsignelse. Tråden fra Eden hadde nå fått ÉN familie å følge." }
    ],
    quiz:[
      { q:"Hvorfor virket løftet nesten umulig?", options:["Abraham og Sara hadde ingen barn og var gamle","Abraham var for fattig","Landet var for lite"], correct:0,
        hint:"Tenk på spørsmålet dere tok med inn i historien – hva manglet Abraham og Sara?" },
      { q:"Hva gjorde Abraham da Jehova ba ham reise?", options:["Han stolte på Jehova og dro av sted","Han ble hjemme","Han ba om en annen plan"], correct:0,
        verseAfter:{ t:"Da dro Abram av sted, akkurat som Jehova hadde sagt til ham …", ref:"1. Mosebok 12:4" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lovte Jehova Abraham med ed?", options:["At alle jordens nasjoner skulle få en velsignelse gjennom ætten hans","At han skulle bli rikest av alle","At han aldri skulle bli gammel"], correct:0,
        verseAfter:{ t:"Og gjennom ditt avkom skal alle jordens nasjoner oppnå en velsignelse fordi du har hørt på meg.", ref:"1. Mosebok 22:18" } }, // LØFTET. verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han holder alltid løftene sine og belønner tro","Han glemmer det han lover","Han liker bare de sterke"], correct:0,
        verseAfter:{ t:"Ved tro var Abraham lydig da Gud kalte ham … Han dro av gårde, enda han ikke visste hvor han skulle.", ref:"Hebreerne 11:8" } } // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova legger store planer og holder alltid løftene sine. Han la merke til Abrahams tro og gjorde ham til en del av den viktigste slekten i historien – den som Jesus kom fra, og som fører fram mot paradiset." },
    refs:"1. Mosebok 12:1–4; 15:5–6; 22:15–18; Hebreerne 11:8",
    verse:{ t:"Og Jehova sa til Abram: «Dra bort fra landet ditt … til det landet som jeg skal vise deg.»", ref:"1. Mosebok 12:1" }, // navngivende vers ved avsløring. // verifisert mot NV (nwt_N.pdf)
    thread:"Med Abraham får løftet en familie: gjennom hans ætt skal alle folk velsignes – tråden peker rett mot Jesus.",
    trait:"Trofasthet – han holder løftene sine, ledd for ledd.",
    traad:{ skjedde:"Abraham forlot i tro hjemlandet da Jehova kalte ham, og fikk løftet om at alle folk skal velsignes gjennom hans ætt.", jehova:"At Jehova er trofast og holder løftene sine, ledd for ledd.", valg:"Abraham valgte å adlyde og stole på Jehova, enda han ikke visste hvor han skulle.", videre:"Med Abraham får løftet en familie: gjennom hans ætt skal alle folk velsignes – tråden peker mot Jesus." },
    lesson:"Abraham valgte Jehovas side. Lærdom: Når vi stoler på Jehova og adlyder, blir vi en del av hans store hensikt – løftet som fører fram til Jesus og paradiset."
  },
  {
    id:"sara", name:"Sara", eraDate:"f. ca. 2008 f.v.t.", img:"images/11-sara.webp", imgFocus:"72% 18%", side:"jehova", bolk:2,
    puzzle:true, guessWrong:["Eva","Rakel","Mirjam"],
    arrival:"Tråden tar dere til samme teltleir. En eldre kvinne ler stille for seg selv ved teltdøren – som om hun nettopp har hørt noe nesten for godt til å være sant …",
    greet:"Hei! Jeg er Sara, Abrahams kone. Jeg er gammel nå – men Jehova lovte oss en sønn, og Jehova kan gjøre det umulige!",
    story:[
      "Sara var Abrahams kone og fulgte ham på hele den lange reisen. De ønsket seg så inderlig et barn, men Sara fikk ingen – og årene gikk.",
      "Da Sara var blitt veldig gammel, lovte Jehova at hun skulle få en sønn. Sara lo nesten – kunne det virkelig skje? Men Jehova spurte: «Er noe for vanskelig for Jehova?»",
      "Og akkurat som Jehova hadde lovet, fikk Sara sønnen Isak. Det umulige ble mulig – fordi Jehova alltid holder ord."
    ],
    quiz:[
      { q:"Hva lovte Jehova den gamle Sara?", options:["At hun skulle få en sønn","At hun skulle bli dronning","At hun skulle få mye gull"], correct:0,
        verseAfter:{ t:"Er det noe som er umulig for Jehova? … og da skal Sara ha en sønn.", ref:"1. Mosebok 18:14" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hvorfor kunne Sara stole på løftet?", options:["Fordi hun mente at Jehova er trofast","Fordi hun var sterk","Fordi hun var ung"], correct:0,
        verseAfter:{ t:"Ved tro fikk Sara kraft til å bli gravid … For hun stolte på at Han som hadde gitt løftet, var trofast.", ref:"Hebreerne 11:11" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Ingenting er umulig for ham","Han glemmer gamle mennesker","Han liker ikke når noen ler"], correct:0,
        verseAfter:{ t:"For ikke noe som Gud sier, er umulig for ham.", ref:"Lukas 1:37" } } // prinsippvers (lærdoms-unntak). // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"For Jehova finnes det ingenting som er umulig. Han holdt løftet til Sara selv når det så helt håpløst ut – og slik førte han den røde tråden videre mot Jesus." },
    refs:"1. Mosebok 18:9–14; 21:1–7; Hebreerne 11:11",
    verse:{ t:"Sara ble gravid og fødte Abraham en sønn i hans alderdom til den tiden Gud hadde lovt ham.", ref:"1. Mosebok 21:2" }, // navngivende vers ved avsløring. // verifisert mot NV (nwt_N.pdf)
    thread:"Gjennom den umulige fødselen til Sara førte Jehova løftets ætt videre – ingenting er umulig for ham.",
    trait:"Makt – ingenting er umulig for ham, ikke engang det som virker håpløst.",
    traad:{ skjedde:"Den gamle Sara fikk sønnen Isak, akkurat som Jehova hadde lovt, da det virket umulig.", jehova:"At ingenting er umulig for Jehova, ikke engang det som virker håpløst.", valg:"Sara valgte å stole på at Han som ga løftet, var trofast.", videre:"Gjennom den umulige fødselen førte Jehova løftets ætt videre mot Jesus." },
    lesson:"Sara valgte Jehovas side. Lærdom: Når Jehova lover noe, kan vi stole på det – selv når det ser helt umulig ut."
  },
  {
    id:"melkisedek", name:"Melkisedek", eraDate:"møter Abraham ~1933 f.v.t.", img:"images/12-melkisedek.webp", imgFocus:"72% 15%", side:"jehova", bolk:2,
    puzzle:true, guessWrong:["Noah","Job","Set"],
    arrival:"Tråden fører dere til porten i en by som heter Salem – «Fredens by». En verdig gammel konge i fine klær kommer ut for å møte noen, med brød og noe å drikke i hendene …",
    greet:"Vær hilset! Jeg er Melkisedek, konge i Salem og prest for Den Høyeste Gud. Jeg kom for å velsigne Abraham etter en stor dag.",
    story:[
      "Melkisedek var noe helt spesielt: han var BÅDE konge OG prest for Den Høyeste Gud – Jehova. Han styrte byen Salem, et navn som betyr «fred».",
      "En dag kom Abraham forbi etter å ha reddet slektningen sin Lot. Melkisedek gikk ut med brød og vin og velsignet Abraham: «Velsignet være Abraham av Den Høyeste Gud!»",
      "Abraham ga Melkisedek en tiendedel av alt. Lenge etterpå viser Bibelen at Melkisedek var et bilde på Jesus – som også skal være både Konge og Prest, for alltid."
    ],
    quiz:[
      { q:"Hva var Melkisedek?", options:["Både konge og prest for Den Høyeste Gud","Bare en vanlig kjøpmann","En soldat"], correct:0,
        verseAfter:{ t:"Så velsignet han ham og sa: «Velsignet være Abram av Den Høyeste Gud …»", ref:"1. Mosebok 14:19" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva gjorde Abraham for Melkisedek?", options:["Ga ham en tiendedel av alt","Tok byen hans","Ba ham om penger"], correct:0,
        verseAfter:{ t:"Og Abram ga ham en tiendedel av alt.", ref:"1. Mosebok 14:20" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han forbereder alt i sin hensikt – fram mot Jesus","At han liker store byer","At han ikke trenger noen"], correct:0,
        verseAfter:{ t:"Du er prest for evig på samme måte som Melkisedek!", ref:"Salme 110:4" } } // peker mot Jesus. // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova lot Melkisedek være et lite forhåndsbilde på Jesus – en konge og prest som bringer fred. Slik peker hele Bibelen, ledd for ledd, fram mot Jesus." },
    refs:"1. Mosebok 14:18–20; Salme 110:4; Hebreerne 7:1–3",
    verse:{ t:"Og Melkisedek, kongen i Salem, kom ut med brød og vin. Han var prest for Den Høyeste Gud.", ref:"1. Mosebok 14:18" }, // navngivende vers ved avsløring. // verifisert mot NV (nwt_N.pdf)
    thread:"Melkisedek var konge og prest på én gang – et forbilde på Jesus, som løftet peker fram mot.",
    trait:"Godhet – han velsigner og løfter fram dem som ærer ham.",
    traad:{ skjedde:"Melkisedek, konge og prest for Den Høyeste, kom ut med brød og vin og velsignet Abraham.", jehova:"At Jehova velsigner og løfter fram dem som ærer ham.", valg:"", videre:"Konge og prest på én gang – et forbilde på Jesus, som løftet peker fram mot." },
    lesson:"Melkisedek valgte Jehovas side. Lærdom: Jehova forbereder alt i sin hensikt – Melkisedek var et bilde på Jesus, vår Konge og Prest."
  },
  {
    id:"lot", name:"Lot", eraDate:"ca. 1919 f.v.t.", img:"images/13-lot.webp", imgFocus:"72% 16%", side:"jehova", bolk:2,
    puzzle:true, guessWrong:["Noah","Job","Jonas"],
    arrival:"Tråden tar dere til en by der mange mennesker gjør stygge ting. Midt iblant dem bor en mann som prøver å leve rett – og snart må han skynde seg ut …",
    greet:"Jeg heter Lot, Abrahams nevø. Det var tungt å bo i Sodoma blant alt det vonde – men jeg ville holde meg til det Jehova liker.",
    story:[
      "Lot var Abrahams nevø. Han kom til å bo i byen Sodoma, der folk gjorde mye vondt. Det plaget Lot dag etter dag – men han ga ikke etter; han ville leve slik Jehova liker.",
      "Til slutt skulle Jehova rydde opp i de onde byene. Han sendte engler for å hjelpe Lot og familien hans ut: «Skynd dere, og ikke se dere tilbake!»",
      "Lot adlød og kom seg trygt unna i tide. Jehova husket den rettferdige Lot og berget ham – fordi Lot hadde holdt seg ren."
    ],
    quiz:[
      { q:"Hvordan hadde Lot det i Sodoma?", options:["Det vonde rundt ham plaget ham hver dag","Han syntes det var helt fint","Han gjorde det samme som de andre"], correct:0,
        verseAfter:{ t:"… denne rettferdige mannen ble dag etter dag pint i sin rettferdige sjel på grunn av de onde gjerningene …", ref:"2. Peter 2:8" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva gjorde Jehova for Lot?", options:["Han førte ham trygt ut før byen ble ødelagt","Han glemte ham","Han lot ham bli igjen"], correct:0,
        verseAfter:{ t:"Da Gud ødela byene i distriktet, tenkte han … på det han hadde lovt Abraham, og sendte Lot bort …", ref:"1. Mosebok 19:29" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han vet å redde dem som er trofaste mot ham","Han bryr seg ikke om hvem som er god","Han redder bare de rike"], correct:0,
        verseAfter:{ t:"Jehova vet … hvordan han skal redde gudhengivne mennesker ut av prøvelser.", ref:"2. Peter 2:9" } } // prinsippvers (lærdoms-unntak). // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova ser dem som prøver å leve rett selv når alle andre gjør det vonde – og han vet hvordan han skal redde dem ut av vanskeligheter." },
    refs:"1. Mosebok 19:1–29; 2. Peter 2:7–9",
    verse:{ t:"… han reddet den rettferdige Lot, som var svært plaget av den skamløse oppførselen til de onde menneskene.", ref:"2. Peter 2:7" }, // navngivende vers ved avsløring. // verifisert mot NV (nwt_N.pdf)
    thread:"Jehova reddet den rettferdige Lot – han verner alltid dem som holder seg på hans side mens hensikten går videre.",
    trait:"Rettferdighet – han skiller de gode ut og redder dem.",
    traad:{ skjedde:"Lot holdt seg ren midt i det onde Sodoma og ble reddet ut før byen ble ødelagt.", jehova:"At Jehova ser de rettferdige og vet hvordan han redder dem ut.", valg:"Lot valgte å holde seg ren og plaget seg over ondskapen rundt ham.", videre:"Jehova reddet den rettferdige Lot – han verner dem som holder seg på hans side." },
    lesson:"Lot valgte Jehovas side. Lærdom: Vi kan holde oss rene og trofaste selv når alle rundt oss gjør det vonde – og Jehova redder dem som gjør det."
  },
  {
    id:"lotskone", name:"Lots kone", eraDate:"ca. 1919 f.v.t.", img:"images/14-lots-kone.webp", imgFocus:"60% 20%", side:"slange", bolk:2,
    puzzle:true, guessWrong:["Sara","Rebekka","Eva"],
    arrival:"Tråden tar dere tilbake til natten da Sodoma skulle ødelegges. En familie skynder seg ut av byen – men én av dem klarer ikke å slippe taket i alt de forlater …",
    greet:"Jeg var Lots kone. Jeg var nesten trygt ute av Sodoma … men hjertet mitt ville ikke slippe alt jeg lot bak meg.",
    story:[
      "Lots kone fikk være med ut av Sodoma sammen med mannen og døtrene sine. Englene sa det tydelig: «Ikke se dere tilbake!»",
      "Men hjertet hennes var fremdeles i byen, hos alt hun eide. Hun stoppet og så seg tilbake – og kom aldri i sikkerhet. Senere sa Jesus: «Husk Lots kone.»"
    ],
    quiz:[
      { q:"Hva gjorde Lots kone galt?", options:["Hun så seg tilbake mot byen i stedet for å adlyde","Hun gikk for fort","Hun hjalp for mange"], correct:0,
        verseAfter:{ t:"Tenk på Lots kone.", ref:"Lukas 17:32" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han vil at hjertet vårt skal være helt med ham","At det holder å være nesten lydig","At han liker gamle byer"], correct:0,
        verseAfter:{ t:"Ingen som har lagt hånden på en plog og ser seg tilbake, er kvalifisert for Guds rike.", ref:"Lukas 9:62" } } // prinsippvers (lærdoms-unntak). // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova vil at vi skal stole helt på ham og ikke henge fast i det gamle. Han hadde reddet henne – men hjertet hennes ble igjen i Sodoma." },
    refs:"1. Mosebok 19:15–26; Lukas 17:28–32",
    verse:{ t:"Men Lots kone, som var bak ham, så seg tilbake, og hun ble til en saltstøtte.", ref:"1. Mosebok 19:26" }, // navngivende vers ved avsløring. // verifisert mot NV (nwt_N.pdf)
    thread:"Lots kone så seg tilbake mot Sodoma – en påminnelse om å holde blikket framover på Jehovas løfte.",
    trait:"Barmhjertighet – han advarer oss så vi kan velge livet.",
    traad:{ skjedde:"Lots kone ble reddet ut av Sodoma, men så seg tilbake og ble til en saltstøtte.", jehova:"At Jehova vil at vi skal stole helt på ham og ikke henge fast i det gamle.", valg:"Hjertet hennes ble igjen i Sodoma – hun valgte det gamle framfor redningen.", videre:"En påminnelse om å holde blikket framover, på Jehovas løfte." },
    lesson:"Lots kone valgte slangens side. Lærdom: Det hjelper ikke å komme nesten helt fram – vi må følge Jehova av hele hjertet og ikke se oss tilbake."
  },
  {
    id:"isak", name:"Isak", eraDate:"f. 1918 f.v.t.", img:"images/15-isak.webp", imgFocus:"72% 16%", side:"jehova", bolk:2,
    puzzle:true, guessWrong:["Josef","Samuel","David"],
    arrival:"Tråden fører dere til Abrahams leir igjen, noen år senere. En ung mann går rolig og lydig ved siden av faren sin opp en fjellsti – han stoler helt på faren og på Jehova …",
    greet:"Hei! Jeg er Isak, sønn av Abraham og Sara – sønnen Jehova lovte. Jeg vil følge Jehova slik faren min gjorde.",
    story:[
      "Isak var løftets sønn – den Jehova hadde lovet Abraham og Sara. En dag ba Jehova Abraham om noe svært vanskelig, for å prøve troen hans.",
      "Isak var en ung, sterk mann, men han satte seg ikke imot. Han lot faren binde ham og legge ham på alteret – han stolte på Jehova. I siste øyeblikk stoppet Jehova det hele og skaffet et offer i stedet.",
      "Senere gjentok Jehova LØFTET til Isak: gjennom ætten hans skulle alle folk på jorden bli velsignet. Slik gikk den røde tråden videre, fra Abraham til Isak – mot Jesus."
    ],
    quiz:[
      { q:"Hvordan reagerte Isak da han skulle bindes?", options:["Han satte seg ikke imot, men stolte på Jehova","Han løp sin vei","Han ble sint på faren"], correct:0,
        verseAfter:{ t:"… Han bandt sin sønn Isak på hender og føtter og la ham på alteret oppå veden.", ref:"1. Mosebok 22:9" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hvilket løfte gjentok Jehova til Isak?", options:["At alle folk på jorden skulle bli velsignet gjennom ætten hans","At han skulle bli den sterkeste","At han aldri skulle bli gammel"], correct:0,
        verseAfter:{ t:"… og gjennom ditt avkom skal alle jordens nasjoner oppnå en velsignelse.", ref:"1. Mosebok 26:4" } }, // LØFTET gjentatt – MÅ BEKREFTES mot jw.org
      { q:"Hva lærer vi om Jehova?", options:["Han fører løftet sitt trygt videre, slekt etter slekt","At han ombestemmer seg ofte","At han bare bryr seg om de voksne"], correct:0,
        verseAfter:{ t:"Ved tro var det også at Isak velsignet Jakob og Esau med tanke på det som skulle komme.", ref:"Hebreerne 11:20" } } // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova fører hensikten sin videre, ledd for ledd. Isaks ydmyke tillit minner om Jesus, som villig ga seg selv – og løftet om velsignelse gikk videre mot ham." },
    refs:"1. Mosebok 21:1–3; 22:1–14; 26:3–4; Hebreerne 11:20",
    verse:{ t:"Abraham ga sin nyfødte sønn, som Sara hadde født ham, navnet Isak.", ref:"1. Mosebok 21:3" }, // navngivende vers ved avsløring. // verifisert mot NV (nwt_N.pdf)
    thread:"Til Isak gjentok Jehova løftet – ætten mot Jesus føres videre, ledd for ledd.",
    trait:"Trofasthet – han gjentar og holder løftet sitt, slekt etter slekt.",
    traad:{ skjedde:"Isak lot seg villig binde på alteret, og Jehova gjentok løftet til ham.", jehova:"At Jehova er trofast og gjentar og holder løftet sitt, slekt etter slekt.", valg:"Isak valgte ydmyk tillit og lot seg villig binde.", videre:"Løftet om velsignelse føres videre gjennom Isak, ledd for ledd mot Jesus." },
    lesson:"Isak valgte Jehovas side. Lærdom: Ydmyk tillit til Jehova fører løftet videre – helt fram mot Jesus og paradiset."
  },
  {
    id:"rebekka", name:"Rebekka", eraDate:"gift 1878 f.v.t.", img:"images/16-rebekka.webp", imgFocus:"65% 18%", side:"jehova", bolk:2,
    puzzle:true, guessWrong:["Sara","Rakel","Mirjam"],
    arrival:"Tråden tar dere til en brønn i skumringen. En vennlig ung kvinne kommer for å hente vann – og tilbyr seg straks å gi vann til ti tørste kameler også …",
    greet:"Hei! Jeg heter Rebekka. En mann ba om litt vann, og jeg ville gjerne hjelpe. Nå skal jeg gifte meg med Isak – og jeg sa: «Ja, jeg vil dra!»",
    story:[
      "Abraham ville at sønnen Isak skulle få en kone som elsket Jehova. Han sendte tjeneren sin langt av sted for å lete, og tjeneren ba Jehova om hjelp til å finne den rette.",
      "Ved en brønn møtte han Rebekka. Hun var både vennlig og arbeidsom – hun ga ham vann og tilbød seg å gi vann til alle kamelene også. Det var akkurat det tegnet tjeneren hadde bedt Jehova om!",
      "Da de spurte om Rebekka ville reise langt av sted for å gifte seg med Isak, var hun modig og sa: «Ja, jeg vil dra.» Slik ble hun en del av løftets familie."
    ],
    quiz:[
      { q:"Hva viste at Rebekka hadde et godt hjerte?", options:["Hun ga vann både til mannen og til alle kamelene","Hun ville ha betalt","Hun gjemte seg"], correct:0,
        verseAfter:{ t:"Jeg skal også dra opp vann til kamelene dine, helt til de har drukket ferdig.", ref:"1. Mosebok 24:19" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva svarte Rebekka da hun ble spurt om å reise?", options:["«Ja, jeg vil dra»","«Nei, jeg blir hjemme»","«Spør meg senere»"], correct:0,
        verseAfter:{ t:"«Vil du dra med denne mannen?» Hun svarte: «Ja, det vil jeg.»", ref:"1. Mosebok 24:58" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han leder dem som vil følge ham","At han bare hjelper de rike","At han ikke hører bønner"], correct:0,
        verseAfter:{ t:"Tenk på ham på alle dine veier, så skal han gjøre dine stier jevne.", ref:"Ordspråkene 3:6" } } // prinsippvers (lærdoms-unntak). // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova hører bønner og leder dem som vil tjene ham. Rebekkas vennlighet og mot gjorde henne til en viktig del av løftets familie – tråden mot Jesus." },
    refs:"1. Mosebok 24:15–20, 58, 67",
    verse:{ t:"… kom Rebekka ut med vannkrukken sin på skulderen.", ref:"1. Mosebok 24:15" }, // navngivende vers ved avsløring. // verifisert mot NV (nwt_N.pdf)
    thread:"Rebekka sa modig «jeg vil gå» – og ble mor i slekten som bærer løftet videre.",
    trait:"Omsorg – han leder dem som søker ham.",
    traad:{ skjedde:"Rebekka viste gjestfrihet ved brønnen og sa modig «jeg vil gå» for å bli Isaks kone.", jehova:"At Jehova hører bønner og leder dem som vil tjene ham.", valg:"Rebekka valgte mot og vilje: «Ja, det vil jeg» – hun ville gå.", videre:"Ble mor i slekten som bærer løftet videre mot Jesus." },
    lesson:"Rebekka valgte Jehovas side. Lærdom: Vennlighet og mot til å si «ja» til Jehova gjør oss til en del av hans hensikt."
  },
  {
    id:"jakob", name:"Jakob", eraDate:"f. ca. 1858 f.v.t.", img:"images/17-jakob.webp", imgFocus:"60% 22%", side:"jehova", bolk:2,
    puzzle:true, guessWrong:["Esau","Josef","Samuel"],
    arrival:"Tråden tar dere til en ensom fjellsti om natten. En ung mann sover med en stein som pute – og drømmer en helt spesiell drøm om en trapp som når helt opp til himmelen …",
    greet:"Hei! Jeg heter Jakob, sønn av Isak og Rebekka. Jeg setter de hellige tingene fra Jehova høyt – og i natt snakket Jehova selv til meg!",
    story:[
      "Jakob var sønnesønn av Abraham. I motsetning til broren sin, som ikke brydde seg, satte Jakob de hellige tingene fra Jehova høyt – velsignelsen og løftet betydde alt for ham.",
      "En natt, da Jakob var alene på reise, drømte han om en trapp som nådde fra jorden helt opp til himmelen, med Guds engler på. Øverst sto Jehova selv.",
      "Jehova gjentok LØFTET til Jakob: gjennom ham og ætten hans skulle alle slekter på jorden bli velsignet. «Jeg er med deg og skal passe på deg overalt,» sa Jehova. Slik gikk den røde tråden videre, fra Isak til Jakob – mot Jesus."
    ],
    quiz:[
      { q:"Hva drømte Jakob om i Betel?", options:["En trapp som nådde fra jorden helt opp til himmelen","En stor storm","Et skip på havet"], correct:0,
        verseAfter:{ t:"I en drøm så han en trapp som førte fra jorden og helt opp til himmelen, og Guds engler gikk opp og ned på den.", ref:"1. Mosebok 28:12" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hvilket løfte gjentok Jehova til Jakob?", options:["At alle slekter på jorden skulle bli velsignet gjennom ætten hans","At han skulle bli rik på gull","At han aldri skulle reise mer"], correct:0,
        verseAfter:{ t:"… og gjennom deg og gjennom ditt avkom skal alle jordens slekter bli velsignet.", ref:"1. Mosebok 28:14" } }, // LØFTET gjentatt ved Betel – MÅ BEKREFTES mot jw.org
      { q:"Hva lærer vi om Jehova?", options:["Han er med tjenerne sine overalt hvor de går","At han bare er på ett sted","At han glemmer løftene sine"], correct:0,
        verseAfter:{ t:"Jeg er med deg, og jeg vil beskytte deg overalt hvor du går …", ref:"1. Mosebok 28:15" } } // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova legger merke til dem som setter de hellige tingene høyt. Han var med Jakob overalt og førte løftet videre gjennom ham – ett ledd til på veien mot Jesus og paradiset." },
    refs:"1. Mosebok 28:10–15; Hebreerne 11:21",
    verse:{ t:"Da våknet Jakob av søvnen og sa: «Jehova er på dette stedet, og jeg visste det ikke.»", ref:"1. Mosebok 28:16" }, // navngivende vers ved avsløring. // verifisert mot NV (nwt_N.pdf)
    thread:"Ved Betel gjentok Jehova løftet til Jakob – gjennom hans tolv sønner vokser folket som fører tråden mot Jesus.",
    trait:"Trofasthet – han fører løftet videre og svikter aldri.",
    traad:{ skjedde:"Jakob verdsatte de hellige tingene, og ved Betel gjentok Jehova løftet til ham i en drøm.", jehova:"At Jehova er med sine overalt og fører løftet videre, uten å svikte.", valg:"Jakob satte de hellige tingene høyt og tok imot løftet.", videre:"Gjennom hans tolv sønner vokser folket som fører tråden mot Jesus." },
    lesson:"Jakob valgte Jehovas side. Lærdom: Når vi setter Jehovas ting høyt, blir vi en del av løftet – tråden som fører fram til Jesus og paradiset."
  },
  /* ===== BOLK 3 – Ned til Egypt → Job (kart 3). Låst ramme; fylles ett kort av gangen. ===== */
  {
    id:"jakobs12", name:"Jakobs 12 sønner", eraDate:"ca. 1770 f.v.t.", img:"images/18-jakobs-12-sonner.webp", imgFocus:"50% 38%", side:"fakta", noSide:true, bolk:3,
    puzzle:true, guessWrong:["Jesu 12 apostler","Noahs familie","Israels dommere"],
    arrival:"Tråden tar dere til en stor teltleir. En gammel far står midt blant en hel flokk voksne sønner – så mange at det nesten ser ut som begynnelsen på et helt folk …",
    greet:"Vi er sønnene til Jakob – tolv brødre! Faren vår blir også kalt Israel, og fra oss skal det vokse fram et helt folk.",
    story:[
      "Jakob – som Jehova også ga navnet Israel – fikk tolv sønner: Ruben, Simeon, Levi, Juda, Dan, Naftali, Gad, Asjer, Jissakar, Sebulon, Josef og Benjamin.",
      "Fra disse tolv brødrene vokste det fram Israels tolv stammer – et helt folk som Jehova gjorde til sitt. Det som begynte som én familie, ble til en hel nasjon, akkurat som Jehova hadde lovet Abraham.",
      "Og midt i denne flokken gikk den røde tråden videre: gjennom én av sønnene, Juda, skulle løftet føres helt fram til Jesus."
    ],
    quiz:[
      { q:"Hva ble Jakobs tolv sønner til?", options:["Israels tolv stammer – et helt folk","Tolv konger i hvert sitt land","Tolv egyptiske prester"], correct:0,
        hint:"Tenk på folket Jehova bygde av én familie – Israel ble delt inn i stammer, én for hver sønn.",
        verseAfter:{ t:"Fra disse kommer Israels tolv stammer …", ref:"1. Mosebok 49:28" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Gjennom hvilken av de tolv stammene skulle den lovede kongen (Jesus) komme?", options:["Juda-stammen","Levi-stammen","Ruben-stammen"], correct:0,
        hint:"Kongelinjen mot Jesus gikk gjennom én bestemt stamme – dere møter ham like etter dette." }
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova holdt løftet sitt til Abraham og bygde et helt folk av én familie. Steg for steg førte han den røde tråden videre – gjennom Juda-stammen helt fram mot Jesus." },
    refs:"1. Mosebok 35:22–26; 49:28",
    verse:{ t:"Jakob hadde tolv sønner.", ref:"1. Mosebok 35:22" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    thread:"Jakobs tolv sønner ble Israels tolv stammer – grunnmuren i folket løftet føres videre gjennom, helt til Jesus.",
    trait:"Trofasthet – han bygde et helt folk av én familie, akkurat som lovet.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Visste du? Jakobs tolv sønner ble til Israels tolv stammer – grunnmuren i hele folket Jehova valgte. Og gjennom Juda-stammen kom til slutt Jesus."
  },
  {
    id:"levi", name:"Levi", eraDate:"f. ca. 1772 f.v.t.", img:"images/33-levi.webp", imgFocus:"55% 20%", side:"jehova", bolk:3,
    puzzle:true, guessWrong:["Ruben","Simeon","Juda"],
    arrival:"Tråden tar dere tilbake til Jakobs store teltleir. Her bor en av de tolv brødrene – og slekten hans fikk en helt spesiell oppgave …",
    greet:"Hei! Jeg heter Levi, en av Jakobs tolv sønner. Senere ble slekten min satt til side for en helt spesiell tjeneste for Jehova.",
    story:[
      "Levi var en av Jakobs tolv sønner. Bibelen forteller ikke så mye om Levi selv – men slekten hans, levittene, fikk en helt spesiell oppgave fra Jehova.",
      "Jehova satte Levi-stammen til side for hellig tjeneste. Levittene og prestene tok vare på tilbedelsen av Jehova, på telthelligdommen og på Loven, og hjalp folket å forstå hva Jehova ønsket.",
      "Slik hjalp de hele Israel å holde seg trofaste mot Jehova. Det vernet folket og veien videre – helt fram mot Messias, Jesus, som senere kom som den store Øverstepresten."
    ],
    quiz:[
      { q:"Hvem var Levi?", options:["En av Jakobs tolv sønner","En egyptisk prest","En konge i Kanaan"], correct:0 },
      { q:"Hvilken spesiell oppgave fikk Levi-slekten?", options:["Å være satt til side for hellig tjeneste for Jehova","Å være soldater","Å bygge store byer"], correct:0,
        verseAfter:{ t:"Før fram Levis stamme, og still dem foran presten Aron. De skal gjøre tjeneste for ham.", ref:"4. Mosebok 3:6" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva passet levittene og prestene på?", options:["Tilbedelsen, telthelligdommen og Loven","Faraos skatter","Byportene"], correct:0,
        verseAfter:{ t:"På den tiden skilte Jehova ut Levis stamme til å bære Jehovas paktsark, til å stå framfor Jehova for å gjøre tjeneste for ham …", ref:"5. Mosebok 10:8" } } // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova sørger for at folket hans får hjelp til å holde seg nær ham. Han ordnet det slik at noen tok vare på tilbedelsen og Loven – og førte hensikten sin trygt videre mot Messias." },
    refs:"1. Mosebok 29:34; 4. Mosebok 3:6–8; 5. Mosebok 10:8",
    verse:{ t:"Denne gangen kommer mannen min til å bli knyttet til meg … Han fikk derfor navnet Levi.", ref:"1. Mosebok 29:34" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvilken side ble Levi-slekten satt til side for å tjene?",
    thread:"Levi-slekten ble satt til side som prester – de vernet tilbedelsen og veien mot Messias.",
    trait:"Omsorg – han sørger for hjelp så folket kan holde seg nær ham.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Levi var på Jehovas side. Lærdom: Jehova sørger alltid for at folket hans får hjelp til å holde seg trofaste – og fører hensikten sin trygt videre mot Jesus."
  },
  {
    id:"juda", name:"Juda", eraDate:"f. ca. 1770 f.v.t.", img:"images/19-juda.webp", imgFocus:"60% 18%", side:"jehova", bolk:3,
    puzzle:true, guessWrong:["Ruben","Levi","Josef"],
    arrival:"Tråden tar dere til brødreflokken i Egypt. En av brødrene trer fram foran den mektige styreren og tilbyr seg selv i stedet for den yngste broren – modig og helhjertet …",
    greet:"Jeg heter Juda, en av Jakobs sønner. Jeg lærte at det viktigste ikke er å tenke på seg selv – og gjennom slekten min skal noe stort komme.",
    story:[
      "Juda var den fjerde av Jakobs tolv sønner. Som ung var han med på å gjøre galt mot broren Josef. Men senere viste han et helt annet hjerte.",
      "Da den yngste broren, Benjamin, sto i fare for å bli holdt igjen i Egypt, gikk Juda modig fram og tilbød seg selv som slave i stedet – for å spare faren for sorg. Det viste mot, ansvar og kjærlighet.",
      "Jehova valgte nettopp Juda sin slekt til noe helt spesielt: kongelinjen. Jakob lovte at «septeret ikke skal vike fra Juda» før den lovede kongen kommer. Gjennom Juda-stammen kom kong David – og til slutt Jesus, den evige Kongen."
    ],
    quiz:[
      { q:"Hva gjorde Juda da Benjamin var i fare?", options:["Han tilbød seg selv som slave i stedet","Han rømte sin vei","Han anklaget brødrene"], correct:0,
        verseAfter:{ t:"La meg bli igjen som slave for min herre i stedet for gutten, så gutten kan dra tilbake sammen med brødrene sine.", ref:"1. Mosebok 44:33" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva var spesielt med slekten til Juda?", options:["Kongelinjen – Messias skulle komme fra den","De ble de rikeste","De ble egyptiske prester"], correct:0,
        verseAfter:{ t:"Septeret skal ikke vike fra Juda … før Sjilo kommer, og ham skal folkene adlyde.", ref:"1. Mosebok 49:10" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han fører løftet sitt videre gjennom dem han velger","Han bryr seg ikke om slekt","Han velger bare de feilfrie"], correct:0,
        verseAfter:{ t:"Juda, dine brødre kommer til å lovprise deg. … Din fars sønner skal bøye seg ned for deg.", ref:"1. Mosebok 49:8" } } // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova kan forandre et hjerte og bruke ufullkomne mennesker i sin hensikt. Han valgte Juda-stammen til kongelinjen – tråden som førte helt fram til Jesus, den evige Kongen." },
    refs:"1. Mosebok 29:35; 44:18–34; 49:8–10",
    verse:{ t:"Denne gangen skal jeg lovprise Jehova. Derfor ga hun ham navnet Juda.", ref:"1. Mosebok 29:35" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem sin side endte Juda på?",
    thread:"Fra Juda-stammen skulle kongelinjen komme – tråden går herfra til kong David og til slutt Jesus.",
    trait:"Nåde – han kan forandre et hjerte og bruke ufullkomne mennesker.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Juda valgte Jehovas side. Lærdom: Jehova kan forandre hjertet vårt og bruke oss i sin store hensikt – fra Juda-stammen kom kong David og til slutt Jesus."
  },
  {
    id:"josef", name:"Josef", eraDate:"f. 1767 f.v.t.", img:"images/20-josef.webp", imgFocus:"60% 16%", side:"jehova", bolk:3,
    puzzle:true, guessWrong:["Daniel","David","Benjamin"],
    arrival:"Tråden tar dere til Egypt, til et hus med en mektig styrer. En ung mann i utenlandske klær styrer alt med klokskap – men dere aner at han har vært gjennom mye vondt for å komme hit …",
    greet:"Hei! Jeg heter Josef. Brødrene mine solgte meg som slave til Egypt – men Jehova var med meg hele veien, og nå kan jeg redde mange fra sult.",
    story:[
      "Josef var en av Jakobs tolv sønner, og faren var ekstra glad i ham. Men brødrene ble misunnelige og gjorde noe forferdelig: de solgte ham som slave til Egypt. Likevel ga ikke Josef opp – for Jehova var med ham.",
      "I Egypt holdt Josef seg trofast mot Jehova, selv når han ble fristet til å gjøre galt og til og med ble kastet i fengsel for noe han ikke hadde gjort. Jehova velsignet alt han gjorde, og til slutt gjorde farao ham til den nest mektigste mannen i hele landet.",
      "Da det ble hungersnød, kom brødrene til Egypt for å kjøpe mat – uten å vite at det var Josef de sto foran. Josef tilga dem og sa at det var Gud som hadde sendt ham i forveien for å redde liv. Slik vernet Jehova hele familien – ætten som Jesus skulle komme fra."
    ],
    quiz:[
      { q:"Hva gjorde Josef da han ble fristet til å gjøre galt i Egypt?", options:["Han nektet – han ville ikke synde mot Gud","Han gjorde som alle andre","Han rømte hjem til faren"], correct:0,
        verseAfter:{ t:"Hvordan skulle jeg da kunne gjøre noe så ondt og … synde mot Gud?", ref:"1. Mosebok 39:9" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hvorfor gikk det likevel godt med Josef i Egypt?", options:["Jehova var med ham","Han var sterkest","Han var bare heldig"], correct:0,
        verseAfter:{ t:"Men Jehova var med Josef. Han ble derfor framgangsrik …", ref:"1. Mosebok 39:2" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva sa Josef da han møtte brødrene som hadde sveket ham?", options:["At Gud hadde sendt ham i forveien for å redde liv","At han aldri ville tilgi dem","At de måtte straffes"], correct:0,
        verseAfter:{ t:"Gud har nemlig sendt meg i forveien for å redde liv.", ref:"1. Mosebok 45:5" } } // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova er med dem som holder seg trofaste, selv når andre er onde mot dem. Han kan vende det vonde til noe godt – og slik vernet han ætten som Jesus skulle komme fra." },
    refs:"1. Mosebok 37; 39; 45:4–8; 50:20",
    verse:{ t:"Jeg er Josef, broren deres, som dere solgte til Egypt.", ref:"1. Mosebok 45:4" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem holdt Josef seg trofast mot?",
    thread:"Jehova brukte Josef til å berge hele familien i Egypt – og bevarte ætten som bærer løftet.",
    trait:"Omsorg – han er med sine også i det vonde, og snur det til noe godt.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Josef valgte Jehovas side. Lærdom: Når vi holder oss trofaste mot Jehova selv i vanskelige tider, er han med oss – og kan bruke oss i sin store hensikt."
  },
  {
    id:"potifarskone", name:"Potifars kone", eraDate:"ca. 1750 f.v.t.", img:"images/21-potifars-kone.webp", imgFocus:"55% 22%", side:"slange", bolk:3,
    puzzle:true, guessWrong:["Sara","Rebekka","Mirjam"],
    arrival:"Tråden tar dere til et fornemt hus i Egypt. En kvinne med makt og fine klær prøver å få den unge tjeneren Josef til å gjøre noe galt – men han vil ikke …",
    greet:"Jeg var kona til Potifar, en mektig mann i Egypt. Jeg ville at Josef skulle gjøre noe som var galt – men han nektet og løp sin vei.",
    story:[
      "Josef arbeidet i huset til den egyptiske herren Potifar. Kona til Potifar ville få Josef til å gjøre noe som var galt mot Jehova og mot sin herre. Igjen og igjen forsøkte hun.",
      "Men Josef sa nei hver gang. Til slutt grep hun tak i kappen hans – men Josef slapp kappen og flyktet ut. Han ville heller miste alt enn å synde mot Jehova."
    ],
    quiz:[
      { q:"Hva gjorde Josef da Potifars kone ville få ham til å gjøre galt?", options:["Han nektet og flyktet","Han ble med på det","Han ble sint og slo henne"], correct:0,
        verseAfter:{ t:"… han lot kappen bli igjen i hånden hennes og flyktet ut.", ref:"1. Mosebok 39:12" } } // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova ser når noen prøver å lokke oss til å gjøre galt. Han er glad i dem som – som Josef – sier nei og flykter fra det gale, uansett hva det koster." },
    refs:"1. Mosebok 39:7–12",
    verse:{ t:"Etter dette begynte hans herres kone å kaste lengselsfulle blikk etter Josef …", ref:"1. Mosebok 39:7" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvilken side var Potifars kone på?",
    thread:"Josef flyktet fra det gale hos Potifars kone, og Jehova vernet ham så tråden kunne gå videre.",
    trait:"Vern – han hjelper dem som vil gjøre rett, til å stå imot.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Potifars kone var på slangens side. Lærdom: Det er aldri verdt å lokke andre – eller la oss selv lokkes – til å gjøre det Jehova hater."
  },
  {
    id:"job", name:"Job", eraDate:"før 1613 f.v.t.", img:"images/22-job.webp", imgFocus:"60% 20%", side:"jehova", bolk:3,
    puzzle:true, guessWrong:["Noah","Abraham","Daniel"],
    arrival:"Tråden tar dere til landet Us. En god og rik mann har plutselig mistet ALT – buskap, barn og helse – og sitter i dyp sorg. Men han holder fast ved noe ingen kan ta fra ham …",
    greet:"Jeg heter Job. Jeg mistet nesten alt jeg eide – men jeg ville aldri vende Jehova ryggen. Han er verdt å være trofast mot.",
    story:[
      "Job var en rettferdig mann som elsket Jehova. Satan – slangen – påsto at Job bare tjente Jehova fordi han hadde det godt. Derfor lot Jehova Satan sette Job på prøve.",
      "På kort tid mistet Job buskapen, barna og helsen sin. Det gjorde forferdelig vondt. Både kona og vennene hans mente han burde gi opp – men Job nektet å vende Jehova ryggen.",
      "Job holdt lojaliteten gjennom hele den tunge prøven. Slik beviste han at Satan tok feil: et menneske KAN elske Jehova av hele sitt hjerte, også når alt er vondt. Til slutt velsignet Jehova Job rikere enn før."
    ],
    quiz:[
      { q:"Hva gjorde Job da han mistet alt?", options:["Han syndet ikke og vendte ikke Jehova ryggen","Han ga opp med en gang","Han ble sint på Jehova"], correct:0,
        verseAfter:{ t:"Gjennom alt dette syndet ikke Job, og han anklaget ikke Gud for å ha gjort noe galt.", ref:"Job 1:22" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hvor bestemt var Job på å være trofast?", options:["Helt til han døde ville han bevare sin integritet","Bare så lenge han var rik","Bare når det var lett"], correct:0,
        verseAfter:{ t:"Helt til jeg dør, skal jeg bevare min integritet!", ref:"Job 27:5" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han belønner dem som holder ut i lojalitet","Han glemmer dem som lider","Han liker bare de rike"], correct:0,
        verseAfter:{ t:"Jehova velsignet den siste delen av Jobs liv mer enn den første …", ref:"Job 42:12" } } // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova legger merke til dem som holder ut i trofasthet, selv i den hardeste prøven. Job beviste at Satan tok feil – og Jehova glemte aldri sin lojale venn." },
    refs:"Job 1; 2; 27:5; 42:10–17",
    verse:{ t:"I landet Us bodde det en mann som het Job. Han var en rettferdig mann, en mann med integritet.", ref:"Job 1:1" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem holdt Job seg trofast mot?",
    thread:"Jobs troskap under den hardeste prøven viser at mennesker kan holde fast ved Jehova – akkurat det slangen sa var umulig.",
    trait:"Rettferdighet – han ser lojaliteten vår og belønner den til slutt.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Job valgte Jehovas side. Lærdom: Selv i den hardeste prøven kan vi holde fast ved Jehova – og bevise at slangen tar feil. Jehova glemmer aldri sine lojale."
  },
  /* ===== BOLK 4 – Ut av Egypt → befrielsen (kart 4). Låst ramme; fylles ett kort av gangen. ===== */
  {
    id:"sjifrapua", name:"Sjifra og Pua", eraDate:"ca. 1600 f.v.t.", img:"images/23-sjifra-pua.webp", imgFocus:"50% 30%", side:"jehova", bolk:4,
    puzzle:true, guessWrong:["Mirjam og Jokebed","Rakel og Lea","To egyptiske prinsesser"],
    arrival:"Tråden tar dere til Egypt, der folket er blitt slaver. To modige kvinner snakker lavt sammen – de har fått en grusom ordre, men de tør å si nei …",
    greet:"Vi heter Sjifra og Pua. Vi er jordmødre og hjelper babyer til verden. Farao ga oss en fæl befaling – men vi fryktet Jehova mer enn farao.",
    story:[
      "Israelittene var blitt mange i Egypt, og farao ble redd for dem. Han befalte jordmødrene Sjifra og Pua å skade de nyfødte guttebarna.",
      "Men Sjifra og Pua fryktet Jehova mer enn de fryktet farao. De nektet å følge den grusomme ordren, og lot guttene leve.",
      "Jehova så hva de gjorde, og han velsignet dem. Ved å verne guttebarna var de med på å verne hele folket – det folket som Messias en gang skulle komme gjennom."
    ],
    quiz:[
      { q:"Hva gjorde Sjifra og Pua da farao ga dem en grusom ordre?", options:["De fryktet Jehova og nektet å følge den","De gjorde som farao sa","De rømte fra Egypt"], correct:0,
        verseAfter:{ t:"Men jordmødrene fryktet den sanne Gud og gjorde ikke som kongen i Egypt hadde sagt til dem. De lot guttebarna leve.", ref:"2. Mosebok 1:17" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva gjorde Jehova fordi de var modige?", options:["Han velsignet dem","Han glemte dem","Han ble sint"], correct:0,
        verseAfter:{ t:"Gud velsignet derfor jordmødrene, og folket fortsatte å vokse og ble svært mektig.", ref:"2. Mosebok 1:20" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han legger merke til dem som er modige og gjør det rette","Han hjelper bare de mektige","Han bryr seg ikke om vanlige mennesker"], correct:0 }
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova legger merke til dem som tør å gjøre det rette, selv når det er farlig. Han er glad i dem som frykter ham mer enn de frykter mennesker – og han verner sin hensikt gjennom dem." },
    refs:"2. Mosebok 1:15–21",
    verse:{ t:"Senere sa kongen i Egypt til de hebraiske jordmødrene Sjifra og Pua:", ref:"2. Mosebok 1:15" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem fryktet Sjifra og Pua mest?",
    thread:"Sjifra og Pua vernet guttebarna – og Jehova bevarte folket som bærer løftet.",
    trait:"Godhet – han velsigner dem som velger å gjøre det rette.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Sjifra og Pua valgte Jehovas side. Lærdom: Det er modig og rett å frykte Jehova mer enn mennesker – og han velsigner dem som gjør det."
  },
  {
    id:"jokebed", name:"Jokebed", eraDate:"ca. 1593 f.v.t.", img:"images/24-jokebed.webp", imgFocus:"55% 24%", side:"jehova", bolk:4,
    puzzle:true, guessWrong:["Mirjam","Sara","Faraos datter"],
    arrival:"Tråden tar dere til en mor ved Nilen. Hun har gjemt babyen sin så lenge hun kunne – nå legger hun ham forsiktig i en kurv på vannet, mens storesøsteren holder vakt …",
    greet:"Hei! Jeg heter Jokebed. Jeg er mor til en liten gutt som farao ville skade – men jeg stolte på at Jehova ville passe på ham.",
    story:[
      "Jokebed var mor til en nydelig liten gutt. Men farao hadde befalt at alle hebraiske guttebarn skulle skades. Jokebed var ikke redd farao – hun stolte på Jehova.",
      "Hun gjemte babyen i tre måneder. Da han ble for stor til å skjules, laget hun en kurv av papyrus, tettet den godt, la gutten i den og satte den i sivet ved Nilen.",
      "Akkurat som Jokebed håpet, passet Jehova på gutten. Faraos egen datter fant ham og tok ham til seg – og Jokebed fikk til og med passe på sin egen sønn en stund. Den gutten var Moses, som Jehova skulle bruke til å befri folket."
    ],
    quiz:[
      { q:"Hva gjorde Jokebed for å redde babyen sin?", options:["Hun gjemte ham og la ham i en kurv på Nilen","Hun ga ham til farao","Hun rømte til ørkenen"], correct:0,
        verseAfter:{ t:"Da hun så hvor vakker han var, holdt hun ham skjult i tre måneder.", ref:"2. Mosebok 2:2" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hvor satte Jokebed kurven med babyen?", options:["I sivet ved bredden av Nilen","Høyt oppe i et tre","I en mørk hule"], correct:0,
        verseAfter:{ t:"… tok hun en kurv av papyrus … Hun la barnet i kurven og satte den i sivet ved bredden av Nilen.", ref:"2. Mosebok 2:3" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han kan passe på dem vi er glad i, når vi stoler på ham","Han hjelper bare voksne","Han bryr seg ikke om babyer"], correct:0 }
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova ser foreldre som handler i tro for å verne barna sine. Han passet på den lille gutten – og brukte ham senere til å befri hele folket. Ingenting kan stoppe Jehovas hensikt." },
    refs:"2. Mosebok 2:1–10; 6:20",
    verse:{ t:"Amram tok Jokebed, sin fars søster, til kone. Hun fødte ham Aron og Moses.", ref:"2. Mosebok 6:20" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem stolte Jokebed på?",
    thread:"Jokebed berget babyen Moses – og Jehova reddet befrieren som skulle føre folket ut.",
    trait:"Omsorg – han verner de små og svake.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Jokebed valgte Jehovas side. Lærdom: Når vi gjør det rette i tro, kan Jehova passe på dem vi er glad i – og bruke det til noe større enn vi aner."
  },
  {
    id:"moses", name:"Moses", eraDate:"f. 1593 f.v.t.", img:"images/25-moses.webp", imgFocus:"55% 20%", side:"jehova", bolk:4,
    puzzle:true, guessWrong:["Abraham","Josva","Aron"],
    arrival:"Tråden tar dere til en hyrde i ørkenen. Foran ham brenner en busk med klare flammer – men busken brenner ikke opp! Og en stemme kaller på ham …",
    greet:"Hei! Jeg heter Moses. Jehova talte til meg fra en brennende busk og ga meg en stor oppgave: å føre folket hans ut av Egypt.",
    story:[
      "Moses vokste opp i Egypt, men måtte flykte til ørkenen og ble gjeter der i mange år. En dag fikk han se noe utrolig: en busk som brant uten å brenne opp.",
      "Fra busken talte Jehova selv til Moses og ga ham et stort oppdrag: å gå til den mektige farao og føre israelittene ut av slaveriet.",
      "Moses følte seg liten og redd, men Jehova lovte å være med ham. Moses adlød, og Jehova brukte ham til å befri hele folket. Slik ble Moses et forbilde på den enda større Befrieren, Jesus."
    ],
    quiz:[
      { q:"Hvordan talte Jehova til Moses?", options:["Fra en busk som brant uten å brenne opp","I en drøm om natten","Gjennom en konge"], correct:0 },
      { q:"Hvilket oppdrag ga Jehova Moses?", options:["Å føre folket ut av Egypt","Å bygge en pyramide","Å bli konge i Egypt"], correct:0,
        verseAfter:{ t:"Jeg sender deg nå til farao, og du skal føre mitt folk, israelittene, ut av Egypt.", ref:"2. Mosebok 3:10" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han utruster dem han sender, og er med dem","Han sender bare de modige","Han klarer seg uten mennesker"], correct:0 }
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova ser folkets lidelse og gjør noe med det. Han kaller og utruster vanlige mennesker til store oppgaver – og er med dem hele veien. Moses peker fram mot Jesus, den store Befrieren." },
    refs:"2. Mosebok 3:1–12",
    verse:{ t:"… ropte han til ham fra tornebusken: «Moses! Moses!» Han svarte: «Her er jeg.»", ref:"2. Mosebok 3:4" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem ga Moses oppdraget?",
    thread:"Jehova kalte Moses til å føre folket ut av slaveriet – et stort skritt videre mot løftets land og ætten.",
    trait:"Makt – han kaller og styrker vanlige mennesker til store oppdrag.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Moses valgte Jehovas side. Lærdom: Jehova kaller og styrker dem han sender. Når han er med oss, kan vi gjøre ting vi aldri trodde var mulig."
  },
  {
    id:"aron", name:"Aron", eraDate:"f. 1597 f.v.t.", img:"images/26-aron.webp", imgFocus:"55% 20%", side:"jehova", bolk:4,
    puzzle:true, guessWrong:["Moses","Josva","Kaleb"],
    arrival:"Tråden tar dere til en mann som skal møte broren sin igjen etter mange år – og som snart skal være stemmen hans foran selve farao …",
    greet:"Hei! Jeg heter Aron, Moses' storebror. Jeg fikk være talsmannen hans – jeg sa høyt det Jehova ga Moses å si.",
    story:[
      "Da Jehova ga Moses oppdraget, var Moses redd for å snakke. Da sa Jehova at broren Aron skulle hjelpe ham og være talsmannen hans.",
      "Aron møtte Moses i ørkenen, og sammen gikk de til israelittene og til farao. Aron sa høyt og tydelig alt det Jehova hadde gitt Moses å si.",
      "Aron tjente Jehova trofast ved Moses' side. Senere ble han den første øverstepresten – og prestetjenesten pekte fram mot Jesus, vår store Øversteprest."
    ],
    quiz:[
      { q:"Hvilken oppgave fikk Aron?", options:["Å være Moses' talsmann","Å bli konge","Å bygge en ark"], correct:0,
        verseAfter:{ t:"Han skal tale til folket for deg, og han skal være din talsmann …", ref:"2. Mosebok 4:16" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva gjorde Aron sammen med Moses?", options:["Fortalte folket alt det Jehova hadde sagt","Gjemte seg for farao","Dro tilbake til ørkenen"], correct:0,
        verseAfter:{ t:"Aron fortalte dem om alt det Jehova hadde sagt til Moses, og han gjorde tegnene for øynene på folket.", ref:"2. Mosebok 4:30" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han gir oss hjelp og noen å stå sammen med","Han lar oss alltid være alene","Han liker bare de som klarer alt selv"], correct:0 }
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova vet hva vi trenger og gir oss hjelp – ofte gjennom andre mennesker. Han lot Moses og Aron stå sammen, og førte hensikten sin videre mot Jesus, vår Øversteprest." },
    refs:"2. Mosebok 4:14–16, 27–31",
    verse:{ t:"… han sa: «Hva med din bror, levitten Aron? Jeg vet at han er flink til å tale …»", ref:"2. Mosebok 4:14" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem tjente Aron?",
    thread:"Aron ble den første øverstepresten – prestetjenesten peker fram mot Jesus, vår store Øversteprest.",
    trait:"Omsorg – han gir oss hjelp og noen å stå sammen med.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Aron valgte Jehovas side. Lærdom: Jehova gir oss hjelp og noen å stå sammen med. Det er fint å hjelpe hverandre med å tjene ham."
  },
  {
    id:"farao", name:"Farao", eraDate:"ca. 1513 f.v.t.", img:"images/27-farao.webp", imgFocus:"55% 22%", side:"slange", bolk:4,
    puzzle:true, guessWrong:["Nimrod","Goliat","Kong Saul"],
    arrival:"Tråden tar dere til en stolt konge på en gulltrone. Moses ber ham slippe folket fritt – men kongen løfter haken og nekter …",
    greet:"Jeg er farao, Egypts mektige konge. Moses ba meg slippe slavene fri i Jehovas navn – men hvem er Jehova? Jeg ville ikke adlyde.",
    story:[
      "Moses og Aron kom til farao med Jehovas beskjed: «Slipp folket mitt fritt!» Men farao var stolt og hovmodig.",
      "Han sa at han ikke kjente Jehova og ikke ville adlyde. Igjen og igjen nektet han, for han ville ikke bøye seg for noen – ikke engang for Jehova."
    ],
    quiz:[
      { q:"Hva svarte farao da Moses ba ham slippe folket?", options:["At han ikke kjente Jehova og ikke ville adlyde","«Ja, dra med en gang»","«La meg tenke på det»"], correct:0 }
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova er mektigere enn enhver stolt konge. Den som hovmodig nekter å bøye seg for ham, velger slangens side – men Jehovas hensikt vinner alltid til slutt." },
    refs:"2. Mosebok 5:1–2",
    verse:{ t:"Men farao sa: «Hvem er Jehova? … Jeg kjenner slett ikke Jehova, og jeg vil ikke la Israel dra.»", ref:"2. Mosebok 5:2" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvilken side valgte farao?",
    thread:"Faraos stolthet kunne ikke stoppe Jehova – hensikten gikk videre, og folket ble fritt.",
    trait:"Overhøyhet – han er sterkere enn enhver stolt hersker.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Farao var på slangens side. Lærdom: Stolthet som nekter å bøye seg for Jehova, fører ingen vei. Jehova er alltid den sterkeste."
  },
  /* ===== BOLK 5 – Sinai → inntoget i det lovede land (kart 5). Låst ramme; fylles ett kort av gangen. ===== */
  {
    id:"mosessinai", name:"Moses ved Sinai", eraDate:"1513 f.v.t.", img:"images/28-moses-sinai.webp", imgFocus:"55% 22%", side:"jehova", bolk:5,
    puzzle:true, guessWrong:["Abraham","Josva","Aron"],
    arrival:"Tråden tar dere til foten av et stort fjell som ryker og buldrer. Oppe på fjellet møter en mann Jehova selv – og kommer ned med to steintavler i hendene …",
    greet:"Hei, det er meg igjen – Moses! Her ved Sinai-fjellet ga Jehova folket sitt en pakt, og jeg fikk to steintavler med budene hans.",
    story:[
      "Etter at Jehova hadde ført folket ut av Egypt, kom de til Sinai-fjellet. Der inngikk Jehova en spesiell avtale – en PAKT – med Israel. Hvis de adlød ham, skulle de bli hans «spesielle eiendom», en hellig nasjon.",
      "Jehova kalte Moses opp på fjellet og ga ham to steintavler. På dem hadde Jehova selv skrevet budene og lovene som skulle veilede folket.",
      "Loven holdt Israel rent og atskilt fra alt det gale rundt dem, og lærte dem hva Jehova ønsket. Slik vernet den ætten og pekte fram mot Messias, Jesus, som loven hele tiden ledet mot."
    ],
    quiz:[
      { q:"Hva skulle Israel bli hvis de holdt pakten med Jehova?", options:["Hans spesielle eiendom og en hellig nasjon","De rikeste i verden","Herskere over Egypt"], correct:0,
        verseAfter:{ t:"… skal dere bli min spesielle eiendom blant alle folkene, for hele jorden tilhører meg.", ref:"2. Mosebok 19:5" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva ga Jehova Moses på fjellet?", options:["Steintavler med budene","En krone av gull","Et sverd"], correct:0,
        verseAfter:{ t:"Jehova sa nå til Moses: «Kom opp til meg på fjellet og bli der. Jeg skal gi deg steintavler …»", ref:"2. Mosebok 24:12" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han gir folket sitt veiledning som verner og fører fram mot Messias","Han liker mange regler","Han bryr seg ikke om hvordan vi lever"], correct:0 }
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova satte folket sitt til side som noe spesielt og ga dem veiledning som holdt dem nær ham. Loven vernet ætten og pekte hele tiden fram mot Jesus – den røde tråden mot paradiset." },
    refs:"2. Mosebok 19:5–6; 24:12; 31:18",
    verse:{ t:"… ga han ham Vitnesbyrdets to tavler, steintavler som det var skrevet på med Guds finger.", ref:"2. Mosebok 31:18" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem inngikk Israel en pakt med?",
    thread:"Ved Sinai ga Jehova loven som holdt folket rent og pekte fram mot Messias.",
    trait:"Visdom – han gir veiledning som verner oss og holder oss nær ham.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Moses (ved Sinai) valgte Jehovas side. Lærdom: Jehovas veiledning er en gave som verner oss og holder oss nær ham – og fører hensikten hans trygt videre mot Jesus."
  },
  {
    id:"korah", name:"Korah", eraDate:"ca. 1512 f.v.t.", img:"images/29-korah.webp", imgFocus:"55% 22%", side:"slange", bolk:5,
    puzzle:true, guessWrong:["Aron","Josva","Kaleb"],
    arrival:"Tråden tar dere til ørkenleiren. En mann har samlet en stor flokk rundt seg – ikke for å takke Jehova, men for å sette seg opp mot dem Jehova har valgt …",
    greet:"Jeg heter Korah. Jeg syntes ikke det var rettferdig at Moses og Aron skulle lede – så jeg satte meg opp mot ordningen Jehova hadde valgt.",
    story:[
      "Korah var en levitt som tjente ved telthelligdommen. Men han ble misunnelig på Moses og Aron, som Jehova hadde valgt til å lede folket.",
      "Korah samlet mange menn og gjorde opprør. Han ville ha makten selv og sa at Moses og Aron hadde opphøyd seg for mye. Men i virkeligheten satte han seg opp mot Jehova selv, som hadde bestemt ordningen."
    ],
    quiz:[
      { q:"Hva gjorde Korah galt?", options:["Han gjorde opprør mot ordningen Jehova hadde valgt","Han hjalp Moses og Aron","Han bygde et alter"], correct:0,
        verseAfter:{ t:"De samlet seg mot Moses og Aron og sa til dem: «Vi har fått nok av dere! … Hvorfor skulle dere da opphøye dere over Jehovas menighet?»", ref:"4. Mosebok 16:3" } } // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova bestemmer selv hvem som skal lede folket hans. Den som setter seg opp mot ordningen hans for å skaffe seg makt, velger slangens side – det er egentlig opprør mot Jehova selv." },
    refs:"4. Mosebok 16:1–3",
    verse:{ t:"Korah, sønn av Jishar, sønn av Kehat, Levis sønn, slo seg så sammen med Datan og Abiram …", ref:"4. Mosebok 16:1" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem satte Korah seg egentlig opp mot?",
    thread:"Korah gjorde opprør mot Jehovas ordning – men Jehova bevarte prestelinjen som fører mot Jesus.",
    trait:"Rettferdighet – han bestemmer selv hvem som skal lede folket hans.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Korah var på slangens side. Lærdom: Å sette seg opp mot ordningen Jehova har valgt, er å sette seg opp mot Jehova selv. Ydmykhet og respekt er alltid best."
  },
  {
    id:"josva", name:"Josva", eraDate:"fra 1473 f.v.t.", img:"images/30-josva.webp", imgFocus:"55% 20%", side:"jehova", bolk:5,
    puzzle:true, guessWrong:["Moses","Kaleb","Aron"],
    arrival:"Tråden tar dere til en modig leder som står klar ved grensen til det lovede land. En stor oppgave venter – men Jehova har nettopp lovet å være med ham …",
    greet:"Hei! Jeg heter Josva. Etter Moses fikk jeg lede folket inn i det lovede land – og Jehova lovet å være med meg hele veien.",
    story:[
      "Josva hadde fulgt Moses trofast i mange år. Da Moses døde, valgte Jehova Josva til å lede folket videre – helt inn i det lovede land.",
      "Det var en stor og skummel oppgave. Men Jehova sa til Josva at han skulle være modig og sterk, og ikke være redd, for Jehova ville være med ham.",
      "Josva stolte på Jehova og adlød. Med Jehovas hjelp ledet han folket inn i landet som var lovet ætten – ett skritt nærmere alt Jehova hadde planlagt."
    ],
    quiz:[
      { q:"Hvilken oppgave fikk Josva etter Moses?", options:["Å lede folket inn i det lovede land","Å bygge en by i Egypt","Å bli prest"], correct:0 },
      { q:"Hva lovte Jehova Josva?", options:["At han ville være med ham overalt hvor han gikk","At han aldri skulle møte fiender","At han skulle bli rik"], correct:0,
        verseAfter:{ t:"Vær modig og sterk. La deg ikke skremme og bli ikke redd, for Jehova din Gud er med deg overalt hvor du går.", ref:"Josva 1:9" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han er med dem han sender, så vi kan være modige","Han lar oss klare alt alene","Han hjelper bare de fryktløse"], correct:0 }
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova er med dem han gir en oppgave. Når han er med oss, kan vi være modige og sterke selv i det vanskelige – for vi vet at vi ikke står alene." },
    refs:"Josva 1:1–9",
    verse:{ t:"Etter at Jehovas tjener Moses var død, sa Jehova til Josva, Nuns sønn, Moses' medhjelper …", ref:"Josva 1:1" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem var med Josva?",
    thread:"Josva førte folket inn i det lovede land – enda et løfte oppfylt på veien mot Jesus.",
    trait:"Trofasthet – han er med dem han sender, overalt hvor de går.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Josva valgte Jehovas side. Lærdom: Når Jehova gir oss en oppgave, er han med oss. Da kan vi være modige og stole på ham, uansett hvor stort det virker."
  },
  {
    id:"kaleb", name:"Kaleb", eraDate:"1473 f.v.t.", img:"images/31-kaleb.webp", imgFocus:"55% 20%", side:"jehova", bolk:5,
    puzzle:true, guessWrong:["Josva","Moses","Aron"],
    arrival:"Tråden tar dere til en redd leir. Tolv speidere er nettopp kommet tilbake fra det lovede land – ti er livredde, men én mann står fram og roper at folket kan klare det …",
    greet:"Hei! Jeg heter Kaleb. Jeg var en av speiderne som så på det lovede land – og jeg stolte på at Jehova ville gi oss det.",
    story:[
      "Moses sendte tolv speidere for å se på det lovede land. Ti av dem kom skjelvende tilbake og sa at folket der var altfor sterke – de våget ikke å dra inn.",
      "Men Kaleb og Josva var ikke redde. Kaleb prøvde å roe folket og sa: «La oss dra opp med en gang – vi kan helt sikkert klare det!» For han stolte ikke på sin egen styrke, men på Jehova.",
      "Fordi Kaleb fulgte Jehova helhjertet, lovte Jehova at nettopp han skulle få komme inn i landet. Tro og mot ble belønnet – mens frykten og opprøret falt."
    ],
    quiz:[
      { q:"Hva sa Kaleb da de ti speiderne var redde?", options:["«La oss dra opp – vi kan klare det!»","«La oss snu og dra hjem»","«Vi er for svake»"], correct:0 },
      { q:"Hva lovte Jehova Kaleb fordi han fulgte ham helhjertet?", options:["At han skulle få komme inn i landet","At han skulle bli konge","At han aldri skulle bli gammel"], correct:0,
        verseAfter:{ t:"Men fordi min tjener Kaleb hadde en annen innstilling og fortsatte å følge meg helhjertet, skal jeg føre ham inn i det landet han har vært i …", ref:"4. Mosebok 14:24" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han belønner dem som stoler helhjertet på ham","Han liker bare de sterkeste","Han glemmer dem som er modige"], correct:0 }
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova legger merke til dem som stoler helhjertet på ham, og belønner deres tro. Mot som hviler på Jehova – ikke på egen styrke – fører alltid fram." },
    refs:"4. Mosebok 13:30; 14:24",
    verse:{ t:"Da prøvde Kaleb å roe ned folket foran Moses ved å si: «La oss dra opp med en gang og innta landet, for vi vil helt sikkert klare å erobre det.»", ref:"4. Mosebok 13:30" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem stolte Kaleb på?",
    thread:"Kalebs helhjertede tro ble belønnet – Jehova fører de trofaste inn i det han har lovet.",
    trait:"Rettferdighet – han legger merke til og belønner helhjertet tro.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Kaleb valgte Jehovas side. Lærdom: Når vi stoler helhjertet på Jehova, kan vi være modige selv om alle andre er redde – og Jehova legger merke til det."
  },
  {
    id:"rahab", name:"Rahab", eraDate:"1473 f.v.t.", img:"images/32-rahab.webp", imgFocus:"60% 22%", side:"jehova", bolk:5,
    puzzle:true, guessWrong:["Rut","Debora","Sara"],
    arrival:"Tråden tar dere til en by med høye murer. En kvinne som bor i selve bymuren tar imot to fremmede – og velger modig å stille seg på Jehovas side, selv om hun ikke er israelitt …",
    greet:"Hei! Jeg heter Rahab. Jeg var ikke født blant Jehovas folk, men jeg hadde hørt om hans store gjerninger – og jeg valgte å tro på ham.",
    story:[
      "Rahab bodde i Jeriko og var ikke israelitt. Likevel hadde hun hørt om alt Jehova hadde gjort for folket sitt, og hun forsto at han er den sanne Gud.",
      "Da to israelittiske speidere kom til byen, skjulte Rahab dem og hjalp dem trygt unna. Hun sa rett ut at Jehova er Gud både i himmelen og på jorden.",
      "Fordi hun valgte Jehovas side, ble Rahab og familien hennes reddet da Jeriko falt. Senere kom hun til og med inn i Jesu slektslinje – et levende bevis på at det er VALGET som teller, ikke hvilket folk man er født i."
    ],
    quiz:[
      { q:"Hva trodde Rahab om Jehova?", options:["At han er Gud i himmelen og på jorden","At han bare var én av mange guder","At han ikke fantes"], correct:0,
        verseAfter:{ t:"… for Jehova deres Gud er Gud oppe i himmelen og nede på jorden.", ref:"Josva 2:11" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva skjedde med Rahab fordi hun valgte Jehovas side?", options:["Hun ble reddet og kom inn i Jesu slektslinje","Hun måtte forlate landet","Hun ble glemt"], correct:0 },
      { q:"Hva lærer vi om Jehova?", options:["Han tar imot alle som velger hans side, uansett hvor de kommer fra","Han bryr seg bare om dem som er født blant hans folk","Han hører ikke på utlendinger"], correct:0 }
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova ser til hjertet, ikke til hvilket folk man er født i. Rahab var utlending, men valgte hans side – og fikk være med i slektslinjen fram mot Jesus. Side betyr valg, ikke blodlinje." },
    refs:"Josva 2:8–11; 6:25; Matteus 1:5",
    verse:{ t:"Salmon ble far til Boas med Rahab; Boas ble far til Obed med Rut; Obed ble far til Isai …", ref:"Matteus 1:5" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem valgte Rahab å tro på?",
    thread:"Rahab, en utlending, valgte Jehovas side og kom inn i Jesu slektslinje – side betyr valg, ikke blodlinje.",
    trait:"Upartiskhet – han tar imot alle som velger hans side, uansett bakgrunn.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Rahab valgte Jehovas side. Lærdom: Jehova tar imot alle som velger hans side av hele sitt hjerte – uansett hvor de kommer fra. Valget teller, ikke blodlinjen."
  },
  /* ===== BOLK 6 – Dommertiden (kart 6). Låst ramme; fylles ett kort av gangen. ===== */
  {
    id:"debora", name:"Debora", eraDate:"ca. 1300-t f.v.t.", img:"images/34-debora.webp", imgFocus:"55% 20%", side:"jehova", bolk:6,
    puzzle:true, guessWrong:["Sara","Rut","Mirjam"],
    arrival:"Tråden tar dere til en stor palme i fjellandet. Under den sitter en klok kvinne som folk kommer langveisfra for å få hjelp og råd av – og snart skal hun lede an i en stor sak …",
    greet:"Hei! Jeg heter Debora. Jeg er profetinne og dommer i Israel, og jeg hjelper folket å høre på Jehova.",
    story:[
      "På Deboras tid hadde mange israelitter glemt Jehova, og en hard fiende plaget dem. Men Debora stolte helt på Jehova. Hun var profetinne og dommer, og folk kom til henne for å få hjelp.",
      "Jehova ga Debora et budskap til hærføreren Barak: nå var tiden inne for å sette folket fri. Debora var modig og sa at Jehova selv ville dra foran dem.",
      "Barak ville bare dra hvis Debora ble med. Hun ble med, og akkurat som Jehova hadde lovet, vant Israel. Debora viste at en som stoler på Jehova, kan være både modig og sterk."
    ],
    quiz:[
      { q:"Hva var Debora?", options:["Profetinne og dommer i Israel","En dronning i Egypt","En vanlig gjeter"], correct:0 },
      { q:"Hvor hjalp Debora folket?", options:["Under Debora-palmen, der folk kom for å få dom","I et stort slott","Ombord på et skip"], correct:0,
        verseAfter:{ t:"Hun pleide å sitte under Debora-palmen … og israelittene gikk opp til henne for å få dom i rettssaker.", ref:"Dommerne 4:5" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva sa Debora til hærføreren Barak?", options:["«Bryt opp – i dag skal Jehova gi fienden i din hånd!»","«Vent til neste år»","«Gjem deg i fjellet»"], correct:0,
        verseAfter:{ t:"Debora sa nå til Barak: «Bryt opp, for i dag skal Jehova gi Sisera i din hånd. Jehova drar ut foran deg.»", ref:"Dommerne 4:14" } } // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova reiser opp dem han trenger – og gir mot og styrke til alle som stoler på ham, enten det er en mann eller en kvinne. Han svikter aldri dem som følger ham." },
    refs:"Dommerne 4:4–5; 4:14",
    verse:{ t:"Debora, en profetinne, Lappidots kone, dømte i Israel på den tiden.", ref:"Dommerne 4:4" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem stolte Debora på?",
    thread:"Gjennom Debora reddet Jehova folket – han reiser alltid opp befriere som peker mot den store Befrieren.",
    trait:"Omsorg – han reiser opp befriere når folket trenger hjelp.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Debora valgte Jehovas side. Lærdom: Når vi stoler på Jehova, gir han oss mot til å gjøre det rette – og han holder alltid det han lover."
  },
  {
    id:"gideon", name:"Gideon", eraDate:"ca. 1200-t f.v.t.", img:"images/35-gideon.webp", imgFocus:"55% 20%", side:"jehova", bolk:6,
    puzzle:true, guessWrong:["Josva","Samson","David"],
    arrival:"Tråden tar dere til en mann som står klar til kamp med en stor hær bak seg – men Jehova ber ham om å sende nesten alle hjem igjen …",
    greet:"Hei! Jeg heter Gideon. Jehova ba meg redde folket – og han viste meg at det ikke er hæren som teller, men HAN.",
    story:[
      "På Gideons tid plaget en hard fiende Israel. Jehova valgte Gideon til å lede folket, og mange tusen menn samlet seg til kamp.",
      "Men Jehova sa at de var for mange. Hvis Israel vant med en stor hær, ville de tro at de hadde klart det helt selv. Så Jehova lot Gideon sende de fleste hjem – helt til bare 300 menn var igjen.",
      "Med bare 300 mann og Jehovas hjelp vant Gideon en stor seier. Slik viste Jehova at det ikke er antallet eller vår egen styrke som teller – det er HAN som frelser."
    ],
    quiz:[
      { q:"Hvorfor ba Jehova Gideon sende de fleste soldatene hjem?", options:["Så folket ikke skulle tro at de vant på egen hånd","Fordi de var late","Fordi det var for varmt"], correct:0,
        verseAfter:{ t:"Jehova sa nå til Gideon: «Du har for mange menn med deg til at jeg kan la dem beseire Midjan. For da ville Israel kanskje skryte … ‘Jeg har beseiret dem på egen hånd.’»", ref:"Dommerne 7:2" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Befriere som Gideon reddet folket. Hvem pekte de fram mot?", options:["Den store Befrieren, Jesus","En egyptisk konge","Seg selv"], correct:0,
        hint:"Tenk på den røde tråden – hver befrier i Bibelen peker fram mot Én som skal redde for alltid." },
      { q:"Hva lærer vi om Jehova?", options:["Han kan frelse med få – det er han som teller","Han trenger alltid en stor hær","Han hjelper bare de mange"], correct:0 }
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova trenger ikke mange eller sterke for å redde – han frelser med dem som stoler på ham. Da blir det tydelig at æren er hans, ikke vår." },
    refs:"Dommerne 7:2, 7",
    verse:{ t:"Jehova sa nå til Gideon: «Jeg skal redde dere med de 300 mennene … og jeg skal gi Midjan i din hånd.»", ref:"Dommerne 7:7" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem ga Gideon seieren?",
    thread:"Med bare 300 mann viste Jehova at han frelser – befriere som Gideon peker fram mot Jesus.",
    trait:"Makt – han frelser med få, så æren blir hans.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Gideon valgte Jehovas side. Lærdom: Jehova kan gjøre store ting med små midler – det viktigste er at vi stoler på ham, ikke på vår egen styrke."
  },
  {
    id:"abimelek", name:"Abimelek", eraDate:"ca. 1100-t f.v.t.", img:"images/36-abimelek.webp", imgFocus:"55% 22%", side:"slange", bolk:6,
    puzzle:true, guessWrong:["Gideon","Saul","Farao"],
    arrival:"Tråden tar dere til en mann som vil bli konge – ikke fordi Jehova har valgt ham, men fordi han selv vil ha all makten …",
    greet:"Jeg heter Abimelek. Jeg ville bli hersker over folket – og jeg brukte alle slags knep for å få makten jeg ville ha.",
    story:[
      "Abimelek var sønn av dommeren Gideon. Men i stedet for å vente på Jehova, ville Abimelek gjøre seg selv til konge.",
      "Han brukte svik og lokket folk i byen Sikem til å følge seg, så han kunne gripe makten for seg selv. Han tenkte mer på sin egen ære enn på Jehova og på det som var rett."
    ],
    quiz:[
      { q:"Hva ville Abimelek?", options:["Gjøre seg selv til hersker og få all makten","Hjelpe folket å tjene Jehova","Bli en god gjeter"], correct:0,
        verseAfter:{ t:"«… Hva er best for dere, at alle de 70 sønnene til Jerubbaal hersker over dere, eller at én mann hersker over dere? Husk at jeg er deres eget kjøtt og blod.»", ref:"Dommerne 9:2" } } // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova ser hjertet. Den som griper etter makt og ære for seg selv – i stedet for å la Jehova bestemme – velger slangens side. Bare Jehova har rett til å avgjøre hvem som skal lede." },
    refs:"Dommerne 9:1–2",
    verse:{ t:"Med tiden dro Abimelek, Jerubbaals sønn, til sin mors brødre i Sikem …", ref:"Dommerne 9:1" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvilken side valgte Abimelek?",
    thread:"Abimelek grep makten ved svik – men Jehovas hensikt lot seg ikke stoppe av slangens vei.",
    trait:"Rettferdighet – han lar ikke svik og maktbegjær vinne til slutt.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Abimelek var på slangens side. Lærdom: Å gripe makt og ære for seg selv, i stedet for å følge Jehova, fører aldri til noe godt."
  },
  {
    id:"samson", name:"Samson", eraDate:"ca. 1100-t f.v.t.", img:"images/37-samson.webp", imgFocus:"55% 20%", side:"jehova", bolk:6,
    puzzle:true, guessWrong:["Gideon","David","Goliat"],
    arrival:"Tråden tar dere til en mann kjent for kjempekrefter – men styrken hans kom ikke fra ham selv …",
    greet:"Hei! Jeg heter Samson. Folk snakker om kreftene mine – men sannheten er at all styrken kom fra Jehova.",
    story:[
      "Allerede før Samson ble født, fortalte en engel at Jehova hadde en spesiell oppgave til ham: å begynne å redde Israel fra fiendene.",
      "Jehova ga Samson kjempekrefter. Men det viktige er HVOR styrken kom fra: ikke fra Samson selv, men fra Jehovas ånd som virket på ham.",
      "Samson var et menneske med både styrke og svakheter. Men hver gang han stolte på Jehova og ba om hjelp, fikk han kraft – for styrken var alltid Jehovas gave."
    ],
    quiz:[
      { q:"Hvor kom Samsons store styrke fra?", options:["Fra Jehovas ånd","Fra musklene hans alene","Fra et magisk belte"], correct:0,
        verseAfter:{ t:"Med tiden begynte Jehovas ånd å virke på ham i Mahane-Dan, mellom Sora og Esjtaol.", ref:"Dommerne 13:25" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva gjorde Samson da han trengte styrke?", options:["Han ba Jehova om hjelp","Han stolte bare på seg selv","Han ga opp"], correct:0,
        verseAfter:{ t:"Samson ropte nå til Jehova: «Suverene Herre Jehova, husk på meg og gi meg styrke, det ber jeg deg om …»", ref:"Dommerne 16:28" } }, // verifisert mot NV (nwt_N.pdf) – siterer kun bønnen om styrke
      { q:"Hva lærer vi om Jehova?", options:["Han er kilden til all ekte styrke","Han liker bare sterke mennesker","Han hjelper aldri"], correct:0 }
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"All ekte styrke kommer fra Jehova. Også når vi er svake eller gjør feil, hjelper han oss når vi vender oss til ham og ber om kraft." },
    refs:"Dommerne 13:24–25; 16:28",
    verse:{ t:"Kvinnen fødte senere en sønn og ga ham navnet Samson, og Jehova velsignet gutten mens han vokste opp.", ref:"Dommerne 13:24" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem ga Samson styrken hans?",
    thread:"Jehova ga Samson styrke til å redde folket – enda en befrier på veien mot den endelige Redningsmannen.",
    trait:"Makt – styrken kommer fra ham, ikke fra oss selv.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Samson valgte Jehovas side. Lærdom: Styrken vår kommer fra Jehova – ikke fra oss selv. Når vi ber ham om hjelp, gir han oss kraft til å gjøre det rette."
  },
  {
    id:"dalila", name:"Dalila", eraDate:"ca. 1100-t f.v.t.", img:"images/38-dalila.webp", imgFocus:"55% 22%", side:"slange", bolk:6,
    puzzle:true, guessWrong:["Rut","Rebekka","Mirjam"],
    arrival:"Tråden tar dere til en kvinne som får et fristende tilbud: mye sølv – hvis hun bare vil svikte en som stoler på henne …",
    greet:"Jeg het Dalila. Noen mektige menn tilbød meg mye sølv hvis jeg forrådte Samson – og jeg valgte sølvet.",
    story:[
      "Dalila var en kvinne som Samson var glad i. Men fiendene hans kom til henne med et tilbud: hvis hun hjalp dem å overvinne Samson, skulle hver av dem gi henne 1100 sølvstykker.",
      "Dalila valgte sølvet framfor troskap. Hun lot pengene bety mer enn å være trofast mot en som stolte på henne."
    ],
    quiz:[
      { q:"Hvorfor sviktet Dalila Samson?", options:["For å få mye sølv","Fordi hun var redd","Fordi Jehova ba henne"], correct:0,
        verseAfter:{ t:"«Du må lokke ut av ham hva det er som gir ham så stor styrke … For dette skal hver av oss gi deg 1100 sølvstykker.»", ref:"Dommerne 16:5" } } // verifisert mot NV (nwt_N.pdf)
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova vil at vi skal være trofaste og ikke la penger eller ting bety mer enn å gjøre det rette. Den som svikter for egen vinning, velger slangens side." },
    refs:"Dommerne 16:4–5",
    verse:{ t:"Etter dette ble han forelsket i en kvinne i Sorek-dalen. Hun het Dalila.", ref:"Dommerne 16:4" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvilken side valgte Dalila?",
    thread:"Dalila valgte sølv framfor troskap – men tråden mot Jesus gikk likevel videre.",
    trait:"Trofasthet – han fører hensikten videre selv når andre svikter.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Dalila var på slangens side. Lærdom: Ingenting – ikke engang mye penger – er verdt å svikte det som er rett. Vær trofast mot Jehova og mot andre."
  },
  {
    id:"rut", name:"Rut", eraDate:"ca. 1100-t f.v.t.", img:"images/39-rut.webp", imgFocus:"60% 22%", side:"jehova", bolk:6,
    puzzle:true, guessWrong:["Noomi","Debora","Sara"],
    arrival:"Tråden tar dere til en ung utenlandsk kvinne som nettopp har mistet mannen sin – men som likevel nekter å forlate svigermoren og hennes Gud …",
    greet:"Hei! Jeg heter Rut. Jeg kom fra et annet land, men jeg valgte å følge Jehova av hele mitt hjerte.",
    story:[
      "Rut var ikke født israelitt – hun kom fra Moab. Da mannen hennes døde, ville svigermoren Noomi reise tilbake til Israel. Rut kunne blitt igjen i hjemlandet sitt, men hun valgte å bli med.",
      "Rut sa de vakre ordene: «Ditt folk skal være mitt folk, og din Gud skal være min Gud.» Hun valgte Jehovas side, selv om hun var en utlending.",
      "Jehova velsignet Rut for valget hennes. Hun ble oldemor til kong David – og dermed en del av slekten som Jesus kom fra. Det viser at SIDE betyr hvem man velger å følge, ikke hvilket folk man er født inn i."
    ],
    quiz:[
      { q:"Hva valgte Rut da hun kunne blitt igjen i hjemlandet?", options:["Å følge Noomi og tjene Jehova","Å bli igjen i Moab","Å reise til Egypt"], correct:0 },
      { q:"Hva ble Rut en del av da Jehova velsignet henne?", options:["Slekten som kong David og Jesus kom fra","En stor hær","Et kongerike i Moab"], correct:0,
        verseAfter:{ t:"De kalte ham Obed. Han er far til Isai, Davids far.", ref:"Rut 4:17" } }, // verifisert mot NV (nwt_N.pdf)
      { q:"Hva lærer vi om Jehova?", options:["Han tar imot alle som velger hans side, uansett hvor de kommer fra","Han hjelper bare israelitter","Han bryr seg ikke om utlendinger"], correct:0 }
    ],
    reflect:{ q:"Hva forteller denne historien om Jehova?", a:"Jehova tar imot alle som av hele sitt hjerte velger å følge ham – uansett hvor de kommer fra. Rut, en utlending, ble en del av slekten Jesus kom fra. Side betyr valg, ikke blodlinje." },
    refs:"Rut 1:16; 4:17",
    verse:{ t:"Men Rut sa: «… Ditt folk skal være mitt folk, og din Gud skal være min Gud.»", ref:"Rut 1:16" }, // navngivende vers ved avsløring. Verifisert mot NV (nwt_N.pdf)
    sideQ:"Hvem valgte Rut å følge?",
    thread:"Rut, en utlending, valgte Jehovas side og ble oldemor til kong David – rett inn i Jesu slektslinje.",
    trait:"Upartiskhet – han verdsetter lojal kjærlighet, uansett hvor man er født.",
    traad:{ skjedde:"", jehova:"", valg:"", videre:"" },  // 4 trådfelt (CLAUDE.md); fylles i DEL 3 der innholdet finnes
    lesson:"Rut valgte Jehovas side. Lærdom: Det er valget vårt som teller, ikke hvor vi kommer fra. Alle som velger Jehova av hjertet, hører til hos ham."
  },
];
