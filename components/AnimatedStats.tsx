"use client";

import { animate, motion, MotionStyle, useInView, useMotionValue } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";

interface AnimatedStatsProps {
    value: number;
    duration?: number;
    ref?: RefObject<null>
    style?: MotionStyle,
    className?: string
}

export default function AnimatedStats({ value, duration = 1, ref, style, className }: AnimatedStatsProps) {
    const count = useMotionValue(0);
    const [displayValue, setDisplayValue] = useState(0);
    const refNumber = useRef(null);
    const isInView = useInView(ref || refNumber, { amount: "all" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, {
                duration,
                ease: [0.25, 1, 0.5, 1],
                onUpdate: (latest) => setDisplayValue(Math.round(latest)),
            });

            return () => controls.stop();
        }
    }, [isInView, count, value, duration]);

    return (
        <motion.h3 style={style} ref={refNumber} className={`w-fit ${className}`}>
            {displayValue}
        </motion.h3>
    );
}
