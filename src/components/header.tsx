const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
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
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-dark transition duration-300 ease-wemian hover:bg-light active:scale-[0.97] active:duration-100 md:px-5"
        >
          Start
        </a>
      </div>
    </header>
  );
}
