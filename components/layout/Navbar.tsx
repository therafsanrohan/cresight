"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/journal" },
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
              href="/contact"
              className="px-5 py-2.5 bg-cresight-white text-cresight-black text-sm uppercase tracking-wider font-semibold rounded-none hover:bg-cresight-gray transition-colors duration-200"
            >
              Contact Us
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
        <div className="flex flex-col space-y-8 items-center">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              variants={{
                open: { y: 0, opacity: 1, transition: { delay: i * 0.1 } },
                closed: { y: 20, opacity: 0 },
              }}
            >
              <Link
                href={link.href}
                className="text-cresight-white text-4xl uppercase tracking-widest font-light"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            variants={{
              open: { y: 0, opacity: 1, transition: { delay: navLinks.length * 0.1 } },
              closed: { y: 20, opacity: 0 },
            }}
          >
            <Link
              href="/contact"
              className="mt-8 px-8 py-4 bg-cresight-white text-cresight-black text-xl uppercase tracking-wider font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
