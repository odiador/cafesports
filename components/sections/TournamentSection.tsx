import { TournamentInfo } from "@/utils/consts";
import Link from "next/link";


export default function TournamentSection({ tournamentInfo }: { tournamentInfo: TournamentInfo }) {
    return (
        <section className="flex flex-col px-2 py-8 items-center w-full">
            <div className="relative mb-6 flex flex-col">
                <h1 className="font-bangers px-2">{`Torneo de ${tournamentInfo.name}`}</h1>
                <div className="place-self-end -rotate-12 text-xl font-nanum flex flex-col leading-[13px] items-center"><span>
                    {`Todos los ${tournamentInfo.date}`}</span>
                    <span className="text-teal-200">11am-2pm</span>
                </div>
            </div>
            <div className="flex flex-col  max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
                <p className="font-questrial text-wrap">{tournamentInfo.description}</p>
                <p className="font-questrial w-full font-semibold">{`Siguiente ronda: ${tournamentInfo.activeRound}`}</p>
                <Link className="w-fit place-self-end" href={tournamentInfo.route}>
                    <button className="rounded-md px-2 hover:scale-110 transition-all py-1 bg-foreground text-black font-questrial font-bold text-lg">Ver detalles</button>
                </Link>
            </div>
        </section>
    )
}