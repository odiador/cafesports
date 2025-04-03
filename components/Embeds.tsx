"use client";

import { FaKickstarter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { KickEmbed, YouTubeEmbed } from "../components/StreamsEmbed";
import { useState, useEffect } from "react";

const Embeds = () => {
    const [showKick, setShowKick] = useState(false);
    const [showYoutube, setShowYoutube] = useState(false);
    const [isLive, setIsLive] = useState(false);
    const [streamTitle, setStreamTitle] = useState("");
    
   
    useEffect(() => {
        const checkStreamSchedule = () => {
            const now = new Date();
            const day = now.getDay(); // 0 = domingo, 1 = lunes, 2 = martes, ..., 6 = sábado
            const hour = now.getHours();
            const minute = now.getMinutes();
            
            // Convertir la hora actual a minutos contando desdd la medianoche 
            const currentTimeInMinutes = hour * 60 + minute;
            
            // Horarios de stream (en minutos contando desde la  medianoche)
            const streamStartTime = 11 * 60; // Estpo es: 11:00 AM
            const streamEndTime = 14 * 60; //  Estos es: 2:00 PM
            
            // Verificar si es martes (día 2 en la constante) dentro del horario de stream (11:00 AM a 2:00 PM)
            if (day === 2 && currentTimeInMinutes >= streamStartTime && currentTimeInMinutes < streamEndTime) {
                setIsLive(true);
                setStreamTitle("Torneo de League of Legends");
                return;
            }
            
            // Verificar si es viernes (día 5 en la constante) dentro del horario de stream (11:00 AM a 2:00 PM)
            if (day === 5 && currentTimeInMinutes >= streamStartTime && currentTimeInMinutes < streamEndTime) {
                setIsLive(true);
                setStreamTitle("Torneo de Valorant");
                return;
            }
            
            // FALSA ERES UNA FALSA
            setIsLive(false);
            setStreamTitle("");
        };
        
        // Montar el componente
        checkStreamSchedule();
        
        // Verificar cada minuto, la fecha y hora actual
        const intervalId = setInterval(checkStreamSchedule, 60000);
        
        // Estamos clean
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="font-operator flex items-center gap-1">
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
                <h1 className="text-center leading-none font-semibold">
                    {isLive ? "LIVE" : "OFFLINE"}
                </h1>
                {isLive && streamTitle && (
                    <span className="ml-2 text-xs text-red-500 font-semibold">{streamTitle}</span>
                )}
            </div>
            <div className="bg-white/5 border-2 border-white/10 w-full flex flex-col p-2 rounded-lg items-center gap-4">
                <div className="flex gap-4">
                    <button onClick={() => setShowKick(k => !k)}
                        className="bg-white w-fit text-black transition-all font-semibold rounded-lg px-4 py-2 hover:bg-white/85 flex gap-1 hover:scale-110">Ver aquí</button>
                    <Link href="https://kick.com/cafesports-club" className="bg-[#53fd18] w-fit text-black transition-all font-semibold rounded-lg px-4 py-2 flex items-center gap-1 hover:scale-110">o en <FaKickstarter className="inline-block align-text-bottom" /></Link>
                </div>
                {showKick && <KickEmbed />}
            </div>
            <div className="bg-white/5 border-2 border-white/10 w-full flex flex-col p-2 rounded-lg items-center gap-4">
                <div className="flex gap-4">
                    <button onClick={() => setShowYoutube(k => !k)}
                        className="bg-white w-fit text-black transition-all font-semibold rounded-lg px-4 py-2 hover:bg-white/85 flex gap-1 hover:scale-110">Ver aquí</button>
                    <Link href="https://youtube.com/@cafesportsclub" className="bg-[#FF0000] w-fit text-white transition-all font-semibold rounded-lg px-4 py-2 flex items-center gap-1 hover:scale-110">o en <FaYoutube className="inline-block align-text-bottom" /></Link>
                </div>
                {showYoutube && <YouTubeEmbed />}
            </div>
        </>
    );
}

export default Embeds;