import { TournamentInfo } from "@/utils/consts";
import Link from "next/link";


export default function TournamentSection({ tournamentInfo }: { tournamentInfo: TournamentInfo }) {
    return (
        <section className="flex flex-col px-2 py-8 items-center">
            <div className="relative mb-6">
                <h1 className="font-bangers">{`Torneo de ${tournamentInfo.name}`}</h1>
                <div className="absolute text-xl font-nanum -right-16 -bottom-4 -rotate-12 flex flex-col leading-[13px] items-center"><span>
                    {`Todos los ${tournamentInfo.date}`}</span>
                    <span className="text-teal-200">11am-2pm</span>
                </div>
            </div>
            <div className="flex flex-col max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
                <p className="font-questrial">{tournamentInfo.description}</p>
                <p className="font-questrial font-semibold">{`Siguiente ronda: ${tournamentInfo.activeRound}`}</p>
                <Link className="w-fit place-self-end" href={tournamentInfo.route}>
                    <button className="rounded-md px-2 hover:scale-110 transition-all py-1 bg-foreground text-black font-teko text-xl">Ver detalles</button>
                </Link>
            </div>
        </section>
    )
}