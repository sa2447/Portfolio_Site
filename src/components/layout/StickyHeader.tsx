import type { LinkTarget } from "@/features/portfolio/types";
import { MobileNavSheet } from "@/components/navigation/MobileNavSheet";
import { NavLinks } from "@/components/navigation/NavLinks";

type StickyHeaderProps = {
  links: LinkTarget[];
  socialLinks: LinkTarget[];
  activeSectionId?: string;
};

export function StickyHeader({ links, socialLinks, activeSectionId }: StickyHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--bg-900)]/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-6 md:h-[68px]">
        <a href="#hero" className="focus-ring shrink-0 text-sm font-semibold tracking-wide text-white">
          Scott Armstrong-Mcintosh
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <NavLinks links={links} activeSectionId={activeSectionId} orientation="row" />
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="focus-ring rounded-md border border-white/15 px-3 py-1.5 text-xs text-[color:var(--text-secondary)] hover:border-[color:var(--accent)] hover:text-white"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <MobileNavSheet links={links} socialLinks={socialLinks} />
      </div>
    </header>
  );
}
