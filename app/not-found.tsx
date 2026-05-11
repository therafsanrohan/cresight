import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-cresight-black text-cresight-white relative overflow-hidden">
      {/* Background structural typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
        <h1 className="text-[30vw] font-bold tracking-tighter leading-none">404</h1>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center max-w-md px-6">
        <span className="text-cresight-gray uppercase tracking-widest text-xs font-semibold mb-6 block">
          Error 404
        </span>
        <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight mb-8">
          Page Not Found
        </h2>
        <p className="text-cresight-gray font-light text-center mb-12">
          The destination you are looking for does not exist in our current digital architecture.
        </p>

        <Link
          href="/"
          className="group relative inline-flex items-center space-x-3 pb-2 text-sm uppercase tracking-widest text-cresight-white font-semibold"
        >
          <ArrowLeft className="transform group-hover:-translate-x-1 transition-transform duration-300 w-4 h-4" />
          <span>Return Home</span>
          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-cresight-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left"></span>
        </Link>
      </div>
    </div>
  );
}
