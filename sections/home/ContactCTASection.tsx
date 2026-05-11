"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTASection() {
  return (
    <section id="contact" className="w-full py-48 bg-cresight-white text-cresight-black flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-light tracking-tighter uppercase mb-8">
            Start A<br /> <span className="font-bold">Project</span>
          </h2>
          <p className="text-cresight-graphite text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto">
            Ready to elevate your brand to the global stage? We partner with ambitious leaders to build premium digital experiences.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <a
              href="mailto:info@cre-sight.com"
              className="group relative inline-flex items-center space-x-4 pb-2 text-xl md:text-2xl font-semibold uppercase tracking-widest text-cresight-black"
            >
              <span>info@cre-sight.com</span>
              <ArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-cresight-black scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left"></span>
            </a>

            <a
              href="https://wa.me/8801328822216"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center space-x-4 pb-2 text-xl md:text-2xl font-semibold uppercase tracking-widest text-cresight-black"
            >
              <span>WhatsApp Us</span>
              <ArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-cresight-black scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left"></span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
