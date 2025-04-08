"use client";
import { getLiveStatus } from "@/utils/consts";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LiveHero() {
    const { isLive } = getLiveStatus();
    return (
        isLive && <Link className="flex gap-2 bg-foreground rounded-lg px-3 py-1.5 text-black hover:scale-110 transition-all items-center"
            href={"#live"}>
            <motion.div className="size-4 rounded-full relative bg-red-600">
                <motion.div className="absolute top-0 left-0 size-4 rounded-full bg-black z-[1]" animate={{ opacity: isLive ? 1 : 0 }} transition={{ from: 0, repeat: Infinity, repeatType: "mirror", duration: 0.01, delay: 1, repeatDelay: 1 }}>
                </motion.div>
            </motion.div>
            <h2 className="text-center leading-none font-pressstart">{"VER AHORA"}
            </h2>
        </Link>
    )
}