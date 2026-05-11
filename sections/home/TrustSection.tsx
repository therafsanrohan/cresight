"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function AnimatedCounter({ from, to, duration, suffix = "", prefix = "" }: { from: number, to: number, duration: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // easeOutExpo for premium feel
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeOut * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(to);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  const displayCount = to < 10 && count < 10 ? `0${count}` : count;

  return (
    <span ref={ref}>
      {prefix}{displayCount}{suffix}
    </span>
  );
}

export default function TrustSection() {
  const clients = ["Aman", "Ritz-Carlton", "LVMH", "Vogue", "Aesop"];
  
  return (
    <section className="w-full py-24 bg-cresight-black border-t border-b border-cresight-graphite overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <p className="text-cresight-gray text-xs uppercase tracking-widest mb-12 font-semibold">
          Trusted by Global Visionaries
        </p>
        
        <div className="w-full flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {clients.map((client) => (
            <div key={client} className="text-2xl md:text-3xl font-light tracking-widest uppercase text-cresight-white">
              {client}
            </div>
          ))}
        </div>

        <div className="w-full mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-cresight-graphite pt-16">
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-light mb-2 text-cresight-white">
              <AnimatedCounter from={0} to={12} duration={2.5} suffix="+" />
            </span>
            <span className="text-xs text-cresight-gray uppercase tracking-widest">Countries</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-light mb-2 text-cresight-white">
              <AnimatedCounter from={0} to={150} duration={2.5} suffix="+" />
            </span>
            <span className="text-xs text-cresight-gray uppercase tracking-widest">Projects</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-light mb-2 text-cresight-white">
              <AnimatedCounter from={0} to={24} duration={2.5} />
            </span>
            <span className="text-xs text-cresight-gray uppercase tracking-widest">Awards</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-light mb-2 text-cresight-white">
              <AnimatedCounter from={0} to={1} duration={2.5} />
            </span>
            <span className="text-xs text-cresight-gray uppercase tracking-widest">Mindset</span>
          </div>
        </div>
      </div>
    </section>
  );
}
