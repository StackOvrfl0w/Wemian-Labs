"use client";

import { BriefcaseBusiness, Camera, X } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const companyLinks = [
  { href: "#about" },
  { href: "#services" },
  { href: "#process" },
  { href: "#contact" },
];

const serviceLinks = [
  { href: "#services" },
  { href: "#services" },
  { href: "#services" },
  { href: "#services" },
];

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
  "nav-link mb-1 w-fit text-sm leading-loose text-light/60 transition duration-300 ease-wemian hover:text-accent";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-light/[0.06] bg-dark px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Wemian Labs"
              className="h-8 w-auto"
              width={176}
              height={32}
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
            {companyLinks.map((link, index) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {t.footer.companyLinks[index]}
              </a>
            ))}
          </nav>

          <nav aria-label="Services">
            <p className="mb-4 text-sm font-semibold text-light">
              {t.footer.services}
            </p>
            {serviceLinks.map((link, index) => (
              <a key={`${link.href}-${index}`} href={link.href} className={linkClass}>
                {t.footer.serviceLinks[index]}
              </a>
            ))}
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
          <p className="text-xs text-light/45">
            {t.footer.rights}
          </p>
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
