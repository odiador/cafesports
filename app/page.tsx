"use client";
import { container, item } from "@/components/consts";
import { TextGenerateEffect } from "@/components/ui/blur-generating-text";
import { AnimatedTooltip } from "@/components/ui/image-frame";
import { integrantes, valorantInfo } from "@/data/info";
import { motion, useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <main className="p-2 flex flex-col items-center max-w-3xl">
      <header className="h-[calc(100vh-160px)] flex flex-col gap-1 items-center mb-32">
        <TextGenerateEffect words="Uniquindio E-Sports" className="text-center text-4xl font-bold text-white" />
        <motion.p variants={item} initial="hidden" animate="visible" className="w-full text-left">
          Nuestro próximo evento:
        </motion.p>
        <div className="grow">
          <motion.div variants={container} initial="hidden" animate="visible" className="flex h-fit flex-col gap-2 items-center justify-center">
            <motion.div variants={item} className="flex flex-col sm:flex-row  items-center bg-white/5 rounded-xl px-6 py-3">
              <Image priority src={valorantInfo.image} alt="" width={100} height={100} />
              <div className="flex flex-col gap-1">
                <p className="text-lg text-left  font-bold text-white">UQ E-Sports <strong className={`font-bold text-[${valorantInfo.color}]`}>{valorantInfo.title}</strong></p>
                <p>{valorantInfo.description}</p>
                <Link href={valorantInfo.src} className="bg-white mt-2 px-2 transition-transform py-1 rounded-lg hover:scale-105 cursor-pointer text-black font-semibold self-end">Inscríbete</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
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
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/5 rounded-lg p-2 flex flex-col justify-center items-center">
        <motion.h3 variants={item} className="text-center text-2xl font-semibold w-3/4">¡Bienvenidos a nuestro equipo de E-Sports!</motion.h3>
        <motion.p variants={item} className="pt-4 p-2">
          Somos un grupo de estudiantes apasionados por los deportes electrónicos, comprometidos con promover esta emocionante actividad en nuestra alma mater y en todo el territorio. Nos une el deseo de fomentar la competencia saludable, la colaboración, y la comunidad gamer. Creemos que los e-sports no solo son una forma de entretenimiento, sino también una plataforma para el desarrollo de habilidades, la creatividad, y el trabajo en equipo. ¡Únete a nosotros y se parte de esta increíble aventura!
        </motion.p>
        <motion.h3 variants={item} className="text-center text-2xl mt-8 font-semibold w-3/4">¿Quiénes somos?</motion.h3>
        <motion.p variants={item} className="pt-4 p-2">
          Estudiantes de Ingeniería de Sistemas y Computación
        </motion.p>
        <motion.div variants={container} initial="hidden" animate={imageControls}
          className="w-fit pt-2"><AnimatedTooltip items={integrantes} /></motion.div>
      </motion.section>
      <div className="h-screen w-1"></div>
    </main>
  );
}
