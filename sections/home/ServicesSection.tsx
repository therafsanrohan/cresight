"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Brand Systems",
    items: ["Visual Identity", "Brand Strategy", "Art Direction", "Naming"],
  },
  {
    title: "Digital Experiences",
    items: ["Websites & Platforms", "Product Design", "Interactive 3D", "Creative Development"],
  },
  {
    title: "Spatial & Environmental",
    items: ["Exhibition Design", "Signage Systems", "Retail Concept", "Experiential"],
  },
  {
    title: "Content & Campaigns",
    items: ["Photography", "Video & Motion", "Copywriting", "Campaign Strategy"],
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-32 bg-cresight-black border-t border-cresight-graphite">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight mb-8 md:mb-0">
            Expertise
          </h2>
          <p className="max-w-md text-cresight-gray font-light">
            We deliver holistic creative solutions across physical and digital mediums, ensuring every touchpoint communicates absolute premium value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-cresight-graphite pt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold uppercase tracking-wide mb-8">
                {service.title}
              </h3>
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li key={item} className="text-cresight-gray font-light hover:text-cresight-white transition-colors duration-300">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
