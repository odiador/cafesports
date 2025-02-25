import Image from "next/image";

import ArrowScroll from "@/components/ArrowScroll";
import './page.css';

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
      <section className="h-svh w-full flex flex-col items-center justify-between gap-8 py-4 px-2">
        <iframe
          id="form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSet433DHXMx-59RkCWSDB_L7PK7YzzH6TL6JD_9H8U47QKsFQ/viewform?embedded=true"
          width="600"
          height="600"
          className="w-full h-full max-w-3xl border border-gray-300 bg-white rounded-lg pointer-events-auto"
        >
          Cargando…
        </iframe>
      </section>
    </div>
  );
}
