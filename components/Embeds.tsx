"use client";

import { IconBrandKick, IconBrandTwitch } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { KickEmbed, TwitchEmbed } from "./ui/Embed";
import { useState } from "react";

const Embeds = ({ live }: { live: boolean }) => {

    const [showKick, setShowKick] = useState(false);
    const [showTwitch, setShowTwitch] = useState(false);
    return (
        <>
            <div className="font-operator flex items-center gap-1">
                <motion.div className="size-4 rounded-full relative bg-red-600">
                    <motion.div className="absolute top-0 left-0 size-4 rounded-full bg-black z-[1]" animate={{ opacity: live ? 1 : 0 }} transition={{ from: 0, repeat: Infinity, repeatType: "mirror", duration: 0.01, delay: 1, repeatDelay: 1 }}>
                    </motion.div>
                </motion.div>
                <h1 className="text-center leading-none">{live ? "LIVE" : "OFFLINE"}</h1>
            </div>
            <div className="bg-white/5 border-2 border-white/10 w-full flex flex-col p-2 rounded-lg items-center gap-4">
                <div className="flex gap-4">
                    <button onClick={() => setShowKick(k => !k)}
                        className="bg-white w-fit text-black transition-all font-semibold rounded-lg px-4 py-2 hover:bg-white/85 flex gap-1 hover:scale-110">Ver aquí</button>
                    <Link href="https://kick.com/cafesports" className="bg-[#53fd18] w-fit text-black transition-all font-semibold rounded-lg px-4 py-2 flex gap-1 hover:scale-110">o en <IconBrandKick /></Link>
                </div>
                {showKick && <KickEmbed />}
            </div>
            <div className="bg-white/5 border-2 border-white/10 w-full flex flex-col p-2 rounded-lg items-center gap-4">

                <div className="flex gap-4">
                    <button onClick={() => setShowTwitch(k => !k)}
                        className="bg-white w-fit text-black transition-all font-semibold rounded-lg px-4 py-2 hover:bg-white/85 flex gap-1 hover:scale-110">Ver aquí</button>
                    <Link href="https://twitch.tv/cafesportsq" className="bg-[#9146ff] w-fit text-white transition-all font-semibold rounded-lg px-4 py-2 flex gap-1 hover:scale-110">o en <IconBrandTwitch /></Link>
                </div>
                {showTwitch && <TwitchEmbed />}
            </div>
        </>
    );
}
export default Embeds;