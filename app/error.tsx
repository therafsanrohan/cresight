"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // We log securely to a hypothetical tracking service without exposing it to the UI
    console.error("An unexpected event occurred in the digital architecture.");
  }, [error]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-cresight-black text-cresight-white relative overflow-hidden">
      {/* Background structural typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
        <h1 className="text-[25vw] font-bold tracking-tighter leading-none text-center">
          ERROR
        </h1>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center max-w-md px-6">
        <span className="text-cresight-gray uppercase tracking-widest text-xs font-semibold mb-6 block">
          System Interruption
        </span>
        <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-8">
          An issue occurred
        </h2>
        <p className="text-cresight-gray font-light text-center mb-12">
          We encountered an unexpected disruption while processing your request. Our systems have logged the event.
        </p>

        <div className="flex items-center space-x-8">
          <button
            onClick={() => reset()}
            className="group relative inline-flex items-center space-x-3 pb-2 text-sm uppercase tracking-widest text-cresight-white font-semibold"
          >
            <RefreshCcw className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-500" />
            <span>Try Again</span>
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-cresight-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left"></span>
          </button>

          <Link
            href="/"
            className="group relative inline-flex items-center space-x-3 pb-2 text-sm uppercase tracking-widest text-cresight-gray hover:text-cresight-white font-semibold transition-colors duration-300"
          >
            <span>Return Home</span>
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-cresight-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
