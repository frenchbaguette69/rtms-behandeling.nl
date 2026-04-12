export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  category: "Educatief" | "Ervaringen" | "Wetenschap" | "Praktisch" | "Lokaal";
  date: string;
  excerpt: string;
  readingTime: string;
  content: {
    h1: string;
    sections: {
      h2?: string;
      h3?: string;
      text: string;
    }[];
  };
  relatedTreatment?: {
    title: string;
    slug: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "rtms-bij-depressie-wat-je-moet-wet-ten",
    title: "rTMS bij depressie: wat je moet weten voordat je begint",
    metaTitle: "rTMS bij Depressie: Alles wat je moet weten | rtms-behandeling.nl",
    metaDescription: "Overweeg je rTMS voor depressie? Lees alles over hoe het werkt, wat je kunt verwachten, hoeveel sessies nodig zijn en of het vergoed wordt.",
    focusKeyword: "rTMS depressie",
    category: "Educatief",
    date: "10 april 2026",
    readingTime: "8 min",
    excerpt: "Overweegt u rTMS voor uw depressie? In dit uitgebreide artikel leggen we precies uit hoe de magnetische stimulatie werkt en wat het traject inhoudt.",
    content: {
      h1: "rTMS bij depressie: alles wat je moet weten voordat je begint",
      sections: [
        { h2: "Wat maakt depressie zo moeilijk te behandelen?", text: "Voor veel patiënten zijn standaardbehandelingen zoals medicatie en gesprekstherapie niet voldoende. We noemen dit therapieresistente depressie." },
        { h2: "Hoe werkt rTMS bij depressie in de hersenen?", text: "rTMS maakt gebruik van magnetische velden om de activiteit in de DLPFC te stimuleren, waardoor neurale netwerken weer optimaal gaan communiceren." },
        { h2: "Wat kun je verwachten tijdens de behandeling?", text: "De behandeling is niet-invasief. U zit in een comfortabele stoel terwijl een magneetspoel tegen uw hoofd wordt geplaatst." },
        { h2: "Hoeveel sessies heb je nodig?", text: "Een standaard traject bestaat uit 20 tot 30 sessies, verspreid over enkele weken." },
        { h2: "Resultaten: wat zegt de wetenschap?", text: "Ruim 50-60% van de patiënten met een therapieresistente depressie reageert positief op rTMS." }
      ]
    },
    relatedTreatment: {
      title: "rTMS bij Depressie",
      slug: "depressie"
    }
  },
  {
    slug: "rtms-versus-antidepressiva",
    title: "rTMS versus antidepressiva: wat past beter bij jou?",
    metaTitle: "rTMS vs Antidepressiva | Voor- en Nadelen | rtms-behandeling.nl",
    metaDescription: "Vergelijk rTMS met antidepressiva. Ontdek de verschillen in bijwerkingen, effectiviteit en vergoeding voor een weloverwogen keuze.",
    focusKeyword: "rTMS vs antidepressiva",
    category: "Educatief",
    date: "11 april 2026",
    readingTime: "7 min",
    excerpt: "Twijfelt u tussen medicatie of magnetische stimulatie? We vergelijken de effectiviteit en bijwerkingen van beide methoden in detail.",
    content: {
      h1: "rTMS versus antidepressiva — Wat zijn de voor- en nadelen?",
      sections: [
        { h2: "Hoe werken antidepressiva?", text: "Medicatie beïnvloedt de chemische balans in het hele lichaam, wat vaak leidt tot systemische bijwerkingen." },
        { h2: "Hoe werkt rTMS?", text: "rTMS richt zich uitsluitend op de relevante hersengebieden, zonder de rest van het lichaam te belasten." },
        { h2: "Vergelijking: bijwerkingen", text: "Waar antidepressiva vaak zorgen voor gewichtstoename of sufheid, heeft rTMS minimale bijwerkingen zoals lichte hoofdpijn." }
      ]
    },
    relatedTreatment: {
      title: "rTMS bij Depressie",
      slug: "depressie"
    }
  },
  {
    slug: "hoe-lang-duurt-rtms-behandeling",
    title: "Hoe lang duurt een rTMS behandeling?",
    metaTitle: "Duur rTMS Behandeling | Sessietijd & Traject | rtms-behandeling.nl",
    metaDescription: "Hoeveel tijd kost een rTMS traject? Lees alles over de duur van een sessie, het aantal behandelingen en de frequentie.",
    focusKeyword: "hoe lang duurt rTMS behandeling",
    category: "Praktisch",
    date: "12 april 2026",
    readingTime: "5 min",
    excerpt: "Wat is de tijdsinvestering van een rTMS traject? Van de dagelijkse sessie tot het totale aantal weken; we zetten het voor u op een rij.",
    content: {
      h1: "Hoe lang duurt een rTMS behandeling?",
      sections: [
        { h2: "Duur van een enkele sessie", text: "Een gemiddelde rTMS-sessie duurt tussen de 20 en 30 minuten." },
        { h2: "Totaal aantal sessies", text: "De meeste patiënten doorlopen een cyclus van 20 tot 30 behandelingen voor een optimaal resultaat." }
      ]
    },
    relatedTreatment: {
      title: "rTMS bij Depressie",
      slug: "depressie"
    }
  },
  {
    slug: "rtms-vergoeding-zorgverzekering-2025",
    title: "rTMS vergoeding: wordt het vergoed door uw zorgverzekering in 2025?",
    metaTitle: "rTMS Vergoeding 2025 | Zorgverzekering & Kosten | rtms-behandeling.nl",
    metaDescription: "Wordt rTMS vergoed in 2025? Bekijk de voorwaarden voor vergoeding door de basisverzekering en wat u zelf moet regelen.",
    focusKeyword: "rTMS vergoeding 2025",
    category: "Praktisch",
    date: "5 april 2026",
    readingTime: "6 min",
    excerpt: "Wilt u weten of uw rTMS behandeling vergoed wordt in 2025? We bespreken de voorwaarden van de basisverzekering en de benodigde verwijzing.",
    content: {
      h1: "rTMS vergoeding door zorgverzekering in 2025",
      sections: [
        { h2: "Wanneer vergoedt de basisverzekering rTMS?", text: "Sinds 2017 zit rTMS voor depressie in het basispakket, mits er sprake is van therapieresistentie." }
      ]
    },
    relatedTreatment: {
      title: "rTMS Vergoeding",
      slug: "vergoeding-kosten"
    }
  },
  {
    slug: "bijwerkingen-rtms",
    title: "Bijwerkingen van rTMS: wat kun je verwachten?",
    metaTitle: "Bijwerkingen rTMS | Veiligheid & Risico's | rtms-behandeling.nl",
    metaDescription: "Wat zijn de bijwerkingen van rTMS? Een eerlijk overzicht van mogelijke hoofdpijn, vermoeidheid en zeldzame risico's.",
    focusKeyword: "rTMS bijwerkingen",
    category: "Educatief",
    date: "4 april 2026",
    readingTime: "6 min",
    excerpt: "In tegenstelling tot medicatie heeft rTMS zeer milde bijwerkingen. Lees hier precies wat u kunt verwachten na een stimulatiesessie.",
    content: {
      h1: "Bijwerkingen van rTMS — Eerlijk en volledig overzicht",
      sections: [
        { h2: "Is rTMS veilig?", text: "Ja, rTMS is een door de FDA and Gezondheidsraad goedgekeurde, veilige behandelmethode." },
        { h3: "Hoofdpijn", text: "Ongeveer 1 op de 3 patiënten ervaart een lichte spanningshoofdpijn direct na de sessie." }
      ]
    },
    relatedTreatment: {
      title: "rTMS bij Depressie",
      slug: "depressie"
    }
  },
  {
    slug: "rtms-ervaringen-patienten",
    title: "rTMS ervaringen: patiënten vertellen hun verhaal",
    metaTitle: "rTMS Ervaringen | Verhalen van Patiënten | rtms-behandeling.nl",
    metaDescription: "Lees hoe rTMS het leven van onze patiënten heeft veranderd. Echte verhalen over herstel van depressie en burn-out.",
    focusKeyword: "rTMS ervaringen",
    category: "Ervaringen",
    date: "3 april 2026",
    readingTime: "7 min",
    excerpt: "Niets spreekt meer tot de verbeelding dan het verhaal van iemand die het al heeft doorstaan. Lees de ervaringen van Anna, Mark en Lisa.",
    content: {
      h1: "rTMS ervaringen — Patiënten vertellen over hun behandeling",
      sections: [
        { h2: "\"Na jaren van medicatie eindelijk verlossing\" — Anna, 42", text: "Anna deelt haar reis van chronische depressie naar een weer betekenisvol leven dankzij rTMS." }
      ]
    },
    relatedTreatment: {
      title: "rTMS Ervaringen",
      slug: "ervaringen"
    }
  },
  {
    slug: "rtms-ocd-dwangstoornis",
    title: "rTMS bij OCD: hoe hersenstimulatie dwanggedachten vermindert",
    metaTitle: "rTMS bij OCD | Behandeling Dwangstoornis | rtms-behandeling.nl",
    metaDescription: "Dwanggedachten verminderen met rTMS? Ontdek hoe diepe hersenstimulatie helpt bij de behandeling van OCD.",
    focusKeyword: "rTMS OCD Nederland",
    category: "Educatief",
    date: "2 april 2026",
    readingTime: "7 min",
    excerpt: "OCD is vaak zeer hardnekkig. We leggen uit hoe rTMS de hyperactieve gebieden bij dwangstoornissen kan kalmeren.",
    content: { h1: "rTMS bij OCD — Effectief bij dwang", sections: [] },
    relatedTreatment: {
      title: "rTMS bij OCD",
      slug: "ocd-dwangstoornis"
    }
  },
  {
    slug: "rtms-angststoornis",
    title: "rTMS bij angststoornis: kan hersenstimulatie angst verminderen?",
    metaTitle: "rTMS bij Angst | Hersenstimulatie tegen Angst | rtms-behandeling.nl",
    metaDescription: "Kan rTMS helpen bij een angststoornis? Lees meer over de effecten van magnetische stimulatie op angst- en paniekklachten.",
    focusKeyword: "rTMS angststoornis",
    category: "Educatief",
    date: "1 april 2026",
    readingTime: "6 min",
    excerpt: "Chronische angst put de hersenen uit. rTMS helpt om de emotionele regulatie in de prefrontale cortex weer te normaliseren.",
    content: { h1: "rTMS bij angststoornis — Herstel balans", sections: [] },
    relatedTreatment: {
      title: "rTMS bij Angst",
      slug: "angststoornis"
    }
  },
  {
    slug: "therapieresistente-depressie-behandeling",
    title: "Therapieresistente depressie: wat zijn uw opties als medicatie niet werkt?",
    metaTitle: "Therapieresistente Depressie | Opties & Herstel | rtms-behandeling.nl",
    metaDescription: "Werken antidepressiva niet? Ontdek waarom rTMS de gouden standaard is voor therapieresistente depressie.",
    focusKeyword: "therapieresistente depressie behandeling Nederland",
    category: "Educatief",
    date: "30 maart 2026",
    readingTime: "9 min",
    excerpt: "Wanneer twee medicatietrajecten falen, spreekt men van therapieresistentie. rTMS biedt dan vaak de gewenste doorbraak.",
    content: { h1: "Therapieresistente depressie — Wat nu?", sections: [] },
    relatedTreatment: {
      title: "Therapieresistente Depressie",
      slug: "therapieresistente-depressie"
    }
  },
  {
    slug: "rtms-ptss-trauma",
    title: "rTMS bij PTSS: nieuwe hoop voor traumaverwerking",
    metaTitle: "rTMS bij PTSS | Traumabehandeling rTMS | rtms-behandeling.nl",
    metaDescription: "Behandel PTSS met rTMS. Ontdek hoe magneetstimulatie helpt bij traumaverwerking zonder zware herbelevingen.",
    focusKeyword: "rTMS PTSS behandeling",
    category: "Educatief",
    date: "29 maart 2026",
    readingTime: "7 min",
    excerpt: "Trauma slaat zich op in de hersenen. rTMS helpt om de hyper-activiteit in de amygdala te temperen en herstel te bevorderen.",
    content: { h1: "rTMS bij PTSS — Traumaverwerking", sections: [] },
    relatedTreatment: {
      title: "rTMS bij PTSS",
      slug: "ptss"
    }
  },
  {
    slug: "rtms-tinnitus",
    title: "rTMS bij tinnitus: kan hersenstimulatie oorsuizen verlichten?",
    metaTitle: "rTMS bij Tinnitus | Behandeling Oorsuizen | rtms-behandeling.nl",
    metaDescription: "Tinnitus behandelen met rTMS? Lees hoe magnetische stimulatie de hyperactieve auditieve cortex kan kalmeren.",
    focusKeyword: "rTMS tinnitus behandeling",
    category: "Educatief",
    date: "28 maart 2026",
    readingTime: "6 min",
    excerpt: "Wordt u gek van het suizen? We onderzoeken of rTMS verlichting kan bieden door de auditieve cortex te remmen.",
    content: { h1: "rTMS bij tinnitus — Oorsuizen verlichten", sections: [] },
    relatedTreatment: {
      title: "rTMS bij Tinnitus",
      slug: "tinnitus"
    }
  },
  {
    slug: "wat-is-transcraniele-magnetische-stimulatie",
    title: "Wat is Transcraniële Magnetische Stimulatie (TMS)?",
    metaTitle: "Wat is TMS? | Alles over rTMS Techniek | rtms-behandeling.nl",
    metaDescription: "Een diepe duik in de techniek van TMS. Hoe magnetisme hersenactiviteit beïnvloedt voor medische doeleinden.",
    focusKeyword: "transcraniële magnetische stimulatie",
    category: "Educatief",
    date: "27 maart 2026",
    readingTime: "7 min",
    excerpt: "In dit artikel gaan we diep in op de wetenschappelijke techniek achter magnetische hersenstimulatie.",
    content: { h1: "Wat is TMS?", sections: [] },
    relatedTreatment: {
      title: "Wat is rTMS?",
      slug: "wat-is-rtms"
    }
  },
  {
    slug: "rtms-heiloo-noord-holland",
    title: "rTMS behandeling in Heiloo en omgeving — Alkmaar, Castricum, Beverwijk",
    metaTitle: "rTMS Heiloo | rTMS Alkmaar & Regio | rtms-behandeling.nl",
    metaDescription: "Zoekt u rTMS in Noord-Holland? Maak kennis met onze kliniek in Heiloo, centraal gelegen voor Alkmaar en Castricum.",
    focusKeyword: "rTMS Heiloo Noord-Holland",
    category: "Lokaal",
    date: "26 maart 2026",
    readingTime: "4 min",
    excerpt: "Woont u in de regio Alkmaar? Ontdek onze gespecialiseerde rTMS kliniek in het prachtige Heiloo.",
    content: { h1: "rTMS in Heiloo — Noord-Holland", sections: [] },
    relatedTreatment: {
      title: "rTMS bij Depressie",
      slug: "depressie"
    }
  },
  {
    slug: "rtms-amsterdam-schiphol",
    title: "rTMS behandeling bij Amsterdam — Locatie Schiphol-Rijk",
    metaTitle: "rTMS Amsterdam | rTMS Schiphol-Rijk & Regio | rtms-behandeling.nl",
    metaDescription: "rTMS in de regio Amsterdam en Hoofddorp? Onze locatie op Schiphol-Rijk is uitstekend bereikbaar en biedt snelle zorg.",
    focusKeyword: "rTMS Amsterdam regio",
    category: "Lokaal",
    date: "25 maart 2026",
    readingTime: "4 min",
    excerpt: "Op zoek naar rTMS in de Randstad? Onze vestiging op de Boeing Avenue biedt topzorg aan de rand van Amsterdam.",
    content: { h1: "rTMS bij Amsterdam — Schiphol-Rijk", sections: [] },
    relatedTreatment: {
      title: "rTMS bij Depressie",
      slug: "depressie"
    }
  },
  {
    slug: "depressie-zonder-medicatie",
    title: "Depressie behandelen zonder medicatie: alle opties op een rij",
    metaTitle: "Depressie Behandelen zonder Medicatie | rtms-behandeling.nl",
    metaDescription: "Wilt u van uw depressie af zonder pillen? Bekijk de alternatieven zoals rTMS, CGT en leefstijlinterventies.",
    focusKeyword: "depressie behandeling zonder medicatie",
    category: "Educatief",
    date: "24 maart 2026",
    readingTime: "8 min",
    excerpt: "Niet iedereen wil of kan medicatie slikken. We zetten alle bewezen alternatieven voor u op een rij.",
    content: { h1: "Depressie behandelen zonder medicatie", sections: [] },
    relatedTreatment: {
      title: "rTMS bij Depressie",
      slug: "depressie"
    }
  },
  {
    slug: "hoe-weet-je-of-rtms-werkt",
    title: "Hoe weet je of rTMS bij jou werkt?",
    metaTitle: "Werkt rTMS? | Resultaten & Effectmeting | rtms-behandeling.nl",
    metaDescription: "Hoe meten we het succes van rTMS? Lees alles over de signalen van herstel en wetenschappelijke effectmetingen.",
    focusKeyword: "rTMS werkt niet / rTMS effectief",
    category: "Wetenschap",
    date: "23 maart 2026",
    readingTime: "6 min",
    excerpt: "Hoe herkent u de eerste subtiele tekenen van verbetering tijdens uw rTMS traject? We leggen het uit.",
    content: { h1: "Hoe weet je of rTMS werkt?", sections: [] },
    relatedTreatment: {
      title: "rTMS bij Depressie",
      slug: "depressie"
    }
  },
  {
    slug: "intake-rtms-wat-te-verwachten",
    title: "De rTMS intake: wat kun je verwachten bij je eerste afspraak?",
    metaTitle: "rTMS Intake | Eerste Afspraak | rtms-behandeling.nl",
    metaDescription: "Wat gebeurt er tijdens een rTMS intake? Van diagnostiek tot proefstimulatie; we bereiden u voor.",
    focusKeyword: "rTMS intake Nederland",
    category: "Praktisch",
    date: "22 maart 2026",
    readingTime: "5 min",
    excerpt: "Bent u zenuwachtig voor de intake? We nemen u stap-voor-stap mee door het eerste consult met de psychiater.",
    content: { h1: "De rTMS intake", sections: [] },
    relatedTreatment: {
      title: "Het Behandelproces",
      slug: "behandelproces"
    }
  },
  {
    slug: "rtms-combineren-psychotherapie",
    title: "rTMS combineren met psychotherapie: waarom werkt het beter?",
    metaTitle: "rTMS en Psychotherapie | De Synergie | rtms-behandeling.nl",
    metaDescription: "Waarom versterkt psychotherapie de effecten van rTMS? Lees over de krachtige combinatie van praten en stimuleren.",
    focusKeyword: "rTMS psychotherapie combinatie",
    category: "Wetenschap",
    date: "21 maart 2026",
    readingTime: "7 min",
    excerpt: "Stimulatie opent de deur; therapie loopt naar binnen. Ontdek waarom de combinatie de 'gouden standaard' is.",
    content: { h1: "rTMS en Psychotherapie", sections: [] },
    relatedTreatment: {
      title: "rTMS bij Depressie",
      slug: "depressie"
    }
  },
  {
    slug: "burn-out-herstel-rtms",
    title: "Burn-out herstel met rTMS: hoe hersenstimulatie uitputting verlicht",
    metaTitle: "rTMS bij Burn-out | Herstel van Uitputting | rtms-behandeling.nl",
    metaDescription: "Snel herstellen van een burn-out? Ontdek hoe rTMS helpt bij ernstige uitputting en concentratieproblemen.",
    focusKeyword: "rTMS burn-out herstel",
    category: "Educatief",
    date: "20 maart 2026",
    readingTime: "7 min",
    excerpt: "Een burn-out is ook een fysiek proces in het brein. rTMS helpt om de uitgeputte netwerken weer te 'laden'.",
    content: { h1: "Burn-out herstel met rTMS", sections: [] },
    relatedTreatment: {
      title: "rTMS bij Burn-out",
      slug: "burn-out"
    }
  },
  {
    slug: "rtms-nieuws-richtlijn-depressie-2024",
    title: "rTMS nu opgenomen in richtlijn depressie 2024: wat betekent dit?",
    metaTitle: "rTMS Richtlijn Depressie 2024 | Nieuws | rtms-behandeling.nl",
    metaDescription: "Belangrijk nieuws: rTMS is formeel erkend in de richtlijn depressie van 2024. Wat verandert er voor u?",
    focusKeyword: "rTMS richtlijn depressie 2024",
    category: "Wetenschap",
    date: "19 maart 2026",
    readingTime: "6 min",
    excerpt: "Een mijlpaal in de Nederlandse psychiatrie: rTMS is officieel Step-up zorg geworden. Lees de details.",
    content: { h1: "rTMS in de Richtlijn 2024", sections: [] },
    relatedTreatment: {
      title: "rTMS bij Depressie",
      slug: "depressie"
    }
  },
  {
    slug: "verschil-rtms-ect",
    title: "Wat is het verschil tussen rTMS en ECT?",
    metaTitle: "rTMS vs ECT | Verschillen & Keuzes | rtms-behandeling.nl",
    metaDescription: "ECT of rTMS? We leggen de grote verschillen uit in impact, bijwerkingen en ziekenhuisopnames.",
    focusKeyword: "rTMS vs ECT verschil",
    category: "Educatief",
    date: "18 maart 2026",
    readingTime: "7 min",
    excerpt: "Zijn magneetpulsen hetzelfde als elektroshocks? Een duidelijk overzicht van de grote verschillen.",
    content: { h1: "Verschil rTMS en ECT", sections: [] },
    relatedTreatment: {
      title: "rTMS bij Depressie",
      slug: "depressie"
    }
  },
  {
    slug: "rtms-ouderen-depressie",
    title: "rTMS bij ouderen met depressie: veilig en effectief",
    metaTitle: "rTMS bij Ouderen | Veilige Zorg | rtms-behandeling.nl",
    metaDescription: "Depressie bij senioren behandelen met rTMS. Een veilig alternatief voor medicatie bij kwetsbare doelgroepen.",
    focusKeyword: "rTMS ouderen depressie",
    category: "Educatief",
    date: "17 maart 2026",
    readingTime: "6 min",
    excerpt: "Bij ouderen zijn medicatie-bijwerkingen extra risicovol. rTMS biedt een veilig en mild alternatief.",
    content: { h1: "rTMS bij ouderen", sections: [] },
    relatedTreatment: {
      title: "rTMS bij Depressie",
      slug: "depressie"
    }
  },
  {
    slug: "slaapproblemen-rtms",
    title: "Slaapproblemen en depressie: hoe rTMS beide kan verbeteren",
    metaTitle: "rTMS bij Slaapproblemen | Beter Slapen | rtms-behandeling.nl",
    metaDescription: "Slecht slapen door depressie? Ontdek hoe rTMS helpt om het slaapritme te herstellen via neurologische weg.",
    focusKeyword: "rTMS slaapproblemen",
    category: "Educatief",
    date: "16 maart 2026",
    readingTime: "6 min",
    excerpt: "Wanneer het brein tot rust komt, verbetert de slaap. We leggen de relatie tussen rTMS en nachtrust uit.",
    content: { h1: "Slaap en rTMS", sections: [] },
    relatedTreatment: {
      title: "rTMS bij Depressie",
      slug: "depressie"
    }
  },
  {
    slug: "rtms-onderhoudsbehandeling",
    title: "Onderhoudsbehandeling met rTMS: terugval voorkomen na herstel",
    metaTitle: "rTMS Onderhoudssessies | Terugvalpreventie | rtms-behandeling.nl",
    metaDescription: "Blijvend herstel na rTMS? Lees meer over de mogelijkheden van onderhoudssessies om terugval te voorkomen.",
    focusKeyword: "rTMS onderhoudssessies terugval",
    category: "Praktisch",
    date: "15 maart 2026",
    readingTime: "5 min",
    excerpt: "U bent hersteld, maar wilt dat zo houden. We bespreken de mogelijkheden voor periodieke 'boost' sessies.",
    content: { h1: "Onderhoud en preventie", sections: [] },
    relatedTreatment: {
      title: "rTMS bij Depressie",
      slug: "depressie"
    }
  }
];
