import Image from "next/image";
import Link from "next/link";

export default function Valorant() {
    return (
        <div className="flex-1 py-12 px-2 flex flex-col items-center gap-8">
            <Link
                target="_blank"
                className="rounded-md px-2 hover:scale-110 transition-all py-1 bg-foreground text-black font-questrial font-bold text-lg"
                href={"/files/Reglamento%20del%20Torneo%20de%20Valorant.pdf"}>Ver reglas</Link>
            <Image
                className="h-fit"
                src={"/calendariovalo.webp"}
                alt={"Calendario de juegos del torneo de Valorant"}
                width={600}
                height={100}
            />
            <Image
                className="h-fit"
                src={"/brackets.webp"}
                alt={"Brackets del torneo de Valorant"}
                width={800}
                height={100}
            />

        </div>
    );
}