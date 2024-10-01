"use client";
import { container, containerImage, item } from "@/components/consts";
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
          <h1 className="from-[#fdd868] via-30% via-[#fdd868] to-[#66ffad] bg-gradient-to-r bg-clip-text text-transparent font-extrabold">CafESports</h1>
        </motion.div>
        <motion.p variants={item} initial="hidden" animate="visible" className="w-full text-left">
          Nuestro próximo evento:
        </motion.p>
        <motion.div variants={container} initial="hidden" animate="visible" className="flex h-fit flex-col gap-2 items-center justify-center">
          <motion.div variants={item} className="flex flex-col gap-2 sm:flex-row  items-center bg-white/5 rounded-xl px-6 py-3">
            <Image priority src={valorantInfo.image} alt="" width={100} height={100} />
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-extrabold text-white">
                <strong className="from-[#fdd868] via-30% via-[#fdd868] to-[#66ffad] bg-gradient-to-r bg-clip-text font-extrabold text-transparent">CafESports</strong>
                {" x "}
                <strong className={`font-extrabold bg-clip-text text-transparent to-[#f45865] via-50% bg-[#f45865] from-[#ff9e9e]`}>{valorantInfo.title}</strong>
              </p>
              <p>{valorantInfo.description}</p>
              <div className="flex sm:justify-between justify-end sm:flex-row flex-col  h-fit items-end sm:items-center gap-2 mt-2">
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
        id="info"
        onViewportLeave={() => setStart(false)}
        onViewportEnter={() => setStart(true)}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/5 rounded-lg mt-16 py-16 px-8 flex flex-col justify-center items-center">
        <motion.h3 variants={item} className="text-center text-4xl font-bold w-3/4 text-wrap">¡Bienvenidos a nuestro equipo de E-Sports!</motion.h3>
        <motion.div variants={item} className="mt-4 size-fit bg-white rounded-xl overflow-hidden">
          <Image src={"/logot.png"} alt="Logo Transparent" className="size-64" width={256} height={256} />
        </motion.div>
        <motion.div
          variants={item}
          className="font-normal">
          <TextGenerateEffect start={start} words="🚀Somos un grupo de estudiantes apasionados por los deportes electrónicos, y estamos emocionados de presentarles nuestro proyecto para promover los E-sports en la Universidad del Quindío y en todo el Eje Cafetero.<>🔝¿Te gustan los videojuegos y competir? ¿Quieres formar parte de una comunidad gamer en crecimiento?<>🎯 ¡Desarrollo de habilidades, creatividad y trabajo en equipo!<>📅 Únete a nuestra aventura y descubre el emocionante mundo de los E-sports." />
        </motion.div>
        <motion.h3 variants={item} className="text-center text-2xl mt-8 font-semibold w-3/4">¿Quiénes somos?</motion.h3>
        <motion.div
          onViewportEnter={() => imageControls.start('visible')}
          onViewportLeave={() => imageControls.set('hidden')}
          variants={containerImage} initial="hidden" animate={imageControls}
          className="w-fit px-4 pt-2 pb-8"><AnimatedTooltip items={integrantes} /></motion.div>
      </motion.section>
    </main>
  );
}
