import Image from "next/image";
import Link from "next/link";

export default function Lol() {
    return (
        <div className="flex-1 py-12 px-2 flex flex-col items-center gap-8">
            <Link
                target="_blank"
                className="rounded-md px-2 hover:scale-110 transition-all py-1 bg-foreground text-black font-questrial font-bold text-lg"
                href={"/files/Reglamento%20del%20Torneo%20de%20LoL.pdf"}>Ver reglas</Link>
            <Image
                className="h-fit"
                src={"/calendarioalol.webp"}
                alt={"Calendario del Bombo A del Torneo de CafEsports de League of Legends"}
                width={600}
                height={100}
            />
            <Image
                className="h-fit"
                src={"/calendarioblol.webp"}
                alt={"Calendario del Bombo B del Torneo de CafEsports de League of Legends"}
                width={600}
                height={100}
            />
            <p className="font-questrial font-bold">Próximamente tabla de posiciones</p>
        </div>
    );
}