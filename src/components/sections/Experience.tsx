"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { experiences } from "@/data/experience";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full bg-[#050505] text-white py-24 sm:py-32 px-4 sm:px-6 md:px-12 border-t border-white/10 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Header & Section Counter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex flex-col gap-3">
            <SectionLabel number="03" total="05" title="CAREER TIMELINE" theme="dark" sectionId="experience" />
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase">
              WORK EXPERIENCE
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 max-w-xs sm:text-right">
            VERIFIED INDUSTRY ROLES & TECHNICAL CONTRIBUTIONS
          </p>
        </div>

        {/* Editorial Experience Timeline List */}
        <div className="flex flex-col divide-y divide-white/10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              {/* Left Column (4 cols): Number, Company & Duration */}
              <div className="lg:col-span-5 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-neutral-400">
                    0{index + 1}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full border border-white/20 text-[10px] font-mono tracking-widest uppercase text-neutral-300">
                    {exp.periodLabel}
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide mt-1 group-hover:text-white transition-colors">
                  {exp.company}
                </h3>

                <div className="flex flex-col gap-1 font-mono text-xs text-neutral-400 mt-1">
                  <div className="text-white font-semibold flex items-center gap-1.5">
                    <span>{exp.role}</span>
                  </div>
                  <div className="flex items-center gap-4 text-neutral-400 text-[11px] mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column (7 cols): Responsibilities Bullet List */}
              <div className="lg:col-span-7 flex flex-col gap-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  KEY RESPONSIBILITIES & SYSTEM IMPACT
                </span>

                <ul className="flex flex-col gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start gap-3 text-sm sm:text-base text-neutral-300 font-light leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-1 opacity-70" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

