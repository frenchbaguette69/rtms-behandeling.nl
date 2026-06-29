import { Metadata } from 'next';
import Link from 'next/link';
import { FaBrain, FaRegHospital, FaHandHoldingHeart, FaUserShield, FaBaby, FaPills, FaChartLine, FaCheckCircle, FaStar, FaChevronDown } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'rTMS bij Depressie | Vergoed & Bewezen Effectief | rtms-behandeling.nl',
  description: 'rTMS is sinds 2017 vergoed door de basisverzekering voor depressie waarbij antidepressiva niet werken. 30-70% van de patiënten ervaart significante verbetering. Vraag een intake aan in Heiloo of Schiphol-Rijk.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/behandelingen/depressie/',
  },
  openGraph: {
    title: 'rTMS bij Depressie — Medicatievrije behandeling met bewezen resultaat',
    description: 'Nieuwe hoop bij depressie. Ontdek de bewezen effectieve en veilige rTMS behandeling.',
    url: 'https://rtms-behandeling.nl/behandelingen/depressie/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-depressie.png',
        width: 1200,
        height: 630,
        alt: 'Serene behandelruimte met rTMS spoel',
      },
    ],
    locale: 'nl_NL',
    type: 'article',
  },
};

const depressionSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "rTMS bij Depressie — Repetitieve Transcraniële Magnetische Stimulatie",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Niet-invasieve hersenstimulatie waarbij magnetische pulsen specifieke hersengebieden activeren om depressie te behandelen.",
    "howPerformed": "Een magnetische spoel wordt op het hoofd geplaatst en geeft herhaaldelijk magnetische pulsen af aan de prefrontale cortex.",
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Depressie"
      },
      {
        "@type": "MedicalIndication",
        "name": "Therapieresistente Depressie"
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
        "name": "rTMS bij Depressie",
        "item": "https://rtms-behandeling.nl/behandelingen/depressie/"
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
        "name": "Wat is het slagingspercentage van rTMS bij depressie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wetenschappelijk onderzoek en onze klinische praktijk tonen aan dat 30% tot 70% van de patiënten met een therapieresistente depressie een significante klinische verbetering of zelfs volledige remissie ervaart."
        }
      },
      {
        "@type": "Question",
        "name": "Kom ik in aanmerking voor vergoeding vanuit de basisverzekering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, rTMS bij depressie wordt in Nederland vergoed vanuit uw basisverzekering wanneer u bent gediagnosticeerd met een therapieresistente depressie (doorgaans na twee onsuccesvolle medicatietrajecten of psychotherapie)."
        }
      },
      {
        "@type": "Question",
        "name": "Hoelang duurt het voordat ik effect merk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De meeste patiënten merken na 10 tot 15 sessies (binnen 2 tot 3 weken) de eerste positieve effecten, zoals meer energie en een lichtere stemming. Een volledig traject beslaat gemiddeld 20 tot 30 sessies."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik stoppen met mijn antidepressiva tijdens rTMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, in veel gevallen is het juist effectief om de rTMS behandeling uit te voeren in combinatie met uw huidige medicatie. Beslissingen over het afbouwen van medicatie worden altijd in overleg met uw behandelend psychiater genomen."
        }
      },
      {
        "@type": "Question",
        "name": "Doet de magnetische stimulatie pijn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De magneetstimulatie is niet-invasief en pijnloos. U voelt een tikkende sensatie op de hoofdhuid, vergelijkbaar met het ritme van een specht. Soms treedt lichte samentrekking van lokale spieren op, maar dit is ongevaarlijk."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de bijwerkingen van rTMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De bijwerkingen zijn zeer mild in vergelijking met antidepressiva. U ervaart geen gewichtstoename of verlies van libido. Soms is er sprake van milde, tijdelijke hoofdpijn direct na de sessie, die eenvoudig met paracetamol verholpen kan worden."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn de resultaten blijvend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, het doel van rTMS is het structureel hertrainen van de hersennetwerken (neuroplasticiteit). Voor veel patiënten is de verbetering langdurig. In sommige gevallen kan na een paar jaar een kort 'onderhoudstraject' aanbevolen worden."
        }
      },
      {
        "@type": "Question",
        "name": "Is rTMS veilig als ik zwanger ben of wil worden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "rTMS wordt vaak gezien als een uitstekend alternatief tijdens de zwangerschap, omdat er geen systemische medicatie met risico's voor de foetus aan te pas komt. Overleg uiteraard altijd de risico's en baten met onze psychiaters."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe combineer ik dit met mijn werk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een sessie duurt ongeveer 20 minuten. U hoeft niet te herstellen of uit te rusten, en mag direct daarna weer autorijden of aan het werk gaan. We plannen sessies zoveel mogelijk op tijden die passen in uw schema."
        }
      },
      {
        "@type": "Question",
        "name": "Wat gebeurt er tijdens een sessie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "U zit comfortabel in een behandelstoel. De behandelaar plaatst de spoel op een specifieke plek op uw hoofd. Gedurende de sessie hoort u tikjes. U bent volledig bij bewustzijn en kunt praten, lezen, of gewoon ontspannen."
        }
      }
    ]
  }
];

export default function BehandelingDepressie() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(depressionSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center py-20 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-60 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-depressie.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              rTMS bij Depressie
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
              Heb je last van somberheid, lusteloosheid of een zwaar gevoel dat maar niet weggaat?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="flex justify-center items-center px-10 py-5 bg-[#33C5F3] text-white rounded-full font-bold hover:bg-[#29a5cd] transition shadow-lg text-lg">
                direct aanmelden
              </Link>
            </div>
          </div>
        </section>

        {/* Herkenning */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Herken je dit?</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">Heb je last van aanhoudende somberheid, nergens meer plezier in kunnen vinden, of een vermoeidheid die geen verklaring lijkt te hebben? Misschien lukt het je ook niet meer om gewoon dingen op te pakken die je vroeger makkelijk afging. Als die klachten blijven terugkomen of onvoldoende verbeteren met therapie of medicatie, dan kan een rTMS behandeling op maat mogelijk helpen.</p>
          </div>
        </section>

        {/* Wat is rTMS */}
        <section className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Wat is rTMS?</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">rTMS is een niet-invasieve behandeling waarbij zachte magnetische pulsen bepaalde gebieden in de hersenen stimuleren die betrokken zijn bij stemming en energie. Tijdens de behandeling wordt een rTMS-spoel tegen het hoofd geplaatst. De behandeling doet geen pijn en je bent gewoon bij bewustzijn. Omdat iedere situatie anders is, wordt eerst bekeken of rTMS passend kan zijn voor jouw klachten.</p>
          </div>
        </section>

        {/* Waarom overwegen */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Waarom mensen rTMS overwegen bij depressie</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-slate-600 mb-6">Deze behandeling is voor jou wanneer je:</p>
            <ul className="space-y-4">
              {[
                'al een tijdje somber bent en merkt dat gesprekken of medicatie onvoldoende helpen',
                'bijwerkingen hebt van antidepressiva die je niet meer wilt accepteren',
                'op zoek bent naar een behandeling zonder pillen of operatie',
                'zwanger bent of wil worden en medicatie wil vermijden',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-[#33C5F3] mt-2 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Wat je kunt verwachten */}
        <section className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Wat je kunt verwachten</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <ul className="space-y-4">
              {[
                'Behandeling zonder medicatie',
                'Behandelplan afgestemd op jouw situatie',
                'Meer energie en een lichter gevoel',
                'Betere nachtrust en meer focus',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="text-[#33C5F3] text-xl">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gratis intake */}
        <section className="py-20 bg-[#2b2e4a] text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Plan een gratis intake</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-10">Tijdens een gratis consult bekijken we of rTMS passend kan zijn voor jouw situatie. Je krijgt in dit gesprek van 20 minuten met een arts persoonlijk advies en ruimte om vragen te stellen.</p>
            <Link href="/aanmelden/" className="inline-block px-10 py-5 bg-[#33C5F3] text-white font-bold rounded-full hover:bg-[#29a5cd] transition shadow-lg text-lg">
              Gratis intake aanvragen
            </Link>
          </div>
        </section>

        {/* 11. FAQ accordion */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Veelgestelde vragen over rTMS bij depressie</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto"></div>
            </div>
            
            <div className="space-y-0">
              {(depressionSchema[3] as any).mainEntity.map((faq: any, idx: number) => (
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

        {/* 12. Locatie CTA */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">rTMS bij depressie in Heiloo en Schiphol-Rijk</h2>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">Onze specialisten zijn op twee gemakkelijk te bereiken, moderne klinieken in Noord-Holland aanwezig. Bij ons bent u verzekerd van korte tot geen wachttijden en persoonlijke, toegewijde zorg.</p>
            <div className="mb-10">
              <Link href="/locaties/" className="text-sm font-bold text-[#33C5F3] border-b-2 border-[#33C5F3]/30 hover:border-[#33C5F3] transition-all uppercase tracking-widest">
                Bekijk onze locaties
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/locaties/heiloo/" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold hover:border-[#33C5F3] hover:text-[#33C5F3] transition-colors shadow-sm rounded">
                Bekijk locatie Heiloo
              </Link>
              <Link href="/locaties/schiphol-rijk/" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold hover:border-[#33C5F3] hover:text-[#33C5F3] transition-colors shadow-sm rounded">
                Bekijk locatie Schiphol-Rijk
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
