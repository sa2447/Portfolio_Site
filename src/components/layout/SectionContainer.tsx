type SectionContainerProps = {
  id?: string;
  ariaLabel?: string;
  narrow?: boolean;
  story?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function SectionContainer({
  id,
  ariaLabel,
  narrow = false,
  story = true,
  className = "",
  children
}: SectionContainerProps) {
  const maxWidthClass = narrow ? "max-w-4xl" : "max-w-[1200px]";
  const storyClass = story ? "story-section" : "";

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      data-story-section={story ? "true" : undefined}
      className={`section-space ${storyClass} ${className}`.trim()}
    >
      <div className={`container ${maxWidthClass}`}>{children}</div>
    </section>
  );
}
