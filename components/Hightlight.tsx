"use client";
import { motion } from "motion/react";


const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.5
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
}

const Highlighting = () => {
    return (
        <motion.svg
            width="1080"
            height="691"
            viewBox="0 0 810 518"
            version="1.1"
            id="svg5"
            className="w-full scale-150 h-fit rotate-180 absolute top-4 left-2 pointer-events-none"
            initial="hidden"
            animate="visible"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                variants={draw}
                custom={1}
                style={{ fill: "none", stroke: "#67c8fe", strokeWidth: 5, strokeOpacity: 1, strokeLinejoin: "round" }}
                d="M77 293c94-48 168-76 329-80 176-13 286 44 349 94 75 49 55 150-20 174-184 45-403 19-565-25C80 435-5 342 75 284c101-75 439-105 648 33 111 70 95 155 40 172-165 50-664 3-706-57-87-111 152-276 537-233"
                fillRule="evenodd"
                id="path2" />
            <motion.path
                variants={draw}
                custom={2}
                style={{ fill: "none", stroke: "#67c8fe", strokeWidth: 5, strokeOpacity: 1, strokeLinejoin: "round" }}
                d="M8 99l98 122-10-77 1 86c-27-23-42-32-69-43"
                fillRule="evenodd"
                id="path3" />
            <motion.path
                variants={draw}
                custom={2}
                style={{ fill: "none", stroke: "#67c8fe", strokeWidth: 5, strokeOpacity: 1, strokeLinejoin: "round" }}
                d="M801 93 627 224l124-58-133 47 32-69"
                fillRule="evenodd"
                id="path4" />
            <motion.path
                id="rect6"
                custom={2.5}
                variants={draw}
                style={{ fill: "none", stroke: "#67c8fe", strokeWidth: 5, strokeOpacity: 1, strokeLinejoin: "round" }}
                d="M391 2c-4 51-8 103-6 155 17-27 34-55 54-76-23 10-60 49-69 86-9-26-20-50-44-73"
            />
        </motion.svg>
    )
}

export default Highlighting;