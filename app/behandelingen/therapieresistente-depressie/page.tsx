import { Metadata } from 'next';
import Link from 'next/link';
import { FaSadTear, FaBrain, FaRegHospital, FaHandHoldingHeart, FaUserShield, FaChartLine, FaCheckCircle, FaStar, FaChevronDown, FaPills, FaUnlockAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Therapieresistente Depressie Behandelen met rTMS | rtms-behandeling.nl',
  description: 'Werken antidepressiva niet bij u? rTMS is dé erkende behandeling voor therapieresistente depressie. Vergoed, bewezen effectief, minimale bijwerkingen. Meld u aan.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/behandelingen/therapieresistente-depressie/',
  },
  openGraph: {
    title: 'Therapieresistente Depressie — rTMS als bewezen alternatief',
    description: 'Een nieuw medisch perspectief. Werken uw antidepressiva niet of zijn de bijwerkingen te zwaar? rTMS biedt een vergoede uitweg.',
    url: 'https://rtms-behandeling.nl/behandelingen/therapieresistente-depressie/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-trd.png',
        width: 1200,
        height: 630,
        alt: 'Geholpen worden aan therapieresistente depressie met veilige magneetstimulatie',
      },
    ],
    locale: 'nl_NL',
    type: 'article',
  },
};

const trdSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "rTMS bij Therapieresistente Depressie — Repetitieve Transcraniële Magnetische Stimulatie",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Niet-invasieve hersenstimulatie waarbij magnetische pulsen specifieke hersengebieden activeren om therapieresistente depressie (TRD) te behandelen.",
    "howPerformed": "Een magnetische spoel wordt op het hoofd geplaatst en geeft herhaaldelijk magnetische pulsen af aan de linker prefrontale cortex.",
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Therapieresistente Depressie"
      },
      {
        "@type": "MedicalIndication",
        "name": "Eénpolige Depressie"
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
        "name": "rTMS bij Therapieresistente Depressie",
        "item": "https://rtms-behandeling.nl/behandelingen/therapieresistente-depressie/"
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
        "name": "Wanneer spreekt men officieel van een therapieresistente depressie (TRD)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Nederland hanteren we veelal de klinische definitie dat u wordt gediagnosticeerd met TRD wanneer u ten minste twee verschillende soorten antidepressiva (met adequate dosis en duur) heeft geprobeerd zónder voldoende klinische verbetering."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn de effecten van rTMS blijvend voor TRD-patiënten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor de meerderheid van de patiënten die gunstig reageren op rTMS ontstaat er langdurige remissie, zeker in combinatie met cognitieve gedragstherapie. Omdat we neurale plasticiteit bevorderen, wordt uw brein fysiek sterker. Soms plannen we na verloop van tijd korte 'onderhoudssessies' in."
        }
      },
      {
        "@type": "Question",
        "name": "Kan rTMS Elektroconvulsietherapie (ECT) vervangen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vaak wel. rTMS wordt in de officiële richtlijnen gepositioneerd tussen zware farmacotherapie en ECT in. Het grote voordeel van rTMS is dat u geen narcose nodig heeft, er geen sprake is van epileptische insultenopwekking, en geheugenverlies (een veelvoorkomende bijwerking van ECT) afwezig is."
        }
      },
      {
        "@type": "Question",
        "name": "Wordt deze behandeling 100% vergoed door mijn verzekeraar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Sinds oktober 2017 heeft het Zorginstituut Nederland rTMS als bewezen effectief erkend voor TRD. Dit betekent dat het standaard in het basispakket zit van alle zorgverzekeraars (als onderdeel van Specialistische GGZ). U betaalt uitsluitend uw wettelijk eigen risico, mits beoordeeld door onze regiebehandelaar."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik tijdens het rTMS traject gewoon blijven autorijden of werken?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, absoluut. Een rTMS-sessie is volledig poliklinisch en vereist geen sedatie. U merkt geen acute sufheid en de concentratie blijft intact. Veel van onze patiënten plannen sessies in tussen hun (re-integratie) werkzaamheden door."
        }
      }
    ]
  }
];

export default function BehandelingTRD() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trdSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center py-20 pb-24">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-trd.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              Therapieresistente Depressie — <br className="hidden md:block" />
              rTMS als bewezen alternatief
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
              Slaan pillen niet aan en stagneert praattherapie? Ontdek de medisch erkende, maximaal vergoede behandeling die de biologie van uw brein herstelt.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="flex justify-center items-center px-10 py-5 bg-[#33C5F3] text-white rounded-full font-bold hover:bg-[#29a5cd] transition shadow-lg text-lg">
                Direct aanmelden voor TRD intake
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Wat is therapieresistente depressie? / 3. Hoe wordt het vastgesteld? */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Wat is therapieresistente depressie?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Een depressie wordt als <strong>therapieresistent</strong> (TRD / Treatment-Resistant Depression) geclassificeerd wanneer patiënten onvoldoende reageren op opeenvolgende gangbare behandelingen. Terwijl het eerste of tweede voorgeschreven antidepressivum bij de helft van de patiënten het leven dragelijker maakt, blijft ruim 30% van de deprimerende patiënten achter met onverminderde neerslachtigheid en apathie.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dit wekt vaak gevoelens op van ultieme hopeloosheid: <em className="text-slate-500">"Zelfs de pillen werken niet, dus het ligt echt aan mij."</em> Dat is klinisch gezien onwaar. U reageert simpelweg niet op systemische farmacologie. Uw hersenen vereisen een gerichtere, mechanische 'reset'.
              </p>
            </div>

            <div className="bg-slate-50 p-10 border-l-[6px] border-[#33C5F3] relative h-full flex flex-col justify-center">
               <div className="absolute top-0 right-0 p-6 text-slate-200"><FaPills className="text-8xl" /></div>
               <div className="relative z-10 block">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Hoe wordt TRD vastgesteld?</h2>
                 <p className="text-slate-600 leading-relaxed mb-6">
                   In de Nederlandse richtlijnen spreken we van therapieresistentie indien:
                 </p>
                 <ul className="space-y-3 text-slate-600 leading-relaxed">
                   <li className="flex items-start gap-3">
                     <FaCheckCircle className="text-[#33C5F3] mt-1 shrink-0" />
                     U minimaal 2 verschillende groepen antidepressiva (bijv. SSRI en SNRI) in behoorlijke dosering en voor adequate tijdsduur heeft afgerond.
                   </li>
                   <li className="flex items-start gap-3">
                     <FaCheckCircle className="text-[#33C5F3] mt-1 shrink-0" />
                     Reguliere psychotherapie (zoals cognitieve gedragstherapie) ook onvoldoende remissie bood.
                   </li>
                 </ul>
               </div>
            </div>

          </div>
        </section>

        {/* 4. Waarom rTMS bij TRD? / 5. Criteria */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            
            <div className="h-full min-h-[440px] bg-white border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center p-6 relative">
               <div className="w-full aspect-[4/3] bg-slate-100 flex items-center justify-center text-[#33C5F3] mb-6">
                <FaUnlockAlt className="text-[120px]" />
               </div>
               <p className="text-sm text-slate-500 italic max-w-sm mx-auto">Figuur: Waar medicatie in de bloedbaan (systemisch) stagneert, werkt rTMS direct in op de stagnerende synapsen.</p>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Waarom rTMS bij therapieresistente depressie?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                Antidepressiva proberen de balans van neurotransmitters (zoals serotonine) in uw hele brein te sturen via uw bloedbaan. Dit kan talloze weefsels raken (wat leidt tot zware bijwerkingen als gewichtstoename of libido-verlies), zónder ooit het werkelijk zwakke hersengedeelte voldoende te bereiken.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Een nieuwe dimensie in de GGZ</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                rTMS pakt het anders aan. Wij vuren hoogfrequente magneetvelden áf buiten de schedel, die puur en alleen de linker dorso-laterale prefrontale cortex stimuleren—precies het gebied dat in slaap is gevallen door de TRD. Met deze niet-invasieve schokjes generen de neuronen nieuwe bloedbanen en verbindingen. We stimuleren <em>neuroplasticiteit</em> exact daar waar de medicatie jammerlijk tekortschoot.
              </p>

              <div className="p-4 bg-white border-l-4 border-[#33C5F3] shadow-sm mt-8">
                <h3 className="font-bold text-[#33C5F3] mb-1">Criteria voor het rTMS zorgpad</h3>
                <p className="text-sm text-slate-600">Om binnen de verzekerde GGZ in aanmerking te komen is een verwijzing van uw (huis)arts verplicht. Evenals het uitsluiten van epilepsie of implantaten. Bij onze intake checken we direct uw geschiktheid.</p>
              </div>

            </div>

          </div>
        </section>

        {/* 6. Resultaten en herstelkansen / 7. Vergoeding */}
        <section className="py-24 bg-[#2b2e4a] text-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            
            <div>
              <div className="w-12 h-12 bg-white/10 border border-[#33C5F3] rounded-full flex items-center justify-center text-[#33C5F3] mb-6 shadow-sm text-xl"><FaChartLine /></div>
              <h2 className="text-3xl font-bold mb-4">Resultaten en herstelkansen</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-6"></div>
              <p className="text-slate-300 leading-relaxed mb-6">De statistieken voor een patiëntengroep die alle hoop had opgegeven (TRD-cliënten) zijn uiterst robuust te noemen.</p>
              <ul className="space-y-4 text-slate-300 leading-relaxed">
                <li className="flex items-start gap-4">
                  <span className="text-[#33C5F3] mt-1"><FaCheckCircle /></span>
                  <div>
                    <strong className="text-white block mb-1">50% — 70% Respons</strong>
                    Ruim de helft van de uitbehandelde patiënten voelt zich na 20-30 rTMS sessies structureel lichter, energieker en in staat sociaal te functioneren.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#33C5F3] mt-1"><FaCheckCircle /></span>
                  <div>
                    <strong className="text-white block mb-1">Volledige Remissie</strong>
                    Rond de één derde van de zwaarst depressieve patiënten ervaart een complete afwezigheid van symptomen (ziektevrij).
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 relative overflow-hidden flex flex-col justify-center">
                 <div className="w-12 h-12 bg-[#33C5F3] flex items-center justify-center text-white rounded-full mb-6 text-2xl"><FaUserShield /></div>
                 <h2 className="text-3xl font-bold mb-6">100% Vergoeding vanuit Basisverzekering</h2>
                 <p className="text-slate-300 leading-relaxed mb-6">
                   Dit is ontzettend cruciaal: omdat het Zorginstituut het nut inziet van rTMS voor Therapieresistente Depressie, zit deze specifieke indicatie verankerd in de <strong>basis GGZ zorg</strong> (sinds 2017).
                 </p>
                 <p className="text-slate-300 leading-relaxed font-bold mb-6">
                   Wanneer onze regiebehandelaar vaststelt dat u inderdaad kwalificeert voor TRD, declareren wij dit zorgpad direct bij uw zorgverzekeraar. U hoeft in theorie alleen met uw verplichte jaarlijkse eigen risico rekening te houden.
                 </p>
                 <Link href="/vergoeding-kosten/" className="text-[#33C5F3] font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:text-white transition-colors">
                    Bekijk gecontracteerde verzekeraars <FaChevronDown className="rotate-[-90deg]" />
                 </Link>
            </div>

          </div>
        </section>

        {/* 8. Ervaringen / 9. Wetenschappelijk Bewijs */}
        <section className="py-24 bg-white border-t border-slate-100">
           <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
             
             {/* Ervaringen */}
             <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Doorbreken van de impasse</h2>
              <div className="space-y-6">
                <blockquote className="bg-slate-50 p-6 border-l-4 border-[#33C5F3] shadow-sm">
                  <p className="italic text-slate-600 leading-relaxed mb-4">"Zeven jaar lang switchte de psychiater tussen Citalopram, Sertraline en nog zwaarder geschut. Ik werd een wandelende, emotieloze zombie. rTMS op de kliniek in Schiphol-Rijk wekte, zonder ook maar de geringste sufheid, het 'kleurrijke' deel van mijn hersenen weer tot leven. Huilend van geluk heb ik afgesloten."</p>
                  <footer className="font-bold text-slate-900">— Anja (58 jaar)</footer>
                </blockquote>
                <blockquote className="bg-slate-50 p-6 border-l-4 border-[#33C5F3] shadow-sm">
                  <p className="italic text-slate-600 leading-relaxed mb-4">"Men wilde me doorverwijzen voor shocktherapie (ECT) in het ziekenhuis toen ook Lexapro niet aansloeg. Doodsbang was ik daarvoor. rTMS bleek een extreem milde, pijnloze buffer daartussen. In 20 sessies klaarde de neerslachtigheid volledig op."</p>
                  <footer className="font-bold text-slate-900">— Wouter (41 jaar)</footer>
                </blockquote>
              </div>
            </div>

            {/* Wetenschap */}
            <div className="flex flex-col justify-center py-6">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-4"><FaStar className="text-[#33C5F3]" /> De nieuwe GGZ-standaard</h2>
                 <p className="text-slate-600 leading-relaxed mb-6">
                   Niet zomaar goedgekeurd: rTMS staat prominent omschreven in de <strong className="text-slate-900">Multidisciplinaire Richtlijn Depressie (Trimbos)</strong> als de preferente stap voordat tot ECT of zware MAO-remmers wordt besloten. Wetenschappelijk bewijs, geredigeerd in de The Lancet Psychiatry, stelt dat rTMS de verzwakte communicatie in de Frontale Cortex structureel (MRI-bewezen) regenereert en normaliseert.
                 </p>
            </div>

           </div>
        </section>

        {/* 10. Veelgestelde vragen */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Veelgestelde vragen</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto"></div>
            </div>
            
            <div className="space-y-0">
              {(trdSchema[3] as any).mainEntity.map((faq: any, idx: number) => (
                <details key={idx} className="group border-b border-slate-200 py-6 cursor-pointer bg-white px-6 mb-2 rounded shadow-sm [&_summary::-webkit-details-marker]:hidden">
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

        {/* CTA Locaties (Aanmelden) */}
        <section className="py-24 bg-[#2b2e4a] text-white">
           <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Zet de stap uit het zwarte gat</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Laat u niet ontmoedigen door falende medicatie. Wij zijn experts in het behandelen van zware, resistente depressies in Noord-Holland.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="px-10 py-5 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-lg rounded-full text-lg">
                Boek een Intake
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
