import { Metadata } from 'next';
import Link from 'next/link';
import { FaSyncAlt, FaBrain, FaRegHospital, FaHandHoldingHeart, FaUserShield, FaChartLine, FaCheckCircle, FaStar, FaChevronDown, FaLock, FaMicroscope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'rTMS bij OCD & Dwangstoornis | Bewezen Effectief | rtms-behandeling.nl',
  description: 'OCD (obsessief-compulsieve stoornis) reageert goed op rTMS-behandeling. Vergoed door zorgverzekering. Lees hoe rTMS dwanggedachten en -handelingen vermindert.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/behandelingen/ocd-dwangstoornis/',
  },
  openGraph: {
    title: 'rTMS bij OCD — Effectieve behandeling van dwanggedachten en -handelingen',
    description: 'Doorbreek de cirkel van dwanggedachten en obsessies met een klinisch bewezen, medicatievrije behandeling.',
    url: 'https://rtms-behandeling.nl/behandelingen/ocd-dwangstoornis/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-ocd.png',
        width: 1200,
        height: 630,
        alt: 'Georganiseerde, kalme behandelruimte met rTMS',
      },
    ],
    locale: 'nl_NL',
    type: 'article',
  },
};

const ocdSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "rTMS bij OCD & Dwangstoornis — Repetitieve Transcraniële Magnetische Stimulatie",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Niet-invasieve hersenstimulatie waarbij magnetische pulsen specifieke hersengebieden activeren om dwangstoornissen (OCD) te behandelen.",
    "howPerformed": "Een magnetische spoel wordt op het hoofd geplaatst en geeft herhaaldelijk magnetische pulsen af aan de mPFC of het SMA-gebied.",
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Obsessief-compulsieve stoornis (OCD)"
      },
      {
        "@type": "MedicalIndication",
        "name": "Dwangstoornis"
      }
    ],
    "status": "https://schema.org/ActiveActionStatus",
    "recognizingAuthority": {
      "@type": "Organization",
      "name": "FDA"
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
        "name": "rTMS bij OCD",
        "item": "https://rtms-behandeling.nl/behandelingen/ocd-dwangstoornis/"
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
        "name": "Werkt rTMS voor alle vormen van dwang (smetvrees, controledwang, gedachten)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Omdat rTMS inwerkt op de onderliggende neurologische aandrijflijn van de dwang (het filtermechanisme van de hersenen), is het effectief ongeacht hoe de dwang zich specifiek bij u uit (smetvrees, intrusies, tellen of controleren)."
        }
      },
      {
        "@type": "Question",
        "name": "Voel ik direct effect bij OCD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het hertrainen van overactieve neurologische paden kost tijd. Patiënten ervaren vaak na zo'n 10 tot 15 sessies de eerste veranderingen, zoals iets makkelijker de drang tot een handeling te kunnen negeren. Het volledige effect wordt na het traject opgebouwd, vaak in combinatie met ERP-therapie."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik speciale dingen doen tijdens de rTMS-sessie voor OCD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bij de behandeling van OCD wordt soms gewerkt met zogeheten 'provocatieprotocollen'. Uw behandelaar bespreekt kort uw specifieke dwangprikkel net vóór of tijdens de stimulatie. Dit activeert het specifieke dwangnetwerk in de hersenen, waardoor de magnetische pulsen daar exact en effectief op in kunnen werken."
        }
      },
      {
        "@type": "Question",
        "name": "Wordt de behandeling voor dwang / OCD vergoed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "rTMS behandeling wordt primair vergoed onder de indicatie 'therapieresistente depressie'. Omdat zware OCD bijna altijd gepaard gaat met sterke depressieve episodes, is er na een uitgebreide intake via onze psychiaters veelal een traject mogelijk dat binnen uw verzekering (GGZ) valt."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik rTMS volgen als ik al zware medicatie (zoals clomipramine) slik?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. rTMS is juist een sterk alternatief voor patiënten die onvoldoende baat hebben bij traditionele tricyclische antidepressiva of SSRI's. U kunt uw huidige medicatie tijdens de start van het rTMS traject gewoon blijven gebruiken, mits we dit uitgebreid screenen tijdens de intake."
        }
      }
    ]
  }
];

export default function BehandelingOcd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ocdSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center py-20 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-ocd.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              rTMS bij OCD — <br className="hidden md:block" />
              Effectieve behandeling van dwanggedachten
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
              Doorbreek de kortsluiting in uw brein. Herstel de controle over uw gedachten en handelingen zonder extra medicatie.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="flex justify-center items-center px-10 py-5 bg-[#33C5F3] text-white rounded-full font-bold hover:bg-[#29a5cd] transition shadow-lg text-lg">
                Intake aanvragen
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Wat is OCD? / 3. De rol van de hersenen */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Wat is OCD (obsessief-compulsieve stoornis)?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Een Obsessief-Compulsieve Stoornis (OCD), in de volksmond vaak dwangstoornis genoemd, kenmerkt zich door hardnekkige, ongewenste gedachten (obsessies) die hevige angst of onrust veroorzaken. Om die onrust te verlagen voelt u zich gedwongen om bepaalde handelingen (compulsies) eindeloos uit te voeren. Dit kan variëren van extreme smetvrees tot tel-rituelen en agressieve of verontrustende intrusies.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Het is een slopende aandoening die veel energie kost. Veel patiënten voelen zich opgesloten in een vicieuze cirkel waarbij therapie alleen soms onvoldoende effect heeft en zware medicatie nodig lijkt.
              </p>
            </div>

            <div className="bg-slate-50 p-10 border-l-[6px] border-[#33C5F3] relative object-cover h-full">
               <div className="absolute top-0 right-0 p-6 text-slate-200"><FaBrain className="text-9xl" /></div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">De rol van de hersenen bij OCD</h2>
                 <p className="text-slate-600 leading-relaxed mb-6">
                   Modern hersenonderzoek toont aan dat OCD geen 'karaktertrek' is, maar een functionele overactiviteit in specifieke hersencircuits (zoals de <em>cortico-striato-thalamo-corticale</em> lus). 
                 </p>
                 <p className="text-slate-600 leading-relaxed font-bold">
                   Simpel gezegd: het "foutfilter" van de hersenen blijft hangen op een alarmstand, waardoor de neurologische signalen in een eindeloze loop vastlopen (kortsluiting). Uw brein herkent niet dat het gevaar is geweken, zelfs al weet u dit rationeel wel.
                 </p>
               </div>
            </div>

          </div>
        </section>

        {/* 4. Hoe werkt rTMS bij OCD? */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            
            <div className="h-full min-h-[440px] bg-white border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center p-6 relative">
               <div className="w-full aspect-[4/3] bg-slate-100 flex items-center justify-center text-[#33C5F3] mb-6">
                <FaLock className="text-[120px]" />
               </div>
               <p className="text-sm text-slate-500 italic max-w-sm mx-auto">Figuur: rTMS 'reset' het communicatienetwerk en doorbreekt de loop tussen de prefrontale cortex en de basale ganglia.</p>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Hoe werkt rTMS bij OCD?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                Repetitieve Transcraniële Magnetische Stimulatie (rTMS) wekt kleine, gerichte stroompjes op dwars door de schedel heen. Deze pulsen moduleren direct de hyperactieve netwerken die geassocieerd zijn met controleverlies en angst.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Welke hersengebieden worden gestimuleerd bij OCD?</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Terwijl we bij depressie vaak de dorso-laterale prefrontale cortex (DLPFC) stimuleren om hem te activeren, ligt bij OCD de focus op netwerken zoals de <strong>mPFC (mediale prefrontale cortex)</strong> of het <strong>SMA (supplementary motor area)</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Door laagfrequente (remmende) stimulatie toe te passen op deze specifieke gebieden, forceert rTMS een neurobiologische afremming. U doorbreekt de vastgelopen lus. Het brein leert opnieuw te filteren, wat de extreme aandrang (compulsies) aanzienlijk verzwakt.
              </p>

            </div>

          </div>
        </section>

        {/* 5. Resultaten / 6. ERP Combinatie */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            
            <div>
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-[#33C5F3] mb-6 shadow-sm text-xl"><FaChartLine /></div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Resultaten van rTMS bij OCD</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-6"></div>
              <p className="text-slate-600 leading-relaxed mb-4">In de klinische praktijk blijkt dat veel OCD patiënten de behandeling als 'bevrijdend' ervaren, nadat eerdere trajecten strandden.</p>
              <ul className="space-y-4 text-slate-600 leading-relaxed">
                <li className="flex items-start gap-4">
                  <span className="text-[#33C5F3] mt-1"><FaCheckCircle /></span>
                  <strong>Afname in compulsies:</strong> Onderzoeken tonen aanzienlijke reducties in de tijd besteed aan dwanghandelingen (Y-BOCS scores dalen sterk).
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#33C5F3] mt-1"><FaCheckCircle /></span>
                  <strong>Minder angst voor intrusies:</strong> Obsessieve gedachten worden minder 'plakkerig'; men ervaart afstand.
                </li>
              </ul>
            </div>

            <div>
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-[#33C5F3] mb-6 shadow-sm text-xl"><FaSyncAlt /></div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Combinatie met ERP-therapie</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-6"></div>
              <p className="text-slate-600 leading-relaxed mb-4">
                rTMS is enorm krachtig als neuro-biologische oplader, maar bij OCD passen we dit het beste toe als combinatiebehandeling met <strong>Exposure and Response Prevention (ERP)</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Blootstellingstherapie (ERP) is pijnlijk zwaar voor patiënten en wordt vaak niet volgehouden wegens de chronische angst. Doordat de rTMS de neurologische angstrespons voorwerk afzwakt, wordt de patiënt in staat gesteld de ERP sessies daadwerkelijk succesvol te voltooien en zo duurzaam de gedragspatronen af te leren.
              </p>
            </div>

          </div>
        </section>

        {/* 7. Is rTMS bij OCD vergoed? / 8. Ervaringen / 9. Bewijs */}
        <section className="py-24 bg-[#2b2e4a] text-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            
            <div className="space-y-16">
               <div className="bg-white/5 border border-white/10 p-10 relative overflow-hidden flex flex-col justify-center">
                  <div className="w-12 h-12 bg-[#33C5F3] flex items-center justify-center text-white rounded-full mb-6 text-2xl"><FaUserShield /></div>
                  <h2 className="text-3xl font-bold mb-6">Is rTMS bij OCD vergoed?</h2>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    In Nederland en bij onze verzekeraars is het behandelprotocol vergoed op voorwaarde van een diagnose <strong>therapieresistente depressie</strong>. Omdat OCD enorm belastend is voor het mentaal welzijn en een comorbide depressie zeer aannemelijk is, beoordelen we in de intake of uw behandeltraject aan de criteria voldoet om vergoed (via GGZ basisverzekering) in te regelen.
                  </p>
                  <Link href="/vergoeding-kosten/" className="text-[#33C5F3] font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:text-white transition-colors">
                    Bekijk de spelregels voor vergoeding <FaChevronDown className="rotate-[-90deg]" />
                  </Link>
               </div>

               <div>
                 <h2 className="text-3xl font-bold mb-6 flex items-center gap-4"><FaMicroscope className="text-[#33C5F3]" /> Wetenschappelijk bewijs</h2>
                 <p className="text-slate-300 leading-relaxed mb-4">
                   Internationale verenigingen voor psychiatrie hebben rTMS methodieken geaccepteerd (net als de FDA in de VS specifiek voor OCD-protocollen) als betrouwbare en veilige module. Klinisch onderzoek bewijst bovendien dat rTMS op het SMA aanzienlijk betere langetermijnrespons geeft vergeleken met enkel een verhoging van SSRI medicatie.
                 </p>
               </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Ervaringen van patiënten met OCD</h2>
              <div className="space-y-6">
                <blockquote className="bg-white/5 p-6 border-l-4 border-[#33C5F3]">
                  <p className="italic text-slate-300 leading-relaxed mb-4">"Voordat ik startte met rTMS waste ik mijn handen soms 6 uur per dag. Het beheerste mijn hele leven. Nu, na 25 sessies in de kliniek in Heiloo en doorzetten met de psycholoog, heb ik de dwang kunnen terugbrengen naar 20 minuutjes in de ochtend. Dat is een wonder voor mij."</p>
                  <footer className="font-bold text-[#33C5F3]">— Pieter (34 jaar)</footer>
                </blockquote>
                <blockquote className="bg-white/5 p-6 border-l-4 border-[#33C5F3]">
                  <p className="italic text-slate-300 leading-relaxed mb-4">"De verontrustende dwanggedachten raasden als een trein door mijn hoofd zonder remmen. rTMS voelde letterlijk alsof iemand eindelijk op de pauzeknop drukte. Een veilige behandeling waar je na een halfuurtje gewoon zelf weer voor wegrijdt."</p>
                  <footer className="font-bold text-[#33C5F3]">— Sanne (29 jaar)</footer>
                </blockquote>
              </div>
            </div>

          </div>
        </section>

        {/* 10. Veelgestelde vragen over rTMS bij OCD */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Veelgestelde vragen over rTMS bij OCD</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto"></div>
            </div>
            
            <div className="space-y-0">
              {(ocdSchema[3] as any).mainEntity.map((faq: any, idx: number) => (
                <details key={idx} className="group border-b border-slate-200 py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
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
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Doorbreek uw repetitieve handelingen</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Meld u aan voor een traject. Wij zitten voor u klaar in onze gespecialiseerde locaties in Heiloo of Schiphol-Rijk (Noord-Holland).</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="px-10 py-5 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-sm rounded-full text-lg">
                Boek een intakegesprek
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
