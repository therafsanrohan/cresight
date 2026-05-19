"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Client {
  name: string;
  logo: string;
}

const defaultClients: Client[] = [
  { name: "Walton", logo: "/clients/Walton_logo.svg" },
  { name: "ACI", logo: "/clients/aci_logo.svg" },
  { name: "bKash", logo: "/clients/bkash_logo.svg" },
  { name: "PRAN", logo: "/clients/pran_logo.svg" },
];

export default function TrustSection() {
  const [clients, setClients] = useState<Client[]>(defaultClients);

  useEffect(() => {
    async function fetchClients() {
      try {
        const response = await fetch("/api/clients");
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setClients(data);
          }
        }
      } catch (error) {
        console.error("Failed to dynamically load client logos:", error);
      }
    }
    fetchClients();
  }, []);


  return (
    <section className="w-full py-32 bg-cresight-white border-t border-b border-cresight-gray/20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-cresight-gray mb-6 block font-bold">Partnerships</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight max-w-4xl mx-auto text-cresight-black">
            BRANDS THAT <span className="italic">PARTNER</span> WITH US <br className="hidden md:block" /> 
            TO MOVE <span className="underline decoration-1 underline-offset-8">FORWARD</span>.
          </h2>
        </motion.div>
        
        <div className="w-full flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-80 hover:opacity-100 transition-opacity duration-700">
          {clients.length > 0 ? (
            clients.map((client) => (
              <motion.div 
                key={client.name} 
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center transition-all duration-500"
              >
                {client.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={client.logo} alt={client.name} className="h-10 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
                ) : (
                  <div className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-cresight-black">
                    {client.name}
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            <div className="text-cresight-gray italic text-sm">Loading partnerships...</div>
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
