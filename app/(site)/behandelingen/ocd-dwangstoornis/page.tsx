import { Metadata } from 'next';
import Link from 'next/link';
import { FaSyncAlt, FaBrain, FaRegHospital, FaHandHoldingHeart, FaUserShield, FaChartLine, FaCheckCircle, FaStar, FaChevronDown, FaLock, FaMicroscope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'rTMS bij OCD & Dwangstoornis | Bewezen Effectief | rtms-behandeling.nl',
  description: 'OCD (obsessief-compulsieve stoornis) reageert goed op rTMS-behandeling. Vergoed door zorgverzekering. Lees hoe rTMS dwanggedachten en -handelingen vermindert.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/behandelingen/ocd-dwangstoornis/',
  },
  openGraph: {
    title: 'rTMS bij OCD — Effectieve behandeling van dwanggedachten en -handelingen',
    description: 'Doorbreek de cirkel van dwanggedachten en obsessies met een klinisch bewezen, medicatievrije behandeling.',
    url: 'https://rtms-behandeling.nl/behandelingen/ocd-dwangstoornis/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-ocd.png',
        width: 1200,
        height: 630,
        alt: 'Georganiseerde, kalme behandelruimte met rTMS',
      },
    ],
    locale: 'nl_NL',
    type: 'article',
  },
};

const ocdSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "rTMS bij OCD & Dwangstoornis — Repetitieve Transcraniële Magnetische Stimulatie",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Niet-invasieve hersenstimulatie waarbij magnetische pulsen specifieke hersengebieden activeren om dwangstoornissen (OCD) te behandelen.",
    "howPerformed": "Een magnetische spoel wordt op het hoofd geplaatst en geeft herhaaldelijk magnetische pulsen af aan de mPFC of het SMA-gebied.",
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Obsessief-compulsieve stoornis (OCD)"
      },
      {
        "@type": "MedicalIndication",
        "name": "Dwangstoornis"
      }
    ],
    "status": "https://schema.org/ActiveActionStatus",
    "recognizingAuthority": {
      "@type": "Organization",
      "name": "FDA"
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
        "name": "rTMS bij OCD",
        "item": "https://rtms-behandeling.nl/behandelingen/ocd-dwangstoornis/"
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
        "name": "Werkt rTMS voor alle vormen van dwang (smetvrees, controledwang, gedachten)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Omdat rTMS inwerkt op de onderliggende neurologische aandrijflijn van de dwang (het filtermechanisme van de hersenen), is het effectief ongeacht hoe de dwang zich specifiek bij u uit (smetvrees, intrusies, tellen of controleren)."
        }
      },
      {
        "@type": "Question",
        "name": "Voel ik direct effect bij OCD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het hertrainen van overactieve neurologische paden kost tijd. Patiënten ervaren vaak na zo'n 10 tot 15 sessies de eerste veranderingen, zoals iets makkelijker de drang tot een handeling te kunnen negeren. Het volledige effect wordt na het traject opgebouwd, vaak in combinatie met ERP-therapie."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik speciale dingen doen tijdens de rTMS-sessie voor OCD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bij de behandeling van OCD wordt soms gewerkt met zogeheten 'provocatieprotocollen'. Uw behandelaar bespreekt kort uw specifieke dwangprikkel net vóór of tijdens de stimulatie. Dit activeert het specifieke dwangnetwerk in de hersenen, waardoor de magnetische pulsen daar exact en effectief op in kunnen werken."
        }
      },
      {
        "@type": "Question",
        "name": "Wordt de behandeling voor dwang / OCD vergoed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "rTMS behandeling wordt primair vergoed onder de indicatie 'therapieresistente depressie'. Omdat zware OCD bijna altijd gepaard gaat met sterke depressieve episodes, is er na een uitgebreide intake via onze psychiaters veelal een traject mogelijk dat binnen uw verzekering (GGZ) valt."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik rTMS volgen als ik al zware medicatie (zoals clomipramine) slik?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. rTMS is juist een sterk alternatief voor patiënten die onvoldoende baat hebben bij traditionele tricyclische antidepressiva of SSRI's. U kunt uw huidige medicatie tijdens de start van het rTMS traject gewoon blijven gebruiken, mits we dit uitgebreid screenen tijdens de intake."
        }
      }
    ]
  }
];

export default function BehandelingOcd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ocdSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center py-20 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-ocd.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              rTMS bij OCD — <br className="hidden md:block" />
              Effectieve behandeling van dwanggedachten
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
              Doorbreek de kortsluiting in uw brein. Herstel de controle over uw gedachten en handelingen zonder extra medicatie.
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
            <p className="text-lg text-slate-600 leading-relaxed">Heb je last van gedachten die steeds terugkomen en niet loslaten, of handelingen die je moet herhalen om de spanning te laten zakken? Misschien kost dat je al uren per dag en merk je dat therapie of medicatie onvoldoende houvast geeft. Als die klachten blijven aanhouden, dan kan een rTMS behandeling op maat mogelijk helpen.</p>
          </div>
        </section>

        {/* Wat is rTMS */}
        <section className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Wat is rTMS?</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">rTMS is een niet-invasieve behandeling waarbij zachte magnetische pulsen bepaalde gebieden in de hersenen stimuleren die bij OCD overactief zijn. Tijdens de behandeling wordt een rTMS-spoel tegen het hoofd geplaatst. De behandeling doet geen pijn en je bent gewoon bij bewustzijn. Omdat iedere situatie anders is, wordt eerst bekeken of rTMS passend kan zijn voor jouw klachten.</p>
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
                'merkt dat dwanggedachten of -handelingen je dagelijks leven bepalen',
                'al eerder therapie hebt geprobeerd maar er niet genoeg mee opschoot',
                'medicatie hebt geprobeerd zonder voldoende effect of met te veel bijwerkingen',
                'op zoek bent naar een behandeling die direct ingrijpt op de bron van de klacht',
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
                'Minder dwang en meer mentale rust',
                'Meer ruimte in je hoofd voor wat echt telt',
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

        {/* 10. Veelgestelde vragen over rTMS bij OCD */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Veelgestelde vragen over rTMS bij OCD</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto"></div>
            </div>
            
            <div className="space-y-0">
              {(ocdSchema[3] as any).mainEntity.map((faq: any, idx: number) => (
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Doorbreek uw repetitieve handelingen</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Meld u aan voor een traject. Wij zitten voor u klaar in onze gespecialiseerde locaties in Heiloo of Schiphol-Rijk (Noord-Holland).</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="px-10 py-5 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-sm rounded-full text-lg">
                Boek een intakegesprek
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
