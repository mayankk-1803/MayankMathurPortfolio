"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Project } from "@/data/projects";
import ProjectDetails from "./ProjectDetails";
import ProjectPreview from "./ProjectPreview";

interface ProjectRowProps {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export default function ProjectRow({
  project,
  isOpen,
  onToggle,
  index,
}: ProjectRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative border-b border-black/15 last:border-b-0">
      {/* Interactive Row Header */}
      <div
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className={`relative py-8 sm:py-12 px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer transition-colors duration-300 select-none ${
          isOpen ? "bg-[#F7F8F9]" : isHovered ? "bg-black/[0.02]" : "bg-transparent"
        }`}
      >
        {/* Left: Project Number + Large Title */}
        <div className="flex items-baseline gap-4 sm:gap-8">
          <span className="font-mono text-xs sm:text-sm text-[#777777] font-semibold w-8">
            0{index + 1}
          </span>
          <motion.h3
            animate={{ x: isHovered ? 8 : 0 }}
            transition={{ duration: 0.2 }}
            className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight transition-colors duration-200 ${
              isOpen || isHovered ? "text-[#050505]" : "text-[#222222]"
            }`}
          >
            {project.title}
          </motion.h3>
        </div>

        {/* Right: Category + Expand Indicator */}
        <div className="flex items-center justify-between sm:justify-end gap-6 pl-12 sm:pl-0">
          <span className="font-mono text-xs uppercase tracking-wider text-[#777777] max-w-xs text-right hidden md:inline">
            {project.category}
          </span>

          <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-[#090909] bg-white shadow-2xs group-hover:scale-105 transition-transform shrink-0">
            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </div>
        </div>

        {/* Desktop Hover Floating Preview Box (Follows cursor subtly) */}
        <AnimatePresence>
          {isHovered && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                left: `${mousePos.x + 30}px`,
                top: `${mousePos.y - 80}px`,
              }}
              className="hidden lg:block absolute pointer-events-none z-30 w-72 h-44 shadow-2xl rounded-2xl overflow-hidden border border-black/20"
            >
              <ProjectPreview project={project} isThumbnail={true} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Expanded Details Panel */}
      <AnimatePresence>
        {isOpen && <ProjectDetails project={project} />}
      </AnimatePresence>
    </div>
  );
}
