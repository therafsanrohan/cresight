"use client";

import { motion } from "framer-motion";

export default function StrategicGrowthSection() {
  return (
    <section className="w-full py-32 md:py-48 bg-cresight-black text-cresight-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col mb-16"
          >
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-bold tracking-[0.3em] text-cresight-gray">03</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                DESIGNED <br /> 
                <span className="text-cresight-gray outline-text">TO MOVE</span> <br /> 
                BRANDS FORWARD
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8 text-lg md:text-xl text-cresight-gray font-light leading-relaxed border-l border-cresight-gray/20 pl-8 ml-2"
            >
              <p>
                Every brand begins with an idea, but value is created when the right audience experiences it. Through thoughtful design, strategic thinking, and immersive digital experiences, we shape marketing communications into meaningful engagement.
              </p>
              <p>
                From brand design to multimedia storytelling and creative campaigns, we create solutions that inspire audiences to engage, respond, and act. We also empower growing businesses with modern tools and strategies for sustainable digital growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col justify-end"
            >
              <p className="text-xl md:text-2xl text-cresight-white font-medium italic border-l-2 border-cresight-white pl-8">
                Everything we do is purpose-driven, helping brands stay distinctive, relevant, and forward-moving.
              </p>
            </motion.div>
          </div>
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
