"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";

const Navigation = () => {
    const { scrollY } = useScroll();
    const [bgOpacity, setBgOpacity] = useState(0);
    const [calcHeight, setHeight] = useState(0);


    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setBgOpacity(latest < 50 ? 0 : 0.2);
            setHeight(latest < 50 ? 6 : 4);
        });

        return () => unsubscribe();
    }, [scrollY]);

    return (
        <motion.nav
            className="bg-black z-[999] min-h-16 px-16 py-2 fixed w-full top-0 left-0 hover:backdrop-blur-lg transition-all flex justify-center items-center"
            style={{
                backgroundColor: `rgba(0,0,0,${bgOpacity})`,
                borderWidth: "0 0 1px 0",
                height: `${calcHeight}rem`,
                borderColor: bgOpacity ? "rgba(255,255,255,0.1)" : "transparent",
                backdropFilter: `blur(${bgOpacity * 100}px)`,
            }}
        >
            <div className="flex justify-between items-center size-full max-w-4xl">
                <button className="group md:hidden">
                    <BiMenu className="text-2xl group-hover:scale-110 transition-all" />
                </button>
                <div className="md:flex hidden gap-12 font-teko text-2xl relative">
                    <div className="relative group">
                        <Link className="hover:scale-105 flex gap-1 items-center transition-all" href={"#events"}>Nuestros Eventos <BiChevronDown /></Link>
                        <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-black bg-opacity-80 w-full rounded-lg shadow-lg p-2 z-50">
                            <Link href="/lol" className="px-4 py-2 hover:bg-white hover:text-black rounded transition">LoL</Link>
                            <Link href="/valorant" className="px-4 py-2 hover:bg-white hover:text-black rounded transition">Valorant</Link>
                        </div>
                    </div>
                    <Link className="hover:scale-105 transition-all" href={"#gallery"}>Galería</Link>
                    <Link className="hover:scale-105 transition-all" href={"#about"}>Nosotros</Link>
                </div>

                <div className="flex gap-2">
                    <Link
                        href={"https://www.instagram.com/cafesport.club/"}
                        target="_blank"
                        className="group">
                        <BsInstagram className="text-2xl group-hover:scale-110 transition-all" />
                    </Link>
                    {/* <Link
                    href={"http://twitch.tv/cafesportsclub"}
                    target="_blank"
                    className="group">
                    <BsTwitch className="text-2xl group-hover:scale-110 transition-all" />
                </Link> */}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navigation;
