import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Redirect from "@/components/Redirect";
import FooterSection from "@/components/sections/FooterSection";
import Cursor from "@/components/Cursor";
import Navigation from "@/components/sections/Navigation";
import { Analytics } from "@vercel/analytics/react"
import HeroSection from "@/components/sections/HeroSection";

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
  keywords: ["Esports", "Café", "cafesports.club", "odiador.dev"],
  openGraph: {
    title: "Cafesports",
    description: "Hecha por Odiador",
    url: "https://cafesports.club",
    siteName: "cafesports.club",
    images: [
      {
        url: "https://cafesports.club/logo.png",
        width: 325,
        height: 325,
        alt: "cafesports.club - Cafesports",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Analytics />
        <Redirect />
        <h1 className="hidden">Cafesports</h1>
        <div className="flex flex-col justify-between min-h-screen">
          <Navigation />
          <HeroSection/>
          <div className="flex-1 flex flex-col z-10">{children}</div>
          <Cursor />
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
