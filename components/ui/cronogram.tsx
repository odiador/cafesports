import { IconCheck } from "@tabler/icons-react";

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
                    time: "4:00 pm - 6:00 pm",
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
                <h1 className="relative -top-3.5 font-medium">{date} <strong className="font-medium text-white/50">{nameDate}</strong></h1>
                <div className="flex flex-col gap-4">
                    {events.map(e => {
                        return (<div className="w-full bg-white/5 hover:bg-white/10 duration-700 rounded-lg border-2 border-white/15 hover:border-white/30 transition-colors px-4 py-2"
                            key={e.key}>
                            <div className="flex justify-between">
                                <h1 className="text-sm font-normal text-white/50">{e.time}</h1>
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
