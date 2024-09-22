"use client";
import { container, item } from "@/components/consts";
import { valorantInfo } from "@/data/info";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="w-full h-full mb-6 overflow-y-hidden overflow-x-hidden flex-grow flex gap-2 items-center justify-center">
      <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col max-w-3xl gap-2 items-center h-full p-2">
        <motion.div variants={item} className="flex flex-col sm:flex-row  items-center bg-white/5 rounded-xl px-6 py-3">
          <Image priority src={valorantInfo.image} alt="" width={100} height={100} />
          <div className="flex flex-col gap-1">
            <p className="text-lg text-left  font-bold text-white">UQ E-Sports <strong className={`font-bold text-[${valorantInfo.color}]`}>{valorantInfo.title}</strong></p>
            <p>{valorantInfo.description}</p>
            <Link href={valorantInfo.src} className="bg-white mt-2 px-2 transition-transform py-1 rounded-lg hover:scale-105 cursor-pointer text-black font-semibold self-end">Inscríbete</Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );



  function center() {

  }

}
