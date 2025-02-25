import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Redirect from "@/components/Redirect";
import FooterSection from "@/components/FooterSection";
import Cursor from "@/components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cafesports",
  description: "Hecha por Odiador",
  keywords: ["Esports", "Café", "cafesports.odiador.dev", "odiador.dev", "Consultoría tecnológica"],
  openGraph: {
    title: "Cafesports",
    description: "Hecha por Odiador",
    url: "https://cafesports.odiador.dev",
    siteName: "cafesports.odiador.dev",
    images: [
      {
        url: "https://cafesports.odiador.dev/logot.png", // Cambia por una imagen representativa
        width: 325,
        height: 325,
        alt: "cafesports.odiador.dev - Cafesports",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1 className="hidden">Cafesport</h1>
        <Redirect />
        {children}
        <Cursor />
        <FooterSection />
      </body>
    </html>
  );
}
