import Image from "next/image";

import ArrowScroll from "@/components/ArrowScroll";
import './page.css';
import Link from "next/link";
import { SiGoogleforms } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full items-center justify-start p-4">
      <section className="h-svh flex flex-col items-center justify-between gap-8 p-8">
        <div className="w-fit h-fit flex flex-col items-center">
          <Image src={"/logot.png"} alt={"Logo"} width={408} height={408} className="size-40" />
        </div>
        <div className="font-bangers text-6xl w-full text-center flex flex-col text-foreground">Tú decides qué jugamos
          <span className="font-teko text-2xl w-full text-[#a96eb9] text-center">El destino del torneo está en tus manos</span>
        </div>
        <ArrowScroll />
      </section>
      <section id="form" className="h-fit w-full flex flex-col items-center justify-between gap-8 py-4 px-2">
        <Link target="_blank" href={"https://docs.google.com/forms/d/e/1FAIpQLSet433DHXMx-59RkCWSDB_L7PK7YzzH6TL6JD_9H8U47QKsFQ/viewform"}><button className="bg-[#7248b9] flex text-4xl gap-2 items-center px-4 py-2 text-white rounded-lg transition-all hover:scale-110 font-teko">
          <SiGoogleforms className="" />
          Vota Aquí</button>
        </Link>
      </section>
    </div>
  );
}
