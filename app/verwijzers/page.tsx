import { Metadata } from 'next';
import Link from 'next/link';
import { FaUserMd, FaFileSignature, FaUserPlus, FaComments, FaFileDownload, FaClock, FaHandshake, FaChevronRight, FaCheckCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Voor Verwijzers | Patiënten Doorverwijzen naar rTMS | rtms-behandeling.nl',
  description: 'Bent u huisarts, psychiater of psycholoog? Verwijs uw patiënten eenvoudig door naar onze rTMS-kliniek. Download het verwijsformulier of neem contact op.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/verwijzers/',
  },
  openGraph: {
    title: 'Voor Verwijzers — rTMS voor uw patiënten',
    description: 'Efficiënte, collegiale doorverwijzing voor therapieresistente depressie en andere indicaties in de Randstad en Noord-Holland.',
    url: 'https://rtms-behandeling.nl/verwijzers/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-verwijzers.png',
        width: 1200,
        height: 630,
        alt: 'Arts verwerkt een patiëntverwijzing',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

const referralSchema = [
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
        "name": "Voor Verwijzers",
        "item": "https://rtms-behandeling.nl/verwijzers/"
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
  }
];

export default function VoorVerwijzers() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(referralSchema) }}
      />
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. Hero */}
      <section className="relative w-full min-h-[50vh] flex flex-col justify-center py-20 pb-24">
        <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/og-verwijzers.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center mt-12">
          <FaUserMd className="text-5xl text-[#33C5F3] mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
            Voor Verwijzers
          </h1>
          <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
          <p className="text-white/90 text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm mb-6">
            Collegiale samenwerking op het gebied van neuromodulatie. Transparante lijnen, korte wachttijden en heldere terugkoppeling naar uw praktijk.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white border-b border-slate-200">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-[#2b2e4a] mb-6">Aanvullende zorg voor uw vastgelopen patiënt</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
               Loopt uw patiënt vast in de reguliere medicamenteuze behandeling of psychotherapie? rTMS fungeert als een effectieve neurobiologische "reset". Wij nemen de patiënt tijdelijk van u over voor de neuromodulatie-cyclus, om deze vervolgens, na substantiële klachtenreductie, weer terug te verwijzen voor de cognitieve afronding in uw eigen praktijk.
            </p>
         </div>
      </section>

      {/* 2. Wie komen in aanmerking voor rTMS? */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
           
           <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Wie komen in aanmerking?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Conform de Multidisciplinaire Richtlijn Depressie (2024) is rTMS geïndiceerd als formele "Step-up" voor patiënten met een therapieresistente depressie (TRD).
              </p>
              
              <div className="bg-white p-6 border-l-4 border-l-[#2b2e4a] shadow-sm mb-6">
                 <h3 className="font-bold text-[#2b2e4a] mb-2">Inclusiecriteria (Verzekerde zorg)</h3>
                 <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                    <li>Gediagnosticeerde depressieve stoornis (MDD).</li>
                    <li>Geen klinisch significante respons na minimaal twee adequate trials met antidepressiva uit verschillende klassen.</li>
                    <li>Of onvermogen om medicatie te tolereren vanwege ernstige bijwerkingen.</li>
                 </ul>
              </div>

              <div className="bg-white p-6 border-l-4 border-l-[#33C5F3] shadow-sm">
                 <h3 className="font-bold text-[#2b2e4a] mb-2">Contra-indicaties</h3>
                 <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                    <li>Ferromagnetisch metaal in of nabij het hoofd (exclusief tandheelkundig materiaal).</li>
                    <li>Aanwezigheid of historie van epilepsie / insulten (relatieve contra-indicatie, overleg vereist).</li>
                    <li>Zwangerschap (relatieve contra-indicatie, weegt af tegen medicatie-risico).</li>
                 </ul>
              </div>
           </div>

           <div className="bg-[#2b2e4a] text-white p-10 rounded shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Hoe zit het met Tinnitus, OCD en Trauma?</h3>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                 Naast de SGGZ-vergoede trajecten voor depressie, boekt neuromodulatie tevens sterke academische resultaten bij de behandeling van OCD, PTSS, Chronische Pijn en Tinnitus. 
              </p>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                 Mocht uw patiënt kampen met deze problematiek <em>zonder</em> een comorbide depressie, dan valt de zorg buiten het basispakket. U kunt nog steeds aan ons doorverwijzen; de patiënt zal dan middels directe facturatie (een particulier traject) door ons worden geholpen.
              </p>
           </div>

        </div>
      </section>

      {/* 3. Hoe verwijst u door? */}
      <section className="py-24 bg-white border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Hoe verwijst u door?</h2>
               <div className="w-16 h-1 bg-[#33C5F3] mx-auto mb-6"></div>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto">Wij houden de administratieve last voor u als huisarts of specialist zo laag mogelijk. Volg onderstaand efficiënt stappenplan.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
               
               {/* Connecting line for desktop */}
               <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-0.5 bg-slate-200 z-0"></div>

               {/* Stap 1 */}
               <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto bg-white border-4 border-[#33C5F3] rounded-full flex flex-col items-center justify-center mb-6 shadow-sm">
                     <span className="text-[#33C5F3] font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2b2e4a] mb-4">Verwijsbrief opstellen</h3>
                  <div className="bg-slate-50 p-6 rounded text-left border border-slate-200 h-full">
                     <p className="text-slate-600 text-sm mb-4">U stelt een reguliere SGGZ verwijsbrief op. Deze moet in ieder geval bevatten:</p>
                     <ul className="text-slate-600 text-sm space-y-2 list-disc pl-5">
                       <li>Uw AGB-code en handtekening</li>
                       <li>Patiëntgegevens & BSN</li>
                       <li>Vermoeden van diagnose (bijv. MDD)</li>
                       <li>Vermelding "Verwijzing Specialistische GGZ"</li>
                     </ul>
                  </div>
               </div>

               {/* Stap 2 */}
               <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto bg-white border-4 border-[#33C5F3] rounded-full flex flex-col items-center justify-center mb-6 shadow-sm">
                     <span className="text-[#33C5F3] font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2b2e4a] mb-4">Patiënt aanmelden</h3>
                  <div className="bg-slate-50 p-6 rounded text-left border border-slate-200 h-full">
                     <p className="text-slate-600 text-sm mb-4">U kunt de verwijzing op twee manieren aan ons doorgeven:</p>
                     <ul className="text-slate-600 text-sm space-y-4">
                       <li className="flex items-start gap-2"><div className="mt-1"><FaCheckCircle className="text-[#33C5F3]" /></div> <strong>ZorgDomein:</strong> Zoek ons veilig in het ZorgDomein portaal onder rtms-behandeling.</li>
                       <li className="flex items-start gap-2"><div className="mt-1"><FaCheckCircle className="text-[#33C5F3]" /></div> <strong>Veilig Mailen:</strong> Mail de brief via ZorgMail naar ons beveiligde adres: <em>verwijzingen@rtms.zorgmail.nl</em> (fictief)</li>
                     </ul>
                  </div>
               </div>

               {/* Stap 3 */}
               <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto bg-[#33C5F3] border-4 border-[#33C5F3] rounded-full flex flex-col items-center justify-center mb-6 shadow-sm">
                     <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2b2e4a] mb-4">Intake en terugkoppeling</h3>
                  <div className="bg-slate-50 p-6 rounded text-left border border-slate-200 h-full">
                     <p className="text-slate-600 text-sm">
                        Zodra wij de verwijzing ontvangen, nodigt ons secretariaat de patiënt uit voor een multidisciplinaire intake (binnen 2 weken). U ontvangt na goedkeuring van het indicatie-besluit direct een elektronische terugkoppeling in uw HIS, alsmede een eindverslag na afronding van de behandeling.
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 4. Verwijsformulier / Contact / Wachttijden */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
            
            {/* Download */}
            <div className="bg-white p-8 rounded border border-slate-200 flex flex-col items-center text-center shadow-sm hover:border-[#33C5F3] transition-colors">
               <div className="w-16 h-16 bg-slate-50 text-[#33C5F3] rounded-full flex items-center justify-center text-2xl mb-6"><FaFileDownload /></div>
               <h3 className="text-xl font-bold text-[#2b2e4a] mb-4">Word / PDF Formulier</h3>
               <p className="text-slate-600 text-sm mb-6">Werkt u niet met ZorgDomein? Download ons standaard SGGZ Verwijsformulier, vul het in, en geef het mee aan de patiënt of mail het via uw beveiligde verbinding.</p>
               <button className="mt-auto px-6 py-3 bg-slate-100 font-bold text-slate-700 hover:bg-[#33C5F3] hover:text-white rounded transition-colors w-full">
                  Download Verwijsformulier (.docx)
               </button>
            </div>

            {/* Wachttijden */}
            <div className="bg-white p-8 rounded border border-slate-200 flex flex-col items-center text-center shadow-sm">
               <div className="w-16 h-16 bg-slate-50 text-[#33C5F3] rounded-full flex items-center justify-center text-2xl mb-6"><FaClock /></div>
               <h3 className="text-xl font-bold text-[#2b2e4a] mb-4">Actuele Wachttijden</h3>
               <p className="text-slate-600 text-sm mb-6">In tegenstelling tot de reguliere GGZ streven wij ernaar de toegangstijd voor de neuromodulatie te minimaliseren.</p>
               
               <div className="w-full mt-auto space-y-3">
                  <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                     <span className="text-slate-500 font-medium">Aanmelding tot Intake:</span>
                     <span className="font-bold text-[#2b2e4a]">1 à 2 weken</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                     <span className="text-slate-500 font-medium">Intake tot Behandeling:</span>
                     <span className="font-bold text-[#2b2e4a]">1 week</span>
                  </div>
               </div>
            </div>

            {/* Contact */}
            <div className="bg-[#2b2e4a] text-white p-8 rounded shadow-sm border border-[#2b2e4a] flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-white/10 text-[#33C5F3] rounded-full flex items-center justify-center text-2xl mb-6"><FaComments /></div>
               <h3 className="text-xl font-bold mb-4">Intercollegiaal Overleg</h3>
               <p className="text-slate-300 text-sm mb-6">Twijfelt u over een indicatie, of wilt u even sparren met een van onze psychiaters over een complexe casus voordat u formal doorverwijst?</p>
               <div className="mt-auto w-full text-left bg-white/5 p-4 rounded border border-white/10">
                  <p className="font-bold text-[#33C5F3]">Verwijzerslijn (Direct):</p>
                  <p className="text-lg">088 - XXX XX XX</p>
                  <p className="text-sm text-slate-400 mt-1">Bereikbaar tijdens kantooruren</p>
               </div>
            </div>

         </div>
      </section>

      {/* 5. Samenwerking (End Block) */}
      <section className="py-24 bg-white border-t border-slate-200">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <FaHandshake className="text-6xl text-slate-200 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Structurele samenwerking</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Veel regionale GGZ-instellingen en psychologiepraktijken beschikken niet over de dure, hoogtechnologische rTMS-apparatuur. Gunt u uw patiënten de krachtige synergie van rTMS aangevuld met úw gesprekstherapie?
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Wij fungeren graag volkomen transparant als uw neuromodulatie-partner. Neem contact op met ons management, dan sturen wij vrijblijvend informatiemateriaal en folders op voor in uw wachtkamer.
            </p>
         </div>
      </section>

    </div>
    </>
  );
}
