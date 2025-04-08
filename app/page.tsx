"use client";
import Embeds from "@/components/Embeds";
import GallerySection from "@/components/sections/GallerySection";
import TournamentSection from "@/components/sections/TournamentSection";
import { tournaments } from "@/utils/consts";
import './page.css';
import AboutSection from "@/components/sections/AboutSection";


export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <TournamentSection tournamentInfo={tournaments[0]} />
      <TournamentSection tournamentInfo={tournaments[1]} />
      <GallerySection />
      <Embeds />
      <AboutSection />
    </div>
  );
}
