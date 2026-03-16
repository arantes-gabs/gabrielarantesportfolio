"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LanguageSwitch from "./LanguageSwitch";
import { useAppTranslation } from "@/lib/i18n/useAppTranslation";

gsap.registerPlugin(ScrollTrigger);

export default function ResumePage() {
  const { t } = useAppTranslation();
  const rootRef = useRef(null);
  const whatsappHref = `https://wa.me/5561999945993?text=${encodeURIComponent(
    t("links.whatsappResumeMessage")
  )}`;
  const translatedExperiences = t("resume.experiences", { returnObjects: true });
  const experiences = Array.isArray(translatedExperiences) ? translatedExperiences : [];
  const translatedSkills = t("resume.skills", { returnObjects: true });
  const skills = Array.isArray(translatedSkills) ? translatedSkills : [];
  const translatedEducation = t("resume.education", { returnObjects: true });
  const education = Array.isArray(translatedEducation) ? translatedEducation : [];
  const translatedLanguagesList = t("resume.languagesList", { returnObjects: true });
  const languagesList = Array.isArray(translatedLanguagesList) ? translatedLanguagesList : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".resume-reveal");
      gsap.from(items, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 70%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0D0D0D] px-6 py-12 text-[#F5F5F5] md:px-12 md:py-16">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#F97316]/14 blur-3xl" />
      <div className="pointer-events-none absolute -right-44 top-56 h-[28rem] w-[28rem] rounded-full bg-[#FB923C]/12 blur-3xl" />

      <div ref={rootRef} className="relative z-10 mx-auto max-w-7xl">
        <header className="resume-reveal rounded-3xl border border-[#262626] bg-[#1C1C1C]/88 p-8 md:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#A3A3A3]">{t("resume.webResumeLabel")}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#F5F5F5] md:text-6xl">Gabriel Arantes</h1>
            <p className="mt-4 max-w-3xl text-lg text-[#D4D4D4] md:text-2xl">{t("resume.headline")}</p>
          </div>

          <div className="mt-8 rounded-2xl border border-[#262626] bg-[#141414]/74 p-4 md:p-5">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                className="inline-flex items-center rounded-full border border-[#262626] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F5F5] transition-colors hover:border-[#F97316]/70"
                href="/"
              >
                {t("resume.backHome")}
              </Link>
              <a
                className="inline-flex items-center rounded-full border border-[#F97316]/75 bg-[#F97316]/18 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F5F5] transition-colors hover:border-[#FB923C] hover:bg-[#FB923C]/24"
                href={whatsappHref}
                rel="noreferrer noopener"
                target="_blank"
              >
                {t("resume.contactButton")}
              </a>
              <LanguageSwitch />
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="resume-reveal space-y-8 lg:col-span-8">
            <article className="rounded-3xl border border-[#262626] bg-[#1C1C1C]/84 p-7 md:p-10">
              <p className="text-xs uppercase tracking-[0.36em] text-[#A3A3A3]">{t("resume.sections.profile")}</p>
              <p className="mt-5 text-[#D4D4D4] md:text-lg">{t("resume.profileText")}</p>
            </article>

            <article className="rounded-3xl border border-[#262626] bg-[#1C1C1C]/84 p-7 md:p-10">
              <p className="text-xs uppercase tracking-[0.36em] text-[#A3A3A3]">{t("resume.sections.experience")}</p>
              <div className="relative mt-8 space-y-8 pl-6">
                <div className="absolute bottom-1 left-0 top-1 w-px bg-[#262626]" />
                {experiences.map((item) => (
                  <div key={`${item.company}-${item.role}-${item.period}`} className="relative">
                    <div className="absolute -left-[28px] top-2 h-3 w-3 rounded-full bg-[#F97316]" />
                    <p className="text-xs uppercase tracking-[0.28em] text-[#A3A3A3]">{item.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-[#F5F5F5]">{item.role}</h3>
                    <p className="mt-1 text-sm text-[#D4D4D4]">
                      {item.company} | {item.mode}
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-[#D4D4D4]">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-[#262626] bg-[#1C1C1C]/84 p-7 md:p-10">
              <p className="text-xs uppercase tracking-[0.36em] text-[#A3A3A3]">{t("resume.sections.education")}</p>
              <div className="mt-6 space-y-6">
                {education.map((item, index) => (
                  <div
                    key={item.title}
                    className={`rounded-2xl border p-5 ${
                      index === 0
                        ? "border-[#F97316]/45 bg-[linear-gradient(135deg,rgba(28,28,28,0.95),rgba(38,25,18,0.62))]"
                        : "border-[#262626] bg-[#141414]/78"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-[#A3A3A3]">{item.period}</p>
                    <h3 className="mt-2 text-xl font-semibold text-[#F5F5F5]">{item.title}</h3>
                    <p className="mt-1 text-sm text-[#D4D4D4]">{item.institution}</p>
                    <p className="mt-3 text-[#A3A3A3]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="resume-reveal space-y-8 lg:col-span-4">
            <article className="rounded-3xl border border-[#262626] bg-[#1C1C1C]/84 p-7">
              <p className="text-xs uppercase tracking-[0.36em] text-[#A3A3A3]">{t("resume.sections.contact")}</p>
              <div className="mt-5 space-y-4 text-sm text-[#D4D4D4]">
                <p>{t("resume.contact.city")}</p>
                <a className="block hover:text-[#F5F5F5]" href="tel:+5561999945993">
                  +55 (61) 99994-5993
                </a>
                <a className="block break-all hover:text-[#F5F5F5]" href="mailto:gabriel.stahl61@gmail.com">
                  gabriel.stahl61@gmail.com
                </a>
                <a
                  className="block hover:text-[#F5F5F5]"
                  href="https://www.linkedin.com/in/gabriel-bensuaski/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  className="block hover:text-[#F5F5F5]"
                  href="https://github.com/arantes-gabs"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </article>

            <article className="rounded-3xl border border-[#262626] bg-[#1C1C1C]/84 p-7">
              <p className="text-xs uppercase tracking-[0.36em] text-[#A3A3A3]">{t("resume.sections.skills")}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    className="rounded-full border border-[#262626] bg-[#141414]/78 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[#D4D4D4]"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-[#262626] bg-[#1C1C1C]/84 p-7">
              <p className="text-xs uppercase tracking-[0.36em] text-[#A3A3A3]">{t("resume.sections.languages")}</p>
              <div className="mt-5 space-y-2 text-[#D4D4D4]">
                {languagesList.map((language) => (
                  <p key={language}>{language}</p>
                ))}
              </div>
            </article>
          </aside>
        </section>
      </div>
    </main>
  );
}
