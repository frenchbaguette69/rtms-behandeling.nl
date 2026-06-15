import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | rTMS Kliniek Heiloo & Schiphol-Rijk | rtms-behandeling.nl',
  description: 'Neem contact op met onze rTMS-kliniek in Heiloo of Schiphol-Rijk. Bel, mail of vul het contactformulier in. Wij reageren binnen 1 werkdag.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/contact/',
  },
  openGraph: {
    title: 'Contact met rTMS Behandeling Nederland',
    description: 'Vragen over rTMS of direct een afspraak maken? Onze klinieken in Heiloo en Schiphol-Rijk staan voor u klaar.',
    url: 'https://rtms-behandeling.nl/contact/',
    siteName: 'rTMS Behandeling Nederland',
    images: [{ url: '/images/og-contact.png', width: 1200, height: 630, alt: 'Contact met rTMS kliniek' }],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
