const CalendarItem = ({ text, num }: { text: string, num: number }) => {
    return <div className="flex group hover:bg-white hover:shadow-lg hover-dark-shadow rounded-lg transition-all	duration-300	 cursor-pointer justify-center w-10">
        <div className="flex items-center px-4 py-2">
            <div className="text-center">
                <p className="text-gray-900 text-sm transition-all duration-300">
                    {text}
                </p>
                <p className="text-gray-900 group-hover:font-bold transition-all duration-300">
                    {num}
                </p>
            </div>
        </div>
    </div>
};
const Calendar = () => {
    return (
        <div className="flex bg-white/10 gap-1 w-fit shadow-md justify-start md:justify-center rounded-lg mx-auto p-2 ">
            <CalendarItem text="L" num={7}/>
            <CalendarItem text="M" num={8}/>
            <CalendarItem text="M" num={9}/>
            <CalendarItem text="J" num={10}/>
            <CalendarItem text="V" num={11}/>
        </div>
    )
}

export default Calendar;