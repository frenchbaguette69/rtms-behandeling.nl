import { Metadata } from 'next';
import Link from 'next/link';
import { FaShieldAlt, FaBrain, FaRegHospital, FaHandHoldingHeart, FaUserShield, FaChartLine, FaCheckCircle, FaStar, FaChevronDown, FaEyeSlash, FaCompressAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'rTMS bij PTSS | Behandeling Posttraumatische Stressstoornis | rtms-behandeling.nl',
  description: 'PTSS behandelen met rTMS: niet-invasief, zonder herbelevingen op te roepen. Wetenschappelijk onderbouwde methode voor traumaverwerking. Locaties in Heiloo en Schiphol-Rijk.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/behandelingen/ptss/',
  },
  openGraph: {
    title: 'rTMS bij PTSS — Verlichting van traumaklachten zonder herbelevingen',
    description: 'Verwerk zware trauma\'s rustig en veilig. rTMS vermindert hyperarousal zonder pijnlijke herbelevingen.',
    url: 'https://rtms-behandeling.nl/behandelingen/ptss/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-ptss.png',
        width: 1200,
        height: 630,
        alt: 'Kalmerende, veilige behandelruimte voor traumaverwerking',
      },
    ],
    locale: 'nl_NL',
    type: 'article',
  },
};

const ptssSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "rTMS bij PTSS — Repetitieve Transcraniële Magnetische Stimulatie",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "description": "Niet-invasieve hersenstimulatie waarbij magnetische pulsen specifieke hersengebieden activeren om PTSS en traumaklachten te behandelen.",
    "howPerformed": "Een magnetische spoel wordt op het hoofd geplaatst en geeft herhaaldelijk magnetische pulsen af aan de prefrontale cortex of rDLPFC.",
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "Posttraumatische stressstoornis (PTSS)"
      },
      {
        "@type": "MedicalIndication",
        "name": "Traumaverwerking"
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
        "name": "rTMS bij PTSS",
        "item": "https://rtms-behandeling.nl/behandelingen/ptss/"
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
        "name": "Moet ik tijdens de rTMS-behandeling praten over mijn trauma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee. Dit is het grootste verschil met therapieën zoals EMDR. rTMS herstelt uw hersenfunctie op een puur biologisch niveau. U kunt tijdens de twintig minuten durende sessie gewoon naar ontspannende muziek luisteren zonder dat u wordt gevraagd het trauma actief op te roepen."
        }
      },
      {
        "@type": "Question",
        "name": "Waarom werkte EMDR voorheen niet en rTMS mogelijk wel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EMDR vereist dat uw hersenen de traumatische herinneringen kunnen 'vasthouden' terwijl u afgeleid wordt. Bij cliënten met zware of complexe PTSS is de amygdala echter zo overprikkeld dat ze direct 'dissociëren' of in blinde paniek raken, waardoor EMDR blokkeert. rTMS verlaagt éérst die fysieke paniekreactie, waarna verwerking pas mogelijk wordt."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn er veel fysieke bijwerkingen van rTMS bij PTSS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De fysieke bijwerkingen zijn uiterst mild. Sommige patiënten ervaren lichte, voorbijgaande hoofdpijn direct na de stimulatie. Omdat u geen pijnlijke herbelevingen doormaakt, blijft de emotionele 'kater' die u na o.a. zware exposure-therapie hebt vaak uit."
        }
      },
      {
        "@type": "Question",
        "name": "Wordt de rTMS behandeling voor PTSS vergoed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Binnen de Nederlandse basisverzekering (GGZ) is de vergoeding van rTMS formeel gekoppeld aan 'therapieresistente depressie'. Omdat patiënten met zwaar en complex trauma in nagenoeg alle gevallen ook worstelen met ernstige secundaire depressies of uitputting, komt het behandeltraject na een uitgebreide intake via onze psychiater veelal in aanmerking voor vergoeding."
        }
      },
      {
        "@type": "Question",
        "name": "Hoelang duurt het traject gemiddeld?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor de meeste patiënten plannen we een intensief protocol van ongeveer 20 tot 30 sessies, vaak verdeeld over zo'n 2 tot 3 sessies per week gedurende anderhalve maand. Een doorlooptijd die overzichtelijk en goed te combineren is met rustroosters."
        }
      }
    ]
  }
];

export default function BehandelingPtss() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ptssSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[70vh] flex flex-col justify-center py-20 pb-24">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-ptss.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              rTMS bij PTSS — <br className="hidden md:block" />
              Verlichting van traumaklachten zonder herbelevingen
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
              Een veilige, medicatievrije methode die de acute onrust in uw lichaam en geest remt, zónder dat u uw pijnlijke herinneringen hoeft op te rakelen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="flex justify-center items-center px-10 py-5 bg-[#33C5F3] text-white rounded-full font-bold hover:bg-[#29a5cd] transition shadow-lg text-lg">
                Intake aanvragen
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Wat is PTSS en hoe beïnvloedt het de hersenen? */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Wat is PTSS en hoe beïnvloedt het de hersenen?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Een Posttraumatische Stressstoornis (PTSS) is geen teken van psychische zwakte, maar eerder een fysiologische 'beschadiging' in het alarmsysteem van uw brein. Na een levensbedreigende, schokkende of langdurig onveilige situatie hebben de hersenen geleerd dat de wereld permanent gevaarlijk is.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Klinisch gezien zien we bij patiënten met complex trauma dat de <strong>amygdala</strong> (verantwoordelijk voor het genereren van een paniekreactie) veel te groot of chronisch hyperactief is. Tegelijkertijd is de dempende kracht van de <strong>prefrontale cortex</strong> (die logisch redeneren en emotieregulatie aanstuurt) door de aanhoudende stress juist verzwakt. U bevindt zich hierdoor in een permanente staat van <em>hyperarousal</em>.
              </p>
            </div>

            <div className="bg-slate-50 p-10 border-l-[6px] border-[#33C5F3] relative object-cover h-full">
               <div className="absolute top-0 right-0 p-6 text-slate-200"><FaBrain className="text-9xl" /></div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Fysieke Symptomen</h2>
                 <p className="text-slate-600 leading-relaxed mb-6">
                   Hierdoor ervaart u hevige, vaak oncontroleerbare symptomen: constante schrikachtigheid, prikkelbaarheid, zware nachtmerries, dissociatie ('er even niet zijn') en hartkloppingen. Uw zenuwstelsel reageert op een dichtslaande deur alsof u zich midden in het trauma van vroeger bevindt.
                 </p>
               </div>
            </div>

          </div>
        </section>

        {/* 3. Hoe werkt rTMS bij PTSS? / 4. Voordelen ten opzichte van traditionele traumatherapie */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            
            <div className="h-full min-h-[440px] bg-white border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center p-6 relative">
               <div className="w-full aspect-[4/3] bg-slate-100 flex items-center justify-center text-[#33C5F3] mb-6">
                <FaEyeSlash className="text-[120px]" />
               </div>
               <p className="text-sm text-slate-500 italic max-w-sm mx-auto">Figuur: Een fundamenteel voordeel: de biologische rem op angst, zónder de cognitieve verplichting de pijn actief te moeten herbeleven.</p>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Voordelen boven traditionele traumatherapie</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                Psychologische traumatherapie vereist bijna altijd dat de patiënt het diepste leed bespreekt, opschrijft of visualiseert. Denk aan EMDR, Imaginaire Exposure (IE) of NET. Hoewel effectief op lange termijn, leidt deze blootstelling bij velen tot tijdelijke hertraumatisering, extreme emotionele overspoeling en uitval.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Hoe grijpt rTMS in bij PTSS?</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>1. Medicatievrije stabilisatie:</strong> rTMS is in staat uw emotieregulatie-netwerken biologisch te versterken en de amygdala te kalmeren door middel van gerichte magnetische pulsen.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                <strong>2. Vermijden van herbelevingen:</strong> Omdat we de schedel mechanisch stimuleren, is verbale activering onnodig. U hoeft tijdens de twintig minuten durende behandelingssessies in de veilige, rustige stoel <em>niet</em> te praten over de traumatiserende gebeurtenissen. We herstructureren het paniekraamwerk in alle veiligheid.
              </p>

            </div>

          </div>
        </section>

        {/* 5. Combinatie met EMDR of traumagerichte CGT */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-3xl mx-auto mb-6 text-[#33C5F3]">
              <FaHandHoldingHeart />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">De ideale bodem: rTMS + EMDR</h2>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-10"></div>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
              Veel van onze patiënten zijn bij ons beland nadat een eerdere EMDR- of Exposure-therapie voortijdig is afgebroken, omdat zij "buiten de <em>Window of Tolerance</em>" sloegen en hevig dissocieerden. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
              Wij zien rTMS dan ook niet per se als vervanging van psychotherapie, maar als de ultieme, veilige voorbereider. Door de hyperarousal fysiek te reduceren middels magneetstimulatie, creëren we ruimte in uw hoofd. Vervolgens kan onze gespecialiseerde therapeut (indien u dit wenst) de EMDR parallel opstarten. Met de hervonden biologische rem wordt de verwerking zo ontzettend veel kansrijker en draaglijker.
            </p>
          </div>
        </section>

        {/* 6. Is rTMS bij PTSS vergoed? / 7. Ervaringen / 8. Bewijs */}
        <section className="py-24 bg-[#2b2e4a] text-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            
            <div className="space-y-16">
               <div>
              <h2 className="text-3xl font-bold mb-8">Ervaringen van patiënten</h2>
              <div className="space-y-6">
                <blockquote className="bg-white/5 p-6 border-l-4 border-[#33C5F3]">
                  <p className="italic text-slate-300 leading-relaxed mb-4">"Alle eerdere praat-therapieën brachten me alleen maar maandenlang terug in nachtmerries. De rTMS was zo... rustig. Ik mocht simpelweg zitten. Binnen drie weken voelde mijn hart rustiger kloppen. Enorm verlichtend."</p>
                  <footer className="font-bold text-[#33C5F3]">— Maria (41 jaar)</footer>
                </blockquote>
                <blockquote className="bg-white/5 p-6 border-l-4 border-[#33C5F3]">
                  <p className="italic text-slate-300 leading-relaxed mb-4">"Mijn systeem was na mijn jeugdtrauma's in een freeze-stand vastgezet. Ik was alleen maar verdoofd of in complete paniek. rTMS was stap 1 om mezelf überhaupt sterk genoeg te voelen voor de uiteindelijke EMDR-sessies."</p>
                  <footer className="font-bold text-[#33C5F3]">— Robert (37 jaar)</footer>
                </blockquote>
              </div>
            </div>

            </div>

            <div className="space-y-16">
               <div className="bg-white/5 border border-white/10 p-10 relative overflow-hidden flex flex-col justify-center">
                  <div className="w-12 h-12 bg-[#33C5F3] flex items-center justify-center text-white rounded-full mb-6 text-2xl"><FaUserShield /></div>
                  <h2 className="text-3xl font-bold mb-6">Is rTMS bij PTSS vergoed?</h2>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    De inzet van rTMS bij pure trauma indicaties vraagt om zorgvuldige beoordeling door onze psychiater. Gelukkig gaat langdurige PTSS nagenoeg altijd hand in hand met secundaire, zware depressieve episodes. Voldoet u daardoor aan de DSM-5 kenmerken van <strong>therapieresistente depressie</strong>, dan is vergoeding binnen de Nederlandse basisverzekering vaak goed mogelijk. 
                  </p>
                  <Link href="/vergoeding-kosten/" className="text-[#33C5F3] font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:text-white transition-colors">
                    Zie onze vergoedingsstructuur <FaChevronDown className="rotate-[-90deg]" />
                  </Link>
               </div>

               <div>
                 <h2 className="text-3xl font-bold mb-6 flex items-center gap-4"><FaShieldAlt className="text-[#33C5F3]" /> Wetenschappelijk bewijs</h2>
                 <p className="text-slate-300 leading-relaxed mb-4">
                   Nieuwe, decennialange studies tonen overtuigend aan dat hoogfrequente rTMS op de rechter dorsolaterale prefrontale cortex (rDLPFC) een krachtige, robuuste daling in PTSS scores (CAPS) oplevert, vergelijkbaar met of overstijgend ten opzichte van paroxetine (een veelvoorgeschreven medicijn—met aanzienlijk minder bijwerkingen). 
                 </p>
               </div>
            </div>

          </div>
        </section>

        {/* 9. Veelgestelde vragen */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Veelgestelde vragen</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto"></div>
            </div>
            
            <div className="space-y-0">
              {(ptssSchema[3] as any).mainEntity.map((faq: any, idx: number) => (
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

        {/* CTA Locaties */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
           <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Begin veilig aan uw herstel</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Zet een veilige stap uit uw vlucht-of-vecht respons. Wij plannen de sessies discreet en zonder wachtlijst in onze klinieken in Heiloo en Schiphol-Rijk (Noord-Holland).</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="px-10 py-5 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-sm rounded-full text-lg">
                Intake plannen
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
