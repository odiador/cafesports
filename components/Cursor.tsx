"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHidden, setIsHidden] = useState(false);
    const [isHoveringLink, setIsHoveringLink] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent): void => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const hideCursor = () => setIsHidden(true);
        const showCursor = () => setIsHidden(false);

        const handleLinkEnter = () => setIsHoveringLink(true);
        const handleLinkLeave = () => setIsHoveringLink(false);


        document.addEventListener("mousemove", move);


        document.querySelectorAll("iframe, video, embed, object").forEach((el) => {
            el.addEventListener("mouseenter", hideCursor);
            el.addEventListener("mouseleave", showCursor);
        });


        document.querySelectorAll("a").forEach((el) => {
            el.addEventListener("mouseenter", handleLinkEnter);
            el.addEventListener("mouseleave", handleLinkLeave);
        });

        return () => {
            document.removeEventListener("mousemove", move);

            document.querySelectorAll("iframe, video, embed, object").forEach((el) => {
                el.removeEventListener("mouseenter", hideCursor);
                el.removeEventListener("mouseleave", showCursor);
            });

            document.querySelectorAll("a").forEach((el) => {
                el.removeEventListener("mouseenter", handleLinkEnter);
                el.removeEventListener("mouseleave", handleLinkLeave);
            });
        };
    }, []);

    return (
        <div className="w-full h-full md:block hidden fixed top-0 left-0 pointer-events-none z-[999] mix-blend-overlay">
            <AnimatePresence>
                <motion.div
                    className="rounded-full absolute pointer-events-none bg-white/25"
                    animate={{
                        x: mousePosition.x - 24,
                        y: mousePosition.y - 24,
                        scale: isHoveringLink ? 2 : 1,
                    }}
                    transition={{
                        // x: { duration: 0.2, ease: "easeOut" },
                        // y: { duration: 0.2, ease: "easeOut" },
                        x: { type: "spring", stiffness: 500, damping: 100, },
                        y: { type: "spring", stiffness: 500, damping: 100, },
                        scale: { type: "spring", stiffness: 1000, damping: 100, }
                    }}
                    style={{
                        width: "48px",
                        height: "48px",
                        visibility: isHidden ? "hidden" : "visible",
                    }}
                />
            </AnimatePresence>
        </div>
    );
};

export default Cursor;
