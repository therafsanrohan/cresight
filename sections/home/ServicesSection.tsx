"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  "Brand Design",
  "Illustration",
  "Print Design",
  "Information Design",
  "Environmental Design",
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="w-full py-32 md:py-48 bg-cresight-black text-cresight-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:mb-40">
          <div className="max-w-md">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-cresight-gray text-[10px] uppercase tracking-[0.4em] mb-8 block font-semibold"
            >
              What we do
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-tighter uppercase"
            >
              Services
            </motion.h2>
          </div>
          <div className="max-w-xl mt-12 md:mt-16">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cresight-gray font-light leading-[1.3] tracking-tight"
            >
              Comprehensive services to boost your presence and achieve impactful results.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col border-t border-cresight-graphite relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-cresight-graphite py-10 md:py-16 cursor-pointer flex justify-between items-center"
            >
              <div className="absolute inset-0 bg-cresight-graphite/10 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-0"></div>

              <div className="flex items-center space-x-6 md:space-x-16 z-10 relative">
                <span className={`text-[10px] md:text-xs uppercase tracking-widest transition-colors duration-500 font-medium ${hoveredIndex === index ? 'text-cresight-white' : 'text-cresight-gray'}`}>
                  0{index + 1}
                </span>
                <h3 className={`text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-light transition-all duration-500 transform tracking-tight uppercase ${hoveredIndex === index ? 'text-cresight-white translate-x-2 md:translate-x-8' : 'text-cresight-gray'}`}>
                  {service}
                </h3>
              </div>
              
              <div className="relative z-10 pr-2 md:pr-8">
                <div className={`p-4 rounded-full border transition-all duration-500 ${hoveredIndex === index ? 'border-cresight-white bg-cresight-white text-cresight-black' : 'border-cresight-graphite text-cresight-gray bg-transparent'}`}>
                  <ArrowRight 
                    strokeWidth={1.5}
                    className={`w-6 h-6 md:w-8 md:h-8 transform transition-transform duration-500 ${hoveredIndex === index ? '-rotate-45' : 'rotate-0'}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
