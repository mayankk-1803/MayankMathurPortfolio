"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "pill";
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-[#050505] text-white hover:bg-black active:scale-95 px-6 py-3 rounded-full border border-black",
    secondary:
      "bg-[#DCDDDF] text-[#090909] hover:bg-[#C9CACD] active:scale-95 px-6 py-3 rounded-full border border-[#BDBDBD]",
    outline:
      "bg-transparent text-current border border-current hover:bg-black/5 active:scale-95 px-6 py-3 rounded-full",
    pill:
      "bg-white text-black hover:bg-black hover:text-white active:scale-95 px-5 py-2.5 rounded-full border border-[#050505] shadow-xs",
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

