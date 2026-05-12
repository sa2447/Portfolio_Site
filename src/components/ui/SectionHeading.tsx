type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8 md:mb-10">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">{eyebrow}</p>
      ) : null}
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-[color:var(--text-secondary)]">{subtitle}</p> : null}
    </div>
  );
}
