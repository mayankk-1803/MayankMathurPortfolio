"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [stage, setStage] = useState<"letters" | "exit">("letters");

  const firstName = "MAYANK";
  const lastName = "MATHUR";

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Sequence timing: reveal letters, hold briefly, then exit curtain
    const holdTimer = setTimeout(() => {
      setStage("exit");
    }, 2000);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: 0.2 + i * 0.06,
        ease: "easeOut",
      },
    }),
  };

  const handleSkip = () => {
    setStage("exit");
    setTimeout(onComplete, 400);
  };

  return (
    <AnimatePresence>
      {stage !== "exit" ? (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          onClick={handleSkip}
          className="fixed inset-0 z-50 bg-[#050505] text-white flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden"
        >
          {/* Subtle noise/grid ambient layer */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          {/* Centered Large Editorial Typography */}
          <div className="flex flex-col items-center justify-center text-center px-6">
            {/* Top Monogram / Studio Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-display text-sm tracking-widest text-white/80"
            >
              MM
            </motion.div>

            {/* MAYANK MATHUR Letter Reveal */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              {/* MAYANK */}
              <div className="flex overflow-hidden">
                {firstName.split("").map((letter, i) => (
                  <motion.span
                    key={`first-${i}`}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* MATHUR */}
              <div className="flex overflow-hidden">
                {lastName.split("").map((letter, i) => (
                  <motion.span
                    key={`last-${i}`}
                    custom={i + firstName.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white/90 inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Subtitle / Role Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              className="mt-6 flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/50"
            >
              <span>SOFTWARE DEVELOPER</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>EDITORIAL PORTFOLIO</span>
            </motion.div>
          </div>

          {/* Bottom subtle tap to skip prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1.4 }}
            className="absolute bottom-6 font-mono text-[9px] uppercase tracking-widest text-white/40"
          >
            CLICK ANYWHERE TO ENTER
          </motion.div>
        </motion.div>
      ) : (
        /* Top Curtain Reveal Mask Transition */
        <motion.div
          key="intro-curtain"
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-[#050505] pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
}
