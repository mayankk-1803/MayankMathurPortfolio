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
      className="relative min-h-[100svh] md:h-[100svh] md:min-h-[560px] w-full bg-[#DCDDDF] text-[#090909] pt-20 sm:pt-24 md:pt-24 pb-4 md:pb-0 px-4 sm:px-6 md:px-12 flex flex-col justify-between overflow-x-clip select-none"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Hero Top Content Row: Flanks Mayank's Head on Left & Right on Desktop; Clean Mobile Sequence on Mobile */}
      <div className="relative z-30 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-6 pt-2">
        {/* Left: Engineering Discipline Tag + Title + Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-1.5 max-w-md md:max-w-xs lg:max-w-sm pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#090909]/70 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AVAILABLE FOR PRODUCTION ROLES</span>
          </div>
          <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-2xl lg:text-3xl tracking-tight text-[#090909] uppercase">
            SOFTWARE DEVELOPER
          </h2>
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#555555]">
            {biography.headline}
          </p>
        </motion.div>

        {/* Right: Editorial Bio Statement + CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-md text-left md:text-right flex flex-col items-start md:items-end gap-3 pointer-events-auto"
        >
          <p className="text-xs xs:text-sm md:text-base font-normal text-[#222222] leading-relaxed">
            &ldquo;{biography.shortIntro}&rdquo;
          </p>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider pt-1">
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

      {/* Main Center Stage: Background Marquee + Foreground Portrait */}
      <div className="relative md:absolute md:bottom-0 md:left-0 md:right-0 z-20 w-full flex flex-col items-center justify-end my-auto md:my-0 pointer-events-none mt-6 sm:mt-8 md:mt-0">
        {/* Layer 1: Giant Background Horizontal Marquee (Independent clipped layer) */}
        <div className="absolute top-[48%] md:top-[50%] -translate-y-1/2 left-0 right-0 w-full z-0 overflow-hidden pointer-events-none opacity-90 select-none">
          <Marquee
            text="MAYANK MATHUR"
            speedSeconds={35}
            className="text-6xl xs:text-7xl sm:text-8xl md:text-[12vw] font-black tracking-tighter"
          />
        </div>

        {/* Layer 2: Hero Portrait Subject (Foreground above marquee, complete head/shoulders/suit) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex items-end justify-center w-full"
        >
          <PortraitPlaceholder
            src="/images/mayankmathursubject.png"
            alt="Mayank Mathur — Software Developer"
          />
        </motion.div>
      </div>

      {/* Architectural Bottom Divider Line (Runs behind portrait on desktop) */}
      <div className="hidden md:block absolute bottom-[44px] sm:bottom-[48px] left-0 right-0 z-10 border-t border-black/15 pointer-events-none" />

      {/* Hero Bottom Bar: Section Counter & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative md:absolute md:bottom-0 md:left-0 md:right-0 z-30 w-full border-t md:border-t-0 border-black/15 py-3 sm:py-3.5 px-4 sm:px-6 md:px-12 mt-4 md:mt-0 pointer-events-none"
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#555555]">
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
            className="pointer-events-auto inline-flex items-center gap-1.5 sm:gap-2 hover:text-[#090909] transition-colors cursor-pointer"
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
