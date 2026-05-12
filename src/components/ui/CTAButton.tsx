type CTAButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export function CTAButton({ label, href, variant = "primary", external }: CTAButtonProps) {
  const baseClass =
    "focus-ring inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition";

  const variantClass =
    variant === "primary"
      ? "bg-[color:var(--accent)] text-[#101315] hover:brightness-95"
      : variant === "secondary"
        ? "border border-white/20 text-white hover:border-[color:var(--accent)]"
        : "text-[color:var(--text-secondary)] hover:text-white";

  return (
    <a
      className={`${baseClass} ${variantClass}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {label}
    </a>
  );
}
