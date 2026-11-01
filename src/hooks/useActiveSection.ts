"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["hero", "about", "experience", "projects", "contact"];

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      // If at bottom of page, activate contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection("contact");
        return;
      }

      // If near the top, activate hero
      if (window.scrollY < 250) {
        setActiveSection("hero");
        return;
      }

      const scrollPos = window.scrollY + window.innerHeight * 0.36;

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}
