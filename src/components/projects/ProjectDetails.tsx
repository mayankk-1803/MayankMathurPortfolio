"use client";

import { motion } from "framer-motion";
import { ExternalLink, AlertCircle, Compass, ShieldCheck, Clock, UserCheck } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Project } from "@/data/projects";
import ProjectPreview from "./ProjectPreview";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden bg-[#F7F8F9] border-b border-black/15"
    >
      <div className="py-8 sm:py-12 px-4 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column (7 cols): Detailed Breakdown & Actions */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-[#555555] border-b border-black/10 pb-4">
            <span className="flex items-center gap-1.5 font-semibold text-[#090909]">
              <UserCheck className="w-3.5 h-3.5" />
              {project.role}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {project.duration}
            </span>
            <span>·</span>
            <span className="uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Full Description */}
          <p className="text-base sm:text-lg text-[#222222] font-normal leading-relaxed">
            {project.description}
          </p>

          {/* Problem, Solution, Impact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-black/10 py-5">
            {/* Problem */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#555555] font-semibold">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>THE PROBLEM</span>
              </div>
              <p className="text-xs text-[#444444] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#555555] font-semibold">
                <Compass className="w-3.5 h-3.5 text-blue-600" />
                <span>ENGINEERING SOLUTION</span>
              </div>
              <p className="text-xs text-[#444444] leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Impact */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#555555] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>MEASURED IMPACT</span>
              </div>
              <p className="text-xs text-[#090909] font-medium leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#777777]">
              TECHNOLOGY STACK
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white border border-black/15 text-xs font-mono text-[#090909] shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#050505] text-white hover:bg-black font-mono text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm"
              >
                <span>{project.featured ? "Launch Live Platform" : "Live Preview"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-black/20 text-[#090909] hover:bg-black/5 font-mono text-xs uppercase tracking-wider transition-all duration-200 active:scale-95"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column (5 cols): Preview Graphic */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <ProjectPreview project={project} isThumbnail={false} />
        </div>
      </div>
    </motion.div>
  );
}
