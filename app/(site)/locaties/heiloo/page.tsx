import { Metadata } from 'next';
import Link from 'next/link';
import { FaMapMarkerAlt, FaCar, FaTrain, FaParking, FaPhoneAlt, FaEnvelope, FaClock, FaChevronRight, FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'rTMS Kliniek Heiloo | Kennemerstraatweg 464 | rtms-behandeling.nl',
  description: 'Onze rTMS-kliniek in Heiloo bevindt zich op Kennemerstraatweg 464, Unit 1.03. Goed bereikbaar vanuit Alkmaar, Castricum en Beverwijk. Vraag een intake aan.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/locaties/heiloo/',
  },
  openGraph: {
    title: 'rTMS Kliniek Heiloo — Gespecialiseerde behandeling in Noord-Holland',
    description: 'Veilige, lokaal bereikbare hersenstimulatie. Bezoek onze moderne kliniek aan de Kennemerstraatweg in Heiloo.',
    url: 'https://rtms-behandeling.nl/locaties/heiloo/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-heiloo.png',
        width: 1200,
        height: 630,
        alt: 'Buitenaanzicht rTMS kliniek Heiloo',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

const heilooSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "rTMS Behandeling — Locatie Heiloo",
    "url": "https://rtms-behandeling.nl/locaties/heiloo/",
    "logo": "https://rtms-behandeling.nl/images/logo.png",
    "image": "https://rtms-behandeling.nl/images/og-heiloo.png",
    "description": "Gespecialiseerde rTMS-kliniek in Heiloo voor behandeling van depressie, angst, OCD en PTSS.",
    "telephone": "085-0604388",
    "email": "info@rtms-behandeling.nl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kennemerstraatweg 464, Unit 1.03",
      "addressLocality": "Heiloo",
      "postalCode": "1851NG",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.6010,
      "longitude": 4.6890
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
        "name": "Heiloo",
        "item": "https://rtms-behandeling.nl/locaties/heiloo/"
      }
    ]
  }
];

export default function LocatieHeiloo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heilooSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[60vh] flex flex-col justify-center py-20 pb-24">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-60 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-heiloo.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center mt-12">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              rTMS Kliniek Heiloo
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-6 drop-shadow-sm">
              Gespecialiseerde behandeling in Noord-Holland
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-white font-medium">
               <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20"><FaMapMarkerAlt className="text-[#33C5F3]"/> Kennemerstraatweg 464, Heiloo</span>
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
            <span className="text-slate-800 font-medium">Heiloo</span>
          </div>
        </div>

        {/* 2. Onze locatie in Heiloo & Maps Embed */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Onze locatie in Heiloo</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Onze hoofdvestiging voor de regio Noord-Holland bevindt zich in Heiloo. U vindt ons representatieve en rustige behandelcentrum aan de lommerrijke Kennemerstraatweg 464 (Unit 1.03), gevestigd in een modern modern complex ingericht op privacy en discretie.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Wij hebben deze locatie specifiek gekozen vanwege de groene omgeving en de uitstekende bereikbaarheid, zowel voor inwoners van Heiloo zelf als voor patiënten uit de wijdere omtrek.
              </p>
              
              <div className="bg-slate-50 p-8 border border-slate-200 rounded">
                 <h3 className="font-bold text-xl mb-4 text-[#2b2e4a]">Contactgegevens Heiloo</h3>
                 <ul className="space-y-4">
                   <li className="flex items-center gap-4 text-slate-600"><FaMapMarkerAlt className="text-[#33C5F3] text-xl shrink-0" /> Kennemerstraatweg 464, Unit 1.03<br/>1851 NG Heiloo</li>
                   <li className="flex items-center gap-4 text-slate-600"><FaPhoneAlt className="text-[#33C5F3] text-xl shrink-0" /> <a href="tel:0850604388" className="hover:text-[#33C5F3]">085-0604388</a></li>
                   <li className="flex items-center gap-4 text-slate-600"><FaWhatsapp className="text-[#25D366] text-xl shrink-0" /> <a href="https://wa.me/31850604388" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366]">WhatsApp: 085-0604388</a></li>
                   <li className="flex items-center gap-4 text-slate-600"><FaEnvelope className="text-[#33C5F3] text-xl shrink-0" /> <a href="mailto:info@rtms-behandeling.nl" className="hover:text-[#33C5F3]">info@rtms-behandeling.nl</a></li>
                 </ul>
              </div>
            </div>

            <div className="h-full min-h-[400px] w-full bg-slate-200 rounded overflow-hidden shadow-sm border border-slate-200 relative p-1">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.5342426867015!2d4.7001!3d52.5979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47cf5743c39178ad%3A0xc3b95fd8d5b8398e!2sKennemerstraatweg%20464%2C%201851%20NG%20Heiloo!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, minHeight: '400px' }} 
                 allowFullScreen={false} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Google Maps Locatie rTMS Kliniek Heiloo"
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
                  <h3 className="font-bold text-xl mb-4 text-[#2b2e4a]">Met de auto</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Gelegen direct aan de Kennemerstraatweg N203. Vanuit noordelijke richting (Alkmaar) bereikt u ons zeer vlot, evenals vanuit Castricum (zuidelijke richting). Vanaf de A9 (afslag 11 of 12) bent u binnen 10 tot 15 minuten bij de kliniek.
                  </p>
               </div>

               <div className="bg-white p-8 border border-slate-200 rounded shadow-sm">
                  <div className="w-12 h-12 bg-slate-50 flex justify-center items-center rounded-full text-2xl text-[#33C5F3] mb-6">
                    <FaTrain />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-[#2b2e4a]">Met het openbaar vervoer</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    NS Station Heiloo bevindt zich op ongeveer 15 minuten loopafstand (of enkele minuten per OV-fiets) van onze kliniek. Directe Intercity- en Sprinter-verbindingen vanuit Amsterdam, Zaandam, Alkmaar en Den Helder stoppen hier.
                  </p>
               </div>

               <div className="bg-[#2b2e4a] text-white p-8 rounded shadow-sm">
                  <div className="w-12 h-12 bg-[#33C5F3] flex justify-center items-center rounded-full text-2xl text-white mb-6">
                    <FaParking />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-white">Parkeren (Gratis)</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    Voor het complex is er ruime, gratis parkeergelegenheid beschikbaar uitsluitend voor bezoekers van het pand. Omdat u na een rTMS-sessie gewoon zelfstandig mag deelnemen aan het verkeer, is het ideaal dat u direct voor de deur uw auto kunt parkeren.
                  </p>
               </div>

            </div>
          </div>
        </section>

        {/* 4. Ons team in Heiloo */}
        <section className="py-24 bg-white border-b border-slate-100">
           <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Ons team in Heiloo</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-12"></div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 
                 {/* Team Member 1 */}
                 <div className="bg-slate-50 border border-slate-200 rounded overflow-hidden shadow-sm hover:border-[#33C5F3] transition-colors group">
                    <div className="h-48 bg-[#2b2e4a] w-full flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-slate-200 bg-[url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-80 group-hover:mix-blend-normal transition-all duration-500"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-[#2b2e4a] text-lg mb-1">Dr. S. van Vliet</h3>
                      <p className="text-[#33C5F3] font-medium text-sm mb-4">Regiebehandelaar / Psychiater</p>
                      <p className="text-slate-600 text-sm">Hoofdverantwoordelijke voor intake en indicatiestelling. Specialist in neuromodulatie.</p>
                    </div>
                 </div>

                 {/* Team Member 2 */}
                 <div className="bg-slate-50 border border-slate-200 rounded overflow-hidden shadow-sm hover:border-[#33C5F3] transition-colors group">
                    <div className="h-48 bg-[#2b2e4a] w-full flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-slate-200 bg-[url('https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-80 group-hover:mix-blend-normal transition-all duration-500"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-[#2b2e4a] text-lg mb-1">M. de Boer, MSc.</h3>
                      <p className="text-[#33C5F3] font-medium text-sm mb-4">GZ-Psycholoog / rTMS-Expert</p>
                      <p className="text-slate-600 text-sm">Begeleidt patiënten tijdens het traject, combineert CGT protocollen met de stimulatiesessies.</p>
                    </div>
                 </div>

                 {/* Team Member 3 */}
                 <div className="bg-slate-50 border border-slate-200 rounded overflow-hidden shadow-sm hover:border-[#33C5F3] transition-colors group">
                    <div className="h-48 bg-[#2b2e4a] w-full flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-slate-200 bg-[url('https://images.unsplash.com/photo-1594824432258-2904a434c44a?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-80 group-hover:mix-blend-normal transition-all duration-500"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-[#2b2e4a] text-lg mb-1">L. Jansen</h3>
                      <p className="text-[#33C5F3] font-medium text-sm mb-4">rTMS-Technicus</p>
                      <p className="text-slate-600 text-sm">Gespecialiseerd verpleegkundige die zorgt voor de uiterste precisie bij coil-plaatsing.</p>
                    </div>
                 </div>

                 {/* Team Member 4 */}
                 <div className="bg-slate-50 border border-slate-200 rounded overflow-hidden shadow-sm hover:border-[#33C5F3] transition-colors group">
                    <div className="h-48 bg-[#2b2e4a] w-full flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-[#33C5F3] mix-blend-multiply opacity-20 group-hover:opacity-10 transition-all duration-500"></div>
                       <FaPhoneAlt className="text-5xl text-[#2b2e4a] opacity-50 relative z-10" />
                    </div>
                    <div className="p-6 flex flex-col justify-center h-full">
                      <h3 className="font-bold text-[#2b2e4a] text-lg mb-2">Patiëntencoördinatie</h3>
                      <p className="text-slate-600 text-sm mb-4">Voor al uw vragen over planning, vergoedingen en aanmeldingen staat ons team voor u klaar.</p>
                      <Link href="/contact" className="text-[#33C5F3] font-bold text-sm hover:underline">Neem contact op &rarr;</Link>
                    </div>
                 </div>

              </div>
           </div>
        </section>

        {/* 5. rTMS in de regio Heiloo (Local SEO) */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
           <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">rTMS Behandeling in uw regio</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-12 mx-auto"></div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 
                 <div className="bg-white p-6 border-l-4 border-l-[#2b2e4a] shadow-sm">
                   <h3 className="font-bold text-lg mb-2"><Link href="#" className="hover:text-[#33C5F3]">rTMS vanuit Alkmaar</Link></h3>
                   <p className="text-sm text-slate-600">Slechts 10 minuten rijden via de N203 vanuit centrum Alkmaar. Wij verwelkomen wekelijks patiënten uit de binnenstad, Oudorp en De Hoef voor depressiebehandelingen.</p>
                 </div>

                 <div className="bg-white p-6 border-l-4 border-l-[#33C5F3] shadow-sm">
                   <h3 className="font-bold text-lg mb-2"><Link href="#" className="hover:text-[#33C5F3]">rTMS vanuit Castricum</Link></h3>
                   <p className="text-sm text-slate-600">Via de Rijksstraatweg en Kennemerstraatweg bent u vanuit Bakkum en Castricum binnen 12 minuten bij onze speciale rTMS parkeerplaats in Heiloo.</p>
                 </div>

                 <div className="bg-white p-6 border-l-4 border-l-[#2b2e4a] shadow-sm">
                   <h3 className="font-bold text-lg mb-2"><Link href="#" className="hover:text-[#33C5F3]">rTMS vanuit Beverwijk</Link></h3>
                   <p className="text-sm text-slate-600">Een korte rit over de A9 (ca. 18 minuten) ontsluit voor patiënten uit Beverwijk en Heemskerk hoogwaardige, vergoede neuromodulatie zónder lange Randstad-wachtlijsten.</p>
                 </div>

                 <div className="bg-white p-6 border-l-4 border-l-[#33C5F3] shadow-sm">
                   <h3 className="font-bold text-lg mb-2"><Link href="#" className="hover:text-[#33C5F3]">rTMS vanuit Heerhugowaard</Link></h3>
                   <p className="text-sm text-slate-600">Via de N242 / ring Alkmaar bereikt u Heiloo verrassend soepel. Voor GGZ-patiënten uit Dijk en Waard bieden wij een snelle intake-doorlooptijd.</p>
                 </div>

              </div>
           </div>
        </section>

        {/* 6. Een intake aanvragen in Heiloo (Block CTA) */}
        <section className="py-24 bg-[#2b2e4a] text-white">
           <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Een intake aanvragen in Heiloo</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Woont u in de regio Noord-Kennemerland of verdere omstreken en bent u op zoek naar een vergoede medische behandeling voor depressie, of vraagt u particulier advies aan voor burn-out of tinnitus? Boek in Heiloo een intakegesprek.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="px-10 py-5 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-lg rounded-full text-lg">
                Meld u aan voor Heiloo
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
