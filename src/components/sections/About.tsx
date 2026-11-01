"use client";

import { motion } from "framer-motion";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import { biography, expertiseAreas } from "@/data/skills";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#050505] text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 flex flex-col justify-between overflow-hidden scroll-mt-20"
    >
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-10 sm:gap-16">
        {/* Top Section Counter */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <SectionLabel number="02" total="05" title="ABOUT THE ENGINEER" theme="dark" sectionId="about" />
          <span className="font-mono text-xs text-neutral-400 tracking-widest hidden sm:inline">
            CORE IDENTITY & ARCHITECTURE
          </span>
        </div>

        {/* Massive Dominant Heading: /ABOUT */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl xs:text-6xl sm:text-8xl md:text-9xl lg:text-[11vw] leading-none tracking-tighter text-white uppercase select-none"
          >
            /ABOUT
          </motion.h2>
        </div>

        {/* Asymmetrical Two-Column Content Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start pt-2 sm:pt-4">
          {/* Left Column (5 cols): Large Geometric Arrow + Role Highlight */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6 sm:gap-8 select-none w-full">
            {/* Geometric Arrow */}
            <div className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] flex items-center justify-center">
              <Arrow
                size={56}
                direction="up-right"
                className="text-white hover:text-white/80 transition-colors sm:hidden"
              />
              <Arrow
                size={110}
                direction="up-right"
                className="text-white hover:text-white/80 transition-colors hidden sm:block"
              />
            </div>

            {/* Current Active Role Stamp */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-5 sm:p-6 rounded-2xl border border-white/15 bg-white/[0.03] flex flex-col gap-3 w-full max-w-md"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400">
                <Briefcase className="w-4 h-4 text-white" />
                <span>CURRENT PRODUCTION ROLE</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-white tracking-wide">
                SOFTWARE DEVELOPER
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                NetScale Software Private Limited
              </p>
              <div className="font-mono text-xs text-neutral-400 flex items-center justify-between border-t border-white/10 pt-3 mt-1">
                <span>AUGUST 2026 – PRESENT</span>
                <span className="text-emerald-400 font-semibold">ACTIVE</span>
              </div>
            </motion.div>

            {/* Education Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col gap-2 w-full max-w-md"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400">
                <GraduationCap className="w-4 h-4 text-white" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <div className="font-display text-lg sm:text-xl text-white">
                {biography.education.degree}
              </div>
              <p className="text-xs text-neutral-400 font-light">
                {biography.education.institution}
              </p>
              <div className="font-mono text-xs text-neutral-400 border-t border-white/5 pt-2 mt-1 flex justify-between">
                <span>BATCH: {biography.education.period}</span>
                <span className="text-neutral-400">{biography.education.status}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (7 cols): Biography, Expertise, Engineering Mindset */}
          <div className="lg:col-span-7 flex flex-col gap-8 w-full">
            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
                BIOGRAPHY & ENGINEERING PHILOSOPHY
              </span>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-200 font-light leading-relaxed">
                {biography.summary}
              </p>
            </motion.div>

            {/* Core Engineering Disciplines */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-4 border-t border-white/10 pt-8"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
                <Award className="w-4 h-4 text-white" />
                <span>TECHNICAL EXPERTISE DOMAINS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {expertiseAreas.map((area, idx) => (
                  <div
                    key={area}
                    className="p-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition-colors flex items-center justify-between"
                  >
                    <span className="font-display text-base tracking-wide text-white">
                      {area}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400">
                      0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technical Methodology Statement */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="border-t border-white/10 pt-6 flex flex-col gap-2 font-mono text-xs text-neutral-400 leading-relaxed"
            >
              <span className="text-white uppercase tracking-wider font-semibold">
                SYSTEM DESIGN PRINCIPLES:
              </span>
              <p>
                Strict adherence to modular architectures, non-blocking asynchronous event loops,
                cache-first query patterns, automated Dockerized deployment containers, and resilient API routing.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Separator Line */}
      <div className="w-full max-w-7xl mx-auto border-t border-white/10 mt-16 pt-6 flex items-center justify-between font-mono text-xs text-neutral-400">
        <span>02 / 05</span>
        <span>EXPERIENCE TRANSITION →</span>
      </div>
    </section>
  );
}

