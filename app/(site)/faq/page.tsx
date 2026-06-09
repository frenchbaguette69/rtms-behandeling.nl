import { Metadata } from 'next';
import Link from 'next/link';
import { FaChevronDown, FaQuestionCircle, FaInfoCircle, FaPhoneAlt, FaMapMarkerAlt, FaFileMedical, FaMoneyBillWave, FaStethoscope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen over rTMS | FAQ | rtms-behandeling.nl',
  description: 'Antwoorden op de meest gestelde vragen over rTMS: vergoeding, bijwerkingen, duur, locaties, aanmelden en meer. Alles wat u wilt weten over rTMS behandeling.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/faq/',
  },
  openGraph: {
    title: 'Veelgestelde Vragen over rTMS Behandeling',
    description: 'Vind antwoorden op al uw vragen over rTMS, van vergoeding tot bijwerkingen.',
    url: 'https://rtms-behandeling.nl/faq/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-faq.png',
        width: 1200,
        height: 630,
        alt: 'Meest gestelde vragen over rTMS behandeling',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

const faqData = [
  {
    category: "Over rTMS",
    icon: <FaInfoCircle />,
    questions: [
      {
        q: "Wat is rTMS precies?",
        a: "Repetitieve Transcraniële Magnetische Stimulatie (rTMS) is een behandeling waarbij met magnetische pulsen specifieke hersengebieden worden gestimuleerd. Bij depressie richten we ons op de prefrontale cortex om de activiteit te herstellen en neuroplasticiteit te bevorderen."
      },
      {
        q: "Is rTMS pijnlijk?",
        a: "De meeste patiënten ervaren geen pijn. Je voelt een tikkend gevoel op de schedel en hoort een tikkend geluid. Sommige mensen ervaren een lichte prikkeling op de hoofdhuid, maar dit went snel en vereist geen verdoving."
      },
      {
        q: "Hoe lang duurt een rTMS sessie?",
        a: "Een standaard sessie duurt doorgaans 20 tot 30 minuten. Inclusief voorbereiding bent u meestal binnen 45 minuten weer buiten."
      },
      {
        q: "Hoe snel merk ik effect van rTMS?",
        a: "Resultaten variëren, maar de meeste patiënten beginnen verbetering te merken na ongeveer 10 tot 15 sessies (circa 3 tot 4 weken behandeling)."
      },
      {
        q: "Wat zijn de bijwerkingen van rTMS?",
        a: "rTMS heeft weinig bijwerkingen. De meest voorkomende is een lichte, tijdelijke hoofdhuidgevoeligheid of lichte hoofdpijn direct na de sessie. In uiterst zeldzame gevallen kan een insult optreden, maar onze protocollen zijn erop gericht dit risico tot een absoluut minimum te beperken."
      },
      {
        q: "Is rTMS hetzelfde als ECT?",
        a: "Nee. Bij ECT (elektroshock) wordt onder narcose een insult opgewekt. rTMS gebruikt magnetisme, u bent volledig bij bewustzijn en er is geen sprake van geheugenverlies of narcose-gerelateerde bijwerkingen."
      },
      {
        q: "Kan ik na een rTMS sessie autorijden?",
        a: "Ja. Omdat er geen narcose of medicatie wordt gebruikt die de rijvaardigheid beïnvloedt, kunt u direct na de behandeling veilig zelfstandig aan het verkeer deelnemen."
      }
    ]
  },
  {
    category: "Vergoeding en Kosten",
    icon: <FaMoneyBillWave />,
    questions: [
      {
        q: "Wordt rTMS vergoed door de zorgverzekering?",
        a: "Ja, voor de indicatie therapieresistente depressie wordt rTMS sinds 2017 vergoed vanuit de basisverzekering. Voor andere indicaties zoals tinnitus of burn-out is vergoeding vaak nog niet standaard mogelijk."
      },
      {
        q: "Heb ik een verwijzing nodig?",
        a: "Ja, voor verzekerde zorg is een verwijsbrief van uw huisarts of psychiater voor de Specialistische GGZ (SGGZ) noodzakelijk."
      },
      {
        q: "Geldt mijn eigen risico ook voor rTMS?",
        a: "Ja, omdat de behandeling onder de basisverzekering valt, zal uw zorgverzekeraar eerst het wettelijk verplichte (en eventueel vrijwillig verhoogde) eigen risico verrekenen."
      },
      {
        q: "Wat als mijn zorgverzekeraar rTMS niet vergoedt?",
        a: "Indien er geen vergoeding mogelijk is vanuit de basisverzekering (bijvoorbeeld bij een andere diagnose), bieden wij de mogelijkheid voor particuliere trajecten. Neem contact op voor onze tarieven."
      }
    ]
  },
  {
    category: "Aanmelden en Intake",
    icon: <FaFileMedical />,
    questions: [
      {
        q: "Hoe meld ik mij aan?",
        a: "U kunt zich direct aanmelden via het formulier op onze website. Wij hebben vervolgens uw verwijsbrief nodig om de intake in te plannen."
      },
      {
        q: "Hoe lang duurt de wachttijd?",
        a: "Wij streven naar korte wachttijden. In de meeste gevallen kunt u binnen 1 tot 2 weken terecht voor een intakegesprek."
      },
      {
        q: "Wat gebeurt er tijdens de intake?",
        a: "Tijdens de intake bespreken we uw klachten en ziektegeschiedenis met een psychiater of GZ-psycholoog. We stellen vast of rTMS geschikt voor u is en maken een persoonlijk behandelplan."
      },
      {
        q: "Kan ik zelf een afspraak maken zonder verwijsbrief?",
        a: "U kunt contact opnemen voor informatie of een kennismaking, maar voor de daadwerkelijke start van een verzekerd traject is de verwijsbrief wettelijk verplicht."
      }
    ]
  },
  {
    category: "Behandeling",
    icon: <FaStethoscope />,
    questions: [
      {
        q: "Hoe vaak moet ik komen voor rTMS?",
        a: "Voor een optimaal effect adviseren wij 2 tot 4 sessies per week. Een volledig traject bestaat doorgaans uit 20 tot 30 sessies."
      },
      {
        q: "Kan ik rTMS combineren met antidepressiva?",
        a: "Ja, rTMS kan veilig gecombineerd worden met de meeste medicatie. Vaak zien we zelfs dat rTMS de effectiviteit van de medicatie versterkt."
      },
      {
        q: "Wat als rTMS niet werkt bij mij?",
        a: "Hoewel rTMS een hoog succespercentage heeft, werkt het niet bij iedereen. In dat geval evalueren we het traject tussentijds en bespreken we alternatieve behandelmogelijkheden."
      },
      {
        q: "Zijn er onderhoudsbehandelingen mogelijk?",
        a: "Ja, voor sommige patiënten is het raadzaam om na het hoofdtraject periodiek een onderhoudssessie te doen om het resultaat vast te houden."
      }
    ]
  },
  {
    category: "Locaties",
    icon: <FaMapMarkerAlt />,
    questions: [
      {
        q: "In welke plaatsen heeft u een kliniek?",
        a: "Wij hebben momenteel klinieken in Heiloo en Schiphol-Rijk."
      },
      {
        q: "Hoe bereikbaar zijn de locaties?",
        a: "Beide locaties zijn zeer goed bereikbaar met de auto en bieden gratis parkeren direct voor de deur. Ook met het openbaar vervoer zijn we goed te bereiken."
      },
      {
        q: "Kan ik bij beide locaties terecht?",
        a: "Absoluut. U kunt bij de aanmelding aangeven welke locatie uw voorkeur heeft."
      }
    ]
  }
];

const consolidatedFaqSchema = [
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
        "name": "Veelgestelde Vragen",
        "item": "https://rtms-behandeling.nl/faq/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(category => 
      category.questions.map(q => ({
        "@type": "Question",
        "name": q.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.a
        }
      }))
    )
  }
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedFaqSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* Hero */}
        <section className="relative w-full min-h-[50vh] flex flex-col justify-center py-24">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-70 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-faq.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">
              Veelgestelde Vragen
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl max-w-2xl mx-auto drop-shadow-sm font-medium">
              Heeft u vragen over rTMS-behandeling? Hier vindt u de antwoorden op de meest gestelde vragen over vergoeding, resultaten en het behandelproces.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            
            {faqData.map((section, sectionIdx) => (
              <div key={sectionIdx} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-2xl text-[#33C5F3]">{section.icon}</div>
                  <h2 className="text-3xl font-bold text-[#2b2e4a]">{section.category}</h2>
                </div>
                
                <div className="space-y-4">
                  {section.questions.map((item, qIdx) => (
                    <details key={qIdx} className="group bg-white border border-slate-200 rounded-lg overflow-hidden transition-all hover:border-[#33C5F3]/50">
                      <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-lg text-slate-700 hover:text-[#33C5F3]">
                        {item.q}
                        <FaChevronDown className="text-sm transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}

            {/* Support Block */}
            <div className="mt-20 bg-white p-10 rounded-xl border border-slate-200 shadow-sm text-center">
              <FaQuestionCircle className="text-5xl text-[#33C5F3] mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-[#2b2e4a] mb-4">Vraag nog niet beantwoord?</h2>
              <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                Staat uw vraag er niet tussen? Ons team van specialisten staat klaar om u verder te helpen met persoonlijk advies.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-[#33C5F3] text-white font-bold rounded-full hover:bg-[#2b2e4a] transition-colors">
                  Stel uw vraag
                </Link>
                <Link href="tel:0850604388" className="px-8 py-4 border-2 border-[#33C5F3] text-[#33C5F3] font-bold rounded-full hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                  <FaPhoneAlt size={16} /> 085-0604388
                </Link>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
