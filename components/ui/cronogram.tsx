const Cronograma = () => {
    return (<div className="mt-8" key={"cronogram"}>
        <CalendarItem
            key={"deathmatch"}
            date="07 oct"
            description="Es un deathmatch de eliminación directa en el que 10 jugadores se van a enfrentar, los primeros 5 formarán un equipo y los últimos van a ser eliminados"
            judges={["- Juan David Lopez", "- Cristian Sierra"]}
            nameDate={"lunes"}
            name={"Todos contra Todos"}
            time={"11:00 am - 2:00 pm"} />

    </div>);
}

export default Cronograma;

const CalendarItem = ({ date, nameDate, description, judges, name, time }: { date: string, nameDate: string, description: string, judges: string[], name: string, time: string }) => {
    return <div className="gap-2 flex flex-col pb-8 border-l-[4px] border-dotted border-[#888] pl-4 relative after:content-[''] after:absolute after:-left-2 after:-top-0 after:size-3 after:bg-[#888] after:rounded-full">
        <h1 className="font-medium">{date} <strong className="font-medium text-white/50">{nameDate}</strong></h1>
        <div className="w-full bg-white/10 rounded-lg border-2 border-white/15 hover:border-white/30 transition-colors  px-4 py-2">
            <h1 className="text-sm font-normal text-white/50">{time}</h1>
            <h1 className="text-2xl font-bold">{name}</h1>
            <h1 className="text-sm font-normal">{description}</h1>
            <h1 className="mt-4 text-md font-bold">{"Jueces encargados"}</h1>
            {judges.map(juez => {
                return <h1 className="text-sm font-normal">{juez}</h1>
            })}
        </div>
    </div>;
}
