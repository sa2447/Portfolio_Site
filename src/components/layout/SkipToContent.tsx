type SkipToContentProps = {
  targetId: string;
};

export function SkipToContent({ targetId }: SkipToContentProps) {
  return (
    <a className="skip-link focus-ring" href={`#${targetId}`}>
      Skip to content
    </a>
  );
}
