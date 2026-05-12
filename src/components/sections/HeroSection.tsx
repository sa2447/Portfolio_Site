import { SectionContainer } from "@/components/layout/SectionContainer";
import { CTAButton } from "@/components/ui/CTAButton";
import type { LinkTarget } from "@/features/portfolio/types";

type HeroSectionProps = {
  id: string;
  headline: string;
  supportingText: string;
  ctas: LinkTarget[];
  visualVariant?: "grid" | "diagram" | "wave";
};

function HeroVisual({ visualVariant = "grid" }: { visualVariant?: "grid" | "diagram" | "wave" }) {
  if (visualVariant === "diagram") {
    return (
      <div className="relative h-64 rounded-2xl border border-white/10 bg-[color:var(--surface-700)] p-5 md:h-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(163,230,53,0.18),transparent_45%)]" />
        <div className="relative flex h-full items-center justify-center">
          <div className="grid w-full grid-cols-3 gap-3">
            <div className="h-12 rounded-md border border-white/20 bg-black/20" />
            <div className="h-12 rounded-md border border-white/20 bg-black/20" />
            <div className="h-12 rounded-md border border-white/20 bg-black/20" />
          </div>
        </div>
      </div>
    );
  }

  if (visualVariant === "wave") {
    return (
      <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--surface-700)] md:h-80">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(163,230,53,0.12),transparent_40%)]" />
        <div className="absolute left-[-20%] top-1/2 h-28 w-[140%] -translate-y-1/2 rounded-full border border-white/20" />
        <div className="absolute left-[-10%] top-1/2 h-20 w-[130%] -translate-y-1/2 rounded-full border border-white/15" />
      </div>
    );
  }

  return (
    <div className="relative h-64 rounded-2xl border border-white/10 bg-[color:var(--surface-700)] p-4 md:h-80 md:p-6">
      <div className="grid h-full grid-cols-8 gap-2 rounded-xl border border-white/10 p-2">
        {Array.from({ length: 48 }).map((_, idx) => (
          <div
            key={idx}
            className="rounded-sm bg-white/5"
            style={{ opacity: idx % 7 === 0 ? 0.55 : 0.22 }}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_80%_20%,rgba(163,230,53,0.18),transparent_40%)]" />
    </div>
  );
}

export function HeroSection({ id, headline, supportingText, ctas, visualVariant }: HeroSectionProps) {
  return (
    <SectionContainer id={id} className="pt-16 md:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">Front-End Developer</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{headline}</h1>
          <p className="mt-5 max-w-2xl text-base text-[color:var(--text-secondary)] md:text-lg">{supportingText}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {ctas.map((cta, index) => (
              <CTAButton
                key={`${cta.label}-${index}`}
                label={cta.label}
                href={cta.href}
                external={cta.external}
                variant={index === 0 ? "primary" : "secondary"}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <HeroVisual visualVariant={visualVariant} />
        </div>
      </div>
    </SectionContainer>
  );
}
