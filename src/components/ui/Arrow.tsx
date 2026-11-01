"use client";

import { motion } from "framer-motion";

interface ArrowProps {
  className?: string;
  size?: number;
  direction?: "up-right" | "down-right" | "down";
  animated?: boolean;
}

export default function Arrow({
  className = "",
  size = 48,
  direction = "up-right",
  animated = true,
}: ArrowProps) {
  const rotation = direction === "up-right" ? 0 : direction === "down-right" ? 90 : 45;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`shrink-0 ${className}`}
      initial={animated ? { opacity: 0, scale: 0.8 } : undefined}
      whileInView={animated ? { opacity: 1, scale: 1 } : undefined}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Editorial geometric diagonal arrow */}
      <motion.path
        d="M16 48L48 16M48 16H20M48 16V44"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        initial={animated ? { pathLength: 0 } : undefined}
        whileInView={animated ? { pathLength: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

