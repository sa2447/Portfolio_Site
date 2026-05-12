import { SkipToContent } from "./SkipToContent";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="main-content bg-transparent text-[color:var(--text-primary)]">
      <SkipToContent targetId="main-content" />
      <main id="main-content">{children}</main>
    </div>
  );
}
