import { Metadata } from 'next';
import Link from 'next/link';
import { FaBrain, FaRegHospital, FaHandHoldingHeart, FaUserShield, FaBaby, FaPills, FaChartLine, FaCheckCircle, FaStar, FaChevronDown } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'rTMS bij Depressie | Vergoed & Bewezen Effectief | rtms-behandeling.nl',
  description: 'rTMS is sinds 2017 vergoed door de basisverzekering voor depressie waarbij antidepressiva niet werken. 30-70% van de patiënten ervaart significante verbetering. Vraag een intake aan in Heiloo of Schiphol-Rijk.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/behandelingen/depressie/',
  },
  openGraph: {
    title: 'rTMS bij Depressie — Medicatievrije behandeling met bewezen resultaat',
    description: 'Nieuwe hoop bij depressie. Ontdek de bewezen effectieve en veilige rTMS behandeling.',
    url: 'https://rtms-behandeling.nl/behandelingen/depressie/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-depressie.png',
        width: 1200,
        height: 630,
        alt: 'Serene behandelruimte met rTMS spoel',
      },
    ],
    locale: 'nl_NL',
    type: 'article',
  },
};

const depressionSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "rTMS bij Depressie — Repetitieve Transcraniële Magnetische Stimulatie",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Niet-invasieve hersenstimulatie waarbij magnetische pulsen specifieke hersengebieden activeren om depressie te behandelen.",
    "howPerformed": "Een magnetische spoel wordt op het hoofd geplaatst en geeft herhaaldelijk magnetische pulsen af aan de prefrontale cortex.",
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Depressie"
      },
      {
        "@type": "MedicalIndication",
        "name": "Therapieresistente Depressie"
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
        "name": "rTMS bij Depressie",
        "item": "https://rtms-behandeling.nl/behandelingen/depressie/"
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
        "name": "Wat is het slagingspercentage van rTMS bij depressie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wetenschappelijk onderzoek en onze klinische praktijk tonen aan dat 30% tot 70% van de patiënten met een therapieresistente depressie een significante klinische verbetering of zelfs volledige remissie ervaart."
        }
      },
      {
        "@type": "Question",
        "name": "Kom ik in aanmerking voor vergoeding vanuit de basisverzekering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, rTMS bij depressie wordt in Nederland vergoed vanuit uw basisverzekering wanneer u bent gediagnosticeerd met een therapieresistente depressie (doorgaans na twee onsuccesvolle medicatietrajecten of psychotherapie)."
        }
      },
      {
        "@type": "Question",
        "name": "Hoelang duurt het voordat ik effect merk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De meeste patiënten merken na 10 tot 15 sessies (binnen 2 tot 3 weken) de eerste positieve effecten, zoals meer energie en een lichtere stemming. Een volledig traject beslaat gemiddeld 20 tot 30 sessies."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik stoppen met mijn antidepressiva tijdens rTMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, in veel gevallen is het juist effectief om de rTMS behandeling uit te voeren in combinatie met uw huidige medicatie. Beslissingen over het afbouwen van medicatie worden altijd in overleg met uw behandelend psychiater genomen."
        }
      },
      {
        "@type": "Question",
        "name": "Doet de magnetische stimulatie pijn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De magneetstimulatie is niet-invasief en pijnloos. U voelt een tikkende sensatie op de hoofdhuid, vergelijkbaar met het ritme van een specht. Soms treedt lichte samentrekking van lokale spieren op, maar dit is ongevaarlijk."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de bijwerkingen van rTMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De bijwerkingen zijn zeer mild in vergelijking met antidepressiva. U ervaart geen gewichtstoename of verlies van libido. Soms is er sprake van milde, tijdelijke hoofdpijn direct na de sessie, die eenvoudig met paracetamol verholpen kan worden."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn de resultaten blijvend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, het doel van rTMS is het structureel hertrainen van de hersennetwerken (neuroplasticiteit). Voor veel patiënten is de verbetering langdurig. In sommige gevallen kan na een paar jaar een kort 'onderhoudstraject' aanbevolen worden."
        }
      },
      {
        "@type": "Question",
        "name": "Is rTMS veilig als ik zwanger ben of wil worden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "rTMS wordt vaak gezien als een uitstekend alternatief tijdens de zwangerschap, omdat er geen systemische medicatie met risico's voor de foetus aan te pas komt. Overleg uiteraard altijd de risico's en baten met onze psychiaters."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe combineer ik dit met mijn werk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een sessie duurt ongeveer 20 minuten. U hoeft niet te herstellen of uit te rusten, en mag direct daarna weer autorijden of aan het werk gaan. We plannen sessies zoveel mogelijk op tijden die passen in uw schema."
        }
      },
      {
        "@type": "Question",
        "name": "Wat gebeurt er tijdens een sessie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "U zit comfortabel in een behandelstoel. De behandelaar plaatst de spoel op een specifieke plek op uw hoofd. Gedurende de sessie hoort u tikjes. U bent volledig bij bewustzijn en kunt praten, lezen, of gewoon ontspannen."
        }
      }
    ]
  }
];

export default function BehandelingDepressie() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(depressionSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center py-20 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-60 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-depressie.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              rTMS bij Depressie — <br className="hidden md:block" />
              Medicatievrije behandeling met bewezen resultaat
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
              Een veilig en effectief alternatief voor antidepressiva. Creëer ruimte voor blijvend herstel en geef uw leven weer kleur.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="flex justify-center items-center px-10 py-5 bg-[#33C5F3] text-white rounded-full font-bold hover:bg-[#29a5cd] transition shadow-lg text-lg">
                direct aanmelden
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Wat is depressie en hoe beïnvloedt het de hersenen? */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Wat is depressie en hoe beïnvloedt het de hersenen?</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Depressie is veel meer dan alleen maar 'zich somber voelen'. Het is een complexe aandoening die diep geworteld zit in de fysiologie van uw hersenen. Neurologen en psychiaters weten tegenwoordig dat bij een depressie specifieke hersengebieden—met name de <strong>prefrontale cortex</strong>—verminderde activiteit vertonen.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Deze netwerken zijn verantwoordelijk voor emotieregulatie, besluitvorming en motivatie. Wanneer de communicatie daar stagneert, ervaart u apathie, vermoeidheid en zwaarmoedigheid. De traditionele weg is het gebruik van stoffen (antidepressiva, zoals SSRI's of SNRI's) om neurotransmitters zoals serotonine te beïnvloeden. Dit brengt echter vaak systemische bijwerkingen met zich mee, en bij zo'n dertig procent van de patiënten slaat medicatie simpelweg niet aan.
            </p>
          </div>
        </section>

        {/* 3. Hoe werkt rTMS bij depressie? */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Hoe werkt rTMS bij depressie?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-10">Welk hersengebied wordt gestimuleerd?</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                De Repetitieve Transcraniële Magnetische Stimulatie (rTMS) richt zich middels een magnetische spoel heel precies op de dorsolaterale prefrontale cortex (DLPFC). Dit is het 'actiecentrum' van de hersenen dat bij depressie vaak 'in slaap' is gevallen.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Hoogfrequente versus laagfrequente rTMS</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                We zetten meestal <strong>hoogfrequente pulsen (stimulerend)</strong> in op de linker prefrontale cortex om de activiteit en bloeddoorstroming weer 'aan' te zetten. Als alternatief of aanvulling kunnen we <strong>laagfrequente pulsen (kalmerend)</strong> inzetten op de rechter hersenhelft om overactieve angst-gerelateerde circuits te dempen. Dit resulteert in het normaliseren van uw stemming, geheel medicatievrij.
              </p>
              <div className="flex gap-6 mt-8">
                <Link href="/wat-is-rtms/" className="text-sm font-bold text-[#33C5F3] hover:underline uppercase tracking-wider">
                  Lees meer over hoe rTMS werkt →
                </Link>
                <Link href="/behandelproces/" className="text-sm font-bold text-[#33C5F3] hover:underline uppercase tracking-wider">
                  Bekijk het behandelproces →
                </Link>
              </div>
            </div>
            
            <div className="h-full min-h-[400px] bg-white border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center p-6 relative">
               <div className="w-full aspect-[4/3] bg-slate-100 flex items-center justify-center text-[#33C5F3] mb-6">
                <FaBrain className="text-[120px]" />
               </div>
               <p className="text-sm text-slate-500 italic max-w-sm mx-auto">Figuur: De magnetische pulsen reiken exact diep genoeg (~3 cm) om de corticale netwerken voor stemmingsregulatie veilig te activeren.</p>
            </div>
          </div>
        </section>

        {/* 4. Voor wie is rTMS bij depressie geschikt? */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Voor wie is rTMS bij depressie geschikt?</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-slate-50 p-8 border-t-[4px] border-[#33C5F3]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#33C5F3] mb-6 shadow-sm text-xl"><FaChartLine /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Therapieresistente depressie</h3>
                <p className="text-slate-600 leading-relaxed">Heeft u al twee vormen van behandeling (bijv. SSRI's in combinatie met CGT) zonder succes doorlopen? Dan bent u een uitstekende kandidaat. Voor deze doelgroep met <Link href="/behandelingen/therapieresistente-depressie/" className="text-[#33C5F3] font-bold hover:underline">therapieresistente depressie</Link> wordt rTMS tevens vergoed.</p>
              </div>
              <div className="bg-slate-50 p-8 border-t-[4px] border-[#33C5F3]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#33C5F3] mb-6 shadow-sm text-xl"><FaPills /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Bijwerkingen van antidepressiva</h3>
                <p className="text-slate-600 leading-relaxed">Bieden antidepressiva verlichting, maar kunt u de zware bijwerkingen (zoals gewichtstoename, extreme vermoeidheid of seksuele disfunctie) niet langer of niet goed verdragen? rTMS biedt een alternatief met nagenoeg nul bijwerkingen.</p>
              </div>
              <div className="bg-slate-50 p-8 border-t-[4px] border-[#33C5F3]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#33C5F3] mb-6 shadow-sm text-xl"><FaBaby /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Zwangerschap en medicatiewens</h3>
                <p className="text-slate-600 leading-relaxed">Patiënten die zwanger zijn (of een sterke kinderwens hebben) willen risico's op medicatieblootstelling voor het kind voorkomen. Voor hen is medicatievrije hersenstimulatie de veiligste structurele behandelvorm.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Hoe effectief & 6. Vergoeding info-blok */}
        <section className="py-24 bg-[#2b2e4a] text-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Hoe effectief is rTMS bij depressie?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Uit analyses van o.a. academische ziekenhuizen en internationale centra, behaalt rTMS indrukwekkende resultaten bij populaties waar medicatie stukloopt. De cijfers laten zien dat <strong className="text-white">30% tot 70% van patiënten met therapieresistentie significante verlichting ervaart</strong>. Bij een deel van de patiënten verdwijnen de depressieve klachten zelfs in zijn geheel (remissie).
              </p>
              <p className="text-slate-400 text-sm">Bron: Landelijke richtlijnen en langetermijn onderzoeken door Amsterdam UMC (2020).</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 text-[#33C5F3]/30"><FaUserShield className="text-9xl" /></div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-bold mb-6">Is rTMS bij depressie vergoed?</h2>
                 <p className="text-slate-300 leading-relaxed text-lg mb-8">
                   Sinds oktober 2017 zit rTMS voor therapieresistente depressie standaard in het basispakket van alle Nederlandse zorgverzekeraars. Er geldt weliswaar uw eigen risico, maar de verdere kosten vallen in de basisvoorziening GGZ, mits u een geldige medische verwijzing heeft.
                 </p>
                 <Link href="/vergoeding-kosten/" className="text-[#33C5F3] font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:text-white transition-colors">
                   Alles over vergoeding bij depressie <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                 </Link>
               </div>
            </div>
          </div>
        </section>

        {/* 7. Hoe verloopt het behandelproces bij depressie? */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-6">Hoe verloopt het behandelproces?</h2>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-16"></div>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-[#33C5F3] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"><span className="text-sm font-bold">1</span></div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] bg-white p-6 rounded shadow-sm border border-slate-100">
                      <h3 className="font-bold text-slate-900 text-xl mb-2">Intake en Diagnose</h3>
                      <p className="text-slate-600">Onze regiebehandelaar voert een gedetailleerd psychiatrisch onderzoek uit, bestudeert uw verwijsbrief, en we voeren veiligheidsscreens (zoals het uitsluiten van epilepsie of implantaten) uit.</p>
                  </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-[#33C5F3] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"><span className="text-sm font-bold">2</span></div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] bg-white p-6 rounded shadow-sm border border-slate-100">
                      <h3 className="font-bold text-slate-900 text-xl mb-2">Behandelplan op maat</h3>
                      <p className="text-slate-600">We creëren een 'brain-map'. We meten nauwkeurig uw 'motordrempel' om te bepalen op exact welke spoelsterkte we de depressieve netwerken in uw hoofd moeten activeren.</p>
                  </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-[#33C5F3] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"><span className="text-sm font-bold">3</span></div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] bg-white p-6 rounded shadow-sm border border-slate-100">
                      <h3 className="font-bold text-slate-900 text-xl mb-2">De rTMS-sessies</h3>
                      <p className="text-slate-600">Terugkerende bezoeken. Reken op 2 tot 5 bezoeken per week in de kliniek. Een sessie duurt ongeveer 20 minuten, waarbij u ontspannen geluidsfragmenten luistert of een tijdschrift leest.</p>
                  </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-[#33C5F3] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"><span className="text-sm font-bold">4</span></div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] bg-white p-6 rounded shadow-sm border border-slate-100">
                      <h3 className="font-bold text-slate-900 text-xl mb-2">Nazorg en terugvalpreventie</h3>
                      <p className="text-slate-600">Na zo'n 20 tot 30 sessies evalueren we de resultaten. Soms volgt een klein onderhoudstraject. De combinatie met aangeboden gesprekstherapie verankert deze nieuwe psychologische ruimte.</p>
                  </div>
              </div>

            </div>
          </div>
        </section>

        {/* 8. Combinatiebehandeling: rTMS + CGT */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-3xl mx-auto mb-6 text-[#33C5F3]">
              <FaHandHoldingHeart />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">rTMS gecombineerd met psychotherapie</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Wij geloven niet in het behandelen van symptomen alléén. Bij onze centra wordt de magnetische stimulatie standaard aangeboden als <strong>combinatietherapie met Cognitieve Gedragstherapie (CGT)</strong> of vergelijkbare stromingen. Door de biologische blokkades in het brein op te heffen met rTMS, ontstaat de noodzakelijke mentale brandstof uw gedachten- en gedragspatronen daadwerkelijk te veranderen via goede gesprekstherapie.
            </p>
          </div>
        </section>

        {/* 9. Ervaringen / 10. Wetenschappelijke publicaties */}
        <section className="py-24 bg-[#2b2e4a] text-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-3xl font-bold mb-8">Ervaringen van patiënten</h2>
              <div className="space-y-6">
                <blockquote className="bg-white/5 p-6 border-l-4 border-[#33C5F3]">
                  <p className="italic text-slate-300 leading-relaxed mb-4">"Voordat ik met rTMS in Heiloo startte, kwam ik mijn bed niet meer uit. De medicatie dempte mij alleen maar. Vanaf sessie 12 merkte ik dat de 'grijze sluier' langzaam optrok. Ik functioneer weer en heb de regie terug."</p>
                  <footer className="font-bold text-[#33C5F3]">— Anoniem (42 jaar, vrouw)</footer>
                </blockquote>
                <blockquote className="bg-white/5 p-6 border-l-4 border-[#33C5F3]">
                  <p className="italic text-slate-300 leading-relaxed mb-4">"Een intensieve periode (3 keer in de week naar de kliniek), maar vergeleken met de bijwerkingen die ik had van 4 jaar SSRI's slikken, zou ik rTMS iedereen met therapieresistente klachten direct aanraden."</p>
                  <footer className="font-bold text-[#33C5F3]">— Johan (55 jaar, man)</footer>
                </blockquote>
              </div>
            </div>

            <div>
               <h2 className="text-3xl font-bold mb-8">Wetenschappelijk bewijs</h2>
               <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <FaCheckCircle className="text-[#33C5F3] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Richtlijn Depressie (Trimbos)</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">Geïndiceerd als krachtig instrument voorafgaand aan evt. 3e, zwaardere medicamenteuze lijnen of ECT-protocollen.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <FaCheckCircle className="text-[#33C5F3] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Klinisch Onderzoek Amsterdam UMC</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">Bevestigt aanzienlijke respons- en remissiecijfers op de lange termijn, in het bijzonder wanneer gecombineerd met verbale therapie.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <FaCheckCircle className="text-[#33C5F3] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Harvard Medical School publicaties</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">Verschillende neuro-imaging (MRI) studies tonen na rTMS trajecten structureel verhoogde activiteit aan in de prefrontale cortex.</p>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </section>

        {/* 11. FAQ accordion */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Veelgestelde vragen over rTMS bij depressie</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto"></div>
            </div>
            
            <div className="space-y-0">
              {(depressionSchema[3] as any).mainEntity.map((faq: any, idx: number) => (
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

        {/* 12. Locatie CTA */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">rTMS bij depressie in Heiloo en Schiphol-Rijk</h2>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">Onze specialisten zijn op twee gemakkelijk te bereiken, moderne klinieken in Noord-Holland aanwezig. Bij ons bent u verzekerd van korte tot geen wachttijden en persoonlijke, toegewijde zorg.</p>
            <div className="mb-10">
              <Link href="/locaties/" className="text-sm font-bold text-[#33C5F3] border-b-2 border-[#33C5F3]/30 hover:border-[#33C5F3] transition-all uppercase tracking-widest">
                Bekijk onze locaties
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/locaties/heiloo/" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold hover:border-[#33C5F3] hover:text-[#33C5F3] transition-colors shadow-sm rounded">
                Bekijk locatie Heiloo
              </Link>
              <Link href="/locaties/schiphol-rijk/" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold hover:border-[#33C5F3] hover:text-[#33C5F3] transition-colors shadow-sm rounded">
                Bekijk locatie Schiphol-Rijk
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
