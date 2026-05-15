"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const clients = ["BRANDS", "GROUPS", "ORGANIZATIONS", "NGOS", "GOVERNMENT AGENCIES"];

function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % clients.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[1.1em] inline-block overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={clients[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="block whitespace-nowrap text-cresight-white bg-cresight-black px-3 md:px-8 py-1 md:py-2 font-black italic tracking-tighter text-[0.8em]"
        >
          {clients[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="w-full py-32 md:py-56 bg-cresight-white text-cresight-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heroic "WE WORK WITH" Title */}
        <div className="mb-48 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2 md:gap-4"
          >
            <h2 className="text-4xl sm:text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter uppercase leading-[0.85] flex flex-wrap items-center">
              <span className="mr-4 md:mr-6">WE WORK</span>
              <span className="mr-4 md:mr-6 text-cresight-gray/30 outline-text">WITH</span>
              <RotatingText />
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
            className="h-[2px] md:h-[4px] bg-cresight-black mt-12 md:mt-20"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-40">
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="flex items-baseline gap-4 mb-10">
              <span className="text-sm font-bold tracking-[0.3em] text-cresight-gray">01</span>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
                EXPANDING <br /> 
                <span className="text-cresight-gray outline-text">POSSIBILITIES</span> <br /> 
                FOR BRANDS.
              </h3>
            </div>
            <div className="space-y-8 text-lg md:text-xl text-cresight-graphite font-light leading-relaxed max-w-xl border-l border-cresight-gray/30 pl-8 ml-2">
              <p>
                We believe creativity should move brands forward, not just decorate them. That belief drives us to explore new ideas, industries, and perspectives while collaborating with organizations ready to grow, adapt, and challenge conventions.
              </p>
              <p>
                We combine design, culture, and experiences to create work that feels natural, engaging, and culturally relevant across both digital and physical environments.
              </p>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-baseline gap-4 mb-10">
              <span className="text-sm font-bold tracking-[0.3em] text-cresight-gray">02</span>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
                SHAPING <br /> 
                <span className="text-cresight-gray outline-text">STORIES</span> <br /> 
                THAT MATTER.
              </h3>
            </div>
            <div className="space-y-8 text-lg md:text-xl text-cresight-graphite font-light leading-relaxed max-w-xl border-l border-cresight-gray/30 pl-8 ml-2">
              <p>
                Impact comes from communicating with clarity and purpose. We help brands uncover what makes them unique and transform their vision into stories and visual experiences that audiences connect with and remember.
              </p>
              <p>
                Through a collaborative, insight-driven approach, we align brand voice, design, and audience understanding to create authentic communication that builds trust and lasting relationships.
              </p>
            </div>
          </motion.div>
        </div>
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
    </section>
  );
}
