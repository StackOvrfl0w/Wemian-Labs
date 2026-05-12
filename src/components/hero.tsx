"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { language, t } = useLanguage();
  const rootRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonRefs = useRef<HTMLAnchorElement[]>([]);
  const scrollLineRef = useRef<HTMLDivElement>(null);

  wordRefs.current = [];
  buttonRefs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          pillRef.current,
          { autoAlpha: 0, y: -20 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
        )
        .fromTo(
          wordRefs.current,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.05,
          },
          0.2,
        )
        .fromTo(
          subtextRef.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          0.6,
        )
        .fromTo(
          buttonRefs.current,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            clearProps: "transform",
          },
          0.8,
        )
        .fromTo(
          scrollLineRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.6 },
          1.2,
        );
    }, rootRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section
      ref={rootRef}
      className="flex min-h-screen flex-col justify-center px-6 py-24 md:px-12"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <div
          ref={pillRef}
          className="rounded-full border border-[rgba(230,255,75,0.3)] px-4 py-1.5 text-sm uppercase tracking-wider text-accent opacity-0 will-change-transform"
        >
          {t.hero.pill}
        </div>

        <h1 className="mt-8 max-w-4xl font-heading text-3xl font-bold leading-tight text-light md:text-6xl lg:text-7xl">
          {t.hero.headlineWords.map((word, index) => (
            <span
              key={`${word}-${index}`}
              ref={(element) => {
                if (element) {
                  wordRefs.current.push(element);
                }
              }}
              className={`inline-block opacity-0 ${
                word === t.hero.highlight ? "text-accent" : ""
              } will-change-transform`}
            >
              {word}
              {index < t.hero.headlineWords.length - 1 ? "\u00a0" : ""}
            </span>
          ))}
        </h1>

        <p
          ref={subtextRef}
          className="mt-6 max-w-2xl text-lg text-light/70 opacity-0 will-change-transform md:text-xl"
        >
          {t.hero.subtext}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            ref={(element) => {
              if (element) {
                buttonRefs.current.push(element);
              }
            }}
            href="#contact"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-wider text-dark opacity-0 transition duration-300 ease-wemian hover:bg-light active:scale-[0.97] active:duration-100"
          >
            {t.hero.primary}
          </a>
          <a
            ref={(element) => {
              if (element) {
                buttonRefs.current.push(element);
              }
            }}
            href="#process"
            className="rounded-full border border-[rgba(244,244,244,0.2)] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-light opacity-0 transition duration-300 ease-wemian hover:border-accent hover:text-accent active:scale-[0.97] active:duration-100"
          >
            {t.hero.secondary}
          </a>
        </div>

        <div
          ref={scrollLineRef}
          className="mt-20 h-16 w-px animate-pulse bg-gradient-to-b from-accent to-transparent opacity-0 [animation-duration:2.6s]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
