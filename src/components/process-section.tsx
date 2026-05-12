"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/components/language-provider";

const processSteps = [
  { number: "01" },
  { number: "02" },
  { number: "03" },
  { number: "04" },
];

export function ProcessSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const steps = stepRefs.current.filter(Boolean) as HTMLDivElement[];
      const circles = circleRefs.current.filter(Boolean) as HTMLDivElement[];
      const lines = lineRefs.current.filter(Boolean) as HTMLDivElement[];
      const textBlocks = textRefs.current.filter(Boolean) as HTMLDivElement[];

      mm.add("(min-width: 1024px)", () => {
        gsap.set(circles, { scale: 0 });
        gsap.set(lines, {
          scaleX: 0,
          scaleY: 1,
          transformOrigin: "left center",
        });
        gsap.set(textBlocks, { autoAlpha: 0, y: 24 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 65%",
            scrub: 1,
          },
        });

        steps.forEach((_, index) => {
          timeline
            .to(circles[index], {
              scale: 1,
              duration: 0.35,
              ease: "back.out(1.7)",
            })
            .to(
              textBlocks[index],
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.45,
                ease: "power3.out",
              },
              "<0.08",
            );

          if (lines[index]) {
            timeline.to(
              lines[index],
              {
                scaleX: 1,
                duration: 0.45,
                ease: "none",
              },
              "<0.12",
            );
          }
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(circles, { scale: 0 });
        gsap.set(lines, {
          scaleX: 1,
          scaleY: 0,
          transformOrigin: "top center",
        });
        gsap.set(textBlocks, { autoAlpha: 0, y: 20 });

        steps.forEach((step, index) => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });

          timeline
            .to(circles[index], {
              scale: 1,
              duration: 0.35,
              ease: "back.out(1.7)",
            })
            .to(
              textBlocks[index],
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.45,
                ease: "power3.out",
              },
              "<0.08",
            );

          if (lines[index]) {
            timeline.to(
              lines[index],
              {
                scaleY: 1,
                duration: 0.45,
                ease: "power2.out",
              },
              "<0.1",
            );
          }
        });
      });
    }, sectionRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="bg-[radial-gradient(circle_at_center,rgba(230,255,75,0.02),transparent_64%)] px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.3em] text-accent/60">
          {t.process.label}
        </p>
        <h2 className="mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight text-light md:text-5xl">
          {t.process.heading}
        </h2>

        <div className="mt-16 flex flex-col lg:flex-row lg:items-start">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              ref={(element) => {
                stepRefs.current[index] = element;
              }}
              className="flex gap-5 pb-12 last:pb-0 lg:flex-1 lg:flex-col lg:gap-6 lg:pb-0 lg:pr-8 last:lg:pr-0"
            >
              <div className="flex flex-col items-center lg:flex-row">
                <div
                  ref={(element) => {
                    circleRefs.current[index] = element;
                  }}
                  className="flex h-12 w-12 flex-shrink-0 scale-0 items-center justify-center rounded-full border-2 border-accent font-heading font-bold text-accent will-change-transform"
                >
                  {step.number}
                </div>

                {index < processSteps.length - 1 ? (
                  <div
                    ref={(element) => {
                      lineRefs.current[index] = element;
                    }}
                    className="mt-4 h-20 w-0 origin-top scale-y-0 border-l-2 border-dashed border-accent/15 will-change-transform lg:ml-5 lg:mt-0 lg:h-0 lg:min-w-0 lg:flex-1 lg:origin-left lg:scale-x-0 lg:scale-y-100 lg:border-l-0 lg:border-t-2"
                    aria-hidden="true"
                  />
                ) : null}
              </div>

              <div
                ref={(element) => {
                  textRefs.current[index] = element;
                }}
                className="max-w-xs opacity-0 will-change-transform"
              >
                <h3 className="text-lg font-bold text-light">
                  {t.process.steps[index].title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-light/60">
                  {t.process.steps[index].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
