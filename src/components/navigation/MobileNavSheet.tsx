import type { LinkTarget } from "@/features/portfolio/types";

type MobileNavSheetProps = {
  links: LinkTarget[];
  socialLinks: LinkTarget[];
};

export function MobileNavSheet({ links, socialLinks }: MobileNavSheetProps) {
  return (
    <details className="relative md:hidden">
      <summary className="focus-ring cursor-pointer list-none rounded-md border border-white/15 px-3 py-2 text-sm text-white">
        Menu
      </summary>
      <div className="absolute right-0 mt-3 w-64 rounded-xl border border-white/15 bg-[color:var(--surface-700)] p-4 shadow-xl">
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a className="focus-ring text-sm text-[color:var(--text-secondary)] hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 border-t border-white/10 pt-4">
          <ul className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="focus-ring rounded-md border border-white/15 px-2 py-1 text-xs text-[color:var(--text-secondary)] hover:text-white"
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  );
}
