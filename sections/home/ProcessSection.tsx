"use client";

import { motion } from "framer-motion";

const processes = [
  { step: "01", name: "Discovery", desc: "Understanding the core narrative." },
  { step: "02", name: "Strategy", desc: "Defining the positioning." },
  { step: "03", name: "Design", desc: "Crafting the visual language." },
  { step: "04", name: "Execution", desc: "Bringing the vision to reality." },
];

export default function ProcessSection() {
  return (
    <section className="w-full py-32 bg-cresight-black border-t border-cresight-graphite">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight mb-20 text-center">
          The Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.step}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 border border-cresight-graphite hover:bg-cresight-graphite/10 transition-colors duration-500"
            >
              <span className="text-5xl font-light text-cresight-gray mb-6">{process.step}</span>
              <h3 className="text-xl font-semibold uppercase tracking-wide mb-4">{process.name}</h3>
              <p className="text-sm text-cresight-gray font-light">{process.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
