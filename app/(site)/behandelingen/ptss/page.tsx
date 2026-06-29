import { Metadata } from 'next';
import Link from 'next/link';
import { FaShieldAlt, FaBrain, FaRegHospital, FaHandHoldingHeart, FaUserShield, FaChartLine, FaCheckCircle, FaStar, FaChevronDown, FaEyeSlash, FaCompressAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'rTMS bij PTSS | Behandeling Posttraumatische Stressstoornis | rtms-behandeling.nl',
  description: 'PTSS behandelen met rTMS: niet-invasief, zonder herbelevingen op te roepen. Wetenschappelijk onderbouwde methode voor traumaverwerking. Locaties in Heiloo en Schiphol-Rijk.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/behandelingen/ptss/',
  },
  openGraph: {
    title: 'rTMS bij PTSS — Verlichting van traumaklachten zonder herbelevingen',
    description: 'Verwerk zware trauma\'s rustig en veilig. rTMS vermindert hyperarousal zonder pijnlijke herbelevingen.',
    url: 'https://rtms-behandeling.nl/behandelingen/ptss/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-ptss.png',
        width: 1200,
        height: 630,
        alt: 'Kalmerende, veilige behandelruimte voor traumaverwerking',
      },
    ],
    locale: 'nl_NL',
    type: 'article',
  },
};

const ptssSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "rTMS bij PTSS — Repetitieve Transcraniële Magnetische Stimulatie",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Niet-invasieve hersenstimulatie waarbij magnetische pulsen specifieke hersengebieden activeren om PTSS en traumaklachten te behandelen.",
    "howPerformed": "Een magnetische spoel wordt op het hoofd geplaatst en geeft herhaaldelijk magnetische pulsen af aan de prefrontale cortex of rDLPFC.",
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Posttraumatische stressstoornis (PTSS)"
      },
      {
        "@type": "MedicalIndication",
        "name": "Traumaverwerking"
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
        "name": "rTMS bij PTSS",
        "item": "https://rtms-behandeling.nl/behandelingen/ptss/"
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
        "name": "Moet ik tijdens de rTMS-behandeling praten over mijn trauma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee. Dit is het grootste verschil met therapieën zoals EMDR. rTMS herstelt uw hersenfunctie op een puur biologisch niveau. U kunt tijdens de twintig minuten durende sessie gewoon naar ontspannende muziek luisteren zonder dat u wordt gevraagd het trauma actief op te roepen."
        }
      },
      {
        "@type": "Question",
        "name": "Waarom werkte EMDR voorheen niet en rTMS mogelijk wel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EMDR vereist dat uw hersenen de traumatische herinneringen kunnen 'vasthouden' terwijl u afgeleid wordt. Bij cliënten met zware of complexe PTSS is de amygdala echter zo overprikkeld dat ze direct 'dissociëren' of in blinde paniek raken, waardoor EMDR blokkeert. rTMS verlaagt éérst die fysieke paniekreactie, waarna verwerking pas mogelijk wordt."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn er veel fysieke bijwerkingen van rTMS bij PTSS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De fysieke bijwerkingen zijn uiterst mild. Sommige patiënten ervaren lichte, voorbijgaande hoofdpijn direct na de stimulatie. Omdat u geen pijnlijke herbelevingen doormaakt, blijft de emotionele 'kater' die u na o.a. zware exposure-therapie hebt vaak uit."
        }
      },
      {
        "@type": "Question",
        "name": "Wordt de rTMS behandeling voor PTSS vergoed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Binnen de Nederlandse basisverzekering (GGZ) is de vergoeding van rTMS formeel gekoppeld aan 'therapieresistente depressie'. Omdat patiënten met zwaar en complex trauma in nagenoeg alle gevallen ook worstelen met ernstige secundaire depressies of uitputting, komt het behandeltraject na een uitgebreide intake via onze psychiater veelal in aanmerking voor vergoeding."
        }
      },
      {
        "@type": "Question",
        "name": "Hoelang duurt het traject gemiddeld?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor de meeste patiënten plannen we een intensief protocol van ongeveer 20 tot 30 sessies, vaak verdeeld over zo'n 2 tot 3 sessies per week gedurende anderhalve maand. Een doorlooptijd die overzichtelijk en goed te combineren is met rustroosters."
        }
      }
    ]
  }
];

export default function BehandelingPtss() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ptssSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center py-20 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-ptss.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              rTMS bij PTSS
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
              Heb je last van trauma dat je maar niet achter je kunt laten?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="flex justify-center items-center px-10 py-5 bg-[#33C5F3] text-white rounded-full font-bold hover:bg-[#29a5cd] transition shadow-lg text-lg">
                Intake aanvragen
              </Link>
            </div>
          </div>
        </section>

        {/* Herkenning */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Herken je dit?</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">Heb je last van herbelevingen, nachtmerries of een constant gevoel van alertheid dat niet weggaat? Misschien schrik je snel op, vermijd je bepaalde situaties of mensen, of voel je je innerlijk nooit echt veilig. Als die klachten blijven aanhouden en je te weinig vooruitkomt met bestaande behandelingen, dan kan een rTMS behandeling op maat mogelijk helpen.</p>
          </div>
        </section>

        {/* Wat is rTMS */}
        <section className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Wat is rTMS?</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">rTMS is een niet-invasieve behandeling waarbij zachte magnetische pulsen bepaalde gebieden in de hersenen stimuleren die bij PTSS overactief zijn geworden. Tijdens de behandeling word je niet gevraagd over het trauma te praten. De behandeling doet geen pijn en je bent gewoon bij bewustzijn. Omdat iedere situatie anders is, wordt eerst bekeken of rTMS passend kan zijn voor jouw klachten.</p>
          </div>
        </section>

        {/* Waarom overwegen */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Waarom mensen rTMS overwegen bij PTSS</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-slate-600 mb-6">Deze behandeling is voor jou wanneer je:</p>
            <ul className="space-y-4">
              {[
                'al eerder therapie hebt geprobeerd (zoals EMDR) maar dit te zwaar of te overweldigend vond',
                'merkt dat je systeem altijd \'aan\' staat en je nooit echt tot rust komt',
                'last hebt van slaapproblemen, herbeleving of emotionele uitbarstingen',
                'een veilige behandeling zoekt waarbij je niet opnieuw het trauma hoeft op te halen',
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
                'Behandeling zonder het trauma opnieuw te hoeven bespreken',
                'Behandelplan afgestemd op jouw situatie',
                'Meer innerlijke rust en minder overstimulatie',
                'Betere nachtrust en meer gevoel van veiligheid',
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

        {/* 9. Veelgestelde vragen */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Veelgestelde vragen</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto"></div>
            </div>
            
            <div className="space-y-0">
              {(ptssSchema[3] as any).mainEntity.map((faq: any, idx: number) => (
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

        {/* CTA Locaties */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Begin veilig aan uw herstel</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Zet een veilige stap uit uw vlucht-of-vecht respons. Wij plannen de sessies discreet en zonder wachtlijst in onze klinieken in Heiloo en Schiphol-Rijk (Noord-Holland).</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="px-10 py-5 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-sm rounded-full text-lg">
                Intake plannen
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
