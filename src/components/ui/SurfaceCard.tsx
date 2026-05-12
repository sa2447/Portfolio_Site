type SurfaceCardProps = {
  children: React.ReactNode;
  interactive?: boolean;
  className?: string;
};

export function SurfaceCard({ children, interactive = false, className = "" }: SurfaceCardProps) {
  const interactiveClass = interactive
    ? "transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
    : "";

  return (
    <div
      className={`rounded-xl border border-white/10 bg-[color:var(--surface-700)]/70 p-5 md:p-6 ${interactiveClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
