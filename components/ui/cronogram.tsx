import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const Cronograma = () => {

    const infos = [
        {
            date: "07 oct",
            nameDate: "lunes",
            events: [
                {
                    key: "deathmatch",
                    description: "Es un deathmatch de eliminación directa en el que 10 jugadores se van a enfrentar, los primeros 5 formarán un equipo y los últimos van a ser eliminados",
                    judges: ["- Juan David Lopez", "- Cristian Sierra"],
                    name: "Todos contra Todos",
                    time: "11:00 am - 2:00 pm",
                    ganadores: ["- Miguel Montenegro", "- Sebastián Loaiza", "- Juan Esteban Mosquera", "- Juan Camilo Albarán", "- Nykol Xiomara Ramírez"],
                    details: "Estos jugadores forman un equipo entre ellos"
                },
                {
                    key: "round1",
                    description: "La ronda 1 es una partida competitiva normal de Valorant.",
                    vs: "Hilen vs Hollow",
                    judges: ["- Juan David Lopez"],
                    name: "Ronda 1",
                    time: "4:00 pm - 6:00 pm",
                    ganadores: [""],
                    details: "Hollow"
                }
            ]
        },
        {
            date: "08 oct",
            nameDate: "martes",
            events: [
                {
                    key: "round2",
                    description: "La ronda 2 es una partida competitiva normal de Valorant.",
                    vs: "Print(\"null\") vs No Name",
                    judges: ["- Juan David Lopez", "- Eyner Andrés Diaz"],
                    name: "Ronda 2",
                    time: "11:00 am - 2:00 pm",
                    details: "No Name",
                    ganadores: [""],
                },
                {
                    key: "round3",
                    description: "La ronda 3 es una partida competitiva normal de Valorant.",
                    vs: "The Last One vs Requiem",
                    judges: ["- Juan David Lopez", "- Valeria Florez"],
                    name: "Ronda 3",
                    ganadores: [""],
                    details: "The Last One",
                    time: "4:00 pm - 6:00 pm",
                }
            ]
        },
        {
            date: "09 oct",
            nameDate: "miércoles",
            events: [
                {
                    key: "round4",
                    description: "La ronda 4 es una partida competitiva normal de Valorant.",
                    vs: "Codebreakers vs 5m",
                    judges: ["- Eyner Andrés Diaz"],
                    name: "Ronda 4",
                    ganadores: [""],
                    details: "Codebreakers",
                    time: "11:00 am - 2:00 pm",
                },
                {
                    key: "semi1",
                    description: "La semifinal 1 es una partida Bo3 de Valorant.",
                    vs: "Hollow vs The Last One",
                    judges: ["- Juan David Lopez", "- Valeria Florez"],
                    name: "Semifinal 1",
                    ganadores: [""],
                    time: "4:00 pm - 6:00 pm",
                    details: "The Last One",
                }
            ]
        },
        {
            date: "10 oct",
            nameDate: "jueves",
            events: [
                {
                    key: "semi2",
                    description: "La semifinal 2 es una partida Bo3 de Valorant.",
                    vs: "No name vs Codebreakers",
                    judges: ["- Eyner Andrés Diaz", "- Juan David Lopez"],
                    name: "Semifinal 2",
                    ganadores: [""],
                    time: "11:00 am - 1:00 pm",
                    details: "No Name",
                },
                {
                    key: "deatchmatch2",
                    description: "Los MVPs de cada partida jugada se enfrentarán en un deathmatch",
                    judges: ["- Eyner Andrés Diaz", "- Juan David Lopez"],
                    name: "Deathmatch MVPs",
                    time: "1:00 pm - 3:00 pm (porque juega la sele)",
                }
            ]
        },
    ]

    return (<div className="mt-8 p-4">
        {infos.map(item => <CalendarItem
            key={item.date}
            nameDate={item.nameDate}
            date={item.date}
            events={item.events} />
        )}
    </div>);
}

export default Cronograma;

const CalendarItem = ({ date, nameDate, events }: {
    date: string, nameDate: string, events: {
        key: string;
        description: string;
        judges: string[];
        name: string;
        time: string;
        vs?: string;
        ganadores?: string[];
        details?: string;
    }[]
}) => {
    return (
        <div className="flex gap-1" key={date}>
            <div className="h-auto w-fit">
                <div className="w-1 h-full flex items-center justify-center bg-gradient-to-b from-[#8cd6bc] to-transparent relative  after:content-[''] after:absolute after:-left-1 after:-top-2 after:size-3 after:bg-[#8cd6bc] after:rounded-full" />
            </div>
            <div className="grow gap-2 flex flex-col pb-8 pl-4 relative">
                <h1 className="relative -top-3.5 font-medium  font-operator text-[#8cd6bc]">{date} <strong className="font-medium text-white">{nameDate}</strong></h1>
                <div className="flex flex-col gap-4">
                    {events.map(e => {
                        return (<div className="w-full bg-white/5 hover:bg-white/10 duration-700 rounded-lg border-2 border-white/15 hover:border-white/30 transition-colors px-4 py-2"
                            key={e.key}>
                            <div className="flex justify-between">
                                <div className="size-fit">

                                    {"1:00 pm - 3:00 pm (porque juega la sele)" !== e.time && <h1 className="text-sm font-normal text-white/50">{e.time}</h1>}
                                    {"1:00 pm - 3:00 pm (porque juega la sele)" === e.time && (
                                        <div className="flex items-center gap-2">
                                            <h1 className="text-sm font-normal text-white/50">{e.time}</h1>
                                            <Link className="hover:scale-125 transition-transform" href={"https://www.caracoltv.com/senal-vivo"}>
                                                <Image alt="col" src={"https://images.emojiterra.com/twitter/v14.0/512px/1f1e8-1f1f4.png"} className="w-[16px]" width={700} height={5} />
                                            </Link>
                                        </div>
                                    )}

                                </div>
                                {e.ganadores && e.ganadores.length != 0 && <IconCheck />}
                            </div>
                            <h1 className="text-2xl font-bold text-[#8cd6bc]">{e.name}</h1>
                            {e.vs && (<h1 className="mb-2 text-xl font-bold">{e.vs}</h1>)}
                            <h1 className="text-sm font-normal">{e.description}</h1>
                            <h1 className="mt-4 text-xl text-[#8cd6bc] font-bold">{"Jueces encargados"}</h1>
                            {e.judges.map(juez => {
                                return <h1 key={juez + e.key} className="text-sm font-normal">{juez}</h1>
                            })}
                            {e.ganadores && e.ganadores.length != 0 && <h1 className="mt-4 text-xl text-[#8cd6bc] font-bold">{"Equipo Ganador"}</h1>}
                            {e.details && <h1 className="font-bold text-md my-2">{`${e.details}`}</h1>}
                            {e.ganadores && e.ganadores.map(ganador => {
                                return <h1 key={ganador + e.key} className="text-sm font-normal">{ganador}</h1>
                            })}
                        </div>);
                    })}
                </div>
            </div>
        </div>
    );
}
