import { Metadata } from 'next';
import Link from 'next/link';
import { FaBookMedical, FaUniversity, FaFileSignature, FaChartLine, FaCheckCircle, FaSearchPlus, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Wetenschappelijk Bewijs voor rTMS | Studies & Onderzoek | rtms-behandeling.nl',
  description: 'rTMS is erkend door de FDA, Nederlandse Gezondheidsraad en opgenomen in de multidisciplinaire richtlijn depressie 2024. Lees de wetenschappelijke onderbouwing.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/wetenschappelijk-bewijs/',
  },
  openGraph: {
    title: 'Wetenschappelijk Bewijs voor rTMS Behandeling',
    description: 'Geen experimentele therapie, maar de nieuwe klinische goudstandaard. Bekijk de data en FDA en Trimbos protocollen achter rTMS.',
    url: 'https://rtms-behandeling.nl/wetenschappelijk-bewijs/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-wetenschap.png',
        width: 1200,
        height: 630,
        alt: 'Wetenschappelijk onderzoek naar rTMS hersenstimulatie',
      },
    ],
    locale: 'nl_NL',
    type: 'article',
  },
};

const scienceSchema = [
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
        "name": "Wetenschappelijk bewijs",
        "item": "https://rtms-behandeling.nl/wetenschappelijk-bewijs/"
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

export default function WetenschappelijkBewijs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scienceSchema) }}
      />
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. Hero */}
      <section className="relative w-full min-h-[50vh] flex flex-col justify-center py-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/og-wetenschap.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center mt-12">
          <FaBookMedical className="text-5xl text-[#33C5F3] mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
            Wetenschappelijk Bewijs voor rTMS
          </h1>
          <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
          <p className="text-white/90 text-xl font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-sm mb-6">
            Hoe een experimentele techniek de nieuwe klinische richtlijn in de psychiatrie werd. Transparante data, wereldwijde accreditaties en bewezen resultaten.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white border-b border-slate-200">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-[#2b2e4a] mb-6">Niet langer experimenteel</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
               De tijd dat rTMS (Repetitieve Transcraniële Magnetische Stimulatie) uitsluitend in universitaire laboratoria werd toegepast, ligt jaren achter ons. Wereldwijd worden inmiddels dagelijks duizenden patiënten behandeld. Dit platform is gebouwd op decennia aan peer-reviewed, dubbelblinde en placebo-gecontroleerde medische studies.
            </p>
         </div>
      </section>

      {/* 2. Erkenning door gezondheidsautoriteiten */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Erkenning door gezondheidsautoriteiten</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mx-auto"></div>
           </div>

           <div className="grid lg:grid-cols-3 gap-8">
              
              {/* FDA */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:border-[#33C5F3] transition-colors">
                 <FaUniversity className="text-4xl text-[#33C5F3] mb-6" />
                 <h3 className="text-2xl font-bold text-[#2b2e4a] mb-4">FDA-goedkeuring (VS)</h3>
                 <p className="text-slate-600 leading-relaxed text-sm">
                   De U.S. Food and Drug Administration (FDA) is wereldwijd het strengste orgaan voor medische technologie. In <strong>2008</strong> verleende de FDA de allereerste klaring voor rTMS ter behandeling van Major Depressive Disorder (MDD). 
                 </p>
                 <p className="text-slate-600 leading-relaxed mt-4 text-sm">
                   In de daaropvolgende jaren heeft de FDA haar goedkeuring uitgebreid voor de behandeling van OCD (dwangstoornis) in 2018, en rookverslaving in 2020.
                 </p>
              </div>

              {/* Gezondheidsraad */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:border-[#33C5F3] transition-colors relative overflow-hidden">
                 <FaFileSignature className="text-[120px] text-slate-50 absolute -right-4 -bottom-4 pointer-events-none" />
                 <h3 className="text-2xl font-bold text-[#2b2e4a] mb-4 relative z-10">Nederlandse Gezondheidsraad</h3>
                 <p className="text-slate-600 leading-relaxed text-sm relative z-10">
                   Na positief advies van het Zorginstituut Nederland werd rTMS in <strong>oktober 2017</strong> officieel opgenomen in het Nederlandse basispakket voor de indicatie therapieresistente depressie. 
                 </p>
                 <p className="text-slate-600 leading-relaxed mt-4 text-sm relative z-10">
                   Zij concludeerden dat de behandeling voldoet aan de wettelijke eis 'stand van de wetenschap en praktijk', waardoor verzekeraars rTMS in de SGGZ moesten gaan vergoeden.
                 </p>
              </div>

              {/* Richtlijn Depressie */}
              <div className="bg-[#2b2e4a] text-white p-8 rounded-lg shadow-sm border border-[#2b2e4a]">
                 <FaCheckCircle className="text-4xl text-[#33C5F3] mb-6" />
                 <h3 className="text-2xl font-bold text-white mb-4">Richtlijn Depressie 2024</h3>
                 <p className="text-slate-300 leading-relaxed text-sm">
                   De <em>Multidisciplinaire Richtlijn Depressie</em> (uitgegeven oor o.a. de NVvP, Trimbos en NIP) stelt vast hoe artsen in Nederland depressie moeten behandelen.
                 </p>
                 <p className="text-slate-300 leading-relaxed mt-4 text-sm">
                   In the recente herzieningen heeft rTMS formeel haar intrede gedaan als 'Step-up' interventie in het stappenplan. Het wordt nu geadviseerd ná het falen van twee reguliere medicatiestappen, en nog vóórdat er wordt overgegaan op zware ECT (Elektroconvulsietherapie).
                 </p>
              </div>

           </div>
        </div>
      </section>

      {/* 3. Effectiviteit in cijfers (Stats Banner) */}
      <section className="py-20 bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop')] relative">
        <div className="absolute inset-0 bg-[#33C5F3] mix-blend-multiply opacity-90"></div>
        <div className="absolute inset-0 bg-[#2b2e4a] opacity-80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
           <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Effectiviteit in cijfers</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">De onderstaande data is afkomstig uit grote onafhankelijke meta-analyses (zoals de STAR*D studie benchmark vs. rTMS databases) voor patiënten met Therapieresistente Depressie (TRD).</p>
           </div>

           <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              <div className="py-6">
                 <div className="text-5xl lg:text-6xl font-bold text-[#33C5F3] mb-4">50-60%</div>
                 <div className="text-white font-bold text-xl mb-2">Responspercentage</div>
                 <p className="text-slate-300 text-sm px-4">Ervaart een klinisch significante daling in depressieklachten (≥50% reductie op de HAM-D schaal).</p>
              </div>
              <div className="py-6">
                 <div className="text-5xl lg:text-6xl font-bold text-[#33C5F3] mb-4">~33%</div>
                 <div className="text-white font-bold text-xl mb-2">Volledige Remissie</div>
                 <p className="text-slate-300 text-sm px-4">Een derde van deze zeer zware, 'onbehandelbare' patiëntengroep wordt na de cyclus volledig klachtenvrij verklaard.</p>
              </div>
              <div className="py-6">
                 <div className="text-5xl lg:text-6xl font-bold text-[#33C5F3] mb-4">&lt; 5%</div>
                 <div className="text-white font-bold text-xl mb-2">Uitvalpercentage</div>
                 <p className="text-slate-300 text-sm px-4">Zeldzaam laag uitvalpercentage binnen de GGZ, vanwege de milde bijwerkingen vergeleken met medicatie.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Geselecteerde wetenschappelijke publicaties */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
           
           <div className="flex items-center gap-4 mb-10">
              <FaSearchPlus className="text-3xl text-[#33C5F3]" />
              <h2 className="text-3xl font-bold text-slate-900">Geselecteerde publicaties</h2>
           </div>
           <p className="text-slate-600 mb-12">Een selectie van toonaangevende peer-reviewed onderzoeken die de klinische werkzaamheid van rTMS bij specifieke aandoeningen hebben bewezen.</p>

           <div className="space-y-12">
              
              <div className="border-l-4 border-[#33C5F3] pl-6">
                 <h3 className="text-2xl font-bold text-[#2b2e4a] mb-2">rTMS bij Depressie & MDD</h3>
                 <p className="text-slate-500 font-medium italic text-sm mb-4">George, M. S., et al. (2010). "Daily left prefrontal transcranial magnetic stimulation therapy for major depressive disorder: a sham-controlled randomized trial." Archives of General Psychiatry.</p>
                 <p className="text-slate-600 leading-relaxed text-sm">Een van de pioniersstudies in de VS. Deze onafhankelijke studie (frequentie 10 Hz over de DLPFC) bewees categorisch dat actieve rTMS significant superieur is aan 'sham' (placebo) rTMS. De resultaten vormden de basis voor brede goedkeuring.</p>
              </div>

              <div className="border-l-4 border-[#2b2e4a] pl-6">
                 <h3 className="text-2xl font-bold text-[#2b2e4a] mb-2">rTMS bij OCD (Dwangstoornis)</h3>
                 <p className="text-slate-500 font-medium italic text-sm mb-4">Carmi, L., et al. (2019). "Efficacy and Safety of Deep Transcranial Magnetic Stimulation for Obsessive-Compulsive Disorder: A Prospective Multicenter Randomized Double-Blind Placebo-Controlled Trial." American Journal of Psychiatry.</p>
                 <p className="text-slate-600 leading-relaxed text-sm">Deze multicenterstudie toonde aan dat stimulatie, specifiek gericht op de mediale prefrontale cortex (mPFC) en de Anterieure Cingulate Cortex (ACC) met behulp van provocatie-protocollen, Leidde tot significante reductie van dwanghandelingen (Y-BOCS scores).</p>
              </div>

              <div className="border-l-4 border-[#33C5F3] pl-6">
                 <h3 className="text-2xl font-bold text-[#2b2e4a] mb-2">rTMS bij PTSS & Trauma</h3>
                 <p className="text-slate-500 font-medium italic text-sm mb-4">Bisson, J. I., et al. (2014). "Transcranial magnetic stimulation for post-traumatic stress disorder (PTSD)." Cochrane Database of Systematic Reviews.</p>
                 <p className="text-slate-600 leading-relaxed text-sm">Uit systematische reviews in the PTSS-veld blijkt dat rTMS gericht op de rechter DLPFC helpt om hyperarousal te reguleren en de cognitieve controle over emotionele herbelevingen (amygdala-activatie) te vergroten, vaak in synergie met EMDR.</p>
              </div>

           </div>
        </div>
      </section>

      {/* 5. Lopend onderzoek & Toekomst */}
      <section className="py-24 bg-slate-100 border-t border-slate-200">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Lopend onderzoek</h2>
            <div className="w-16 h-1 bg-[#2b2e4a] mx-auto mb-10"></div>
            
            <div className="bg-white p-10 rounded shadow-md border-t-8 border-[#33C5F3] relative">
               <FaQuoteLeft className="absolute top-6 left-6 text-4xl text-slate-100" />
               <h3 className="text-xl font-bold text-[#2b2e4a] mb-4">Baanbrekende protocollen: iTBS / SAINT</h3>
               <p className="text-slate-600 leading-relaxed mb-6">
                  De wetenschap staat niet stil. Waar het standaard rTMS protocol (10 Hz) 20 á 30 minuten duurt, onderzoekt men momenteel de effectiviteit van Theta Burst Stimulatie (iTBS) waarbij de blootstelling teruggebracht wordt naar 3 minuten per sessie.
               </p>
               <p className="text-slate-600 leading-relaxed">
                  Tevens tonen recente Stanford-onderzoeken (het SAINT-protocol) aan dat gecomprimeerde dagen met meedere iTBS-sessies per dag tot ongekende remissiecijfers (tot 80%) in extreem korte tijdframes kunnen leiden. Wij volgen deze academische ontwikkelingen nauwlettend en integreren FDA-goedgekeurde protocollen direct in onze klinische praktijk.
               </p>
            </div>
         </div>
      </section>

    </div>
    </>
  );
}
