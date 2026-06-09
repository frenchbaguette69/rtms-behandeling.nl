import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/lib/blog-data';
import { FaCalendarAlt, FaClock, FaChevronRight, FaFilter } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Blog & Inzichten | rTMS Behandeling Nederland',
  description: 'Blijf op de hoogte van de nieuwste ontwikkelingen in rTMS, patiëntervaringen en wetenschappelijk onderzoek naar mentale gezondheid.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/blog/',
  },
};

export default function BlogListing() {
  const categories = ["Alle", "Educatief", "Ervaringen", "Wetenschap", "Praktisch", "Lokaal"];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. Hero */}
      <section className="relative w-full bg-[#2b2e4a] py-24">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2b2e4a] to-[#33C5F3]/20 opacity-90 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Inzichten & Expertise
          </h1>
          <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Ontdek de nieuwste wetenschappelijke doorbraken, lees authentieke ervaringen en verdiep uw kennis over de toekomst van neurologische psychiatrie.
          </p>
        </div>
      </section>

      {/* 2. Blog Engine */}
      <main className="py-20 max-w-7xl mx-auto px-6 w-full">
        
        {/* Category Filters (Mobile scrollable, Desktop flex) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-3 text-slate-500 font-bold uppercase text-xs tracking-widest">
            <FaFilter className="text-[#33C5F3]" /> Filter op categorie:
          </div>
          <div className="flex gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full text-sm font-bold border transition-all whitespace-nowrap ${
                  cat === "Alle" 
                  ? "bg-[#33C5F3] border-[#33C5F3] text-white shadow-lg shadow-cyan-100" 
                  : "bg-white border-slate-200 text-slate-600 hover:border-[#33C5F3] hover:text-[#33C5F3]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}/`}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${
                    post.category === "Wetenschap" ? "bg-purple-50 text-purple-600" :
                    post.category === "Ervaringen" ? "bg-emerald-50 text-emerald-600" :
                    post.category === "Praktisch" ? "bg-amber-50 text-amber-600" :
                    post.category === "Lokaal" ? "bg-pink-50 text-pink-600" :
                    "bg-cyan-50 text-[#33C5F3]"
                  }`}>
                    {post.category}
                  </span>
                  <span className="text-slate-300 flex items-center gap-1 text-[11px] font-medium ml-auto">
                    <FaClock className="text-[10px]" /> {post.readingTime}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-[#2b2e4a] leading-tight mb-4 group-hover:text-[#33C5F3] transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-8">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-slate-400 text-xs flex items-center gap-2 font-medium">
                    <FaCalendarAlt size={12} /> {post.date}
                  </span>
                  <span className="text-[#33C5F3] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lees meer <FaChevronRight size={10} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </main>

      {/* 4. Support Block */}
      <section className="py-24 bg-white border-t border-slate-100 mt-20">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-[#2b2e4a] mb-6 font-sans">Vraag een vrijblijvende intake aan</h2>
            <p className="text-slate-600 mb-10 max-w-xl mx-auto">
              Hebben deze artikelen u geïnspireerd of wilt u weten of rTMS voor u de juiste weg is? Onze specialisten staan klaar voor een screeningsgesprek.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/aanmelden/" className="px-10 py-4 bg-[#33C5F3] text-white font-bold rounded-full hover:bg-[#2b2e4a] shadow-lg shadow-cyan-100 transition-all">
                 Direct Aanmelden
               </Link>
               <Link href="/contact/" className="px-10 py-4 border-2 border-[#2b2e4a] text-[#2b2e4a] font-bold rounded-full hover:bg-slate-50 transition-all">
                 Contact Opnemen
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
}
