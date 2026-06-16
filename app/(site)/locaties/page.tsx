import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaChevronRight, FaParking, FaShieldAlt, FaMapMarkedAlt, FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Onze rTMS Kliniek Locaties | Heiloo & Schiphol-Rijk | rtms-behandeling.nl',
  description: 'Vind de dichtstbijzijnde rTMS-kliniek voor de behandeling van depressie, angst en OCD. Bezoek onze moderne vestigingen in Heiloo of Schiphol-Rijk. Gratis parkeren en discrete zorg.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/locaties/',
  },
  openGraph: {
    title: 'rTMS Behandeling Locaties — Heiloo & Schiphol-Rijk',
    description: 'Gespecialiseerde zorg op twee centrale locaties in Noord-Holland. Bekijk onze klinieken.',
    url: 'https://rtms-behandeling.nl/locaties/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-homepage.png',
        width: 1200,
        height: 630,
        alt: 'rTMS Behandeling Locaties Overzicht',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

const locationsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "rTMS Behandeling Locaties",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "MedicalClinic",
        "name": "rTMS Behandeling — Locatie Heiloo",
        "url": "https://rtms-behandeling.nl/locaties/heiloo/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kennemerstraatweg 464, Unit 1.03",
          "addressLocality": "Heiloo",
          "postalCode": "1851NG",
          "addressCountry": "NL"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "MedicalClinic",
        "name": "rTMS Behandeling — Locatie Schiphol-Rijk",
        "url": "https://rtms-behandeling.nl/locaties/schiphol-rijk/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Boeing Avenue 8",
          "addressLocality": "Schiphol-Rijk",
          "postalCode": "1119PB",
          "addressCountry": "NL"
        }
      }
    }
  ]
};

export default function LocatiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero Section */}
        <section className="bg-[#2b2e4a] pt-32 pb-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#33C5F3] opacity-5 transform skew-x-12 translate-x-20"></div>
          <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
              Onze <span className="text-[#33C5F3]">Locaties</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-0 max-w-3xl">
              Dichtbij, discreet en gespecialiseerd. Wij bieden rTMS behandelingen aan op twee moderne locaties in Noord-Holland, altijd goed bereikbaar en voorzien van gratis parkeergelegenheid.
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-slate-50 border-b border-slate-200 py-4 px-6 text-sm text-slate-500">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-[#33C5F3] transition-colors">Home</Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-slate-800 font-medium">Locaties</span>
          </div>
        </div>

        {/* 2. Main Locations Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Location Card: Heiloo */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src="/heilortmsbehandeling.jpeg"
                    alt="rTMS Kliniek Heiloo"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b2e4a]/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-8">
                    <h2 className="text-3xl font-bold text-white mb-1">Heiloo</h2>
                    <p className="text-[#33C5F3] font-medium uppercase tracking-widest text-xs">Hoofdvestiging</p>
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Onze moderne kliniek in Heiloo biedt een rustige, groene omgeving voor uw behandeling. Centraal gelegen en uitstekend bereikbaar vanuit de regio Alkmaar en Kennemerland.
                  </p>
                  <ul className="space-y-4 mb-10 text-sm">
                    <li className="flex items-start gap-4 text-slate-700 font-medium">
                      <FaMapMarkerAlt className="text-[#33C5F3] mt-1 shrink-0 text-lg" />
                      <span>Kennemerstraatweg 464, Unit 1.03<br />1851 NG Heiloo</span>
                    </li>
                    <li className="flex items-center gap-4 text-slate-700 font-medium">
                      <FaPhoneAlt className="text-[#33C5F3] shrink-0 text-lg" />
                      <span>085-0604388</span>
                    </li>
                    <li className="flex items-center gap-4 text-slate-700 font-medium">
                      <FaWhatsapp className="text-[#25D366] shrink-0 text-lg" />
                      <span>WhatsApp: 085-0604388</span>
                    </li>
                    <li className="flex items-center gap-4 text-slate-700 font-medium">
                      <FaEnvelope className="text-[#33C5F3] shrink-0 text-lg" />
                      <span>info@rtms-behandeling.nl</span>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <Link href="/locaties/heiloo/" className="inline-flex items-center justify-center w-full bg-[#2b2e4a] text-white py-4 rounded-xl font-bold hover:bg-[#33C5F3] transition-all gap-2 group/btn">
                      Bekijk details & route <FaChevronRight className="text-[10px] group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Location Card: Schiphol-Rijk */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src="/images/og-schiphol.png" 
                    alt="rTMS Kliniek Schiphol-Rijk" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b2e4a]/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-8">
                    <h2 className="text-3xl font-bold text-white mb-1">Schiphol-Rijk</h2>
                    <p className="text-[#33C5F3] font-medium uppercase tracking-widest text-xs">Metropoolregio Amsterdam</p>
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Op het moderne business park Schiphol-Rijk vindt u onze tweede vestiging. Ideaal voor patiënten uit Amsterdam, Haarlem en Hoofddorp die op zoek zijn naar discrete zorg.
                  </p>
                  <ul className="space-y-4 mb-10 text-sm">
                    <li className="flex items-start gap-4 text-slate-700 font-medium">
                      <FaMapMarkerAlt className="text-[#33C5F3] mt-1 shrink-0 text-lg" />
                      <span>Boeing Avenue 8<br />1119 PB Schiphol-Rijk</span>
                    </li>
                    <li className="flex items-center gap-4 text-slate-700 font-medium">
                      <FaPhoneAlt className="text-[#33C5F3] shrink-0 text-lg" />
                      <span>085-0604388</span>
                    </li>
                    <li className="flex items-center gap-4 text-slate-700 font-medium">
                      <FaWhatsapp className="text-[#25D366] shrink-0 text-lg" />
                      <span>WhatsApp: 085-0604388</span>
                    </li>
                    <li className="flex items-center gap-4 text-slate-700 font-medium">
                      <FaEnvelope className="text-[#33C5F3] shrink-0 text-lg" />
                      <span>info@rtms-behandeling.nl</span>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <Link href="/locaties/schiphol-rijk/" className="inline-flex items-center justify-center w-full bg-[#2b2e4a] text-white py-4 rounded-xl font-bold hover:bg-[#33C5F3] transition-all gap-2 group/btn">
                      Bekijk details & route <FaChevronRight className="text-[10px] group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Why our locations section */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Service Excellence op elke locatie</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Wij begrijpen dat een behandeling rust en comfort vereist. Daarom voldoen al onze vestigingen aan dezelfde hoge kwaliteitsstandaarden.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="w-16 h-16 bg-slate-50 text-[#33C5F3] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-inner">
                  <FaParking />
                </div>
                <h3 className="font-bold text-xl mb-4 text-[#2b2e4a]">Gratis Parkeren</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Geen stress over parkeerkosten of vergunningen. Beide locaties bieden ruime, gratis parkeergelegenheid direct voor de deur.</p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="w-16 h-16 bg-slate-50 text-[#33C5F3] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-inner">
                  <FaShieldAlt />
                </div>
                <h3 className="font-bold text-xl mb-4 text-[#2b2e4a]">Discrete Setting</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Onze klinieken zijn gevestigd op locaties waar privacy gewaarborgd is. U kunt in alle rust aan uw herstel werken.</p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="w-16 h-16 bg-slate-50 text-[#33C5F3] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-inner">
                  <FaMapMarkedAlt />
                </div>
                <h3 className="font-bold text-xl mb-4 text-[#2b2e4a]">Optimale Bereikbaarheid</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Strategisch gelegen nabij uitvalswegen (A4, A9, N203) en goed bereikbaar met het openbaar vervoer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Regions Served (Local SEO focus) */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center uppercase tracking-widest text-sm">Regionale Bereikbaarheid</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Regio Alkmaar</h4>
                <ul className="text-slate-500 text-sm space-y-2">
                  <li>Heiloo</li>
                  <li>Alkmaar</li>
                  <li>Castricum</li>
                  <li>Limmen</li>
                  <li>Bergen</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Regio IJmond</h4>
                <ul className="text-slate-500 text-sm space-y-2">
                  <li>Beverwijk</li>
                  <li>Heemskerk</li>
                  <li>Uitgeest</li>
                  <li>Velsen</li>
                  <li>IJmuiden</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Metropool Amsterdam</h4>
                <ul className="text-slate-500 text-sm space-y-2">
                  <li>Amsterdam</li>
                  <li>Amstelveen</li>
                  <li>Zwanenburg</li>
                  <li>Badhoevedorp</li>
                  <li>Uithoorn</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Regio Haarlemmermeer</h4>
                <ul className="text-slate-500 text-sm space-y-2">
                  <li>Hoofddorp</li>
                  <li>Nieuw-Vennep</li>
                  <li>Schiphol-Rijk</li>
                  <li>Aalsmeer</li>
                  <li>Lijnden</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Kennemerland</h4>
                <ul className="text-slate-500 text-sm space-y-2">
                  <li>Haarlem</li>
                  <li>Heemstede</li>
                  <li>Zandvoort</li>
                  <li>Bloemendaal</li>
                  <li>Santpoort</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Booking call to action */}
        <section className="py-24 bg-[#2b2e4a] text-white">
           <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Klaar om de eerste stap te zetten?</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Vraag vandaag nog een intake aan op de locatie van uw keuze en start uw weg naar herstel.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="px-10 py-5 bg-[#33C5F3] text-white font-bold rounded-full hover:bg-white hover:text-[#2b2e4a] transition-all text-lg shadow-lg">
                Intake aanvragen
              </Link>
              <Link href="/contact/" className="px-10 py-5 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg">
                Direct contact
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
