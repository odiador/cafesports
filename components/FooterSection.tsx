"use client";
import { motion } from "motion/react";
import Link from "next/link";

const FooterSection = () => {
    return (<section className="w-full text-xs flex flex-col items-center pt-4 pb-3 gap-[2px] bg-black/20">
        <Link className="font-nanum tracking-tighter cursor-pointer w-56" href={"https://odiador.dev"} target="_blank">
            <motion.div initial="normal" whileHover={"odiador"} className="relative w-full cursor-pointer text-center text-base/[1.25rem] font-bold text-nowrap flex justify-center items-center gap-0">
                {"Made with ❤️ by "}
                <div className="relative">
                    <div className="relative select-none overflow-hidden h-5 w-14">
                        <motion.span className="text-[#a96eb9] select-none cursor-pointer absolute text-nowrap font-bold top-[2px] left-0 size-full text-center text-base/[1rem]" variants={{ normal: { y: 0, opacity: 1 }, odiador: { y: 20, opacity: 0 } }}>Amador</motion.span>
                        <motion.span className="text-[#8ae4e7] select-none cursor-pointer absolute text-nowrap font-bold top-[2px] left-0 size-full text-center text-base/[1rem]" variants={{ normal: { y: -20, opacity: 0 }, odiador: { y: 0, opacity: 1 } }}>Odiador</motion.span>
                    </div>
                    <motion.svg viewBox="0 0 800 90" fill="none"
                        xmlns="http://www.w3.org/2000/svg" className="absolute -top-2.5 left-2 h-3 w-fit pointer-events-none">
                        <motion.path d="m20 100v-80c11 28 32 49 60 60"
                            variants={{ normal: { pathLength: 0 }, odiador: { pathLength: 1 } }}
                            transition={{ pathLength: { delay: 0.15, type: "spring", duration: 0.5, bounce: 0 } }}
                            stroke="#8ae4e7" strokeWidth="20" strokeLinecap="round" strokeLinejoin="bevel">
                        </motion.path>
                        <motion.path d="m280 100v-80c-11 28-32 49-60 60"
                            variants={{ normal: { pathLength: 0 }, odiador: { pathLength: 1 } }}
                            transition={{ pathLength: { delay: 0.15, type: "spring", duration: 0.5, bounce: 0 } }}
                            stroke="#8ae4e7" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round">
                        </motion.path>
                    </motion.svg>
                </div>
            </motion.div>
        </Link>
        <p className="font-questrial font-bold text-xs">© 2025 CafEsports. Todos los derechos reservados.</p>
    </section>);
}
export default FooterSection;
