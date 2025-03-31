export const renderer = ({ days, hours, minutes, seconds, completed }: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }) => {

    const Cal = ({ round, n, type }: { round?: string, n: number, type?: string }) => {
        const fst = Number.parseInt((n / 10) + "");
        const sec = n % 10;
        return (
            <div className={`text-white bg-white/5 text-3xl ${round} font-medium w-16 h-16 sm:w-20 sm:h-20 pt-2 px-1 flex flex-col items-center justify-center`}>
                <p className="flex text tracking-widest gap-1 justify-center bg-black/0 rounded-lg grow items-center" suppressHydrationWarning>
                    {`${fst}${sec}`}
                </p>
                <div className="font-questrial text-xs text-center pb-1">{type}</div>
            </div>)
    }
    if (completed) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }
    return (
        <div className="flex gap-1 rounded-lg w-fit" >
            <Cal type="días" round="rounded-l-lg" n={days}></Cal>
            <Cal type="horas" n={hours}></Cal>
            <Cal type="minutos" n={minutes}></Cal>
            <Cal round="rounded-r-lg" type="segundos" n={seconds}></Cal>
        </div>);
};