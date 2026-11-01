"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "WORK", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-4 sm:px-6 md:px-8 flex justify-center pointer-events-none`}
      >
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full max-w-5xl rounded-full px-5 py-3 transition-all duration-300 flex items-center justify-between border ${
            scrolled
              ? "bg-[#FFFFFF]/90 backdrop-blur-md border-black/15 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              : "bg-[#FFFFFF]/80 backdrop-blur-xs border-black/10"
          }`}
        >
          {/* Left: MM Monogram + Name */}
          <a
            href="#"
            className="flex items-center gap-3 group select-none cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative w-8 h-8 rounded-full bg-[#050505] overflow-hidden border border-black/20 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
              <Image
                src="/images/mayankmathursubject.png"
                alt="Mayank Mathur"
                fill
                sizes="32px"
                className="object-cover object-top"
                priority
              />
            </div>
            <span className="font-display text-base tracking-normal text-[#090909] group-hover:text-black transition-colors">
              MAYANK MATHUR
            </span>
          </a>

          {/* Center: Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#555555]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative py-1 hover:text-[#090909] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#050505] text-white hover:bg-black font-mono text-[11px] uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-xs cursor-pointer"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full border border-black/15 flex items-center justify-center text-[#090909] hover:bg-black/5 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-40 bg-[#FFFFFF] rounded-3xl border border-black/15 p-6 shadow-2xl flex flex-col gap-4 md:hidden"
          >
            <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-widest text-[#090909]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="py-2.5 border-b border-black/5 hover:text-black hover:pl-2 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
              }}
              className="w-full mt-2 py-3 rounded-full bg-[#050505] text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

