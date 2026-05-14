"use client";

import { BriefcaseBusiness, Camera, X } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: BriefcaseBusiness,
  },
  {
    label: "X",
    href: "https://x.com",
    icon: X,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: Camera,
  },
];

const linkClass =
  "nav-link mb-1 block w-fit text-sm leading-loose text-light/60 transition duration-300 ease-wemian hover:text-accent";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-light/[0.06] bg-dark px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Wemian Labs"
              className="h-12 w-auto sm:h-14 md:h-16"
              loading="lazy"
            />
            <p className="mt-2 text-sm text-light/50">{t.footer.tagline}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-light/50">
              {t.footer.description}
            </p>
          </div>

          <nav aria-label="Company">
            <p className="mb-4 text-sm font-semibold text-light">
              {t.footer.company}
            </p>
            <div className="flex flex-col">
              <a href="#about" className={linkClass}>
                About
              </a>
              <a href="#services" className={linkClass}>
                Services
              </a>
              <a href="#process" className={linkClass}>
                Process
              </a>
              <a href="#contact" className={linkClass}>
                Contact
              </a>
            </div>
          </nav>

          <nav aria-label="Services">
            <p className="mb-4 text-sm font-semibold text-light">
              {t.footer.services}
            </p>
            <div className="flex flex-col">
              <a href="#services" className={linkClass}>
                Process Automation
              </a>
              <a href="#services" className={linkClass}>
                AI Development
              </a>
              <a href="#services" className={linkClass}>
                Digital Marketing
              </a>
              <a href="#services" className={linkClass}>
                Social Media
              </a>
            </div>
          </nav>

          <div>
            <p className="mb-4 text-sm font-semibold text-light">
              {t.footer.connect}
            </p>
            <a
              href="mailto:hello@wemianlabs.com"
              className="text-sm text-accent transition duration-300 ease-wemian hover:underline"
            >
              hello@wemianlabs.com
            </a>
            <div className="mt-4 flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="text-light/30 transition duration-300 ease-wemian hover:text-accent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-light/[0.06] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-light/45">{t.footer.rights}</p>
          <div className="flex items-center gap-2 text-xs text-light/45">
            <a
              href="#privacy"
              className="transition duration-300 ease-wemian hover:text-accent"
            >
              {t.footer.privacy}
            </a>
            <span aria-hidden="true">&middot;</span>
            <a
              href="#terms"
              className="transition duration-300 ease-wemian hover:text-accent"
            >
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
