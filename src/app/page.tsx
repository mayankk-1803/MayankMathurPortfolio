"use client";

import { useState } from "react";
import SmoothScrollProvider from "@/components/animations/SmoothScrollProvider";
import IntroScreen from "@/components/sections/IntroScreen";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import ContactForm from "@/components/contact/ContactForm";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <main className="relative min-h-screen w-full bg-[#050505] overflow-x-hidden">
        {/* Page 01: Cinematic Intro Screen */}
        {!introFinished && (
          <IntroScreen onComplete={() => setIntroFinished(true)} />
        )}

        {/* Global Minimal Rounded Navigation */}
        <Navbar onOpenContact={() => setContactOpen(true)} />

        {/* Page 02: Main Hero with Portrait Placeholder & Oversized Marquee */}
        <Hero onOpenContact={() => setContactOpen(true)} />

        {/* Page 03: Full-screen Black Editorial /ABOUT Section */}
        <About />

        {/* Page 04: Editorial Work Experience Timeline */}
        <Experience />

        {/* Page 05: White Selected Works Interactive Projects Section */}
        <Projects onOpenContact={() => setContactOpen(true)} />

        {/* Page 06: Light-grey LET'S WORK TOGETHER Contact & Editorial Footer */}
        <Contact onOpenContact={() => setContactOpen(true)} />

        {/* Contact Form Dialog Overlay */}
        <ContactForm
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
        />
      </main>
    </SmoothScrollProvider>
  );
}
