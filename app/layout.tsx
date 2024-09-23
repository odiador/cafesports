import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "UQ E-Sports",
  description: "UQ E-Sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  overflow-y-auto antialiased h-fit w-full font-[family-name:var(--font-geist-sans)] overflow-x-hidden`}
      >
        <div className="fixed -z-50 bg-gradient-radial from-[#321010] to-[#0a0a0a] pointer-events-none left-0 top-0 w-screen h-screen"></div>
        <Header />
        <div className="mb-6 p-2 overflow-x-hidden overflow-y-hidden flex-col flex gap-2 items-center justify-top">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
