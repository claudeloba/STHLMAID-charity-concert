"use client";
import { animate, useMotionValue, motion } from "framer-motion";
import { ScrollingCards } from "./ScrollingCards";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";

function ImageScroll({ classnames, scrollUp, DURATION = 90, images }) {
  let [ref, { height }] = useMeasure();
  const yTranslation = useMotionValue(0);

  // Duplicate the images array
  const doubledImages = [...images, ...images];

  const [cardHeight, setCardHeight] = useState(110); // Default height
  const gap = 0.75 * 16; // 0.75rem in pixels

  useEffect(() => {
    const updateCardHeight = () => {
      if (window.innerWidth >= 1280) {
        setCardHeight(300); // height for lg and larger screens
      } else if (window.innerWidth >= 768) {
        setCardHeight(150); // height for md screens
      } else {
        setCardHeight(110); // height for small screens
      }
    };

    updateCardHeight();
    window.addEventListener("resize", updateCardHeight);
    return () => window.removeEventListener("resize", updateCardHeight);
  }, []);

  useEffect(() => {
    const totalCarouselHeight = (cardHeight + gap) * images.length;

    // Start and end positions for a full loop including the cloned set
    const startPosition = scrollUp ? -totalCarouselHeight : 0;
    const endPosition = scrollUp ? 0 : -totalCarouselHeight;

    const controls = animate(yTranslation, [startPosition, endPosition], {
      ease: "linear",
      duration: DURATION, // Duration for a single loop
      onUpdate: (latest) => {
        if (scrollUp ? latest >= 0 : latest <= -totalCarouselHeight) {
          yTranslation.set(scrollUp ? -totalCarouselHeight : 0); // Reset to start position seamlessly
        }
      },
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => controls.stop();
  }, [
    DURATION,
    height,
    yTranslation,
    scrollUp,
    images.length,
    cardHeight,
    gap,
  ]);

  return (
    <div className={`${classnames} opacity-70 overflow-hidden w-full`}>
      <motion.div
        className="flex overflow-hidden flex-col gap-3"
        ref={ref}
        style={{ y: yTranslation }}
      >
        {doubledImages.map((image, index) => (
          <ScrollingCards key={index} image={image} />
        ))}
      </motion.div>
    </div>
  );
}

export default ImageScroll;
