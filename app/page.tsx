import Image from "next/image";

import ArrowScroll from "@/components/ArrowScroll";
import Torneos from "@/components/Torneos";
import VotacionesSection from "@/sections/votaciones/VotacionesSection";
import Link from "next/link";
import './page.css';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full items-center justify-start">
      <section id="home" className="min-h-screen w-full pt-20 flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 h-full flex-1">
          <div className="flex items-center">
            <Image src={"/logot.png"} alt={"Logo"} width={408} height={408} className="size-40 md:size-80 md:min-w-80" />
          </div>
          <div className="font-bangers text-6xl text-center flex flex-col text-foreground items-center justify-center gap-1">
            Las votaciones han concluido
            <span className="font-teko text-2xl w-full text-[#cc86df] text-center">Mantente atento a las novedades</span>
            <div className="text-teal-200 text-3xl flex flex-col items-center justify-center pb-2 gap-2">Juegos ganadores: Valorant y LOL</div>
            <Link href={"#stats"}><button className="bg-[#7248b9] flex text-4xl gap-2 items-center px-4 py-2 text-white rounded-lg transition-all hover:scale-110 font-teko">
              Ver estadísticas</button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-8">
        <ArrowScroll href={"#torneos"} />
        </div>
      </section>
      <section id="torneos" className="min-h-screen pt-20 sm:pt-20 flex flex-col w-full h-full items-center gap-8 p-4 sm:p-8 lg:max-w-5xl">
        <Torneos />
      </section>
      <VotacionesSection />
    </div>
  );
}
