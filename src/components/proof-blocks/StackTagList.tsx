import type { StackTag } from "@/features/portfolio/types";

type StackTagListProps = {
  tags: StackTag[];
};

export function StackTagList({ tags }: StackTagListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag.id} className="rounded-full border border-white/15 px-3 py-1 text-xs text-[color:var(--text-secondary)]">
          {tag.label}
        </li>
      ))}
    </ul>
  );
}
