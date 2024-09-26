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
          delay: stagger(0.05, { startDelay: 0, ease: "easeInOut", from: "first" }),
        }
      );
    else animate(
      "span",
      {
        opacity: 0,
        filter: filter ? "blur(10px)" : "none",
      },
      {
        duration: 0,
      }
    );
  }, [start]);

  const wordsArray = words.split("<>");
  const renderWords = () => {
    return (
      <motion.div ref={scope} className="w-full">
        <div className="w-full flex flex-col">
          {wordsArray.map((word, idx) => {
            const words = word.split(" ");
            return <div key={'blurtext-' + idx}>
              {
                words.map((subWord, subIdx) => (
                  <motion.span
                    key={subWord + idx + subIdx}
                    className="opacity-0"
                    style={{
                      opacity: 0,
                      filter: filter ? "blur(10px)" : "none",
                    }}
                  >
                    {subWord}{" "}
                  </motion.span>
                ))
              }
            </div>
          })}
        </div>
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
