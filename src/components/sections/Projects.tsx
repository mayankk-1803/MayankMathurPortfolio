"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectRow from "@/components/projects/ProjectRow";
import { projects } from "@/data/projects";

interface ProjectsProps {
  onOpenContact?: () => void;
}

export default function Projects({ onOpenContact }: ProjectsProps) {
  // Only one project expanded at a time; first project can start open or closed
  const [openProjectId, setOpenProjectId] = useState<string | null>("ai-saas");

  const handleToggle = (id: string) => {
    setOpenProjectId(openProjectId === id ? null : id);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-[#FFFFFF] text-[#090909] py-24 sm:py-32 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-12 sm:gap-16">
        {/* Section Header: Statement & Circular CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-black/15 pb-10">
          <div className="flex flex-col gap-4 max-w-2xl">
            <SectionLabel number="04" total="05" title="SELECTED WORKS" theme="light" sectionId="projects" />
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#050505] uppercase">
              FEATURED PROJECTS
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
              Commercial and open-source engineering systems built for high concurrency, low latency, and production reliability.
            </p>
          </div>

          {/* Circular GET IN TOUCH Interaction Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenContact}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-[#050505] bg-[#FFFFFF] hover:bg-[#050505] hover:text-white transition-all duration-300 flex flex-col items-center justify-center p-3 text-center self-start lg:self-auto cursor-pointer shadow-sm group select-none shrink-0"
          >
            <span className="font-display text-sm tracking-wider leading-tight">
              GET IN<br />TOUCH
            </span>
            <ArrowUpRight className="w-4 h-4 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </div>

        {/* Editorial Project Rows List */}
        <div className="w-full border-t border-black/15 flex flex-col">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              isOpen={openProjectId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

