"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import { biography } from "@/data/skills";

interface ContactProps {
  onOpenContact: () => void;
}

export default function Contact({ onOpenContact }: ContactProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "GITHUB",
      value: "github.com/mayankk-1803",
      href: biography.contact.github,
      icon: <GithubIcon className="w-4 h-4" />,
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/mayank-mathur",
      href: biography.contact.linkedin,
      icon: <LinkedinIcon className="w-4 h-4" />,
    },
    {
      label: "EMAIL",
      value: biography.contact.email,
      href: `mailto:${biography.contact.email}`,
      icon: <Mail className="w-4 h-4" />,
    },
    {
      label: "RESUME",
      value: "Download PDF Profile",
      href: biography.contact.resumeUrl,
      download: true,
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full bg-[#DCDDDF] text-[#090909] pt-16 sm:pt-24 md:pt-32 pb-12 px-4 sm:px-6 md:px-12 overflow-hidden select-none scroll-mt-20"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-12 sm:gap-20">
        {/* Top Counter Label */}
        <div className="flex items-center justify-between border-b border-black/15 pb-6">
          <SectionLabel number="05" total="05" title="GET IN TOUCH" theme="light" sectionId="contact" />
          <span className="font-mono text-xs text-[#555555] tracking-widest hidden sm:inline">
            OPEN FOR PRODUCTION ROLES & COLLABORATIONS
          </span>
        </div>

        {/* Main Layout: Diagonal Arrow + Giant Headline + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left / Center (8 cols): Arrow + LET'S WORK TOGETHER */}
          <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-8">
            {/* Diagonal Arrow Graphic */}
            <div className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-black/15 bg-white/40 backdrop-blur-xs flex items-center justify-center self-start sm:self-auto shrink-0">
              <Arrow size={56} direction="up-right" className="text-[#090909] sm:hidden" />
              <Arrow size={90} direction="up-right" className="text-[#090909] hidden sm:block" />
            </div>

            {/* Massive Editorial Headline */}
            <div className="flex flex-col">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tighter text-[#050505] uppercase"
              >
                LET&apos;S WORK
                <br />
                TOGETHER
              </motion.h2>
            </div>
          </div>

          {/* Right (4 cols): CTA Button */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end pb-2 w-full">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenContact}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 rounded-full bg-[#050505] text-white hover:bg-black font-mono text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl flex items-center justify-center gap-3 cursor-pointer select-none"
            >
              <span>SEND ME A MESSAGE</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-black/15 pt-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              download={link.download}
              target={link.download ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-black/10 bg-white/40 hover:bg-white hover:border-black/25 transition-all duration-200 flex flex-col justify-between gap-3 group"
            >
              <div className="flex items-center justify-between text-[#555555]">
                <span className="font-mono text-[10px] uppercase tracking-widest">
                  {link.label}
                </span>
                <span className="text-[#090909] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#090909] truncate">
                {link.icon}
                <span className="truncate">{link.value}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Giant Monogram Typography at Bottom */}
        <div className="w-full overflow-hidden border-t border-black/15 pt-8 select-none">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center items-center"
          >
            <h1 className="font-display text-[15vw] sm:text-[14vw] md:text-[13vw] leading-none text-[#090909] tracking-tighter text-center uppercase whitespace-nowrap opacity-90">
              MAYANK MATHUR
            </h1>
          </motion.div>
        </div>

        {/* Footer Copyright */}
        <div className="border-t border-black/15 pt-8 pb-4 flex items-center justify-center font-mono text-xs text-[#555555] tracking-widest uppercase text-center px-4 leading-relaxed">
          © {currentYear} MAYANK MATHUR. ALL RIGHTS RESERVED.
        </div>
      </div>
    </section>
  );
}
