"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import PortraitPlaceholder from "@/components/ui/PortraitPlaceholder";
import Marquee from "@/components/animations/Marquee";
import SectionLabel from "@/components/ui/SectionLabel";
import { biography } from "@/data/skills";

interface HeroProps {
  onOpenContact?: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[560px] w-full bg-[#DCDDDF] text-[#090909] pt-20 sm:pt-24 lg:pt-24 pb-0 px-4 sm:px-6 md:px-12 flex flex-col justify-between overflow-x-clip select-none"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Layer 1: Giant Background Horizontal Marquee (Positioned behind portrait at chest/shoulder level) */}
      <div className="absolute top-[46%] sm:top-[48%] md:top-[50%] -translate-y-1/2 left-0 right-0 w-full z-10 overflow-hidden pointer-events-none opacity-90 select-none">
        <Marquee
          text="MAYANK MATHUR"
          speedSeconds={35}
          className="text-[14vw] sm:text-[13vw] md:text-[12vw] font-black tracking-tighter"
        />
      </div>

      {/* Hero Top Content Row: Flanks Mayank's Head on Left & Right */}
      <div className="relative z-30 w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-start justify-between gap-6 pt-2">
        {/* Left: Engineering Discipline Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-1 max-w-xs sm:max-w-[280px] md:max-w-xs lg:max-w-sm pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[#090909]/70 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AVAILABLE FOR PRODUCTION ROLES</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-[#090909] uppercase">
            SOFTWARE DEVELOPER
          </h2>
          <p className="font-mono text-xs uppercase tracking-wider text-[#555555]">
            {biography.headline}
          </p>
        </motion.div>

        {/* Right: Editorial Bio Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xs sm:max-w-[300px] md:max-w-sm lg:max-w-md text-left sm:text-right flex flex-col items-start sm:items-end gap-3 pointer-events-auto"
        >
          <p className="text-sm md:text-base font-normal text-[#222222] leading-relaxed">
            &ldquo;{biography.shortIntro}&rdquo;
          </p>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider">
            <button
              onClick={handleScrollToProjects}
              className="inline-flex items-center gap-1.5 text-[#090909] hover:underline font-semibold cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
            <span className="text-black/30">/</span>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 text-[#090909] hover:underline font-semibold cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Layer 2: Main Center Stage — Complete Portrait Visible on Initial Viewport */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-center pointer-events-none"
      >
        <PortraitPlaceholder
          src="/images/mayankmathursubject.png"
          alt="Mayank Mathur — Software Developer"
        />
      </motion.div>

      {/* Architectural Bottom Divider Line (Runs behind portrait) */}
      <div className="absolute bottom-[44px] sm:bottom-[48px] left-0 right-0 z-10 border-t border-black/15 pointer-events-none" />

      {/* Hero Bottom Bar: Section Counter & Scroll Indicator Overlay (Does not push portrait upward) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 z-30 w-full py-3 sm:py-3.5 px-4 sm:px-6 md:px-12 pointer-events-none"
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[#555555]">
          <div className="pointer-events-auto">
            <SectionLabel
              number="01"
              total="05"
              title="OVERVIEW"
              theme="light"
              sectionId="hero"
            />
          </div>

          {/* Right Scroll Indicator */}
          <button
            onClick={handleScrollToAbout}
            className="pointer-events-auto inline-flex items-center gap-2 hover:text-[#090909] transition-colors cursor-pointer"
          >
            <span>SCROLL DOWN</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3.5 h-3.5" />
            </motion.div>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
