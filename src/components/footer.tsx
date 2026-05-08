import { BriefcaseBusiness, Camera, X } from "lucide-react";

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Process Automation", href: "#services" },
  { label: "AI Development", href: "#services" },
  { label: "Digital Marketing", href: "#services" },
  { label: "Social Media", href: "#services" },
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
            <p className="mt-2 text-sm text-light/50">Digital Optimizations</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-light/50">
              Transforming operations through automation, AI, and strategic
              marketing.
            </p>
          </div>

          <nav aria-label="Company">
            <p className="mb-4 text-sm font-semibold text-light">Company</p>
            {companyLinks.map((link) => (
              <a key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <nav aria-label="Services">
            <p className="mb-4 text-sm font-semibold text-light">Services</p>
            {serviceLinks.map((link) => (
              <a key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <div>
            <p className="mb-4 text-sm font-semibold text-light">Connect</p>
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
            &copy; 2026 Wemian Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-light/45">
            <a
              href="#privacy"
              className="transition duration-300 ease-wemian hover:text-accent"
            >
              Privacy Policy
            </a>
            <span aria-hidden="true">&middot;</span>
            <a
              href="#terms"
              className="transition duration-300 ease-wemian hover:text-accent"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
