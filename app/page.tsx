import { tournaments } from "@/utils/consts";
import HeroSection from "@/components/sections/HeroSection";
import './page.css';
import TournamentSection from "@/components/sections/TournamentSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <TournamentSection tournamentInfo={tournaments[0]} />
      <TournamentSection tournamentInfo={tournaments[1]} />
    </div>
  );
}
