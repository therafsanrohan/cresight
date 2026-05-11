"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
    <section className="w-full py-32 bg-cresight-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-20 border-b border-cresight-graphite pb-8">
          <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tight">
            Selected <br /> <span className="font-bold">Works</span>
          </h2>
          <Link
            href="/work"
            className="group flex items-center space-x-2 text-cresight-gray hover:text-cresight-white uppercase tracking-widest text-xs font-semibold transition-colors duration-300 pb-2"
          >
            <span>View All</span>
            <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </div>

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
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
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
