"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Countdown from "react-countdown";
import { container, item } from "@/components/consts";
import { valorantInfo } from "@/data/info";
import Link from "next/link";

export default function Valorant() {
    const renderer = ({ days, hours, minutes, seconds, completed }: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }) => {

        const Cal = ({ round, n, type }: { round?: string, n: number, type?: string }) => {
            const fst = Number.parseInt((n / 10) + "");
            const sec = n % 10;
            return (
                <div className={`text-white bg-white/5 text-3xl ${round} font-medium w-16 h-16 sm:w-20 sm:h-20 pt-2 px-1 flex flex-col items-center justify-center`}>
                    <p className="flex text tracking-widest gap-1 justify-center bg-black/0 rounded-lg grow items-center" suppressHydrationWarning>
                        {`${fst}${sec}`}
                    </p>
                    <div className="text-xs font-semibold text-center pb-1">{type}</div>
                </div>)
        }
        if (completed) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }
        return (
            <div className="flex gap-1 rounded-lg w-fit" >
                <Cal type="días" round="rounded-l-lg" n={days}></Cal>
                <Cal type="horas" n={hours}></Cal>
                <Cal type="minutos" n={minutes}></Cal>
                <Cal round="rounded-r-lg" type="segundos" n={seconds}></Cal>
            </div>);

    };
    return (
        <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col gap-4 divide-8 justify-center items-center max-w-3xl h-fit py-8 px-8 rounded-lg bg-black/30 ">
            <motion.div variants={item}>
                <p className="text-2xl font-extrabold text-white">
                    <strong className="from-[#fdd868] via-30% via-[#fdd868] to-[#66ffad] bg-gradient-to-r bg-clip-text font-extrabold text-transparent">CafESports</strong>
                    {" x "}
                    <strong className={`font-extrabold bg-clip-text text-transparent to-[#f45865] via-50% bg-[#f45865] from-[#ff9e9e]`}>{valorantInfo.title}</strong>
                </p>
                <p>{valorantInfo.description}</p>
            </motion.div>
            <motion.div variants={item} className="w-fit flex flex-col items-center">
                <label className="font-medium text-center">Te puedes inscribir hasta:</label>
                <Countdown date={valorantInfo.startDate} renderer={renderer} />
            </motion.div>
            <motion.div variants={item} className="justify-center w-fit flex flex-col items-center gap-2">
                <label className="font-bold">{valorantInfo.message}</label>
                <motion.div className="size-40 relative flex-col flex items-center justify-center bg-white rounded-3xl px-4 py-8">
                    <Image priority src={valorantInfo.qrCode} alt="Invitacion QR" width={200} height={200} />
                </motion.div>
            </motion.div>
            <Link href={valorantInfo.url} className="bg-white mt-2 px-2 transition-transform py-1 rounded-lg hover:scale-105 cursor-pointer text-black font-semibold self-end">Inscríbete</Link>
        </motion.div>)
}