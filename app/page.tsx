"use client";
import { containerImage, item } from "@/components/consts";
import Embeds from "@/components/Embeds";
import { TextGenerateEffect } from "@/components/ui/blur-generating-text";
import Cronograma from "@/components/ui/cronogram";
import { AnimatedTooltip } from "@/components/ui/image-frame";
import Redes from "@/components/ui/redes";
import { integrantes, valorantInfo } from "@/data/info";
import { motion, useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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
  const [live, setLive] = useState(true);
  return (
    <main className="p-2 flex flex-col items-center max-w-3xl">
      <header className="h-fit flex flex-col gap-1 items-center mb-32">
        <motion.div variants={item} className="text-center text-4xl font-bold flex" >
          <h1 className="from-[#fdd868] via-30% via-[#fdd868] to-[#66ffad] bg-gradient-to-r bg-clip-text text-transparent font-extrabold">CafESports</h1>
        </motion.div>
        <motion.div variants={item} initial="hidden" animate="visible" className="w-full mt-8 text-center text-xl">

          <p className="text-3xl font-extrabold text-white">
            <strong className="from-[#fdd868] via-30% via-[#fdd868] to-[#66ffad] bg-gradient-to-r bg-clip-text font-extrabold text-transparent">CafESports</strong>
            {" x "}
            <strong className={`font-extrabold bg-clip-text text-transparent to-[#f45865] via-50% bg-[#f45865] from-[#ff9e9e]`}>{valorantInfo.title}</strong>
          </p>
          
        </motion.div>
        {live&& <Embeds/>}
        <h1 className="w-full mt-8 text-center text-2xl font-bold "
          onCanPlay={() => setLive(true)}
        >Cronograma de Torneo</h1>
        <Cronograma />
        <motion.div variants={item} className="flex flex-col gap-2 items-center  w-full bg-white/5 rounded-xl px-6 py-3">
          <h1 className="text-xl font-bold">{"Nuestras redes:"}</h1>
          <Image priority src={valorantInfo.image} alt="" width={100} height={100} />
          <Redes />
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
