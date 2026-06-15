import { Metadata } from 'next';
import Link from 'next/link';
import { FaUserMd, FaHeartbeat, FaMicroscope, FaCertificate, FaMapMarkerAlt, FaHandshake, FaCheckCircle, FaChevronRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Over rtms-behandeling.nl | Gespecialiseerde rTMS Kliniek Nederland',
  description: 'Wij zijn een gespecialiseerde rTMS-kliniek met locaties in Heiloo en Schiphol-Rijk. Leer meer over onze missie, werkwijze, waarden en BIG-geregistreerde behandelaren.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/over-ons/',
  },
  openGraph: {
    title: 'Over rtms-behandeling.nl — Specialist in rTMS-therapie',
    description: 'Waar neurologie en psychologie samenkomen. Ontdek de missie en het medisch team achter onze hoogwaardige rTMS klinieken.',
    url: 'https://rtms-behandeling.nl/over-ons/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-over-ons.png',
        width: 1200,
        height: 630,
        alt: 'Multidisciplinair medisch team in overleg',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

const consolidatedOverOnsSchema = [
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
        "name": "Over ons",
        "item": "https://rtms-behandeling.nl/over-ons/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "rTMS Behandeling Nederland",
    "url": "https://rtms-behandeling.nl/",
    "logo": "https://rtms-behandeling.nl/images/logo.png",
    "description": "Gespecialiseerde kliniek voor rTMS therapie bij depressie, dwang, angst en tinnitus in Noord-Holland.",
    "department": [
      {
        "@type": "MedicalClinic",
        "name": "rTMS Kliniek Heiloo",
        "telephone": "085-0604388",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kennemerstraatweg 464",
          "addressLocality": "Heiloo",
          "postalCode": "1851 NG",
          "addressCountry": "NL"
        }
      },
      {
        "@type": "MedicalClinic",
        "name": "rTMS Kliniek Schiphol-Rijk",
        "telephone": "085-0604388",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Boeing Avenue 8",
          "addressLocality": "Schiphol-Rijk",
          "postalCode": "1119 PB",
          "addressCountry": "NL"
        }
      }
    ]
  }
];

export default function OverOns() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedOverOnsSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[60vh] flex flex-col justify-center py-20 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-60 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-over-ons.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center mt-12">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              Over rtms-behandeling.nl
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm mb-6">
              Specialisten in de synergie tussen Neurowetenschappen en de Psychiatrie. Altijd menselijk, altijd medisch onderbouwd.
            </p>
          </div>
        </section>

        {/* 2. Waarom wij dit doen */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-[#33C5F3] mb-6 shadow-sm text-xl"><FaHeartbeat /></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Waarom wij dit doen</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Veel mensen met een depressie, angststoornis of burn-out hebben al jaren gesprekstherapie en medicatie achter de rug, zonder dat het écht beter gaat. Of ze stoppen met medicatie vanwege de bijwerkingen. Wij zien dagelijks hoe vastlopend en uitputtend dat is.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Wij zijn er voor mensen die al veel geprobeerd hebben en nog niet de verlichting hebben gevonden waar ze naar op zoek zijn. Met rTMS-therapie bieden wij een nieuwe weg, dichtbij huis, in een omgeving waar je je op je gemak voelt.
              </p>
            </div>

            <div className="bg-slate-50 p-10 border-l-[6px] border-[#33C5F3] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 text-slate-200"><FaMicroscope className="text-8xl" /></div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Waarom rTMS</h2>
                 <p className="text-slate-600 leading-relaxed mb-6">
                   Onze oprichters zijn psychiaters en onderzoekers die jarenlang zagen hoe mensen vastliepen in hun behandeling. Medicatie werkt door het hele lichaam en geeft vaak vervelende bijwerkingen, zoals gewichtstoename of je &ldquo;vlak&rdquo; voelen.
                 </p>
                 <p className="text-slate-600 leading-relaxed mb-6">
                   rTMS werkt heel gericht: met een magneetspoel stimuleren we precies het gebied in de hersenen dat minder actief is bij bijvoorbeeld een depressie. Geen pillen, geen ingreep, geen narcose. Je zit comfortabel in een stoel, terwijl de behandeling zijn werk doet.
                 </p>
               </div>
            </div>

          </div>
        </section>

        {/* 3. Onze aanpak */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
           <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 text-center">Onze aanpak</h2>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-10"></div>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded shadow-sm border border-slate-200">
                  <h3 className="font-bold text-[#2b2e4a] text-xl mb-4">Persoonlijke instelling</h3>
                  <ul className="space-y-4">
                     <li className="flex items-start gap-4">
                        <FaCheckCircle className="text-[#33C5F3] mt-1 shrink-0" />
                        <span className="text-slate-600">Bij je eerste bezoek nemen we de tijd om te kijken wat voor jou de juiste, veilige instelling is. Niemand is hetzelfde, dus we beginnen nooit met een standaardinstelling — we kijken samen met jou wat werkt.</span>
                     </li>
                  </ul>
               </div>

               <div className="bg-white p-8 rounded shadow-sm border border-slate-200">
                  <h3 className="font-bold text-[#2b2e4a] text-xl mb-4">Persoonlijke begeleiding</h3>
                  <ul className="space-y-4">
                     <li className="flex items-start gap-4">
                        <FaCheckCircle className="text-[#33C5F3] mt-1 shrink-0" />
                        <span className="text-slate-600">Tijdens je sessies zit er altijd iemand naast je die met je meekijkt, een praatje maakt en gewoon vraagt hoe het met je gaat. Een kopje koffie of thee, een rustige wachtruimte, en een vast gezicht dat je leert kennen.</span>
                     </li>
                  </ul>
               </div>
            </div>
           </div>
        </section>

        {/* 4. Ons team */}
        <section className="py-24 bg-[#2b2e4a] text-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div className="space-y-8">
               <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ons team</h2>
               <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>

               <div>
                  <h3 className="text-xl font-bold flex items-center gap-3 mb-3"><FaUserMd className="text-[#33C5F3]" /> BIG-geregistreerde zorgverleners</h3>
                  <p className="text-slate-300 leading-relaxed">
                     Bij ons word je behandeld door ervaren, BIG-geregistreerde zorgverleners. Het medisch beleid staat onder verantwoordelijkheid van een psychiater, en alle behandelaren zijn aangesloten bij het landelijke kwaliteitskader voor de GGZ.
                  </p>
               </div>

               <div>
                  <h3 className="text-xl font-bold flex items-center gap-3 mb-3"><FaCertificate className="text-[#33C5F3]" /> In goede handen</h3>
                  <p className="text-slate-300 leading-relaxed">
                     In de praktijk betekent dit vooral: je bent in goede handen, bij mensen die hun vak serieus nemen én tijd voor je hebben.
                  </p>
               </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded text-center">
               <FaCertificate className="text-[100px] text-white/20 mx-auto mb-6" />
               <p className="text-2xl font-medium text-white italic">&ldquo;Veiligheid, transparantie, en menselijkheid vormen het fundament van elke behandeling die wij bieden.&rdquo;</p>
            </div>

          </div>
        </section>

        {/* 6. Onze locaties / 7. Samenwerking verwijzers */}
        <section className="py-24 bg-white border-b border-slate-100">
           <div className="max-w-7xl mx-auto px-6">
              
              <div className="grid lg:grid-cols-2 gap-16">
                 
                 {/* Locaties */}
                 <div className="bg-slate-50 p-10 rounded border border-slate-200 shadow-sm relative overflow-hidden">
                    <FaMapMarkerAlt className="text-[180px] text-slate-100 absolute -right-10 -bottom-10 pointer-events-none" />
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Onze klinische locaties</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">Om patiënten in de Randstad en Noord-Holland direct te kunnen bedienen, hebben wij twee strategisch gekozen, hypermoderne klinieken geopend buiten de stadsdrukte.</p>
                    
                    <div className="space-y-4">
                       <Link href="/locaties/heiloo" className="group flex items-center justify-between p-4 bg-white border border-[#33C5F3]/50 rounded hover:border-[#33C5F3] hover:shadow-md transition-all">
                          <div>
                            <strong className="text-[#2b2e4a] block group-hover:text-[#33C5F3] transition-colors">Heiloo</strong>
                            <span className="text-sm text-slate-500">Midden in het groen van N-Holland</span>
                          </div>
                          <FaChevronRight className="text-[#33C5F3]" />
                       </Link>
                       <Link href="/locaties/schiphol-rijk" className="group flex items-center justify-between p-4 bg-white border border-[#33C5F3]/50 rounded hover:border-[#33C5F3] hover:shadow-md transition-all">
                          <div>
                            <strong className="text-[#2b2e4a] block group-hover:text-[#33C5F3] transition-colors">Schiphol-Rijk</strong>
                            <span className="text-sm text-slate-500">Het zakelijke knooppunt van de Randstad</span>
                          </div>
                          <FaChevronRight className="text-[#33C5F3]" />
                       </Link>
                    </div>
                 </div>

                 {/* Verwijzers */}
                 <div className="p-10 flex flex-col justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#2b2e4a] text-white flex items-center justify-center text-3xl mb-6"><FaHandshake /></div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Samenwerking met verwijzers</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      Samenwerking in de eerste en tweede lijn is cruciaal. Wij werken landelijk, maar nadrukkelijk regionaal, samen met huisartsenpraktijken, psychotherapeuten, bedrijfsartsen en grote GGZ-instellingen en ziekenhuizen.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-8">
                      Omdat rTMS zo sterk complementair is, fungeren wij vaak als een tussenstation. U stuurt uw vastgelopen (depressieve) patiënt naar ons in; wij doorbreken via neurobiologische weg de apathie met rTMS, en verwijzen de patiënt vaak stabiel en receptief terug naar uw praktijk voor cognitieve afronding.
                    </p>
                    <Link href="/verwijzers" className="text-[#33C5F3] font-bold border-b border-[#33C5F3] pb-1 hover:text-[#2b2e4a] hover:border-[#2b2e4a] transition-colors w-fit">
                       Portaal voor verwijzers openen &rarr;
                    </Link>
                 </div>

              </div>

           </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-50">
           <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Uw vertrouwen staat voorop</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Heeft u vragen over ons team, onze bevoegdheden, of onze werkwijze? We staan u graag discreet te woord.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact/" className="px-10 py-5 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-lg rounded-full text-lg">
                Neem contact op met de receptie
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
