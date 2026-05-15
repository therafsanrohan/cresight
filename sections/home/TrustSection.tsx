"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Client {
  name: string;
  logo: string;
}

export default function TrustSection() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('/api/clients');
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error("Failed to fetch clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <section className="w-full py-32 bg-cresight-black border-t border-b border-cresight-graphite overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-cresight-gray mb-6 block font-bold">Partnerships</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight max-w-4xl mx-auto text-cresight-white">
            BRANDS THAT <span className="italic">PARTNER</span> WITH US <br className="hidden md:block" /> 
            TO MOVE <span className="underline decoration-1 underline-offset-8">FORWARD</span>.
          </h2>
        </motion.div>
        
        <div className="w-full flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {clients.length > 0 ? (
            clients.map((client) => (
              <motion.div 
                key={client.name} 
                whileHover={{ scale: 1.05, opacity: 1 }}
                className="flex items-center justify-center transition-all duration-500 bg-white p-4 md:p-6 rounded-md shadow-lg"
              >
                {client.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={client.logo} alt={client.name} className="h-8 md:h-12 w-auto object-contain" />
                ) : (
                  <div className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-cresight-black">
                    {client.name}
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            <div className="text-cresight-gray/50 italic text-sm">Loading partnerships...</div>
          )}
        </div>
      </div>
      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px currentColor;
          color: transparent;
        }
        @media (min-width: 768px) {
          .outline-text {
            -webkit-text-stroke: 1.5px currentColor;
          }
        }
      `}</style>
    </section>
  );
}
