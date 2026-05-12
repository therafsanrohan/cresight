"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTASection() {
  return (
    <section id="contact" className="w-full py-64 bg-cresight-white text-cresight-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cresight-gray/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cresight-gray/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-[0.5em] text-cresight-gray mb-12 font-semibold">
            Let&apos;s talk
          </span>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter uppercase text-center mb-24 max-w-4xl leading-[0.9]">
            HAVE AN IDEA? <br />
            <span className="font-bold italic">LET&apos;S BUILD IT.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full max-w-5xl">
            <div className="flex flex-col items-center md:items-start group">
              <span className="text-[10px] uppercase tracking-[0.3em] text-cresight-gray mb-4">Email Inquiry</span>
              <a 
                href="mailto:info@cre-sight.com" 
                className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight hover:opacity-50 transition-opacity duration-500"
              >
                info@cre-sight.com
              </a>
            </div>

            <div className="flex flex-col items-center md:items-end group text-center md:text-right">
              <span className="text-[10px] uppercase tracking-[0.3em] text-cresight-gray mb-4">Direct Connection</span>
              <a 
                href="https://wa.me/8801328822216" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight hover:opacity-50 transition-opacity duration-500"
              >
                +880 1328 822216
              </a>
            </div>
          </div>

          <div className="mt-32 w-24 h-[1px] bg-cresight-graphite/20"></div>
        </motion.div>
      </div>
    </section>
  );
}
