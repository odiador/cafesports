"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  start = false
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  start?: boolean;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    if (start)
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2, { startDelay: 0, ease: "easeInOut", from: "first" }),
        }
      );
    else animate(
      "span",
      {
        opacity: 0,
        filter: filter? "blur(10px)" : "none",
      },
      {
        duration: 0,
      }
    );
  }, [start]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="mt-4">
        {renderWords()}
      </div>
    </div>
  );
};
