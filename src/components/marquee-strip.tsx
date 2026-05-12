"use client";

import { useLanguage } from "@/components/language-provider";

type MarqueeGroupProps = {
  hidden?: boolean;
  items: readonly string[];
};

function MarqueeGroup({ hidden = false, items }: MarqueeGroupProps) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? "true" : undefined}
    >
      {items.map((item) => (
        <li key={item} className="flex shrink-0 items-center">
          <span className="whitespace-nowrap text-sm uppercase tracking-[0.2em] text-light/40">
            {item}
          </span>
          <span
            className="mx-8 h-1.5 w-1.5 rounded-full bg-accent"
            aria-hidden="true"
          />
        </li>
      ))}
    </ul>
  );
}

export function MarqueeStrip() {
  const { t } = useLanguage();

  return (
    <section className="marquee-strip w-full overflow-hidden border-y border-[rgba(244,244,244,0.08)] py-6">
      <div className="marquee-track flex w-max">
        <MarqueeGroup items={t.marquee} />
        <MarqueeGroup items={t.marquee} hidden />
      </div>
    </section>
  );
}
