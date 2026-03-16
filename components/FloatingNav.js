"use client";

import Link from "next/link";
import { useAppTranslation } from "@/lib/i18n/useAppTranslation";

export default function FloatingNav({ visible }) {
  const { t } = useAppTranslation();
  const whatsappHref = `https://wa.me/5561999945993?text=${encodeURIComponent(
    t("links.whatsappPortfolioMessage")
  )}`;
  const resumeHref = t("routes.resume");

  return (
    <div
      className={`fixed inset-x-0 top-4 z-[85] flex justify-center px-4 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
      }`}
    >
      <nav className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] bg-[#111111]/90 p-2 shadow-[0_12px_36px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <a
          className="inline-flex items-center rounded-full border border-[#FF6A00]/90 bg-[#FF6A00] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#F5F5F5] transition-colors hover:border-[#FF8A3D] hover:bg-[#FF8A3D] sm:px-4 sm:text-[10px] sm:tracking-[0.16em]"
          href={whatsappHref}
          rel="noreferrer noopener"
          target="_blank"
        >
          <span className="sm:hidden">{t("floatingNav.contactShort")}</span>
          <span className="hidden sm:inline">{t("floatingNav.contactLong")}</span>
        </a>
        <Link
          className="inline-flex items-center rounded-full border border-[#2A2A2A] bg-[#1C1C1C] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#F5F5F5] transition-colors hover:border-[#FF6A00]/70 sm:px-4 sm:text-[10px] sm:tracking-[0.16em]"
          href={resumeHref}
        >
          <span className="sm:hidden">{t("floatingNav.resumeShort")}</span>
          <span className="hidden sm:inline">{t("floatingNav.resumeLong")}</span>
        </Link>
        <a
          className="inline-flex items-center rounded-full border border-[#FF6A00]/60 bg-[#FF6A00]/14 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#FF8A3D] transition-colors hover:border-[#FF8A3D] sm:px-4 sm:text-[10px] sm:tracking-[0.16em]"
          href="#projetos"
        >
          <span className="sm:hidden">{t("floatingNav.projectsShort")}</span>
          <span className="hidden sm:inline">{t("floatingNav.projectsLong")}</span>
        </a>
      </nav>
    </div>
  );
}
