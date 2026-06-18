import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Intake Aanvragen voor rTMS Behandeling | rtms-behandeling.nl',
  description: 'Vraag een vrijblijvende intake aan voor rTMS behandeling. Kies uw locatie (Heiloo of Schiphol-Rijk), vul het formulier in en wij nemen binnen 1 werkdag contact op.',
  alternates: {
    canonical: 'https://rtms-behandeling.nl/aanmelden/',
  },
  openGraph: {
    title: 'Intake Aanvragen — De eerste stap naar herstel',
    description: 'Vraag eenvoudig een intake aan voor rTMS. Veilige gegevensverwerking en snelle opvolging door onze specialisten.',
    url: 'https://rtms-behandeling.nl/aanmelden/',
    siteName: 'rTMS Behandeling Nederland',
    images: [
      {
        url: '/images/og-aanmelden.png',
        width: 1200,
        height: 630,
        alt: 'Intake aanvragen voor rTMS',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function AanmeldenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
