const marqueeItems = [
  "Process Automation",
  "AI-Powered Workflows",
  "Strategic Marketing",
  "Digital Transformation",
  "Social Media Systems",
  "Lead Generation Engines",
];

type MarqueeGroupProps = {
  hidden?: boolean;
};

function MarqueeGroup({ hidden = false }: MarqueeGroupProps) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? "true" : undefined}
    >
      {marqueeItems.map((item) => (
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
  return (
    <section className="marquee-strip w-full overflow-hidden border-y border-[rgba(244,244,244,0.08)] py-6">
      <div className="marquee-track flex w-max">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </section>
  );
}
