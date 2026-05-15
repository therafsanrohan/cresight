"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const wordsToType = ["Distinctive", "Relevant", "Forward-Moving"];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = wordsToType[index];
      
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        setTypingSpeed(120);
      }

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % wordsToType.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, typingSpeed]);

  return (
    <span className="relative inline-flex items-center text-cresight-white font-bold min-w-[120px] justify-start uppercase tracking-wider">
      {displayText}
      <motion.span 
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="ml-2 w-[4px] h-[1em] bg-cresight-white inline-block"
      />
    </span>
  );
}

export default function HeroSection() {
  const titlePart1 = "We Blend Design, Culture,";
  const titlePart2 = "and Experiences to Create Work";
  const titlePart3 = "That Feels Natural, Engaging,";
  const titlePart4 = "and Culturally Relevant.";

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-cresight-black py-24 md:py-32">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cresight-white/[0.03] to-transparent" />
        <div className="absolute top-[15%] left-[5%] w-[40%] h-[40%] bg-cresight-white/[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-[15%] right-[5%] w-[40%] h-[40%] bg-cresight-gray/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        {/* Title with staggered lines - Final Creative Refinement */}
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-cresight-white max-w-7xl mb-20 leading-[0.95] uppercase">
          {[
            { text: "We Blend Design,", weight: "font-black" },
            { text: "Culture, and Experiences", weight: "font-light italic text-cresight-gray" },
            { text: "to Create Work That Feels", weight: "font-black" },
            { text: "Natural, Engaging, and Relevant.", weight: "font-bold outline-text text-cresight-gray" }
          ].map((line, lineIndex) => (
            <div key={lineIndex} className="overflow-hidden py-1">
              <motion.div
                initial={{ y: "110%", rotate: 2 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: lineIndex * 0.2, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`${line.weight}`}
              >
                {line.text}
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="text-base md:text-xl lg:text-2xl text-cresight-gray font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            Cresight creates <span className="text-cresight-white font-medium italic">growth through stories</span>, 
            blending design, culture, and strategy to build integrated communication experiences for brands, 
            businesses, and people across the right platforms and moments.
          </p>
          <div className="text-3xl md:text-4xl lg:text-6xl mb-4">
            <Typewriter />
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px currentColor;
          color: transparent;
        }
        @media (min-width: 768px) {
          .outline-text {
            -webkit-text-stroke: 2px currentColor;
          }
        }
      `}</style>
      
      {/* Simple, Non-sticky Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-medium text-cresight-gray">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-cresight-white to-transparent" />
      </motion.div>
    </section>
  );
}
