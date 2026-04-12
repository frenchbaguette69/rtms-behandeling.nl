import { Metadata } from 'next';
import Link from 'next/link';
import { FaHeartbeat, FaBrain, FaRegHospital, FaHandHoldingHeart, FaUserShield, FaChartLine, FaCheckCircle, FaStar, FaChevronDown, FaUsers, FaWalking, FaUsersSlash } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'rTMS bij Angststoornis | Behandeling zonder Medicatie | rtms-behandeling.nl',
  description: 'rTMS biedt uitkomst bij gegeneraliseerde angststoornis, sociale fobie en paniekstoornis. Niet-invasief, weinig bijwerkingen. Locaties in Heiloo en Schiphol-Rijk.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/behandelingen/angststoornis/',
  },
  openGraph: {
    title: 'rTMS bij Angststoornis — Rust in uw hoofd zonder zware medicatie',
    description: 'rTMS biedt uitkomst bij gegeneraliseerde angststoornis, sociale fobie en paniekstoornis. Niet-invasief, weinig bijwerkingen.',
    url: 'https://rtms-behandeling.nl/behandelingen/angststoornis/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-angststoornis.png',
        width: 1200,
        height: 630,
        alt: 'Therapieruimte met focus op ontspanning en rTMS apparatuur',
      },
    ],
    locale: 'nl_NL',
    type: 'article',
  },
};

const anxietySchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "rTMS bij Angststoornis — Repetitieve Transcraniële Magnetische Stimulatie",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Niet-invasieve hersenstimulatie waarbij magnetische pulsen specifieke hersengebieden activeren om angststoornissen te behandelen.",
    "howPerformed": "Een magnetische spoel wordt op het hoofd geplaatst en geeft herhaaldelijk magnetische pulsen af aan de prefrontale cortex.",
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Angststoornis"
      },
      {
        "@type": "MedicalIndication",
        "name": "Paniekstoornis"
      },
      {
        "@type": "MedicalIndication",
        "name": "Sociale Fobie"
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
        "name": "rTMS bij Angststoornis",
        "item": "https://rtms-behandeling.nl/behandelingen/angststoornis/"
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
        "name": "Wat is het verschil tussen rTMS voor depressie en voor angst?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bij depressie stimuleren we vaak de linker hersenhelft (hoogfrequent) om onderactieve netwerken te activeren. Bij angstklachten gebruiken we meestal laagfrequente pulsen aan de rechterzijde om de overactieve, angst-producerende netwerken (zoals de hyperactieve amygdala) juist te kalmeren."
        }
      },
      {
        "@type": "Question",
        "name": "Zal rTMS een paniekaanval uitlokken?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee. De behandeling zelf is ontworpen om uw hersenactiviteit te reguleren en kalmeren. De pulsen zijn pijnloos and het ritme wordt vaak als rustgevend ervaren. Onze behandelaren zijn daarnaast speciaal getraind in het begeleiden van cliënten met paniekklachten."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik stoppen met mijn kalmeringsmiddelen (benzodiazepinen)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bepaalde rustgevende medicatie (zoals oxazepam of diazepam) kan de motorische drempelwaarde van uw hersenen beïnvloeden en de effectiviteit van de magneetstimulatie verminderen. Wij bespreken altijd voorafgaand aan de behandeling een veilig en verantwoord (afbouw)plan."
        }
      },
      {
        "@type": "Question",
        "name": "Helpt rTMS specifiek bij PTSS of telt dat ook als angst?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hoewel PTSS sterk gepaard gaat met angst, is het een wezenlijk andere klinische diagnose. rTMS kan bij PTSS zeer effectief zijn (door netwerken rondom trauma en emotieregulatie te beïnvloeden). We hanteren hiervoor echter een ander protocol dan voor een gegeneraliseerde angststoornis."
        }
      },
      {
        "@type": "Question",
        "name": "Wordt rTMS bij angst vergoed vanuit de basisverzekering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Nederland is de vergoeding van rTMS momenteel formeel gekoppeld aan de indicatie 'therapieresistente depressie'. Als angstklachten uw primaire diagnose zijn (zonder onderliggende depressie), wordt dit vaak niet direct vergoed. Soms is er sprake van een combinatie (comorbiditeit) waarbij vergoeding wel mogelijk is. Bekijk samen met ons de mogelijkheden."
        }
      }
    ]
  }
];

export default function BehandelingAngststoornis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(anxietySchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center py-20 pb-24">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-angststoornis.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              rTMS bij Angststoornis — <br className="hidden md:block" />
              Rust in uw hoofd zonder zware medicatie
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
              Een doelgerichte behandeling om overactieve emotieregulatiesystemen in de hersenen veilig en pijnloos te kalmeren. Krijg de regie weer terug.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="flex justify-center items-center px-10 py-5 bg-[#33C5F3] text-white rounded-full font-bold hover:bg-[#29a5cd] transition shadow-lg text-lg">
                Boek een intake
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Wat is een angststoornis? */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Wat is een angststoornis?</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Iedereen is weleens zenuwachtig of bang, maar bij een angststoornis is de angst zo buiten proportie dat het uw dagelijks functioneren lamlegt. Het is geen gebrek aan moed, maar een hapering in het waarschuwingssysteem van uw brein. Vormen waar rTMS vaak bij wordt ingezet omvatten:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-50 p-6 border-t-[4px] border-[#33C5F3]">
                <div className="w-10 h-10 bg-white shadow flex items-center justify-center rounded-full text-[#33C5F3] mb-4">
                  <FaChartLine />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Gegeneraliseerde angststoornis (GAS)</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Constante, oncontroleerbare zorgen over alledaagse zaken zoals geld, gezondheid of familie, gepaard met chronische fysieke spanning.</p>
              </div>
              <div className="bg-slate-50 p-6 border-t-[4px] border-[#33C5F3]">
                <div className="w-10 h-10 bg-white shadow flex items-center justify-center rounded-full text-[#33C5F3] mb-4">
                  <FaHeartbeat />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Paniekstoornis</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Plotselinge, intense golven van doodsangst (paniekaanvallen) met heftige lichamelijke sensaties, waarna de angst voor een vólgende aanval uw leven regeert.</p>
              </div>
              <div className="bg-slate-50 p-6 border-t-[4px] border-[#33C5F3]">
                <div className="w-10 h-10 bg-white shadow flex items-center justify-center rounded-full text-[#33C5F3] mb-4">
                  <FaUsersSlash />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Sociale angststoornis</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Verlammende angst voor de beoordeling van anderen in sociale situaties, wat leidt tot ernstig vermijdingsgedrag en eenzaamheid.</p>
              </div>
              <div className="bg-slate-50 p-6 border-t-[4px] border-[#33C5F3]">
                <div className="w-10 h-10 bg-white shadow flex items-center justify-center rounded-full text-[#33C5F3] mb-4">
                  <FaWalking />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Specifieke fobieën</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Een intense, irrationele angst voor specifieke elementen (zoals vliegangst, hoogtevrees of claustrofobie) die uw bewegingsvrijheid limiteert.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Hoe beïnvloedt rTMS angstklachten? */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Hoe beïnvloedt rTMS angstklachten?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                Uit neurologisch onderzoek (MRI/FMRI) blijkt dat patiënten met chronische angst een structureel overactieve <strong>rechter prefrontale cortex</strong> en een hypergevoelige <strong>amygdala</strong> ('het angstcentrum') bezitten. Dit verklaart de onophoudelijke 'vecht-of-vlucht' stand waarin het zenuwstelsel zich bevindt.
              </p>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                Bij de rTMS behandeling voor angst gebruiken wij veelal laagfrequente magnetische pulsen. Waar we bij depressie de netwerken proberen te 'wekken', zenden we hier een kalmerend ritme door de hyperactieve netwerken aan de rechterzijde. Dit veroorzaakt een remmend effect op de corticale prikkelbaarheid (inhibitie). Hierdoor komt het angstnetwerk fysiek tot rust, verminderen lichamelijke stressreacties en neemt onrust af.
              </p>
              
              <div className="p-4 bg-white border-l-4 border-[#33C5F3] shadow-sm">
                <span className="font-bold text-[#33C5F3] mb-1 block">Wetenschappelijk bewezen aanpak</span>
                <p className="text-sm text-slate-600">De laagfrequente magneetstimulatie over de rechter dorso-laterale prefrontale cortex (rDLPFC) is een internationaal gepatenteerd en veilig behandelprotocol.</p>
              </div>
            </div>
            
            <div className="h-full min-h-[400px] bg-white border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center p-6 relative">
               <div className="w-full aspect-[4/3] bg-slate-100 flex items-center justify-center text-[#33C5F3] mb-6">
                <FaBrain className="text-[120px]" />
               </div>
               <p className="text-sm text-slate-500 italic max-w-sm mx-auto">Figuur: rTMS richt zich op het neurologisch afremmen van de hyperactieve signaaloverdracht in het angstnetwerk.</p>
            </div>
          </div>
        </section>

        {/* 4. Voor wie is rTMS bij angst geschikt? / 5. Effectiviteit */}
        <section className="py-24 bg-[#2b2e4a] text-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            
            <div>
                 <h2 className="text-3xl font-bold mb-6">Voor wie is rTMS bij angst geschikt?</h2>
                 <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
                 <p className="text-slate-300 leading-relaxed text-lg mb-6">
                   rTMS is een zeer veilige keuze voor volwassenen die vastlopen in hun herstel. Deze behandeling is speciaal effectief als u:
                 </p>
                 <ul className="space-y-4 mb-8">
                   <li className="flex items-start gap-4">
                     <FaCheckCircle className="text-[#33C5F3] text-xl shrink-0 mt-1" />
                     <p className="text-slate-300"><strong className="text-white">Medicatie resitent bent:</strong> U heeft SSRI's of anxiolytica geprobeerd zonder voldoende effect, of weigert afhankelijk te worden van zwaar verslavende pam-medicatie (benzodiazepinen).</p>
                   </li>
                   <li className="flex items-start gap-4">
                     <FaCheckCircle className="text-[#33C5F3] text-xl shrink-0 mt-1" />
                     <p className="text-slate-300"><strong className="text-white">Stagneert in psychotherapie:</strong> Uw angstpeil is zó hoog dat de gesprekken met uw psycholoog (die veel van uw analytisch vermogen vergen) niet doordringen.</p>
                   </li>
                 </ul>
                 <p className="text-slate-400 text-sm">Let op: Net als bij andere rTMS-protocollen zijn mensen met een verhoogd risico op epilepsie of metaal in het hoofd uitgesloten van deze behandelmethode.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 relative overflow-hidden flex flex-col justify-center">
               <h2 className="text-3xl lg:text-4xl font-bold mb-6">Effectiviteit en Resultaat</h2>
               <p className="text-slate-300 text-lg leading-relaxed mb-6">
                 Onderzoek, onder andere gepubliceerd in vooraanstaande bladen zoals de <em>Journal of Psychiatric Research</em>, toont aan dat zo'n 50% tot 60% van de behandelde populatie met een aanhoudende paniek- of angststoornis significante en duurzame verbetering rapporteert.
               </p>
               <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Doorgaans starten patiënten met 2 tot 3 sessies per week. Effecten worden redelijk snel waargenomen; veel patiënten omschrijven na 10 sessies dat de 'scherpe randjes' aanzienlijk afnemen en de 'mist optrekt'.
               </p>
            </div>

          </div>
        </section>

        {/* 6. Combinatie met cognitieve gedragstherapie (CGT) */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-3xl mx-auto mb-6 text-[#33C5F3]">
              <FaHandHoldingHeart />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Combinatie met Cognitieve Gedragstherapie (CGT)</h2>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-10"></div>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
              Angst is hardnekkig. Zelfs als het zenuwstelsel fysiek gekalmeerd wordt door rTMS, moeten de aangeleerde denkpatronen en vermijdingsreacties nog structureel worden afgeleerd. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
              Daarom combineren wij de hersenstimulatie met gesprekstherapie (met focus op Cognitieve Gedragstherapie). Waar de magneet de biologische ontvankelijkheid in de prefrontale cortex herstelt, bouwt onze psycholoog met u nieuwe gezonde denkconstructies op om paniekreacties toekomstbestendig het hoofd te bieden. 
            </p>
          </div>
        </section>

        {/* 7. Ervaringen en Vergoeding */}
        <section className="py-24 bg-slate-50">
           <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
             
             {/* Ervaringen */}
             <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Ervaringen van patiënten</h2>
              <div className="space-y-6">
                <blockquote className="bg-white p-6 border-l-4 border-[#33C5F3] shadow-sm">
                  <p className="italic text-slate-600 leading-relaxed mb-4">"Mijn sociale fobie was zo hevig dat naar de supermarkt gaan voelde als een gevecht op leven of dood. Na vijftien behandelingen merkte ik opeens dat mijn hartslag normaal bleef tijdens het afrekenen. Rijkdom."</p>
                  <footer className="font-bold text-slate-900">— Sarah (28 jaar)</footer>
                </blockquote>
                <blockquote className="bg-white p-6 border-l-4 border-[#33C5F3] shadow-sm">
                  <p className="italic text-slate-600 leading-relaxed mb-4">"Ik stond op het punt zware kalmeringsmiddelen te slikken vanwege mijn constante gespannen gevoel. Gelukkig vond ik rTMS en bleek ik 's nachts gewoon weer te kunnen ontspannen en doorslapen. Het voelde letterlijk alsof de 'kortsluiting' in mijn hoofd werd weggenomen."</p>
                  <footer className="font-bold text-slate-900">— Mark (45 jaar)</footer>
                </blockquote>
              </div>
            </div>

            {/* Vergoeding */}
            <div className="bg-white border border-slate-200 shadow-sm p-10 flex flex-col justify-center">
                 <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-[#33C5F3] rounded-full mb-6 text-2xl"><FaUserShield /></div>
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Is rTMS bij angst vergoed?</h2>
                 <p className="text-slate-600 leading-relaxed mb-6">
                   Vergoeding binnen de Nederlandse basisverzekering (GGZ) voor rTMS is strikt afgebakend en voornamelijk gereserveerd voor patiënten met therapieresistente <strong>depressie</strong>. Voor een enkelvoudige, onvermengde angstdiagnose weigeren de meeste verzekeraars momenteel direct dekking.
                 </p>
                 <p className="text-slate-600 leading-relaxed font-bold mb-6">
                   Let op: Vaak gaan ernstige angst- of paniekstoornissen hand in hand met secundaire zware depressieve episodes. Onze regiebehandelaar beoordeelt nauwkeurig uw casus tijdens de intake om te bepalen of wij toch aanspraak kunnen maken op vergoeding via uw polis.
                 </p>
            </div>

           </div>
        </section>

        {/* 8. Veelgestelde vragen over rTMS bij angst */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Veelgestelde vragen over rTMS bij angst</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto"></div>
            </div>
            
            <div className="space-y-0">
              {(anxietySchema[3] as any).mainEntity.map((faq: any, idx: number) => (
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

        {/* 9. CTA Locaties */}
        <section className="py-24 bg-[#2b2e4a] text-white">
           <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">rTMS bij Angststoornissen in Noord-Holland</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Zet de stap naar een leven zonder constante onrust. Plan uw consult in op een van onze rustgevende, discrete klinieken in Heiloo of Schiphol-Rijk.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/locaties/heiloo/" className="px-8 py-4 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-sm rounded-full">
                Locatie Heiloo (Alkmaar)
              </Link>
              <Link href="/locaties/schiphol-rijk/" className="px-8 py-4 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-sm rounded-full">
                Locatie Schiphol-Rijk
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
