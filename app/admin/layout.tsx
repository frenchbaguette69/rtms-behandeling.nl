import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin — rTMS Behandeling",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0f1117] text-white">{children}</body>
    </html>
  );
}
