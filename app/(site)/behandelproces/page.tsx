import { Metadata } from 'next';
import Link from 'next/link';
import { FaPhoneAlt, FaClipboardCheck, FaFileSignature, FaBrain, FaChartLine, FaCheckCircle, FaHandHoldingHeart, FaChevronDown } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Het rTMS Behandelproces | Intake tot Nazorg | rtms-behandeling.nl',
  description: 'Van eerste contact tot nazorg: ontdek stap voor stap hoe een rTMS-behandeling verloopt bij onze kliniek. Intake, diagnose, behandelplan, sessies en follow-up.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/behandelproces/',
  },
  openGraph: {
    title: 'Het rTMS Behandelproces — Van aanmelding tot herstel',
    description: 'Ontdek stap voor stap hoe de weg naar herstel er bij onze kliniek uitziet, van de allereerste kennismaking tot aan nazorg.',
    url: 'https://rtms-behandeling.nl/behandelproces/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-behandelproces.png',
        width: 1200,
        height: 630,
        alt: 'Patiënt wordt begeleid in kliniek richting behandelruimte',
      },
    ],
    locale: 'nl_NL',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hoelang na aanmelding kan ik terecht voor de intake?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wij streven naar zeer korte wachttijden in vergelijking met de reguliere GGZ. Vaak kunt u binnen één of twee weken na aanmelding al terecht voor de diagnostische intake in Heiloo of Schiphol-Rijk."
      }
    },
    {
      "@type": "Question",
      "name": "Heb ik een speciale verwijsbrief nodig voor de intake?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Om in aanmerking te komen voor vergoeding vanuit uw basisverzekering (onder de indicatie therapieresistente depressie), heeft u een recente verwijsbrief voor de SGGZ van uw huisarts of behandelend psychiater nodig."
      }
    },
    {
      "@type": "Question",
      "name": "Moet ik me na een rTMS sessie laten ophalen door iemand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nee, dat is niet nodig. Omdat rTMS geen narcose, sedatie of spierverslappers vereist, bent u direct na afloop weer volledig helder. U mag direct zelfstandig autorijden, fietsen of met het openbaar vervoer reizen."
      }
    },
    {
      "@type": "Question",
      "name": "Mag ik koffie drinken voor een sessie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wij raden overmatig cafeïnegebruik (meer dan 3 koppen sterke koffie of energiedrankjes) direct vóór de sessie af, omdat cafeïne de prikkelbaarheid (motordrempel) van uw hersenen tijdelijk kan beïnvloeden. Normaal gebruik is geen probleem."
      }
    },
    {
      "@type": "Question",
      "name": "Kan rTMS worden afgebroken als ik het niet prettig vind?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Altijd. U bent volledig bij bewustzijn en als u tijdens de stimulatie aangeeft te willen pauzeren of stoppen, dan schakelt de behandelaar het apparaat onmiddellijk uit. Uw comfort en veiligheid staan voorop."
      }
    }
  ]
};

export default function Behandelproces() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[60vh] flex flex-col justify-center py-20 pb-24">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-70 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-behandelproces.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center mt-12">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              Het rTMS Behandelproces — <br className="hidden md:block" />
              Van aanmelding tot herstel
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
              We geloven in transparantie. Ontdek hieronder de exacte stappenlijn die u bij ons zult doorlopen, ontworpen rondom uw veiligheid, comfort en klinische excellentie.
            </p>
          </div>
        </section>

        {/* The Vertical Timeline Journey */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
           
           <div className="max-w-4xl mx-auto px-6 relative z-10">
              
              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-8 md:before:ml-[2.25rem] before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-[#33C5F3] before:to-slate-200">
                
                {/* Stap 1 */}
                <div className="relative flex items-start group">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-[4px] border-white bg-[#33C5F3] text-white shadow-lg shrink-0 z-10 text-2xl">
                      <FaPhoneAlt />
                    </div>
                    <div className="ml-8 md:ml-12 w-full mt-2 lg:mt-0">
                        <span className="text-[#33C5F3] font-bold uppercase tracking-wider text-sm mb-2 block">Stap 1</span>
                        <h2 className="font-bold text-slate-900 text-3xl lg:text-4xl mb-4">Aanmelding en eerste contact</h2>
                        <div className="bg-white p-8 rounded border border-slate-100 shadow-sm">
                          <p className="text-slate-600 leading-relaxed mb-4">
                            Zodra u een verplichte SGGZ verwijsbrief van uw arts heeft ontvangen, kunt u zich veilig via onze website of telefonisch aanmelden voor een intake op een van onze locaties in Heiloo of Schiphol-Rijk. 
                          </p>
                          <p className="text-slate-600 leading-relaxed">
                            Onze patiënten-coördinator neemt doorgaans binnen 48 uur contact met u op voor een eerste, oriënterende screening. We controleren hierbij direct de formele contra-indicaties (zoals metalen implantaten in het hoofd of een voorgeschiedenis met epilepsie). Voldoet u aan de basisrichtlijnen? Dan plannen we uw intakegesprek op de kliniek.
                          </p>
                        </div>
                    </div>
                </div>

                {/* Stap 2 */}
                <div className="relative flex items-start group">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-[4px] border-white bg-white text-[#33C5F3] shadow-lg shrink-0 z-10 text-2xl group-hover:bg-[#33C5F3] group-hover:text-white transition-colors">
                      <FaClipboardCheck />
                    </div>
                    <div className="ml-8 md:ml-12 w-full mt-2 lg:mt-0">
                        <span className="text-[#33C5F3] font-bold uppercase tracking-wider text-sm mb-2 block">Stap 2</span>
                        <h2 className="font-bold text-slate-900 text-3xl lg:text-4xl mb-4">Intake en diagnostiek</h2>
                        <div className="bg-white p-8 rounded border border-slate-100 shadow-sm">
                          
                          <h3 className="font-bold text-slate-900 text-xl mb-3">Wie voert de intake uit?</h3>
                          <p className="text-slate-600 leading-relaxed mb-6">Uw fysieke intakegesprek van circa één uur wordt altijd geleid door onze psychiater en/of een ervaren (GZ)-psycholoog. Wij geloven in de hoogste klinische standaard.</p>
                          
                          <h3 className="font-bold text-slate-900 text-xl mb-3">Wat wordt er beoordeeld?</h3>
                          <p className="text-slate-600 leading-relaxed">Gezamenlijk brengen we uw ziektegeschiedenis uitgebreid in kaart. We bespreken eerdere medicatietrajecten (om bijvoorbeeld Therapieresistente Depressie vast te stellen), en uw huidige klachten en verwachtingen. Ook wordt er, middels gevalideerde vragenlijsten (zoals de BDI of HAM-D scores), een definitieve nulmeting (baseline) opgesteld om later uw voortgang wetenschappelijk te kunnen meten.</p>
                        </div>
                    </div>
                </div>

                {/* Stap 3 */}
                <div className="relative flex items-start group">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-[4px] border-white bg-white text-[#33C5F3] shadow-lg shrink-0 z-10 text-2xl group-hover:bg-[#33C5F3] group-hover:text-white transition-colors">
                      <FaFileSignature />
                    </div>
                    <div className="ml-8 md:ml-12 w-full mt-2 lg:mt-0">
                        <span className="text-[#33C5F3] font-bold uppercase tracking-wider text-sm mb-2 block">Stap 3</span>
                        <h2 className="font-bold text-slate-900 text-3xl lg:text-4xl mb-4">Behandelplan op maat</h2>
                        <div className="bg-white p-8 rounded border border-slate-100 shadow-sm">
                          <p className="text-slate-600 leading-relaxed mb-4">
                            Staat het licht na overleg in het Multidisciplinair Overleg (MDO) op groen? Dan stellen we een persoonlijk rTMS-behandelplan op. Hierin staat exact beschreven welk specifieke hersengebied gestimuleerd gaat worden, en met welke frequentie.
                          </p>
                          <p className="text-slate-600 leading-relaxed font-bold">
                            Tijdens de allereerste sessie bepalen we de 'motor drempelwaarde' (Motor Threshold). Dit is belangrijk: ieders hersenen hebben een andere gevoeligheid. Middels kleine testpulsjes kalibreren wij de machine zó, dat de magnetische dosis 100% veilig is en optimaal effect heeft voor uw schedeldikte en neurologische respons.
                          </p>
                        </div>
                    </div>
                </div>

                {/* Stap 4 */}
                <div className="relative flex items-start group">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-[4px] border-white bg-[#2b2e4a] text-white shadow-lg shrink-0 z-10 text-2xl">
                      <FaBrain />
                    </div>
                    <div className="ml-8 md:ml-12 w-full mt-2 lg:mt-0">
                        <span className="text-[#33C5F3] font-bold uppercase tracking-wider text-sm mb-2 block">Stap 4</span>
                        <h2 className="font-bold text-slate-900 text-3xl lg:text-4xl mb-4">De rTMS-sessies</h2>
                        <div className="bg-white p-8 rounded border border-slate-100 shadow-sm">
                          
                          <div className="grid md:grid-cols-2 gap-8">
                             <div>
                                <h3 className="font-bold text-[#33C5F3] text-lg mb-2">Hoe vaak komen patiënten?</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">Een behandeling slaat aan door de kracht der herhaling. De meeste patiënten komen tussen de 2 en 4 keer per week naar onze kliniek. Gemiddeld beslaat het totale protocol 20 tot 30 sessies verspreid over 4 tot 8 weken.</p>
                             </div>
                             <div>
                                <h3 className="font-bold text-[#33C5F3] text-lg mb-2">Hoe lang duurt een sessie?</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">De daadwerkelijke tijd in de behandelstoel ligt doorgaans net onder de 20 minuten. U bent vaak met een half uurtje alweer op weg naar huis.</p>
                             </div>
                          </div>

                          <div className="mt-8 border-t border-slate-100 pt-6">
                            <h3 className="font-bold text-slate-900 text-xl mb-3">Wat gebeurt er tijdens een sessie?</h3>
                            <p className="text-slate-600 leading-relaxed">U neemt plaats in een ergonomische, comfortabele stoel ("tandartsstoel"-model maar zachter). De behandelaar plaatst de magnetische spoel voorzichtig tegen uw hoofd. Tijdens de sessie voelt u een ritmisch, tikkend gevoel op uw schedel en hoort u een tikkend geluid (waarvoor we indien gewenst gehoorbescherming bieden). U bent volledig wakker. Velen kijken tv, lezen een tijdschrift, of kletsen ontspannen met onze behandelaar.</p>
                          </div>

                        </div>
                    </div>
                </div>

                {/* Stap 5 */}
                <div className="relative flex items-start group">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-[4px] border-white bg-white text-[#33C5F3] shadow-lg shrink-0 z-10 text-2xl group-hover:bg-[#33C5F3] group-hover:text-white transition-colors">
                      <FaChartLine />
                    </div>
                    <div className="ml-8 md:ml-12 w-full mt-2 lg:mt-0">
                        <span className="text-[#33C5F3] font-bold uppercase tracking-wider text-sm mb-2 block">Stap 5</span>
                        <h2 className="font-bold text-slate-900 text-3xl lg:text-4xl mb-4">Monitoring en bijstelling</h2>
                        <div className="bg-white p-8 rounded border border-slate-100 shadow-sm">
                          <p className="text-slate-600 leading-relaxed mb-4">Na elke 10e sessie (ongeveer halverwege het traject) voeren we een uitgebreidere evaluatie uit. We meten uw vooruitgang objectief (aan de hand van terugkerende vragenlijsten) en subjectief (uitleg over uw ervaring, emoties en energiepeil). Slaat het protocol onvoldoende aan? Dan kunnen onze artsen besluiten de frequentie te verhogen of het target-gebied te moduleren in overleg met u.</p>
                        </div>
                    </div>
                </div>

                {/* Stap 6 */}
                <div className="relative flex items-start group">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-[4px] border-white bg-[#33C5F3] text-white shadow-lg shrink-0 z-10 text-2xl">
                      <FaCheckCircle />
                    </div>
                    <div className="ml-8 md:ml-12 w-full mt-2 lg:mt-0">
                        <span className="text-[#33C5F3] font-bold uppercase tracking-wider text-sm mb-2 block">Stap 6</span>
                        <h2 className="font-bold text-slate-900 text-3xl lg:text-4xl mb-4">Afsluiting en nazorg</h2>
                        <div className="bg-white p-8 rounded border border-slate-100 shadow-sm">
                          <p className="text-slate-600 leading-relaxed mb-6">Wanneer de afgesproken 20-30 sessies zijn voltooid, vindt het formele eindgesprek plaats. We meten de totale reductie in uw klachten en leggen het resultaat vast in uw medisch dossier (en koppelen dit veilig terug aan uw huisarts).</p>
                          
                          <div className="grid md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded border-l-4 border-[#33C5F3]">
                            <div>
                              <h3 className="font-bold text-slate-900 text-lg mb-2">Terugvalpreventie</h3>
                              <p className="text-slate-600 leading-relaxed text-sm">We bespreken handvaten en vroege triggers die u in de gaten moet houden, om de stabiliteit vast te houden.</p>
                            </div>
                            <div>
                              <h3 className="font-bold text-slate-900 text-lg mb-2">Onderhoudssessies</h3>
                              <p className="text-slate-600 leading-relaxed text-sm">Bij sommige diagnoses kan het jaren later wenselijk zijn een kleine 're-charge' of onderhoudsprotocol aan te vragen.</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>

              </div>
           </div>
        </section>

        {/* Combinatie met Psychotherapie */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-3xl mx-auto mb-6 text-[#33C5F3] shadow-sm">
              <FaHandHoldingHeart />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">De kracht van combinatie: rTMS en Psychotherapie</h2>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-10"></div>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
              Hoewel het in bovenstaand klinisch tijdpad niet apart is geclassificeerd, zijn wij aanhangers van combinatietherapie. rTMS creëert de <strong>biologische ontvankelijkheid</strong>: het hevelt de patiënt uit een absolute put van apathie of hyperarousal en opent het brein weer voor nieuwe prikkels.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium mb-6">
              Echter: gedrag is aangeleerd. Tijdens of kort na het rTMS traject integreren we of verwijzen we structureel door naar cognitieve gedragstherapie (CGT) of EMDR (bij trauma). Door de nieuwe neurologische ademruimte die rTMS u heeft gegeven, zult u merken dat de gesprekstherapie ineens wél aanslaat en de nieuwe, gezonde gedragspatronen zich duurzaam in uw brein verankeren. 
            </p>
          </div>
        </section>

        {/* Veelgestelde vragen over het behandelproces */}
        <section className="py-24 bg-theme-navy text-white relative">
           <div className="absolute inset-0 bg-[#2b2e4a]"></div>
           <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Veelgestelde vragen over het behandelproces</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto"></div>
            </div>
            
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, idx) => (
                <details key={idx} className="group border border-white/20 bg-white/5 py-6 px-6 rounded cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex justify-between items-center font-bold text-white text-xl hover:text-[#33C5F3] transition-colors">
                    {faq.name}
                    <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center transition-colors group-hover:border-[#33C5F3] group-open:bg-[#33C5F3] group-open:border-[#33C5F3] group-open:text-white group-open:rotate-45 shrink-0 ml-4">
                      <FaChevronDown className="w-3 h-3 group-open:hidden" />
                      <div className="w-4 h-0.5 bg-white hidden group-open:block" />
                    </span>
                  </summary>
                  <p className="text-slate-300 mt-6 leading-relaxed text-lg max-w-3xl">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-50">
           <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Start uw behandelproces</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Vraag vandaag nog een intakegesprek aan via de website of overleg met uw huisarts voor een verwijzing. Binnenkort verwelkomen wij u graag in Heiloo of Schiphol-Rijk.</p>
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
