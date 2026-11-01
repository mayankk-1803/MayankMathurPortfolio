"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectPreviewProps {
  project: Project;
  className?: string;
  isThumbnail?: boolean;
}

export default function ProjectPreview({
  project,
  className = "",
  isThumbnail = false,
}: ProjectPreviewProps) {
  const [imageError, setImageError] = useState(false);
  const isContain = project.imageFit === "contain" || project.id === "ai-saas";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-black/15 bg-[#0C0D0E] flex items-center justify-center select-none ${
        isThumbnail
          ? "h-44 sm:h-48"
          : "aspect-[16/9.5] sm:aspect-[16/9] min-h-[220px] max-h-[380px]"
      } ${className}`}
    >
      {!imageError ? (
        <div
          className={`relative w-full h-full flex items-center justify-center overflow-hidden ${
            isContain ? (isThumbnail ? "p-1.5" : "p-3 sm:p-4") : ""
          }`}
        >
          <Image
            src={project.imagePath}
            alt={`${project.title} — Interface Screenshot`}
            fill
            loading="lazy"
            sizes={isThumbnail ? "320px" : "(max-width: 768px) 100vw, 650px"}
            className={`${
              isContain
                ? "object-contain object-center"
                : "object-cover object-top"
            } transition-transform duration-500 group-hover:scale-[1.02]`}
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#ECECED] via-[#DFE0E2] to-[#CFD0D4]">
          <div className="flex items-center justify-between border-b border-black/10 pb-2 font-mono text-xs text-[#090909]">
            <span>PROJECT {project.number}</span>
            <span className="text-[10px] text-[#555555]">{project.role}</span>
          </div>
          <div className="my-auto">
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#555555]">
              {project.category}
            </span>
            <h4 className="font-display text-xl text-[#090909] tracking-tight">
              {project.title}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}
