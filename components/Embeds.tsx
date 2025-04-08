"use client";

import { getLiveStatus } from "@/utils/consts";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { SiKick } from "react-icons/si";
import { KickEmbed, YouTubeEmbed } from "../components/StreamsEmbed";

const Embeds = () => {
    const [showKick, setShowKick] = useState(false);
    const [showYoutube, setShowYoutube] = useState(false);
    const { isLive, streamTitle } = getLiveStatus();

    return (
        <section id="live" className="w-full pt-20 px-4 flex flex-col py-8 items-center gap-4">
            <div className="font-operator w-full flex items-center justify-center gap-1 flex-col">
                <div className="flex flex-col items-center gap-1 w-full">
                    <h1>Ver en vivo</h1>
                    <p className="font-questrial text-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
                    Sigue nuestras competencias en tiempo real y no te pierdas ni un solo momento de la acción.
                    </p>
                </div>
                {isLive && <div className="flex items-center gap-1">
                    <motion.div className="size-4 rounded-full relative bg-red-600">
                        {isLive && (
                            <motion.div
                                className="absolute top-0 left-0 size-4 rounded-full bg-black z-[1]"
                                animate={{ opacity: [1, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 0.8,
                                    ease: "easeInOut"
                                }}
                            >
                            </motion.div>
                        )}
                    </motion.div>
                    <p className="text-center leading-none font-semibold font-pressstart">
                        {"LIVE"}
                    </p>
                </div>}
                {streamTitle && (
                    <span className="ml-2 text-xs text-red-500 font-semibold">{streamTitle}</span>
                )}
            </div>
            <div className={`flex ${isLive ? "flex-col" : ""} gap-2 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl w-full`}>
                <div className="bg-white/5 border-2 border-white/10 w-full flex flex-col p-2 rounded-lg items-center gap-4">
                    <div className="flex gap-4">
                        {isLive && <button onClick={() => setShowKick(k => !k)}
                            className="bg-white w-fit text-black transition-all font-semibold rounded-lg px-4 py-2 hover:bg-white/85 flex gap-1 hover:scale-110">
                            Ver aquí
                        </button>}
                        <Link href="https://kick.com/cafesports-club" className="bg-[#53fd18] w-fit text-black transition-all font-semibold rounded-lg px-4 py-2 flex items-center gap-1 hover:scale-110"
                            target="_blank">
                            {`${isLive ? "o" : "Ver"}`} en <SiKick className="inline-block align-text-bottom" />
                        </Link>
                    </div>
                    {showKick && <KickEmbed />}
                </div>
                <div className="bg-white/5 border-2 border-white/10 w-full flex flex-col p-2 rounded-lg items-center gap-4">
                    <div className="flex gap-4">
                        {isLive && <button onClick={() => setShowYoutube(k => !k)}
                            className="bg-white w-fit text-black transition-all font-semibold rounded-lg px-4 py-2 hover:bg-white/85 flex gap-1 hover:scale-110">Ver aquí</button>}
                        <Link href="https://youtube.com/@cafesportsclub" className="bg-[#FF0000] w-fit text-white transition-all font-semibold rounded-lg px-4 py-2 flex items-center gap-1 hover:scale-110"
                            target="_blank">
                            {`${isLive ? "o" : "Ver"}`} en <FaYoutube className="inline-block align-text-bottom" /></Link>
                    </div>
                    {showYoutube && <YouTubeEmbed />}
                </div>
            </div>
        </section>
    );
}

export default Embeds;