"use client";

import { useCallback, useEffect, useState } from "react";
import CustomCursor from "./CustomCursor";
import FloatingNav from "./FloatingNav";
import IntroOverlay from "./IntroOverlay";
import Projects from "./Projects";

export default function LandingPage() {
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const handleReadingNavVisibility = useCallback((visible) => {
    setShowFloatingNav(visible);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = previousRestoration || "auto";
    };
  }, []);

  return (
    <main data-custom-cursor className="relative min-h-screen bg-[#0D0D0D] text-[#F5F5F5]">
      <FloatingNav visible={showFloatingNav} />
      <CustomCursor />
      <IntroOverlay onReadingScrollStateChange={handleReadingNavVisibility} />
      <Projects />
    </main>
  );
}
