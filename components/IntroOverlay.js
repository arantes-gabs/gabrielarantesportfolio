"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Hero";

gsap.registerPlugin(ScrollTrigger);

const introText =
  "Desenvolvedor front-end focado em performance, detalhe e experiência de uso. Muito prazer!";

const stackLogos = [
  { src: "/react.png", alt: "React", position: "left-[3%] top-[14%] w-16 md:left-[7%] md:top-[16%] md:w-24" },
  { src: "/n8n.png", alt: "N8N", position: "right-[4%] top-[18%] w-16 md:right-[9%] md:top-[20%] md:w-24" },
  { src: "/redux.png", alt: "Redux", position: "left-[5%] bottom-[22%] w-14 md:left-[10%] md:bottom-[22%] md:w-20" },
  { src: "/logrocket.png", alt: "LogRocket", position: "right-[6%] bottom-[26%] w-16 md:right-[12%] md:bottom-[26%] md:w-24" },
  { src: "/html.png", alt: "HTML", position: "left-[50%] -translate-x-1/2 bottom-[8%] w-14 md:bottom-[9%] md:w-20" },
  { src: "/seo.png", alt: "SEO", position: "left-[18%] top-[8%] w-14 md:left-[24%] md:top-[8%] md:w-20" },
  { src: "/ts.png", alt: "TypeScript", position: "right-[20%] top-[9%] w-14 md:right-[28%] md:top-[10%] md:w-20" },
  { src: "/css.png", alt: "CSS", position: "left-[19%] bottom-[34%] w-14 md:left-[26%] md:bottom-[34%] md:w-20" },
  { src: "/js.png", alt: "JavaScript", position: "right-[21%] bottom-[13%] w-14 md:right-[30%] md:bottom-[12%] md:w-20" },
];

export default function IntroOverlay({ onReadingScrollStateChange }) {
  const sceneRef = useRef(null);
  const pinRef = useRef(null);
  const overlayRef = useRef(null);
  const portraitReadRef = useRef(null);
  const textWrapRef = useRef(null);
  const textRef = useRef(null);
  const characters = useMemo(() => introText.split(""), []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const letters = gsap.utils.toArray(".intro-char");
      const logos = gsap.utils.toArray(".stack-logo");
      const heroBackdrop = sceneRef.current?.querySelector(".hero-backdrop");
      const heroContent = sceneRef.current?.querySelector(".hero-content");
      let heroEnd = 0.28;
      let hasPassedHero = false;
      let isScrollingUp = false;
      let navVisible = false;

      const setReadingNavVisible = (nextVisible) => {
        if (navVisible === nextVisible) return;
        navVisible = nextVisible;
        onReadingScrollStateChange?.(nextVisible);
      };
      const syncNavVisibility = () => setReadingNavVisible(hasPassedHero && isScrollingUp);

      setReadingNavVisible(false);

      gsap.set(overlayRef.current, { yPercent: 100 });
      gsap.set(portraitReadRef.current, {
        autoAlpha: 0,
        y: 10,
        scale: 0.92,
        filter: isMobile ? "none" : "blur(12px)",
      });
      gsap.set(textWrapRef.current, { autoAlpha: 0 });
      gsap.set(textRef.current, { autoAlpha: 1 });
      gsap.set(letters, { color: "#3e3e3e", opacity: 0.3, textShadow: "0 0 0 rgba(0,0,0,0)" });
      gsap.set(heroBackdrop, { opacity: 1 });
      gsap.set(heroContent, { autoAlpha: 1, y: 0 });
      gsap.set(logos, {
        autoAlpha: 0,
        y: 26,
        scale: 0.6,
        filter: isMobile ? "none" : "blur(12px)",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sceneRef.current,
          start: "top top",
          end: isMobile ? "+=125%" : "+=170%",
          pin: pinRef.current,
          scrub: isMobile ? 0.25 : true,
          anticipatePin: 1,
          onUpdate: (self) => {
            hasPassedHero = self.progress >= heroEnd;
            syncNavVisibility();
          },
          onLeave: () => {
            hasPassedHero = true;
            syncNavVisibility();
          },
          onEnterBack: () => {
            hasPassedHero = true;
            syncNavVisibility();
          },
          onLeaveBack: () => {
            hasPassedHero = false;
            syncNavVisibility();
          },
        },
      });

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          isScrollingUp = self.direction === -1;
          syncNavVisibility();
        },
      });

      timeline
        .to(overlayRef.current, {
          yPercent: 0,
          duration: 1,
          ease: "none",
        })
        .to(
          heroBackdrop,
          {
            opacity: 0.4,
            duration: 1,
            ease: "none",
          },
          "<"
        )
        .to(
          heroContent,
          {
            autoAlpha: 0.3,
            y: -10,
            duration: 1,
            ease: "none",
          },
          "<"
        )
        .add("hero-end")
        .add("reading-start")
        .to(
          textWrapRef.current,
          {
            autoAlpha: 1,
            duration: 0.2,
            ease: "none",
          },
          ">"
        )
        .to(
          portraitReadRef.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: isMobile ? "none" : "blur(0px)",
            duration: 0.7,
            ease: "none",
          },
          "<0.06"
        )
        .to(
          logos,
          {
            autoAlpha: 0.8,
            y: 0,
            scale: 1,
            filter: isMobile ? "none" : "blur(0px)",
            duration: 1,
            stagger: 0.08,
            ease: "power2.out",
          },
          "<0.08"
        )
        .to(
          letters,
          {
            color: "#FFFFFF",
            opacity: 1,
            textShadow: "0 0 20px rgba(255,106,0,0.22)",
            duration: 1.2,
            stagger: 0.016,
            ease: "none",
          },
          ">"
        )
        .add("reading-end");

      if (timeline.duration() > 0) {
        heroEnd = timeline.labels["hero-end"] / timeline.duration();
      }

      if (!isMobile) {
        logos.forEach((logo, index) => {
          gsap.to(logo, {
            x: index % 2 === 0 ? 5 : -5,
            y: index % 2 === 0 ? -7 : 7,
            duration: 3.8 + index * 0.28,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.03,
          });
        });
      }

    }, sceneRef);

    return () => {
      onReadingScrollStateChange?.(false);
      ctx.revert();
    };
  }, [onReadingScrollStateChange]);

  return (
    <section ref={sceneRef} className="relative">
      <div ref={pinRef} className="relative h-screen overflow-hidden">
        <Hero />

        <div ref={overlayRef} className="pointer-events-none absolute inset-0 z-20 overflow-hidden bg-[#020202]">
          <div className="absolute inset-x-0 top-0 h-px bg-[#FF6A00] shadow-[0_0_40px_rgba(255,106,0,0.6)]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-30">
          {stackLogos.map((logo) => (
            <div className={`stack-logo group pointer-events-none absolute ${logo.position} opacity-0 md:pointer-events-auto`} key={logo.alt}>
              <div className="pointer-events-none absolute inset-[-12px] rounded-2xl bg-[#FF6A00]/35 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#141414]/92 p-2 shadow-[0_8px_18px_rgba(0,0,0,0.52)] backdrop-blur-none transition-all duration-300 md:shadow-[0_14px_35px_rgba(0,0,0,0.62)] md:backdrop-blur-sm group-hover:-translate-y-1 group-hover:scale-[1.04] group-hover:border-[#FF6A00]/70 group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.68),0_0_0_1px_rgba(255,106,0,0.4)]">
                <div className="absolute inset-x-2 top-0 h-px bg-[#FF6A00]/0 transition-opacity duration-300 group-hover:bg-[#FF6A00]/65" />
                <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/0 transition-all duration-500 group-hover:left-[115%] group-hover:bg-white/10" />
                <div className="relative">
                  <Image alt={logo.alt} className="h-auto w-full object-contain" height={140} src={logo.src} width={140} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center px-6">
          <div className="relative max-w-5xl translate-y-8 opacity-0 md:translate-y-10 lg:translate-y-0" ref={textWrapRef}>
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center lg:-top-2">
              <div className="-translate-y-[110%] md:-translate-y-[112%] lg:-translate-y-[106%]">
                <div ref={portraitReadRef}>
                  <Image
                    alt="Gabriel Arantes"
                    className="h-auto w-[155px] md:w-[185px] lg:w-[220px] xl:w-[270px] drop-shadow-[0_18px_30px_rgba(0,0,0,0.58)]"
                    height={700}
                    src="/eu4.png"
                    width={520}
                  />
                </div>
              </div>
            </div>
            <div className="absolute inset-x-[-4%] -inset-y-6 z-10 rounded-[42px] border border-[#2A2A2A] bg-[#050505]/62 shadow-[0_0_90px_rgba(0,0,0,0.65)] backdrop-blur-none md:-inset-y-8 md:backdrop-blur-[1.5px]" />
            <p
              ref={textRef}
              className="relative z-20 text-center text-2xl font-semibold leading-[1.22] tracking-tight whitespace-normal break-words [text-shadow:0_0_30px_rgba(255,106,0,0.22)] md:text-5xl"
            >
              {characters.map((character, index) => (
                <span className="intro-char" key={`${character}-${index}`}>
                  {character}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
