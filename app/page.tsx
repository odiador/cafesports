"use client";
import { IconBrandInstagram, IconBrandTwitch, IconHome } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const container = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <div className="bg-gradient-radial from-[#321010] to-[#0a0a0a] flex flex-col items-center justify-start w-full overflow-auto h-screen gap-0 font-[family-name:var(--font-geist-sans)]  overflow-x-hidden">
      <div className="flex w-full p-2 gap-1">
        <h1 className="font-bold grow text">UQ E-Sports <strong className="font-bold text-[#f45865]">Valorant</strong></h1>
        <Link href={""}>
          <IconBrandTwitch className="text-white hover:text-teal-200 hover:scale-110 transition-all" />
        </Link>
        <Link href={"https://www.instagram.com/uq.esports/"}>
        <IconBrandInstagram className="text-white hover:text-teal-200 hover:scale-110 transition-all" />
        </Link>
      </div>
      <motion.div variants={container} initial="hidden" animate="visible" className="w-full max-h-full overflow-y-auto overflow-x-hidden mt-4 flex-grow flex flex-col gap-2 items-center">
        <motion.h1 variants={item} className="text-base font-normal text-white/70">Semana Universitaria</motion.h1>
        <motion.h1 variants={item} className="text-base font-normal text-white/70">Desde el 07/10/2024</motion.h1>
        <motion.div variants={item} className="w-fit h-fit">
          <Image priority src={"https://1000marcas.net/wp-content/uploads/2022/10/Valorant-Logo-768x432.png"} alt="" width={200} height={200} />
        </motion.div>
        <motion.div variants={item} className="flex flex-col items-center gap-2">
          <label className="font-bold">Inscribe a tu equipo ahora</label>
          <motion.div className="size-40 relative flex-col flex items-center justify-center bg-white rounded-3xl px-4 py-8">
            <Image className="blur-sm" priority src="/qr.png" alt="" width={200} height={200} />
            <label className="absolute place-self-center text-black font-bold">:)</label>
          </motion.div>
        </motion.div>
        <motion.div variants={item} className="size-40 flex items-center justify-center bg-white rounded-3xl px-4 py-8">
          <Image priority src={"https://www.uniquindio.edu.co/info/uniquindio/media/bloque2.png"} alt="" width={100} height={100} />
        </motion.div>
        <motion.h1 variants={item} className="text-xs font-normal text-white/30">* solo Ingeniería de Sistemas y Computación *</motion.h1>
      </motion.div>
      <footer>
        <Link href={"https://github.com/odiador"} className="cursor-default select-none py-1 text-xs font-normal text-white text-opacity-30 group hover:text-opacity-100 transition-colors">Made with ❤️ by <strong className="font-medium text-teal-200 text-opacity-30 group-hover:text-opacity-100 transition-colors">Amador</strong></Link>
      </footer>
    </div>
  );
}
