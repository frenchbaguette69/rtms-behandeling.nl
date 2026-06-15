import { Metadata } from 'next';
import Link from 'next/link';
import { FaMoneyBillWave, FaShieldAlt, FaFileMedical, FaRegHospital, FaHandHoldingHeart, FaUserShield, FaChartLine, FaCheckCircle, FaStar, FaChevronDown, FaExclamationTriangle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Vergoeding rTMS Behandeling | Zorgverzekering & Kosten | rtms-behandeling.nl',
  description: 'rTMS bij depressie is vergoed door de basisverzekering (sinds 2017). Lees alles over eigen risico, verwijzing, vergoedingsvoorwaarden en wat u zelf betaalt.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/vergoeding-kosten/',
  },
  openGraph: {
    title: 'Vergoeding en Kosten van rTMS Behandeling',
    description: 'Weet precies waar u aan toe bent. Informatie over verzekerde zorg, verwijzingen en particuliere trajecten.',
    url: 'https://rtms-behandeling.nl/vergoeding-kosten/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-vergoeding.png',
        width: 1200,
        height: 630,
        alt: 'Transparant overleg over de behandelkosten',
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
      "name": "Betaalt mijn verzekering 100% van de rTMS behandeling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indien u de juiste verwijzing heeft voor 'therapieresistente depressie' en wij deze indicatie in de intake bevestigen, valt het traject onder uw basisverzekering. U betaalt dan 100% niets aan de kliniek zelf, maar houdt wél rekening met het verrekenen van uw (wettelijk en vrijwillig) eigen risico door uw verzekeraar."
      }
    },
    {
      "@type": "Question",
      "name": "Heb ik een speciale aanvullende verzekering nodig?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nee. De SGGZ zorg valt direct onder de dekking van de Nederlandse basisverzekering."
      }
    },
    {
      "@type": "Question",
      "name": "Wat betaal ik als ik puur voor Tinnitus of Burn-out kom?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pure indicaties van tinnitus, OCD of burn-out zónder de aanwezigheid van een bijkomende zware depressie, worden in Nederland momenteel niet door het basispakket gedekt. U kunt bij ons nog steeds behandeld worden, maar dan op basis van een privaat / particulier tarief. Neem hiervoor contact met ons op."
      }
    },
    {
      "@type": "Question",
      "name": "Kan mijn huisarts mij direct naar jullie verwijzen voor rTMS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. De verwijzing (verwijsbrief SGGZ) kan afkomstig zijn van uw huisarts, uw huidige behandelend psychiater of een (klinisch) psycholoog."
      }
    },
    {
      "@type": "Question",
      "name": "Werken jullie met onversneden polissen of restitutiepolissen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wij hanteren contracten met de meeste grote Nederlandse verzekeraars, dan wel we declareren conform het landelijke NZa-tarief (Nederlandse Zorgautoriteit). De facturatie verloopt middels het door de overheid verplichte ZPM (Zorgprestatiemodel)."
      }
    }
  ]
};

export default function VergoedingKosten() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* 1. Hero */}
        <section className="relative w-full min-h-[60vh] flex flex-col justify-center py-20 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-vergoeding.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center mt-12">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              Vergoeding en Kosten van <br className="hidden md:block" />
              rTMS Behandeling
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
              Weet exact waar u financieel aan toe bent. Volledige transparantie over de basisverzekering, het verplichte eigen risico en particuliere trajecten.
            </p>
          </div>
        </section>

        {/* 2. Wordt rTMS vergoed door de zorgverzekering? / 3. Vergoedingsvoorwaarden */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-[#33C5F3] mb-6 shadow-sm text-xl"><FaShieldAlt /></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Wordt rTMS vergoed door de zorgverzekering?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Het simpele antwoord is <strong>ja, in veel gevallen volledig.</strong> Sinds oktober 2017 is de behandeling met rTMS door het Zorginstituut Nederland officieel goedgekeurd en opgenomen in het landelijke basispakket. Echter gelden er wel strikte spelregels en medische voorwaarden waaraan voldaan moet worden, voordat de zorgverzekeraar de factuur overneemt.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-bold p-4 bg-slate-50 border-l-4 border-[#33C5F3]">
                Het is belangrijk om te weten dat vergoeding in Nederland afhankelijk is van uw diagnose (de medische indicatie), en niet van de techniek rTMS zelf.
              </p>
            </div>

            <div className="bg-[#2b2e4a] text-white p-10 rounded shadow-xl">
                 <h2 className="text-3xl font-bold mb-6">De Vergoedingsvoorwaarden</h2>
                 <p className="text-slate-300 leading-relaxed mb-8">
                   Om voor vergoede verzekerde zorg (SGGZ) in aanmerking te komen, verlangt uw verzekeraar dat u voldoet aan de volgende drie pijlers:
                 </p>
                 
                 <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-[#33C5F3] text-lg mb-2 flex items-center gap-2"><FaCheckCircle /> 1. De juiste indicatie</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">Het Zorginstituut vergoedt rTMS primair voor de diagnose <em>Therapieresistente Depressie (TRD)</em>. We spreken hiervan als u niet of onvoldoende reageert op minimaal twee eerdere medische (antidepressiva) of psychologische interventies.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#33C5F3] text-lg mb-2 flex items-center gap-2"><FaFileMedical /> 2. Een geldige verwijzing</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">U bent in het bezit van een officiële verwijsbrief (gedateerd, met AGB-code) van uw huisarts, regiebehandelaar of medisch specialist, specifiek gericht aan de <em>Specialistische GGZ (SGGZ)</em>.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#33C5F3] text-lg mb-2 flex items-center gap-2"><FaStar /> 3. Aanvullend verzekerd?</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">Nee, een aanvullende polis is <strong>niet vereist</strong>. Deze complexe zorg is wettelijk verankerd in uw wettelijke Nederlandse basisverzekering.</p>
                    </div>
                 </div>
            </div>

          </div>
        </section>

        {/* 4. Eigen risico bij rTMS / 5. Heeft u een verwijzing nodig? */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
            
            <div className="bg-white p-10 shadow-sm border border-slate-100 flex flex-col justify-center">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-3xl mb-6 text-[#33C5F3]">
                 <FaMoneyBillWave />
               </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Hoe zit het met het Eigen Risico?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-6"></div>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                Hoewel de behandeling door ons rechtstreeks bij uw verzekeraar gedeclareerd kan worden, is psychiatrische hulp uit de basisverzekering <strong>altijd onderhevig aan het wettelijk verplichte eigen risico</strong> (momenteel minimaal €385 per kalenderjaar).
              </p>
              <p className="text-slate-600 leading-relaxed">
                Heeft u dit bedrag in het huidige medische jaar nog niet opgemaakt aan andere zorg (zoals ziekenhuisbezoeken of medicijnen)? Dan zal uw zorgverzekeraar dit bedrag achteraf (na onze eerste facturatie) met u verrekenen. Heeft u vrijwillig een hoger eigen risico gekozen (bijv. €885), dan wordt dat hogere bedrag aangesproken.
              </p>
            </div>

            <div className="bg-white p-10 shadow-sm border border-slate-100 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                <FaFileMedical className="text-[250px]" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Heeft u een verwijzing nodig?</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-6"></div>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                Ja, zonder een correcte SGGZ verwijsbrief mogen wij vanuit de wet geen verzekerde zorg starten of declareren. U moet deze fysiek (of digitaal bevoegd via ZorgDomein) aanleveren <em>voordat</em> het diagnostisch intakegesprek plaatsvindt.
              </p>

              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded text-red-900 mt-4 mb-4">
                 <h3 className="font-bold flex items-center gap-2 mb-1"><FaExclamationTriangle className="text-red-600" /> Let op de datum</h3>
                 <p className="text-sm">De verwijsbrief mag op de dag van uw eerste afspraak (de intake) niet ouder zijn dan 9 maanden, en moet expliciet de vermelding <strong>"verwijzing Specialistische GGZ"</strong> bevatten.</p>
              </div>

            </div>

          </div>
        </section>

        {/* 6. Wat als mijn rTMS niet vergoed wordt (Particulier) */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Wat als mijn indicatie niet vergoed wordt?</h2>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-10"></div>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
              Zoals uitgelegd hecht de Nederlandse basisverzekering de rTMS vergoeding strikt aan de depressie diagnose. Klachten zoals pure Tinnitus, Burn-out, of lichte angststoornissen (zonder ernstige depressieve co-morbiditeit) komen hierdoor vaak <strong>buiten de verzekerde dekking</strong> te vallen.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium mb-10">
              Dat betekent natuurlijk niet dat rTMS u niet medisch kan helpen. Het betekent enkel dat u het traject <strong>particulier</strong> dient te bekostigen. In dat geval verstrekken we u na een (kostenloze) eerste kennismaking een gedetailleerde offerte voor een particulier protocol. U ontvangt de facturen vervolgens rechtstreeks van ons, en niet van uw verzekeraar.
            </p>
            
            <Link href="/contact/" className="inline-flex justify-center items-center px-10 py-5 bg-white border-2 border-[#33C5F3] text-[#33C5F3] rounded-full font-bold hover:bg-[#33C5F3] hover:text-white transition shadow-sm text-lg">
                Vraag onze particuliere tarieven op
            </Link>
          </div>
        </section>

        {/* 7. Veelgestelde vragen over vergoeding */}
        <section className="py-24 bg-theme-navy text-white relative">
           <div className="absolute inset-0 bg-[#2b2e4a]"></div>
           <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Veelgestelde financiële vragen</h2>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Heeft u uw zorg geregeld?</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Vraag uw huisartsenverwijzing aan via ZorgDomein en schrijf u gemakkelijk bij ons in. Wij ontzorgen u met de afhandeling via de zorgverzekeraar.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/aanmelden/" className="px-10 py-5 bg-[#33C5F3] text-white font-bold hover:bg-[#29a5cd] transition-colors shadow-lg rounded-full text-lg">
                Direct Aanmelden
              </Link>
            </div>
           </div>
        </section>

      </div>
    </>
  );
}
