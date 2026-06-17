import { Metadata } from 'next';
import Link from 'next/link';
import { FaHeartbeat, FaBrain, FaRegHospital, FaHandHoldingHeart, FaUserShield, FaChartLine, FaCheckCircle, FaStar, FaChevronDown, FaUsers, FaWalking, FaUsersSlash } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'rTMS bij Angststoornis | Behandeling zonder Medicatie | rtms-behandeling.nl',
  description: 'rTMS biedt uitkomst bij gegeneraliseerde angststoornis, sociale fobie en paniekstoornis. Niet-invasief, weinig bijwerkingen. Locaties in Heiloo en Schiphol-Rijk.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/behandelingen/angststoornis/',
  },
  openGraph: {
    title: 'rTMS bij Angststoornis — Rust in uw hoofd zonder zware medicatie',
    description: 'rTMS biedt uitkomst bij gegeneraliseerde angststoornis, sociale fobie en paniekstoornis. Niet-invasief, weinig bijwerkingen.',
    url: 'https://rtms-behandeling.nl/behandelingen/angststoornis/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-angststoornis.png',
        width: 1200,
        height: 630,
        alt: 'Therapieruimte met focus op ontspanning en rTMS apparatuur',
      },
    ],
    locale: 'nl_NL',
    type: 'article',
  },
};

const anxietySchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "rTMS bij Angststoornis — Repetitieve Transcraniële Magnetische Stimulatie",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Niet-invasieve hersenstimulatie waarbij magnetische pulsen specifieke hersengebieden activeren om angststoornissen te behandelen.",
    "howPerformed": "Een magnetische spoel wordt op het hoofd geplaatst en geeft herhaaldelijk magnetische pulsen af aan de prefrontale cortex.",
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Angststoornis"
      },
      {
        "@type": "MedicalIndication",
        "name": "Paniekstoornis"
      },
      {
        "@type": "MedicalIndication",
        "name": "Sociale Fobie"
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
        "name": "rTMS bij Angststoornis",
        "item": "https://rtms-behandeling.nl/behandelingen/angststoornis/"
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
        "name": "Wat is het verschil tussen rTMS voor depressie en voor angst?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bij depressie stimuleren we vaak de linker hersenhelft (hoogfrequent) om onderactieve netwerken te activeren. Bij angstklachten gebruiken we meestal laagfrequente pulsen aan de rechterzijde om de overactieve, angst-producerende netwerken (zoals de hyperactieve amygdala) juist te kalmeren."
        }
      },
      {
        "@type": "Question",
        "name": "Zal rTMS een paniekaanval uitlokken?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee. De behandeling zelf is ontworpen om uw hersenactiviteit te reguleren en kalmeren. De pulsen zijn pijnloos and het ritme wordt vaak als rustgevend ervaren. Onze behandelaren zijn daarnaast speciaal getraind in het begeleiden van cliënten met paniekklachten."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik stoppen met mijn kalmeringsmiddelen (benzodiazepinen)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bepaalde rustgevende medicatie (zoals oxazepam of diazepam) kan de motorische drempelwaarde van uw hersenen beïnvloeden en de effectiviteit van de magneetstimulatie verminderen. Wij bespreken altijd voorafgaand aan de behandeling een veilig en verantwoord (afbouw)plan."
        }
      },
      {
        "@type": "Question",
        "name": "Helpt rTMS specifiek bij PTSS of telt dat ook als angst?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hoewel PTSS sterk gepaard gaat met angst, is het een wezenlijk andere klinische diagnose. rTMS kan bij PTSS zeer effectief zijn (door netwerken rondom trauma en emotieregulatie te beïnvloeden). We hanteren hiervoor echter een ander protocol dan voor een gegeneraliseerde angststoornis."
        }
      },
      {
        "@type": "Question",
        "name": "Wordt rTMS bij angst vergoed vanuit de basisverzekering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Nederland is de vergoeding van rTMS momenteel formeel gekoppeld aan de indicatie 'therapieresistente depressie'. Als angstklachten uw primaire diagnose zijn (zonder onderliggende depressie), wordt dit vaak niet direct vergoed. Soms is er sprake van een combinatie (comorbiditeit) waarbij vergoeding wel mogelijk is. Bekijk samen met ons de mogelijkheden."
        }
      }
    ]
  }
];

export default function BehandelingAngststoornis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(anxietySchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center py-20 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-angststoornis.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              rTMS bij Angststoornis
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
              Heb je last van angstklachten die je dagelijkse leven beperken?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="flex justify-center items-center px-10 py-5 bg-[#33C5F3] text-white rounded-full font-bold hover:bg-[#29a5cd] transition shadow-lg text-lg">
                Boek een intake
              </Link>
            </div>
          </div>
        </section>

        {/* Herkenning */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Herken je dit?</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">Heb je last van constante onrust, paniekaanvallen of een angst voor situaties waar je vroeger gewoon doorheen ging? Misschien vermijd je steeds meer dingen, merk je dat je nooit echt ontspant, of ben je chronisch gespannen zonder duidelijke reden. Als die angstklachten blijven terugkomen of onvoldoende verbeteren, dan kan een rTMS behandeling op maat mogelijk helpen.</p>
          </div>
        </section>

        {/* Wat is rTMS */}
        <section className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Wat is rTMS?</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">rTMS is een niet-invasieve behandeling waarbij zachte magnetische pulsen bepaalde gebieden in de hersenen stimuleren die betrokken zijn bij spanning en angstreacties. Tijdens de behandeling wordt een rTMS-spoel tegen het hoofd geplaatst. De behandeling doet geen pijn en je bent gewoon bij bewustzijn. Omdat iedere situatie anders is, wordt eerst bekeken of rTMS passend kan zijn voor jouw klachten.</p>
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
                'al langere tijd last hebt van angst en merkt dat therapie of medicatie onvoldoende helpt',
                'afhankelijk bent geworden van kalmeringsmiddelen en daar vanaf wilt',
                'merkt dat gesprekken met een psycholoog niet goed doordringen omdat de spanning te hoog is',
                'op zoek bent naar een behandeling zonder zware bijwerkingen',
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
                'Minder spanning en onrust in het dagelijks leven',
                'Betere nachtrust en meer rust in het hoofd',
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

        {/* 8. Veelgestelde vragen over rTMS bij angst */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Veelgestelde vragen over rTMS bij angst</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto"></div>
            </div>
            
            <div className="space-y-0">
              {(anxietySchema[3] as any).mainEntity.map((faq: any, idx: number) => (
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

        {/* 9. CTA Locaties */}
        <section className="py-24 bg-[#2b2e4a] text-white">
           <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">rTMS bij Angststoornissen in Noord-Holland</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Zet de stap naar een leven zonder constante onrust. Plan uw consult in op een van onze rustgevende, discrete klinieken in Heiloo of Schiphol-Rijk.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/locaties/heiloo/" className="px-8 py-4 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-sm rounded-full">
                Locatie Heiloo (Alkmaar)
              </Link>
              <Link href="/locaties/schiphol-rijk/" className="px-8 py-4 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-sm rounded-full">
                Locatie Schiphol-Rijk
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
