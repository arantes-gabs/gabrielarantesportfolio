"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useAppTranslation } from "@/lib/i18n/useAppTranslation";

export default function CustomCursor() {
  const { t } = useAppTranslation();
  const cursorRef = useRef(null);
  const labelRef = useRef(null);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const defaultLabel = t("projects.cursorLabel");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updatePointer = () => setIsFinePointer(mediaQuery.matches);

    updatePointer();
    mediaQuery.addEventListener("change", updatePointer);

    return () => mediaQuery.removeEventListener("change", updatePointer);
  }, []);

  useEffect(() => {
    if (!isFinePointer || !cursorRef.current || !labelRef.current) {
      return undefined;
    }

    let cleanupListeners = () => {};

    const ctx = gsap.context(() => {
      const xTo = gsap.quickTo(cursorRef.current, "x", {
        duration: 0.22,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(cursorRef.current, "y", {
        duration: 0.22,
        ease: "power3.out",
      });

      const moveCursor = (event) => {
        xTo(event.clientX);
        yTo(event.clientY);
      };

      const activate = (event) => {
        const label = event.currentTarget?.dataset?.cursorLabel || defaultLabel;
        labelRef.current.textContent = label;

        gsap.to(cursorRef.current, {
          width: 132,
          height: 132,
          duration: 0.25,
          ease: "power3.out",
          backgroundColor: "rgba(255,106,0,0.26)",
          borderColor: "rgba(255,138,61,0.9)",
        });

        gsap.to(labelRef.current, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      const deactivate = () => {
        gsap.to(cursorRef.current, {
          width: 48,
          height: 48,
          duration: 0.25,
          ease: "power3.out",
          backgroundColor: "rgba(255,106,0,0.16)",
          borderColor: "rgba(255,106,0,0.52)",
        });

        gsap.to(labelRef.current, {
          autoAlpha: 0,
          scale: 0.86,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      const targets = Array.from(document.querySelectorAll("[data-cursor-target]"));
      targets.forEach((target) => {
        target.addEventListener("mouseenter", activate);
        target.addEventListener("mouseleave", deactivate);
      });

      window.addEventListener("mousemove", moveCursor);

      cleanupListeners = () => {
        targets.forEach((target) => {
          target.removeEventListener("mouseenter", activate);
          target.removeEventListener("mouseleave", deactivate);
        });
        window.removeEventListener("mousemove", moveCursor);
      };
    }, cursorRef);

    return () => {
      cleanupListeners();
      ctx.revert();
    };
  }, [defaultLabel, isFinePointer]);

  if (!isFinePointer) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#FF6A00]/50 bg-[#FF6A00]/14"
      ref={cursorRef}
    >
      <span className="invisible scale-90 text-[10px] font-semibold tracking-[0.08em] text-[#F5F5F5]" ref={labelRef}>
        {defaultLabel}
      </span>
    </div>
  );
}
