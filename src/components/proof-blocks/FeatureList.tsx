import type { FeatureItem } from "@/features/portfolio/types";

type FeatureListProps = {
  items: FeatureItem[];
};

export function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.id} className="flex items-start gap-2 text-sm text-[color:var(--text-secondary)]">
          <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
