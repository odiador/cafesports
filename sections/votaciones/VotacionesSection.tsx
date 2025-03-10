"use client";
import TableWithData from "@/components/TableWithData";
import Votacion from "@/components/Votacion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function VotacionesSection() {
    const [mostrarChart, setMostrarChart] = useState(false);
    const [mostrarInfoTabla, setMostrarInfoTabla] = useState(false);

    return (
        <section id="stats" className="w-full pt-20 flex flex-col items-center justify-start p-4 sm:p-8 sm:pt-20 lg:max-w-5xl">
            <h1>Estadísticas</h1>
            <p className="text-xl text-center font-questrial mt-2">
                Aquí podrás ver las estadísticas de las votaciones realizadas para elegir el juego del segundo torneo de
                <strong className="text-[#cc86df] font-normal"> CafeSports</strong> en la <strong className="text-teal-200 font-normal">Universidad del Quindío</strong>.
                Próximamente se anunciarán más novedades sobre el evento.
            </p>

            <div className="flex flex-col mt-8 items-center justify-center gap-2 w-full">
                <p className="text-3xl font-semibold font-teko">Visualiza los resultados</p>

                <button
                    className="bg-white font-questrial font-bold text-black px-4 py-2 transition-all hover:scale-110 rounded-xl w-fit select-none"
                    onClick={() => setMostrarChart(p => !p)}
                >

                    {mostrarChart ? "Ocultar gráfico" : "Mostrar gráfico"}
                </button>

                <AnimatePresence>
                    {mostrarChart && (
                        <motion.div className="flex w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <Votacion />
                        </motion.div>
                    )}
                </AnimatePresence>
                <p className="text-3xl font-semibold font-teko">Consulta la tabla de datos:</p>

                <button
                    className="bg-white font-questrial font-bold text-black px-4 py-2 transition-all hover:scale-110 rounded-xl w-fit select-none"
                    onClick={() => setMostrarInfoTabla(p => !p)}
                >
                    {mostrarInfoTabla ? "Ocultar tabla" : "Mostrar tabla"}
                </button>

                <AnimatePresence>
                    {mostrarInfoTabla && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <TableWithData />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
