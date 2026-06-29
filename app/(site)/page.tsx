import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaBrain, FaSadTear, FaHeartbeat, FaSyncAlt, FaCloud, FaBatteryQuarter, FaBell, FaStar, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'rTMS Behandeling Nederland | Heiloo & Schiphol-Rijk | rtms-behandeling.nl',
  description: 'Specialistische rTMS-kliniek met locaties in Heiloo en Schiphol-Rijk. Bewezen effectieve behandeling bij depressie, angst, OCD en burn-out. Vergoed door zorgverzekering. Vraag direct een intake aan.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/',
  },
  openGraph: {
    title: 'rTMS Behandeling — Effectief bij Depressie & Angst | 2 Locaties in Noord-Holland',
    description: 'Niet-invasieve hersenstimulatie voor mensen bij wie antidepressiva niet werken. Wetenschappelijk bewezen, vergoed, minimale bijwerkingen.',
    url: 'https://rtms-behandeling.nl/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-homepage.png',
        width: 1200,
        height: 630,
        alt: 'rTMS Behandelruimte warme lichtgevende atmosfeer',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

const homepageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "rTMS Behandeling Nederland",
    "url": "https://rtms-behandeling.nl",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rtms-behandeling.nl/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "rTMS Behandeling Nederland",
    "url": "https://rtms-behandeling.nl",
    "logo": "https://rtms-behandeling.nl/images/logo.png",
    "image": "https://rtms-behandeling.nl/images/og-homepage.png",
    "description": "Gespecialiseerde rTMS-kliniek voor behandeling van depressie, angst, OCD en PTSS.",
    "telephone": "085-0604388",
    "email": "info@rtms-behandeling.nl",
    "medicalSpecialty": "Psychiatry",
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
        "name": "Wordt rTMS vergoed door de zorgverzekering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "rTMS bij depressie wordt vergoed door de basisverzekering in Nederland, mits u voldoet aan de vergoedingsvoorwaarden. U heeft een verwijsbrief nodig van uw huisarts of psychiater en minimaal twee eerdere behandelingen met antidepressiva of psychotherapie moeten zonder resultaat zijn gebleven."
        }
      },
      {
        "@type": "Question",
        "name": "Is rTMS pijnlijk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "rTMS is over het algemeen niet pijnlijk. U kunt in het begin een tikkend gevoel of lichte druk op uw hoofd voelen bij de plek van de spoel. Dit ongemak neemt doorgaans af na de eerste sessies."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe lang duurt een rTMS behandeling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een volledige rTMS-behandeling bestaat doorgaans uit 20 tot 30 sessies, verspreid over 4 tot 6 weken. Elke sessie duurt ongeveer 45 minuten. U komt gemiddeld 2 tot 5 keer per week naar de kliniek."
        }
      },
      {
        "@type": "Question",
        "name": "Wanneer merk ik effect van rTMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sommige patiënten merken al na 5 tot 10 sessies een verbetering. Het volledige effect is doorgaans na 4 tot 6 weken merkbaar. Dit verschilt per persoon en per aandoening."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik na een rTMS sessie autorijden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, in de meeste gevallen kunt u na een rTMS-sessie gewoon autorijden. De behandeling heeft geen verdovend of sederend effect. Voelt u zich echter onwel, dan adviseren wij voorzichtigheid."
        }
      }
    ]
  }
];

export default function Homepage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero Edge-to-Edge with Trust Badges */}
        <section className="relative w-full min-h-[600px] flex flex-col justify-center py-20 pb-32 overflow-hidden">
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-40 z-10"></div>
          {/* Hero background image */}
          <div className="absolute inset-0 bg-[url('/images/og-homepage.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full mt-10">
            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-8 max-w-4xl drop-shadow-md">
              rTMS Behandeling<br className="hidden md:block" />{' '}
              Effectieve hulp bij depressie en angststoornissen
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-10 drop-shadow-sm">
              Niet-invasieve hersenstimulatie voor een duurzaam herstel. Wetenschappelijk bewezen effectief, zelfs wanneer medicatie of gesprekstherapie niet voldoende helpt.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Link href="/aanmelden/" className="flex justify-center items-center px-10 py-4 bg-[#33C5F3] text-white rounded-full font-bold hover:bg-[#29a5cd] transition shadow-lg text-lg">
                Vraag een intake aan
              </Link>
              <Link href="/wat-is-rtms/" className="flex justify-center items-center px-10 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/50 rounded-full font-bold hover:bg-white hover:text-[#2b2e4a] transition shadow-sm text-lg">
                Wat is rTMS?
              </Link>
            </div>

            {/* Thin divider style */}
            <div className="w-full h-px bg-white/40 mb-8 max-w-4xl"></div>
            
            {/* Trust Badges Minimalist Style */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-x-10 gap-y-4 text-white font-medium">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#33C5F3] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                Vergoed door zorgverzekering
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#33C5F3] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                Wetenschappelijk bewezen
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#33C5F3] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                BIG-geregistreerde specialisten
              </div>
            </div>
          </div>
        </section>

        {/* 2. Intro strip (3 Icons) */}
        <section className="bg-white py-16 border-b border-slate-100 relative z-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-[#33C5F3] flex items-center justify-center text-white mx-auto mb-6 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Niet-invasief</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">Geen chirurgie of verdoving nodig. De behandeling is 100% veilig en nagenoeg pijnloos.</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-[#33C5F3] flex items-center justify-center text-white mx-auto mb-6 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Medicatievrij</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">Behandel de symptomen zonder de vervelende bijwerkingen van traditionele antidepressiva.</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-[#33C5F3] flex items-center justify-center text-white mx-auto mb-6 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Vergoed</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">Onze behandelingen worden in veel gevallen volledig vergoed door jouw Nederlandse zorgverzekeraar.</p>
            </div>
          </div>
        </section>

        {/* 3. Wat is rTMS? */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Wat is rTMS?</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mb-8"></div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                rTMS staat voor Repetitieve Transcraniële Magnetische Stimulatie. Het is een geavanceerde, bewezen techniek waarbij specifieke hersengebieden (die betrokken zijn bij stemming) gericht worden gestimuleerd door middel van magnetische pulsen.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Deze theapie herstelt de natuurlijke balans in je brein, wat leidt tot een aanzienlijke vermindering van depressieve en angstige klachten. Het is een volwaardig alternatief voor medicatie.
              </p>
              
              <Link href="/wat-is-rtms/" className="flex items-center gap-3 group group-hover:text-[#33C5F3] transition-colors w-max">
                <div className="w-10 h-10 rounded-full border-2 border-[#33C5F3] flex items-center justify-center text-[#33C5F3] group-hover:bg-[#33C5F3] group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
                <span className="font-bold text-slate-900 group-hover:text-[#33C5F3]">Wat is rTMS?</span>
              </Link>
            </div>
            <div className="w-full aspect-square relative overflow-hidden rounded-lg shadow-md">
              <Image
                src="/rtmsbehandeling1.png"
                alt="rTMS behandeling sessie"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 4. Indicaties grid */}
        <section className="py-32 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Voor wie is rTMS geschikt?</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
              <p className="text-lg text-slate-600">rTMS is uiterst effectief bij diverse hardnekkige psychische aandoeningen, in het bijzonder wanneer andere benaderingen geen resultaat hebben geboden.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {[
                { title: 'Depressie', path: '/behandelingen/depressie/', icon: <FaSadTear />, desc: 'Duurzame verbetering bij somberheid, lusteloosheid en zware depressieve episodes.' },
                { title: 'Angststoornis', path: '/behandelingen/angststoornis/', icon: <FaHeartbeat />, desc: 'Kalmeert overactieve hersengebieden die verantwoordelijk zijn voor chronische angstgevoelens.' },
                { title: 'OCD / Dwangstoornis', path: '/behandelingen/ocd-dwangstoornis/', icon: <FaSyncAlt />, desc: 'Doorbreek het patroon van dwangmatig handelen en terugkerende obsessieve gedachten.' },
                { title: 'PTSS', path: '/behandelingen/ptss/', icon: <FaCloud />, desc: 'Reguleer emotionele reacties en verminder de verlammende impact van trauma en herbelevingen.' },
                { title: 'Burn-out', path: '/behandelingen/burn-out/', icon: <FaBatteryQuarter />, desc: 'Herstel cognitieve vaardigheden en energie niveaus na langdurige stress en emotionele uitputting.' },
                { title: 'Tinnitus', path: '/behandelingen/tinnitus/', icon: <FaBell />, desc: 'Verlicht oorsuizen of fantoomgeluiden door het auditieve netwerk in het brein te normaliseren.' },
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <div className="w-16 h-16 rounded-full bg-[#33C5F3] flex items-center justify-center text-white mb-6 text-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#33C5F3] transition-colors cursor-pointer">{item.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-1">{item.desc}</p>
                  <Link href={item.path} className="text-[#33C5F3] font-bold tracking-wide hover:text-[#29a5cd] transition-colors inline-block uppercase text-sm">
                    Lees verder
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <Link href="/behandelingen/" className="inline-block px-10 py-4 bg-[#2b2e4a] text-white font-bold rounded-full hover:bg-[#33C5F3] transition shadow-lg text-lg">
                Bekijk alle behandelingen
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Behandelproces (Clean Horizontal Tijdlijn) */}
        <section className="py-32 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Hoe werkt de rTMS behandeling?</h2>
                <div className="w-20 h-1 bg-[#33C5F3] mb-8"></div>
                <p className="text-lg text-slate-600 leading-relaxed">Elke sessie duurt gemiddeld 20 tot 45 minuten. U zit comfortabel in een stoel terwijl de spoel op de juiste positie wordt geplaatst. Na de behandeling kunt u direct naar huis. Autorijden is toegestaan.</p>
              </div>
              <div className="relative h-72 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/rtmsbehandeling2.png"
                  alt="rTMS behandeling apparatuur"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="relative">
              {/* Connecting line (desktop) */}
              <div className="hidden md:block absolute top-6 left-0 w-full h-px bg-slate-200 z-0"></div>
              
              <div className="grid md:grid-cols-5 gap-8 relative z-10">
                {[
                  { step: '1', title: 'Intake', desc: 'Telefonische of fysieke kennismaking.' },
                  { step: '2', title: 'Diagnose', desc: 'Uitgebreid psychiatrisch onderzoek.' },
                  { step: '3', title: 'Behandelplan', desc: 'Op maat gemaakt rTMS-protocol.' },
                  { step: '4', title: 'Sessies', desc: '20-30 sessies (ca. 20 minuten).' },
                  { step: '5', title: 'Nazorg', desc: 'Voortgangsevaluatie en nazorg.' }
                ].map((item, idx) => (
                  <div key={idx} className="relative text-center">
                    <div className="w-12 h-12 bg-white border-4 border-[#33C5F3] text-slate-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-sm">
                      {item.step}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                    <p className="text-slate-600 text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Vergoeding banner (Cyan styling) */}
        <section className="py-20 bg-[#33C5F3] text-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-2/3">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Vergoed door uw zorgverzekering</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Heeft u een verwijzing en betreft het therapieresistente depressie? Dan wordt de behandeling door vrijwel elke Nederlandse basisverzekering (GGZ) vergoed.
              </p>
            </div>
            <div>
              <Link href="/vergoeding-kosten/" className="inline-block px-10 py-4 bg-white text-[#33C5F3] font-bold rounded-full hover:bg-slate-50 transition shadow-lg whitespace-nowrap text-lg">
                Vergoed door zorgverzekering
              </Link>
            </div>
          </div>
        </section>

        {/* 7. Locaties */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Onze behandellocaties</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
              <p className="text-lg text-slate-600">Wij beschikken over twee moderne en goed bereikbare klinieken in Noord-Holland, altijd in de buurt.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Heiloo */}
              <div className="group flex flex-col">
                <div className="h-64 w-full mb-8 relative overflow-hidden border-b-[6px] border-[#33C5F3]">
                  <Image
                    src="/heilortmsbehandeling.jpeg"
                    alt="rTMS Kliniek Heiloo"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Locatie Heiloo</h3>
                <div className="text-slate-600 mb-8 space-y-3 flex-1 text-lg">
                  <p className="flex items-center gap-3"><span className="text-xl text-[#33C5F3]">📍</span> Kennemerstraatweg 464 unit 1.03, 1851 NG Heiloo</p>
                  <p className="flex items-center gap-3"><span className="text-xl text-[#33C5F3]">🚗</span> Gratis parkeren voor de deur</p>
                </div>
                <Link href="/locaties/heiloo/" className="text-[#33C5F3] font-bold tracking-wide hover:text-[#29a5cd] transition-colors inline-block uppercase text-sm">
                  Onze locatie in Heiloo
                </Link>
              </div>

              {/* Schiphol-Rijk */}
              <div className="group flex flex-col">
                <div className="h-64 bg-slate-200 w-full mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center border-b-[6px] border-[#33C5F3]">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-sm">[Foto Locatie Schiphol-Rijk]</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Locatie Schiphol-Rijk</h3>
                <div className="text-slate-600 mb-8 space-y-3 flex-1 text-lg">
                  <p className="flex items-center gap-3"><span className="text-xl text-[#33C5F3]">📍</span> Boeing Avenue 8, 1119 PB Schiphol-Rijk</p>
                  <p className="flex items-center gap-3"><span className="text-xl text-[#33C5F3]">✈️</span> Centraal naast de A4</p>
                </div>
                <Link href="/locaties/schiphol-rijk/" className="text-[#33C5F3] font-bold tracking-wide hover:text-[#29a5cd] transition-colors inline-block uppercase text-sm">
                  Onze locatie bij Schiphol
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Social Proof */}
        <section className="py-32 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-10 justify-between items-end mb-20">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Ervaringen van onze patiënten</h2>
                <div className="w-20 h-1 bg-[#33C5F3] mb-6"></div>
                <p className="text-lg text-slate-600">Wij hechten grote waarde aan zorg op maat. Lees hoe eerdere cliënten hun traject hebben ervaren.</p>
              </div>
              <div className="bg-white px-8 py-5 flex items-center gap-4 border border-slate-200 shadow-sm">
                <div className="text-[#33C5F3] flex tracking-tighter">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xl">4.8 / 5.0</div>
                  <div className="text-sm text-slate-500">Op basis van 120+ reviews</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { quote: "Na 10 jaar medicatie met veel bijwerkingen en weinig effect, heeft rTMS me eindelijk mijn leven teruggegeven. Ik voel me lichter en kan weer genieten.", author: "M. (42), Depressie" },
                { quote: "De behandeling voelde veilig en het team was enorm betrokken. Het is intensief, maar het is absoluut de moeite waard geweest voor mijn paniekaanvallen.", author: "K. (35), Angststoornis" },
                { quote: "Dankzij de sessies kon ik de dwangmatige gedachten loslaten. De combinatie met gesprekstherapie was goud waard.", author: "S. (28), OCD" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border-t-[8px] border-[#33C5F3] p-10 shadow-sm relative">
                   <p className="text-slate-600 italic leading-relaxed text-lg mb-8">
                    "{item.quote}"
                  </p>
                  <p className="font-bold text-slate-900 tracking-wide">— {item.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Wetenschappelijk bewijs */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Wetenschappelijk bewezen effectiviteit</h2>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-20"></div>
            
            <div className="grid md:grid-cols-3 gap-16">
              <div className="text-center">
                <div className="text-6xl font-black text-[#2b2e4a] mb-6">70%</div>
                <h4 className="font-bold text-slate-900 text-xl mb-4">Significante verbetering</h4>
                <p className="text-slate-600 leading-relaxed">Meerdere studies tonen aan dat 60% tot 70% van de patiënten met depressie een grote afname in klachten ervaart.</p>
              </div>
              <div className="text-center flex flex-col justify-center items-center">
                <div className="w-20 h-20 rounded-full bg-[#33C5F3] text-white flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <h4 className="font-bold text-slate-900 text-xl mb-4">Erkend door Gezondheidsraad</h4>
                <p className="text-slate-600 leading-relaxed">rTMS is officieel erkend en is veilig onderdeel van de landelijke richtlijnen voor psychiatrie.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black text-[#2b2e4a] mb-6">2017</div>
                <h4 className="font-bold text-slate-900 text-xl mb-4">Structurele Vergoeding</h4>
                <p className="text-slate-600 leading-relaxed">Sinds 2017 zit de behandeling van therapieresistente depressie standaard in het GGZ basispakket.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Team preview */}
        <section className="py-32 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Ontmoet ons team</h2>
                <div className="w-20 h-1 bg-[#33C5F3] mb-6"></div>
                <p className="text-lg text-slate-600">Onze BIG-geregistreerde psychiaters, psychologen en rTMS-technici zorgen voor uw herstel.</p>
              </div>
              <Link href="/team/" className="text-[#33C5F3] font-bold tracking-wide hover:text-[#29a5cd] transition-colors inline-block uppercase text-sm mb-4">
                Bekijk alle specialisten →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
              {[
                { name: 'Jan-Jaap Mol', title: 'Psychiater', image: '' },
                { name: 'Guido Smutzer', title: 'Psycholoog', image: '/guidomedewerker.webp' },
              ].map((member, i) => (
                <div key={i} className="text-center">
                  {member.image && <div className="w-full aspect-[3/4] mb-6 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}></div>}
                  <h4 className="font-bold text-slate-900 text-xl mb-1">{member.name}</h4>
                  <p className="text-[#33C5F3] font-medium">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. FAQ snippet */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Veelgestelde vragen</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-0">
              {(homepageSchema[2] as any).mainEntity.map((faq: any, idx: number) => (
                <details key={idx} className="group border-b border-slate-200 py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex justify-between items-center font-bold text-slate-900 text-xl hover:text-[#33C5F3] transition-colors">
                    {faq.name}
                    <span className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center transition-colors group-hover:border-[#33C5F3] group-open:bg-[#33C5F3] group-open:border-[#33C5F3] group-open:text-white group-open:rotate-45">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
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

        {/* 12. Final CTA sectie */}
        <section className="py-32 bg-[#2b2e4a] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Klaar voor de eerste stap?</h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Ervaar zelf wat de innovatieve behandeling van rTMS voor uw mentale gezondheid kan betekenen. Neem vrijblijvend contact op.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link href="/aanmelden/" className="px-10 py-5 bg-[#33C5F3] text-white rounded-full font-bold text-lg hover:bg-[#29a5cd] transition-colors shadow-lg w-full sm:w-auto text-center">
                Vraag een intake aan
              </Link>
              <div className="text-slate-400 font-medium text-lg hidden sm:block">of</div>
              <a href="tel:0850604388" className="flex justify-center items-center gap-3 px-10 py-5 bg-transparent border-2 border-[#33C5F3] text-white rounded-full font-bold text-lg hover:bg-[#33C5F3]/10 transition-colors w-full sm:w-auto text-center">
                <FaPhoneAlt className="text-[#33C5F3]" />
                Bel: 085-0604388
              </a>
              <a href="https://wa.me/31850604388" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-3 px-10 py-5 bg-transparent border-2 border-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#25D366]/10 transition-colors w-full sm:w-auto text-center">
                <FaWhatsapp className="text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
