import { Metadata } from 'next';
import Link from 'next/link';
import { FaUserPlus, FaCalendarCheck, FaClipboardList, FaFileMedical, FaQuestionCircle, FaChevronRight, FaCheckCircle, FaLock } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Intake Aanvragen voor rTMS Behandeling | rtms-behandeling.nl',
  description: 'Vraag een vrijblijvende intake aan voor rTMS behandeling. Kies uw locatie (Heiloo of Schiphol-Rijk), vul het formulier in en wij nemen binnen 1 werkdag contact op.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/aanmelden/',
  },
  openGraph: {
    title: 'Intake Aanvragen — De eerste stap naar herstel',
    description: 'Vraag eenvoudig een intake aan voor rTMS. Veilige gegevensverwerking en snelle opvolging door onze specialisten.',
    url: 'https://rtms-behandeling.nl/aanmelden/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-aanmelden.png',
        width: 1200,
        height: 630,
        alt: 'Intake aanvragen voor rTMS',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

const enrollmentSchema = [
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
        "name": "Intake aanvragen",
        "item": "https://rtms-behandeling.nl/aanmelden/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wordt de intake vergoed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, de intake maakt deel uit van de Specialistische GGZ en wordt vergoed door uw basisverzekering (rekening houdend met uw eigen risico), mits u een geldige verwijsbrief heeft."
        }
      },
      {
        "@type": "Question",
        "name": "Is er een wachtlijst?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wij streven naar een minimale wachttijd. Gemiddeld kunt u binnen 1 à 2 weken terecht voor een officieel intakegesprek."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik eerst een kennismaking krijgen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. We kunnen altijd eerst een telefonisch informatief gesprek inplannen om uw eerste vragen te beantwoorden."
        }
      }
    ]
  }
];

export default function AanmeldenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enrollmentSchema) }}
      />
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] flex flex-col justify-center py-20 pb-24">
        <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-60 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/og-aanmelden.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center mt-12">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-md">
            Intake aanvragen
          </h1>
          <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
          <p className="text-white/95 text-xl lg:text-2xl font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            De eerste stap naar herstel begint hier. Vul uw gegevens in voor een vrijblijvende screening en intakegesprek.
          </p>
        </div>
      </section>

      {/* Progress Steps Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2b2e4a] mb-4">Wat kunt u verwachten?</h2>
            <p className="text-slate-600">Wij houden het proces transparant en efficiënt.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-slate-200 z-0"></div>
            
            <div className="relative z-10 text-center space-y-4">
              <div className="w-20 h-20 bg-white border-4 border-[#33C5F3] rounded-full flex items-center justify-center mx-auto shadow-sm">
                <FaUserPlus className="text-[#33C5F3] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#2b2e4a]">1. Aanmelding</h3>
              <p className="text-sm text-slate-600">U vult het formulier in. Wij nemen binnen 24 uur contact op voor een korte telefonische kennismaking.</p>
            </div>

            <div className="relative z-10 text-center space-y-4">
              <div className="w-20 h-20 bg-white border-4 border-[#33C5F3] rounded-full flex items-center justify-center mx-auto shadow-sm">
                <FaClipboardList className="text-[#33C5F3] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#2b2e4a]">2. Intakegesprek</h3>
              <p className="text-sm text-slate-600">U spreekt met onze regiebehandelaar (psychiater) en GZ-psycholoog om uw medische geschiktheid en doelen te bepalen.</p>
            </div>

            <div className="relative z-10 text-center space-y-4">
              <div className="w-20 h-20 bg-[#33C5F3] text-white border-4 border-[#33C5F3] rounded-full flex items-center justify-center mx-auto shadow-sm">
                <FaCalendarCheck className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#2b2e4a]">3. Start Behandeling</h3>
              <p className="text-sm text-slate-600">Na akkoord op het behandelplan plannen wij direct de eerste rTMS-sessies in. Vaak binnen 1 week na de intake.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-24 bg-white" id="aanmeldformulier">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
            <div className="bg-[#2b2e4a] p-10 text-white flex justify-between items-center">
               <div>
                  <h2 className="text-3xl font-bold mb-2">Aanmeldformulier</h2>
                  <p className="text-slate-300">Veilige en vertrouwelijke gegevensverwerking</p>
               </div>
               <FaLock className="text-[#33C5F3] text-3xl opacity-50" />
            </div>
            
            <form className="p-10 space-y-8">
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-[#2b2e4a] border-b border-slate-100 pb-2">Persoonlijke gegevens</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Voornaam *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#33C5F3] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Achternaam *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#33C5F3] outline-none" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">E-mailadres *</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#33C5F3] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Telefoonnummer *</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#33C5F3] outline-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <h3 className="text-lg font-bold text-[#2b2e4a] border-b border-slate-100 pb-2">Hulpvraag & Locatie</h3>
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Voor welke klacht zoekt u hulp? *</label>
                   <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#33C5F3] outline-none bg-white">
                      <option value="">Maak een keuze...</option>
                      <option value="depressie">Depressie</option>
                      <option value="burn-out">Burn-out / Overspanning</option>
                      <option value="angst">Angststoornis</option>
                      <option value="ocd">Dwangstoornis (OCD)</option>
                      <option value="tinnitus">Tinnitus (Oorsuizen)</option>
                      <option value="andere">Andere hulpvraag</option>
                   </select>
                </div>
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Voorkeurslocatie *</label>
                   <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:border-[#33C5F3] transition">
                         <input type="radio" name="locatie" value="heiloo" required className="w-5 h-5 text-[#33C5F3] focus:ring-[#33C5F3]" />
                         <span className="font-medium">Heiloo</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:border-[#33C5F3] transition">
                         <input type="radio" name="locatie" value="schiphol" className="w-5 h-5 text-[#33C5F3] focus:ring-[#33C5F3]" />
                         <span className="font-medium">Schiphol-Rijk</span>
                      </label>
                   </div>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <h3 className="text-lg font-bold text-[#2b2e4a] border-b border-slate-100 pb-2">Verwijsbrief</h3>
                <div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4">
                  <FaFileMedical className="text-[#33C5F3] text-3xl shrink-0 mt-1" />
                  <div className="text-sm text-slate-600 leading-relaxed">
                     <p className="font-bold text-[#2b2e4a] mb-1">Heeft u al een verwijsbrief?</p>
                     U heeft een verwijzing voor Specialistische GGZ (SGGZ) nodig van uw huisarts of psychiater om in aanmerking te komen voor vergoeding. U kunt zich wel alvast aanmelden zonder brief.
                  </div>
                </div>
                <div className="flex items-center gap-4">
                   <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-[#33C5F3] focus:ring-[#33C5F3]" />
                      <span className="text-sm font-medium">Ik ben in het bezit van een SGGZ-verwijsbrief</span>
                   </label>
                </div>
              </div>

              <button type="submit" className="w-full py-5 bg-[#33C5F3] text-white text-xl font-bold rounded-xl hover:bg-[#2b2e4a] transition-all shadow-xl shadow-cyan-100 mt-4">
                Aanvraag Afronden
              </button>
              
              <p className="text-center text-xs text-slate-400">
                Door op 'Aanvraag Afronden' te klikken gaat u akkoord met het opslaan van uw gegevens voor het doeleinde van uw aanmelding.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Snippet Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2b2e4a] mb-12 text-center">Veelgestelde vragen over aanmelden</h2>
            
            <div className="space-y-4">
               {[
                 { q: "Wordt de intake vergoed?", a: "Ja, de intake maakt deel uit van de Specialistische GGZ en wordt vergoed door uw basisverzekering (rekening houdend met uw eigen risico), mits u een geldige verwijsbrief heeft." },
                 { q: "Is er een wachtlijst?", a: "Wij streven naar een minimale wachttijd. Gemiddeld kunt u binnen 1 à 2 weken terecht voor een officieel intakegesprek." },
                 { q: "Kan ik eerst een kennismaking krijgen?", a: "Zeker. We kunnen altijd eerst een telefonisch informatief gesprek inplannen om uw eerste vragen te beantwoorden." }
               ].map((faq, idx) => (
                  <details key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden active:shadow-md transition group">
                     <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-slate-700">
                        {faq.q}
                        <FaChevronRight className="text-sm transition-transform group-open:rotate-90" />
                     </summary>
                     <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                     </div>
                  </details>
               ))}
            </div>

            <div className="mt-16 text-center">
               <Link href="/faq" className="text-[#33C5F3] font-bold border-b-2 border-[#33C5F3] pb-1 hover:text-[#2b2e4a] hover:border-[#2b2e4a] transition-colors">
                  Bekijk alle veelgestelde vragen &rarr;
               </Link>
            </div>
         </div>
      </section>

    </div>
    </>
  );
}
