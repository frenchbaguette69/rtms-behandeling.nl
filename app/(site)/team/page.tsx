import { Metadata } from 'next';
import Link from 'next/link';
import { FaUserMd, FaGraduationCap, FaBriefcaseMedical, FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Ons Team | BIG-geregistreerde rTMS Behandelaren | rtms-behandeling.nl',
  description: 'Maak kennis met onze gespecialiseerde behandelaren. Allemaal BIG-geregistreerd, gespecialiseerd in rTMS en geestelijke gezondheidszorg.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/team/',
  },
  openGraph: {
    title: 'Ons Team — BIG-geregistreerde specialisten in rTMS',
    description: 'Veilige neuromodulatie vereist klinische topkwaliteit. Ontmoet onze psychiaters en GZ-psychologen.',
    url: 'https://rtms-behandeling.nl/team/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-team.png',
        width: 1200,
        height: 630,
        alt: 'Multidisciplinair behandelteam rTMS',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

const teamMembers = [
  {
    name: "Jan-Jaap Mol",
    role: "Psychiater",
    specialty: "Medisch beleid & rTMS bij Depressie",
    image: "",
    bio: "Jan-Jaap Mol is als psychiater eindverantwoordelijk voor het medisch beleid binnen onze klinieken. Met zijn achtergrond in de psychiatrie en neuromodulatie bewaakt hij de kwaliteit en veiligheid van elke behandeling."
  },
  {
    name: "Guido Smutzer",
    role: "Psycholoog",
    specialty: "Psychologische begeleiding & rTMS protocollen",
    image: "/guidomedewerker.webp",
    bio: "Guido Smutzer begeleidt patiënten tijdens en rondom de rTMS-behandeling. Als psycholoog zorgt hij ervoor dat de technische behandeling aansluit bij wat iemand persoonlijk nodig heeft."
  }
];

const teamSchema = [
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
        "name": "Ons Team",
        "item": "https://rtms-behandeling.nl/team/"
      }
    ]
  },
  ...teamMembers.map(member => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.role,
    "image": member.image,
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "rTMS Behandeling Nederland"
    },
    "description": member.bio,
    "knowsAbout": member.specialty
  }))
];

export default function Team() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />

      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">

        {/* 1. Hero */}
        <section className="relative w-full min-h-[60vh] flex flex-col justify-center py-20 pb-24">
          <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-70 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/og-team.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center mt-12">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-8 max-w-5xl mx-auto drop-shadow-md">
              Ons Team
            </h1>
            <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
            <p className="text-white/90 text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm mb-6">
              BIG-geregistreerde specialisten in rTMS. Maximale expertise voor de best mogelijke klinische uitkomst.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-[#33C5F3] mb-6 shadow-sm text-3xl mx-auto"><FaUserMd /></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Het gezicht achter de behandeling</h2>
            <div className="w-16 h-1 bg-[#33C5F3] mb-8 mx-auto"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              U vertrouwt ons de zorg voor uw hersenen en geestelijk welzijn toe. Dat is een verantwoordelijkheid die wij uiterst serieus nemen. Daarom werken wij in al onze vestigingen strikt multidisciplinair en voeren we regie vanuit de psychiatrie.
            </p>
          </div>
        </section>

        {/* 2. Behandelaren */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
             <div className="flex items-center gap-4 mb-12">
                 <div className="w-2 h-10 bg-[#33C5F3]"></div>
                 <h2 className="text-3xl font-bold text-slate-900">Onze behandelaren</h2>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
                {teamMembers.map((member, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded grid md:grid-cols-5 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="md:col-span-2 h-64 md:h-full bg-slate-200 relative">
                             <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})`}}></div>
                        </div>
                        <div className="md:col-span-3 p-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-[#2b2e4a] mb-1">{member.name}</h3>
                            <p className="text-[#33C5F3] font-bold mb-4">{member.role}</p>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.bio}</p>

                            <div className="mt-auto space-y-2">
                                <p className="text-xs text-slate-500 flex items-center gap-2"><span className="w-5 flex justify-center"><FaBriefcaseMedical className="text-slate-400" /></span> <strong>Specialisatie:</strong> {member.specialty}</p>
                            </div>
                        </div>
                    </div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. Opleiding en expertise */}
        <section className="py-24 bg-[#2b2e4a] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
             <FaGraduationCap className="text-6xl text-[#33C5F3] mx-auto mb-6" />
             <h2 className="text-3xl lg:text-4xl font-bold mb-6">Opleiding en expertise</h2>
             <div className="w-16 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
             <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Neuromodulatie is een snel evoluerend medisch vakgebied. Daarom hanteren wij strenge permanente educatie verplichtingen voor al onze medewerkers. Elke neuro-technicus volgt structurele (internationale) rTMS-certificeringstrajecten gericht op M1-motordrempel bepaling en anatomische navigatie.
             </p>
             <p className="text-lg text-slate-300 leading-relaxed">
                Op wekelijkse academische basis evalueert ons artsenteam casuïstiek en de allernieuwste behandelprotocollen (zoals het iTBS / Stanford Neuromodulation Therapy protocol) om te garanderen dat u de meest effectieve zorg krijgt die de wetenschap momenteel dicteert.
             </p>
          </div>
        </section>

        {/* 5. Werken bij ons? */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
             <div className="bg-slate-50 border-2 border-dashed border-[#33C5F3]/50 rounded-xl p-10 text-center">
                <h2 className="text-3xl font-bold text-[#2b2e4a] mb-4">Werken bij ons?</h2>
                <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                    Groei met ons mee. Wij zijn doorlopend op zoek naar gedreven GZ-psychologen en rTMS-operators die geloven in de synergie tussen biologie en psychologie. Bekijk onze actuele vacatures of stuur een open sollicitatie.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="mailto:HR@rtms-behandeling.nl" className="inline-flex items-center gap-2 bg-[#33C5F3] hover:bg-[#29a5cd] text-white font-bold py-3 px-8 rounded-full transition-colors">
                        <FaEnvelope /> Open sollicitatie
                    </a>
                </div>
             </div>
          </div>
        </section>

      </div>
    </>
  );
}
