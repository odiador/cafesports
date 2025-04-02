import { FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const YouTubeEmbed = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState<number>();
    const [show, setShow] = useState<boolean>(true);
    useEffect(() => {
        if (ref.current) {
            const width = ref.current.offsetWidth || 0;
            setHeight(width * 9 / 16);
        }
    }, []);
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0, x: -100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 0.2, from: 0 }}
            ref={ref}
            className="resize rounded-lg overflow-clip w-full relative bg-black" style={{ height: height }}>
            <iframe
                className="size-full"
                onLoad={() => setShow(false)}
                src="https://www.youtube.com/embed/live_stream?channel=https://www.youtube.com/@cafesportsclub"
                allowFullScreen={true}
            />
            <div className="absolute top-1/2 left-1/2 animate-spin z-[1]" style={{ display: show ? "block" : "none" }}><FaSpinner /></div>
        </motion.div>
    );
};

const KickEmbed = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [show, setShow] = useState<boolean>(true);
    const [height, setHeight] = useState<number>();
    useEffect(() => {
        if (ref.current) {
            const width = ref.current.offsetWidth || 0;
            setHeight(width * 9 / 16);
        }
    }, []);
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0, x: -100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 0.2, from: 0 }}
            ref={ref} className="resize rounded-lg overflow-clip w-full relative bg-black" style={{ height: height }}>
            <iframe
                className="size-full"
                onLoad={() => setShow(false)}
                src="https://player.kick.com/cafesports-club?autoplay=true"
                allowFullScreen={true}
            />
            <div className="absolute top-1/2 left-1/2 animate-spin z-[1]" style={{ display: show ? "block" : "none" }}><FaSpinner /></div>
        </motion.div>
    );
};

export { YouTubeEmbed, KickEmbed };