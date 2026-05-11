"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTASection() {
  return (
    <section className="w-full py-48 bg-cresight-white text-cresight-black flex flex-col items-center justify-center text-center">
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
          
          <Link
            href="/contact"
            className="group inline-flex items-center space-x-4 border-b-2 border-cresight-black pb-2 text-xl md:text-2xl font-semibold uppercase tracking-widest hover:text-cresight-gray hover:border-cresight-gray transition-colors duration-300"
          >
            <span>Get in touch</span>
            <ArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
