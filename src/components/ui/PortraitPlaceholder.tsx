"use client";

import { useState } from "react";
import Image from "next/image";

interface PortraitProps {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export default function PortraitPlaceholder({
  src = "/images/mayankmathursubject.png",
  alt = "Mayank Mathur — Professional Portrait",
  className = "",
  priority = true,
}: PortraitProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`relative flex items-end justify-center select-none pointer-events-none w-full max-w-[340px] sm:max-w-[440px] md:max-w-[540px] lg:max-w-[640px] xl:max-w-[680px] h-[calc(100svh-260px)] sm:h-[calc(100svh-200px)] md:h-[calc(100svh-130px)] lg:h-[calc(100svh-110px)] xl:h-[calc(100svh-100px)] max-h-[420px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[680px] xl:max-h-[720px] min-h-[320px] aspect-[1215/1295] ${className}`}
    >
      {!imageError ? (
        <div className="relative w-full h-full flex items-end justify-center">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 540px, 680px"
            className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)] select-none transition-all duration-300"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="relative w-full h-full flex items-center justify-center text-center p-6 border border-black/10 rounded-3xl bg-neutral-200/50">
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-600">
            Portrait Asset Unavailable
          </span>
        </div>
      )}
    </div>
  );
}
