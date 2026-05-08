"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const textItems = textRefs.current.filter(Boolean) as HTMLElement[];

      gsap.fromTo(
        textItems,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        buttonRef.current,
        { autoAlpha: 0, scale: 0.9 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.8)",
          clearProps: "transform",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-accent px-6 py-24 text-dark md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          ref={(element) => {
            textRefs.current[0] = element;
          }}
          className="font-heading text-3xl font-bold leading-tight opacity-0 will-change-transform md:text-5xl"
        >
          Ready to stop managing and start scaling?
        </h2>
        <p
          ref={(element) => {
            textRefs.current[1] = element;
          }}
          className="mt-4 text-lg text-dark/70 opacity-0 will-change-transform"
        >
          Tell us what&apos;s slowing you down. We&apos;ll tell you exactly what
          to build.
        </p>
        <a
          ref={buttonRef}
          href="mailto:hello@wemianlabs.com"
          className="mt-8 inline-flex rounded-full border-2 border-dark bg-dark px-8 py-3.5 text-base font-semibold text-light opacity-0 transition duration-300 ease-wemian will-change-transform hover:bg-transparent hover:text-dark active:scale-[0.97] active:duration-100 focus-visible:[--focus-ring-color:#1E1C1C]"
        >
          Book a Strategy Call
        </a>
      </div>
    </section>
  );
}
