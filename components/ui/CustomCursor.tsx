"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const updateTouchPosition = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        if (!isVisible) setIsVisible(true);
      }
    };

    const handleMouseOver = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      // Check if we are hovering over an interactive element
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("touchmove", updateTouchPosition, { passive: true });
    window.addEventListener("touchstart", updateTouchPosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver as EventListener);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("touchend", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("touchmove", updateTouchPosition);
      window.removeEventListener("touchstart", updateTouchPosition);
      window.removeEventListener("mouseover", handleMouseOver as EventListener);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("touchend", handleMouseLeave);
    };
  }, [isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cresight-white rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.1,
        }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-cresight-white rounded-full pointer-events-none z-[100] mix-blend-difference flex items-center justify-center"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering ? "rgba(245, 245, 243, 0.1)" : "transparent",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5,
        }}
      />
    </>
  );
}
