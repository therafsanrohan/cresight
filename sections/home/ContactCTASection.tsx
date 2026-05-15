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
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase text-center mb-24 max-w-5xl leading-[1]">
            LET&apos;S COLLABORATE <br />
            <span className="text-cresight-gray font-light">TO CRAFT THE STORY</span> <br />
            THAT MOVES IDEAS FORWARD
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 w-full max-w-6xl">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[10px] uppercase tracking-[0.3em] text-cresight-gray mb-6 font-bold">Email Inquiry</span>
              <a 
                href="mailto:info@cre-sight.com" 
                className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight hover:opacity-50 transition-opacity duration-500"
              >
                info@cre-sight.com
              </a>
            </div>

            <div className="flex flex-col items-center md:items-center text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-cresight-gray mb-6 font-bold">Direct Connection</span>
              <a 
                href="https://wa.me/8801328822216" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight hover:opacity-50 transition-opacity duration-500"
              >
                +880 1328 822216
              </a>
            </div>

            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <span className="text-[10px] uppercase tracking-[0.3em] text-cresight-gray mb-6 font-bold">Our Studio</span>
              <address className="not-italic text-xl md:text-2xl lg:text-2xl font-light tracking-tight leading-snug">
                R 10/2, Niketon, Gulshan-1, <br />
                Dhaka 1212, Bangladesh.
              </address>
            </div>
          </div>

          <div className="mt-32 w-24 h-[1px] bg-cresight-graphite/20"></div>
        </motion.div>
      </div>
    </section>
  );
}
