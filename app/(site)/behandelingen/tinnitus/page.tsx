import { Metadata } from 'next';
import Link from 'next/link';
import { FaBellSlash, FaBrain, FaRegHospital, FaHandHoldingHeart, FaUserShield, FaChartLine, FaCheckCircle, FaStar, FaChevronDown, FaAssistiveListeningSystems, FaVolumeMute } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'rTMS bij Tinnitus | Behandeling Oorsuizen met Hersenstimulatie | rtms-behandeling.nl',
  description: 'Tinnitus (oorsuizen) kan met rTMS worden behandeld door hyperactieve hersengebieden te kalmeren. Niet-invasief en zonder bijwerkingen. Informeer naar de mogelijkheden.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/behandelingen/tinnitus/',
  },
  openGraph: {
    title: 'rTMS bij Tinnitus — Verlichting van Oorsuizen via Hersenstimulatie',
    description: 'Kalmeer het constante oorsuizen zonder medicatie. Ontdek hoe rTMS de auditieve cortex tot rust brengt.',
    url: 'https://rtms-behandeling.nl/behandelingen/tinnitus/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-tinnitus.png',
        width: 1200,
        height: 630,
        alt: 'Stille, geluidsdichte behandelruimte voor tinnitus patiënten',
      },
    ],
    locale: 'nl_NL',
    type: 'article',
  },
};

const tinnitusSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "rTMS bij Tinnitus — Repetitieve Transcraniële Magnetische Stimulatie",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Niet-invasieve hersenstimulatie waarbij magnetische pulsen specifieke hersengebieden activeren om tinnitus (oorsuizen) te behandelen.",
    "howPerformed": "Een magnetische spoel wordt op het hoofd geplaatst en geeft herhaaldelijk magnetische pulsen af aan de auditieve cortex.",
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Tinnitus"
      },
      {
        "@type": "MedicalIndication",
        "name": "Oorsuizen"
      }
    ],
    "status": "https://schema.org/ActiveActionStatus",
    "recognizingAuthority": {
      "@type": "Organization",
      "name": "Nederlandse Gezondheidsraad"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rtms-behandeling.nl/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Behandelingen",
        "item": "https://rtms-behandeling.nl/behandelingen/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "rTMS bij Tinnitus",
        "item": "https://rtms-behandeling.nl/behandelingen/tinnitus/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "rTMS Behandeling",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "87",
      "bestRating": "5",
      "worstRating": "1"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Zal de rTMS behandeling de piep in mijn oren helemaal laten verdwijnen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "rTMS garandeert in de meeste gevallen geen volledige verdwijning (genezing) van tinnitus. Het doel is het aanzienlijk verzwakken van het volume och het verminderen van de emotionele lijdensdruk, zodat het oorsuizen naar de achtergrond van uw bewustzijn verdwijnt."
        }
      },
      {
        "@type": "Question",
        "name": "Helpt rTMS ook bij gehoorverlies of alleen tegen de suis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "rTMS herstelt eventuele mechanische schade aan uw trommelvlies of trilhaartjes in het oor niet (gehoorverlies). Het pakt uitsluitend het neurologische fantoomgeluid aan dat in de hersenschors wordt gegenereerd."
        }
      },
      {
        "@type": "Question",
        "name": "Doet de magnetische puls pijn aan mijn oren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee. Terwijl u de spoel wel hoort 'tikken' (wat wordt gedempt met oordoppen zodat het absoluut geen gehoorschade oplevert), wekt de magnetische stimulatie zelf geen geluid op in uw oren. Het is een pijnloos neurologisch proces."
        }
      },
      {
        "@type": "Question",
        "name": "Wordt rTMS voor tinnitus vergoed in Nederland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee. Tinnitus als enkelvoudige klacht is momenteel een 'vrije vestiging' indicatie en valt NIET onder de vergoede GGZ of basisverzekering voor rTMS. Tenzij er sprake is van zware, gediagnosticeerde therapieresistente depressie ten gevolge van de tinnitus, zult u dit traject veelal zelf moeten bekostigen."
        }
      },
      {
        "@type": "Question",
        "name": "Hoelang duurt het voordat ik verschil merk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meestal bieden we een intensief proefprotocol aan van 10 sessies om te meten of uw neurale netwerken receptief zijn. Indien responsief, kunt u na een paar weken een stabilisatie of daling in de Tinnitus Handicap Inventory (THI) score merken."
        }
      }
    ]
  }
];

export default function BehandelingTinnitus() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tinnitusSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center py-20 pb-24">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-tinnitus.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              rTMS bij Tinnitus — <br className="hidden md:block" />
              Verlichting van Oorsuizen via Hersenstimulatie
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
              Doorbreek de gekmakende ruis. Kalmeer de overactieve gehoorcentra in de hersenen met pijnloze magneetstimulatie zonder medicatie.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact/" className="flex justify-center items-center px-10 py-5 bg-[#33C5F3] text-white rounded-full font-bold hover:bg-[#29a5cd] transition shadow-lg text-lg">
                Informeer naar particuliere trajecten
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Wat is tinnitus en hoe ontstaat het in de hersenen? */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Wat is tinnitus en hoe ontstaat het in de hersenen?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Tinnitus is het horen van een geluid—zoals een constante hoge piep, geruis of een bromtoon—dat niet uit de omgeving afkomstig is. Hoewel tinnitus vaak begint na gehoorschade (bijvoorbeeld in het mechanisme in uw binnenoor of bij de gehoorzenuw), bevindt het eigenlijke probleem waar u last van heeft zich <strong>in de hersenen</strong>.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Als reactie op het ontbreken van normale geluidsprikkels vanuit het oor, worden de hoorcentra in uw hersenschors (de auditieve cortex) hyperactief. Vergelijkbaar met "fantoompijn" na een amputatie, gaat het brein fantoomgeluid produceren. Als tinnitus chronisch wordt, ontstaat er vaak een slopende feedbacklus met het emotiecentrum in uw brein (voor angst en stress) en het slaapwaaksysteem. Het geluid wordt als levensbedreigend geïnterpreteerd, waardoor u in een permanente alarmfase staat.
              </p>
            </div>

            <div className="bg-slate-50 p-10 border-l-[6px] border-[#33C5F3] relative object-cover h-full">
               <div className="absolute top-0 right-0 p-6 text-slate-200"><FaBrain className="text-9xl" /></div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Het "Fantoomgeluid"</h2>
                 <p className="text-slate-600 leading-relaxed mb-6">
                   Tinnitus is geen oorgeneeskundig probleem meer zodra het chronisch wordt; het is een neurobiologisch fenomeen. KNO-artsen geven vaak de moed op en zeggen: "leer er maar mee leven," maar neurowetenschappers zoeken inmiddels met succes de oplossing direct in de hersenschors.
                 </p>
               </div>
            </div>

          </div>
        </section>

        {/* 3. Hoe werkt rTMS bij tinnitus? */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            
            <div className="h-full min-h-[440px] bg-white border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center p-6 relative">
               <div className="w-full aspect-[4/3] bg-slate-100 flex items-center justify-center text-[#33C5F3] mb-6">
                <FaVolumeMute className="text-[120px]" />
               </div>
               <p className="text-sm text-slate-500 italic max-w-sm mx-auto">Figuur: rTMS helpt het hyperactieve 'aan' signaal rondom het temporale auditieve centrum tot rust te brengen.</p>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Hoe werkt rTMS bij tinnitus?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                Repetitieve Transcraniële Magnetische Stimulatie (rTMS) wekt via een spoel magnetische velden op die uw schedel moeiteloos passeren en de zenuwcellen in uw hersenschors beïnvloeden. Hoe we rTMS inzetten bij Tinnitus is echter anders dan bij depressie.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Targeting van de Auditieve Cortex</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Bij de behandeling van oorsuizen plaatsen we de spoel doorgaans boven de tijdelijke kwab aan de zijkant van het hoofd (de temporale cortex of temporopariëtale junctie). We gebruiken een specifiek <strong>laagfrequent protocol</strong> (inhiberend).
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Dit trage ritme van pulsen is ontworpen om de abnormale vuursnelheid van die hyperactieve auditieve netwerken af te remmen. We verzwakken letterlijk het "volume" van de hersengebieden die het fantoomgeluid onafgebroken produceren of opschalen. Door deze neuroplasticiteit kan het volume van de fluit of suis structureel naar de achtergrond gedrukt worden.
              </p>

            </div>

          </div>
        </section>

        {/* 4. Wat zijn de resultaten? / 5. Voor wie is het geschikt? */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            
            <div>
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-[#33C5F3] mb-6 shadow-sm text-xl"><FaChartLine /></div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Wat zijn de resultaten?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-6"></div>
              <p className="text-slate-600 leading-relaxed mb-4">Er heerst helaas veel foute informatie online. rTMS is momenteel (nog) <strong className="text-slate-900">géén wondermiddel dat 100% garant staat voor stilte</strong>. Klinische realiteit vereist realistische verwachtingen:</p>
              <ul className="space-y-4 text-slate-600 leading-relaxed">
                <li className="flex items-start gap-4">
                  <span className="text-[#33C5F3] mt-1"><FaCheckCircle /></span>
                  <strong>Succesratio's:</strong> Studies, en onze ervaringen, tonen aan dat ongeveer 40% tot 60% van de gepaste kandidaten een merkbare, positieve verlaging van de "Tinnitus Handicap score" ervaart na een testtraject.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#33C5F3] mt-1"><FaCheckCircle /></span>
                  <strong>Lijdensdruk:</strong> Veelal verdwijnt de piep niet, maar verdwijnt de slopende 'onrust' rondom het geluid. Patiënten kunnen weer doorslapen en werken met focus. 
                </li>
              </ul>
            </div>

            <div>
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-[#33C5F3] mb-6 shadow-sm text-xl"><FaAssistiveListeningSystems /></div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Voor wie is rTMS bij tinnitus geschikt?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-6"></div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Wanneer KNO-behandelingen (inclusief het uitsluiten van tumoren of de ziekte van Menière) zijn vastgelopen en de klachten langer duren dan 6 maanden, spreekt men van chronische tinnitus. U bent een potentiële kandidaat als:
              </p>
               <ul className="space-y-3 text-slate-600 leading-relaxed list-disc list-inside ml-2">
                 <li>Het suizen ondraaglijk is en resulteert in stemmings- of slaapproblemen.</li>
                 <li>U geen hoortoestel of ruismaskeerder (voldoende) kunt tolereren.</li>
                 <li>U op zoek bent naar een traject naast cognitieve gedragstherapie en accepteert dat het volume 'verlagen', en niet absolute stilte, het voornaamste medische doelwit is.</li>
               </ul>
            </div>

          </div>
        </section>

        {/* 6. Is rTMS bij tinnitus vergoed? */}
        <section className="py-24 bg-[#2b2e4a] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-3xl mx-auto mb-6 text-white border border-[#33C5F3] shadow-lg">
              <FaUserShield />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Is rTMS bij tinnitus vergoed?</h2>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-10"></div>
            
            <div className="bg-white/5 border border-white/10 p-8 text-left rounded-lg shadow-sm mb-10">
               <h3 className="text-2xl font-bold mb-4 text-[#33C5F3]">Nee, in nagenoeg alle gevallen niet.</h3>
               <p className="text-slate-300 text-lg leading-relaxed mb-4">
                 Transparantie is in de medische sector essentieel. Tinnitus is (in tegenstelling tot therapieresistente depressie) in Nederland <strong>géén goedgekeurde indicatie</strong> voor vergoeding uit het basispakket (GGZ) voor hersenstimulatie. 
               </p>
               <p className="text-slate-300 text-lg leading-relaxed">
                 Dit betekent dat alle consulten en trajecten specifiek gericht op onvermengd oorsuizen, via onze klinieken veelal op <strong>particuliere basis</strong> door de patiënt zelf dienen te worden bekostigd. De enige zeldzame uitzondering vormt het scenario waarbij de Tinnitus dusdanig escalerend is geweest, dat onze psychiater op de voorgrond een zware 'Therapieresistente Depressie' (met suïcidaliteit / uitval) vaststelt die als hoofddoel behandeld wordt. 
               </p>
            </div>

            <Link href="/contact/" className="inline-block px-10 py-5 bg-white text-[#2b2e4a] font-bold hover:bg-slate-100 transition-colors shadow-lg rounded-full text-lg">
                Vraag onze actuele particuliere tarieven op
            </Link>
          </div>
        </section>

        {/* 7. Veelgestelde vragen over rTMS bij tinnitus */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Veelgestelde vragen over rTMS bij tinnitus</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto"></div>
            </div>
            
            <div className="space-y-0">
              {(tinnitusSchema[3] as any).mainEntity.map((faq: any, idx: number) => (
                <details key={idx} className="group border-b border-slate-200 py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex justify-between items-center font-bold text-slate-900 text-xl hover:text-[#33C5F3] transition-colors">
                    {faq.name}
                    <span className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center transition-colors group-hover:border-[#33C5F3] group-open:bg-[#33C5F3] group-open:border-[#33C5F3] group-open:text-white group-open:rotate-45">
                      <FaChevronDown className="w-3 h-3 group-open:hidden" />
                      <div className="w-4 h-0.5 bg-white hidden group-open:block" />
                    </span>
                  </summary>
                  <p className="text-slate-600 mt-6 leading-relaxed text-lg max-w-3xl">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Locaties (Aanmelden) */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Wilt u de rust deels terug?</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Tinnitus is slopend. Wij kunnen u helpen onderzoeken of uw hersencircuits reageren op onze magneetstimulatie-protocollen.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact/" className="px-10 py-5 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-sm rounded-full text-lg">
                Stel uw vragen aan onze specialisten
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
