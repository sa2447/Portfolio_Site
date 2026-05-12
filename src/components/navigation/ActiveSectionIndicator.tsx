type ActiveSectionIndicatorProps = {
  active: boolean;
  mode?: "underline" | "dot";
};

export function ActiveSectionIndicator({ active, mode = "underline" }: ActiveSectionIndicatorProps) {
  if (!active) {
    return null;
  }

  if (mode === "dot") {
    return <span aria-hidden className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />;
  }

  return <span aria-hidden className="absolute -bottom-2 left-0 h-0.5 w-full bg-[color:var(--accent)]" />;
}
