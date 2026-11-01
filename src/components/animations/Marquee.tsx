"use client";

import { ReactNode } from "react";

interface MarqueeProps {
  children?: ReactNode;
  text?: string;
  repeat?: number;
  speedSeconds?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function Marquee({
  text = "MAYANK MATHUR",
  repeat = 6,
  speedSeconds = 28,
  direction = "left",
  className = "",
}: MarqueeProps) {
  const items = Array.from({ length: repeat });

  return (
    <div className="relative w-full overflow-hidden select-none pointer-events-none py-2">
      <div
        className="flex w-max"
        style={{
          animation: `marquee-${direction} ${speedSeconds}s linear infinite`,
          willChange: "transform",
        }}
      >
        {items.map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span
              className={`font-display tracking-tight text-[#090909] uppercase leading-none whitespace-nowrap px-4 sm:px-6 md:px-8 ${className}`}
            >
              {text}
            </span>
            <span className="text-[#090909]/40 font-display text-4xl sm:text-6xl md:text-8xl px-2">
              ·
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}

