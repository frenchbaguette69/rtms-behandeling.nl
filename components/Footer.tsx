import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2b2e4a] text-slate-300 pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Kolom 1: Logo + korte beschrijving */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 text-white hover:text-[#33C5F3] transition-colors">
              <div className="w-8 h-8 relative shrink-0">
                <Image 
                  src="/logortmsbehandeling.png" 
                  alt="rTMS Behandeling Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight">rtms <span className="font-normal text-slate-400">behandeling</span></span>
            </Link>
            <p className="text-[15px] leading-relaxed mb-6 text-slate-400">
              Gepersonaliseerde behandeling met innovatieve visie op diagnostiek en geestelijke gezondheidszorg op maat.
            </p>
          </div>
          
          {/* Kolom 2: Wat bieden wij */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-slate-700 pb-2 inline-block">Wat bieden wij</h4>
            <ul className="space-y-3">
              <li><Link href="/behandelingen/depressie/" className="hover:text-[#33C5F3] transition-colors text-[15px]">rTMS bij Depressie</Link></li>
              <li><Link href="/behandelingen/angststoornis/" className="hover:text-[#33C5F3] transition-colors text-[15px]">rTMS bij Angststoornis</Link></li>
              <li><Link href="/behandelingen/burn-out/" className="hover:text-[#33C5F3] transition-colors text-[15px]">rTMS bij Burn-out</Link></li>
              <li><Link href="/behandelingen/ocd-dwangstoornis/" className="hover:text-[#33C5F3] transition-colors text-[15px]">rTMS bij OCD / Dwangstoornis</Link></li>
              <li><Link href="/behandelingen/ptss/" className="hover:text-[#33C5F3] transition-colors text-[15px]">rTMS bij PTSS</Link></li>
              <li><Link href="/behandelingen/tinnitus/" className="hover:text-[#33C5F3] transition-colors text-[15px]">rTMS bij Tinnitus</Link></li>
            </ul>
          </div>
          
          {/* Kolom 3: Vestigingen */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-slate-700 pb-2 inline-block">Vestigingen</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/locaties/heiloo/" className="font-medium hover:text-[#33C5F3] transition-colors text-[15px] block mb-1">Heiloo</Link>
                <span className="text-sm text-slate-500 block">Noord-Holland</span>
              </li>
              <li>
                <Link href="/locaties/schiphol-rijk/" className="font-medium hover:text-[#33C5F3] transition-colors text-[15px] block mb-1">Schiphol-Rijk</Link>
                <span className="text-sm text-slate-500 block">Noord-Holland</span>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Snel naar */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-slate-700 pb-2 inline-block">Snel naar</h4>
            <ul className="space-y-3 text-[15px]">
              <li><Link href="/wat-is-rtms/" className="hover:text-[#33C5F3] transition-colors">Wat is rTMS?</Link></li>
              <li><Link href="/vergoeding-kosten/" className="hover:text-[#33C5F3] transition-colors">Tarieven en Vergoeding</Link></li>
              <li><Link href="/faq/" className="hover:text-[#33C5F3] transition-colors">Veelgestelde Vragen</Link></li>
              <li><Link href="/contact/" className="hover:text-[#33C5F3] transition-colors">Contacteer ons</Link></li>
              <li className="mt-4 pt-4 border-t border-slate-700">
                <Link href="/aanmelden/" className="inline-block bg-[#33C5F3] hover:bg-[#29a5cd] text-white px-8 py-3 rounded-full font-bold transition-colors w-full text-center mt-2">
                  Aanmelden
                </Link>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar: Links + Copyright */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} rtms nederland. Alle rechten voorbehouden.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <Link href="/privacybeleid/" className="hover:text-white transition-colors">Privacybeleid</Link>
            <Link href="/algemene-voorwaarden/" className="hover:text-white transition-colors">Algemene Voorwaarden</Link>
            <Link href="/sitemap/" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
