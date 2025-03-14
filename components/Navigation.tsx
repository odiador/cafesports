"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoStatsChart } from "react-icons/io5";

const Navigation = () => {
    const { scrollY } = useScroll();
    const [bgOpacity, setBgOpacity] = useState(0);


    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setBgOpacity(latest === 0 ? 0 : 0.2);
        });

        return () => unsubscribe();
    }, [scrollY]);

    return (
        <motion.nav
            className="bg-black h-16 z-[999] px-8 py-2 fixed w-full top-0 left-0 backdrop-blur-md transition-all flex justify-between items-center"
            style={{ backgroundColor: `rgba(0,0,0,${bgOpacity})`, borderWidth: "0 0 1px 0", borderColor: bgOpacity ? "rgba(255,255,255,0.1)" : "transparent", }}
        >
            <Link href={"#"} onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }} className="h-full w-fit"><Image src={"/logot.png"} alt={"Logo"} width={408} height={408} className="h-full w-fit" /></Link>
            <div className="flex gap-4">
                <Link className="font-questrial text-lg font-semibold" href={"#torneos"}>Torneos</Link>
            </div>
            <div>
                <Link
                    href={"#stats"}
                    className="group">
                    <IoStatsChart className="text-3xl group-hover:scale-110 transition-all" />
                </Link>
            </div>
        </motion.nav>
    );
};

export default Navigation;
