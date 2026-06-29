import { Metadata } from 'next';
import Link from 'next/link';
import { FaSadTear, FaBrain, FaRegHospital, FaHandHoldingHeart, FaUserShield, FaChartLine, FaCheckCircle, FaStar, FaChevronDown, FaPills, FaUnlockAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Therapieresistente Depressie Behandelen met rTMS | rtms-behandeling.nl',
  description: 'Werken antidepressiva niet bij u? rTMS is dé erkende behandeling voor therapieresistente depressie. Vergoed, bewezen effectief, minimale bijwerkingen. Meld u aan.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/behandelingen/therapieresistente-depressie/',
  },
  openGraph: {
    title: 'Therapieresistente Depressie — rTMS als bewezen alternatief',
    description: 'Een nieuw medisch perspectief. Werken uw antidepressiva niet of zijn de bijwerkingen te zwaar? rTMS biedt een vergoede uitweg.',
    url: 'https://rtms-behandeling.nl/behandelingen/therapieresistente-depressie/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-trd.png',
        width: 1200,
        height: 630,
        alt: 'Geholpen worden aan therapieresistente depressie met veilige magneetstimulatie',
      },
    ],
    locale: 'nl_NL',
    type: 'article',
  },
};

const trdSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "rTMS bij Therapieresistente Depressie — Repetitieve Transcraniële Magnetische Stimulatie",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Niet-invasieve hersenstimulatie waarbij magnetische pulsen specifieke hersengebieden activeren om therapieresistente depressie (TRD) te behandelen.",
    "howPerformed": "Een magnetische spoel wordt op het hoofd geplaatst en geeft herhaaldelijk magnetische pulsen af aan de linker prefrontale cortex.",
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Therapieresistente Depressie"
      },
      {
        "@type": "MedicalIndication",
        "name": "Eénpolige Depressie"
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
        "name": "rTMS bij Therapieresistente Depressie",
        "item": "https://rtms-behandeling.nl/behandelingen/therapieresistente-depressie/"
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
        "name": "Wanneer spreekt men officieel van een therapieresistente depressie (TRD)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Nederland hanteren we veelal de klinische definitie dat u wordt gediagnosticeerd met TRD wanneer u ten minste twee verschillende soorten antidepressiva (met adequate dosis en duur) heeft geprobeerd zónder voldoende klinische verbetering."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn de effecten van rTMS blijvend voor TRD-patiënten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor de meerderheid van de patiënten die gunstig reageren op rTMS ontstaat er langdurige remissie, zeker in combinatie met cognitieve gedragstherapie. Omdat we neurale plasticiteit bevorderen, wordt uw brein fysiek sterker. Soms plannen we na verloop van tijd korte 'onderhoudssessies' in."
        }
      },
      {
        "@type": "Question",
        "name": "Kan rTMS Elektroconvulsietherapie (ECT) vervangen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vaak wel. rTMS wordt in de officiële richtlijnen gepositioneerd tussen zware farmacotherapie en ECT in. Het grote voordeel van rTMS is dat u geen narcose nodig heeft, er geen sprake is van epileptische insultenopwekking, en geheugenverlies (een veelvoorkomende bijwerking van ECT) afwezig is."
        }
      },
      {
        "@type": "Question",
        "name": "Wordt deze behandeling 100% vergoed door mijn verzekeraar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Sinds oktober 2017 heeft het Zorginstituut Nederland rTMS als bewezen effectief erkend voor TRD. Dit betekent dat het standaard in het basispakket zit van alle zorgverzekeraars (als onderdeel van Specialistische GGZ). U betaalt uitsluitend uw wettelijk eigen risico, mits beoordeeld door onze regiebehandelaar."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik tijdens het rTMS traject gewoon blijven autorijden of werken?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, absoluut. Een rTMS-sessie is volledig poliklinisch en vereist geen sedatie. U merkt geen acute sufheid en de concentratie blijft intact. Veel van onze patiënten plannen sessies in tussen hun (re-integratie) werkzaamheden door."
        }
      }
    ]
  }
];

export default function BehandelingTRD() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trdSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center py-20 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-trd.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              rTMS bij Therapieresistente Depressie
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
              Heb je al meerdere behandelingen geprobeerd maar kom je toch niet vooruit?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="flex justify-center items-center px-10 py-5 bg-[#33C5F3] text-white rounded-full font-bold hover:bg-[#29a5cd] transition shadow-lg text-lg">
                Direct aanmelden voor TRD intake
              </Link>
            </div>
          </div>
        </section>

        {/* Herkenning */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Herken je dit?</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">Heb je al antidepressiva geprobeerd, misschien zelfs meerdere, en merk je dat de somberheid toch blijft? Of heb je gesprekstherapie gevolgd maar onvoldoende resultaat gezien? Als je depressieve klachten blijven aanhouden ondanks behandelingen, dan spreken we van een therapieresistente depressie. Dan kan rTMS op maat mogelijk helpen.</p>
          </div>
        </section>

        {/* Wat is rTMS */}
        <section className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Wat is rTMS?</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">rTMS is een niet-invasieve behandeling waarbij zachte magnetische pulsen bepaalde gebieden in de hersenen stimuleren die bij depressie onvoldoende actief zijn. Tijdens de behandeling wordt een rTMS-spoel tegen het hoofd geplaatst. De behandeling doet geen pijn en je bent gewoon bij bewustzijn. Omdat iedere situatie anders is, wordt eerst bekeken of rTMS passend kan zijn voor jouw klachten.</p>
          </div>
        </section>

        {/* Waarom overwegen */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Waarom mensen rTMS overwegen bij therapieresistente depressie</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-slate-600 mb-6">Deze behandeling is voor jou wanneer je:</p>
            <ul className="space-y-4">
              {[
                'al twee of meer antidepressiva hebt geprobeerd zonder voldoende effect',
                'last hebt van bijwerkingen van medicatie die je niet meer wilt accepteren',
                'gesprekstherapie hebt gevolgd maar onvoldoende vooruitgang merkt',
                'op zoek bent naar een erkende, vergoede behandeling als alternatief voor zwaardere opties',
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
                'Vergoed vanuit de basisverzekering bij therapieresistente depressie',
                'Meer energie, een lichter gevoel en betere stemming',
                'Betere nachtrust en meer motivatie in het dagelijks leven',
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

                {/* 10. Veelgestelde vragen */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Veelgestelde vragen</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto"></div>
            </div>
            
            <div className="space-y-0">
              {(trdSchema[3] as any).mainEntity.map((faq: any, idx: number) => (
                <details key={idx} className="group border-b border-slate-200 py-6 cursor-pointer bg-white px-6 mb-2 rounded shadow-sm [&_summary::-webkit-details-marker]:hidden">
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
            <h2 className="text-4xl font-bold mb-6">Zet de stap uit het zwarte gat</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Laat u niet ontmoedigen door falende medicatie. Wij zijn experts in het behandelen van zware, resistente depressies in Noord-Holland.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="px-10 py-5 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-lg rounded-full text-lg">
                Boek een Intake
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
