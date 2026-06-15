'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaExclamationTriangle, FaChevronRight, FaHandshake, FaWhatsapp } from 'react-icons/fa';


const contactSchema = [
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
        "name": "Contact",
        "item": "https://rtms-behandeling.nl/contact/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact rTMS Behandeling Nederland",
    "description": "Neem contact op met onze rTMS-klinieken in Heiloo of Schiphol-Rijk voor vragen of een intake.",
    "mainEntity": {
      "@type": "MedicalClinic",
      "name": "rTMS Behandeling Nederland",
      "telephone": "085-0604388",
      "email": "info@rtms-behandeling.nl",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Kennemerstraatweg 464, Unit 1.03",
          "addressLocality": "Heiloo",
          "postalCode": "1851 NG",
          "addressCountry": "NL"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Boeing Avenue 8",
          "addressLocality": "Schiphol-Rijk",
          "postalCode": "1119 PB",
          "addressCountry": "NL"
        }
      ]
    }
  }
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', message: '', consent: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setForm(prev => ({ ...prev, [target.id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] flex flex-col justify-center py-20 pb-24">
        <div className="absolute inset-0 bg-[#2b2e4a] mix-blend-multiply opacity-60 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/og-contact.png')] bg-cover bg-center bg-no-repeat z-0 transform scale-105"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center mt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-md">
            Neem Contact Op
          </h1>
          <div className="w-20 h-1 bg-[#33C5F3] mx-auto mb-8"></div>
          <p className="text-white/90 text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Heeft u vragen of wilt u meer informatie? Ons team staat klaar om u te woord te staan. Wij reageren doorgaans binnen één werkdag op uw bericht.
          </p>
        </div>
      </section>

      {/* Main Content: Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form Column */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 h-fit">
            <h2 className="text-3xl font-bold text-[#2b2e4a] mb-6">Stel uw vraag</h2>
            <p className="text-slate-600 mb-8">
              Vul onderstaand formulier in en wij nemen zo spoedig mogelijk contact met u op.
            </p>
            
            {status === 'sent' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <p className="text-green-800 font-bold text-xl mb-2">Bericht verstuurd!</p>
                <p className="text-green-700">Bedankt voor uw bericht. Wij nemen zo spoedig mogelijk contact met u op.</p>
              </div>
            ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="name">
                    Volledige naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#33C5F3] focus:ring-1 focus:ring-[#33C5F3] outline-none transition"
                    placeholder="Uw naam"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="email">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#33C5F3] focus:ring-1 focus:ring-[#33C5F3] outline-none transition"
                    placeholder="uw@email.nl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="phone">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#33C5F3] focus:ring-1 focus:ring-[#33C5F3] outline-none transition"
                  placeholder="06 - 12345678"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="location">
                  Voorkeur locatie
                </label>
                <select
                  id="location"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#33C5F3] focus:ring-1 focus:ring-[#33C5F3] outline-none transition bg-white"
                >
                  <option value="">Maak een keuze...</option>
                  <option value="heiloo">Heiloo (Noord-Holland)</option>
                  <option value="schiphol">Schiphol-Rijk (Randstad)</option>
                  <option value="geen">Geen voorkeur</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="message">
                  Uw bericht *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#33C5F3] focus:ring-1 focus:ring-[#33C5F3] outline-none transition"
                  placeholder="Hoe kunnen wij u helpen?"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 rounded border-slate-300 text-[#33C5F3] focus:ring-[#33C5F3]"
                />
                <label htmlFor="consent" className="text-sm text-slate-600">
                  Ik geef toestemming om mijn gegevens te verwerken conform de <Link href="/privacyverklaring" className="text-[#33C5F3] hover:underline">privacyverklaring</Link>. *
                </label>
              </div>

              {status === 'error' && (
                <p className="text-red-600 text-sm">Er ging iets mis. Probeer het opnieuw of mail ons direct.</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-[#33C5F3] text-white font-bold rounded-xl hover:bg-[#2b2e4a] transition shadow-lg shadow-cyan-100 disabled:opacity-60"
              >
                {status === 'sending' ? 'Bezig met versturen...' : 'Bericht Versturen'}
              </button>
            </form>
            )}
          </div>

          {/* Info Column */}
          <div className="space-y-12">
            
            {/* Heiloo Info */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-slate-50 group-hover:text-[#33C5F3]/10 transition-colors pointer-events-none">
                <FaMapMarkerAlt size={100} />
              </div>
              <h3 className="text-2xl font-bold text-[#2b2e4a] mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-[#33C5F3] rounded-full"></span> 
                Vestiging Heiloo
              </h3>
              <div className="space-y-4 relative z-10">
                <p className="flex items-start gap-4 text-slate-600">
                  <FaMapMarkerAlt className="text-[#33C5F3] mt-1 shrink-0" />
                  <span>
                    Kennemerstraatweg 464, Unit 1.03<br />
                    1851 NG Heiloo
                  </span>
                </p>
                <p className="flex items-center gap-4 text-slate-600">
                  <FaPhoneAlt className="text-[#33C5F3] shrink-0" />
                  <a href="tel:0850604388" className="hover:text-[#33C5F3]">085-0604388</a>
                </p>
                <p className="flex items-center gap-4 text-slate-600">
                  <FaWhatsapp className="text-[#25D366] shrink-0" />
                  <a href="https://wa.me/31850604388" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366]">WhatsApp: 085-0604388</a>
                </p>
                <p className="flex items-center gap-4 text-slate-600">
                  <FaEnvelope className="text-[#33C5F3] shrink-0" />
                  <a href="mailto:info@rtms-behandeling.nl" className="hover:text-[#33C5F3]">info@rtms-behandeling.nl</a>
                </p>
                <p className="flex items-start gap-4 text-slate-600 pt-2 border-t border-slate-100">
                  <FaClock className="text-[#33C5F3] mt-1 shrink-0" />
                  <span>Maandag t/m vrijdag: 08:30 – 17:00</span>
                </p>
              </div>
            </div>

            {/* Schiphol Info */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-slate-50 group-hover:text-[#33C5F3]/10 transition-colors pointer-events-none">
                <FaMapMarkerAlt size={100} />
              </div>
              <h3 className="text-2xl font-bold text-[#2b2e4a] mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-[#2b2e4a] rounded-full"></span> 
                Vestiging Schiphol-Rijk
              </h3>
              <div className="space-y-4 relative z-10">
                <p className="flex items-start gap-4 text-slate-600">
                  <FaMapMarkerAlt className="text-[#33C5F3] mt-1 shrink-0" />
                  <span>
                    Boeing Avenue 8<br />
                    1119 PB Schiphol-Rijk
                  </span>
                </p>
                <p className="flex items-center gap-4 text-slate-600">
                  <FaPhoneAlt className="text-[#33C5F3] shrink-0" />
                  <a href="tel:0850604388" className="hover:text-[#33C5F3]">085-0604388</a>
                </p>
                <p className="flex items-center gap-4 text-slate-600">
                  <FaWhatsapp className="text-[#25D366] shrink-0" />
                  <a href="https://wa.me/31850604388" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366]">WhatsApp: 085-0604388</a>
                </p>
                <p className="flex items-center gap-4 text-slate-600">
                  <FaEnvelope className="text-[#33C5F3] shrink-0" />
                  <a href="mailto:info@rtms-behandeling.nl" className="hover:text-[#33C5F3]">info@rtms-behandeling.nl</a>
                </p>
                <p className="flex items-start gap-4 text-slate-600 pt-2 border-t border-slate-100">
                  <FaClock className="text-[#33C5F3] mt-1 shrink-0" />
                  <span>Maandag t/m vrijdag: 08:30 – 17:00</span>
                </p>
              </div>
            </div>

            {/* Voor Verwijzers Block */}
            <div className="bg-[#2b2e4a] text-white p-10 rounded-3xl shadow-xl border border-[#2b2e4a] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <FaHandshake size={80} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Informatie voor Verwijzers</h3>
              <p className="text-slate-300 mb-6">
                Werkt u in de GGZ of bent u huisarts? Voor intercollegiaal overleg of een snelle verwijzing hebben wij directe lijnen beschikbaar.
              </p>
              <Link href="/verwijzers" className="inline-flex items-center gap-2 text-[#33C5F3] font-bold hover:text-white transition group">
                Naar Verwijzersportaal <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Maps Integration Section */}
      <section className="pb-24 bg-white grid md:grid-cols-2 gap-4 px-4 h-[400px]">
        <div className="rounded-3xl overflow-hidden border border-slate-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.5342426867015!2d4.7001!3d52.5979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47cf5743c39178ad%3A0xc3b95fd8d5b8398e!2sKennemerstraatweg%20464%2C%201851%20NG%20Heiloo!5e0!3m2!1snl!2snl!4v1712952000000!5m2!1snl!2snl" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="Kaart Vestiging Heiloo"
          ></iframe>
        </div>
        <div className="rounded-3xl overflow-hidden border border-slate-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.467885779644!2d4.7431!3d52.2858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e1bc8f8c2eb5%3A0x679c1e0e84b7a13!2sBoeing%20Avenue%208%2C%201119%20PB%20Schiphol-Rijk!5e0!3m2!1snl!2snl!4v1712952000000!5m2!1snl!2snl" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="Kaart Vestiging Schiphol"
          ></iframe>
        </div>
      </section>

      {/* Emergency Disclaimer / Spoedcontact */}
      <section className="py-20 bg-red-50 border-t-4 border-red-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl animate-pulse">
            <FaExclamationTriangle />
          </div>
          <h2 className="text-3xl font-bold text-red-900 mb-6">Crisissituatie / Spoedcontact</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-red-800 text-lg leading-relaxed mb-8">
            Heeft u dringend hulp nodig omdat u een gevaar vormt voor uzelf of uw omgeving? Onze klinieken hebben <strong>geen 24-uurs crisisdienst</strong>.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100">
              <p className="font-bold text-red-950 text-xl mb-2">Bel 113</p>
              <p className="text-sm text-red-800">Eerste hulp bij zelfdoding</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100">
              <p className="font-bold text-red-950 text-xl mb-2">Huisarts(enpost)</p>
              <p className="text-sm text-red-800">Voor directe medische spoedhulp</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100">
              <p className="font-bold text-red-950 text-xl mb-2">Bel 112</p>
              <p className="text-sm text-red-800">Bij acute levensbedreigende situaties</p>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
