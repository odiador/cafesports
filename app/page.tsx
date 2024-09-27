"use client";
import { container, item } from "@/components/consts";
import Contactanos from "@/components/gmail";
import { TextGenerateEffect } from "@/components/ui/blur-generating-text";
import { AnimatedTooltip } from "@/components/ui/image-frame";
import { integrantes, valorantInfo } from "@/data/info";
import { motion, useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - 120;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

export default function Home() {
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const imageControls = useAnimation();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      controls.start('hidden');
    } else {
      controls.start('visible');
    }
  })
  const [start, setStart] = useState(false);
  return (
    <main className="p-2 flex flex-col items-center max-w-3xl">
      <header className="h-[calc(100vh-160px)] flex flex-col gap-1 items-center mb-32">
        <motion.div variants={item} className="text-center text-4xl font-bold flex" >
          <h1 className="text-[#fdd868] font-extrabold">CafE<strong className="text-[#66ffad] font-extrabold">Sports</strong></h1>
        </motion.div>
        <motion.p variants={item} initial="hidden" animate="visible" className="w-full text-left">
          Nuestro próximo evento:
        </motion.p>
        <motion.div variants={container} initial="hidden" animate="visible" className="flex h-fit flex-col gap-2 items-center justify-center">
          <motion.div variants={item} className="flex flex-col sm:flex-row  items-center bg-white/5 rounded-xl px-6 py-3">
            <Image priority src={valorantInfo.image} alt="" width={100} height={100} />
            <div className="flex flex-col gap-1">
              <div className="text-lg text-left flex font-bold text-white">
                <h1 className="text-[#fdd868]">CafE</h1>
                <h1 className="text-[#66ffad]">Sports</h1>
                <h1 className="px-2">x</h1>
                <strong className={`font-bold text-[${valorantInfo.color}]`}>{valorantInfo.title}</strong></div>
              <p>{valorantInfo.description}</p>
              <div className="flex justify-end h-fit items-center gap-2 mt-2">
                <Contactanos />
                <Link href={valorantInfo.src} className="bg-white px-3 transition-transform py-1.5 rounded-lg hover:scale-105 cursor-pointer text-black font-semibold self-end">Ver más</Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div variants={container} initial="hidden" animate="visible" className="flex h-fit w-fit flex-col gap-2 items-start justify-start grow">

        </motion.div>
        <motion.div variants={{
          hidden: { opacity: 0, scale: 0, transition: { duration: 0.2 } },
          visible: {
            opacity: 1, scale: 1, transition: { duration: 0.2 }
          }
        }} onClick={() => scrolltoHash("info")} animate={controls} id="bolita" className="border-white/30 duration-300 hover:border-white group rounded-full h-12 w-fit border-4 border-solid px-1 transition-all cursor-pointer">
          <motion.div className="bg-white/30 group-hover:bg-white transition-colors duration-300 rounded-full w-4 h-4" animate={{ y: [0, 24, 0] }} transition={{ ease: "easeInOut", duration: 1.5, repeat: Infinity, repeatType: 'loop' }}></motion.div>
        </motion.div>
      </header>
      <motion.section
        onViewportEnter={() => imageControls.start('visible')}
        onViewportLeave={() => imageControls.set('hidden')}
        id="info"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        animate="visible"
        variants={container}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/5 rounded-lg p-2 flex flex-col justify-center items-center">
        <motion.h3 variants={item} className="text-center text-4xl font-bold w-3/4 text-wrap">¡Bienvenidos a nuestro equipo de E-Sports!</motion.h3>
        <motion.div variants={item} className="mt-4 size-fit bg-white rounded-xl overflow-hidden">
          <Image src={"/logot.png"} alt="Logo Transparent" className="size-64" width={256} height={256} />
        </motion.div>
        <motion.div
          onViewportLeave={() => setStart(false)}
          onViewportEnter={() => setStart(true)}
          variants={item}
          className="font-normal">
          <TextGenerateEffect start={start} words="🚀Somos un grupo de estudiantes apasionados por los deportes electrónicos, y estamos emocionados de presentarles nuestro proyecto para promover los E-sports en la Universidad del Quindío y en todo el Eje Cafetero.<>🔝¿Te gustan los videojuegos y competir? ¿Quieres formar parte de una comunidad gamer en crecimiento?<>🎯 ¡Desarrollo de habilidades, creatividad y trabajo en equipo!<>📅 Únete a nuestra aventura y descubre el emocionante mundo de los E-sports." />
        </motion.div>
        <motion.h3 variants={item} className="text-center text-2xl mt-8 font-semibold w-3/4">¿Quiénes somos?</motion.h3>
        <motion.div variants={container} initial="hidden" animate={imageControls}
          className="w-fit pt-2 pb-8"><AnimatedTooltip items={integrantes} /></motion.div>
      </motion.section>
    </main>
  );
}
