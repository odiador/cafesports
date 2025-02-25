"use client";
import { motion } from "motion/react";
import Link from "next/link";

const FooterSection = () => {
    return (<section className="w-full font-nanum text-xl flex flex-col items-center">
        <Link className="cursor-pointer" href={"https://odiador.dev"} target="_blank">
            <motion.div initial="normal" whileHover={"odiador"} className="relative h-8 w-56 overflow-hidden cursor-pointer">
                <motion.label className="select-none cursor-pointer absolute text-nowrap font-bold top-0 left-0 size-full text-center" variants={{ normal: { y: 0, opacity: 1 }, odiador: { y: 30, opacity: 0 } }}>Made with ❤️ by <span className="text-[#a96eb9]">Amador</span></motion.label>
                <motion.label className="select-none cursor-pointer absolute text-nowrap font-bold top-0 left-0 size-full text-center" variants={{ normal: { y: 30, opacity: 0 }, odiador: { y: 0, opacity: 1 } }}>Made with ❤️ by <span className="text-[#8ae4e7]">Odiador</span></motion.label>
            </motion.div>
        </Link>

    </section>);
}
export default FooterSection;