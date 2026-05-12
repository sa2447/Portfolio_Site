import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import type { ExpertiseGroup } from "@/features/portfolio/types";

type ExpertiseSectionProps = {
  id: string;
  title: string;
  groups: ExpertiseGroup[];
};

export function ExpertiseSection({ id, title, groups }: ExpertiseSectionProps) {
  return (
    <SectionContainer id={id}>
      <SectionHeading
        eyebrow="Capabilities"
        title={title}
        subtitle="Focused capabilities grouped by engineering depth, UI systems, and modern web delivery."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <SurfaceCard key={group.id} interactive>
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <ul className="mt-4 space-y-2">
              {group.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-sm text-[color:var(--text-secondary)]">
                  <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </SurfaceCard>
        ))}
      </div>
    </SectionContainer>
  );
}
