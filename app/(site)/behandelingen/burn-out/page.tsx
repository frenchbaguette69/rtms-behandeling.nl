import { Metadata } from 'next';
import Link from 'next/link';
import { FaBatteryEmpty, FaBrain, FaRegHospital, FaHandHoldingHeart, FaUserShield, FaChartLine, FaCheckCircle, FaStar, FaChevronDown, FaBed, FaExclamationTriangle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'rTMS bij Burn-out | Herstel van Uitputting en Overbelasting | rtms-behandeling.nl',
  description: 'Burn-out uitgeput en niet meer verder kunnen? rTMS stimuleert hersengebieden die overbelast zijn geraakt. Bekijk hoe rTMS helpt bij herstel van burn-out.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/behandelingen/burn-out/',
  },
  openGraph: {
    title: 'rTMS bij Burn-out — Herstelbehandeling voor overbelaste hersenen',
    description: 'Burn-out uitgeput en niet meer verder kunnen? rTMS stimuleert hersengebieden die overbelast zijn geraakt.',
    url: 'https://rtms-behandeling.nl/behandelingen/burn-out/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-burnout.png',
        width: 1200,
        height: 630,
        alt: 'Serene herstelruimte met rTMS apparatuur gericht op rust',
      },
    ],
    locale: 'nl_NL',
    type: 'article',
  },
};

const burnoutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "rTMS bij Burn-out — Repetitieve Transcraniële Magnetische Stimulatie",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Niet-invasieve hersenstimulatie waarbij magnetische pulsen specifieke hersengebieden activeren om burn-out en chronische stress te behandelen.",
    "howPerformed": "Een magnetische spoel wordt op het hoofd geplaatst en geeft herhaaldelijk magnetische pulsen af aan de prefrontale cortex.",
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Burn-out"
      },
      {
        "@type": "MedicalIndication",
        "name": "Chronische Vermoeidheid"
      },
      {
        "@type": "MedicalIndication",
        "name": "Overspannenheid"
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
        "name": "rTMS bij Burn-out",
        "item": "https://rtms-behandeling.nl/behandelingen/burn-out/"
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
        "name": "Helpt rTMS specifiek bij chronische vermoeidheid door burn-out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Burn-out gerelateerde vermoeidheid ontstaat vaak doordat het brein constant neurologisch in de 'aan' stand staat. rTMS helpt de fysiologische balans in de hersenen te herstellen, wat bij veel patiënten leidt tot een aanzienlijke terugkeer van fysieke en mentale energie."
        }
      },
      {
        "@type": "Question",
        "name": "Zal rTMS mijn slaap verbeteren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Slaapproblemen zijn een kernelement van burn-out door de ontregelde stress-as (HPA-as). Omdat rTMS gericht is op het herstellen van de emotieregulatie en het verlagen van de constante hyperarousal, rapporteren veel patiënten na enkele weken een betere slaapkwaliteit."
        }
      },
      {
        "@type": "Question",
        "name": "Hoelang duurt een rTMS behandelingstraject voor burn-out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een gangbaar traject voor burn-out klachten omvat zo'n 20 tot 30 sessies, verspreid over 4 tot 6 weken. U komt gedurende deze periode meerdere keren per week voor een sessie van zo'n 20 tot 30 minuten."
        }
      },
      {
        "@type": "Question",
        "name": "Wordt rTMS bij burn-out vergoed door de verzekering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een 'zuivere' burn-out diagnose wordt door verzekeraars vaak niet direct binnen de GGZ vergoed, laat staan met rTMS. Echter gaat ernstige burn-out vaak gepaard met een zware depressieve episode. Is er sprake van therapieresistente depressie ten gevolge van de burn-out, dan wordt rTMS vaak wél vergoed vanuit de basisverzekering."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik de behandeling combineren met een re-integratietraject?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absoluut. rTMS is medicatievrij en u kunt na de behandeling direct autorijden. Veel patiënten gebruiken rTMS als neurobiologische ondersteuning parallel aan hun re-integratie en psychologische coachingstrajecten."
        }
      }
    ]
  }
];

export default function BehandelingBurnout() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(burnoutSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center py-20 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-burnout.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              rTMS bij Burn-out
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
              Heb je het gevoel dat je accu leeg is en niet meer oplaadt?
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
            <p className="text-lg text-slate-600 leading-relaxed">Heb je last van extreme vermoeidheid die na slapen niet verdwijnt, moeite met concentreren, of een gevoel van compleet leeg zijn? Misschien heb je al maanden vrij maar kom je toch niet bij, of merk je dat je geen energie hebt voor dingen die je vroeger normaal vond. Als die klachten maar niet verbeteren, dan kan een rTMS behandeling op maat mogelijk helpen.</p>
          </div>
        </section>

        {/* Wat is rTMS */}
        <section className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Wat is rTMS?</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">rTMS is een niet-invasieve behandeling waarbij zachte magnetische pulsen bepaalde gebieden in de hersenen stimuleren die bij een burn-out overbelast zijn geraakt. Tijdens de behandeling wordt een rTMS-spoel tegen het hoofd geplaatst. De behandeling doet geen pijn en je bent gewoon bij bewustzijn. Omdat iedere situatie anders is, wordt eerst bekeken of rTMS passend kan zijn voor jouw klachten.</p>
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
                'al langere tijd in een burn-out zit en merkt dat rust alleen onvoldoende helpt',
                "last hebt van 'watten in het hoofd', vergeetachtigheid of concentratieproblemen",
                'emotioneel uitgeput bent en je zelfs kleine dingen te veel worden',
                'op zoek bent naar een behandeling zonder medicatie',
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
                'Meer mentale energie en helderheid',
                'Betere nachtrust en minder prikkelgevoeligheid',
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

                {/* 8. Veelgestelde vragen */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Veelgestelde vragen</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto"></div>
            </div>
            
            <div className="space-y-0">
              {(burnoutSchema[3] as any).mainEntity.map((faq: any, idx: number) => (
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
        <section className="py-24 bg-[#2b2e4a] text-white">
           <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Klaar om uw batterij verantwoord op te laden?</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Vraag vandaag nog een intake aan voor onze behandellocaties. Neem de controle over uw gezondheid weer terug zonder zware medicatie trajecten.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="px-10 py-5 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-lg rounded-full text-lg">
                Intake aanvragen
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
