"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAppTranslation } from "@/lib/i18n/useAppTranslation";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const { t } = useAppTranslation();
  const sectionRef = useRef(null);
  const translatedItems = t("projects.items", { returnObjects: true });
  const projects = Array.isArray(translatedItems) ? translatedItems : [];
  const cursorLabel = t("projects.cursorLabel");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");

      gsap.from(cards, {
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="relative z-10 bg-[#0D0D0D] px-6 py-24 md:px-14 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.4em] text-[#A3A3A3]">{t("projects.sectionLabel")}</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#F5F5F5] md:text-6xl">
          {t("projects.title")}
        </h2>

        <div className="mt-16">
          {projects.map((project) => (
            <a
              className="project-card group relative block overflow-hidden rounded-3xl border border-[#262626] bg-[#1C1C1C] p-8 transition-colors duration-300 hover:border-[#FF6A00]/85 hover:bg-[#202020] md:p-12"
              data-cursor-target
              data-cursor-label={cursorLabel}
              href={project.href}
              key={`${project.title}-${project.href}`}
              rel="noreferrer noopener"
              target="_blank"
            >
              <div className="pointer-events-none absolute inset-[-18%] z-0 bg-[#FF6A00]/14 opacity-70 blur-3xl transition-opacity duration-300 group-hover:opacity-95" />
              <div className="relative z-10">
                <div className="mb-10 flex items-center justify-between gap-4">
                  <div className="inline-flex rounded-full border border-[#FF6A00]/50 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#FF8A3D]">
                    {project.label}
                  </div>
                  <div className="rounded-xl border border-[#2A2A2A] bg-[#141414] p-2 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <Image
                      alt="TimeSlot logo"
                      className="h-8 w-auto md:h-10"
                      height={40}
                      src="/logo-timeslot.png"
                      width={140}
                    />
                  </div>
                </div>
                <h3 className="text-4xl font-semibold tracking-tight text-[#F5F5F5] md:text-6xl">{project.title}</h3>
                <p className="mt-6 max-w-3xl text-lg text-[#D4D4D4] md:text-2xl">{project.summary}</p>
                <p className="mt-4 max-w-3xl text-base text-[#A3A3A3] md:text-lg">{project.detail}</p>
                <p className="mt-8 text-xs uppercase tracking-[0.32em] text-[#A3A3A3]">{project.stack}</p>
                <p className="mt-12 text-xs uppercase tracking-[0.28em] text-[#FF6A00] transition-colors duration-300 group-hover:text-[#FF8A3D]">
                  {t("projects.openProject")}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
