"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  {
    value: 40,
    prefix: "",
    suffix: "+",
    label: "Automations Deployed",
  },
  {
    value: 3,
    prefix: "",
    suffix: "x",
    label: "Average ROI",
  },
  {
    value: 2,
    prefix: "< ",
    suffix: " wks",
    label: "Time to First Output",
  },
];

function formatStat(prefix: string, value: number, suffix: string) {
  return `${prefix}${Math.round(value)}${suffix}`;
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftItemRefs = useRef<(HTMLElement | null)[]>([]);
  const visualRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statValueRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const leftItems = leftItemRefs.current.filter(Boolean) as HTMLElement[];

      gsap.fromTo(
        leftItems,
        { autoAlpha: 0, x: -40 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.12,
            clearProps: "transform",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        visualRef.current,
        { autoAlpha: 0, scale: 0.9 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      stats.forEach((stat, index) => {
        const element = statValueRefs.current[index];

        if (!element) {
          return;
        }

        const counter = { value: 0 };
        element.textContent = formatStat(stat.prefix, 0, stat.suffix);

        gsap.to(counter, {
          value: stat.value,
          duration: 1.4,
          ease: "power2.out",
          onUpdate: () => {
            element.textContent = formatStat(
              stat.prefix,
              counter.value,
              stat.suffix,
            );
          },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p
            ref={(element) => {
              leftItemRefs.current[0] = element;
            }}
            className="text-xs uppercase tracking-[0.3em] text-accent/60 opacity-0 will-change-transform"
          >
            WHY WEMIAN LABS
          </p>
          <h2
            ref={(element) => {
              leftItemRefs.current[1] = element;
            }}
            className="mt-5 max-w-2xl font-heading text-3xl font-bold leading-tight text-light opacity-0 will-change-transform md:text-5xl"
          >
            We don&apos;t sell hours. We sell outcomes.
          </h2>

          <div
            ref={(element) => {
              leftItemRefs.current[2] = element;
            }}
            className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-light/70 opacity-0 will-change-transform"
          >
            <p>
              Most agencies deliver deliverables. We deliver operational change.
              The difference is that our work keeps generating value after the
              invoice is paid.
            </p>
            <p>
              We operate at the intersection of automation, AI, and marketing —
              because isolated tactics don&apos;t move the needle. Integrated
              systems do.
            </p>
          </div>

          <div
            ref={(element) => {
              statsRef.current = element;
              leftItemRefs.current[3] = element;
            }}
            className="mt-10 flex flex-wrap gap-8 opacity-0 will-change-transform"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="min-w-[120px]">
                <span
                  ref={(element) => {
                    statValueRefs.current[index] = element;
                  }}
                  className="block font-heading text-3xl font-bold text-accent"
                >
                  {formatStat(stat.prefix, 0, stat.suffix)}
                </span>
                <span className="mt-2 block text-xs uppercase tracking-[0.18em] text-light/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={visualRef}
          className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-3xl border border-light/[0.06] bg-light/[0.03] opacity-0 will-change-transform"
          aria-hidden="true"
        >
          <div className="absolute inset-8 rounded-[2rem] border border-accent/10" />
          <div className="about-float absolute left-[18%] top-[24%] h-[56%] w-[24%] origin-center rotate-[-18deg] rounded-[1.75rem] bg-accent shadow-[0_0_80px_rgba(230,255,75,0.12)]" />
          <div className="about-float about-float-delayed absolute left-[39%] top-[32%] h-[48%] w-[23%] origin-center rotate-[18deg] rounded-[1.75rem] bg-accent/40" />
          <div className="about-float about-float-slow absolute left-[58%] top-[22%] h-[58%] w-[24%] origin-center rotate-[-14deg] rounded-[1.75rem] bg-accent/15" />
          <div className="absolute bottom-10 left-10 right-10 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
        </div>
      </div>
    </section>
  );
}
