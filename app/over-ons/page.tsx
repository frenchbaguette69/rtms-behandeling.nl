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
        "telephone": "088-0000000",
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
        "telephone": "088-0000000",
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
        <section className="relative w-full min-h-[60vh] flex flex-col justify-center py-20 pb-24">
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

        {/* 2. Onze missie / 3. Waarom wij gekozen hebben voor rTMS */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-[#33C5F3] mb-6 shadow-sm text-xl"><FaHeartbeat /></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Onze missie</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                De geestelijke gezondheidszorg (GGZ) in Nederland behoort tot de beste ter wereld, toch sluiten standaardprotocollen niet aan bij iedereen. Patiënten die niet reageren op traditionele gesprekstherapie of kampen met de zware bijwerkingen van antidepressiva, dreigen vaak buiten de boot te vallen.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Onze missie is om voor deze specifieke groep een brug te slaan. Wij brengen de meest geavanceerde, bewezen vorm van neuromodulatie (rTMS) uit het academische ziekenhuis, rechtstreeks naar patiëntvriendelijke, lokaal toegankelijke privéklinieken.
              </p>
            </div>

            <div className="bg-slate-50 p-10 border-l-[6px] border-[#33C5F3] relative object-cover h-full">
               <div className="absolute top-0 right-0 p-6 text-slate-200"><FaMicroscope className="text-8xl" /></div>
               <div className="relative z-10 block">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Waarom specifiek rTMS?</h2>
                 <p className="text-slate-600 leading-relaxed mb-6">
                   Onze oprichters—psychiaters en neuroloog-onderzoekers—zagen jarenlang patiënten lijden onder <em>therapieresistentie</em>. Pillen vliegen met hagel door het hele lichaam; magneetstimulatie schiet met scherp in de hersenschors. 
                 </p>
                 <p className="text-slate-600 leading-relaxed mb-6">
                   Wij kozen voor rTMS omdat het de enige behandeling in de psychiatrie is die netwerken fysiek versterkt zonder systemische bijwerkingen zoals gewichtstoename of emotionele afvlakking.
                 </p>
               </div>
            </div>

          </div>
        </section>

        {/* 4. Onze aanpak: wetenschap + menselijkheid */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
           <div className="max-w-4xl mx-auto px-6 text-center">
            
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Onze aanpak: Wetenschap + Menselijkheid</h2>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-10"></div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              De technologie achter neuromodulatie is koud, wiskundig en uiterst precieus. Het succes van het traject hangt echter evengoed af van de warmte en het vertrouwen tijdens uw bezoeken. Wij weigeren afstandelijk te zijn.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
               <div className="bg-white p-8 rounded shadow-sm border border-slate-200">
                  <h3 className="font-bold text-[#2b2e4a] text-xl mb-4">De Wetenschap</h3>
                  <ul className="space-y-4">
                     <li className="flex items-start gap-4">
                        <FaCheckCircle className="text-[#33C5F3] mt-1 shrink-0" />
                        <span className="text-slate-600">Wij kalibreren de machine uitsluitend op basis van uw persoonlijke Motor Threshold. Geen giswerk.</span>
                     </li>
                     <li className="flex items-start gap-4">
                        <FaCheckCircle className="text-[#33C5F3] mt-1 shrink-0" />
                        <span className="text-slate-600">Wij conformeren ons strikt aan de (internationale) FDA clearings en Nederlandse Trimbos richtlijnen.</span>
                     </li>
                  </ul>
               </div>

               <div className="bg-white p-8 rounded shadow-sm border border-slate-200">
                  <h3 className="font-bold text-[#2b2e4a] text-xl mb-4">De Menselijkheid</h3>
                  <ul className="space-y-4">
                     <li className="flex items-start gap-4">
                        <FaCheckCircle className="text-[#33C5F3] mt-1 shrink-0" />
                        <span className="text-slate-600">Terwijl de puls zijn werk doet, luisteren wij. Onze behandelaren zijn opgeleid in de GGZ, niet alleen in de techniek.</span>
                     </li>
                     <li className="flex items-start gap-4">
                        <FaCheckCircle className="text-[#33C5F3] mt-1 shrink-0" />
                        <span className="text-slate-600">Een warme kop thee, privacy in uw wachtkamer en een direct aanspreekpunt voor uw familie.</span>
                     </li>
                  </ul>
               </div>
            </div>

           </div>
        </section>

        {/* 5. Kwaliteit en certificering / BIG Registratie */}
        <section className="py-24 bg-[#2b2e4a] text-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
               <h2 className="text-3xl lg:text-4xl font-bold mb-6">Kwaliteit en certificering</h2>
               <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              
               <div>
                  <h3 className="text-xl font-bold flex items-center gap-3 mb-3"><FaUserMd className="text-[#33C5F3]" /> BIG-geregistreerde behandelaren</h3>
                  <p className="text-slate-300 leading-relaxed">
                     Net als in academische ziekenhuizen wordt ons medisch beleid bewaakt door de psychiater (Wet BIG artikel 14). Daarbij staan al onze (GZ) psychologen en regiebehandelaren geregistreerd in het overheids BIG-register. U bent te allen tijde onder behandeling van medisch tuchtrechtelijk bevoegd personeel.
                  </p>
               </div>

               <div>
                  <h3 className="text-xl font-bold flex items-center gap-3 mb-3"><FaCertificate className="text-[#33C5F3]" /> Kwaliteitsstandaarden</h3>
                  <p className="text-slate-300 leading-relaxed">
                     Onze klinieken opereren onder de strenge kwaliteitskaders van het Kwaliteitsstatuut in de GGZ. We hanteren de ROM-metingen (Routine Outcome Monitoring) om de lijdensdruk objectief te verminderen. Tevens investeren we continue in de nieuwste apparatuur (CE-gemarkeerd) voor de magneetspoelen.
                  </p>
               </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded text-center">
               <FaCertificate className="text-[100px] text-white/20 mx-auto mb-6" />
               <p className="text-2xl font-medium text-white italic">"Veiligheid, transparantie, en medisch-ethische perfectie vormen het fundament van elke puls die wij toedienen."</p>
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
