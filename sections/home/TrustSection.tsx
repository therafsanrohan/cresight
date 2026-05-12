"use client";




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


      </div>
    </section>
  );
}
