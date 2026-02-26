"use client";

import Link from "next/link";

const whatsappHref =
  "https://wa.me/5561999945993?text=Oi%20Gabriel!%20Vim%20pelo%20seu%20portfolio%20e%20quero%20falar%20sobre%20um%20projeto.";

export default function FloatingNav({ visible }) {
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
          <span className="sm:hidden">Contato</span>
          <span className="hidden sm:inline">Entrar em contato</span>
        </a>
        <Link
          className="inline-flex items-center rounded-full border border-[#2A2A2A] bg-[#1C1C1C] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#F5F5F5] transition-colors hover:border-[#FF6A00]/70 sm:px-4 sm:text-[10px] sm:tracking-[0.16em]"
          href="/curriculo"
        >
          <span className="sm:hidden">Currículo</span>
          <span className="hidden sm:inline">{"Ver curr\u00edculo"}</span>
        </Link>
        <a
          className="inline-flex items-center rounded-full border border-[#FF6A00]/60 bg-[#FF6A00]/14 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#FF8A3D] transition-colors hover:border-[#FF8A3D] sm:px-4 sm:text-[10px] sm:tracking-[0.16em]"
          href="#projetos"
        >
          <span className="sm:hidden">Projetos</span>
          <span className="hidden sm:inline">Ver projetos</span>
        </a>
      </nav>
    </div>
  );
}
