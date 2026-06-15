import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, BlogPost } from '@/lib/blog-data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaShareAlt, FaUserMd, FaQuoteLeft, FaCheckCircle, FaChevronRight } from 'react-icons/fa';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Artikel Niet Gevonden | rTMS Behandeling',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://rtms-behandeling.nl/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://rtms-behandeling.nl/blog/${post.slug}/`,
      siteName: 'rTMS Behandeling Nederland',
      images: [
        {
          url: '/images/og-behandelproces.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'nl_NL',
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <article className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. Article Header */}
      <header className="bg-slate-50 pt-32 pb-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="flex items-center gap-4 mb-8">
            <Link href="/blog" className="text-slate-400 hover:text-[#33C5F3] flex items-center gap-2 text-sm font-bold transition-colors">
              <FaChevronLeft size={10} /> Back to Blog
            </Link>
            <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
            <span className="text-[#33C5F3] font-bold text-xs uppercase tracking-widest">{post.category}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2b2e4a] leading-tight mb-8">
            {post.content.h1}
          </h1>

          <div className="flex flex-wrap items-center gap-8 justify-between">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-[#2b2e4a] rounded-full flex items-center justify-center text-white"><FaUserMd size={24} /></div>
               <div className="text-sm">
                  <p className="font-bold text-[#2b2e4a]">Redactie rTMS Kliniek</p>
                  <p className="text-slate-400">Geverifieerd door Jan-Jaap Mol, Psychiater</p>
               </div>
            </div>

            <div className="flex items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-wider">
               <span className="flex items-center gap-2"><FaCalendarAlt className="text-[#33C5F3]" /> {post.date}</span>
               <span className="flex items-center gap-2"><FaClock className="text-[#33C5F3]" /> {post.readingTime} leestijd</span>
            </div>
          </div>

        </div>
      </header>

      {/* 2. Article Body Wrapper */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 py-20">
        
        {/* Left: Table of Contents & Tools (Desktop only) */}
        <aside className="hidden lg:block lg:col-span-3">
           <div className="sticky top-32 space-y-10">
              <div>
                <h3 className="text-[#2b2e4a] font-bold text-xs uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">Inhoudsopgave</h3>
                <nav className="space-y-4">
                  {post.content.sections.map((sec, i) => (
                    sec.h2 && (
                      <a key={i} href={`#sec-${i}`} className="block text-sm text-slate-500 hover:text-[#33C5F3] transition-colors leading-relaxed">
                        {sec.h2}
                      </a>
                    )
                  ))}
                </nav>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <p className="text-xs font-bold text-[#2b2e4a] mb-4 uppercase tracking-tighter">Deel dit inzicht</p>
                <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:text-[#33C5F3] cursor-pointer"><FaShareAlt size={14} /></div>
                </div>
              </div>

              {post.relatedTreatment && (
                <div className="bg-[#33C5F3]/5 p-6 rounded-xl border border-[#33C5F3]/10">
                  <p className="text-[10px] font-bold text-slate-400 mb-4 uppercase tracking-[0.2em]">Silo Focus</p>
                  <h4 className="text-[#2b2e4a] font-bold text-sm mb-4 leading-snug">Meer over deze behandeling</h4>
                  <Link href={`/behandelingen/${post.relatedTreatment.slug}/`} className="group flex items-center justify-between text-sm font-bold text-[#33C5F3] hover:text-[#2b2e4a] transition-colors">
                    {post.relatedTreatment.title} <FaChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}
           </div>
        </aside>

        {/* Right: Rich Content */}
        <main className="lg:col-span-8 flex flex-col">
           
           <div className="prose prose-lg prose-slate max-w-none text-slate-700 leading-8">
              {post.content.sections.map((section, idx) => (
                <div key={idx} id={section.h2 ? `sec-${idx}` : undefined} className={section.h2 ? "mt-12 first:mt-0" : ""}>
                   {section.h2 && <h2 className="text-3xl font-bold text-[#2b2e4a] mb-6">{section.h2}</h2>}
                   {section.h3 && <h3 className="text-2xl font-bold text-[#2b2e4a] mb-4">{section.h3}</h3>}
                   <p className="mb-6 whitespace-pre-wrap">{section.text}</p>
                </div>
              ))}
           </div>

           {/* Call to Action: Article Embedded */}
           <div className="mt-20 p-10 bg-[#2b2e4a] text-white rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none"><FaQuoteLeft size={80} /></div>
              <h3 className="text-3xl font-bold mb-6">Wilt u weten wat rTMS voor u kan betekenen?</h3>
              <p className="text-slate-300 text-lg mb-10 max-w-xl">
                 Heeft dit artikel u antwoorden gegeven, of juist meer vragen opgeroepen? We staan u graag te woord voor een vrijblijvende screening.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/aanmelden/" className="px-8 py-4 bg-[#33C5F3] text-white font-bold rounded-full hover:bg-white hover:text-[#2b2e4a] transition-all text-center">
                   Vraag een intake aan
                </Link>
                <Link href="/faq/" className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all text-center">
                   veelgestelde vragen
                </Link>
              </div>
           </div>

           {/* Medical Disclaimer */}
           <div className="mt-12 p-6 bg-slate-50 border-l-4 border-slate-200 text-slate-500 text-xs italic">
              Disclaimer: De informatie op deze website is uitsluitend bedoeld voor educatieve doeleinden en vervangt geen medisch advies, diagnose of behandeling. Raadpleeg bij psychische of fysieke klachten altijd uw huisarts of behandelend arts.
           </div>

        </main>

      </div>

      {/* 4. Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="bg-slate-50 py-24 border-t border-slate-100">
           <div className="max-w-4xl mx-auto px-6">
              <h3 className="text-2xl font-bold text-[#2b2e4a] mb-12 text-center uppercase tracking-widest text-sm">Lees ook in {post.category}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                 {relatedPosts.map(rel => (
                    <Link key={rel.slug} href={`/blog/${rel.slug}/`} className="group bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all flex flex-col">
                       <h4 className="text-lg font-bold text-[#2b2e4a] group-hover:text-[#33C5F3] transition-colors mb-4">{rel.title}</h4>
                       <p className="text-slate-400 text-xs flex items-center gap-2 mb-4 font-bold uppercase tracking-widest">
                          <FaCalendarAlt size={10} /> {rel.date}
                       </p>
                       <p className="text-slate-500 text-sm line-clamp-2 mb-6">{rel.excerpt}</p>
                       <div className="mt-auto flex items-center gap-2 text-[#33C5F3] font-bold text-xs uppercase tracking-widest">
                          Lees artikel <FaChevronRight size={10} />
                       </div>
                    </Link>
                 ))}
              </div>
           </div>
        </section>
      )}

    </article>
  );
}
