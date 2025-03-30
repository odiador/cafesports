"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { BsInstagram, BsTwitch, BsYoutube } from "react-icons/bs";
import { SiKick } from "react-icons/si";

const FooterSection = () => {
    return (<section className="w-full text-xs flex flex-col items-center pt-4 pb-3 gap-1 bg-black/20">
        <Link className="font-nanum tracking-tighter cursor-pointer w-56" href={"https://odiador.dev"} target="_blank">
            <motion.div initial="normal" whileHover={"odiador"} className="relative w-full cursor-pointer text-center text-base/[1.25rem] font-bold text-nowrap flex justify-center items-center gap-0">
                {"Made with ❤️ by "}
                <div className="relative">
                    <div className="relative select-none overflow-hidden h-5 w-14">
                        <motion.span className="text-[#a96eb9] select-none cursor-pointer absolute text-nowrap font-bold top-[2px] left-0 size-full text-center text-base/[1rem]" variants={{ normal: { y: 0, opacity: 1 }, odiador: { y: 20, opacity: 0 } }}>Amador</motion.span>
                        <motion.span className="text-[#8ae4e7] select-none cursor-pointer absolute text-nowrap font-bold top-[2px] left-0 size-full text-center text-base/[1rem]" variants={{ normal: { y: -20, opacity: 0 }, odiador: { y: 0, opacity: 1 } }}>Odiador</motion.span>
                    </div>
                </div>
            </motion.div>
        </Link>
        <div className="flex gap-2">

            <Link
                href={"https://kick.com/cafesports-club"}
                target="_blank"
                className="group">
                <SiKick className="text-2xl group-hover:scale-110 transition-all" />
            </Link>

            <Link
                href={"https://www.instagram.com/cafesport.club/"}
                target="_blank"
                className="group">
                <BsInstagram className="text-2xl group-hover:scale-110 transition-all" />
            </Link>
            <Link
                href={"http://twitch.tv/cafesportsclub"}
                target="_blank"
                className="group">
                <BsTwitch className="text-2xl group-hover:scale-110 transition-all" />
            </Link>
            <Link
                href={"https://www.youtube.com/@cafesportsclub"}
                target="_blank"
                className="group">
                <BsYoutube className="text-2xl group-hover:scale-110 transition-all" />
            </Link>
        </div>
        <p className="font-questrial font-bold text-xs">© 2025 CafEsports. Todos los derechos reservados.</p>
    </section>);
}
export default FooterSection;
