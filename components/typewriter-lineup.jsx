"use client";

import { useState, useEffect, useRef } from "react";
import { suprapowerMedium } from "@/app/fonts";
import { cn } from "@/utils/cn";
import { motion, useAnimation } from "framer-motion";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
  wordClassName,
}) => {
  const controls = useAnimation();
  const [hasPlayed, setHasPlayed] = useState(false);
  const ref = useRef(null);

  // Split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Adjust stagger delay as needed
        delayChildren: 1, // Delay the start of animation for each word
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  const renderWords = () => {
    return (
      <div className={`${suprapowerMedium.className} lg:text-3xl inline-block`}>
        {wordsArray.map((word, idx) => (
          <motion.div
            key={`word-${idx}`}
            className="inline-block"
            variants={containerVariants}
          >
            {word.text.map((char, index) => (
              <motion.span
                key={`char-${index}`}
                className={cn(
                  `text-white-smoke tracking-wider`,
                  word.className || wordClassName,
                )}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </motion.div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (!hasPlayed) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            controls.start({
              width: "100%",
              transition: {
                duration: 2,
                ease: "linear",
                delay: 1,
              },
            });
            setHasPlayed(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );

      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, [controls, hasPlayed]);

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        ref={ref}
        className="overflow-hidden"
        initial={{ width: "0%" }}
        animate={controls}
      >
        <div
          className="text-md md:text-2xl lg:text-3xl"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-3 bg-red-600",
          cursorClassName,
        )}
      ></motion.span>
    </div>
  );
};
