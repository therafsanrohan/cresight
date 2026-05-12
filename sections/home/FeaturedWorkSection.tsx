"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Oculus Residency",
    category: "Spatial & Brand",
    image: "/assets/images/cresight_oculus_residency.png",
  },
  {
    id: 2,
    title: "Vela Digital",
    category: "Digital Experience",
    image: "/assets/images/cresight_vela_digital.png",
  },
  {
    id: 3,
    title: "Aura Skincare",
    category: "Brand System",
    image: "/assets/images/cresight_aura_skincare.png",
  },
  {
    id: 4,
    title: "Nexus Global",
    category: "Strategy & Identity",
    image: "/assets/images/cresight_nexus_global.png",
  },
];

export default function FeaturedWorkSection() {
  return (
    <section id="work" className="w-full py-32 bg-cresight-black">
      <div className="container mx-auto px-6 md:px-12">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group cursor-pointer ${index % 2 !== 0 ? "md:mt-32" : ""}`}
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-cresight-graphite mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold uppercase tracking-wide mb-2">{project.title}</h3>
                  <p className="text-sm text-cresight-gray uppercase tracking-widest">{project.category}</p>
                </div>
                <div className="p-3 bg-cresight-graphite/50 rounded-full opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
