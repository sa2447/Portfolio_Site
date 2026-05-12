import type { LinkTarget } from "@/features/portfolio/types";
import { ActiveSectionIndicator } from "./ActiveSectionIndicator";

type NavLinksProps = {
  links: LinkTarget[];
  activeSectionId?: string;
  orientation?: "row" | "column";
};

export function NavLinks({ links, activeSectionId, orientation = "row" }: NavLinksProps) {
  const listClass =
    orientation === "row"
      ? "flex items-center gap-6"
      : "flex flex-col items-start gap-4";

  return (
    <ul className={listClass}>
      {links.map((link) => {
        const sectionId = link.href.startsWith("#") ? link.href.slice(1) : "";
        const active = sectionId !== "" && sectionId === activeSectionId;

        return (
          <li key={link.label} className="relative">
            <a className="focus-ring text-sm text-[color:var(--text-secondary)] hover:text-white" href={link.href}>
              {link.label}
            </a>
            <ActiveSectionIndicator active={active} mode="underline" />
          </li>
        );
      })}
    </ul>
  );
}
