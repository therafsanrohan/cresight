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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-12 text-lg md:text-xl lg:text-2xl text-cresight-gray font-light leading-[1.6] border-l border-cresight-gray/10 pl-10 ml-2"
            >
              <p>
                Every brand begins with an idea, but value is created when the right audience experiences it. Through <span className="text-cresight-white font-medium italic">thoughtful design</span>, strategic thinking, and immersive digital experiences, we shape marketing communications into meaningful engagement.
              </p>
              <p>
                From brand design to multimedia storytelling and creative campaigns, we create solutions that inspire audiences to engage, respond, and act. We also empower growing businesses with <span className="text-cresight-white font-medium">modern tools</span> and strategies for sustainable digital growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:pt-24"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl text-cresight-white font-light italic leading-tight tracking-tighter border-t border-cresight-gray/20 pt-12">
                Everything we do is purpose-driven, helping brands stay <span className="text-cresight-gray">distinctive</span>, <span className="text-cresight-gray">relevant</span>, and <span className="text-cresight-white font-bold">forward-moving</span>.
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
