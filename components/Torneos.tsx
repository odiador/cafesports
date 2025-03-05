"use client";
import { BiCalendar } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import TorneosDM from "../utils/torneo.mdx";
import AnimatedStats from "./AnimatedStats";

const Torneos = () => {
    return (
        <div className="mdx-content w-full flex flex-col items-center justify-center gap-1">
            <TorneosDM />
        </div >
    )
}
export const InfoTorneo = () => {
    return (<>
        <div className="flex flex-wrap justify-center items-center w-full gap-4 mt-4">
            <div className="size-40 bg-white/10 rounded-2xl flex flex-col p-4 items-center justify-center gap-2">
                <h2 ><BsPeopleFill className="text-5xl" /></h2>
                <div className="flex items-center flex-col justify-center">
                    <div className="flex items-center">
                        <h3 className="font-questrial font-bold text-xl leading-[1.3rem]" >+</h3>
                        <AnimatedStats value={40} duration={3} className="font-questrial font-bold text-xl leading-[1.3rem]" />
                    </div>
                    <h3 className="font-questrial font-bold text-xl leading-[1.3rem]" >Participantes</h3>
                </div>
            </div>
            <div className="size-40 bg-white/10 rounded-2xl flex flex-col p-4 items-center justify-center gap-2">
                <h2><MdLocationPin className="text-5xl" /></h2>
                <div className="flex flex-col gap-0 items-center">
                    <h3 className="font-questrial font-bold text-base leading-[1.3rem]" >Uniquindio</h3>
                    <h3 className="font-questrial font-bold text-base leading-[1.3rem]" >Bloque de Ingeniería</h3>
                    <h3 className="font-questrial font-bold text-base leading-[1.3rem]" >Sala de Sistemas </h3>
                </div>
            </div>
            <div className="size-40 bg-white/10 rounded-2xl flex flex-col p-4 items-center justify-center gap-2">
                <h2><BiCalendar className="text-5xl" /></h2>
                <div className="flex flex-col gap-0 items-center">
                    <h3 className="font-questrial font-bold text-base leading-[1.3rem]" >07 - 11 oct 2024</h3>
                    <h3 className="font-questrial font-bold text-base leading-[1.3rem]" >Semana universitaria </h3>
                </div>
            </div>
        </div>
        <iframe
            className="sm:max-w-xl w-fit mt-4 aspect-video"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbienestarinstitucionaluq%2Fposts%2Fpfbid02nefW9sbkFCKPR7nH4Kc1QphoZtwharAfzBQMnPvDopyWcAPWFxydjmvtADEeaBLYl&show_text=false&width=500"
            width="672" height="378"
            style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </>)
}
export default Torneos;