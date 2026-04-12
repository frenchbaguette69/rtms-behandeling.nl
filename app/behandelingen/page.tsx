import { Metadata } from 'next';
import Link from 'next/link';
import { FaSadTear, FaHeartbeat, FaSyncAlt, FaCloud, FaBatteryQuarter, FaBell } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'rTMS Behandelingen | Depressie, Angst, OCD, PTSS & Meer | rtms-behandeling.nl',
  description: 'Ontdek voor welke aandoeningen rTMS effectief is. Wij behandelen depressie, angststoornissen, OCD, PTSS, burn-out en tinnitus met bewezen rTMS-therapie.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/behandelingen/',
  },
  openGraph: {
    title: 'rTMS Behandelingen | Depressie, Angst, OCD, PTSS & Meer',
    description: 'Ontdek voor welke aandoeningen rTMS effectief is. Wij behandelen depressie, angststoornissen, OCD, PTSS, burn-out en tinnitus met bewezen rTMS-therapie.',
    url: 'https://rtms-behandeling.nl/behandelingen/',
    siteName: 'rTMS Behandeling Nederland',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function BehandelingenHub() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 bg-[#2b2e4a] text-white">
        {/* Subtle geometric background pattern logic */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#33C5F3] font-bold tracking-widest uppercase text-sm mb-4 block">Wat bieden wij</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8 max-w-4xl mx-auto">
            rTMS Behandelingen — <br className="hidden md:block" />
            Effectieve hulp bij meerdere aandoeningen
          </h1>
          <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
          <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Repetitieve Transcraniële Magnetische Stimulatie (rTMS) is een veelzijdige, bewezen behandeling voor uiteenlopende psychische en neurologische klachten.
          </p>
        </div>
      </section>

      {/* Hub Grid Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            
            {/* Depressie */}
            <div className="group pt-8 border-t border-slate-200">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-3xl mb-6 shadow-sm border border-slate-100 group-hover:border-[#33C5F3] group-hover:text-[#33C5F3] transition-colors text-slate-400">
                <FaSadTear />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#33C5F3] transition-colors leading-tight">Depressie</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Een effectieve, medicatievrije methode om zware somberheid en lusteloosheid tegen te gaan, wanneer traditionele middelen onvoldoende hebben geholpen. 
              </p>
              <Link href="/behandelingen/depressie/" className="flex items-center gap-2 text-[#33C5F3] font-bold tracking-wide hover:text-[#29a5cd] transition-colors uppercase text-sm">
                Bekijk behandeling 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Angststoornis */}
            <div className="group pt-8 border-t border-slate-200">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-3xl mb-6 shadow-sm border border-slate-100 group-hover:border-[#33C5F3] group-hover:text-[#33C5F3] transition-colors text-slate-400">
                <FaHeartbeat />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#33C5F3] transition-colors leading-tight">Angststoornis</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                rTMS helpt overactieve netwerken in de hersenen, verantwoordelijk voor onverklaarbare paniek of chronische angst, te kalmeren.
              </p>
              <Link href="/behandelingen/angststoornis/" className="flex items-center gap-2 text-[#33C5F3] font-bold tracking-wide hover:text-[#29a5cd] transition-colors uppercase text-sm">
                Bekijk behandeling 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* OCD / Dwangstoornis */}
            <div className="group pt-8 border-t border-slate-200">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-3xl mb-6 shadow-sm border border-slate-100 group-hover:border-[#33C5F3] group-hover:text-[#33C5F3] transition-colors text-slate-400">
                <FaSyncAlt />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#33C5F3] transition-colors leading-tight">OCD / Dwangstoornis</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Doorbreek dwangmatige patronen en obsessieve gedachten. rTMS reguleert de communicatie in de verstoorde netwerken van prefrontale cortex.
              </p>
              <Link href="/behandelingen/ocd-dwangstoornis/" className="flex items-center gap-2 text-[#33C5F3] font-bold tracking-wide hover:text-[#29a5cd] transition-colors uppercase text-sm">
                Bekijk behandeling 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* PTSS */}
            <div className="group pt-8 border-t border-slate-200">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-3xl mb-6 shadow-sm border border-slate-100 group-hover:border-[#33C5F3] group-hover:text-[#33C5F3] transition-colors text-slate-400">
                <FaCloud />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#33C5F3] transition-colors leading-tight">PTSS</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Verminder trauma, herbelevingen en hyperalertheid door emotionele circuits en het geheugennetwerk veilig en gericht te reguleren.
              </p>
              <Link href="/behandelingen/ptss/" className="flex items-center gap-2 text-[#33C5F3] font-bold tracking-wide hover:text-[#29a5cd] transition-colors uppercase text-sm">
                Bekijk behandeling 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Burn-out */}
            <div className="group pt-8 border-t border-slate-200">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-3xl mb-6 shadow-sm border border-slate-100 group-hover:border-[#33C5F3] group-hover:text-[#33C5F3] transition-colors text-slate-400">
                <FaBatteryQuarter />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#33C5F3] transition-colors leading-tight">Burn-out</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                rTMS kan het herstel na (of tijdens) een chronische stressreactie aanzienlijk versnellen, specifiek door het herstellen van uw cognitieve energieniveaus.
              </p>
              <Link href="/behandelingen/burn-out/" className="flex items-center gap-2 text-[#33C5F3] font-bold tracking-wide hover:text-[#29a5cd] transition-colors uppercase text-sm">
                Bekijk behandeling 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Tinnitus */}
            <div className="group pt-8 border-t border-slate-200">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-3xl mb-6 shadow-sm border border-slate-100 group-hover:border-[#33C5F3] group-hover:text-[#33C5F3] transition-colors text-slate-400">
                <FaBell />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#33C5F3] transition-colors leading-tight">Tinnitus</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Magneetstimulatie biedt verlichting bij oorsuizen door de constante hyperactiviteit in de auditieve en geassocieerde cortex selectief af te remmen.
              </p>
              <Link href="/behandelingen/tinnitus/" className="flex items-center gap-2 text-[#33C5F3] font-bold tracking-wide hover:text-[#29a5cd] transition-colors uppercase text-sm">
                Bekijk behandeling 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Therapieresistente Depressie (Highlight Card) */}
            <div className="group pt-8 border-t-[4px] border-[#33C5F3] md:col-span-2 lg:col-span-3 mt-8">
              <div className="grid md:grid-cols-2 gap-10 items-center bg-slate-50 p-10 mt-2">
                <div>
                  <span className="text-[#33C5F3] font-bold tracking-widest uppercase text-xs mb-2 block">Specialisme & Vergoed</span>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">Therapieresistente Depressie</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    Heeft u meerdere behandelingen doorlopen en minstens twee verschillende antidepressiva geprobeerd zonder afdoende resultaat? Dan kan spreken we van een therapieresistente depressie. Voor deze specifieke indicatie wordt rTMS in nagenoeg alle gevallen vergoed door uw Nederlandse basisverzekering (GGZ).
                  </p>
                  <Link href="/behandelingen/therapieresistente-depressie/" className="inline-flex justify-center items-center px-8 py-4 bg-[#33C5F3] text-white rounded-full font-bold hover:bg-[#29a5cd] transition shadow-md">
                    Lees de voorwaarden en meld u aan
                  </Link>
                </div>
                <div className="h-full min-h-[300px] bg-slate-200 w-full relative">
                  {/* Image placeholder */}
                  <div className="absolute inset-0 bg-[#2b2e4a] opacity-5"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section minimal */}
      <section className="py-24 bg-[#2b2e4a] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Weet u niet zeker welke indicatie bij u past?</h2>
          <p className="text-slate-300 text-lg mb-10">Neem gerust contact op. Onze zorgprofessionals helpen u graag bij de juiste diagnose en het opzetten van een persoonlijk rTMS behandelplan.</p>
          <Link href="/contact/" className="inline-flex justify-center items-center px-10 py-5 bg-transparent border-2 border-[#33C5F3] text-white rounded-full font-bold hover:bg-[#33C5F3] hover:text-white transition-colors">
            Neem vrijblijvend contact op
          </Link>
        </div>
      </section>

    </div>
  );
}
