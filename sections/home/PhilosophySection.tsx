"use client";

import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="w-full py-32 md:py-48 bg-cresight-white text-cresight-black">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <p className="text-cresight-gray text-xs uppercase tracking-widest mb-12 font-semibold">
          How We Think
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light uppercase tracking-tighter leading-[1.1] mb-12">
            We build digital <span className="font-bold">experiences</span> that feel like <span className="italic text-cresight-gray">luxury</span> products.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-2xl mx-auto text-cresight-graphite text-lg md:text-xl font-light"
        >
          <p>
            Our philosophy is rooted in restraint and intelligence. We believe the most powerful brands speak softly but resonate deeply. By stripping away the unnecessary, we create space for true creative and strategic impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
