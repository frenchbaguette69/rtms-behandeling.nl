import { Metadata } from 'next';
import Link from 'next/link';
import { FaMapMarkerAlt, FaCar, FaTrain, FaParking, FaPhoneAlt, FaEnvelope, FaClock, FaChevronRight, FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'rTMS Kliniek Schiphol-Rijk | Boeing Avenue 8 | rtms-behandeling.nl',
  description: 'Onze rTMS-kliniek bij Schiphol is gevestigd op Boeing Avenue 8, 1119 PB Schiphol-Rijk. Uitstekend bereikbaar vanuit Amsterdam, Haarlem en Hoofddorp.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/locaties/schiphol-rijk/',
  },
  openGraph: {
    title: 'rTMS Kliniek Schiphol-Rijk — Centraal gelegen in de Randstad',
    description: 'Moderne, centraal gelegen kliniek voor onverzekerde en verzekerde rTMS trajecten. Gemakkelijk bereikbaar vanuit de gehele Randstad.',
    url: 'https://rtms-behandeling.nl/locaties/schiphol-rijk/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-schiphol.png',
        width: 1200,
        height: 630,
        alt: 'Buitenaanzicht rTMS kliniek Schiphol-Rijk',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

const schipholSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "rTMS Behandeling — Locatie Schiphol-Rijk",
    "url": "https://rtms-behandeling.nl/locaties/schiphol-rijk/",
    "logo": "https://rtms-behandeling.nl/images/logo.png",
    "image": "https://rtms-behandeling.nl/images/og-schiphol.png",
    "description": "Gespecialiseerde rTMS-kliniek bij Schiphol voor behandeling van depressie, angst, OCD en PTSS.",
    "telephone": "085-0604388",
    "email": "info@rtms-behandeling.nl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Boeing Avenue 8",
      "addressLocality": "Schiphol-Rijk",
      "postalCode": "1119PB",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.2858,
      "longitude": 4.7431
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "medicalSpecialty": "Psychiatry",
    "availableService": {
      "@type": "MedicalTherapy",
      "name": "Repetitieve Transcraniële Magnetische Stimulatie (rTMS)"
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
        "name": "Locaties",
        "item": "https://rtms-behandeling.nl/locaties/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Schiphol-Rijk",
        "item": "https://rtms-behandeling.nl/locaties/schiphol-rijk/"
      }
    ]
  }
];

export default function LocatieSchiphol() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schipholSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[60vh] flex flex-col justify-center py-20 pb-24">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-60 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-schiphol.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center mt-12">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              rTMS Kliniek Schiphol-Rijk
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-6 drop-shadow-sm">
              Centraal gelegen en discreet bereikbaar in de Randstad
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-white font-medium">
               <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20"><FaMapMarkerAlt className="text-[#33C5F3]"/> Boeing Avenue 8, Schiphol-Rijk</span>
               <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20"><FaClock className="text-[#33C5F3]"/> Ma - Vr: 08:30 - 17:00</span>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-slate-50 border-b border-slate-200 py-3 px-6 text-sm text-slate-500">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-[#33C5F3]">Home</Link>
            <FaChevronRight className="text-[10px]" />
            <Link href="/locaties" className="hover:text-[#33C5F3]">Locaties</Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-slate-800 font-medium">Schiphol-Rijk</span>
          </div>
        </div>

        {/* 2. Onze locatie bij Schiphol & Maps Embed */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Onze locatie in Schiphol-Rijk</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Voor patiënten uit de metropoolregio Amsterdam bieden wij op het vooraanstaande en moderne business park Schiphol-Rijk een state-of-the-art rTMS-voorziening. Wij zijn gevestigd op de representatieve Boeing Avenue 8. 
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Deze locatie is bewust gekozen buiten het stadsverkeer om uw anonimiteit, rust en naadloze bereikbaarheid (met eigen parkeervoorziening) te garanderen, wat bijzonder prettig is voor onze patiënten met prikkelverwerkingsklachten.
              </p>
              
              <div className="bg-slate-50 p-8 border border-slate-200 rounded">
                 <h3 className="font-bold text-xl mb-4 text-[#2b2e4a]">Contactgegevens Schiphol-Rijk</h3>
                 <ul className="space-y-4">
                   <li className="flex items-center gap-4 text-slate-600"><FaMapMarkerAlt className="text-[#33C5F3] text-xl shrink-0" /> Boeing Avenue 8<br/>1119 PB Schiphol-Rijk</li>
                   <li className="flex items-center gap-4 text-slate-600"><FaPhoneAlt className="text-[#33C5F3] text-xl shrink-0" /> <a href="tel:0850604388" className="hover:text-[#33C5F3]">085-0604388</a></li>
                   <li className="flex items-center gap-4 text-slate-600"><FaWhatsapp className="text-[#25D366] text-xl shrink-0" /> <a href="https://wa.me/31850604388" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366]">WhatsApp: 085-0604388</a></li>
                   <li className="flex items-center gap-4 text-slate-600"><FaEnvelope className="text-[#33C5F3] text-xl shrink-0" /> <a href="mailto:info@rtms-behandeling.nl" className="hover:text-[#33C5F3]">info@rtms-behandeling.nl</a></li>
                 </ul>
              </div>
            </div>

            <div className="h-full min-h-[400px] w-full bg-slate-200 rounded overflow-hidden shadow-sm border border-slate-200 relative p-1">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.467885779644!2d4.7431!3d52.2858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e1bc8f8c2eb5%3A0x679c1e0e84b7a13!2sBoeing%20Avenue%208%2C%201119%20PB%20Schiphol-Rijk!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, minHeight: '400px' }} 
                 allowFullScreen={false} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Google Maps Locatie rTMS Kliniek Schiphol-Rijk"
                 className="rounded"
               ></iframe>
            </div>

          </div>
        </section>

        {/* 3. Bereikbaarheid en parkeren */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Bereikbaarheid en parkeren</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-12 mx-auto"></div>

            <div className="grid md:grid-cols-3 gap-8">
               
               <div className="bg-white p-8 border border-slate-200 rounded shadow-sm">
                  <div className="w-12 h-12 bg-slate-50 flex justify-center items-center rounded-full text-2xl text-[#33C5F3] mb-6">
                    <FaCar />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-[#2b2e4a]">Met de auto (A4/A9)</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Schiphol-Rijk ligt strategisch tussen de Rijkswegen A4 en A9. Vanaf de A4 (afslag 3 Hoofddorp) bent u in een minuut of vijf op het park. Hierdoor is de filegevoeligheid voor uw afspraken minimaal.
                  </p>
               </div>

               <div className="bg-white p-8 border border-slate-200 rounded shadow-sm">
                  <div className="w-12 h-12 bg-slate-50 flex justify-center items-center rounded-full text-2xl text-[#33C5F3] mb-6">
                    <FaTrain />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-[#2b2e4a]">Met het openbaar vervoer</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Station Schiphol Airport is het nabijgelegen OV-knooppunt. Vanaf het vliegveld (of Station Hoofddorp) vertrekken diverse bussen (o.a. de snelle R-net CXX bussen) die in de directe omgeving van de kliniek stoppen.
                  </p>
               </div>

               <div className="bg-[#2b2e4a] text-white p-8 rounded shadow-sm">
                  <div className="w-12 h-12 bg-[#33C5F3] flex justify-center items-center rounded-full text-2xl text-white mb-6">
                    <FaParking />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-white">Parkeren (Gratis)</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    Geen stress over parkeermeters in Amsterdam-Centrum. Bij ons pand op Schiphol-Rijk parkeert u geheel kosteloos op ons ruime privé-parkeerterrein direct voor de deur.
                  </p>
               </div>

            </div>
          </div>
        </section>

        {/* 4. Ons team in Schiphol */}
        <section className="py-24 bg-white border-b border-slate-100">
           <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Ons multidisciplinair team</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-12"></div>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl">

                 <div className="bg-slate-50 border border-slate-200 rounded overflow-hidden shadow-sm hover:border-[#33C5F3] transition-colors group">
                    <div className="h-48 bg-[#2b2e4a] w-full flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-slate-200 bg-[url('')] bg-cover bg-center mix-blend-luminosity opacity-80 group-hover:mix-blend-normal transition-all duration-500"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-[#2b2e4a] text-lg mb-1">Jan-Jaap Mol</h3>
                      <p className="text-[#33C5F3] font-medium text-sm mb-4">Psychiater</p>
                      <p className="text-slate-600 text-sm">Eindverantwoordelijk voor het medisch beleid. Specialist in neuromodulatie en rTMS.</p>
                    </div>
                 </div>

                 <div className="bg-slate-50 border border-slate-200 rounded overflow-hidden shadow-sm hover:border-[#33C5F3] transition-colors group">
                    <div className="h-48 bg-[#2b2e4a] w-full flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-slate-200 bg-[url('/guidomedewerker.webp')] bg-cover bg-center mix-blend-luminosity opacity-80 group-hover:mix-blend-normal transition-all duration-500"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-[#2b2e4a] text-lg mb-1">Guido Smutzer</h3>
                      <p className="text-[#33C5F3] font-medium text-sm mb-4">Psycholoog</p>
                      <p className="text-slate-600 text-sm">Begeleidt patiënten tijdens het traject en zorgt voor persoonlijke, afgestemde zorg.</p>
                    </div>
                 </div>

              </div>
           </div>
        </section>

        {/* 5. rTMS in de regio Amsterdam (Local SEO) */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
           <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">rTMS Behandeling in de Randstad</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-12 mx-auto"></div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                 
                 <div className="bg-white p-6 border-t-4 border-t-[#2b2e4a] shadow-sm">
                   <h3 className="font-bold text-lg mb-2"><Link href="#" className="hover:text-[#33C5F3]">Vanuit Amsterdam</Link></h3>
                   <p className="text-sm text-slate-600">Vermijd de drukte en parkeerkosten van de ring A10. Via de A4 reist u vanuit Amsterdam (Zuid/Centrum) ontspannen naar onze kliniek voor uw depressie trajact.</p>
                 </div>

                 <div className="bg-white p-6 border-t-4 border-t-[#33C5F3] shadow-sm">
                   <h3 className="font-bold text-lg mb-2"><Link href="#" className="hover:text-[#33C5F3]">Vanuit Haarlem</Link></h3>
                   <p className="text-sm text-slate-600">Patiënten uit de regio Haarlem en Heemstede bereiken Schiphol-Rijk vlot via de N201. Moderne rTMS-apparatuur net buiten de drukte van de stad.</p>
                 </div>

                 <div className="bg-white p-6 border-t-4 border-t-[#2b2e4a] shadow-sm">
                   <h3 className="font-bold text-lg mb-2"><Link href="#" className="hover:text-[#33C5F3]">Vanuit Hoofddorp</Link></h3>
                   <p className="text-sm text-slate-600">Letterlijk om de hoek. Bewoners uit Hoofddorp vallen terug op zeer korte toegangstijden tot onze specialistische rTMS-neuromodulatie.</p>
                 </div>

                 <div className="bg-white p-6 border-t-4 border-t-[#33C5F3] shadow-sm">
                   <h3 className="font-bold text-lg mb-2"><Link href="#" className="hover:text-[#33C5F3]">Vanuit Amstelveen</Link></h3>
                   <p className="text-sm text-slate-600">De A9 brengt u direct naar onze voordeur. Hoogwaardige klinische psychiatrie en magneetstimulatie, perfect bereikbaar vanuit Amstelveen en Buitenveldert.</p>
                 </div>

                 <div className="bg-white p-6 border-t-4 border-t-[#2b2e4a] shadow-sm">
                   <h3 className="font-bold text-lg mb-2"><Link href="#" className="hover:text-[#33C5F3]">Vanuit Leiden</Link></h3>
                   <p className="text-sm text-slate-600">De A4 vormt een rechte lijn vanaf Leiden. Veel pantiënten uit de Bollenstreek maken dagelijks de oversteek voor vergoede depressiebehandelingen.</p>
                 </div>

              </div>
           </div>
        </section>

        {/* 6. Een intake aanvragen (Block CTA) */}
        <section className="py-24 bg-[#2b2e4a] text-white">
           <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Start in Schiphol-Rijk</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Vind verlichting van depressie, angst of OCD in een anonieme, uiterst moderne kliniek zonder de hectiek van de binnenstad. Wij verwerken uw ZorgDomein-verwijzing razendsnel.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="px-10 py-5 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-lg rounded-full text-lg">
                Vraag nu een intake aan
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
