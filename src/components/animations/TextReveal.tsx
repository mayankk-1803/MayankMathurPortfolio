"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children?: ReactNode;
  text?: string;
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function TextReveal({
  text,
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  stagger = 0.03,
  as: Component = "div",
}: TextRevealProps) {
  if (text) {
    const letters = text.split("");

    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: stagger,
          delayChildren: delay,
        },
      },
    };

    const letterVariants: Variants = {
      hidden: { opacity: 0, y: "100%" },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          ease: "easeOut",
        },
      },
    };

    return (
      <Component className={`overflow-hidden inline-flex flex-wrap ${className}`}>
        <motion.span
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex flex-wrap"
        >
          {letters.map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </Component>
    );
  }

  return (
    <Component className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </Component>
  );
}
