import { Metadata } from 'next';
import Link from 'next/link';
import { FaBatteryEmpty, FaBrain, FaRegHospital, FaHandHoldingHeart, FaUserShield, FaChartLine, FaCheckCircle, FaStar, FaChevronDown, FaBed, FaExclamationTriangle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'rTMS bij Burn-out | Herstel van Uitputting en Overbelasting | rtms-behandeling.nl',
  description: 'Burn-out uitgeput en niet meer verder kunnen? rTMS stimuleert hersengebieden die overbelast zijn geraakt. Bekijk hoe rTMS helpt bij herstel van burn-out.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/behandelingen/burn-out/',
  },
  openGraph: {
    title: 'rTMS bij Burn-out — Herstelbehandeling voor overbelaste hersenen',
    description: 'Burn-out uitgeput en niet meer verder kunnen? rTMS stimuleert hersengebieden die overbelast zijn geraakt.',
    url: 'https://rtms-behandeling.nl/behandelingen/burn-out/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-burnout.png',
        width: 1200,
        height: 630,
        alt: 'Serene herstelruimte met rTMS apparatuur gericht op rust',
      },
    ],
    locale: 'nl_NL',
    type: 'article',
  },
};

const burnoutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "rTMS bij Burn-out — Repetitieve Transcraniële Magnetische Stimulatie",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Niet-invasieve hersenstimulatie waarbij magnetische pulsen specifieke hersengebieden activeren om burn-out en chronische stress te behandelen.",
    "howPerformed": "Een magnetische spoel wordt op het hoofd geplaatst en geeft herhaaldelijk magnetische pulsen af aan de prefrontale cortex.",
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Burn-out"
      },
      {
        "@type": "MedicalIndication",
        "name": "Chronische Vermoeidheid"
      },
      {
        "@type": "MedicalIndication",
        "name": "Overspannenheid"
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
        "name": "rTMS bij Burn-out",
        "item": "https://rtms-behandeling.nl/behandelingen/burn-out/"
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
        "name": "Helpt rTMS specifiek bij chronische vermoeidheid door burn-out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Burn-out gerelateerde vermoeidheid ontstaat vaak doordat het brein constant neurologisch in de 'aan' stand staat. rTMS helpt de fysiologische balans in de hersenen te herstellen, wat bij veel patiënten leidt tot een aanzienlijke terugkeer van fysieke en mentale energie."
        }
      },
      {
        "@type": "Question",
        "name": "Zal rTMS mijn slaap verbeteren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Slaapproblemen zijn een kernelement van burn-out door de ontregelde stress-as (HPA-as). Omdat rTMS gericht is op het herstellen van de emotieregulatie en het verlagen van de constante hyperarousal, rapporteren veel patiënten na enkele weken een betere slaapkwaliteit."
        }
      },
      {
        "@type": "Question",
        "name": "Hoelang duurt een rTMS behandelingstraject voor burn-out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een gangbaar traject voor burn-out klachten omvat zo'n 20 tot 30 sessies, verspreid over 4 tot 6 weken. U komt gedurende deze periode meerdere keren per week voor een sessie van zo'n 20 tot 30 minuten."
        }
      },
      {
        "@type": "Question",
        "name": "Wordt rTMS bij burn-out vergoed door de verzekering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een 'zuivere' burn-out diagnose wordt door verzekeraars vaak niet direct binnen de GGZ vergoed, laat staan met rTMS. Echter gaat ernstige burn-out vaak gepaard met een zware depressieve episode. Is er sprake van therapieresistente depressie ten gevolge van de burn-out, dan wordt rTMS vaak wél vergoed vanuit de basisverzekering."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik de behandeling combineren met een re-integratietraject?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absoluut. rTMS is medicatievrij en u kunt na de behandeling direct autorijden. Veel patiënten gebruiken rTMS als neurobiologische ondersteuning parallel aan hun re-integratie en psychologische coachingstrajecten."
        }
      }
    ]
  }
];

export default function BehandelingBurnout() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(burnoutSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center py-20 pb-24">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-burnout.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              rTMS bij Burn-out — <br className="hidden md:block" />
              Herstelbehandeling voor overbelaste hersenen
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
              Doorbreek de extreme vermoeidheid en cognitieve uitputting veilige, gerichte magneetstimulatie. Geef uw zenuwstelsel de reset die het nodig heeft.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="flex justify-center items-center px-10 py-5 bg-[#33C5F3] text-white rounded-full font-bold hover:bg-[#29a5cd] transition shadow-lg text-lg">
                Intake aanvragen
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Wat gebeurt er in uw hersenen bij burn-out? */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Wat gebeurt er in uw hersenen bij burn-out?</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Een burn-out is geen teken van zwakte, maar een meetbare, biologische toestand van uitputting in het brein. Maanden - of zelfs jaren - van chronische stress zorgen ervoor dat het stress-systeem in uw hersenen (de HPA-as) permanent 'aan' blijft staan. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Het gevolg is dat de <strong>prefrontale cortex</strong>—het deel van de hersenen dat logisch nadenken, concentratie en planning regelt—letterlijk uitgeput en onderactief raakt. Tegelijkertijd wordt uw emotiecentrum (de amygdala) hyperactief. Deze neurologische verstoring verklaart waarom u zich, ondanks talloze uren slapen of rusten, niet kunt herstellen. De fysiologische accu weigert opnieuw op te laden zonder ingrijpen van buitenaf.
            </p>
          </div>
        </section>

        {/* 3. Hoe helpt rTMS bij burn-out klachten? */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Hoe helpt rTMS bij burn-out klachten?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                Gesprekstherapie is belangrijk voor het verwerken van stressoren, maar wanneer u zich in een zware burn-out bevindt dringen die gesprekken vaak niet eens door omdat u simpelweg de batterij ontbeert. Dit is waar Repetitieve Transcraniële Magnetische Stimulatie (rTMS) het verschil maakt.
              </p>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                rTMS pakt de overbelasting bij de wortel aan. Door middel van pijnloze magnetische pulsen stimuleren wij de linker dorso-laterale prefrontale cortex. Dit verhoogt de lokale bloeddoorstroming en herstelt de afgezwaakte communicatie-netwerken. Uw hersenen worden weer geactiveerd om de 'vecht-of-vlucht' reflex te dempen. Zo ontstaat de neuro-biologische rust die nodig is om uw energiepeil daadwerkelijk weer op te bouwen.
              </p>
              
              <div className="p-4 bg-white border-l-4 border-[#33C5F3] shadow-sm">
                <span className="font-bold text-[#33C5F3] mb-1 block">Wetenschappelijk verklaard</span>
                <p className="text-sm text-slate-600">rTMS herstelt de zogeheten 'neuroplasticiteit'. Het helpt het brein zichzelf weer bedraden en herstellen van de neurotoxische schade opgelopen door aanhoudende, verhoogde cortisolwaarden.</p>
              </div>
            </div>
            
            <div className="h-full min-h-[400px] bg-white border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center p-6 relative">
               <div className="w-full aspect-[4/3] bg-slate-100 flex items-center justify-center text-[#33C5F3] mb-6">
                <FaBrain className="text-[120px]" />
               </div>
               <p className="text-sm text-slate-500 italic max-w-sm mx-auto">Figuur: Direct stimuleren van de prefrontale cortex geeft het brein terug de controle over chronische vermoeidheidssignalen.</p>
            </div>
          </div>
        </section>

        {/* 4. Symptomen waarbij rTMS kan helpen */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Symptomen waarbij rTMS kan helpen</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Burn-out is een cluster van uitputtingsklachten. rTMS is zeer doelgericht, maar het harmoniseert het hersennetwerk zodanig dat er verlichting ontstaat bij verschillende hoofdsymptomen:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-50 p-6 border-t-[4px] border-[#33C5F3]">
                <div className="w-10 h-10 bg-white shadow flex items-center justify-center rounded-full text-[#33C5F3] mb-4">
                  <FaBatteryEmpty />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Chronische vermoeidheid</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Een zware, loodachtige vermoeidheid die ondanks lang rusten en slapen niet lijkt te verdwijnen.</p>
              </div>
              <div className="bg-slate-50 p-6 border-t-[4px] border-[#33C5F3]">
                <div className="w-10 h-10 bg-white shadow flex items-center justify-center rounded-full text-[#33C5F3] mb-4">
                  <FaExclamationTriangle />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Concentratieproblemen</h3>
                <p className="text-sm text-slate-600 leading-relaxed">'Wattenhoofd' of brain-fog, een sterke prikkelgevoeligheid en falend kortetermijngeheugen.</p>
              </div>
              <div className="bg-slate-50 p-6 border-t-[4px] border-[#33C5F3]">
                <div className="w-10 h-10 bg-white shadow flex items-center justify-center rounded-full text-[#33C5F3] mb-4">
                  <FaChartLine />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Emotionele uitputting</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Apathie, plotselinge huilbuien, cynisme en een onverklaarbare leegte en vervreemding van werk en privé.</p>
              </div>
              <div className="bg-slate-50 p-6 border-t-[4px] border-[#33C5F3]">
                <div className="w-10 h-10 bg-white shadow flex items-center justify-center rounded-full text-[#33C5F3] mb-4">
                  <FaBed />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Slaapproblemen</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Constant 'aan' staan in het hoofd resulterend in niet kunnen inslapen of ontwaken in paniek.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. rTMS bij burn-out gecombineerd met begeleiding */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl mx-auto mb-6 shadow-sm border border-slate-100 text-[#33C5F3]">
              <FaHandHoldingHeart />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">rTMS bij burn-out gecombineerd met begeleiding</h2>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-10"></div>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
              Burn-out voorkomen voor de toekomst vereist nieuwe gedragspatronen. Hoe bewaakt u uw grenzen? Hoe gaat u om met toxische druk op werk? Daar antwoorden op formuleren kan alleen als de geestelijke brandstof weer enigszins is aangevuld. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
              Wij pleiten bij burn-out patiënten dan ook altijd primair voor de magneetstimulatie, in combinatie met daaraan parallel lopende of direct opvolgende cognitieve gedragstherapie of re-integratiebegeleiding. Wat we opbouwen op neuraal niveau zult u door counseling eigen moeten maken in uw dagelijks functioneren.
            </p>
          </div>
        </section>

        {/* 6. Vergoeding bij burn-out & 7. Ervaringen */}
        <section className="py-24 bg-[#2b2e4a] text-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            
            <div className="bg-white/5 border border-white/10 p-10 relative overflow-hidden flex flex-col justify-center">
               <div className="w-12 h-12 bg-[#33C5F3] flex items-center justify-center text-white rounded-full mb-6 text-2xl"><FaUserShield /></div>
               <h2 className="text-3xl lg:text-4xl font-bold mb-6">Vergoeding bij burn-out</h2>
               <p className="text-slate-300 text-lg leading-relaxed mb-6">
                 Een exclusieve diagnose "Burn-out" (ofwel overspanning gerelateerd aan de werksituatie) valt sinds 2012 buiten de vergoede basisvoorziening GGZ in Nederland. Derhalve is er op basis van enkel het label burn-out geen dekking door zorgverzekeraars.
               </p>
               <p className="text-slate-300 text-lg leading-relaxed font-bold">
                Crossover: Vaak is er na langdurige uitputting echter een volwaardige <strong>depressieve stoornis</strong> ontstaan. Zodra onze psychiater de diagnose 'therapieresistente depressie' stelt als kernprobleem (welke mogelijk voortvloeit uit initiële burn-out klachten), wordt het standaard rTMS protocol veelal wél vergoed. 
               </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Ervaringen van patiënten met burn-out</h2>
              <div className="space-y-6">
                <blockquote className="bg-white/5 p-6 border-l-4 border-[#33C5F3]">
                  <p className="italic text-slate-300 leading-relaxed mb-4">"Na een jaar in de ziektewet had ik het gevoel dat mijn batterij permanent op 5% bleef hangen, ondanks wekelijkse psycholoogbezoeken. Toen ik met rTMS begon kreeg ik in week 3 ineens de energie terug om weer simpele dingen op te pakken zoals koken. De opwaartse spiraal kon eindelijk beginnen."</p>
                  <footer className="font-bold text-[#33C5F3]">— Karin (39 jaar, docent)</footer>
                </blockquote>
                <blockquote className="bg-white/5 p-6 border-l-4 border-[#33C5F3]">
                  <p className="italic text-slate-300 leading-relaxed mb-4">"De zware 'mist' in mijn hoofd was na 15 rTMS sessies grotendeels opgetrokken. Kon eindelijk weer fatsoenlijk beslissingen nemen zonder direct in de onrust en paniek te schieten."</p>
                  <footer className="font-bold text-[#33C5F3]">— Thomas (51 jaar, projectmanager)</footer>
                </blockquote>
              </div>
            </div>

          </div>
        </section>

        {/* 8. Veelgestelde vragen */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Veelgestelde vragen</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto"></div>
            </div>
            
            <div className="space-y-0">
              {(burnoutSchema[3] as any).mainEntity.map((faq: any, idx: number) => (
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
        <section className="py-24 bg-[#2b2e4a] text-white">
           <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Klaar om uw batterij verantwoord op te laden?</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Vraag vandaag nog een intake aan voor onze behandellocaties. Neem de controle over uw gezondheid weer terug zonder zware medicatie trajecten.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="px-10 py-5 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-lg rounded-full text-lg">
                Intake aanvragen
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
