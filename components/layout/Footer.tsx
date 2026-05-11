import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-cresight-black pt-32 pb-12 border-t border-cresight-graphite relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col h-full">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-32">
          <div className="mb-16 md:mb-0 max-w-sm">
            <h3 className="text-xl font-light uppercase tracking-widest mb-6 text-cresight-white">
              Based in Global
            </h3>
            <p className="text-cresight-gray font-light text-sm leading-relaxed mb-8">
              A premium creative agency shaping the digital narrative of global brands through strategic intelligence and minimal design.
            </p>
            <a href="mailto:info@cre-sight.com" className="group relative inline-flex items-center text-cresight-white uppercase tracking-widest text-xs font-semibold mb-3">
              info@cre-sight.com
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-cresight-white scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
            </a>
            <br />
            <a href="https://wa.me/8801328822216" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center text-cresight-white uppercase tracking-widest text-xs font-semibold">
              +880 1328-822216 (WhatsApp)
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-cresight-white scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-16 md:gap-32 text-xs uppercase tracking-widest font-semibold">
            <div className="flex flex-col space-y-6">
              <h4 className="text-cresight-gray mb-2 font-light">Navigation</h4>
              <Link href="#work" className="hover:text-cresight-gray transition-colors flex items-center group">
                Work <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </Link>
              <Link href="#services" className="hover:text-cresight-gray transition-colors flex items-center group">
                Services <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </Link>
              <Link href="#about" className="hover:text-cresight-gray transition-colors flex items-center group">
                About <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </Link>
            </div>
            <div className="flex flex-col space-y-6">
              <h4 className="text-cresight-gray mb-2 font-light">Socials</h4>
              <a href="#" className="hover:text-cresight-gray transition-colors flex items-center group">
                Instagram <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </a>
              <a href="#" className="hover:text-cresight-gray transition-colors flex items-center group">
                LinkedIn <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </a>
              <a href="#" className="hover:text-cresight-gray transition-colors flex items-center group">
                Behance <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Huge typography */}
        <div className="w-full border-b border-cresight-graphite pb-12 mb-8 flex items-center justify-center pointer-events-none select-none">
          <h1 className="text-[15vw] leading-none font-bold tracking-tighter uppercase text-cresight-white opacity-[0.03]">
            CRESIGHT
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-cresight-gray uppercase tracking-widest font-semibold">
          <p>&copy; {new Date().getFullYear()} Cresight.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-cresight-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cresight-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
