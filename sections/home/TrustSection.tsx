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
            <span className="text-4xl md:text-5xl font-light mb-2">12+</span>
            <span className="text-xs text-cresight-gray uppercase tracking-widest">Countries</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-light mb-2">150+</span>
            <span className="text-xs text-cresight-gray uppercase tracking-widest">Projects</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-light mb-2">24</span>
            <span className="text-xs text-cresight-gray uppercase tracking-widest">Awards</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-light mb-2">01</span>
            <span className="text-xs text-cresight-gray uppercase tracking-widest">Mindset</span>
          </div>
        </div>
      </div>
    </section>
  );
}
