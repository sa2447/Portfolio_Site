import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

type PhilosophySectionProps = {
  id: string;
  title: string;
  supportingText: string;
  principles: string[];
};

export function PhilosophySection({ id, title, supportingText, principles }: PhilosophySectionProps) {
  const midpoint = Math.ceil(principles.length / 2);
  const leftPrinciples = principles.slice(0, midpoint);
  const rightPrinciples = principles.slice(midpoint);

  return (
    <SectionContainer id={id} narrow>
      <SectionHeading eyebrow="Philosophy" title={title} subtitle={supportingText} />
      <div className="grid gap-4 md:grid-cols-2">
        <ul className="space-y-3">
          {leftPrinciples.map((principle) => (
            <li key={principle} className="rounded-lg border border-white/10 bg-black/20 p-3 text-sm text-[color:var(--text-secondary)]">
              {principle}
            </li>
          ))}
        </ul>
        <ul className="space-y-3">
          {rightPrinciples.map((principle) => (
            <li key={principle} className="rounded-lg border border-white/10 bg-black/20 p-3 text-sm text-[color:var(--text-secondary)]">
              {principle}
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
