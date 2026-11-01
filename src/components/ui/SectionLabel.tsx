"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";

interface SectionLabelProps {
  number: string;
  total?: string;
  title: string;
  theme?: "light" | "dark";
  className?: string;
  sectionId?: string;
  isActive?: boolean;
}

export default function SectionLabel({
  number,
  total = "05",
  title,
  theme = "light",
  className = "",
  sectionId,
  isActive: explicitIsActive,
}: SectionLabelProps) {
  const isDark = theme === "dark";
  const activeSection = useActiveSection();
  const shouldReduceMotion = useReducedMotion();

  const isActive =
    explicitIsActive !== undefined
      ? explicitIsActive
      : sectionId
      ? activeSection === sectionId
      : false;

  // Dynamic colors: Neon Green (#39FF14) on dark backgrounds, Bright Red (#FF3030) on light backgrounds
  const activeColor = isDark ? "#39FF14" : "#FF3030";
  const activeShadow = isDark
    ? "0 0 10px #39FF14, 0 0 18px rgba(57, 255, 20, 0.5)"
    : "0 0 10px #FF3030, 0 0 18px rgba(255, 48, 48, 0.45)";
  const coreShadow = isDark
    ? "0 0 6px #39FF14"
    : "0 0 6px #FF3030";

  return (
    <div
      className={`inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] select-none ${
        isDark ? "text-neutral-400" : "text-neutral-500"
      } ${className}`}
    >
      <span className="font-semibold">
        {number}/{total}
      </span>

      {/* Dynamic Animated Active Indicator Dot */}
      {isActive ? (
        <span className="relative flex items-center justify-center w-2.5 h-2.5">
          {/* Subtle expanding halo */}
          <motion.span
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: [1, 1.45, 1],
                    opacity: [0.65, 0.25, 0.65],
                  }
            }
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full blur-[2px]"
            style={{
              backgroundColor: activeColor,
              boxShadow: activeShadow,
            }}
          />

          {/* Inner pulsating core */}
          <motion.span
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [1, 0.55, 1],
                    scale: [1, 1.15, 1],
                  }
            }
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: activeColor,
              boxShadow: coreShadow,
            }}
          />
        </span>
      ) : (
        <span
          className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
            isDark ? "bg-white" : "bg-black"
          }`}
        />
      )}

      <span>{title}</span>
    </div>
  );
}
