"use client";
import { IconBrandInstagram, IconBrandTwitch, IconLock } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Countdown from 'react-countdown';

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
  const [started, setStarted] = useState(false);
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  const renderer = ({ days, hours, minutes, seconds, completed }: { days: any, hours: any, minutes: any, seconds: any, completed: any }) => {
    const Cal = ({ round, n, type }: { round?: string, n: number, type?: string }) => {
      const fst = Number.parseInt((n / 10) + "");
      const sec = n % 10;
      return (
        <div className={` text-white bg-white/5 text-3xl ${round} font-medium w-20 h-20 pt-2 px-1 flex flex-col items-center justify-center`}>
          <div className="flex gap-1 justify-center bg-black/0 rounded-lg grow items-center" suppressHydrationWarning>
            <span>{`${fst}`}</span>
            <span>{`${sec}`}</span>
          </div>
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
      <div className="flex gap-1 gap rounded-lg w-fit p-2" >
        {days != 0 && <Cal type="días" round="rounded-l-lg" n={days}></Cal>}
        <Cal round={days != 0 ? "" : "rounded-l-lg"} type="horas" n={hours}></Cal>
        <Cal round={days != 0 ? "rounded-r-lg" : ""} type="minutos" n={minutes}></Cal>
        {days == 0 && <Cal round="rounded-r-lg" type="segundos" n={seconds}></Cal>}
      </div>);

  };
  return (
    <div className="bg-gradient-radial from-[#321010] to-[#0a0a0a] flex flex-col items-center justify-start w-full overflow-auto h-screen gap-0 font-[family-name:var(--font-geist-sans)]  overflow-x-hidden">
      {header()}
      {body()}
      {footer()}
    </div>
  );

  function body() {
    return (
      <motion.div variants={container} initial="hidden" animate="visible" className="w-full h-full mb-6 overflow-y-auto overflow-x-hidden flex-grow flex gap-2 items-center justify-center">
        {/* <div className="w-1/5 lg:w-1/4 md:flex items-end justify-center fixed left-0 hidden pointer-events-none h-dvh">
          <Image className="pointer-events-none transition-all overflow-visible " src="/jett.png" alt="" width={150} height={150} />
          <Image className="lg:inline hidden pointer-events-none" src="/jett.png" alt="" width={150} height={150} />
        </div> */}
        {center()}
        {/* <div className="w-1/5 lg:w-1/4 md:flex right-0 items-end justify-center fixed hidden pointer-events-none h-dvh">
          <Image className="pointer-events-none transition-all overflow-visible " src="/jett.png" alt="" width={150} height={150} />
          <Image className="lg:inline hidden pointer-events-none" src="/jett.png" alt="" width={150} height={150} />
        </div> */}
      </motion.div>
    );

    function center() {
      return <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col gap-2 items-center h-full px-4 ">
        {/* md:w-2/4 lg:w-3/5 */}
        <div className="w-1 h-10"></div>
        <motion.div variants={item} className="flex flex-col sm:flex-row  items-center bg-white/5 rounded-xl px-6 py-3">
          <Image priority src={"https://1000marcas.net/wp-content/uploads/2022/10/Valorant-Logo-768x432.png"} alt="" width={100} height={100} />
          <div className="flex flex-col gap-1">
            <p className="text-lg text-center font-bold text-white">UQ E-Sports <strong className="font-bold text-[#f45865]">Valorant</strong></p>
            <p>Junta a tu equipo para participar en la primera competencia de Valorant en la Universidad del Quindío, juega en la semana universitaria y tú y tu equipo serán los ganadores.</p>
            <button className="bg-white mt-2 px-2 transition-transform py-1 rounded-lg hover:scale-105 cursor-pointer text-black font-semibold self-end">Inscríbete Ahora</button>
          </div>
        </motion.div>

        {!started && <motion.h1 variants={item} className="text-base font-normal text-white">¡Inicia el 07/10/2024!</motion.h1>}
        {qr()}
        <motion.h1 variants={item} className="text-xs font-normal text-white/30">* solo Ingeniería de Sistemas y Computación *</motion.h1>
        <motion.div variants={item} className="size-40 flex items-center justify-center bg-white rounded-3xl px-4 py-8">
          <Image priority src={"https://www.uniquindio.edu.co/info/uniquindio/media/bloque2.png"} alt="" width={100} height={100} />
        </motion.div>
      </motion.div>;
    }
  }

  function qr() {
    return <motion.div variants={item} className="flex flex-col items-center gap-2">
      <label className="font-bold">Inscribe a tu equipo ahora</label>
      {countDown()}
      <motion.div className="size-40 relative flex-col flex items-center justify-center bg-white rounded-3xl px-4 py-8">
        <Image className="blur-sm" priority src="/qr.png" alt="" width={200} height={200} />
          <IconLock className="absolute place-self-center text-black stroke-4 font-extrabold scale-150"/>
      </motion.div>
    </motion.div>;
  }

  function countDown() {
    return <motion.div variants={item} className="w-fit flex flex-col items-center">
      <label className="font-medium text-center">Faltan:</label>
      <Countdown date={Date.UTC(2024, 9, 7, 5, 0, 0, 0)} onComplete={() => setStarted(true)} renderer={renderer} />
    </motion.div>;
  }

  function footer() {
    return <footer className="z-10 fixed bottom-0 left-0 w-full bg-black/100 backdrop-blur-sm text-center h-6 items-center flex">
      <Link href={"https://github.com/odiador"} className="w-full cursor-default select-none py-1 text-xs font-medium text-white text-opacity-15 group hover:text-opacity-100 transition-colors">Made with ❤️ by <strong className="font-medium text-[#f45865] text-opacity-15 group-hover:text-opacity-100 transition-colors">Amador</strong></Link>
    </footer>;
  }

  function header() {
    return <div className="flex w-full p-2 gap-1">
      <h1 className="font-bold grow text">UQ E-Sports</h1>
      <Link href={""}>
        <IconBrandTwitch className="text-white hover:text-[#f45865] hover:scale-110 transition-all" />
      </Link>
      <Link href={"https://www.instagram.com/uq.esports/"}>
        <IconBrandInstagram className="text-white hover:text-[#f45865] hover:scale-110 transition-all" />
      </Link>
    </div>;
  }
}
