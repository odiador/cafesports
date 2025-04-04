"use client";
import { BiCalendar } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import TorneosDM from "../utils/torneo.mdx";
import AnimatedStats from "./notusing/AnimatedStats";

const Torneos = () => {
    return (
        <div className="pt-0 mdx-content w-full h-full flex flex-col items-center justify-center gap-1">
            <TorneosDM />
        </div >
    )
}
export const InfoTorneo = () => {
    return (<>
        <div className="flex flex-wrap justify-center items-center w-full gap-4 mt-4">
            <div className="size-36 bg-white/10 rounded-2xl flex flex-col p-3 items-center justify-center gap-2">
                <h2 ><BsPeopleFill className="text-5xl" /></h2>
                <div className="flex items-center flex-col justify-center">
                    <div className="flex items-center">
                        <h3 className="font-questrial font-bold text-xl leading-[1.3rem]" >+</h3>
                        <AnimatedStats value={40} duration={3} className="font-questrial font-bold text-xl leading-[1.3rem]" />
                    </div>
                    <h3 className="font-questrial font-bold text-xl leading-[1.3rem]" >Participantes</h3>
                </div>
            </div>
            <div className="size-36 bg-white/10 rounded-2xl flex flex-col p-3 items-center justify-center gap-2">
                <h2><MdLocationPin className="text-5xl" /></h2>
                <div className="flex flex-col gap-0 items-center">
                    <h3 className="font-questrial font-bold text-xs leading-[1rem]" >Uniquindio</h3>
                    <h3 className="font-questrial font-bold text-xs leading-[1rem]" >Sala de Sistemas </h3>
                    <h3 className="font-questrial font-bold text-xs leading-[1rem]" >Bloque de Ingeniería</h3>
                </div>
            </div>
            <div className="size-36 bg-white/10 rounded-2xl flex flex-col p-3 items-center justify-center gap-2">
                <h2><BiCalendar className="text-5xl" /></h2>
                <div className="flex flex-col gap-0 items-center">
                    <h3 className="font-questrial font-bold text-sm leading-[1.3rem]" >07 - 11 oct 2024</h3>
                    <h3 className="font-questrial font-bold text-xs leading-[1.3rem]" >Semana universitaria</h3>
                </div>
            </div>
        </div>

    </>)
}
export default Torneos;