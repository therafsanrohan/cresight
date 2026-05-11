"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={clsx(
          "fixed top-0 left-0 w-full z-40 transition-all duration-300",
          isScrolled
            ? "bg-cresight-black/80 backdrop-blur-md py-4 border-b border-cresight-graphite"
            : "bg-transparent py-8"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link
            href="/"
            className="text-cresight-white text-xl md:text-2xl font-bold tracking-widest uppercase relative z-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Cresight
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-cresight-gray hover:text-cresight-white text-sm uppercase tracking-wider transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="group relative text-cresight-white text-xs uppercase tracking-widest font-semibold pb-1"
            >
              Contact Us
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-cresight-white scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-cresight-white relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, pointerEvents: "auto" },
          closed: { opacity: 0, pointerEvents: "none" },
        }}
        className="fixed inset-0 z-30 bg-cresight-black flex flex-col justify-center items-center"
      >
        <div className="container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="flex flex-col space-y-6 md:space-y-10">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                variants={{
                  open: { y: 0, opacity: 1, transition: { delay: i * 0.1 + 0.2, duration: 0.5, ease: "easeOut" } },
                  closed: { y: 40, opacity: 0, transition: { duration: 0.3 } },
                }}
                className="overflow-hidden"
              >
                <Link
                  href={link.href}
                  className="group relative inline-block text-cresight-white text-5xl md:text-7xl uppercase tracking-tighter font-light hover:text-cresight-gray transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              variants={{
                open: { y: 0, opacity: 1, transition: { delay: navLinks.length * 0.1 + 0.3, duration: 0.5 } },
                closed: { y: 20, opacity: 0 },
              }}
              className="pt-8 mt-8 border-t border-cresight-graphite/50 w-full max-w-sm"
            >
              <span className="block text-xs text-cresight-gray uppercase tracking-widest mb-4">Start a project</span>
              <Link
                href="#contact"
                className="group relative inline-flex items-center text-cresight-white text-2xl uppercase tracking-widest font-light"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
                <span className="ml-4 w-12 h-[1px] bg-cresight-white transform origin-left transition-transform duration-300 group-hover:scale-x-150"></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
