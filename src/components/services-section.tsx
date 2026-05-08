"use client";

import { useEffect, useRef } from "react";
import { BarChart3, Brain, Cog, Share2, type LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Service = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    number: "01",
    icon: Cog,
    title: "Process Automation",
    description:
      "We map your workflows, kill the redundancies, and build systems that execute without manual input.",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Development",
    description:
      "Custom AI agents, integrations, and intelligent tools built around your actual business logic.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "Performance-driven campaigns. SEO, paid media, and conversion systems that compound.",
  },
  {
    number: "04",
    icon: Share2,
    title: "Strategic Social Media",
    description:
      "Platform-specific content strategies that build authority and generate inbound demand.",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  cardRefs.current = [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        {
          autoAlpha: 0,
          y: 60,
        },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            clearProps: "transform",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.3em] text-accent/60">
          WHAT WE DO
        </p>
        <h2 className="mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight text-light md:text-5xl">
          Four pillars. One outcome: operational leverage.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                ref={(element) => {
                  if (element) {
                    cardRefs.current.push(element);
                  }
                }}
                className="group flex min-h-[360px] cursor-pointer flex-col rounded-2xl border border-light/[0.06] bg-light/[0.03] p-8 opacity-0 transition duration-300 ease-wemian will-change-transform hover:-translate-y-1 hover:border-[rgba(230,255,75,0.2)]"
              >
                <span className="font-heading text-6xl font-bold leading-none text-accent/10">
                  {service.number}
                </span>
                <Icon className="mt-4 text-accent" size={28} strokeWidth={1.8} />
                <h3 className="mt-4 text-xl font-bold text-light">
                  {service.title}
                </h3>
                <p className="mt-3 overflow-hidden text-sm leading-relaxed text-light/60 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                  {service.description}
                </p>
                <a
                  href="#services"
                  className="mt-6 text-sm text-accent transition duration-300 ease-wemian hover:underline"
                >
                  Learn more &rarr;
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
