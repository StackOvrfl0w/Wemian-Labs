"use client";

import { Languages } from "lucide-react";
import { useLanguage, type Language } from "@/components/language-provider";

const navLinks = [
  { key: "services", href: "#services" },
  { key: "process", href: "#process" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
] as const;

const languages: { label: string; value: Language }[] = [
  { label: "EN", value: "en" },
  { label: "ES", value: "es" },
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-light/[0.06] bg-dark/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
        <a
          href="#top"
          className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-light transition duration-300 ease-wemian hover:text-accent"
        >
          Wemian Labs
        </a>

        <nav
          aria-label={t.header.aria}
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {t.header.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-1 rounded-full border border-light/[0.12] bg-light/[0.03] p-1"
            aria-label={t.header.languageLabel}
            role="group"
          >
            <Languages
              aria-hidden="true"
              className="ml-2 hidden text-light/50 sm:block"
              size={14}
            />
            {languages.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setLanguage(item.value)}
                aria-pressed={language === item.value}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] transition duration-300 ease-wemian active:scale-[0.97] active:duration-100 ${
                  language === item.value
                    ? "bg-accent text-dark"
                    : "text-light/50 hover:text-accent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-dark transition duration-300 ease-wemian hover:bg-light active:scale-[0.97] active:duration-100 sm:inline-flex md:px-5"
          >
            {t.header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
