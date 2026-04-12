"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper for active styling
  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  return (
    <>
      {/* Top Bar (Dark Navy matching neurocare) */}
      <div className="bg-[#2b2e4a] text-white py-2 px-6 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-end items-center gap-4 md:gap-6 font-medium">
          <Link href="/verwijzers/" className="hover:text-cyan-400 transition-colors">
            Doorverwijzen
          </Link>
          <span className="hidden sm:inline text-slate-500">|</span>
          <Link href="/professionele-opleiding/" className="hover:text-cyan-400 transition-colors">
            Professionele Opleiding
          </Link>
          <div className="flex items-center gap-1 cursor-pointer hover:text-cyan-400 transition-colors">
            <span className="w-4 h-4 rounded-full overflow-hidden inline-block bg-red-500"></span>
            NL
            <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-40 transition-shadow duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="w-8 h-8 rounded-full bg-[#33C5F3] flex items-center justify-center text-white font-bold text-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight">rtms <span className="text-slate-400 font-normal">behandeling</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center h-full gap-2 lg:gap-4 ml-auto">
            
            <Link href="/wat-is-rtms/" className={`px-2 text-[15px] font-medium transition-colors ${isActive('/wat-is-rtms') ? 'text-[#33C5F3]' : 'text-slate-900 hover:text-[#33C5F3]'}`}>Ik Zoek hulp</Link>

            {/* Behandelingen Dropdown */}
            <div className="relative group h-full flex items-center px-2">
              <Link href="/behandelingen/" className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${isActive('/behandelingen') ? 'text-[#33C5F3]' : 'text-slate-900 hover:text-[#33C5F3]'}`}>
                Wat bieden wij
              </Link>
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 py-4 border-t-2 border-[#33C5F3]">
                <Link href="/behandelingen/depressie/" className="block px-6 py-2 text-sm text-slate-600 hover:text-[#33C5F3] transition-colors">rTMS bij Depressie</Link>
                <Link href="/behandelingen/angststoornis/" className="block px-6 py-2 text-sm text-slate-600 hover:text-[#33C5F3] transition-colors">rTMS bij Angststoornis</Link>
                <Link href="/behandelingen/burn-out/" className="block px-6 py-2 text-sm text-slate-600 hover:text-[#33C5F3] transition-colors">rTMS bij Burn-out</Link>
                <Link href="/behandelingen/ocd-dwangstoornis/" className="block px-6 py-2 text-sm text-slate-600 hover:text-[#33C5F3] transition-colors">rTMS bij OCD</Link>
                <Link href="/behandelingen/ptss/" className="block px-6 py-2 text-sm text-slate-600 hover:text-[#33C5F3] transition-colors">rTMS bij PTSS</Link>
                <Link href="/behandelingen/tinnitus/" className="block px-6 py-2 text-sm text-slate-600 hover:text-[#33C5F3] transition-colors">rTMS bij Tinnitus</Link>
                <div className="border-t border-slate-100 my-2 mx-6"></div>
                <Link href="/behandelingen/therapieresistente-depressie/" className="block px-6 py-2 text-sm font-semibold text-slate-800 hover:text-[#33C5F3] transition-colors">Therapieresistente Depressie</Link>
              </div>
            </div>

            {/* Locaties Dropdown */}
            <div className="relative group h-full flex items-center px-2">
              <Link href="/locaties/" className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${isActive('/locaties') ? 'text-[#33C5F3]' : 'text-slate-900 hover:text-[#33C5F3]'}`}>
                Vestigingen
              </Link>
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 py-4 border-t-2 border-[#33C5F3]">
                <Link href="/locaties/heiloo/" className="block px-6 py-2 text-sm text-slate-600 hover:text-[#33C5F3] transition-colors">Heiloo</Link>
                <Link href="/locaties/schiphol-rijk/" className="block px-6 py-2 text-sm text-slate-600 hover:text-[#33C5F3] transition-colors">Schiphol-Rijk</Link>
              </div>
            </div>

            {/* Over ons Dropdown */}
            <div className="relative group h-full flex items-center px-2">
              <span className={`cursor-pointer flex items-center gap-1 text-[15px] font-medium transition-colors ${isActive('/over-ons') ? 'text-[#33C5F3]' : 'text-slate-900 hover:text-[#33C5F3]'}`}>
                Over ons
              </span>
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 py-4 border-t-2 border-[#33C5F3]">
                <Link href="/over-ons/" className="block px-6 py-2 text-sm text-slate-600 hover:text-[#33C5F3] transition-colors">Over de Kliniek</Link>
                <Link href="/team/" className="block px-6 py-2 text-sm text-slate-600 hover:text-[#33C5F3] transition-colors">Ons Team</Link>
                <Link href="/wetenschappelijk-bewijs/" className="block px-6 py-2 text-sm text-slate-600 hover:text-[#33C5F3] transition-colors">Wetenschappelijk Bewijs</Link>
                <Link href="/blog/" className="block px-6 py-2 text-sm text-slate-600 hover:text-[#33C5F3] transition-colors">Blog</Link>
              </div>
            </div>

            <Link href="/aanmelden/" className={`px-2 text-[15px] font-medium transition-colors ${isActive('/aanmelden') ? 'text-[#33C5F3]' : 'text-slate-900 hover:text-[#33C5F3]'}`}>Aanmelden</Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center ml-8 gap-3">
            <span className="px-5 py-2.5 bg-white text-slate-800 text-sm font-semibold rounded-full border border-slate-200 transition-colors shadow-sm cursor-default">
              Wachttijden
            </span>
            <Link href="/contact/" className="px-6 py-2.5 bg-[#33C5F3] text-white text-[15px] font-semibold rounded-full hover:bg-[#29a5cd] transition-colors shadow-sm">
              Contacteer ons
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button 
            type="button"
            className="lg:hidden text-slate-900 focus:outline-none p-2 ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open hoofdmenu</span>
            {mobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="px-6 py-6 flex flex-col space-y-6">
              
              <Link href="/wat-is-rtms/" className="block font-semibold text-lg text-slate-900" onClick={() => setMobileMenuOpen(false)}>Ik Zoek hulp</Link>

              <div className="space-y-3">
                <Link href="/behandelingen/" className="block font-semibold text-lg text-slate-900" onClick={() => setMobileMenuOpen(false)}>Wat bieden wij</Link>
                <div className="pl-4 space-y-3 border-l-[3px] border-[#33C5F3] flex flex-col">
                  <Link href="/behandelingen/depressie/" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>rTMS bij Depressie</Link>
                  <Link href="/behandelingen/angststoornis/" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>rTMS bij Angststoornis</Link>
                  <Link href="/behandelingen/burn-out/" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>rTMS bij Burn-out</Link>
                  <Link href="/behandelingen/ocd-dwangstoornis/" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>rTMS bij OCD</Link>
                  <Link href="/behandelingen/ptss/" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>rTMS bij PTSS</Link>
                  <Link href="/behandelingen/tinnitus/" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>rTMS bij Tinnitus</Link>
                </div>
              </div>

              <div className="space-y-3">
                <span className="block font-semibold text-lg text-slate-900">Vestigingen</span>
                <div className="pl-4 space-y-3 border-l-[3px] border-[#33C5F3] flex flex-col">
                  <Link href="/locaties/heiloo/" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>Heiloo</Link>
                  <Link href="/locaties/schiphol-rijk/" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>Schiphol-Rijk</Link>
                </div>
              </div>

              <div className="space-y-3">
                <span className="block font-semibold text-lg text-slate-900">Over ons</span>
                <div className="pl-4 space-y-3 border-l-[3px] border-[#33C5F3] flex flex-col">
                  <Link href="/over-ons/" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>Over de Kliniek</Link>
                  <Link href="/team/" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>Ons Team</Link>
                  <Link href="/wetenschappelijk-bewijs/" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>Wetenschappelijk Bewijs</Link>
                  <Link href="/blog/" className="text-slate-600" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                </div>
              </div>

              <Link href="/aanmelden/" className="block font-semibold text-lg text-slate-900" onClick={() => setMobileMenuOpen(false)}>Aanmelden</Link>

              <div className="pt-6 pb-2">
                <Link href="/contact/" className="block text-center w-full px-6 py-4 bg-[#33C5F3] text-white text-lg font-bold rounded-full shadow-lg" onClick={() => setMobileMenuOpen(false)}>
                  Contacteer ons
                </Link>
              </div>

            </div>
          </div>
        )}
      </header>
    </>
  );
}
