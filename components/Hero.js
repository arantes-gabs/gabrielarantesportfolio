"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const whatsappHref =
  "https://wa.me/5561999945993?text=Oi%20Gabriel!%20Vim%20pelo%20seu%20portfolio%20e%20quero%20falar%20sobre%20um%20projeto.";
const linkedinHref = "https://www.linkedin.com/in/gabriel-bensuaski/";
const githubHref = "https://github.com/arantes-gabs";

export default function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-fade-item", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-[#16110F]"
    >
      <div className="hero-backdrop absolute inset-0">
        <div className="absolute inset-0 bg-[#17120F]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.016)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />
        <div className="absolute left-1/2 top-1/2 h-[62%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[46px] border border-[#2A2A2A]/80 bg-[#1A1512]/70" />
        <div className="absolute left-[8%] top-[16%] h-36 w-36 rotate-12 rounded-[24px] border border-[#2A2A2A] bg-[#1E1713]/82" />
        <div className="absolute right-[9%] bottom-[14%] h-40 w-40 rounded-full border border-[#3C2A1D]" />
        <div className="absolute left-[30%] top-[14%] h-9 w-9 rounded-full border border-[#FF6A00]/45" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#FF6A00]/70" />
      </div>
      <div className="hero-content relative z-10 px-6 text-center">
        <p className="hero-fade-item mb-5 text-xs font-semibold uppercase tracking-[0.55em] text-[#A3A3A3]">
          Desenvolvedor front-end
        </p>
        <h1 className="hero-fade-item text-4xl font-semibold tracking-tight text-[#F5F5F5] md:text-7xl">
          Gabriel Arantes
        </h1>
        <p className="hero-fade-item mt-4 text-sm text-[#A3A3A3] md:text-base">
          Construindo interfaces com narrativa visual, performance e foco em resultado.
        </p>

        <div className="hero-fade-item mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            className="inline-flex items-center rounded-full border border-[#FF6A00]/90 bg-[#FF6A00] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F5F5] transition-transform duration-300 hover:-translate-y-0.5 hover:border-[#FF8A3D] hover:bg-[#FF8A3D]"
            href={whatsappHref}
            rel="noreferrer noopener"
            target="_blank"
          >
            Entrar em contato
          </a>
          <Link
            className="inline-flex items-center rounded-full border border-[#262626] bg-[#1C1C1C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F5F5] transition-transform duration-300 hover:-translate-y-0.5 hover:border-[#FF6A00]/70"
            href="/curriculo"
          >
            Ver currículo
          </Link>
          <a
            className="inline-flex items-center rounded-full border border-[#FF6A00]/60 bg-[#FF6A00]/14 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF8A3D] transition-transform duration-300 hover:-translate-y-0.5 hover:border-[#FF8A3D]"
            href="#projetos"
          >
            Ver projetos
          </a>
        </div>
      </div>

      <div className="hero-fade-item absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        <a
          aria-label="LinkedIn"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2A2A2A] bg-[#151515]/92 text-[#F5F5F5] transition-colors hover:border-[#FF6A00] hover:text-[#FF8A3D]"
          href={linkedinHref}
          rel="noreferrer noopener"
          target="_blank"
        >
          <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.1 10.2H5.56V18H8.1V10.2ZM6.83 6.14A1.47 1.47 0 1 0 6.83 9.08A1.47 1.47 0 1 0 6.83 6.14ZM18.44 13.7C18.44 11.34 17.93 9.52 15.17 9.52C13.84 9.52 12.94 10.25 12.58 10.95H12.54V10.2H10.11V18H12.65V14.14C12.65 13.12 12.84 12.13 14.1 12.13C15.34 12.13 15.36 13.29 15.36 14.2V18H17.9V13.26L18.44 13.7Z" />
          </svg>
        </a>

        <a
          aria-label="GitHub"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2A2A2A] bg-[#151515]/92 text-[#F5F5F5] transition-colors hover:border-[#FF6A00] hover:text-[#FF8A3D]"
          href={githubHref}
          rel="noreferrer noopener"
          target="_blank"
        >
          <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.58 2 12.23C2 16.75 4.87 20.57 8.84 21.92C9.34 22.02 9.52 21.7 9.52 21.43C9.52 21.18 9.51 20.5 9.51 19.73C6.73 20.35 6.14 18.37 6.14 18.37C5.68 17.16 5.03 16.84 5.03 16.84C4.12 16.19 5.1 16.2 5.1 16.2C6.11 16.27 6.64 17.27 6.64 17.27C7.53 18.84 8.97 18.38 9.55 18.12C9.64 17.45 9.9 16.99 10.19 16.72C7.97 16.46 5.62 15.56 5.62 11.56C5.62 10.42 6.01 9.48 6.65 8.74C6.55 8.48 6.2 7.42 6.75 5.98C6.75 5.98 7.59 5.71 9.5 7.05C10.29 6.82 11.14 6.71 12 6.71C12.86 6.71 13.71 6.82 14.5 7.05C16.41 5.71 17.25 5.98 17.25 5.98C17.8 7.42 17.45 8.48 17.35 8.74C17.99 9.48 18.38 10.42 18.38 11.56C18.38 15.57 16.03 16.45 13.8 16.72C14.17 17.04 14.5 17.68 14.5 18.66C14.5 20.06 14.49 21.14 14.49 21.43C14.49 21.7 14.67 22.03 15.18 21.92C19.14 20.57 22 16.75 22 12.23C22 6.58 17.52 2 12 2Z" />
          </svg>
        </a>
      </div>
    </section>
  );
}

