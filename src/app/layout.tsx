import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Helene Huseby · Designer",
  description:
    "UX-designer basert i Oslo. Tjenestedesign, systemdesign og alt det andre som ikke helt har et navn ennå.",
  openGraph: {
    title: "Helene Huseby · Designer",
    description: "UX-designer basert i Oslo. Se arbeid og ta kontakt.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="no" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body className="bg-bg text-fg min-h-screen flex flex-col antialiased">
        <a href="#main-content" className="skip-link">Hopp til innhold</a>
        <Nav />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
