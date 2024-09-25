import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { IconTool } from "@tabler/icons-react";

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
  title: "In Remodeling",
  description: "In Remodeling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-fit w-full font-[family-name:var(--font-geist-sans)] overflow-x-hidden`}
      >
        <div className="fixed -z-50 bg-gradient-radial from-[#321010] to-[#0a0a0a] pointer-events-none left-0 top-0 w-screen h-screen"></div>
        <div className="fixed flex-col p-2 z-50 text-center flex items-center bg-black/50 justify-center left-0 top-0 w-screen h-screen">
          <div className="flex flex-col gap-5 bg-white/10 rounded-lg p-6 justify-center items-center">
          <div className="flex">
            <div className="size-5 bg-[#ffff00]" />
            <div className="size-5 bg-black" />
            <div className="size-5 bg-[#ffff00]" />
            <div className="size-5 bg-black" />
            <div className="size-5 bg-[#ffff00]" />
            <div className="size-5 bg-black" />
            <div className="size-5 bg-[#ffff00]" />
            <div className="size-5 bg-black" />
            <div className="size-5 bg-[#ffff00]" />
            <div className="size-5 bg-black" />
            <div className="size-5 bg-[#ffff00]" />
            <div className="size-5 bg-black" />
            <div className="size-5 bg-[#ffff00]" />
            <div className="size-5 bg-black" />
            <div className="hidden sm:block size-5 bg-[#ffff00]" />
            <div className="hidden sm:block size-5 bg-black" />
            <div className="hidden sm:block size-5 bg-[#ffff00]" />
            <div className="hidden sm:block size-5 bg-black" />
          </div>
          <div className="font-bold text-3xl sm:text-4xl flex items-center gap-1"><IconTool className="-scale-x-100 sm:-scale-x-110" fill="white"/>En remodelación <IconTool  className="scale-x-100 sm:scale-x-110"fill="white"/></div>
          
          <div className="flex">
            <div className="size-5 bg-[#ffff00]" />
            <div className="size-5 bg-black" />
            <div className="size-5 bg-[#ffff00]" />
            <div className="size-5 bg-black" />
            <div className="size-5 bg-[#ffff00]" />
            <div className="size-5 bg-black" />
            <div className="size-5 bg-[#ffff00]" />
            <div className="size-5 bg-black" />
            <div className="size-5 bg-[#ffff00]" />
            <div className="size-5 bg-black" />
            <div className="size-5 bg-[#ffff00]" />
            <div className="size-5 bg-black" />
            <div className="size-5 bg-[#ffff00]" />
            <div className="size-5 bg-black" />
            <div className="hidden sm:block size-5 bg-[#ffff00]" />
            <div className="hidden sm:block size-5 bg-black" />
            <div className="hidden sm:block size-5 bg-[#ffff00]" />
            <div className="hidden sm:block size-5 bg-black" />
          </div>
          </div>
          <Image className="fixed bottom-0" src={"/constructor.png"} alt="constructor" width={200} height={200}/>

        </div>

        <Header />

        <div className="pointer-events-none blur-lg mb-6 p-2 overflow-x-hidden overflow-y-clip max-h-[calc(100vh-10rem)] flex-col flex gap-2 items-center justify-top">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
