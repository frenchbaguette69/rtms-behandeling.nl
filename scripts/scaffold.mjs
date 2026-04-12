import fs from 'fs/promises';
import path from 'path';

const pages = [
  { path: 'wat-is-rtms', title: 'Wat is rTMS?' },
  { path: 'behandelingen', title: 'Behandelingen' },
  { path: 'behandelingen/angststoornis', title: 'rTMS bij Angststoornis' },
  { path: 'behandelingen/burn-out', title: 'rTMS bij Burn-out' },
  { path: 'behandelingen/ocd-dwangstoornis', title: 'rTMS bij OCD' },
  { path: 'behandelingen/ptss', title: 'rTMS bij PTSS' },
  { path: 'behandelingen/tinnitus', title: 'rTMS bij Tinnitus' },
  { path: 'behandelingen/therapieresistente-depressie', title: 'Therapieresistente Depressie' },
  { path: 'behandelproces', title: 'Behandelproces' },
  { path: 'vergoeding-kosten', title: 'Vergoeding & Kosten' },
  { path: 'locaties', title: 'Locaties' },
  { path: 'locaties/heiloo', title: 'Locatie Heiloo' },
  { path: 'locaties/schiphol-rijk', title: 'Locatie Schiphol-Rijk' },
  { path: 'over-ons', title: 'Over Ons' },
  { path: 'team', title: 'Ons Team' },
  { path: 'wetenschappelijk-bewijs', title: 'Wetenschappelijk Bewijs' },
  { path: 'verwijzers', title: 'Voor Verwijzers' },
  { path: 'faq', title: 'Veelgestelde Vragen' },
  { path: 'contact', title: 'Contact' },
  { path: 'aanmelden', title: 'Aanmelden / Intake aanvragen' },
  { path: 'blog', title: 'Blog' },
  { path: 'privacyverklaring', title: 'Privacyverklaring' },
  { path: 'disclaimer', title: 'Disclaimer' },
  { path: 'sitemap', title: 'HTML Sitemap' },
];

const template = (title) => `import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            ${title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Deze pagina wordt binnenkort voorzien van volledige inhoud en educatief materiaal omtrent ${title.toLowerCase()}.
          </p>
          {/* Default Call to Action */}
          <div className="flex justify-center gap-4 hidden empty:hidden">
            {/* Can add custom CTAs here later */}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-16 w-full flex-1">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col items-center justify-center min-h-[300px] text-center">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-400 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Informatie in ontwikkeling</h2>
          <p className="text-slate-500 mb-8 max-w-lg">
            Bent u benieuwd naar de mogelijkheden of wilt u direct contact opnemen voor een intakegesprek?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/aanmelden/" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition">
              Aanmelden / Intake
            </Link>
            <Link href="/contact/" className="bg-white text-slate-700 border border-slate-300 px-6 py-3 rounded-full font-medium hover:bg-slate-50 transition">
              Neem contact op
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
`;

async function main() {
  const baseDir = path.join(process.cwd(), 'app');

  for (const page of pages) {
    const dirPath = path.join(baseDir, page.path);
    const filePath = path.join(dirPath, 'page.tsx');

    // Create directories if they don't exist
    await fs.mkdir(dirPath, { recursive: true });

    // Check if file already exists to avoid overwriting existing real pages (except those we just want to stub)
    try {
      await fs.access(filePath);
      console.log("Skipped (already exists): " + page.path + "/page.tsx");
    } catch {
      // File doesn't exist, so create it
      await fs.writeFile(filePath, template(page.title), 'utf-8');
      console.log("Created: " + page.path + "/page.tsx");
    }
  }
}

main().catch(console.error);
