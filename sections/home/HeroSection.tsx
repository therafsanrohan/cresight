"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Optional cinematic video background or image could go here with low opacity */}
      <div className="absolute inset-0 bg-cresight-black z-0">
        {/* Placeholder for cinematic image/video */}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="overflow-hidden"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.85] text-cresight-white mb-6">
            Visionary
            <br />
            <span className="text-cresight-gray">Intelligence</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-cresight-gray font-light uppercase tracking-widest mb-10">
            A premium creative agency shaping the digital narrative of global brands.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link href="#work" className="group relative text-cresight-white uppercase tracking-widest text-xs font-semibold pb-1 inline-block">
            Discover Our Work
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-cresight-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
