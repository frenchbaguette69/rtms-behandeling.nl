import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wat is rTMS? | Repetitieve Transcraniële Magnetische Stimulatie uitgelegd',
  description: 'rTMS is een niet-invasieve, medicatievrije hersenstimulatie die hersenactiviteit normaliseert. Vergoed door zorgverzekering. Leer hoe rTMS werkt, wat je kunt verwachten en voor wie het geschikt is.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/wat-is-rtms/',
  },
  openGraph: {
    title: 'Wat is rTMS? | Repetitieve Transcraniële Magnetische Stimulatie uitgelegd',
    description: 'rTMS is een niet-invasieve, medicatievrije hersenstimulatie die hersenactiviteit normaliseert. Vergoed door zorgverzekering. Leer hoe rTMS werkt, wat je kunt verwachten en voor wie het geschikt is.',
    url: 'https://rtms-behandeling.nl/wat-is-rtms/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-wat-is-rtms.png',
        width: 1200,
        height: 630,
        alt: 'Infographic: schematische hersenen met magnetische spoel, pijlen die stimulatie aangeven.',
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
      "name": "Is rTMS hetzelfde als ECT (elektroshocks)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nee. Bij ECT wordt onder narcose een epileptisch insult opgewekt wat impact heeft op het hele brein en geheugenverlies kan veroorzaken. rTMS is zeer lokaal, vereist geen narcose en heeft geen noemenswaardige invloed op het geheugen."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe lang duurt het effect van rTMS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bij de meeste patiënten is het effect duurzaam. Onderzoek wijst uit dat het herstellende effect op de neurale netwerken jaren kan aanhouden. Soms worden onderhoudssessies aanbevolen om terugval te voorkomen."
      }
    },
    {
      "@type": "Question",
      "name": "Mag ik autorijden direct na een rTMS-sessie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Omdat er geen sedatie of spierverslappers aan te pas komen, mag u direct na de behandeling zelfstandig aan het verkeer deelnemen."
      }
    },
    {
      "@type": "Question",
      "name": "Is rTMS veilig als ik zwanger ben?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Omdat de magnetische puls lokaal in het hoofd blijft (~3cm diep) bereikt deze de foetus niet. Overleg desalniettemin altijd met uw behandelend psychiater over de veiligheid van rTMS tijdens uw zwangerschap."
      }
    }
  ]
};

export default function WatIsRTMS() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-center">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-wat-is-rtms.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto">
              Wat is rTMS? — <br className="hidden md:block" />
              Alles over Repetitieve Transcraniële Magnetische Stimulatie
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl font-medium max-w-3xl mx-auto leading-relaxed">
              Een innovatieve, niet-invasieve en medicatievrije methode om de verstoorde communicatie in uw hersenen te herstellen.
            </p>
          </div>
        </section>

        {/* Intro + Definitie / H2: De wetenschap achter rTMS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">De wetenschap achter rTMS</h2>
              <div className="w-16 h-1 bg-[#33C5F3] mb-8"></div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Repetitieve Transcraniële Magnetische Stimulatie (rTMS) klinkt complex, maar het principe is eenvoudig. Bij aandoeningen zoals depressie observeren we vaak dat bepaalde delen van de hersenen (zoals de prefrontale cortex) overactief of juist onderactief zijn. 
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Door middel van een gecentreerde, krachtige magneet worden veilige magnetische pulsen door de schedel gestuurd. Deze pulsen wekken lokaal in het hersenweefsel kleine elektrische stroompjes op, waardoor de hersencellen (neuronen) worden gestimuleerd en nieuwe verbindingen aanmaken. Dit fenomeen heet <strong>neuroplasticiteit</strong>.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-700">
                  <svg className="w-6 h-6 text-[#33C5F3] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Niet-invasief:</strong> Geen operatie of verdoving nodig.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <svg className="w-6 h-6 text-[#33C5F3] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Medicatievrij:</strong> Vermijdt de systemische bijwerkingen van pillen.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <svg className="w-6 h-6 text-[#33C5F3] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Precisie:</strong> Richt zich uitsluitend op de verstoorde hersengebieden.</span>
                </li>
              </ul>
            </div>
            
            {/* Animatie/Diagram Placeholder */}
            <div className="bg-slate-50 p-6 shadow-sm border border-slate-100 h-full min-h-[400px] flex flex-col justify-center items-center text-center">
              {/* Infographic representation */}
              <div className="w-full aspect-[4/3] bg-slate-200 mb-6 flex items-center justify-center bg-[url('/images/og-wat-is-rtms.png')] bg-cover bg-center">
              </div>
              <p className="text-sm text-slate-500 italic max-w-md">Figuur: Schematische weergave van een rTMS-behandeling, waarbij de spoel (coil) magnetische pulsen afgeeft op de prefrontale cortex.</p>
            </div>
          </div>
        </section>

        {/* H2: Hoe verloopt een rTMS-sessie? */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-6">Hoe verloopt een rTMS-sessie?</h2>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-16"></div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-white p-8 border-t-[6px] border-[#33C5F3] shadow-sm">
                <div className="w-12 h-12 bg-slate-100 text-[#33C5F3] font-black text-2xl flex items-center justify-center rounded-full mb-6">1</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Voorbereiding en plaatsing van de spoel</h3>
                <p className="text-slate-600 leading-relaxed">
                  U neemt plaats in een comfortabele behandelstoel. De rTMS-technicus voert metingen uit om de exacte locatie en instellingen voor uw brein (de zogeheten 'motordrempel') te bepalen. De magnetische spoel wordt vervolgens zorgvuldig tegen uw hoofd geplaatst.
                </p>
              </div>

              <div className="bg-white p-8 border-t-[6px] border-[#33C5F3] shadow-sm">
                <div className="w-12 h-12 bg-slate-100 text-[#33C5F3] font-black text-2xl flex items-center justify-center rounded-full mb-6">2</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">De magnetische stimulatie</h3>
                <p className="text-slate-600 leading-relaxed">
                  De machine start de pulsen. U hoort een tikkend geluid (zoals bij een MRI, waarvoor u oordopjes draagt) en voelt een tikje tegen uw schedel. Een sessie duurt ongeveer 20 minuten. U kunt ondertussen een tijdschrift lezen of in gesprek gaan met de behandelaar.
                </p>
              </div>

              <div className="bg-white p-8 border-t-[6px] border-[#33C5F3] shadow-sm">
                <div className="w-12 h-12 bg-slate-100 text-[#33C5F3] font-black text-2xl flex items-center justify-center rounded-full mb-6">3</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Na de sessie</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nadat de laatste pulsen zijn afgegeven, is de sessie voltooid. Omdat rTMS geen invloed heeft op uw helderheid of reactievermogen, is er geen hersteltijd nodig. U kunt direct uw dagelijkse bezigheden, zoals autorijden of werken, hervatten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Hoe voelt rTMS aan? */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Hoe voelt rTMS aan?</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Veel patiënten vinden de gedachte aan magneetstimulatie spannend, maar de behandeling is <strong>pijnloos</strong>. De magnetische pulsen voelen aan als lichte tikjes tegen de zijkant van of op het hoofd, met het ritme van een specht. Soms kunnen de gezichtsspieren of spieren in de hoofdhuid lichtjes samentrekken.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Het kan tijdens de eerste paar sessies even wennen zijn, maar het ongemak neemt doorgaans zeer snel af. Sommige patiënten ervaren mild hoofdpijn kort na hun eerste sessies—daarvoor volstaat een standaard paracetamol.
            </p>
          </div>
        </section>

        {/* H2: Verschil tussen rTMS en andere behandelingen (Comparison Table) */}
        <section className="py-24 bg-[#2b2e4a] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">Verschil tussen rTMS en andere behandelingen</h2>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-16"></div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="py-6 px-4 font-bold text-xl w-1/4">Kenmerk</th>
                    <th className="py-6 px-4 font-bold text-xl text-[#33C5F3] w-1/4">rTMS</th>
                    <th className="py-6 px-4 font-bold text-xl w-1/4">Antidepressiva</th>
                    <th className="py-6 px-4 font-bold text-xl w-1/4">ECT (Shocks)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 font-semibold">Effectiviteit (bij resistentie)</td>
                    <td className="py-6 px-4 leading-relaxed">Zeer hoog (60-70% response)</td>
                    <td className="py-6 px-4 leading-relaxed text-slate-300">Laag (&lt; 15% na 2 mislukte tracks)</td>
                    <td className="py-6 px-4 leading-relaxed text-slate-300">Hoog (bij acute situaties)</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 font-semibold">Bijwerkingen</td>
                    <td className="py-6 px-4 leading-relaxed text-emerald-400">Mild (hoofdpijn, tikkend gevoel)</td>
                    <td className="py-6 px-4 leading-relaxed text-rose-400">Zwaar (gewichtstoename, sufheid, verlies libido)</td>
                    <td className="py-6 px-4 leading-relaxed text-rose-400">Geheugenverlies, spierpijn, verwarring</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 font-semibold">Hersteltijd / Impact</td>
                    <td className="py-6 px-4 leading-relaxed text-emerald-400">Direct functioneel (autorijden mag)</td>
                    <td className="py-6 px-4 leading-relaxed text-slate-300">Constante invloed op lichaam (afbouw)</td>
                    <td className="py-6 px-4 leading-relaxed text-rose-400">Klinische opname en verdoving nodig</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 font-semibold">Vergoeding</td>
                    <td className="py-6 px-4 leading-relaxed">Ja (vanuit basispakket)</td>
                    <td className="py-6 px-4 leading-relaxed text-slate-300">Ja (vanuit apotheek / basis)</td>
                    <td className="py-6 px-4 leading-relaxed text-slate-300">Ja (klinische GGZ)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-slate-400 text-sm max-w-4xl mx-auto space-y-4">
              <h3 className="font-bold text-white text-lg">rTMS versus psychotherapie</h3>
              <p>rTMS is geen <em>vervanger</em> voor psychotherapie (zoals CGT of EMDR), maar een krachtige <em>versneller</em>. Het maakt uw hersennetwerken weer kneedbaar en ontvankelijk. Bij rtms nederland combineren wij de hersenstimulatie altijd met gesprekken. Het rTMS neemt de neurobiologische blokkades weg, waarna de psychotherapie u de gereedschappen geeft om patronen duurzaam te veranderen.</p>
            </div>
          </div>
        </section>

        {/* H2: Voor wie / Niet geschikt / Hoeveel sessies */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            
            {/* Indicaties sectie */}
            <div>
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-[#33C5F3] mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Voor wie is rTMS?</h2>
              <p className="text-slate-600 mb-4">rTMS is bewezen effectief voor meerderjarigen die lijden aan:</p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#33C5F3]"></div> Therapieresistente Depressie</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#33C5F3]"></div> Ernstige Angststoornissen / Paniek</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#33C5F3]"></div> OCD (Dwangstoornissen)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#33C5F3]"></div> Chronische Burn-out syndromen</li>
              </ul>
            </div>

            {/* Contra-indicaties */}
            <div>
              <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contra-indicaties</h2>
              <p className="text-slate-600 mb-4">U kunt <strong>geen</strong> rTMS ontvangen indien u:</p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Een cochleair implantaat heeft</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Metalen / magnetische deeltjes in of nabij het hoofd heeft</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Aanleg heeft voor epileptische insulten</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Een pacemaker draagt (afhankelijk van advies)</li>
              </ul>
            </div>

            {/* Behandelduur sectie */}
            <div>
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-[#33C5F3] mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Hoeveel sessies?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">Een regulier traject vraagt toewijding. U ondergaat gemiddeld:</p>
              <div className="p-4 bg-slate-50 border-l-4 border-[#33C5F3]">
                 <strong className="text-slate-900 block mb-1">20 tot 30 sessies in totaal</strong>
                 <span className="text-slate-600">Verdeeld over 4 tot 6 weken (oftewel 2 tot 5 keer per week). Elke sessie beslaat zo'n 20 tot 30 minuten.</span>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Wetenschappelijke onderbouwing */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 text-center">Wetenschappelijke onderbouwing</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mx-auto mb-10"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 text-center">
              rTMS is geen experimentele therapie. Het rust op decennia van neurologisch onderzoek wereldwijd. De behandeling beschikt over het CE-keurmerk in Europa en FDA-clearing in de VS. Belangrijke instituten onderschrijven de werkzaamheid:
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 shadow-sm border border-slate-100">
                <div className="font-bold text-slate-900 mb-2">Nederlandse Gezondheidsraad</div>
                <p className="text-sm text-slate-600">Erkende rTMS in 2017 als reguliere behandeling voor depressie.</p>
              </div>
              <div className="bg-white p-6 shadow-sm border border-slate-100">
                <div className="font-bold text-slate-900 mb-2">Trimbos / NICE</div>
                <p className="text-sm text-slate-600">Zien rTMS als veilige therapielijn voorafgaand aan evt. medicatie switches.</p>
              </div>
              <div className="bg-white p-6 shadow-sm border border-slate-100">
                <div className="font-bold text-slate-900 mb-2">Harvard & Amsterdam UMC</div>
                <p className="text-sm text-slate-600">Leiden doorlopende onderzoeken naar de langetermijneffectiviteit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Veelgestelde vragen over rTMS (Accordion) */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Veelgestelde vragen over rTMS</h2>
              <div className="w-20 h-1 bg-[#33C5F3] mx-auto"></div>
            </div>
            
            <div className="space-y-0">
              {faqSchema.mainEntity.map((faq, idx) => (
                <details key={idx} className="group border-b border-slate-200 py-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex justify-between items-center font-bold text-slate-900 text-xl hover:text-[#33C5F3] transition-colors">
                    {faq.name}
                    <span className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center transition-colors group-hover:border-[#33C5F3] group-open:bg-[#33C5F3] group-open:border-[#33C5F3] group-open:text-white group-open:rotate-45">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
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

        {/* CTA Sectie */}
        <section className="py-32 bg-[#2b2e4a] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Kom ik in aanmerking voor rTMS?</h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Heeft u het gevoel dat traditionele oplossingen u niet verder helpen? Ontdek of u in aanmerking komt voor een traject dat wel doorbreekt in uw herstel. 
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link href="/aanmelden/" className="px-10 py-5 bg-[#33C5F3] text-white rounded-full font-bold text-lg hover:bg-[#29a5cd] transition-colors shadow-lg w-full sm:w-auto text-center">
                Vraag intakegesprek aan
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
