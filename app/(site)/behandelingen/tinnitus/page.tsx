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
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center py-20 pb-24 overflow-hidden">
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

        {/* Herkenning */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Herken je dit?</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">Heb je last van een constante piep, ruis of bromtoon in je oren die er altijd is, ook als het stil is? Misschien slaap je erdoor slecht, kost het je concentratie of merk je dat de spanning rondom het geluid steeds groter wordt. Als die klachten al langer dan zes maanden aanhouden en reguliere behandelingen onvoldoende helpen, dan kan een rTMS behandeling op maat mogelijk helpen.</p>
          </div>
        </section>

        {/* Wat is rTMS */}
        <section className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Wat is rTMS?</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">rTMS is een niet-invasieve behandeling waarbij zachte magnetische pulsen bepaalde gebieden in de hersenen stimuleren die bij chronisch oorsuizen overactief zijn geworden. Tijdens de behandeling wordt een rTMS-spoel tegen het hoofd geplaatst. De behandeling doet geen pijn en je bent gewoon bij bewustzijn. Omdat iedere situatie anders is, wordt eerst bekeken of rTMS passend kan zijn voor jouw klachten.</p>
          </div>
        </section>

        {/* Waarom overwegen */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Waarom mensen rTMS overwegen</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-slate-600 mb-6">Deze behandeling is voor je wanneer je:</p>
            <ul className="space-y-4">
              {[
                'al langer dan zes maanden last hebt van oorsuizen dat niet minder wordt',
                'slaapproblemen of concentratieproblemen hebt door het geluid',
                'eerder behandelingen hebt geprobeerd (zoals geluidstherapie) zonder voldoende resultaat',
                'op zoek bent naar een behandeling die ingrijpt op de bron van het geluid in de hersenen',
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
                'Vermindering van het volume of de hinderlijkheid van het suizen',
                'Betere nachtrust en meer rust in het dagelijks leven',
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
